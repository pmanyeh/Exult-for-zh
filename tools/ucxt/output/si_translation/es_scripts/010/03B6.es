#game "serpentisle"
// externs
extern void Func09BB 0x9BB (var var0000, var var0001);

void Func03B6 shape#(0x3B6) ()
{
	if (!(UI_get_item_quality(item) == 0x000A)) goto labelFunc03B6_001B;
	if (!(gflags[0x0174] || (gflags[0x0173] || gflags[0x0175]))) goto labelFunc03B6_001B;
	abort;
labelFunc03B6_001B:
	UI_close_gumps();
	Func09BB(item, event);
	return;
}


