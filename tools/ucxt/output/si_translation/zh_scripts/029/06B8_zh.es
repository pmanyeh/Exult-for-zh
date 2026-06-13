#game "serpentisle"
// externs
extern void Func08EE 0x8EE (var var0000);

void Func06B8 object#(0x6B8) ()
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

	if (!(!gflags[0x0004])) goto labelFunc06B8_0008;
	abort;
labelFunc06B8_0008:
	var0000 = UI_get_object_position(item);
	if (!(UI_get_item_quality(item) == 0x000D)) goto labelFunc06B8_00E6;
	var0001 = [0x0000, 0x0000, 0xFFFE, 0x0002, 0x0000];
	var0002 = [0x0002, 0xFFFE, 0x0000, 0x0000, 0x0000];
	var0003 = 0x0001;
	enum();
labelFunc06B8_004D:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc06B8_00B5;
	var0007 = UI_create_new_object(0x00E0);
	if (!var0007) goto labelFunc06B8_00A8;
	UI_set_item_frame(var0007, var0003);
	var0008 = UI_update_last_created([(var0000[0x0001] + var0006), (var0000[0x0002] + var0002[var0003]), var0000[0x0003]]);
	if (!(!var0008)) goto labelFunc06B8_00A8;
	UI_error_message(" failed to create a burn mark!");
	abort;
labelFunc06B8_00A8:
	var0003 = (var0003 + 0x0001);
	goto labelFunc06B8_004D;
labelFunc06B8_00B5:
	var0009 = UI_create_new_object(0x0339);
	if (!var0009) goto labelFunc06B8_00E6;
	var000A = UI_die_roll(0x0004, 0x0006);
	UI_set_item_frame(var0009, var000A);
	var0008 = UI_update_last_created(var0000);
labelFunc06B8_00E6:
	var0001 = [0x0003, 0x0003, 0x0003, 0x0003, 0x0003, 0x0003, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0002];
	var0002 = [0xFFFF, 0x0000, 0x0001, 0x0002, 0x0003, 0x0004, 0x0004, 0x0004, 0x0004, 0x0004, 0x0004, 0x0003, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF, 0xFFFF];
	var000B = UI_die_roll(0x0001, 0x0014);
	Func08EE([(var0000[0x0001] + var0001[var000B]), (var0000[0x0002] + var0002[var000B]), var0000[0x0003]]);
	UI_remove_item(item);
	return;
}


