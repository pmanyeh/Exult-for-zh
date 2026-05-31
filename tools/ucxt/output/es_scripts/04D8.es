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
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0003]) goto labelFunc04D8_0041;
	if (!(!gflags[0x0295])) goto labelFunc04D8_003A;
	message("You see a winged gargoyle with an authoritative disposition.");
	say();
	gflags[0x0295] = true;
	goto labelFunc04D8_003E;
labelFunc04D8_003A:
	message("\"To offer welcome for you, human,\" says Wis-Sur.");
	say();
labelFunc04D8_003E:
	goto labelFunc04D8_0057;
labelFunc04D8_0041:
	if (!(!gflags[0x0295])) goto labelFunc04D8_0053;
	message("The winged gargoyle in front of you has a wild look about him.");
	say();
	gflags[0x0295] = true;
	goto labelFunc04D8_0057;
labelFunc04D8_0053:
	message("\"To go away, human! To have nothing you want!\" screams Wis-Sur.");
	say();
labelFunc04D8_0057:
	if (!gflags[0x0003]) goto labelFunc04D8_0158;
labelFunc04D8_005D:
	converse attend labelFunc04D8_0150;
	case "name" attend labelFunc04D8_0073:
	message("\"To be named Wis-Sur, which means `wise sun.'\"");
	say();
	UI_remove_answer("name");
labelFunc04D8_0073:
	case "job" attend labelFunc04D8_008C:
	message("\"To sell magic to others.\"");
	say();
	UI_add_answer(["others", "magic"]);
labelFunc04D8_008C:
	case "magic" attend labelFunc04D8_00AF:
	message("\"To be interested in spells, reagents, or potions?\"");
	say();
	UI_add_answer(["spells", "reagents", "potions"]);
	UI_remove_answer("magic");
labelFunc04D8_00AF:
	case "spells" attend labelFunc04D8_00BA:
	Func094C();
labelFunc04D8_00BA:
	case "reagents" attend labelFunc04D8_00C5:
	Func094A();
labelFunc04D8_00C5:
	case "potions" attend labelFunc04D8_00D0:
	Func0949();
labelFunc04D8_00D0:
	case "others" attend labelFunc04D8_00F6:
	message("\"To be familiar with only the other gargoyles in Vesper. To tell you to ask Ansikart, who knows all other gargoyles here. To tell you about one of the following?\"");
	say();
	UI_remove_answer("others");
	UI_add_answer(["Aurvidlem", "Lap-Lem", "For-Lem", "Anmanivas"]);
labelFunc04D8_00F6:
	case "Aurvidlem" attend labelFunc04D8_0109:
	message("\"To be a provisioner in Vesper.\"");
	say();
	UI_remove_answer("Aurvidlem");
labelFunc04D8_0109:
	case "For-Lem" attend labelFunc04D8_011C:
	message("\"To perform assorted duties for town. To be a good, strong worker.\"");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D8_011C:
	case "Lap-Lem" attend labelFunc04D8_012F:
	message("\"To be a miner for the Britannian Mining Company.\"");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04D8_012F:
	case "Anmanivas" attend labelFunc04D8_0142:
	message("\"To be a miner for the Britannian Mining Company.\"");
	say();
	UI_remove_answer("Anmanivas");
labelFunc04D8_0142:
	case "bye" attend labelFunc04D8_014D:
	goto labelFunc04D8_0150;
labelFunc04D8_014D:
	goto labelFunc04D8_005D;
labelFunc04D8_0150:
	endconv;
	message("\"To say farewell, human.\"*");
	say();
	goto labelFunc04D8_01E8;
labelFunc04D8_0158:
	converse attend labelFunc04D8_01E7;
	case "name" attend labelFunc04D8_0168:
	message("\"To wonder why you want to know.\"*");
	say();
	abort;
labelFunc04D8_0168:
	case "job" attend labelFunc04D8_017B:
	message("\"To sell the few items I possess.\"");
	say();
	UI_add_answer("sell");
labelFunc04D8_017B:
	case "sell" attend labelFunc04D8_01D7:
	message("\"To want to buy something?\" He looks at you carefully, as if he is unsure whether to sell to you.~~\"To be possible,\" he says, nodding. \"To ask what you need?\"");
	say();
	var0000 = ["nothing", "spells", "reagents", "potions"];
	var0001 = Func090B(var0000);
	if (!(var0001 == "nothing")) goto labelFunc04D8_01B0;
	message("\"To suspect you are wasting my time!\"");
	say();
labelFunc04D8_01B0:
	if (!(var0001 == "spells")) goto labelFunc04D8_01BD;
	Func094C();
labelFunc04D8_01BD:
	if (!(var0001 == "reagents")) goto labelFunc04D8_01CA;
	Func094A();
labelFunc04D8_01CA:
	if (!(var0001 == "potions")) goto labelFunc04D8_01D7;
	Func0949();
labelFunc04D8_01D7:
	case "bye" attend labelFunc04D8_01E4:
	message("\"To be good that you leave.\"*");
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


