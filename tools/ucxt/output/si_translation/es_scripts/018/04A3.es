#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AA 0x9AA ();
extern void Func09AD 0x9AD (var var0000);

void Func04A3 object#(0x4A3) ()
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
	var var0015;
	var var0016;
	var var0017;
	var var0018;

	if (!(event == 0x0003)) goto labelFunc04A3_0026;
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x55, 0x04A3]);
	Func097F(0xFF5D, "@Die, mortal!@", 0x0002);
labelFunc04A3_0026:
	if (!(event == 0x0002)) goto labelFunc04A3_07F3;
	if (!(UI_get_item_shape(item) == 0x0331)) goto labelFunc04A3_0448;
	var0001 = UI_die_roll(0x0001, 0x0003);
	if (!((var0001 == 0x0001) && (gflags[0x023A] == false))) goto labelFunc04A3_006F;
	Func097F(0xFE9C, "@Free me, Avatar!@", 0x0005);
	Func097F(0xFF58, "@Listen to thy sword!@", 0x000F);
labelFunc04A3_006F:
	if (!((var0001 == 0x0002) && (gflags[0x023A] == false))) goto labelFunc04A3_0097;
	Func097F(0xFE9C, "@Release me, Avatar!@", 0x0005);
	Func097F(0xFF58, "@Do what thy sword says!@", 0x000C);
labelFunc04A3_0097:
	if (!((var0001 == 0x0003) && (gflags[0x023A] == false))) goto labelFunc04A3_00BF;
	Func097F(0xFE9C, "@Liberate me, Avatar!@", 0x0005);
	Func097F(0xFF58, "@Do it! Do it! Do it!@", 0x0009);
labelFunc04A3_00BF:
	var0001 = UI_find_nearby(0xFF5D, 0x0113, 0x0000, 0x0010);
	if (!var0001) goto labelFunc04A3_00FE;
	var0002 = UI_die_roll(0x0002, 0x0008);
	var0000 = UI_delayed_execute_usecode_array(var0001, [(byte)0x55, 0x04A3], (0x0019 + var0002));
