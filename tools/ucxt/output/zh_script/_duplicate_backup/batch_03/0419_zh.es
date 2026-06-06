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
	message("你對跟那個騙子 Chuckles 交談感到很謹慎，但還是決定這麼做。");
	say();
	gflags[0x009A] = true;
	UI_add_answer(["姓名", "職業", "告辭"]);
	goto labelFunc0419_0048;
labelFunc0419_0034:
	message("「如果你玩『遊戲 (The Game) 』的話我就會說話，朋友，」 Chuckles 說。");
	say();
	UI_add_answer(["職業", "告辭", "遊戲"]);
labelFunc0419_0048:
	converse attend labelFunc0419_025B;
	case "姓名" attend labelFunc0419_0065:
	message("「我不能說我的名字，以免我打破了『遊戲』的規則！」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("遊戲");
labelFunc0419_0065:
	case "職業" attend labelFunc0419_0078:
	message("「我過去是，現在是，將來也會是宮廷……小丑！如果我願意的話可以給你一個線索，但現在我的工作是玩『遊戲』。」");
	say();
	UI_add_answer("遊戲");
labelFunc0419_0078:
	case "線索" attend labelFunc0419_00AF:
	if (!(!gflags[0x006F])) goto labelFunc0419_00A4;
	message("「你確定你會玩『遊戲』嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0419_009D;
	Func0862();
	goto labelFunc0419_00A1;
labelFunc0419_009D:
	message("「你必須玩『遊戲』才能得到線索！」");
	say();
labelFunc0419_00A1:
	goto labelFunc0419_00AF;
labelFunc0419_00A4:
	message("「哎呀。我確實給了你一個！」");
	say();
	UI_remove_answer("線索");
labelFunc0419_00AF:
	case "遊戲" attend labelFunc0419_00DD:
	message("「如果你想跟我說話，你就必須玩『遊戲』。」");
	say();
	UI_clear_answers();
	UI_add_answer(["我不懂", "規則是什麼？", "我知道『遊戲』", "解釋一下"]);
	UI_remove_answer("遊戲");
	gflags[0x0073] = true;
labelFunc0419_00DD:
	case "我不懂" attend labelFunc0419_00EF:
	Func0861();
	UI_remove_answer("我不懂");
labelFunc0419_00EF:
	case "解釋一下" attend labelFunc0419_0101:
	Func0861();
	UI_remove_answer("解釋一下");
labelFunc0419_0101:
	case "規則是什麼？" attend labelFunc0419_0114:
	message("「你只要學會『遊戲』，然後跳進來玩就對了！」");
	say();
	UI_remove_answer("規則是什麼？");
labelFunc0419_0114:
	case "我知道『遊戲』" attend labelFunc0419_0168:
	message("「那就玩啊！」");
	say();
	UI_remove_answer("我知道『遊戲』");
	UI_clear_answers();
	var0001 = Func090B(["我們來聊什麼呢？", "我們談論關於什麼？", "我們說些什麼呢？"]);
	if (!(var0001 == "我們說些什麼呢？")) goto labelFunc0419_0165;
	message("「說你想說的。」");
	say();
	UI_clear_answers();
	UI_add_answer(["天氣", "Lord British", "你", "笑話"]);
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
	message("「你為什麼想談論我？你難道想不到比這個更有趣的話題嗎？」");
	say();
	UI_remove_answer("你");
	UI_clear_answers();
	UI_add_answer(["女人", "女孩", "食物", "晚餐"]);
labelFunc0419_01B6:
	case "笑話" attend labelFunc0419_01C9:
	message("「我不認為我在玩『遊戲』的時候還能講出好笑的笑話！這太難了！嗯。啊！我想到一個了！母雞為什麼要過馬路？為了到她不在的那一邊去！」");
	say();
	UI_remove_answer("笑話");
labelFunc0419_01C9:
	case "女人" attend labelFunc0419_01DB:
	Func0861();
	UI_remove_answer("女人");
labelFunc0419_01DB:
	case "女孩" attend labelFunc0419_01EE:
	message("「在我們美麗的小鎮上有很多好女孩！還是『我們好小鎮上的美麗女孩』？」 Chuckles 聳聳肩。");
	say();
	UI_remove_answer("女孩");
labelFunc0419_01EE:
	case "食物" attend labelFunc0419_023B:
	message("「酒吧裡有美食！至於我，我喜歡在我的房間地板上吃！」");
	say();
	UI_clear_answers();
	var0002 = Func090B(["酒館在哪裡？", "藍野豬酒館在哪裡？", "酒吧有賣羊肉嗎？", "有酒嗎？"]);
	if (!(var0002 == "藍野豬酒館在哪裡？")) goto labelFunc0419_0238;
	message("「你可以在那裡飽餐一頓！但我可以給你一個好『線索』！」");
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
	message("「再會，我的朋友！別忘……我是說，別輸了『遊戲』！」*");
	say();
	goto labelFunc0419_026D;
labelFunc0419_0269:
	message("「暫時再見！」*");
	say();
labelFunc0419_026D:
	if (!(event == 0x0000)) goto labelFunc0419_02E4;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE7));
	if (!(var0003 == 0x0004)) goto labelFunc0419_02E4;
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0004 == 0x0001)) goto labelFunc0419_02AA;
	var0005 = "@嗨！@";
labelFunc0419_02AA:
	if (!(var0004 == 0x0002)) goto labelFunc0419_02BA;
	var0005 = "@想玩『遊戲』嗎？@";
labelFunc0419_02BA:
	if (!(var0004 == 0x0003)) goto labelFunc0419_02CA;
	var0005 = "@我們來玩『遊戲』吧！@";
labelFunc0419_02CA:
	if (!(var0004 == 0x0004)) goto labelFunc0419_02DA;
	var0005 = "我們跳支舞好嗎？@";
labelFunc0419_02DA:
	UI_item_say(0xFFE7, var0005);
labelFunc0419_02E4:
	return;
}


