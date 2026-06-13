#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);

void Func07FC object#(0x7FC) ()
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

	var0000 = UI_get_item_quality(Func09A0(0x0001, 0x0001));
	var0001 = Func0953();
	var0002 = Func08AC(false);
	if (!(var0000 == 0x002C)) goto labelFunc07FC_0196;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCE, 0x0000);
	if (!UI_get_item_flag(0xFFCE, 0x001C)) goto labelFunc07FC_004F;
	message("\"I am prepared for thy questions, ");
	message(var0001);
	message(". What dost thou care to question me about?\"");
	say();
	goto labelFunc07FC_0059;
labelFunc07FC_004F:
	message("\"What hast thou to do with me? I did not even set eyes upon ");
	message(var0002);
	message(" until this trial.\"");
	say();
labelFunc07FC_0059:
	UI_add_answer(["the character of the accused", "Daemonism", "no questions"]);
labelFunc07FC_0069:
	converse attend labelFunc07FC_0134;
	case "the character of the accused" attend labelFunc07FC_00C9:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!UI_get_item_flag(0xFFCE, 0x001C)) goto labelFunc07FC_00C5;
	var0003 = Func08AC(false);
	if (!gflags[0x0174]) goto labelFunc07FC_00A6;
	message("\"To be honest, he did not strike me as an honest man. Never cared much for bards. Louts, every one of them!\"");
	say();
labelFunc07FC_00A6:
	if (!gflags[0x0173]) goto labelFunc07FC_00B4;
	message("\"Well, I must say that I find him likable. He does his duty without blabbering all the time.\"");
	say();
	message("\"Hard to believe a good man like Dupre would be in league with Daemon British...\"");
	say();
labelFunc07FC_00B4:
	if (!gflags[0x0175]) goto labelFunc07FC_00C2;
	message("\"Hard to say. He doth not talk much, and always seems to be in a hurry...\"");
	say();
	message("\"Couldn't say more than that. Merely an ordinary knave.\"");
	say();
labelFunc07FC_00C2:
	goto labelFunc07FC_00C9;
labelFunc07FC_00C5:
	message("\"Art thou daft? I said that I have never met the man. I can form no opinion.\"");
	say();
labelFunc07FC_00C9:
	case "Daemonism" attend labelFunc07FC_00F7:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Look here, ");
	message(var0001);
	message(". I'm a captain, not a theologian. I find it hard to believe in something I can't touch or smell.\"");
	say();
	message("\"Yet all of our legends tell of this Beast British, and his crimes against our ancestors.\"");
	say();
	message("\"I suppose I don't know what to believe -- pardon me, Kylista...\"");
	say();
labelFunc07FC_00F7:
	case "no questions" attend labelFunc07FC_011A:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Waste of time...@", 0x0000);
	goto labelFunc07FC_0135;
labelFunc07FC_011A:
	case "no further questions" attend labelFunc07FC_0131:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_0135;
labelFunc07FC_0131:
	goto labelFunc07FC_0069;
labelFunc07FC_0134:
	endconv;
labelFunc07FC_0135:
	gflags[0x017D] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFCE) & (0x0004 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0191;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0191:
	UI_end_conversation();
	abort;
labelFunc07FC_0196:
	if (!(var0000 == 0x002F)) goto labelFunc07FC_0323;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCF, 0x0000);
	message("\"Question me! I am ready. On what subject dost thou desire information?\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism", "no questions"]);
