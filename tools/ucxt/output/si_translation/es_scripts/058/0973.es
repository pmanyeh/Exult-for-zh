#game "serpentisle"
// externs
extern void Func0945 0x945 (var var0000);
extern void Func094A 0x94A (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0953 0x953 ();

void Func0973 0x973 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	Func0945(var0000);
	var0001 = UI_get_item_frame(var0000);
	if (!(var0001 == 0x0000)) goto labelFunc0973_0038;
	Func094A(["I wager that would work much better if thou wouldst put some liquid in it..."]);
	Func094E(0xFFFF, "Perhaps some BEER for instance.");
	Func094E(0xFFFE, "Or mayhaps some WINE....");
	goto labelFunc0973_00D0;
labelFunc0973_0038:
	UI_set_item_frame(var0000, 0x0000);
	var0002 = ["water", "blood", "wine", "beer", "ale", "stuff", "stuff", "stuff", "stuff", "stuff", "last stuff"];
	UI_play_sound_effect(0x0024);
	var0003 = UI_die_roll(0x0001, 0x000A);
	var0004 = var0002[var0001];
	var0005 = (("Zounds, I wager that " + var0004) + " was right good....");
	if (!(var0003 == 0x0001)) goto labelFunc0973_00A4;
	var0006 = "mmmm... I wager that would cure a body's thirst.";
labelFunc0973_00A4:
	if (!(var0003 == 0x0002)) goto labelFunc0973_00CA;
	var0007 = Func0953();
	var0005 = (((("Why dost thou not wait until dinner to drink that " + var0004) + ", ") + var0007) + "?");
labelFunc0973_00CA:
	Func094A(var0005);
labelFunc0973_00D0:
	return;
}


