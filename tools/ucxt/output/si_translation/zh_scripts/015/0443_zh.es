#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0954 0x954 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0836 0x836 ();
extern void Func0837 0x837 ();
extern var Func09AE 0x9AE (var var0000);
extern var Func0988 0x988 (var var0000, var var0001);

void Func0443 object#(0x443) ()
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

	var0000 = UI_part_of_day();
	var0001 = Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F);
	var0002 = Func0954();
	if (!((var0000 > 0x0001) || (var0000 < 0x0006))) goto labelFunc0443_003D;
	var0000 = "day";
	goto labelFunc0443_0043;
labelFunc0443_003D:
	var0000 = "evening";
labelFunc0443_0043:
	var0003 = false;
	if (!(event == 0x0007)) goto labelFunc0443_005F;
	var0004 = UI_execute_usecode_array(item, [(byte)0x55, 0x01D0]);
labelFunc0443_005F:
	if (!(event == 0x0002)) goto labelFunc0443_0076;
	Func09AC(0xFFBD, 0xFFFF, 0xFFFF, 0x0003);
labelFunc0443_0076:
	if (!(event == 0x0001)) goto labelFunc0443_00A4;
	UI_item_say(0xFE9C, "@Greetings, milady.@");
	0xFFBD->Func07D1();
	Func097F(0xFFBD, "@Greetings to thee.@", 0x0002);
	UI_set_schedule_type(0xFFBD, 0x0003);
