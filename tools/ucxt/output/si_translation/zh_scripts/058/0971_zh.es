#game "serpentisle"
void Func0971 0x971 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_item_quantity(var0000, 0xFE9C);
	if (!(var0001 <= 0x0001)) goto labelFunc0971_0021;
	UI_remove_item(var0000);
	goto labelFunc0971_0038;
labelFunc0971_0021:
	var0001 = (var0001 - 0x0001);
	var0002 = UI_set_item_quantity(var0000, var0001);
labelFunc0971_0038:
	return;
}


