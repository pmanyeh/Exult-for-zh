#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);

void Func089F 0x89F (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;

	var0002 = Func0920();
	var0003 = Func090F(var0002);
	var0004 = Func0908();
	if (!(var0003 == var0004)) goto labelFunc089F_0025;
	var0003 = "you";
labelFunc089F_0025:
	if (!(var0002 == 0x0000)) goto labelFunc089F_0032;
	goto labelFunc089F_0110;
labelFunc089F_0032:
	var0005 = 0x0002;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc089F_005B;
	message("Jakher looks into your eyes, sizing you up intellectually. \"Thou dost need to learn more on the field of battle. If we spoke now I would be wasting my breath. Thou wouldst not understand a word I said.\"");
	say();
	goto labelFunc089F_0110;
labelFunc089F_005B:
	if (!(var0006 == 0x0001)) goto labelFunc089F_0093;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0007);
	message(" gold altogether.");
	say();
	if (!(var0007 < var0001)) goto labelFunc089F_0093;
	message("\"Thou dost not seem to have as much gold as I require to train here. Mayhaps at another time, when thy fortunes are more prosperous...\"");
	say();
	goto labelFunc089F_0110;
labelFunc089F_0093:
	if (!(var0006 == 0x0002)) goto labelFunc089F_00A4;
	message("\"Thou art already well-versed in the tactics of the battlefield. I am afraid that I am unable to train thee further in this.\"");
	say();
	goto labelFunc089F_0110;
labelFunc089F_00A4:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	message("Jakher's eyes glow bright as he begins to explain some of the strategies used by great military leaders in awesome battles fought in ages past. He whispers to ");
	message(var0003);
	message(" conspiratorially as he draws maps in the dirt. After some time, ");
	message(var0003);
	message(" can practically feel some of his shrewdness starting to be absorbed.");
	say();
	var0009 = Func0910(var0002, 0x0002);
	var000A = Func0910(var0002, 0x0000);
	if (!(var0009 < 0x001E)) goto labelFunc089F_00FD;
	Func0916(var0002, 0x0001);
labelFunc089F_00FD:
	if (!(var000A < 0x001E)) goto labelFunc089F_0110;
	Func0914(var0002, 0x0001);
labelFunc089F_0110:
	message("\"I look forward to thy return.\"");
	say();
	return;
}


