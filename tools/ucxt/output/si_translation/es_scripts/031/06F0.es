#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func010E shape#(0x10E) ();
extern void Func0178 shape#(0x178) ();
extern void Func01B1 shape#(0x1B1) ();
extern void Func01B0 shape#(0x1B0) ();
extern void Func0907 0x907 (var var0000, var var0001);

void Func06F0 object#(0x6F0) ()
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

	var0000 = false;
	var0001 = UI_find_nearby(item, 0x02B0, 0x0002, 0x0000);
	if (!var0001) goto labelFunc06F0_003C;
	enum();
labelFunc06F0_001C:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc06F0_003C;
	if (!(UI_get_item_frame(var0004) == 0x0004)) goto labelFunc06F0_0039;
	var0000 = true;
labelFunc06F0_0039:
	goto labelFunc06F0_001C;
labelFunc06F0_003C:
	if (!(!var0000)) goto labelFunc06F0_016C;
	event = 0x0001;
	var0004 = UI_find_nearby(item, 0x010E, 0x0014, 0x0000);
	enum();
labelFunc06F0_0059:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc06F0_007A;
	if (!(Func0906(var0007) == 0x0001)) goto labelFunc06F0_0077;
	var0007->Func010E();
labelFunc06F0_0077:
	goto labelFunc06F0_0059;
labelFunc06F0_007A:
	var0004 = UI_find_nearby(item, 0x0178, 0x0014, 0x0000);
	enum();
labelFunc06F0_008C:
	for (var0007 in var0004 with var0008 to var0009) attend labelFunc06F0_00AD;
	if (!(Func0906(var0007) == 0x0001)) goto labelFunc06F0_00AA;
	var0007->Func0178();
labelFunc06F0_00AA:
	goto labelFunc06F0_008C;
labelFunc06F0_00AD:
	var0004 = UI_find_nearby(item, 0x01B1, 0x0014, 0x0000);
	enum();
labelFunc06F0_00BF:
	for (var0007 in var0004 with var000A to var000B) attend labelFunc06F0_00E0;
	if (!(Func0906(var0007) == 0x0001)) goto labelFunc06F0_00DD;
	var0007->Func01B1();
labelFunc06F0_00DD:
	goto labelFunc06F0_00BF;
labelFunc06F0_00E0:
	var0004 = UI_find_nearby(item, 0x01B0, 0x0014, 0x0000);
	enum();
labelFunc06F0_00F2:
	for (var0007 in var0004 with var000C to var000D) attend labelFunc06F0_0113;
	if (!(Func0906(var0007) == 0x0001)) goto labelFunc06F0_0110;
	var0007->Func01B0();
labelFunc06F0_0110:
	goto labelFunc06F0_00F2;
labelFunc06F0_0113:
	var0004 = (UI_find_nearby(item, 0x010E, 0x0014, 0x0000) & (UI_find_nearby(item, 0x0178, 0x0014, 0x0000) & (UI_find_nearby(item, 0x01B1, 0x0014, 0x0000) & UI_find_nearby(item, 0x01B0, 0x0014, 0x0000))));
	enum();
labelFunc06F0_0152:
	for (var0007 in var0004 with var000E to var000F) attend labelFunc06F0_0169;
	Func0907(var0007, 0x0002);
	goto labelFunc06F0_0152;
labelFunc06F0_0169:
	goto labelFunc06F0_01CF;
labelFunc06F0_016C:
	var0004 = (UI_find_nearby(item, 0x010E, 0x0014, 0x0000) & (UI_find_nearby(item, 0x0178, 0x0014, 0x0000) & (UI_find_nearby(item, 0x01B1, 0x0014, 0x0000) & UI_find_nearby(item, 0x01B0, 0x0014, 0x0000))));
	enum();
labelFunc06F0_01AB:
	for (var0007 in var0004 with var0010 to var0011) attend labelFunc06F0_01CF;
	if (!(Func0906(var0007) == 0x0002)) goto labelFunc06F0_01CC;
	Func0907(var0007, 0x0000);
labelFunc06F0_01CC:
	goto labelFunc06F0_01AB;
labelFunc06F0_01CF:
	var0012 = UI_find_nearby(item, 0x00C8, 0x003C, 0x00B0);
	enum();
labelFunc06F0_01E1:
	for (var0015 in var0012 with var0013 to var0014) attend labelFunc06F0_0231;
	if (!(UI_get_item_frame(var0015) == 0x0001)) goto labelFunc06F0_022E;
	if (!(!var0000)) goto labelFunc06F0_0219;
	var0016 = UI_execute_usecode_array(var0015, [(byte)0x49, 0x0002, 0x0014]);
	goto labelFunc06F0_022E;
labelFunc06F0_0219:
	var0016 = UI_execute_usecode_array(var0015, [(byte)0x49, 0x0007, 0x0000]);
labelFunc06F0_022E:
	goto labelFunc06F0_01E1;
labelFunc06F0_0231:
	return;
}


