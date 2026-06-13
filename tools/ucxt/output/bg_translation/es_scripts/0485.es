#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0485 object#(0x485) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0485_033E;
	UI_show_npc_face(0xFF7B, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFFD);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFC);
	var0004 = Func08F7(0xFFFE);
	var0005 = Func08F7(0xFF7C);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0180]) goto labelFunc0485_0062;
	UI_add_answer("strangers");
labelFunc0485_0062:
	if (!gflags[0x0184]) goto labelFunc0485_006F;
	UI_add_answer("scoundrels");
labelFunc0485_006F:
	if (!gflags[0x01CD]) goto labelFunc0485_007C;
	UI_add_answer("locket found");
labelFunc0485_007C:
	if (!(!gflags[0x018E])) goto labelFunc0485_008E;
	message("You see an angelic young woman who gives you a smile of complete innocence.");
	say();
	gflags[0x018E] = true;
	goto labelFunc0485_0098;
labelFunc0485_008E:
	message("\"");
	message(var0000);
	message("!\" says a wide-eyed Constance, \"What may I do for thee?\"");
	say();
labelFunc0485_0098:
	converse attend labelFunc0485_0333;
	case "name" attend labelFunc0485_00B4:
	message("\"My name, ");
	message(var0000);
	message(", is Constance.\" She shyly lowers her eyes.");
	say();
	UI_remove_answer("name");
labelFunc0485_00B4:
	case "job" attend labelFunc0485_00CD:
	message("\"I carry water from the well of humility to all of the homes here in New Magincia.\"");
	say();
	UI_add_answer(["well of humility", "New Magincia"]);
labelFunc0485_00CD:
	case "well of humility" attend labelFunc0485_01A6:
	message("\"The water from the well is pure and cool. If thou wouldst like I will pour thee some.\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0485_019B;
	message("With a big smile Constance takes a\tdipper and submerges it in the cool water of her bucket. She draws out the dipper and hands it to you. You drink and find the water delicious and very refreshing.");
	say();
	if (!var0002) goto labelFunc0485_010E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Actually, I feel quite parched myself. Might I have some as well?\" Constance nods yes, and hands him a\tdipper of water. He drinks with loud gulping sounds.*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_010E:
	if (!var0001) goto labelFunc0485_0133;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"I, too, am feeling dry. Wouldst thou share thy water with me, milady?\" Constance fills the dipper with water for Shamino and he drinks until water runs down his chin.*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0133:
	if (!var0003) goto labelFunc0485_0173;
	if (!var0001) goto labelFunc0485_0173;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("You see Shamino nudge Dupre. \"Art thou not going to have a drink?\"");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"I shall wait until we find something a bit stronger than water to quench my thirst.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0173:
	if (!var0004) goto labelFunc0485_0198;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Constance hands Spark a dipper full of water. He drinks it down in one long slurp. Upon finishing it, he burps. With an\tembarrassed grin he bows\tapologetically to Constance\tas he hands her back the dipper.");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0198:
	goto labelFunc0485_019F;
labelFunc0485_019B:
	message("\"If thou wouldst ever change thy mind thou needest only let me know.\"");
	say();
labelFunc0485_019F:
	UI_remove_answer("well of humility");
labelFunc0485_01A6:
	case "strangers" attend labelFunc0485_01C4:
	message("\"There are three strangers on the island! They have been shipwrecked here! I have met them. Their leader's name is Robin.\"");
	say();
	UI_add_answer("Robin");
	UI_remove_answer("strangers");
	gflags[0x0180] = true;
labelFunc0485_01C4:
	case "New Magincia" attend labelFunc0485_01DE:
	message("\"I was born in New Magincia and I have lived here mine entire life. But now I wish to leave for mine heart hath been broken.\"");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer("heart");
labelFunc0485_01DE:
	case "heart" attend labelFunc0485_0206:
	if (!(!gflags[0x0184])) goto labelFunc0485_01FB;
	message("\"Once I was in love with Henry, the peddler, but then I learned he is a liar and a cad. Perhaps soon mine heart shall belong to another.\"");
	say();
	UI_add_answer("another");
	goto labelFunc0485_01FF;
labelFunc0485_01FB:
	message("You tell Constance of Robin's plans for her. She gives you a shocked look. \"Many thanks. I now know that my rightful place is with Henry.\"");
	say();
labelFunc0485_01FF:
	UI_remove_answer("heart");
labelFunc0485_0206:
	case "locket found" attend labelFunc0485_024C:
	message("You tell Constance of how you have returned the locket that has been stolen from Henry. \"Oh, how could I ever have doubted my dear darling Henry?\" she frowns. \"I thank thee for telling me the truth.\"");
	say();
	if (!var0005) goto labelFunc0485_0245;
	UI_show_npc_face(0xFF7C, 0x0000);
	message("\"Constance, I am sorry that things ran afoul as they did, but if thou wilt, I would like thee to have this locket as a symbol of my love.\"*");
	say();
	UI_show_npc_face(0xFF7B, 0x0000);
	message("\"My sweet Henry, mine heart belongs to only thee.\"*");
	say();
	UI_remove_npc_face(0xFF7C);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0245:
	UI_remove_answer("locket found");
labelFunc0485_024C:
	case "another" attend labelFunc0485_0266:
	message("\"There is a charming and mysterious stranger on the island named Robin. He says one day he may show me the world and buy me many fine things.\" Constance sighs. \"He even gave me some lovely flowers.\"");
	say();
	UI_remove_answer("another");
	UI_add_answer("Robin");
labelFunc0485_0266:
	case "Robin" attend labelFunc0485_0286:
	message("\"He is a wealthy man and his two friends are big, strong men. They have been telling me about a very wonderful-sounding place called Buccaneer's Den.\"");
	say();
	UI_remove_answer("Robin");
	UI_add_answer(["friends", "Buccaneer's Den"]);
labelFunc0485_0286:
	case "friends" attend labelFunc0485_02A6:
	message("\"Their names were Battles and Leavell. Both of them treated me like proper gentlemen.\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Battles", "Leavell"]);
