#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0902 0x902 (var var0000, var var0001);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();
extern void Func0904 0x904 (var var0000);
extern void Func0905 0x905 (var var0000);

void Func01D7 shape#(0x1D7) ()
{
	var var0000;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc01D7_000F;
	return;
labelFunc01D7_000F:
	var0000 = Func0906(item);
	if (!(var0000 == 0x0001)) goto labelFunc01D7_0067;
	if (!Func0908(item, 0x00F6, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc01D7_0064;
	Func0902(item, 0x01D7);
	Func0909(item, 0x00E1, 0x0001, 0x0001, 0x0204, 0x0000, 0x0003, 0x0000, 0x0005);
	UI_play_sound_effect2(0x0069, item);
	goto labelFunc01D7_0067;
labelFunc01D7_0064:
	Func0903();
labelFunc01D7_0067:
	if (!(var0000 == 0x0000)) goto labelFunc01D7_00B8;
	if (!Func0908(item, 0x00F6, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc01D7_00B5;
	Func0902(item, 0x01D7);
	Func0909(item, 0x00E1, 0x0000, 0x0002, 0x0204, 0x0001, 0x0000, 0xFFFD, 0x0007);
	UI_play_sound_effect2(0x006A, item);
	goto labelFunc01D7_00B8;
labelFunc01D7_00B5:
	Func0903();
labelFunc01D7_00B8:
	if (!(var0000 == 0x0002)) goto labelFunc01D7_00C6;
	Func0904(item);
labelFunc01D7_00C6:
	if (!(var0000 == 0x0003)) goto labelFunc01D7_00D4;
	Func0905(item);
labelFunc01D7_00D4:
	return;
}


