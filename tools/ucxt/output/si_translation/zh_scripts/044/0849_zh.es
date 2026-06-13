#game "serpentisle"
void Func0849 0x849 ()
{
	var var0000;

	if (!(!(gflags[0x00B1] || (gflags[0x00AF] || gflags[0x00B0])))) goto labelFunc0849_0010;
	return;
labelFunc0849_0010:
	message("\"That is it, goat! Meet me at the List Field! There I shall ram thy words down thy throat!\"");
	say();
	if (!gflags[0x0043]) goto labelFunc0849_001B;
	return;
labelFunc0849_001B:
	UI_set_new_schedules(0xFFB9, [0x0006, 0x0000], [0x000E, 0x001B], [0x0388, 0x0A46, 0x03DA, 0x0A86]);
	gflags[0x0043] = true;
	var0000 = UI_set_npc_prop(0xFFB9, 0x0000, 0xFFEE);
	var0000 = UI_set_npc_prop(0xFFB9, 0x0004, 0xFFF7);
	var0000 = UI_set_npc_prop(0xFFB9, 0x0001, 0xFFF8);
	return;
}