labelFunc0485_02A6:
	case "Buccaneer's Den" attend labelFunc0485_02C6:
	message("\"Buccaneer's Den must be a wonderland. There is a spinning wheel that gives thee money! Canst thou imagine! And opulent, luxurious baths.\"");
	say();
	UI_remove_answer("Buccaneer's Den");
	UI_add_answer(["spinning wheel", "baths"]);
labelFunc0485_02C6:
	case "Battles" attend labelFunc0485_02D9:
	message("\"Battles was quiet at first. I thought he was mean-looking, but he is nice once thou dost get to know him. He told me of the various monsters he fought, and exciting stories of how he raided ships in the south seas.\"");
	say();
	UI_remove_answer("Battles");
labelFunc0485_02D9:
	case "Leavell" attend labelFunc0485_02EC:
	message("\"Leavell was charming and witty. He can always make me laugh.\"");
	say();
	UI_remove_answer("Leavell");
labelFunc0485_02EC:
	case "spinning wheel" attend labelFunc0485_02FF:
	message("\"Well, they certainly have nothing like that in New Magincia. I had never even heard of such a thing before!\"");
	say();
	UI_remove_answer("spinning wheel");
labelFunc0485_02FF:
	case "baths" attend labelFunc0485_0312:
	message("\"Doth that not sound nice?\"");
	say();
	UI_remove_answer("baths");
labelFunc0485_0312:
	case "scoundrels" attend labelFunc0485_0325:
	message("You gently explain to Constance that Robin, Battles and Leavell were scoundrels with intent to do her great harm. She is quite alarmed. Then you explain that they will not be troubling her anymore. She thanks you.");
	say();
	UI_remove_answer("scoundrels");
labelFunc0485_0325:
	case "bye" attend labelFunc0485_0330:
	goto labelFunc0485_0333;
labelFunc0485_0330:
	goto labelFunc0485_0098;
labelFunc0485_0333:
	endconv;
	message("\"It was a pleasure speaking with thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0485_033E:
	if (!(event == 0x0000)) goto labelFunc0485_034C;
	Func092E(0xFF7B);
labelFunc0485_034C:
	return;
}


