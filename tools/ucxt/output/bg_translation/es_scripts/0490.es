#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08D6 0x8D6 ();
extern void Func08D7 0x8D7 ();
extern void Func08D8 0x8D8 ();
extern void Func08D9 0x8D9 ();
extern void Func08DA 0x8DA ();

void Func0490 object#(0x490) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0490_0176;
	if (!(!gflags[0x01B8])) goto labelFunc0490_0022;
	UI_show_npc_face(0xFF70, 0x0000);
	message("The beautiful ghost looks through you with a slack look. Nothing\tyou do seems to attract her attention.*");
	say();
	gflags[0x01A7] = false;
	abort;
labelFunc0490_0022:
	if (!gflags[0x0198]) goto labelFunc0490_002F;
	UI_add_answer("sacrifice");
labelFunc0490_002F:
	var0000 = UI_is_pc_female();
	var0001 = Func0909();
	if (!gflags[0x01A6]) goto labelFunc0490_004F;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D6();
labelFunc0490_004F:
	if (!gflags[0x01AA]) goto labelFunc0490_0062;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D7();
labelFunc0490_0062:
	if (!gflags[0x01A7]) goto labelFunc0490_007C;
	if (!(!gflags[0x01A9])) goto labelFunc0490_007C;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D8();
labelFunc0490_007C:
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(0xFF70);
	if (!((var0002 == 0x0000) || (var0002 == 0x0001))) goto labelFunc0490_00D1;
	if (!(var0003 == 0x000E)) goto labelFunc0490_00B9;
	UI_show_npc_face(0xFF70, 0x0000);
	Func08D9();
	goto labelFunc0490_00D1;
labelFunc0490_00B9:
	if (!(!(var0003 == 0x0010))) goto labelFunc0490_00D1;
	UI_show_npc_face(0xFF70, 0x0000);
	Func08DA();
labelFunc0490_00D1:
	UI_show_npc_face(0xFF70, 0x0000);
	if (!(!gflags[0x01C9])) goto labelFunc0490_00F3;
	message("You see a ghostly lady wearing a long, black gown. Something is a bit strange about the way she looks, but you can't quite place it. After a pause, she says, \"Greetings, ");
	message(var0001);
	message(". I am Rowena, lady of this wondrous tower.\" She gestures around the room, indicating the moldering walls and cobwebbed rafters.");
	say();
	gflags[0x01C9] = true;
	goto labelFunc0490_00FD;
labelFunc0490_00F3:
	message("Rowena smiles in an abstract manner as you approach. \"Ah, thou hast returned, ");
	message(var0001);
	message(". How may the lady of the tower be of assistance to thee?\"");
	say();
labelFunc0490_00FD:
	UI_add_answer(["name", "job", "tower", "bye"]);
labelFunc0490_0110:
	converse attend labelFunc0490_0175;
	case "name" attend labelFunc0490_0126:
	message("\"I am called... Rowena\"");
	say();
	UI_remove_answer("name");
labelFunc0490_0126:
	case "job" attend labelFunc0490_0139:
	message("She stares blankly for a second, then, as if on cue, \"I am the Mistress of the Tower. I tend to my Lord Horance's needs and keep our place looking respectable.\" It would appear that she's been falling behind in the latter duty.");
	say();
	UI_add_answer("Horance");
labelFunc0490_0139:
	case "tower" attend labelFunc0490_014C:
	message("After a moment, \"This is a lovely tower, dost thou not agree?\" Before you can answer, she continues.~~ \"Dost thou see the lovely rays of light playing across the flagstones of the floor? Water sparkles in the fountain. This is truly a beautiful place in which to live.\" Her eyes fix upon the floor.");
	say();
	UI_remove_answer("tower");
labelFunc0490_014C:
	case "Horance" attend labelFunc0490_015F:
	message("She blinks once, then, \"Horance... What a wonderful name. He found me lost and lonely and brought me here to be a lady. Is he not truly the most magnificent of Lords?\"");
	say();
	UI_remove_answer("Horance");
labelFunc0490_015F:
	case "bye" attend labelFunc0490_0172:
	message("She pauses. \"Goodbye, ");
	message(var0001);
	message(". I hope thou hast enjoyed thy visit to our glorious tower. Please, return whenever thou wishest.\" You feel as if you've been speaking to a statue.*");
	say();
	abort;
labelFunc0490_0172:
	goto labelFunc0490_0110;
labelFunc0490_0175:
	endconv;
labelFunc0490_0176:
	if (!(event == 0x0000)) goto labelFunc0490_017F;
	abort;
labelFunc0490_017F:
	return;
}


