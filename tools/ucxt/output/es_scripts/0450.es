#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0877 0x877 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0450 object#(0x450) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0450_0182;
	UI_show_npc_face(0xFFB0, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00E3]) goto labelFunc0450_002F;
	UI_add_answer("Nastassia");
labelFunc0450_002F:
	if (!gflags[0x00E4]) goto labelFunc0450_0042;
	if (!gflags[0x00F2]) goto labelFunc0450_0042;
	UI_add_answer("Zinaida");
labelFunc0450_0042:
	if (!(!gflags[0x00ED])) goto labelFunc0450_0058;
	message("This flamboyant bard exudes a festive aura.");
	say();
	message("\"I have sung about thee in many a song! And here thou art in the flesh! I recognized thee immediately.\" The man bows. \"Welcome, Avatar!\"");
	say();
	gflags[0x00ED] = true;
	goto labelFunc0450_005C;
labelFunc0450_0058:
	message("\"Greetings again, Avatar!\" De Maria bows.");
	say();
labelFunc0450_005C:
	converse attend labelFunc0450_017D;
	case "name" attend labelFunc0450_0083:
	message("\"I am De Maria, the Bard.\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x00E4]) goto labelFunc0450_007F;
	UI_add_answer("Zinaida");
labelFunc0450_007F:
	gflags[0x00F2] = true;
labelFunc0450_0083:
	case "job" attend labelFunc0450_00AA:
	message("\"I spin tales and sing songs!\"");
	say();
	if (!(!gflags[0x00E3])) goto labelFunc0450_00AA;
	message("\"I also know a good deal about the folks in Cove.\"");
	say();
	UI_add_answer(["tale", "song", "folks"]);
labelFunc0450_00AA:
	case "tale", "song", "folks" attend labelFunc0450_00EE:
	message("\"What if I combine all three? Shall I sing a song which is a tale about the people of Cove?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0450_00DA;
	message("\"Very well, then!\"");
	say();
	UI_push_answers();
	Func0877();
	UI_pop_answers();
	goto labelFunc0450_00DE;
labelFunc0450_00DA:
	message("\"'Tis thy choice... and thy mistake!\"");
	say();
labelFunc0450_00DE:
	UI_remove_answer(["tale", "song", "folks"]);
labelFunc0450_00EE:
	case "Nastassia" attend labelFunc0450_012A:
	message("\"Ah, dear Nastassia. Wouldst thou like to hear her tale?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0450_011F;
	message("\"Very well, then!\"");
	say();
	UI_push_answers();
	Func0877();
	UI_pop_answers();
	UI_remove_answer("Nastassia");
	goto labelFunc0450_012A;
labelFunc0450_011F:
	message("\"Oh. I thought thou wert curious. Never mind then.\"");
	say();
	UI_remove_answer("Nastassia");
labelFunc0450_012A:
	case "Zinaida" attend labelFunc0450_016F:
	message("\"My love! My flower! Mine angel! The provider of the sweetest nectar my mouth has ever known! She is the light of my day! The notes of my songs! The flesh of my...\"~~");
	say();
	var0002 = Func08F7(0xFFB1);
	if (!var0002) goto labelFunc0450_0164;
	UI_show_npc_face(0xFFB1, 0x0000);
	message("\"Enough, my love. I think the Avatar dost know thy meaning!\"*");
	say();
	UI_remove_npc_face(0xFFB1);
	UI_show_npc_face(0xFFB0, 0x0000);
labelFunc0450_0164:
	message("De Maria stops his reverie, sighs, and smiles at you. \"Thou dost apprehend my meaning...\"");
	say();
	UI_remove_answer("Zinaida");
labelFunc0450_016F:
	case "bye" attend labelFunc0450_017A:
	goto labelFunc0450_017D;
labelFunc0450_017A:
	goto labelFunc0450_005C;
labelFunc0450_017D:
	endconv;
	message("\"Do take care of thyself!\"*");
	say();
labelFunc0450_0182:
	if (!(event == 0x0000)) goto labelFunc0450_0190;
	Func092E(0xFFB0);
labelFunc0450_0190:
	return;
}


