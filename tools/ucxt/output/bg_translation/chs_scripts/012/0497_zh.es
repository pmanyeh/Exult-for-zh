#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0497 object#(0x497) ()
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

	if (!(event == 0x0001)) goto labelFunc0497_0364;
	UI_show_npc_face(0xFF69, 0x0000);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFFFC);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func0909();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF69));
	var0006 = UI_is_pc_female();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02C6])) goto labelFunc0497_0073;
	message("这个活泼的小仙子 (fairy) 在你周围飞舞，咯咯笑着在你的头上撒下某种闪闪发光的粉末。~~「我爱你！是的，我爱你！我爱你！」");
	say();
	gflags[0x02C6] = true;
	goto labelFunc0497_0077;
labelFunc0497_0073:
	message("「是的，我的爱人？」Kissme 问道。");
	say();
labelFunc0497_0077:
	converse attend labelFunc0497_035F;
	case "姓名" attend labelFunc0497_010D:
	message("「Kissme！ Kissme！」她咯咯地笑。");
	say();
	if (!var0000) goto labelFunc0497_00A7;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「别这么做，");
	message(var0004);
	message("！谁知道这个奇怪的生物可能拥有什么邪恶的力量！」他更仔细地检查了这个小妖精 。「也许我应该先试试看，以确保它是安全的……」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0497_00A7:
	if (!var0001) goto labelFunc0497_00C2;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「嘿，『我来』吻她！她吓不倒我！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0497_00C2:
	if (!var0003) goto labelFunc0497_00DD;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「她『确实』看起来很诱人，不是吗？」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0497_00DD:
	if (!var0002) goto labelFunc0497_00F8;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我的君主问了你的『名字』，邪恶的生物！」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0497_00F8:
	UI_show_npc_face(0xFF69, 0x0000);
	message("「但那『就是』我的名字！ Kissme ！ Kissme ！这是真的！」");
	say();
	UI_remove_answer("姓名");
labelFunc0497_010D:
	case "职业" attend labelFunc0497_01CA:
	message("「我的目的是到处散播爱情粉末 (love dust) ，并欢迎你来到 Ambrosia ！我爱你！是的，我爱你！」");
	say();
	if (!var0003) goto labelFunc0497_0142;
	message("她在 Shamino 的头顶上飞舞。~~「我也爱『你』！」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「如果你能再大一点就好了……」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_0142:
	if (!var0001) goto labelFunc0497_016B;
	message("然后她围绕着 Spark 飞舞。~~「哦，我也爱『你』！」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 脸红了。「喔，别闹了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_016B:
	if (!var0002) goto labelFunc0497_0194;
	message("Kissme 然后飞近 Dupre 。~~「英俊的男人！英俊的男人！我爱你！这是真的！这是真的！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 拍打着仙子。「走开！你不爱我！你甚至不『认识』我！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_0194:
	if (!var0000) goto labelFunc0497_01BD;
	message("Kissme 滑翔到 Iolo 身边，在他的脸颊上留下一个大大的吻。~~「是的！我爱你！是的，我爱你！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 做了个苦瓜脸，擦了擦脸颊。~~「圣者，那是我感觉过最草率、最湿、最……『恶心』的吻！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_01BD:
	UI_add_answer(["Ambrosia", "爱情粉末"]);
labelFunc0497_01CA:
	case "Ambrosia" attend labelFunc0497_020D:
	message("「那就是你所在的地方！这是真的！哦，是的！ Ambrosia ！」");
	say();
	if (!var0000) goto labelFunc0497_01FB;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「Ambrosia ！那么它真的存在！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_01FB:
	message("「Ambrosia ，不列颠尼亚 (不列颠尼亚) 失落的岛屿！你真的在这里！」");
	say();
	UI_remove_answer("Ambrosia");
	UI_add_answer("失落的岛屿");
labelFunc0497_020D:
	case "爱情粉末" attend labelFunc0497_0220:
	message("「就我所知它什么用也没有！但它很漂亮！」Kissme 像个孩子一样咯咯笑。「这是我向你表达我爱你的方式！这是真的！」");
	say();
	UI_remove_answer("爱情粉末");
labelFunc0497_0220:
	case "失落的岛屿" attend labelFunc0497_0240:
	message("「Ambrosia 在几百年前被从天而降的石头击中了！哦，是的！整个岛屿都被砸成碎片了！这是真的！」");
	say();
	UI_remove_answer("失落的岛屿");
	UI_add_answer(["石头", "几百年前"]);
labelFunc0497_0240:
	case "石头" attend labelFunc0497_025A:
	message("「我相信它叫做凯德石 (Caddellite) 。是的，我相信这是真的！~~「而且我『确实』爱你，这是千真万确的！」");
	say();
	UI_remove_answer("石头");
	UI_add_answer("凯德石");
labelFunc0497_025A:
	case "凯德石" attend labelFunc0497_0274:
	message("「大部分的石头都收集在水怪所在的坑里。你得去问问水怪。这是真的！」");
	say();
	UI_remove_answer("凯德石");
	UI_add_answer("九头蛇");
labelFunc0497_0274:
	case "九头蛇" attend labelFunc0497_0287:
	message("「那只水怪是由三个兄弟组成的——全是龙！这是真的！你要小心别惹他们生气，因为他们脾气很坏！哦，是的，确实如此！他们非常保护他们的凯德石，所以你得先和他们谈谈！」");
	say();
	UI_remove_answer("九头蛇");
labelFunc0497_0287:
	case "几百年前" attend labelFunc0497_02AB:
	message("「Ambrosia 曾经非常美丽！是的！我所有的祖先那时都住在这里！到处都是爱情粉末，每天都像宝石一样！是的，这是真的！是的，你会的！~~「哦，我必须再吻你一次！」");
	say();
	if (!var0006) goto labelFunc0497_029D;
	message("「不管你是男是女都没关系！不，没关系！反正我就是要吻你！」");
	say();
labelFunc0497_029D:
	UI_remove_answer("几百年前");
	UI_add_answer("吻");
labelFunc0497_02AB:
	case "吻" attend labelFunc0497_0351:
	if (!var0000) goto labelFunc0497_02D4;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「不！别这么做，");
	message(var0004);
	message("。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0497_02D4:
	if (!var0001) goto labelFunc0497_02EF;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「天哪，又来了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0497_02EF:
	if (!var0003) goto labelFunc0497_030A;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「嘿，我觉得她很可爱！」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0497_030A:
	if (!var0002) goto labelFunc0497_032B;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「如果你要这么做，");
	message(var0004);
	message("，就快点。我们没时间浪费在这种蠢事上。」Dupre 对整件事看起来明显感到反感。*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0497_032B:
	UI_show_npc_face(0xFF69, 0x0000);
	message("你允许 Kissme 吻你吗？");
	say();
	if (!Func090A()) goto labelFunc0497_0346;
	message("Kissme 在你的嘴上留下了一个你感觉过最湿、最草率、最黏腻且最软烂的吻。~~「哦，是的！那真有趣！我爱你！是的，这是真的！」");
	say();
	goto labelFunc0497_034A;
labelFunc0497_0346:
	message("「反正我爱你！这是真的！」Kissme 咯咯笑着，在你的头发上撒了更多的爱情粉末。");
	say();
labelFunc0497_034A:
	UI_remove_answer("吻");
labelFunc0497_0351:
	case "告辞" attend labelFunc0497_035C:
	goto labelFunc0497_035F;
labelFunc0497_035C:
	goto labelFunc0497_0077;
labelFunc0497_035F:
	endconv;
	message("「再见，我的爱！哦，是的！我爱你！这是真的！」*");
	say();
labelFunc0497_0364:
	if (!(event == 0x0000)) goto labelFunc0497_03E2;
	var0007 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF69));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0004)) goto labelFunc0497_03E2;
	if (!(var0008 == 0x0001)) goto labelFunc0497_03A8;
	var0009 = "@我爱你！@";
labelFunc0497_03A8:
	if (!(var0008 == 0x0002)) goto labelFunc0497_03B8;
	var0009 = "@我想吻你！@";
labelFunc0497_03B8:
	if (!(var0008 == 0x0003)) goto labelFunc0497_03C8;
	var0009 = "@我爱你，是的，我爱你！@";
labelFunc0497_03C8:
	if (!(var0008 == 0x0004)) goto labelFunc0497_03D8;
	var0009 = "@你是我的爱！@";
labelFunc0497_03D8:
	UI_item_say(0xFF69, var0009);
labelFunc0497_03E2:
	return;
}


