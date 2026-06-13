#game "serpentisle"
void Func0976 0x976 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;

	if (!UI_is_npc(var0000)) goto labelFunc0976_0067;
	var0002 = UI_get_npc_prop(var0000, 0x0000);
	var0003 = UI_get_npc_prop(var0000, 0x0003);
	if (!((var0003 + var0001) < 0x0001)) goto labelFunc0976_003F;
	var0001 = (0xFFFF * var0003);
	goto labelFunc0976_0057;
labelFunc0976_003F:
	if (!((var0003 + var0001) > var0002)) goto labelFunc0976_0057;
	var0001 = (var0002 - var0003);
labelFunc0976_0057:
	var0004 = UI_set_npc_prop(var0000, 0x0003, var0001);
labelFunc0976_0067:
	return;
}


