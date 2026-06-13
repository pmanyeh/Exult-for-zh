#game "serpentisle"
void Func06D3 object#(0x6D3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_find_nearby(item, 0x0151, 0x0019, 0x0000);
	var0001 = UI_get_item_quality(item);
	if (!var0000) goto labelFunc06D3_0020;
	abort;
labelFunc06D3_0020:
	var0002 = UI_get_object_position(item);
	var0003 = UI_create_new_object2(0x0151, var0002);
	if (!var0003) goto labelFunc06D3_0059;
	UI_set_schedule_type(var0003, 0x000B);
	UI_set_alignment(var0003, 0x0000);
	UI_set_npc_id(var0003, var0001);
labelFunc06D3_0059:
	return;
}


