#game "serpentisle"
// externs
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();

void Func070D object#(0x70D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_find_nearby(item, 0x00D1, 0x0001, 0x0000);
	if (!var0000) goto labelFunc070D_0099;
	if (!(UI_get_item_frame(var0000) == 0x0010)) goto labelFunc070D_0099;
	var0001 = UI_find_nearby(item, 0x010E, 0x0014, 0x0000);
	enum();
labelFunc070D_0037:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc070D_0099;
	if (!(UI_get_item_quality(var0004) == 0x0056)) goto labelFunc070D_0096;
	if (!Func0908(var0004, 0x0178, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc070D_0093;
	Func0909(var0004, 0x01B0, 0x0000, 0x0002, 0x01B1, 0x0001, 0xFFFD, 0x0000, 0x0007);
	UI_play_sound_effect2(0x0020, var0004);
	goto labelFunc070D_0096;
labelFunc070D_0093:
	Func0903();
labelFunc070D_0096:
	goto labelFunc070D_0037;
labelFunc070D_0099:
	return;
}


