#game "blackgate"
void Func03DB shape#(0x3DB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc03DB_00C9;
	UI_close_gumps();
	var0000 = [(byte)0x46, 0x0000, (byte)0x46, 0x0001, (byte)0x46, 0x0002, (byte)0x58, 0x0011, (byte)0x46, 0x0002, (byte)0x46, 0x0001, (byte)0x46, 0x0000, (byte)0x46, 0x0003, (byte)0x46, 0x0004, (byte)0x58, 0x0011, (byte)0x46, 0x0004, (byte)0x46, 0x0003, (byte)0x46, 0x0000];
	var0001 = UI_execute_usecode_array(item, (var0000 & [(byte)0x0B, 0xFFE6, 0x0002]));
	if (!(UI_die_roll(0x0001, 0x000A) == 0x0001)) goto labelFunc03DB_00C9;
	var0002 = UI_get_object_position(item);
	UI_set_item_shape(item, 0x03E0);
	var0003 = UI_create_new_object(0x02DA);
	UI_set_item_flag(var0003, 0x0012);
	UI_set_item_flag(var0003, 0x000B);
	if (!var0003) goto labelFunc03DB_00C9;
	var0001 = UI_update_last_created(var0002);
	if (!var0001) goto labelFunc03DB_00C9;
	UI_item_say(var0003, "@Whaaahh!!@");
labelFunc03DB_00C9:
	return;
}


