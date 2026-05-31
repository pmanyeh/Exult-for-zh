#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);

void Func04D9 object#(0x4D9) ()
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
	var var000F;

	if (!(event == 0x0001)) goto labelFunc04D9_01BD;
	UI_show_npc_face(0xFF27, 0x0000);
	var0000 = UI_get_npc_object(0xFF27);
	var0001 = UI_get_npc_object(0xFF26);
	var0002 = Func0908();
	var0003 = Func0909();
	var0004 = "the Avatar";
	var0005 = UI_get_alignment(var0000);
	if (!(var0005 == 0x0001)) goto labelFunc04D9_0068;
	message("The gargoyle's hatred is so bitter that he resists the spell.*");
	say();
	UI_set_alignment(var0000, 0x0002);
	UI_set_alignment(var0001, 0x0002);
	abort;
	goto labelFunc04D9_01BD;
labelFunc04D9_0068:
	var0006 = UI_get_schedule_type(var0000);
	if (!(var0006 == 0x0010)) goto labelFunc04D9_01B8;
	UI_add_answer(["name", "job", "bye"]);
	message("The gargoyle stares at you, displeased at the interruption.");
	say();
labelFunc04D9_0090:
	converse attend labelFunc04D9_01B4;
	case "name" attend labelFunc04D9_0191:
	message("\"To have no desire to tell you. To demand to know who you are!\"");
	say();
	UI_remove_answer("name");
	var0007 = Func090B([var0002, var0004, var0003]);
	if (!(var0007 == var0004)) goto labelFunc04D9_018C;
	message("As the gargoyle looks up at you, anger crosses his face. He stands quickly, overturning his drink.");
	say();
	var0008 = 0x0000;
	var0009 = UI_get_party_list();
	enum();
labelFunc04D9_00D4:
	for (var000C in var0009 with var000A to var000B) attend labelFunc04D9_00EC;
	var0008 = (var0008 + 0x0001);
	goto labelFunc04D9_00D4;
labelFunc04D9_00EC:
	if (!(var0008 == 0x0001)) goto labelFunc04D9_0105;
	var000D = "human";
	var000E = " he says, pointing at you.";
	goto labelFunc04D9_0111;
labelFunc04D9_0105:
	var000D = "humans";
	var000E = " he says, pointing at you and your companions.";
labelFunc04D9_0111:
	message("\"^");
	message(var000D);
	message("!\"");
	message(var000E);
	message(" \"To be the cause for our unhappiness.\"");
	say();
	var000F = Func08F7(0xFF26);
	if (!var000F) goto labelFunc04D9_015C;
	UI_show_npc_face(0xFF26, 0x0000);
	message("The gargoyle by his side also rises.~~\"To be the reason for our poverty. To die, ");
	message(var000D);
	message(", to die!\"*");
	say();
	UI_remove_npc_face(0xFF26);
	UI_show_npc_face(0xFF27, 0x0000);
	message("The two gargoyles force the table from their path with ease as they charge to attack you.*");
	say();
	goto labelFunc04D9_0160;
labelFunc04D9_015C:
	message("He forces the table from his path with ease as he charges to attack you.*");
	say();
labelFunc04D9_0160:
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0000, 0x0002);
	UI_set_alignment(var0001, 0x0002);
	abort;
	goto labelFunc04D9_0191;
labelFunc04D9_018C:
	message("\"To tell you to go away!\"*");
	say();
	abort;
labelFunc04D9_0191:
	case "job" attend labelFunc04D9_01A4:
	message("\"To have none!\" He glares fiercly at you.\"");
	say();
	UI_remove_answer("job");
labelFunc04D9_01A4:
	case "bye" attend labelFunc04D9_01B1:
	message("He grunts his dismissal.*");
	say();
	abort;
labelFunc04D9_01B1:
	goto labelFunc04D9_0090;
labelFunc04D9_01B4:
	endconv;
	goto labelFunc04D9_01BD;
labelFunc04D9_01B8:
	message("Though he glares as he passes, the gargoyle seems much too intent on reaching his destination to bother with you.*");
	say();
	abort;
labelFunc04D9_01BD:
	if (!(event == 0x0000)) goto labelFunc04D9_01C6;
	abort;
labelFunc04D9_01C6:
	return;
}


