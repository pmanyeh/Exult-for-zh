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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0003]) goto labelFunc04D8_0041;
	if (!(!gflags[0x0295])) goto labelFunc04D8_003A;
	message("你看到一只有翼石像鬼，帶著權威的氣質。");
	say();
	gflags[0x0295] = true;
	goto labelFunc04D8_003E;
labelFunc04D8_003A:
	message("「為你提供歡迎，人類，」 Wis-Sur 說。");
	say();
labelFunc04D8_003E:
	goto labelFunc04D8_0057;
labelFunc04D8_0041:
	if (!(!gflags[0x0295])) goto labelFunc04D8_0053;
	message("你面前的這只有翼石像鬼有著狂野的神情。");
	say();
	gflags[0x0295] = true;
	goto labelFunc04D8_0057;
labelFunc04D8_0053:
	message("「走開，人類！沒有你想要的東西！」 Wis-Sur 尖叫著。");
	say();
labelFunc04D8_0057:
	if (!gflags[0x0003]) goto labelFunc04D8_0158;
labelFunc04D8_005D:
	converse attend labelFunc04D8_0150;
	case "姓名" attend labelFunc04D8_0073:
	message("「名叫 Wis-Sur ，意思是『智慧的太陽』。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D8_0073:
	case "職業" attend labelFunc04D8_008C:
	message("「向他人販售魔法。」");
	say();
	UI_add_answer(["其他人", "魔法"]);
labelFunc04D8_008C:
	case "魔法" attend labelFunc04D8_00AF:
	message("「對法術、魔法藥材或藥水感興趣？」");
	say();
	UI_add_answer(["法術", "藥材", "藥水"]);
	UI_remove_answer("魔法");
labelFunc04D8_00AF:
	case "法術" attend labelFunc04D8_00BA:
	Func094C();
labelFunc04D8_00BA:
	case "藥材" attend labelFunc04D8_00C5:
	Func094A();
labelFunc04D8_00C5:
	case "藥水" attend labelFunc04D8_00D0:
	Func0949();
labelFunc04D8_00D0:
	case "其他人" attend labelFunc04D8_00F6:
	message("「只熟悉 Vesper 裡的其他石像鬼。告訴你去問 Ansikart ，他認識這裡所有的石像鬼。告訴你關於以下其中一項？」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer(["Aurvidlem", "Lap-Lem", "For-Lem", "Anmanivas"]);
labelFunc04D8_00F6:
	case "Aurvidlem" attend labelFunc04D8_0109:
	message("「是 Vesper 的物資商人。」");
	say();
	UI_remove_answer("Aurvidlem");
labelFunc04D8_0109:
	case "For-Lem" attend labelFunc04D8_011C:
	message("「為城鎮執行各種職責。是個優秀、強壯的工人。」");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D8_011C:
	case "Lap-Lem" attend labelFunc04D8_012F:
	message("「是不列顛尼亞礦業公司的礦工。」");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04D8_012F:
	case "Anmanivas" attend labelFunc04D8_0142:
	message("「是不列顛尼亞礦業公司的礦工。」");
	say();
	UI_remove_answer("Anmanivas");
labelFunc04D8_0142:
	case "告辭" attend labelFunc04D8_014D:
	goto labelFunc04D8_0150;
labelFunc04D8_014D:
	goto labelFunc04D8_005D;
labelFunc04D8_0150:
	endconv;
	message("「道別，人類。」*");
	say();
	goto labelFunc04D8_01E8;
labelFunc04D8_0158:
	converse attend labelFunc04D8_01E7;
	case "姓名" attend labelFunc04D8_0168:
	message("「想知道你為什麼想知道。」*");
	say();
	abort;
labelFunc04D8_0168:
	case "職業" attend labelFunc04D8_017B:
	message("「賣我擁有的少量物品。」");
	say();
	UI_add_answer("買賣");
labelFunc04D8_017B:
	case "買賣" attend labelFunc04D8_01D7:
	message("「想買東西？」他仔細打量你，彷彿不確定是否要賣給你。~~「可能可以，」他點點頭說。「問你需要什麼？」");
	say();
	var0000 = ["再看看", "法術", "藥材", "藥水"];
	var0001 = Func090B(var0000);
	if (!(var0001 == "再看看")) goto labelFunc04D8_01B0;
	message("「懷疑你在浪費我的時間！」");
	say();
labelFunc04D8_01B0:
	if (!(var0001 == "法術")) goto labelFunc04D8_01BD;
	Func094C();
labelFunc04D8_01BD:
	if (!(var0001 == "藥材")) goto labelFunc04D8_01CA;
	Func094A();
labelFunc04D8_01CA:
	if (!(var0001 == "藥水")) goto labelFunc04D8_01D7;
	Func0949();
labelFunc04D8_01D7:
	case "告辭" attend labelFunc04D8_01E4:
	message("「你離開是件好事。」*");
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


