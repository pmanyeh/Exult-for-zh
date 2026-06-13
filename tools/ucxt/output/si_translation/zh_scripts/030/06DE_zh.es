#game "serpentisle"
void Func06DE object#(0x6DE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc06DE_00D8;
	if (!(gflags[0x0004] && (!UI_is_dead(0xFEFA)))) goto labelFunc06DE_00D8;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = UI_create_new_object2(0x00F7, var0001);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_alignment(var0002, 0x0002);
	UI_set_oppressor(0xFE9C, var0002);
	var0003 = UI_die_roll(0x0000, 0x001E);
	var0004 = UI_add_cont_items(var0002, 0x0001, 0x019F, 0x0000, var0003, false);
	UI_sprite_effect(0x001E, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	if (!(var0000 > 0x0000)) goto labelFunc06DE_00D3;
	var0004 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06DE], 0x000F);
	var0000 = (var0000 - 0x0001);
	var0004 = UI_set_item_quality(item, var0000);
	goto labelFunc06DE_00D8;
labelFunc06DE_00D3:
	UI_remove_item(item);
labelFunc06DE_00D8:
	return;
}


