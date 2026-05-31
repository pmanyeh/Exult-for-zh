#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);

void Func08B6 0x8B6 (var var0000, var var0001)
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

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc08B6_0013;
	goto labelFunc08B6_0128;
labelFunc08B6_0013:
	var0003 = 0x0001;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08B6_003C;
	message("\"Ah! But thou hast not the practical experience to train with me at this time! Go and experience life and return later.\"");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08B6_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it, finding that you have ");
	message(var0005);
	message(" gold altogether.");
	say();
	if (!(var0005 < var0001)) goto labelFunc08B6_0074;
	message("\"Hmm. Thou art a little short on gold. Perhaps thou couldst visit the House of Games, win some booty, then return!\"");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_0074:
	if (!(var0004 == 0x0002)) goto labelFunc08B6_0085;
	message("\"Thou art already as talented as I! Thou hast no need of my services!\"");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	message("Lucky produces a deck of cards, three sea shells and a rock, and a pair of dice. In turn, the pirate takes each item and begins to show various methods of utilizing them. He shows how to deal cards from the bottom of the deck, and how to do a false shuffle. With the shells and rock, he shows lightning-fast maneuvers which hide the rock under one of the shells, the one it couldn't possibly be under. Finally, he shows how to use saliva to weight the dice so that they always turn up lucky.");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08B6_0109;
	var0007 = Func0931(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0000);
	if (!var0007) goto labelFunc08B6_00E1;
	var0008 = "happily hands you back your Ankh, which had ";
	var0009 = "managed to slip from around your neck during ";
	var000A = "the session.";
	goto labelFunc08B6_00F3;
labelFunc08B6_00E1:
	var0008 = "happily holds out his hand to shake yours, ";
	var0009 = "but pulls it away quickly when you proceed ";
	var000A = "to do so.";
labelFunc08B6_00F3:
	message("When the training session is over, Lucky ");
	message(var0008);
	message("");
	message(var0009);
	message(" ");
	message(var000A);
	message("");
	say();
labelFunc08B6_0109:
	var000B = Func0910(var0002, 0x0002);
	if (!(var000B < 0x001E)) goto labelFunc08B6_0128;
	Func0916(var0002, 0x0001);
labelFunc08B6_0128:
	return;
}


