#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();
extern void Func0936 0x936 (var var0000, var var0001);

void Func0679 object#(0x679) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!((event == 0x0001) || ((event == 0x0004) && (UI_get_npc_number(item) == 0xFE9C)))) goto labelFunc0679_0088;
	UI_halt_scheduled(item);
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_item_say(item, "@Corp Por@");
	if (!Func0906()) goto labelFunc0679_006B;
	var0002 = UI_set_to_attack(item, var0000, 0x020F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x58, 0x0041, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x7A]);
	goto labelFunc0679_0088;
labelFunc0679_006B:
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0679_0088:
	if (!((event == 0x0004) && (item != 0xFE9C))) goto labelFunc0679_00EC;
	if (!UI_is_npc(item)) goto labelFunc0679_00B9;
	var0003 = UI_get_npc_prop(0xFE9C, 0x0002);
	var0004 = UI_get_npc_prop(item, 0x0002);
	goto labelFunc0679_00C5;
labelFunc0679_00B9:
	var0003 = 0x0000;
	var0004 = 0x0001;
labelFunc0679_00C5:
	var0005 = UI_get_item_flag(item, 0x000E);
	if (!((var0003 > var0004) && (var0005 == false))) goto labelFunc0679_00EC;
	Func0936(item, 0x007F);
	UI_kill_npc(item);
labelFunc0679_00EC:
	return;
}


