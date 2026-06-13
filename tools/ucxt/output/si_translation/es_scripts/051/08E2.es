#game "serpentisle"
// externs
extern var Func08E0 0x8E0 (var var0000);
extern var Func08E1 0x8E1 (var var0000);
extern void Func08DC 0x8DC (var var0000);
extern void Func08DD 0x8DD (var var0000, var var0001, var var0002);
extern void Func08DF 0x8DF (var var0000, var var0001);
extern void Func08DE 0x8DE (var var0000, var var0001);

var Func08E2 0x8E2 (var var0000)
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	var0001 = Func08E0(var0000);
	if (!((var0001 != 0x00CA) && (var0001 != 0x00CC))) goto labelFunc08E2_003F;
	var0002 = UI_set_item_quality(var0000, 0x0015);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x0313], 0x0005);
	return true;
labelFunc08E2_003F:
	var0003 = Func08E1(var0000);
	if (!var0003) goto labelFunc08E2_049F;
	var0004 = UI_get_object_position(var0003);
	var0005 = 0x0000;
	var0006 = 0x0000;
	var0007 = UI_find_nearby(var0003, 0xFE99, 0x0001, 0x0000);
	if (!var0007) goto labelFunc08E2_0398;
	enum();
labelFunc08E2_007E:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc08E2_0398;
	var000B = false;
	var000C = UI_get_item_shape(var000A);
	if (!(var000C == 0x0179)) goto labelFunc08E2_0194;
	var000D = UI_get_item_frame(var000A);
	if (!((var000D != 0x000C) && (var000D != 0x0014))) goto labelFunc08E2_00D9;
	var0006 = 0x07F2;
	var0005 = 0x0029;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_00D9;
	Func08DC(var000A);
labelFunc08E2_00D9:
	if (!(var000D == 0x000C)) goto labelFunc08E2_0172;
	var0006 = 0x07F3;
	var0005 = 0x002A;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_0172;
	var000E = UI_find_nearest(var000A, 0x01EF, 0x0014);
	if (!var000E) goto labelFunc08E2_0116;
	var000B = true;
	goto labelFunc08E2_0126;
labelFunc08E2_0116:
	var000E = UI_find_nearest(var000A, 0x021E, 0x0014);
labelFunc08E2_0126:
	if (!var000E) goto labelFunc08E2_016B;
	var000F = UI_create_new_object(0x0179);
	if (!var000F) goto labelFunc08E2_0167;
	UI_set_item_frame(var000F, 0x000C);
	UI_set_item_flag(var000F, 0x0012);
	var0010 = UI_get_object_position(var000E);
	var0002 = UI_update_last_created(var0010);
	goto labelFunc08E2_016B;
labelFunc08E2_0167:
	var000B = false;
labelFunc08E2_016B:
	UI_remove_item(var000A);
labelFunc08E2_0172:
	if (!(var000D == 0x0014)) goto labelFunc08E2_0194;
	var0006 = 0x07F4;
	var0005 = 0x002B;
	Func08DD(var000A, 0x0369, 0x0000);
labelFunc08E2_0194:
	if (!(var000C == 0x0274)) goto labelFunc08E2_01BA;
	var0006 = 0x07F2;
	var0005 = 0x0029;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_01BA;
	Func08DC(var000A);
labelFunc08E2_01BA:
	if (!(var000C == 0x02CD)) goto labelFunc08E2_01E3;
	var0006 = 0x07F3;
	var0005 = 0x002A;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_01E3;
	Func08DF(var000A, 0x0108);
labelFunc08E2_01E3:
	if (!(var000C == 0x021E)) goto labelFunc08E2_020C;
	var0006 = 0x07F3;
	var0005 = 0x002A;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_020C;
	Func08DF(var000A, 0x01EF);
labelFunc08E2_020C:
	if (!(var000C == 0x023C)) goto labelFunc08E2_0232;
	var0006 = 0x07F2;
	var0005 = 0x0029;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_0232;
	Func08DC(var000A);
labelFunc08E2_0232:
	if (!(var000C == 0x0272)) goto labelFunc08E2_025B;
	var0006 = 0x07F3;
	var0005 = 0x002A;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_025B;
	Func08DF(var000A, 0x00CB);
labelFunc08E2_025B:
	if (!(var000C == 0x0369)) goto labelFunc08E2_027D;
	var0006 = 0x07F4;
	var0005 = 0x002B;
	Func08DD(var000A, 0x0179, 0x0014);
labelFunc08E2_027D:
	if (!((var000C == 0x0108) || ((var000C == 0x01EF) || (var000C == 0x00CB)))) goto labelFunc08E2_02B3;
	var0006 = 0x07F2;
	var0005 = 0x0029;
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_02B3;
	Func08DC(var000A);
labelFunc08E2_02B3:
	if (!(var000C == 0x0346)) goto labelFunc08E2_0353;
	if (!(var0001 == 0x00CC)) goto labelFunc08E2_0353;
	var000D = UI_get_item_frame(var000A);
	if (!(var000D == 0x0001)) goto labelFunc08E2_0353;
	var0006 = 0x07F4;
	var0005 = 0x002B;
	var0010 = UI_get_object_position(var000A);
	UI_sprite_effect(0x0009, (var0010[0x0001] - 0x0006), (var0010[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var000A);
	UI_move_object(0xFFF0, var0010);
	UI_set_schedule_type(0xFFF0, 0x0003);
	UI_set_new_schedules(0xFFF0, 0x0000, 0x000C, [var0010[0x0001], var0010[0x0002]]);
	gflags[0x00E6] = true;
labelFunc08E2_0353:
	if (!var000B) goto labelFunc08E2_0362;
	Func08DE(var000E, var000F);
labelFunc08E2_0362:
	if (!((var0001 == 0x00CC) && ((var0006 != 0x0000) && (var0005 != 0x002B)))) goto labelFunc08E2_0395;
	var0005 = 0x002B;
	Func08DD(var000A, 0x0179, UI_die_roll(0x0000, 0x0014));
labelFunc08E2_0395:
	goto labelFunc08E2_007E;
labelFunc08E2_0398:
	if (!(var0006 == 0x0000)) goto labelFunc08E2_0428;
	var0006 = 0x07F1;
	var0005 = 0x0028;
	var0010 = var0004;
	var0010[0x0003] = (var0010[0x0003] + 0x0001);
	UI_sprite_effect(0x0015, (var0010[0x0001] - 0x0006), (var0010[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0011 = [0x0108, 0x0179, 0x0274, 0x023C];
	var000A = UI_create_new_object(var0011[UI_get_random(0x0004)]);
	if (!var000A) goto labelFunc08E2_0428;
	UI_set_item_flag(var000A, 0x0012);
	var0002 = UI_update_last_created(var0010);
labelFunc08E2_0428:
	if (!(var0001 == 0x00CA)) goto labelFunc08E2_0449;
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, var0006], 0x000A);
labelFunc08E2_0449:
	UI_sprite_effect(var0005, (var0004[0x0001] - 0x0006), (var0004[0x0002] - 0x0006), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0074);
	UI_lightning();
	var0002 = UI_set_item_quality(var0000, 0x0015);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x0313], 0x0005);
	return true;
labelFunc08E2_049F:
	return false;
	return 0;
}