labelFunc04A3_00FE:
	var0002 = UI_die_roll(0x0001, 0x0004);
	var0003 = UI_direction_from(0xFF5D, 0xFE9C);
	if (!(var0002 == 0x0001)) goto labelFunc04A3_023B;
	var0004 = UI_get_object_position(0xFF5D);
	UI_sprite_effect(0x000D, (var0004[0x0001] - 0x0001), (var0004[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0074);
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, var0003, (byte)0x52, "@Kal Ort Grav!@", (byte)0x01, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	UI_earthquake(0x000A);
	var0005 = UI_get_party_list();
	enum();
labelFunc04A3_0199:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc04A3_023B;
	var0009 = [];
	var000A = UI_die_roll(0x0001, 0x0003);
	if (!(var000A == 0x0001)) goto labelFunc04A3_01DE;
	var0009 = [(byte)0x6E, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61];
labelFunc04A3_01DE:
	if (!(var000A == 0x0002)) goto labelFunc04A3_0208;
	var0009 = [(byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61];
labelFunc04A3_0208:
	if (!(var000A == 0x0003)) goto labelFunc04A3_022B;
	var0009 = [(byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0004, (byte)0x61];
labelFunc04A3_022B:
	var0000 = UI_execute_usecode_array(var0008, var0009);
	goto labelFunc04A3_0199;
labelFunc04A3_023B:
	if (!(var0002 == 0x0002)) goto labelFunc04A3_02BA;
	var0004 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0011, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_lightning();
	UI_play_sound_effect(0x0074);
	var0000 = UI_apply_damage(UI_get_npc_prop(0xFE9C, 0x0000), 0x0004, 0x0003, 0xFE9C);
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, var0003, (byte)0x52, "@Kal Grav!@", (byte)0x6F, (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0002, (byte)0x61]);
labelFunc04A3_02BA:
	if (!(var0002 == 0x0003)) goto labelFunc04A3_03CD;
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var000A == 0x0001)) goto labelFunc04A3_02E1;
	var000B = 0x0001;
labelFunc04A3_02E1:
	if (!(var000A == 0x0002)) goto labelFunc04A3_02F1;
	var000B = 0x0004;
labelFunc04A3_02F1:
	if (!(var000A == 0x0003)) goto labelFunc04A3_0301;
	var000B = 0x0005;
labelFunc04A3_0301:
	if (!(var000A == 0x0004)) goto labelFunc04A3_0311;
	var000B = 0x001E;
labelFunc04A3_0311:
	if (!(var000A == 0x0005)) goto labelFunc04A3_0321;
	var000B = 0x001B;
labelFunc04A3_0321:
	if (!(var000A == 0x0006)) goto labelFunc04A3_0331;
	var000B = 0x001F;
labelFunc04A3_0331:
	var0004 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(var000B, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0005 = UI_get_party_list();
	enum();
labelFunc04A3_0369:
	for (var0008 in var0005 with var000C to var000D) attend labelFunc04A3_0391;
	var0000 = UI_apply_damage(UI_get_npc_prop(var0008, 0x0000), 0x0004, 0x0003, var0008);
	goto labelFunc04A3_0369;
labelFunc04A3_0391:
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, var0003, (byte)0x52, "@Vas Flam!@", (byte)0x64, (byte)0x27, 0x0002, (byte)0x65, (byte)0x27, 0x0002, (byte)0x66, (byte)0x27, 0x0002, (byte)0x67, (byte)0x27, 0x0002, (byte)0x64, (byte)0x27, 0x0002, (byte)0x61]);
labelFunc04A3_03CD:
	if (!(var0002 == 0x0004)) goto labelFunc04A3_0447;
	var000A = UI_die_roll(0x0001, 0x0003);
	if (!(var000A == 0x0001)) goto labelFunc04A3_0405;
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, var0003, (byte)0x52, "@I will kill thee!@"]);
labelFunc04A3_0405:
	if (!(var000A == 0x0002)) goto labelFunc04A3_0426;
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, var0003, (byte)0x52, "@Thou art no match for my power.@"]);
labelFunc04A3_0426:
	if (!(var000A == 0x0003)) goto labelFunc04A3_0447;
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x59, var0003, (byte)0x52, "@Kneel before me, worm.@"]);
labelFunc04A3_0447:
	abort;
labelFunc04A3_0448:
	if (!(UI_get_item_shape(item) == 0x0341)) goto labelFunc04A3_04E9;
	var0004 = UI_get_object_position(0xFF5D);
	var000E = UI_get_object_position(item);
	if (!(var000E[0x0001] < var0004[0x0001])) goto labelFunc04A3_048B;
	var000E[0x0001] = 0x09C7;
	var000E[0x0002] = 0x06D7;
	goto labelFunc04A3_04C3;
