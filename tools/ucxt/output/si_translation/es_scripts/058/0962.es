#game "serpentisle"
// externs
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func0962 0x962 (var var0000, var var0001)
{
	var var0002;
	var var0003;

	var0002 = 0x0000;
labelFunc0962_0006:
	if (!(var0002 < var0001)) goto labelFunc0962_0041;
	var0003 = Func095C(var0000, 0x0002);
	Func095E(var0000, 0x0002, 0x0001);
	Func095E(var0000, 0x0007, 0xFFFF);
	var0002 = (var0002 + 0x0001);
	goto labelFunc0962_0006;
labelFunc0962_0041:
	return;
}


