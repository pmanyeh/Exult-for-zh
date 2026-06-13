#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);
extern var Func0994 0x994 ();

void Func0916 0x916 ()
{
	if (!(UI_get_item_flag(0xFF6B, 0x001E) && gflags[0x025F])) goto labelFunc0916_0018;
	Func0922(0x000F);
	abort;
labelFunc0916_0018:
	if (!((Func0994() == 0x0017) && (!UI_get_item_flag(0xFEDA, 0x0004)))) goto labelFunc0916_0035;
	Func0922(0x000D);
	abort;
labelFunc0916_0035:
	if (!((Func0994() == 0x001F) && (!gflags[0x02E2]))) goto labelFunc0916_004B;
	Func0922(0x0002);
	abort;
labelFunc0916_004B:
	if (!((Func0994() == 0x0018) && gflags[0x02DC])) goto labelFunc0916_0060;
	Func0922(0x0014);
	abort;
labelFunc0916_0060:
	if (!(!gflags[0x02D9])) goto labelFunc0916_006E;
	Func0922(0x0010);
	abort;
labelFunc0916_006E:
	if (!(gflags[0x02D9] && (!gflags[0x02DA]))) goto labelFunc0916_0080;
	Func0922(0x0011);
	abort;
labelFunc0916_0080:
	if (!(gflags[0x02DA] && (!gflags[0x02DB]))) goto labelFunc0916_0092;
	Func0922(0x0012);
	abort;
labelFunc0916_0092:
	if (!(gflags[0x02DB] && ((!gflags[0x02E2]) && (!gflags[0x0004])))) goto labelFunc0916_00D9;
	if (!(UI_get_random(0x0003) == 0x0001)) goto labelFunc0916_00BA;
	Func0922(0x0013);
	abort;
	goto labelFunc0916_00D9;
labelFunc0916_00BA:
	if (!(UI_get_random(0x0002) == 0x0001)) goto labelFunc0916_00D2;
	Func0922(0x0000);
	abort;
	goto labelFunc0916_00D9;
labelFunc0916_00D2:
	Func0922(0x000C);
	abort;
labelFunc0916_00D9:
	if (!(gflags[0x02E2] && (!gflags[0x0250]))) goto labelFunc0916_00EB;
	Func0922(0x000A);
	abort;
labelFunc0916_00EB:
	if (!(gflags[0x0004] && (!gflags[0x02E1]))) goto labelFunc0916_00FD;
	Func0922(0x0014);
	abort;
labelFunc0916_00FD:
	if (!(gflags[0x02E1] && (!gflags[0x025F]))) goto labelFunc0916_010F;
	Func0922(0x000B);
	abort;
labelFunc0916_010F:
	if (!(gflags[0x02DE] && (!gflags[0x024A]))) goto labelFunc0916_0121;
	Func0922(0x000E);
	abort;
labelFunc0916_0121:
	if (!(gflags[0x02E6] && (!gflags[0x02E5]))) goto labelFunc0916_0133;
	Func0922(0x0006);
	abort;
labelFunc0916_0133:
	if (!(gflags[0x02E7] && (!gflags[0x02E5]))) goto labelFunc0916_0145;
	Func0922(0x0005);
	abort;
labelFunc0916_0145:
	if (!(gflags[0x02E4] && (!gflags[0x02E3]))) goto labelFunc0916_0157;
	Func0922(0x0008);
	abort;
labelFunc0916_0157:
	if (!gflags[0x02E3]) goto labelFunc0916_0164;
	Func0922(0x0009);
	abort;
labelFunc0916_0164:
	if (!(UI_get_random(0x0002) == 0x0001)) goto labelFunc0916_017C;
	Func0922(0x0000);
	abort;
	goto labelFunc0916_0183;
labelFunc0916_017C:
	Func0922(0x000C);
	abort;
labelFunc0916_0183:
	return;
}


