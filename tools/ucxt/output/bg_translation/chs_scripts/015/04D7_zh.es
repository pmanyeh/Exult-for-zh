#game "blackgate"
// externs
extern void Func0841 0x841 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04D7 object#(0x4D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D7_021C;
	UI_show_npc_face(0xFF29, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0294])) goto labelFunc04D7_0034;
	message("这只有翼石像鬼散发着非常平静的气息。当他第一眼看到你时，脸上露出了认出你的微笑。「致上问候，圣者 。」");
	say();
	gflags[0x0294] = true;
	goto labelFunc04D7_0038;
labelFunc04D7_0034:
	message("「问如何帮助你？」");
	say();
labelFunc04D7_0038:
	converse attend labelFunc04D7_0217;
	case "姓名" attend labelFunc04D7_0055:
	message("「被称作 Ansikart 。」");
	say();
	UI_add_answer("Ansikart");
	UI_remove_answer("姓名");
labelFunc04D7_0055:
	case "Ansikart" attend labelFunc04D7_0068:
	message("「意思是『反干燥大师 (anti-dry-master) 』。」");
	say();
	UI_remove_answer("Ansikart");
labelFunc04D7_0068:
	case "职业" attend labelFunc04D7_0081:
	message("「为他人提供食物和饮料。」");
	say();
	UI_add_answer(["购买", "其他人"]);
labelFunc04D7_0081:
	case "购买" attend labelFunc04D7_00AB:
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF29));
	if (!(var0000 == 0x0007)) goto labelFunc04D7_00A7;
	Func0841();
	goto labelFunc04D7_00AB;
labelFunc04D7_00A7:
	message("「道歉，但要求你等我营业时再来。」");
	say();
labelFunc04D7_00AB:
	case "其他人" attend labelFunc04D7_00E9:
	message("「认识 Vesper 里所有的石像鬼。想知道特定的某个吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D7_00D7;
	message("「或许想要信息，关于物资商人或贤者？");
	say();
	UI_add_answer(["智者", "物资商"]);
	goto labelFunc04D7_00DB;
labelFunc04D7_00D7:
	message("「警告你许多人对他们遭受的不佳对待抱有怨恨。请小心。」");
	say();
labelFunc04D7_00DB:
	UI_add_answer("Vesper");
	UI_remove_answer("其他人");
labelFunc04D7_00E9:
	case "Vesper" attend labelFunc04D7_0109:
	message("「是一个充满仇恨的城镇——人类恨我们，而且知道许多人也恨他们，特别是 Anmanivas 和 Foranamo 。这不是件好事。」他显得有些悲伤。");
	say();
	UI_add_answer(["Anmanivas", "Foranamo"]);
	UI_remove_answer("Vesper");
labelFunc04D7_0109:
	case "智者" attend labelFunc04D7_012D:
	message("「名叫 Wis-Sur 。」");
	say();
	if (!gflags[0x0003]) goto labelFunc04D7_0122;
	message("「是一位伟大的智者，知识渊博。」");
	say();
	goto labelFunc04D7_0126;
labelFunc04D7_0122:
	message("「曾经是一位伟大的智者。现在变得偏执且隐居。为 Wis-Sur 感到惋惜。」");
	say();
labelFunc04D7_0126:
	UI_remove_answer("智者");
labelFunc04D7_012D:
	case "物资商" attend labelFunc04D7_0140:
	message("「是 Aurvidlem 。最近变得闷闷不乐，但不知道为什么。」");
	say();
	UI_remove_answer("物资商");
labelFunc04D7_0140:
	case "For-Lem" attend labelFunc04D7_0153:
	message("「是镇上的劳工。」");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D7_0153:
	case "Lap-Lem" attend labelFunc04D7_0173:
	message("「在这里的矿业公司采矿。是这里唯一还在采矿的石像鬼。」他点点头。~~「非常宽容，就像 For-Lem 一样。」");
	say();
	UI_add_answer(["宽容", "For-Lem"]);
	UI_remove_answer("Lap-Lem");
labelFunc04D7_0173:
	case "宽容" attend labelFunc04D7_0186:
	message("「现在只和恨他、贬低他的人类一起工作。然而，尽管如此还是继续工作。对人类的不宽容相当宽容。」他点点头，仿佛在强调他的观点。");
	say();
	UI_remove_answer("宽容");
labelFunc04D7_0186:
	case "Anmanivas" attend labelFunc04D7_01CD:
	var0002 = UI_is_dead(UI_get_npc_object(0xFF27));
	if (!var0002) goto labelFunc04D7_01AF;
	var0003 = "官府已下令";
	message("「就在这个酒馆被你杀了。不记得了吗？~~这虽然是他的错，但还是要告诉你，我对他和他的兄弟感到懊悔。」");
	say();
	goto labelFunc04D7_01B5;
labelFunc04D7_01AF:
	var0003 = "如今官府已下令";
labelFunc04D7_01B5:
	message("「曾和 Lap-Lem 一起在矿区工作，但最近才刚离开。」他摇摇头。~~「他痛恨在那里工作，以及住在绿洲另一边的人类。他们太过暴力。");
	message(var0003);
	message(" 不再被允许到另一侧。」");
	say();
	UI_add_answer("Lap-Lem");
	UI_remove_answer("Anmanivas");
labelFunc04D7_01CD:
	case "Foranamo" attend labelFunc04D7_0209:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF26));
	if (!var0004) goto labelFunc04D7_01F2;
	var0005 = "官府已下令";
	goto labelFunc04D7_01F8;
labelFunc04D7_01F2:
	var0005 = "如今官府已下令";
labelFunc04D7_01F8:
	message("「是 Anmanivas 的兄弟，且由同一个父母抚养长大。和 Anmanivas 一样憎恨人类，并且，」他叹了口气，「");
	message(var0005);
	message(" 不再被允许拜访人类那一侧。」");
	say();
	UI_remove_answer("Foranamo");
labelFunc04D7_0209:
	case "告辞" attend labelFunc04D7_0214:
	goto labelFunc04D7_0217;
labelFunc04D7_0214:
	goto labelFunc04D7_0038;
labelFunc04D7_0217:
	endconv;
	message("「希望你能再次为我们的人民带来和平，圣者 。」*");
	say();
labelFunc04D7_021C:
	if (!(event == 0x0000)) goto labelFunc04D7_022A;
	Func092F(0xFF29);
labelFunc04D7_022A:
	return;
}


