#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func0875 0x875 (var var0000, var var0001)
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
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0002 = Func0920();
	var0003 = Func090F(var0002);
	var0004 = Func0908();
	if (!(var0003 == var0004)) goto labelFunc0875_0025;
	var0003 = "you";
labelFunc0875_0025:
	if (!(var0002 == 0x0000)) goto labelFunc0875_0032;
	goto labelFunc0875_01BA;
labelFunc0875_0032:
	var0005 = 0x0003;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc0875_005B;
	message("\"I am sorry, but thou dost not have enough practical experience to train at this time. If thou couldst return at a later date, I would be most happy to train thee.\"");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_005B:
	if (!(var0006 == 0x0001)) goto labelFunc0875_0093;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0007);
	message(" gold altogether.");
	say();
	if (!(var0007 < var0001)) goto labelFunc0875_0093;
	message("\"I regret that thou dost not seem to have enough gold to train here. Mayhaps at another time, when thy fortunes are more prosperous...\"");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_0093:
	if (!(var0006 == 0x0002)) goto labelFunc0875_00A4;
	message("\"Thou art already as proficient as I! I am afraid that thou cannot be trained further in this.\"");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_00A4:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0003 == "you")) goto labelFunc0875_00ED;
	var0009 = "complete";
	var000A = "feel";
	var000B = "your";
	var000C = "spend";
	var000D = "you";
	goto labelFunc0875_010B;
labelFunc0875_00ED:
	var0009 = "completes";
	var000A = "feels";
	var000B = "their";
	var000C = "spends";
	var000D = "them";
labelFunc0875_010B:
	message("Denby hands ");
	message(var0003);
	message(" a chart with runes printed on it. \"Study these runes and memorize them,\" he says. After ");
	message(var0003);
	message(" ");
	message(var0009);
	message(" this task, ");
	message(var0003);
	message(" ");
	message(var000A);
	message(" that there is a bit of knowledge in ");
	message(var000B);
	message(" mind that was not there earlier.~~\"Now we shall exercise. Practice what I teach thee at least twice a day. Then thou shalt become more agile and limber.\" ^");
	message(var0003);
	message(" ");
	message(var000C);
	message(" a while mimicking the movements which Denby shows ");
	message(var000D);
	message(". Finally, Denby teaches ");
	message(var000D);
	message(" a few magic words to intone for meditational purposes. When the training session is complete, ");
	message(var0003);
	message(" ");
	message(var000A);
	message(" much more energized and ready for anything that might come ");
	message(var000B);
	message(" way...*");
	say();
	var000E = Func0910(var0002, 0x0001);
	var000F = Func0910(var0002, 0x0002);
	var0010 = Func0910(var0002, 0x0006);
	if (!(var000E < 0x001E)) goto labelFunc0875_0194;
	Func0915(var0002, 0x0001);
labelFunc0875_0194:
	if (!(var000F < 0x001E)) goto labelFunc0875_01A7;
	Func0916(var0002, 0x0001);
labelFunc0875_01A7:
	if (!(var0010 < 0x001E)) goto labelFunc0875_01BA;
	Func0918(var0002, 0x0001);
labelFunc0875_01BA:
	return;
}


