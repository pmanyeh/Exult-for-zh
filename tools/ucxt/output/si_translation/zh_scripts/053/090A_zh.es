#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0903 0x903 ();

var Func090A 0x90A (var var0000)
{
	var var0001;

	var0001 = Func0906(var0000);
	if (!(var0001 == 0x0001)) goto labelFunc090A_003B;
	if (!Func0908(var0000, 0x034D, 0x0000, 0x0000, 0x0000, 0x0007)) goto labelFunc090A_0036;
	UI_play_sound_effect2(0x0069, item);
	goto labelFunc090A_003B;
labelFunc090A_0036:
	Func0903();
	return false;
labelFunc090A_003B:
	if (!(var0001 == 0x0000)) goto labelFunc090A_006D;
	if (!Func0908(var0000, 0x034D, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc090A_0068;
	UI_play_sound_effect2(0x006A, item);
	goto labelFunc090A_006D;
labelFunc090A_0068:
	Func0903();
	return false;
labelFunc090A_006D:
	return true;
	return 0;
}


