#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08BD 0x8BD (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0414 object#(0x414) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0414_00F3;
	UI_show_npc_face(0xFFEC, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFEC));
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!(!gflags[0x0054])) goto labelFunc0414_004C;
	message("You see a solid-looking but seemingly bored fighter.");
	say();
	gflags[0x0054] = true;
	goto labelFunc0414_0050;
labelFunc0414_004C:
	message("\"Yes?\" Markus asks.");
	say();
labelFunc0414_0050:
	converse attend labelFunc0414_00EE;
	case "name" attend labelFunc0414_0066:
	message("\"I am Markus the trainer.\"");
	say();
	UI_remove_answer("name");
labelFunc0414_0066:
	case "job" attend labelFunc0414_007F:
	message("\"I am a trainer here in Trinsic,\" he says gruffly. \"If thou dost wish to increase thy skill in combat I can help thee.\"");
	say();
	UI_add_answer(["Trinsic", "train"]);
labelFunc0414_007F:
	case "murder" attend labelFunc0414_0092:
	message("\"I heard about it, but I assure thee I know nothing of the details.\" Markus yawns.");
	say();
	UI_remove_answer("murder");
labelFunc0414_0092:
	case "Trinsic" attend labelFunc0414_00A5:
	message("The fighter shrugs. \"The town is all right.\" He sniffs.");
	say();
	UI_remove_answer("Trinsic");
labelFunc0414_00A5:
	case "train" attend labelFunc0414_00E0:
	if (!(var0001 == 0x0007)) goto labelFunc0414_00D5;
	message("\"The cost to train with me is 20 gold. Too costly, right?\"");
	say();
	if (!(!Func090A())) goto labelFunc0414_00CE;
	Func08BD(0x0004, 0x0014);
	goto labelFunc0414_00D2;
labelFunc0414_00CE:
	message("Markus yawns. \"Very well.\"");
	say();
labelFunc0414_00D2:
	goto labelFunc0414_00E0;
labelFunc0414_00D5:
	message("\"Please come to my place of business during normal daylight hours.\"");
	say();
	UI_remove_answer("train");
labelFunc0414_00E0:
	case "bye" attend labelFunc0414_00EB:
	goto labelFunc0414_00EE;
labelFunc0414_00EB:
	goto labelFunc0414_0050;
labelFunc0414_00EE:
	endconv;
	message("\"Goodbye,\" the fighter bows.*");
	say();
labelFunc0414_00F3:
	if (!(event == 0x0000)) goto labelFunc0414_0101;
	Func092E(0xFFEC);
labelFunc0414_0101:
	return;
}


