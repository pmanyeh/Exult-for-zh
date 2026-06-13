#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0109 shape#(0x109) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;

	var0000 = "his";
	if (!UI_is_pc_female()) goto labelFunc0109_0013;
	var0000 = "her";
labelFunc0109_0013:
	if (!(event == 0x0002)) goto labelFunc0109_05A5;
	if (!(Func0994() == 0x0002)) goto labelFunc0109_0400;
	if (!(!UI_npc_nearby(0xFF31))) goto labelFunc0109_003B;
	UI_set_schedule_type(0xFF31, 0x0007);
	abort;
labelFunc0109_003B:
	var0001 = Func09A0(0x0002, 0x0001);
	var0002 = [0x095D, 0x0477, 0x0000];
	0xFF31->Func07D2();
	UI_set_npc_id(0xFF31, (UI_get_npc_id(0xFF31) + 0x0001));
	UI_clear_item_say(0xFF31);
	var0003 = UI_find_nearby(0xFF31, 0xFFFF, 0x0014, 0x0008);
	var0004 = [];
	enum();
labelFunc0109_008F:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc0109_00B5;
	if (!(UI_get_schedule_type(var0007) == 0x000F)) goto labelFunc0109_00B2;
	var0004 = (var0004 & var0007);
labelFunc0109_00B2:
	goto labelFunc0109_008F;
labelFunc0109_00B5:
	if (!(UI_get_npc_id(0xFF31) == 0x0008)) goto labelFunc0109_0109;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_set_npc_id(0xFF31, 0x0000);
	UI_set_weather(0x0000);
	UI_set_schedule_type(0xFF29, 0x0003);
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x00FA, 0x0000], 0x03E8);
	abort;
labelFunc0109_0109:
	if (!(UI_get_npc_id(0xFF31) == 0x0007)) goto labelFunc0109_01C4;
	UI_show_npc_face0(0xFF31, 0x0000);
	message("\"The energies from beyond the Void now converge upon this place and time. It is the moment when Xenka shall move across the eons and bring us the light of prophecy...\"");
	say();
	var0009 = UI_find_nearby(0xFE9C, 0x02D6, 0x0014, 0x0000);
	UI_remove_item(var0009);
	UI_play_music(0x003F, var0001);
	UI_move_object(0xFF29, var0002);
	UI_sprite_effect(0x001A, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0008 = UI_execute_usecode_array(0xFF29, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x01, (byte)0x70]);
	Func097F(0xFF29, "@It is I...@", 0x0005);
	Func097F(0xFF31, "@Come to us, Xenka!@", 0x0000);
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
	gflags[0x0270] = true;
	abort;
labelFunc0109_01C4:
	if (!(UI_get_npc_id(0xFF31) == 0x0006)) goto labelFunc0109_01FF;
	UI_item_say(0xFF31, "@Xenka is near!@");
	var000A = "@Xenka!@";
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
labelFunc0109_01FF:
	if (!(UI_get_npc_id(0xFF31) == 0x0005)) goto labelFunc0109_0253;
	UI_sprite_effect(0x000D, 0x0968, 0x0474, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_item_say(0xFF31, "@Invoke her name!@");
	var000A = "@Xenka!@";
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
labelFunc0109_0253:
	if (!(UI_get_npc_id(0xFF31) == 0x0004)) goto labelFunc0109_028E;
	UI_item_say(0xFF31, "@The time is at hand!@");
	var000A = "@The time!@";
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
labelFunc0109_028E:
	if (!(UI_get_npc_id(0xFF31) == 0x0003)) goto labelFunc0109_02C9;
	UI_item_say(0xFF31, "@Xenka returns!@");
	var000A = "@She is pure.@";
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
labelFunc0109_02C9:
	if (!(UI_get_npc_id(0xFF31) == 0x0002)) goto labelFunc0109_032F;
	var0009 = UI_create_new_object(0x02D6);
	if (!var0009) goto labelFunc0109_0302;
	UI_set_item_frame(var0009, 0x0006);
	var0008 = UI_update_last_created(var0002);
	UI_play_sound_effect(0x0046);
labelFunc0109_0302:
	UI_item_say(0xFF31, "@Our vigil is over!@");
	var000A = "@Xenka comes!@";
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
labelFunc0109_032F:
	if (!(UI_get_npc_id(0xFF31) == 0x0001)) goto labelFunc0109_0385;
	UI_set_weather(0x0003);
	UI_play_music(0x0041, var0001);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_item_say(0xFF31, "@Long have we waited...@");
	var000A = "@No more!@";
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109], 0x000A);
labelFunc0109_0385:
	if (!(var0004 != [])) goto labelFunc0109_03E0;
	var000B = var0004[UI_get_random(UI_get_array_size(var0004))];
	UI_clear_item_say(var000B);
	var000C = UI_get_random(0x000A);
	var0008 = UI_delayed_execute_usecode_array(var000B, [(byte)0x61, (byte)0x27, 0x0007, (byte)0x6B], var000C);
	var000C = (var000C + 0x0001);
	Func097F(var000B, var000A, var000C);
labelFunc0109_03E0:
	UI_sprite_effect(0x0007, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc0109_0400:
	if (!(Func0994() == 0x001B)) goto labelFunc0109_05A5;
	UI_init_conversation();
	UI_show_npc_face0(0xFF31, 0x0000);
	message("\"Thou shouldst know better than to meddle in the affairs of Fate, Thoxa. By merely talking with the Hero, thou mayest be condemning us.\"");
	say();
	UI_show_npc_face1(0xFF2D, 0x0000);
	message("\"We must intervene, Karnax. The very fabric that weaves the tapestry of the Cosmos may depend upon it.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Thou art as foolish as ever, girl...\"");
	say();
	message("\"Xenka's writings are crystal clear -- those who seek to aid the Hero, shall cause ");
	message(var0000);
	message(" greatest calamities!\"");
	say();
	message("\"I must stop thee, before thou sendest us all to our doom!\"");
	say();
	Func097F(0xFF31, "@I must stop thee...@", 0x0000);
	UI_remove_npc_face1();
	UI_remove_npc_face0();
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x59, (byte)0x30, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0004, (byte)0x67, (byte)0x55, 0x075A]);
	Func097F(0xFF2D, "@Flam Mas Flam!@", 0x0002);
	gflags[0x000A] = true;
	var0008 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x66, (byte)0x27, 0x0002, (byte)0x68, (byte)0x27, 0x0002, (byte)0x52, "@Thoxa...@", (byte)0x69, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x61, (byte)0x55, 0x07EC], 0x000A);
	var000D = UI_get_object_position(0xFF31);
	var000E = UI_get_object_position(0xFF2D);
	UI_sprite_effect(0x0015, (var000E[0x0001] - 0x0002), (var000E[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000F = [0xFFFE, 0x0000, 0x0002, 0x0000, 0x0001, 0x0000, 0x0000];
	var0010 = [0xFFFE, 0xFFFD, 0x0002, 0x0002, 0xFFFE, 0xFFFD, 0x0000];
	var0011 = 0x0001;
labelFunc0109_054D:
	if (!(var0011 <= 0x0007)) goto labelFunc0109_05A5;
	var0012 = UI_create_new_object(0x025F);
	if (!var0012) goto labelFunc0109_0598;
	UI_clear_item_flag(var0012, 0x0012);
	var0008 = UI_update_last_created([(var000D[0x0001] + var000F[var0011]), (var000D[0x0002] + var0010[var0011]), 0x0000]);
labelFunc0109_0598:
	var0011 = (var0011 + 0x0001);
	goto labelFunc0109_054D;
labelFunc0109_05A5:
	return;
}


