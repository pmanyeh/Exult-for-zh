#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09C0 0x9C0 (var var0000);
extern void Func09BF 0x9BF ();

void Func07F5 object#(0x7F5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0004)) goto labelFunc07F5_00D8;
	var0000 = UI_click_on_item();
	var0001 = Func09A0(0x0004, 0x0002);
	if (!(UI_get_item_shape(var0000) == 0x0200)) goto labelFunc07F5_00D8;
	var0002 = UI_get_item_quality(var0001);
	if (!(var0002 < 0x0003)) goto labelFunc07F5_0059;
	var0003 = (var0002 + 0x0001);
	if (!(!UI_set_item_quality(var0001, var0003))) goto labelFunc07F5_0056;
	abort;
labelFunc07F5_0056:
	goto labelFunc07F5_00D8;
labelFunc07F5_0059:
	var0001 = Func09A0(0x0004, 0x0001);
	var0004 = UI_get_item_quality(var0001);
	var0004 = (var0004 + 0x0001);
	var0005 = UI_set_item_quality(var0001, var0004);
	UI_remove_item(var0000);
	UI_sprite_effect(0x001E, var0000[0x0002], var0000[0x0003], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	Func09C0(var0004);
	if (!(var0004 < 0x000A)) goto labelFunc07F5_00D8;
	var0005 = UI_delayed_execute_usecode_array(var0001, [(byte)0x55, 0x07F5], 0x000F);
labelFunc07F5_00D8:
	if (!(event == 0x0002)) goto labelFunc07F5_00E3;
	Func09BF();
labelFunc07F5_00E3:
	return;
}


