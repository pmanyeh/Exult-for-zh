#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0919 0x919 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0001 = [0xFEDB, 0xFF33, 0xFF35, 0xFF34];
	if (!(UI_get_npc_id(0xFF34) == 0x0000)) goto labelFunc0919_0049;
	enum();
labelFunc0919_0021:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0919_003C;
	UI_clear_item_say(var0004);
	Func09AD(var0004);
	goto labelFunc0919_0021;
labelFunc0919_003C:
	UI_set_npc_id(0xFF34, 0x0001);
	goto labelFunc0919_0136;
labelFunc0919_0049:
	if (!(UI_get_npc_id(0xFF34) == 0x0001)) goto labelFunc0919_0136;
	Func097F(0xFEDB, "@Master!@", 0x0000);
	Func097F(0xFEDB, "@Come quickly!@", 0x0007);
	var0005 = [0x0752, 0x03E5, 0x0006];
	var0006 = UI_create_new_object2(0x013E, var0005);
	if (!var0006) goto labelFunc0919_0136;
	UI_set_alignment(var0006, 0x0000);
	UI_set_schedule_type(var0006, 0x001D);
	UI_set_item_flag(var0006, 0x001D);
	UI_set_npc_id(0xFF34, 0x0002);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x0321, 0xFE99, 0x0000, 0x0012);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x0358, 0x0003, 0xFE99, 0x0012);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x0327, 0x0003, 0xFE99, 0x0012);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x011F, 0x0001, 0xFE99, 0x0012);
	var0007 = UI_add_cont_items(var0006, 0x0001, 0x02DB, 0x0006, 0xFE99, 0x0012);
labelFunc0919_0136:
	return;
}


