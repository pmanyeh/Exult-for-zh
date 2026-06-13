#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0940 0x940 (var var0000, var var0001);
extern void Func093E 0x93E (var var0000);
extern var Func093D 0x93D (var var0000, var var0001);
extern void Func093F 0x93F (var var0000);

void Func07AC object#(0x7AC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	var0002 = UI_get_item_quantity(item, 0x0000);
	if (!(UI_get_random(0x0002) == 0x0001)) goto labelFunc07AC_0062;
	var0003 = ("@Yikes!@" & ("@Look!@" & ("@That was close!@" & ("@Run!@" & ("@Teleport storm!@" & "@Whoa!@")))));
	var0004 = Func0992(0x0001, var0003[UI_get_random(UI_get_array_size(var0003))], 0x0000, true);
	item->Func07D1();
labelFunc07AC_0062:
	if (!(var0001 == 0x0001)) goto labelFunc07AC_009D;
	var0000 = Func0940(var0000, var0002);
	UI_sprite_effect(0x0015, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func093E(var0000);
labelFunc07AC_009D:
	if (!(var0001 == 0x0002)) goto labelFunc07AC_00ED;
	var0005 = Func093D(var0000, (var0002 + 0x0001));
	if (!var0005) goto labelFunc07AC_00ED;
	var0000 = UI_get_object_position(var0005);
	UI_sprite_effect(0x0009, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var0005);
labelFunc07AC_00ED:
	if (!((var0001 == 0x0003) || (var0001 == 0x0004))) goto labelFunc07AC_0177;
	var0005 = Func093D(var0000, (var0002 + 0x0001));
	if (!var0005) goto labelFunc07AC_0177;
	var0000 = UI_get_object_position(var0005);
	if (!(var0001 == 0x0003)) goto labelFunc07AC_014B;
	UI_sprite_effect(0x0009, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc07AC_016A;
labelFunc07AC_014B:
	UI_sprite_effect(0x0015, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc07AC_016A:
	UI_remove_item(var0005);
	Func093F(var0000);
labelFunc07AC_0177:
	return;
}


