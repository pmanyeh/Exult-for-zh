#game "serpentisle"
// externs
extern void Func0614 object#(0x614) ();

void Func0922 0x922 (var var0000)
{
	if (!(!UI_start_speech(var0000))) goto labelFunc0922_0014;
	0x0000->Func0614();
	goto labelFunc0922_0018;
labelFunc0922_0014:
	UI_close_gumps();
labelFunc0922_0018:
	return;
}


