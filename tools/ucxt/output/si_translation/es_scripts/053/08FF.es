#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func08FF 0x8FF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!gflags[0x0146]) goto labelFunc08FF_0007;
	abort;
labelFunc08FF_0007:
	if (!gflags[0x00D9]) goto labelFunc08FF_001B;
	UI_set_schedule_type(0xFFEE, 0x0004);
	gflags[0x0146] = true;
labelFunc08FF_001B:
	if (!gflags[0x00D7]) goto labelFunc08FF_0022;
	abort;
labelFunc08FF_0022:
	var0000 = (((((((((((((((UI_get_item_flag(0xFFEA, 0x001C) + UI_get_item_flag(0xFFE6, 0x001C)) + UI_get_item_flag(0xFFEF, 0x001C)) + UI_get_item_flag(0xFFDF, 0x001C)) + UI_get_item_flag(0xFFF2, 0x001C)) + UI_get_item_flag(0xFFE8, 0x001C)) + UI_get_item_flag(0xFFF1, 0x001C)) + UI_get_item_flag(0xFFE0, 0x001C)) + UI_get_item_flag(0xFFE9, 0x001C)) + UI_get_item_flag(0xFFE2, 0x001C)) + UI_get_item_flag(0xFFE4, 0x001C)) + UI_get_item_flag(0xFFF3, 0x001C)) + UI_get_item_flag(0xFFE5, 0x001C)) + UI_get_item_flag(0xFFFC, 0x001C)) + UI_get_item_flag(0xFFED, 0x001C)) + gflags[0x00D6]);
	if (!((var0000 >= 0x0003) && (!gflags[0x00D7]))) goto labelFunc08FF_0120;
	var0001 = UI_approach_avatar(0xFFE7, 0x005A, 0x0028);
	if (!var0001) goto labelFunc08FF_0120;
	UI_set_schedule_type(0xFFE7, 0x0003);
	var0002 = UI_get_object_position(0xFE9C);
	var0003 = Func0954();
	Func097F(0xFFE7, (("@One moment, " + var0003) + " .@"), 0x0002);
labelFunc08FF_0120:
	return;
}


