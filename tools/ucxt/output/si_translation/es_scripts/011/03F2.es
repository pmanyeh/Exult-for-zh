#game "serpentisle"
void Func03F2 shape#(0x3F2) ()
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

	if (!(event == 0x0002)) goto labelFunc03F2_014F;
	var0000 = UI_find_nearby(item, 0x03FB, 0x000A, 0x0000);
	var0001 = UI_find_nearby(var0000, 0xFE99, 0x0005, 0x0000);
	var0002 = UI_get_object_position(var0000);
	enum();
labelFunc03F2_0037:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc03F2_008F;
	var0006 = UI_get_object_position(var0005);
	if (!(var0006[0x0003] == 0x0001)) goto labelFunc03F2_008C;
	var0007 = UI_set_last_created(var0005);
	if (!var0007) goto labelFunc03F2_008C;
	var0006[0x0001] = (var0006[0x0001] - 0x0001);
	var0006[0x0003] = 0x0000;
	var0007 = UI_update_last_created(var0006);
labelFunc03F2_008C:
	goto labelFunc03F2_0037;
labelFunc03F2_008F:
	if (!(UI_get_item_frame(var0000) < 0x000A)) goto labelFunc03F2_00C7;
	if (!var0000) goto labelFunc03F2_00C4;
	var0007 = UI_execute_usecode_array(var0000, [(byte)0x46, 0x0000, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x000A, (byte)0x55, 0x03F2]);
labelFunc03F2_00C4:
	goto labelFunc03F2_014F;
labelFunc03F2_00C7:
	var0008 = UI_get_object_position(var0000);
	var0008[0x0001] = (var0008[0x0001] - 0x0001);
	var0008[0x0002] = (var0008[0x0002] - 0x0001);
	var0008[0x0003] = 0x0001;
	var0007 = UI_create_new_object(0x0392);
	if (!var0007) goto labelFunc03F2_0145;
	UI_set_item_frame(var0007, 0x0000);
	if (!gflags[0x0007]) goto labelFunc03F2_012E;
	gflags[0x0007] = false;
	var0007 = UI_set_item_quality(var0007, 0x0001);
	goto labelFunc03F2_013B;
labelFunc03F2_012E:
	var0007 = UI_set_item_quality(var0007, 0x0000);
labelFunc03F2_013B:
	var0007 = UI_update_last_created(var0008);
labelFunc03F2_0145:
	UI_set_item_frame(var0000, 0x0000);
labelFunc03F2_014F:
	return;
}


