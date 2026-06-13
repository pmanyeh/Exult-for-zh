#game "serpentisle"
// externs
extern void Func0907 0x907 (var var0000, var var0001);
extern var Func090A 0x90A (var var0000);
extern var Func090B 0x90B (var var0000);

void Func06EE object#(0x6EE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_find_nearby(item, 0x0106, 0x0002, 0x0000);
	event = 0x0001;
	if (!var0000) goto labelFunc06EE_007F;
	var0000 = UI_find_nearby(item, 0x033C, 0x0019, 0x0000);
	enum();
labelFunc06EE_002D:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06EE_004D;
	Func0907(var0003, 0x0000);
	var0004 = Func090A(var0003);
	goto labelFunc06EE_002D;
labelFunc06EE_004D:
	var0000 = UI_find_nearby(item, 0x034D, 0x0019, 0x0000);
	enum();
labelFunc06EE_005F:
	for (var0003 in var0000 with var0005 to var0006) attend labelFunc06EE_007F;
	Func0907(var0003, 0x0000);
	var0004 = Func090B(var0003);
	goto labelFunc06EE_005F;
labelFunc06EE_007F:
	return;
}


