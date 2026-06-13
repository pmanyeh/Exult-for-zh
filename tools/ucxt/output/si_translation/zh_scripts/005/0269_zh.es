#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);

void Func0269 shape#(0x269) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x000B)) goto labelFunc0269_003D;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6C]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0269], 0x0002);
labelFunc0269_003D:
	if (!(event == 0x0002)) goto labelFunc0269_00C9;
	var0002 = UI_get_object_position(0xFE9C);
	var0002[0x0001] = (var0002[0x0001] - 0x0004);
	var0002[0x0002] = (var0002[0x0002] - 0x0000);
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc0269_00BF;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc0269_00AB;
	UI_set_item_frame(item, 0x0001);
	UI_clear_item_flag(item, 0x0012);
	var0001 = UI_set_item_quality(item, 0x000B);
	gflags[0x0224] = true;
	goto labelFunc0269_00BF;
labelFunc0269_00AB:
	if (!(UI_get_item_frame(item) < 0x0006)) goto labelFunc0269_00BF;
	UI_set_item_frame(item, 0x0000);
labelFunc0269_00BF:
	var0001 = UI_update_last_created(var0002);
labelFunc0269_00C9:
	return;
}


