#game "serpentisle"
// externs
extern var Func0923 0x923 ();

void Func073C object#(0x73C) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event == 0x0003) && (!Func0923()))) goto labelFunc073C_00BC;
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_die_roll(0xFFFD, 0x0003);
	var0002 = UI_die_roll(0xFFFD, 0x0003);
	var0000[0x0001] = (var0000[0x0001] + var0001);
	var0000[0x0002] = (var0000[0x0002] + var0002);
	UI_move_object(0xFF2D, var0000);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFF2D, 0x0003);
	UI_set_alignment(0xFF2D, 0x0000);
labelFunc073C_00BC:
	return;
}


