#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func083A 0x83A (var var0000)
{
	var var0001;
	var var0002;
	var var0003;

	var0001 = Func09A0(0x0002, 0x0001);
	UI_show_npc_face0(0xFFD8, 0x0000);
	message("\"I'd advise ye ta hold fast an' keep a weather eye on that there horizon! We'll be runnin' afore the wind hard enough to splinter the mast as it is.\"");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0011);
	UI_set_item_flag(var0000, 0x001A);
	if (!(!UI_in_usecode(var0000))) goto labelFunc083A_0070;
	var0002 = [(byte)0x2C, (byte)0x32, (byte)0x21, (byte)0x0B, 0xFFFE, 0x0005, (byte)0x55, 0x07E4];
	var0003 = UI_execute_usecode_array(var0000, var0002);
	var0003 = UI_set_item_quality(var0001, 0x0000);
labelFunc083A_0070:
	return;
}


