#game "serpentisle"
// externs
extern void Func0927 0x927 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func0908 0x908 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005);
extern void Func0909 0x909 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func0903 0x903 ();

void Func0926 0x926 (var var0000)
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
	var var000B;

	if (!(var0000 == 0x0017)) goto labelFunc0926_000D;
	Func0927();
labelFunc0926_000D:
	if (!(var0000 == 0x0018)) goto labelFunc0926_009A;
	var0001 = [0xFF55, 0xFF54, 0xFF53, 0xFF52, 0xFF51];
	var0002 = ("@Thank thee!@" & ("@Bless thee!@" & ("@We are saved!@" & "@Praise the Hero!@")));
	enum();
labelFunc0926_003F:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0926_007E;
	UI_clear_item_say(var0005);
	Func097F(var0005, var0002[UI_get_random(UI_get_array_size(var0002))], UI_get_random(0x000A));
	Func09AC(var0005, 0xFFFF, 0x0000, 0x0004);
	goto labelFunc0926_003F;
labelFunc0926_007E:
	gflags[0x01EC] = true;
	var0006 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F7], 0x000F);
	abort;
labelFunc0926_009A:
	if (!((var0000 == 0x003D) && (gflags[0x0227] && (!UI_get_item_flag(0xFE9C, 0x0020))))) goto labelFunc0926_0120;
	var0006 = UI_get_object_position(0xFFE4);
	if (!((var0006[0x0001] == 0x06E3) && ((var0006[0x0002] == 0x0273) && (var0006[0x0003] == 0x0001)))) goto labelFunc0926_0120;
	var0007 = UI_create_new_object(0x025F);
	if (!var0007) goto labelFunc0926_0120;
	UI_set_item_frame(var0007, 0x0006);
	var0006 = UI_update_last_created([0x06EC, 0x0273, 0x0001]);
	var0006 = UI_execute_usecode_array(var0007, [(byte)0x55, 0x033D]);
labelFunc0926_0120:
	if (!((var0000 == 0x0055) || (var0000 == 0x0059))) goto labelFunc0926_01A6;
	var0008 = UI_find_nearby(item, 0x0178, 0x001E, 0x0000);
	enum();
labelFunc0926_0144:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0926_01A6;
	if (!(UI_get_item_quality(var000B) == var0000)) goto labelFunc0926_01A3;
	if (!Func0908(var000B, 0x010E, 0x0001, 0x0000, 0x0000, 0x0007)) goto labelFunc0926_01A0;
	Func0909(var000B, 0x01B1, 0x0000, 0x0002, 0x01B0, 0x0001, 0xFFFD, 0x0000, 0x0007);
	UI_play_sound_effect2(0x0020, var000B);
	goto labelFunc0926_01A3;
labelFunc0926_01A0:
	Func0903();
labelFunc0926_01A3:
	goto labelFunc0926_0144;
labelFunc0926_01A6:
	return;
}


