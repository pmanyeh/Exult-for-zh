#game "serpentisle"
void Func01BD shape#(0x1BD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_item_frame(item);
	var0001 = UI_click_on_item();
	if (!(!var0001)) goto labelFunc01BD_0017;
	return;
labelFunc01BD_0017:
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x032A)) goto labelFunc01BD_009E;
	if (!(!(var0000 == 0x0001))) goto labelFunc01BD_0037;
	return;
labelFunc01BD_0037:
	var0003 = UI_get_item_quality(var0001);
	var0004 = false;
	if (!(var0003 == 0x0000)) goto labelFunc01BD_0050;
	return;
labelFunc01BD_0050:
	if (!(var0003 == 0x000A)) goto labelFunc01BD_0062;
	UI_set_item_frame(item, 0x0002);
labelFunc01BD_0062:
	if (!(var0003 == 0x000B)) goto labelFunc01BD_0074;
	UI_set_item_frame(item, 0x0003);
labelFunc01BD_0074:
	if (!(var0003 == 0x000C)) goto labelFunc01BD_0086;
	UI_set_item_frame(item, 0x0004);
labelFunc01BD_0086:
	UI_set_item_frame(var0001, 0x0000);
	var0005 = UI_set_item_quality(var0001, 0x0000);
	return;
labelFunc01BD_009E:
	if (!(var0002 == 0x0326)) goto labelFunc01BD_00F6;
	if (!(gflags[0x00D0] && (var0000 == 0x0004))) goto labelFunc01BD_00C2;
	gflags[0x00D0] = false;
	UI_set_item_frame(item, 0x0007);
labelFunc01BD_00C2:
	if (!(gflags[0x00D2] && (var0000 == 0x0002))) goto labelFunc01BD_00DC;
	gflags[0x00D2] = false;
	UI_set_item_frame(item, 0x0005);
labelFunc01BD_00DC:
	if (!(gflags[0x00D1] && (var0000 == 0x0003))) goto labelFunc01BD_00F6;
	gflags[0x00D1] = false;
	UI_set_item_frame(item, 0x0006);
labelFunc01BD_00F6:
	return;
}


