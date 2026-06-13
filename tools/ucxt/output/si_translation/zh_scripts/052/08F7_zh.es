#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

var Func08F7 0x8F7 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = [0x0000, 0x0000, 0x0000];
	var0001 = Func09A0(0x0002, 0x0001);
	var0002 = Func09A0(0x0002, 0x0002);
	var0003 = Func09A0(0x0002, 0x0003);
	var0004 = Func09A0(0x0002, 0x0004);
	var0005 = Func09A0(0x0000, 0x0004);
	var0006 = UI_get_item_quality(var0001);
	var0007 = UI_get_item_quality(var0002);
	var0000[0x0001] = ((var0006 * 0x0100) + var0007);
	var0006 = UI_get_item_quality(var0003);
	var0007 = UI_get_item_quality(var0004);
	var0000[0x0002] = ((var0006 * 0x0100) + var0007);
	var0000[0x0003] = UI_get_item_quality(var0005);
	return var0000;
	return 0;
}


