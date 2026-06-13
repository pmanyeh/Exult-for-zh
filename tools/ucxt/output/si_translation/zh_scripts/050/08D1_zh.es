#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func08D1 0x8D1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_find_nearby(item, 0x020B, 0x000A, 0x0008);
	var0001 = 0x0000;
	enum();
labelFunc08D1_0018:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc08D1_0099;
	var0001 = (var0001 + 0x0009);
	var0005 = UI_get_object_position(var0004);
	UI_remove_item(var0004);
	UI_play_sound_effect(0x0041);
	UI_sprite_effect(0x0006, (var0005[0x0001] - 0x0001), (var0005[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_create_new_object2(0x017E, var0005);
	Func09AD(var0006);
	var0007 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Fresh flesh!@"], var0001);
	goto labelFunc08D1_0018;
labelFunc08D1_0099:
	UI_play_sound_effect(0x0061);
	return;
}


