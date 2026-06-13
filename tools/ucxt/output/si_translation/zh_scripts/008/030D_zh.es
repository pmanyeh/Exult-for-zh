#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);
extern var Func0910 0x910 (var var0000);

void Func030D shape#(0x30D) ()
{
	if (!(event == 0x0001)) goto labelFunc030D_0031;
	if (!gflags[0x01CB]) goto labelFunc030D_000F;
	abort;
labelFunc030D_000F:
	if (!UI_get_item_flag(item, 0x000A)) goto labelFunc030D_0023;
	Func094A("@The sails must be furled before the planks can be lowered.@");
	goto labelFunc030D_0031;
labelFunc030D_0023:
	if (!(!Func0910(item))) goto labelFunc030D_0031;
	Func094A("@I believe the gangplank is blocked.@");
labelFunc030D_0031:
	return;
}


