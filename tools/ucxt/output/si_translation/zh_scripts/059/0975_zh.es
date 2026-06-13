#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func094A 0x94A (var var0000);
extern void Func0948 0x948 (var var0000);

void Func0975 0x975 ()
{
	var var0000;
	var var0001;

	var0000 = Func0953();
	var0001 = UI_die_roll(0x0001, 0x0003);
	if (!(var0001 == 0x0001)) goto labelFunc0975_002C;
	Func094A(["Thou mayest have more success if thou wert to put that in", "thine hand and hit someone with it... Someone else, that is."]);
	goto labelFunc0975_0032;
labelFunc0975_002C:
	Func0948(0x0000);
labelFunc0975_0032:
	return;
}


