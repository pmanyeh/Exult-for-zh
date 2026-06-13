#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0669 object#(0x669) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0669_00B1;
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Quas@");
	if (!Func0951()) goto labelFunc0669_009B;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x67, (byte)0x6A, (byte)0x58, 0x0043]);
	var0001 = UI_find_nearby(item, 0x0097, 0x0019, 0x00B0);
	var0001 = (var0001 & UI_find_nearby(item, 0x0098, 0x0019, 0x00B0));
	var0001 = (var0001 & UI_find_nearby(item, 0x0212, 0x0019, 0x00B0));
	if (!var0001) goto labelFunc0669_0098;
	enum();
labelFunc0669_0073:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0669_0098;
	var0000 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x0669], 0x0006);
	goto labelFunc0669_0073;
labelFunc0669_0098:
	goto labelFunc0669_00B1;
labelFunc0669_009B:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x67, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0669_00B1:
	if (!(event == 0x0002)) goto labelFunc0669_013A;
	var0005 = [0x0212];
	var0006 = UI_get_item_shape(item);
	if (!(var0006 in var0005)) goto labelFunc0669_010E;
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0669_010B;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x2D], 0x0006);
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0669_010B:
	goto labelFunc0669_013A;
labelFunc0669_010E:
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x2D], 0x0006);
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0669_013A:
	return;
}


