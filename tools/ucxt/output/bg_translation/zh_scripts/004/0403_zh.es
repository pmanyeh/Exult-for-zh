#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0403 object#(0x403) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0403_04B2;
	talked_book = false;
	UI_show_npc_face(0xFFFD, 0x0000);
	var0000 = UI_is_pc_female();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFD);
	var0003 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02EC]) goto labelFunc0403_006C;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0403_005C;
	message("「抱歉，我不加入小偷的行列。」");
	say();
	abort;
	goto labelFunc0403_006C;
labelFunc0403_005C:
	message("「好吧，我想你已經得到教訓了。我會重新加入。」");
	say();
	UI_add_to_party(0xFFFD);
	gflags[0x02EC] = false;
	abort;
labelFunc0403_006C:
	if (!gflags[0x006D]) goto labelFunc0403_0079;
	UI_add_answer("Amber");
labelFunc0403_0079:
	if (!gflags[0x006E]) goto labelFunc0403_0086;
	UI_add_answer("安定下來");
labelFunc0403_0086:
	if (!(var0002 in var0001)) goto labelFunc0403_0097;
	UI_add_answer("離隊");
labelFunc0403_0097:
	if (!(!(var0002 in var0001))) goto labelFunc0403_00A9;
	UI_add_answer("加入");
labelFunc0403_00A9:
	if (!(!gflags[0x0016])) goto labelFunc0403_00BB;
	message("你的老朋友 Shamino 站在你面前，你驚訝地發現他終於步入了所謂的『中年』。");
	say();
	gflags[0x0016] = true;
	goto labelFunc0403_00C5;
labelFunc0403_00BB:
	message("「是的，");
	message(var0003);
	message("？」 Shamino 問道。");
	say();
labelFunc0403_00C5:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文譯本");
	}
	converse attend labelFunc0403_04AD;
	case "古文譯本" attend labelFunc0403_TransBook:
	message("「在荒野中生存，解讀古老的標記和盧恩文是必備的技能。」");
	say();
	message("「不過，既然你有了古文譯本，我想我們在探索那些古老遺跡時能省下不少時間。」");
	say();
	message("「希望它不會在我們最需要的時候失去魔力。」");
	say();
	talked_book = true;
	UI_remove_answer("古文譯本");
labelFunc0403_TransBook:
	case "姓名" attend labelFunc0403_00DB:
	message("你的朋友看著你，就像你失去理智一樣。「是 Shamino 。『Sha-mi-no』。」");
	say();
	UI_remove_answer("姓名");
labelFunc0403_00DB:
	case "職業" attend labelFunc0403_0106:
	message("「我希望是跟你一起去冒險！我已經厭倦了在不列顛城閒晃。我們還有很多事可以做！話說回來，你到底去哪了？」");
	say();
	if (!(!gflags[0x00D5])) goto labelFunc0403_00F9;
	message("「但請告訴我，是什麼風把你吹來的！」");
	say();
	UI_add_answer("Trinsic 的謀殺案");
labelFunc0403_00F9:
	UI_add_answer(["不列顛城", "成就"]);
labelFunc0403_0106:
	case "成就" attend labelFunc0403_0126:
	message("「嗯，我不知道你是否意識到了，但我們在整體魔法以及月之門方面遇到了很多問題。」");
	say();
	UI_remove_answer("成就");
	UI_add_answer(["魔法", "月之門"]);
labelFunc0403_0126:
	case "不列顛城" attend labelFunc0403_0146:
	message("「是的，我最近都在不列顛城，試圖找工作。你知道冒險的機會太少了。人總得找些『其他』的消遣。這倒提醒我了……我有你的懷錶。」");
	say();
	UI_remove_answer("不列顛城");
	UI_add_answer(["消遣", "懷錶"]);
