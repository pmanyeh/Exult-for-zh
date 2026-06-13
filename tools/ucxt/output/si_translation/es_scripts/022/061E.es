#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func061E object#(0x61E) ()
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

	if (!gflags[0x01EC]) goto labelFunc061E_0007;
	abort;
labelFunc061E_0007:
	var0000 = UI_get_object_position(0xFE9C);
	if (!((event == 0x0002) && ((var0000[0x0001] > 0x0010) && ((var0000[0x0001] < 0x004F) && ((var0000[0x0002] > 0x0660) && (var0000[0x0002] < 0x067A)))))) goto labelFunc061E_0109;
	var0001 = false;
	var0002 = [0x0130, 0x02FE, 0x01D5, 0x0378];
	if (!(!(UI_get_schedule_type(0xFF54) == 0x0004))) goto labelFunc061E_0074;
	var0002 = (var0002 & 0x028C);
labelFunc061E_0074:
	var0003 = ["@Help us!@", "@Press the right button!@", "@Free us with the right button!@", "@Be kind...@", "@Do not force us!@", "@Damn the buttons!@"];
	enum();
labelFunc061E_008D:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc061E_00D3;
	var0007 = UI_find_nearby(0xFE9C, var0006, 0x0014, 0x0000);
	if (!var0007) goto labelFunc061E_00D0;
	Func097F(var0007, var0003[UI_get_random(UI_get_array_size(var0003))], UI_get_random(0x000A));
	var0001 = true;
labelFunc061E_00D0:
	goto labelFunc061E_008D;
labelFunc061E_00D3:
	if (!var0001) goto labelFunc061E_0109;
	var0008 = UI_die_roll(0x0028, 0x0050);
	var0007 = Func09A0(0x0000, 0x0001);
	var0009 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x061E], var0008);
labelFunc061E_0109:
	return;
}


