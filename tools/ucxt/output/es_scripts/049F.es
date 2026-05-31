#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A2 0x8A2 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049F object#(0x49F) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc049F_0120;
	UI_show_npc_face(0xFF61, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0201])) goto labelFunc049F_0047;
	message("You see a young woman with an intellectual bearing.");
	say();
	gflags[0x0201] = true;
	goto labelFunc049F_0051;
labelFunc049F_0047:
	message("\"Greetings, ");
	message(var0000);
	message(". As usual, I have much to do. However, I can spare a moment for thee if necessary.\"");
	say();
labelFunc049F_0051:
	converse attend labelFunc049F_0115;
	case "name" attend labelFunc049F_006D:
	message("\"I am Jillian, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc049F_006D:
	case "job" attend labelFunc049F_0099:
	message("\"I am a scholar, ");
	message(var0001);
	message(". I also tutor and train those who seek knowledge here in Moonglow.\"");
	say();
	UI_add_answer(["Moonglow", "tutor"]);
	if (!gflags[0x01F6]) goto labelFunc049F_0099;
	UI_add_answer("North East sea");
labelFunc049F_0099:
	case "Moonglow" attend labelFunc049F_00AC:
	message("\"The town occupies almost the entire island of the same name. The island is located due east and a few degrees south of the city of Britain.\"");
	say();
	UI_remove_answer("Moonglow");
labelFunc049F_00AC:
	case "North East sea" attend labelFunc049F_00BF:
	message("\"Long ago there was a small continent -- an island really -- called Ambrosia. However, meteorites struck it, destroying its primary city. The island was located in the North East sea. I suppose the ruins still lie far beneath the rubble.\"");
	say();
	UI_remove_answer("North East sea");
labelFunc049F_00BF:
	case "tutor" attend labelFunc049F_0107:
	var0002 = UI_part_of_day();
	if (!((var0002 >= 0x0003) || (var0002 <= 0x0006))) goto labelFunc049F_0103;
	message("\"My price is 35 gold for each training session. Art thou willing to pay that?\"");
	say();
	if (!Func090A()) goto labelFunc049F_00FC;
	Func08A2([0x0006, 0x0002], 0x0023);
	goto labelFunc049F_0100;
labelFunc049F_00FC:
	message("\"Then I really should return to my studies.\"");
	say();
labelFunc049F_0100:
	goto labelFunc049F_0107;
labelFunc049F_0103:
	message("\"A better time to train thee would be when I am in my study.\"");
	say();
labelFunc049F_0107:
	case "bye" attend labelFunc049F_0112:
	goto labelFunc049F_0115;
labelFunc049F_0112:
	goto labelFunc049F_0051;
labelFunc049F_0115:
	endconv;
	message("\"Fare thee well, ");
	message(var0000);
	message(",\" she says, returning to her previous activity.*");
	say();
labelFunc049F_0120:
	if (!(event == 0x0000)) goto labelFunc049F_012E;
	Func092E(0xFF61);
labelFunc049F_012E:
	return;
}


