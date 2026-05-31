#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0460 object#(0x460) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0460_0009;
	abort;
labelFunc0460_0009:
	UI_show_npc_face(0xFFA0, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	var0001 = Func08F7(0xFFAD);
	if (!var0001) goto labelFunc0460_003F;
	UI_add_answer("Margareta");
labelFunc0460_003F:
	if (!gflags[0x01D2]) goto labelFunc0460_004C;
	UI_add_answer("hourglass");
labelFunc0460_004C:
	if (!(!gflags[0x011B])) goto labelFunc0460_005E;
	message("You see a swarthy gypsy with soulful eyes, dressed in colorful clothes. He looks as if he has the weight of the world on his shoulders.");
	say();
	gflags[0x011B] = true;
	goto labelFunc0460_0062;
labelFunc0460_005E:
	message("\"Greetings vonce again,\" Jergi says as he bows, making a swirling gesture with his hand.");
	say();
labelFunc0460_0062:
	converse attend labelFunc0460_01B4;
	case "name" attend labelFunc0460_0078:
	message("\"I am Jergi. Pleased to make thine acqvaintance.\"");
	say();
	UI_remove_answer("name");
labelFunc0460_0078:
	case "job" attend labelFunc0460_008B:
	message("\"I am the King ov the Gypsies.\"");
	say();
	UI_add_answer("gypsies");
labelFunc0460_008B:
	case "gypsies" attend labelFunc0460_00AB:
	message("\"My people have almost completely died out in this vorld. Now that I am their leader I am making their velfare my sole responsibility. Soon I vill decide if ve vill leave Minoc.\"");
	say();
	UI_remove_answer("gypsies");
	UI_add_answer(["died out", "Minoc"]);
labelFunc0460_00AB:
	case "died out" attend labelFunc0460_00BE:
	message("\"Ve gypsies are a people who live to vander. But there are fewer and fewer places vhere ve are velcome. Ve are victimized by the ancient hatreds that have plagued our kind since the days ov ancient Sosaria.\"");
	say();
	UI_remove_answer("died out");
labelFunc0460_00BE:
	case "Minoc" attend labelFunc0460_00DE:
	message("\"Our people came here because ve thought ve vould be accepted. It seemed for a very long time that ve vere. But after these savage murders it looks like it is time for us to roam vonce again.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["accepted", "murders"]);
labelFunc0460_00DE:
	case "accepted" attend labelFunc0460_00F1:
	message("\"Ve have alvays been subject to the prejudices ov others! Ve are called thieves and vorse! But ve are a people that only vish to play our music, and dance, and live in peace. I thought the people here understood this.\"");
	say();
	UI_remove_answer("accepted");
labelFunc0460_00F1:
	case "murders" attend labelFunc0460_0114:
	message("\"Frederico vas mine only brother, and no vone loved Tania more than I did, save for Frederico himself. Vhat happened to them vas unspeakable. I vish I could tell thee more. If thou vishest thou may speak to Sasha, but only briefly. Now is the time for him to mourn.\"");
	say();
	UI_remove_answer("murders");
	UI_add_answer(["Frederico", "Tania", "Sasha"]);
labelFunc0460_0114:
	case "Frederico" attend labelFunc0460_0127:
	message("\"Some thought ov my brother Frederico as a harsh man, but those ov us who knew him could see that he vas simply governed by the same prides and passions that rule all gypsies.\"");
	say();
	UI_remove_answer("Frederico");
labelFunc0460_0127:
	case "Tania" attend labelFunc0460_013A:
	message("\"She vas the most beautiful voman I had ever seen. Both my brother and I vere in love vith her. Ve both tried to vin her heart. I failed and thought that I vould spend the rest ov my life vith no vone. It vas not until last year that my vife Margareta and I vere married and my secretly broken heart vas mended.\"");
	say();
	UI_remove_answer("Tania");
labelFunc0460_013A:
	case "Sasha" attend labelFunc0460_015A:
	message("\"He is the son ov Frederico and Tania. He left us to learn more about The Fellowship. Ov course, he feels responsible for vhat happened...\"");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer(["responsible", "Fellowship"]);
labelFunc0460_015A:
	case "responsible" attend labelFunc0460_016D:
	message("\"Ve do not blame Sasha for vhat happened. Ve vill not punish him.\"");
	say();
	UI_remove_answer("responsible");
labelFunc0460_016D:
	case "Fellowship" attend labelFunc0460_0180:
	message("\"Sasha vill have to decide if he vants to stay vith his people or return to The Fellowship. I believe he vill make the right choice.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0460_0180:
	case "Margareta" attend labelFunc0460_0193:
	message("\"My vife is a vise voman who has some ov the necessary talents to see the future. Thou shouldst speak vith her.\"");
	say();
	UI_remove_answer("Margareta");
labelFunc0460_0193:
	case "hourglass" attend labelFunc0460_01A6:
	message("\"I do not know vhat thou art talking about. I know nothing of a mage named Nicodemus, nor of his hourglass. Be vary -- mages are quite mad these days!\"");
	say();
	UI_remove_answer("hourglass");
labelFunc0460_01A6:
	case "bye" attend labelFunc0460_01B1:
	goto labelFunc0460_01B4;
labelFunc0460_01B1:
	goto labelFunc0460_0062;
labelFunc0460_01B4:
	endconv;
	message("\"Mayest thou have much fortune in thine endeavors.\"*");
	say();
	return;
}


