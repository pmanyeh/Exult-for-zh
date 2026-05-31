#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0472 object#(0x472) ()
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

	if (!(event == 0x0001)) goto labelFunc0472_0252;
	UI_show_npc_face(0xFF8E, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x015A] && gflags[0x015B])) goto labelFunc0472_003D;
	UI_add_answer("garden");
labelFunc0472_003D:
	if (!(!gflags[0x014C])) goto labelFunc0472_004F;
	message("The monk pulls back her cowl far enough for you to see her face.");
	say();
	gflags[0x014C] = true;
	goto labelFunc0472_0059;
labelFunc0472_004F:
	message("\"Greetings, ");
	message(var0000);
	message(". I hope thy days are full of beauty.\"");
	say();
labelFunc0472_0059:
	converse attend labelFunc0472_0251;
	case "name" attend labelFunc0472_008B:
	message("\"Thou mayest call me Aimi, ");
	message(var0000);
	message(".\"");
	say();
	gflags[0x015B] = true;
	if (!(gflags[0x015A] && (!var0001))) goto labelFunc0472_0084;
	UI_add_answer("garden");
labelFunc0472_0084:
	UI_remove_answer("name");
labelFunc0472_008B:
	case "job" attend labelFunc0472_00BA:
	message("\"As a monk, I am not sure how to answer thy question. I often help to make wine. However, ");
	message(var0000);
	message(", in my spare time I paint or tend my garden here at the Abbey.\"");
	say();
	UI_add_answer(["paint", "garden", "Abbey"]);
	if (!gflags[0x0148]) goto labelFunc0472_00BA;
	UI_add_answer("Kreg");
labelFunc0472_00BA:
	case "Abbey" attend labelFunc0472_00D4:
	message("\"I have spent little time with others in the area. Thou mayest wish to speak with Taylor, for he knows much more about the people, animals, and sights in this area than I do.\"");
	say();
	UI_add_answer("Taylor");
	UI_remove_answer("Abbey");
labelFunc0472_00D4:
	case "Taylor" attend labelFunc0472_00E7:
	message("\"He is a fellow monk. He spends his time studying the plants, animals, and geography of Britannia.\"");
	say();
	UI_remove_answer("Taylor");
labelFunc0472_00E7:
	case "paint" attend labelFunc0472_00FA:
	message("\"Yes,\" she blushes, \"I have long admired those who are able to express themselves visually. Sadly,\" she says, laughing, \"I am not very good. However, I also collect art. In fact, I have an original Sterling hanging in my room. Perhaps thou couldst see it sometime.\"");
	say();
	UI_remove_answer("paint");
labelFunc0472_00FA:
	case "garden" attend labelFunc0472_011E:
	var0001 = true;
	message("\"My garden? I have been tending it for years now. I am a firm believer in the value of aesthetics, so I plant only flowers. Sometimes I sell them in bouquets when people want them, but I do that very rarely.\"");
	say();
	UI_add_answer(["aesthetics", "buy"]);
	UI_remove_answer("garden");
labelFunc0472_011E:
	case "aesthetics" attend labelFunc0472_0131:
	message("\"It refers to the practice or study of all things beautiful.\"");
	say();
	UI_remove_answer("aesthetics");
labelFunc0472_0131:
	case "buy" attend labelFunc0472_0228:
	message("\"Thou wishest to buy a bouquet?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0472_0217;
	message("\"Dost thou have anyone to give these flowers to?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0472_020A;
	if (!(gflags[0x0128] && (!gflags[0x015C]))) goto labelFunc0472_0183;
	message("You tell her about the passing away of Reyna's mother.~\"Ah, yes. I had heard of Reyna's loss. That is a noble reason. Please take these flowers and give them to her.\"");
	say();
	var0004 = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	gflags[0x015C] = true;
	goto labelFunc0472_0207;
labelFunc0472_0183:
	message("\"Good. 'Tis always best to have someone to receive flowers. The flowers will cost 10 gold. Dost thou still want them?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0472_01F7;
	var0006 = Func0931(0xFE9B, 0x000A, 0x0284, 0xFE99, 0xFE99);
	var0007 = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	if (!var0006) goto labelFunc0472_01EA;
	if (!var0007) goto labelFunc0472_01E3;
	var0008 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	message("\"I think thou wilt find these to be exceptionally beautiful.\"");
	say();
	goto labelFunc0472_01E7;
labelFunc0472_01E3:
	message("\"It appears thou dost not have room for my flowers. A pity.\"");
	say();
labelFunc0472_01E7:
	goto labelFunc0472_01F4;
labelFunc0472_01EA:
	message("\"I am sorry, ");
	message(var0000);
	message(". Thou dost not have the gold.\"");
	say();
labelFunc0472_01F4:
	goto labelFunc0472_0207;
labelFunc0472_01F7:
	message("\"I understand, ");
	message(var0000);
	message(". Free flowers are indeed the best. And wild flowers are quite free. For now, ");
	message(var0000);
	message(", do no more than promise me thou wilt take the time to enjoy my garden.\"");
	say();
labelFunc0472_0207:
	goto labelFunc0472_0214;
labelFunc0472_020A:
	message("\"That is indeed unfortunate, ");
	message(var0000);
	message(". 'Tis always best to have someone to receive flowers.\"");
	say();
labelFunc0472_0214:
	goto labelFunc0472_0221;
labelFunc0472_0217:
	message("\"Perhaps next time, thou mightest be interested. For now, ");
	message(var0000);
	message(", do no more than promise me thou wilt take the time to enjoy my garden.\"");
	say();
labelFunc0472_0221:
	UI_remove_answer("buy");
labelFunc0472_0228:
	case "Kreg" attend labelFunc0472_023B:
	message("\"I am afraid I do not know of such a person.\"");
	say();
	UI_remove_answer("Kreg");
labelFunc0472_023B:
	case "bye" attend labelFunc0472_024E:
	message("\"Fare thee well, ");
	message(var0000);
	message(". May the sweet scent of beauty never pass thee by.\"*");
	say();
	abort;
labelFunc0472_024E:
	goto labelFunc0472_0059;
labelFunc0472_0251:
	endconv;
labelFunc0472_0252:
	if (!(event == 0x0000)) goto labelFunc0472_0260;
	Func092E(0xFF8E);
labelFunc0472_0260:
	return;
}


