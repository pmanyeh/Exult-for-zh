#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);
extern void Func0976 0x976 (var var0000, var var0001);

void Func0146 shape#(0x146) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x000A)) goto labelFunc0146_003D;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6C]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02E5], 0x0002);
labelFunc0146_003D:
	if (!(event == 0x0002)) goto labelFunc0146_00C2;
	var0001 = UI_find_nearest(0xFE9C, 0x0146, 0x000A);
	var0002 = UI_get_object_position(var0001);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	var0002[0x0002] = (var0002[0x0002] + 0x0001);
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc0146_00B8;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc0146_00A4;
	UI_set_item_frame(item, 0x0001);
	goto labelFunc0146_00B8;
labelFunc0146_00A4:
	if (!(UI_get_item_frame(item) < 0x0006)) goto labelFunc0146_00B8;
	UI_set_item_frame(item, 0x0000);
labelFunc0146_00B8:
	var0001 = UI_update_last_created(var0002);
labelFunc0146_00C2:
	if (!(event == 0x0001)) goto labelFunc0146_022F;
	var0003 = UI_get_item_quality(item);
	var0004 = UI_click_on_item();
	if (!gflags[0x0004]) goto labelFunc0146_00FD;
	if (!(!(var0003 == 0x0002))) goto labelFunc0146_00FD;
	UI_set_item_frame(item, 0x000D);
	var0001 = UI_set_item_quality(item, 0x0004);
labelFunc0146_00FD:
	if (!((var0003 > 0x0001) && (var0003 < 0x0008))) goto labelFunc0146_014C;
	if (!(UI_get_item_shape(var0004) == 0x0268)) goto labelFunc0146_014C;
	UI_set_item_shape(var0004, 0x0154);
	UI_set_item_frame(var0004, (var0003 - 0x0001));
	var0001 = UI_delayed_execute_usecode_array(var0004, [(byte)0x58, 0x0030, (byte)0x2D], 0x01F4);
labelFunc0146_014C:
	UI_play_sound_effect2(0x0024, item);
	if (!(var0003 == 0x0001)) goto labelFunc0146_0168;
	UI_set_item_flag(var0004, 0x0001);
labelFunc0146_0168:
	if (!(var0003 == 0x0002)) goto labelFunc0146_0192;
	var0005 = UI_die_roll(0x0001, 0x000A);
	var0006 = (0x000D - var0005);
	Func0976(var0004, var0006);
labelFunc0146_0192:
	if (!(var0003 == 0x0003)) goto labelFunc0146_01CE;
	UI_clear_item_flag(var0004, 0x0008);
	UI_clear_item_flag(var0004, 0x0007);
	UI_clear_item_flag(var0004, 0x0001);
	UI_clear_item_flag(var0004, 0x0002);
	UI_clear_item_flag(var0004, 0x0003);
labelFunc0146_01CE:
	if (!(var0003 == 0x0004)) goto labelFunc0146_01E2;
	UI_set_item_flag(var0004, 0x0008);
labelFunc0146_01E2:
	if (!(var0003 == 0x0005)) goto labelFunc0146_01F6;
	UI_clear_item_flag(var0004, 0x0001);
labelFunc0146_01F6:
	if (!(var0003 == 0x0006)) goto labelFunc0146_020A;
	UI_set_item_flag(var0004, 0x0009);
labelFunc0146_020A:
	if (!(var0003 == 0x0007)) goto labelFunc0146_021B;
	UI_cause_light(0x0064);
labelFunc0146_021B:
	if (!(var0003 == 0x0008)) goto labelFunc0146_022F;
	UI_set_item_flag(var0004, 0x0000);
labelFunc0146_022F:
	return;
}


