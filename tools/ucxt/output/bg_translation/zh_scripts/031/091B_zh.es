#game "blackgate"
var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004)
{
	var var0005;

	var0005 = ((var0000 + var0001) + " 的售價為 ");
	if (!(var0002 == 0x0001)) goto labelFunc091B_0025;
	var0005 = var0005;
	goto labelFunc091B_002F;
labelFunc091B_0025:
	var0005 = var0005;
labelFunc091B_002F:
	var0005 = ((((var0005 + var0003) + " 枚金幣") + var0004) + "。");
	return var0005;
	return 0;
}