labelFunc07FC_01C2:
	converse attend labelFunc07FC_02C1;
	case "the character of the accused" attend labelFunc07FC_025C:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	var0003 = Func0992(0x0001, 0x0000, 0x0000, true);
	var0003 = UI_get_npc_name(var0003);
	message("\"I have met him face to face, and I find ");
	message(var0003);
	message(" to be the most surly, disrespectful man I have ever seen.\"");
	say();
	message("\"He offends with every breath that comes out of his ugly face!\"");
	say();
	var0007 = Func08AC(false);
	if (!(var0003 != var0007)) goto labelFunc07FC_025C;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Captain, thou art confused. It is ");
	message(var0007);
	message(" on trial, not ");
	message(var0003);
	message(".\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Why, thou art right, sailor. Nevertheless, I stand by my sworn testimony!\"");
	say();
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"I may be drunk, but I'm not stupid...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_025C:
	case "Daemonism" attend labelFunc07FC_0284:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Lest anyone be confused, let me state unequivocably that Daemons exist. Evil is real!\"");
	say();
	message("\"The tales of our forefathers -- about the Daemon King named British, and the lands he stole in the name of Virtue -- are literally true.\"");
	say();
	message("\"Lastly, I have absolute faith in the Priestess of Beauty... wherever she may be. She is too beautiful to be wrong!\"");
	say();
labelFunc07FC_0284:
	case "no questions" attend labelFunc07FC_02A7:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Damned traitor...@", 0x0000);
	goto labelFunc07FC_02C2;
labelFunc07FC_02A7:
	case "no further questions" attend labelFunc07FC_02BE:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_02C2;
labelFunc07FC_02BE:
	goto labelFunc07FC_01C2;
labelFunc07FC_02C1:
	endconv;
labelFunc07FC_02C2:
	gflags[0x017F] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFCF) & (0x0005 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_031E;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_031E:
	UI_end_conversation();
	abort;
labelFunc07FC_0323:
	if (!(var0000 == 0x0027)) goto labelFunc07FC_05F6;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCC, 0x0000);
	message("\"Why hast thou brought me before the Oracle, Avatar? Ask me thy questions.\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism"]);
	if (!gflags[0x01AD]) goto labelFunc07FC_0359;
	UI_add_answer("strange objects");
labelFunc07FC_0359:
	if (!gflags[0x01AC]) goto labelFunc07FC_0366;
	UI_add_answer("ancient ruins");
labelFunc07FC_0366:
	if (!gflags[0x01AB]) goto labelFunc07FC_0373;
	UI_add_answer("savages");
labelFunc07FC_0373:
	if (!gflags[0x0155]) goto labelFunc07FC_0380;
	UI_add_answer("Gwenno");
labelFunc07FC_0380:
	UI_add_answer("no questions");
labelFunc07FC_0387:
	converse attend labelFunc07FC_0594;
	case "strange objects" attend labelFunc07FC_03CB:
	UI_remove_answer(["strange objects", "no questions"]);
	UI_add_answer("no further questions");
	message("\"That is what I said in my testimony -- ");
	message(var0002);
	message(" brought me strange items, and asked me to identify them.\"");
	say();
	var0008 = Func0992(0x0001, "@But thou art an innkeeper! Surely, many folks bring thee mysteries...@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"Mayhaps, stranger. But nothing half so strange...\"");
	say();
