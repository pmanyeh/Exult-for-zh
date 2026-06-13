#game "blackgate"
// externs
extern var Func0921 0x921 (var var0000);
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);

void Func08E5 0x8E5 (var var0000, var var0001)
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

	var0002 = Func0921(UI_get_npc_object(0xFFF9));
	if (!((var0002 == 0xFFF8) || ((var0002 == 0xFFFB) || (var0002 == 0xFFF7)))) goto labelFunc08E5_002E;
	var0003 = true;
	goto labelFunc08E5_0032;
labelFunc08E5_002E:
	var0003 = false;
labelFunc08E5_0032:
	if (!(var0002 == 0x0000)) goto labelFunc08E5_003F;
	goto labelFunc08E5_01B0;
labelFunc08E5_003F:
	var0004 = 0x0001;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc08E5_0068;
	message("\"I am sorry, but thou dost not have enough practical experience to train at this time. Return another day after thou hast slain a few more creatures.\"");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_0068:
	if (!(var0005 == 0x0001)) goto labelFunc08E5_0096;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 < var0001)) goto labelFunc08E5_0096;
	message("\"I regret that thou dost not seem to have enough gold to train here. Mayhaps at another time, when thy fortunes are more prosperous.\"");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_0096:
	if (!(var0005 == 0x0002)) goto labelFunc08E5_00A7;
	message("\"Thou art already as proficient as I! I am afraid that thou cannot be trained further by me!\"");
	say();
	goto labelFunc08E5_01B0;
labelFunc08E5_00A7:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	var0008 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08E5_00F6;
	var0008 = "you";
	var0009 = "are";
	var000A = "have";
	var000B = "you";
	var000C = "your";
	var000D = "manage";
	goto labelFunc08E5_0135;
labelFunc08E5_00F6:
	if (!var0003) goto labelFunc08E5_0111;
	var0008 = "she";
	var000B = "her";
	var000C = "her";
	goto labelFunc08E5_0123;
labelFunc08E5_0111:
	var0008 = "he";
	var000B = "him";
	var000C = "his";
labelFunc08E5_0123:
	var0009 = "is";
	var000A = "has";
	var000D = "manages";
labelFunc08E5_0135:
	message("\"On guard!\" Sentri cries as he draws his sword. ^");
	message(var0008);
	message(" ");
	message(var0009);
	message(" forced to respond with the most easily readied weapon ");
	message(var0008);
	message(" ");
	message(var000A);
	message(". Without a word, Sentri advances upon ");
	message(var000B);
	message(", swinging his blade in a seemingly wild, yet entirely controlled manner. ^");
	message(var0008);
	message(" ");
	message(var0009);
	message(" forced to block his blows to the best of ");
	message(var000C);
	message(" ability. Luckily, Sentri stops just short of striking ");
	message(var000B);
	message(", which he is often able to do. Slowly but surely, over the course of the training session, ");
	message(var000C);
	message(" blocking improves and ");
	message(var0008);
	message(" ");
	message(var000D);
	message(" to get in a few thrusts of ");
	message(var000C);
	message(" own. ^");
	message(var000C);
	message(" agility improves, and the improvement is tangibly perceptible.");
	say();
	message("\"I enjoyed that!\" Sentri exclaims after it is all over.*");
	say();
	var000E = Func0910(var0002, 0x0001);
	if (!(var000E < 0x001E)) goto labelFunc08E5_01B0;
	Func0915(var0002, 0x0001);
labelFunc08E5_01B0:
	return;
}


