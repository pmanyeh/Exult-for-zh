#game "serpentisle"
void Func0764 object#(0x764) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = [0x038B, 0x0B4F, 0x0000];
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0798]);
	var0001 = UI_create_new_object(0x00CA);
	if (!var0001) goto labelFunc0764_004F;
	var0002 = UI_update_last_created(var0000);
	UI_set_item_frame(var0001, 0x0004);
	UI_clear_item_flag(var0001, 0x0012);
labelFunc0764_004F:
	return;
}


