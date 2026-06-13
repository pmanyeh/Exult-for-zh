#game "serpentisle"
void Func047C object#(0x47C) ()
{
	var var0000;

	if (!(event == 0x0007)) goto labelFunc047C_004F;
	UI_show_npc_face0(0xFF58, 0x0000);
	message("\"Why dost thou interrupt my dreaming? Canst thou not see that I have important matters to attend to?\" *\"Argh! I am waking...\"");
	say();
	UI_remove_npc_face0();
	var0000 = UI_get_object_position(item);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF84);
labelFunc047C_004F:
	if (!(event == 0x0001)) goto labelFunc047C_006E;
	UI_show_npc_face0(0xFF58, 0x0000);
	message("\"Ah, Avatar!\" ~\"This is as it should be... The food is good, the wine is sweet and the company is warm! Wouldst thou care to join me?\"");
	say();
	message("\"Still bound by thy quest, I see.\" ~\"Well, if thou dost change thy mind, thou art welcome here any time.\" *\"Oh, and Avatar?\" ~\"Thou shouldst honestly relax a bit...\"");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc047C_006E:
	return;
}