labelFunc07FC_03CB:
	case "ancient ruins" attend labelFunc07FC_042B:
	UI_remove_answer(["ancient ruins", "no questions"]);
	UI_add_answer("no further questions");
	message("\"");
	message(var0002);
	message(" did ask me about the ancient ruins, indeed. Very suspicious.\"");
	say();
	var0008 = Func0992(0x0001, "@Surely, others ask of these same things?@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"Indeed, the sage Batlin was also curious about the ruins.\"");
	say();
	UI_show_npc_face1(0xFFCF, 0x0000);
	message("\"See how the evidence convicts him! I tell thee, this ");
	message(var0002);
	message(" works for Batlin, and both are tools of Beast British!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_042B:
	case "savages" attend labelFunc07FC_046A:
	UI_remove_answer(["savages", "no questions"]);
	UI_add_answer("no further questions");
	message("\"We did speak of the northern barbarians, ");
	message(var0002);
	message(" and I. He seemed to relish the most grisly parts of the tale.\"");
	say();
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Ah, but thou dost tell that tale to everyone, Jendon. Thou canst not convict a man for listening to thy tales...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_046A:
	case "Gwenno" attend labelFunc07FC_049B:
	UI_remove_answer(["Gwenno", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Yes, I did meet the scholar when she was here. A fine lady, of good temperament.\"");
	say();
	if (!gflags[0x0174]) goto labelFunc07FC_0497;
	message("\"I find it hard to believe that Iolo could be guilty of Daemonism, yet be wed to such a wonderful lady.\"");
	say();
	goto labelFunc07FC_049B;
labelFunc07FC_0497:
	message("\"But I fail to see any connection between that good lady, and this trial.\"");
	say();
labelFunc07FC_049B:
	case "the character of the accused" attend labelFunc07FC_052D:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!UI_get_item_flag(0xFFCC, 0x001C)) goto labelFunc07FC_0529;
	if (!gflags[0x0174]) goto labelFunc07FC_04EB;
	message("\"A prince of a man! Why, when he breaks into song, I can hardly keep the crowds out of mine inn!\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"Such a man hardly sounds like the servant of Daemons, innkeeper.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Aye. But then again, doth legend not claim that Daemons have silver tongues? This Iolo doth certainly have charm...\"");
	say();
labelFunc07FC_04EB:
	if (!gflags[0x0175]) goto labelFunc07FC_0518;
	message("\"Can't say as I like him much, ");
	message(var0001);
	message(". He doth not drink much, nor doth he seem to enjoy the entertainments of the inn.\"");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("\"Doth Shamino not have the passions of a normal man, Jendon?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Perhaps. Or he may merely be driven by his cause. Shamino is far too serious.\"");
	say();
labelFunc07FC_0518:
	if (!gflags[0x0173]) goto labelFunc07FC_0526;
	message("\"He can out-drink any man in this town, and I think he could out-fight nearly everyone except Jorvin!\"");
	say();
	message("\"I must admit, Dupre is a likable man. Hard to believe he's a tool of Beast British.\"");
	say();
labelFunc07FC_0526:
	goto labelFunc07FC_052D;
labelFunc07FC_0529:
	message("\"Not having met the man, I have little to say about him. He needs a shave.\"");
	say();
labelFunc07FC_052D:
	case "Daemonism" attend labelFunc07FC_0557:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Do I believe in Daemonism? Of course. My mother told me the legends when I was a mere child.\"");
	say();
	message("\"And even if I didn't -- why, I'm an innkeeper, ");
	message(var0001);
	message(". For the sake of my business, friend, I dare not disagree with the Priestess of Beauty.\"");
	say();
labelFunc07FC_0557:
	case "no questions" attend labelFunc07FC_057A:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Strange kind of person...@", 0x0000);
	goto labelFunc07FC_0595;
labelFunc07FC_057A:
	case "no further questions" attend labelFunc07FC_0591:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_0595;
labelFunc07FC_0591:
	goto labelFunc07FC_0387;
labelFunc07FC_0594:
	endconv;
labelFunc07FC_0595:
	gflags[0x0179] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFCC) & (0x0010 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_05F1;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_05F1:
	UI_end_conversation();
	abort;
labelFunc07FC_05F6:
	if (!(var0000 == 0x0026)) goto labelFunc07FC_07AB;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD0, 0x0000);
	message("\"Hail to Beauty, and the omnipotence of the Oracle!\"");
	say();
	message("\"I shall answer thy questions truthfully, Avatar. Of what can I tell thee?\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism"]);
	if (!gflags[0x01AE]) goto labelFunc07FC_0630;
	UI_add_answer("Varo Leaves");
labelFunc07FC_0630:
	UI_add_answer("no questions");
