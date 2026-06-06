#game "blackgate"
// externs
extern var Func0932 0x932 (var var0000);
extern var Func0937 0x937 (var var0000);

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
	var0003 = ((" " + "西經 " + Func0932(var0002)) + " 度");
	goto labelFunc028A_0063;
labelFunc028A_0052:
	var0003 = ((" " + "東經 " + Func0932(var0002)) + " 度");
labelFunc028A_0063:
	if (!(var0002 < 0x0000)) goto labelFunc028A_0081;
	var0004 = ((" " + "北緯 " + Func0932(var0001)) + " 度");
	goto labelFunc028A_0092;
labelFunc028A_0081:
	var0004 = ((" " + "南緯 " + Func0932(var0001)) + " 度");
labelFunc028A_0092:
	if (!(!UI_is_pc_inside())) goto labelFunc028A_00A9;
	UI_item_say(item, (var0004 + var0003));
	goto labelFunc028A_00BC;
labelFunc028A_00A9:
	if (!Func0937(0xFFFF)) goto labelFunc028A_00BC;
	UI_item_say(0xFFFF, "「在看不到天空的地方，它無法運作！」");
labelFunc028A_00BC:
	return;
}


