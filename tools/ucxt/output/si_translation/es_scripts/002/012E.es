#game "serpentisle"
void Func012E shape#(0x12E) ()
{
	var var0000;

	if (!(event == 0x0007)) goto labelFunc012E_0058;
	if (!(UI_get_npc_id(item) == 0x000F)) goto labelFunc012E_001C;
	UI_clear_item_flag(item, 0x001D);
labelFunc012E_001C:
	if (!(UI_get_npc_id(item) == 0x0010)) goto labelFunc012E_0030;
	UI_clear_item_flag(item, 0x001D);
labelFunc012E_0030:
	if (!(UI_get_npc_id(item) == 0x0011)) goto labelFunc012E_0044;
	UI_clear_item_flag(item, 0x001D);
labelFunc012E_0044:
	if (!(UI_get_npc_id(item) == 0x0012)) goto labelFunc012E_0058;
	UI_clear_item_flag(item, 0x001D);
labelFunc012E_0058:
	if (!(event == 0x0001)) goto labelFunc012E_0072;
	if (!(UI_get_npc_id(item) == 0x000F)) goto labelFunc012E_0072;
	var0000 = 0x0001;
labelFunc012E_0072:
	return;
}


