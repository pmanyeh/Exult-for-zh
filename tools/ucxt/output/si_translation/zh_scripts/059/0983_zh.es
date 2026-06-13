#game "serpentisle"
var Func0983 0x983 (var var0000)
{
	if (!((UI_get_npc_prop(var0000, 0x0002) >= 0x000A) && ((!UI_get_item_flag(var0000, 0x0001)) && ((!UI_get_item_flag(var0000, 0x0007)) && ((!UI_get_item_flag(var0000, 0x0004)) && ((UI_get_npc_prop(var0000, 0x0003) > 0x0000) && UI_is_npc(var0000))))))) goto labelFunc0983_0051;
	return true;
	goto labelFunc0983_0053;
labelFunc0983_0051:
	return false;
labelFunc0983_0053:
	return 0;
}


