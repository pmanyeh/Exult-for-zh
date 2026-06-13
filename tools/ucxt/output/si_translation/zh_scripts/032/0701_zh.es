#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);

void Func0701 object#(0x701) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0002)) goto labelFunc0701_000E;
	Func0922(0x0003);
labelFunc0701_000E:
	if (!(event == 0x0003)) goto labelFunc0701_0113;
	if (!(!gflags[0x0004])) goto labelFunc0701_001E;
	abort;
labelFunc0701_001E:
	var0000 = UI_create_new_object(0x0392);
	UI_set_item_frame(var0000, 0x0000);
	var0001 = UI_set_item_quality(var0000, 0x0049);
	if (!UI_is_not_blocked([0x0333, 0x0A2E, 0x0001], 0x0392, 0x0000)) goto labelFunc0701_006E;
	var0001 = UI_update_last_created([0x0333, 0x0A2E, 0x0001]);
	goto labelFunc0701_010E;
labelFunc0701_006E:
	if (!UI_is_not_blocked([0x032D, 0x0A2F, 0x0002], 0x0392, 0x0000)) goto labelFunc0701_009D;
	var0001 = UI_update_last_created([0x032D, 0x0A2F, 0x0002]);
	goto labelFunc0701_010E;
labelFunc0701_009D:
	if (!UI_is_not_blocked([0x032B, 0x0A2F, 0x0002], 0x0392, 0x0000)) goto labelFunc0701_00CC;
	var0001 = UI_update_last_created([0x032B, 0x0A2F, 0x0002]);
	goto labelFunc0701_010E;
labelFunc0701_00CC:
	if (!UI_is_not_blocked([0x0339, 0x0A2F, 0x0002], 0x0392, 0x0000)) goto labelFunc0701_00FB;
	var0001 = UI_update_last_created([0x0339, 0x0A2F, 0x0002]);
	goto labelFunc0701_010E;
labelFunc0701_00FB:
	var0001 = UI_update_last_created([0x032D, 0x0A32, 0x0000]);
labelFunc0701_010E:
	UI_remove_item(item);
labelFunc0701_0113:
	return;
}


