#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0878 0x878 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc0878_0013;
	goto labelFunc0878_00EB;
labelFunc0878_0013:
	var0003 = 0x0002;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc0878_003C;
	message("\"Thou dost not have enough practical experience to study fighting with me at this time!\" he scoffs.");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_003C:
	if (!(var0004 == 0x0001)) goto labelFunc0878_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0005);
	message(" gold altogether.");
	say();
	if (!(var0005 < var0001)) goto labelFunc0878_0074;
	message("\"Hmmm... it appears thou art without the necessary amount of gold. When thy coffers are more full, I might be able to help thee.\" He smirks.");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_0074:
	if (!(var0004 == 0x0002)) goto labelFunc0878_0085;
	message("\"Thou art already close in skill to me! Thou hast peaked in thine own potential. There is nothing further I can do for thee.\"");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	var0007 = Func090F(var0002);
	var0008 = Func0908();
	if (!(var0007 == var0008)) goto labelFunc0878_00C2;
	var0007 = "you";
labelFunc0878_00C2:
	message("The session, which consists of various techniques involving sleight of hand and strike feints, takes a fairly short amount of time.~ De Snel straightens suddenly and sheathes his blade. \"That is all for now. If thou dost wish more training, thou couldst most assuredly benefit from mine experience.\" He looks ");
	message(var0007);
	message(" up and down insolently. \"Thou seemest to be an apt pupil. Thou mayest return at a later time and advance thy training.\"");
	say();
	var0009 = Func0910(var0002, 0x0004);
	if (!(var0009 < 0x001E)) goto labelFunc0878_00EB;
	Func0917(var0002, 0x0002);
labelFunc0878_00EB:
	return;
}


