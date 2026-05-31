#game "blackgate"
void Func06A2 object#(0x6A2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	var0000 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	enum();
labelFunc06A2_0012:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06A2_00FC;
	var0004 = UI_get_item_quality(var0003);
	var0005 = UI_get_item_frame(var0003);
	var0006 = UI_get_object_position(var0003);
	if (!(var0005 == 0x0006)) goto labelFunc06A2_00F9;
	if (!(var0004 == 0x0003)) goto labelFunc06A2_00AA;
	var0007 = UI_create_new_object(0x02A3);
	UI_set_item_frame(var0007, 0x0010);
	var0008 = var0006;
	var0008[0x0001] = (var0008[0x0001] - 0x0001);
	var0009 = UI_update_last_created(var0008);
	UI_sprite_effect(0x000D, (var0006[0x0001] - 0x0002), (var0006[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc06A2_00AA:
	if (!(var0004 == 0x0007)) goto labelFunc06A2_00F9;
	var000A = UI_create_new_object(0x03E7);
	UI_set_item_frame(var000A, 0x0001);
	var0009 = UI_update_last_created(var0006);
	UI_sprite_effect(0x000D, (var0006[0x0001] - 0x0001), (var0006[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc06A2_00F9:
	goto labelFunc06A2_0012;
labelFunc06A2_00FC:
	var000B = UI_execute_usecode_array(item, [(byte)0x27, 0x0006, (byte)0x52, "@NO!, No. No...@", (byte)0x27, 0x000E, (byte)0x55, 0x06A0]);
	UI_play_sound_effect(0x0044);
	return;
}


