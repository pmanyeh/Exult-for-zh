#game "serpentisle"
// externs
extern void Func0907 0x907 (var var0000, var var0001);
extern var Func090B 0x90B (var var0000);
extern void Func0929 0x929 ();
extern var Func0906 0x906 (var var0000);

void Func0928 0x928 (var var0000)
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

	if (!(var0000 == 0x0065)) goto labelFunc0928_0039;
	var0001 = UI_find_nearby(item, 0x034D, 0x000A, 0x0000);
	if (!var0001) goto labelFunc0928_0039;
	Func0907(var0001[0x0001], 0x0000);
	var0001 = Func090B(var0001[0x0001]);
labelFunc0928_0039:
	if (!((var0000 > 0x0077) && (var0000 < 0x0097))) goto labelFunc0928_004E;
	Func0929();
labelFunc0928_004E:
	if (!(var0000 == 0x006F)) goto labelFunc0928_00A8;
	var0002 = UI_find_nearby(item, 0x0300, 0x001E, 0x0000);
	enum();
labelFunc0928_006A:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0928_00A8;
	var0006 = UI_get_object_position(var0005);
	UI_sprite_effect(0x000C, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0005);
	goto labelFunc0928_006A;
labelFunc0928_00A8:
	if (!(var0000 == 0x0070)) goto labelFunc0928_0199;
	var0002 = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	var0002 = (var0002 & UI_find_nearby(0xFE9C, 0x0178, 0x000A, 0x00B0));
	var0002 = (var0002 & UI_find_nearby(0xFE9C, 0x01B1, 0x000A, 0x00B0));
	var0002 = (var0002 & UI_find_nearby(0xFE9C, 0x01B0, 0x000A, 0x00B0));
	var0002 = (var0002 & UI_find_nearby(0xFE9C, 0x033C, 0x000A, 0x00B0));
	var0002 = (var0002 & UI_find_nearby(0xFE9C, 0x034D, 0x000A, 0x00B0));
	var0007 = var0002[0x0001];
	enum();
labelFunc0928_0142:
	for (var0005 in var0002 with var0008 to var0009) attend labelFunc0928_016A;
	if (!(UI_get_distance(item, var0005) < UI_get_distance(item, var0007))) goto labelFunc0928_0167;
	var0007 = var0005;
labelFunc0928_0167:
	goto labelFunc0928_0142;
labelFunc0928_016A:
	var000A = Func0906(var0007);
	if (!(var000A == 0x0002)) goto labelFunc0928_0186;
	Func0907(var0007, 0x0000);
labelFunc0928_0186:
	if (!(var000A == 0x0000)) goto labelFunc0928_0199;
	Func0907(var0007, 0x0002);
labelFunc0928_0199:
	return;
}


