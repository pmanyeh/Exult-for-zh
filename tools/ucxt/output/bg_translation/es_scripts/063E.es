#game "blackgate"
void Func063E object#(0x63E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc063E_00ED;
	var0000 = UI_set_last_created(0xFFE9);
	if (!var0000) goto labelFunc063E_0046;
	var0001 = UI_get_object_position(0xFE9C);
	var0001[0x0002] = (var0001[0x0002] - 0x0004);
	var0000 = UI_update_last_created(var0001);
	UI_set_item_frame(0xFFE9, 0x0010);
labelFunc063E_0046:
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x063E], 0x0001);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0002, 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0001, 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0000, 0x000F);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0003, 0x000F);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0004, 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0005, 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0006, 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0007, 0x0000);
	var0000 = UI_set_npc_prop(0xFE9C, 0x0008, 0x0000);
labelFunc063E_00ED:
	if (!(event == 0x0002)) goto labelFunc063E_0173;
	UI_show_npc_face(0xFFE9, 0x0000);
	message("Busted, you thieving scoundrel bastard! Perhaps the only thing more ridiculous than your pathetic attempt to destroy the black gate without paying proper dues is your inevitably embarassing explanation\tto the friend to whom you are, no doubt, showing this!");
	say();
	message("For the atrocious crime of cheating against the virtues of Britannia, I find you guilty.*");
	say();
	UI_play_sound_effect(0x000F);
	message("Judgement rendered.* Sentence selected:* Death.*");
	say();
	var0000 = UI_execute_usecode_array((byte)0x56, 0x0015);
	var0002 = UI_get_party_list();
	enum();
labelFunc063E_0126:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc063E_013E;
	UI_set_item_flag(var0005, 0x0007);
	goto labelFunc063E_0126;
labelFunc063E_013E:
	UI_set_weather(0x0002);
	UI_armageddon();
	gflags[0x001E] = true;
	UI_set_alignment(0xFFE9, 0x0002);
	UI_set_attack_mode(0xFFE9, 0x0000);
	UI_set_schedule_type(0xFFE9, 0x0000);
	UI_set_item_flag(item, 0x0019);
labelFunc063E_0173:
	return;
}


