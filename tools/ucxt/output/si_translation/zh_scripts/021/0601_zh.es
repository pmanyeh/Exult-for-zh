#game "serpentisle"
// externs
extern void Func089F 0x89F ();
extern void Func089E 0x89E ();

void Func0601 object#(0x601) ()
{
	var var0000;

	if (!(event == 0x0002)) goto labelFunc0601_003D;
	if (!UI_in_gump_mode()) goto labelFunc0601_0013;
	UI_close_gumps();
labelFunc0601_0013:
	var0000 = UI_get_barge(0xFE9C);
	var0000 = UI_get_object_position(var0000);
	if (!(var0000[0x0003] > 0x0001)) goto labelFunc0601_003A;
	Func089F();
	goto labelFunc0601_003D;
labelFunc0601_003A:
	Func089E();
labelFunc0601_003D:
	return;
}


