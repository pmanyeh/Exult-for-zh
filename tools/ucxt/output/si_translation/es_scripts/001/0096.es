#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern var Func0910 0x910 (var var0000);

void Func0096 shape#(0x96) ()
{
	if (!(event == 0x0001)) goto labelFunc0096_003F;
	if (!gflags[0x01CB]) goto labelFunc0096_000F;
	abort;
labelFunc0096_000F:
	if (!UI_get_item_flag(item, 0x000A)) goto labelFunc0096_0023;
	Func094A("@The sails must be furled before the planks are raised.@");
	goto labelFunc0096_003F;
labelFunc0096_0023:
	if (!(!Func0910(item))) goto labelFunc0096_0034;
	Func094A("@I believe the gangplank is blocked.@");
	goto labelFunc0096_003F;
labelFunc0096_0034:
	if (!UI_in_gump_mode()) goto labelFunc0096_003F;
	UI_close_gumps();
labelFunc0096_003F:
	return;
}


