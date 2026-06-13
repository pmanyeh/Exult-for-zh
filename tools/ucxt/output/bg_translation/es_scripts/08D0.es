#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08D0 0x8D0 (var var0000, var var0001)
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

	var0002 = Func0920();
	var0003 = Func090F(var0002);
	var0004 = "feels";
	var0005 = Func0908();
	if (!(var0003 == var0005)) goto labelFunc08D0_003A;
	var0003 = "you";
	var0006 = "you";
	var0004 = "feel";
	goto labelFunc08D0_0063;
labelFunc08D0_003A:
	if (!((var0002 == 0xFFF8) || ((var0002 == 0xFFFB) || (var0002 == 0xFFF7)))) goto labelFunc08D0_005D;
	var0006 = "her";
	goto labelFunc08D0_0063;
labelFunc08D0_005D:
	var0006 = "him";
labelFunc08D0_0063:
	if (!(var0002 == 0x0000)) goto labelFunc08D0_0070;
	goto labelFunc08D0_0177;
labelFunc08D0_0070:
	var0007 = 0x0003;
	var0008 = Func0922(var0000, var0001, var0002, var0007);
	if (!(var0008 == 0x0000)) goto labelFunc08D0_0099;
	message("\"I am sorry, but thou dost not have enough experience to train at this time. Return at a later date and I would be most happy to lead a session.\"");
	say();
	goto labelFunc08D0_0177;
labelFunc08D0_0099:
	if (!(var0008 == 0x0001)) goto labelFunc08D0_00C7;
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 < var0001)) goto labelFunc08D0_00C7;
	message("\"It seems that thou hast not enough gold. Do return when thou art a bit wealthier.\"");
	say();
	goto labelFunc08D0_0177;
labelFunc08D0_00C7:
	if (!(var0008 == 0x0002)) goto labelFunc08D0_00D8;
	message("\"I am amazed! Thou art already as experienced as I! Thou cannot be trained further by me.\"");
	say();
	goto labelFunc08D0_0177;
labelFunc08D0_00D8:
	var000A = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("Rayburt takes your money. \"The session shall begin.\"");
	say();
	message("Rayburt first instructs ");
	message(var0003);
	message(" to lie on the floor and relax. He teaches ");
	message(var0006);
	message(" breathing exercises and techniques with which to cleanse the mind of all thoughts.");
	say();
	message("After a while, he asks ");
	message(var0006);
	message(" to stand up and illustrates balance and control, relating it to meditation and concentration.");
	say();
	message("Finally, he demonstrates several good moves involving hand-to-hand combat, and combat using a sword. By the end of the hour, ");
	message(var0003);
	message(" ");
	message(var0004);
	message(" much more knowledgeable and proficient in this unusual form of fighting.*");
	say();
	var000B = Func0910(var0002, 0x0001);
	var000C = Func0910(var0002, 0x0002);
	var000D = Func0910(var0002, 0x0004);
	if (!(var000B < 0x001E)) goto labelFunc08D0_0151;
	Func0915(var0002, 0x0001);
labelFunc08D0_0151:
	if (!(var000C < 0x001E)) goto labelFunc08D0_0164;
	Func0916(var0002, 0x0001);
labelFunc08D0_0164:
	if (!(var000D < 0x001E)) goto labelFunc08D0_0177;
	Func0917(var0002, 0x0001);
labelFunc08D0_0177:
	return;
}


