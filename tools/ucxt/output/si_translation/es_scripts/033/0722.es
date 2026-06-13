#game "serpentisle"
void Func0722 object#(0x722) ()
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

	if (!(event == 0x0002)) goto labelFunc0722_0270;
	var0000 = UI_get_item_quality(item);
	if (!((var0000 == 0x0096) || (var0000 == 0x0097))) goto labelFunc0722_0140;
	var0001 = [0x069B, 0x069B, 0x069B];
	var0002 = [0x00E7, 0x00DF, 0x00D7];
	var0003 = 0x0001;
	var0004 = UI_get_array_size(var0001);
labelFunc0722_0050:
	if (!(var0003 <= var0004)) goto labelFunc0722_00A4;
	var0005 = UI_create_new_object(0x018A);
	if (!var0005) goto labelFunc0722_0097;
	UI_set_item_frame(var0005, 0x0002);
	UI_set_item_flag(var0005, 0x0012);
	var0006 = UI_update_last_created([var0001[var0003], var0002[var0003], 0x0000]);
labelFunc0722_0097:
	var0003 = (var0003 + 0x0001);
	goto labelFunc0722_0050;
labelFunc0722_00A4:
	var0007 = [0x0693, 0x00E7, 0x0000];
	var0003 = 0x0000;
labelFunc0722_00B9:
	if (!(var0003 < 0x0008)) goto labelFunc0722_0140;
	var0008 = 0x0000;
labelFunc0722_00C9:
	if (!(var0008 > 0xFFE8)) goto labelFunc0722_0133;
	var0009 = UI_create_new_object(0x0121);
	if (!var0009) goto labelFunc0722_0126;
	UI_set_item_flag(var0009, 0x0012);
	UI_set_item_frame(var0009, UI_die_roll(0x0006, 0x000B));
	UI_play_sound_effect(0x0029);
	var0006 = UI_update_last_created([(var0007[0x0001] + var0003), (var0007[0x0002] + var0008), 0x0001]);
labelFunc0722_0126:
	var0008 = (var0008 - 0x0002);
	goto labelFunc0722_00C9;
labelFunc0722_0133:
	var0003 = (var0003 + 0x0002);
	goto labelFunc0722_00B9;
labelFunc0722_0140:
	if (!((var0000 == 0x0098) || (var0000 == 0x0099))) goto labelFunc0722_0270;
	var0001 = [0x068B, 0x068B, 0x068B];
	var0002 = [0x00C7, 0x00BF, 0x00B7];
	var0003 = 0x0001;
	var0004 = UI_get_array_size(var0001);
labelFunc0722_0180:
	if (!(var0003 <= var0004)) goto labelFunc0722_01D4;
	var0005 = UI_create_new_object(0x018A);
	if (!var0005) goto labelFunc0722_01C7;
	UI_set_item_frame(var0005, 0x0002);
	UI_set_item_flag(var0005, 0x0012);
	var0006 = UI_update_last_created([var0001[var0003], var0002[var0003], 0x0000]);
labelFunc0722_01C7:
	var0003 = (var0003 + 0x0001);
	goto labelFunc0722_0180;
labelFunc0722_01D4:
	var0007 = [0x0683, 0x00C7, 0x0000];
	var0003 = 0x0000;
labelFunc0722_01E9:
	if (!(var0003 < 0x0008)) goto labelFunc0722_0270;
	var0008 = 0x0000;
labelFunc0722_01F9:
	if (!(var0008 > 0xFFE8)) goto labelFunc0722_0263;
	var0009 = UI_create_new_object(0x0121);
	if (!var0009) goto labelFunc0722_0256;
	UI_set_item_flag(var0009, 0x0012);
	UI_play_sound_effect(0x0029);
	UI_set_item_frame(var0009, UI_die_roll(0x0000, 0x0005));
	var0006 = UI_update_last_created([(var0007[0x0001] + var0003), (var0007[0x0002] + var0008), 0x0001]);
labelFunc0722_0256:
	var0008 = (var0008 - 0x0002);
	goto labelFunc0722_01F9;
labelFunc0722_0263:
	var0003 = (var0003 + 0x0002);
	goto labelFunc0722_01E9;
labelFunc0722_0270:
	return;
}


