#game "serpentisle"
// externs
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern var Func08B6 0x8B6 ();

void Func08F5 0x8F5 (var var0000)
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
	var var000C;
	var var000D;

	UI_show_npc_face0(var0000, 0x0000);
	message("\"Enough, arrogant fool! Thou canst not kill a Xenkan Monk!\"");
	say();
	message("\"Stand thou in awe of my true power... Let there be PEACE!\"");
	say();
	UI_remove_npc_face0();
	var0001 = UI_get_object_position(var0000);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	UI_sprite_effect(0x001A, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = [0xFF2D, 0xFF2C, 0xFF2B, 0xFF31, 0xFF2F, 0xFF2A, 0xFF30, 0xFF2E];
	enum();
labelFunc08F5_00CA:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc08F5_0135;
	UI_halt_scheduled(var0005);
	var0006 = UI_get_npc_object(var0005);
	UI_set_schedule_type(var0006, 0x000A);
	UI_set_alignment(var0006, 0x0000);
	UI_set_oppressor(var0006, 0x0000);
	var0007 = Func095C(var0006, 0x0000);
	var0008 = Func095C(var0006, 0x0003);
	var0009 = (var0007 - var0008);
	Func095E(var0006, 0x0003, var0009);
	goto labelFunc08F5_00CA;
labelFunc08F5_0135:
	var000A = Func08B6();
	var000A = [0xFE9C, var000A];
	enum();
labelFunc08F5_0148:
	for (var0005 in var000A with var000B to var000C) attend labelFunc08F5_01B0;
	UI_halt_scheduled(var0005);
	var000D = UI_execute_usecode_array(var0005, [(byte)0x23, (byte)0x61]);
	UI_set_schedule_type(var0005, 0x001F);
	UI_set_oppressor(var0005, 0x0000);
	var0007 = Func095C(var0005, 0x0000);
	var0008 = Func095C(var0005, 0x0003);
	var0009 = (var0007 - var0008);
	Func095E(var0005, 0x0003, var0009);
	goto labelFunc08F5_0148;
labelFunc08F5_01B0:
	return;
}


