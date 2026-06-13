#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);
extern void Func0858 0x858 ();
extern void Func0859 0x859 ();
extern void Func085A 0x85A ();
extern void Func0857 0x857 ();
extern void Func08FF 0x8FF ();

void Func041D object#(0x41D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "his";
	if (!var0001) goto labelFunc041D_001F;
	var0002 = "her";
labelFunc041D_001F:
	var0003 = Func0953();
	if (!(event == 0x0001)) goto labelFunc041D_005B;
	UI_item_say(0xFE9C, "@Excuse me...@");
	0xFFE3->Func07D1();
	Func097F(0xFFE3, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFE3, 0x0003);
labelFunc041D_005B:
	if (!(event == 0x0000)) goto labelFunc041D_0101;
	var0004 = UI_get_random(0x0006);
	if (!(var0004 == 0x0001)) goto labelFunc041D_0081;
	UI_item_say(0xFFE3, "@Wares for sale!@");
labelFunc041D_0081:
	if (!(var0004 == 0x0002)) goto labelFunc041D_0095;
	UI_item_say(0xFFE3, "@Reagents!@");
labelFunc041D_0095:
	if (!(var0004 == 0x0003)) goto labelFunc041D_00A9;
	UI_item_say(0xFFE3, "@Potions! Scrolls!@");
labelFunc041D_00A9:
	if (!(var0004 == 0x0004)) goto labelFunc041D_00BD;
	UI_item_say(0xFFE3, "@Do not touch that!@");
labelFunc041D_00BD:
	if (!(var0004 == 0x0005)) goto labelFunc041D_00D1;
	UI_item_say(0xFFE3, "@Please come in.@");
labelFunc041D_00D1:
	if (!(var0004 == 0x0006)) goto labelFunc041D_0101;
	if (!(!gflags[0x00DD])) goto labelFunc041D_00EF;
	UI_item_say(0xFFE3, "@What shall I do?@");
	goto labelFunc041D_0101;
labelFunc041D_00EF:
	UI_item_say(0xFFE3, (("@Hello, " + var0003) + "!@"));
labelFunc041D_0101:
	if (!(event == 0x0009)) goto labelFunc041D_0AD6;
	UI_run_schedule(0xFFE3);
	UI_clear_item_say(0xFFE3);
	UI_show_npc_face0(0xFFE3, 0x0000);
	if (!(!UI_get_item_flag(0xFFE3, 0x001C))) goto labelFunc041D_016D;
	message("\"Yes, I remember thee from the banquet -- Rotoluncia wanted to kill thee!\"");
	say();
	UI_set_item_flag(0xFFE3, 0x001C);
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_0152;
	message("\"Welcome to the Apothecary Shop. I am Pothos, the proprietor.\"");
	say();
	goto labelFunc041D_015A;
labelFunc041D_0152:
	message("\"I am Pothos, the Apothecary in this city.\"");
	say();
	message("\"If thou desirest potions, reagents, or other ingredients such as are customary in the practice of magic, come to my shop.\"");
	say();
labelFunc041D_015A:
	UI_add_answer(["banquet", "Rotoluncia", "Apothecary Shop"]);
	goto labelFunc041D_0210;
labelFunc041D_016D:
	if (!(gflags[0x00E8] && (!gflags[0x00DD]))) goto labelFunc041D_01F1;
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x0001)) goto labelFunc041D_01E4;
	message("\"Thou dost have the Blood Moss! Wonderful!\"");
	say();
	message("\"In exchange for thy service, I will trust thee with the information that wilt allow thee to speak with Erstam.");
	say();
	var0005 = UI_count_objects(0xFE9B, 0x034A, 0xFE99, 0x0001);
	var0004 = UI_remove_party_items(var0005, 0x034A, 0xFE99, 0x0001, 0x0000);
	gflags[0x00DD] = true;
	var0004 = UI_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x27, 0x0082, (byte)0x55, 0x041F]);
	goto labelFunc041D_01EE;
labelFunc041D_01E4:
	message("\"I am waiting for the Blood Moss, ");
	message(var0000);
	message(".\"");
	say();
labelFunc041D_01EE:
	goto labelFunc041D_0210;
labelFunc041D_01F1:
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_020C;
	message("\"Shopping for something, ");
	message(var0000);
	message("?\"");
	say();
	goto labelFunc041D_0210;