labelFunc07FC_0637:
	converse attend labelFunc07FC_0749;
	case "Varo Leaves" attend labelFunc07FC_06A2:
	UI_remove_answer(["Varo Leaves", "no questions"]);
	UI_add_answer("no further questions");
	message("\"I did provide Varo Leaves for ");
	message(var0002);
	message(", as I did testify before. And such leaves are used to treat poisons and curses.\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"It was not ");
	message(var0002);
	message(" who was cursed, Delphynia. 'Twas I, poisoned by a treacherous woman in the city of Monitor.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Mine apologies, ");
	message(var0001);
	message(". I did not know...\"");
	say();
	UI_show_npc_face1(0xFFCF, 0x0000);
	message("\"How do we know this to be true? I say that he lies!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_06A2:
	case "the character of the accused" attend labelFunc07FC_06E4:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!gflags[0x0174]) goto labelFunc07FC_06C8;
	message("\"He did strike me as a kindly man, of affable temperament. Good with children. Not the kind to consort with Daemons.\"");
	say();
labelFunc07FC_06C8:
	if (!gflags[0x0175]) goto labelFunc07FC_06D2;
	message("\"He doth have honest eyes. He is a hard man to like, but I do not think he is a bad sort.\"");
	say();
labelFunc07FC_06D2:
	if (!gflags[0x0173]) goto labelFunc07FC_06E4;
	message("\"This man drinks far too much, and his health will surely suffer for this some day! He is also a bit of a braggart, and he doth think himself a ladies' man --\"");
	say();
	message("\"He did try to steal a kiss from me!\"");
	say();
	message("\"Dupre doth have an evil heart. I'd not be surprised if he were in the service of Daemons.\"");
	say();
labelFunc07FC_06E4:
	case "Daemonism" attend labelFunc07FC_070C:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"I do believe in Daemons. There is much evil in this world, and I do not believe that we cause it of ourselves.\"");
	say();
	message("\"Our ancestors did beat the British by escaping to this land. Is it so incredible that the Daemon would want revenge?\"");
	say();
	message("\"We should be very afraid, all of us...\"");
	say();
labelFunc07FC_070C:
	case "no questions" attend labelFunc07FC_072F:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Never mind...@", 0x0000);
	goto labelFunc07FC_074A;
labelFunc07FC_072F:
	case "no further questions" attend labelFunc07FC_0746:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_074A;
labelFunc07FC_0746:
	goto labelFunc07FC_0637;
labelFunc07FC_0749:
	endconv;
labelFunc07FC_074A:
	gflags[0x0178] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFD0) & (0x0012 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_07A6;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_07A6:
	UI_end_conversation();
	abort;
labelFunc07FC_07AB:
	if (!(var0000 == 0x001F)) goto labelFunc07FC_0965;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD1, 0x0000);
	message("\"Oh... I'm not used to standing in public like this... crowds make me nervous...\"");
	say();
	message("\"Let this be swift. Ask thy questions.\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism"]);
	if (!gflags[0x01AF]) goto labelFunc07FC_07E5;
	UI_add_answer("engagement ring");
labelFunc07FC_07E5:
	UI_add_answer("no questions");
labelFunc07FC_07EC:
	converse attend labelFunc07FC_0903;
	case "engagement ring" attend labelFunc07FC_085E:
	UI_remove_answer(["engagement ring", "no questions"]);
	UI_add_answer("no further questions");
	message("\"That is what Alyssand said in her testimony -- that thy friend did return her engagement ring to her.\"");
	say();
	message("\"Mighty nice of him, I say. He looks to be a good lad. Doth he need a wife?\"");
	say();
	if (!gflags[0x0174]) goto labelFunc07FC_0827;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"I already have a wife, thank thee!\"");
	say();
labelFunc07FC_0827:
	if (!gflags[0x0173]) goto labelFunc07FC_083B;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"I'm afraid thy daughter is not lively enough for me, old man.\"");
	say();
labelFunc07FC_083B:
	if (!gflags[0x0175]) goto labelFunc07FC_084F;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"This is not the time for idle chat, good man. My life is at stake!\"");
	say();
labelFunc07FC_084F:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I know that the Priestess fears that the ring was stolen by magical means. But what about the storms! They steal things every day. Could not a storm have taken my daughter's ring?\"");
	say();
labelFunc07FC_085E:
	case "the character of the accused" attend labelFunc07FC_08A6:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!gflags[0x0174]) goto labelFunc07FC_0888;
	message("\"He looks to be too old for my daughter, now that I see him clearly.\"");
	say();
	message("\"When a man ages, he starts to lose his mind. Wouldn't want mine Alyssand to have to deal with someone like that...\"");
	say();
