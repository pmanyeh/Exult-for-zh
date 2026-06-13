#game "serpentisle"
// externs
extern void Func00F9 shape#(0xF9) ();

void Func06C1 object#(0x6C1) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc06C1_0033;
	if (!(!gflags[0x0170])) goto labelFunc06C1_002F;
	var0000 = UI_game_hour();
	if (!((var0000 > 0x0006) && (var0000 < 0x0014))) goto labelFunc06C1_002C;
	item->Func00F9();
labelFunc06C1_002C:
	goto labelFunc06C1_0033;
labelFunc06C1_002F:
	item->Func00F9();
labelFunc06C1_0033:
	return;
}


