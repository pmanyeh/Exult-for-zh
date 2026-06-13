#game "serpentisle"
void Func0917 0x917 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!(var0001 == 0x0001)) goto labelFunc0917_0041;
	var0002 = 0xFFFC;
	var0003 = 0x007C;
	var0004 = UI_find_nearby(var0000[0x0001], 0x00C7, 0x0019, 0x0000);
	var0005 = UI_execute_usecode_array(var0004, [(byte)0x54, 0x000C, 0x0000]);
labelFunc0917_0041:
	if (!(var0001 == 0x0000)) goto labelFunc0917_0057;
	var0002 = 0x0004;
	var0003 = 0x0034;
labelFunc0917_0057:
	enum();
labelFunc0917_0058:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc0917_007E;
	var0009 = UI_get_item_frame_rot(var0008);
	UI_set_item_frame_rot(var0008, (var0009 + var0002));
	goto labelFunc0917_0058;
labelFunc0917_007E:
	UI_play_sound_effect(var0003);
	return;
}


