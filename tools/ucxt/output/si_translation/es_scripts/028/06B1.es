#game "serpentisle"
void Func06B1 object#(0x6B1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!gflags[0x0004]) goto labelFunc06B1_008D;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_npc_object((0x0000 - var0000));
	if (!var0001) goto labelFunc06B1_0088;
	if (!(UI_get_distance(var0001, item) < 0x001E)) goto labelFunc06B1_003B;
	UI_kill_npc(var0001);
	goto labelFunc06B1_0088;
labelFunc06B1_003B:
	if (!(!UI_get_item_flag(var0001, 0x0004))) goto labelFunc06B1_0088;
	var0002 = UI_get_object_position(item);
	var0003 = UI_get_object_position(var0001);
	UI_error_message(["Trying to kill npc#", var0000, ". Teleporting him to", var0002, ". He was at ", var0003, "."]);
	UI_move_object(var0001, var0002);
	UI_kill_npc(var0001);
labelFunc06B1_0088:
	UI_remove_item(item);
labelFunc06B1_008D:
	return;
}


