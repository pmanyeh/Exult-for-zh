#game "serpentisle"
// externs
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0924 0x924 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;

	var0002 = UI_get_item_quality(var0000);
	var0003 = [];
	if (!((var0001 == 0x0001) || (var0001 == 0xFE99))) goto labelFunc0924_003E;
	var0003 = (var0003 & UI_find_nearby_avatar(0x012F));
	var0003 = (var0003 & UI_find_nearby_avatar(0x036C));
labelFunc0924_003E:
	if (!((var0001 == 0x0000) || (var0001 == 0xFE99))) goto labelFunc0924_006C;
	var0003 = (var0003 & UI_find_nearby_avatar(0x03A8));
	var0003 = (var0003 & UI_find_nearby_avatar(0x03A7));
labelFunc0924_006C:
	if (!var0003) goto labelFunc0924_0164;
	enum();
labelFunc0924_0073:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0924_0113;
	if (!(UI_get_item_quality(var0006) == var0002)) goto labelFunc0924_0110;
	var0007 = UI_get_item_frame(var0006);
	var0008 = UI_get_item_shape(var0006);
	if (!(var0008 == 0x012F)) goto labelFunc0924_00BC;
	var0008 = 0x03A8;
	Func091E(var0006, var0008);
	goto labelFunc0924_0110;
labelFunc0924_00BC:
	if (!(var0008 == 0x036C)) goto labelFunc0924_00D8;
	var0008 = 0x03A7;
	Func091E(var0006, var0008);
	goto labelFunc0924_0110;
labelFunc0924_00D8:
	if (!(var0008 == 0x03A8)) goto labelFunc0924_00F4;
	var0008 = 0x012F;
	Func091F(var0006, var0008);
	goto labelFunc0924_0110;
labelFunc0924_00F4:
	if (!(var0008 == 0x03A7)) goto labelFunc0924_0110;
	var0008 = 0x036C;
	Func091F(var0006, var0008);
	goto labelFunc0924_0110;
labelFunc0924_0110:
	goto labelFunc0924_0073;
labelFunc0924_0113:
	if (!(var0002 == 0x007B)) goto labelFunc0924_0164;
	var0009 = UI_find_nearby(0xFE9C, 0x037C, 0x0019, 0x0000);
	if (!var0009) goto labelFunc0924_0164;
	UI_set_item_flag(0xFE9C, 0x0010);
	var000A = UI_set_item_quality(var0009, 0x0001);
	var000A = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x0780], 0x000A);
labelFunc0924_0164:
	return;
}


