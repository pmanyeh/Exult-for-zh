#game "serpentisle"
// externs
extern void Func08E6 0x8E6 ();

void Func060B object#(0x60B) ()
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
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = false;
	var0008 = false;
	var0009 = false;
	var000A = false;
	var000B = false;
	var000C = false;
	var000D = false;
	var000E = false;
	var000F = UI_get_item_frame(item);
	var0010 = UI_get_item_quality(item);
	var0011 = UI_find_nearby(item, 0x0313, 0x000A, 0x00B0);
	if (!(var0010 == 0x0001)) goto labelFunc060B_0155;
	enum();
labelFunc060B_0068:
	for (var0014 in var0011 with var0012 to var0013) attend labelFunc060B_00DE;
	var0015 = UI_get_item_quality(var0014);
	var0016 = UI_get_item_frame(var0014);
	if (!(var0015 == 0x00DD)) goto labelFunc060B_00A3;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_00A3;
	var0000 = true;
labelFunc060B_00A3:
	if (!(var0015 == 0x00DE)) goto labelFunc060B_00BF;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_00BF;
	var0001 = true;
labelFunc060B_00BF:
	if (!(var0015 == 0x00DF)) goto labelFunc060B_00DB;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_00DB;
	var0002 = true;
labelFunc060B_00DB:
	goto labelFunc060B_0068;
labelFunc060B_00DE:
	if (!(var0000 && (var0001 && var0002))) goto labelFunc060B_0152;
	var0017 = UI_find_nearby(item, 0x010E, 0x000F, 0x00B0);
	enum();
labelFunc060B_00FE:
	for (var001A in var0017 with var0018 to var0019) attend labelFunc060B_014F;
	if (!(UI_get_item_quality(var001A) == 0x00F1)) goto labelFunc060B_014C;
	var001B = UI_get_object_position(var001A);
	UI_remove_item(var001A);
	var001C = UI_create_new_object(0x0178);
	if (!var001C) goto labelFunc060B_014C;
	var001D = UI_update_last_created(var001B);
	UI_set_item_frame(var001C, 0x000C);
labelFunc060B_014C:
	goto labelFunc060B_00FE;
labelFunc060B_014F:
	goto labelFunc060B_0155;
labelFunc060B_0152:
	Func08E6();
labelFunc060B_0155:
	if (!(var0010 == 0x0002)) goto labelFunc060B_028D;
	enum();
labelFunc060B_0160:
	for (var0014 in var0011 with var001E to var001F) attend labelFunc060B_020E;
	var0015 = UI_get_item_quality(var0014);
	var0016 = UI_get_item_frame(var0014);
	if (!(var0015 == 0x00E0)) goto labelFunc060B_019B;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_019B;
	var0003 = true;
labelFunc060B_019B:
	if (!(var0015 == 0x00E1)) goto labelFunc060B_01B7;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_01B7;
	var0004 = true;
labelFunc060B_01B7:
	if (!(var0015 == 0x00E2)) goto labelFunc060B_01D3;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_01D3;
	var0005 = true;
labelFunc060B_01D3:
	if (!(var0015 == 0x00E3)) goto labelFunc060B_01EF;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_01EF;
	var0006 = true;
labelFunc060B_01EF:
	if (!(var0015 == 0x00E4)) goto labelFunc060B_020B;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_020B;
	var0007 = true;
labelFunc060B_020B:
	goto labelFunc060B_0160;
labelFunc060B_020E:
	if (!(var0003 && (var0004 && (var0005 && (var0006 && var0007))))) goto labelFunc060B_028A;
	var0017 = UI_find_nearby(item, 0x010E, 0x000F, 0x00B0);
	enum();
labelFunc060B_0236:
	for (var001A in var0017 with var0020 to var0021) attend labelFunc060B_0287;
	if (!(UI_get_item_quality(var001A) == 0x00F1)) goto labelFunc060B_0284;
	var001B = UI_get_object_position(var001A);
	UI_remove_item(var001A);
	var001C = UI_create_new_object(0x0178);
	if (!var001C) goto labelFunc060B_0284;
	var001D = UI_update_last_created(var001B);
	UI_set_item_frame(var001C, 0x000C);
labelFunc060B_0284:
	goto labelFunc060B_0236;
labelFunc060B_0287:
	goto labelFunc060B_028D;
labelFunc060B_028A:
	Func08E6();
labelFunc060B_028D:
	if (!(var0010 == 0x0003)) goto labelFunc060B_0405;
	enum();
labelFunc060B_0298:
	for (var0014 in var0011 with var0022 to var0023) attend labelFunc060B_037E;
	var0015 = UI_get_item_quality(var0014);
	var0016 = UI_get_item_frame(var0014);
	if (!(var0015 == 0x00E5)) goto labelFunc060B_02D3;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_02D3;
	var0008 = true;
labelFunc060B_02D3:
	if (!(var0015 == 0x00E6)) goto labelFunc060B_02EF;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_02EF;
	var0009 = true;
labelFunc060B_02EF:
	if (!(var0015 == 0x00E7)) goto labelFunc060B_030B;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_030B;
	var000A = true;
labelFunc060B_030B:
	if (!(var0015 == 0x00E8)) goto labelFunc060B_0327;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_0327;
	var000B = true;
labelFunc060B_0327:
	if (!(var0015 == 0x00E9)) goto labelFunc060B_0343;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_0343;
	var000C = true;
labelFunc060B_0343:
	if (!(var0015 == 0x00EA)) goto labelFunc060B_035F;
	if (!((var0016 % 0x0002) == 0x0000)) goto labelFunc060B_035F;
	var000D = true;
labelFunc060B_035F:
	if (!(var0015 == 0x00EB)) goto labelFunc060B_037B;
	if (!((var0016 % 0x0002) == 0x0001)) goto labelFunc060B_037B;
	var000E = true;
labelFunc060B_037B:
	goto labelFunc060B_0298;
labelFunc060B_037E:
	if (!(var0008 && (var0009 && (var000A && (var000B && (var000C && (var000D && var000E))))))) goto labelFunc060B_0402;
	var0017 = UI_find_nearby(item, 0x010E, 0x000F, 0x00B0);
	enum();
labelFunc060B_03AE:
	for (var001A in var0017 with var0024 to var0025) attend labelFunc060B_03FF;
	if (!(UI_get_item_quality(var001A) == 0x00F1)) goto labelFunc060B_03FC;
	var001B = UI_get_object_position(var001A);
	UI_remove_item(var001A);
	var001C = UI_create_new_object(0x0178);
	if (!var001C) goto labelFunc060B_03FC;
	var001D = UI_update_last_created(var001B);
	UI_set_item_frame(var001C, 0x000C);
labelFunc060B_03FC:
	goto labelFunc060B_03AE;
labelFunc060B_03FF:
	goto labelFunc060B_0405;
labelFunc060B_0402:
	Func08E6();
labelFunc060B_0405:
	return;
}


