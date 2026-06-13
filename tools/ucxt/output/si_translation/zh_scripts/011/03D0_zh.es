#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func03D0 shape#(0x3D0) ()
{
	var var0000;

	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc03D0_002D;
	UI_set_item_frame(item, 0x0001);
	UI_play_sound_effect(0x000C);
	Func097F(0xFFFF, "@Take care!@", 0x0003);
labelFunc03D0_002D:
	if (!(var0000 == 0x0001)) goto labelFunc03D0_005E;
	UI_set_item_frame(item, 0x0002);
	UI_play_sound_effect(0x000C);
	Func097F(0xFFDB, "@Squawk!@", 0x0003);
	Func097F(0xFFFE, "@'Twas a wild throw.@", 0x0001);
labelFunc03D0_005E:
	if (!(var0000 == 0x0002)) goto labelFunc03D0_0083;
	UI_set_item_frame(item, 0x0003);
	Func097F(0xFFFD, "@Excellent shot!@", 0x0003);
	UI_play_sound_effect(0x000C);
labelFunc03D0_0083:
	if (!(var0000 == 0x0003)) goto labelFunc03D0_00A1;
	UI_set_item_frame(item, 0x0000);
	Func097F(0xFE9C, "@Another game?@", 0x0000);
labelFunc03D0_00A1:
	return;
}


