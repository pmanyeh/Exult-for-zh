#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func085F 0x85F (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04A1 object#(0x4A1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04A1_020C;
	UI_show_npc_face(0xFF5F, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "圣者";
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x01F1]) goto labelFunc04A1_0040;
	var0003 = var0000;
labelFunc04A1_0040:
	if (!gflags[0x01F3]) goto labelFunc04A1_004C;
	var0003 = var0002;
labelFunc04A1_004C:
	if (!gflags[0x01F2]) goto labelFunc04A1_0058;
	var0003 = var0001;
labelFunc04A1_0058:
	if (!(!gflags[0x0203])) goto labelFunc04A1_0066;
	message("「你看到一个看起来很灵活的战士朝你微笑。」");
	say();
	goto labelFunc04A1_0070;
labelFunc04A1_0066:
	message("Chad 微笑着。「你好，");
	message(var0003);
	message("。希望你过得好。」");
	say();
labelFunc04A1_0070:
	converse attend labelFunc04A1_0207;
	case "姓名" attend labelFunc04A1_0152:
	message("「Chad，为您效劳，");
	message(var0001);
	message("。请问您是～？」");
	say();
	UI_remove_answer("姓名");
	var0004 = Func090B([var0000, var0002, var0001]);
	if (!(var0004 == var0000)) goto labelFunc04A1_00B6;
	message("「你好，");
	message(var0000);
	message("。我随时为你效劳。」");
	say();
	gflags[0x01F1] = true;
labelFunc04A1_00B6:
	if (!(var0004 == var0001)) goto labelFunc04A1_00CE;
	message("「你好，");
	message(var0001);
	message("。」他耸了耸肩。");
	say();
	gflags[0x01F2] = true;
labelFunc04A1_00CE:
	if (!(var0004 == var0002)) goto labelFunc04A1_0147;
	message("「当然，当然，」他笑着说。「我早该意识到你就是圣者。天哪，距离你上次来，喔，至少有两个星期了吧！」他眨了眨眼。*");
	say();
	var0005 = Func08F7(0xFFFD);
	if (!var0005) goto labelFunc04A1_0143;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你这个白痴！难道你这双瞎眼看不出来这就是圣者吗？」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5F, 0x0000);
	message("「是的，是的！我看出来了，」他笑着说。「那我一定是 Iolo！」*");
	say();
	var0006 = Func08F7(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	if (!var0006) goto labelFunc04A1_012E;
	message("「不，流氓！他才是 Iolo！」他对着 Iolo 点点头。「你……真是个瞎眼的白痴！」*");
	say();
	goto labelFunc04A1_0132;
labelFunc04A1_012E:
	message("「不，流氓，你才是个瞎眼的白痴！」*");
	say();
labelFunc04A1_0132:
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5F, 0x0000);
labelFunc04A1_0143:
	gflags[0x01F3] = true;
labelFunc04A1_0147:
	gflags[0x0203] = true;
	UI_remove_answer("名字");
labelFunc04A1_0152:
	case "职业" attend labelFunc04A1_016B:
	message("「我在 Moonglow 教授轻型武器的技巧。」");
	say();
	UI_add_answer(["训练", "Moonglow"]);
labelFunc04A1_016B:
	case "Moonglow" attend labelFunc04A1_018B:
	message("「你想知道这座城市的位置，还是想了解镇上的居民？」");
	say();
	UI_add_answer(["位置", "镇民"]);
	UI_remove_answer("Moonglow");
labelFunc04A1_018B:
	case "位置" attend labelFunc04A1_019E:
	message("「Moonglow 位于不列颠城和 Paws 交界处正东方的一个岛屿上。」");
	say();
	UI_remove_answer("位置");
labelFunc04A1_019E:
	case "镇民" attend labelFunc04A1_01B1:
	message("「要打听这个情报，你该去问酒保 Phearcy。我认识的只有其他酒客：Tolemac 和 Morz，两位农夫。」");
	say();
	UI_remove_answer("镇民");
labelFunc04A1_01B1:
	case "训练" attend labelFunc04A1_01F9:
	var0007 = UI_part_of_day();
	if (!((var0007 == 0x0006) || (var0007 == 0x0007))) goto labelFunc04A1_01D9;
	message("「是的，我提供训练。但只在白天。现在，是喝酒的时间了！」");
	say();
	goto labelFunc04A1_01F9;
labelFunc04A1_01D9:
	message("「你愿意支付 45 枚金币作为训练费用吗？」");
	say();
	if (!Func090A()) goto labelFunc04A1_01F5;
	Func085F([0x0001, 0x0004], 0x002D);
	goto labelFunc04A1_01F9;
labelFunc04A1_01F5:
	message("「好吧，也许下次你会愿意的。」");
	say();
labelFunc04A1_01F9:
	case "告辞" attend labelFunc04A1_0204:
	goto labelFunc04A1_0207;
labelFunc04A1_0204:
	goto labelFunc04A1_0070;
labelFunc04A1_0207:
	endconv;
	message("「记住，永远保持警惕，准备好你的剑。」*");
	say();
labelFunc04A1_020C:
	if (!(event == 0x0000)) goto labelFunc04A1_021A;
	Func092E(0xFF5F);
labelFunc04A1_021A:
	return;
}


