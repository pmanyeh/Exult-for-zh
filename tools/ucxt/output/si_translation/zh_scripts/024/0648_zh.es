#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();
extern void Func0948 0x948 (var var0000);

void Func0648 object#(0x648) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0648_0086;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_item_say(item, "@An Zu@");
	if (!(Func0951() && (var0000[0x0001] != 0x0000))) goto labelFunc0648_006B;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0040, (byte)0x65, (byte)0x67]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0648], 0x0005);
	goto labelFunc0648_0086;
labelFunc0648_006B:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0648_0086:
	if (!(event == 0x0002)) goto labelFunc0648_00A7;
	if (!UI_is_npc(item)) goto labelFunc0648_00A1;
	UI_clear_item_flag(item, 0x0001);
	goto labelFunc0648_00A7;
labelFunc0648_00A1:
	Func0948(0x003C);
labelFunc0648_00A7:
	return;
}


