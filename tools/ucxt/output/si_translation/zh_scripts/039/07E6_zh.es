#game "serpentisle"
// externs
extern void Func0917 0x917 (var var0000, var var0001);
extern var Func0910 0x910 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func07E6 object#(0x7E6) ()
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

	UI_clear_item_flag(0xFE9C, 0x0010);
	var0000 = UI_find_nearby(item, 0x00FB, 0x0019, 0x0000);
	Func0917(var0000, 0x0000);
	var0001 = UI_find_nearby(item, 0x030D, 0x0019, 0x0000);
	if (!(!Func0910(var0001))) goto labelFunc07E6_0046;
	UI_error_message("Cannot lower Plank's constant");
labelFunc07E6_0046:
	UI_show_npc_face0(0xFFD8, 0x0000);
	var0002 = UI_is_pc_female();
	if (!(var0002 == true)) goto labelFunc07E6_0068;
	var0003 = "lass";
	goto labelFunc07E6_006E;
labelFunc07E6_0068:
	var0003 = "lad";
labelFunc07E6_006E:
	message("\"Here ye be, ");
	message(var0003);
	message("...\" ~\"I never thought we'd make it, but Moonshade lies over yon.\"");
	say();
	message("\"I'll not even attempt to make the Arabella seaworthy until these blasted storms are over!\"");
	say();
	message("\"If ye be wantin' Captain Hawk, I'll be at the bottom of a mug at the Blue Boar Inn.\"");
	say();
	UI_remove_npc_face0();
	UI_set_weather(0x0000);
	UI_clear_item_flag(0xFE9C, 0x0011);
	UI_clear_item_flag(0xFFD8, 0x0010);
	UI_set_item_flag(0xFFDB, 0x0024);
	UI_set_item_flag(0xFFE7, 0x001D);
	var0004 = [0xFFD8, 0xFFD6, 0xFFDB, 0xFFD5];
	var0005 = [0x08AC, 0x0718];
	var0006 = [0x07BA, 0x08D3];
	var0007 = [0x08C8, 0x0716];
	UI_set_new_schedules(0xFFD8, [0x0000, 0x0003, 0x0004], [0x000E, 0x0007, 0x001A], [var0005, var0006, var0007]);
	var0008 = [0x0935, 0x06E3];
	var0009 = [0x08B9, 0x070B];
	var000A = [0x08CB, 0x074A];
	var000B = [0x087E, 0x0747];
	var000C = [0x0942, 0x077E];
	UI_set_new_schedules(0xFFD6, [0x0000, 0x0003, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x0007, 0x0007, 0x0007], [var0008, var0009, var000A, var000B, var000C]);
	var000D = [0x08BD, 0x0713];
	var000E = [0x0893, 0x0718];
	UI_set_new_schedules(0xFFDB, [0x0002, 0x0003, 0x0007], [0x000C, 0x0009, 0x000A], [var000D, var000D, var000E]);
	var000F = [0x08B9, 0x0710];
	var0010 = [0x0895, 0x0719];
	UI_set_new_schedules(0xFFD5, [0x0002, 0x0003, 0x0007], [0x001A, 0x0007, 0x000E], [var000F, var000F, var0010]);
	enum();
labelFunc07E6_0214:
	for (var0013 in var0004 with var0011 to var0012) attend labelFunc07E6_0229;
	UI_run_schedule(var0013);
	goto labelFunc07E6_0214;
labelFunc07E6_0229:
	gflags[0x01CB] = false;
	gflags[0x01CC] = true;
	Func097F(0xFFD8, "@Never again!@", 0x023E);
	return;
}


