#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08E5 0x8E5 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func08DB 0x8DB (var var0000)
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

	gflags[0x0007] = false;
	if (!(gflags[0x0060] && (!gflags[0x0061]))) goto labelFunc08DB_00EB;
	var0001 = UI_get_object_position(0xFFFF);
	var0002 = UI_get_object_position(0xFE9C);
	if (!((UI_get_distance(0xFE9C, 0xFFFF) < 0x0008) && (var0001[0x0003] == var0002[0x0003]))) goto labelFunc08DB_00EB;
	Func097F(0xFFFF, "@Stand back, Avatar!@", 0x0000);
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("\"I cannot allow thee to throw away thy life! Thou must live to ensure Britannia's safety!\"");
	say();
	message("\"I cannot live with the shame of the deaths I have caused... If I can redeem myself by becoming the required martyr, so be it!\"");
	say();
	message("\"Let it be said that Sir Dupre died bravely!\"");
	say();
	UI_remove_npc_face0();
	var0001 = UI_get_object_position(0xFFFF);
	var0001[0x0001] = (var0001[0x0001] - 0x0003);
	var0001[0x0002] = (var0001[0x0002] - 0x0003);
	UI_sprite_effect(0x0009, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0007] = true;
	gflags[0x0061] = true;
	if (!UI_get_item_flag(0xFFFF, 0x0006)) goto labelFunc08DB_00CD;
	UI_remove_from_party(0xFFFF);
labelFunc08DB_00CD:
	UI_set_item_flag(0xFFFF, 0x0004);
	Func08E5();
	UI_remove_npc(0xFFFF);
	UI_play_music(0x0036, 0x0000);
labelFunc08DB_00EB:
	var0003 = UI_find_nearby(var0000, 0x03ED, 0x000F, 0x0000);
	enum();
labelFunc08DB_00FF:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc08DB_0176;
	var0002 = UI_get_item_frame(var0006);
	if (!(var0002 < 0x0003)) goto labelFunc08DB_014A;
	var0001 = UI_execute_usecode_array(var0006, [(byte)0x46, 0x0000, (byte)0x46, 0x0001, (byte)0x46, 0x0000, (byte)0x46, 0x0002, (byte)0x0B, 0xFFF8, 0x0014]);
	goto labelFunc08DB_0173;
labelFunc08DB_014A:
	var0001 = UI_execute_usecode_array(var0006, [(byte)0x46, 0x0005, (byte)0x46, 0x0003, (byte)0x46, 0x0005, (byte)0x46, 0x0004, (byte)0x0B, 0xFFF8, 0x0014]);
labelFunc08DB_0173:
	goto labelFunc08DB_00FF;
labelFunc08DB_0176:
	var0003 = UI_find_nearby(var0000, 0x03F2, 0x000F, 0x0000);
	enum();
labelFunc08DB_018A:
	for (var0009 in var0003 with var0007 to var0008) attend labelFunc08DB_0325;
	var0002 = UI_get_item_frame(var0009);
	if (!(var0002 < 0x0007)) goto labelFunc08DB_0301;
	var0001 = UI_set_item_quality(Func09A0(0x0001, 0x0002), 0x0000);
	var0001 = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0000, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0005, (byte)0x27, 0x0002, (byte)0x46, 0x0005, (byte)0x50, (byte)0x0B, 0xFFFF, 0x0004]);
	if (!(!gflags[0x0007])) goto labelFunc08DB_0301;
	var000A = [];
	var000B = [0x03ED, 0x03EF, 0x03F2, 0x02D1, 0x0313];
	var000C = UI_find_nearby(var0009, 0xFE99, 0x0003, 0x0000);
	enum();
labelFunc08DB_0222:
	for (var000F in var000C with var000D to var000E) attend labelFunc08DB_0301;
	var0001 = UI_get_object_position(var000F);
	if (!(var0001[0x0003] < 0x000B)) goto labelFunc08DB_02FE;
	var0010 = UI_get_item_shape(var000F);
	var0001 = UI_get_item_frame(var000F);
	if (!(!(var0010 in var000B))) goto labelFunc08DB_02FE;
	if (!(((var0010 == 0x0192) && (var0001 == 0x000B)) || (((var0010 == 0x0190) && (var0001 == 0x0005)) || ((var0010 == 0x0190) && (var0001 == 0x0006))))) goto labelFunc08DB_0299;
	gflags[0x00BE] = true;
labelFunc08DB_0299:
	var0001 = UI_get_object_position(var000F);
	var0001[0x0001] = (var0001[0x0001] - 0x0003);
	var0001[0x0002] = (var0001[0x0002] - 0x0003);
	if (!(!UI_is_npc(var000F))) goto labelFunc08DB_02FE;
	UI_sprite_effect(0x0009, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = (var000A & var000F);
	UI_remove_item(var000F);
labelFunc08DB_02FE:
	goto labelFunc08DB_0222;
labelFunc08DB_0301:
	if (!(var000A || gflags[0x0007])) goto labelFunc08DB_0322;
	var0001 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x03F2], 0x0028);
labelFunc08DB_0322:
	goto labelFunc08DB_018A;
labelFunc08DB_0325:
	return;
}


