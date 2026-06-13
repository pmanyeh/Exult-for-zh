#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0904 0x904 (var var0000);
extern void Func0905 0x905 (var var0000);
extern void Func09A5 0x9A5 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0178 shape#(0x178) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc0178_000F;
	return;
labelFunc0178_000F:
	var0000 = UI_get_item_quality(item);
	var0001 = Func0906(item);
	if (!(var0001 == 0x0001)) goto labelFunc0178_0068;
	if (!Func0908(item, 0x010E, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc0178_0065;
	Func0909(item, 0x01B1, 0x0001, 0x0002, 0x01B0, 0x0000, 0x0003, 0x0000, 0x0001);
	UI_play_sound_effect2(0x001F, item);
	goto labelFunc0178_0068;
labelFunc0178_0065:
	Func0903();
labelFunc0178_0068:
	if (!(var0001 == 0x0000)) goto labelFunc0178_00B2;
	if (!Func0908(item, 0x010E, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc0178_00AF;
	Func0909(item, 0x01B1, 0x0000, 0x0001, 0x01B0, 0x0001, 0x0000, 0xFFFD, 0x0007);
	UI_play_sound_effect2(0x0020, item);
	goto labelFunc0178_00B2;
labelFunc0178_00AF:
	Func0903();
labelFunc0178_00B2:
	if (!(var0001 == 0x0002)) goto labelFunc0178_0117;
	if (!((var0000 == 0x0006) || (var0000 == 0x0007))) goto labelFunc0178_0113;
	var0002 = UI_get_object_position(item);
	UI_sprite_effect(0x000C, var0002[0x0001], (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func0907(item, 0x0000);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0178]);
	abort;
labelFunc0178_0113:
	Func0904(item);
labelFunc0178_0117:
	if (!(var0001 == 0x0003)) goto labelFunc0178_0125;
	Func0905(item);
labelFunc0178_0125:
	var0004 = UI_get_object_position(item);
	if (!((var0004[0x0001] == 0x091F) && ((var0004[0x0002] == 0x0559) && (var0004[0x0003] == 0x0000)))) goto labelFunc0178_0177;
	if (!(UI_get_item_frame(item) == 0x000D)) goto labelFunc0178_0177;
	UI_close_gumps();
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0001, (byte)0x55, 0x07DF]);
labelFunc0178_0177:
	if (!(var0000 == 0x00DC)) goto labelFunc0178_0185;
	Func09A5();
	abort;
labelFunc0178_0185:
	if (!((var0000 == 0x0006) || (var0000 == 0x0007))) goto labelFunc0178_0233;
	if (!(var0000 == 0x0006)) goto labelFunc0178_01AA;
	var0006 = 0x0003;
	goto labelFunc0178_01C0;
labelFunc0178_01AA:
	var0006 = 0xFFFD;
	UI_play_music(0x0018, Func09A0(0x0005, 0x0001));
labelFunc0178_01C0:
	var0007 = UI_get_distance(item, 0xFE9C);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0004[0x0001] = (var0004[0x0001] + var0006);
	var0004[0x0002] = (var0004[0x0002] - 0x0003);
	UI_si_path_run_usecode(0xFE9C, var0004, 0x000A, item, 0x07F6, true);
	UI_play_sound_effect(0x0039);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07F6], (var0007 + 0x0002));
	Func097F(0xFE9C, "@Can't stop myself...@", 0x0002);
labelFunc0178_0233:
	return;
}


