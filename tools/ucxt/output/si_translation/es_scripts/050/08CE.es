#game "serpentisle"
void Func08CE 0x8CE ()
{
	var var0000;
	var var0001;
	var var0002;

	UI_set_schedule_type(0xFF27, 0x000F);
	var0000 = [0x0A18, 0x054F, 0x0001];
	UI_move_object(0xFF27, var0000);
	var0001 = UI_execute_usecode_array(0xFF27, [(byte)0x59, 0x0006, (byte)0x01, (byte)0x6E]);
	var0002 = UI_find_nearby(item, 0x0375, 0x0019, 0x0000);
	if (!var0002) goto labelFunc08CE_005A;
	UI_set_item_flag(var0002, 0x001D);
labelFunc08CE_005A:
	UI_remove_item(item);
	return;
}