labelFunc04A3_048B:
	var000E[0x0001] = 0x09BD;
	var000E[0x0002] = 0x06DC;
	UI_sprite_effect(0x001E, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc04A3_04C3:
	UI_sprite_effect(0x0001, var000E[0x0001], var000E[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc04A3_04E9:
	if (!(UI_get_item_shape(item) == 0x0349)) goto labelFunc04A3_0564;
	var0004 = UI_get_object_position(0xFF5D);
	var000E = UI_get_object_position(item);
	if (!(var000E[0x0002] < var0004[0x0002])) goto labelFunc04A3_052C;
	var000E[0x0001] = 0x09C4;
	var000E[0x0002] = 0x06E4;
	goto labelFunc04A3_053E;
labelFunc04A3_052C:
	var000E[0x0001] = 0x09B8;
	var000E[0x0002] = 0x06E0;
labelFunc04A3_053E:
	UI_sprite_effect(0x0001, var000E[0x0001], var000E[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc04A3_0564:
	if (!(UI_get_item_shape(item) == 0x031F)) goto labelFunc04A3_0645;
	Func09AA();
	var000F = UI_find_nearby(0xFF5D, 0x031F, 0x001E, 0x0000);
	var000F = (var000F & UI_find_nearby(0xFF5D, 0x0339, 0x001E, 0x0000));
	var000F = (var000F & UI_find_nearby(0xFF5D, 0x00E0, 0x001E, 0x0000));
	enum();
labelFunc04A3_05B5:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc04A3_05E0;
	var0004 = UI_get_object_position(var0012);
	var0004[0x0003] = 0x0000;
	UI_move_object(var0012, var0004);
	goto labelFunc04A3_05B5;
labelFunc04A3_05E0:
	var0013 = UI_find_nearby(0xFF5D, 0x00A3, 0x001E, 0x0000);
	enum();
labelFunc04A3_05F4:
	for (var0016 in var0013 with var0014 to var0015) attend labelFunc04A3_0637;
	var0002 = UI_die_roll(0x0001, 0x0003);
	var0000 = UI_execute_usecode_array(var0016, [(byte)0x27, var0002, (byte)0x50, (byte)0x27, var0002, (byte)0x0B, 0xFFFD, 0x0004, (byte)0x27, var0002, (byte)0x2D]);
	goto labelFunc04A3_05F4;
labelFunc04A3_0637:
	UI_remove_npc(0xFF5D);
	var0005 = UI_get_party_list();
labelFunc04A3_0645:
	if (!(UI_get_item_shape(item) == 0x01FB)) goto labelFunc04A3_0715;
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x52, "@Perhaps I've a use for thee after all...@", (byte)0x01, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0004, (byte)0x70, (byte)0x27, 0x0003, (byte)0x61]);
	var0004 = UI_get_object_position(item);
	UI_sprite_effect(0x000D, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_remove_item(item);
	var0017 = UI_create_new_object2(0x017D, var0004);
	UI_set_polymorph(var0017, 0x01CC);
	UI_set_item_flag(var0017, 0x001D);
	Func09AD(var0017);
	var0003 = UI_find_direction(var0017, 0xFE9C);
	var0000 = UI_execute_usecode_array(var0017, [(byte)0x59, var0003, (byte)0x27, 0x0004, (byte)0x65, (byte)0x27, 0x0003, (byte)0x66, (byte)0x27, 0x0003, (byte)0x67, (byte)0x27, 0x0004, (byte)0x55, 0x04A3]);
	abort;
labelFunc04A3_0715:
	if (!(UI_get_item_shape(item) == 0x017D)) goto labelFunc04A3_076F;
	var0018 = UI_find_nearest(0xFF5D, 0x0124, 0x0005);
	if (!var0018) goto labelFunc04A3_076E;
	var0000 = UI_execute_usecode_array(0xFF5D, [(byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D]);
	var0000 = UI_execute_usecode_array(var0018, [(byte)0x52, "@And now, I fear I must be going.@", (byte)0x27, 0x0007, (byte)0x55, 0x04A3]);
labelFunc04A3_076E:
	abort;
labelFunc04A3_076F:
	if (!(UI_get_item_shape(item) == 0x0124)) goto labelFunc04A3_07F3;
	var0017 = UI_find_nearby(0xFF5D, 0x017D, 0x0014, 0x0008);
	if (!var0017) goto labelFunc04A3_07B0;
	UI_set_schedule_type(var0017, 0x0000);
	var0000 = UI_execute_usecode_array(var0017, [(byte)0x52, "@Die, mortal!@"]);
labelFunc04A3_07B0:
	var0004 = UI_get_object_position(0xFF5D);
	UI_remove_npc(0xFF5D);
	UI_sprite_effect(0x0007, (var0004[0x0001] - 0x0002), (var0004[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	Func09AA();
	abort;
labelFunc04A3_07F3:
	return;
}


