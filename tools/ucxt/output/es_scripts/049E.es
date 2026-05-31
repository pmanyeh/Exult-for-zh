#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);

void Func049E object#(0x49E) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc049E_016C;
	UI_show_npc_face(0xFF62, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0200])) goto labelFunc049E_0040;
	message("The man before you shyly looks away.");
	say();
	gflags[0x0200] = true;
	goto labelFunc049E_0051;
labelFunc049E_0040:
	message("\"H-H-How m-m-may I h-h-help thee, ");
	message(var0001);
	message("?\"");
	say();
	UI_add_answer("stutter");
labelFunc049E_0051:
	converse attend labelFunc049E_0167;
	case "stutter" attend labelFunc049E_0061:
	message("\"What st-st-stutter?\"  He turns to leave.*");
	say();
	abort;
labelFunc049E_0061:
	case "Moonglow" attend labelFunc049E_0074:
	message("He points to the ground. \"That is here!\"");
	say();
	UI_remove_answer("Moonglow");
labelFunc049E_0074:
	case "name" attend labelFunc049E_008E:
	message("\"M-M-Morz.\"");
	say();
	UI_add_answer("stutter");
	UI_remove_answer("name");
labelFunc049E_008E:
	case "job" attend labelFunc049E_00AD:
	message("\"I work with C-C-Cubolt, f-f-farming here.\"");
	say();
	UI_add_answer(["Cubolt", "C-C-Cubolt", "stutter", "here"]);
labelFunc049E_00AD:
	case "here" attend labelFunc049E_00C7:
	message("\"M-M-Moonglow.\"");
	say();
	UI_add_answer("Moonglow");
	UI_remove_answer("here");
labelFunc049E_00C7:
	case "C-C-Cubolt", "T-T-Tolemac" attend labelFunc049E_00D7:
	message("\"That is n-n-not f-f-funny!\" He blushes, and angrily turns away.*");
	say();
	abort;
labelFunc049E_00D7:
	case "Cubolt" attend labelFunc049E_0100:
	message("\"He is T-T-Tolemac's older br-br-brother. I t-t-trust him.\"");
	say();
	UI_add_answer(["Tolemac", "T-T-Tolemac", "stutter"]);
	UI_remove_answer(["Cubolt", "C-C-Cubolt"]);
labelFunc049E_0100:
	case "Tolemac" attend labelFunc049E_0120:
	message("\"T-T-Tolemac is m-m-my f-f-friend. I've kn-kn-known h-h-him f-f-for a long t-t-time. He just joined The F-F-Fellowship. He wants m-m-me t-t-to join, t-t-too.\"");
	say();
	UI_add_answer("Fellowship");
	UI_remove_answer(["Tolemac", "T-T-Tolemac"]);
labelFunc049E_0120:
	case "Fellowship" attend labelFunc049E_0140:
	message("\"T-T-Tolemac says they d-d-do m-m-many g-g-good things and they would h-h-help m-m-me m-m-make f-f-friends m-m-more easily. C-C-Cubolt thinks they're b-b-bad. I d-d-do not kn-kn-know what t-t-to d-d-do.\"");
	say();
	if (!gflags[0x01D7]) goto labelFunc049E_0139;
	UI_add_answer("don't join");
labelFunc049E_0139:
	UI_remove_answer("Fellowship");
labelFunc049E_0140:
	case "don't join" attend labelFunc049E_0159:
	message("\"Thou d-d-dost n-n-not think I should join? C-C-Cubolt does not want m-m-me t-t-to either. I s-s-suppose I won't. I thank thee.\"");
	say();
	Func0911(0x0014);
	UI_remove_answer("don't join");
labelFunc049E_0159:
	case "bye" attend labelFunc049E_0164:
	goto labelFunc049E_0167;
labelFunc049E_0164:
	goto labelFunc049E_0051;
labelFunc049E_0167:
	endconv;
	message("\"B-b-bye.\"*");
	say();
labelFunc049E_016C:
	if (!(event == 0x0000)) goto labelFunc049E_0175;
	abort;
labelFunc049E_0175:
	return;
}


