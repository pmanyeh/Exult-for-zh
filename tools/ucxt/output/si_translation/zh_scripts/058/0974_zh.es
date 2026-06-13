#game "serpentisle"
// externs
extern void Func0945 0x945 (var var0000);
extern void Func094A 0x94A (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0953 0x953 ();

void Func0974 0x974 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	Func0945(var0000);
	var0001 = (UI_get_item_frame(var0000) % 0x0002);
	if (!(var0001 == 0x0000)) goto labelFunc0974_003C;
	Func094A(["I wager that would work much better if thou wouldst put some liquid in it..."]);
	Func094E(0xFFFF, "Perhaps some BEER for instance.");
	Func094E(0xFFFE, "Or mayhaps some WINE....");
	goto labelFunc0974_010D;
labelFunc0974_003C:
	var0002 = ["water", "blood", "wine", "beer", "ale", "stuff", "stuff", "stuff", "stuff", "stuff", "laststuff"];
	var0003 = 0x0000;
	var0004 = UI_get_item_quality(var0000);
	enum();
labelFunc0974_0074:
	for (var0007 in var0002 with var0005 to var0006) attend labelFunc0974_00A4;
	var0003 = (var0003 + 0x0001);
	if (!(var0004 == var0003)) goto labelFunc0974_00A1;
	var0008 = (("Zounds, I wager that " + var0007) + " was right good....");
labelFunc0974_00A1:
	goto labelFunc0974_0074;
labelFunc0974_00A4:
	UI_play_sound_effect(0x0024);
	var0009 = UI_die_roll(0x0001, 0x000A);
	if (!(var0009 == 0x0001)) goto labelFunc0974_00C8;
	Func094A("mmmm... I wager that would cure a body's thirst.");
labelFunc0974_00C8:
	if (!(var0009 == 0x0002)) goto labelFunc0974_00FD;
	var000A = var0002[var0001];
	var000B = Func0953();
	var0008 = (((("Why dost thou not wait until dinner to drink that " + var000A) + ", ") + var000B) + "?");
	Func094A(var0008);
labelFunc0974_00FD:
	if (!(var0009 > 0x0002)) goto labelFunc0974_010D;
	Func094A(var0008);
labelFunc0974_010D:
	return;
}


