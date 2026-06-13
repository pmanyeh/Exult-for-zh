#game "serpentisle"
void Func06A7 object#(0x6A7) ()
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

	var0000 = [0x03B4, 0x03B8, 0x03B7, 0x0284, 0x0285, 0x0286, 0x02F8];
	enum();
labelFunc06A7_001C:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06A7_00C0;
	var0004 = UI_find_nearby(item, var0003, 0x0001, 0x0000);
	if (!var0004) goto labelFunc06A7_00BD;
	UI_play_sound_effect(0x0039);
	var0005 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0001), (var0005[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_die_roll(0x0001, 0x000A);
	var0007 = (0x0000 - UI_die_roll(0x0001, 0x000A));
	var0008 = UI_set_last_created(var0004);
	if (!var0008) goto labelFunc06A7_00BD;
	var0008 = UI_update_last_created([(0x0A21 + var0006), (0x037A + var0007), 0x0000]);
labelFunc06A7_00BD:
	goto labelFunc06A7_001C;
labelFunc06A7_00C0:
	return;
}


