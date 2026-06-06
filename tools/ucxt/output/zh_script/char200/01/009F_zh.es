#game "blackgate"
void Func009F shape#(0x9F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc009F_0090;
	var0000 = UI_game_hour();
	var0001 = "上午";
	if (!(var0000 > 0x000C)) goto labelFunc009F_002F;
	var0000 = (var0000 - 0x000C);
	var0001 = "下午";
labelFunc009F_002F:
	if (!(var0000 == 0x0000)) goto labelFunc009F_0045;
	var0000 = 0x000C;
	var0001 = "上午";
labelFunc009F_0045:
	var0002 = UI_game_minute();
	if (!(var0002 <= 0x0009)) goto labelFunc009F_0060;
	var0002 = ("0" + var0002);
labelFunc009F_0060:
	var0003 = ((((" " + var0000) + ":") + var0002) + var0001);
	if (!UI_in_gump_mode()) goto labelFunc009F_0088;
	UI_item_say(item, var0003);
	goto labelFunc009F_0090;
labelFunc009F_0088:
	UI_item_say(item, var0003);
labelFunc009F_0090:
	return;
}


