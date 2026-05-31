#game "blackgate"
void Func069E object#(0x69E) ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE2, 0x0001);
	message("A look of grim determination comes to Erethian's lined features. He pushes up his sleeves like a blacksmith about to shoe a high strung horse,");
	say();
	message("\"Careful, now.\" The old mage says solicitously, \"The powers I am about to release are capricious and fickle. I wouldst not like to see something untoward happen to thee.\"");
	say();
	if (!gflags[0x0003]) goto labelFunc069E_001F;
	message("You feel a great surge in the ether as the mage draws power from his surroundings.*");
	say();
	goto labelFunc069E_0023;
labelFunc069E_001F:
	message("You feel a great surge in the ether, which seems to temporarily stabilize it in this area.*");
	say();
labelFunc069E_0023:
	UI_remove_npc_face(0xFEE2);
	var0000 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0009, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x55, 0x069F]);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x0011, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	return;
}


