#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func094F 0x94F (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_npc_nearby(var0000)) goto labelFunc094F_004F;
	if (!UI_get_item_flag(var0000, 0x0019)) goto labelFunc094F_0024;
	UI_item_say(var0000, "@Slurp@");
	goto labelFunc094F_004F;
labelFunc094F_0024:
	var0002 = 0x0000;
	enum();
labelFunc094F_002B:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc094F_004F;
	Func097F(var0000, var0005, var0002);
	var0002 = (var0002 + 0x0011);
	goto labelFunc094F_002B;
labelFunc094F_004F:
	return;
}


