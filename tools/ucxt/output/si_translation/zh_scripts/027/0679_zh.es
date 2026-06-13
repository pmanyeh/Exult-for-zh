#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();
extern void Func0982 0x982 (var var0000, var var0001);

void Func0679 object#(0x679) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!((event == 0x0001) || ((event == 0x0004) && (UI_get_npc_number(item) == 0xFE9C)))) goto labelFunc0679_008C;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Corp Por@");
	if (!Func0951()) goto labelFunc0679_006D;
	var0002 = UI_set_to_attack(item, var0000, 0x020F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x58, 0x0014, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x7A]);
	goto labelFunc0679_008C;
labelFunc0679_006D:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0679_008C:
	if (!((event == 0x0004) && (item != 0xFE9C))) goto labelFunc0679_0115;
	if (!UI_is_npc(item)) goto labelFunc0679_00BD;
	var0003 = UI_get_npc_prop(0xFE9C, 0x0002);
	var0004 = UI_get_npc_prop(item, 0x0002);
	goto labelFunc0679_00C9;
labelFunc0679_00BD:
	var0003 = 0x0000;
	var0004 = 0x0001;
labelFunc0679_00C9:
	var0005 = UI_get_item_flag(item, 0x000E);
	if (!((var0003 > var0004) && (var0005 == false))) goto labelFunc0679_00F8;
	var0006 = (var0003 - var0004);
	Func0982(item, var0006);
	goto labelFunc0679_0115;
labelFunc0679_00F8:
	var0006 = (var0004 - var0003);
	var0007 = UI_get_npc_object(0xFE9C);
	Func0982(var0007, var0006);
labelFunc0679_0115:
	return;
}


