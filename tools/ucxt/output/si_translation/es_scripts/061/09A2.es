#game "serpentisle"
void Func09A2 0x9A2 (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_get_object_position(var0001);
	var0003 = [(var0002[0x0001] + UI_die_roll(0xFFFB, 0x0005)), (var0002[0x0002] + UI_die_roll(0xFFFB, 0x0005)), var0002[0x0003]];
	UI_move_object(var0000, var0003);
	return;
}


