#game "serpentisle"
void Func04D9 object#(0x4D9) ()
{
	var var0000;
	var var0001;

	UI_clear_item_say(0xFF27);
	var0000 = UI_direction_from(0xFF27, 0xFE9C);
	var0001 = UI_execute_usecode_array(0xFF27, [(byte)0x62, (byte)0x59, var0000, (byte)0x27, 0x0002, (byte)0x52, "@Lead me to my nightmare.@", (byte)0x27, 0x000F, (byte)0x52, "@I beg of thee...@"]);
	UI_set_alignment(0xFF27, 0x0000);
	UI_set_schedule_type(0xFF27, 0x0009);
	return;
}