labelFunc0403_0146:
	case "懷錶" attend labelFunc0403_0196:
	if (!(!gflags[0x00D9])) goto labelFunc0403_0185;
	message("「你上次造訪不列顛尼亞時把它留下了。拿去吧。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x009F, 0xFE99, 0xFE99, false);
	if (!var0004) goto labelFunc0403_017E;
	message("Shamino 把懷錶交給你。");
	say();
	gflags[0x00D9] = true;
	goto labelFunc0403_0182;
labelFunc0403_017E:
	message("「哎呀。你的手太滿了，拿不了。晚點再問我吧。」");
	say();
labelFunc0403_0182:
	goto labelFunc0403_018F;
labelFunc0403_0185:
	message("「我已經把懷錶給你了，");
	message(var0003);
	message("。希望你別再把它弄丟了！」");
	say();
labelFunc0403_018F:
	UI_remove_answer("懷錶");
labelFunc0403_0196:
	case "消遣" attend labelFunc0403_0214:
	message("「老樣子。我不常看到我們的老朋友，而不列顛王也很少找我做事。我當然沒時間去尋歡作樂或喝酒——我長大了一點。」*");
	say();
	UI_remove_answer("消遣");
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0403_0214;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「咳咳，我聽說了些關於某個女演員的事，不是嗎？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你對這事知道多少？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"");
	message(var0003);
	message("，問他關於『Amber』的事。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你這頭豬， Iolo 。」");
	say();
	UI_add_answer(["Amber", "朋友們", "不列顛王"]);
labelFunc0403_0214:
	case "不列顛王" attend labelFunc0403_0236:
	if (!(!gflags[0x0098])) goto labelFunc0403_022B;
	message("「我建議你立刻去見他！」*");
	say();
	abort;
	goto labelFunc0403_022F;
labelFunc0403_022B:
	message("「我很高興我看起來沒有『他』那麼老！」");
	say();
labelFunc0403_022F:
	UI_remove_answer("不列顛王");
labelFunc0403_0236:
	case "朋友們" attend labelFunc0403_0256:
	message("「我想你是指 Iolo 和 Dupre 吧？」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Iolo", "Dupre"]);
labelFunc0403_0256:
	case "Iolo" attend labelFunc0403_02A2:
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0403_0297;
	message("「你是說那個可悲的、假裝是弓箭手的傢伙嗎？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「注意你的言辭，無賴！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「是的，那就是 Iolo ！」");
	say();
	goto labelFunc0403_029B;
labelFunc0403_0297:
	message("「他肯定在附近某處。你上次把他留在哪裡了？」");
	say();
labelFunc0403_029B:
	UI_remove_answer("Iolo");
