#game "serpentisle"
// externs
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();

void Func076A object#(0x76A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc076A_0159;
	if (!gflags[0x02FC]) goto labelFunc076A_000F;
	abort;
labelFunc076A_000F:
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = UI_create_new_object2(0x0299, var0001);
	if (!var0002) goto labelFunc076A_0159;
	UI_sprite_effect(0x001A, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0002->Func07D2();
	var0002->Func07D1();
	UI_set_alignment(var0002, 0x0000);
	UI_set_schedule_type(var0002, 0x000F);
	UI_set_npc_id(var0002, var0000);
	UI_set_item_flag(var0002, 0x0012);
	UI_set_item_flag(var0002, 0x001D);
	var0003 = UI_get_npc_prop(var0002, 0x0000);
	var0004 = (0x000B - var0003);
	var0005 = UI_set_npc_prop(var0002, 0x0000, var0004);
	var0003 = UI_get_npc_prop(var0002, 0x0001);
	var0004 = (0x0012 - var0003);
	var0005 = UI_set_npc_prop(var0002, 0x0001, var0004);
	var0003 = UI_get_npc_prop(var0002, 0x0002);
	var0004 = (0x0018 - var0003);
	var0005 = UI_set_npc_prop(var0002, 0x0002, var0004);
	var0003 = UI_get_npc_prop(var0002, 0x0004);
	var0004 = (0x0010 - var0003);
	var0005 = UI_set_npc_prop(var0002, 0x0004, var0004);
	var0003 = UI_get_npc_prop(var0002, 0x0003);
	var0004 = (0x0010 - var0003);
	var0005 = UI_set_npc_prop(var0002, 0x0003, var0004);
labelFunc076A_0159:
	return;
}


