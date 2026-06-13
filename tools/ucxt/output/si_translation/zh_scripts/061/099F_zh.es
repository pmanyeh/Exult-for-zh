#game "serpentisle"
var Func099F 0x99F (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0003 = UI_get_party_list();
	enum();
labelFunc099F_0008:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc099F_003F;
	var0007 = UI_get_cont_items(var0006, var0000, var0001, var0002);
	if (!var0007) goto labelFunc099F_003C;
	var0008 = [var0007, var0006];
	return var0008;
labelFunc099F_003C:
	goto labelFunc099F_0008;
labelFunc099F_003F:
	return 0x0000;
	return 0;
}


