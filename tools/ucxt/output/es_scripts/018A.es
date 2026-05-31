#game "blackgate"
void Func018A shape#(0x18A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_schedule_type(UI_get_npc_object(0x018A));
	if (!(event == 0x0001)) goto labelFunc018A_0069;
	UI_show_npc_face(0xFEFE, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	message("You see a tough-looking palace guard who takes his job -very- seriously.");
	say();
labelFunc018A_0034:
	converse attend labelFunc018A_0064;
	case "name" attend labelFunc018A_004A:
	message("\"I am a guard.\"");
	say();
	UI_remove_answer("name");
labelFunc018A_004A:
	case "job" attend labelFunc018A_0056:
	message("The man looks at you like you are an ignoramus. \"I am a guard for the palace, idiot. Thou shouldst go about thy business.\"");
	say();
labelFunc018A_0056:
	case "bye" attend labelFunc018A_0061:
	goto labelFunc018A_0064;
labelFunc018A_0061:
	goto labelFunc018A_0034;
labelFunc018A_0064:
	endconv;
	message("\"Goodbye.\"*");
	say();
labelFunc018A_0069:
	if (!(event == 0x0000)) goto labelFunc018A_00E0;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0x018A));
	if (!(var0001 == 0x001D)) goto labelFunc018A_00E0;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc018A_00A6;
	var0003 = "@Move along!@";
labelFunc018A_00A6:
	if (!(var0002 == 0x0002)) goto labelFunc018A_00B6;
	var0003 = "@Stand aside!@";
labelFunc018A_00B6:
	if (!(var0002 == 0x0003)) goto labelFunc018A_00C6;
	var0003 = "@Go about thy business!@";
labelFunc018A_00C6:
	if (!(var0002 == 0x0004)) goto labelFunc018A_00D6;
	var0003 = "@Keep moving!@";
labelFunc018A_00D6:
	UI_item_say(0x018A, var0003);
labelFunc018A_00E0:
	return;
}


