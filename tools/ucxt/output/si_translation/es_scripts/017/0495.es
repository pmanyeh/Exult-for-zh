#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0835 0x835 ();
extern void Func09B4 0x9B4 (var var0000);

void Func0495 object#(0x495) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc0495_0109;
	UI_item_say(0xFE9C, "@A pleasure to see thee...@");
	0xFF6B->Func07D1();
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc0495_005F;
	Func097F(0xFF6B, "@'Tis good to see thee!@", 0x0002);
	UI_set_schedule_type(0xFF6B, 0x0003);
	goto labelFunc0495_0109;
labelFunc0495_005F:
	UI_set_new_schedules(0xFF6B, 0x0000, 0x001E, [0x0977, 0x048C]);
	UI_run_schedule(0xFF6B);
	if (!(!gflags[0x02DD])) goto labelFunc0495_00A4;
	gflags[0x02DD] = true;
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x001E);
labelFunc0495_00A4:
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc0495_00C7;
	Func097F(0xFF6B, "@I must sate mine hunger!@", 0x0002);
labelFunc0495_00C7:
	if (!(var0005 == 0x0002)) goto labelFunc0495_00DD;
	Func097F(0xFF6B, "@Come, allow me to feed upon thee!@", 0x0002);
labelFunc0495_00DD:
	if (!(var0005 == 0x0003)) goto labelFunc0495_00F3;
	Func097F(0xFF6B, "@Blood! Blood everywhere!@", 0x0002);
labelFunc0495_00F3:
	if (!(var0005 == 0x0004)) goto labelFunc0495_0109;
	Func097F(0xFF6B, "@Let me feel thy naked flesh!@", 0x0002);
labelFunc0495_0109:
	if (!(event == 0x0009)) goto labelFunc0495_0702;
	if (!UI_get_item_flag(0xFF6B, 0x0006)) goto labelFunc0495_0132;
	UI_set_schedule_type(0xFF6B, 0x001F);
	UI_add_answer("leave");
	goto labelFunc0495_0140;
labelFunc0495_0132:
	UI_run_schedule(0xFF6B);
	UI_add_answer("join");
labelFunc0495_0140:
	UI_clear_item_say(0xFF6B);
	UI_show_npc_face0(0xFF6B, 0x0000);
	var0006 = UI_get_item_flag(0xFF6B, 0x001C);
	if (!(((!UI_get_item_flag(0xFFFD, 0x001E)) && gflags[0x00D5]) && (!gflags[0x0275]))) goto labelFunc0495_0210;
	message("\"Iolo! My beloved Iolo!\"");
	say();
	message("\"Oh, I had feared that I would never see thee again!\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"My lovely Gwenno!\"");
	say();
	message("\"Now mine heart can sing, at the sight of thee!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou dost look pale, dear Iolo.\"");
	say();
	message("\"Thou didst never take care of thyself when I was away...\"");
	say();
	UI_set_conversation_slot(0x0001);
	if (!Func097D(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0005)) goto labelFunc0495_01DE;
	message("\"The Lady of Fawn gave me this necklace to give to thee, when at last I found thee, my love.\"");
	say();
	message("\"Take it as a token of my love.\"");
	say();
	var0007 = Func0996(0xFFFD, 0xFF6B, 0x0001, 0x03BB, 0xFE99, 0x0005, true);
	goto labelFunc0495_01E6;
labelFunc0495_01DE:
	message("\"The Lady of Fawn gave me a necklace to give to thee, my love. But in all my trials to find thee, I seem to have lost it.\"");
	say();
	message("\"I had thought to give it to thee as a token of my love.\"");
	say();
labelFunc0495_01E6:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	if (!(var0007 == true)) goto labelFunc0495_0204;
	message("\"I shall cherish it always, Iolo.\"");
	say();
	message("\"But thou didst not have to give me anything to prove thy love. That thou art here now is proof enough.\"");
	say();
	goto labelFunc0495_020C;
labelFunc0495_0204:
	message("\"It doth not matter, Iolo.\"");
	say();
	message("\"Thou dost not have to give me anything to prove thy love. That thou art here now is proof enough.\"");
	say();
