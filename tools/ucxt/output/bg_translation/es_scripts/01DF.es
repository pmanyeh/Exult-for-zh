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
	message("The creature ignores you.*");
	say();
	abort;
	goto labelFunc01DF_0040;
labelFunc01DF_003D:
	Func087C();
labelFunc01DF_0040:
	if (!(!gflags[0x013C])) goto labelFunc01DF_0052;
	message("The ape-like creature approaches you cautiously. After a few minutes, it says, \"You are greeted, human.\"");
	say();
	gflags[0x013C] = true;
	goto labelFunc01DF_0056;
labelFunc01DF_0052:
	message("The emp approaches you cautiously. After a few minutes, it says, \"You are greeted, human.\"");
	say();
labelFunc01DF_0056:
	message("\"Is more honey had by you?\" The Emp asks hopefully.");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc01DF_0079;
	if (!var0000) goto labelFunc01DF_0072;
	Func087C();
	goto labelFunc01DF_0076;
labelFunc01DF_0072:
	message("\"No honey is had by you,\" says the Emp, obviously disappointed.");
	say();
labelFunc01DF_0076:
	goto labelFunc01DF_007D;
labelFunc01DF_0079:
	message("Obviously disappointed, the Emp says, \"That is too bad. What is your wish?\"");
	say();
labelFunc01DF_007D:
	UI_add_answer(["name", "job", "bye"]);
labelFunc01DF_008D:
	converse attend labelFunc01DF_01E6;
	case "name" attend labelFunc01DF_017B:
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
	message("\"Terandan is my name.\"");
	say();
	var0009 = "he";
labelFunc01DF_0138:
	if (!(var0002 == 0x0002)) goto labelFunc01DF_014C;
	message("\"Sendala is my name.\"");
	say();
	var0009 = "she";
labelFunc01DF_014C:
	if (!(var0002 == 0x0003)) goto labelFunc01DF_0160;
	message("\"Tvellum is my name.\"");
	say();
	var0009 = "he";
labelFunc01DF_0160:
	if (!(var0002 == 0x0004)) goto labelFunc01DF_0174;
	message("\"Simrek is my name.\"");
	say();
	var0009 = "she";
labelFunc01DF_0174:
	UI_remove_answer("name");
labelFunc01DF_017B:
	case "job" attend labelFunc01DF_018E:
	message("\"No job is had by me. Food is gathered by me.\"");
	say();
	UI_add_answer("food");
labelFunc01DF_018E:
	case "food" attend labelFunc01DF_01AA:
	message("\"Fruit, milk, cheese are eaten by Emps.");
	say();
	UI_add_answer(["fruits", "milk", "cheese"]);
labelFunc01DF_01AA:
	case "cheese", "milk" attend labelFunc01DF_01C6:
	message("\"Cheese and milk are liked by Emps, but they are hard to find. Only from humans can these foods be found.\"");
	say();
	UI_remove_answer(["cheese", "milk"]);
labelFunc01DF_01C6:
	case "fruits" attend labelFunc01DF_01D8:
	message("\"Fruits are found easily in the forest,\" ");
	message(var0009);
	message(" says. \"They are what Emps use as food most often.\"");
	say();
labelFunc01DF_01D8:
	case "bye" attend labelFunc01DF_01E3:
	goto labelFunc01DF_01E6;
labelFunc01DF_01E3:
	goto labelFunc01DF_008D;
labelFunc01DF_01E6:
	endconv;
	message("\"Farewell is said to you.\"*");
	say();
labelFunc01DF_01EB:
	if (!(event == 0x0000)) goto labelFunc01DF_01F4;
	abort;
labelFunc01DF_01F4:
	return;
}


