#game "serpentisle"
void Func08F2 0x8F2 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;

	var0000[0x0002] = (var0000[0x0002] - 0x0003);
	var0001 = [0xFF2D, 0xFF2C, 0xFF2B, 0xFF31, 0xFF2F, 0xFF2A, 0xFF30, 0xFF2E];
	var0002 = 0x0000;
labelFunc08F2_0034:
	if (!(var0002 < 0x0007)) goto labelFunc08F2_00CA;
	if (!(var0002 > 0x0003)) goto labelFunc08F2_007C;
	var0003 = (var0002 - 0x0003);
	UI_move_object(var0001[var0002], [(var0000[0x0001] - var0003), (var0000[0x0002] + var0003), var0000[0x0003]]);
	goto labelFunc08F2_00A3;
labelFunc08F2_007C:
	UI_move_object(var0001[var0002], [(var0000[0x0001] + var0002), (var0000[0x0002] + var0002), var0000[0x0003]]);
labelFunc08F2_00A3:
	UI_set_schedule_type(var0001[var0002], 0x000F);
	UI_set_npc_id(var0001[var0002], var0002);
	var0002 = (var0002 + 0x0001);
	goto labelFunc08F2_0034;
labelFunc08F2_00CA:
	return;
}


