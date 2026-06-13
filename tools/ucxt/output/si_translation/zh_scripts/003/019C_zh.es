#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);
extern var Func0994 0x994 ();

void Func019C shape#(0x19C) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x000B)) goto labelFunc019C_003D;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6C]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x019C], 0x0002);
labelFunc019C_003D:
	if (!(event == 0x0002)) goto labelFunc019C_0129;
	var0001 = UI_find_nearest(0xFE9C, 0x019C, 0x000F);
	var0002 = UI_get_object_position(var0001);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	var0002[0x0002] = (var0002[0x0002] - 0x0003);
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc019C_011F;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc019C_010B;
	UI_set_item_frame(item, 0x0001);
	if (!(Func0994() == 0x0015)) goto labelFunc019C_00C2;
	var0001 = UI_set_item_quality(item, 0x000D);
	UI_clear_item_flag(item, 0x0012);
	gflags[0x0222] = true;
labelFunc019C_00C2:
	if (!((Func0994() == 0x0014) && gflags[0x021B])) goto labelFunc019C_00E7;
	var0001 = UI_set_item_quality(item, 0x000E);
	UI_clear_item_flag(item, 0x0012);
	gflags[0x0221] = true;
labelFunc019C_00E7:
	if (!(Func0994() == 0x0011)) goto labelFunc019C_0108;
	var0001 = UI_set_item_quality(item, 0x000F);
	UI_clear_item_flag(item, 0x0012);
	gflags[0x0220] = true;
labelFunc019C_0108:
	goto labelFunc019C_011F;
labelFunc019C_010B:
	if (!(UI_get_item_frame(item) < 0x0006)) goto labelFunc019C_011F;
	UI_set_item_frame(item, 0x0000);
labelFunc019C_011F:
	var0001 = UI_update_last_created(var0002);
labelFunc019C_0129:
	return;
}


