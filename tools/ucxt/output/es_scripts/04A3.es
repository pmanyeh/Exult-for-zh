#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func08CB 0x8CB ();
extern void Func08CC 0x8CC ();
extern void Func092E 0x92E (var var0000);

void Func04A3 object#(0x4A3) ()
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

	if (!(event == 0x0001)) goto labelFunc04A3_0420;
	UI_show_npc_face(0xFF5D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFC);
	var0003 = UI_part_of_day();
	var0004 = false;
	if (!(var0003 == 0x0007)) goto labelFunc04A3_0067;
	var0005 = Func08FC(0xFF5D, 0xFF06);
	if (!var0005) goto labelFunc04A3_005C;
	message("\"Sorry, ");
	message(var0001);
	message(", I may talk to thee later. But now I wish to pay attention to the meeting.\"");
	say();
	abort;
	goto labelFunc04A3_0067;
labelFunc04A3_005C:
	message("\"Sorry, ");
	message(var0001);
	message(", I must get to the Fellowship meeting!\"");
	say();
	abort;
labelFunc04A3_0067:
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!var0002) goto labelFunc04A3_00A3;
	message("\"Why, Hello, Sir Dupre. Things fare well I trust?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Greetings, fair Phearcy. Yes, thank thee, things are well.\"");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5D, 0x0000);
labelFunc04A3_00A3:
	if (!(!gflags[0x0205])) goto labelFunc04A3_00B5;
	message("You see a man who gives you a friendly smile.");
	say();
	gflags[0x0205] = true;
	goto labelFunc04A3_00BF;
labelFunc04A3_00B5:
	message("\"How may I help thee, ");
	message(var0001);
	message("?\" asks Phearcy.");
	say();
