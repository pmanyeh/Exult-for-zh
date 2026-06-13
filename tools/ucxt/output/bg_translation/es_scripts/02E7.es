#game "blackgate"
// externs
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0827 0x827 (var var0000, var var0001);
extern var Func0937 0x937 (var var0000);

void Func02E7 shape#(0x2E7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc02E7_0044;
	UI_close_gumps();
	var0000 = [0x0000, 0xFFFF, 0x0001];
	var0001 = [0x0001, 0x0001, 0x0001];
	var0002 = 0xFFFF;
	Func0828(item, var0000, var0001, var0002, 0x02E7, item, 0x0007);
labelFunc02E7_0044:
	if (!(event == 0x0007)) goto labelFunc02E7_0203;
	var0003 = Func0827(0xFE9C, item);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0003, (byte)0x01, (byte)0x6C, (byte)0x61]);
	var0005 = UI_get_npc_prop(0xFE9C, 0x0000);
	if (!((var0005 >= 0x0000) && (var0005 < 0x0004))) goto labelFunc02E7_0093;
	var0005 = 0x0000;
labelFunc02E7_0093:
	if (!((var0005 >= 0x0004) && (var0005 < 0x0008))) goto labelFunc02E7_00AB;
	var0005 = 0x0001;
labelFunc02E7_00AB:
	if (!((var0005 >= 0x0008) && (var0005 < 0x000C))) goto labelFunc02E7_00C3;
	var0005 = 0x0002;
labelFunc02E7_00C3:
	if (!((var0005 >= 0x000C) && (var0005 < 0x000F))) goto labelFunc02E7_00DB;
	var0005 = 0x0003;
labelFunc02E7_00DB:
	if (!((var0005 >= 0x000F) && (var0005 < 0x0012))) goto labelFunc02E7_00F3;
	var0005 = 0x0004;
labelFunc02E7_00F3:
	if (!((var0005 >= 0x0012) && (var0005 < 0x0017))) goto labelFunc02E7_010B;
	var0005 = 0x0005;
labelFunc02E7_010B:
	if (!((var0005 >= 0x0017) && (var0005 < 0x001B))) goto labelFunc02E7_0123;
	var0005 = 0x0006;
labelFunc02E7_0123:
	if (!((var0005 >= 0x001B) && (var0005 < 0x001E))) goto labelFunc02E7_013B;
	var0005 = 0x0007;
labelFunc02E7_013B:
	if (!(var0005 >= 0x001E)) goto labelFunc02E7_014B;
	var0005 = 0x0008;
labelFunc02E7_014B:
	if (!(var0005 > 0x0003)) goto labelFunc02E7_0166;
	var0005 = (var0005 - UI_die_roll(0x0000, 0x0002));
labelFunc02E7_0166:
	if (!(var0005 == 0x0007)) goto labelFunc02E7_0176;
	var0005 = 0x0006;
labelFunc02E7_0176:
	if (!(var0005 > 0x0007)) goto labelFunc02E7_01D5;
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0018], (var0005 + 0x0001));
	if (!(UI_npc_nearby(0xFFD4) && Func0937(0xFFD4))) goto labelFunc02E7_01D5;
	var0004 = UI_delayed_execute_usecode_array(0xFFD4, [(byte)0x23, (byte)0x52, "@Avatar wins a Dragon!@"], 0x000F);
	var0004 = UI_add_party_items(0x0001, 0x02E6, 0xFE99, 0x0000, false);
labelFunc02E7_01D5:
	var0004 = UI_execute_usecode_array(item, [(byte)0x46, 0x0000, (byte)0x58, 0x0004, (byte)0x4D, (byte)0x0B, 0xFFFF, var0005, (byte)0x4F, (byte)0x0B, 0xFFFF, var0005, (byte)0x46, 0x0000]);
labelFunc02E7_0203:
	return;
}


