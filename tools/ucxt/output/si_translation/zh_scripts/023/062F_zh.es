#game "serpentisle"
// externs
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func062F object#(0x62F) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0002)) goto labelFunc062F_006C;
	var0000 = UI_die_roll(0x0001, 0x000A);
	var0001 = UI_die_roll(0x0001, 0x000A);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc062F_003D;
	var0001 = (0x0000 - var0001);
labelFunc062F_003D:
	var0002 = [0x0A22, 0x0AB7];
	UI_set_schedule_type(item, 0x000F);
	Func09AC(item, (var0002[0x0001] + var0000), (var0002[0x0002] + var0001), 0x000F);
labelFunc062F_006C:
	return;
}