labelFunc0495_020C:
	gflags[0x0275] = true;
labelFunc0495_0210:
	if (!(UI_get_item_flag(0xFFFD, 0x001E) && gflags[0x00D5])) goto labelFunc0495_0233;
	message("\"A thousand thanks for bringing back mine husband, ");
	message(var0002);
	message(".\"");
	say();
	message("\"I grieve that his wits seem to have left him. But at least he is safe with me.\"");
	say();
	message("\"I shall do all that I can to aid thee in restoring him. Or gladly care for him all the remainder of my days... even as he is.\"");
	say();
labelFunc0495_0233:
	if (!(!UI_get_item_flag(0xFF6B, 0x001C))) goto labelFunc0495_0260;
	UI_set_item_flag(0xFF6B, 0x001C);
	message("\"What a relief to see thee again, ");
	message(var0002);
	message(".\"");
	say();
	message("\"I fear that thy work hath only begun. Batlin's deeds have only worsened the storms.\"");
	say();
	message("\"As the sand dwindles within the Hourglass of Fate, the danger will only increase. Thou must find the answer quickly, Avatar!\"");
	say();
	goto labelFunc0495_026E;
labelFunc0495_0260:
	message("\"I have been doing much study, ");
	message(var0002);
	message(".\"");
	say();
	message("\"There is much I must tell thee before the sand runs down in the Hourglass of Fate.\"");
	say();
labelFunc0495_026E:
	if (!(!gflags[0x00FF])) goto labelFunc0495_0285;
	UI_add_answer(["Batlin's deeds", "danger", "answer"]);
labelFunc0495_0285:
	if (!(gflags[0x00FF] && ((!gflags[0x00D4]) || ((!gflags[0x00D5]) || (!gflags[0x00D3]))))) goto labelFunc0495_02A5;
	message("\"Avatar! I have found a most intriguing scroll that tells of some sort of mystic connection between the Banes and the ancient temples!\"");
	say();
	UI_add_answer("mystic connection");
labelFunc0495_02A5:
	if (!(gflags[0x0279] && (!gflags[0x022B]))) goto labelFunc0495_02B8;
	message("\"Now I understand what Xenka meant by being aided by specters. But, unless thou canst find the grave of the last Chaos Hierophant, I know not how thou wilt restore Balance.\"");
	say();
	message("\"Perhaps if thou wouldst ask one of the monks -- perhaps Thoxa -- she could try to divine where the Chaos Hierophant lies.\"");
	say();
