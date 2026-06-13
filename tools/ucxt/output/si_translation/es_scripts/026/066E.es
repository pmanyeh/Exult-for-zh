#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0941 0x941 (var var0000);

void Func066E object#(0x66E) ()
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

	if (!(event == 0x0001)) goto labelFunc066E_0075;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Hur Sanct@");
	if (!Func0951()) goto labelFunc066E_005B;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6C, (byte)0x70, (byte)0x6C, (byte)0x70, (byte)0x58, 0x0043]);
	var0001 = Func09A0(0x0000, 0x0004);
	var0000 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x066E], 0x000A);
	goto labelFunc066E_0075;
labelFunc066E_005B:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6C, (byte)0x70, (byte)0x6C, (byte)0x70, (byte)0x55, 0x0606]);
labelFunc066E_0075:
	if (!(event == 0x0002)) goto labelFunc066E_013F;
	var0002 = UI_count_objects(0xFE9B, 0x0255, 0xFE99, 0xFE99);
	var0003 = UI_count_objects(0xFE9B, 0x025E, 0xFE99, 0xFE99);
	var0004 = UI_count_objects(0xFE9B, 0x0256, 0xFE99, 0xFE99);
	var0002 = (var0002 + var0003);
	var0005 = 0x02D2;
	if (!(var0004 > var0002)) goto labelFunc066E_00D6;
	var0005 = 0x02D3;
labelFunc066E_00D6:
	var0001 = UI_create_new_object(var0005);
	if (!var0001) goto labelFunc066E_013F;
	var0006 = UI_get_object_position(0xFE9C);
	var0007 = (Func0941(0xFE9C) * 0x0008);
	var0008 = UI_die_roll(var0007, (var0007 + 0x0014));
	if (!(var0008 > 0x0063)) goto labelFunc066E_011E;
	var0008 = 0x0063;
labelFunc066E_011E:
	UI_set_item_flag(var0001, 0x0012);
	var0000 = UI_set_item_quantity(var0001, var0008);
	var0000 = UI_update_last_created(var0006);
labelFunc066E_013F:
	return;
}


