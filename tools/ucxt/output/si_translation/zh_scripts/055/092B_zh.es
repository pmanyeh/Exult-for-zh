#game "serpentisle"
// externs
extern var Func092C 0x92C (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func092B 0x92B ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func092C(0x0001);
	var0001 = Func092C(0x0002);
	var0002 = Func092C(0x0003);
	var0003 = 0x0001;
	var0004 = (UI_get_array_size(var0000) + 0x0001);
labelFunc092B_002F:
	if (!(var0003 < var0004)) goto labelFunc092B_0185;
	if (!Func097D(0xFE9B, 0x0001, var0000[var0003], var0001[var0003], var0002[var0003])) goto labelFunc092B_0178;
	if (!(var0000[var0003] == 0x0108)) goto labelFunc092B_0068;
	gflags[0x027A] = true;
labelFunc092B_0068:
	if (!(var0000[var0003] == 0x0241)) goto labelFunc092B_0079;
	gflags[0x0283] = true;
labelFunc092B_0079:
	if (!(var0000[var0003] == 0x034A)) goto labelFunc092B_008A;
	gflags[0x028B] = true;
labelFunc092B_008A:
	if (!(var0000[var0003] == 0x02ED)) goto labelFunc092B_009B;
	gflags[0x027D] = true;
labelFunc092B_009B:
	if (!(var0000[var0003] == 0x010B)) goto labelFunc092B_00AC;
	gflags[0x027E] = true;
labelFunc092B_00AC:
	if (!(var0000[var0003] == 0x011D)) goto labelFunc092B_00BD;
	gflags[0x0284] = true;
labelFunc092B_00BD:
	if (!(var0000[var0003] == 0x0377)) goto labelFunc092B_00CE;
	gflags[0x027F] = true;
labelFunc092B_00CE:
	if (!(var0000[var0003] == 0x02A5)) goto labelFunc092B_00DF;
	gflags[0x027A] = true;
labelFunc092B_00DF:
	if (!(var0000[var0003] == 0x00F4)) goto labelFunc092B_00F0;
	gflags[0x0288] = true;
labelFunc092B_00F0:
	if (!(var0000[var0003] == 0x02D9)) goto labelFunc092B_0101;
	gflags[0x028A] = true;
labelFunc092B_0101:
	if (!(var0000[var0003] == 0x0268)) goto labelFunc092B_0112;
	gflags[0x0285] = true;
labelFunc092B_0112:
	if (!(var0000[var0003] == 0x0392)) goto labelFunc092B_0123;
	gflags[0x027C] = true;
labelFunc092B_0123:
	if (!(var0000[var0003] == 0x024B)) goto labelFunc092B_0134;
	gflags[0x0281] = true;
labelFunc092B_0134:
	if (!(var0000[var0003] == 0x03B4)) goto labelFunc092B_0145;
	gflags[0x0287] = true;
labelFunc092B_0145:
	if (!(var0000[var0003] == 0x031A)) goto labelFunc092B_0156;
	gflags[0x0289] = true;
labelFunc092B_0156:
	if (!(var0000[var0003] == 0x03EC)) goto labelFunc092B_0167;
	gflags[0x0280] = true;
labelFunc092B_0167:
	if (!(var0000[var0003] == 0x01A3)) goto labelFunc092B_0178;
	gflags[0x0282] = true;
labelFunc092B_0178:
	var0003 = (var0003 + 0x0001);
	goto labelFunc092B_002F;
labelFunc092B_0185:
	return;
}


