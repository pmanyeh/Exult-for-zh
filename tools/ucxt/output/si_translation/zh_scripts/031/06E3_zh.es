#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09B8 0x9B8 ();
extern void Func09AD 0x9AD (var var0000);

void Func06E3 object#(0x6E3) ()
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

	if (!gflags[0x00D5]) goto labelFunc06E3_0007;
	abort;
labelFunc06E3_0007:
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E3_013C;
	var0002 = UI_get_item_quality(item);
	if (!(var0002 == 0x0000)) goto labelFunc06E3_00B0;
	UI_sprite_effect(0x0015, 0x071E, 0x05A6, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFEFA, [0x071E, 0x05A6, 0x0000]);
	UI_set_schedule_type(0xFEFA, 0x000F);
	var0003 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x61, (byte)0x59, (byte)0x32]);
	var0003 = UI_delayed_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x55, 0x06E3], 0x000A);
	UI_remove_item(item);
	abort;
labelFunc06E3_00B0:
	if (!(var0002 == 0x0001)) goto labelFunc06E3_013C;
	UI_set_item_flag(0xFE9C, 0x0010);
	Func097F(0xFE9C, "@What...?@", 0x0005);
	Func097F(0xFE9C, "@NO!@", 0x0028);
	var0004 = UI_find_nearby(item, 0x010C, 0x000F, 0x0000);
	var0004 = (var0004 & UI_find_nearby(item, 0x0350, 0x000F, 0x0000));
	enum();
labelFunc06E3_0103:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc06E3_011B;
	UI_set_item_frame(var0007, 0x0004);
	goto labelFunc06E3_0103;
labelFunc06E3_011B:
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06E3], 0x0014);
	gflags[0x0007] = true;
	UI_remove_item(item);
	abort;
labelFunc06E3_013C:
	if (!(event == 0x0002)) goto labelFunc06E3_038F;
	if (!((gflags[0x0007] == false) && (gflags[0x0008] == false))) goto labelFunc06E3_0168;
	UI_show_npc_face0(0xFEE0, 0x0000);
	message("\"Come and see the freak show, Avatar!\"");
	say();
	UI_remove_npc_face0();
	Func09B8();
	abort;
labelFunc06E3_0168:
	if (!(gflags[0x0007] == true)) goto labelFunc06E3_01D6;
	var0004 = UI_find_nearby(item, 0x010C, 0x000F, 0x0000);
	var0004 = (var0004 & UI_find_nearby(item, 0x0350, 0x000F, 0x0000));
	enum();
labelFunc06E3_0197:
	for (var0007 in var0004 with var0008 to var0009) attend labelFunc06E3_01AF;
	UI_set_item_frame(var0007, 0x0005);
	goto labelFunc06E3_0197;
labelFunc06E3_01AF:
	UI_play_sound_effect(0x005F);
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06E3], 0x0014);
	gflags[0x0007] = false;
	gflags[0x0008] = true;
	abort;
labelFunc06E3_01D6:
	if (!(gflags[0x0008] == true)) goto labelFunc06E3_038F;
	var0004 = UI_find_nearby(item, 0x010C, 0x000F, 0x0000);
	enum();
labelFunc06E3_01F0:
	for (var0007 in var0004 with var000A to var000B) attend labelFunc06E3_02AC;
	var000C = UI_get_object_position(var0007);
	var000C[0x0001] = (var000C[0x0001] - (var000C[0x0003] / 0x0002));
	var000C[0x0002] = (var000C[0x0002] - (var000C[0x0003] / 0x0002));
	UI_sprite_effect(0x0009, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000C = UI_get_object_position(var0007);
	var000D = UI_create_new_object2(0x014E, var000C);
	if (!var000D) goto labelFunc06E3_02A9;
	var0003 = UI_set_npc_prop(var000D, 0x0002, 0x0014);
	UI_set_polymorph(var000D, 0x02D1);
	var0003 = UI_execute_usecode_array(var000D, [(byte)0x23, (byte)0x59, (byte)0x32]);
	Func09AD(var000D);
	UI_remove_item(var0007);
labelFunc06E3_02A9:
	goto labelFunc06E3_01F0;
labelFunc06E3_02AC:
	var0004 = UI_find_nearby(item, 0x0350, 0x000F, 0x0000);
	enum();
labelFunc06E3_02BE:
	for (var0007 in var0004 with var000E to var000F) attend labelFunc06E3_037A;
	var000C = UI_get_object_position(var0007);
	var000C[0x0001] = (var000C[0x0001] - (var000C[0x0003] / 0x0002));
	var000C[0x0002] = (var000C[0x0002] - (var000C[0x0003] / 0x0002));
	UI_sprite_effect(0x0009, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000C = UI_get_object_position(var0007);
	var000D = UI_create_new_object2(0x014E, var000C);
	if (!var000D) goto labelFunc06E3_0377;
	var0003 = UI_set_npc_prop(var000D, 0x0002, 0x0014);
	UI_set_polymorph(var000D, 0x02D1);
	var0003 = UI_execute_usecode_array(var000D, [(byte)0x23, (byte)0x59, (byte)0x34]);
	Func09AD(var000D);
	UI_remove_item(var0007);
labelFunc06E3_0377:
	goto labelFunc06E3_02BE;
labelFunc06E3_037A:
	UI_play_sound_effect(0x0052);
	gflags[0x0008] = false;
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc06E3_038F:
	return;
}


