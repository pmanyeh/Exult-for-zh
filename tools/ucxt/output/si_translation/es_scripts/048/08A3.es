#game "serpentisle"
void Func08A3 0x8A3 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(gflags[0x02C4] && (gflags[0x02C5] && (gflags[0x02C6] && (gflags[0x02C7] && (gflags[0x02C8] && (gflags[0x02CA] && (gflags[0x02CB] && (!gflags[0x02CC]))))))))) goto labelFunc08A3_0098;
	var0000 = UI_find_nearby(item, 0x0382, 0x0019, 0x0000);
	var0001 = UI_get_object_position(var0000);
	var0001[0x0003] = 0x0001;
	var0002 = UI_create_new_object(0x00D1);
	if (!var0002) goto labelFunc08A3_0095;
	UI_set_item_frame(var0002, 0x000B);
	if (!UI_update_last_created(var0001)) goto labelFunc08A3_006F;
	gflags[0x02CC] = true;
labelFunc08A3_006F:
	UI_sprite_effect(0x0012, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x006C);
labelFunc08A3_0095:
	goto labelFunc08A3_0104;
labelFunc08A3_0098:
	var0000 = UI_find_nearby(item, 0x0382, 0x0019, 0x0000);
	var0001 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0009, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002B);
	if (!(!gflags[0x02C9])) goto labelFunc08A3_0100;
	var0003 = UI_set_item_quality(item, 0x00CD);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07FA], 0x0005);
labelFunc08A3_0100:
	gflags[0x02C9] = true;
labelFunc08A3_0104:
	return;
}


