#game "blackgate"
/*
 * [翻譯註解] 關於 Chuckles (查克斯) 的「遊戲」對話在地化策略：
 * 
 * 原版英文的規則是「Words of one syllable」（只能說單音節的字）。
 * 由於中文每個字皆為單音節，若直譯會讓解謎失去意義。
 * 因此，在中文版中採用了「創譯 (Transcreation)」手法，
 * 將規則改為「四字遊戲」（每次開口只能說剛好四個字）。
 *
 * 玩家的正確選項皆為四個字。為了還原英文版中小丑也嚴格遵守規則的巧思，
 * 小丑進入遊戲後的所有台詞，也全部改寫成了「四言絕句」。
 * 若後續需修改對話字串，請務必維持此「四字限制」以保持謎題的一致性。
 */
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
	message("「如果你跟我玩『四字遊戲』，我就會開口，朋友～記住，每次開口只能剛好說『四個字』！」 Chuckles 說。");
	say();
	UI_add_answer(["職業", "告辭", "遊戲"]);
labelFunc0419_0048:
	converse attend labelFunc0419_025B;
	case "姓名" attend labelFunc0419_0065:
	message("「我不能說出我的名字，以免打破了四字遊戲的規則！」");
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
	message("「你確定你會玩四字遊戲嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0419_009D;
	Func0862();
	goto labelFunc0419_00A1;
labelFunc0419_009D:
	message("「你必須玩四字遊戲才能得到線索！」");
	say();
labelFunc0419_00A1:
	goto labelFunc0419_00AF;
labelFunc0419_00A4:
	message("「哎呀。我確實給了你一個！」");
	say();
	UI_remove_answer("線索");
labelFunc0419_00AF:
	case "遊戲" attend labelFunc0419_00DD:
	message("「如果你想和我說話，就必須玩四字遊戲。」");
	say();
	UI_clear_answers();
	UI_add_answer(["我不明白你的意思", "遊戲的規則是什麼", "我懂遊戲", "請你跟我解釋一下"]);
	UI_remove_answer("遊戲");
	gflags[0x0073] = true;
labelFunc0419_00DD:
	case "我不明白你的意思" attend labelFunc0419_00EF:
	Func0861();
	UI_remove_answer("我不明白你的意思");
labelFunc0419_00EF:
	case "請你跟我解釋一下" attend labelFunc0419_0101:
	Func0861();
	UI_remove_answer("請你跟我解釋一下");
labelFunc0419_0101:
	case "遊戲的規則是什麼" attend labelFunc0419_0114:
	message("「你只需要學會四字遊戲的規則，然後直接加入玩！」");
	say();
	UI_remove_answer("遊戲的規則是什麼");
labelFunc0419_0114:
	case "我懂遊戲" attend labelFunc0419_0168:
	message("「那就玩吧！」");
	say();
	UI_remove_answer("我懂遊戲");
	UI_clear_answers();
	var0001 = Func090B(["我們來聊些什麼呢", "我們要談些什麼話題", "要聊什麼"]);
	if (!(var0001 == "要聊什麼")) goto labelFunc0419_0165;
	message("「你喜歡啥。」");
	say();
	UI_clear_answers();
	UI_add_answer(["今天的天氣", "偉大的不列顛王", "聊聊你吧", "說個笑話"]);
	goto labelFunc0419_0168;
labelFunc0419_0165:
	Func0861();
labelFunc0419_0168:
	case "今天的天氣" attend labelFunc0419_017A:
	Func0861();
	UI_remove_answer("今天的天氣");
labelFunc0419_017A:
	case "偉大的不列顛王" attend labelFunc0419_018C:
	Func0861();
	UI_remove_answer("偉大的不列顛王");
labelFunc0419_018C:
	case "聊聊你吧" attend labelFunc0419_01B6:
	message("「為何談我？想不到嗎？更有趣的？其他話題？」");
	say();
	UI_remove_answer("聊聊你吧");
	UI_clear_answers();
	UI_add_answer(["成熟的女人", "年輕女孩", "當地美食", "美味的晚餐"]);
labelFunc0419_01B6:
	case "說個笑話" attend labelFunc0419_01C9:
	message("「這太難了！邊玩遊戲，邊講笑話？實在太難！我想到了！母雞為何，要過馬路？為了走到，另外一邊！」");
	say();
	UI_remove_answer("說個笑話");
labelFunc0419_01C9:
	case "成熟的女人" attend labelFunc0419_01DB:
	Func0861();
	UI_remove_answer("成熟的女人");
labelFunc0419_01DB:
	case "年輕女孩" attend labelFunc0419_01EE:
	message("「美麗城鎮，很多女孩！還是說成，女孩很多，美麗城鎮？」 Chuckles 聳了聳肩。");
	say();
	UI_remove_answer("年輕女孩");
labelFunc0419_01EE:
	case "當地美食" attend labelFunc0419_023B:
	message("「酒館食物，非常美味！至於我呢，我喜歡在，房間地板，吃我的飯！」");
	say();
	UI_clear_answers();
	var0002 = Func090B(["當地的酒館在哪裡", "藍豬客棧", "酒館有供應羊肉嗎", "這裡有酒可以喝嗎"]);
	if (!(var0002 == "藍豬客棧")) goto labelFunc0419_0238;
	message("「那邊可以，吃一頓飯！但我可以，給你一個，很棒線索！」");
	say();
	UI_clear_answers();
	UI_add_answer(["線索", "職業", "告辭"]);
	goto labelFunc0419_023B;
labelFunc0419_0238:
	Func0861();
labelFunc0419_023B:
	case "美味的晚餐" attend labelFunc0419_024D:
	Func0861();
	UI_remove_answer("美味的晚餐");
labelFunc0419_024D:
	case "告辭" attend labelFunc0419_0258:
	goto labelFunc0419_025B;
labelFunc0419_0258:
	goto labelFunc0419_0048;
labelFunc0419_025B:
	endconv;
	if (!gflags[0x0073]) goto labelFunc0419_0269;
	message("「再會了我的朋友！千萬不要忘記……我是說，別忘遊戲！」*");
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
	var0005 = "@你想玩四字遊戲嗎？@";
labelFunc0419_02BA:
	if (!(var0004 == 0x0003)) goto labelFunc0419_02CA;
	var0005 = "@讓我們玩四字遊戲吧！@";
labelFunc0419_02CA:
	if (!(var0004 == 0x0004)) goto labelFunc0419_02DA;
	var0005 = "@要跳舞嗎？@";
labelFunc0419_02DA:
	UI_item_say(0xFFE7, var0005);
labelFunc0419_02E4:
	return;
}


