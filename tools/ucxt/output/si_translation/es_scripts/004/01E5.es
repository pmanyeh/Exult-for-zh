#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func01E5 shape#(0x1E5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc01E5_00B3;
	var0000 = [0x020A, 0x0320, 0x010E, 0x01B0, 0x0178, 0x01B1, 0x0204, 0x00F6, 0x00E1, 0x01D7];
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 in var0000)) goto labelFunc01E5_00B3;
	var0003 = UI_get_item_quality(var0001);
	if (!UI_is_on_keyring(var0003)) goto labelFunc01E5_007D;
	var0004 = UI_set_item_quality(item, var0003);
	var0004 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x55, 0x0281]);
	goto labelFunc01E5_00B3;
labelFunc01E5_007D:
	UI_flash_mouse(0x0000);
	var0005 = ["@We don't have that key.@", "@It's not on the keyring.@"];
	var0006 = UI_die_roll(0x0001, 0x0002);
	var0007 = Func0992(0x0001, var0005[var0006], var0005[var0006], true);
labelFunc01E5_00B3:
	return;
}


