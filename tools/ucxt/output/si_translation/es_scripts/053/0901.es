#game "serpentisle"
// externs
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func0901 0x901 ()
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

	UI_clear_item_flag(0xFE9C, 0x0000);
	var0000 = UI_create_new_object(0x0320);
	if (!var0000) goto labelFunc0901_0231;
	UI_set_item_frame(var0000, 0x0000);
	var0001 = UI_set_item_quality(var0000, 0x003D);
	UI_clear_item_flag(var0000, 0x0012);
	var0001 = UI_update_last_created([0x0937, 0x0738, 0x0000]);
	if (!var0001) goto labelFunc0901_0231;
	UI_sprite_effect(0x0015, 0x0939, 0x0732, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = 0x0000;
	var0003 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc0901_0086:
	if (!(var0002 < 0x0002)) goto labelFunc0901_0115;
	enum();
labelFunc0901_0091:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0901_00F5;
	if (!(Func09A6(var0006) || (var0002 == 0x0001))) goto labelFunc0901_00F2;
	var0001 = UI_get_item_shape(var0006);
	if (!(!((var0001 == 0x01E6) || (var0001 == 0x025F)))) goto labelFunc0901_00F2;
	if (!(!UI_set_last_created(var0006))) goto labelFunc0901_00DE;
	Func092F(0xFE9C, 0x0011);
labelFunc0901_00DE:
	if (!(!UI_give_last_created(var0000))) goto labelFunc0901_00F2;
	Func092F(0xFE9C, 0x0012);
labelFunc0901_00F2:
	goto labelFunc0901_0091;
labelFunc0901_00F5:
	var0002 = (var0002 + 0x0001);
	var0003 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc0901_0086;
labelFunc0901_0115:
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0000);
	var0007 = 0x0000;
	var0002 = 0x0000;
	var0003 = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
labelFunc0901_014D:
	if (!(var0002 < 0x0002)) goto labelFunc0901_01FF;
	enum();
labelFunc0901_0158:
	for (var0006 in var0003 with var0008 to var0009) attend labelFunc0901_01DF;
	if (!(Func09A6(var0006) || (var0002 == 0x0001))) goto labelFunc0901_01DC;
	var0001 = UI_get_item_shape(var0006);
	if (!((var0001 == 0x02F9) || ((var0001 == 0x034A) || ((var0001 == 0x0347) || ((var0001 == 0x01E5) || ((var0001 == 0x0128) && (UI_get_item_frame(var0006) == 0x0003))))))) goto labelFunc0901_01DC;
	if (!(!UI_set_last_created(var0006))) goto labelFunc0901_01C8;
	Func092F(0xFE9C, 0x0011);
labelFunc0901_01C8:
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc0901_01DC;
	Func092F(0xFE9C, 0x0012);
labelFunc0901_01DC:
	goto labelFunc0901_0158;
labelFunc0901_01DF:
	var0002 = (var0002 + 0x0001);
	var0003 = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc0901_014D;
labelFunc0901_01FF:
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x00F1, 0xFE99, 0x0000, 0x0000);
	var0001 = UI_add_cont_items(0xFE9C, 0x0001, 0x023A, 0xFE99, 0x0000, 0x0000);
labelFunc0901_0231:
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!UI_get_item_flag(0xFFFE, 0x0004)) goto labelFunc0901_02C8;
	UI_resurrect_npc(0xFFFE);
	UI_remove_from_party(0xFFFE);
	UI_set_npc_id(0xFFFE, 0x001E);
	gflags[0x012B] = true;
	var0001 = UI_remove_cont_items(0xFE9C, 0xFE99, 0x019E, 0xFE99, 0x0013, 0x0012);
	var0001 = UI_remove_cont_items(0xFFFF, 0xFE99, 0x019E, 0xFE99, 0x0013, 0x0012);
	var0001 = UI_remove_cont_items(0xFFFD, 0xFE99, 0x019E, 0xFE99, 0x0013, 0x0012);
	var0001 = UI_remove_cont_items(0xFFDE, 0xFE99, 0x019E, 0xFE99, 0x0013, 0x0012);
labelFunc0901_02C8:
	UI_init_conversation();
	UI_remove_npc(0xFFEE);
	UI_remove_npc(0xFFEC);
	UI_revert_schedule(0xFFF3);
	UI_set_schedule_type(0xFFF3, 0x0010);
	UI_revert_schedule(0xFFEA);
	UI_set_schedule_type(0xFFEA, 0x0010);
	var000A = [0x0935, 0x06E3];
	var000B = [0x08B9, 0x070B];
	var000C = [0x08CB, 0x074A];
	var000D = [0x087E, 0x0747];
	var000E = [0x0942, 0x077E];
	UI_set_new_schedules(0xFFD6, [0x0000, 0x0003, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x0007, 0x0007, 0x0007], [var000A, var000B, var000C, var000D, var000E]);
	UI_set_schedule_type(0xFFD6, 0x0010);
	UI_set_new_schedules(0xFFD5, 0x0000, 0x0010, [0x09A6, 0x07F8]);
	UI_run_schedule(0xFFD5);
	UI_set_new_schedules(0xFFDB, 0x0000, 0x000C, [0x09A7, 0x07F7]);
	UI_run_schedule(0xFFDB);
	Func09AC(0xFFE6, 0x060E, 0x020F, 0x0007);
	if (!(UI_get_npc_id(0xFFFF) == 0x001E)) goto labelFunc0901_03E5;
	Func09AC(0xFFFF, 0x08BC, 0x0705, 0x001A);
labelFunc0901_03E5:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0901_0402;
	Func09AC(0xFFFD, 0x099E, 0x07F9, 0x0010);
labelFunc0901_0402:
	if (!(UI_get_npc_id(0xFFFE) == 0x001E)) goto labelFunc0901_041F;
	Func09AC(0xFFFE, 0x07F8, 0x0799, 0x000C);
labelFunc0901_041F:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0901_0468;
	UI_set_new_schedules(0xFFDE, [0x0000, 0x0003, 0x0007], [0x000A, 0x000C, 0x0010], [0x0912, 0x06D1, 0x08D5, 0x0754, 0x08C4, 0x070B]);
	UI_run_schedule(0xFFDE);
labelFunc0901_0468:
	abort;
	return;
}


