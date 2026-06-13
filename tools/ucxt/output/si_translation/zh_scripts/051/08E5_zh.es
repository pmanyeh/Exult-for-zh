#game "serpentisle"
void Func08E5 0x8E5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_cont_items(0xFFFF, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc08E5_0014:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc08E5_0154;
	if (!UI_set_last_created(var0003)) goto labelFunc08E5_0151;
	var0004 = UI_update_last_created([0x0337, 0x0A25, 0x0005]);
	if (!(!var0004)) goto labelFunc08E5_0056;
	var0004 = UI_update_last_created([0x0335, 0x0A25, 0x0005]);
labelFunc08E5_0056:
	if (!(!var0004)) goto labelFunc08E5_0070;
	var0004 = UI_update_last_created([0x0333, 0x0A25, 0x0005]);
labelFunc08E5_0070:
	if (!(!var0004)) goto labelFunc08E5_008A;
	var0004 = UI_update_last_created([0x0331, 0x0A25, 0x0005]);
labelFunc08E5_008A:
	if (!(!var0004)) goto labelFunc08E5_00A4;
	var0004 = UI_update_last_created([0x0337, 0x0A27, 0x0005]);
labelFunc08E5_00A4:
	if (!(!var0004)) goto labelFunc08E5_00BE;
	var0004 = UI_update_last_created([0x0335, 0x0A27, 0x0005]);
labelFunc08E5_00BE:
	if (!(!var0004)) goto labelFunc08E5_00D8;
	var0004 = UI_update_last_created([0x0333, 0x0A27, 0x0005]);
labelFunc08E5_00D8:
	if (!(!var0004)) goto labelFunc08E5_00F2;
	var0004 = UI_update_last_created([0x0331, 0x0A27, 0x0005]);
labelFunc08E5_00F2:
	if (!(!var0004)) goto labelFunc08E5_010C;
	var0004 = UI_update_last_created([0x0336, 0x0A29, 0x0005]);
labelFunc08E5_010C:
	if (!(!var0004)) goto labelFunc08E5_0126;
	var0004 = UI_update_last_created([0x0333, 0x0A29, 0x0005]);
labelFunc08E5_0126:
	if (!(!var0004)) goto labelFunc08E5_0140;
	var0004 = UI_update_last_created([0x032B, 0x0A27, 0x0000]);
labelFunc08E5_0140:
	if (!(!var0004)) goto labelFunc08E5_0151;
	var0004 = UI_give_last_created(0xFE9C);
labelFunc08E5_0151:
	goto labelFunc08E5_0014;
labelFunc08E5_0154:
	return;
}


