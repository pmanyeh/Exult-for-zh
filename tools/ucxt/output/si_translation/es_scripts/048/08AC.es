#game "serpentisle"
var Func08AC 0x8AC (var var0000)
{
	if (!(gflags[0x0173] == true)) goto labelFunc08AC_0019;
	if (!var0000) goto labelFunc08AC_0015;
	return 0xFFFF;
	goto labelFunc08AC_0019;
labelFunc08AC_0015:
	return "Dupre";
labelFunc08AC_0019:
	if (!(gflags[0x0174] == true)) goto labelFunc08AC_0032;
	if (!var0000) goto labelFunc08AC_002E;
	return 0xFFFD;
	goto labelFunc08AC_0032;
labelFunc08AC_002E:
	return "Iolo";
labelFunc08AC_0032:
	if (!(gflags[0x0175] == true)) goto labelFunc08AC_004B;
	if (!var0000) goto labelFunc08AC_0047;
	return 0xFFFE;
	goto labelFunc08AC_004B;
labelFunc08AC_0047:
	return "Shamino";
labelFunc08AC_004B:
	return false;
	return 0;
}


