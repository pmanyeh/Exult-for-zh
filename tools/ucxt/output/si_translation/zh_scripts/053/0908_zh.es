#game "serpentisle"
// externs
extern void Func0907 0x907 (var var0000, var var0001);

var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005)
{
	var var0006;
	var var0007;

	Func0907(var0000, var0002);
	UI_set_item_shape(var0000, var0001);
	var0006 = UI_get_object_position(var0000);
	var0006[0x0001] = (var0006[0x0001] + var0003);
	var0006[0x0002] = (var0006[0x0002] + var0004);
	if (!UI_set_last_created(var0000)) goto labelFunc0908_0051;
	var0007 = UI_update_last_created(var0006);
labelFunc0908_0051:
	return true;
	return 0;
}


