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
	var0002 = "聖者";
	UI_add_answer(["姓名", "職業", "告辭"]);
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
	message("「你看到一個看起來很靈活的戰士朝你微笑。」");
	say();
	goto labelFunc04A1_0070;
labelFunc04A1_0066:
	message("Chad 微笑著。「你好，");
	message(var0003);
	message("。希望你過得好。」");
	say();
labelFunc04A1_0070:
	converse attend labelFunc04A1_0207;
	case "姓名" attend labelFunc04A1_0152:
	message("「Chad，為您效勞，");
	message(var0001);
	message("。請問您是～？」");
	say();
	UI_remove_answer("姓名");
	var0004 = Func090B([var0000, var0002, var0001]);
	if (!(var0004 == var0000)) goto labelFunc04A1_00B6;
	message("「你好，");
	message(var0000);
	message("。我隨時為你效勞。」");
	say();
	gflags[0x01F1] = true;
labelFunc04A1_00B6:
	if (!(var0004 == var0001)) goto labelFunc04A1_00CE;
	message("「你好，");
	message(var0001);
	message("。」他聳了聳肩。");
	say();
	gflags[0x01F2] = true;
labelFunc04A1_00CE:
	if (!(var0004 == var0002)) goto labelFunc04A1_0147;
	message("「當然，當然，」他笑著說。「我早該意識到你就是聖者。天哪，距離你上次來，喔，至少有兩個星期了吧！」他眨了眨眼。*");
	say();
	var0005 = Func08F7(0xFFFD);
	if (!var0005) goto labelFunc04A1_0143;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你這個白痴！難道你這雙瞎眼看不出來這就是聖者嗎？」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5F, 0x0000);
	message("「是的，是的！我看出來了，」他笑著說。「那我一定是 Iolo！」*");
	say();
	var0006 = Func08F7(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	if (!var0006) goto labelFunc04A1_012E;
	message("「不，流氓！他才是 Iolo！」他對著 Iolo 點點頭。「你……真是個瞎眼的白痴！」*");
	say();
	goto labelFunc04A1_0132;
labelFunc04A1_012E:
	message("「不，流氓，你才是個瞎眼的白痴！」*");
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
	case "職業" attend labelFunc04A1_016B:
	message("「我在 Moonglow 教授輕型武器的技巧。」");
	say();
	UI_add_answer(["訓練", "Moonglow"]);
labelFunc04A1_016B:
	case "Moonglow" attend labelFunc04A1_018B:
	message("「你想知道這座城市的位置，還是想了解鎮上的居民？」");
	say();
	UI_add_answer(["位置", "鎮民"]);
	UI_remove_answer("Moonglow");
labelFunc04A1_018B:
	case "位置" attend labelFunc04A1_019E:
	message("「Moonglow 位於不列顛城和 Paws 交界處正東方的一個島嶼上。」");
	say();
	UI_remove_answer("位置");
labelFunc04A1_019E:
	case "鎮民" attend labelFunc04A1_01B1:
	message("「要打聽這個情報，你該去問酒保 Phearcy。我認識的只有其他酒客：Tolemac 和 Morz，兩位農夫。」");
	say();
	UI_remove_answer("鎮民");
labelFunc04A1_01B1:
	case "訓練" attend labelFunc04A1_01F9:
	var0007 = UI_part_of_day();
	if (!((var0007 == 0x0006) || (var0007 == 0x0007))) goto labelFunc04A1_01D9;
	message("「是的，我提供訓練。但只在白天。現在，是喝酒的時間了！」");
	say();
	goto labelFunc04A1_01F9;
labelFunc04A1_01D9:
	message("「你願意支付 45 枚金幣作為訓練費用嗎？」");
	say();
	if (!Func090A()) goto labelFunc04A1_01F5;
	Func085F([0x0001, 0x0004], 0x002D);
	goto labelFunc04A1_01F9;
labelFunc04A1_01F5:
	message("「好吧，也許下次你會願意的。」");
	say();
labelFunc04A1_01F9:
	case "告辭" attend labelFunc04A1_0204:
	goto labelFunc04A1_0207;
labelFunc04A1_0204:
	goto labelFunc04A1_0070;
labelFunc04A1_0207:
	endconv;
	message("「記住，永遠保持警惕，準備好你的劍。」*");
	say();
labelFunc04A1_020C:
	if (!(event == 0x0000)) goto labelFunc04A1_021A;
	Func092E(0xFF5F);
labelFunc04A1_021A:
	return;
}


