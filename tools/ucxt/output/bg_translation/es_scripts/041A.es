#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0852 0x852 ();
extern void Func0911 0x911 (var var0000);
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func084F 0x84F ();
extern void Func0850 0x850 ();
extern void Func084D 0x84D ();
extern void Func0851 0x851 ();
extern void Func092E 0x92E (var var0000);

void Func041A object#(0x41A) ()
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

	if (!(event == 0x0001)) goto labelFunc041A_0695;
	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFE6));
	var0001 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0001) goto labelFunc041A_0057;
	message("Batlin's eyes narrow to red slits as he peers practically through you.");
	say();
	message("\"Thou hast the Cube! Thou cannot use it against -me-!\"");
	say();
	message("With that, Batlin turns with a flourish, and vanishes before your eyes!*");
	say();
	gflags[0x00DA] = true;
	UI_remove_npc(UI_get_npc_object(0xFFE6));
	abort;
labelFunc041A_0057:
	if (!gflags[0x001E]) goto labelFunc041A_0066;
	message("Batlin looks at you and his gaze returns to the Armageddon winter storm. \"Many years ago, Avatar, I went to Skara Brae, the ghost city. The way the world is now reminds me of that dead place. In Skara Brae I had a spiritual experience so profound that I have never spoken of to another soul. I would like to share that experience with thee now, Avatar.");
	say();
	message("\"There at Skara Brae I saw a man who was called The Tortured One. I asked this dead man, pray tell, what is the answer to the question of Life and Death? He gave me no reply, and I asked him again. I beseeched him to impart some small parcel of wisdom upon me. What is the answer to the question of Life and Death?! He said nothing, but in his eyes... In his eyes I could see, Avatar, that he could not answer me for there was no answer to give. No answers to the question of Life and Death! It was then I understood. No meanings! No virtues! No values!!!... I commend thee, Avatar, for reaching that same liberating illumination!\"*");
	say();
	abort;
labelFunc041A_0066:
	if (!gflags[0x0038]) goto labelFunc041A_0103;
	message("\"Art thou ready to answer questions from the Book of Fellowship?\"");
	say();
	if (!Func090A()) goto labelFunc041A_00FE;
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc041A_00EA;
	if (!(var0000 == 0x001C)) goto labelFunc041A_0099;
	message("\"Excellent, Avatar!\"");
	say();
	message("Fighting a tremble of hesitation you take a long deep drink from the goblet. Batlin steps up to you. \"May the news spread far and wide that our newest member is none other than the Avatar!\"");
	say();
	message("The other Fellowship members cheer with pleasure.");
	say();
	goto labelFunc041A_009D;
labelFunc041A_0099:
	message("\"Very good, Avatar.\"");
	say();
labelFunc041A_009D:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0002) goto labelFunc041A_00D0;
	message("\"Allow me to present thee with thy Fellowship medallion.\" Batlin gives you the medallion. \"Please -- wear thy medallion at all times for it shall be a symbol to all who see it that thou dost walk with the Fellowship. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\"*");
	say();
	gflags[0x0090] = true;
	goto labelFunc041A_00D4;
labelFunc041A_00D0:
	message("\"Thou art too encumbered to receive thy Fellowship medallion. Thou must lighten thy load.\"*");
	say();
labelFunc041A_00D4:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x56, 0x0017]);
	abort;
	goto labelFunc041A_00FB;
labelFunc041A_00EA:
	message("\"My dear Avatar. Thou must realize that thou must know everything there is to know about The Fellowship before I can induct thee. Please study thy Book of Fellowship and return to me.");
	say();
	message("Your mind seems unclear. I would not be surprised if thou dost not understand\tanother soul with whom thou dost speak.\"");
	say();
	UI_set_item_flag(item, 0x0019);
	abort;
labelFunc041A_00FB:
	goto labelFunc041A_0103;
labelFunc041A_00FE:
	message("\"Come back when thou art ready.\"*");
	say();
	abort;
labelFunc041A_0103:
	var0004 = Func0909();
	var0005 = UI_wearing_fellowship();
	var0006 = UI_part_of_day();
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFE6));
	var0007 = Func0908();
	if (!(var0000 == 0x001C)) goto labelFunc041A_0149;
	if (!(gflags[0x008D] && (!gflags[0x0091]))) goto labelFunc041A_0146;
	Func084F();
	goto labelFunc041A_0149;
labelFunc041A_0146:
	Func0850();
