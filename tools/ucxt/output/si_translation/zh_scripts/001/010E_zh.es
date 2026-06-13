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

void Func010E shape#(0x10E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc010E_000F;
	return;
labelFunc010E_000F:
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0032)) goto labelFunc010E_0050;
	if (!((gflags[0x007E] && (gflags[0x003E] && gflags[0x0091])) && ((!gflags[0x0048]) && (gflags[0x00A5] || (!gflags[0x002D]))))) goto labelFunc010E_0050;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01C3]);
	abort;
labelFunc010E_0050:
	if (!(var0000 == 0x00B3)) goto labelFunc010E_0080;
	if (!((gflags[0x0170] || gflags[0x0172]) && (!(gflags[0x0170] && gflags[0x0172])))) goto labelFunc010E_0080;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07F8]);
	abort;
labelFunc010E_0080:
	var0002 = Func0906(item);
	if (!(var0002 == 0x0001)) goto labelFunc010E_00D1;
	if (!Func0908(item, 0x0178, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc010E_00CE;
	Func0909(item, 0x01B0, 0x0001, 0x0001, 0x01B1, 0x0000, 0x0000, 0x0003, 0x0005);
	UI_play_sound_effect2(0x001F, item);
	goto labelFunc010E_00D1;
labelFunc010E_00CE:
	Func0903();
labelFunc010E_00D1:
	if (!(var0002 == 0x0000)) goto labelFunc010E_011B;
	if (!Func0908(item, 0x0178, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc010E_0118;
	Func0909(item, 0x01B0, 0x0000, 0x0002, 0x01B1, 0x0001, 0xFFFD, 0x0000, 0x0007);
	UI_play_sound_effect2(0x0020, item);
	goto labelFunc010E_011B;
labelFunc010E_0118:
	Func0903();
labelFunc010E_011B:
	if (!(var0002 == 0x0002)) goto labelFunc010E_0178;
	if (!(var0000 == 0x0005)) goto labelFunc010E_0174;
	var0003 = UI_get_object_position(item);
	UI_sprite_effect(0x000C, (var0003[0x0001] - 0x0002), var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func0907(item, 0x0000);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x010E]);
	abort;
labelFunc010E_0174:
	Func0904(item);
labelFunc010E_0178:
	if (!(var0002 == 0x0003)) goto labelFunc010E_0186;
	Func0905(item);
labelFunc010E_0186:
	if (!(var0000 == 0x00DC)) goto labelFunc010E_0194;
	Func09A5();
	abort;
labelFunc010E_0194:
	if (!(var0000 == 0x0005)) goto labelFunc010E_0229;
	UI_play_music(0x0029, Func09A0(0x0005, 0x0001));
	var0004 = UI_get_distance(item, 0xFE9C);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0005 = UI_get_object_position(item);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	var0005[0x0002] = (var0005[0x0002] + 0x0003);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, item, 0x07F6, true);
	UI_play_sound_effect(0x0039);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07F6], (var0004 + 0x0002));
	Func097F(0xFE9C, "@Can't stop myself...@", 0x0002);
labelFunc010E_0229:
	return;
}


