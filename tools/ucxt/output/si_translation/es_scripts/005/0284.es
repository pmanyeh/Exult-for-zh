#game "serpentisle"
// externs
extern var Func0983 0x983 (var var0000);
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0284 shape#(0x284) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0284_00A3;
	UI_close_gumps();
	UI_play_sound_effect2(0x001C, item);
	if (!(!(Func0983(0xFE9C) || (!Func0983(0xFFFD))))) goto labelFunc0284_0027;
	return;
labelFunc0284_0027:
	if (!Func0942(0xFFFD)) goto labelFunc0284_00A3;
	Func097F(0xFE9C, "@Call it.@", 0x0000);
	var0000 = UI_die_roll(0x0001, 0x0002);
	if (!(var0000 == 0x0001)) goto labelFunc0284_006E;
	Func097F(0xFFFD, "@Tails.@", 0x0010);
	Func097F(0xFE9C, "@'Tis heads.@", 0x0020);
	goto labelFunc0284_0086;
labelFunc0284_006E:
	Func097F(0xFFFD, "@Heads.@", 0x0010);
	Func097F(0xFE9C, "@'Tis tails.@", 0x0020);
labelFunc0284_0086:
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0001)) goto labelFunc0284_00A3;
	Func097F(0xFFFD, "@Again!@", 0x0030);
labelFunc0284_00A3:
	return;
}


