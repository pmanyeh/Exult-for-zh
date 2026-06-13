#game "serpentisle"
void Func06D4 object#(0x6D4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = (UI_find_nearby_avatar(0x010F) & UI_find_nearby_avatar(0x0110));
	enum();
labelFunc06D4_0013:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc06D4_00A4;
	var0004 = UI_get_object_position(var0003);
	UI_sprite_effect(0x0015, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!(var0004[0x0003] < 0x0001)) goto labelFunc06D4_007C;
	var0005 = UI_execute_usecode_array(var0003, [0x0607, (byte)0x0B, 0xFFFF, 0x0006, (byte)0x27, 0x0014, 0x0609, (byte)0x0B, 0xFFFF, 0x0006]);
labelFunc06D4_007C:
	if (!(var0004[0x0003] > 0x0005)) goto labelFunc06D4_00A1;
	var0005 = UI_execute_usecode_array(var0003, [0x0609, (byte)0x0B, 0xFFFF, 0x0006]);
labelFunc06D4_00A1:
	goto labelFunc06D4_0013;
labelFunc06D4_00A4:
	return;
}


