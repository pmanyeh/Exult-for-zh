#game "blackgate"
void Func08C0 0x8C0 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	UI_push_answers();
	if (!gflags[0x01CC]) goto labelFunc08C0_002D;
	UI_add_answer("Forsythe");
labelFunc08C0_002D:
	if (!gflags[0x01C3]) goto labelFunc08C0_003A;
	UI_add_answer("Ferryman");
labelFunc08C0_003A:
	if (!gflags[0x01C4]) goto labelFunc08C0_0047;
	UI_add_answer("Markham");
labelFunc08C0_0047:
	if (!gflags[0x01CB]) goto labelFunc08C0_0054;
	UI_add_answer("Quenton");
labelFunc08C0_0054:
	if (!gflags[0x01C7]) goto labelFunc08C0_0061;
	UI_add_answer("Trent");
labelFunc08C0_0061:
	if (!gflags[0x01C2]) goto labelFunc08C0_006E;
	UI_add_answer("Caine");
labelFunc08C0_006E:
	UI_add_answer("no one");
	message("\"Very well, then. Of whom wouldst thou speak?\"");
	say();
labelFunc08C0_0079:
	converse attend labelFunc08C0_0336;
	case "Forsythe" attend labelFunc08C0_008F:
	message("She glowers at you for a moment. \"I have nothing to say about -that- bumbling clod!\"");
	say();
	UI_remove_answer("Forsythe");
labelFunc08C0_008F:
	case "Ferryman" attend labelFunc08C0_00A9:
	message("\"I know very little about that one. He's been here since the Liche called up the angry dead from their graves. I know one thing though: even shouldst thou defeat Horance, he will remain here under the geas he serves.\" She looks a little sad as she tells you this.");
	say();
	UI_remove_answer("Ferryman");
	UI_add_answer("angry dead");
labelFunc08C0_00A9:
	case "angry dead" attend labelFunc08C0_00BC:
	message("\"The graves of our ancestors have spilled forth the dead of Skara Brae. Their minds and hearts are rotted and they care not for the living. Hence the name `Angry Dead.'\"");
	say();
	UI_remove_answer("angry dead");
labelFunc08C0_00BC:
	case "Markham" attend labelFunc08C0_00D6:
	message("She gives you a cocked smile. \"That rascal opened one of the best pubs this side of Buccaneer's Den, or so he'd have thee believe. He's a bit rough around the edges, but he knows how to buy good wine, that is for sure. And his taste in bar maids isn't half bad, either,\" she wink. \"If thou hast met Paulette, thou dost know of what I speak.\"");
	say();
	UI_remove_answer("Markham");
	UI_add_answer("Paulette");
labelFunc08C0_00D6:
	case "Quenton" attend labelFunc08C0_00F4:
	message("\"That poor man has had a life fraught with grief, the one ailment none of my magics seems to be able to do much about.~~\"His wife, Gwen, was taken by a rather nasty group of men several years after the birth of their daughter, Marney. I know what happened to her, but I have spared Quenton this knowledge out of pity.~~\"The men thought she was a noble lady due to her unsurpassed beauty. When they found out she was the wife of a lowly fisherman, they raped her brutally and sold her to a disreputable brothel. Fortunately she died not long after her arrival there.\" Mordra looks profoundly saddened.");
	say();
	UI_remove_answer("Quenton");
	UI_add_answer("Marney");
	var0000 = true;
labelFunc08C0_00F4:
	case "Marney" attend labelFunc08C0_010E:
	message("\"Yes, yes, a half-told tale is no tale at all.\" She continues with her account of Quenton's sad life.~~\"Marney took ill after her mother's abduction and lived with one foot in the grave for several years more. Finally, Quenton could take it no longer. He borrowed money from a violent man named Michael, who went by the moniker, Blade. When he could not repay the loan, Blade slew him.~~\"However, this is not the end of my piteous tale, for even after his death, Quenton's shade was forced to remain in the town of Spirituality, where he had to watch his beloved Marney grow more ill and eventually die.~~\"Yorl, the man who cared for Marney after her father's death, built a shrine for her earthly\tbody.\" She grows silent for a while, eyes downcast. ~~\"It is my sincere hope that thou shalt rid us of Horance so that Quenton\tmay join his loved ones, wherever they may be.\"");
	say();
	UI_remove_answer("Marney");
	UI_add_answer("Blade");
labelFunc08C0_010E:
	case "Blade" attend labelFunc08C0_0121:
	message("Her face becomes passionless for the first time since you met her.~~\"The reason I know of this story is because my late brother, Rinaldo, sat on the bench at the High Court in Yew. He wrote to me about the capture of not only Blade, but also of the pirates who abducted Quenton's wife. The pirates spent the rest of their days in the lowest cells of a dungeon, and Blade met his fate upon the edge of a guillotine.~~\"A fitting death, dost thou not think?\"");
	say();
	UI_remove_answer("Blade");
