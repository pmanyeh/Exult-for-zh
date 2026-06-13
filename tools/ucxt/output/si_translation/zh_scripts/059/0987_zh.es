#game "serpentisle"
void Func0987 0x987 (var var0000, var var0001, var var0002, var var0003)
{
	var var0004;
	var var0005;
	var var0006;

	var0004 = UI_get_npc_prop(var0000, var0001);
	var0005 = (var0004 + (0x0002 * var0003));
	if (!(var0005 > UI_get_npc_prop(var0000, var0002))) goto labelFunc0987_0039;
	var0005 = UI_get_npc_prop(var0000, var0002);
labelFunc0987_0039:
	var0006 = UI_set_npc_prop(var0000, var0001, (var0005 - var0004));
	return;
}


