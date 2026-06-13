#game "serpentisle"
// externs
extern var Func0985 0x985 (var var0000);

var Func0984 0x984 (var var0000)
{
	var0000 = Func0985(var0000);
	if (!(UI_get_item_flag(var0000, 0x0001) || (UI_get_item_flag(var0000, 0x0007) || (UI_get_item_flag(var0000, 0x0004) || (UI_get_npc_prop(var0000, 0x0003) <= 0x0000))))) goto labelFunc0984_0040;
	return true;
	goto labelFunc0984_0042;
labelFunc0984_0040:
	return false;
labelFunc0984_0042:
	return 0;
}


