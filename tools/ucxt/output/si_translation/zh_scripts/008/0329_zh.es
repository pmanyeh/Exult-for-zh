#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0329 shape#(0x329) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!gflags[0x0004]) goto labelFunc0329_003F;
	UI_clear_item_flag(item, 0x001D);
	UI_clear_item_say(item);
	Func097F(item, "@No! It must work!@", 0x0000);
	UI_obj_sprite_effect(item, 0x0009, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002B);
	abort;
labelFunc0329_003F:
	var0000 = UI_set_npc_prop(item, 0x0003, 0x0005);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x001A, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_remove_npc(item);
	UI_set_schedule_type(item, 0x0004);
	var0002 = Func0992(0x0001, "@What happened?@", "@Gone!@", 0x0003);
	return;
}


