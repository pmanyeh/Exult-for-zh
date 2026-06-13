#game "blackgate"
// externs
extern void Func08FA 0x8FA (var var0000);
extern void Func08FF 0x8FF (var var0000);
extern void Func0903 0x903 (var var0000, var var0001);
extern var Func0908 0x908 ();

void Func0928 0x928 (var var0000)
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

	Func08FA(var0000);
	var0001 = (UI_get_item_frame(var0000) % 0x0002);
	if (!(var0001 == 0x0000)) goto labelFunc0928_003C;
	Func08FF(["I bet that would work much better if thou wouldst put some liquid in it..."]);
	Func0903(0xFFFC, "Perhaps some BEER for instance.");
	Func0903(0xFFFD, "Or maybe some WINE>>>");
	goto labelFunc0928_010B;
labelFunc0928_003C:
	var0002 = ["water", "blood", "wine", "beer", "ale", "stuff", "stuff", "stuff", "stuff", "stuff", "laststuff"];
	var0003 = 0x0000;
	var0004 = UI_get_item_quality(item);
	enum();
labelFunc0928_0072:
	for (var0007 in var0002 with var0005 to var0006) attend labelFunc0928_00A2;
	var0003 = (var0003 + 0x0001);
	if (!(var0004 == var0003)) goto labelFunc0928_009F;
	var0008 = (("Gee, I bet that " + var0007) + " was pretty good....");
labelFunc0928_009F:
	goto labelFunc0928_0072;
labelFunc0928_00A2:
	UI_play_sound_effect(0x005A);
	var0009 = UI_die_roll(0x0001, 0x000A);
	if (!(var0009 == 0x0001)) goto labelFunc0928_00C6;
	Func08FF("mmmm... I bet that would sure wet a body's whistle.");
labelFunc0928_00C6:
	if (!(var0009 == 0x0002)) goto labelFunc0928_00FB;
	var000A = var0002[var0001];
	var000B = Func0908();
	var0008 = (((("Why dost thou not wait until dinner to drink that " + var000A) + ", ") + var000B) + ".");
	Func08FF(var0008);
labelFunc0928_00FB:
	if (!(var0009 > 0x0002)) goto labelFunc0928_010B;
	Func08FF(var0008);
labelFunc0928_010B:
	return;
}


