#game "serpentisle"
// externs
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0700 object#(0x700) ()
{
	if (!(gflags[0x00EA] && (!gflags[0x00EB]))) goto labelFunc0700_003A;
	if (!UI_get_item_flag(0xFFE7, 0x0004)) goto labelFunc0700_001F;
	gflags[0x00EB] = true;
	goto labelFunc0700_003A;
labelFunc0700_001F:
	Func09AC(0xFFE7, 0xFFFF, 0x0000, 0x0003);
	Func097F(0xFFE7, "@Who doth approach?!@", 0x0003);
labelFunc0700_003A:
	return;
}


