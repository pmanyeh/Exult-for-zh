#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

var Func08D5 0x8D5 ()
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

	var0000 = (UI_get_object_position(item) & [0x009B, 0x0000]);
	if (!UI_find_nearby(var0000, 0x03A8, 0x000A, 0x0000)) goto labelFunc08D5_00C0;
	var0001 = UI_find_nearby(item, 0x0210, 0x001E, 0x0008);
	var0002 = 0x0000;
	enum();
labelFunc08D5_003D:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc08D5_00BE;
	var0002 = (var0002 + 0x0006);
	var0006 = UI_get_object_position(var0005);
	UI_remove_item(var0005);
	UI_play_sound_effect(0x0041);
	UI_sprite_effect(0x0012, (var0006[0x0001] - 0x0001), (var0006[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0007 = UI_create_new_object2(0x00E4, var0006);
	Func09AD(var0007);
	var0008 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x52, "@I obey, master!@"], var0002);
	goto labelFunc08D5_003D;
labelFunc08D5_00BE:
	return true;
labelFunc08D5_00C0:
	return false;
	return 0;
}


