#game "serpentisle"
// externs
extern void Func0178 shape#(0x178) ();

void Func08BC 0x8BC ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc08BC_0132;
	if (!(UI_get_item_quality(item) == 0x0003)) goto labelFunc08BC_0048;
	var0000 = UI_find_nearby(0xFE9C, 0x00F3, 0x0028, 0x0000);
	if (!var0000) goto labelFunc08BC_0048;
	if (!(!gflags[0x0248])) goto labelFunc08BC_0048;
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07E7]);
labelFunc08BC_0048:
	if (!(UI_get_item_quality(item) == 0x0005)) goto labelFunc08BC_00FD;
	var0002 = (UI_get_object_position(item) & (0x0049 & 0x0016));
	var0003 = UI_find_nearby(var0002, 0x0178, 0x0005, 0x0000);
	var0002[0x0005] = 0x000E;
	var0004 = UI_find_nearby(var0002, 0x01B1, 0x0005, 0x0000);
	if (!(var0003 && var0004)) goto labelFunc08BC_00FD;
	UI_set_item_frame(var0003, 0x0014);
	UI_set_item_frame(var0004, 0x000C);
	event = 0x0001;
	var0003->Func0178();
	var0002 = (UI_get_object_position(0xFE9C) & (0x00DE & 0x0000));
	var0000 = UI_find_nearby(var0002, 0x00F3, 0x0028, 0x0000);
	if (!var0000) goto labelFunc08BC_00FD;
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0005, (byte)0x55, 0x0526]);
labelFunc08BC_00FD:
	if (!(UI_get_item_quality(item) == 0x0006)) goto labelFunc08BC_0132;
	if (!(!gflags[0x0248])) goto labelFunc08BC_0132;
	gflags[0x0248] = true;
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x55, 0x0526]);
	UI_remove_item(item);
labelFunc08BC_0132:
	if (!(event == 0x0002)) goto labelFunc08BC_016A;
	if (!((UI_get_item_shape(item) == 0x00F3) && (!gflags[0x0248]))) goto labelFunc08BC_016A;
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "Scratch... scratch.", (byte)0x27, 0x000F, (byte)0x55, 0x07E7], 0x000A);
labelFunc08BC_016A:
	return;
}


