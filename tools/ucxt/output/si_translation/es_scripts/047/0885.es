#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);
extern void Func0886 0x886 ();

void Func0885 0x885 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = UI_find_nearby(item, 0x0376, 0x0005, 0x0000);
	var0002 = UI_get_item_frame(var0001);
	if (!(var0000 == 0x0004)) goto labelFunc0885_004B;
	if (!(var0002 == 0x0001)) goto labelFunc0885_004B;
	if (!((!gflags[0x02F2]) && (!gflags[0x02F3]))) goto labelFunc0885_0048;
	gflags[0x02F1] = true;
	Func095D(0x0032);
	goto labelFunc0885_004B;
labelFunc0885_0048:
	Func0886();
labelFunc0885_004B:
	if (!(var0000 == 0x0005)) goto labelFunc0885_007A;
	if (!(var0002 == 0x0000)) goto labelFunc0885_007A;
	if (!(gflags[0x02F1] && (!gflags[0x02F3]))) goto labelFunc0885_0077;
	gflags[0x02F2] = true;
	Func095D(0x0032);
	goto labelFunc0885_007A;
labelFunc0885_0077:
	Func0886();
labelFunc0885_007A:
	if (!(var0000 == 0x0006)) goto labelFunc0885_00A8;
	if (!(var0002 == 0x0001)) goto labelFunc0885_00A8;
	if (!(gflags[0x02F1] && gflags[0x02F2])) goto labelFunc0885_00A5;
	gflags[0x02F3] = true;
	Func095D(0x0032);
	goto labelFunc0885_00A8;
labelFunc0885_00A5:
	Func0886();
labelFunc0885_00A8:
	if (!(gflags[0x02F1] && (gflags[0x02F2] && gflags[0x02F3]))) goto labelFunc0885_00DD;
	var0003 = UI_find_nearby(item, 0x0386, 0x0078, 0x0000);
	enum();
labelFunc0885_00C8:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0885_00DD;
	UI_remove_item(var0006);
	goto labelFunc0885_00C8;
labelFunc0885_00DD:
	return;
}


