#game "serpentisle"
void Func0802 0x802 ()
{
	gflags[0x01B3] = true;
	UI_revert_schedule(0xFFD2);
	UI_run_schedule(0xFFD2);
	return;
}


