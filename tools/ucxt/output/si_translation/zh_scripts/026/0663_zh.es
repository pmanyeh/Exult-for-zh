#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func0663 object#(0x663) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0663_00A2;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(var0000);
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Vas Mani@");
	if (!Func0951()) goto labelFunc0663_0085;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x58, 0x0040]);
	if (!UI_is_npc(var0000)) goto labelFunc0663_0082;
	var0003 = UI_get_npc_prop(var0000, 0x0000);
	var0004 = UI_get_npc_prop(var0000, 0x0003);
	var0005 = UI_set_npc_prop(var0000, 0x0003, (var0003 - var0004));
labelFunc0663_0082:
	goto labelFunc0663_00A2;
labelFunc0663_0085:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0663_00A2:
	return;
}


