#game "serpentisle"
void Func0618 object#(0x618) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((event == 0x0002) && ((gflags[0x0007] == false) && ((gflags[0x0008] == false) && ((gflags[0x0009] == false) && (gflags[0x000A] == false)))))) goto labelFunc0618_00B4;
	var0000 = [0x0238, 0x0BCA, 0x0000];
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0028);
	var0001 = UI_create_new_object(0x03FF);
	if (!var0001) goto labelFunc0618_00AF;
	UI_set_item_frame(var0001, 0x0000);
	var0002 = UI_update_last_created(var0000);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x0618], 0x0014);
labelFunc0618_00AF:
	gflags[0x0008] = true;
	abort;
labelFunc0618_00B4:
	if (!((event == 0x0002) && (gflags[0x0008] == true))) goto labelFunc0618_015F;
	UI_remove_item(item);
	var0000 = [0x0238, 0x0BCA, 0x0000];
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	var0001 = UI_create_new_object(0x03FF);
	if (!var0001) goto labelFunc0618_0156;
	UI_set_item_frame(var0001, 0x0001);
	var0002 = UI_update_last_created(var0000);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x0618], 0x0014);
labelFunc0618_0156:
	gflags[0x0008] = false;
	gflags[0x0009] = true;
	abort;
labelFunc0618_015F:
	if (!((event == 0x0002) && (gflags[0x0009] == true))) goto labelFunc0618_028B;
	UI_remove_item(item);
	UI_sprite_effect(0x0011, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001F, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	var0001 = UI_create_new_object(0x03FF);
	if (!var0001) goto labelFunc0618_01E4;
	UI_set_item_frame(var0001, 0x0002);
	var0002 = UI_update_last_created([0x0238, 0x0BCA, 0x0000]);
labelFunc0618_01E4:
	var0001 = UI_create_new_object(0x03FF);
	if (!var0001) goto labelFunc0618_0211;
	UI_set_item_frame(var0001, 0x0003);
	var0002 = UI_update_last_created([0x0235, 0x0BCC, 0x0005]);
labelFunc0618_0211:
	var0001 = UI_create_new_object(0x03FF);
	if (!var0001) goto labelFunc0618_023E;
	UI_set_item_frame(var0001, 0x0004);
	var0002 = UI_update_last_created([0x023A, 0x0BC5, 0x0005]);
labelFunc0618_023E:
	var0001 = UI_create_new_object(0x03FF);
	if (!var0001) goto labelFunc0618_026B;
	UI_set_item_frame(var0001, 0x0005);
	var0002 = UI_update_last_created([0x0233, 0x0BC5, 0x0005]);
labelFunc0618_026B:
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x0618], 0x0019);
	gflags[0x0009] = false;
	gflags[0x000A] = true;
	abort;
labelFunc0618_028B:
	if (!((event == 0x0002) && (gflags[0x000A] == true))) goto labelFunc0618_0391;
	UI_set_weather(0x0000);
	UI_item_say(0xFE9C, "@By Lord British's Beard!@");
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"Look at how quickly it has grown! It looks as if it has been here for decades!\"");
	say();
	UI_remove_npc_face0();
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04CF]);
	gflags[0x000A] = false;
	var0003 = UI_get_npc_prop(0xFE9C, 0x0008);
	if (!(var0003 <= 0x0320)) goto labelFunc0618_02FA;
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0x0320);
	abort;
labelFunc0618_02FA:
	if (!(var0003 <= 0x0640)) goto labelFunc0618_0315;
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0x0640);
	abort;
labelFunc0618_0315:
	if (!(var0003 <= 0x0C80)) goto labelFunc0618_0330;
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0x0C80);
	abort;
labelFunc0618_0330:
	if (!(var0003 <= 0x1900)) goto labelFunc0618_034B;
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0x1900);
	abort;
labelFunc0618_034B:
	if (!(var0003 <= 0x3200)) goto labelFunc0618_0366;
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0x3200);
	abort;
labelFunc0618_0366:
	if (!(var0003 <= 0x6400)) goto labelFunc0618_0381;
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0x6400);
	abort;
labelFunc0618_0381:
	var0002 = UI_set_npc_prop(0xFE9C, 0x0008, 0xC800);
labelFunc0618_0391:
	return;
}


