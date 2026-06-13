#game "serpentisle"
// externs
extern void Func08EE 0x8EE (var var0000);

void Func06B7 object#(0x6B7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(!gflags[0x0004])) goto labelFunc06B7_0008;
	abort;
labelFunc06B7_0008:
	var0000 = UI_get_object_position(item);
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0064)) goto labelFunc06B7_0030;
	var0001 = (0x0000 - (var0001 - 0x0064));
labelFunc06B7_0030:
	var0002 = UI_get_item_quantity(item, 0x0000);
	if (!(var0002 > 0x0064)) goto labelFunc06B7_0053;
	var0002 = (0x0000 - (var0002 - 0x0064));
labelFunc06B7_0053:
	var0003 = (var0001 / 0x0004);
	var0004 = (var0002 / 0x0004);
	var0005 = 0x0000;
labelFunc06B7_006D:
	if (!(var0005 < 0x0004)) goto labelFunc06B7_00E2;
	var0006 = UI_create_new_object(0x0390);
	if (!var0006) goto labelFunc06B7_00C1;
	UI_set_item_frame(var0006, var0005);
	var0007 = UI_update_last_created([(var0000[0x0001] + var0001), (var0000[0x0002] + var0002), 0x0000]);
	if (!(!var0007)) goto labelFunc06B7_00C1;
	UI_error_message(" failed to create blood");
	abort;
labelFunc06B7_00C1:
	var0001 = (var0001 - var0003);
	var0002 = (var0002 - var0004);
	var0005 = (var0005 + 0x0001);
	goto labelFunc06B7_006D;
labelFunc06B7_00E2:
	Func08EE(var0000);
	UI_remove_item(item);
	return;
}


