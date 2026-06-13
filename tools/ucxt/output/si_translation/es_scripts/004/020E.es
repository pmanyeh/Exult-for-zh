#game "serpentisle"
void Func020E shape#(0x20E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc020E_00CE;
	var0000 = UI_get_item_frame(item);
	if (!((var0000 == 0x0000) || ((var0000 == 0x0001) || ((var0000 == 0x0004) || (var0000 == 0x0005))))) goto labelFunc020E_0039;
	return;
labelFunc020E_0039:
	var0001 = UI_find_nearby(item, 0x01B8, 0x000A, 0x0080);
	var0002 = UI_get_object_position(item);
	var0002[0x0001] = (var0002[0x0001] + 0x0003);
	var0002[0x0002] = (var0002[0x0002] + 0x0003);
	enum();
labelFunc020E_0073:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc020E_00CE;
	var0006 = UI_get_object_position(var0005);
	if (!((var0002[0x0001] == var0006[0x0001]) && ((var0002[0x0002] == var0006[0x0002]) && (var0002[0x0003] == var0006[0x0003])))) goto labelFunc020E_00CB;
	UI_remove_item(var0005);
	UI_set_item_shape(item, 0x0379);
	UI_play_sound_effect2(0x0021, item);
labelFunc020E_00CB:
	goto labelFunc020E_0073;
labelFunc020E_00CE:
	return;
}


