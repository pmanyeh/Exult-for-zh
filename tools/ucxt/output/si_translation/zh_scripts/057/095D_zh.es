#game "serpentisle"
void Func095D 0x95D (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0001 = UI_get_party_list();
	enum();
labelFunc095D_0008:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc095D_0026;
	var0005 = UI_set_npc_prop(var0004, 0x0008, var0000);
	goto labelFunc095D_0008;
labelFunc095D_0026:
	return;
}


