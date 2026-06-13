#game "serpentisle"
// externs
extern var Func0953 0x953 ();

void Func0830 0x830 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((UI_get_random(0x0003) == 0x0001) && UI_npc_nearby(0xFFF6))) goto labelFunc0830_0119;
	UI_show_npc_face1(0xFED6, 0x0000);
	var0000 = ["MageLord, the documents are ready for thy signature.", "The sorceress Frigidazzi hath arrived, honor.", "Thou art needed in the treasury, MageLord.", "It is time for thine appointment, MageLord.", "MageLord, thou art needed to handle a tax matter.", "Thou art urgently needed, MageLord."];
	var0001 = var0000[UI_get_random(UI_get_array_size(var0000))];
	message("\"");
	message(var0001);
	message("\"");
	say();
	UI_set_conversation_slot(0x0000);
	var0001 = UI_get_random(0x0003);
	if (!(var0001 == 0x0001)) goto labelFunc0830_00F7;
	var0002 = Func0953();
	message("\"Then I must go immediately. Please excuse me, ");
	message(var0002);
	message(".\"");
	say();
	var0003 = UI_get_object_position(0xFFEE);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEE, [0x05F4, 0x078F, 0x0000]);
	var0003 = UI_get_object_position(0xFFF6);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFF6, [0x05F6, 0x078F, 0x0000]);
	abort;
labelFunc0830_00F7:
	if (!(var0001 == 0x0002)) goto labelFunc0830_010B;
	message("\"Surely that can wait! ");
	message(var0002);
	message(", as thou canst see, the strain of ruling this great city hath left me little more than skin and bones...\"");
	say();
labelFunc0830_010B:
	if (!(var0001 > 0x0002)) goto labelFunc0830_0119;
	message("\"In a moment, automaton.\"");
	say();
labelFunc0830_0119:
	return;
}


