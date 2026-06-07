#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func049A object#(0x49A) ()
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
	var var000E;

	if (!(event == 0x0001)) goto labelFunc049A_03B1;
	UI_show_npc_face(0xFF66, 0x0000);
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFF10);
	var0003 = Func08F7(0xFF24);
	var0004 = Func0909();
	var0005 = Func0908();
	UI_set_alignment(UI_get_npc_object(0xFF66), 0x0002);
	if (!(!gflags[0x02BE])) goto labelFunc049A_0075;
	message("食人妖對著你咆哮，顯然對你的出現感到不悅。");
	say();
	gflags[0x02BE] = true;
	goto labelFunc049A_0079;
labelFunc049A_0075:
	message("「你要什麼？」Grod 問。");
	say();
labelFunc049A_0079:
	converse attend labelFunc049A_03AC;
	case "姓名" attend labelFunc049A_0175:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049A_0122;
	message("「我 Grod。你為什麼想知道？聲音不高興嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc049A_011B;
	message("他似乎真的在擔心。~~「我會把工作做好。我保證！我會打得更用力、更頻繁！」");
	say();
	if (!var0002) goto labelFunc049A_00EF;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	if (!gflags[0x02C3]) goto labelFunc049A_00C8;
	var0008 = "Anton，";
	goto labelFunc049A_00CE;
labelFunc049A_00C8:
	var0008 = "一名囚犯，";
labelFunc049A_00CE:
	message("「非常感謝你，");
	message(var0004);
	message("，」");
	message(var0008);
	message("諷刺地說。*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_00EF:
	if (!(var0002 && var0003)) goto labelFunc049A_0118;
	UI_show_npc_face(0xFF24, 0x0000);
	message("「好啦，好啦，Anton，這位好心人只是在回答問題。」*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_0118:
	goto labelFunc049A_011F;
labelFunc049A_011B:
	message("「很好。我工作做得很好！」");
	say();
labelFunc049A_011F:
	goto labelFunc049A_016E;
labelFunc049A_0122:
	message("「我 Grod。你誰？」");
	say();
	var0005 = Func0908();
	var0009 = "聖者";
	var000A = Func090B([var0005, var0009, var0004]);
	if (!(var000A == var0005)) goto labelFunc049A_0152;
	message("「我不認識你。」他聳了聳肩。");
	say();
labelFunc049A_0152:
	if (!(var000A == var0004)) goto labelFunc049A_0160;
	message("「好笑的名字。不過，所有人類的名字都很好笑。」他聳了聳肩。");
	say();
labelFunc049A_0160:
	if (!(var000A == var0009)) goto labelFunc049A_016E;
	message("「聖者？」他開始大笑。「聖者已經有……」他開始掰著手指數。試了幾次後，他放棄了，說：「有好多年沒來了！~~你不是聖者。」");
	say();
labelFunc049A_016E:
	UI_remove_answer("姓名");
labelFunc049A_0175:
	case "職業" attend labelFunc049A_026C:
	message("「我折磨囚犯，」他驕傲地捶著胸口說。*");
	say();
	if (!var0001) goto labelFunc049A_01A6;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 眼睛一亮。~「折磨？哇！」他迅速看了你一眼並改變表情。~~「我、呃、我是說，那真是太糟糕了。」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_01A6:
	var000B = UI_wearing_fellowship();
	if (!var000B) goto labelFunc049A_025F;
	message("「想幫忙嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc049A_025A;
	if (!(var0003 && var0002)) goto labelFunc049A_0253;
	message("他指著其中一名囚犯。~~「他不像另一個那麼有趣。先折磨另一個。」*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「什麼？不，沒關係，");
	message(var0004);
	message("。先折磨我。」*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
	message("「對，");
	message(var0004);
	message("。先折磨他。」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	message("「我感謝你，」他對另一個人說。*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF66, 0x0000);
	message("「動手吧，」Grod 說。*");
	say();
	var000D = UI_add_party_items(0x0001, 0x026E, 0xFE99, 0xFE99, true);
	if (!var000D) goto labelFunc049A_024B;
	message("他遞給你一條鞭子。");
	say();
	goto labelFunc049A_024F;
labelFunc049A_024B:
	message("「你太懦弱了，用不了鞭子！」");
	say();
labelFunc049A_024F:
	abort;
	goto labelFunc049A_0257;
labelFunc049A_0253:
	message("「這裡沒有人可以虐待。」他顯得很失望。");
	say();
labelFunc049A_0257:
	goto labelFunc049A_025F;
labelFunc049A_025A:
	message("「你開了個好笑的玩笑。去吧，折磨他們。」*");
	say();
	abort;
labelFunc049A_025F:
	UI_add_answer(["折磨", "囚犯"]);
labelFunc049A_026C:
	case "友誼會" attend labelFunc049A_02AA:
	var000E = UI_wearing_fellowship();
	if (!var000E) goto labelFunc049A_0298;
	message("「是的，」他點點頭。「我也是一員。我致力合一。我價值先行於報償。而且我信賴我的兄弟。」~~他笑了，顯然對自己很滿意。");
	say();
	UI_add_answer(["致力合一", "價值", "信賴"]);
	goto labelFunc049A_02A3;
labelFunc049A_0298:
	message("「大團體，很多人。你應該加入！」");
	say();
	UI_add_answer("加入");
labelFunc049A_02A3:
	UI_remove_answer("友誼會");
labelFunc049A_02AA:
	case "致力合一", "價值", "信賴" attend labelFunc049A_02CC:
	message("「你不知道？」他皺起眉頭。~~「你應該在聲音生氣之前學會！」");
	say();
	UI_remove_answer(["致力合一", "價值", "信賴"]);
labelFunc049A_02CC:
	case "加入" attend labelFunc049A_02DF:
	message("「好，加入。去找 Abraham 或 Danag 加入。」");
	say();
	UI_remove_answer("加入");
labelFunc049A_02DF:
	case "囚犯" attend labelFunc049A_0338:
	if (!(gflags[0x02E2] && gflags[0x02E1])) goto labelFunc049A_02F8;
	message("「現在這裡沒有……」他顯得有些不安。");
	say();
	goto labelFunc049A_0331;
labelFunc049A_02F8:
	message("「那裡有一個！」他指著一個男人說。*");
	say();
	if (!(!(gflags[0x02E1] && (!gflags[0x02E2])))) goto labelFunc049A_0327;
	message("「那裡還有一個！」他指著另一個男人說。");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「你今天過得好嗎，");
	message(var0004);
	message("？」他微笑著說。");
	say();
	UI_remove_npc_face(0xFF24);
labelFunc049A_0327:
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_0331:
	UI_remove_answer("囚犯");
labelFunc049A_0338:
	case "折磨" attend labelFunc049A_0391:
	message("「很好玩！囚犯會大聲尖叫。」*");
	say();
	if (!var0003) goto labelFunc049A_034E;
	message("「除了那個。他不尖叫。他只會說話。說個不停。我無聊到快瘋了。所以我折磨得更多。結果，」他攤開雙手，「他說得更多了！我不知道該怎麼辦。」*");
	say();
labelFunc049A_034E:
	if (!var0000) goto labelFunc049A_038A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「那太糟糕了，");
	message(var0005);
	message("。我們必須命令他停止！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF66, 0x0000);
	if (!var0003) goto labelFunc049A_0383;
	message("「我試著讓他停下來。但他一直說。你來試試？也許他會停下來。」");
	say();
labelFunc049A_0383:
	UI_add_answer("停止折磨");
labelFunc049A_038A:
	UI_remove_answer("折磨");
labelFunc049A_0391:
	case "停止折磨" attend labelFunc049A_039E:
	message("「喔，不！Grod 喜歡工作！Grod 永遠不會停。你現在走開。」*");
	say();
	abort;
labelFunc049A_039E:
	case "告辭" attend labelFunc049A_03A9:
	goto labelFunc049A_03AC;
labelFunc049A_03A9:
	goto labelFunc049A_0079;
labelFunc049A_03AC:
	endconv;
	message("「回來看看 Grod 吧。聽聽受害者的尖叫聲！」*");
	say();
labelFunc049A_03B1:
	if (!(event == 0x0000)) goto labelFunc049A_03BA;
	abort;
labelFunc049A_03BA:
	return;
}


