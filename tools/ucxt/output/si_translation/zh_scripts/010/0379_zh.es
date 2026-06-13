#game "serpentisle"
void Func0379 shape#(0x379) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc0379_009C;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 == 0x0000) || ((var0000 == 0x0001) || ((var0000 == 0x0004) || (var0000 == 0x0005))))) goto labelFunc0379_0039;
	return;
labelFunc0379_0039:
	var0001 = UI_create_new_object(0x01B8);
	if (!var0001) goto labelFunc0379_009C;
	var0002 = UI_get_object_position(item);
	var0002[0x0001] = (var0002[0x0001] + 0x0003);
	var0002[0x0002] = (var0002[0x0002] + 0x0003);
	UI_set_item_frame(var0001, UI_die_roll(0x0000, 0x0007));
	if (!UI_update_last_created(var0002)) goto labelFunc0379_009C;
	UI_set_item_shape(item, 0x020E);
	UI_play_sound_effect2(0x0041, item);
labelFunc0379_009C:
	return;
}


