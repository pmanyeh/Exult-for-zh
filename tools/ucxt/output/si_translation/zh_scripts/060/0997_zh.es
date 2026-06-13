#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0997 0x997 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;

	if (!(var0001 != false)) goto labelFunc0997_0067;
	var0002 = UI_get_array_size(var0001);
	var0003 = 0x0000;
	var0004 = 0x0001;
labelFunc0997_001E:
	if (!(var0002 > 0x0000)) goto labelFunc0997_0067;
	Func097F(0xFE9C, var0001[var0004], var0003);
	var0003 = (var0003 + 0x0005);
	var0004 = (var0004 + 0x0001);
	Func097F(var0000, var0001[var0004], var0003);
	var0002 = (var0002 - 0x0002);
	goto labelFunc0997_001E;
labelFunc0997_0067:
	return;
}


