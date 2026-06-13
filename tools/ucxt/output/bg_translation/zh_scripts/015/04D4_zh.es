#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04D4 object#(0x4D4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc04D4_02F6;
	UI_show_npc_face(0xFF2C, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = UI_is_dead(UI_get_npc_object(0xFF35));
	var0004 = "聖者";
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!(gflags[0x027E] && (!gflags[0x0285]))) goto labelFunc04D4_005B;
	UI_add_answer("中午的 Catherine");
labelFunc04D4_005B:
	if (!gflags[0x0286]) goto labelFunc04D4_0067;
	var0005 = var0000;
labelFunc04D4_0067:
	if (!gflags[0x0287]) goto labelFunc04D4_0073;
	var0005 = var0001;
labelFunc04D4_0073:
	if (!(!gflags[0x0291])) goto labelFunc04D4_00D6;
	message("你看到的這位主婦臉上帶著擔憂的表情。~~「日安，");
	message(var0001);
	message("。我是 Yvella 。」她屈膝行禮。「我能知道你的名字嗎？」");
	say();
	var0006 = Func090B([var0000, var0004]);
	if (!(var0006 == var0000)) goto labelFunc04D4_00B1;
	message("「很高興認識你，");
	message(var0000);
	message("。」");
	say();
	gflags[0x0286] = true;
	var0005 = var0000;
labelFunc04D4_00B1:
	if (!(var0006 == var0004)) goto labelFunc04D4_00CF;
	message("「好了，好了，");
	message(var0001);
	message("，你不應該這樣撒謊。」");
	say();
	gflags[0x0287] = true;
	var0005 = var0001;
labelFunc04D4_00CF:
	gflags[0x0291] = true;
	goto labelFunc04D4_00E0;
labelFunc04D4_00D6:
	message("「日安，");
	message(var0005);
	message("。」");
	say();
