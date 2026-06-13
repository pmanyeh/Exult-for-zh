#game "serpentisle"
var Func09B9 0x9B9 (var var0000, var var0001)
{
	var var0002;

	if (!(var0000 == 0x099F)) goto labelFunc09B9_0032;
	if (!(UI_die_roll(0x0000, 0x0001) == 0x0000)) goto labelFunc09B9_0028;
	var0000 = (var0000 + 0x0001);
	goto labelFunc09B9_0032;
labelFunc09B9_0028:
	var0000 = (var0000 - 0x0001);
labelFunc09B9_0032:
	if (!(var0001 == 0x006F)) goto labelFunc09B9_0064;
	if (!(UI_die_roll(0x0000, 0x0001) == 0x0000)) goto labelFunc09B9_005A;
	var0001 = (var0001 + 0x0001);
	goto labelFunc09B9_0064;
labelFunc09B9_005A:
	var0001 = (var0001 - 0x0001);
labelFunc09B9_0064:
	var0002 = [var0000, var0001, 0x0000];
	return var0002;
	return 0;
}


