#game "serpentisle"
var Func08D6 0x8D6 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = 0x0000;
	var0001 = (UI_get_object_position(item) & [0x009F, 0x0000]);
	if (!UI_find_nearby(var0001, 0x03A7, 0x000A, 0x0000)) goto labelFunc08D6_0082;
	var0002 = UI_find_nearby(item, 0x0174, 0x001E, 0x0008);
	enum();
labelFunc08D6_003D:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc08D6_0080;
	var0000 = (var0000 + 0x0007);
	UI_set_alignment(var0005, 0x0002);
	UI_set_schedule_type(var0005, 0x0000);
	var0006 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x52, "@I kill thee!@"], var0000);
	goto labelFunc08D6_003D;
labelFunc08D6_0080:
	return true;
labelFunc08D6_0082:
	return false;
	return 0;
}