labelFunc08C0_0121:
	case "Paulette" attend labelFunc08C0_0134:
	message("\"She is quite a lovely girl, although a bit childlike in outlook. Her father was not of this world, I believe. He spoke with an odd inflection and his appearance was very unlike most other people of Britannia.~~\"But then thou well knowest that many people of other worlds come to this land. I've even heard it rumored that Lord British himself is an outworlder. Imagine that.\" A sly expression crosses her face.");
	say();
	UI_remove_answer("Paulette");
labelFunc08C0_0134:
	case "Trent" attend labelFunc08C0_01B1:
	if (!gflags[0x01A6]) goto labelFunc08C0_0157;
	message("\"It is wonderful that those two have been brought back together. I only hope that Quenton will share that same fate.\" Her voice is full of hope.");
	say();
	if (!(!var0000)) goto labelFunc08C0_0154;
	UI_add_answer("Quenton");
labelFunc08C0_0154:
	goto labelFunc08C0_01A6;
labelFunc08C0_0157:
	if (!gflags[0x01A5]) goto labelFunc08C0_0194;
	if (!(!gflags[0x01A8])) goto labelFunc08C0_0179;
	message("\"Now that Trent has been brought out of himself, I believe it is time to have him construct the Soul Cage that will become the Liche's coffin.\" She smiles without humor.~~\"Go to him and assist him if thou wishest to free this town from Horance's grasp.\"");
	say();
	if (!(!var0004)) goto labelFunc08C0_0176;
	UI_add_answer("Horance the Liche");
labelFunc08C0_0176:
	goto labelFunc08C0_0191;
labelFunc08C0_0179:
	if (!gflags[0x01AA]) goto labelFunc08C0_018D;
	message("\"I feel as if a great weight has been lifted from me. I cannot thank thee enough for what thou hast done. However, we will not be free of the Liche's power until the Well of Souls has been destroyed.\"");
	say();
	UI_add_answer("Well of Souls");
	goto labelFunc08C0_0191;
labelFunc08C0_018D:
	message("\"Thou must use his cage well to stop the liche.\"");
	say();
labelFunc08C0_0191:
	goto labelFunc08C0_01A6;
labelFunc08C0_0194:
	message("\"Alas, I fear that his mind was broken by the loss of his wife, Rowena. He cannot break out of the hatred which consumes him. One day, he will be spent and his spirit will be lost forever. Perhaps, Rowena would know of something that could help... but no, she herself is in need of assistance.\" Mordra shakes her head.");
	say();
	if (!(!var0002)) goto labelFunc08C0_01A6;
	UI_add_answer("Rowena");
labelFunc08C0_01A6:
	UI_remove_answer("Trent");
	var0001 = true;
labelFunc08C0_01B1:
	case "Rowena" attend labelFunc08C0_01F8:
	UI_remove_answer("Rowena");
	if (!gflags[0x01A6]) goto labelFunc08C0_01DB;
	message("\"It is wonderful that those two have been brought back together. I only hope that Quenton will share that same fate.\" Her voice is full of hope.");
	say();
	if (!(!var0000)) goto labelFunc08C0_01D8;
	UI_add_answer("Quenton");
labelFunc08C0_01D8:
	goto labelFunc08C0_01ED;
labelFunc08C0_01DB:
	if (!(!gflags[0x01A9])) goto labelFunc08C0_01E9;
	message("\"Thou must find a way to bring her out of the Liche's ensorcelment, even if only for a brief moment. I am positive she holds the key to restoring Trent to his former self. Perhaps, if thou couldst find a personal article of hers -- something from Trent, perhaps -- and bring it to her. That might break the enchantment she is under.\"");
	say();
	goto labelFunc08C0_01ED;
labelFunc08C0_01E9:
	message("Mistress Mordra frowns a little. \"I hope that poor girl can hold out a little longer, until she can be taken away from that horrible place.\"");
	say();
labelFunc08C0_01ED:
	UI_remove_answer("Rowena");
	var0002 = true;
labelFunc08C0_01F8:
	case "Caine" attend labelFunc08C0_0260:
	if (!(!gflags[0x01C0])) goto labelFunc08C0_022B;
	message("\"He is a tortured spirit. He blames himself for the destruction of the town. In his delusion, he feels the flames of his death constantly. However, I believe his state gives him a certain purification and wisdom. It is said that he even knows the answers to life and death.\"~~She looks bemused. \"Regardless of that fact, it is from him that thou must get the magical concoction to destroy the Liche. However, I can give thee the list of ingredients.\"");
	say();
	UI_add_answer("ingredients");
	gflags[0x01C0] = true;
	if (!(!var0004)) goto labelFunc08C0_0224;
	UI_add_answer("Horance the Liche");