labelFunc04D4_00E0:
	converse attend labelFunc04D4_02EB;
	case "姓名" attend labelFunc04D4_00FC:
	message("「我是 Yvella ，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D4_00FC:
	case "職業" attend labelFunc04D4_011D:
	message("「在 Cador 工作的時候，我照顧我的女兒 Catherine 。」");
	say();
	if (!(!var0002)) goto labelFunc04D4_0116;
	UI_add_answer("Cador");
labelFunc04D4_0116:
	UI_add_answer("Catherine");
labelFunc04D4_011D:
	case "友誼會" attend labelFunc04D4_013E:
	message("「你沒聽過友誼會嗎？它是個很棒的組織。他們舉辦遊行和節慶，甚至為全 Britannia 的無家可歸者建造了庇護所。我的丈夫一段時間前得知了他們，從那之後我們就一直是快樂的成員。」");
	say();
	if (!(!var0002)) goto labelFunc04D4_0137;
	UI_add_answer("丈夫");
labelFunc04D4_0137:
	UI_remove_answer("友誼會");
labelFunc04D4_013E:
	case "Cador", "丈夫" attend labelFunc04D4_0196:
	if (!var0003) goto labelFunc04D4_0156;
	message("「Cador 是我的丈夫。他是這裡 Vesper 的 Britannia 礦業公司的監督。我不敢相信他已經走了，」她啜泣著。~~「我一次又一次地告訴他，酒館不是個消磨夜晚的好地方。而現在，他死了，留下我和 Catherine 沒有丈夫也沒有父親！」");
	say();
	goto labelFunc04D4_017E;
labelFunc04D4_0156:
	message("「Cador 是我的丈夫。他是這裡 Vesper 的 Britannia 礦業公司的監督。」");
	say();
	var0007 = UI_part_of_day();
	if (!((var0007 == 0x0006) || (var0007 == 0x0007))) goto labelFunc04D4_017E;
	message("「這個時間他通常在酒館。我真的希望他不要每晚都和那個……那個……女人去那裡！」");
	say();
	UI_add_answer("女人");
labelFunc04D4_017E:
	UI_remove_answer(["Cador", "丈夫"]);
	UI_add_answer("Vesper");
	var0002 = true;
labelFunc04D4_0196:
	case "女人" attend labelFunc04D4_01A9:
	message("「她的名字是 Mara 。她是一位礦工同僚。她人很好，但也非常美麗。我不喜歡我的丈夫花那麼多時間和她在一起。」");
	say();
	UI_remove_answer("女人");
labelFunc04D4_01A9:
	case "Vesper" attend labelFunc04D4_01C9:
	message("「嗯，如果沒有那些……那些……石像鬼，這會是個可愛的城鎮。他們是令人作嘔的生物。我認為 Auston 應該把他們趕出城鎮。」");
	say();
	UI_add_answer(["Auston", "石像鬼"]);
	UI_remove_answer("Vesper");
labelFunc04D4_01C9:
	case "Auston" attend labelFunc04D4_0200:
	message("「他是我們的鎮長。 Eldroth 建議我們選他，所以我們當然選了。然而，我們私下說，如果 Auston 不趕快做點什麼，我認為我們應該換個新人。事實上，你應該競選鎮長，");
	message(var0001);
	message("。你覺得如何？你想競選鎮長嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04D4_01EE;
	message("「我同意，你應該考慮一下。」");
	say();
	goto labelFunc04D4_01F2;
labelFunc04D4_01EE:
	message("「太可惜了。我相信你會非常適合這個職位。」");
	say();
labelFunc04D4_01F2:
	UI_add_answer("Eldroth");
	UI_remove_answer("Auston");
labelFunc04D4_0200:
	case "Eldroth" attend labelFunc04D4_0213:
	message("「他是我們的城鎮顧問。 Eldroth 是個非常有智慧的人。他也賣物資。」");
	say();
	UI_remove_answer("Eldroth");
labelFunc04D4_0213:
	case "石像鬼" attend labelFunc04D4_0244:
	message("「絕對可悲的野獸。謝天謝地，他們大多數人都留在綠洲的他們那一側。我不知道 Cador 怎麼受得了和他們一起工作。嗯，對他來說是這樣。那裡現在只有一個還在工作。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x031D, 0x0002, 0xFE99, true);
	if (!var0009) goto labelFunc04D4_023D;
	message("「給，」她說著在她的長袍裡摸索。最後，她找到了一張羊皮紙遞給你。");
	say();
labelFunc04D4_023D:
	UI_remove_answer("石像鬼");
labelFunc04D4_0244:
	case "Catherine" attend labelFunc04D4_025B:
	message("「我擔心她。每天中午，她似乎都會消失幾個小時。她有這些愚蠢的想法，認為石像鬼是友善和可敬的。我怕她可能去了綠洲的另一邊。哦，我真希望不是。」");
	say();
	gflags[0x027E] = true;
	UI_remove_answer("Catherine");
labelFunc04D4_025B:
	case "中午的 Catherine" attend labelFunc04D4_02DD:
	message("「你知道我女兒中午去哪裡了嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04D4_02D9;
	message("「你會告訴我嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc04D4_02C4;
	if (!gflags[0x027D]) goto labelFunc04D4_02B7;
	message("在你告訴她之後，她回答：「我就知道！必須教那女孩一些常識。和那些卑劣的生物混在一起。想想看！」她搖了搖頭。");
	say();
	if (!var0003) goto labelFunc04D4_029A;
	message("「如果她父親今天在這裡就好了，他會讓那個可惡的生物知道他的本分的！」");
	say();
	goto labelFunc04D4_02A5;
labelFunc04D4_029A:
	message("「等著瞧，我這就去告訴她父親這件事！他和 Mara 肯定會處理這個情況的！」");
	say();
	UI_remove_npc(0xFF2A);
labelFunc04D4_02A5:
	message("「謝謝你，");
	message(var0005);
	message("。我會立刻制止這件事！」*");
	say();
	gflags[0x0285] = true;
	abort;
	goto labelFunc04D4_02C1;
labelFunc04D4_02B7:
	message("在你告訴她之後，她回答：「我懷疑那是真的，");
	message(var0001);
	message("，但我會調查這件事。我感謝你的關心。」");
	say();
labelFunc04D4_02C1:
	goto labelFunc04D4_02CF;
labelFunc04D4_02C4:
	message("「走開，停止嘲弄我！你太殘忍了，");
	message(var0005);
	message("!\"*");
	say();
	abort;
labelFunc04D4_02CF:
	UI_remove_answer("中午的 Catherine");
	goto labelFunc04D4_02DD;
labelFunc04D4_02D9:
	message("「哦，好吧。我感謝你的關心。」");
	say();
labelFunc04D4_02DD:
	case "告辭" attend labelFunc04D4_02E8:
	goto labelFunc04D4_02EB;
labelFunc04D4_02E8:
	goto labelFunc04D4_00E0;
labelFunc04D4_02EB:
	endconv;
	message("「旅途愉快，");
	message(var0001);
	message("。」*");
	say();
labelFunc04D4_02F6:
	if (!(event == 0x0000)) goto labelFunc04D4_0304;
	Func092E((long)0xFF2C);
labelFunc04D4_0304:
	return;
}


