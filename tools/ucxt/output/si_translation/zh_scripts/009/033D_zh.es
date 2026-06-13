#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func089C 0x89C (var var0000, var var0001);

void Func033D shape#(0x33D) ()
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

	if (!(event == 0x0002)) goto labelFunc033D_0679;
	if (!((!gflags[0x0007]) && ((!gflags[0x0008]) && ((!gflags[0x0009]) && (!gflags[0x000A]))))) goto labelFunc033D_0032;
	Func090D(item, 0x0000, 0x0000, 0xFFFF, 0x033D, item, 0x000A);
labelFunc033D_0032:
	if (!gflags[0x0007]) goto labelFunc033D_00AF;
	var0000 = Func0953();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0001 = (("@" + var0000) + ", I am afraid.@");
	UI_item_say(0xFFE4, var0001);
	var0002 = UI_direction_from(0xFE9C, 0xFFE4);
	var0003 = UI_direction_from(0xFFE4, 0xFE9C);
	UI_halt_scheduled(0xFE9C);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Don't worry,@", (byte)0x27, 0x000E, (byte)0x55, 0x033D], 0x000E);
	gflags[0x0007] = false;
	gflags[0x0008] = true;
	return;
labelFunc033D_00AF:
	if (!gflags[0x0008]) goto labelFunc033D_00E3;
	UI_halt_scheduled(0xFE9C);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Everything should@", (byte)0x27, 0x000C, (byte)0x55, 0x033D]);
	gflags[0x0008] = false;
	gflags[0x0009] = true;
	return;
labelFunc033D_00E3:
	if (!gflags[0x0009]) goto labelFunc033D_01D0;
	UI_halt_scheduled(0xFE9C);
	UI_halt_scheduled(0xFFE4);
	UI_set_polymorph(0xFFE4, 0x014E);
	UI_set_schedule_type(0xFFE4, 0x000F);
	UI_set_item_flag(0xFE9C, 0x0023);
	var0005 = UI_get_object_position(0xFFE4);
	var0006 = UI_get_object_position(0xFE9C);
	var0002 = UI_direction_from(0xFE9C, 0xFFE4);
	var0003 = UI_direction_from(0xFFE4, 0xFE9C);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@...be fine...@"]);
	var0004 = UI_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x55, 0x033D]);
	var0007 = UI_get_object_position(0xFFE4);
	UI_sprite_effect(0x002B, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0001, 0xFFFF);
	UI_play_sound_effect(0x0074);
	UI_lightning();
	UI_play_music(0x0035, 0x0000);
	var0008 = Func09A0(0x0001, 0x0001);
	var0004 = UI_set_item_quality(var0008, 0x0001);
	gflags[0x0009] = false;
	gflags[0x000A] = true;
	return;
labelFunc033D_01D0:
	if (!gflags[0x000A]) goto labelFunc033D_0679;
	UI_halt_scheduled(0xFE9C);
	UI_halt_scheduled(0xFFE4);
	var0008 = Func09A0(0x0001, 0x0001);
	var0009 = UI_get_item_quality(var0008);
	var000A = UI_is_pc_female();
	var000B = UI_get_skin_colour();
	if (!(var0009 == 0x0001)) goto labelFunc033D_022C;
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x033D], 0x000C);
	goto labelFunc033D_029A;
labelFunc033D_022C:
	var0007 = UI_get_object_position(item);
	var000C = UI_die_roll(0x0001, 0x0002);
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc033D_0270;
	UI_sprite_effect(0x002B, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, var000C, 0xFFFF);
	goto labelFunc033D_028F;
labelFunc033D_0270:
	UI_sprite_effect(0x002B, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, var000C, 0xFFFD);
labelFunc033D_028F:
	UI_lightning();
	UI_play_sound_effect(0x0074);
labelFunc033D_029A:
	if (!(var0009 == 0x0002)) goto labelFunc033D_02E8;
	if (!(var000B == 0x0002)) goto labelFunc033D_02C1;
	UI_set_polymorph(0xFE9C, Func089C(0x0001, 0x0000));
	goto labelFunc033D_02D1;
labelFunc033D_02C1:
	UI_set_polymorph(0xFE9C, Func089C(0x0002, 0x0000));
labelFunc033D_02D1:
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0005);
labelFunc033D_02E8:
	if (!(var0009 == 0x0003)) goto labelFunc033D_0313;
	UI_set_polymorph(0xFFE4, 0x0292);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x033D], 0x0004);
