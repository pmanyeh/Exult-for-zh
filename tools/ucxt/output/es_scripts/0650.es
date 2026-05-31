#game "blackgate"
// externs
extern var Func092D 0x92D (var var0000);
extern var Func0906 0x906 ();

void Func0650 object#(0x650) ()
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

	if (!(event == 0x0001)) goto labelFunc0650_0138;
	var0000 = UI_click_on_item();
	var0001 = Func092D(var0000);
	UI_halt_scheduled(item);
	UI_item_say(item, "@An Jux@");
	if (!Func0906()) goto labelFunc0650_0122;
	var0002 = UI_execute_usecode_array(item, [(byte)0x59, var0001, (byte)0x6F, (byte)0x70, (byte)0x6A]);
	var0003 = UI_find_nearby(var0000, 0x00C8, 0x0002, 0x00B0);
	enum();
labelFunc0650_0055:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0650_00B4;
	var0000 = UI_get_object_position(var0006);
	var0002 = UI_set_last_created(var0006);
	if (!var0002) goto labelFunc0650_00B1;
	var0002 = UI_update_last_created(0xFE9A);
	UI_halt_scheduled(var0006);
	UI_sprite_effect(0x000D, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0042);
labelFunc0650_00B1:
	goto labelFunc0650_0055;
labelFunc0650_00B4:
	var0003 = UI_find_nearby(item, 0x020A, 0x0002, 0x00B0);
	enum();
labelFunc0650_00C6:
	for (var0006 in var0003 with var0007 to var0008) attend labelFunc0650_011F;
	var0000 = UI_get_object_position(var0006);
	if (!(UI_get_item_quality(var0006) == 0x00FF)) goto labelFunc0650_011C;
	var0002 = UI_set_item_quality(var0006, 0x0000);
	UI_sprite_effect(0x000D, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0042);
labelFunc0650_011C:
	goto labelFunc0650_00C6;
labelFunc0650_011F:
	goto labelFunc0650_0138;
labelFunc0650_0122:
	var0002 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0650_0138:
	return;
}


