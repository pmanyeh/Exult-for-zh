#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0475 object#(0x475) ()
{
	var var0000;
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
	var var000C;

	if (!(event == 0x0001)) goto labelFunc0475_02DF;
	UI_show_npc_face(0xFF8B, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x014F])) goto labelFunc0475_003A;
	message("The beady-eyed man sneers at you.");
	say();
	gflags[0x014F] = true;
	goto labelFunc0475_003E;
labelFunc0475_003A:
	message("\"What dost thou want now?\" Goth spits.");
	say();
labelFunc0475_003E:
	if (!gflags[0x012C]) goto labelFunc0475_004B;
	UI_add_answer("buy keys");
labelFunc0475_004B:
	converse attend labelFunc0475_02DA;
	case "name" attend labelFunc0475_0061:
	message("\"Goth. Not that it is any of thy business!\"");
	say();
	UI_remove_answer("name");
labelFunc0475_0061:
	case "job" attend labelFunc0475_007A:
	message("\"What does it look like I do?\" he says, holding up a ring of keys. \"Gardening?\"");
	say();
	UI_add_answer(["keys", "gardening"]);
labelFunc0475_007A:
	case "gardening" attend labelFunc0475_0094:
	message("\"What? Art thou daft?\" He shakes his head. \"Well, at least thou art in the right area for gardening.\"");
	say();
	UI_add_answer("area");
	UI_remove_answer("gardening");
labelFunc0475_0094:
	case "area" attend labelFunc0475_00AE:
	message("\"Empath Abbey, dolt!\"");
	say();
	UI_add_answer("Empath Abbey");
	UI_remove_answer("area");
labelFunc0475_00AE:
	case "Empath Abbey" attend labelFunc0475_00DB:
	message("\"As a matter of fact,  know quite a bit about the people who live here. And I just might even tell thee. What is it worth to thee in gold?\"");
	say();
	UI_push_answers();
	UI_add_answer(["nothing", "2", "3", "4", "5"]);
	UI_remove_answer("Empath Abbey");
labelFunc0475_00DB:
	case "nothing" attend labelFunc0475_00EB:
	UI_pop_answers();
	message("\"Fine by me!\"");
	say();
labelFunc0475_00EB:
	case "2", "3", "4" attend labelFunc0475_00FD:
	message("He glowers at you. \"Thou must do better than that, fool!\"");
	say();
labelFunc0475_00FD:
	case "5" attend labelFunc0475_015A:
	UI_pop_answers();
	var0001 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0001 > 0x0004)) goto labelFunc0475_0143;
	var0002 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0x0000, 0x0000);
	message("\"I will tell thee what I know: Sir Jeff is in charge of the High Court. 'E's a real mean bastard, so I would stay away from 'im. The monks nearby make excellent wine, and Aimi doth warm a man's... heart. And whatever thou dost, do not waste time talking to the undertaker -- 'e's daft in the head.\"");
	say();
	goto labelFunc0475_0147;
labelFunc0475_0143:
	message("\"Thou dost not have enough gold, toad.\"");
	say();
labelFunc0475_0147:
	UI_remove_answer(["2", "3", "4", "5"]);
labelFunc0475_015A:
	case "keys" attend labelFunc0475_017A:
	message("\"These? They are for the prisoner's cells, witless knave!\"");
	say();
	UI_add_answer(["prisoners", "buy keys"]);
	UI_remove_answer("keys");
labelFunc0475_017A:
	case "prisoners" attend labelFunc0475_01E4:
	message("\"I will tell thee for 5 gold. Interested?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0475_01D8;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 > 0x0004)) goto labelFunc0475_01D1;
	var0005 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	message("\"One of them is named D'Rel. E's a pirate, from Buccaneer's Den.\"");
	say();
	UI_add_answer("another prisoner");
	goto labelFunc0475_01D5;
labelFunc0475_01D1:
	message("\"Thou dost not have enough money, stonehead.\"");
	say();
labelFunc0475_01D5:
	goto labelFunc0475_01DD;
labelFunc0475_01D8:
	message("\"Pinchpenny!\"*");
	say();
	abort;
labelFunc0475_01DD:
	UI_remove_answer("prisoners");
labelFunc0475_01E4:
	case "another prisoner" attend labelFunc0475_024E:
	message("\"Another, eh. Hast thou 5 more gold for me?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0475_0242;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0007 > 0x0004)) goto labelFunc0475_023B;
	message("\"The other one is a troll. 'E don't talk much, but\t'e's the first troll prisoner I have ever seen.\"");
	say();
	var0008 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	UI_remove_answer("another prisoner");
	goto labelFunc0475_023F;
labelFunc0475_023B:
	message("\"Thou canst not fool me, brainless dolt. Thou dost not have enough gold!\"");
	say();
labelFunc0475_023F:
	goto labelFunc0475_0247;
labelFunc0475_0242:
	message("\"Fine, slug!\"*");
	say();
	abort;
labelFunc0475_0247:
	UI_remove_answer("another prisoner");
labelFunc0475_024E:
	case "buy keys" attend labelFunc0475_02CC:
	message("\"Thou dost want these, eh?\" he asks, holding up keys. \"'Twill cost thee... 20 gold. Still want them?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0475_02C0;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A > 0x0013)) goto labelFunc0475_02B9;
	message("\"Done!\"");
	say();
	var000B = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, false);
	var000C = UI_add_party_items(0x0001, 0x0281, 0x00F8, 0xFE99, false);
	UI_remove_answer("buy keys");
	goto labelFunc0475_02BD;
labelFunc0475_02B9:
	message("He smiles cruelly. \"I am afraid thou dost not have enough gold.\"");
	say();
labelFunc0475_02BD:
	goto labelFunc0475_02C5;
labelFunc0475_02C0:
	message("\"Fine. Rot for all I care!*");
	say();
	abort;
labelFunc0475_02C5:
	UI_remove_answer("buy keys");
labelFunc0475_02CC:
	case "bye" attend labelFunc0475_02D7:
	goto labelFunc0475_02DA;
labelFunc0475_02D7:
	goto labelFunc0475_004B;
labelFunc0475_02DA:
	endconv;
	message("\"Indeed, knave. Get thee gone!\"*");
	say();
labelFunc0475_02DF:
	if (!(event == 0x0000)) goto labelFunc0475_02E8;
	abort;
labelFunc0475_02E8:
	return;
}


