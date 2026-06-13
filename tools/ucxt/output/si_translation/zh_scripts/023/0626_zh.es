#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0989 0x989 (var var0000, var var0001);
extern var Func097E 0x97E (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08A1 0x8A1 ();
extern void Func02C0 shape#(0x2C0) ();

void Func0626 object#(0x626) ()
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
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	if (!((event == 0x0002) && gflags[0x000A])) goto labelFunc0626_00A1;
	UI_set_item_flag(0xFE9C, 0x0010);
	gflags[0x000A] = false;
	gflags[0x0009] = true;
	UI_play_sound_effect(0x0027);
	var0000 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0028, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0005, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0626], 0x000F);
	Func097F(0xFE9C, "@Ooouch!@", 0x0004);
	abort;
labelFunc0626_00A1:
	if (!((event == 0x0002) && gflags[0x0009])) goto labelFunc0626_012C;
	gflags[0x0009] = false;
	gflags[0x0008] = true;
	UI_play_sound_effect(0x0029);
	var0000 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0029, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001E, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0626], 0x000A);
	abort;
labelFunc0626_012C:
	if (!((event == 0x0002) && gflags[0x0008])) goto labelFunc0626_01C3;
	gflags[0x0008] = false;
	gflags[0x0007] = true;
	UI_play_sound_effect(0x002A);
	var0000 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x002B, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001B, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0626], 0x0012);
	Func097F(0xFE9C, "@Aaargh!@", 0x0004);
	abort;
labelFunc0626_01C3:
	if (!((event == 0x0002) && gflags[0x0007])) goto labelFunc0626_02C9;
	gflags[0x0007] = false;
	UI_set_polymorph(0xFE9C, 0x00EF);
	UI_play_sound_effect(0x0074);
	var0000 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x002B, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001E, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001B, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001C, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0004, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0626], 0x001E);
	abort;
labelFunc0626_02C9:
	if (!(event == 0x0002)) goto labelFunc0626_02EE;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_run_endgame(true);
	abort;
labelFunc0626_02EE:
	var0002 = UI_get_item_shape(item);
	if (!(var0002 == 0x0206)) goto labelFunc0626_03FB;
	UI_call_guards();
	var0003 = Func0988(item, UI_find_nearby(item, 0x0206, 0x0006, 0x0000));
	var0004 = [];
	enum();
labelFunc0626_0320:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0626_033D;
	var0004 = (var0004 & UI_get_distance(var0007, item));
	goto labelFunc0626_0320;
labelFunc0626_033D:
	var0003 = Func0989(var0003, var0004);
	var0008 = UI_get_object_position(item);
	var0009 = 0x0001;
	enum();
labelFunc0626_0358:
	for (var0007 in var0003 with var000A to var000B) attend labelFunc0626_03ED;
	var000C = UI_get_object_position(var0007);
	var000D = 0x0001;
labelFunc0626_0373:
	if (!(var000D <= var0009)) goto labelFunc0626_03EA;
	var000E = (((var000D - 0x0001) * 0x0003) + 0x0001);
	if (!((Func097E((var000C[0x0001] - var0008[var000E])) <= 0x0002) && (Func097E((var000C[0x0002] - var0008[(var000E + 0x0001)])) <= 0x0002))) goto labelFunc0626_03DD;
	UI_remove_item(var0007);
	var0008 = (var0008 & var000C);
	var0009 = (var0009 + 0x0001);
	goto labelFunc0626_03EA;
labelFunc0626_03DD:
	var000D = (var000D + 0x0001);
	goto labelFunc0626_0373;
labelFunc0626_03EA:
	goto labelFunc0626_0358;
labelFunc0626_03ED:
	UI_play_sound_effect2(0x005F, item);
	UI_remove_item(item);
	return;
labelFunc0626_03FB:
	if (!((var0002 == 0x0350) || (var0002 == 0x010C))) goto labelFunc0626_0434;
	if (!(!(UI_get_item_frame(item) == 0x0002))) goto labelFunc0626_0433;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x005F, (byte)0x01, (byte)0x46, 0x0002]);
labelFunc0626_0433:
	return;
labelFunc0626_0434:
	if (!(var0002 == 0x02E7)) goto labelFunc0626_050A;
	var000F = UI_get_weapon(0xFE9C);
	if (!(var000F != 0x02C6)) goto labelFunc0626_0453;
	abort;
labelFunc0626_0453:
	var0010 = UI_get_object_position(item);
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc0626_050A;
	var0011 = UI_create_new_object(0x0371);
	if (!var0011) goto labelFunc0626_050A;
	UI_play_sound_effect(0x002A);
	var0001 = UI_update_last_created(var0010);
	if (!var0001) goto labelFunc0626_050A;
	var0001 = UI_delayed_execute_usecode_array(var0011, [(byte)0x23, (byte)0x46, 0x0001, (byte)0x27, 0x0002, (byte)0x46, 0x0002, (byte)0x27, 0x0002, (byte)0x46, 0x0003, (byte)0x27, 0x0002, (byte)0x46, 0x0004, (byte)0x27, 0x0002, (byte)0x46, 0x0005, (byte)0x27, 0x0002, (byte)0x46, 0x0006, (byte)0x27, 0x0002, (byte)0x46, 0x0007], 0x0003);
	var0012 = Func09A0(0x0000, 0x0003);
	var0001 = UI_delayed_execute_usecode_array(var0012, [(byte)0x23, (byte)0x55, 0x0626], 0x0019);
	gflags[0x000A] = true;
labelFunc0626_050A:
	if (!(var0002 == 0x0220)) goto labelFunc0626_0517;
	Func08A1();
labelFunc0626_0517:
	if (!(UI_get_item_shape(item) == 0x01DF)) goto labelFunc0626_0571;
	var0013 = UI_get_item_frame(item);
	if (!(var0013 == 0x0003)) goto labelFunc0626_0570;
	UI_set_item_frame(item, 0x0004);
	var0001 = UI_create_new_object(0x022F);
	if (!var0001) goto labelFunc0626_0570;
	UI_set_item_frame(var0001, 0x0001);
	var0014 = UI_set_item_quality(var0001, 0x0001);
	var0014 = UI_update_last_created(UI_get_object_position(item));
labelFunc0626_0570:
	abort;
labelFunc0626_0571:
	if (!((var0002 == 0x020A) && (UI_get_item_quality(item) == 0x00FF))) goto labelFunc0626_058A;
	item->Func02C0();
	abort;
labelFunc0626_058A:
	UI_remove_item(item);
	return;
}


