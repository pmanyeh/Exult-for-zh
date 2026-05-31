#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08C7 0x8C7 ();
extern void Func092E 0x92E (var var0000);

void Func04E9 object#(0x4E9) ()
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

	if (!(event == 0x0001)) goto labelFunc04E9_016B;
	UI_show_npc_face(0xFF17, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF17));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02B8])) goto labelFunc04E9_0042;
	message("You see a young entertainer who beckons to you.");
	say();
	gflags[0x02B8] = true;
	goto labelFunc04E9_0046;
labelFunc04E9_0042:
	message("\"Yes?\" Paul asks.");
	say();
labelFunc04E9_0046:
	converse attend labelFunc04E9_0166;
	case "name" attend labelFunc04E9_005C:
	message("\"I am Paul. My colleagues' names are Meryl and Dustin.\"");
	say();
	UI_remove_answer("name");
labelFunc04E9_005C:
	case "job" attend labelFunc04E9_0078:
	message("\"We perform a Passion Play about The Fellowship. It costs only 2 gold per person to see. If thou dost want us to perform it, please say so.\"");
	say();
	UI_add_answer(["Passion Play", "Fellowship", "perform"]);
labelFunc04E9_0078:
	case "Passion Play" attend labelFunc04E9_008B:
	message("\"A Passion Play is a morality tale performed on stage.\"");
	say();
	UI_remove_answer("Passion Play");
labelFunc04E9_008B:
	case "Fellowship" attend labelFunc04E9_009E:
	message("\"It would be much simpler to view the play.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04E9_009E:
	case "perform" attend labelFunc04E9_0158:
	if (!(!(var0000 == 0x001D))) goto labelFunc04E9_00B8;
	message("\"I am sorry to say we are on our break. Please return to the stage area during normal hours.\"");
	say();
	goto labelFunc04E9_0158;
labelFunc04E9_00B8:
	message("\"Wouldst thou like to see our Passion Play?\"");
	say();
	if (!Func090A()) goto labelFunc04E9_0153;
	var0001 = Func08F7(0xFF16);
	var0002 = Func08F7(0xFF15);
	if (!(var0001 && var0002)) goto labelFunc04E9_014B;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	enum();
labelFunc04E9_00FF:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc04E9_0117;
	var0004 = (var0004 + 0x0001);
	goto labelFunc04E9_00FF;
labelFunc04E9_0117:
	if (!(var0005 >= (var0004 * 0x0002))) goto labelFunc04E9_0143;
	var0009 = UI_remove_party_items(var0004, 0x0284, 0xFE99, 0xFE99, true);
	message("Paul takes your gold. \"We thank thee. If thou wouldst make thyself comfortable, we shall begin.\"");
	say();
	Func08C7();
	goto labelFunc04E9_0148;
labelFunc04E9_0143:
	message("\"Oh dear. I am afraid thou dost not have enough gold to pay for the performance. Some other time, I hope.\"*");
	say();
	abort;
labelFunc04E9_0148:
	goto labelFunc04E9_0150;
labelFunc04E9_014B:
	message("\"I am sorry. It seems my fellow thespians are not available. The Passion Play has temporarily\tclosed.\"*");
	say();
	abort;
labelFunc04E9_0150:
	goto labelFunc04E9_0158;
labelFunc04E9_0153:
	message("\"Some other time, then, I hope.\"*");
	say();
	abort;
labelFunc04E9_0158:
	case "bye" attend labelFunc04E9_0163:
	goto labelFunc04E9_0166;
labelFunc04E9_0163:
	goto labelFunc04E9_0046;
labelFunc04E9_0166:
	endconv;
	message("The actor bows to you.*");
	say();
labelFunc04E9_016B:
	if (!(event == 0x0000)) goto labelFunc04E9_01F2;
	var000A = UI_part_of_day();
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF17));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0000 == 0x001D)) goto labelFunc04E9_01EC;
	if (!(var000B == 0x0001)) goto labelFunc04E9_01AF;
	var000C = "@See the Passion Play!@";
labelFunc04E9_01AF:
	if (!(var000B == 0x0002)) goto labelFunc04E9_01BF;
	var000C = "@The Fellowship presents...@";
labelFunc04E9_01BF:
	if (!(var000B == 0x0003)) goto labelFunc04E9_01CF;
	var000C = "@Come view the Passion Play!@";
labelFunc04E9_01CF:
	if (!(var000B == 0x0004)) goto labelFunc04E9_01DF;
	var000C = "@We shall entertain thee!@";
labelFunc04E9_01DF:
	UI_item_say(0xFF17, var000C);
	goto labelFunc04E9_01F2;
labelFunc04E9_01EC:
	Func092E(0xFF17);
labelFunc04E9_01F2:
	return;
}