labelFunc041D_020C:
	message("\"What can I do for thee?\"");
	say();
labelFunc041D_0210:
	if (!(gflags[0x00DD] && (!gflags[0x01B7]))) goto labelFunc041D_0222;
	UI_add_answer("tell me about Erstam");
labelFunc041D_0222:
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_0237;
	UI_add_answer("buy");
labelFunc041D_0237:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc041D_0249;
	UI_add_answer("strange wine");
labelFunc041D_0249:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc041D_025B;
	UI_add_answer("slippers");
labelFunc041D_025B:
	if (!(gflags[0x0111] && (!gflags[0x028F]))) goto labelFunc041D_026D;
	UI_add_answer("apparatus");
labelFunc041D_026D:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc041D_027F;
	UI_add_answer("bloody hand");
labelFunc041D_027F:
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc041D_029B;
	UI_add_answer("Stoneheart");
labelFunc041D_029B:
	if (!(gflags[0x00DC] && (!gflags[0x00E8]))) goto labelFunc041D_02AD;
	UI_add_answer("secret");
labelFunc041D_02AD:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041D_02C6;
	UI_add_answer("kidnap");
labelFunc041D_02C6:
	if (!(!UI_get_item_flag(0xFFE1, 0x0004))) goto labelFunc041D_02DB;
	UI_add_answer("Rotoluncia");
labelFunc041D_02DB:
	UI_add_answer(["bye"]);
labelFunc041D_02E5:
	converse attend labelFunc041D_0AD5;
	case "tell me about Erstam" attend labelFunc041D_0312:
	UI_remove_answer("tell me about Erstam");
	message("\"It would not be wise for me to tell thee much. I shall merely acquaint thee with how to reach the docks, how to call thy transport, and the required password.\"");
	say();
	UI_push_answers();
	UI_add_answer(["reach the docks", "call transport", "password", "change subject"]);
labelFunc041D_0312:
	case "kidnap" attend labelFunc041D_032D:
	UI_remove_answer("kidnap");
	message("\"Thy friend was taken by magical means? 'Tis incredible. Thou art new to this town...\"");
	say();
	message("\"Julia of the Rangers might be of aid to thee, but I doubt it. This matter concerns magic, and she is merely Mundane.\"");
	say();
	message("\"I advise thee to speak to Fedabiblio -- he can counsel thee well. And he doth have connections in high places.\"");
	say();
labelFunc041D_032D:
	case "banquet" attend labelFunc041D_0353:
	UI_remove_answer("banquet");
	message("\"I apologize for disrupting the party, ");
	message(var0000);
	message(". Normally, I wouldn't have been there. But I had been on a special errand for the MageLord.\"");
	say();
	UI_add_answer(["Wouldn't have been there?", "errand"]);
labelFunc041D_0353:
	case "Wouldn't have been there?" attend labelFunc041D_0373:
	UI_remove_answer("Wouldn't have been there?");
	message("\"While it is true that I am a Mage, I am not an Adept. And Filbercio invites only Adepts to his banquets, as a rule.\"");
	say();
	UI_add_answer(["Filbercio", "Adept"]);
labelFunc041D_0373:
	case "Filbercio" attend labelFunc041D_0399:
	UI_remove_answer("Filbercio");
	message("\"Filbercio is the MageLord! And thou wouldst do well not to forget that while thou art in Moonshade.\"");
	say();
	message("\"Filbercio is a man of great passions. The Mountains of Freedom are a powerful argument against crossing him in any way.\"");
	say();
	if (!(gflags[0x012E] == false)) goto labelFunc041D_0399;
	UI_add_answer("Freedom");
labelFunc041D_0399:
	case "Freedom" attend labelFunc041D_03CB:
	UI_remove_answer("Freedom");
	message("\"The name was meant in jest, I'm certain. For the Mountains of Freedom are a prison, ");
	message(var0000);
	message(". A prison meant to hold Mage and Mundane alike.\"");
	say();
	message("\"It is said that if thou art sentenced to that terrible stone pit, and thou canst win thy way back to the outside world, then thou art free. No one will hunt thee for the crimes thou didst commit before thine incarceration...\"");
	say();
	message("\"The only problem is that none have ever won free. And Filbercio reigns unchallenged.\"");
	say();
	gflags[0x012E] = true;
	UI_add_answer(["stone pit", "unchallenged"]);
