#game "serpentisle"
var Func084D 0x84D (var var0000, var var0001)
{
	if (!(var0001 == 0x0001)) goto labelFunc084D_0035;
	if (!(var0000 == 0xFF2A)) goto labelFunc084D_0018;
	return 0x0012;
labelFunc084D_0018:
	if (!((var0000 == 0xFF30) || (var0000 == 0xFF2E))) goto labelFunc084D_0031;
	return 0x0017;
	goto labelFunc084D_0035;
labelFunc084D_0031:
	return 0x001A;
labelFunc084D_0035:
	if (!(var0001 == 0x0002)) goto labelFunc084D_0064;
	if (!((var0000 == 0xFF2D) || ((var0000 == 0xFF2F) || (var0000 == 0xFF2C)))) goto labelFunc084D_0060;
	return 0x0007;
	goto labelFunc084D_0064;
labelFunc084D_0060:
	return 0x0006;
labelFunc084D_0064:
	if (!((var0001 == 0x0003) || (var0001 == 0x000A))) goto labelFunc084D_0093;
	if (!((var0000 == 0xFF31) || (var0000 == 0xFF29))) goto labelFunc084D_008F;
	return 0x0007;
	goto labelFunc084D_0093;
labelFunc084D_008F:
	return 0x0010;
labelFunc084D_0093:
	if (!(var0001 == 0x0004)) goto labelFunc084D_00C8;
	if (!((var0000 == 0xFF30) || (var0000 == 0xFF2E))) goto labelFunc084D_00B3;
	return 0x000C;
labelFunc084D_00B3:
	if (!(var0000 == 0xFF2A)) goto labelFunc084D_00C4;
	return 0x0002;
	goto labelFunc084D_00C8;
labelFunc084D_00C4:
	return 0x001E;
labelFunc084D_00C8:
	if (!(var0001 == 0x0005)) goto labelFunc084D_00EF;
	if (!((var0000 == 0xFF2B) || (var0000 == 0xFF29))) goto labelFunc084D_00EB;
	return 0x0007;
	goto labelFunc084D_00EF;
labelFunc084D_00EB:
	return 0x0010;
labelFunc084D_00EF:
	if (!(var0001 == 0x0006)) goto labelFunc084D_00FD;
	return 0x0007;
labelFunc084D_00FD:
	if (!(var0001 == 0x0007)) goto labelFunc084D_015B;
	if (!((var0000 == 0xFF29) || ((var0000 == 0xFF2F) || (var0000 == 0xFF31)))) goto labelFunc084D_0125;
	return 0x001E;
labelFunc084D_0125:
	if (!((var0000 == 0xFF2D) || (var0000 == 0xFF2B))) goto labelFunc084D_013B;
	return 0x000C;
labelFunc084D_013B:
	if (!(var0000 == 0xFF2C)) goto labelFunc084D_0149;
	return 0x0006;
labelFunc084D_0149:
	if (!(var0000 == 0xFF2E)) goto labelFunc084D_0157;
	return 0x0002;
labelFunc084D_0157:
	return 0x0012;
labelFunc084D_015B:
	if (!(var0001 == 0x0008)) goto labelFunc084D_0169;
	return 0x000E;
labelFunc084D_0169:
	if (!(var0001 == 0x0009)) goto labelFunc084D_0188;
	if (!(var0000 == 0xFF2B)) goto labelFunc084D_0184;
	return 0x0007;
	goto labelFunc084D_0188;
labelFunc084D_0184:
	return 0x0004;
labelFunc084D_0188:
	return 0;
}


