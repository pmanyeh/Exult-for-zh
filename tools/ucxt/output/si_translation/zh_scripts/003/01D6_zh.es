#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func094A 0x94A (var var0000);

void Func01D6 shape#(0x1D6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x000B)) goto labelFunc01D6_009D;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc01D6_0028;
	var0000 = UI_find_nearby(item, 0x01D6, 0x0005, 0x0000);
	goto labelFunc01D6_002C;
labelFunc01D6_0028:
	var0000 = item;
labelFunc01D6_002C:
	if (!var0000) goto labelFunc01D6_009D;
	UI_halt_scheduled(item);
	UI_halt_scheduled(var0000);
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x46, 0x0001, (byte)0x4D, (byte)0x0B, 0xFFFF, 0x0006, (byte)0x46, 0x0001]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D6], 0x000B);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0004, (byte)0x01, (byte)0x65, (byte)0x67, (byte)0x0B, 0xFFFE, 0x0002]);
	var0001 = UI_set_last_created(item);
	return;
labelFunc01D6_009D:
	if (!(event == 0x0002)) goto labelFunc01D6_0127;
	var0002 = UI_get_object_position(0xFE9C);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	var0002[0x0002] = (var0002[0x0002] + 0x0001);
	UI_set_item_frame(item, 0x0001);
	if (!(Func0994() == 0x0012)) goto labelFunc01D6_00F8;
	var0001 = UI_set_item_quality(item, 0x000A);
	UI_clear_item_flag(item, 0x0012);
	gflags[0x0223] = true;
labelFunc01D6_00F8:
	if (!(Func0994() == 0x0013)) goto labelFunc01D6_0119;
	var0001 = UI_set_item_quality(item, 0x000B);
	UI_clear_item_flag(item, 0x0012);
	gflags[0x0224] = true;
labelFunc01D6_0119:
	var0001 = UI_update_last_created(var0002);
	return;
	goto labelFunc01D6_0137;
labelFunc01D6_0127:
	var0003 = ("@I believe that using a bucket in a well " + "is often more effective than simply spinning the crank.@");
	Func094A(var0003);
labelFunc01D6_0137:
	return;
}


