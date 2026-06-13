#game "serpentisle"
void Func085D 0x85D (var var0000, var var0001)
{
	var var0002;

	var0002 = UI_get_object_position(0xFF4B);
	UI_sprite_effect(0x0011, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0015, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFF4B, [var0000, var0001, 0x0000]);
	UI_set_new_schedules(0xFF4B, 0x0000, 0x0007, [var0000, var0001]);
	UI_run_schedule(0xFF4B);
	return;
}


