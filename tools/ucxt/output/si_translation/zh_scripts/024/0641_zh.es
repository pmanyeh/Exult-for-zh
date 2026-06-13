#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0641 object#(0x641) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0641_00A9;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func0979(var0000);
	UI_item_say(item, "@An Nox@");
	if (!Func0951()) goto labelFunc0641_008C;
	if (!UI_is_npc(var0000)) goto labelFunc0641_006C;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0040, (byte)0x66, (byte)0x65, (byte)0x67]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0641], 0x0006);
	goto labelFunc0641_0089;
labelFunc0641_006C:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0641_0089:
	goto labelFunc0641_00A9;
labelFunc0641_008C:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0641_00A9:
	if (!(event == 0x0002)) goto labelFunc0641_00C9;
	UI_clear_item_flag(item, 0x0008);
	UI_clear_item_flag(item, 0x0007);
	UI_clear_item_flag(item, 0x0024);
labelFunc0641_00C9:
	return;
}


