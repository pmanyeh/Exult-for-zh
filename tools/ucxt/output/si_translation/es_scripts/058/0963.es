#game "serpentisle"
// externs
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func0963 0x963 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0002 = 0x0000;
labelFunc0963_0006:
	if (!(var0002 < var0001)) goto labelFunc0963_0087;
	var0003 = Func095C(var0000, 0x0001);
	var0004 = Func095C(var0000, 0x0004);
	var0005 = (((var0004 + var0003) + 0x0001) / 0x0002);
	if (!(var0005 >= var0003)) goto labelFunc0963_005E;
	var0005 = (var0004 + 0x0001);
	if (!(var0005 >= 0x001E)) goto labelFunc0963_005E;
	var0005 = 0x001E;
labelFunc0963_005E:
	Func095E(var0000, 0x0004, (var0005 - var0004));
	Func095E(var0000, 0x0007, 0xFFFF);
	var0002 = (var0002 + 0x0001);
	goto labelFunc0963_0006;
labelFunc0963_0087:
	return;
}


