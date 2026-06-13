#game "serpentisle"
void Func07E5 object#(0x7E5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0000 = UI_die_roll(0x0001, 0x0003);
	if (!(var0000 == 0x0001)) goto labelFunc07E5_0084;
	var0001 = [0x0000, 0x0003, 0x000C, 0x0028, 0x002B];
	var0002 = UI_die_roll(0x0001, UI_get_array_size(var0001));
	var0003 = var0001[var0002];
	var0004 = (0x0004 * UI_die_roll(0xFFF1, 0x000F));
	var0005 = (0x0004 * UI_die_roll(0xFFF1, 0x000F));
	UI_obj_sprite_effect(0xFE9C, var0003, var0004, var0005, 0x0000, 0x0001, 0x0000, 0xFFFF);
labelFunc07E5_0084:
	if (!(var0000 == 0x0002)) goto labelFunc07E5_00BB;
	var0006 = [0x0009, 0x000F, 0x0030, 0x004C, 0x006D];
	var0007 = UI_die_roll(0x0001, UI_get_array_size(var0006));
	UI_play_sound_effect(var0007);
labelFunc07E5_00BB:
	if (!(var0000 == 0x0003)) goto labelFunc07E5_0127;
	var0008 = ["@Oh!@", "@Whee!@", "@Ouch!@", "@Whoa!@"];
	var0009 = UI_die_roll(0x0001, UI_get_array_size(var0008));
	var000A = var0008[var0009];
	var000B = [0xFFD5, 0xFFDB, 0xFFD8, 0xFFD6];
	var000C = UI_die_roll(0x0001, UI_get_array_size(var000B));
	var000D = var000B[var000C];
	UI_item_say(var000D, var000A);
labelFunc07E5_0127:
	return;
}


