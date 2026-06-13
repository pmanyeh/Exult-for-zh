#game "serpentisle"
// externs
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0780 object#(0x780) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0002)) goto labelFunc0780_024F;
	var0000 = UI_find_nearby(item, 0x037C, 0x0019, 0x0000);
	var0001 = UI_get_item_quality(var0000);
	var0002 = UI_set_item_quality(var0000, (var0001 + 0x0001));
	if (!var0000) goto labelFunc0780_024F;
	if (!(var0001 > 0x0014)) goto labelFunc0780_00FF;
	var0003 = UI_get_object_position(var0000);
	UI_sprite_effect(0x001B, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_remove_item(var0000);
	var0003[0x0001] = (var0003[0x0001] - 0x0002);
	var0003[0x0002] = (var0003[0x0002] - 0x0002);
	var0002 = UI_create_new_object2(0x02BE, var0003);
	if (!var0002) goto labelFunc0780_00F0;
	UI_set_schedule_type(var0002, 0x000A);
	var0002->Func07D2();
	Func097F(0xFE9C, "@By the Virtues!@", 0x0005);
	UI_play_sound_effect(0x000F);
	var0002 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x02BE], 0x0014);
labelFunc0780_00F0:
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	abort;
labelFunc0780_00FF:
	if (!(var0001 > 0x0000)) goto labelFunc0780_024F;
	var0004 = [0x0863, 0x0863, 0x0863, 0x0863, 0x0862, 0x085F, 0x0866, 0x0869, 0x0867, 0x085F, 0x0867, 0x085E, 0x0867, 0x085E, 0x0860, 0x085E, 0x0863, 0x0866, 0x0862, 0x0869, 0x085E];
	var0005 = [0x04A4, 0x04A6, 0x04A8, 0x04AA, 0x04AB, 0x04AB, 0x04AB, 0x04AC, 0x04AD, 0x04AD, 0x04AF, 0x04AF, 0x04B1, 0x04B1, 0x04B1, 0x04B4, 0x04B2, 0x04B3, 0x04B5, 0x04B4, 0x04B4];
	UI_play_sound_effect(0x0029);
	var0006 = UI_create_new_object(0x037F);
	if (!var0006) goto labelFunc0780_01DE;
	UI_clear_item_flag(var0006, 0x0012);
	UI_set_item_frame(var0006, UI_die_roll(0x0001, 0x0002));
	var0002 = UI_update_last_created([var0004[var0001], var0005[var0001], 0x0001]);
labelFunc0780_01DE:
	if (!(var0001 > 0x000A)) goto labelFunc0780_0231;
	if (!(UI_die_roll(0x0001, 0x0009) > 0x0002)) goto labelFunc0780_0231;
	var0003 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0009, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0027);
labelFunc0780_0231:
	var0007 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0780], UI_die_roll(0x0003, 0x0006));
labelFunc0780_024F:
	return;
}


