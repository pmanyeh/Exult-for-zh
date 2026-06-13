#game "serpentisle"
// externs
extern void Func07D2 object#(0x7D2) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0632 object#(0x632) ()
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
	var var0013;
	var var0014;

	var0000 = UI_is_pc_female();
	var0001 = "he";
	var0002 = "him";
	var0003 = "his";
	if (!var0000) goto labelFunc0632_0031;
	var0001 = "she";
	var0002 = "her";
	var0003 = "her";
labelFunc0632_0031:
	if (!((event == 0x0002) && (gflags[0x0007] == false))) goto labelFunc0632_0169;
	var0004 = [0x0A3B, 0x0A25, 0x0A3B, 0x0A28, 0x0A3E, 0x0A27];
	var0005 = 0x0001;
labelFunc0632_005D:
	if (!(var0005 <= 0x0003)) goto labelFunc0632_00FC;
	var0006 = (var0005 * 0x0002);
	var0007 = UI_create_new_object2(0x0151, [var0004[(var0006 - 0x0001)], var0004[var0006], 0x0000]);
	if (!var0007) goto labelFunc0632_00F9;
	UI_set_schedule_type(var0007, 0x000F);
	var0005 = (var0005 + 0x0001);
	UI_sprite_effect(0x001A, var0004[(var0006 - 0x0001)], var0004[var0006], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0007->Func07D2();
	UI_set_alignment(var0007, 0x0002);
	UI_set_item_flag(var0007, 0x0012);
	UI_clear_item_flag(var0007, 0x001D);
labelFunc0632_00F9:
	goto labelFunc0632_005D;
labelFunc0632_00FC:
	var0008 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0009, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0007] = true;
	var0009 = Func09A0(0x0000, 0x0001);
	var000A = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x0632], 0x0014);
	abort;
labelFunc0632_0169:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc0632_027E;
	gflags[0x0007] = false;
	UI_show_npc_face0(0xFEC6, 0x0000);
	message("\"Blast! The Amulet seems to be protecting ");
	message(var0002);
	message("! This shall not be as easy as we were led to believe!\"");
	say();
	UI_show_npc_face0(0xFEC8, 0x0000);
	message("\"Then we shall have to work together...\"");
	say();
	UI_show_npc_face1(0xFEC7, 0x0000);
	message("\"The Guide shall make our aim true! The Guide shall lead the way to our truly perfect world!\"");
	say();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
	message("\"Let us be done with this! Once this pathetic pawn is dead we can cross into the new world, and let this decaying husk die as it was meant to!\"");
	say();
	UI_remove_npc_face0();
	var000B = ["@Attack!@", "@Die, Dog of Prophecy!@", "@Ha ha ha ha!@"];
	var000C = 0x0001;
	var0009 = Func09A0(0x0005, 0x0001);
	var000D = UI_find_nearby(var0009, 0x0299, 0x0014, 0x0000);
	enum();
labelFunc0632_01F3:
	for (var0010 in var000D with var000E to var000F) attend labelFunc0632_0232;
	UI_set_schedule_type(var0010, 0x0000);
	UI_set_oppressor(0xFE9C, var0010);
	Func097F(var0010, var000B[var000C], (var000C * 0x0002));
	var000C = (var000C + 0x0001);
	goto labelFunc0632_01F3;
labelFunc0632_0232:
	var0009 = Func09A0(0x0005, 0x0002);
	var0011 = UI_find_nearby(var0009, 0x0151, 0x001E, 0x0000);
	enum();
labelFunc0632_0252:
	for (var0014 in var0011 with var0012 to var0013) attend labelFunc0632_027E;
	UI_set_schedule_type(var0014, 0x0000);
	UI_set_oppressor(0xFE9C, var0014);
	var000C = (var000C + 0x0001);
	goto labelFunc0632_0252;
labelFunc0632_027E:
	return;
}


