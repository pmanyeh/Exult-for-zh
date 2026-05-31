#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func0932 0x932 (var var0000);

void Func064E object#(0x64E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc064E_004F;
	UI_item_say(item, "@In Wis@");
	if (!Func0906()) goto labelFunc064E_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x27, 0x0004, (byte)0x55, 0x064E]);
	goto labelFunc064E_004F;
labelFunc064E_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc064E_004F:
	if (!(event == 0x0002)) goto labelFunc064E_00ED;
	var0001 = UI_get_object_position(0xFE9C);
	var0002 = ((var0001[0x0001] - 0x03A5) / 0x000A);
	var0003 = ((var0001[0x0002] - 0x046E) / 0x000A);
	if (!(var0002 < 0x0000)) goto labelFunc064E_00A1;
	var0004 = ((" " + Func0932(var0002)) + " West");
	goto labelFunc064E_00B2;
labelFunc064E_00A1:
	var0004 = ((" " + Func0932(var0002)) + " East");
labelFunc064E_00B2:
	if (!(var0003 < 0x0000)) goto labelFunc064E_00D0;
	var0005 = ((" " + Func0932(var0003)) + " North");
	goto labelFunc064E_00E1;
labelFunc064E_00D0:
	var0005 = ((" " + Func0932(var0003)) + " South");
labelFunc064E_00E1:
	UI_item_say(item, (var0005 + var0004));
labelFunc064E_00ED:
	return;
}