labelFunc041A_0149:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0041]) goto labelFunc041A_0166;
	UI_add_answer("Elizabeth and Abraham");
labelFunc041A_0166:
	if (!gflags[0x0096]) goto labelFunc041A_017A;
	if (!(!gflags[0x0006])) goto labelFunc041A_017A;
	UI_add_answer("join");
labelFunc041A_017A:
	if (!(gflags[0x00D7] || (gflags[0x00D6] && (!gflags[0x0109])))) goto labelFunc041A_0190;
	UI_add_answer("package");
labelFunc041A_0190:
	if (!gflags[0x0109]) goto labelFunc041A_01A4;
	UI_add_answer("delivered package");
	UI_remove_answer("package");
labelFunc041A_01A4:
	if (!gflags[0x0102]) goto labelFunc041A_01B1;
	UI_add_answer("package delivered");
labelFunc041A_01B1:
	if (!gflags[0x011E]) goto labelFunc041A_01BE;
	UI_add_answer("package delivered");
labelFunc041A_01BE:
	if (!gflags[0x008E]) goto labelFunc041A_01DE;
	UI_remove_answer(["delivered package", "package delivered"]);
	if (!gflags[0x0097]) goto labelFunc041A_01DE;
	UI_add_answer("chest");
labelFunc041A_01DE:
	if (!gflags[0x008D]) goto labelFunc041A_01EB;
	UI_remove_answer("chest");
labelFunc041A_01EB:
	if (!gflags[0x0091]) goto labelFunc041A_01FF;
	if (!(!gflags[0x0090])) goto labelFunc041A_01FF;
	UI_add_answer("medallion");
labelFunc041A_01FF:
	if (!gflags[0x0094]) goto labelFunc041A_020C;
	UI_add_answer("apples");
labelFunc041A_020C:
	if (!(gflags[0x008A] || (gflags[0x008C] || gflags[0x000A]))) goto labelFunc041A_0221;
	UI_add_answer("voice");
labelFunc041A_0221:
	if (!gflags[0x008B]) goto labelFunc041A_022E;
	UI_add_answer("Meditation Retreat");
labelFunc041A_022E:
	if (!(!gflags[0x009B])) goto labelFunc041A_0254;
	message("You see a rotund older gentleman, who is at once humble yet dignified. His gentle eyes exude caring for his fellow person.");
	say();
	gflags[0x009B] = true;
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0251;
	message("The man's eyes focus on the Fellowship medallion around your neck.");
	say();
	message("\"My dear friend, thou art falsely impersonating a Fellowship member! Remove that medallion at once!\"*");
	say();
	abort;
labelFunc041A_0251:
	goto labelFunc041A_0271;
labelFunc041A_0254:
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0267;
	message("\"I shall not speak to thee unless thou dost remove that Fellowship medallion. Thou art falsely impersonating a Fellowship member!\"*");
	say();
	abort;
	goto labelFunc041A_0271;
labelFunc041A_0267:
	message("\"");
	message(var0007);
	message(", my dear, dear friend! How wonderful to see thee again!\" says Batlin.");
	say();
labelFunc041A_0271:
	converse attend labelFunc041A_0690;
	case "name" attend labelFunc041A_0287:
	message("\"My name, good friend, is Batlin. And indeed it is truly a privilege to meet the Avatar in the flesh.\"");
	say();
	UI_remove_answer("name");
labelFunc041A_0287:
	case "job" attend labelFunc041A_029A:
	message("\"I was once a druid. Now I am the leader and the originator of The Fellowship. It is rapidly growing throughout Britannia and keeps me very busy, as thou canst well imagine. Ha! Ha! Ha!\"");
	say();
	UI_add_answer("Fellowship");
