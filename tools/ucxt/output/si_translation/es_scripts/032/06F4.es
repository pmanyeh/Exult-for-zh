#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func06F4 object#(0x6F4) ()
{
	var var0000;

	if (!gflags[0x0045]) goto labelFunc06F4_000B;
	UI_remove_item(item);
labelFunc06F4_000B:
	if (!gflags[0x00C0]) goto labelFunc06F4_0021;
	var0000 = Func0992(0x0001, "@Wait! A bottle!@", "@This bottle could be a clue...@", true);
labelFunc06F4_0021:
	return;
}


