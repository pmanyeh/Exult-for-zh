#game "serpentisle"
// externs
extern void Func0862 0x862 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func06C4 object#(0x6C4) ()
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

	var0000 = UI_get_item_flag(0xFFD4, 0x0006);
	if (!gflags[0x01EA]) goto labelFunc06C4_00B9;
	if (!var0000) goto labelFunc06C4_0065;
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("\"We are attacked again! Now that we have the gold, I think that it is time for me to use my Blink Ring to escape.\"");
	say();
	message("\"I shall see thee at the inn!\"");
	say();
	var0001 = UI_get_object_position(0xFFD4);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_from_party(0xFFD4);
	Func0862();
	UI_remove_npc(0xFFD4);
labelFunc06C4_0065:
	UI_set_new_schedules(0xFFD3, [0x0000, 0x0003, 0x0004, 0x0005, 0x0007], [0x000E, 0x001A, 0x0007, 0x000C, 0x001A], [0x0516, 0x08F7, 0x04F7, 0x08CC, 0x050D, 0x08B6, 0x0516, 0x08A2, 0x04F7, 0x08CC]);
	UI_run_schedule(0xFFD3);
	abort;
labelFunc06C4_00B9:
	var0002 = Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0x0002);
	var0003 = UI_find_nearby(0xFFD4, 0x0202, 0x001E, 0x0000);
	if (!var0002) goto labelFunc06C4_00EB;
	gflags[0x01E6] = true;
labelFunc06C4_00EB:
	if (!(var0002 && var0000)) goto labelFunc06C4_01E9;
	if (!(UI_get_item_shape(item) == 0x0113)) goto labelFunc06C4_0106;
	UI_remove_item(item);
labelFunc06C4_0106:
	if (!var0003) goto labelFunc06C4_012C;
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x06C4], 0x0021);
	goto labelFunc06C4_01E9;
labelFunc06C4_012C:
	var0005 = UI_get_object_position(0xFE9C);
	var0005[0x0002] = (var0005[0x0002] - 0x0014);
	var0006 = UI_create_new_object2(0x0202, var0005);
	if (!var0006) goto labelFunc06C4_0170;
	UI_set_polymorph(var0006, 0x0202);
	UI_reduce_health(var0006, 0x0032, 0x0000);
labelFunc06C4_0170:
	Func097F(0xFFD4, "@Oh, my!@", 0x0000);
	gflags[0x01EA] = true;
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x06C4], 0x0007);
	var0007 = [0xFF23, 0xFF21, 0xFF20, 0xFF1F, 0xFF1E, 0xFF1D];
	enum();
labelFunc06C4_01B6:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc06C4_01E9;
	var0004 = UI_approach_avatar(var000A, 0x0078, 0x0028);
	Func09AD(var000A);
	Func09AC(var000A, 0xFFFF, 0x0000, 0x0000);
	goto labelFunc06C4_01B6;
labelFunc06C4_01E9:
	return;
}