labelFunc07FC_0888:
	if (!gflags[0x0175]) goto labelFunc07FC_0892;
	message("\"Doth he not ever smile? He doth have the look of a convict, that's what I say.\"");
	say();
labelFunc07FC_0892:
	if (!gflags[0x0173]) goto labelFunc07FC_08A6;
	message("\"He looks like a fine lad, he doth.\"");
	say();
	message("\"");
	message(var0002);
	message("! Come by the shop afterwards, and I'll introduce ye to my daughter!\"");
	say();
labelFunc07FC_08A6:
	case "Daemonism" attend labelFunc07FC_08C6:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Very frightening. Don't care much for Daemons.\"");
	say();
labelFunc07FC_08C6:
	case "no questions" attend labelFunc07FC_08E9:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Nor I for thee...@", 0x0000);
	goto labelFunc07FC_0904;
labelFunc07FC_08E9:
	case "no further questions" attend labelFunc07FC_0900:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_0904;
labelFunc07FC_0900:
	goto labelFunc07FC_07EC;
labelFunc07FC_0903:
	endconv;
labelFunc07FC_0904:
	gflags[0x0177] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFD1) & (0x000E & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0960;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0960:
	UI_end_conversation();
	abort;
labelFunc07FC_0965:
	if (!(var0000 == 0x002E)) goto labelFunc07FC_0B8F;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC6, 0x0000);
	message("\"Hail to Lady Yelinda, Hail to the Oracle, hail to... hail to everyone!\"");
	say();
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"I'm afraid he hath been drinking...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I drinks ta forget my pain, innkeeper. Go ahead, Avatar. Ask me thy questions.\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism", "drinking", "no questions"]);
labelFunc07FC_09B1:
	converse attend labelFunc07FC_0B2D;
	case "the character of the accused" attend labelFunc07FC_0A78:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!UI_get_item_flag(0xFFC6, 0x001C)) goto labelFunc07FC_0A74;
	if (!gflags[0x0174]) goto labelFunc07FC_09E7;
	message("\"He looks like he hath had one too many tips of the bottle, if ya know what I mean.\"");
	say();
labelFunc07FC_09E7:
	if (!gflags[0x0175]) goto labelFunc07FC_09F1;
	message("\"What a sourpuss! Wouldn't even share a glass of ale with me...\"");
	say();
