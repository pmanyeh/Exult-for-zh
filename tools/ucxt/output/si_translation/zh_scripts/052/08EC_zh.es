#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();

void Func08EC 0x8EC ()
{
	var var0000;
	var var0001;

	UI_play_sound_effect(0x0082);
	var0000 = Func09A0(0x0000, 0x0001);
	if (!var0000) goto labelFunc08EC_0023;
	UI_play_music(0x001B, var0000);
labelFunc08EC_0023:
	Func09AC(0xFFEE, 0xFFFF, 0x0000, 0x000F);
	UI_move_object(0xFFEE, [0x097A, 0x074C, 0x0000]);
	UI_sprite_effect(0x0007, 0x097A, 0x074C, 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFFEE, "@Darling, I'm here...!@", 0x0002);
	0xFFEE->Func07D1();
	gflags[0x00E2] = true;
	var0001 = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x000F);
	abort;
	return;
}


