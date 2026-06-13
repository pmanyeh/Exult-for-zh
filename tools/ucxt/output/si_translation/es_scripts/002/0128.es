#game "serpentisle"
// externs
extern var Func099E 0x99E (var var0000);
extern var Func0942 0x942 (var var0000);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func095D 0x95D (var var0000);

void Func0128 shape#(0x128) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc0128_007E;
	if (!((event == 0x0005) || (event == 0x0006))) goto labelFunc0128_005A;
	var0001 = UI_get_container(item);
labelFunc0128_0028:
	if (!((var0001 != 0x0000) && (!UI_is_npc(var0001)))) goto labelFunc0128_0048;
	var0001 = UI_get_container(var0001);
	goto labelFunc0128_0028;
labelFunc0128_0048:
	if (!(var0001 == 0x0000)) goto labelFunc0128_005A;
	UI_flash_mouse(0x0000);
	return;
labelFunc0128_005A:
	if (!(event == 0x0005)) goto labelFunc0128_006C;
	UI_set_item_flag(var0001, 0x0000);
labelFunc0128_006C:
	if (!(event == 0x0006)) goto labelFunc0128_007E;
	UI_clear_item_flag(var0001, 0x0000);
labelFunc0128_007E:
	if (!(var0000 == 0x0001)) goto labelFunc0128_015A;
	if (!(event == 0x0005)) goto labelFunc0128_00CA;
	var0001 = UI_get_container(item);
	if (!(var0001 && UI_is_npc(var0001))) goto labelFunc0128_00C3;
	UI_halt_scheduled(item);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0128], 0x0064);
	goto labelFunc0128_00CA;
labelFunc0128_00C3:
	UI_flash_mouse(0x0000);
labelFunc0128_00CA:
	if (!(event == 0x0006)) goto labelFunc0128_00D7;
	UI_halt_scheduled(item);
labelFunc0128_00D7:
	if (!(event == 0x0002)) goto labelFunc0128_015A;
	UI_halt_scheduled(item);
	var0001 = UI_get_container(item);
	if (!(var0001 && UI_is_npc(var0001))) goto labelFunc0128_015A;
	var0003 = UI_get_npc_prop(var0001, 0x0000);
	var0004 = UI_get_npc_prop(var0001, 0x0003);
	if (!(var0004 < var0003)) goto labelFunc0128_0145;
	var0002 = UI_set_npc_prop(var0001, 0x0003, 0x0001);
	if (!(UI_die_roll(0x0001, 0x0064) == 0x0001)) goto labelFunc0128_0145;
	UI_remove_item(item);
	return;
labelFunc0128_0145:
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0128], 0x0064);
labelFunc0128_015A:
	if (!(var0000 == 0x0002)) goto labelFunc0128_0228;
	if (!((event == 0x0005) || ((event == 0x0006) || (event == 0x0002)))) goto labelFunc0128_017F;
	var0001 = Func099E(item);
labelFunc0128_017F:
	if (!(event == 0x0006)) goto labelFunc0128_01A8;
	var0005 = Func0942(0xFFD4);
	if (!var0005) goto labelFunc0128_01A8;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0128]);
labelFunc0128_01A8:
	if (!(event == 0x0002)) goto labelFunc0128_0228;
	var0005 = Func0942(0xFFD4);
	if (!var0005) goto labelFunc0128_0228;
	UI_item_say(0xFFD4, "Do not touch my ring!");
	var0006 = UI_get_npc_object(0xFFD4);
	var0007 = UI_find_direction(0xFFD4, item);
	var0002 = UI_execute_usecode_array(var0006, [(byte)0x23, (byte)0x59, var0007, (byte)0x6A]);
	if (!var0001) goto labelFunc0128_0216;
	var0002 = Func0996(var0001, 0xFFD4, 0x0001, 0x0128, 0xFE99, 0x0002, false);
	goto labelFunc0128_0228;
labelFunc0128_0216:
	var0002 = UI_set_last_created(item);
	var0002 = UI_give_last_created(0xFFD4);
labelFunc0128_0228:
	if (!(var0000 == 0x0003)) goto labelFunc0128_024B;
	if (!(event == 0x0005)) goto labelFunc0128_024B;
	if (!(!gflags[0x0315])) goto labelFunc0128_024B;
	Func095D(0x03E8);
	gflags[0x0315] = true;
labelFunc0128_024B:
	return;
}


