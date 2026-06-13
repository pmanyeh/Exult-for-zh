#game "serpentisle"
// externs
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func07EE object#(0x7EE) ()
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

	if (!((event == 0x0002) && (item == UI_get_npc_object(0xFFFE)))) goto labelFunc07EE_0022;
	Func09AC(0xFFFE, 0xFFFF, 0x0000, 0x0003);
	abort;
labelFunc07EE_0022:
	if (!((event == 0x0002) && (gflags[0x0008] == true))) goto labelFunc07EE_0058;
	var0000 = UI_set_to_attack(0xFF2D, item, 0x0118);
	var0001 = UI_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x66, (byte)0x69, (byte)0x01, (byte)0x7A, (byte)0x61]);
	abort;
labelFunc07EE_0058:
	if (!((event == 0x0002) && (gflags[0x000A] == true))) goto labelFunc07EE_0115;
	UI_set_schedule_type(0xFF2D, 0x000F);
	var0002 = UI_get_object_position(0xFF31);
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x001A, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF31);
	var0001 = UI_create_new_object(0x0390);
	if (!var0001) goto labelFunc07EE_00CF;
	UI_set_item_flag(var0001, 0x0012);
	var0001 = UI_update_last_created(UI_get_object_position(0xFF31));
labelFunc07EE_00CF:
	Func097F(0xFF2D, "@Goodbye...@", 0x0002);
	Func097F(0xFF2D, "@Hero...@", 0x0016);
	var0001 = UI_delayed_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x07EE], 0x0019);
	gflags[0x000A] = false;
	gflags[0x0007] = true;
	abort;
labelFunc07EE_0115:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc07EE_0250;
	UI_init_conversation();
	UI_show_npc_face0(0xFF2D, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	message("\"Karnax is defeated, for now... I am weak, and must leave...\"");
	say();
	if (!gflags[0x02C3]) goto labelFunc07EE_014C;
	message("\"Remember to seek out the Three Companions -- they must be at thy side!\"");
	say();
	goto labelFunc07EE_0158;
labelFunc07EE_014C:
	message("\"The writings of Xenka speak of the Three which shall travel with thee. Without them, thou canst not succeed.\"");
	say();
	message("\"Thou must find them, Hero! And then never let them leave thy side...\"");
	say();
	gflags[0x02C3] = true;
labelFunc07EE_0158:
	if (!gflags[0x02C2]) goto labelFunc07EE_0165;
	message("\"And watch for the Ring, Necklace and Earring -- for by these, the Power shall guide thee.\"");
	say();
	goto labelFunc07EE_016D;
labelFunc07EE_0165:
	message("\"Thou must also seek three artifacts -- a Ring, a Necklace, and an Earring.\"");
	say();
	message("\"Through these ancient items, a Power shall communicate with thee. More than this, I know not.\"");
	say();
labelFunc07EE_016D:
	message("\"Seek out thy black sword with the caged demon that thou didst bring with thee from the other land. Thou must have it to complete thy quest.\"");
	say();
	UI_remove_npc_face0();
	var0003 = UI_get_object_position(0xFF2D);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = Func09A0(0x0007, 0x0001);
	if (!var0004) goto labelFunc07EE_01BA;
	UI_play_music(0x0031, var0004);
labelFunc07EE_01BA:
	UI_play_sound_effect(0x0051);
	UI_remove_npc(0xFF2D);
	var0001 = UI_create_new_object(0x0390);
	if (!var0001) goto labelFunc07EE_01F0;
	UI_set_item_flag(var0001, 0x0012);
	var0001 = UI_update_last_created(UI_get_object_position(0xFF2D));
labelFunc07EE_01F0:
	var0005 = UI_find_nearby(0xFE9C, 0x037F, 0x000A, 0x0000);
	enum();
labelFunc07EE_0204:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc07EE_0230;
	var0009 = UI_die_roll(0x0001, 0x000A);
	if (!(var0009 < 0x000A)) goto labelFunc07EE_022D;
	UI_remove_item(var0008);
labelFunc07EE_022D:
	goto labelFunc07EE_0204;
labelFunc07EE_0230:
	gflags[0x0007] = false;
	gflags[0x0009] = true;
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07EE], 0x0032);
	abort;
labelFunc07EE_0250:
	if (!((event == 0x0002) && (gflags[0x0009] == true))) goto labelFunc07EE_02B1;
	UI_set_schedule_type(0xFFFE, 0x0003);
	var0001 = UI_delayed_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x52, "@The Avatar!@"], 0x0002);
	var0001 = UI_add_cont_items(0xFFFE, 0x0002, 0x0253, 0x0000, 0x0000, 0x0000);
	gflags[0x0009] = false;
	var0001 = UI_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x55, 0x07EE]);
	abort;
labelFunc07EE_02B1:
	return;
}


