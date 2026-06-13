#game "blackgate"
// externs
extern var Func0937 0x937 (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func0284 shape#(0x284) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0284_00A3;
	UI_close_gumps();
	UI_play_sound_effect2(0x0017, item);
	if (!(!(Func0937(0xFE9C) || (!Func0937(0xFFFF))))) goto labelFunc0284_0027;
	return;
labelFunc0284_0027:
	if (!Func08F7(0xFFFF)) goto labelFunc0284_00A3;
	Func0933(0xFE9C, "@Call it.@", 0x0000);
	var0000 = UI_die_roll(0x0001, 0x0002);
	if (!(var0000 == 0x0001)) goto labelFunc0284_006E;
	Func0933(0xFFFF, "@Tails.@", 0x0010);
	Func0933(0xFE9C, "@It is heads.@", 0x0020);
	goto labelFunc0284_0086;
labelFunc0284_006E:
	Func0933(0xFFFF, "@Heads.@", 0x0010);
	Func0933(0xFE9C, "@It is tails.@", 0x0020);
labelFunc0284_0086:
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0001)) goto labelFunc0284_00A3;
	Func0933(0xFFFF, "@Again!@", 0x0030);
labelFunc0284_00A3:
	return;
}


