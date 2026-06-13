#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);

var Func08B5 0x8B5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_get_party_list();
	var0001 = UI_get_npc_object(0xFE9C);
	var0002 = Func0988(var0001, var0000);
	if (!var0002) goto labelFunc08B5_0055;
	enum();
labelFunc08B5_0024:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc08B5_004E;
	var0006 = false;
	var0006 = UI_get_item_flag(var0005, 0x0001);
	if (!(!var0006)) goto labelFunc08B5_004B;
	return var0005;
labelFunc08B5_004B:
	goto labelFunc08B5_0024;
labelFunc08B5_004E:
	return [];
	goto labelFunc08B5_0059;
labelFunc08B5_0055:
	return [];
labelFunc08B5_0059:
	return 0;
}


