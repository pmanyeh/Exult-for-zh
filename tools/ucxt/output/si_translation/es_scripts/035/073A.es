#game "serpentisle"
void Func073A object#(0x73A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc073A_0260;
	var0000 = UI_get_object_position(item);
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc073A_0054;
	UI_move_object(0xFFD4, [0x0924, 0x01CF, 0x0000]);
	UI_set_npc_id(0xFFD4, 0x0001);
	UI_sprite_effect(0x0007, 0x0924, 0x01CF, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc073A_0054:
	UI_set_schedule_type(0xFFD4, 0x0000);
	UI_set_alignment(0xFFD4, 0x0002);
	UI_set_opponent(0xFFD4, 0xFE9C);
	UI_set_attack_mode(0xFFD4, 0x0002);
	UI_set_oppressor(0xFFD4, 0xFE9C);
	UI_set_item_flag(0xFFD4, 0x001D);
	gflags[0x024E] = true;
	UI_item_say(0xFFD4, "@This should stop thee!@");
	var0001 = UI_create_new_object(0x0300);
	if (!var0001) goto labelFunc073A_00C1;
	var0002 = UI_update_last_created([0x0928, 0x01DE, 0x0000]);
labelFunc073A_00C1:
	var0003 = 0x0915;
	var0004 = 0x01C9;
labelFunc073A_00CD:
	if (!(var0003 < 0x093F)) goto labelFunc073A_0107;
	var0001 = UI_create_new_object(0x0300);
	if (!var0001) goto labelFunc073A_00FA;
	var0002 = UI_update_last_created([var0003, var0004, 0x0000]);
labelFunc073A_00FA:
	var0003 = (var0003 + 0x0003);
	goto labelFunc073A_00CD;
labelFunc073A_0107:
	UI_move_object(0xFEF0, [0x0926, 0x01CF, 0x0000]);
	UI_sprite_effect(0x0007, 0x0926, 0x01CF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFEF0, 0x0000);
	UI_set_alignment(0xFEF0, 0x0002);
	UI_set_opponent(0xFEF0, 0xFE9C);
	UI_set_attack_mode(0xFEF0, 0x0002);
	UI_set_oppressor(0xFEF0, 0xFE9C);
	UI_clear_item_flag(0xFEF0, 0x001D);
	UI_move_object(0xFF80, [0x0928, 0x01CF, 0x0000]);
	UI_sprite_effect(0x0007, 0x0928, 0x01CF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFF80, 0x0000);
	UI_set_alignment(0xFF80, 0x0002);
	UI_set_opponent(0xFF80, 0xFE9C);
	UI_set_attack_mode(0xFF80, 0x0002);
	UI_set_oppressor(0xFF80, 0xFE9C);
	UI_clear_item_flag(0xFF80, 0x001D);
	UI_move_object(0xFF81, [0x092A, 0x01CF, 0x0000]);
	UI_sprite_effect(0x0007, 0x092A, 0x01CF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFF81, 0x0000);
	UI_set_alignment(0xFF81, 0x0002);
	UI_set_opponent(0xFF81, 0xFE9C);
	UI_set_attack_mode(0xFF81, 0x0002);
	UI_set_oppressor(0xFF81, 0xFE9C);
	UI_clear_item_flag(0xFF81, 0x001D);
	var0005 = UI_get_npc_object(0xFFD4);
	var0002 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x042C], 0x0019);
labelFunc073A_0260:
	return;
}


