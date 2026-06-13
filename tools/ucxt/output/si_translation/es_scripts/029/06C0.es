#game "serpentisle"
void Func06C0 object#(0x6C0) ()
{
	var var0000;
	var var0001;

	if (!gflags[0x0004]) goto labelFunc06C0_000C;
	UI_remove_item(item);
	abort;
labelFunc06C0_000C:
	var0000 = UI_part_of_day();
	if (!((event == 0x0003) && ((var0000 > 0x0001) && (var0000 < 0x0006)))) goto labelFunc06C0_019E;
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x54, 0x001A], 0x0005);
	if (!(!UI_is_dead(0xFFC8))) goto labelFunc06C0_0095;
	UI_move_object(0xFFC8, [0x0498, 0x0765, 0x0000]);
	UI_set_item_frame(0xFFC8, 0x0010);
	UI_set_schedule_type(0xFFC8, 0x000B);
	var0001 = UI_execute_usecode_array(0xFFC8, [(byte)0x23, (byte)0x27, 0x0018, (byte)0x52, "@Go in Unity!@", (byte)0x27, 0x0030, (byte)0x52, "@Come again@"]);
labelFunc06C0_0095:
	if (!(!UI_is_dead(0xFFC7))) goto labelFunc06C0_00D6;
	UI_move_object(0xFFC7, [0x0493, 0x076A, 0x0000]);
	UI_set_schedule_type(0xFFC7, 0x000B);
	var0001 = UI_execute_usecode_array(0xFFC7, [(byte)0x23, (byte)0x27, 0x0010, (byte)0x52, "@Very uplifting...@"]);
labelFunc06C0_00D6:
	if (!(!UI_is_dead(0xFFC5))) goto labelFunc06C0_0117;
	UI_move_object(0xFFC5, [0x0496, 0x076B, 0x0000]);
	UI_set_schedule_type(0xFFC5, 0x000B);
	var0001 = UI_execute_usecode_array(0xFFC5, [(byte)0x23, (byte)0x27, 0x0020, (byte)0x52, "@The Fellowship is the way...@"]);
labelFunc06C0_0117:
	if (!(!UI_is_dead(0xFFC4))) goto labelFunc06C0_0158;
	UI_move_object(0xFFC4, [0x049B, 0x0769, 0x0000]);
	UI_set_schedule_type(0xFFC4, 0x000B);
	var0001 = UI_execute_usecode_array(0xFFCA, [(byte)0x23, (byte)0x27, 0x0040, (byte)0x52, "@Good sermon, Leon...@"]);
labelFunc06C0_0158:
	if (!(!UI_is_dead(0xFFD2))) goto labelFunc06C0_0199;
	UI_move_object(0xFFD2, [0x049C, 0x076F, 0x0000]);
	UI_set_schedule_type(0xFFD2, 0x000B);
	var0001 = UI_execute_usecode_array(0xFFD2, [(byte)0x23, (byte)0x27, 0x0030, (byte)0x52, "@His words are truth!@"]);
labelFunc06C0_0199:
	UI_remove_item(item);
labelFunc06C0_019E:
	return;
}


