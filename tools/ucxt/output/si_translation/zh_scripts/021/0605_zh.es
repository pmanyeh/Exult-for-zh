#game "serpentisle"
void Func0605 object#(0x605) ()
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

	var0000 = UI_find_nearby(item, 0x01B2, 0x0050, 0x0000);
	enum();
labelFunc0605_0012:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0605_00C3;
	var0004 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0004) goto labelFunc0605_00C0;
	if (!(UI_get_item_quality(var0004) == 0x00D2)) goto labelFunc0605_00C0;
	var0005 = UI_get_object_position(var0003);
	UI_remove_item(var0003);
	if (!(!gflags[0x02FE])) goto labelFunc0605_007F;
	var0006 = [(var0005[0x0001] + 0x0008), var0005[0x0002], var0005[0x0003]];
	gflags[0x02FE] = true;
	goto labelFunc0605_009F;
labelFunc0605_007F:
	var0006 = [(var0005[0x0001] - 0x0008), var0005[0x0002], var0005[0x0003]];
	gflags[0x02FE] = false;
labelFunc0605_009F:
	var0007 = UI_create_new_object(0x01B2);
	if (!var0007) goto labelFunc0605_00C0;
	UI_play_sound_effect(0x0069);
	var0008 = UI_update_last_created(var0006);
labelFunc0605_00C0:
	goto labelFunc0605_0012;
labelFunc0605_00C3:
	return;
}


