#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func08F6 0x8F6 (var var0000);

void Func064A object#(0x64A) ()
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
	var var000C;

	if (!(event == 0x0001)) goto labelFunc064A_00F0;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Wis Jux@");
	if (!Func0906()) goto labelFunc064A_00DC;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0042, (byte)0x65, (byte)0x67]);
	var0001 = Func08F6(0xFE9C);
	var0002 = (0x0015 + var0001);
	var0003 = UI_find_nearby(item, 0x00C8, var0002, 0x00B0);
	enum();
labelFunc064A_0054:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc064A_0079;
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x064A], 0x0005);
	goto labelFunc064A_0054;
labelFunc064A_0079:
	var0007 = UI_find_nearby(item, 0x0320, var0002, 0x00B0);
	var0008 = UI_find_nearby(item, 0x020A, var0002, 0x00B0);
	var0009 = (var0007 & var0008);
	enum();
labelFunc064A_00A6:
	for (var0006 in var0009 with var000A to var000B) attend labelFunc064A_00D9;
	if (!(UI_get_item_quality(var0006) == 0x00FF)) goto labelFunc064A_00D6;
	var0000 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x064A], 0x0005);
labelFunc064A_00D6:
	goto labelFunc064A_00A6;
labelFunc064A_00D9:
	goto labelFunc064A_00F0;
labelFunc064A_00DC:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064A_00F0:
	if (!(event == 0x0002)) goto labelFunc064A_011F;
	var000C = UI_get_object_position(item);
	UI_sprite_effect(0x0010, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc064A_011F:
	return;
}