labelFunc07FC_09F1:
	if (!gflags[0x0173]) goto labelFunc07FC_0A71;
	message("\"I love that man! Dupre, sing that drinking song thou didst teach me, the one about all the young ladies?\"");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("\"I don't think that would be advisable.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I have my lute with me...\"");
	say();
	UI_play_music(0x003B, Func09A0(0x0005, 0x0001));
	message("\"If all the young ladies were bricks in a pile,\"");
	say();
	UI_play_music(0x003C, Func09A0(0x0005, 0x0001));
	message("\"I'd be a mason and lay them in style!\"");
	say();
	UI_play_music(0x003D, Func09A0(0x0005, 0x0001));
	message("\"Roll thy leg over, roll thy leg over...\"");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("\"Zounds, man! In the earshot of Lady Yelinda? Hast thou no decency!\"");
	say();
	Func097F(0xFFC6, "@Leave me alone...@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0A71:
	goto labelFunc07FC_0A78;
labelFunc07FC_0A74:
	message("\"Don't believe I've met the man before.\"");
	say();
labelFunc07FC_0A78:
	case "Daemonism" attend labelFunc07FC_0AC8:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"I used ta believe in that stuff. But what Beauty is there in the world for a sailor who cannot sail?\"");
	say();
	message("\"If the Oracle is so powerful, why did it not save us from the storms? Why did it let so many good men die?\"");
	say();
	UI_show_npc_face1(0xFFCF, 0x0000);
	message("\"Foul blasphemy! Hold thy tongue, rogue, or face the wrath of the Oracle.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I may be a drunk, but I be an honest drunk. I shall follow no hypocrite ta a watery grave.\"");
	say();
	Func097F(0xFFC6, "@That's all I have to say...@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0AC8:
	case "drinking" attend labelFunc07FC_0AF0:
	UI_remove_answer(["drinking", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Why do I drink so much? That's rather a personal question...\"");
	say();
	message("\"I be a sailor stranded on the shore, mate. 'Tis no worse fate. With my very own eyes, I have seen our fleet blasted to wreckage by the storms. I saw sailors die!\"");
	say();
	message("\"Why would a man who hath cheated death not drink, Avatar? Perhaps I should have died with my brothers...\"");
	say();
labelFunc07FC_0AF0:
	case "no questions" attend labelFunc07FC_0B13:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Drunkard...@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0B13:
	case "no further questions" attend labelFunc07FC_0B2A:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0B2A:
	goto labelFunc07FC_09B1;
labelFunc07FC_0B2D:
	endconv;
labelFunc07FC_0B2E:
	gflags[0x017E] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFC6) & (0x0011 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0B8A;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0B8A:
	UI_end_conversation();
	abort;
labelFunc07FC_0B8F:
	if (!(var0000 == 0x0034)) goto labelFunc07FC_0D29;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("\"I shall answer thy questions, ");
	message(var0001);
	message(", for the sake of the Oracle. But do not try my patience.\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism", "Dupre's words", "no questions"]);
labelFunc07FC_0BC4:
	converse attend labelFunc07FC_0CC7;
	case "Dupre's words" attend labelFunc07FC_0C1A:
	UI_remove_answer(["Dupre's words", "no questions"]);
	UI_add_answer("no further questions");
	message("\"I do not remember every word uttered in my presence, ");
	message(var0001);
	message(".\"");
	say();
	UI_show_npc_face1(Func08AC(true), 0x0000);
	message("\"These were mine exact words, Lady -- All hail Lord British and the glory that is Britannia!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Beauty forbid! Thou hast spouted the blasphemy again!\"");
	say();
	Func097F(0xFFC9, "@I cannot bear this!@", 0x0000);
	goto labelFunc07FC_0CC8;
labelFunc07FC_0C1A:
	case "the character of the accused" attend labelFunc07FC_0C54:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!gflags[0x0174]) goto labelFunc07FC_0C40;
	message("\"He seems to be an unstable man. Sociable at one moment, and deranged in the next!\"");
	say();
labelFunc07FC_0C40:
	if (!gflags[0x0175]) goto labelFunc07FC_0C4A;
	message("\"He frightens me. Look into those cold, hard eyes! Aren't those the eyes of a murderer?\"");
	say();
labelFunc07FC_0C4A:
	if (!gflags[0x0173]) goto labelFunc07FC_0C54;
	message("\"This is a wild man, full of passions and lusts! I can feel his eyes on me now...\"");
	say();
labelFunc07FC_0C54:
	case "Daemonism" attend labelFunc07FC_0C7C:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"There is no doubt that Daemon British exists. I have seen the records left by previous generations.\"");
	say();
	message("\"The Beast did conquer all of Sosaria, and did force the Fawnese to flee into the sea. How cruel!\"");
	say();
	message("\"I have always hated the Beast, and I always shall!\"");
	say();
labelFunc07FC_0C7C:
	case "no questions" attend labelFunc07FC_0CAD:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(0xFFC3, "@Such impudence!@", 0x0002);
	Func097F(0xFFCE, "@For shame!@", 0x0000);
	goto labelFunc07FC_0CC8;
labelFunc07FC_0CAD:
	case "no further questions" attend labelFunc07FC_0CC4:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_0CC8;
labelFunc07FC_0CC4:
	goto labelFunc07FC_0BC4;
labelFunc07FC_0CC7:
	endconv;
labelFunc07FC_0CC8:
	gflags[0x0181] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFC9) & (0x0002 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0D24;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0D24:
	UI_end_conversation();
	abort;
labelFunc07FC_0D29:
	if (!(var0000 == 0x0033)) goto labelFunc07FC_0F15;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC3, 0x0000);
	message("\"Ask thy questions, Avatar. However, I shall reserve the right to silence. After all, I am the custodian of Lady Yelinda's confidential matters.\"");
	say();
	UI_add_answer(["the character of the accused", "Daemonism", "following me", "no questions"]);
