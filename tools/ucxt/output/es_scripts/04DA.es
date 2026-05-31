#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);

void Func04DA object#(0x4DA) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc04DA_01A4;
	UI_show_npc_face(0xFF26, 0x0000);
	var0000 = UI_get_npc_object(0xFF26);
	var0001 = UI_get_npc_object(0xFF27);
	var0002 = Func0908();
	var0003 = Func0909();
	var0004 = "the Avatar";
	var0005 = UI_get_alignment(var0001);
	if (!(var0005 == 0x0001)) goto labelFunc04DA_0068;
	message("The gargoyle's anger is so great that he resists the spell.*");
	say();
	UI_set_alignment(var0000, 0x0002);
	UI_set_alignment(var0001, 0x0002);
	abort;
	goto labelFunc04DA_01A4;
labelFunc04DA_0068:
	var0006 = UI_get_schedule_type(var0000);
	if (!(var0006 == 0x0010)) goto labelFunc04DA_019F;
	UI_add_answer(["name", "job", "bye"]);
	message("The gargoyle is obviously displeased with the intrusion of your presence.");
	say();
labelFunc04DA_0090:
	converse attend labelFunc04DA_019B;
	case "name" attend labelFunc04DA_0178:
	message("\"To have no desire to tell you. To demand to know who you are!\"");
	say();
	UI_remove_answer("name");
	var0007 = Func090B([var0002, var0004, var0003]);
	if (!(var0007 == var0004)) goto labelFunc04DA_0173;
	var0008 = 0x0000;
	var0009 = UI_get_party_list();
	enum();
labelFunc04DA_00D0:
	for (var000C in var0009 with var000A to var000B) attend labelFunc04DA_00E8;
	var0008 = (var0008 + 0x0001);
	goto labelFunc04DA_00D0;
labelFunc04DA_00E8:
	if (!(var0008 == 0x0001)) goto labelFunc04DA_00FB;
	var000D = "human";
	goto labelFunc04DA_0101;
labelFunc04DA_00FB:
	var000D = "humans";
labelFunc04DA_0101:
	message("The gargoyle growls as he turns to look at you. He stands, ");
	say();
	var000E = Func08F7(0xFF27);
	if (!var000E) goto labelFunc04DA_013D;
	message("setting a hand on the shoulder of the gargoyle next to him.*");
	say();
	UI_show_npc_face(0xFF27, 0x0000);
	message("The other gargoyle also stands. Anger flashes across his face as he points a finger at you.~~ \"To be the cause for our unhappiness, ");
	message(var000D);
	message("!\"*");
	say();
	UI_remove_npc_face(0xFF27);
	UI_show_npc_face(0xFF26, 0x0000);
labelFunc04DA_013D:
	message("\"To be the reason for our poverty. To die, ");
	message(var000D);
	message(", to die!\"*");
	say();
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0001, 0x0002);
	UI_set_alignment(var0000, 0x0002);
	abort;
	goto labelFunc04DA_0178;
labelFunc04DA_0173:
	message("\"To tell you to go away!\"*");
	say();
	abort;
labelFunc04DA_0178:
	case "job" attend labelFunc04DA_018B:
	message("\"To have none!\" He glares fiercly at you.\"");
	say();
	UI_remove_answer("job");
labelFunc04DA_018B:
	case "bye" attend labelFunc04DA_0198:
	message("He grunts his dismissal.*");
	say();
	abort;
labelFunc04DA_0198:
	goto labelFunc04DA_0090;
labelFunc04DA_019B:
	endconv;
	goto labelFunc04DA_01A4;
labelFunc04DA_019F:
	message("The gargoyle stops only long enough to give you a menacing stare.*");
	say();
	abort;
labelFunc04DA_01A4:
	if (!(event == 0x0000)) goto labelFunc04DA_01AD;
	abort;
labelFunc04DA_01AD:
	return;
}


