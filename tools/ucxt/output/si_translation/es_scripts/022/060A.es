#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func060A object#(0x60A) ()
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

	var0000 = [0x06A7, 0x0BC5, 0x0000];
	var0001 = UI_find_nearby(item, 0x032C, 0x0005, 0x0000);
	enum();
labelFunc060A_0021:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc060A_0078;
	var0005 = UI_get_item_frame(var0004);
	if (!(var0005 == 0x0001)) goto labelFunc060A_004B;
	UI_set_item_frame(var0004, 0x0000);
	abort;
labelFunc060A_004B:
	if (!(var0005 == 0x0000)) goto labelFunc060A_0075;
	Func090D(item, [0x0001, 0x0000], [0x0000, 0x0001], 0xFFFF, 0x060A, item, 0x000B);
labelFunc060A_0075:
	goto labelFunc060A_0021;
labelFunc060A_0078:
	if (!(event == 0x000B)) goto labelFunc060A_00F3;
	UI_set_item_frame(var0001, 0x0001);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9B, var0000);
	var0006 = UI_get_party_list();
	enum();
labelFunc060A_00A9:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc060A_00CB;
	var000A = UI_execute_usecode_array(var0009, [(byte)0x23, (byte)0x59, 0x0000]);
	goto labelFunc060A_00A9;
labelFunc060A_00CB:
	gflags[0x0314] = false;
	var000B = Func09A0(0x0000, 0x0001);
	var000A = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x55, 0x060D], 0x0001);
	abort;
labelFunc060A_00F3:
	return;
}