labelFunc0443_00A4:
	if (!(event == 0x0009)) goto labelFunc0443_1738;
	UI_clear_item_say(0xFFBD);
	UI_run_schedule(0xFFBD);
	UI_show_npc_face0(0xFFBD, 0x0000);
	if (!(gflags[0x0095] && (!gflags[0x005B]))) goto labelFunc0443_0171;
	if (!gflags[0x008C]) goto labelFunc0443_0159;
	UI_revert_schedule(0xFFBD);
	UI_run_schedule(0xFFBD);
	message("\"As thou hast now seen, the peril that faces Cantra doth go beyond merely being taken by the Goblins. Some foul thing doth possess her.\"");
	say();
	message("\"The worst the Goblins could do would be to kill her and destroy her body. This new uncertain danger is nothing less than a threat to her spirit, the very essence of her being!\"");
	say();
	message("\"I implore thee, please find her and rescue her. It is certain to be a perilous undertaking and I cannot blame thee if thou wouldst refuse the pleas of a simple woman.\"");
	say();
	message("\"But none of the other Knights believe in the visions of the crystal ball. They believe that Cantra hath been taken away by the goblins, and that she is already dead.\"");
	say();
	message("\"Thou art mine only hope! Wilt thou please find my daughter Cantra and return her to me?\"");
	say();
	if (!Func0955()) goto labelFunc0443_013B;
	gflags[0x005B] = true;
	message("\"Oh, I thank thee from the bottom of mine heart for thy kindness and thy bravery!\"");
	say();
	message("\"To find Cantra, thou wilt need two things. The first of these is Cantra's practice sword. I can give that to thee now.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x0208, 0xFE99, 0x0000, 0x0000, true);
	message("\"This is the very same practice sword that Cantra used every day.\"");
	say();
	message("\"Now that thou hast my daughter's sword, thou shouldst find one of the legendary Hounds of Doskar. They will be able to sniff Cantra's essence from the sword, and then track her to anywhere in the Serpent Isle.\"");
	say();
	message("\"The only dilemma thou dost face now is to find one of the Hounds of Doskar. I do not know where one may be found, but I foresee that thou must find the Hound before thou canst rescue my daughter.\"");
	say();
	UI_set_schedule_type(0xFFBD, 0x0014);
	goto labelFunc0443_0156;
labelFunc0443_013B:
	message("\"Then mine only daughter Cantra shall soon be dead... or worse. Leave thou me now.\"");
	say();
	UI_set_schedule_type(0xFFBD, 0x0014);
	Func097F(0xFFBD, "@Oh...@", 0x0000);
	abort;
labelFunc0443_0156:
	goto labelFunc0443_016E;
labelFunc0443_0159:
	message("\"Thou must find the crystal and gaze into it. Go to mine home. It is there, on the table.\"");
	say();
	message("\"I beg of thee, for thy sake as well as the sake of my missing child, look into the glass.\"");
	say();
	Func097F(0xFFBD, "@The crystal!@", 0x0000);
	abort;
labelFunc0443_016E:
	goto labelFunc0443_0299;
labelFunc0443_0171:
	if (!gflags[0x0048]) goto labelFunc0443_021E;
	if (!(!gflags[0x0079])) goto labelFunc0443_01D5;
	message("\"My daughter Cantra is missing! I know she would never run away from me, but I feel certain that the Goblins did not take her.\"");
	say();
	gflags[0x0079] = true;
	if (!(!UI_get_item_flag(0xFFBD, 0x001C))) goto labelFunc0443_01B8;
	message("\"Pray excuse my poor manners, stranger! I am Widow Harnna, the Healer of Monitor. I also sell vegetables from my garden.\"");
	say();
	UI_add_answer(["widow", "healing", "food", "information"]);
	UI_set_item_flag(0xFFBD, 0x001C);
	goto labelFunc0443_01C2;
labelFunc0443_01B8:
	message("\"Pray excuse mine outburst, ");
	message(var0002);
	message("! How may I help thee now? Dost thou have need of healing, or dost thou wish to buy my vegetables?\"");
	say();
labelFunc0443_01C2:
	UI_add_answer(["healing", "food", "information"]);
	goto labelFunc0443_021B;
labelFunc0443_01D5:
	if (!(!UI_get_item_flag(0xFFBD, 0x001C))) goto labelFunc0443_0207;
	message("\"I am Widow Harnna, the Healer of Monitor. I also sell vegetables from my garden.\"");
	say();
	UI_add_answer(["widow", "healing", "food", "information"]);
	UI_set_item_flag(0xFFBD, 0x001C);
	goto labelFunc0443_020B;
labelFunc0443_0207:
	message("\"How may I help thee now? Dost thou have need of healing, or dost thou wish to buy my vegetables?\"");
	say();
labelFunc0443_020B:
	UI_add_answer(["healing", "food", "information"]);
labelFunc0443_021B:
	goto labelFunc0443_0299;
labelFunc0443_021E:
	var0004 = UI_find_nearby(0xFFBD, 0x0334, 0x0014, 0x0000);
	enum();
labelFunc0443_0232:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0443_0253;
	if (!(UI_get_item_quality(var0007) == 0x0048)) goto labelFunc0443_0250;
	message("\"Perhaps we may speak at another time. Mine husband is recently dead, and I am in mourning.\"");
	say();
	abort;
labelFunc0443_0250:
	goto labelFunc0443_0232;
labelFunc0443_0253:
	if (!(!UI_get_item_flag(0xFFBD, 0x001C))) goto labelFunc0443_0285;
	message("\"How may I help thee? I am Widow Harnna, the Healer of Monitor. I also grow mine own food.\"");
	say();
	UI_add_answer(["widow", "healing", "food", "information"]);
	UI_set_item_flag(0xFFBD, 0x001C);
	goto labelFunc0443_0289;
labelFunc0443_0285:
	message("\"How may I help thee now? Dost thou have need of healing, or dost thou wish to buy my vegetables?\"");
	say();
labelFunc0443_0289:
	UI_add_answer(["healing", "food", "information"]);
labelFunc0443_0299:
	if (!(gflags[0x005B] && (!gflags[0x02E2]))) goto labelFunc0443_02AF;
	UI_add_answer("prophecy");
	var0003 = true;
labelFunc0443_02AF:
	if (!gflags[0x0079]) goto labelFunc0443_02BC;
	UI_add_answer("Cantra");
labelFunc0443_02BC:
	if (!(gflags[0x00C6] && (!gflags[0x00C7]))) goto labelFunc0443_02CE;
	UI_add_answer("found scroll");
labelFunc0443_02CE:
	if (!(gflags[0x0076] && ((!gflags[0x01A5]) && (gflags[0x0098] && (!gflags[0x005A]))))) goto labelFunc0443_02EF;
	UI_add_answer(["Varo leaves", "pox"]);
labelFunc0443_02EF:
	if (!gflags[0x00CC]) goto labelFunc0443_02FC;
	UI_add_answer("Pomdirgun");
labelFunc0443_02FC:
	if (!(gflags[0x0076] && gflags[0x0098])) goto labelFunc0443_030D;
	UI_add_answer("pox");
labelFunc0443_030D:
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc0443_031F;
	UI_add_answer("Marsten");
labelFunc0443_031F:
	var0008 = 0x0002;
	if (!gflags[0x0048]) goto labelFunc0443_0331;
	var0008 = 0x0006;
labelFunc0443_0331:
	if (!gflags[0x005B]) goto labelFunc0443_033D;
	var0008 = 0x000C;
labelFunc0443_033D:
	var0009 = 0x0000;
	UI_add_answer("bye");
labelFunc0443_034A:
	converse attend labelFunc0443_1737;
	case "Marsten" attend labelFunc0443_036D:
	UI_remove_answer("Marsten");
	if (!gflags[0x0038]) goto labelFunc0443_0369;
	message("\"I am glad that miserable traitor is no longer Lord of Monitor!\"");
	say();
	goto labelFunc0443_036D;
labelFunc0443_0369:
	message("\"He is the Lord of the Town. Thou shouldst talk to him if thou hast not already.\"");
	say();
labelFunc0443_036D:
	case "widow" attend labelFunc0443_0391:
	UI_remove_answer("widow");
	message("\"My beloved husband was slain while doing his duty, so I should have no complaints. Though Goblins have taken his life, they too shall die.\"");
	say();
	message("\"But it hath been hard on Cantra. A girl at her age needs a father, dost not thou agree?\"");
	say();
	UI_add_answer(["Cantra", "father"]);
labelFunc0443_0391:
	case "Pomdirgun" attend labelFunc0443_03A4:
	UI_remove_answer("Pomdirgun");
	message("\"I truly believe it is wrong to wish harm to any living creature, but the world is far better without that foul creature Pomdirgun alive. Thy deed was fair.\"");
	say();
labelFunc0443_03A4:
	case "Cantra" attend labelFunc0443_0491:
	UI_remove_answer("Cantra");
	if (!gflags[0x02E2]) goto labelFunc0443_0401;
	if (!gflags[0x0096]) goto labelFunc0443_03DB;
	message("\"It is a comfort to know that my daughter is among the monks. Yet I have a foreboding...\"");
	say();
	message("\"Something is coming to me... a thought... a premonition...\"");
	say();
	message("\"Go! The monks have need of thee. My daughter hath need of thee!\"");
	say();
	Func097F(0xFFBD, "@Go to Monk Isle!@", 0x0000);
	abort;
	goto labelFunc0443_03FE;
labelFunc0443_03DB:
	message("\"I know that mine only daughter Cantra is now dead. Her spirit hath been haunting me. She is suffering and tormented.\"");
	say();
	var000A = Func0992(0xFFFE, "@The monks have taken Cantra to their island.@", "@The monks have taken Cantra to their island.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"I thank thee! Perhaps now there is hope that my daughter shall return home to me.\"");
	say();
	gflags[0x0096] = true;
labelFunc0443_03FE:
	goto labelFunc0443_0491;
labelFunc0443_0401:
	if (!(!gflags[0x0079])) goto labelFunc0443_041E;
	message("\"Cantra misses her father terribly. He hath been gone for many weeks...\"");
	say();
	message("\"She is nearly ready to become a Knight herself now. Her father would be so proud of her!\"");
	say();
	message("\"She is so serious about becoming a Knight. All she ever does is practice with her wooden sword.\"");
	say();
	UI_add_answer("father");
	goto labelFunc0443_0491;
labelFunc0443_041E:
	if (!(!gflags[0x0095])) goto labelFunc0443_046B;
	message("\"Dost thou believe in magic?\"");
	say();
	if (!Func0955()) goto labelFunc0443_0436;
	message("\"That is good, for what I have to show thee would befuddle the minds of most of this town's inhabitants.\"");
	say();
	goto labelFunc0443_043E;
labelFunc0443_0436:
	message("\"I would wager that there is some tiny bit of belief in thine heart, but if not, then it is time that thou wert properly enlightened.\"");
	say();
	message("\"What I have to show thee should quell any doubts thou mayest yet have.\"");
	say();
labelFunc0443_043E:
	gflags[0x0095] = true;
	if (!(UI_get_schedule_type(0xFFBD) != 0x001D)) goto labelFunc0443_0457;
	message("\"Go to mine home. There thou shalt find a crystal ball. Gaze into it, and let thy mind be clear.\"");
	say();
	goto labelFunc0443_045B;
labelFunc0443_0457:
	message("\"Look into my crystal ball. Thou shalt find it on the table within mine home. Let thy mind be clear.\"");
	say();
labelFunc0443_045B:
	Func097F(0xFFBD, "@The crystal!@", 0x0000);
	abort;
	goto labelFunc0443_0491;
labelFunc0443_046B:
	if (!(!gflags[0x0047])) goto labelFunc0443_0479;
	message("\"I am so grateful that thou hast taken on the quest of saving my daughter. If I can help thee, ask.\"");
	say();
	goto labelFunc0443_0491;
labelFunc0443_0479:
	if (!UI_get_item_flag(0xFFC0, 0x001E)) goto labelFunc0443_048D;
	message("\"I am glad that my daughter is alive, but I have a strange foreboding that all is not as it should be with her. A small private part of her is still awash in madness and death.\"");
	say();
	goto labelFunc0443_0491;
labelFunc0443_048D:
	message("\"I am so happy my daughter hath been found, resurrected by the monks, and that thou hast restored her mind.\"");
	say();
labelFunc0443_0491:
	case "father" attend labelFunc0443_04A8:
	UI_remove_answer("father");
	message("\"The Knights say that there is glory in the way that Cantra's father died, but they do not see the truth. He did his duty, not to earn their respect, but out of love for his family.\"");
	say();
	message("\"This type of courage, and the source of it, is something the Knights of Monitor do not understand. And until they gain that understanding, there will be no winning this war with the Goblins.\"");
	say();
labelFunc0443_04A8:
	case "healing" attend labelFunc0443_058A:
	message("\"I am not a magical healer. Monitorians are quite suspicious of magic. I use a natural healing method, which uses herbs. Art thou in need of a healer?\"");
	say();
	if (!(gflags[0x0098] && (gflags[0x00C2] && (!gflags[0x005A])))) goto labelFunc0443_057A;
	var000A = Func0992(0xFFFD, "@The Avatar is burning with fever!@", "@Oh... yes... mine head...@", false);
	UI_set_conversation_slot(0x0000);
	if (!(gflags[0x0076] == false)) goto labelFunc0443_0521;
	message("\"I can temporarily restore thy body, but thou art suffering from an affliction that cannot easily be cured.\"");
	say();
	message("\"Such a pox may wear off in time if thou art extremely lucky, but thou canst only be permanently cured by a special ointment made from Varo leaves.\"");
	say();
	UI_add_answer("pox");
	if (!(gflags[0x01A5] == true)) goto labelFunc0443_0510;
	message("\"Ah, thou hast spoken with Delphynia already! Dost thou have the Varo leaves?\"");
	say();
	if (!Func0955()) goto labelFunc0443_0509;
	goto labelFunc0443_0521;
	goto labelFunc0443_050D;
labelFunc0443_0509:
	message("\"Go thou quickly to Fawn and see if she doth have more of the leaves!\"");
	say();
labelFunc0443_050D:
	goto labelFunc0443_0517;
labelFunc0443_0510:
	UI_add_answer("Varo leaves");
labelFunc0443_0517:
	gflags[0x0076] = true;
	Func0836();
	goto labelFunc0443_0577;
labelFunc0443_0521:
	if (!UI_remove_party_items(0x0005, 0x01D3, 0xFE99, 0x0003, false)) goto labelFunc0443_0552;
	message("\"Now that I have the proper ingredients, it is a simple matter to cure thee.\"");
	say();
	message("\"Hold thou still while I apply these directly upon thy tattoo...\"");
	say();
	message("\"There, 'tis done. Thine infection hath been healed.\"");
	say();
	gflags[0x005A] = true;
	UI_clear_item_flag(0xFE9C, 0x0008);
	goto labelFunc0443_0577;
labelFunc0443_0552:
	if (!UI_get_item_flag(0xFE9C, 0x0008)) goto labelFunc0443_0563;
	message("\"My cure can have only a temporary effect, for thou art enthralled by a powerful disease.\"");
	say();
labelFunc0443_0563:
	message("\"In order for me to provide a permanent cure to thine affliction, thou must bring me five leaves of the Varo plant.\"");
	say();
	Func0836();
	Func097F(0xFFBD, "@Quickly...@", 0x0000);
	abort;
labelFunc0443_0577:
	goto labelFunc0443_058A;
labelFunc0443_057A:
	if (!Func0955()) goto labelFunc0443_0586;
	Func0836();
	goto labelFunc0443_058A;
labelFunc0443_0586:
	message("\"If thou art ever in need of a healer, I shall be ready to assist thee.\"");
	say();
labelFunc0443_058A:
	case "Varo leaves" attend labelFunc0443_05A1:
	UI_remove_answer("Varo leaves");
	message("\"These leaves are now scarce, as the Varo grows only with abundant sunlight, and we have had clouded skies for many months.\"");
	say();
	message("\"Go thou and see Delphynia, the horticulturist in Fawn. Perhaps she will have a supply of leaves.\"");
	say();
labelFunc0443_05A1:
	case "pox" attend labelFunc0443_0640:
	UI_remove_answer("pox");
	if (!(gflags[0x00CA] == true)) goto labelFunc0443_05F3;
	message("\"Didst thou speak with Lydia?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Indeed, the wench hath confessed to her crime!\"");
	say();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0443_05DB;
	message("\"Moreover, she hath paid for her treachery in blood. She is slain.\"");
	say();
labelFunc0443_05DB:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I see. Thou dost appear to have many enemies in my land, ");
	message(var0002);
	message(". Be thou careful whom thou dost trust!\"");
	say();
	goto labelFunc0443_063C;
labelFunc0443_05F3:
	message("\"Thy suffering came from no accidental affliction -- the venom which mixes with thy blood is not common.\"");
	say();
	var000A = Func0992(0xFFFF, "@Who did this to the Avatar?@", 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0443_0618;
	UI_set_conversation_slot(0x0000);
labelFunc0443_0618:
	message("\"I strongly suspect that the source of thine infection is the tattoo thou hast been given.\"");
	say();
	message("\"I know that Lydia must have given thee this tattoo, yet I find it difficult to believe she would poison a stranger.\"");
	say();
	message("\"Thou shouldst have words with her, I think.\"");
	say();
	gflags[0x0035] = true;
	UI_set_alignment(0xFFB8, 0x0003);
	UI_set_item_flag(0xFFB8, 0x001D);
labelFunc0443_063C:
	gflags[0x00CB] = true;
labelFunc0443_0640:
	case "food" attend labelFunc0443_064F:
	message("\"I grow vegetables to feed the town, and sometimes to trade. What dost thou wish to purchase?\"");
	say();
	Func0837();
labelFunc0443_064F:
	case "prophecy" attend labelFunc0443_06A1:
	UI_remove_answer("prophecy");
	if (!gflags[0x0211]) goto labelFunc0443_066B;
	message("\"I sense that thou hast completed the Quest of the Three Artifacts.\"");
	say();
	goto labelFunc0443_067D;
labelFunc0443_066B:
	message("\"Thou shalt need three ancient and powerful artifacts to complete thy tasks. One of these is a helm. It seems very familiar to me...\"");
	say();
	if (!gflags[0x002C]) goto labelFunc0443_067D;
	message("\"But of course! It is the Helm of Monitor, which thou didst recover from the Goblins!\"");
	say();
	message("\"Thou shalt yet need that artifact in thy journeys.\"");
	say();
labelFunc0443_067D:
	message("\"Thy quest shall be long and difficult. Many are the adventures that thou must undertake. Seemingly unconnected events shall prosper thee in thy seeking of my lost daughter.\"");
	say();
	if (!gflags[0x0170]) goto labelFunc0443_068B;
	message("\"Thou mayest find this hard to believe, but my dreams tell me that thy sojourn in Fawn hath been of benefit to thy quest.\"");
	say();
labelFunc0443_068B:
	message("\"Thy travels shall take thee north. Far north through caves that lie to the west... I can feel the cold wind blowing upon thee.\"");
	say();
	if (!(gflags[0x0170] && gflags[0x002C])) goto labelFunc0443_069D;
	message("\"I sense that now is the time to go north. All is ready for thy success.\"");
	say();
labelFunc0443_069D:
	message("\"I see no more.\"");
	say();
labelFunc0443_06A1:
	case "information" attend labelFunc0443_06E4:
	if (!((!gflags[0x0097]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc0443_06E0;
	message("\"What dost thou desire to know?\"");
	say();
	UI_push_answers();
	var0009 = 0x0001;
	UI_add_answer(["people", "places", "strange objects", "nothing more"]);
	goto labelFunc0443_06E4;
labelFunc0443_06E0:
	message("\"I must be about my duties. We must discuss this another time.\"");
	say();
labelFunc0443_06E4:
	case "people" attend labelFunc0443_071B:
	if (!(!gflags[0x007F])) goto labelFunc0443_06F7;
	message("\"The citizens of Monitor are all Knights, and they belong to one of three Commands: the Bears, Wolves, or Leopards.\"");
	say();
labelFunc0443_06F7:
	message("\"About which Command dost thou desire to inquire?\"");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	UI_add_answer(["Bears", "Wolves", "Leopards", "visitors", "nothing more"]);
labelFunc0443_071B:
	case "Bears" attend labelFunc0443_0754:
	UI_remove_answer("Bears");
	message("\"The Bears are strong and brave, and known for their triumphs in the arena. About whom dost thou wish to inquire?\"");
	say();
	UI_push_answers();
	var0009 = 0x0003;
	UI_add_answer(["Caladin", "Luther", "Simon", "Flicken", "Templar", "Lydia", "nothing more"]);
labelFunc0443_0754:
	case "Caladin" attend labelFunc0443_0770:
	UI_remove_answer("Caladin");
	message("\"He is the leader of the Bear Command, and the commander of the Pikemen. A good, decent man and a hardened veteran of many a tough battle. He doth hate Goblins with a passion.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0770:
	case "Luther" attend labelFunc0443_0790:
	UI_remove_answer("Luther");
	message("\"Luther is one of the Bear Command. He is a proven and respected fighter on the battlefield, but off the field he is somewhat of a bully. Best to stay clear of him, I say.\"");
	say();
	message("\"'Tis said that he doth have a terrible temper. Luther loses control and simply begins swinging.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0790:
	case "found scroll" attend labelFunc0443_07CA:
	UI_remove_answer("found scroll");
	message("\"A scroll? What dost thou mean?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"I found a scroll, obviously written by Cantra, upon the body of a slain Pikeman. 'Twas thine husband I fear. He was betrayed...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I thank thee, ");
	message(var0002);
	message(", for solving the mystery of mine husband's disappearance. 'Tis better to know what truly happened than to be left knowing nothing. I have grieved for mine husband, and I shed tears not for him, but for myself and the waste that all hath become.\"");
	say();
	gflags[0x00C7] = true;
labelFunc0443_07CA:
	case "Simon" attend labelFunc0443_07F8:
	UI_remove_answer("Simon");
	if (!(!gflags[0x0044])) goto labelFunc0443_07EB;
	message("\"He is the innkeeper of The Sleeping Soldier. He is a quiet man, and the oldest person in Monitor. He enjoys his drink -- especially an unusual type of ale from Fawn.\"");
	say();
	message("\"I have told him to cease drinking that swill, but he insists. From a healer's point of view, that ale should be banned!\"");
	say();
	goto labelFunc0443_07EF;
labelFunc0443_07EB:
	message("\"That foul imposter! I spit upon all goblins!\"");
	say();
labelFunc0443_07EF:
	var0008 = Func09AE(var0008);
labelFunc0443_07F8:
	case "Flicken" attend labelFunc0443_0818:
	UI_remove_answer("Flicken");
	message("\"He is the guard at the south gate of Monitor. He hath a keen eye, despite his getting along in years.\"");
	say();
	message("\"Flicken is one of the Bear Command. He may seem argumentative, but he is simply a good fellow, doing his job.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0818:
	case "Templar" attend labelFunc0443_0834:
	UI_remove_answer("Templar");
	message("\"Templar is a virtuous knight of the Bear Command and oftimes a winner of our local tournaments. He also is our local expert on the Goblins.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0834:
	case "Lydia" attend labelFunc0443_086A:
	UI_remove_answer("Lydia");
	if (!(!gflags[0x00CA])) goto labelFunc0443_0851;
	message("\"She provides the Knights of Monitor with their tattoos, which they receive upon completing Knight's Test or carrying out some difficult quest.\"");
	say();
	goto labelFunc0443_0861;
labelFunc0443_0851:
	message("\"'Tis simply beyond belief that she would have poisoned thee... yet thou dost say she confessed to her crime.\"");
	say();
	message("\"It must have had something to do with that older sister of hers. Selene was taken by the Mages of Moonshade when a mere child.\"");
	say();
	message("\"Lydia was so happy when her sister visited last month, after all these years. The two were inseparable.\"");
	say();
	message("\"Selene must have ensorcelled her! How else could one explain how Lydia would commit the dishonorable crime of poisoning a stranger?\"");
	say();
labelFunc0443_0861:
	var0008 = Func09AE(var0008);
labelFunc0443_086A:
	case "Wolves" attend labelFunc0443_08A7:
	UI_remove_answer("Wolves");
	message("\"The Wolves are known for their cunning and stealth, preferring dexterity over brute strength. Brendann is their leader.\"");
	say();
	message("\"About whom dost thou wish to inquire?\"");
	say();
	UI_push_answers();
	var0009 = 0x0003;
	UI_add_answer(["Brendann", "Lucilla", "Renfry", "Krayg", "Cellia", "Shmed", "nothing more"]);
labelFunc0443_08A7:
	case "Brendann" attend labelFunc0443_08C3:
	UI_remove_answer("Brendann");
	message("\"Brendann is the leader of the Wolf Command. He is a cunning fighter, a clever strategist and a bit of a rogue. He considers himself to be a ladies' man, and not without justification.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_08C3:
	case "Lucilla" attend labelFunc0443_08DF:
	UI_remove_answer("Lucilla");
	message("\"Lucilla is the barmaid and the owner of the local pub. To tell thee the truth, she is also the town flirt. I do not mean to be catty. She doth have a good heart.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_08DF:
	case "Renfry" attend labelFunc0443_08FB:
	UI_remove_answer("Renfry");
	message("\"He is a most unusual person. Renfry operates the Crematorium and is the undertaker of the town. He is a pleasant enough fellow, but he doth enjoy his work too much.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_08FB:
	case "Krayg" attend labelFunc0443_0917:
	UI_remove_answer("Krayg");
	message("\"Krayg was a fighter, but his arm was mangled in battle a while ago. He is now the Provisioner of the town. He is still haunted by his fighting days. He doth go for long walks alone.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0917:
	case "Cellia" attend labelFunc0443_0933:
	UI_remove_answer("Cellia");
	message("\"Cellia is the furrier, tanner and tailor of the city of Monitor. She buys her fur from a trapper who passes through town on occasion. Cellia is a hard-working, earthy woman.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0933:
	case "Shmed" attend labelFunc0443_096B:
	UI_remove_answer("Shmed");
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0443_095A;
	message("\"They say that Shmed was the traitor who sold our secrets to the Goblins.\"");
	say();
	message("\"Mine heart tells me that they were wrong. Shmed was a coward, a fool, and a reprobate -- but not a traitor.\"");
	say();
	goto labelFunc0443_0962;
labelFunc0443_095A:
	message("\"Shmed hath retired early from his career as a soldier and now operates the Knight's Test -- \"");
	say();
	message("\"The dungeon where would-be knights test themselves. He is a good man for that job.\"");
	say();
labelFunc0443_0962:
	var0008 = Func09AE(var0008);
labelFunc0443_096B:
	case "Leopards" attend labelFunc0443_09A5:
	UI_remove_answer("Leopards");
	message("\"The Leopards are the glue which holds this community together. We keep the Bears and Wolves from tearing each other apart.\"");
	say();
	message("\"About whom dost thou wish to know?\"");
	say();
	UI_push_answers();
	var0009 = 0x0003;
	UI_add_answer(["Lord Marsten", "Spektor", "Standarr", "Andral", "Shazzana", "nothing more"]);
labelFunc0443_09A5:
	case "Lord Marsten" attend labelFunc0443_09CE:
	UI_remove_answer("Lord Marsten");
	if (!gflags[0x0038]) goto labelFunc0443_09C1;
	message("\"I am ashamed that he is a Leopard! I hope that he doth rot in jail for a very long time!\"");
	say();
	goto labelFunc0443_09C5;
labelFunc0443_09C1:
	message("\"Marsten is the commander of the Leopard Command. He may be a bit small, but a more tenacious fighter thou shalt not find in the Serpent Isle. He is rough and tough, but gregarious.\"");
	say();
labelFunc0443_09C5:
	var0008 = Func09AE(var0008);
labelFunc0443_09CE:
	case "Spektor" attend labelFunc0443_0A04:
	UI_remove_answer("Spektor");
	if (!(!gflags[0x0092])) goto labelFunc0443_09F3;
	message("\"A very intelligent man who is part of the Leopard Command. He is the town's treasurer and I understand he doth have quite a collection of books at his house.\"");
	say();
	message("\"He suffers from insomnia a great deal, and doth have a nervous digestion. When he cannot sleep, he comes to me and I make him a special elixir.\"");
	say();
	message("\"I think he is worried about the thief. After all, Spektor is the town treasurer, so when money starts disappearing, everyone suspects him.\"");
	say();
	goto labelFunc0443_09F7;
labelFunc0443_09F3:
	message("\"I am glad that traitor Spektor hath been arrested!\"");
	say();
labelFunc0443_09F7:
	gflags[0x00B6] = true;
	var0008 = Func09AE(var0008);
labelFunc0443_0A04:
	case "Standarr" attend labelFunc0443_0A20:
	UI_remove_answer("Standarr");
	message("\"Standarr is the armourer and blacksmith of our town. He is an honorable fighter and skilled craftsman. He also sells weapons and armour.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0A20:
	case "Andral" attend labelFunc0443_0A3C:
	UI_remove_answer("Andral");
	message("\"Andral is not a fighter, which is a good thing since as I hear that he was miserable at it. Instead, he is an artist. Many of the knights hire him to create statues of them.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0A3C:
	case "Shazzana" attend labelFunc0443_0A58:
	UI_remove_answer("Shazzana");
	message("\"Shazzana is a trainer in the fighting arts and also a knight of the Leopard Command. It is said that one day she may very well become a Champion Knight of Monitor, which would suit her fine!\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0A58:
	case "visitors" attend labelFunc0443_0A8C:
	UI_remove_answer("visitors");
	if (!gflags[0x0044]) goto labelFunc0443_0A74;
	message("\"I doubt that we shall have as many visitors as memorable as thou art come through town for quite a while!\"");
	say();
	goto labelFunc0443_0A8C;
labelFunc0443_0A74:
	message("\"I cannot keep track of all who come and go in this place. Thou shouldst talk to Simon, he is the innkeeper here.\"");
	say();
	if (!(!gflags[0x0078])) goto labelFunc0443_0A83;
	message("\"Visitors who do not reside in our inn can usually be found in our prison. For instance, a mad enchanter who was captured in the crematorium recently. Marsten will know more than I about him.\"");
	say();
labelFunc0443_0A83:
	var0008 = Func09AE(var0008);
labelFunc0443_0A8C:
	case "places" attend labelFunc0443_0AAF:
	message("\"Of which type of place wouldst thou have me tell?\"");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	UI_add_answer(["cities", "wilderness"]);
labelFunc0443_0AAF:
	case "cities" attend labelFunc0443_0AE2:
	UI_remove_answer("cities");
	message("\"There are three cities in the Serpent Isles, and a small hamlet. Of which can I tell thee?\"");
	say();
	UI_push_answers();
	var0009 = 0x0003;
	UI_add_answer(["Moonshade", "Fawn", "Sleeping Bull", "Monitor", "nothing more"]);
labelFunc0443_0AE2:
	case "Moonshade" attend labelFunc0443_0AFE:
	UI_remove_answer("Moonshade");
	message("\"Moonshade is a city filled with mages who look down on any who are inexperienced in the ways of magic. Moonshade is ruled by a MageLord and a council of sorcerors. It is an excellent place to learn magic, however.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0AFE:
	case "Fawn" attend labelFunc0443_0B1A:
	UI_remove_answer("Fawn");
	message("\"Fawn is a city of sailors. As thou canst well imagine these teleport storms have grievously harmed their livelihood. Fawn is also a city that worships beauty.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0B1A:
	case "Sleeping Bull" attend labelFunc0443_0B36:
	UI_remove_answer("Sleeping Bull");
	message("\"This is an inn along the Serpent Highway. It is said that one could obtain passage on ships from there.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0B36:
	case "Monitor" attend labelFunc0443_0B52:
	UI_remove_answer("Monitor");
	message("\"Why, it is the city thou dost find thyself in now! It is a city of fighters and knights. Here in Monitor is where the Pikemen that protect the highway are trained.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0B52:
	case "wilderness" attend labelFunc0443_0B82:
	UI_remove_answer("wilderness");
	message("\"The wilderness is the place in which a warrior can test himself against fearsome beasts and challenges of nature. Of which place wouldst thou learn?\"");
	say();
	UI_push_answers();
	var0009 = 0x0003;
	UI_add_answer(["Furnace", "Gorlab Swamp", "Great Northern Forest", "nothing more"]);
labelFunc0443_0B82:
	case "Furnace" attend labelFunc0443_0B9E:
	UI_remove_answer("Furnace");
	message("\"This is a dungeon located to the east of here that is said to be so hot that humans cannot survive within its cavernous depths.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0B9E:
	case "Gorlab Swamp" attend labelFunc0443_0BBA:
	UI_remove_answer("Gorlab Swamp");
	message("\"Follow the Serpent Road north and thou shalt come to it. But thou mayest not return.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0BBA:
	case "Great Northern Forest" attend labelFunc0443_0BD6:
	UI_remove_answer("Great Northern Forest");
	message("\"It is said that this forest lies beyond the swamp, but we have precious little contact with the people there.\"");
	say();
	var0008 = Func09AE(var0008);
labelFunc0443_0BD6:
	case "strange objects" attend labelFunc0443_0E1F:
	var0009 = (var0009 + 0x0001);
	UI_remove_answer("strange objects");
	var000B = [];
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc0443_0C0A;
	var000B = (var000B & "pinecone");
labelFunc0443_0C0A:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc0443_0C1F;
	var000B = (var000B & "moonsilk stockings");
labelFunc0443_0C1F:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc0443_0C34;
	var000B = (var000B & "urn");
labelFunc0443_0C34:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc0443_0C49;
	var000B = (var000B & "apparatus");
labelFunc0443_0C49:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc0443_0C5E;
	var000B = (var000B & "pumice");
labelFunc0443_0C5E:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc0443_0C73;
	var000B = (var000B & "lost ring");
labelFunc0443_0C73:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc0443_0C88;
	var000B = (var000B & "fur cap");
labelFunc0443_0C88:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc0443_0C9D;
	var000B = (var000B & "slippers");
labelFunc0443_0C9D:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc0443_0CB2;
	var000B = (var000B & "breastplate");
labelFunc0443_0CB2:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc0443_0CC7;
	var000B = (var000B & "blue egg");
labelFunc0443_0CC7:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc0443_0CDC;
	var000B = (var000B & "strange hairbrush");
labelFunc0443_0CDC:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0443_0CF1;
	var000B = (var000B & "bottle of wine");
labelFunc0443_0CF1:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc0443_0D06;
	var000B = (var000B & "strange coins");
labelFunc0443_0D06:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc0443_0D1B;
	var000B = (var000B & "skull");
labelFunc0443_0D1B:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc0443_0D30;
	var000B = (var000B & "bloody hand");
labelFunc0443_0D30:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc0443_0D45;
	var000B = (var000B & "plain shield");
labelFunc0443_0D45:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc0443_0D5A;
	var000B = (var000B & "glowing rock");
labelFunc0443_0D5A:
	if (!(gflags[0x007B] && (!gflags[0x007C]))) goto labelFunc0443_0D6F;
	var000B = (var000B & "fish-net stockings");
labelFunc0443_0D6F:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0443_0D8B;
	var000B = (var000B & "brown bottle");
labelFunc0443_0D8B:
	if (!(var000B == [])) goto labelFunc0443_0DBB;
	var000A = Func0992(0x0001, (("@But we have no strange objects to ask about, " + var0002) + ".@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"I do not think I can assist thee, but if I think of anything, I will let thee know!\"");
	say();
	goto labelFunc0443_0E1F;
labelFunc0443_0DBB:
	message("\"What sort of items art thou inquiring about?\"");
	say();
	UI_push_answers();
	var000C = 0x0005;
labelFunc0443_0DC9:
	if (!(var000C > 0x0000)) goto labelFunc0443_0E18;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_0E04;
	var000C = 0x0000;
	var000E = true;
labelFunc0443_0E04:
	UI_add_answer(var000D);
	var000C = (var000C - 0x0001);
	goto labelFunc0443_0DC9;
labelFunc0443_0E18:
	UI_add_answer("nothing more");
labelFunc0443_0E1F:
	case "pinecone" attend labelFunc0443_0E90:
	UI_remove_answer("pinecone");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0443_0E4A;
	message("\"'Tis a pinecone! They are not normally found anywhere near here. They come from pine trees in the great forests to the north.\"");
	say();
	goto labelFunc0443_0E4E;
labelFunc0443_0E4A:
	message("\"It sounds as though thou art describing a pinecone. They come from trees far to the north of here.\"");
	say();
labelFunc0443_0E4E:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_0E90;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_0E89;
	var000E = true;
labelFunc0443_0E89:
	UI_add_answer(var000D);
labelFunc0443_0E90:
	case "moonsilk stockings" attend labelFunc0443_0F09:
	UI_remove_answer("moonsilk stockings");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc0443_0EC3;
	message("\"My, those are fine stockings! Being a simple woman I could never wear such things -- nor would most of the women of Monitor, for they are Knights!\"");
	say();
	message("\"Perhaps thou shouldst speak with Brendann. He hath had the most -- ahem -- experience with women from outside the town.\"");
	say();
	gflags[0x0099] = true;
	goto labelFunc0443_0EC7;
labelFunc0443_0EC3:
	message("\"Oh, I know nothing of such frills. But Brendann would be well familiar with how to remove them from a woman.\"");
	say();
labelFunc0443_0EC7:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_0F09;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_0F02;
	var000E = true;
labelFunc0443_0F02:
	UI_add_answer(var000D);
labelFunc0443_0F09:
	case "urn" attend labelFunc0443_0F86:
	UI_remove_answer("urn");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc0443_0F38;
	message("\"Why, that looks to be a funeral urn. In our city, it is our custom to burn our dead, and keep their remains in such urns.\"");
	say();
	gflags[0x028E] = true;
	goto labelFunc0443_0F3C;
labelFunc0443_0F38:
	message("\"It sounds like the object thou art describing may be a funeral urn.\"");
	say();
labelFunc0443_0F3C:
	message("\"I wonder... Caladin hath been angry because the ashes of his grandfather were missing. Perhaps that is what that urn contains.\"");
	say();
	gflags[0x009A] = true;
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_0F86;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_0F7F;
	var000E = true;
labelFunc0443_0F7F:
	UI_add_answer(var000D);
labelFunc0443_0F86:
	case "apparatus" attend labelFunc0443_0FFB:
	UI_remove_answer("apparatus");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0443_0FB5;
	message("\"That strange apparatus doth look like nothing I have ever seen before! Could it be some kind of statue, or mayhaps a magical implement?\"");
	say();
	message("\"Fawn is known for its statuary, while Moonshade is the City of Mages. Perhaps thou shouldst inquire there.\"");
	say();
	goto labelFunc0443_0FB9;
labelFunc0443_0FB5:
	message("\"That sounds as if it may be some sort of instrument of mages. They may know of such things in Moonshade, but not here I fear.\"");
	say();
labelFunc0443_0FB9:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_0FFB;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_0FF4;
	var000E = true;
labelFunc0443_0FF4:
	UI_add_answer(var000D);
labelFunc0443_0FFB:
	case "pumice" attend labelFunc0443_1074:
	UI_remove_answer("pumice");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0443_102E;
	message("\"This type of rock is not common around here. Now if thou didst speak with Krayg, perhaps he could help thee...\"");
	say();
	message("\"He is fond of long walks, and sometimes he discovers odd rocks and plants. He brings me mandrake roots sometimes.\"");
	say();
	gflags[0x009B] = true;
	goto labelFunc0443_1032;
labelFunc0443_102E:
	message("\"I do not recall having ever seen the type of rock thou hast described before. Krayg is much more familiar with the rocks and plants of this area than I am.\"");
	say();
labelFunc0443_1032:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_1074;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_106D;
	var000E = true;
labelFunc0443_106D:
	UI_add_answer(var000D);
labelFunc0443_1074:
	case "lost ring" attend labelFunc0443_10E9:
	UI_remove_answer("lost ring");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc0443_10A3;
	message("\"That looks to be a special ring, although it doth not appear to be magical. Lucilla is more interested in such baubles and trinkets than I. Perhaps she will be able to tell thee more.\"");
	say();
	gflags[0x009C] = true;
	goto labelFunc0443_10A7;
labelFunc0443_10A3:
	message("\"It sounds as though it could be a magic ring, or most likely just an ordinary ring of betrothal. Lucilla is more interested in such things than I am.\"");
	say();
labelFunc0443_10A7:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_10E9;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_10E2;
	var000E = true;
labelFunc0443_10E2:
	UI_add_answer(var000D);
labelFunc0443_10E9:
	case "fur cap" attend labelFunc0443_115E:
	UI_remove_answer("fur cap");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc0443_1118;
	message("\"Cellia here in town is a tanner and a furrier. This hat looks like it could be her work.\"");
	say();
	gflags[0x009D] = true;
	goto labelFunc0443_111C;
labelFunc0443_1118:
	message("\"Cellia is the tanner and furrier in town. I know nothing of such things.\"");
	say();
labelFunc0443_111C:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_115E;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_1157;
	var000E = true;
labelFunc0443_1157:
	UI_add_answer(var000D);
labelFunc0443_115E:
	case "slippers" attend labelFunc0443_11D3:
	UI_remove_answer("slippers");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc0443_118D;
	message("\"Surely, these belong to no one in this city. Krayg the provisioner might know who would sell something like these slippers.\"");
	say();
	gflags[0x009E] = true;
	goto labelFunc0443_1191;
labelFunc0443_118D:
	message("\"Perhaps thou mayest buy such things from Krayg, our town's provisioner. But I doubt that even he would carry such footwear.\"");
	say();
labelFunc0443_1191:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_11D3;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_11CC;
	var000E = true;
labelFunc0443_11CC:
	UI_add_answer(var000D);
labelFunc0443_11D3:
	case "breastplate" attend labelFunc0443_122C:
	UI_remove_answer("breastplate");
	message("\"Thou shouldst ask Standarr the armourer about that.\"");
	say();
	gflags[0x009F] = true;
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_122C;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_1225;
	var000E = true;
labelFunc0443_1225:
	UI_add_answer(var000D);
labelFunc0443_122C:
	case "blue egg" attend labelFunc0443_129D:
	UI_remove_answer("blue egg");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0443_1257;
	message("\"It appears to be an egg from some kind of bird. The shell appears to be thick, yet it is not exceedingly hard. The shell seems to be intended to protect the baby bird from the cold. I would surmise that this egg came from a bird that lives in the north.\"");
	say();
	goto labelFunc0443_125B;
labelFunc0443_1257:
	message("\"I once heard that the strange birds of the north lay blue eggs.\"");
	say();
labelFunc0443_125B:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_129D;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_1296;
	var000E = true;
labelFunc0443_1296:
	UI_add_answer(var000D);
labelFunc0443_129D:
	case "strange hairbrush" attend labelFunc0443_1316:
	UI_remove_answer("strange hairbrush");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc0443_12D0;
	message("\"Do not bring that thing near me! If thou dost desire to know its nature, ask of Templar...\"");
	say();
	message("\"...but never bring that object here again!\"");
	say();
	gflags[0x00A0] = true;
	goto labelFunc0443_12D4;
labelFunc0443_12D0:
	message("\"It sounds simply horrid. Templar may know of such things, but I do not.\"");
	say();
labelFunc0443_12D4:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_1316;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_130F;
	var000E = true;
labelFunc0443_130F:
	UI_add_answer(var000D);
labelFunc0443_1316:
	case "bottle of wine" attend labelFunc0443_137D:
	UI_remove_answer("bottle of wine");
	if (!(!gflags[0x0044])) goto labelFunc0443_1337;
	message("\"Simon is the barkeep at the inn. He knows more than anyone in town about exotic beverages.\"");
	say();
	gflags[0x00A1] = true;
	goto labelFunc0443_133B;
labelFunc0443_1337:
	message("\"I know of no one that could help thee with this. I know nothing of beverages. Perhaps Lucilla knows something...\"");
	say();
labelFunc0443_133B:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_137D;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_1376;
	var000E = true;
labelFunc0443_1376:
	UI_add_answer(var000D);
labelFunc0443_137D:
	case "strange coins" attend labelFunc0443_13EF:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0443_13A9;
	message("\"They appear to be coins from another town. Spektor would recognize them, I am certain.\"");
	say();
	message("\"He is the town treasurer, and exchanges foreign coins for the good coins of Monitor.\"");
	say();
	gflags[0x00A2] = true;
	goto labelFunc0443_13AD;
labelFunc0443_13A9:
	message("\"Spektor the treasurer is the expert on currency in the town of Monitor.\"");
	say();
labelFunc0443_13AD:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_13EF;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_13E8;
	var000E = true;
labelFunc0443_13E8:
	UI_add_answer(var000D);
labelFunc0443_13EF:
	case "skull" attend labelFunc0443_1464:
	UI_remove_answer("skull");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0443_141E;
	message("\"That is a bear skull. Bears are commonly found in the south and west portions of our land.\"");
	say();
	gflags[0x029A] = true;
	goto labelFunc0443_1422;
labelFunc0443_141E:
	message("\"It sounds like thou art describing a bear skull. Bears are usually found in the south and west.\"");
	say();
labelFunc0443_1422:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_1464;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_145D;
	var000E = true;
labelFunc0443_145D:
	UI_add_answer(var000D);
labelFunc0443_1464:
	case "bloody hand" attend labelFunc0443_14DD:
	UI_remove_answer("bloody hand");
	if (!Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000)) goto labelFunc0443_1497;
	message("\"It seems it was lost on the field of battle, so whoever lost it probably did not survive. Yet there are no signs of decay -- a recent injury...\"");
	say();
	message("\"Thou mightest ask Renfry if he hath encountered a body with such an injury lately.\"");
	say();
	gflags[0x00A3] = true;
	goto labelFunc0443_149B;
labelFunc0443_1497:
	message("\"What a puzzling mystery! Thou shouldst ask Renfry, our undertaker, about it.\"");
	say();
labelFunc0443_149B:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_14DD;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_14D6;
	var000E = true;
labelFunc0443_14D6:
	UI_add_answer(var000D);
labelFunc0443_14DD:
	case "plain shield" attend labelFunc0443_1552:
	UI_remove_answer("plain shield");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc0443_150C;
	message("\"That shield could belong to anyone in this town. Green and white are the colors of Monitor and its warriors.\"");
	say();
	message("\"Thou shouldst inquire if anyone is missing a shield.\"");
	say();
	goto labelFunc0443_1510;
labelFunc0443_150C:
	message("\"Such a shield could belong to anyone in Monitor.\"");
	say();
labelFunc0443_1510:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_1552;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_154B;
	var000E = true;
labelFunc0443_154B:
	UI_add_answer(var000D);
labelFunc0443_1552:
	case "glowing rock" attend labelFunc0443_15B8:
	UI_remove_answer("glowing rock");
	if (!var0001) goto labelFunc0443_1572;
	message("\"This glowing rock must have come from some strange, unnatural place. I have never seen such a rock in any sort of place near here.\"");
	say();
	message("\"I sense that it doth have unusual powers... incredible energies... hidden abilities...\"");
	say();
	goto labelFunc0443_1576;
labelFunc0443_1572:
	message("\"I have never before heard of such an item. It sounds as though it might possess great power.\"");
	say();
labelFunc0443_1576:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_15B8;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_15B1;
	var000E = true;
labelFunc0443_15B1:
	UI_add_answer(var000D);
labelFunc0443_15B8:
	case "fish-net stockings" attend labelFunc0443_162D:
	UI_remove_answer("fish-net stockings");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc0443_15E7;
	message("\"There is a knight in town by the name of Brendann. He hath had more experience in removing these from ladies than I have ever had wearing them, I am afraid.\"");
	say();
	gflags[0x0099] = true;
	goto labelFunc0443_15EB;
labelFunc0443_15E7:
	message("\"Brendann is more well-acquainted with finery of ladies than a simple farm woman such as I, I am afraid.\"");
	say();
labelFunc0443_15EB:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_162D;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_1626;
	var000E = true;
labelFunc0443_1626:
	UI_add_answer(var000D);
labelFunc0443_162D:
	case "brown bottle" attend labelFunc0443_16A6:
	UI_remove_answer("brown bottle");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0443_1660;
	message("\"May I see the bottle?\"");
	say();
	message("\"That looks like the type of bottle that usually contains the ale Simon drinks. In Monitor, only he drinks that bitter Fawnish ale.\"");
	say();
	gflags[0x005F] = true;
	goto labelFunc0443_1664;
labelFunc0443_1660:
	message("\"How strange -- a bottle in the woods? Perhaps Templar can help thee. He is the expert on Goblins and their habits.\"");
	say();
labelFunc0443_1664:
	var0008 = Func09AE(var0008);
	if (!(!var000E)) goto labelFunc0443_16A6;
	var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
	var000B = Func0988(var000D, var000B);
	if (!(var000B == [])) goto labelFunc0443_169F;
	var000E = true;
labelFunc0443_169F:
	UI_add_answer(var000D);
labelFunc0443_16A6:
	case "nothing more" attend labelFunc0443_16E2:
	if (!(var0009 == 0x0001)) goto labelFunc0443_16C3;
	UI_pop_answers();
	message("\"I wish I could have been of more help to thee...\"");
	say();
	goto labelFunc0443_16E2;
labelFunc0443_16C3:
	if (!(var0009 > 0x0001)) goto labelFunc0443_16DE;
	UI_pop_answers();
	var0009 = (var0009 - 0x0001);
	goto labelFunc0443_16C3;
labelFunc0443_16DE:
	message("\"Is there anything else I can help thee with?\"");
	say();
labelFunc0443_16E2:
	case "bye" attend labelFunc0443_1734:
	if (!(gflags[0x005B] && (!var0003))) goto labelFunc0443_170B;
	message("\"But wait... I feel the primal forces drawing near... I hear the voices of the Void...\"");
	say();
	message("\"I have a prophecy for thee, Avatar.\"");
	say();
	UI_add_answer("prophecy");
	var0003 = true;
	goto labelFunc0443_1734;
labelFunc0443_170B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, (("@Good " + var0000) + "!@"), 0x0000);
	Func097F(0xFFBD, "@And to thee.@", 0x0002);
	abort;
labelFunc0443_1734:
	goto labelFunc0443_034A;
labelFunc0443_1737:
	endconv;
labelFunc0443_1738:
	return;
}


