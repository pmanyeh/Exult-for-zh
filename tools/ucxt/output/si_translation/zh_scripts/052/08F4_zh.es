#game "serpentisle"
// externs
extern var Func08F3 0x8F3 ();

void Func08F4 0x8F4 ()
{
	var var0000;

	if (!(Func08F3() && (!UI_get_item_flag(0xFF29, 0x001C)))) goto labelFunc08F4_0051;
	var0000 = UI_get_object_position(0xFE9C);
	var0000[0x0002] = (var0000[0x0002] - 0x0002);
	UI_move_object(0xFF31, var0000);
	UI_play_sound_effect(0x0051);
	UI_set_npc_id(0xFF31, 0x001F);
	UI_set_schedule_type(0xFF31, 0x0003);
labelFunc08F4_0051:
	return;
}


