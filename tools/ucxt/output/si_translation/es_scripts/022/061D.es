#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func061D object#(0x61D) ()
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

	if (!(event == 0x0002)) goto labelFunc061D_01C1;
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"Quickly! Surround Batlin!\"");
	say();
	UI_remove_npc_face0();
	var0000 = UI_find_nearby(0xFE9C, 0x013E, 0x0014, 0x0000);
	if (!var0000) goto labelFunc061D_003F;
	Func097F(var0000, "@Stay back!@", 0x000A);
labelFunc061D_003F:
	var0001 = UI_find_nearby(0xFE9C, 0x025F, 0x0028, 0x0010);
	var0002 = 0x0000;
	enum();
labelFunc061D_0059:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc061D_01A5;
	var0006 = UI_get_item_frame(var0005);
	if (!(var0006 == 0x0014)) goto labelFunc061D_00B7;
	var0007 = UI_get_distance(0xFE9C, var0005);
	UI_si_path_run_usecode(0xFE9C, UI_get_object_position(var0005), 0x000A, var0005, 0x061D, true);
	var0008 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, (byte)0x32], (var0007 + 0x0002));
labelFunc061D_00B7:
	if (!(var0006 == 0x0015)) goto labelFunc061D_0100;
	var0007 = UI_get_distance(0xFFFD, var0005);
	UI_si_path_run_usecode(0xFFFD, UI_get_object_position(var0005), 0x000A, var0005, 0x061D, true);
	var0008 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x59, (byte)0x30], (var0007 + 0x0002));
labelFunc061D_0100:
	if (!(var0006 == 0x0016)) goto labelFunc061D_0149;
	var0007 = UI_get_distance(0xFFFE, var0005);
	UI_si_path_run_usecode(0xFFFE, UI_get_object_position(var0005), 0x000A, var0005, 0x061D, true);
	var0008 = UI_delayed_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x59, (byte)0x30], (var0007 + 0x0002));
labelFunc061D_0149:
	if (!(var0006 == 0x0017)) goto labelFunc061D_0192;
	var0007 = UI_get_distance(0xFFFF, var0005);
	UI_si_path_run_usecode(0xFFFF, UI_get_object_position(var0005), 0x000A, var0005, 0x061D, true);
	var0008 = UI_delayed_execute_usecode_array(0xFFFF, [(byte)0x23, (byte)0x59, (byte)0x36], (var0007 + 0x0002));
labelFunc061D_0192:
	if (!(var0007 > var0002)) goto labelFunc061D_01A2;
	var0002 = var0007;
labelFunc061D_01A2:
	goto labelFunc061D_0059;
labelFunc061D_01A5:
	var0008 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x073B], (var0002 + 0x0019));
	abort;
labelFunc061D_01C1:
	if (!((event == 0x000A) || (event == 0x000E))) goto labelFunc061D_0244;
	var0009 = UI_get_object_position(item);
	UI_play_sound_effect(0x0082);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x0011, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = ["@I'm frozen!@", "@I can't move!@", "@What's wrong?@"];
	UI_item_say(item, var000A[UI_die_roll(0x0001, 0x0003)]);
labelFunc061D_0244:
	return;
}


