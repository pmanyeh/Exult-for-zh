#game "serpentisle"
void Func0215 shape#(0x215) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0007)) goto labelFunc0215_008F;
	var0000 = UI_get_npc_id(item);
	if (!(var0000 == 0x0001)) goto labelFunc0215_0056;
	UI_clear_item_flag(item, 0x001D);
	var0001 = UI_create_new_object(0x0281);
	if (!var0001) goto labelFunc0215_0056;
	UI_set_item_frame(var0001, 0x0013);
	var0002 = UI_set_item_quality(var0001, 0x0015);
	var0002 = UI_give_last_created(item);
	UI_kill_npc(item);
labelFunc0215_0056:
	if (!(var0000 == 0x0002)) goto labelFunc0215_008F;
	UI_clear_item_flag(item, 0x001D);
	var0003 = UI_create_new_object(0x0289);
	if (!var0003) goto labelFunc0215_008F;
	UI_set_item_frame(var0003, 0x0008);
	var0002 = UI_give_last_created(item);
	UI_kill_npc(item);
labelFunc0215_008F:
	return;
}


