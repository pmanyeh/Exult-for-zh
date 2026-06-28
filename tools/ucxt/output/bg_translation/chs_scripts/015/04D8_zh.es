#game "blackgate"
// externs
extern void Func094C 0x94C ();
extern void Func094A 0x94A ();
extern void Func0949 0x949 ();
extern var Func090B 0x90B (var var0000);
extern void Func094C 0x94C ();

void Func04D8 object#(0x4D8) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04D8_01E8;
	UI_show_npc_face(0xFF28, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0003]) goto labelFunc04D8_0041;
	if (!(!gflags[0x0295])) goto labelFunc04D8_003A;
	message("你看到一只有翼石像鬼，带着权威的气质。");
	say();
	gflags[0x0295] = true;
	goto labelFunc04D8_003E;
labelFunc04D8_003A:
	message("「为你提供欢迎，人类，」 Wis-Sur 说。");
	say();
labelFunc04D8_003E:
	goto labelFunc04D8_0057;
labelFunc04D8_0041:
	if (!(!gflags[0x0295])) goto labelFunc04D8_0053;
	message("你面前的这只有翼石像鬼有着狂野的神情。");
	say();
	gflags[0x0295] = true;
	goto labelFunc04D8_0057;
labelFunc04D8_0053:
	message("「走开，人类！没有你想要的东西！」 Wis-Sur 尖叫着。");
	say();
labelFunc04D8_0057:
	if (!gflags[0x0003]) goto labelFunc04D8_0158;
labelFunc04D8_005D:
	converse attend labelFunc04D8_0150;
	case "姓名" attend labelFunc04D8_0073:
	message("「名叫 Wis-Sur ，意思是『智能的太阳』。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D8_0073:
	case "职业" attend labelFunc04D8_008C:
	message("「向他人贩售魔法。」");
	say();
	UI_add_answer(["其他人", "魔法"]);
labelFunc04D8_008C:
	case "魔法" attend labelFunc04D8_00AF:
	message("「对法术、魔法药材或药水感兴趣？」");
	say();
	UI_add_answer(["法术", "药材", "药水"]);
	UI_remove_answer("魔法");
labelFunc04D8_00AF:
	case "法术" attend labelFunc04D8_00BA:
	Func094C();
labelFunc04D8_00BA:
	case "药材" attend labelFunc04D8_00C5:
	Func094A();
labelFunc04D8_00C5:
	case "药水" attend labelFunc04D8_00D0:
	Func0949();
labelFunc04D8_00D0:
	case "其他人" attend labelFunc04D8_00F6:
	message("「只熟悉 Vesper 里的其他石像鬼。告诉你去问 Ansikart ，他认识这里所有的石像鬼。告诉你关于以下其中一项？」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer(["Aurvidlem", "Lap-Lem", "For-Lem", "Anmanivas"]);
labelFunc04D8_00F6:
	case "Aurvidlem" attend labelFunc04D8_0109:
	message("「是 Vesper 的物资商人。」");
	say();
	UI_remove_answer("Aurvidlem");
labelFunc04D8_0109:
	case "For-Lem" attend labelFunc04D8_011C:
	message("「为城镇运行各种职责。是个优秀、强壮的工人。」");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D8_011C:
	case "Lap-Lem" attend labelFunc04D8_012F:
	message("「是不列颠尼亚矿业公司的矿工。」");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04D8_012F:
	case "Anmanivas" attend labelFunc04D8_0142:
	message("「是不列颠尼亚矿业公司的矿工。」");
	say();
	UI_remove_answer("Anmanivas");
labelFunc04D8_0142:
	case "告辞" attend labelFunc04D8_014D:
	goto labelFunc04D8_0150;
labelFunc04D8_014D:
	goto labelFunc04D8_005D;
labelFunc04D8_0150:
	endconv;
	message("「道别，人类。」*");
	say();
	goto labelFunc04D8_01E8;
labelFunc04D8_0158:
	converse attend labelFunc04D8_01E7;
	case "姓名" attend labelFunc04D8_0168:
	message("「想知道你为什么想知道。」*");
	say();
	abort;
labelFunc04D8_0168:
	case "职业" attend labelFunc04D8_017B:
	message("「卖我拥有的少量物品。」");
	say();
	UI_add_answer("买卖");
labelFunc04D8_017B:
	case "买卖" attend labelFunc04D8_01D7:
	message("「想买东西？」他仔细打量你，仿佛不确定是否要卖给你。~~「可能可以，」他点点头说。「问你需要什么？」");
	say();
	var0000 = ["再看看", "法术", "药材", "药水"];
	var0001 = Func090B(var0000);
	if (!(var0001 == "再看看")) goto labelFunc04D8_01B0;
	message("「怀疑你在浪费我的时间！」");
	say();
labelFunc04D8_01B0:
	if (!(var0001 == "法术")) goto labelFunc04D8_01BD;
	Func094C();
labelFunc04D8_01BD:
	if (!(var0001 == "药材")) goto labelFunc04D8_01CA;
	Func094A();
labelFunc04D8_01CA:
	if (!(var0001 == "药水")) goto labelFunc04D8_01D7;
	Func0949();
labelFunc04D8_01D7:
	case "告辞" attend labelFunc04D8_01E4:
	message("「你离开是件好事。」*");
	say();
	abort;
labelFunc04D8_01E4:
	goto labelFunc04D8_0158;
labelFunc04D8_01E7:
	endconv;
labelFunc04D8_01E8:
	if (!(event == 0x0000)) goto labelFunc04D8_01F1;
	abort;
labelFunc04D8_01F1:
	return;
}


