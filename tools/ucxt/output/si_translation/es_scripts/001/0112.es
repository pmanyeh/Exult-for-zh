#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0112 shape#(0x112) ()
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

	if (!gflags[0x0004]) goto labelFunc0112_0024;
	UI_clear_item_flag(item, 0x001D);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x78, 0x0064, 0x0000]);
	abort;
labelFunc0112_0024:
	var0001 = UI_get_oppressor(item);
	if (!(var0001 == 0x0000)) goto labelFunc0112_0043;
	var0001 = UI_get_npc_object(0xFE9C);
	goto labelFunc0112_0051;
labelFunc0112_0043:
	var0001 = UI_get_npc_object((0x0000 - var0001));
labelFunc0112_0051:
	var0002 = UI_get_party_list();
	if (!(var0001 in var0002)) goto labelFunc0112_013C;
	var0000 = UI_set_npc_prop(item, 0x0003, 0x0005);
	var0003 = UI_find_nearby(0xFE9C, 0x017D, 0x001E, 0x0000);
	enum();
labelFunc0112_0084:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0112_00A6;
	UI_set_schedule_type(var0006, 0x0003);
	UI_set_npc_id(var0006, 0x0007);
	goto labelFunc0112_0084;
labelFunc0112_00A6:
	var0007 = ["@Hold there!@", "@Cease!@", "@Murderer!@", "@Stop him!@", "@Arrest that dog!@", "@Ruffian!@"];
	if (!var0003) goto labelFunc0112_00E5;
	UI_clear_item_say(var0003);
	Func097F(var0003, [var0007[UI_get_random(UI_get_array_size(var0007))]], 0x0000);
labelFunc0112_00E5:
	if (!(UI_get_array_size(var0003) < 0x0006)) goto labelFunc0112_0139;
	var0008 = UI_create_new_object2(0x017D, [0x0000, 0x0000, 0x0000]);
	if (!var0008) goto labelFunc0112_0139;
	var0000 = UI_approach_avatar(var0008, 0x005A, 0x0028);
	if (!var0000) goto labelFunc0112_0139;
	UI_set_npc_id(var0008, 0x0007);
	UI_set_schedule_type(var0008, 0x0003);
labelFunc0112_0139:
	goto labelFunc0112_0187;
labelFunc0112_013C:
	var0000 = UI_set_npc_prop(item, 0x0003, 0x0014);
	UI_clear_item_say(item);
	var0007 = ["@Oh, my!@", "@I am bleeding...@", "@Oh, help me!@", "@Ouch!@", "@Fiend, stop that!@", "@I die!@"];
	Func097F(item, [var0007[UI_get_random(UI_get_array_size(var0007))]], 0x0000);
	UI_set_attack_mode(item, 0x0007);
labelFunc0112_0187:
	return;
}


