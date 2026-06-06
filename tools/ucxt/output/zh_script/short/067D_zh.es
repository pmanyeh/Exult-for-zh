#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func0934 0x934 (var var0000);

void Func067D object#(0x67D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc067D_00E2;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas An Xen Ex@");
	if (!Func0906()) goto labelFunc067D_00CA;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0041, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x067D]);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0002), (var0001[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = 0x0019;
	var0003 = Func0934(var0002);
	enum();
labelFunc067D_0077:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc067D_00C7;
	var0002 = UI_get_distance(item, var0006);
	var0002 = ((var0002 / 0x0004) + 0x0004);
	if (!(!(UI_die_roll(0x0001, 0x0003) == 0x0001))) goto labelFunc067D_00C4;
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x067D], var0002);
labelFunc067D_00C4:
	goto labelFunc067D_0077;
labelFunc067D_00C7:
	goto labelFunc067D_00E2;
labelFunc067D_00CA:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc067D_00E2:
	if (!(event == 0x0002)) goto labelFunc067D_0129;
	var0007 = UI_get_npc_number(item);
	if (!(!(var0007 in [0xFF27, 0xFF26, 0xFE9C]))) goto labelFunc067D_0129;
	var0008 = UI_get_alignment(0xFE9C);
	if (!var0008) goto labelFunc067D_0121;
	UI_set_item_flag(item, 0x0002);
	goto labelFunc067D_0129;
labelFunc067D_0121:
	UI_clear_item_flag(item, 0x0002);
labelFunc067D_0129:
	return;
}


