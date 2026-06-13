#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func07D5 object#(0x7D5) ()
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

	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc07D5_00B7;
	UI_move_object(0xFE9B, [0x0A87, 0x0B02, 0x0002]);
	var0000 = UI_find_nearby(0xFE9C, 0x00A0, 0x000A, 0x0000);
	enum();
labelFunc07D5_0035:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc07D5_0088;
	var0004 = UI_get_item_frame(var0003);
	if (!(var0004 < 0x0005)) goto labelFunc07D5_0085;
	var0005 = UI_get_object_position(var0003);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0002), (var0005[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc07D5_0085:
	goto labelFunc07D5_0035;
labelFunc07D5_0088:
	UI_play_sound_effect(0x0077);
	var0006 = Func09A0(0x0000, 0x0001);
	var0007 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x07D5], 0x0019);
	gflags[0x0007] = true;
	abort;
labelFunc07D5_00B7:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc07D5_017B;
	var0008 = UI_get_party_list();
	enum();
labelFunc07D5_00CD:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc07D5_00EF;
	var000C = UI_get_item_shape(var000B);
	UI_set_polymorph(var000B, var000C);
	goto labelFunc07D5_00CD;
labelFunc07D5_00EF:
	var000D = Func0992(0xFFFD, "@By Lord British's throne...@", "@By Lord British's throne...@", true);
	if (!(var000D == UI_get_npc_number(0xFE9C))) goto labelFunc07D5_011C;
	Func097F(var000D, "@...where am I?@", 0x000F);
	goto labelFunc07D5_0128;
labelFunc07D5_011C:
	Func097F(var000D, "@...where are we?@", 0x000F);
labelFunc07D5_0128:
	UI_show_npc_face0(UI_get_npc_number(var000D), 0x0000);
	if (!(var000D == UI_get_npc_number(0xFE9C))) goto labelFunc07D5_014B;
	message("\"This is the architecture I have seen throughout Serpent Isle, but where are the signs of destruction? These are not ruins, they are new!\"");
	say();
	goto labelFunc07D5_014F;
labelFunc07D5_014B:
	message("\"Avatar! This is the architecture we have seen throughout Serpent Isle, but where are the signs of destruction? These are not ruins, they are new!\"");
	say();
labelFunc07D5_014F:
	UI_remove_npc_face0();
	UI_play_sound_effect(0x0082);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_set_weather(0x0000);
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
labelFunc07D5_017B:
	return;
}


