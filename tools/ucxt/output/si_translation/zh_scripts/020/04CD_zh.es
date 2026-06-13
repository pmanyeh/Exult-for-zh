#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func09AD 0x9AD (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func04CD object#(0x4CD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04CD_0031;
	UI_item_say(0xFE9C, "Could we speak?");
	0xFF33->Func07D1();
	Func09AD(0xFF33);
labelFunc04CD_0031:
	if (!(event == 0x0000)) goto labelFunc04CD_0104;
	var0003 = UI_get_distance(0xFF33, 0xFE9C);
	if (!(UI_get_random(0x000C) > var0003)) goto labelFunc04CD_0067;
	Func097F(item, "@'Tis him!@", 0x0005);
	Func09AD(0xFF33);
	goto labelFunc04CD_0104;
labelFunc04CD_0067:
	if (!(UI_get_music_track() != 0x000C)) goto labelFunc04CD_0082;
	UI_play_music(0x000C, Func09A0(0x0005, 0x0001));
labelFunc04CD_0082:
	var0004 = UI_get_random(0x0006);
	if (!(var0004 == 0x0001)) goto labelFunc04CD_00A0;
	UI_item_say(0xFF33, "@I am hungry!@");
labelFunc04CD_00A0:
	if (!(var0004 == 0x0002)) goto labelFunc04CD_00B4;
	UI_item_say(0xFF33, "@Where is the food?@");
labelFunc04CD_00B4:
	if (!(var0004 == 0x0003)) goto labelFunc04CD_00C8;
	UI_item_say(0xFF33, "@Nothing but dust...@");
labelFunc04CD_00C8:
	if (!(var0004 == 0x0004)) goto labelFunc04CD_00DC;
	UI_item_say(0xFF33, "@Must eat...@");
labelFunc04CD_00DC:
	if (!(var0004 == 0x0005)) goto labelFunc04CD_00F0;
	UI_item_say(0xFF33, "@There must be food!@");
labelFunc04CD_00F0:
	if (!(var0004 == 0x0006)) goto labelFunc04CD_0104;
	UI_item_say(0xFF33, "@So hungry!@");
labelFunc04CD_0104:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc04CD_011D;
	UI_clear_item_flag(item, 0x001D);
labelFunc04CD_011D:
	return;
}


