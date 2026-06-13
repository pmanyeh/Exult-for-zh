#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func094A 0x94A (var var0000);

void Func062E object#(0x62E) ()
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

	if (!(event == 0x000A)) goto labelFunc062E_0085;
	var0000 = UI_get_container(item);
	if (!(!var0000)) goto labelFunc062E_0081;
	var0001 = Func090C(0xFE9C, item);
	var0002 = UI_get_object_position(item);
	var0003 = UI_set_last_created(item);
	if (!var0003) goto labelFunc062E_007D;
	var0003 = UI_give_last_created(0xFE9C);
	if (!(!var0003)) goto labelFunc062E_005D;
	var0003 = UI_update_last_created(var0002);
	UI_flash_mouse(0x0004);
	abort;
	goto labelFunc062E_007A;
labelFunc062E_005D:
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0001, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x55, 0x062E]);
labelFunc062E_007A:
	goto labelFunc062E_007E;
labelFunc062E_007D:
	return;
labelFunc062E_007E:
	goto labelFunc062E_0085;
labelFunc062E_0081:
	UI_close_gumps();
labelFunc062E_0085:
	if (!((event == 0x0002) || var0000)) goto labelFunc062E_00F7;
	var0004 = UI_click_on_item();
	var0005 = UI_get_item_shape(var0004);
	if (!(var0005 == 0x0105)) goto labelFunc062E_00EB;
	var0006 = [0x0000, 0xFFFF, 0xFFFE];
	var0007 = [0x0001, 0x0001, 0x0001];
	var0008 = 0xFFFF;
	Func090D(var0004, var0006, var0007, var0008, 0x0105, var0004, 0x000A);
	goto labelFunc062E_00F7;
labelFunc062E_00EB:
	var0009 = "@Why dost thou not weave cloth with that thread on the loom?@";
	Func094A(var0009);
labelFunc062E_00F7:
	return;
}


