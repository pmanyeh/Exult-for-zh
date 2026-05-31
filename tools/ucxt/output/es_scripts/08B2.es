#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func08B2 0x8B2 ()
{
	var var0000;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0908();
	message("Horance looks at you curiously, \"Thy task is done here in Skara Brae. Thou hast my respect and lifelong gratitude.\"");
	say();
	if (!gflags[0x017C]) goto labelFunc08B2_0025;
	message("But...,\" he hesitates here as if unsure how to proceed, \"...shouldst thou not return to the quest which brought thee here?\"");
	say();
	UI_add_answer("quest");
labelFunc08B2_0025:
	UI_add_answer(["Skara Brae", "bye"]);
labelFunc08B2_0032:
	converse attend labelFunc08B2_007F;
	case "quest" attend labelFunc08B2_0056:
	if (!(!gflags[0x01B0])) goto labelFunc08B2_004B;
	message("\"Why, yes. I sense that the spirit of Caine has not left the island yet. Is he not waiting for thy return?\"");
	say();
	goto labelFunc08B2_004F;
labelFunc08B2_004B:
	message("\"Thou wert brought to Britannia for a reason, I surmise. If thou dost not know what it is, shouldst thou not seek it out?\"");
	say();
labelFunc08B2_004F:
	UI_remove_answer("quest");
labelFunc08B2_0056:
	case "Skara Brae" attend labelFunc08B2_0069:
	message("\"I intend to restore this town and furthermore, make it a place of beauty and renown. I enjoin thee to return in future times to see if my boast doth come to pass.\"");
	say();
	UI_remove_answer("Skara Brae");
labelFunc08B2_0069:
	case "bye" attend labelFunc08B2_007C:
	message("\"Goodbye, ");
	message(var0000);
	message(". I hope that thou farest well in thy quest.\" He turns away.*");
	say();
	abort;
labelFunc08B2_007C:
	goto labelFunc08B2_0032;
labelFunc08B2_007F:
	endconv;
	if (!(event == 0x0000)) goto labelFunc08B2_0089;
	abort;
labelFunc08B2_0089:
	return;
}


