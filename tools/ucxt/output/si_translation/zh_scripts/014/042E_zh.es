#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0801 0x801 ();
extern var Func08AC 0x8AC (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0803 0x803 ();
extern var Func0955 0x955 ();
extern void Func0802 0x802 ();
extern var Func0956 0x956 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func042E object#(0x42E) ()
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0000 = false;
	if (!(UI_get_schedule_type(0xFFD2) == 0x0013)) goto labelFunc042E_0016;
	var0000 = true;
labelFunc042E_0016:
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = Func0942(0xFFFD);
	var0005 = Func0942(0xFFFE);
	var0006 = Func0942(0xFFFF);
	var0007 = Func0942(0xFFD1);
	var0008 = false;
	var0009 = false;
	var000A = "";
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc042E_0073;
	UI_set_schedule_type(0xFFD2, 0x000C);
labelFunc042E_0073:
	if (!(event == 0x0002)) goto labelFunc042E_00D6;
	if (!(gflags[0x01A8] || (!gflags[0x0171]))) goto labelFunc042E_0087;
	abort;
labelFunc042E_0087:
	var000B = UI_approach_avatar(0xFFD2, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFD2, 0x0003);
	var000B = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x042E], 0x0032);
	var000B = ("" & ("@Psst!@" & "@Avatar...@"));
	Func094F(0xFFD2, var000B);
	abort;
labelFunc042E_00D6:
	if (!(event == 0x0007)) goto labelFunc042E_00F0;
	var000B = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc042E_00F0:
	if (!(event == 0x0001)) goto labelFunc042E_0126;
	UI_item_say(0xFE9C, "@Might I speak with thee?@");
	0xFFD2->Func07D1();
	Func097F(0xFFD2, (("@Certainly, " + var0001) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFD2, 0x0003);
labelFunc042E_0126:
	if (!(event == 0x0009)) goto labelFunc042E_0C68;
	UI_run_schedule(0xFFD2);
	var0000 = false;
	if (!(UI_get_schedule_type(0xFFD2) == 0x0013)) goto labelFunc042E_014B;
	var0000 = true;
labelFunc042E_014B:
	if (!(UI_get_schedule_type(0xFFD2) == 0x0003)) goto labelFunc042E_0163;
	UI_set_schedule_type(0xFFD2, 0x0014);
labelFunc042E_0163:
	UI_clear_item_say(0xFFD2);
	UI_show_npc_face0(0xFFD2, 0x0000);
	var000C = UI_get_item_flag(0xFFD2, 0x001C);
	if (!(gflags[0x0171] && (gflags[0x01B3] && (!gflags[0x01A8])))) goto labelFunc042E_0217;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	Func0801();
	var000D = Func08AC(false);
	message("\"");
	message(var0003);
	message(", I have discovered where thy companion ");
	message(var000D);
	message(" is being held. He is directly beneath the Temple, in a locked cell.\"");
	say();
	message("\"One of the Temple guards is sympathetic to our Cause. He hath given me this key, which will lead thee into the hidden parts of the Temple.\"");
	say();
	message("\"If thou dost explore the Temple tonight, I can arrange for the guards to be absent. Now, I must go, before Zulith doth see me speaking with thee!\"");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B4, 0x0001, 0x0000, true);
	gflags[0x01A8] = true;
	Func097F(0xFFD2, "@Good fortune!@", 0x0000);
	if (!UI_npc_nearby(0xFFC3)) goto labelFunc042E_020C;
	var000B = ("" & ("@Alyssand!@" & "@What art thou doing?@"));
	Func094F(0xFFC3, var000B);
labelFunc042E_020C:
	UI_set_schedule_type(0xFFD2, 0x0014);
	abort;
labelFunc042E_0217:
	if (!(var000C == false)) goto labelFunc042E_023F;
	if (!(gflags[0x003E] == true)) goto labelFunc042E_022E;
	message("\"'Tis always an honor to serve the Pikemen.\" *\"I am Alyssand, daughter of Delin. I am a weaver by trade.\"");
	say();
	goto labelFunc042E_0232;
labelFunc042E_022E:
	message("\"I am Alyssand, daughter of Delin. I am a weaver by trade.\" *\"How might I be of assistance?\"");
	say();
labelFunc042E_0232:
	UI_set_item_flag(0xFFD2, 0x001C);
	goto labelFunc042E_027F;
