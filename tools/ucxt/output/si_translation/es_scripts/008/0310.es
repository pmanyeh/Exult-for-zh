#game "serpentisle"
// externs
extern void Func09B5 0x9B5 ();

void Func0310 shape#(0x310) ()
{
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc0310_0011;
	Func09B5();
labelFunc0310_0011:
	if (!(event == 0x0001)) goto labelFunc0310_002D;
	UI_si_path_run_usecode(0xFE9C, UI_get_object_position(item), 0x000D, item, 0x0310, true);
labelFunc0310_002D:
	return;
}


