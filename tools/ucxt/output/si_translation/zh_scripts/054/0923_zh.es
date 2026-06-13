#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);

var Func0923 0x923 ()
{
	if (!(!Func0942(0xFFFD))) goto labelFunc0923_000C;
	return false;
labelFunc0923_000C:
	if (!(!Func0942(0xFFFE))) goto labelFunc0923_0018;
	return false;
labelFunc0923_0018:
	if (!(!Func0942(0xFFFF))) goto labelFunc0923_0024;
	return false;
labelFunc0923_0024:
	if (!(!UI_get_item_flag(0xFFFD, 0x0006))) goto labelFunc0923_0034;
	return false;
labelFunc0923_0034:
	if (!(!UI_get_item_flag(0xFFFE, 0x0006))) goto labelFunc0923_0044;
	return false;
labelFunc0923_0044:
	if (!(!UI_get_item_flag(0xFFFF, 0x0006))) goto labelFunc0923_0054;
	return false;
labelFunc0923_0054:
	if (!UI_get_item_flag(0xFFFD, 0x0004)) goto labelFunc0923_0063;
	return false;
labelFunc0923_0063:
	if (!UI_get_item_flag(0xFFFE, 0x0004)) goto labelFunc0923_0072;
	return false;
labelFunc0923_0072:
	if (!UI_get_item_flag(0xFFFF, 0x0004)) goto labelFunc0923_0081;
	return false;
labelFunc0923_0081:
	return true;
	return 0;
}


