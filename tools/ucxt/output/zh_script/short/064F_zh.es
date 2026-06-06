#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func064F object#(0x64F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc064F_00AF;
	var0000 = UI_get_object_position(item);
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas An Zu@");
	if (!Func0906()) goto labelFunc064F_009B;
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x58, 0x0044, (byte)0x65, (byte)0x67]);
	var0002 = 0x0019;
	var0003 = UI_find_nearby(item, 0xFFFF, var0002, 0x0004);
	enum();
labelFunc064F_0076:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc064F_0098;
	var0001 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x064F]);
	goto labelFunc064F_0076;
labelFunc064F_0098:
	goto labelFunc064F_00AF;
labelFunc064F_009B:
	var0001 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc064F_00AF:
	if (!(event == 0x0002)) goto labelFunc064F_00C4;
	UI_halt_scheduled(item);
	UI_clear_item_flag(item, 0x0001);
labelFunc064F_00C4:
	return;
}


