#game "serpentisle"
// externs
extern void Func0948 0x948 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func01DF shape#(0x1DF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc01DF_0038;
	var0001 = UI_click_on_item();
	if (!(var0001 == UI_get_npc_object(0xFE9C))) goto labelFunc01DF_0032;
	UI_set_item_frame(item, 0x0001);
	goto labelFunc01DF_0038;
labelFunc01DF_0032:
	Func0948(0x003C);
labelFunc01DF_0038:
	if (!(var0000 == 0x0001)) goto labelFunc01DF_0172;
	var0001 = UI_click_on_item();
	if (!(UI_get_item_shape(var0001) == 0x0392)) goto labelFunc01DF_016C;
	if (!(UI_get_item_frame(var0001) == 0x0001)) goto labelFunc01DF_0163;
	UI_set_item_frame(item, 0x0000);
	UI_play_sound_effect(0x0039);
	var0002 = UI_get_object_position(var0001);
	UI_sprite_effect(0x0009, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	var0003 = UI_create_new_object2(0x0219, [var0002[0x0001], (var0002[0x0002] + 0x0002), 0x0000]);
	if (!(!var0003)) goto labelFunc01DF_00D2;
	UI_error_message("Wolf Creation Failed!");
labelFunc01DF_00D2:
	UI_set_item_flag(var0003, 0x001D);
	UI_clear_item_flag(var0003, 0x0012);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_oppressor(0xFE9C, var0003);
	UI_set_alignment(var0003, 0x0002);
	var0004 = UI_add_cont_items(var0003, 0x0001, 0x0281, 0x003D, 0x0004, false);
	var0004 = UI_add_cont_items(var0003, 0x0003, 0x0194, 0xFE99, 0x0003, false);
	Func09AC(0xFFC0, 0x00A0, 0x002E, 0x000F);
	UI_remove_npc(0xFFC0);
	gflags[0x004A] = true;
	UI_set_alignment(0xFFB5, 0x0003);
	UI_set_item_flag(0xFFB5, 0x001D);
	goto labelFunc01DF_0169;
labelFunc01DF_0163:
	Func0948(0x003C);
labelFunc01DF_0169:
	goto labelFunc01DF_0172;
labelFunc01DF_016C:
	Func0948(0x003C);
labelFunc01DF_0172:
	return;
}


