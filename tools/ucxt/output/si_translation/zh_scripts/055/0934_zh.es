#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func09A6 0x9A6 (var var0000);
extern void Func0935 0x935 (var var0000);

void Func0934 0x934 (var var0000)
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

	var0001 = UI_get_npc_prop(var0000, 0x0003);
	if (!(var0000 == UI_get_npc_object(0xFE9C))) goto labelFunc0934_0037;
	var0002 = Func09A0(0x0001, 0x0002);
	var0003 = UI_set_item_quality(var0002, var0001);
	goto labelFunc0934_005A;
labelFunc0934_0037:
	UI_set_npc_id(var0000, var0001);
	var0002 = Func09A0(0x0001, 0x0002);
	var0003 = UI_set_item_quality(var0002, 0x0000);
labelFunc0934_005A:
	var0003 = UI_set_npc_prop(var0000, 0x0003, (UI_get_npc_prop(var0000, 0x0000) - var0001));
	gflags[0x0083] = true;
	if (!(var0000 == UI_get_npc_object(0xFE9C))) goto labelFunc0934_00C6;
	var0003 = UI_get_party_list2();
	enum();
labelFunc0934_008F:
	for (var0002 in var0003 with var0004 to var0005) attend labelFunc0934_00C3;
	if (!(!(var0002 == var0000))) goto labelFunc0934_00C0;
	UI_set_npc_id(var0002, 0x000D);
	UI_remove_from_party(var0002);
	UI_set_schedule_type(var0002, 0x000F);
labelFunc0934_00C0:
	goto labelFunc0934_008F;
labelFunc0934_00C3:
	goto labelFunc0934_00E1;
labelFunc0934_00C6:
	UI_remove_from_party(var0000);
	UI_set_schedule_type(var0000, 0x000F);
	UI_set_alignment(var0000, 0x0001);
labelFunc0934_00E1:
	UI_set_item_flag(var0000, 0x001D);
	var0003 = UI_find_nearby(var0000, 0x020A, 0x000F, 0x0000);
	enum();
labelFunc0934_00FF:
	for (var0002 in var0003 with var0006 to var0007) attend labelFunc0934_012E;
	if (!(UI_get_item_quality(var0002) == 0x00EB)) goto labelFunc0934_012B;
	var0008 = var0002;
	UI_set_item_shape(var0008, 0x0320);
	goto labelFunc0934_0137;
labelFunc0934_012B:
	goto labelFunc0934_00FF;
labelFunc0934_012E:
	Func092F(var0000, 0x0010);
labelFunc0934_0137:
	var0009 = 0x0000;
	var000A = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
labelFunc0934_0150:
	if (!(var0009 < 0x0002)) goto labelFunc0934_01DF;
	enum();
labelFunc0934_015B:
	for (var0002 in var000A with var000B to var000C) attend labelFunc0934_01BF;
	if (!(Func09A6(var0002) || (var0009 == 0x0001))) goto labelFunc0934_01BC;
	var0003 = UI_get_item_shape(var0002);
	if (!(!((var0003 == 0x01E6) || (var0003 == 0x025F)))) goto labelFunc0934_01BC;
	if (!(!UI_set_last_created(var0002))) goto labelFunc0934_01A8;
	Func092F(var0000, 0x0011);
labelFunc0934_01A8:
	if (!(!UI_give_last_created(var0008))) goto labelFunc0934_01BC;
	Func092F(var0000, 0x0012);
labelFunc0934_01BC:
	goto labelFunc0934_015B;
labelFunc0934_01BF:
	var0009 = (var0009 + 0x0001);
	var000A = UI_get_cont_items(var0000, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc0934_0150;
labelFunc0934_01DF:
	UI_set_item_shape(var0008, 0x020A);
	Func0935(var0000);
	return;
}


