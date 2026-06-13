#game "serpentisle"
void Func071E object#(0x71E) ()
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

	if (!((gflags[0x02A9] == true) && (gflags[0x02AA] == true))) goto labelFunc071E_000F;
	abort;
labelFunc071E_000F:
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	if (!var0001) goto labelFunc071E_0042;
	var0002 = UI_get_object_position(var0001);
	var0003 = UI_get_item_frame(var0001);
labelFunc071E_0042:
	if (!(var0000 == 0x0001)) goto labelFunc071E_0088;
	if (!(var0003 == 0x0000)) goto labelFunc071E_0088;
	UI_sprite_effect(0x001A, (var0002[0x0001] - 0x0002), (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x02A9] = true;
	UI_play_sound_effect(0x0082);
labelFunc071E_0088:
	if (!(var0000 == 0x0000)) goto labelFunc071E_00CE;
	if (!(var0003 == 0x0005)) goto labelFunc071E_00CE;
	UI_sprite_effect(0x0007, (var0002[0x0001] - 0x0002), (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x02AA] = true;
	UI_play_sound_effect(0x0047);
labelFunc071E_00CE:
	if (!((gflags[0x02A9] == true) && (gflags[0x02AA] == true))) goto labelFunc071E_01B9;
	var0004 = UI_find_nearby(item, 0x0204, 0x000F, 0x0000);
	var0004 = (var0004 & UI_find_nearby(item, 0x00F6, 0x000F, 0x0000));
	enum();
labelFunc071E_0103:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc071E_0177;
	var0003 = UI_get_item_frame(var0007);
	if (!((var0003 == 0x0002) || (var0003 == 0x0012))) goto labelFunc071E_0174;
	var0003 = (var0003 - 0x0002);
	UI_set_item_frame(var0007, var0003);
	var0008 = var0007;
	var0002 = UI_get_object_position(var0007);
	UI_sprite_effect(0x0015, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
labelFunc071E_0174:
	goto labelFunc071E_0103;
labelFunc071E_0177:
	var0009 = UI_get_item_shape(var0008);
	if (!(var0009 == 0x00F6)) goto labelFunc071E_01A5;
	var000A = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x55, 0x00F6, 0x0000]);
	goto labelFunc071E_01B9;
labelFunc071E_01A5:
	var000A = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x55, 0x0204]);
labelFunc071E_01B9:
	return;
}


