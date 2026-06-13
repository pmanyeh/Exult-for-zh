#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func09AA 0x9AA ();

void Func032C shape#(0x32C) ()
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

	if (!(event == 0x0001)) goto labelFunc032C_00B4;
	var0000 = UI_find_nearby(item, 0x0113, 0x0005, 0x0010);
	enum();
labelFunc032C_001A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc032C_0066;
	var0004 = UI_get_item_quality(var0003);
	var0005 = UI_get_item_frame(var0003);
	if (!(var0005 == 0x0007)) goto labelFunc032C_0063;
	if (!(var0004 == 0x00C8)) goto labelFunc032C_0063;
	gflags[0x0314] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x060A]);
labelFunc032C_0063:
	goto labelFunc032C_001A;
labelFunc032C_0066:
	var0007 = UI_get_item_frame(item);
	if (!(var0007 == 0x0001)) goto labelFunc032C_0081;
	UI_set_item_frame(item, 0x0000);
	abort;
labelFunc032C_0081:
	if (!(var0007 == 0x0000)) goto labelFunc032C_00B4;
	if (!(gflags[0x0314] == false)) goto labelFunc032C_00B4;
	Func090D(item, [0x0001, 0x0000], [0x0000, 0x0001], 0xFFFF, 0x032C, item, 0x000A);
	abort;
labelFunc032C_00B4:
	if (!(event == 0x000A)) goto labelFunc032C_0103;
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_polymorph(0xFE9C, 0x00EF);
	UI_set_item_frame(item, 0x0001);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x032C], 0x0019);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@AAAAAHHHHH!!!!!!@"], 0x0002);
	abort;
labelFunc032C_0103:
	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc032C_0274;
	var0007 = UI_get_item_frame(item);
	if (!(var0007 == 0x0000)) goto labelFunc032C_0135;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@...uunnhhhh...@"]);
labelFunc032C_0135:
	if (!(var0007 == 0x0001)) goto labelFunc032C_023A;
	var0008 = 0x0000;
labelFunc032C_0145:
	if (!(var0008 < 0x000F)) goto labelFunc032C_01D3;
	var0009 = UI_create_new_object(0x0390);
	if (!var0009) goto labelFunc032C_01C6;
	UI_set_item_flag(var0009, 0x0012);
	var000A = UI_die_roll(0x0000, 0x0003);
	UI_set_item_frame(var0009, var000A);
	var000B = UI_die_roll(0xFFFE, 0x0002);
	var000C = UI_die_roll(0x0001, 0x0002);
	var000D = UI_get_object_position(item);
	var0006 = UI_update_last_created([(var000D[0x0001] + var000B), (var000D[0x0002] + var000C), var000D[0x0003]]);
labelFunc032C_01C6:
	var0008 = (var0008 + 0x0001);
	goto labelFunc032C_0145;
labelFunc032C_01D3:
	UI_set_item_frame(item, 0x0000);
	var000D = UI_get_object_position(item);
	var000D[0x0002] = (var000D[0x0002] + 0x0002);
	UI_move_object(0xFE9C, var000D);
	UI_set_polymorph(0xFE9C, 0x02D1);
	var0006 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6E, (byte)0x27, 0x000F], 0x0005);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x032C], 0x000F);
	gflags[0x0007] = true;
	abort;
labelFunc032C_023A:
	if (!(var0007 == 0x0002)) goto labelFunc032C_0274;
	var000D = UI_get_object_position(item);
	UI_sprite_effect(0x0011, (var000D[0x0001] - 0x0006), (var000D[0x0002] - 0x0006), 0x000F, 0x000F, 0x0000, 0xFFFF);
	abort;
labelFunc032C_0274:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc032C_02A3;
	Func09AA();
	gflags[0x0007] = false;
	var0006 = UI_get_npc_prop(0xFE9C, 0x0003);
	UI_reduce_health(0xFE9C, var0006, 0x0000);
labelFunc032C_02A3:
	return;
}


