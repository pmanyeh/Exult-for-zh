#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08BD 0x8BD (var var0000, var var0001)
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
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc08BD_001D;
	goto labelFunc08BD_0105;
labelFunc08BD_001D:
	if (!(var0002 == 0xFE9C)) goto labelFunc08BD_0030;
	var0004 = "you";
	goto labelFunc08BD_0036;
labelFunc08BD_0030:
	var0004 = var0003;
labelFunc08BD_0036:
	var0005 = 0x0001;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc08BD_005F;
	message("\"I am afraid thou dost not have enough practical experience to train at this time. If thou couldst return at a later date, I would be most happy to provide thee with my services.\"");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_005F:
	if (!(var0006 == 0x0001)) goto labelFunc08BD_0097;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("You gather your gold and count it. You have ");
	message(var0007);
	message(" altogether.");
	say();
	if (!(var0007 < var0001)) goto labelFunc08BD_0097;
	message("Markus stretches. He shrugs and says, \"I regret that thou dost not have enough gold to meet my price. Perhaps later, when thou hast made thy fortune pillaging the land...\"");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_0097:
	message("You pay ");
	message(var0001);
	message(" gold, and the training session begins.");
	say();
	if (!(var0006 == 0x0002)) goto labelFunc08BD_00B2;
	message("Markus blinks and seems to come out of his boredom. \"Thou art already as proficient as I! Thou cannot be trained further here.\"~~Markus returns the gold.");
	say();
	goto labelFunc08BD_0105;
labelFunc08BD_00B2:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("\"Very well,\" Markus says, stifling a yawn. \"Here we go.\"~~Markus wields his sword and faces ");
	message(var0004);
	message(". He gives ");
	message(var0004);
	message(" a few pointers in stance and balance, then demonstrates some sample thrusts.");
	say();
	message("Before long, ");
	message(var0004);
	message(" and the trainer are trading blows with weapons. He is obviously very good at what he does, and the experience is valuable to ");
	message(var0004);
	message(". When the session is over, it is felt that there has been a gain in combat ability.*");
	say();
	var0009 = Func0910(var0002, 0x0004);
	if (!(var0009 < 0x001E)) goto labelFunc08BD_0105;
	Func0917(var0002, 0x0001);
labelFunc08BD_0105:
	return;
}


