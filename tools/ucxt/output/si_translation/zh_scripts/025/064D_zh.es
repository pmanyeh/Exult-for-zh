#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func064D object#(0x64D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc064D_008F;
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@Mani@");
	if (!(Func0951() && UI_is_npc(var0000))) goto labelFunc064D_006E;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6D, (byte)0x58, 0x0040, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x67]);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x064D], 0x0005);
	goto labelFunc064D_008F;
labelFunc064D_006E:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6D, (byte)0x61, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064D_008F:
	if (!(event == 0x0002)) goto labelFunc064D_00D3;
	var0003 = UI_get_npc_prop(item, 0x0000);
	var0004 = UI_get_npc_prop(item, 0x0003);
	if (!(var0004 <= var0003)) goto labelFunc064D_00D3;
	var0005 = ((var0003 - var0004) / 0x0002);
	var0002 = UI_set_npc_prop(item, 0x0003, var0005);
labelFunc064D_00D3:
	return;
}


