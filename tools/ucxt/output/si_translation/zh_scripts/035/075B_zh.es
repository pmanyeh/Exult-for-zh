#game "serpentisle"
void Func075B object#(0x75B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_find_nearby(item, 0x032A, 0x0003, 0x0000);
	var0001 = UI_get_item_frame(var0000);
	if (!((var0001 == 0x0000) || (var0001 == 0x0001))) goto labelFunc075B_008A;
	var0002 = UI_get_object_position(var0000);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0012, (var0002[0x0001] - 0x0003), (var0002[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_frame(var0000, 0x0001);
	var0003 = UI_set_item_quality(var0000, 0x000C);
	UI_clear_item_flag(var0000, 0x0012);
	gflags[0x0225] = true;
labelFunc075B_008A:
	return;
}


