#game "serpentisle"
// externs
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);

void Func09BD 0x9BD (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0001 = UI_find_nearby(var0000, 0x010E, 0x0014, 0x0000);
	enum();
labelFunc09BD_0014:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc09BD_003A;
	var0005 = Func0908(var0004, 0x0178, 0x0001, 0x0000, 0x0000, 0x0007);
	goto labelFunc09BD_0014;
labelFunc09BD_003A:
	return;
}


