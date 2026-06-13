#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern var Func093E 0x93E ();
extern var Func0822 0x822 (var var0000);
extern void Func0821 0x821 (var var0000);
extern var Func0826 0x826 (var var0000);
extern void Func0824 0x824 (var var0000);

void Func0311 shape#(0x311) ()
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

	if (!(event == 0x0001)) goto labelFunc0311_0295;
	if (!gflags[0x0004]) goto labelFunc0311_001B;
	Func08FE(["@How odd!@", "@It work before.@"]);
	return;
labelFunc0311_001B:
	if (!(gflags[0x0057] || (!Func093E()))) goto labelFunc0311_0295;
	var0000 = UI_click_on_item();
	var0001 = Func0822(var0000);
	var0002 = UI_find_direction(0xFE9C, var0001);
	if (!((var0002 == 0x0000) || (var0002 == 0x0004))) goto labelFunc0311_0064;
	var0003 = 0x0001;
	var0004 = 0x030B;
	goto labelFunc0311_0070;
labelFunc0311_0064:
	var0003 = 0x0002;
	var0004 = 0x009D;
labelFunc0311_0070:
	var0001[var0003] = (var0001[var0003] + 0x0002);
	if (!(!UI_is_not_blocked(var0001, var0004, 0x0000))) goto labelFunc0311_00DA;
	var0005 = [0x0001, 0x0002, 0x0003];
	enum();
labelFunc0311_00A1:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0311_00D2;
	var0001[0x0003] = (var0001[0x0003] + 0x0001);
	if (!UI_is_not_blocked(var0001, var0004, 0x0000)) goto labelFunc0311_00CF;
	goto labelFunc0311_00DA;
labelFunc0311_00CF:
	goto labelFunc0311_00A1;
labelFunc0311_00D2:
	UI_flash_mouse(0x0000);
	return;
labelFunc0311_00DA:
	UI_close_gumps();
	var0009 = UI_create_new_object(var0004);
	if (!var0009) goto labelFunc0311_0295;
	UI_close_gumps();
	var000A = UI_update_last_created(var0001);
	var0001[var0003] = (var0001[var0003] - 0x0002);
	UI_play_music(0x0033, 0x0000);
	UI_set_item_flag(var0009, 0x0012);
	var000A = UI_set_item_quality(var0009, var0002);
	var000A = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0000, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x000A, (byte)0x46, 0x0004, (byte)0x4E, (byte)0x0C, 0xFFFF, 0x0005, 0x0005, (byte)0x0B, 0xFFF9, 0x0005, (byte)0x46, 0x0004, (byte)0x50, (byte)0x0B, 0xFFFF, 0x0003, (byte)0x2D]);
	var000B = (0x0005 - UI_get_distance(0xFE9C, var0009));
	var000C = [(byte)0x59, ((byte)0x30 + var0002)];
	if (!(var000B > 0x0000)) goto labelFunc0311_01AC;
	var000C = (var000C & [(byte)0x27, var000B]);
labelFunc0311_01AC:
	var000A = UI_execute_usecode_array(0xFE9C, var000C);
	var000D = UI_get_object_position(0xFE9C);
	if (!(var0003 == 0x0001)) goto labelFunc0311_01D6;
	var0003 = 0x0002;
	goto labelFunc0311_01DC;
labelFunc0311_01D6:
	var0003 = 0x0001;
labelFunc0311_01DC:
	if (!(var0001[var0003] < var000D[var0003])) goto labelFunc0311_01F5;
	var000E = 0x0001;
	goto labelFunc0311_01FB;
labelFunc0311_01F5:
	var000E = 0xFFFF;
labelFunc0311_01FB:
	var0001[var0003] = (var0001[var0003] + var000E);
	var000A = UI_path_run_usecode(var0001, 0x0311, var0009, 0x0007);
	if (!var000A) goto labelFunc0311_028F;
	UI_set_path_failure(0x0311, var0009, 0x0008);
	var000F = UI_get_container(item);
	var0010 = UI_get_party_list();
labelFunc0311_0240:
	if (!(0x0001 > 0x0000)) goto labelFunc0311_028C;
	if (!var000F) goto labelFunc0311_026D;
	if (!(var000F in var0010)) goto labelFunc0311_0260;
	goto labelFunc0311_028C;
	goto labelFunc0311_026A;
labelFunc0311_0260:
	var000F = UI_get_container(var000F);
labelFunc0311_026A:
	goto labelFunc0311_0289;
labelFunc0311_026D:
	UI_remove_item(item);
	var000A = UI_add_party_items(0x0001, 0x0311, 0x0000, 0x0000, false);
	goto labelFunc0311_028C;
labelFunc0311_0289:
	goto labelFunc0311_0240;
labelFunc0311_028C:
	goto labelFunc0311_0295;
labelFunc0311_028F:
	Func0821(var0009);
labelFunc0311_0295:
	if (!(event == 0x0008)) goto labelFunc0311_02B4;
	if (!Func0826(item)) goto labelFunc0311_02B4;
	Func0821(item);
	Func08FE(["@No, Avatar.@", "@Let thyself enter.@"]);
labelFunc0311_02B4:
	if (!(event == 0x0007)) goto labelFunc0311_02CB;
	if (!Func0826(item)) goto labelFunc0311_02CB;
	Func0821(item);
	Func0824(item);
labelFunc0311_02CB:
	return;
}


