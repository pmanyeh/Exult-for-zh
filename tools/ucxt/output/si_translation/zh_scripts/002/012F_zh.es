#game "serpentisle"
void Func012F shape#(0x12F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0002)) goto labelFunc012F_00AA;
	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	var0002 = UI_get_item_frame(item);
	if (!(var0002 == 0x0000)) goto labelFunc012F_0033;
	var0002 = 0x0000;
	goto labelFunc012F_004C;
labelFunc012F_0033:
	if (!(var0002 == 0x0002)) goto labelFunc012F_0046;
	var0002 = 0x000A;
	goto labelFunc012F_004C;
labelFunc012F_0046:
	var0002 = 0x0005;
labelFunc012F_004C:
	UI_remove_item(item);
	var0003 = UI_create_new_object(0x012F);
	if (!var0003) goto labelFunc012F_00A9;
	UI_set_item_frame(var0003, var0002);
	var0004 = UI_set_item_quality(var0003, var0001);
	var0004 = UI_update_last_created(var0000);
	if (!var0004) goto labelFunc012F_00A9;
	var0005 = UI_execute_usecode_array(var0003, [(byte)0x4E, (byte)0x58, 0x0059, (byte)0x0B, 0xFFFD, 0x0003, (byte)0x58, 0x0058]);
labelFunc012F_00A9:
	abort;
labelFunc012F_00AA:
	if (!(event == 0x0001)) goto labelFunc012F_00BA;
	UI_flash_mouse(0x0000);
	return;
labelFunc012F_00BA:
	return;
}


