#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);
extern var Func0983 0x983 (var var0000);

void Func028A shape#(0x28A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc028A_00BC;
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = ((var0000[0x0001] - 0x03A5) / 0x000A);
	var0002 = ((var0000[0x0002] - 0x046E) / 0x000A);
	if (!(var0001 < 0x0000)) goto labelFunc028A_0052;
	var0003 = ((" " + Func097E(var0001)) + " West");
	goto labelFunc028A_0063;
labelFunc028A_0052:
	var0003 = ((" " + Func097E(var0001)) + " East");
labelFunc028A_0063:
	if (!(var0002 < 0x0000)) goto labelFunc028A_0081;
	var0004 = ((" " + Func097E(var0002)) + " North");
	goto labelFunc028A_0092;
labelFunc028A_0081:
	var0004 = ((" " + Func097E(var0002)) + " South");
labelFunc028A_0092:
	if (!(!UI_is_pc_inside())) goto labelFunc028A_00A9;
	UI_item_say(item, (var0004 + var0003));
	goto labelFunc028A_00BC;
labelFunc028A_00A9:
	if (!Func0983(0xFFFD)) goto labelFunc028A_00BC;
	UI_item_say(0xFFFD, "@'Twill not function under a roof!@");
labelFunc028A_00BC:
	return;
}


