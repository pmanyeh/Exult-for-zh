#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0408 object#(0x408) ()
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
	var var000C;
	var var000D;

	if (!(event == 0x0001)) goto labelFunc0408_0482;
	UI_show_npc_face(0xFFF8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFF8);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x010B]) goto labelFunc0408_0055;
	UI_add_answer("設計圖");
labelFunc0408_0055:
	if (!var0004) goto labelFunc0408_0069;
	if (!(!gflags[0x0121])) goto labelFunc0408_0069;
	UI_add_answer("Spark");
labelFunc0408_0069:
	if (!(var0002 in var0001)) goto labelFunc0408_007A;
	UI_add_answer("離隊");
labelFunc0408_007A:
	if (!gflags[0x0101]) goto labelFunc0408_0087;
	UI_add_answer("加入");
labelFunc0408_0087:
	if (!(!gflags[0x001B])) goto labelFunc0408_0099;
	message("你看到了 Julia ，她是你之前某次造訪 Britannia 時冒險隊伍的成員。");
	say();
	gflags[0x001B] = true;
	goto labelFunc0408_00A3;
labelFunc0408_0099:
	message("「很高興能再次跟你說話，");
	message(var0003);
	message("，」 Julia 向你打招呼。");
	say();
labelFunc0408_00A3:
	converse attend labelFunc0408_0477;
	case "姓名" attend labelFunc0408_00BF:
	message("「真的過那麼久了嗎，");
	message(var0003);
	message("？是我， Julia 啊！」");
	say();
	UI_remove_answer("姓名");
labelFunc0408_00BF:
	case "職業" attend labelFunc0408_010E:
	if (!gflags[0x011F]) goto labelFunc0408_00F3;
	message("「自從上次在 Britannia 陪伴你冒險之後，我成了 Minoc 的修補匠。我為鎮上的人修理東西。但我的職責和義務並沒有緊迫到會阻止我再次加入你，只要你願意的話。畢竟，當你在 Britannia 時，你通常是來修復非常重要的事情，並協助讓世界恢復正常的。」");
	say();
	UI_add_answer(["修補匠", "Minoc"]);
	if (!(!(var0002 in var0001))) goto labelFunc0408_00F0;
	UI_add_answer("加入");
labelFunc0408_00F0:
	goto labelFunc0408_010E;
