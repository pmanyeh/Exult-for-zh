#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09B5 0x9B5 ();

void Func01F9 shape#(0x1F9) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc01F9_0080;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc01F9_002E;
	UI_si_path_run_usecode(0xFE9C, UI_get_object_position(item), 0x000D, item, 0x01F9, true);
labelFunc01F9_002E:
	if (!(var0000 == 0x0002)) goto labelFunc01F9_0080;
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_flag(0xFE9C, 0x0022);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01F9], 0x0064);
	UI_play_sound_effect(0x0039);
labelFunc01F9_0080:
	if (!(event == 0x0002)) goto labelFunc01F9_0099;
	UI_clear_item_flag(0xFE9C, 0x0022);
	UI_play_sound_effect(0x0030);
labelFunc01F9_0099:
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc01F9_00AA;
	Func09B5();
labelFunc01F9_00AA:
	return;
}