labelFunc041D_03CB:
	case "stone pit" attend labelFunc041D_03E2:
	UI_remove_answer("stone pit");
	message("\"The Mountains of Freedom are a mine that was shut down long ago when the quality of ore became profitless to dredge from the mountain's heart.\"");
	say();
	message("\"Filbercio devised a new use for it, and turned it into a prison. Now its value lies not in what is gotten out of the mine, but in what is put into it.\"");
	say();
labelFunc041D_03E2:
	case "unchallenged" attend labelFunc041D_0403:
	UI_remove_answer("unchallenged");
	message("\"There is little true crime here, ");
	message(var0000);
	message(".\"");
	say();
	message("\"Most of the offenders that find themselves within the confines of Freedom are there because they angered Filbercio in some way.\"");
	say();
	message("\"The very existence of Freedom silences most of the MageLord's detractors.\"");
	say();
labelFunc041D_0403:
	case "Adept" attend labelFunc041D_0424:
	UI_remove_answer("Adept");
	message("\"There are different levels of competence with magic, ");
	message(var0000);
	message(". It is all based on what level of spells thou canst cast.\"");
	say();
	message("\"I myself can only master the third level of spells. An Adept can master the ninth level of spells.\"");
	say();
	message("\"Only an Adept can become MageLord, or sit on the Council of Mages. So I make my living selling reagents to Adepts.\"");
	say();
labelFunc041D_0424:
	case "errand" attend labelFunc041D_0460:
	UI_remove_answer("errand");
	message("\"With these storms, I have had little trade with the mainland, so I'm nearly out of most reagents. Filbercio wished me to gather some Blood Moss for him.\"");
	say();
	message("\"I tried. But these storms have brought fierce monsters into that area... And I'm no Adept to deal with them.\"");
	say();
	message("\"Filbercio threatened to throw me into the Mountains of Freedom if I do not obtain the Blood Moss! I'd trade my dearest secret to be able to find some Blood Moss!\"");
	say();
	if (!(gflags[0x00DC] && (!gflags[0x00E8]))) goto labelFunc041D_0451;
	UI_add_answer("secret");
labelFunc041D_0451:
	if (!(gflags[0x012E] == false)) goto labelFunc041D_0460;
	UI_add_answer("Freedom");