labelFunc0403_02A2:
	case "Dupre" attend labelFunc0403_034C:
	var0006 = Func08F7(0xFFFC);
	if (!var0006) goto labelFunc0403_0333;
	message("「你是說那個無可救藥的酒色之徒嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「別忘了，我只要用拇指就能把你的臉捏得像棉花糖一樣碎。」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「是的，那就是 Dupre ！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「是 Dupre 『爵士』！」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「Dupuke 爵士？你是說 Dupuke 爵士嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Du-pre-!\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「『請原諒』我， Dupuke 爵士！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我不聽了。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFD, 0x0000);
	goto labelFunc0403_0345;
labelFunc0403_0333:
	if (!(!gflags[0x0017])) goto labelFunc0403_0341;
	message("「我相信他在 Jhelom 。」");
	say();
	goto labelFunc0403_0345;
labelFunc0403_0341:
	message("「他肯定在附近某處！」");
	say();
labelFunc0403_0345:
	UI_remove_answer("Dupre");
labelFunc0403_034C:
	case "加入" attend labelFunc0403_03A4:
	var0007 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0403_0362:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0403_037A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0403_0362;
labelFunc0403_037A:
	if (!(var0007 < 0x0008)) goto labelFunc0403_0392;
	message("Shamino 看起來鬆了一口氣。「我『太』高興你這麼問我了。」他收拾好裝備準備跟隨你。");
	say();
	UI_add_to_party(0xFFFD);
	goto labelFunc0403_0396;
labelFunc0403_0392:
	message("「嗯。我不喜歡人多。我會等到你的隊伍人數減少後再加入。」");
	say();
labelFunc0403_0396:
	UI_add_answer("離隊");
	UI_remove_answer("加入");
labelFunc0403_03A4:
	case "離隊" attend labelFunc0403_0404:
	message("「嗯。你只是想讓我在這裡等，還是想讓我回家？」");
	say();
	UI_clear_answers();
	var000B = Func090B(["在這裡等", "回家"]);
	if (!(var000B == "在這裡等")) goto labelFunc0403_03EA;
	message("「很好。我會等待你的歸來。」*");
	say();
	UI_remove_from_party(0xFFFD);
	UI_set_schedule_type(UI_get_npc_object(0xFFFD), 0x000F);
	abort;
	goto labelFunc0403_0404;
labelFunc0403_03EA:
	message("「我真的很不願意，但既然你堅持的話。」 Shamino 勉強地收拾好他的物品。*");
	say();
	UI_remove_from_party(0xFFFD);
	UI_set_schedule_type(UI_get_npc_object(0xFFFD), 0x000B);
	abort;
labelFunc0403_0404:
	case "Trinsic 的謀殺案" attend labelFunc0403_041B:
	message("Shamino 傾聽你講述這個故事。「我很榮幸能加入並幫助你調查這件事。」");
	say();
	gflags[0x00D5] = true;
	UI_remove_answer("Trinsic 的謀殺案");
labelFunc0403_041B:
	case "月之門" attend labelFunc0403_043C:
	if (!(!gflags[0x0004])) goto labelFunc0403_0431;
	message("「我對它們無法正常運作感到困惑。」");
	say();
	goto labelFunc0403_0435;
labelFunc0403_0431:
	message("「真遺憾你被困在這裡。」");
	say();
labelFunc0403_0435:
	UI_remove_answer("月之門");
labelFunc0403_043C:
	case "魔法" attend labelFunc0403_0475:
	if (!(!gflags[0x0003])) goto labelFunc0403_0464;
	if (!(!gflags[0x006C])) goto labelFunc0403_045D;
	message("「全不列顛尼亞的魔法似乎都受到了干擾。說，你還記得大森林裡的 Nicodemus 嗎？他瘋了，而且變得非常愚蠢。也許我們該去拜訪他。」");
	say();
	gflags[0x006C] = true;
	goto labelFunc0403_0461;
labelFunc0403_045D:
	message("「它運作得不好。我不明白為什麼。」");
	say();
labelFunc0403_0461:
	goto labelFunc0403_046E;
labelFunc0403_0464:
	message("「它現在應該運作得非常好了，");
	message(var0003);
	message("。」");
	say();
labelFunc0403_046E:
	UI_remove_answer("魔法");
labelFunc0403_0475:
	case "Amber" attend labelFunc0403_048C:
	message("當你提到她的名字時，你看到 Shamino 的眼中閃爍著光芒。他顯然是被迷住了。~~「她是我認識的一位女演員。」");
	say();
	UI_remove_answer("Amber");
	gflags[0x006B] = true;
labelFunc0403_048C:
	case "安定下來" attend labelFunc0403_049F:
	message("「那個女人！她就是不明白我必須要有我的冒險！我還不能安定下來。『還』不行！或許快了吧。」~~ Shamino 看起來很憂慮。「我已經長大了。一點點。」");
	say();
	UI_remove_answer("安定下來");
labelFunc0403_049F:
	case "告辭" attend labelFunc0403_04AA:
	goto labelFunc0403_04AD;
labelFunc0403_04AA:
	goto labelFunc0403_00C5;
labelFunc0403_04AD:
	endconv;
	message("Shamino 微微鞠躬。*");
	say();
labelFunc0403_04B2:
	if (!(event == 0x0000)) goto labelFunc0403_04C0;
	Func092E(0xFFFD);
labelFunc0403_04C0:
	return;
}


