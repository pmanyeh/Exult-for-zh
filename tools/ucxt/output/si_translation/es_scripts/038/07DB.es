#game "serpentisle"
void Func07DB object#(0x7DB) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_object_position(0xFFC1);
	if (!gflags[0x0007]) goto labelFunc07DB_0052;
	UI_lightning();
	UI_obj_sprite_effect(0xFFC1, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001);
	UI_play_sound_effect(0x0074);
	gflags[0x0007] = false;
	gflags[0x0008] = true;
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07DB]);
	abort;
labelFunc07DB_0052:
	if (!gflags[0x0008]) goto labelFunc07DB_009A;
	UI_lightning();
	UI_obj_sprite_effect(0xFFC1, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0003, 0x0001);
	UI_play_sound_effect(0x0074);
	gflags[0x0008] = false;
	gflags[0x0009] = true;
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07DB]);
	abort;
labelFunc07DB_009A:
	if (!gflags[0x0009]) goto labelFunc07DB_011A;
	UI_lightning();
	UI_obj_sprite_effect(0xFFC1, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001);
	UI_obj_sprite_effect(0xFFC1, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001);
	UI_obj_sprite_effect(0xFFC1, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0002, 0x0001);
	UI_play_sound_effect(0x0074);
	gflags[0x0009] = false;
	gflags[0x000A] = true;
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07DB]);
	abort;
labelFunc07DB_011A:
	if (!gflags[0x000A]) goto labelFunc07DB_0164;
	UI_lightning();
	gflags[0x000A] = false;
	var0000 = UI_get_object_position(0xFFC1);
	UI_remove_npc(0xFFC1);
	var0002 = UI_create_new_object2(0x012E, var0000);
	UI_set_npc_id(var0002, 0x000F);
	UI_set_item_flag(var0002, 0x001D);
	UI_set_schedule_type(var0002, 0x000C);
labelFunc07DB_0164:
	return;
}


