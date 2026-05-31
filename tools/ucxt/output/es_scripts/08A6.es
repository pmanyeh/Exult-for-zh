#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0908 0x908 ();
extern var Func090F 0x90F (var var0000);
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08A6 0x8A6 (var var0000, var var0001)
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
	var0003 = Func0908();
	if (!(var0002 == 0x0000)) goto labelFunc08A6_0019;
	goto labelFunc08A6_017C;
labelFunc08A6_0019:
	var0004 = Func090F(var0002);
	if (!(var0004 == var0003)) goto labelFunc08A6_0047;
	var0004 = "you";
	var0005 = "you";
	var0006 = "your";
	var0007 = "find";
	goto labelFunc08A6_0082;
labelFunc08A6_0047:
	var0007 = "finds";
	if (!((var0002 == 0xFFFB) || ((var0002 == 0xFFF8) || (var0002 == 0xFFF7)))) goto labelFunc08A6_0076;
	var0005 = "she";
	var0006 = "her";
	goto labelFunc08A6_0082;
labelFunc08A6_0076:
	var0005 = "he";
	var0006 = "his";
labelFunc08A6_0082:
	var0008 = 0x0003;
	var0009 = Func0922(var0000, var0001, var0002, var0008);
	if (!(var0009 == 0x0000)) goto labelFunc08A6_00B1;
	message("Karenna looks at ");
	message(var0004);
	message(" and gives a small laugh. \"Thou art not without skill, but thou art not ready yet.\"");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_00B1:
	if (!(var0009 == 0x0001)) goto labelFunc08A6_00E9;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var000A);
	message(" gold altogether.");
	say();
	if (!(var000A < var0001)) goto labelFunc08A6_00E9;
	message("Karenna gives you a cross look. \"I am not running a charity. Come back when thou dost have more money!\"");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_00E9:
	if (!(var0009 == 0x0002)) goto labelFunc08A6_0100;
	message("Karenna glares at ");
	message(var0004);
	message(". \"Thou dost but waste my time. Thou art as swift and cunning as I, and I would wager that thou didst know it. I have not the time for such as thee.\"");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_0100:
	var000B = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	message("Karenna leaps like a panther around the padded mat of the training ring. Her movements are so fast, they are a blur. She attacks. At first she lands her blows at will, causing stings of pain that send ");
	message(var0004);
	message(" reeling, but as the session progresses, ");
	message(var0005);
	message(" ");
	message(var0007);
	message(" ");
	message(var0006);
	message(" reflexes have been sharpened noticeably.");
	say();
	message("\"I thank thee for a fine practice session. Thou wilt be back.\" She grins confidently.");
	say();
	var000C = Func0910(var0002, 0x0001);
	var000D = Func0910(var0002, 0x0004);
	if (!(var000C < 0x001E)) goto labelFunc08A6_0169;
	Func0915(var0002, 0x0002);
labelFunc08A6_0169:
	if (!(var000D < 0x001E)) goto labelFunc08A6_017C;
	Func0917(var0002, 0x0001);
labelFunc08A6_017C:
	return;
}