labelFunc0408_00F3:
	message("「現在可不是歡樂重逢的好時機，");
	message(var0003);
	message("。這個小鎮被一種神祕的邪惡所籠罩。 Minoc 發生了謀殺案。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer(["謀殺案", "Minoc"]);
labelFunc0408_010E:
	case "修補匠" attend labelFunc0408_0121:
	message("「這其實不是我餘生想做的事。我沒有耐性成為一個稱職的修補匠。如果你問我的話，我會說我已經犧牲夠多了！」");
	say();
	UI_remove_answer("修補匠");
labelFunc0408_0121:
	case "加入" attend labelFunc0408_019D:
	var0005 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0408_0137:
	for (var0008 in var0001 with var0006 to var0007) attend labelFunc0408_014F;
	var0005 = (var0005 + 0x0001);
	goto labelFunc0408_0137;
labelFunc0408_014F:
	if (!(var0005 < 0x0006)) goto labelFunc0408_0192;
	if (!gflags[0x0101]) goto labelFunc0408_0166;
	message("「嗯……好吧。但我不喜歡你叫我離開！」");
	say();
	goto labelFunc0408_016A;
labelFunc0408_0166:
	message("「好啊！這是我的榮幸！」");
	say();
labelFunc0408_016A:
	gflags[0x0108] = true;
	UI_add_to_party(0xFFF8);
	UI_add_answer(["Iolo", "Shamino", "Dupre", "離隊"]);
	UI_remove_answer("加入");
	goto labelFunc0408_0196;
labelFunc0408_0192:
	message("「我相信你的隊伍中旅行的成員已經夠多了。」");
	say();
labelFunc0408_0196:
	UI_remove_answer("加入");
labelFunc0408_019D:
	case "離隊" attend labelFunc0408_0225:
	message("「你確定你要我離開嗎？」");
	say();
	if (!Func090A()) goto labelFunc0408_021A;
	message("「你是想讓我在這裡等，還是想讓我回家？」");
	say();
	UI_clear_answers();
	var0009 = Func090B(["在這裡等", "回家"]);
	if (!(var0009 == "在這裡等")) goto labelFunc0408_01F5;
	message("「很好。我會在這裡等你回來。」*");
	say();
	gflags[0x0101] = true;
	gflags[0x0108] = false;
	UI_remove_from_party(0xFFF8);
	UI_set_schedule_type(UI_get_npc_object(0xFFF8), 0x000F);
	abort;
	goto labelFunc0408_0217;
labelFunc0408_01F5:
	message("「哼！好吧，如果那是你的願望，那我就離開！」*");
	say();
	gflags[0x0101] = true;
	gflags[0x0108] = false;
	UI_remove_from_party(0xFFF8);
	UI_set_schedule_type(UI_get_npc_object(0xFFF8), 0x000B);
	abort;
labelFunc0408_0217:
	goto labelFunc0408_021E;
labelFunc0408_021A:
	message("「那我就留下。」");
	say();
labelFunc0408_021E:
	UI_remove_answer("離隊");
labelFunc0408_0225:
	case "Minoc" attend labelFunc0408_0245:
	message("「我們鎮上發生這些謀殺案，真是太可怕了。 Minoc 曾經是個安全又安靜的地方。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["安全又安靜", "謀殺案"]);
labelFunc0408_0245:
	case "安全又安靜" attend labelFunc0408_0265:
	message("「嗯，至少是安全的，雖然不一定安靜。特別是因為 Owen 和他的紀念碑引起了所有的騷動。」");
	say();
	UI_remove_answer("安全又安靜");
	UI_add_answer(["Owen", "紀念碑"]);
labelFunc0408_0265:
	case "Owen" attend labelFunc0408_0278:
	message("「Owen 是我們當地的造船匠。坦白說，我覺得他有點像個傻瓜。」");
	say();
	UI_remove_answer("Owen");
labelFunc0408_0278:
	case "紀念碑" attend labelFunc0408_0295:
	message("「友誼會想為 Owen 建一座雕像。這樣他們就可以用他作為友誼會理念成功的範例。這也會增加 Owen 的生意，甚至會擾亂當地經濟，導致藝術家公會破產！」");
	say();
	if (!gflags[0x00F7]) goto labelFunc0408_028E;
	message("「如果你沒有阻止他們的計畫，他們就得逞了。」");
	say();
labelFunc0408_028E:
	UI_remove_answer("紀念碑");
labelFunc0408_0295:
	case "謀殺案" attend labelFunc0408_02B5:
	message("「Frederico 和 Tania 在 Minoc 的鋸木廠以極其可怕的方式被殺害了。」");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer(["Frederico 和 Tania", "可怕"]);
labelFunc0408_02B5:
	case "Frederico 和 Tania" attend labelFunc0408_02C8:
	message("「Frederico 是吉普賽人的首領， Tania 是他的妻子。他們住在鎮外。我對他們的了解僅止於此。」");
	say();
	UI_remove_answer("Frederico 和 Tania");
labelFunc0408_02C8:
	case "可怕" attend labelFunc0408_02DB:
	message("「Frederico 和 Tania 被謀殺的方式暗示著一場儀式性殺戮。從我聽到的消息來看，它與你在 Trinsic 遇到的那起，以及前陣子在 Britain 發生的那起很相似。這是個最令人困惑的謎團。」");
	say();
	UI_remove_answer("可怕");
labelFunc0408_02DB:
	case "設計圖" attend labelFunc0408_0314:
	var000A = Func0931(0xFE9B, 0x0001, 0x031D, 0x000B, 0xFE99);
	if (!var000A) goto labelFunc0408_0309;
	message("「我可以看看嗎？」她仔細檢查了設計圖的每一條線。「這些設計有缺陷。按照這些規格建造的船隻很容易傾覆並沉沒。你應該把這些設計圖給鎮長看。」");
	say();
	gflags[0x00FD] = true;
	goto labelFunc0408_030D;
labelFunc0408_0309:
	message("「Karl 有 Owen 建造的那些沉船的設計圖？！我非常想看看它們。也許我能幫忙找出那些悲劇發生的原因。」");
	say();
labelFunc0408_030D:
	UI_remove_answer("設計圖");
labelFunc0408_0314:
	case "Iolo" attend labelFunc0408_035D:
	var000B = Func08F7(0xFFFF);
	if (!(!var000B)) goto labelFunc0408_0333;
	message("「也許我們該去找 Iolo ，讓他跟我們一起走。」");
	say();
	goto labelFunc0408_0356;
labelFunc0408_0333:
	message("「哈囉， Iolo 。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「很高興能再次見到妳， Julia 。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_0356:
	UI_remove_answer("Iolo");
labelFunc0408_035D:
	case "Shamino" attend labelFunc0408_03A6:
	var000C = Func08F7(0xFFFD);
	if (!(!var000C)) goto labelFunc0408_037C;
	message("「也許我們該去找 Shamino ，讓他跟我們一起走。」");
	say();
	goto labelFunc0408_039F;
labelFunc0408_037C:
	message("「哈囉， Shamino ！」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「噢， Julia ！妳能再次加入我們真是太好了！」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_039F:
	UI_remove_answer("Shamino");
labelFunc0408_03A6:
	case "Dupre" attend labelFunc0408_0411:
	var000D = Func08F7(0xFFFC);
	if (!(!var000D)) goto labelFunc0408_03C5;
	message("「也許我們該去找 Dupre 爵士，讓他跟我們一起走。」");
	say();
	goto labelFunc0408_040A;
labelFunc0408_03C5:
	message("「我們的道路再次交會了， Dupre 爵士！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「Julia ！我正想著我們是否還能再見到妳呢！」*");
	say();
	UI_show_npc_face(0xFFF8, 0x0000);
	message("「好吧，你不用再想了， Dupre 。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"");
	message(var0003);
	message("，只有你、我跟路燈知道就好，你最好小心點 Julia 。她脾氣可不小。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_040A:
	UI_remove_answer("Dupre");
labelFunc0408_0411:
	case "Spark" attend labelFunc0408_0469:
	message("「這位優秀的年輕小伙子是誰？」");
	say();
	if (!var0004) goto labelFunc0408_0462;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我的名字是 Spark ，女士。」*");
	say();
	UI_show_npc_face(0xFFF8, 0x0000);
	message("「他真可愛！而且很有禮貌！」");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 的臉漲得像甜菜一樣紅。");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFF8, 0x0000);
	gflags[0x0121] = true;
labelFunc0408_0462:
	UI_remove_answer("Spark");
labelFunc0408_0469:
	case "告辭" attend labelFunc0408_0474:
	goto labelFunc0408_0477;
labelFunc0408_0474:
	goto labelFunc0408_00A3;
labelFunc0408_0477:
	endconv;
	message("「再見，");
	message(var0003);
	message("。」*");
	say();
labelFunc0408_0482:
	if (!(event == 0x0000)) goto labelFunc0408_0490;
	Func092E(0xFFF8);
labelFunc0408_0490:
	return;
}


