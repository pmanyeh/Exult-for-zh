#game "serpentisle"
// externs
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);

void Func08AE 0x8AE ()
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

	var0000 = 0xFFFF;
	var0001 = 0xFFFF;
	var0002 = 0xFFFD;
	var0003 = (UI_get_object_position(0xFF57) & (0xFE99 & 0x0006));
	var0004 = UI_find_nearby(var0003, 0x0113, 0x0028, 0x0010);
	enum();
labelFunc08AE_0038:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc08AE_008A;
	if (!(UI_get_item_quality(var0007) == 0x0064)) goto labelFunc08AE_0087;
	var0008 = UI_get_object_position(var0007);
	Func090E(0xFF57, var0007, var0000, var0001, var0002, 0x04A9, UI_get_npc_object(0xFF57), 0x000A, true);
	UI_set_path_failure(0x04A9, item, 0x000A);
	return;
labelFunc08AE_0087:
	goto labelFunc08AE_0038;
labelFunc08AE_008A:
	enum();
labelFunc08AE_008B:
	for (var0007 in var0004 with var0009 to var000A) attend labelFunc08AE_00DD;
	if (!(UI_get_item_quality(var0007) == 0x0000)) goto labelFunc08AE_00DA;
	var0008 = UI_get_object_position(var0007);
	Func090E(0xFF57, var0007, var0000, var0001, var0002, 0x04A9, UI_get_npc_object(0xFF57), 0x000A, true);
	UI_set_path_failure(0x04A9, item, 0x000A);
	return;
labelFunc08AE_00DA:
	goto labelFunc08AE_008B;
labelFunc08AE_00DD:
	return;
}