labelFunc04A3_00BF:
	if (!gflags[0x01DA]) goto labelFunc04A3_0138;
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0138;
	message("\"Hast thou discovered the reason for Zelda's moods?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04A3_012E;
	message("\"Excellent. Thou canst tell me while I get thy refreshment.\" As he prepares your meal, you tell him what you know about Zelda and Brion.");
	say();
	var0007 = UI_add_party_items(0x0005, 0x0179, 0xFE99, 0x000F, true);
	if (!(!var0007)) goto labelFunc04A3_0108;
	message("\"Too bad, ");
	message(var0001);
	message(". When thou art carrying less weighty things I shall give thee thy jerky.\"");
	say();
	goto labelFunc04A3_010C;
labelFunc04A3_0108:
	gflags[0x01D9] = true;
labelFunc04A3_010C:
	var0008 = UI_add_party_items(0x0005, 0x0268, 0xFE99, 0x0000, true);
	if (!(!var0008)) goto labelFunc04A3_012B;
	message("\"And when thy load is lighter, then I can give thee thy beverages.\"");
	say();
labelFunc04A3_012B:
	goto labelFunc04A3_0138;
labelFunc04A3_012E:
	message("\"'Tis a shame, ");
	message(var0001);
	message(". Perhaps thou wilt know next time.\"");
	say();
labelFunc04A3_0138:
	converse attend labelFunc04A3_041B;
	case "name" attend labelFunc04A3_014E:
	message("\"I am Phearcy, at thy service.\" He gives a short bow.");
	say();
	UI_remove_answer("name");
labelFunc04A3_014E:
	case "job" attend labelFunc04A3_0167:
	message("\"I am the bartender here in Moonglow.\"");
	say();
	UI_add_answer(["Moonglow", "buy"]);
labelFunc04A3_0167:
	case "Fellowship" attend labelFunc04A3_0181:
	message("\"Oh, thou referest to this?\" he asks, pointing to his medallion. \"Thou hast not heard of The Fellowship? I strongly recommend that thou speakest with Rankin or Balayna at the branch office. The Fellowship has done many things for our town, if not for all of Britannia. I am a firm believer in neo-realism.\"");
	say();
	UI_add_answer("neo-realism");
	UI_remove_answer("Fellowship");
labelFunc04A3_0181:
	case "neo-realism" attend labelFunc04A3_0194:
	message("\"That is the fundamental principle of The Fellowship. It is composed of the triad of inner strength, which is strive for unity, trust thy brother, and... one other one.... Oh, yes, thou dost get what thou deservest, or some such.\"");
	say();
	UI_remove_answer("neo-realism");
labelFunc04A3_0194:
	case "Moonglow" attend labelFunc04A3_01CA:
	message("\"Thou wants to know about someone in the town? Thou hast asked the right person. I know all about the residents here in Moonglow. I would be happy to tell thee about any of the shop keepers, scholars, or farmers who live here. Or art thou interested in the trainer, healer, mage, or Fellowship leaders?");
	say();
	UI_remove_answer("Moonglow");
	UI_push_answers();
	UI_add_answer(["no one", "shop keeper", "scholars", "farmers", "trainer", "healer", "mage", "leaders"]);
labelFunc04A3_01CA:
	case "scholars" attend labelFunc04A3_01F0:
	message("\"Ah, the learned scholars. I can tell thee about Brion, Nelson, Zelda, and Jillian.\"");
	say();
	UI_push_answers();
	UI_add_answer(["no one", "Brion", "Nelson", "Zelda", "Jillian"]);
labelFunc04A3_01F0:
	case "leaders" attend labelFunc04A3_0210:
	message("\"Dost thou want to know about the one in charge or his clerk?\"");
	say();
	UI_push_answers();
	UI_add_answer(["no one", "charge", "clerk"]);
labelFunc04A3_0210:
	case "mage" attend labelFunc04A3_023B:
	message("\"Ah, yes, Mariah is very nice.\"");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_0229;
	message("\"She can sell thee many spells.\"");
	say();
	goto labelFunc04A3_0234;
labelFunc04A3_0229:
	if (!(!var0004)) goto labelFunc04A3_0234;
	message("\"But I am more interested in discussing Zelda.\"");
	say();
labelFunc04A3_0234:
	UI_remove_answer("mage");
labelFunc04A3_023B:
	case "shop keeper" attend labelFunc04A3_0260:
	message("\"She is a tailor. Lovely woman, that Carlyn. She minds the bar when I go to the Fellowship meetings at night.\"");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0259;
	if (!(!var0004)) goto labelFunc04A3_0259;
	message("\"But I would rather discuss Zelda.\"");
	say();
labelFunc04A3_0259:
	UI_remove_answer("shop keeper");
labelFunc04A3_0260:
	case "Jillian" attend labelFunc04A3_028C:
	message("\"Wonderful scholar. Very nice woman. Married to Effrem.\"");
	say();
	UI_add_answer("Effrem");
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0285;
	if (!(!var0004)) goto labelFunc04A3_0285;
	message("\"But I am more interested in discussing Zelda.\"");
	say();
labelFunc04A3_0285:
	UI_remove_answer("Jillian");
labelFunc04A3_028C:
	case "Effrem" attend labelFunc04A3_02B7:
	message("\"Friendly fellow -- I like him.\"");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_02A5;
	message("\"He stays home to care for their son.\"");
	say();
	goto labelFunc04A3_02B0;
labelFunc04A3_02A5:
	if (!(!var0004)) goto labelFunc04A3_02B0;
	message("\"But I am more interested in discussing Brion.\"");
	say();
labelFunc04A3_02B0:
	UI_remove_answer("Effrem");
labelFunc04A3_02B7:
	case "trainer" attend labelFunc04A3_02DC:
	message("\"Chad is a friendly fellow -- I like him.\"");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_02D5;
	if (!(!var0004)) goto labelFunc04A3_02D5;
	message("\"But I would rather discuss Brion.\"");
	say();
labelFunc04A3_02D5:
	UI_remove_answer("trainer");
labelFunc04A3_02DC:
	case "farmers" attend labelFunc04A3_0301:
	message("\"Tolemac and Cubolt are brothers. With Morz's help, they run a farm.\"");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_02FA;
	if (!(!var0004)) goto labelFunc04A3_02FA;
	message("\"But I would prefer to talk about Brion.\"");
	say();
labelFunc04A3_02FA:
	UI_remove_answer("farmers");
labelFunc04A3_0301:
	case "healer" attend labelFunc04A3_032C:
	message("\"Friendly fellow -- I like him. His name is Elad.\"");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_031A;
	message("\"Sadly, his true desire is to leave Moonglow in search of adventure. But he will not leave, for he feels too much obligation for his patients.\" Phearcy shrugs.~\"Perhaps not without reason.\"");
	say();
	goto labelFunc04A3_0325;
labelFunc04A3_031A:
	if (!(!var0004)) goto labelFunc04A3_0325;
	message("\"But Brion is more interesting to me.\"");
	say();
labelFunc04A3_0325:
	UI_remove_answer("healer");
labelFunc04A3_032C:
	case "Nelson" attend labelFunc04A3_0351:
	message("\"He is Brion's twin brother.\"");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_034A;
	if (!(!var0004)) goto labelFunc04A3_034A;
	message("\"Speaking of that, I would like to discuss Brion.\"");
	say();
labelFunc04A3_034A:
	UI_remove_answer("Nelson");
labelFunc04A3_0351:
	case "charge" attend labelFunc04A3_0364:
	message("\"Rankin is in charge of the entire local branch. If thou hast any questions about The Fellowship, he can answer them.\"");
	say();
	UI_remove_answer("charge");
labelFunc04A3_0364:
	case "clerk" attend labelFunc04A3_0377:
	message("\"If thou hast any questions about The Fellowship, Balayna can answer them.\"");
	say();
	UI_remove_answer("clerk");
labelFunc04A3_0377:
	case "Brion", "Zelda" attend labelFunc04A3_03A4:
	if (!gflags[0x01D9]) goto labelFunc04A3_038F;
	message("\"Well, as thou dost know, Brion is the head of Observatory, and Zelda, the advisor at the Lyceaum, is in love with him.\"");
	say();
	goto labelFunc04A3_03A4;
labelFunc04A3_038F:
	message("\"Ah, so thou dost wonder, too. All I know is that every time someone mentions Brion's name to Zelda, her serious expression changes to a smile.~~\"I have a deal for thee. Find out what their story is, and I will give thee and thy friends a free meal and drink. Thou canst find Brion at the observatory and Zelda at the Lyceaum.\"");
	say();
	var0004 = true;
	UI_remove_answer(["Brion", "Zelda"]);
labelFunc04A3_03A4:
	case "no one" attend labelFunc04A3_03B7:
	UI_pop_answers();
	UI_add_answer("bye");
labelFunc04A3_03B7:
	case "buy" attend labelFunc04A3_03E1:
	message("\"Food or drink, ");
	message(var0001);
	message("?\"");
	say();
	UI_push_answers();
	UI_add_answer(["food", "drink"]);
	UI_remove_answer("buy");
labelFunc04A3_03E1:
	case "food" attend labelFunc04A3_03F7:
	Func08CB();
	UI_pop_answers();
	UI_remove_answer("food");
labelFunc04A3_03F7:
	case "drink" attend labelFunc04A3_040D:
	Func08CC();
	UI_pop_answers();
	UI_remove_answer("drink");
labelFunc04A3_040D:
	case "bye" attend labelFunc04A3_0418:
	goto labelFunc04A3_041B;
labelFunc04A3_0418:
	goto labelFunc04A3_0138;
labelFunc04A3_041B:
	endconv;
	message("\"Remember! Tell them thou didst eat at the Friendly Knave!\"*");
	say();
labelFunc04A3_0420:
	if (!(event == 0x0000)) goto labelFunc04A3_042E;
	Func092E(0xFF5D);
labelFunc04A3_042E:
	return;
}


