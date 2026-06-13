#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0657 object#(0x657) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0657_0084;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Rel Wis@");
	if (!Func0951()) goto labelFunc0657_006E;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x67, (byte)0x61]);
	UI_set_item_flag(0xFE9C, 0x0022);
	var0001 = 0x2710;
	var0002 = Func09A0(0x0003, 0x0001);
	if (!var0002) goto labelFunc0657_006B;
	var0003 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x2C, (byte)0x55, 0x0657], var0001);
labelFunc0657_006B:
	goto labelFunc0657_0084;
labelFunc0657_006E:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0657_0084:
	if (!(event == 0x0002)) goto labelFunc0657_0096;
	UI_clear_item_flag(0xFE9C, 0x0022);
labelFunc0657_0096:
	return;
}


