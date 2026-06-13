#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0941 0x941 (var var0000);

void Func0642 object#(0x642) ()
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
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc0642_00F4;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Wis Jux@");
	if (!Func0951()) goto labelFunc0642_00DE;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0043, (byte)0x65, (byte)0x67]);
	var0001 = Func0941(0xFE9C);
	var0002 = (0x0015 + var0001);
	var0003 = UI_find_nearby(item, 0x00C8, var0002, 0x00B0);
	enum();
labelFunc0642_0056:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0642_007B;
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x0642], 0x0005);
	goto labelFunc0642_0056;
labelFunc0642_007B:
	var0007 = UI_find_nearby(item, 0x0320, var0002, 0x00B0);
	var0008 = UI_find_nearby(item, 0x020A, var0002, 0x00B0);
	var0009 = (var0007 & var0008);
	enum();
labelFunc0642_00A8:
	for (var0006 in var0009 with var000A to var000B) attend labelFunc0642_00DB;
	if (!(UI_get_item_quality(var0006) >= 0x00FA)) goto labelFunc0642_00D8;
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x0642], 0x0005);
labelFunc0642_00D8:
	goto labelFunc0642_00A8;
labelFunc0642_00DB:
	goto labelFunc0642_00F4;
labelFunc0642_00DE:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0642_00F4:
	if (!((event == 0x0002) || (event == 0x0003))) goto labelFunc0642_011C;
	UI_obj_sprite_effect(item, 0x0010, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0642_011C:
	return;
}


