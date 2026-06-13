#game "serpentisle"
var Func0942 0x942 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_npc_object(var0000);
	var0002 = UI_npc_nearby(var0001);
	if (!UI_get_item_flag(var0001, 0x0000)) goto labelFunc0942_0025;
	var0002 = false;
labelFunc0942_0025:
	return var0002;
	return 0;
}


