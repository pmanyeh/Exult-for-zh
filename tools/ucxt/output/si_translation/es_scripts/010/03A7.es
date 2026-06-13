#game "serpentisle"
void Func03A7 shape#(0x3A7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0002)) goto labelFunc03A7_0083;
	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	var0002 = UI_get_item_frame(item);
	if (!(var0002 <= 0x0004)) goto labelFunc03A7_0033;
	var0002 = 0x0000;
	goto labelFunc03A7_004C;
labelFunc03A7_0033:
	if (!(var0002 >= 0x000A)) goto labelFunc03A7_0046;
	var0002 = 0x0002;
	goto labelFunc03A7_004C;
labelFunc03A7_0046:
	var0002 = 0x0001;
labelFunc03A7_004C:
	UI_remove_item(item);
	var0003 = UI_create_new_object(0x03A7);
	if (!var0003) goto labelFunc03A7_0082;
	UI_set_item_frame(var0003, var0002);
	var0004 = UI_set_item_quality(var0003, var0001);
	var0004 = UI_update_last_created(var0000);
labelFunc03A7_0082:
	abort;
labelFunc03A7_0083:
	if (!(event == 0x0001)) goto labelFunc03A7_0093;
	UI_flash_mouse(0x0000);
	return;
labelFunc03A7_0093:
	return;
}