labelFunc042E_023F:
	if (!(gflags[0x01B2] && (!gflags[0x01B3]))) goto labelFunc042E_0275;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	Func0801();
	message("\"Again we meet, ");
	message(var0003);
	message(". Perhaps by now, thine experiences have given thee reason to change thine answer...\"");
	say();
	message("\"We need thee. The Cause needs thee!\"");
	say();
	UI_add_answer("answer");
	goto labelFunc042E_027F;
labelFunc042E_0275:
	message("\"'Tis a pleasure to see thee again, ");
	message(var0003);
	message(".\"");
	say();
labelFunc042E_027F:
	if (!(gflags[0x019E] && (!gflags[0x007C]))) goto labelFunc042E_0291;
	UI_add_answer("fishnet stockings");
labelFunc042E_0291:
	if (!(gflags[0x018F] && (!(gflags[0x0170] || gflags[0x0172])))) goto labelFunc042E_02A7;
	UI_add_answer("Zulith");
labelFunc042E_02A7:
	if (!(gflags[0x0192] && (!gflags[0x028D]))) goto labelFunc042E_02B9;
	UI_add_answer("Moonsilk stockings");
labelFunc042E_02B9:
	if (!(gflags[0x014C] && (!gflags[0x01B2]))) goto labelFunc042E_02CB;
	UI_add_answer("engagement ring");
labelFunc042E_02CB:
	if (!gflags[0x01B3]) goto labelFunc042E_02D8;
	UI_add_answer("the Cause");
labelFunc042E_02D8:
	if (!(gflags[0x01B2] && (!gflags[0x01A4]))) goto labelFunc042E_02EA;
	UI_add_answer("gauntlets");
labelFunc042E_02EA:
	if (!(var0000 == true)) goto labelFunc042E_02F9;
	UI_add_answer("provisions");
labelFunc042E_02F9:
	UI_add_answer(["storms", "Goblins", "bye"]);
labelFunc042E_0309:
	converse attend labelFunc042E_0C67;
	case "provisions" attend labelFunc042E_0337:
	if (!(UI_get_schedule_type(0xFFD2) == 0x0013)) goto labelFunc042E_032C;
	message("\"I help father with the shop when he is... indisposed. What dost thou wish to purchase?\"");
	say();
	Func0803();
	goto labelFunc042E_0330;
labelFunc042E_032C:
	message("\"I will gladly sell to thee if thou wilt come to my father's shop when we are open for business.\"");
	say();
labelFunc042E_0330:
	UI_remove_answer("provisions");