labelFunc08C0_0224:
	var0003 = true;
	goto labelFunc08C0_0259;
labelFunc08C0_022B:
	if (!(!gflags[0x01AA])) goto labelFunc08C0_0247;
	message("\"It is good that thou hast managed to create the magical\tformula; now must thou use it with the Soul Cage, to destroy Horance.\"");
	say();
	if (!(!var0004)) goto labelFunc08C0_0244;
	UI_add_answer("Horance the Liche");
labelFunc08C0_0244:
	goto labelFunc08C0_0259;
labelFunc08C0_0247:
	message("Her smile widens. \"Thou hast made excellent use of the formula. Now, we must find a way to destroy the Well of\tSouls, to free Skara Brae.\"");
	say();
	if (!(!var0005)) goto labelFunc08C0_0259;
	UI_add_answer("Well of Souls");
labelFunc08C0_0259:
	UI_remove_answer("Caine");
labelFunc08C0_0260:
	case "ingredients" attend labelFunc08C0_0273:
	message("\"If I tell thee, thou must be sure to get them right. Otherwise, what happened when I told that blasted mayor will happen again. And, while we here in Skara Brae have no more lives to lose, thou hast quite a valuable one! ~~\"The ingredients necessary to dissolve the liche are: a potion of invisibility, a potion of curing, and one vial of the essence of mandrake -- I have one somewhere in mine house. Remember, only -one-  vial!\"");
	say();
	UI_remove_answer("ingredients");
labelFunc08C0_0273:
	case "Horance the Liche" attend labelFunc08C0_0291:
	message("\"He is the blasted liche I was trying to destroy when the fire happened. Horance the mage apparently decided one day that mortality was not something for him. So, he began to research ways to avoid death. Finally, he came upon the formula required to make himself an undead -- an immortal undead -- liche. Unfortunately, this transformation, compounded with his already obsessive behavior, changed him into the evil thing he is today!~~\"And 'tis his evil, Black Service that commands us all!\"");
	say();
	UI_remove_answer("Horance the Liche");
	UI_add_answer("Black Service");
	var0004 = true;
labelFunc08C0_0291:
	case "Dark Tower" attend labelFunc08C0_02B6:
	message("\"The Dark Tower lies on the northwestern point of Skara Brae. There is something odd about its construction, for I find it very hard to penetrate with my magical senses.~Within it,\" she says, \"thou wilt find the Well of Souls.\"");
	say();
	UI_remove_answer("Dark Tower");
	if (!(!var0005)) goto labelFunc08C0_02B2;
	UI_add_answer("Well of Souls");
labelFunc08C0_02B2:
	var0006 = true;
labelFunc08C0_02B6:
	case "Well of Souls" attend labelFunc08C0_02DF:
	var0005 = true;
	message("\"The Well of Souls is a powerful artifact, located at the back of the Dark Tower, from which the Liche draws his power. The souls of the dead are incarcerated there, doomed to the torment of Horance's all-consuming appetite.\" An expression of pain shows in her features.");
	say();
	if (!(!var0004)) goto labelFunc08C0_02D4;
	UI_add_answer("Horance the Liche");
labelFunc08C0_02D4:
	UI_remove_answer("Well of Souls");
	var0005 = true;
labelFunc08C0_02DF:
	case "Black Service" attend labelFunc08C0_031C:
	if (!(!gflags[0x01AA])) goto labelFunc08C0_0303;
	message("Angrily, Mordra says, \"Each night, at the stroke of midnight, the spirits of Skara Brae travel to the Dark Tower and are used to infuse Horance with power to continue his dark existence. None of the others are aware when this happens, but I feel it without being able to stop myself.\"");
	say();
	if (!(!var0006)) goto labelFunc08C0_0300;
	UI_add_answer("Dark Tower");
labelFunc08C0_0300:
	goto labelFunc08C0_0315;
labelFunc08C0_0303:
	message("\"Even though the Liche is gone, we are still drawn to the place of his Black Service. He must have bound us with a geas and tied it to the power of the Well of Souls. Oh, what a crafty villain he was.\" Grudging respect for a skilled mage is mixed with disgust in Mordra's expression.");
	say();
	if (!(!var0005)) goto labelFunc08C0_0315;
	UI_add_answer("Well of Souls");
labelFunc08C0_0315:
	UI_remove_answer("Black Service");
labelFunc08C0_031C:
	case "no one" attend labelFunc08C0_0333:
	message("\"I see. Of what wouldst thou speak, then?\"*");
	say();
	UI_clear_answers();
	UI_pop_answers();
	goto labelFunc08C0_0336;
labelFunc08C0_0333:
	goto labelFunc08C0_0079;
labelFunc08C0_0336:
	endconv;
	return;
}


