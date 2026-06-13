#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0653 object#(0x653) ()
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
	var var0009;

	if (!(event == 0x0001)) goto labelFunc0653_0103;
	UI_halt_scheduled(item);
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = [0x00C8, 0x0113];
	var0002 = [];
	UI_item_say(item, "@Wis Jux Ylem@");
	if (!Func0951()) goto labelFunc0653_00EB;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0082, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0004 = 0x000F;
	enum();
labelFunc0653_0056:
	for (var0007 in var0001 with var0005 to var0006) attend labelFunc0653_007B;
	var0002 = (var0002 & UI_find_nearby(var0000, var0007, var0004, 0x0010));
	goto labelFunc0653_0056;
labelFunc0653_007B:
	if (!(UI_get_array_size(var0002) > 0x0000)) goto labelFunc0653_00CE;
	enum();
labelFunc0653_008A:
	for (var0007 in var0002 with var0008 to var0009) attend labelFunc0653_00CB;
	var0003 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x065D], 0x0005);
	UI_obj_sprite_effect(var0007, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0653_008A;
labelFunc0653_00CB:
	goto labelFunc0653_00E8;
labelFunc0653_00CE:
	UI_obj_sprite_effect(item, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0653_00E8:
	goto labelFunc0653_0103;
labelFunc0653_00EB:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0653_0103:
	return;
}


