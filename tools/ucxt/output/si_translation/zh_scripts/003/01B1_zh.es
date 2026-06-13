#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();
extern void Func0904 0x904 (var var0000);
extern void Func0905 0x905 (var var0000);

void Func01B1 shape#(0x1B1) ()
{
	var var0000;

	if (!((event != 0x0001) && (event != 0x0002))) goto labelFunc01B1_000F;
	return;
labelFunc01B1_000F:
	var0000 = Func0906(item);
	if (!(var0000 == 0x0001)) goto labelFunc01B1_0060;
	if (!Func0908(item, 0x01B0, 0x0000, 0x0003, 0x0000, 0x0001)) goto labelFunc01B1_005D;
	Func0909(item, 0x0178, 0x0001, 0x0002, 0x010E, 0x0000, 0x0000, 0x0000, 0x0007);
	UI_play_sound_effect2(0x001F, item);
	goto labelFunc01B1_0060;
labelFunc01B1_005D:
	Func0903();
labelFunc01B1_0060:
	if (!(var0000 == 0x0000)) goto labelFunc01B1_00AA;
	if (!Func0908(item, 0x01B0, 0x0001, 0x0000, 0xFFFD, 0x0007)) goto labelFunc01B1_00A7;
	Func0909(item, 0x0178, 0x0000, 0x0001, 0x010E, 0x0001, 0x0000, 0x0000, 0x0007);
	UI_play_sound_effect2(0x0020, item);
	goto labelFunc01B1_00AA;
labelFunc01B1_00A7:
	Func0903();
labelFunc01B1_00AA:
	if (!(var0000 == 0x0002)) goto labelFunc01B1_00B8;
	Func0904(item);
labelFunc01B1_00B8:
	if (!(var0000 == 0x0003)) goto labelFunc01B1_00C6;
	Func0905(item);
labelFunc01B1_00C6:
	return;
}


