#game "serpentisle"
var Func088E 0x88E (var var0000)
{
	if (!(var0000 < 0x0005)) goto labelFunc088E_0018;
	var0000 = (var0000 + 0x0002);
	return var0000;
labelFunc088E_0018:
	if (!(var0000 == 0x0005)) goto labelFunc088E_003B;
	if (!gflags[0x0001]) goto labelFunc088E_0031;
	var0000 = 0x0007;
	goto labelFunc088E_0037;
labelFunc088E_0031:
	var0000 = 0x0001;
labelFunc088E_0037:
	return var0000;
labelFunc088E_003B:
	if (!(var0000 > 0x0005)) goto labelFunc088E_004F;
	var0000 = 0x0001;
	return var0000;
labelFunc088E_004F:
	return 0;
}


