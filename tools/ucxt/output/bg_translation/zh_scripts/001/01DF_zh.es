#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func087C 0x87C ();
extern var Func090A 0x90A ();
extern var Func093C 0x93C (var var0000, var var0001);

void Func01DF shape#(0x1DF) ()
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

	if (!(event == 0x0001)) goto labelFunc01DF_01EB;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFEE5, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc01DF_0040;
	if (!(!var0000)) goto labelFunc01DF_003D;
	message("這生物無視了你。*");
	say();
	abort;
	goto labelFunc01DF_0040;
labelFunc01DF_003D:
	Func087C();
labelFunc01DF_0040:
	if (!(!gflags[0x013C])) goto labelFunc01DF_0052;
	message("這種類似猿猴的生物小心翼翼地靠近你。幾分鐘後，牠說：「向你致意，人類。」");
	say();
	gflags[0x013C] = true;
	goto labelFunc01DF_0056;
labelFunc01DF_0052:
	message("這隻森靈小心翼翼地靠近你。幾分鐘後，牠說：「向你致意，人類。」");
	say();
labelFunc01DF_0056:
	message("「你有更多的蜂蜜嗎？」這隻森靈滿懷希望地問。");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc01DF_0079;
	if (!var0000) goto labelFunc01DF_0072;
	Func087C();
	goto labelFunc01DF_0076;
labelFunc01DF_0072:
	message("「你沒有蜂蜜，」這隻森靈說道，顯然很失望。");
	say();
labelFunc01DF_0076:
	goto labelFunc01DF_007D;
labelFunc01DF_0079:
	message("這隻森靈顯然很失望地說：「那太糟糕了。你有什麼願望？」");
	say();
labelFunc01DF_007D:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc01DF_008D:
	converse attend labelFunc01DF_01E6;
	case "姓名" attend labelFunc01DF_017B:
	var0002 = UI_get_npc_prop(item, 0x0005);
	var0003 = [0x0001, 0x0002, 0x0003, 0x0004];
	if (!(!(var0002 in var0003))) goto labelFunc01DF_0124;
	var0004 = UI_find_nearby(0xFE9C, 0x01DF, 0x0050, 0x0004);
	enum();
labelFunc01DF_00D4:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc01DF_0103;
	var0008 = UI_get_npc_prop(item, 0x0005);
	if (!(var0008 in var0003)) goto labelFunc01DF_0100;
	var0003 = Func093C(var0008, var0003);
labelFunc01DF_0100:
	goto labelFunc01DF_00D4;
labelFunc01DF_0103:
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!var0003) goto labelFunc01DF_0124;
	if (!(!(var0002 in var0003))) goto labelFunc01DF_0124;
	goto labelFunc01DF_0103;
labelFunc01DF_0124:
	if (!(var0002 == 0x0001)) goto labelFunc01DF_0138;
	message("「我的名字是 Terandan 。」");
	say();
	var0009 = "他";
labelFunc01DF_0138:
	if (!(var0002 == 0x0002)) goto labelFunc01DF_014C;
	message("「我的名字是 Sendala 。」");
	say();
	var0009 = "她";
labelFunc01DF_014C:
	if (!(var0002 == 0x0003)) goto labelFunc01DF_0160;
	message("「我的名字是 Tvellum 。」");
	say();
	var0009 = "他";
labelFunc01DF_0160:
	if (!(var0002 == 0x0004)) goto labelFunc01DF_0174;
	message("「我的名字是 Simrek 。」");
	say();
	var0009 = "她";
labelFunc01DF_0174:
	UI_remove_answer("姓名");
labelFunc01DF_017B:
	case "職業" attend labelFunc01DF_018E:
	message("「我沒有職業。我負責採集食物。」");
	say();
	UI_add_answer("食物");
labelFunc01DF_018E:
	case "食物" attend labelFunc01DF_01AA:
	message("「水果、牛奶、起司是森靈吃的。");
	say();
	UI_add_answer(["水果", "牛奶", "起司"]);
labelFunc01DF_01AA:
	case "起司", "牛奶" attend labelFunc01DF_01C6:
	message("「森靈喜歡起司和牛奶，但它們很難找到。只有從人類那裡才能找到這些食物。」");
	say();
	UI_remove_answer(["起司", "牛奶"]);
labelFunc01DF_01C6:
	case "水果" attend labelFunc01DF_01D8:
	message("「在森林裡很容易找到水果，」");
	message(var0009);
	message(" 說道。「它們是森靈最常作為食物的東西。」");
	say();
labelFunc01DF_01D8:
	case "告辭" attend labelFunc01DF_01E3:
	goto labelFunc01DF_01E6;
labelFunc01DF_01E3:
	goto labelFunc01DF_008D;
labelFunc01DF_01E6:
	endconv;
	message("「向你道別。」*");
	say();
labelFunc01DF_01EB:
	if (!(event == 0x0000)) goto labelFunc01DF_01F4;
	abort;
labelFunc01DF_01F4:
	return;
}


