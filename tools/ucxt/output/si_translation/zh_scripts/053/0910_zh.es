#game "serpentisle"
// externs
extern var Func0913 0x913 (var var0000, var var0001, var var0002, var var0003);
extern var Func0914 0x914 (var var0000, var var0001, var var0002);

var Func0910 0x910 (var var0000)
{
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

	var0001 = [0xFFFD, 0x0000, 0x0001, 0x0000];
	var0002 = [0x0000, 0xFFFD, 0x0000, 0x0001];
	var0003 = [0x0096, 0x0096, 0x030D, 0x030D];
	var0004 = [0x02A8];
	var0005 = UI_get_item_shape(var0000);
	var0006 = UI_get_item_frame(var0000);
	var0007 = UI_get_object_position(var0000);
	var0008 = var0003[(var0006 + 0x0001)];
	var0009[0x0001] = var0001[(var0006 + 0x0001)];
	var0009[0x0002] = var0002[(var0006 + 0x0001)];
	var0009[0x0003] = 0x0001;
	if (!(var0005 == var0008)) goto labelFunc0910_00C3;
	if (!Func0913(var0000, var0007, 0xFFFD, var0004)) goto labelFunc0910_00B1;
	return false;
labelFunc0910_00B1:
	var0007 = Func0914(var0007, var0009, var0005);
	goto labelFunc0910_00E6;
labelFunc0910_00C3:
	var0007 = Func0914(var0007, var0009, var0005);
	if (!Func0913(var0000, var0007, 0xFFFD, var0004)) goto labelFunc0910_00E6;
	return false;
labelFunc0910_00E6:
	if (!(var0005 == 0x0096)) goto labelFunc0910_00FD;
	UI_set_item_shape(var0000, 0x030D);
	goto labelFunc0910_0107;
labelFunc0910_00FD:
	UI_set_item_shape(var0000, 0x0096);
labelFunc0910_0107:
	var000A = UI_set_last_created(var0000);
	if (!var000A) goto labelFunc0910_0126;
	var000A = UI_update_last_created(var0007);
	return true;
	goto labelFunc0910_0128;
labelFunc0910_0126:
	return false;
labelFunc0910_0128:
	return 0;
}


