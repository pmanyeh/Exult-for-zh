#game "serpentisle"
void Func093E 0x93E (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = [0x0108, 0x0116, 0x029F, 0x00C9, 0x00CB, 0x019F];
	var0002 = [0x0004, 0x0006, 0x0012, 0x0013, 0x0015, 0x0020];
	var0003 = UI_get_array_size(var0001);
	var0004 = UI_get_random(var0003);
	var0005 = UI_create_new_object(var0001[var0004]);
	if (!var0005) goto labelFunc093E_0080;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(var0005, (UI_get_random(var0002[var0004]) - 0x0001));
	var0006 = UI_update_last_created(var0000);
labelFunc093E_0080:
	return;
}


