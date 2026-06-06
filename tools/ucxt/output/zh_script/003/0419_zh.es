#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0862 0x862 ();
extern void Func0861 0x861 ();
extern var Func090B 0x90B (var var0000);

void Func0419 object#(0x419) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0419_026D;
	UI_show_npc_face(0xFFE7, 0x0000);
	if (!(!gflags[0x009A])) goto labelFunc0419_0034;
	message("你對與那個愛惡作劇的 Chuckles 交談感到警惕，但還是決定這麼做。");
	say();
	gflags[0x009A] = true;
	UI_add_answer(["姓名", "職業", "告辭"]);
	goto labelFunc0419_0048;
labelFunc0419_0034:
	message("「如果你玩遊戲（The Game），我就會開口，朋友，」 Chuckles 說。");
	say();
	UI_add_answer(["職業", "告辭", "遊戲"]);
labelFunc0419_0048:
	converse attend labelFunc0419_025B;
	case "姓名" attend labelFunc0419_0065:
	message("「我不能說出我的名字，以免打破了遊戲規則！」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("遊戲");
labelFunc0419_0065:
	case "職業" attend labelFunc0419_0078:
	message("「我過去是，現在是，將來也會是宮廷...小丑！如果我願意，我可以給你一個線索，但現在我的工作是玩遊戲。」");
	say();
	UI_add_answer("遊戲");
labelFunc0419_0078:
	case "線索" attend labelFunc0419_00AF:
	if (!(!gflags[0x006F])) goto labelFunc0419_00A4;
	message("「你確定你會玩遊戲嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0419_009D;
	Func0862();
	goto labelFunc0419_00A1;
labelFunc0419_009D:
	message("「你必須玩遊戲才能得到線索！」");
	say();
labelFunc0419_00A1:
	goto labelFunc0419_00AF;
labelFunc0419_00A4:
	message("「哎呀。我確實給了你一個！」");
	say();
	UI_remove_answer("線索");
labelFunc0419_00AF:
	case "遊戲" attend labelFunc0419_00DD:
	message("「如果你想和我說話，就必須玩遊戲。」");
	say();
	UI_clear_answers();
	UI_add_answer(["我不明白", "規則是什麼？", "我知道遊戲", "解釋一下"]);
	UI_remove_answer("遊戲");
	gflags[0x0073] = true;
labelFunc0419_00DD:
	case "我不明白" attend labelFunc0419_00EF:
	Func0861();
	UI_remove_answer("我不明白");
labelFunc0419_00EF:
	case "解釋一下" attend labelFunc0419_0101:
	Func0861();
	UI_remove_answer("解釋一下");
labelFunc0419_0101:
	case "規則是什麼？" attend labelFunc0419_0114:
	message("「你只需要學會遊戲規則，然後直接加入玩！」");
	say();
	UI_remove_answer("規則是什麼？");
labelFunc0419_0114:
	case "我知道遊戲" attend labelFunc0419_0168:
	message("「那就玩吧！」");
	say();
	UI_remove_answer("我知道遊戲");
	UI_clear_answers();
	var0001 = Func090B(["我們來聊些什麼呢？", "我們要談些什麼？", "我們要說些什麼？"]);
	if (!(var0001 == "我們要說些什麼？")) goto labelFunc0419_0165;
	message("「關於你喜歡什麼。」");
	say();
	UI_clear_answers();
	UI_add_answer(["天氣", "Lord British", "你", "一個笑話"]);
	goto labelFunc0419_0168;
labelFunc0419_0165:
	Func0861();
labelFunc0419_0168:
	case "天氣" attend labelFunc0419_017A:
	Func0861();
	UI_remove_answer("天氣");
labelFunc0419_017A:
	case "Lord British" attend labelFunc0419_018C:
	Func0861();
	UI_remove_answer("Lord British");
labelFunc0419_018C:
	case "你" attend labelFunc0419_01B6:
	message("「你為什麼想談論我？你難道想不到更有趣的話題嗎？」");
	say();
	UI_remove_answer("你");
	UI_clear_answers();
	UI_add_answer(["女人", "女孩們", "食物", "晚餐"]);
labelFunc0419_01B6:
	case "一個笑話" attend labelFunc0419_01C9:
	message("「我不認為我在玩遊戲的同時還能講個好笑話！這太難了！嗯。啊！我想到一個！母雞為什麼要過馬路？為了走到她不在的那一邊！」");
	say();
	UI_remove_answer("一個笑話");
labelFunc0419_01C9:
	case "女人" attend labelFunc0419_01DB:
	Func0861();
	UI_remove_answer("女人");
labelFunc0419_01DB:
	case "女孩們" attend labelFunc0419_01EE:
	message("「我們美麗的城鎮裡有很多好女孩！還是『我們好城鎮裡的美麗女孩』？」 Chuckles 聳了聳肩。");
	say();
	UI_remove_answer("女孩們");
labelFunc0419_01EE:
	case "食物" attend labelFunc0419_023B:
	message("「酒館裡有美味的食物！至於我，我喜歡在我的房間地板上吃！」");
	say();
	UI_clear_answers();
	var0002 = Func090B(["酒館在哪裡？", "Blue Boar 在哪裡？", "酒館有供應羊肉嗎？", "有酒嗎？"]);
	if (!(var0002 == "Blue Boar 在哪裡？")) goto labelFunc0419_0238;
	message("「你在那裡可以吃到一頓好飯！但我可以給你一個很棒的 -線索- ！」");
	say();
	UI_clear_answers();
	UI_add_answer(["線索", "職業", "告辭"]);
	goto labelFunc0419_023B;
labelFunc0419_0238:
	Func0861();
labelFunc0419_023B:
	case "晚餐" attend labelFunc0419_024D:
	Func0861();
	UI_remove_answer("晚餐");
labelFunc0419_024D:
	case "告辭" attend labelFunc0419_0258:
	goto labelFunc0419_025B;
labelFunc0419_0258:
	goto labelFunc0419_0048;
labelFunc0419_025B:
	endconv;
	if (!gflags[0x0073]) goto labelFunc0419_0269;
	message("「再會了，我的朋友！不要忘...我是說，不要忘記怎麼玩遊戲！」*");
	say();
	goto labelFunc0419_026D;
labelFunc0419_0269:
	message("「先告辭了！」*");
	say();
labelFunc0419_026D:
	if (!(event == 0x0000)) goto labelFunc0419_02E4;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE7));
	if (!(var0003 == 0x0004)) goto labelFunc0419_02E4;
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0004 == 0x0001)) goto labelFunc0419_02AA;
	var0005 = "@你好！@";
labelFunc0419_02AA:
	if (!(var0004 == 0x0002)) goto labelFunc0419_02BA;
	var0005 = "@你想玩遊戲嗎？@";
labelFunc0419_02BA:
	if (!(var0004 == 0x0003)) goto labelFunc0419_02CA;
	var0005 = "@讓我們玩遊戲吧！@";
labelFunc0419_02CA:
	if (!(var0004 == 0x0004)) goto labelFunc0419_02DA;
	var0005 = "@要跳舞嗎？@";
labelFunc0419_02DA:
	UI_item_say(0xFFE7, var0005);
labelFunc0419_02E4:
	return;
}


