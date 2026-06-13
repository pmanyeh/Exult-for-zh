#game "serpentisle"
void Func02B7 shape#(0x2B7) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc02B7_0068;
	var0000 = UI_game_hour();
	if (!(var0000 > 0x000C)) goto labelFunc02B7_0023;
	var0000 = (var0000 - 0x000C);
labelFunc02B7_0023:
	if (!(var0000 == 0x0000)) goto labelFunc02B7_0033;
	var0000 = 0x000C;
labelFunc02B7_0033:
	var0001 = UI_game_minute();
	if (!(var0001 < 0x000A)) goto labelFunc02B7_004E;
	var0001 = ("0" + var0001);
labelFunc02B7_004E:
	var0002 = (((" " + var0000) + ":") + var0001);
	UI_item_say(item, var0002);
labelFunc02B7_0068:
	return;
}


