#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func07EF object#(0x7EF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_object_position(item);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x002A, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0009, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_obj_sprite_effect(0xFE9C, 0x002A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0074);
	UI_lightning();
	UI_set_schedule_type(0xFE9C, 0x000F);
	var0001 = Func0992(0x0001, "@Oh, no!@", 0x0000, true);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Arggh!@", (byte)0x6C, (byte)0x6D, (byte)0x6E]);
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F0], 0x000A);
	return;
}


