#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern void Func08A9 0x8A9 ();
extern void Func08AB 0x8AB ();

void Func0435 object#(0x435) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000);
	var0004 = Func0994();
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc0435_0046;
	UI_set_schedule_type(0xFFCB, 0x000A);
labelFunc0435_0046:
	if (!(event == 0x0002)) goto labelFunc0435_00CA;
	if (!gflags[0x015C]) goto labelFunc0435_0055;
	abort;
labelFunc0435_0055:
	if (!(Func0994() == 0x0003)) goto labelFunc0435_00AD;
	var0005 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0435], 0x004B);
	var0005 = UI_approach_avatar(0xFFCB, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFCB, 0x0003);
	Func097F(0xFFCB, (("@Hail, " + var0002) + "!@"), 0x0002);
	goto labelFunc0435_00CA;
labelFunc0435_00AD:
	var0005 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0435], 0x0096);
labelFunc0435_00CA:
	if (!(event == 0x0007)) goto labelFunc0435_00E4;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0435_00E4:
	if (!(event == 0x0001)) goto labelFunc0435_011A;
	UI_item_say(0xFE9C, "@Hail, guardsman!@");
	0xFFCB->Func07D1();
	Func097F(0xFFCB, (("@Hail, " + var0000) + "!@"), 0x0005);
	UI_set_schedule_type(0xFFCB, 0x0003);
