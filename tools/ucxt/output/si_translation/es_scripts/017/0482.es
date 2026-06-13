#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0482 object#(0x482) ()
{
	if (!(event == 0x0001)) goto labelFunc0482_002E;
	UI_item_say(0xFE9C, "@A metal man!@");
	0xFF7E->Func07D1();
	Func097F(0xFF7E, "@Who goes there?@", 0x0003);
	UI_set_schedule_type(0xFF7E, 0x0003);
labelFunc0482_002E:
	if (!(event == 0x0009)) goto labelFunc0482_0116;
	UI_run_schedule(0xFF7E);
	UI_clear_item_say(0xFF7E);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Halt! It is our duty to question thee. Dost thou serve Order or dost thou serve Chaos?\"");
	say();
	UI_add_answer(["I serve Order", "I serve Chaos"]);
labelFunc0482_005F:
	converse attend labelFunc0482_0115;
	case "I serve Order" attend labelFunc0482_0085:
	UI_remove_answer("I serve Order");
	message("\"Very well. We have been left here to watch for any survivors of Chaos who might come from the depths of these passages. There is no escape from this place save for these doors and still no one can obtain passage through them.\"");
	say();
	UI_add_answer(["escape", "passage", "bye"]);
labelFunc0482_0085:
	case "escape" attend labelFunc0482_0098:
	UI_remove_answer("escape");
	message("\"As thou hast seen or surely wilt see, this is not a place that sustains life. There is no safe way out of this place.\"");
	say();
labelFunc0482_0098:
	case "passage" attend labelFunc0482_00AB:
	UI_remove_answer("passage");
	message("\"These doors will not open without the proper keys. Not even we have them. This is not an exit.\"");
	say();
labelFunc0482_00AB:
	case "I serve Chaos" attend labelFunc0482_00E7:
	UI_remove_answer("I serve Chaos");
	message("\"Thanks to thee for thine identification.\"");
	say();
	UI_set_schedule_type(0xFF7E, 0x0000);
	UI_set_schedule_type(0xFF7D, 0x0000);
	UI_set_schedule_type(0xFF7C, 0x0000);
	UI_set_schedule_type(0xFF7B, 0x0000);
	abort;
labelFunc0482_00E7:
	case "bye" attend labelFunc0482_0112:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@I have heard enough.@", 0x0000);
	Func097F(0xFF7E, "@Always serving.@", 0x0003);
	goto labelFunc0482_0115;
labelFunc0482_0112:
	goto labelFunc0482_005F;
labelFunc0482_0115:
	endconv;
labelFunc0482_0116:
	return;
}


