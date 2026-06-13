#game "serpentisle"
// externs
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func087A 0x87A ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_find_nearby(0xFF56, 0x0203, 0x000A, 0x0000);
	if (!var0000) goto labelFunc087A_007E;
	var0001 = UI_get_item_frame(var0000);
	if (!(var0001 == 0x0005)) goto labelFunc087A_004E;
	UI_set_item_frame(var0000, 0x0007);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x04AA], 0x0002);
labelFunc087A_004E:
	if (!(var0001 == 0x0007)) goto labelFunc087A_007E;
	var0003 = UI_get_object_position(var0000);
	UI_remove_item(var0000);
	var0004 = Func09AB(0x0366, 0x0004, 0xFE99, 0x0000, var0003);
labelFunc087A_007E:
	return;
}


