#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0864 0x864 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_remove_party_items(0x0001, 0x0289, 0x0000, 0x0000, true);
	UI_clear_item_flag(item, 0x001E);
	message("\"Thank thee, Avatar! Thank thee for returning to me the Comb of Beauty. Take this key...\"");
	say();
	var0001 = Func099B(0xFE9C, 0x0001, 0x0281, 0x000F, 0x0002, 0x0000, true);
	message("\"...And go to the southeast corner of the Throne Room. Seek the illusionary wall -- it will reveal the path to the treasure thou dost seek.\"");
	say();
	message("\"The key will allow thee to open the gate to the Treasury Room. The armour that I did promise thee is stored there.\"");
	say();
	gflags[0x0212] = false;
	UI_remove_npc_face0();
	Func097F(item, "@A thousand thanks!@", 0x0000);
	var0002 = UI_get_object_position(item);
	var0002[0x0001] = (var0002[0x0001] - (var0002[0x0003] / 0x0002));
	var0002[0x0002] = (var0002[0x0002] - (var0002[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0003 = UI_get_item_shape(UI_get_npc_object(0xFFC9));
	UI_set_polymorph(0xFFC9, var0003);
	UI_set_new_schedules(0xFFC9, [0x0000, 0x0003, 0x0004], [0x000E, 0x0005, 0x000C], [0x0436, 0x06C9, 0x03AD, 0x06DD, 0x0407, 0x075B]);
	UI_sprite_effect(0x000D, (var0002[0x0001] + 0x0002), (var0002[0x0002] + 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFF2C, [(var0002[0x0001] + 0x0002), (var0002[0x0002] + 0x0002), 0x0000]);
	UI_set_schedule_type(0xFF2C, 0x000F);
	UI_set_schedule_type(0xFFC9, 0x000F);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0001 = UI_delayed_execute_usecode_array(0xFF2C, [(byte)0x23, (byte)0x61, (byte)0x55, 0x04D4], 0x000A);
	gflags[0x0212] = true;
	UI_remove_npc_face0();
	Func097F(0xFFC9, "@I am restored!@", 0x0002);
	UI_play_sound_effect(0x0051);
	UI_play_music(0x003F, Func09A0(0x0005, 0x0001));
	abort;
	return;
}