labelFunc0435_011A:
	if (!(event == 0x0009)) goto labelFunc0435_0710;
	UI_run_schedule(0xFFCB);
	UI_clear_item_say(0xFFCB);
	UI_show_npc_face0(0xFFCB, 0x0000);
	var0006 = UI_get_item_flag(0xFFCB, 0x001C);
	if (!(gflags[0x01B6] && (!gflags[0x015C]))) goto labelFunc0435_017D;
	UI_show_npc_face0(0xFFCB, 0x0000);
	message("\"Greetings, visitors! Thanks to the beautiful songs of the bard Iolo, thou hast found favor in our good city.\"");
	say();
	message("\"The Lady would welcome thee formally to Fawn. Thou mayest attend her within her throne room at the palace, after noon.\"");
	say();
	message("\"Be certain to bring that fellow Iolo with thee -- the Lady doth wish to confer an honor upon him.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCB, "@Such an honor...@", 0x0002);
	gflags[0x015C] = true;
	abort;
labelFunc0435_017D:
	if (!(var0006 == false)) goto labelFunc0435_01C1;
	if (!(gflags[0x003E] == true)) goto labelFunc0435_01AA;
	if (!(gflags[0x014E] == true)) goto labelFunc0435_019C;
	message("\"Finely done, brave Monitorian! We had despaired when those vile goblins seized the tower.\" *\"I am Jorvin, Captain of the guard. How may I be of service?\"");
	say();
	goto labelFunc0435_01A0;
labelFunc0435_019C:
	message("\"A Monitorian! I hope this means that Monitor plans to retake the Fawn tower from those vile goblins.\" *\"I am Jorvin, Captain of the guard. How may I be of service?\"");
	say();
labelFunc0435_01A0:
	UI_add_answer("tower");
	goto labelFunc0435_01B4;
labelFunc0435_01AA:
	message("\"Thou art new here, ");
	message(var0000);
	message(". I am Jorvin, Captain of the guard. How may I be of service?\"");
	say();
labelFunc0435_01B4:
	UI_set_item_flag(0xFFCB, 0x001C);
	goto labelFunc0435_01CB;
labelFunc0435_01C1:
	message("\"Well met, ");
	message(var0002);
	message("! 'Tis good to see thee again.\"");
	say();
labelFunc0435_01CB:
	UI_add_answer(["goblins", "storms", "Fellowship troublemakers", "Wand of Detainment"]);
	if (!(gflags[0x015D] == true)) goto labelFunc0435_01ED;
	UI_add_answer("Assassin");
labelFunc0435_01ED:
	if (!(gflags[0x0198] && (!gflags[0x0296]))) goto labelFunc0435_01FF;
	UI_add_answer("strange hairbrush");
labelFunc0435_01FF:
	if (!(gflags[0x019B] && (!gflags[0x029A]))) goto labelFunc0435_0211;
	UI_add_answer("skull");
labelFunc0435_0211:
	if (!(gflags[0x019C] && (!gflags[0x029C]))) goto labelFunc0435_0223;
	UI_add_answer("plain shield");
labelFunc0435_0223:
	UI_add_answer("bye");
labelFunc0435_022A:
	converse attend labelFunc0435_070F;
	case "tower" attend labelFunc0435_02C4:
	if (!(gflags[0x003E] == true)) goto labelFunc0435_029A;
	if (!(gflags[0x014E] == true)) goto labelFunc0435_0293;
	message("\"When the goblins took the tower, we feared that Fawn would be crushed without the Pikemen. 'Twas a horrible thought -- trapped between the storms and the goblins with no escape.\" *\"'Twas certainly the bravest of Monitorians that led the assault to retake the tower.\" ~\"Wert thou there?\"");
	say();
	var0007 = Func0955();
	if (!var0007) goto labelFunc0435_0271;
	if (!(var0001 == true)) goto labelFunc0435_0264;
	message("\"How remarkable! Thou art surely as beautiful as Lady Yelinda, and as brave as any Pikeman.\" *\"Pray, forgive mine astonishment. In Fawn, all females -- especially the beautiful ones -- are forbidden to endanger themselves. We could not bear to see Beauty such as thine marred in any way.\"");
	say();
	goto labelFunc0435_026E;
labelFunc0435_0264:
	message("\"Oh, how I wish I could have been at thy side! My duty to Lady Yelinda is such that -- even had we enough able-bodied men to attempt it -- I could not leave her unprotected to undertake the task.\" *\"I envy thee, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0435_026E:
	goto labelFunc0435_0290;
labelFunc0435_0271:
	if (!(var0001 == true)) goto labelFunc0435_0286;
	message("\"Perhaps 'twas for the best. Do not mistake me, ");
	message(var0000);
	message(". I do not mean to imply that thou wouldst not have fought valiantly.\" *\"In Fawn, all females -- especially the beautiful ones -- are forbidden to endanger themselves. Beauty that rivals even that of Lady Yelinda should not be marred in any way.\"");
	say();
	goto labelFunc0435_0290;
labelFunc0435_0286:
	message("\"No doubt there will be another day for thee, ");
	message(var0000);
	message(".\" *\"Mine own duty to Lady Yelinda kept me from joining in the fray. I could not leave her unprotected in a city so besieged.\"");
	say();
labelFunc0435_0290:
	goto labelFunc0435_0297;
labelFunc0435_0293:
	message("\"I fear that Fawn will be crushed without the aid of thee and thy Pikemen comrades. 'Tis a horrible thought -- trapped between the storms and the goblins with no escape.\" *\"'Twill certainly take the bravest of Monitorians to lead the assault to retake the tower. I fear that my duty to Lady Yelinda doth not allow me to undertake the attempt myself.\"");
	say();
labelFunc0435_0297:
	goto labelFunc0435_02AD;
labelFunc0435_029A:
	if (!(gflags[0x014E] == true)) goto labelFunc0435_02A9;
	message("\"The Monitorians have guard towers along the central roads between cities. The Pikemen are often the only thing that stands between the goblins and the travellers.\" *\"Lady Yelinda is much relieved now that the Pikemen have wrested control of the Fawn tower from those vile goblins. 'Twas a frightening notion to be caught between the goblins and the storms... with no hope of escape.\"");
	say();
	goto labelFunc0435_02AD;
labelFunc0435_02A9:
	message("\"The Monitorians had guard towers along the central roads between cities. The Pikemen were often the only thing that stood between the goblins and the travellers.\" *\"Lady Yelinda is very concerned now that those vile goblins have wrested control of the Fawn tower from the Pikemen. 'Tis a frightening notion, being caught between the goblins and the storms... with no hope of escape.\"");
	say();
labelFunc0435_02AD:
	UI_remove_answer("tower");
	UI_add_answer(["Monitorians", "Pikemen", "Lady Yelinda"]);
labelFunc0435_02C4:
	case "Monitorians" attend labelFunc0435_0316:
	if (!(gflags[0x003E] == true)) goto labelFunc0435_030B;
	if (!(gflags[0x015B] == false)) goto labelFunc0435_0300;
	message("\"By the mark that thou dost wear on thy face, I judged thee as a Monitorian. Perhaps I am mistaken. Art thou from Monitor, ");
	message(var0000);
	message("?\"");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0435_02F9;
	message("\"I am honored to meet thee. I have always valued the brave Pikemen that guard our roads.\"");
	say();
	goto labelFunc0435_02FD;
labelFunc0435_02F9:
	message("\"Then thou must be brave indeed! Monitor hath never before welcomed outsiders into the ranks of the Pikemen.\" *\"I am honored to meet thee.\"");
	say();
labelFunc0435_02FD:
	goto labelFunc0435_0304;
labelFunc0435_0300:
	message("\"I am certain that Lady Yelinda will wish to receive thee formally once she knows that thou art in the city. I will see that thou art properly escorted when she doth wish to see thee.\"");
	say();
labelFunc0435_0304:
	gflags[0x015B] = true;
	goto labelFunc0435_030F;
labelFunc0435_030B:
	message("\"The Monitorians come from a city dedicated to bravery. Their soldiers are called the Pikemen. Thou mayest know them by the tattoos on their faces.\"");
	say();
labelFunc0435_030F:
	UI_remove_answer("Monitorians");
labelFunc0435_0316:
	case "Pikemen" attend labelFunc0435_037E:
	if (!(gflags[0x003E] == true)) goto labelFunc0435_035D;
	if (!(gflags[0x015B] == false)) goto labelFunc0435_0352;
	message("\"By the mark that thou dost wear on thy face, I judged thee as a Pikeman. Perhaps I am mistaken. Art thou from Monitor, ");
	message(var0000);
	message("?\"");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0435_034B;
	message("\"I am honored to meet thee. I have always valued the brave Pikemen that guard our roads.\"");
	say();
	goto labelFunc0435_034F;
labelFunc0435_034B:
	message("\"Then thou must be brave indeed! Monitor hath never before welcomed outsiders into the ranks of the Pikemen.\" *\"I am honored to meet thee.\"");
	say();
labelFunc0435_034F:
	goto labelFunc0435_0356;
labelFunc0435_0352:
	message("\"I am certain that Lady Yelinda will wish to receive thee formally once she knows that thou art in the city. I will see that thou art properly escorted when she doth wish to see thee.\"");
	say();
labelFunc0435_0356:
	gflags[0x015B] = true;
	goto labelFunc0435_0377;
labelFunc0435_035D:
	if (!(gflags[0x014E] == true)) goto labelFunc0435_036C;
	message("\"They are the finest warriors in the land. Though some may grumble at the tribute they ask, I think it is a small price to pay. Their bravery hath been the only thing that hath kept the goblins at bay all these years.\"");
	say();
	goto labelFunc0435_0370;
labelFunc0435_036C:
	message("\"They are the finest warriors in the land. Though some feel that the tribute they asked was too much, now that they have failed to hold the tower.\"");
	say();
labelFunc0435_0370:
	UI_add_answer("tribute");
labelFunc0435_0377:
	UI_remove_answer("Pikemen");
labelFunc0435_037E:
	case "tribute" attend labelFunc0435_03A0:
	if (!(gflags[0x014E] == true)) goto labelFunc0435_0395;
	message("\"The Fawn tower Pikemen levy a toll for every person that travels along this length of road.\" *\"The Pikemen must not only protect the travellers, but also insure the upkeep of the tower and this portion of the road. I do not feel that the charge is unwarranted.\"");
	say();
	goto labelFunc0435_0399;
labelFunc0435_0395:
	message("\"The Fawn tower Pikemen levied a toll for every person that travelled along this length of road.\" *\"The Pikemen not only protected the travellers, but also insured the upkeep of the tower and this portion of the road. I did not feel that the charge was unwarranted, although there are those in the city that disagree with me now that the tower hath fallen to the goblins.\"");
	say();
labelFunc0435_0399:
	UI_remove_answer("tribute");
labelFunc0435_03A0:
	case "Lady Yelinda" attend labelFunc0435_03BA:
	message("\"Lady Yelinda is the ruler of Fawn, and is the most beautiful of all women within the city. If thou seekest an audience with her, thou must speak with the Chancellor.\"");
	say();
	UI_remove_answer("Lady Yelinda");
	UI_add_answer("Chancellor");
labelFunc0435_03BA:
	case "Chancellor" attend labelFunc0435_03F4:
	UI_remove_answer("Chancellor");
	message("\"His name is Zulith. Thou mayest know him by his green robes of state. Thou canst not miss them.");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0435_03E3;
	message("\"Thou canst most often find Zulith in the palace, acting as Lady Yelinda's secretary.\"");
	say();
	goto labelFunc0435_03F4;
labelFunc0435_03E3:
	message("\"Thou canst most often find Zulith either in the palace, acting as Lady Yelinda's envoy to the Great Captains, or in the Temple. He seems to be a fervent follower of Beauty.\"");
	say();
	UI_add_answer(["Great Captains", "Temple"]);
labelFunc0435_03F4:
	case "Great Captains" attend labelFunc0435_040E:
	message("\"The Great Captains serve as counselors to Lady Yelinda. They deal with most trade matters, and oversee the disposition of the fleets. Thou canst find them near the docks most times.\"");
	say();
	UI_remove_answer("Great Captains");
	UI_add_answer("fleets");
labelFunc0435_040E:
	case "fleets" attend labelFunc0435_0428:
	message("\"Until the storms began, Fawn's means of livelihood was fishing. Now our economy is all but ruined. The storms have destroyed all of our ships.\" *\"Our fishermen must fish from the docks. We have only enough fish to feed the city. We have none to trade to the other cities. Only Alyssand still finds a way to bring money into the city.\"");
	say();
	UI_remove_answer("fleets");
	UI_add_answer("Alyssand");
labelFunc0435_0428:
	case "Alyssand" attend labelFunc0435_0442:
	message("\"Alyssand is the daughter of Delin the shopkeeper. She makes fishnet stockings that she exports to wealthy customers in Moonshade.\" *\"Ever since her betrothed disappeared, Alyssand hath taken to listening to the babble of The Fellowship followers. I hope she doth not go astray.\"");
	say();
	UI_remove_answer("Alyssand");
	UI_add_answer("betrothed");
labelFunc0435_0442:
	case "betrothed" attend labelFunc0435_0464:
	message("\"Alyssand's betrothed was a fisherman named Keth. He was without shelter during one of these freak storms. No one hath seen him since.\" *\"Alyssand took it well enough -- until a storm took away the engagement ring he had specially made for her in Moonshade. I suspect that she always hoped that he would come back. Now that the ring is gone, Alyssand hath had to face the truth that Keth might well be a tree now, for all we know.\"");
	say();
	UI_remove_answer("betrothed");
	if (!(var0003 == true)) goto labelFunc0435_0464;
	UI_add_answer("engagement ring");
labelFunc0435_0464:
	case "engagement ring" attend labelFunc0435_047A:
	message("\"'Tis the one, in truth! I would recognize it anywhere. Keth showed it to me when he did bring it back from Moonshade.\" *\"Alyssand will be thrilled, no doubt. Perhaps this will turn her mind from the false path she now follows.\" *\"Thou mayest ask for her at Delin's shop. He should know where she is.\"");
	say();
	Func08A9();
	UI_remove_answer("engagement ring");
labelFunc0435_047A:
	case "Temple" attend labelFunc0435_048D:
	message("\"The Temple is located beyond the palace, on the waterfront. 'Tis dedicated to Beauty, as is all of Fawn.\"");
	say();
	UI_remove_answer("Temple");
labelFunc0435_048D:
	case "goblins" attend labelFunc0435_04D9:
	if (!(gflags[0x014E] == false)) goto labelFunc0435_04C7;
	if (!(gflags[0x003E] == true)) goto labelFunc0435_04B3;
	message("\"We did defeat them handily with the help of the Monitorians. But now that they have organized under one leader and taken control of the tower, 'tis all we can do to hold them at bay.\"");
	say();
	UI_add_answer("leader");
	goto labelFunc0435_04B7;
labelFunc0435_04B3:
	message("\"The Monitorians were our only hope of withstanding the new unity of the goblins. But with the tower taken, 'tis only a matter of time before Fawn is lost. With the fleets destroyed, we dare not hope to escape their cookpots.\"");
	say();
labelFunc0435_04B7:
	UI_add_answer(["unity", "cookpots"]);
	goto labelFunc0435_04CB;
labelFunc0435_04C7:
	message("\"We had despaired of falling to their newfound unity. But we have hope again now that the tower hath been retaken.\"");
	say();
labelFunc0435_04CB:
	UI_add_answer("unity");
	UI_remove_answer("goblins");
labelFunc0435_04D9:
	case "leader" attend labelFunc0435_04EC:
	message("\"A huge brute that calls himself Pomdirgun. Leastways I think that is it... hard to understand anything a goblin says.\" *\"He killed all the other goblin leaders and made himself the head chief. He is very dangerous. 'Tis almost as though he doth have a brain.\"");
	say();
	UI_remove_answer("leader");
labelFunc0435_04EC:
	case "unity" attend labelFunc0435_04FF:
	message("\"For these many years the goblins fought more amongst themselves than with us. Raided the towns a time or two, but nothing truly serious.\" *\"Now they are all following one crafty goblin. Always seems to outwit the soldiers sent to kill him.\"");
	say();
	UI_remove_answer("unity");
labelFunc0435_04FF:
	case "cookpots" attend labelFunc0435_0519:
	message("\"Anyone knows that goblins devour people! Why soon before the storms began, they abducted the healer who was gathering herbs.\"");
	say();
	UI_remove_answer("cookpots");
	UI_add_answer("healer");
labelFunc0435_0519:
	case "healer" attend labelFunc0435_0533:
	message("\"We took an armed band after them as quickly as possible, but all we found of him was his head... The rest was doubtless in the cookpot or the grinder. Delphynia doth do her best to take his place.\"");
	say();
	UI_remove_answer("healer");
	UI_add_answer("Delphynia");
labelFunc0435_0533:
	case "Delphynia" attend labelFunc0435_0546:
	message("\"She is the town herbalist, actually. She doth spend her time between her greenhouse and the healer's hall.\" *\"We tried to send word to Moonshade or Monitor for another healer, but no one was willing to come -- what with the storms and all.\"");
	say();
	UI_remove_answer("Delphynia");
labelFunc0435_0546:
	case "storms" attend labelFunc0435_0559:
	message("\"We expect bad weather, being located on the water as we are. But these storms seem... well... evil somehow. Lightning that causes things to disappear. Not burnt to ashes, mind thee, completely gone. Lightning that takes something and leaves something else in its place.\" *\"Thou must find shelter quickly when thou dost think a storm is approaching.\"");
	say();
	UI_remove_answer("storms");
labelFunc0435_0559:
	case "Fellowship troublemakers" attend labelFunc0435_0589:
	UI_remove_answer("Fellowship troublemakers");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0435_057E;
	message("\"Now, do not speak of Leon's followers in such a manner! We of Fawn have learned tolerance, thanks to the Lady's example.\"");
	say();
	goto labelFunc0435_0589;
labelFunc0435_057E:
	message("\"I see the guards are still spreading that gossip...\" *\"Before these strange storms started, a ship came into our port bearing no resemblance to any ship we knew. Those aboard her told us that they had voyaged from Old Sosaria. Though our seamen found this hard to believe, we accepted them.\" *\"Leon began preaching about some strange notion called The Fellowship right before the storms started. Kylista took this as a sign that the heavens were angry with us for allowing this foreign belief into the city. After seeking counsel with the Great Captains, Lady Yelinda regretfully banned the sailors and the passengers from the city.\"");
	say();
	UI_add_answer("Kylista");
labelFunc0435_0589:
	case "Kylista" attend labelFunc0435_05A9:
	message("\"Kylista is the Priestess of Beauty. 'Tis her duty to see to the spiritual well-being of the people of Fawn. Her task hath not been easy since the fleet was destroyed. Many people are disillusioned.\" *\"Our only comfort lies in the revelations of the Oracle.\"");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer(["revelations", "Oracle"]);
labelFunc0435_05A9:
	case "revelations" attend labelFunc0435_05C0:
	message("\"The revelations assure us that the heavens have not totally turned their eyes from Fawn.\"");
	say();
	message("\"If thou dost visit the Temple whilst thou art here, I am sure that thou wilt be able to hear for thyself.\"");
	say();
	UI_remove_answer("revelations");
labelFunc0435_05C0:
	case "Oracle" attend labelFunc0435_05D3:
	message("\"'Tis quite a marvel. Before the storms began, people came from all around to hear its revelations.\" *\"'Twas built by some mage from Moonshade for Lady Fawn. If thou wishest to know more, though, thou shouldst ask Kylista.\"");
	say();
	UI_remove_answer("Oracle");
labelFunc0435_05D3:
	case "Wand of Detainment" attend labelFunc0435_05E6:
	message("\"'Tis the only thing the guards have performed correctly. We make no secret of the fact that I possess the Wand of Detainment. I find that the knowledge that I can stop even the greatest brute, or the fastest thief, doth do much to deter those who would cause mischief in our city.\"");
	say();
	UI_remove_answer("Wand of Detainment");
labelFunc0435_05E6:
	case "Assassin" attend labelFunc0435_05FF:
	message("\"I arrived too late to stop the culprit, ");
	message(var0000);
	message(". I am sorry. But everyone seems to agree that the person was not dressed as a citizen of Fawn. Some say that it was one of the sailors outside the city, but that may be too hasty a decision. I will look into it further. Thou hast my word.\"");
	say();
	UI_remove_answer("Assassin");
labelFunc0435_05FF:
	case "strange hairbrush" attend labelFunc0435_0640:
	UI_remove_answer("strange hairbrush");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc0435_0638;
	message("\"I will not ask thee where thou didst come upon this hideous object, ");
	message(var0000);
	message(". That is thy business.\"");
	say();
	message("\"I only ask that thou not show it around overly much... Thou seest, it is a hairbrush used by the goblins, and it is fashioned out of human bone.\"");
	say();
	message("\"I saw several like this in empty goblin campsites when we tried to route the goblins from this area.\"");
	say();
	goto labelFunc0435_0640;
labelFunc0435_0638:
	message("\"It sounds like thou art describing a hairbrush used by the goblins. It is fashioned out of human bone...\"");
	say();
	message("\"I saw several in empty goblin campsites when we tried to route the goblins from this area.\"");
	say();
labelFunc0435_0640:
	case "skull" attend labelFunc0435_0677:
	UI_remove_answer("skull");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0435_066F;
	message("\"Thou canst tell Jendon that this is no goblin skull. He will have to find something else to hang above his door.\"");
	say();
	message("\"'Tis a bear's skull. Bears are common in this area and to the south of here as well.\"");
	say();
	goto labelFunc0435_0677;
labelFunc0435_066F:
	message("\"No, Jendon would not know what this is. Jendon is a city man and hath never been hunting with the guards.\"");
	say();
	message("\"'Tis a bear's skull. Bears are common in this area and to the south of here as well.\"");
	say();
labelFunc0435_0677:
	case "plain shield" attend labelFunc0435_06E2:
	UI_remove_answer("plain shield");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc0435_06BF;
	message("\"Jendon was right to send thee to me. I doubt that anyone else in Fawn takes much notice of such things...\"");
	say();
	message("\"This is a Monitorian shield, ");
	message(var0000);
	message(".\"");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc0435_06B8;
	message("\"I am surprised that thou hast not realized by now... One of thy Pikeman companions will be looking for this.\"");
	say();
	goto labelFunc0435_06BC;
labelFunc0435_06B8:
	message("\"Some Pikeman will be looking for this.\"");
	say();
labelFunc0435_06BC:
	goto labelFunc0435_06E2;
labelFunc0435_06BF:
	message("\"I believe thou art describing a Monitorian shield, ");
	message(var0000);
	message(".\"");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc0435_06DE;
	message("\"Thou dost concentrate on the battle so much that thou dost not notice thine own equipment any longer, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0435_06E2;
labelFunc0435_06DE:
	message("\"Look at any Pikeman thou dost meet. Thou wilt most likely see another shield precisely like the one thou hast described.\"");
	say();
labelFunc0435_06E2:
	case "bye" attend labelFunc0435_070C:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Until we meet again.@", 0x0000);
	Func097F(0xFFCB, "@Walk in Beauty!@", 0x0002);
	goto labelFunc0435_070F;
labelFunc0435_070C:
	goto labelFunc0435_022A;
labelFunc0435_070F:
	endconv;
labelFunc0435_0710:
	return;
}