labelFunc042E_0337:
	case "storms" attend labelFunc042E_035D:
	message("\"The storms have not been kind to us, ");
	message(var0001);
	message(". Without our fleet, Fawn cannot hope to survive for long.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer(["Fawn", "fleet"]);
labelFunc042E_035D:
	case "Fawn" attend labelFunc042E_039D:
	message("\"Fawn, the city of Beauty. Fawn, the city that lost Love in vanity and the pursuit of power.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_037F;
	message("\"But there is fresh hope in Fawn, for Lady Yelinda doth rule for herself now. It is a new dawning for Beauty and Love.\"");
	say();
	goto labelFunc042E_0389;
labelFunc042E_037F:
	message("\"Beauty nourisheth the senses, ");
	message(var0001);
	message(". But Love nourisheth the soul. The soul of Fawn withered long ago...\"");
	say();
labelFunc042E_0389:
	UI_remove_answer("Fawn");
	UI_add_answer(["Beauty", "Love"]);
labelFunc042E_039D:
	case "Beauty" attend labelFunc042E_03C6:
	UI_remove_answer("Beauty");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_03C2;
	message("\"The consequences of the trial of thy friend hath been far-reaching. I think that the people of Fawn doth again see Beauty for the light divine that she can be.\"");
	say();
	goto labelFunc042E_03C6;
labelFunc042E_03C2:
	message("\"The people of Fawn are content to let the world end... As long as it doth not mar their Beautiful view of the dying embers!\"");
	say();
labelFunc042E_03C6:
	case "Love" attend labelFunc042E_03F3:
	message("\"Love and Beauty were once regarded as aspects of the same entity. Whoever loved was beautiful. Whoever nurtured the beauty of truth was loved.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_03E8;
	message("\"With the aid of Lady Yelinda, those ways shall be restored to Fawn. These are such glorious times...\"");
	say();
	goto labelFunc042E_03EC;
labelFunc042E_03E8:
	message("\"Now the two are sundered, and Fawn cares for no one but herself.\"");
	say();
labelFunc042E_03EC:
	UI_remove_answer("Love");
labelFunc042E_03F3:
	case "fleet" attend labelFunc042E_0418:
	message("\"The storms stripped us of our ships, one by one.\"");
	say();
	message("\"Some were plucked away, even as we watched. Others left harbor and never returned. And Beauty is cold comfort to those who have lost their loved ones.\"");
	say();
	message("\"Thou hast not seen the storms hit, and watched as something vanished before thy very eyes?\"");
	say();
	message("\"Then count thy blessings, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("fleet");
labelFunc042E_0418:
	case "Goblins" attend labelFunc042E_045C:
	UI_remove_answer("Goblins");
	message("\"The Goblins have grown bold of late. They have often come to hurl themselves upon our gate. Thankfully, we have held fast so far.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_0441;
	message("\"Thankfully, Leon and his followers have been allowed to enter the city once again. I shall not fear for their safety now.\"");
	say();
	goto labelFunc042E_045C;
labelFunc042E_0441:
	message("\"Their attacks bring fear in me for Leon and his companions. Lady Yelinda hath forbidden them entrance into the city, even if 'twere certain death to remain outside.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Leon", "companions", "Lady Yelinda", "change subject"]);
labelFunc042E_045C:
	case "change subject" attend labelFunc042E_05C6:
	UI_pop_answers();
	if (!(var000A == "")) goto labelFunc042E_0476;
	message("\"What shall we speak of, then?\"");
	say();
labelFunc042E_0476:
	if (!(var000A == "Cause")) goto labelFunc042E_0538;
	var000A = "";
	if (!(!gflags[0x01B3])) goto labelFunc042E_04A9;
	message("\"Now that I have explained it, thy duty must be evident. Wilt thou join us in this Cause?\"");
	say();
	if (!Func0955()) goto labelFunc042E_04A1;
	message("\"Thy courage doth delight the soul of a weary rebel like myself.\"");
	say();
	Func0802();
	goto labelFunc042E_04A9;
labelFunc042E_04A1:
	message("\"I regret that thou wilt not aid the Cause. Nevertheless, we will not be turned from our quest to save this society.\"");
	say();
	message("\"If events should change thy mind, contact me.\"");
	say();
labelFunc042E_04A9:
	if (!gflags[0x01B3]) goto labelFunc042E_0538;
	if (!gflags[0x0171]) goto labelFunc042E_052C;
	var000D = Func08AC(false);
	message("\"");
	message(var0003);
	message(", I have discovered where thy companion ");
	message(var000D);
	message(" is being held. He is directly beneath the Temple, in a locked cell.\"");
	say();
	message("\"One of the Temple guards is sympathetic to our Cause. He hath given me this key, which will lead thee into the hidden parts of the Temple.\"");
	say();
	message("\"If thou dost explore the Temple tonight, I can arrange for the guards to be absent. Now, I must go, before Zulith doth see me speaking with thee!\"");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B4, 0x0001, 0x0000, true);
	gflags[0x01A8] = true;
	Func097F(0xFFD2, "@Good fortune!@", 0x0000);
	if (!UI_npc_nearby(0xFFC3)) goto labelFunc042E_051E;
	var000B = ("" & ("@Alyssand!@" & "@What art thou doing?@"));
	Func094F(0xFFC3, var000B);
labelFunc042E_051E:
	UI_set_schedule_type(0xFFD2, 0x0014);
	abort;
	goto labelFunc042E_0538;
labelFunc042E_052C:
	message("\"Be ready at any time, for one doth not know when the time to act shall arrive.\"");
	say();
	message("\"We once tried to enter the Temple during the night, while Kylista was with one of her lovers... but the guards foiled our attempt.\"");
	say();
	message("\"Nevertheless -- look everywhere, talk to everyone, see if thou canst find the clue that hath eluded us!\"");
	say();
labelFunc042E_0538:
	if (!(var000A == "Ring")) goto labelFunc042E_05C6;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	var000A = "";
	message("\"One more moment of thy time, if thou wilt, ");
	message(var0003);
	message(".\"");
	say();
	Func0801();
	message("\"A person like thyself, brave and adventurous, could be useful in times like these...\"");
	say();
	message("\"Wouldst thou be willing to aid us in liberating this city from false traditions and evil schemes?\"");
	say();
	var000B = Func0956(["yes", "no", "perhaps"]);
	if (!(var000B == "no")) goto labelFunc042E_0594;
	message("\"I regret that thou wilt not aid the Cause. Nevertheless, we will not be turned from our quest to save this society.\"");
	say();
	message("\"If events should change thy mind, contact me.\"");
	say();
	goto labelFunc042E_05C6;
labelFunc042E_0594:
	if (!(var000B == "yes")) goto labelFunc042E_05A8;
	message("\"Thy thinking is more advanced than I had hoped! But surely, thou hast questions...?\"");
	say();
	Func0802();
	goto labelFunc042E_05AC;
labelFunc042E_05A8:
	message("\"If thou wilt only let me explain the concepts, I am certain that thou wilt join our Cause.\"");
	say();
labelFunc042E_05AC:
	UI_push_answers();
	var000A = "Cause";
	UI_add_answer(["false traditions", "evil schemes", "change subject"]);
labelFunc042E_05C6:
	case "answer" attend labelFunc042E_0632:
	UI_remove_answer("answer");
	message("\"Do not toy with mine expectations -- hast thou reconsidered?\"");
	say();
	message("\"Wouldst thou aid us in liberating this city from false traditions and evil schemes?\"");
	say();
	var000B = Func0956(["yes", "no", "perhaps"]);
	if (!(var000B == "no")) goto labelFunc042E_0600;
	message("\"If events should change thy mind, contact me.\"");
	say();
	goto labelFunc042E_0632;
labelFunc042E_0600:
	if (!(var000B == "yes")) goto labelFunc042E_0614;
	message("\"I knew that thou wouldst perceive the ethicality of this Cause, given time. If thou hast questions, I shall be glad to answer them.\"");
	say();
	Func0802();
	goto labelFunc042E_0618;
labelFunc042E_0614:
	message("\"I beg thee, let me explain the concepts which propel the Cause. When thou dost understand, thou wilt surely join us...\"");
	say();
labelFunc042E_0618:
	UI_push_answers();
	var000A = "Cause";
	UI_add_answer(["false traditions", "evil schemes", "change subject"]);
labelFunc042E_0632:
	case "the Cause" attend labelFunc042E_072D:
	UI_remove_answer("the Cause");
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	Func0801();
	if (!(!(gflags[0x0170] || gflags[0x0172]))) goto labelFunc042E_0675;
	message("\"Persevere, ");
	message(var0003);
	message(", for one cannot tell when the time to act shall arrive.\"");
	say();
	message("\"Continue to pry secrets from the townsfolk -- sometimes, a stranger can learn more than an old friend.\"");
	say();
	message("\"Go places thou art not wanted, and look for the hidden things. Surely, thou wilt find a clue.\"");
	say();
	message("\"Thou must find the evidence that hath eluded us, so that Fawn can be freed!\"");
	say();
labelFunc042E_0675:
	if (!(gflags[0x0170] && ((!gflags[0x0171]) && (!gflags[0x0172])))) goto labelFunc042E_0691;
	message("\"I have heard that thy friend hath been taken prisoner, to be placed on trial before the Oracle.\"");
	say();
	message("\"I have no faith in the truth of the Oracle, but perhaps an opportunity shall present itself to advance the Cause.\"");
	say();
	message("\"Thou shouldst submit thyself to the trial, for the time being. That is mine advice.\"");
	say();
labelFunc042E_0691:
	if (!gflags[0x0171]) goto labelFunc042E_06ED;
	if (!(!gflags[0x01A6])) goto labelFunc042E_06A6;
	message("\"Why dost thou delay? Take the key that I gave thee, and enter the hidden places within the Temple.\"");
	say();
	message("\"Perhaps thou canst free thy companion -- or unearth the secret of the Oracle!\"");
	say();
labelFunc042E_06A6:
	if (!(gflags[0x01A6] && (!(gflags[0x016E] || gflags[0x016F])))) goto labelFunc042E_06B9;
	message("\"Return to the Temple! The secret room which thou hast seen must have some influence over the Oracle.\"");
	say();
labelFunc042E_06B9:
	if (!gflags[0x016F]) goto labelFunc042E_06D9;
	message("\"Now let the trial resume! Kylista and her knaves shall regret the day they were born...\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc042E_06D9;
	gflags[0x01B4] = true;
	message("\"I think I could love a man like thee, ");
	message(var0003);
	message("...\"");
	say();
labelFunc042E_06D9:
	if (!gflags[0x016E]) goto labelFunc042E_06ED;
	message("\"Hast thou forgotten thine allies, ");
	message(var0003);
	message("? 'Tis not enough to coerce the Oracle into freeing thy friend...\"");
	say();
	message("\"Thou must find a way to make the thing denounce Kylista and the Great Captains, and overthrow this evil system!\"");
	say();
labelFunc042E_06ED:
	if (!(gflags[0x0170] && gflags[0x0172])) goto labelFunc042E_072D;
	if (!gflags[0x016E]) goto labelFunc042E_0712;
	message("\"The Cause is doomed, ");
	message(var0003);
	message(". I am pleased that thy friend hath been freed from jail...\"");
	say();
	message("\"Yet I believe that we somehow missed the last chance to expose Kylista and her minions for the hypocrites they truly are!\"");
	say();
	message("\"Thy part is done. Go thy way, continue thy quest -- we of the Cause shall struggle on without thee.\"");
	say();
	goto labelFunc042E_072D;
labelFunc042E_0712:
	message("\"The Cause is triumphant, ");
	message(var0003);
	message("! Lady Yelinda hath ended the exile of The Fellowship. The Great Captains are in disgrace, and Lady Yelinda doth rule for herself now.\"");
	say();
	message("\"If there is anything I can ever do for thee, return to Fawn, and I shall aid thee.\"");
	say();
	if (!gflags[0x01B4]) goto labelFunc042E_072D;
	UI_add_answer("Kiss me.");
labelFunc042E_072D:
	case "Kiss me." attend labelFunc042E_074E:
	UI_remove_answer("Kiss me.");
	message("\"Um, ");
	message(var0003);
	message("... when I said that I loved thee, 'twas a moment of weakness...\"");
	say();
	message("\"Surely, thou wouldst not take advantage of a girl for a few hasty words?\"");
	say();
	message("\"Besides, there is so much to be done for the Cause and Lady Yelinda. I'm hopeful of becoming an advisor to the Lady! There is not time for love, not now...\"");
	say();
labelFunc042E_074E:
	case "false traditions" attend labelFunc042E_0781:
	UI_remove_answer("false traditions");
	message("\"According to legend, the Oracle was brought by our ancestors from Sosaria, our homeland. It now stands in the Temple of Beauty.\"");
	say();
	message("\"Our traditions teach us that the statue is an infallible guide to Truth and Beauty.\"");
	say();
	message("\"But we suspect that the legends are false.\"");
	say();
	UI_add_answer(["guide to Truth"]);
	if (!(!var0008)) goto labelFunc042E_0781;
	UI_add_answer("We?");
labelFunc042E_0781:
	case "We?" attend labelFunc042E_079C:
	var0008 = true;
	UI_remove_answer("We?");
	message("\"Most of the young people of the town belong to the Cause -- but they are not willing to say so publicly, for fear of exile.\"");
	say();
	message("\"I am also pleased to say that Leon supports us, as do the other Fellowship members.\"");
	say();
labelFunc042E_079C:
	case "guide to Truth" attend labelFunc042E_07B7:
	UI_remove_answer("guide to Truth");
	message("\"The Oracle actually speaks -- all of us have heard it. It speaks in reply to the Priestess of Beauty.\"");
	say();
	message("\"The Statue of Beauty only speaks at certain times, such as during the spring festivals or when the city needs special guidance.\"");
	say();
	message("\"According to tradition, it will also reply to the ruler of Fawn. However, I have never seen Lady Yelinda speak to the statue. She leaves such duties to Kylista.\"");
	say();
labelFunc042E_07B7:
	case "evil schemes" attend labelFunc042E_07E9:
	UI_remove_answer("evil schemes");
	message("\"The Oracle is supposed to speak only the Truth, yet it too often parrots the words of the Priestess and the Great Captains.\"");
	say();
	message("\"We do not believe that truth only serves those in power... we think that someone hath corrupted the Oracle!\"");
	say();
	UI_add_answer(["Priestess", "Great Captains"]);
	if (!(!var0008)) goto labelFunc042E_07E9;
	UI_add_answer("We?");
labelFunc042E_07E9:
	case "Priestess" attend labelFunc042E_0804:
	UI_remove_answer("Priestess");
	message("\"Kylista is the worst example of this pernicious doctrine of Beauty...\"");
	say();
	message("\"She believes that her attractiveness marks her as superior to all others, and that her sensuality is a divine gift by which to influence men's minds.\"");
	say();
	message("\"Kylista is lustful and greedy, but she is also cunning. She is very dangerous to us.\"");
	say();
labelFunc042E_0804:
	case "Great Captains" attend labelFunc042E_0836:
	message("\"According to all of our traditions, only women are capable of ruling in Fawn -- for only women are capable of True Beauty.\"");
	say();
	message("\"The highest station which a male can hope for is to serve as one of the Great Captains. These men serve as Lady Yelinda's advisors.\"");
	say();
	message("\"Yet they do much more than merely advise. There are three of them -- Garth, Joth and Voldin.\"");
	say();
	var0009 = true;
	UI_remove_answer("Great Captains");
	UI_add_answer(["Garth", "Joth", "Voldin", "Lady Yelinda"]);
labelFunc042E_0836:
	case "Garth" attend labelFunc042E_0851:
	message("\"Because he is the youngest of the Captains, we had hoped to find a way to persuade Garth to support our Cause.\"");
	say();
	message("\"When one of us spoke with him, he claimed to be sympathetic to the Cause. Yet Garth says he is afraid to confront Voldin with our suspicions.\"");
	say();
	message("\"I do not trust him...\"");
	say();
	UI_remove_answer("Garth");
labelFunc042E_0851:
	case "Joth" attend labelFunc042E_086C:
	UI_remove_answer("Joth");
	message("\"The sailors trust and respect Joth. In mine heart, I cannot believe he is part of any conspiracy to control the Oracle.\"");
	say();
	message("\"We thought of asking Joth to aid us, but he hath not been the same since the storms.\"");
	say();
	message("\"He doth live in his memories and stare out to sea. I think he cannot stop yearning to return to sea long enough to be of much help.\"");
	say();
labelFunc042E_086C:
	case "Voldin" attend labelFunc042E_0883:
	message("\"Voldin is the one who truly controls the Great Captains. I think he would make himself ruler of Fawn, if he could find a way.\"");
	say();
	message("\"Voldin is a cruel man who secretly despises women. If there is an evil scheme, then Voldin must be the mastermind.\"");
	say();
	UI_remove_answer("Voldin");
labelFunc042E_0883:
	case "Zulith" attend labelFunc042E_089A:
	UI_remove_answer("Zulith");
	message("\"That worm hath been following thee? Then he doth suspect that thou art allied with the Cause...\"");
	say();
	message("\"Watch thy step, lest thou be exiled like the Fellowship folks. Without thee to help us, our Cause would be lost.\"");
	say();
labelFunc042E_089A:
	case "Leon" attend labelFunc042E_0907:
	message("\"Thou hast not heard Leon speak? Oh, thou shouldst!\"");
	say();
	message("\"He doth tell of something wonderful, wherein all people are equal and capable of independent thought. Something called The Fellowship.\"");
	say();
	message("\"Thou canst find him at the camp outside the city gates.\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFF) || (var000E == 0xFFFE)))) goto labelFunc042E_08F9;
	var000B = ("@I had thought we had rid ourselves of that blight." & "@But it seems that it is following in Batlin's footsteps.@");
	var000E = Func0992(var000E, var000B, 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc042E_08F9:
	UI_remove_answer("Leon");
	UI_add_answer("Fellowship");
labelFunc042E_0907:
	case "Fellowship" attend labelFunc042E_098F:
	message("\"Imagine, ");
	message(var0001);
	message("! Imagine what the world would be like if only we trusted one another, worked together, and sought to earn that which we strived for!\"");
	say();
	message("\"Imagine if women were not coddled or thought of as inferior! What would the world be like if we all listened to our Inner Voice?\"");
	say();
	var000E = Func0992(0xFFFD, ("@The world would be full of frustrated fools, " + "I am sure.@"), 0x0000, false);
	if (!(var000E != 0xFE9C)) goto labelFunc042E_0988;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc042E_0981;
	var000F = var000E;
labelFunc042E_0950:
	if (!(var000F == var000E)) goto labelFunc042E_096D;
	var000F = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042E_0950;
labelFunc042E_096D:
	var000F = Func0992(var000F, ("@Another one who hath fallen prey to the empty promises " + "of The Fellowship, Avatar.@"), 0x0000, false);
labelFunc042E_0981:
	UI_set_conversation_slot(0x0000);
labelFunc042E_0988:
	UI_remove_answer("Fellowship");
labelFunc042E_098F:
	case "companions" attend labelFunc042E_09B9:
	message("\"Leon's companions are the sailors that brought him here. Their names are Scots, Ruggs and Kalen.\"");
	say();
	UI_remove_answer("companions");
	UI_push_answers();
	UI_add_answer(["Scots", "Ruggs", "Kalen", "change subject"]);
labelFunc042E_09B9:
	case "Scots" attend labelFunc042E_09D7:
	message("\"Scots is not precisely a sailor, I suppose. He is actually a cartographer.\"");
	say();
	message("\"He is most often with his pens and ink, drawing intricate little lines...\"");
	say();
	UI_remove_answer("Scots");
	UI_add_answer("lines");
labelFunc042E_09D7:
	case "lines" attend labelFunc042E_09EA:
	message("\"I surmise all those lines make a map, I do not know. But I do not know how he could be making a map, either. He cannot go anywhere because of the storms.\"");
	say();
	UI_remove_answer("lines");
labelFunc042E_09EA:
	case "Ruggs" attend labelFunc042E_0A01:
	message("\"Ruggs is a sailor, for sure. Although he seems to take well to gardening now that he's on shore.\"");
	say();
	message("\"Thou canst not mistake which of the three is Ruggs. His face is hideous to behold, though he speaks fair enough.\"");
	say();
	UI_remove_answer("Ruggs");
labelFunc042E_0A01:
	case "Kalen" attend labelFunc042E_0A18:
	message("\"Of the three of Leon's companions, I know the least about Kalen, and I have no desire to learn more.\"");
	say();
	message("\"He always seems to be hovering about, staring at me. He never seems to be doing anything around the camp.\"");
	say();
	UI_remove_answer("Kalen");
labelFunc042E_0A18:
	case "Lady Yelinda" attend labelFunc042E_0A44:
	UI_remove_answer("Lady Yelinda");
	if (!var0009) goto labelFunc042E_0A3C;
	message("\"She, too, is a prisoner of Beauty! Yelinda must not strain herself, lest she mar her perfect appearance with any sign of weariness.\"");
	say();
	message("\"The Great Captains therefore have usurped many of her duties, on the pretext of sparing Yelinda from tedium.\"");
	say();
	message("\"I do not think the Lady to be the mindless, spineless creature which some others do. I think she is a victim of this system.\"");
	say();
	goto labelFunc042E_0A44;
labelFunc042E_0A3C:
	message("\"Lady Yelinda is the ruler of Fawn. Her word is law... Usually delivered by her little shadow, Zulith.\"");
	say();
	message("\"Zulith's official title is Chancellor. But he is little more than a glorified messenger.\"");
	say();
labelFunc042E_0A44:
	case "fishnet stockings" attend labelFunc042E_0A66:
	message("\"I had not expected a stranger to know of my tiny industry. I weave the nets and sew in my father's shop.\"");
	say();
	message("\"It assists me in mine attempts to keep a watchful eye on my father... He hath not been right since my mother, Elissia, died.\"");
	say();
	message("\"I have few customers, but perhaps people are beginning to take an interest.\"");
	say();
	UI_remove_answer("fishnet stockings");
	UI_add_answer("customers");
labelFunc042E_0A66:
	case "customers" attend labelFunc042E_0A7D:
	message("\"Well, to be truthful, I have only one returning customer. Flindo, a merchant from Moonshade, hath only just left here after ordering several more pair.\"");
	say();
	message("\"Apparently one of the mages hath taken a liking to them. They are the only ones who could afford such luxuries now.\"");
	say();
	UI_remove_answer("customers");
labelFunc042E_0A7D:
	case "Moonsilk stockings" attend labelFunc042E_0ACD:
	UI_remove_answer("Moonsilk stockings");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc042E_0AC5;
	if (!var0002) goto labelFunc042E_0AB6;
	message("\"Thou art a lucky woman to possess such a fine pair of stockings!\"");
	say();
	message("\"I knew that such fine work was possible. But I had never actually seen the stockings they sell in Moonshade.\"");
	say();
	message("\"It doth cause me to wonder why anyone in the city of Mages would buy the rough stockings I make, when they could purchase ones so soft.\"");
	say();
	goto labelFunc042E_0AC2;
labelFunc042E_0AB6:
	message("\"Thou wilt make some woman happy with so fine a pair of stockings!\"");
	say();
	message("\"I knew that such fine work was possible. But I had never actually seen the stockings they sell in Moonshade.\"");
	say();
	message("\"It doth cause me to wonder why anyone in the city of Mages would buy the rough stockings I make when they could purchase ones so soft.\"");
	say();
labelFunc042E_0AC2:
	goto labelFunc042E_0ACD;
labelFunc042E_0AC5:
	message("\"I have heard of the stockings they sell in Moonshade. So I know that such fine work is possible.\"");
	say();
	message("\"Without seeing them, I cannot be sure that the stockings thou hast are from Moonshade. They could be merely homespun, like unto the ones I make...\"");
	say();
labelFunc042E_0ACD:
	case "engagement ring" attend labelFunc042E_0BA3:
	var000A = "Ring";
	UI_remove_answer("engagement ring");
	message("\"I had heard that thou hadst been asking after me. That thou didst have an interest in my missing engagement ring... Or perhaps in the gauntlets that replaced it.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc042E_0B02;
	message("\"That is it, indeed. I thank thee for telling me... But thou mayest keep it if thou wishest.\"");
	say();
	goto labelFunc042E_0B06;
labelFunc042E_0B02:
	message("\"I thank thee for telling me that thou hast seen it... But if thou dost have it, thou mayest keep it.\"");
	say();
labelFunc042E_0B06:
	gflags[0x01B2] = true;
	UI_set_new_schedules(0xFFC3, [0x0000, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x0009, 0x0009, 0x0009, 0x0009, 0x0009, 0x0009, 0x0009], [0x0408, 0x0778, 0x03A8, 0x0728, 0x03A8, 0x06C8, 0x0448, 0x06C4, 0x0408, 0x0788, 0x03A8, 0x0728, 0x0448, 0x06C4]);
	var000B = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043D], 0x0064);
	gflags[0x0291] = true;
	UI_push_answers();
	UI_add_answer(["gauntlets", "Keep it?", "change subject"]);
labelFunc042E_0BA3:
	case "Keep it?" attend labelFunc042E_0BC1:
	UI_remove_answer("Keep it?");
	message("\"If thou wouldst wish the honest truth, I do not think that my beloved Keth will ever come back from wherever that storm took him.\"");
	say();
	message("\"Therefore, this ring hath only melancholy memories for me. This jewelry hath become bitter to me.\"");
	say();
	UI_add_answer("Keth");
labelFunc042E_0BC1:
	case "gauntlets" attend labelFunc042E_0C18:
	UI_remove_answer("gauntlets");
	if (!(!gflags[0x01A4])) goto labelFunc042E_0C14;
	message("\"I assume that the gauntlets are thine... They are clearly meant for someone more adventurous than a mere weaver.\"");
	say();
	message("\"Wouldst thou like to have them back?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042E_0C09;
	message("\"Then thou shalt have them. Here!\"");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x0343, 0xFE99, 0x0000, false, true);
	gflags[0x01A4] = true;
	goto labelFunc042E_0C11;
labelFunc042E_0C09:
	message("\"If thou dost change thy mind, let me know. I have no use for them, and know of no one else who would.\"");
	say();
	var0010 = true;
labelFunc042E_0C11:
	goto labelFunc042E_0C18;
labelFunc042E_0C14:
	message("\"I am glad that I was able to give thee thy gauntlets. I had no use for them, and I am sure that thou didst miss their protection.\"");
	say();
labelFunc042E_0C18:
	case "Keth" attend labelFunc042E_0C33:
	message("\"Keth and I were to marry, but it was not fated to be.\"");
	say();
	message("\"He was first mate on one of the largest merchant ships. On one of his voyages, he purchased the engagement ring -- from an artisan in Moonshade, as I recall.\"");
	say();
	message("\"But then the storms came, and ships began disappearing. And eventually it was Keth's ship that never came back.\"");
	say();
	UI_remove_answer("Keth");
labelFunc042E_0C33:
	case "bye" attend labelFunc042E_0C64:
	gflags[0x0008] = false;
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFFD2, "@Farewell!@", 0x0002);
	Func08AA();
	goto labelFunc042E_0C67;
labelFunc042E_0C64:
	goto labelFunc042E_0309;
labelFunc042E_0C67:
	endconv;
labelFunc042E_0C68:
	return;
}