labelFunc07FC_0D58:
	converse attend labelFunc07FC_0EB3;
	case "following me" attend labelFunc07FC_0E18:
	UI_remove_answer(["following me", "no questions"]);
	UI_add_answer("no further questions");
	if (!gflags[0x01B0]) goto labelFunc07FC_0D8A;
	message("\"As I stated in the earlier session of these proceedings, ");
	message(var0002);
	message(" was too sharp for me. However, I did see him conferring with Delin's daughter, and she is a known sympathizer with The Fellowship!\"");
	say();
	goto labelFunc07FC_0DF5;
labelFunc07FC_0D8A:
	message("\"I do not have to answer that question. This is a matter of state security.\"");
	say();
	var0003 = Func0956(["protest", "accept"]);
	if (!(var0003 == "protest")) goto labelFunc07FC_0DC7;
	message("\"I don't have to answer thy questions, traitor!\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"The Oracle must hear all of the facts, if it is to decide fairly. Chancellor, I give my permission to speak of thy secrets.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc07FC_0DCE;
labelFunc07FC_0DC7:
	message("\"Ask me something else...\"");
	say();
	goto labelFunc07FC_0E12;
labelFunc07FC_0DCE:
	message("\"I followed ");
	message(var0002);
	message(" about this town, until he spotted me. No doubt I prevented him from great evil!\"");
	say();
	UI_show_npc_face1(0xFFD0, 0x0000);
	message("\"But thou didst not see him actually perform any vile acts?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"He contacted Alyssand, madam! I saw them speaking together, and casting many sly glances in my direction.\"");
	say();
labelFunc07FC_0DF5:
	UI_show_npc_face1(0xFFD1, 0x0000);
	message("\"My daughter is not on trial here, chancellor...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Well... I suppose not...\"");
	say();
labelFunc07FC_0E12:
	var0003 = 0x0001;
labelFunc07FC_0E18:
	case "the character of the accused" attend labelFunc07FC_0E52:
	UI_remove_answer(["the character of the accused", "no questions"]);
	UI_add_answer("no further questions");
	if (!gflags[0x0174]) goto labelFunc07FC_0E3E;
	message("\"Isn't it obvious? The bard is a light-minded man, disrespectful of proper authority! Iolo is not a man to be trusted.\"");
	say();
labelFunc07FC_0E3E:
	if (!gflags[0x0175]) goto labelFunc07FC_0E48;
	message("\"He possesses the grim silence of the professional executioner. Shamino never laughs. I find him to be disquieting...\"");
	say();
labelFunc07FC_0E48:
	if (!gflags[0x0173]) goto labelFunc07FC_0E52;
	message("\"Why, the man is a known drunkard, and a companion of thieves and cut-throats. Look at those he consorts with!\"");
	say();
labelFunc07FC_0E52:
	case "Daemonism" attend labelFunc07FC_0E76:
	UI_remove_answer(["Daemonism", "no questions"]);
	UI_add_answer("no further questions");
	message("\"Dost thou not feel the sudden chill in this Temple, at the very mention of Beast British?\"");
	say();
	message("\"I tell thee, the Daemon exists, and his schemes to destroy Fawn can only be averted by the justice of the Oracle!\"");
	say();
labelFunc07FC_0E76:
	case "no questions" attend labelFunc07FC_0E99:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Forgive me. I have no questions for thee.\"");
	say();
	Func097F(item, "@Idiot...@", 0x0000);
	goto labelFunc07FC_0EB4;
labelFunc07FC_0E99:
	case "no further questions" attend labelFunc07FC_0EB0:
	Func097F(0xFE9C, "@No further questions...@", 0x0000);
	goto labelFunc07FC_0EB4;
labelFunc07FC_0EB0:
	goto labelFunc07FC_0D58;
labelFunc07FC_0EB3:
	endconv;
labelFunc07FC_0EB4:
	gflags[0x0182] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFC3) & (0x000A & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0F10;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0F10:
	UI_end_conversation();
	abort;
labelFunc07FC_0F15:
	return;
}


