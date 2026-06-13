#game "serpentisle"
void Func09B8 0x9B8 ()
{
	if (!(!gflags[0x00D5])) goto labelFunc09B8_002E;
	UI_move_object(0xFEFA, [0x0995, 0x006E, 0x0002]);
	UI_set_alignment(0xFEFA, 0x0000);
	UI_set_schedule_type(0xFEFA, 0x0010);
labelFunc09B8_002E:
	if (!(!gflags[0x00D3])) goto labelFunc09B8_005C;
	UI_move_object(0xFEF9, [0x0999, 0x0075, 0x0001]);
	UI_set_alignment(0xFEF9, 0x0000);
	UI_set_schedule_type(0xFEF9, 0x0010);
labelFunc09B8_005C:
	if (!(!gflags[0x00D4])) goto labelFunc09B8_008A;
	UI_move_object(0xFEF8, [0x0999, 0x0069, 0x0001]);
	UI_set_alignment(0xFEF8, 0x0000);
	UI_set_schedule_type(0xFEF8, 0x0010);
labelFunc09B8_008A:
	return;
}