labelFunc041D_0460:
	case "secret" attend labelFunc041D_04E6:
	UI_remove_answer("secret");
	if (!(gflags[0x011F] == true)) goto labelFunc041D_04AE;
	message("\"Hast thou reconsidered mine offer?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc041D_0492;
	message("\"Thou art my savior! I shall await thy return eagerly.\"");
	say();
	gflags[0x011F] = false;
	gflags[0x00E8] = true;
	goto labelFunc041D_04AB;
labelFunc041D_0492:
	message("\"My fate is certain!\"");
	say();
	gflags[0x011F] = true;
	UI_remove_npc_face0();
	Func097F(0xFFE3, "@I am lost!@", 0x0000);
	abort;
labelFunc041D_04AB:
	goto labelFunc041D_04E6;
labelFunc041D_04AE:
	message("\"Thou knowest?!\"");
	say();
	message("\"It is true. I am Erstam's son... Which is why I still continue to trade with him, even though it is forbidden. If the Council knew, I'd surely be exiled.\"");
	say();
	message("\"Since thou knowest, I will offer thee a deal. If thou wilt go to the swamps south of here and bring back some Blood Moss for me, I will tell thee how to contact my father.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc041D_04CD;
	message("\"Thou art my savior! I shall await thy return eagerly.\"");
	say();
	gflags[0x00E8] = true;
	goto labelFunc041D_04E6;
labelFunc041D_04CD:
	message("\"Then I have nothing to bargain with. I shall certainly end my life in the Mountains of Freedom now!\"");
	say();
	gflags[0x011F] = true;
	UI_remove_npc_face0();
	Func097F(0xFFE3, "@I am lost!@", 0x0000);
	abort;
labelFunc041D_04E6:
	case "Rotoluncia" attend labelFunc041D_052C:
	UI_remove_answer("Rotoluncia");
	message("\"Like Filbercio, Rotoluncia doth have a will of steel and a fiery temper.\"");
	say();
	message("\"She is convinced that some outside force is responsible for these abominable storms.\"");
	say();
	if (!gflags[0x00EA]) goto labelFunc041D_050E;
	message("\"I wonder... perhaps Rotoluncia could have had something to do with thy companion's demise?\"");
	say();
	message("\"If thou dost wish to visit her, she lives in a manor in the northeast corner of the city.\"");
	say();
	goto labelFunc041D_0518;
labelFunc041D_050E:
	message("\"She hates thee because she thinks that thou art keeping knowledge from her. It isn't anything personal, ");
	message(var0000);
	message(".\"");
	say();
labelFunc041D_0518:
	UI_push_answers();
	UI_add_answer(["force", "storms", "change subject"]);
labelFunc041D_052C:
	case "change subject" attend labelFunc041D_0542:
	message("\"Why, certainly, ");
	message(var0000);
	message("...\"");
	say();
	UI_pop_answers();
labelFunc041D_0542:
	case "force" attend labelFunc041D_0570:
	UI_remove_answer("force");
	message("\"Well, to be precise, I should say that she suspects a recent visitor -- a Mage named Batlin.\"");
	say();
	message("\"I'll grant that he came through asking all sorts of questions, and badgering people to sell their Serpent Teeth. But I fail to see how she thinks he doth have anything to do with the storms.\"");
	say();
	message("\"And I'm afraid that she thinks all strangers are in league with Batlin. Of course, it did not help that he had that Daemon, either...\"");
	say();
	UI_add_answer(["Batlin", "questions", "Serpent Teeth", "Daemon"]);
labelFunc041D_0570:
	case "Batlin" attend labelFunc041D_0587:
	UI_remove_answer("Batlin");
	message("\"Little, fat man... Small beard and mustache... Angry scowl. I'm sure thou wilt remember him if thou hast met him.\"");
	say();
	message("\"Not a particularly nice person, that I recall. Seemed like any other Adept -- used to getting his way, and angry if thwarted. I dealt as little with him as possible.\"");
	say();
labelFunc041D_0587:
	case "questions" attend labelFunc041D_05AB:
	UI_remove_answer("questions");
	message("\"Batlin seemed very interested in learning more of the history of the ancient people of this land -- the ones we call the Ophidians.\"");
	say();
	message("\"As I am far from my days as a novice, I do not remember all that the Magister taught us. I wasn't much interested then, or now. I sent him to Fedabiblio.\"");
	say();
	UI_add_answer(["Ophidians", "Fedabiblio"]);
labelFunc041D_05AB:
	case "Ophidians" attend labelFunc041D_05BE:
	UI_remove_answer("Ophidians");
	message("\"As I told thee, I don't recall very much history. All I do know is that the ancients seem to have worshipped serpents. If thou wishest to know more, ask Fedabiblio. He's very learned on the subject.\"");
	say();
labelFunc041D_05BE:
	case "Fedabiblio" attend labelFunc041D_05D5:
	UI_remove_answer("Fedabiblio");
	message("\"Fedabiblio keeps the library here in Moonshade. All information, whether historical or magical in nature, finds its way to his hands.\"");
	say();
	message("\"He is also the teacher of the novices, so I'm certain that he will be able to help thee with any questions thou mightest have.\"");
	say();
labelFunc041D_05D5:
	case "Serpent Teeth" attend labelFunc041D_0615:
	UI_remove_answer("Serpent Teeth");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_0603;
	message("\"'Tis a tradition, ");
	message(var0000);
	message(", to steal some small item from my father to prove that thou art a worthy Mage. 'Tis never anything of value, so I have said nothing so far.\"");
	say();
	message("\"A particular favorite item to purloin is a Serpent Tooth from my father's collection. As far as I know, they are useless. But Batlin certainly wanted to purchase them.\"");
	say();
	message("\"No one would sell... Who knows, perhaps he hoped to make some sort of deal with my father for them.\"");
	say();
	goto labelFunc041D_0615;
labelFunc041D_0603:
	message("\"'Tis a tradition, ");
	message(var0000);
	message(", to steal some small item from the Mad Mage to prove that thou art a worthy Mage.\"");
	say();
	message("\"A particular favorite item to purloin is a Serpent Tooth from the Mad Mage's collection. As far as I know, they are useless. But Batlin certainly wanted to purchase them.\"");
	say();
	message("\"No one would sell... Who knows, perhaps he hoped to make some sort of deal with the Mad Mage for them.\"");
	say();
labelFunc041D_0615:
	case "Daemon" attend labelFunc041D_0630:
	UI_remove_answer("Daemon");
	message("\"Yes! Batlin had a Daemon wandering about at his heels, as tame as thou couldst please. Did his bidding without a word... Big, big, ugly red creature.\"");
	say();
	message("\"'Tis just the thing to catch Rotoluncia's eye... She's very interested in learning to tame a Daemon for her personal servant. She was quite put out that Batlin wouldn't tell her how he had done it.\"");
	say();
	message("\"But I'm sure Filbercio heaved a sigh of relief when Batlin refused to tell her. Everyone knows that Rotoluncia would love to feed Filbercio to a Daemon, in small pieces.\"");
	say();
labelFunc041D_0630:
	case "storms" attend labelFunc041D_0658:
	UI_remove_answer("storms");
	message("\"Definitely magic-born, no doubt about it. Anyone caught outside during one risks being teleported into oblivion.\"");
	say();
	message("\"Gustacio hath been working on finding a way to stop the storms. But so far, he hath not had any luck. Mayhaps now that Mortegro is helping him, they'll find the answer...\"");
	say();
	message("\"I certainly hope so. Moonshade is isolated until they do.\"");
	say();
	UI_add_answer(["Gustacio", "Mortegro"]);
labelFunc041D_0658:
	case "Gustacio" attend labelFunc041D_066F:
	UI_remove_answer("Gustacio");
	message("\"Gustacio is an Adept that specializes in working with the weather... the power of nature, and all that.\"");
	say();
	message("\"Gustacio said something about needing to learn as much about the storms as possible. Even babbled something about learning to see the colors... At least it sounded like babble to me.\"");
	say();
labelFunc041D_066F:
	case "Mortegro" attend labelFunc041D_0686:
	UI_remove_answer("Mortegro");
	message("\"Mortegro is an Adept that specializes in speaking with the dead. He doth not bind them to service or anything, simply talks to them.\"");
	say();
	message("\"Why Gustacio wants Mortegro's help, I'll never know. Unless the dead are responsible for the storms, or something.\"");
	say();
labelFunc041D_0686:
	case "Apothecary Shop" attend labelFunc041D_069D:
	UI_remove_answer("Apothecary Shop");
	message("\"I sell everything that thou wouldst need to cast spells or do magic...\"");
	say();
	message("\"Unfortunately, I have a very limited supply of most things right now.\"");
	say();
labelFunc041D_069D:
	case "password" attend labelFunc041D_06C9:
	UI_remove_answer("password");
	if (!gflags[0x0145]) goto labelFunc041D_06B9;
	message("\"Oh -- didst thou forget? How embarrassing...\"");
	say();
	goto labelFunc041D_06BD;
labelFunc041D_06B9:
	message("\"Isn't it interesting that Blood Moss is so potent, since it is connected with the fluid of life? Blood... But I'm babbling...\"");
	say();
labelFunc041D_06BD:
	gflags[0x0145] = true;
	message("\"Erstam shall not speak a word to thee unless thou dost speak the password which I do give thee. This will be the sign that I have sent thee.\"");
	say();
	message("\"The password is @Iskatradeeth@.\"");
	say();
labelFunc041D_06C9:
	case "reach the docks" attend labelFunc041D_06DC:
	UI_remove_answer("reach the docks");
	message("\"Thou must go to the docks north of the Mountains of Freedom. My father hath trained a sea creature to come on command. It will take thee to Erstam -- do not fear. But remember to not leave any of thy possessions upon it, for once it leaves thou shalt not be able to recall it.\"");
	say();
labelFunc041D_06DC:
	case "call transport" attend labelFunc041D_06FA:
	UI_remove_answer("call transport");
	message("\"To call the creature, go to the docks. There, thou shalt find a ship's bell.\"");
	say();
	message("\"Once thou hast rung the bell and chanted the mantra, thy transport will arrive. It can only take thee to my father's island... nowhere else.\"");
	say();
	UI_add_answer("mantra");
labelFunc041D_06FA:
	case "mantra" attend labelFunc041D_076C:
	if (!gflags[0x0145]) goto labelFunc041D_0768;
	UI_remove_answer("mantra");
	message("\"My, thou art impatient! I was just about to tell thee...\"");
	say();
	message("\"I Re-Ten Bentas Juxark I! Praetimde Mir-Wis Re-Por I.\"");
	say();
	message("\"To learn its meaning, translate it from the language of Magic.\"");
	say();
	message("\"Alas -- as is often the case, 'tis not required to understand power to use it.\"");
	say();
	var0006 = Func0992(0xFFFD, (((("@" + var0003) + " learned ") + var0002) + " lessons well in the days of the False Prophet.@"), "@I was taught well in the days of the False Prophet...@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Whom?\"");
	say();
	var0006 = Func0992(0x0001, "@Never mind...@", "@Never mind...@", false);
	UI_set_conversation_slot(0x0000);
	gflags[0x013D] = true;
	goto labelFunc041D_076C;
labelFunc041D_0768:
	message("\"No, no, no -- thou shouldst learn of the password first! Thou dost need it most of all, for Erstam shall not speak with thee without it!\"");
	say();
labelFunc041D_076C:
	case "buy" attend labelFunc041D_07BD:
	message("\"What dost thou need?\"");
	say();
	var0004 = Func0956(["Potions", "Reagents", "Magic Items"]);
	if (!(var0004 == "Potions")) goto labelFunc041D_079B;
	message("\"What potion dost thou wish to purchase?\"");
	say();
	Func0858();
labelFunc041D_079B:
	if (!(var0004 == "Reagents")) goto labelFunc041D_07AC;
	message("\"What reagents dost thou desire to buy?\"");
	say();
	Func0859();
labelFunc041D_07AC:
	if (!(var0004 == "Magic Items")) goto labelFunc041D_07BD;
	message("\"What magic items wouldst thou care to buy?\"");
	say();
	Func085A();
labelFunc041D_07BD:
	case "strange wine" attend labelFunc041D_07E3:
	UI_remove_answer("strange wine");
	message("\"That can only be Moonshade wine, ");
	message(var0000);
	message(". The Rangers make it right here in the city, with a magic wine press -- naturally.\"");
	say();
	UI_add_answer(["Rangers", "magic wine press"]);
labelFunc041D_07E3:
	case "Rangers" attend labelFunc041D_07FD:
	UI_remove_answer("Rangers");
	message("\"The Rangers are nominally the city guards. They deal with any physical threats that aren't worthy of bothering a Mage about. Their commander is a woman named Julia.\"");
	say();
	UI_add_answer("Julia");
labelFunc041D_07FD:
	case "Julia" attend labelFunc041D_0814:
	UI_remove_answer("Julia");
	message("\"Julia is a rather forbidding woman. Always seems to be looking for thy secret desire to cause trouble, if thou knowest what I mean.\"");
	say();
	message("\"She's quite competent, but not overly warm. I've actually seen her rebuff the MageLord's advances... A formidable woman, indeed.\"");
	say();
labelFunc041D_0814:
	case "magic wine press" attend labelFunc041D_084B:
	UI_remove_answer("magic wine press");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_083A;
	message("\"The magic wine press is another piece of my father's legacy, ");
	message(var0000);
	message(". He hath always liked fine wine, but hated the work required to make it. So he made the wine press.\"");
	say();
	goto labelFunc041D_084B;
labelFunc041D_083A:
	message("\"The magic wine press is another piece of Erstam's legacy, ");
	message(var0000);
	message(". He always liked fine wine, but hated the work required to make it. So he made the wine press.\"");
	say();
	UI_add_answer("Erstam");
labelFunc041D_084B:
	case "Erstam" attend labelFunc041D_0866:
	UI_remove_answer("Erstam");
	message("\"Erstam was the mentor of most of the Adepts. He was a hard master, so they say.\"");
	say();
	message("\"The popular story is that Erstam would never admit that any of his students were ready to be called Adepts in their own right. Apparently, he wanted the free labor for as long as he could have it.\"");
	say();
	message("\"Each one rebelled against him, until he became angry and withdrew to his own little island -- forswearing any company but that of his assistants.\"");
	say();
labelFunc041D_0866:
	case "slippers" attend labelFunc041D_0894:
	UI_remove_answer("slippers");
	message("\"Hmmm. I don't think that they belong to a Mage, ");
	message(var0000);
	message(". Most Mages prefer something a bit more... impressive.\"");
	say();
	message("\"These look more like something a Mundane would wear. Thou mightest check with Bucia over at the Capessii Canton.\"");
	say();
	gflags[0x0115] = true;
	UI_add_answer(["Bucia", "Capessii Canton"]);
labelFunc041D_0894:
	case "Bucia" attend labelFunc041D_08B2:
	UI_remove_answer("Bucia");
	message("\"If any one person could be considered the heart of Moonshade, I'd be hard-pressed to say whether it was Bucia or Rocco.\"");
	say();
	message("\"Bucia doth do business with both Mage and Mundane, so she usually has a full share of the most recent gossip in the city -- which she collects like a ship collects barnacles.\"");
	say();
	UI_add_answer("Rocco");
labelFunc041D_08B2:
	case "Rocco" attend labelFunc041D_08C9:
	UI_remove_answer("Rocco");
	message("\"Rocco is the proprietor of the Blue Boar Inn. Most of the people in the city -- Mage and Mundane alike -- eat there.\"");
	say();
	message("\"Rocco collects gossip from those too far in their cups to care what is said to whom. So, between Bucia and Rocco, they hear everything going on in Moonshade.\"");
	say();
labelFunc041D_08C9:
	case "Capessi Canton" attend labelFunc041D_08E3:
	UI_remove_answer("Capessi Canton");
	message("\"Strange name, isn't it? 'Tis actually Flindo's shop, but he's away so much that Bucia runs it.\"");
	say();
	UI_add_answer("Flindo");
labelFunc041D_08E3:
	case "Flindo" attend labelFunc041D_08F6:
	UI_remove_answer("Flindo");
	message("\"Flindo travels to and from the mainland quite often to purchase merchandise for the shop -- which is another reason Bucia is a good source for information. She hears what Flindo learns in his trips.\"");
	say();
labelFunc041D_08F6:
	case "apparatus" attend labelFunc041D_091E:
	UI_remove_answer("apparatus");
	message("\"'Tis a Mage's equipment. But I don't recognize the style.\"");
	say();
	message("\"Every Mage prefers something different from the others. This isn't one I'm familiar with, but I'm not that well-connected.\"");
	say();
	message("\"Thou shouldst ask Master Ducio. Or, better yet, Topo -- if thou dost wish an answer.\"");
	say();
	UI_add_answer(["Ducio", "Topo"]);
labelFunc041D_091E:
	case "Ducio" attend labelFunc041D_0935:
	UI_remove_answer("Ducio");
	message("\"Ducio is a Master Artisan. His work is incredibly good -- when he does any work at all.\"");
	say();
	message("\"Most of the time he leaves the work to his apprentice. But I know for a fact that he makes all the lab apparatus for the Adepts. He should be able to tell thee who this piece belongs to... if he's awake, that is!\"");
	say();
labelFunc041D_0935:
	case "Topo" attend labelFunc041D_0950:
	UI_remove_answer("Topo");
	message("\"Topo is the unfortunate boy that Master Ducio took for an apprentice. He's the one that does all the work at the shop.\"");
	say();
	message("\"Despite Ducio's sloth, Topo seems to have quite a bit of talent and promise. In fact, everyone in Moonshade hath learned to go to Topo if they need anything...\"");
	say();
	message("\"The service is quicker and much friendlier.\"");
	say();
labelFunc041D_0950:
	case "bloody hand" attend labelFunc041D_0991:
	UI_remove_answer("bloody hand");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_0978;
	message("\"Eyeh! Please, put it away!\"");
	say();
	message("\"I do not need to look at it any more to be able to tell thee that it is the damnable product of my father's experiments! Is it any wonder that they call him the Mad Mage?!\"");
	say();
	gflags[0x029B] = true;
	goto labelFunc041D_0984;
labelFunc041D_0978:
	message("\"Eyeh! Please, put it away!\"");
	say();
	message("\"I do not need to look at it any more to be able to tell thee that it is the damnable product of Erstam's experiments! Is it any wonder that they call him the Mad Mage?!\"");
	say();
	gflags[0x029B] = true;
labelFunc041D_0984:
	UI_add_answer(["experiments", "Mad Mage"]);
labelFunc041D_0991:
	case "experiments" attend labelFunc041D_09C4:
	UI_remove_answer("experiments");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_09B5;
	message("\"My father seeks to find the secret to creating life. I surmise that it's his attempt at immortality -- Even spells fall to the ravages of time in the end.\"");
	say();
	message("\"Unfortunately, Erstam's quest for knowledge hath been at the sacrifice of his assistants. Vasel hath sidestepped the inevitable much longer than I would have expected...\"");
	say();
	goto labelFunc041D_09BD;
labelFunc041D_09B5:
	message("\"Erstam seeks to find the secret to creating life. I surmise that it's his attempt at immortality -- Even spells fall to the ravages of time in the end.\"");
	say();
	message("\"Unfortunately, Erstam's quest for knowledge hath been at the sacrifice of his assistants. Vasel hath sidestepped the inevitable much longer than I would have expected...\"");
	say();
labelFunc041D_09BD:
	UI_add_answer("Vasel");
labelFunc041D_09C4:
	case "Vasel" attend labelFunc041D_09E8:
	UI_remove_answer("Vasel");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_09E4;
	message("\"Vasel is my father's latest assistant. He is a grinning hunchback that I had not given credit for much intelligence. But he seems to be more cunning than even my father anticipated.\"");
	say();
	goto labelFunc041D_09E8;
labelFunc041D_09E4:
	message("\"Vasel is Erstam's latest assistant. He is a grinning hunchback that I had not given credit for much intelligence. But he seems to be more cunning than even Erstam anticipated.\"");
	say();
labelFunc041D_09E8:
	case "Mad Mage" attend labelFunc041D_09FF:
	UI_remove_answer("Mad Mage");
	message("\"What else wouldst thou call a man who hacks his assistants to pieces for his experiments?!\"");
	say();
	message("\"That is another reason that he lives apart from the other Mages. He will never bow to their Strictures... And I doubt that any of the Adepts in Moonshade could hope to enforce them anyway!\"");
	say();
labelFunc041D_09FF:
	case "Stoneheart" attend labelFunc041D_0A27:
	UI_remove_answer("Stoneheart");
	message("\"How didst thou come by that?!\"");
	say();
	message("\"No! I did not ask that! I do not want to know!\"");
	say();
	message("\"Dost thou know that possession of that stone is forbidden? Dost thou know how much certain Adepts would pay for the reagent that that stone produces?\"");
	say();
	UI_add_answer(["forbidden", "reagent"]);
labelFunc041D_0A27:
	case "forbidden" attend labelFunc041D_0A64:
	UI_remove_answer("forbidden");
	message("\"Prolonged exposure to Stoneheart causes insanity, ");
	message(var0000);
	message(". And to have the type of power that the reagent makes in the hands of a madman is unthinkable!\"");
	say();
	message("\"Of course, as an apothecary, I could buy it from thee... And find a buyer or two with clearance to possess it.\"");
	say();
	message("\"I could make thee a good offer... Say, 120 guilders. Wilt thou sell it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc041D_0A5A;
	message("\"Wonderful! This will be far less trouble for thee...\"");
	say();
	Func0857();
	goto labelFunc041D_0A64;
labelFunc041D_0A5A:
	message("\"I shall not tell anyone that thou hast the Stoneheart, ");
	message(var0000);
	message(". But thou shouldst be likewise discreet.\"");
	say();
labelFunc041D_0A64:
	case "reagent" attend labelFunc041D_0A7F:
	UI_remove_answer("reagent");
	message("\"It produces Bloodspawn when mixed with a quantity of blood... Well, I am getting ahead of myself.\"");
	say();
	message("\"If thou hast a ritual blood-letting device -- which is technically forbidden as well -- thou must fill a small container with blood.\"");
	say();
	message("\"Then thou must use the blood on the Stoneheart. This produces the Bloodspawn that thou wilt need for death spells. Thou must be very careful. It is very powerful.\"");
	say();
labelFunc041D_0A7F:
	case "bye" attend labelFunc041D_0AD2:
	UI_remove_npc_face0();
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_0AB4;
	Func097F(0xFE9C, "@Nice shop.@", 0x0000);
	Func097F(0xFFE3, "@Come again!@", 0x0002);
	goto labelFunc041D_0ACC;
labelFunc041D_0AB4:
	Func097F(0xFE9C, "@Until later...@", 0x0000);
	Func097F(0xFFE3, "@Take care!@", 0x0002);
labelFunc041D_0ACC:
	Func08FF();
	goto labelFunc041D_0AD5;
labelFunc041D_0AD2:
	goto labelFunc041D_02E5;
labelFunc041D_0AD5:
	endconv;
labelFunc041D_0AD6:
	return;
}


