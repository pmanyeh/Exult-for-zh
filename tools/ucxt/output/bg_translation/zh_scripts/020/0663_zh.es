#game "blackgate"
// externs
extern var Func0906 0x906 ();
extern var Func0934 0x934 (var var0000);

void Func0663 object#(0x663) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0663_00F9;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Des Sanct@");
	if (!Func0906()) goto labelFunc0663_00E1;
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x58, 0x0041, (byte)0x70, (byte)0x6F, (byte)0x6A]);
	var0002 = 0x001E;
	var0003 = Func0934(var0002);
	var0004 = UI_get_party_list();
	var0004 = (var0004 & 0xFE9C);
	enum();
labelFunc0663_0083:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0663_00DE;
	if (!(!(var0007 in var0004))) goto labelFunc0663_00DB;
	if (!(!(UI_die_roll(0x0001, 0x0003) == 0x0001))) goto labelFunc0663_00DB;
	var0002 = UI_get_distance(item, var0007);
	var0002 = ((var0002 / 0x0003) + 0x0005);
	var0001 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0663], var0002);
labelFunc0663_00DB:
	goto labelFunc0663_0083;
labelFunc0663_00DE:
	goto labelFunc0663_00F9;
labelFunc0663_00E1:
	var0001 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0663_00F9:
	if (!(event == 0x0002)) goto labelFunc0663_0109;
	UI_set_item_flag(item, 0x0003);
labelFunc0663_0109:
	return;
}


