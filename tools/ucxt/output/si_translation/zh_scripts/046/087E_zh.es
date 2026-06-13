#game "serpentisle"
var Func087E 0x87E (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = UI_input_numeric_value(0x0000, var0000, 0x0001, (var0000 / 0x0002));
	if (!((var0002 >= 0x0032) && (var0002 >= (var0000 / 0x0002)))) goto labelFunc087E_0046;
	var0003 = UI_remove_party_items(var0002, var0001, 0xFE99, 0xFE99, true);
	return true;
	goto labelFunc087E_0048;
labelFunc087E_0046:
	return false;
labelFunc087E_0048:
	return 0;
}


