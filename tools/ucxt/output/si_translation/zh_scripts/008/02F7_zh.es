#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0922 0x922 (var var0000);
extern void Func00D7 shape#(0xD7) ();

void Func02F7 shape#(0x2F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func09A0(0x0002, 0x0001);
	var0001 = UI_get_item_quality(var0000);
	if (!(event == 0x0001)) goto labelFunc02F7_00C7;
	UI_play_sound_effect(0x001E);
	if (!(!UI_find_nearby(item, 0x03C1, 0x0028, 0x00B0))) goto labelFunc02F7_0038;
	abort;
labelFunc02F7_0038:
	if (!gflags[0x013D]) goto labelFunc02F7_00C7;
	var0001 = UI_set_item_quality(var0000, 0x0000);
	var0001 = 0x0000;
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"I Re-Ten Bentas Juxark I!\"");
	say();
	message("\"Praetimde Mir-Wis Re-Por I.\"");
	say();
	UI_remove_npc_face0();
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc02F7_00B0;
	if (!(var0001 == 0x0000)) goto labelFunc02F7_00AD;
	gflags[0x013D] = false;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0002 = UI_set_item_quality(var0000, 0x0001);
	var0002 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x02F7]);
labelFunc02F7_00AD:
	goto labelFunc02F7_00C7;
labelFunc02F7_00B0:
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x02F7], 0x000A);
labelFunc02F7_00C7:
	if (!(event == 0x000E)) goto labelFunc02F7_00E2;
	UI_move_object(0xFE9C, [0x08A8, 0x0501, 0x0001]);
labelFunc02F7_00E2:
	if (!(event == 0x0002)) goto labelFunc02F7_0334;
	if (!(var0001 == 0x0000)) goto labelFunc02F7_00FA;
	Func0922(0x0003);
labelFunc02F7_00FA:
	if (!(var0001 == 0x0001)) goto labelFunc02F7_017C;
	UI_si_path_run_usecode(0xFE9C, [0x08A8, 0x0501, 0x0001], 0x000D, var0000, 0x02F7, false);
	UI_set_path_failure(0x02F7, item, 0x000E);
	var0003 = [0x08C4, 0x04FE, 0x0000];
	UI_sprite_effect(0x002E, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_set_item_quality(var0000, 0x0002);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x02F7], 0x0015);
labelFunc02F7_017C:
	if (!(var0001 == 0x0002)) goto labelFunc02F7_0289;
	var0002 = UI_create_new_object(0x00D7);
	if (!var0002) goto labelFunc02F7_01B3;
	UI_clear_item_flag(var0002, 0x0012);
	var0002 = UI_update_last_created([0x08B8, 0x04F9, 0x0001]);
labelFunc02F7_01B3:
	var0002 = UI_create_new_object(0x00DB);
	if (!var0002) goto labelFunc02F7_01E0;
	UI_clear_item_flag(var0002, 0x0012);
	var0002 = UI_update_last_created([0x08BC, 0x04FF, 0x0000]);
labelFunc02F7_01E0:
	var0002 = UI_create_new_object(0x00DD);
	if (!var0002) goto labelFunc02F7_020D;
	UI_clear_item_flag(var0002, 0x0012);
	var0002 = UI_update_last_created([0x08C4, 0x04FF, 0x0000]);
labelFunc02F7_020D:
	var0002 = UI_create_new_object(0x00FC);
	if (!var0002) goto labelFunc02F7_023A;
	UI_clear_item_flag(var0002, 0x0012);
	var0002 = UI_update_last_created([0x08BC, 0x04F7, 0x0000]);
labelFunc02F7_023A:
	var0002 = UI_create_new_object(0x01CB);
	if (!var0002) goto labelFunc02F7_0267;
	UI_clear_item_flag(var0002, 0x0012);
	var0002 = UI_update_last_created([0x08C4, 0x04F7, 0x0000]);
labelFunc02F7_0267:
	var0002 = UI_set_item_quality(var0000, 0x0003);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x02F7], 0x0000);
labelFunc02F7_0289:
	if (!(var0001 == 0x0003)) goto labelFunc02F7_0334;
	var0004 = UI_find_nearby(0xFE9C, 0x03C1, 0x0050, 0x00B0);
	if (!UI_on_barge()) goto labelFunc02F7_02DE;
	UI_play_music(0x000C, var0000);
	var0002 = UI_set_item_quality(var0000, 0x0000);
	UI_halt_scheduled(var0000);
	var0005 = UI_get_barge(0xFE9C);
	var0005->Func00D7();
	goto labelFunc02F7_0334;
labelFunc02F7_02DE:
	if (!var0004) goto labelFunc02F7_0334;
	var0006 = UI_get_object_position(var0004);
	if (!(var0006[0x0001] > 0x08B4)) goto labelFunc02F7_0312;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x36], 0x0003);
	goto labelFunc02F7_031C;
labelFunc02F7_0312:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc02F7_031C:
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x02F7, 0x0000], 0x0003);
labelFunc02F7_0334:
	return;
}


