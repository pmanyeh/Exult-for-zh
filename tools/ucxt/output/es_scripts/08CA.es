#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func08CA 0x8CA (var var0000, var var0001)
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
	if (!(var0002 == 0x0000)) goto labelFunc08CA_0013;
	goto labelFunc08CA_0147;
labelFunc08CA_0013:
	var0003 = 0x0003;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08CA_003C;
	message("After a few moments of questioning, he says, \"I am sorry, but thou dost not have a strong enough grasp of my theories for me to be able to instruct thee. Perhaps when thou hast had more time to study...\"");
	say();
	goto labelFunc08CA_0147;
labelFunc08CA_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08CA_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0005);
	message(" gold altogether.");
	say();
	if (!(var0005 < var0001)) goto labelFunc08CA_0074;
	message("\"I must apologize, but I need my full fee to permit me to continue my research. Mayhaps, at another time, when thou hast more money, I can teach thee.\"");
	say();
	goto labelFunc08CA_0147;
labelFunc08CA_0074:
	if (!(var0004 == 0x0002)) goto labelFunc08CA_0085;
	message("After a few moments of questioning, he says, \"Thou art already past my tutelage. I must humbly apologize, for there is nothing new I can teach thee.\"");
	say();
	goto labelFunc08CA_0147;
labelFunc08CA_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	var0007 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08CA_00D2;
	var0008 = "You";
	var0009 = "you";
	var000A = "";
	var000B = "have";
	goto labelFunc08CA_00EA;
labelFunc08CA_00D2:
	var0008 = var0007;
	var0009 = var0007;
	var000A = "s";
	var000B = "has";
labelFunc08CA_00EA:
	message(var0008);
	message(" and Perrin dive excitedly into the pages of several tomes. Following an intensive study session, ");
	message(var0009);
	message(" find");
	message(var000A);
	message(" the ability to comprehend and disseminate much more information than ever before. In addition, ");
	message(var0009);
	message(" ");
	message(var000B);
	message(" a a better grasp of the theory behind spellcasting.");
	say();
	var000C = Func0910(var0002, 0x0002);
	if (!(var000C < 0x001E)) goto labelFunc08CA_0128;
	Func0916(var0002, 0x0002);
labelFunc08CA_0128:
	var000D = Func0910(var0002, 0x0006);
	if (!(var000D < 0x001E)) goto labelFunc08CA_0147;
	Func0918(var0002, 0x0001);
labelFunc08CA_0147:
	return;
}


