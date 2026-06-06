#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern void Func0925 0x925 (var var0000);
extern var Func0932 0x932 (var var0000);

void Func02BE shape#(0x2BE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	if (!(event == 0x0001)) goto labelFunc02BE_00F0;
	UI_close_gumps();
	var0000 = UI_find_nearby(item, 0x02C0, 0x000A, 0x0000);
	var0001 = UI_find_nearby(item, 0x02BF, 0x000A, 0x0000);
	if (!(!var0000)) goto labelFunc02BE_003C;
	Func08FE("@它需要火藥！@");
	return;
labelFunc02BE_003C:
	if (!(!var0001)) goto labelFunc02BE_004A;
	Func08FE("@它需要砲彈！@");
	return;
labelFunc02BE_004A:
	Func0925(var0000[0x0001]);
	Func0925(var0001[0x0001]);
	var0002 = UI_click_on_item();
	var0003 = UI_get_object_position(item);
	var0004 = (var0002[0x0002] - var0003[0x0001]);
	var0005 = (var0002[0x0003] - var0003[0x0002]);
	if (!(Func0932(var0004) > Func0932(var0005))) goto labelFunc02BE_00B7;
	if (!(var0004 > 0x0000)) goto labelFunc02BE_00AE;
	var0006 = 0x0002;
	goto labelFunc02BE_00B4;
labelFunc02BE_00AE:
	var0006 = 0x0006;
labelFunc02BE_00B4:
	goto labelFunc02BE_00D0;
labelFunc02BE_00B7:
	if (!(var0005 > 0x0000)) goto labelFunc02BE_00CA;
	var0006 = 0x0004;
	goto labelFunc02BE_00D0;
labelFunc02BE_00CA:
	var0006 = 0x0000;
labelFunc02BE_00D0:
	UI_set_item_frame(item, (var0006 / 0x0002));
	UI_fire_projectile(item, var0006, 0x02BF, 0x001E, 0x02BE, 0x02BE);
labelFunc02BE_00F0:
	if (!(event == 0x0004)) goto labelFunc02BE_01A6;
	var0007 = UI_get_item_shape(item);
	var0008 = UI_get_item_frame(item);
	if (!(var0007 == 0x02C0)) goto labelFunc02BE_0128;
	var0009 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02C0], 0x0001);
	return;
labelFunc02BE_0128:
	if (!((var0007 == 0x0178) || (var0007 == 0x010E))) goto labelFunc02BE_015B;
	var000A = [0x0000, 0x0001, 0x0002, 0x0008, 0x0009, 0x000A, 0x0010, 0x0011, 0x0012];
labelFunc02BE_015B:
	if (!((var0007 == 0x01B1) || (var0007 == 0x01B0))) goto labelFunc02BE_0185;
	var000A = [0x0000, 0x0001, 0x0002, 0x0004, 0x0005, 0x0006];
labelFunc02BE_0185:
	enum();
labelFunc02BE_0186:
	for (var000D in var000A with var000B to var000C) attend labelFunc02BE_01A6;
	if (!(var0008 == var000D)) goto labelFunc02BE_01A3;
	UI_remove_item(item);
	goto labelFunc02BE_01A6;
labelFunc02BE_01A3:
	goto labelFunc02BE_0186;
labelFunc02BE_01A6:
	return;
}


