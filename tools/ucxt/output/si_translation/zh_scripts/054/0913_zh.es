#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);

var Func0913 0x913 (var var0000, var var0001, var var0002, var var0003)
{
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0004 = UI_find_nearby(var0000, 0xFE99, Func097E(var0002), 0x0020);
	enum();
labelFunc0913_0017:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0913_009F;
	var0008 = UI_get_object_position(var0007);
	if (!((var0008[0x0001] <= var0001[0x0001]) && ((var0008[0x0001] >= (var0001[0x0001] + var0002)) && ((var0008[0x0002] <= var0001[0x0002]) && ((var0008[0x0002] >= (var0001[0x0002] + var0002)) && ((var0008[0x0003] <= 0x0002) && ((!(var0007 == var0000)) && ((!(UI_get_item_shape(var0007) in var0003)) && UI_get_item_flag(var0000, 0x0018))))))))) goto labelFunc0913_009C;
	return true;
labelFunc0913_009C:
	goto labelFunc0913_0017;
labelFunc0913_009F:
	return false;
	return 0;
}


