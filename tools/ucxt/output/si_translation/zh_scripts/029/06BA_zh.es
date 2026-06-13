#game "serpentisle"
void Func06BA object#(0x6BA) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0003)) goto labelFunc06BA_0066;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc06BA_0052;
	UI_clear_item_flag(0xFE9C, 0x0025);
	var0001 = UI_get_temperature(0xFE9C);
	var0001 = (var0001 - 0x0005);
	if (!(var0001 < 0x0000)) goto labelFunc06BA_0048;
	var0001 = 0x0000;
labelFunc06BA_0048:
	UI_set_temperature(0xFE9C, var0001);
labelFunc06BA_0052:
	if (!(var0000 == 0x0001)) goto labelFunc06BA_0066;
	UI_set_item_flag(0xFE9C, 0x0025);
labelFunc06BA_0066:
	return;
}


