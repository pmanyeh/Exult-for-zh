#game "serpentisle"
void Func02F2 shape#(0x2F2) ()
{
	if (!(event == 0x0007)) goto labelFunc02F2_0058;
	if (!(UI_get_npc_id(item) == 0x000F)) goto labelFunc02F2_001C;
	UI_clear_item_flag(item, 0x001D);
labelFunc02F2_001C:
	if (!(UI_get_npc_id(item) == 0x0010)) goto labelFunc02F2_0030;
	UI_clear_item_flag(item, 0x001D);
labelFunc02F2_0030:
	if (!(UI_get_npc_id(item) == 0x0011)) goto labelFunc02F2_0044;
	UI_clear_item_flag(item, 0x001D);
labelFunc02F2_0044:
	if (!(UI_get_npc_id(item) == 0x0012)) goto labelFunc02F2_0058;
	UI_clear_item_flag(item, 0x001D);
labelFunc02F2_0058:
	return;
}


