#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func01F8 shape#(0x1F8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event != 0x0001)) goto labelFunc01F8_0009;
	return;
labelFunc01F8_0009:
	if (!UI_in_gump_mode()) goto labelFunc01F8_0014;
	UI_close_gumps();
labelFunc01F8_0014:
	var0000 = UI_get_barge(item);
	if (!var0000) goto labelFunc01F8_00E8;
	if (!(!UI_get_item_flag(0xFE9C, 0x000A))) goto labelFunc01F8_00D0;
	var0001 = UI_find_nearby(item, 0x01F8, 0x0019, 0x0000);
	var0002 = var0001[0x0001];
	enum();
labelFunc01F8_004B:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc01F8_0091;
	var0006 = UI_get_object_position(var0005);
	var0007 = UI_get_object_position(var0002);
	if (!((var0006[0x0001] < var0007[0x0001]) && (var0006[0x0002] < var0007[0x0002]))) goto labelFunc01F8_008E;
	var0002 = var0005;
labelFunc01F8_008E:
	goto labelFunc01F8_004B;
labelFunc01F8_0091:
	Func090D(var0002, 0x0000, 0x0000, 0x0001, 0x01F8, var0002, 0x000A);
	UI_set_item_flag(item, 0x0014);
	UI_clear_item_flag(0xFE9C, 0x0014);
	UI_set_item_flag(item, 0x000A);
	UI_set_item_flag(var0000, 0x001A);
	goto labelFunc01F8_00E8;
labelFunc01F8_00D0:
	UI_clear_item_flag(item, 0x0014);
	UI_clear_item_flag(item, 0x000A);
	UI_clear_item_flag(item, 0x001A);
labelFunc01F8_00E8:
	return;
}


