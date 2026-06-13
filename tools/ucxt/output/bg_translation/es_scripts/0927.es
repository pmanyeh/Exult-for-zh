#game "blackgate"
// externs
extern void Func08FA 0x8FA (var var0000);
extern void Func08FF 0x8FF (var var0000);
extern void Func0903 0x903 (var var0000, var var0001);
extern var Func0908 0x908 ();

void Func0927 0x927 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	Func08FA(var0000);
	var0001 = UI_get_item_frame(var0000);
	if (!(var0001 == 0x0000)) goto labelFunc0927_0038;
	Func08FF(["I bet that would work much better if thou wouldst put some liquid in it..."]);
	Func0903(0xFFFC, "Perhaps some BEER for instance.");
	Func0903(0xFFFD, "Or maybe some WINE>>>");
	goto labelFunc0927_00D0;
labelFunc0927_0038:
	UI_set_item_frame(var0000, 0x0000);
	var0002 = ["water", "blood", "wine", "beer", "ale", "stuff", "stuff", "stuff", "stuff", "stuff", "last stuff"];
	UI_play_sound_effect(0x005A);
	var0003 = UI_die_roll(0x0001, 0x000A);
	var0004 = var0002[var0001];
	var0005 = (("Gee, I bet that " + var0004) + " was pretty good....");
	if (!(var0003 == 0x0001)) goto labelFunc0927_00A4;
	var0006 = "mmmm... I bet that would sure wet a body's whistle.";
labelFunc0927_00A4:
	if (!(var0003 == 0x0002)) goto labelFunc0927_00CA;
	var0007 = Func0908();
	var0005 = (((("Why dost thou not wait until dinner to drink that " + var0004) + ", ") + var0007) + ".");
labelFunc0927_00CA:
	Func08FF(var0005);
labelFunc0927_00D0:
	return;
}


