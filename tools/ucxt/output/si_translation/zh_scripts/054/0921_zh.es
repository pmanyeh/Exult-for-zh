#game "serpentisle"
void Func0921 0x921 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_item_quality(var0000);
	if (!(var0001 == 0x005B)) goto labelFunc0921_0089;
	if (!(!gflags[0x0265])) goto labelFunc0921_0059;
	UI_obj_sprite_effect(var0000, 0x0009, 0x0002, 0x0004, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0701], 0x0008);
	UI_play_sound_effect(0x0027);
	abort;
	goto labelFunc0921_0089;
labelFunc0921_0059:
	UI_item_say(0xFE9C, "@Isal Sal Cra Gaas Iskar!@");
	UI_obj_sprite_effect(var0000, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_music(0x0035, var0000);
labelFunc0921_0089:
	return;
}