labelFunc033D_0313:
	if (!(var0009 == 0x0004)) goto labelFunc033D_0344;
	UI_set_polymorph(0xFE9C, Func089C(var000B, var000A));
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0004);
labelFunc033D_0344:
	if (!(var0009 == 0x0005)) goto labelFunc033D_0375;
	UI_set_polymorph(0xFFE4, Func089C(var000B, var000A));
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0004);
labelFunc033D_0375:
	if (!(var0009 == 0x0006)) goto labelFunc033D_03C3;
	if (!(var000B == 0x0002)) goto labelFunc033D_039C;
	UI_set_polymorph(0xFFE4, Func089C(0x0000, 0x0001));
	goto labelFunc033D_03AC;
labelFunc033D_039C:
	UI_set_polymorph(0xFFE4, Func089C(0x0002, 0x0001));
labelFunc033D_03AC:
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0004);
labelFunc033D_03C3:
	if (!(var0009 == 0x0007)) goto labelFunc033D_0474;
	if (!(var000B == 0x0001)) goto labelFunc033D_03EA;
	UI_set_polymorph(0xFFE4, Func089C(0x0000, 0x0001));
	goto labelFunc033D_03FA;
labelFunc033D_03EA:
	UI_set_polymorph(0xFFE4, Func089C(0x0001, 0x0001));
labelFunc033D_03FA:
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x033D], 0x0003);
	var0007 = UI_get_object_position(0xFE9C);
	var000C = UI_die_roll(0x0000, 0x0003);
	UI_sprite_effect(0x002B, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, var000C, 0x0001);
	if (!(var000B == 0x0001)) goto labelFunc033D_0464;
	UI_set_polymorph(0xFE9C, Func089C(0x0000, 0x0000));
	goto labelFunc033D_0474;
labelFunc033D_0464:
	UI_set_polymorph(0xFE9C, Func089C(0x0001, 0x0000));
labelFunc033D_0474:
	if (!(var0009 == 0x0008)) goto labelFunc033D_04A5;
	UI_set_polymorph(0xFE9C, Func089C(var000B, var000A));
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0002);
labelFunc033D_04A5:
	if (!(var0009 == 0x0009)) goto labelFunc033D_04D0;
	UI_set_polymorph(0xFFE4, 0x014E);
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0002);
labelFunc033D_04D0:
	if (!(var0009 == 0x000A)) goto labelFunc033D_0541;
	UI_set_polymorph(0xFFE4, Func089C(var000B, 0x0001));
	var0004 = UI_delayed_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D], 0x0002);
	UI_set_polymorph(0xFE9C, 0x02EB);
	var0007 = UI_get_object_position(0xFE9C);
	var000C = UI_die_roll(0x0000, 0x0003);
	UI_sprite_effect(0x002B, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, var000C, 0x0001);
labelFunc033D_0541:
	if (!(var0009 == 0x000B)) goto labelFunc033D_056C;
	UI_set_polymorph(0xFFE4, 0x0292);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x033D], 0x0001);
labelFunc033D_056C:
	if (!(var0009 == 0x000C)) goto labelFunc033D_0597;
	UI_set_polymorph(0xFE9C, 0x014E);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x033D], 0x0001);
labelFunc033D_0597:
	if (!(var0009 == 0x000D)) goto labelFunc033D_05C5;
	UI_set_polymorph(0xFE9C, Func089C(var000B, var000A));
	var0004 = UI_execute_usecode_array(0xFFE4, [(byte)0x23, (byte)0x55, 0x033D]);
labelFunc033D_05C5:
	if (!(var0009 == 0x000E)) goto labelFunc033D_05ED;
	UI_set_polymorph(0xFFE4, 0x02D1);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x033D]);
labelFunc033D_05ED:
	if (!(var0009 == 0x000F)) goto labelFunc033D_0668;
	var0004 = UI_delayed_execute_usecode_array(var0008, [(byte)0x55, 0x070A], 0x03E8);
	UI_set_polymorph(0xFE9C, 0x0292);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_item_flag(0xFFE4, 0x001D);
	gflags[0x000A] = false;
	if (!(!var000A)) goto labelFunc033D_065D;
	gflags[0x0228] = true;
	var0004 = UI_set_npc_prop(0xFFE4, 0x000A, 0x0000);
	var0004 = UI_set_npc_prop(0xFE9C, 0x000A, 0x0001);
labelFunc033D_065D:
	UI_play_music(0x0040, 0x0000);
	return;
labelFunc033D_0668:
	var0004 = UI_set_item_quality(var0008, (var0009 + 0x0001));
labelFunc033D_0679:
	if (!(event == 0x000A)) goto labelFunc033D_06C8;
	var000D = UI_direction_from(0xFE9C, 0xFFE4);
	var000E = UI_direction_from(0xFFE4, 0xFE9C);
	gflags[0x0007] = true;
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var000D, (byte)0x55, 0x033D]);
	var0004 = UI_execute_usecode_array(0xFFE4, [(byte)0x59, var000E]);
labelFunc033D_06C8:
	return;
}