labelFunc041A_029A:
	case "Fellowship" attend labelFunc041A_02B4:
	message("\"The Fellowship was formed twenty years ago with the full approval and support of Lord British. It is a society of spiritual seekers who strive to reach the highest levels of human potential and to share this knowledge freely with all people.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer("spiritual");
labelFunc041A_02B4:
	case "spiritual" attend labelFunc041A_02D4:
	message("\"The Fellowship advances the philosophy of sanguine cognition, a way to apply a positive order of thought to one's life through what is called the Triad of Inner Strength.\"");
	say();
	UI_remove_answer("spiritual");
	UI_add_answer(["sanguine cognition", "Triad"]);
labelFunc041A_02D4:
	case "sanguine cognition" attend labelFunc041A_02EE:
	message("\"We strive to avoid the mistakes made by mystics and sages since the dawn of time. They apply the standards of the past, such as the virtues, for example, to qualify the present, and thus they do not perceive it correctly. We seek to examine our present lives each on our own terms and see the world the way it is.\"");
	say();
	UI_remove_answer("sanguine cognition");
	UI_add_answer("virtues");
labelFunc041A_02EE:
	case "virtues" attend labelFunc041A_0301:
	message("\"They are perfectly adequate for those who feel that they still need them for whatever reason. But no one, not even thyself, thou must admit, Avatar, can fulfill them perfectly. Therefore they are a philosophy that is ultimately based upon failure. We have never claimed that our teachings are a substitute for the virtues. However, ours is a belief that is based upon success, not failure.\"");
	say();
	UI_remove_answer("virtues");
labelFunc041A_0301:
	case "Triad" attend labelFunc041A_031B:
	message("\"The Triad of Inner Strength is simply three basic values that, when applied in unison, enable one to be more creative, satisfied and successful in life.\"");
	say();
	UI_remove_answer("Triad");
	UI_add_answer("values");
labelFunc041A_031B:
	case "values" attend labelFunc041A_033E:
	message("\"The three values of the Triad of Inner Strength are Strive For Unity, Trust Thy Brother and Worthiness Precedes Reward.\"");
	say();
	UI_remove_answer("values");
	UI_add_answer(["Unity", "Trust", "Worthiness"]);
labelFunc041A_033E:
	case "Unity" attend labelFunc041A_0358:
	message("\"When we say Strive For Unity, it is simply our way of expressing how the people of Britannia should all cooperate and work together. A worthwhile sentiment, I am certain thou wouldst concur.\"");
	say();
	UI_remove_answer("Unity");
	UI_add_answer("join");
labelFunc041A_0358:
	case "Trust" attend labelFunc041A_0372:
	message("\"What The Fellowship means by this is that people are all the same and the world is, generally speaking, a supportive, nurturing place. The trust we place in each other is like the pinions that hold our society together. Quite true, wouldst thou not say?\"");
	say();
	UI_remove_answer("Trust");
	UI_add_answer("join");
labelFunc041A_0372:
	case "Worthiness" attend labelFunc041A_038C:
	message("\"Allow me to explain the meaning of Worthiness Precedes Reward. Each one of us seeks something which we desire from life and we must strive to be worthy of that which we seek. It would be difficult for thee to disagree I am quite sure.\"");
	say();
	UI_remove_answer("Worthiness");
	UI_add_answer("join");
labelFunc041A_038C:
	case "Elizabeth and Abraham" attend labelFunc041A_03E5:
	if (!(!gflags[0x0105])) goto labelFunc041A_03A3;
	message("\"Ah, my good colleagues Elizabeth and Abraham were just here. They left this morning for Minoc on Fellowship business. They deal with the distribution and collection of funds.\"");
	say();
	gflags[0x0087] = true;
labelFunc041A_03A3:
	if (!(gflags[0x0105] && (!gflags[0x016B]))) goto labelFunc041A_03B2;
	message("\"I have not seen my colleagues since they were last here. They are busy folk.\"");
	say();
labelFunc041A_03B2:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc041A_03C1;
	message("\"I have not seen my colleagues since they were last here. They are busy folk.\"");
	say();
labelFunc041A_03C1:
	if (!(gflags[0x016B] && (!gflags[0x0284]))) goto labelFunc041A_03D4;
	message("Batlin smiles and shakes his head. \"Thou art not having much luck tracking them down, art thou? They were here, having done some work in Jhelom, but now they have gone to Vesper to see about starting a branch there.\"");
	say();
	gflags[0x0088] = true;
labelFunc041A_03D4:
	if (!gflags[0x0284]) goto labelFunc041A_03DE;
	message("\"I have not seen my colleagues since they were last here. They are busy folk.\"");
	say();
labelFunc041A_03DE:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc041A_03E5:
	case "join" attend labelFunc041A_0416:
	if (!gflags[0x0006]) goto labelFunc041A_03FA;
	message("\"But thou art already a member, Avatar! One can only join once!\"");
	say();
	goto labelFunc041A_040F;
labelFunc041A_03FA:
	if (!(gflags[0x0096] && (!gflags[0x0097]))) goto labelFunc041A_040C;
	message("\"Thou hast not completed thy tasks. Remember that Worthiness Precedes Reward. Once thou hast completed the missions, thou mayest join.\"");
	say();
	goto labelFunc041A_040F;
labelFunc041A_040C:
	Func084D();
labelFunc041A_040F:
	UI_remove_answer("join");
labelFunc041A_0416:
	case "package" attend labelFunc041A_0478:
	if (!(gflags[0x00D7] && (!gflags[0x008F]))) goto labelFunc041A_0475;
	message("\"Ah! I do hope thine hands are not too full to take the package.\"");
	say();
	var0008 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0009 = UI_set_last_created(var0008);
	var000A = UI_give_last_created(0xFE9C);
	if (!var000A) goto labelFunc041A_0463;
	message("\"Excellent! Here it is. Thou must now be on thy way!\"*");
	say();
	gflags[0x008F] = true;
	abort;
labelFunc041A_0463:
	var000A = UI_give_last_created(0xFFE6);
	message("\"Avatar! I am tired of this! Please make room in thine inventory for the package!\"*");
	say();
	abort;
	goto labelFunc041A_0478;
labelFunc041A_0475:
	Func0851();
labelFunc041A_0478:
	case "delivered package" attend labelFunc041A_0492:
	message("\"Congratulations, Avatar, and our thanks to thee for successfully delivering our package to Elynor of Minoc. Now we have another task at hand before thou canst join The Fellowship. Because thou didst deliver the package thou hast proven thyself worthy of performing another mission.\"");
	say();
	UI_remove_answer("delivered package");
	UI_add_answer("mission");
labelFunc041A_0492:
	case "package delivered" attend labelFunc041A_0512:
	message("\"Avatar, didst thou deliver the package to Elynor of Minoc?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc041A_04E4;
	message("\"Didst thou open the package?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc041A_04C8;
	message("\"Thou knew that thou wast instructed not to open it. We put trust in thee to carry out our instructions to the letter and that trust was broken.\"");
	say();
	UI_add_answer("mission");
	goto labelFunc041A_04CC;
labelFunc041A_04C8:
	message("\"That is not what Elynor of Minoc tells us. We put trust in thee to carry out our instructions to the letter and that trust was broken.");
	say();
labelFunc041A_04CC:
	if (!gflags[0x011E]) goto labelFunc041A_04D6;
	message("\"I understand that the contents of the package were missing as well, and this is very serious indeed!");
	say();
labelFunc041A_04D6:
	message("\"I am afraid that thou must carry out a mission for us as a test of trust if thou art to begin truly walking with The Fellowship.\"");
	say();
	UI_add_answer("mission");
	goto labelFunc041A_050B;
labelFunc041A_04E4:
	message("Batlin's eyes open wide in surprise.");
	say();
	message("\"What has happened? Hast thou lost the package?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc041A_0506;
	message("\"Tsk. Tsk. Tsk. That is most unfortunate. We put trust in thee to deliver the package and that trust was broken. I am afraid that thou must carry out a mission for us as a test of trust if thou art to begin truly walking with The Fellowship.\"");
	say();
	UI_add_answer("mission");
	goto labelFunc041A_050B;
labelFunc041A_0506:
	message("\"Please deliver our package, Avatar. We have more business to discuss once thou art finished.\"*");
	say();
	abort;
labelFunc041A_050B:
	UI_remove_answer("package delivered");
labelFunc041A_0512:
	case "mission" attend labelFunc041A_0530:
	message("\"Thou shalt visit the dungeon of Destard, which is in the mountains just west of Trinsic. Do not worry, it is completely deserted. There thou shalt find a chest of Fellowship funds which was hidden for safekeeping just a few days ago. Thou wilt know the chest because it will contain not only gold but two Fellowship medallions. The site is also most likely marked with a Fellowship staff. Bring these funds back to us without losing a single coin and thou wilt have successfully completed thy mission. No need to bring the chest, just the gold. Now, thou must be on thy way!\"*");
	say();
	gflags[0x008E] = true;
	Func0911(0x0064);
	UI_remove_answer("mission");
	abort;
labelFunc041A_0530:
	case "chest" attend labelFunc041A_0556:
	message("\"Ah yes, thou hast returned from Dungeon Destard! But wait! I do not see the Fellowship funds that thou wast to bring back! What has happened?!\"");
	say();
	UI_add_answer(["a highwayman", "monsters", "pirates", "ship sunk"]);
	UI_remove_answer("chest");
labelFunc041A_0556:
	case "a highwayman" attend labelFunc041A_0570:
	message("\"Why, thy tale is outlandish! I refuse to believe it!\" Batlin sniffs in irritation.");
	say();
	UI_remove_answer("a highwayman");
	UI_add_answer("join");
labelFunc041A_0570:
	case "monsters" attend labelFunc041A_0596:
	message("\"Monsters! There are monsters lurking in dungeon Destard?! Well then, I do apologize for thine inconvenience.\"");
	say();
	UI_remove_answer(["monsters", "a highwayman", "ship sunk", "pirates"]);
	UI_add_answer("join");
labelFunc041A_0596:
	case "pirates" attend labelFunc041A_05B0:
	message("\"Surely thou canst do better than that! If thou simply dost not wish to answer my question why dost thou not say so?\"");
	say();
	UI_remove_answer("pirates");
	UI_add_answer("join");
labelFunc041A_05B0:
	case "ship sunk" attend labelFunc041A_05CA:
	message("Batlin slowly rolls his eyes. \"Thou ought to have been a bard, thou dost regale me with such stories!\"");
	say();
	UI_remove_answer("ship sunk");
	UI_add_answer("join");
labelFunc041A_05CA:
	case "medallion" attend labelFunc041A_0605:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	if (!var0002) goto labelFunc041A_05FE;
	message("\"Allow me to present thee with thy Fellowship medallion.\" Batlin gives you the medallion. \"Please -- wear the medallion at all times. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\"");
	say();
	gflags[0x0090] = true;
	UI_remove_answer("medallion");
	goto labelFunc041A_0605;
labelFunc041A_05FE:
	message("\"Thou cannot receive thy Fellowship medallion. Thou art too encumbered!\"*");
	say();
	goto labelFunc041A_0690;
labelFunc041A_0605:
	case "apples" attend labelFunc041A_0618:
	message("\"While thou art here, please feel free to enjoy an apple. The finest in all of Britannia, I am certain thou wilt find. They are provided to The Fellowship by the Royal Orchards.\"");
	say();
	UI_remove_answer("apples");
labelFunc041A_0618:
	case "voice" attend labelFunc041A_0645:
	if (!gflags[0x0096]) goto labelFunc041A_0633;
	message("\"Once a person has walked with The Fellowship long enough and applied the Triad of Inner Strength to his life, he has cleared his mind of all conflicting, counterproductive thoughts to the point where he may actually hear his internal voice of reason. This voice of reason is the core of thine inner mind which guides thee through pure instinct, wisdom and irreproachable logic. Once one starts to listen to it and follow its guidance, one has achieved the height of enlightenment. Perhaps thou shalt hear it one day.\"");
	say();
	Func0911(0x0014);
	goto labelFunc041A_063E;
labelFunc041A_0633:
	message("\"Only active or potential Fellowship members are privy to the concept of 'the voice'. I can tell thee more when thou dost take the Fellowship test.\"");
	say();
	UI_add_answer("test");
labelFunc041A_063E:
	UI_remove_answer("voice");
labelFunc041A_0645:
	case "test" attend labelFunc041A_066F:
	message("\"Oh, art thou ready to join The Fellowship?\"");
	say();
	if (!Func090A()) goto labelFunc041A_065D;
	Func084D();
	goto labelFunc041A_0668;
labelFunc041A_065D:
	message("\"Until thou art ready to join, I cannot tell thee any more about the test.\"");
	say();
	UI_add_answer("join");
labelFunc041A_0668:
	UI_remove_answer("test");
labelFunc041A_066F:
	case "Meditation Retreat" attend labelFunc041A_0682:
	message("\"It is a retreat from the pressures and distractions of everyday life where new members of The Fellowship may go and study the philosophies of The Fellowship. It is located on an island east of Serpent's Hold.\"");
	say();
	UI_remove_answer("Meditation Retreat");
labelFunc041A_0682:
	case "bye" attend labelFunc041A_068D:
	goto labelFunc041A_0690;
labelFunc041A_068D:
	goto labelFunc041A_0271;
labelFunc041A_0690:
	endconv;
	message("\"Until we meet again, Avatar.\"*");
	say();
labelFunc041A_0695:
	if (!(event == 0x0000)) goto labelFunc041A_06A3;
	Func092E(0xFFE6);
labelFunc041A_06A3:
	return;
}


