#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04D5 object#(0x4D5) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04D5_0148;
	UI_show_npc_face(0xFF2B, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	var0001 = Func08F7(0xFF2A);
	if (!var0001) goto labelFunc04D5_003E;
	UI_add_answer("gargoyle");
labelFunc04D5_003E:
	if (!gflags[0x0285]) goto labelFunc04D5_0052;
	UI_remove_answer("gargoyle");
	UI_add_answer("For-Lem");
labelFunc04D5_0052:
	if (!(!gflags[0x0292])) goto labelFunc04D5_0064;
	message("You see before you a young girl with a carefree expression. As she notices you, her eyes grow wide as she exclaims, \"Thou art the person in one of For... one of -my- story books! Thou art the Avatar!\"");
	say();
	gflags[0x0292] = true;
	goto labelFunc04D5_006E;
labelFunc04D5_0064:
	message("\"How dost thou do, ");
	message(var0000);
	message(" Avatar?\" She curtseys.");
	say();
labelFunc04D5_006E:
	converse attend labelFunc04D5_013D;
	case "name" attend labelFunc04D5_008A:
	message("\"My name is Catherine, ");
	message(var0000);
	message(" Avatar.\"");
	say();
	UI_remove_answer("name");
labelFunc04D5_008A:
	case "job" attend labelFunc04D5_00AC:
	message("\"I have no job, ");
	message(var0000);
	message(" Avatar. I live with my father and mother here in Vesper.\"");
	say();
	UI_add_answer(["father", "mother", "Vesper"]);
labelFunc04D5_00AC:
	case "father" attend labelFunc04D5_00DD:
	message("\"He is the overseer at the mines, ");
	message(var0000);
	message(" Avatar.\"");
	say();
	var0002 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0002) goto labelFunc04D5_00D6;
	message("\"Of course, he's gone now...\" She looks down at her feet.");
	say();
labelFunc04D5_00D6:
	UI_remove_answer("father");
labelFunc04D5_00DD:
	case "mother" attend labelFunc04D5_00F6:
	message("\"Yes, ");
	message(var0000);
	message(" Avatar. She is there right now.\" She points, apparently indicating her house.");
	say();
	UI_remove_answer("mother");
labelFunc04D5_00F6:
	case "Vesper" attend labelFunc04D5_010F:
	message("\"That is the name of our city, ");
	message(var0000);
	message(" Avatar. If thou art lost, thou mayest wish to speak with the town clerk.\"");
	say();
	UI_remove_answer("Vesper");
labelFunc04D5_010F:
	case "gargoyle" attend labelFunc04D5_0122:
	message("\"I'm sorry, ");
	message(var0000);
	message(" Avatar, my mother told me never to speak with strangers.\" She quickly turns away.*");
	say();
	abort;
labelFunc04D5_0122:
	case "For-Lem" attend labelFunc04D5_012F:
	message("A tear glistens as it rolls gently down her cheek. \"He is no more. My -- my father killed him for talking to me, and -- and 'tis all thy fault!\" She turns away, sobbing.*");
	say();
	abort;
labelFunc04D5_012F:
	case "bye" attend labelFunc04D5_013A:
	goto labelFunc04D5_013D;
labelFunc04D5_013A:
	goto labelFunc04D5_006E;
labelFunc04D5_013D:
	endconv;
	message("\"Goodbye, ");
	message(var0000);
	message(" Avatar.\"*");
	say();
labelFunc04D5_0148:
	if (!(event == 0x0000)) goto labelFunc04D5_0151;
	abort;
labelFunc04D5_0151:
	return;
}


