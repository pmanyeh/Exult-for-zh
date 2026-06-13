#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func076B object#(0x76B) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc076B_00E0;
	if (!gflags[0x0313]) goto labelFunc076B_0017;
	UI_remove_item(item);
	abort;
	goto labelFunc076B_00E0;
labelFunc076B_0017:
	if (!Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x000C)) goto labelFunc076B_00E0;
	var0000 = UI_get_object_position(item);
	UI_move_object(0xFF31, var0000);
	Func09AC(0xFF31, var0000[0x0001], var0000[0x0002], 0x000F);
	UI_sprite_effect(0x001A, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0001 = Func09A0(0x0000, 0x0001);
	UI_play_music(0x003F, var0001);
	var0002 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x55, 0x07D2], 0x0002);
	Func097F(0xFF31, "@Avatar...@", 0x0003);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D1], 0x0006);
	var0002 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x55, 0x04CF], 0x000D);
labelFunc076B_00E0:
	return;
}


