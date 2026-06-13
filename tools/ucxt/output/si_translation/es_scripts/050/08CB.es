#game "serpentisle"
void Func08CB 0x8CB ()
{
	var var0000;
	var var0001;

	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	UI_set_item_flag(0xFF5B, 0x001D);
	UI_set_item_flag(0xFF5D, 0x001D);
	UI_set_item_flag(0xFF57, 0x001D);
	UI_set_schedule_type(0xFF57, 0x000F);
	var0000 = UI_find_nearest(item, 0x02EB, 0x0014);
	if (!var0000) goto labelFunc08CB_006D;
	UI_item_say(var0000, "@Good morning.@");
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x27, 0x000C, (byte)0x55, 0x04A0]);
labelFunc08CB_006D:
	return;
}


