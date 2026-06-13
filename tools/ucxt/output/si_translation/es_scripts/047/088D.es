#game "serpentisle"
void Func088D 0x88D (var var0000, var var0001)
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
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	var0002 = [];
	var0003 = UI_find_nearby(0xFE9C, var0001, 0x000F, 0x0000);
	enum();
labelFunc088D_001A:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc088D_0098;
	var0007 = 0x0000;
	var0008 = 0x270F;
	enum();
labelFunc088D_0032:
	for (var000B in var0003 with var0009 to var000A) attend labelFunc088D_007F;
	var0007 = (var0007 + 0x0001);
	if (!((var000B != 0x0000) && (var000B != var0000))) goto labelFunc088D_007C;
	var000C = UI_get_distance(var0000, var000B);
	if (!(var000C < var0008)) goto labelFunc088D_007C;
	var0008 = var000C;
	var000D = var0007;
labelFunc088D_007C:
	goto labelFunc088D_0032;
labelFunc088D_007F:
	var0002 = (var0002 & var0003[var000D]);
	var0003[var000D] = 0x0000;
	goto labelFunc088D_001A;
labelFunc088D_0098:
	UI_sit_down(0xFE9C, var0000);
	var000E = UI_get_array_size(var0002);
	var000F = UI_get_party_list();
	var0007 = 0x0002;
	enum();
labelFunc088D_00BA:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc088D_0109;
	if (!((var0007 - 0x0001) > var000E)) goto labelFunc088D_00D6;
	goto labelFunc088D_0109;
labelFunc088D_00D6:
	if (!(!(UI_get_schedule_type(var0012) == 0x0010))) goto labelFunc088D_00FC;
	var0013 = (var0007 - 0x0001);
	UI_sit_down(var0012, var0002[var0013]);
labelFunc088D_00FC:
	var0007 = (var0007 + 0x0001);
	goto labelFunc088D_00BA;
labelFunc088D_0109:
	return;
}


