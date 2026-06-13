#game "serpentisle"
// externs
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func0960 0x960 (var var0000, var var0001)
{
	var var0002;

	var0002 = 0x0000;
labelFunc0960_0006:
	if (!(var0002 < var0001)) goto labelFunc0960_0041;
	Func095E(var0000, 0x0000, 0x0001);
	Func095E(var0000, 0x0003, 0x0001);
	Func095E(var0000, 0x0007, 0xFFFF);
	var0002 = (var0002 + 0x0001);
	goto labelFunc0960_0006;
labelFunc0960_0041:
	return;
}


