#game "serpentisle"
// externs
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func0961 0x961 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0002 = 0x0000;
labelFunc0961_0006:
	if (!(var0002 < var0001)) goto labelFunc0961_007D;
	var0003 = Func095C(var0000, 0x0001);
	Func095E(var0000, 0x0001, 0x0001);
	var0004 = (var0003 + 0x0001);
	var0005 = Func095C(var0000, 0x0004);
	var0006 = (((var0004 * var0005) + (var0003 - 0x0001)) / var0003);
	Func095E(var0000, 0x0004, (var0006 - var0005));
	Func095E(var0000, 0x0007, 0xFFFF);
	var0002 = (var0002 + 0x0001);
	goto labelFunc0961_0006;
labelFunc0961_007D:
	return;
}


