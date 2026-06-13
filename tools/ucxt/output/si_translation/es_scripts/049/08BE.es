#game "serpentisle"
var Func08BE 0x8BE (var var0000)
{
	if (!(var0000 == 0x0001)) goto labelFunc08BE_0012;
	if (!gflags[0x0243]) goto labelFunc08BE_0012;
	return false;
labelFunc08BE_0012:
	if (!(var0000 == 0x0002)) goto labelFunc08BE_0029;
	if (!((!gflags[0x0243]) || gflags[0x0244])) goto labelFunc08BE_0029;
	return false;
labelFunc08BE_0029:
	if (!(var0000 == 0x0003)) goto labelFunc08BE_0040;
	if (!((!gflags[0x0244]) || gflags[0x0245])) goto labelFunc08BE_0040;
	return false;
labelFunc08BE_0040:
	if (!(var0000 == 0x0004)) goto labelFunc08BE_0057;
	if (!((!gflags[0x0245]) || gflags[0x0246])) goto labelFunc08BE_0057;
	return false;
labelFunc08BE_0057:
	if (!(var0000 == 0x0005)) goto labelFunc08BE_006E;
	if (!((!gflags[0x0246]) || gflags[0x0247])) goto labelFunc08BE_006E;
	return false;
labelFunc08BE_006E:
	return true;
	return 0;
}


