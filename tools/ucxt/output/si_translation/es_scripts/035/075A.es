#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0998 0x998 (var var0000, var var0001);

void Func075A object#(0x75A) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc075A_00D7;
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	UI_clear_item_say(0xFE9C);
	var0000 = UI_get_object_position(0xFE9C);
	var0000[0x0002] = (var0000[0x0002] + 0x0007);
	UI_set_schedule_type(0xFF2D, 0x000F);
	UI_move_object(0xFF2D, var0000);
	Func097F(0xFF2D, "@Thou hast arrived!@", 0x0000);
	Func097F(0xFE9C, "@Who said that?@", 0x0003);
	0xFF2D->Func07D2();
	var0001 = UI_delayed_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x55, 0x0363], 0x0014);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_set_schedule_type(0xFF31, 0x000F);
	var0001 = UI_execute_usecode_array(0xFF31, [(byte)0x59, (byte)0x36]);
	var0002 = Func09A0(0x0000, 0x0001);
	UI_play_music(0x003F, var0002);
labelFunc075A_00D7:
	if (!((event == 0x0002) && (gflags[0x000A] == true))) goto labelFunc075A_013F;
	UI_init_conversation();
	UI_show_npc_face0(0xFF2D, 0x0000);
	message("\"This fire ring shall save thee from being destroyed during this battle, Hero. Neither of us means thee harm, but errors can occur in the heat of combat. Remain within the ring!\"");
	say();
	UI_end_conversation();
	var0002 = Func09A0(0x0007, 0x0001);
	if (!var0002) goto labelFunc075A_0117;
	UI_play_music(0x0002, var0002);
labelFunc075A_0117:
	Func0998(UI_get_npc_object(0xFE9C), 0x037F);
	var0001 = UI_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x64]);
	gflags[0x000A] = false;
	abort;
labelFunc075A_013F:
	if (!(event == 0x0002)) goto labelFunc075A_016A;
	UI_play_sound_effect(0x0047);
	UI_obj_sprite_effect(0xFF2D, 0x0011, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc075A_016A:
	return;
}


