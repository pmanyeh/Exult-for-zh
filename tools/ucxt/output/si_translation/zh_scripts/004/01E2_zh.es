#game "serpentisle"
void Func01E2 shape#(0x1E2) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0002)) goto labelFunc01E2_0051;
	var0000 = UI_find_nearby(0xFE9C, 0x01E2, 0x0064, 0x0000);
	if (!var0000) goto labelFunc01E2_0051;
	var0001 = UI_get_object_position(var0000);
	UI_sprite_effect(0x001A, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_kill_npc(var0000);
labelFunc01E2_0051:
	return;
}


