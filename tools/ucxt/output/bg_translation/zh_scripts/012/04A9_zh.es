#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04A9 object#(0x4A9) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04A9_019A;
	UI_show_npc_face(0xFF57, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0222])) goto labelFunc04A9_0041;
	message("「你看到一個單純的農婦。她的臉上刻滿了悲傷。」");
	say();
	gflags[0x0222] = true;
	goto labelFunc04A9_004B;
labelFunc04A9_0041:
	message("「你好，");
	message(var0000);
	message("。」Alina 說。");
	say();
labelFunc04A9_004B:
	converse attend labelFunc04A9_018F;
	case "姓名" attend labelFunc04A9_0061:
	message("「我是 Alina。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A9_0061:
	case "職業" attend labelFunc04A9_0080:
	message("「我...沒有工作，");
	message(var0000);
	message("。除了作為我孩子的母親，我正在等我丈夫 Weston 從不列顛城回來。」");
	say();
	UI_add_answer(["孩子", "Weston"]);
labelFunc04A9_0080:
	case "孩子" attend labelFunc04A9_0093:
	message("「Cassie 是我的女兒。還只是個小嬰兒，她是我唯一的快樂。」");
	say();
	UI_remove_answer("孩子");
labelFunc04A9_0093:
	case "Weston" attend labelFunc04A9_00C0:
	if (!gflags[0x00CC]) goto labelFunc04A9_00AE;
	message("「好消息，");
	message(var0000);
	message("！我丈夫被不列顛王赦免了。他甚至為 Weston 提供了短期的工作，這樣他就能口袋裡帶著足夠養活我們一段時間的錢回到我身邊！~~好消息，不是嗎？」");
	say();
	goto labelFunc04A9_00B9;
labelFunc04A9_00AE:
	message("「我丈夫因為偷了皇家果園的水果被關在不列顛城的監獄裡。」");
	say();
	UI_add_answer("偷竊");
labelFunc04A9_00B9:
	UI_remove_answer("Weston");
labelFunc04A9_00C0:
	case "偷竊" attend labelFunc04A9_00E0:
	message("「我丈夫不是小偷，");
	message(var0000);
	message("。他去那裡是為了給孩子和我買水果，這樣我們才有足夠的食物吃。他被冤枉了，我肯定！」");
	say();
	UI_add_answer("吃");
	UI_remove_answer("偷竊");
labelFunc04A9_00E0:
	case "吃" attend labelFunc04A9_0100:
	message("「我們非常窮。我的寶寶和我目前住在友誼會的庇護所裡，因為我們無處可去。」");
	say();
	UI_add_answer(["友誼會", "庇護所"]);
	UI_remove_answer("吃");
labelFunc04A9_0100:
	case "友誼會" attend labelFunc04A9_012E:
	if (!(!var0001)) goto labelFunc04A9_0123;
	message("「是指控我丈夫的一名友誼會成員。現在他們希望我加入他們。」");
	say();
	UI_add_answer(["加入他們", "指控"]);
	goto labelFunc04A9_0127;
labelFunc04A9_0123:
	message("「我丈夫是無辜的，我知道！他原本是想買水果的。為什麼我必須加入你們的社團，你們才肯相信我的話？」");
	say();
labelFunc04A9_0127:
	UI_remove_answer("友誼會");
labelFunc04A9_012E:
	case "庇護所" attend labelFunc04A9_0148:
	message("「我們很幸運能靠著友誼會的恩典生活，但我不知道我們被允許住多久。」");
	say();
	UI_add_answer("允許");
	UI_remove_answer("庇護所");
labelFunc04A9_0148:
	case "加入他們" attend labelFunc04A9_015B:
	message("「我覺得如果我加入友誼會，就是在背叛我的丈夫。我怎麼能成為那些誣告他的人之一？然而，如果我不加入，他們就不會允許我的孩子和我住在這裡。」~~她抽泣著，雙手摀住臉。「這太不公平了。我必須在挨餓和背叛之間做出選擇。要是 Weston 在這裡就好了。我不知道該怎麼辦！」");
	say();
	UI_remove_answer("加入他們");
labelFunc04A9_015B:
	case "指控" attend labelFunc04A9_016E:
	message("「他們說如果我加入，他們會試圖釋放我丈夫。但是他們不公正地指控了他。我無法信任他們，但我擔心我可能別無選擇。」");
	say();
	UI_remove_answer("指控");
labelFunc04A9_016E:
	case "允許" attend labelFunc04A9_0181:
	message("「他們告訴我，庇護所只對友誼會成員開放。除非我盡快加入，否則我會被要求離開。而且我無處可去。」");
	say();
	UI_remove_answer("允許");
labelFunc04A9_0181:
	case "告辭" attend labelFunc04A9_018C:
	goto labelFunc04A9_018F;
labelFunc04A9_018C:
	goto labelFunc04A9_004B;
labelFunc04A9_018F:
	endconv;
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc04A9_019A:
	if (!(event == 0x0000)) goto labelFunc04A9_01A8;
	Func092E(0xFF57);
labelFunc04A9_01A8:
	return;
}