labelFunc0495_02B8:
	if (!(gflags[0x0010] && ((!UI_get_item_flag(0xFF6B, 0x0006)) && UI_get_cont_items(0xFF6B, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc0495_02E2;
	UI_add_answer("belongings");
labelFunc0495_02E2:
	UI_add_answer(["bye"]);
labelFunc0495_02EC:
	converse attend labelFunc0495_0701;
	case "belongings" attend labelFunc0495_0301:
	UI_remove_answer("belongings");
	Func0835();
labelFunc0495_0301:
	case "join" attend labelFunc0495_0361:
	UI_remove_answer("join");
	if (!gflags[0x0061]) goto labelFunc0495_0349;
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0495_033E;
	UI_add_answer("leave");
	message("\"If thou dost think I can be of use...\"");
	say();
	UI_add_to_party(0xFF6B);
	gflags[0x0010] = true;
	goto labelFunc0495_0346;
labelFunc0495_033E:
	message("\"I hardly think that thou hast need of me, Avatar. Look at all thy fine companions!\"");
	say();
	message("\"Instead, I shall remain here. After all, what can one old woman do for thee?\"");
	say();
labelFunc0495_0346:
	goto labelFunc0495_0361;
labelFunc0495_0349:
	if (!UI_get_item_flag(0xFFFD, 0x001E)) goto labelFunc0495_035D;
	message("\"But I must remain here and study! I must help thee find a way to restore my dear Iolo!\"");
	say();
	goto labelFunc0495_0361;
labelFunc0495_035D:
	message("\"I will be of more use to thee if I remain here. I seem to have a talent for finding the information thou dost need.\"");
	say();
labelFunc0495_0361:
	case "leave" attend labelFunc0495_038E:
	UI_remove_answer("leave");
	UI_add_answer("join");
	message("\"I understand, ");
	message(var0002);
	message("...\"");
	say();
	UI_remove_from_party(0xFF6B);
	Func09B4(0xFF6B);
labelFunc0495_038E:
	case "Batlin's deeds" attend labelFunc0495_03B2:
	UI_remove_answer("Batlin's deeds");
	message("\"Until Batlin interfered, this land had no Balance, but complete chaos was held in check... Until he loosed the Banes.\"");
	say();
	message("\"Unless Balance is restored, this land shall die... And take every world that touches it into the dust of oblivion as well.\"");
	say();
	UI_add_answer(["Banes", "every world"]);
labelFunc0495_03B2:
	case "Banes" attend labelFunc0495_03E1:
	UI_remove_answer("Banes");
	UI_push_answers();
	message("\"The Banes are the splintered force of Chaos.\"");
	say();
	message("\"Thou wilt have to cage them again, as they were before Batlin came. 'Tis only a temporary solution at best.\"");
	say();
	message("\"Perhaps I can consult the materials here on Monk Isle and discover a way to rid this land of the threat entirely.\"");
	say();
	UI_add_answer(["cage them", "materials", "change subject"]);
labelFunc0495_03E1:
	case "cage them" attend labelFunc0495_0409:
	UI_remove_answer("cage them");
	message("\"Thou shouldst go to Moonshade.\"");
	say();
	message("\"If thou canst learn who gave Batlin the secret of trapping souls, I will try to learn what can make them able to withstand the forces that we wish to contain.\"");
	say();
	UI_add_answer(["Moonshade", "secret"]);
	gflags[0x012D] = true;
labelFunc0495_0409:
	case "Moonshade" attend labelFunc0495_0420:
	UI_remove_answer("Moonshade");
	message("\"I do not believe that caging souls was possible within Britannia. Therefore, the spell must have come from this land.\"");
	say();
	message("\"And where else but Moonshade wilt thou find a spell in this land? But they are a closed-mouthed lot -- I wish thee luck.\"");
	say();
labelFunc0495_0420:
	case "secret" attend labelFunc0495_0437:
	UI_remove_answer("secret");
	message("\"Although I spent quite a bit of time within Moonshade, I heard nothing about such a spell.\"");
	say();
	message("\"Since the Mages are all basically vain, that must mean that the spell is a secret... or at least not common knowledge.\"");
	say();
labelFunc0495_0437:
	case "materials" attend labelFunc0495_044A:
	UI_remove_answer("materials");
	message("\"The Monks have said that they have an extensive library here. Perhaps, with all I have learned from my travels throughout the land, I can use their books and scrolls to find the answer.\"");
	say();
labelFunc0495_044A:
	case "every world" attend labelFunc0495_0472:
	UI_remove_answer("every world");
	UI_push_answers();
	message("\"Britannia -- even thine home, Avatar -- is in deadly peril!\"");
	say();
	message("\"No world exists without influencing another. So all may be destroyed if New Sosaria dies.\"");
	say();
	UI_add_answer(["New Sosaria", "change subject"]);
labelFunc0495_0472:
	case "New Sosaria" attend labelFunc0495_049C:
	UI_remove_answer("New Sosaria");
	message("\"According to the Mages of Moonshade, New Sosaria is the name of this land, ");
	message(var0002);
	message(", though 'tis often called Serpent Isle.\"");
	say();
	message("\"The forefathers of all the people here were dissenters of Lord British's rule.\"");
	say();
	UI_add_answer(["Serpent Isle", "Lord British's rule"]);
labelFunc0495_049C:
	case "Serpent Isle" attend labelFunc0495_04BA:
	UI_remove_answer("Serpent Isle");
	message("\"I came upon the ruins of a civilization in many places during my travels.\"");
	say();
	message("\"They all bore the mark of some serpent design or another. I noted that there appeared to be a different serpent motif in different areas.\"");
	say();
	UI_add_answer("serpent motif");
labelFunc0495_04BA:
	case "serpent motif" attend labelFunc0495_04D1:
	UI_remove_answer("serpent motif");
	message("\"One serpent always seems to crawl toward the left. Another serpent always crawls toward the right, and the remaining serpent always crawls straight.\"");
	say();
	message("\"I have no idea if it means anything, but there was a difference between the different ruins.\"");
	say();
labelFunc0495_04D1:
	case "Lord British's rule" attend labelFunc0495_04E8:
	UI_remove_answer("Lord British's rule");
	message("\"It doth seem difficult to believe that they could be talking about the Lord British we know.\"");
	say();
	message("\"But perhaps time runs differently here than in Britannia.\"");
	say();
labelFunc0495_04E8:
	case "danger" attend labelFunc0495_0513:
	UI_remove_answer("danger");
	UI_push_answers();
	message("\"Thou hast already experienced the power of the Storms of Imbalance. As time passes, these will increase in frequency and strength.\"");
	say();
	message("\"After a further period of time, earthquakes will begin to tear the land apart... Until it at last destroys itself.\"");
	say();
	UI_add_answer(["Storms of Imbalance", "period of time", "change subject"]);
labelFunc0495_0513:
	case "Storms of Imbalance" attend labelFunc0495_053B:
	UI_remove_answer("Storms of Imbalance");
	message("\"The Prophecies of Xenka speak of the Storms of Imbalance.\"");
	say();
	message("\"Storms unlike any living man hath seen. Storms whose results no man can predict...\"");
	say();
	message("\"I am sorry, the prophecies are cryptic at best.\"");
	say();
	UI_add_answer(["prophecies", "cryptic"]);
labelFunc0495_053B:
	case "prophecies" attend labelFunc0495_0552:
	UI_remove_answer("prophecies");
	message("\"The monks have recorded all of Xenka's visions. They keep this tome of wisdom within their Chapel, on the altar.\"");
	say();
	message("\"It is very confusing to read.\"");
	say();
labelFunc0495_0552:
	case "cryptic" attend labelFunc0495_0569:
	UI_remove_answer("cryptic");
	message("\"The language is vague and hard to understand.\"");
	say();
	message("\"Much of it sounds like bad poetry... In fact, if Iolo's songs were as bad, I would break his lute rather than allow him to inflict them on others!\"");
	say();
labelFunc0495_0569:
	case "period of time" attend labelFunc0495_0580:
	UI_remove_answer("period of time");
	message("\"I do not know! These forsaken prophecies are so poorly written that I cannot make any headway in finding any reference to any other!\"");
	say();
	message("\"I do not know who is responsible, the monks or Xenka herself, but I sometimes feel as if I could strike someone!\"");
	say();
labelFunc0495_0580:
	case "answer" attend labelFunc0495_05AE:
	UI_remove_answer("answer");
	UI_push_answers();
	message("\"According to Xenka's visions, 'The Hero from Another World will succeed through the use of powerful magic, the aid of specters, and the implements of the Hierophant.'\"");
	say();
	message("\"Before the sands run down, we must find the meaning of these accursed riddles!\"");
	say();
	UI_add_answer(["powerful magic", "specters", "implements", "change subject"]);
labelFunc0495_05AE:
	case "powerful magic" attend labelFunc0495_05C9:
	UI_remove_answer("powerful magic");
	message("\"I know not what a farm wife would consider great magic!\"");
	say();
	message("\"For all I know it could be as simple as lighting a candle! Or perhaps she is referring to the power to trap souls.\"");
	say();
	message("\"It would be so much more simple if Xenka would return and explain these infernal riddles herself! She is worse than Chuckles!\"");
	say();
labelFunc0495_05C9:
	case "specters" attend labelFunc0495_05E4:
	UI_remove_answer("specters");
	message("\"For all I know, Xenka is talking about herself!\"");
	say();
	message("\"All of these monks are convinced that she will return to help thee finish thy quest... While I wade through all these insane ramblings!\"");
	say();
	message("\"What I need is to talk to her specter and see if I can wring any sense out of her rather than these writings!\"");
	say();
labelFunc0495_05E4:
	case "implements" attend labelFunc0495_05FB:
	UI_remove_answer("implements");
	message("\"From what Karnax hath told me, a Hierophant was some sort of priest or holy man for these Ophidians.\"");
	say();
	message("\"What tools would a holy man use? Something for blessing people, perhaps... I know not. I must search further for more clues.\"");
	say();
labelFunc0495_05FB:
	case "mystic connection" attend labelFunc0495_0629:
	UI_remove_answer("mystic connection");
	UI_push_answers();
	message("\"Before thou canst redeem thy faithful companions, thou must take the soul cages and bathe them in the water of the temple that is connected to that Bane.\"");
	say();
	message("\"And whilst thou art at each temple, according to the scroll, there is a device of some sort through which thou canst divine the location of each Bane.\"");
	say();
	UI_add_answer(["bathe", "temple", "device", "change subject"]);
labelFunc0495_0629:
	case "bathe" attend labelFunc0495_0640:
	UI_remove_answer("bathe");
	message("\"The soul cages... er, prisms... that thou dost have cannot withstand the powers of beings such as the Banes.\"");
	say();
	message("\"Only a prism purified by the water of the appropriate temple can hold each Bane. Otherwise, the prism will be ineffective.\"");
	say();
labelFunc0495_0640:
	case "temple" attend labelFunc0495_0667:
	UI_remove_answer("temple");
	message("\"Karnax did tell me that Miggim doth have maps to the various temples...\"");
	say();
	message("\"Apparently each temple was dedicated to one of the six virtues of the Ophidians. Thou shouldst seek out the correct temple before thou canst defeat the Banes.\"");
	say();
	UI_add_answer(["Karnax", "Miggim", "Ophidians"]);
labelFunc0495_0667:
	case "Karnax" attend labelFunc0495_0682:
	UI_remove_answer("Karnax");
	message("\"Karnax is quite pompous. He is more inclined to lecture me than to help.\"");
	say();
	message("\"But I will gladly suffer his speeches if they can help me find the way to restore mine husband.\"");
	say();
	message("\"His knowledge of the history of these islands hath been invaluable!\"");
	say();
labelFunc0495_0682:
	case "Miggim" attend labelFunc0495_0699:
	UI_remove_answer("Miggim");
	message("\"Miggim is very quiet and helpful.\"");
	say();
	message("\"He hath been most helpful reading books and scrolls that might hold some clue or another. I am thankful for his knowledge of this library... without him I would never find anything!\"");
	say();
labelFunc0495_0699:
	case "Ophidians" attend labelFunc0495_06B0:
	UI_remove_answer("Ophidians");
	message("\"'Ophidians' is the word that Karnax uses for the people that once dwelled in the serpent ruins throughout the land.\"");
	say();
	message("\"I do not know if it is their name for themselves, or if it is a name that he concocted for them.\"");
	say();
labelFunc0495_06B0:
	case "device" attend labelFunc0495_06C7:
	UI_remove_answer("device");
	message("\"Once again, Avatar, I have nothing further that I can tell thee. I have been unable to find any more references to devices within the temples.\"");
	say();
	message("\"I can find tallies of grain given to the temples, or lists of stonework hired by each temple caretaker. But I can find nothing else to help thee... I will keep searching.\"");
	say();
labelFunc0495_06C7:
	case "change subject" attend labelFunc0495_06D7:
	message("\"Certainly...\"");
	say();
	UI_pop_answers();
labelFunc0495_06D7:
	case "bye" attend labelFunc0495_06FE:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@I shall return...@", 0x0000);
	Func097F(0xFF6B, "@Hurry back!@", 0x0002);
	goto labelFunc0495_0701;
labelFunc0495_06FE:
	goto labelFunc0495_02EC;
labelFunc0495_0701:
	endconv;
labelFunc0495_0702:
	return;
}


