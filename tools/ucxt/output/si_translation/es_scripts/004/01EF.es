#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func01EF shape#(0x1EF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_npc_id(item);
	if (!(event == 0x0001)) goto labelFunc01EF_00AB;
	if (!(var0000 > 0x0002)) goto labelFunc01EF_0077;
	if (!(UI_die_roll(0x0001, 0x0014) == 0x000D)) goto labelFunc01EF_0074;
	UI_clear_item_say(item);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Meow@", (byte)0x27, 0x0008, (byte)0x52, "@Meow!@", (byte)0x27, 0x0008, (byte)0x52, "@Meow!@", (byte)0x27, 0x0008, (byte)0x52, "@Meow!@", (byte)0x27, 0x0008, (byte)0x52, "@Meow!@", (byte)0x27, 0x0008, (byte)0x55, 0x01EF]);
labelFunc01EF_0074:
	goto labelFunc01EF_00AB;
labelFunc01EF_0077:
	UI_item_say(0xFE9C, "@Here, kitty, kitty!@");
	UI_set_schedule_type(item, 0x0014);
	UI_set_npc_id(item, (var0000 + 0x0001));
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc01EF_00AB;
	Func097F(0xFFFE, "@I hate cats.@", 0x0008);
labelFunc01EF_00AB:
	if (!(event == 0x0002)) goto labelFunc01EF_0130;
	var0002 = UI_get_object_position(item);
	var0002[0x0001] = (var0002[0x0001] - (var0002[0x0003] / 0x0002));
	var0002[0x0002] = (var0002[0x0002] - (var0002[0x0003] / 0x0002));
	UI_remove_item(item);
	UI_sprite_effect(0x001B, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0003 = Func0992(0xFFFE, 0x0000, 0x0000, false);
	Func097F(var0003, "@Bloody cats!@", 0x0008);
labelFunc01EF_0130:
	if (!(event == 0x0000)) goto labelFunc01EF_01EC;
	if (!gflags[0x000D]) goto labelFunc01EF_01DA;
	UI_set_npc_id(item, (var0000 + 0x0001));
	if (!(UI_get_npc_id(item) == 0x0002)) goto labelFunc01EF_01AD;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_polymorph(item, 0x01EF);
	UI_set_camera(0xFE9C);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x000A);
	UI_set_npc_id(item, 0x0000);
	gflags[0x000D] = false;
	gflags[0x002A] = false;
labelFunc01EF_01AD:
	if (!(UI_get_npc_id(item) == 0x0001)) goto labelFunc01EF_01D6;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	UI_play_music(0x0018, Func09A0(0x0005, 0x0001));
labelFunc01EF_01D6:
	abort;
	goto labelFunc01EF_01EC;
labelFunc01EF_01DA:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Meow!@"]);
labelFunc01EF_01EC:
	return;
}


