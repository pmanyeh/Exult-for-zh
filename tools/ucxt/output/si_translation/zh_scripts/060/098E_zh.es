#game "serpentisle"
var Func098E 0x98E ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_party_list();
	var0001 = [];
	enum();
labelFunc098E_000E:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc098E_0034;
	if (!(UI_get_item_shape(var0004) != 0x02EB)) goto labelFunc098E_0031;
	var0001 = (var0001 & var0004);
labelFunc098E_0031:
	goto labelFunc098E_000E;
labelFunc098E_0034:
	return var0001;
	return 0;
}


