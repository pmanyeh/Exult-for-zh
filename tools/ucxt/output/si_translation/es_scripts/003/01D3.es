#game "serpentisle"
void Func01D3 shape#(0x1D3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc01D3_00BB;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 < 0x0002)) goto labelFunc01D3_00BB;
	var0001 = UI_click_on_item();
	if (!(!var0001)) goto labelFunc01D3_0029;
	return;
labelFunc01D3_0029:
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x02D2)) goto labelFunc01D3_00BB;
	var0003 = UI_get_item_quantity(var0001, var0002);
	if (!(var0003 > 0x0001)) goto labelFunc01D3_0068;
	var0004 = UI_set_item_quantity(var0001, (var0003 - 0x0001));
	goto labelFunc01D3_006F;
labelFunc01D3_0068:
	UI_remove_item(var0001);
labelFunc01D3_006F:
	var0005 = UI_create_new_object(0x0238);
	if (!var0005) goto labelFunc01D3_00BB;
	var0004 = UI_set_item_quantity(var0005, 0x0001);
	var0006 = UI_get_object_position(0xFE9C);
	var0004 = UI_update_last_created([(var0006[0x0001] + 0x0001), var0006[0x0002], var0006[0x0003]]);
	UI_remove_item(item);
labelFunc01D3_00BB:
	return;
}


