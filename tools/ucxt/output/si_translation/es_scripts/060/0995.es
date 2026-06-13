#game "serpentisle"
var Func0995 0x995 ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_object_position(0xFE9C);
	var0001 = var0000[0x0001];
	var0002 = var0000[0x0002];
	if (!((var0001 > 0x0340) && ((var0001 < 0x0430) && ((var0002 > 0x02FF) && (var0002 < 0x0550))))) goto labelFunc0995_0040;
	return true;
labelFunc0995_0040:
	if (!((var0001 > 0x0350) && ((var0001 < 0x0500) && ((var0002 > 0x0400) && (var0002 < 0x04C0))))) goto labelFunc0995_0064;
	return true;
labelFunc0995_0064:
	if (!((var0001 > 0x00FF) && ((var0001 < 0x0230) && ((var0002 > 0x03F0) && (var0002 < 0x0450))))) goto labelFunc0995_0088;
	return true;
labelFunc0995_0088:
	if (!((var0001 > 0x0800) && ((var0001 < 0x0BF0) && ((var0002 > 0x0000) && (var0002 < 0x00F0))))) goto labelFunc0995_00AC;
	return false;
labelFunc0995_00AC:
	if (!((var0001 > 0x0A00) && ((var0001 < 0x0BF0) && ((var0002 > 0x0100) && (var0002 < 0x0300))))) goto labelFunc0995_00D0;
	return false;
labelFunc0995_00D0:
	if (!((var0001 > 0x0500) && ((var0001 < 0x07F0) && ((var0002 > 0x0000) && (var0002 < 0x0190))))) goto labelFunc0995_00F4;
	return false;
labelFunc0995_00F4:
	if (!((var0001 > 0x0260) && ((var0001 < 0x0310) && ((var0002 > 0x0350) && (var0002 < 0x0470))))) goto labelFunc0995_0118;
	return false;
labelFunc0995_0118:
	if (!((var0001 > 0x0990) && ((var0001 < 0x0B00) && ((var0002 > 0x0300) && (var0002 < 0x0400))))) goto labelFunc0995_013C;
	return false;
labelFunc0995_013C:
	if (!((var0001 > 0x08C0) && ((var0001 < 0x0BF0) && ((var0002 > 0x03B0) && (var0002 < 0x0400))))) goto labelFunc0995_0160;
	return false;
labelFunc0995_0160:
	if (!(var0002 > 0x0400)) goto labelFunc0995_016F;
	return false;
	goto labelFunc0995_0171;
labelFunc0995_016F:
	return true;
labelFunc0995_0171:
	return 0;
}


