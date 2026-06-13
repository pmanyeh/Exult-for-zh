#game "serpentisle"
void Func0730 object#(0x730) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x0003) && gflags[0x0004])) goto labelFunc0730_00F8;
	var0000 = UI_create_new_object(0x0320);
	UI_clear_item_flag(var0000, 0x0012);
	UI_play_sound_effect(0x003E);
	if (!var0000) goto labelFunc0730_00F8;
	UI_set_item_frame(var0000, 0x0004);
	var0001 = UI_create_new_object(0x022F);
	if (!var0001) goto labelFunc0730_00DB;
	var0002 = UI_get_item_quality(item);
	if (!(var0002 == 0x0001)) goto labelFunc0730_0063;
	UI_set_item_frame(var0001, 0x0007);
labelFunc0730_0063:
	if (!(var0002 == 0x0002)) goto labelFunc0730_0077;
	UI_set_item_frame(var0001, 0x0008);
labelFunc0730_0077:
	if (!(var0002 == 0x0003)) goto labelFunc0730_008B;
	UI_set_item_frame(var0001, 0x000F);
labelFunc0730_008B:
	if (!(var0002 == 0x0004)) goto labelFunc0730_009F;
	UI_set_item_frame(var0001, 0x0010);
labelFunc0730_009F:
	if (!(var0002 == 0x0005)) goto labelFunc0730_00C7;
	UI_set_item_frame(var0001, 0x0001);
	UI_clear_item_flag(var0001, 0x0012);
	var0003 = UI_give_last_created(var0000);
labelFunc0730_00C7:
	UI_clear_item_flag(var0001, 0x0012);
	var0003 = UI_give_last_created(var0000);
labelFunc0730_00DB:
	var0004 = UI_get_object_position(item);
	var0003 = UI_update_last_created(var0004);
	if (!var0003) goto labelFunc0730_00F8;
	UI_remove_item(item);
labelFunc0730_00F8:
	return;
}


