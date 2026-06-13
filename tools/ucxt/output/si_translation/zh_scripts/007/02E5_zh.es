#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);

void Func02E5 shape#(0x2E5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x000A) || (event == 0x000B))) goto labelFunc02E5_0043;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6C]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02E5], 0x0002);
labelFunc02E5_0043:
	if (!(event == 0x0002)) goto labelFunc02E5_0110;
	var0002 = UI_find_nearest(0xFE9C, 0x02E5, 0x000A);
	var0003 = UI_get_item_frame(var0002);
	var0004 = UI_get_object_position(var0002);
	var0004[0x0001] = (var0004[0x0001] + 0x0001);
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc02E5_0110;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc02E5_00DA;
	if (!(var0003 > 0x0000)) goto labelFunc02E5_00D7;
	if (!(UI_get_item_shape(var0002) != 0x0146)) goto labelFunc02E5_00CF;
	UI_set_item_frame(var0002, (var0003 - 0x0001));
labelFunc02E5_00CF:
	UI_set_item_frame(item, 0x0001);
labelFunc02E5_00D7:
	goto labelFunc02E5_0106;
labelFunc02E5_00DA:
	if (!(var0003 < 0x0003)) goto labelFunc02E5_0106;
	UI_set_item_frame(var0002, (var0003 + 0x0001));
	if (!(UI_get_item_frame(item) < 0x0006)) goto labelFunc02E5_0106;
	UI_set_item_frame(item, 0x0000);
labelFunc02E5_0106:
	var0001 = UI_update_last_created(var0004);
labelFunc02E5_0110:
	return;
}


