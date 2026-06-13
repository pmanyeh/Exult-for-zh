#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func0421 object#(0x421) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0421_016E;
	UI_show_npc_face(0xFFDF, 0x0000);
	var0000 = Func08F7(0xFFDE);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A2])) goto labelFunc0421_003D;
	message("You see a child that has recently grown into toddlerhood.");
	say();
	gflags[0x00A2] = true;
	goto labelFunc0421_0041;
labelFunc0421_003D:
	message("\"Whee! Yoooo!\" intones Nicholas.");
	say();
labelFunc0421_0041:
	converse attend labelFunc0421_0169;
	case "name" attend labelFunc0421_007F:
	if (!var0000) goto labelFunc0421_0074;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"His name is Nicholas.\"");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFDF, 0x0000);
	goto labelFunc0421_0078;
labelFunc0421_0074:
	message("\"Nick-las\".");
	say();
labelFunc0421_0078:
	UI_remove_answer("name");
labelFunc0421_007F:
	case "job" attend labelFunc0421_00F8:
	var0001 = UI_get_schedule_type(0xFFDF);
	if (!(var0001 == 0x0019)) goto labelFunc0421_00A3;
	message("The toddler is obviously deeply engaged in a game of tag and will not stop to speak.*");
	say();
	abort;
	goto labelFunc0421_00F8;
labelFunc0421_00A3:
	if (!var0000) goto labelFunc0421_00E7;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"Why, his job is to wet his diaper! Is that not right, Nicholas?\" Nanna says in baby-talk.");
	say();
	UI_show_npc_face(0xFFDF, 0x0000);
	message("\"Whee! Dia-per!\"");
	say();
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"Nicholas is one of our orphans. He was left in front of the castle one morning. 'Tis a sad state of affairs when this kind of thing happens.\"");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFDF, 0x0000);
	goto labelFunc0421_00EB;
labelFunc0421_00E7:
	message("\"Whee! Dia-per!\"");
	say();
labelFunc0421_00EB:
	UI_add_answer(["wet", "diaper"]);
labelFunc0421_00F8:
	case "wet" attend labelFunc0421_012A:
	message("You notice that Nicholas' diaper is wet.");
	say();
	if (!var0000) goto labelFunc0421_011F;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"Oh, my. He's wet, is he not? Couldst thou be a dear and change him for me? I would appreciate it!\"");
	say();
	UI_remove_npc_face(0xFFDE);
labelFunc0421_011F:
	message("\"Yeeee! Dia-per! Geeee!\" Nicholas says happily.");
	say();
	UI_remove_answer("wet");
labelFunc0421_012A:
	case "diaper" attend labelFunc0421_015B:
	if (!var0000) goto labelFunc0421_0150;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"The diapers are there on that table. If thou wouldst just use one\ton Nicholas....\"");
	say();
	UI_remove_npc_face(0xFFDE);
	goto labelFunc0421_0154;
labelFunc0421_0150:
	message("Nicholas points to the diapers on the table.");
	say();
labelFunc0421_0154:
	UI_remove_answer("diaper");
labelFunc0421_015B:
	case "bye" attend labelFunc0421_0166:
	goto labelFunc0421_0169;
labelFunc0421_0166:
	goto labelFunc0421_0041;
labelFunc0421_0169:
	endconv;
	message("\"Bye bye!\"*");
	say();
labelFunc0421_016E:
	if (!(event == 0x0000)) goto labelFunc0421_01E5;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDF));
	if (!(var0001 == 0x0019)) goto labelFunc0421_01E5;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc0421_01AB;
	var0003 = "@Tag! Thou it!@";
labelFunc0421_01AB:
	if (!(var0002 == 0x0002)) goto labelFunc0421_01BB;
	var0003 = "@Catch me! Catch me!@";
labelFunc0421_01BB:
	if (!(var0002 == 0x0003)) goto labelFunc0421_01CB;
	var0003 = "@Nyah nyah!@";
labelFunc0421_01CB:
	if (!(var0002 == 0x0004)) goto labelFunc0421_01DB;
	var0003 = "@Tag! Whee!@";
labelFunc0421_01DB:
	UI_item_say(0xFFDF, var0003);
labelFunc0421_01E5:
	return;
}


