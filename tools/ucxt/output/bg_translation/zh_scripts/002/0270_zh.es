#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func092D 0x92D (var var0000);

void Func0270 shape#(0x270) ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;

	if (!(event == 0x0001)) goto labelFunc0270_00AB;
	if (!(!UI_is_readied(0xFE9C, 0x0001, 0x0270, 0xFE99))) goto labelFunc0270_0023;
	Func08FF("@你必須把它拿在手上。@");
	return;
labelFunc0270_0023:
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	if (!(var0001 == 0x03A4)) goto labelFunc0270_00A5;
	if (!((UI_get_item_frame(var0000) == 0x0002) || (UI_get_item_frame(var0000) == 0x0003))) goto labelFunc0270_009C;
	var0002 = [0x0002, 0x0001, 0x0000];
	var0003 = [0x0002, 0x0002, 0x0002];
	var0004 = [0xFFFB];
	Func0828(var0000, var0002, var0003, var0004, 0x0270, item, 0x0007);
	UI_close_gumps();
	goto labelFunc0270_00A2;
labelFunc0270_009C:
	Func08FF("這棵樹似乎不會產出任何有價值的東西。");
labelFunc0270_00A2:
	goto labelFunc0270_00AB;
labelFunc0270_00A5:
	Func08FF("看來那不需要用到十字鎬。");
labelFunc0270_00AB:
	if (!(event == 0x0007)) goto labelFunc0270_012D;
	var0005 = UI_find_nearby(0xFE9C, 0x03A4, 0x0003, 0x0000);
	enum();
labelFunc0270_00C7:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0270_00FA;
	var0009 = UI_get_item_frame(var0008);
	if (!((var0009 == 0x0002) || (var0009 == 0x0003))) goto labelFunc0270_00F7;
	var000A = Func092D(var0008);
labelFunc0270_00F7:
	goto labelFunc0270_00C7;
labelFunc0270_00FA:
	var000B = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var000A, (byte)0x65, (byte)0x27, 0x0002, (byte)0x67, (byte)0x27, 0x0002, (byte)0x65, (byte)0x27, 0x0002, (byte)0x67, (byte)0x27, 0x0001, (byte)0x55, 0x0270]);
labelFunc0270_012D:
	if (!(event == 0x0002)) goto labelFunc0270_026B;
	if (!gflags[0x0321]) goto labelFunc0270_0180;
	var000C = UI_create_new_object(0x00CB);
	UI_set_item_frame(var000C, 0x000A);
	var000D = UI_update_last_created([0x097A, 0x0619, 0x0004]);
	UI_set_item_frame(UI_find_nearby(0xFE9C, 0x03A4, 0x0003, 0x0000), 0x0003);
	gflags[0x0321] = false;
	goto labelFunc0270_026B;
labelFunc0270_0180:
	var000E = UI_find_nearby(0xFE9C, 0x03A4, 0x0003, 0x0000);
	enum();
labelFunc0270_0194:
	for (var0008 in var000E with var000F to var0010) attend labelFunc0270_026B;
	var0009 = UI_get_item_frame(var000E);
	if (!((var0009 == 0x0003) || (var0009 == 0x0002))) goto labelFunc0270_0268;
	var0011 = 0x0000;
labelFunc0270_01C1:
	if (!(var0011 < 0x0003)) goto labelFunc0270_0238;
	var0012 = UI_create_new_object(0x0390);
	UI_set_item_frame(var0012, (0x0003 - var0011));
	var0013 = UI_get_object_position(var000E);
	var0013[0x0001] = ((var0013[0x0001] + 0x0001) + var0011);
	var0013[0x0002] = (var0013[0x0002] + 0x0002);
	var0013[0x0003] = (var0013[0x0003] - 0x0003);
	var0014 = UI_update_last_created(var0013);
	var0011 = (var0011 + 0x0001);
	goto labelFunc0270_01C1;
labelFunc0270_0238:
	var0015 = UI_find_nearby(var0008, 0x032A, 0x0005, 0x0000);
	if (!var0015) goto labelFunc0270_0268;
	UI_set_item_frame(var0015, 0x0002);
	var0016 = UI_set_item_quality(var0015, 0x0004);
labelFunc0270_0268:
	goto labelFunc0270_0194;
labelFunc0270_026B:
	return;
}


