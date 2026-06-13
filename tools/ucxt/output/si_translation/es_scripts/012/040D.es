#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern var Func0942 0x942 (var var0000);
extern var Func09AE 0x9AE (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func080C 0x80C ();
extern void Func080B 0x80B ();
extern void Func08FF 0x8FF ();

void Func040D object#(0x40D) ()
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
	if (!(UI_get_schedule_type(0xFFF3) == 0x0007)) goto labelFunc040D_0016;
	var0000 = true;
labelFunc040D_0016:
	var0001 = Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F);
	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = Func0953();
	var0005 = 0x0000;
	var0006 = false;
	var0007 = UI_get_item_flag(0xFFF3, 0x001C);
	if (!(event == 0x0000)) goto labelFunc040D_01B2;
	var0008 = UI_get_random(0x0006);
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc040D_010B;
	if (!(var0008 == 0x0001)) goto labelFunc040D_0090;
	UI_item_say(0xFFF3, "@What is that smell?@");
labelFunc040D_0090:
	if (!(var0008 == 0x0002)) goto labelFunc040D_00A4;
	UI_item_say(0xFFF3, "@Phew!@");
labelFunc040D_00A4:
	if (!(var0008 == 0x0003)) goto labelFunc040D_00B8;
	UI_item_say(0xFFF3, "@Putrid odor...@");
labelFunc040D_00B8:
	if (!(var0008 == 0x0004)) goto labelFunc040D_00E0;
	if (!(!gflags[0x0104])) goto labelFunc040D_00D6;
	UI_item_say(0xFFF3, "@Away from here!@");
	goto labelFunc040D_00E0;
labelFunc040D_00D6:
	UI_item_say(0xFFF3, "@Something doth stink...@");
labelFunc040D_00E0:
	if (!(var0008 == 0x0005)) goto labelFunc040D_00F4;
	UI_item_say(0xFFF3, "@Open a window!@");
labelFunc040D_00F4:
	if (!(var0008 == 0x0006)) goto labelFunc040D_0108;
	UI_item_say(0xFFF3, "@Bad stench!@");
labelFunc040D_0108:
	goto labelFunc040D_01B2;
labelFunc040D_010B:
	if (!(var0008 == 0x0001)) goto labelFunc040D_013A;
	if (!var0007) goto labelFunc040D_0130;
	UI_item_say(0xFFF3, (("@Greetings, " + var0004) + "!@"));
	goto labelFunc040D_013A;
labelFunc040D_0130:
	UI_item_say(0xFFF3, "@Greetings, stranger!@");
labelFunc040D_013A:
	if (!(var0008 == 0x0002)) goto labelFunc040D_014E;
	UI_item_say(0xFFF3, "@Goods for sale!@");
labelFunc040D_014E:
	if (!(var0008 == 0x0003)) goto labelFunc040D_0162;
	UI_item_say(0xFFF3, "@What a nice day.@");
labelFunc040D_0162:
	if (!(var0008 == 0x0004)) goto labelFunc040D_018A;
	if (!(!var0007)) goto labelFunc040D_0180;
	UI_item_say(0xFFF3, "@Art thou a visitor?@");
	goto labelFunc040D_018A;
labelFunc040D_0180:
	UI_item_say(0xFFF3, "@So nice to see thee.@");
labelFunc040D_018A:
	if (!(var0008 == 0x0005)) goto labelFunc040D_019E;
	UI_item_say(0xFFF3, "@Thou breakest, thou buyest.@");
labelFunc040D_019E:
	if (!(var0008 == 0x0006)) goto labelFunc040D_01B2;
	UI_item_say(0xFFF3, "@Provisions!@");
labelFunc040D_01B2:
	if (!(event == 0x0001)) goto labelFunc040D_021B;
	UI_item_say(0xFE9C, "@Greetings!@");
	0xFFF3->Func07D1();
	Func097F(0xFFF3, (("@Yes, " + var0002) + "?@"), 0x0002);
	if (!(!var0000)) goto labelFunc040D_01F2;
	UI_set_schedule_type(0xFFF3, 0x0003);
	goto labelFunc040D_021B;
labelFunc040D_01F2:
	UI_set_schedule_type(0xFFF3, 0x000A);
	0xFFF3->Func07D2();
	var0008 = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x55, 0x040D]);
labelFunc040D_021B:
	if (!(event == 0x0002)) goto labelFunc040D_0227;
	event = 0x0009;
labelFunc040D_0227:
	if (!(event == 0x0009)) goto labelFunc040D_1525;
	UI_run_schedule(0xFFF3);
	UI_clear_item_say(0xFFF3);
	var0000 = false;
	if (!(UI_get_schedule_type(0xFFF3) == 0x0007)) goto labelFunc040D_0253;
	var0000 = true;
labelFunc040D_0253:
	UI_show_npc_face0(0xFFF3, 0x0000);
	var0009 = 0x0006;
	if (!(Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003) && gflags[0x0104])) goto labelFunc040D_0281;
	message("\"Go away from me with that rotten egg. Phew!\"");
	say();
	abort;
labelFunc040D_0281:
	if (!(var0007 == false)) goto labelFunc040D_02A7;
	if (!var0000) goto labelFunc040D_0296;
	message("\"What a pleasure to meet thee. My name is Bucia, and I tend this provisions shop. Is there anything that I can help thee with?\"");
	say();
	goto labelFunc040D_029A;
labelFunc040D_0296:
	message("\"Strangers are always welcome in Moonshade. My name is Bucia -- if thou needest help, thou hast merely to ask.\"");
	say();
labelFunc040D_029A:
	UI_set_item_flag(0xFFF3, 0x001C);
	goto labelFunc040D_02B1;
labelFunc040D_02A7:
	message("\"I am so glad to see thee again, ");
	message(var0002);
	message(".\"");
	say();
labelFunc040D_02B1:
	if (!var0000) goto labelFunc040D_02CA;
	UI_add_answer(["provisions", "exchange"]);
	var0009 = 0x0003;
labelFunc040D_02CA:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc040D_02E3;
	UI_add_answer("kidnap");
labelFunc040D_02E3:
	if (!Func0942(0xFFD6)) goto labelFunc040D_02F2;
	var0009 = 0x0001;
labelFunc040D_02F2:
	UI_add_answer(["information", "bye"]);
	var000A = false;
	var000B = 0x0000;
labelFunc040D_0309:
	converse attend labelFunc040D_1524;
	case "kidnap" attend labelFunc040D_032D:
	message("\"Oh, my! What to do? What to do?\"");
	say();
	message("\"Call the Rangers! Consult the Mages! Such a crime cannot go unpunished.\"");
	say();
	message("\"Perhaps this has something to do with the magical storms? Perhaps we are all in danger!\"");
	say();
	Func097F(0xFFF3, "@I am so afraid!@", 0x0000);
	abort;
labelFunc040D_032D:
	case "information" attend labelFunc040D_03C9:
	UI_remove_answer("information");
	if (!((UI_npc_nearby(0xFF3A) || (UI_npc_nearby(0xFFE4) || UI_npc_nearby(0xFFE2))) && gflags[0x013E])) goto labelFunc040D_038E;
	var0009 = 0x0064;
	gflags[0x013E] = false;
	message("\"'Tis so flattering to be asked so many questions by thee, ");
	message(var0004);
	message(". Of what wouldst thou like to know?\"");
	say();
	UI_push_answers();
	var000B = 0x0001;
	UI_add_answer(["people", "places", "strange objects", "nothing more"]);
	goto labelFunc040D_03C9;
labelFunc040D_038E:
	if (!((!gflags[0x0103]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc040D_03C5;
	message("\"I am not certain that I'll know anything useful, but in what art thou interested?\"");
	say();
	UI_push_answers();
	var000B = 0x0001;
	UI_add_answer(["people", "places", "strange objects", "nothing more"]);
	goto labelFunc040D_03C9;
labelFunc040D_03C5:
	message("\"I am afraid that I'm very busy right now. Perhaps we could talk about this later.\"");
	say();
labelFunc040D_03C9:
	case "people" attend labelFunc040D_03F3:
	message("\"'Twould be wrong for me to speak about people behind their backs.\"");
	say();
	message("\"So please, do not tell anyone! Dost thou desire to know about townsfolk, or visitors?\"");
	say();
	UI_push_answers();
	var000B = 0x0002;
	UI_add_answer(["townsfolk", "visitors", "nothing more"]);
labelFunc040D_03F3:
	case "townsfolk" attend labelFunc040D_0420:
	UI_remove_answer("townsfolk");
	message("\"Dost thou have an interest in mere Mundanes, or Mages?\"");
	say();
	UI_push_answers();
	var000B = 0x0003;
	UI_add_answer(["Mundanes", "Mages", "nothing more"]);
labelFunc040D_0420:
	case "Mundanes" attend labelFunc040D_044C:
	message("\"Those of us who do not cast magic are a small and disrespected part of society here. Whom dost thou desire to know about?\"");
	say();
	UI_push_answers();
	var000B = 0x0004;
	UI_add_answer(["the Artisans", "the Rangers", "Rocco and Petra", "Mosh the beggar", "nothing more"]);
labelFunc040D_044C:
	case "the Artisans" attend labelFunc040D_0470:
	UI_remove_answer("the Artisans");
	message("\"Ducio is the Master Artisan, capable of forging or repairing all manner of magical apparatus.\"");
	say();
	message("\"He hath grown lazy with prosperity, however -- his apprentice doth do most of the hard labor, while the Master wets his throat at the inn!\"");
	say();
	message("\"Poor Topo! Someday he'll be the Master Artisan, but for now he must labor long hours for a mere pittance.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0470:
	case "Pothos the Apothecary" attend labelFunc040D_04C1:
	UI_remove_answer("Pothos the Apothecary");
	if (!gflags[0x00D9]) goto labelFunc040D_04AC;
	if (!gflags[0x00DD]) goto labelFunc040D_0492;
	message("\"He hath been most delighted lately -- as if some burden hath been lifted from his mind.\"");
	say();
	goto labelFunc040D_04A9;
labelFunc040D_0492:
	message("\"Pothos is back, and his shop is open once again.\"");
	say();
	message("\"Hast thou heard the rumor about the apothecary? Some say that he hath a most uncanny resemblance to the Mad Mage.\"");
	say();
	message("\"I think so, too.\"");
	say();
	gflags[0x00DC] = true;
	UI_add_answer("Mad Mage");
labelFunc040D_04A9:
	goto labelFunc040D_04B8;
labelFunc040D_04AC:
	message("\"Thou canst buy no reagents in Moonshade, for the Apothecary hath gone away!\"");
	say();
	message("\"There is a tale that explains his absence.\"");
	say();
	message("\"Don't tell that I told thee, but I hear that Pothos is on a secret errand for the MageLord!\"");
	say();
labelFunc040D_04B8:
	var0009 = Func09AE(var0009);
labelFunc040D_04C1:
	case "Mad Mage" attend labelFunc040D_04DD:
	UI_remove_answer("Mad Mage");
	message("\"Surely thou hast heard of Erstam, the Mad Mage. 'Twas he who helped found this city. Once he was a great wizard, able to control the very elements themselves. But then, as his power grew, his sanity shrank. It shrank and shrank until it was too small to perceive, and he went dashing into the hills, shrieking threats and insults. Past the Mountains of Freedom wilt thou find his isles.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_04DD:
	case "the Rangers" attend labelFunc040D_0512:
	UI_remove_answer("the Rangers");
	message("\"They are the pride of our city. The Chief Ranger, Julia, hath no mercy for troublemakers.\"");
	say();
	message("\"But if thou dost ask me, she's too gruff -- I think she'd like to give everyone orders, if she could.\"");
	say();
	message("\"By the way, be sure to give thy greetings to Ranger Ernesto...\"");
	say();
	if (!var0003) goto labelFunc040D_0505;
	message("\"...he's rather cute.\"");
	say();
	goto labelFunc040D_0509;
labelFunc040D_0505:
	message("\"...he's a winsome lad.\"");
	say();
labelFunc040D_0509:
	var0009 = Func09AE(var0009);
labelFunc040D_0512:
	case "Rocco and Petra" attend labelFunc040D_0536:
	UI_remove_answer("Rocco and Petra");
	message("\"I can say nothing bad about Goodman Rocco and his inn! He is a gentleman.\"");
	say();
	message("\"Now, some enjoy talking about him and that female automaton living under the same roof, but not I.\"");
	say();
	message("\"Petra is a fine girl, even if she's merely a magical construct.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0536:
	case "Mosh the beggar" attend labelFunc040D_0556:
	UI_remove_answer("Mosh the beggar");
	message("\"Beware of Mosh! Those rats of hers are filled with disease.\"");
	say();
	message("\"Do not listen to her accusations about the Sorceress Columna -- all imaginings, not true!\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0556:
	case "Mages" attend labelFunc040D_0588:
	message("\"Everything in this city revolves around the wizards and their cliques. Whom dost thou desire to know about?\"");
	say();
	UI_push_answers();
	var000B = 0x0004;
	UI_add_answer(["the MageLord", "the Adepts", "the Magister", "Melino and Columna", "the minor Mages", "Pothos the Apothecary", "nothing more"]);
labelFunc040D_0588:
	case "the MageLord" attend labelFunc040D_05CB:
	UI_remove_answer("the MageLord");
	message("\"Filbercio is the most powerful wizard of them all.\"");
	say();
	message("\"'Tis said that he hath some strange compelling power over women...\"");
	say();
	if (!var0003) goto labelFunc040D_05AC;
	message("\"...thou had best watch thy step, lest he ensorcel thee with a love spell!\"");
	say();
	goto labelFunc040D_05B7;
labelFunc040D_05AC:
	message("\"...not me, of course, but he hath had his way with many other beautiful women! Thou wouldst be surprised to learn of many of them.\"");
	say();
	UI_add_answer("learn");
labelFunc040D_05B7:
	if (!(!gflags[0x00D9])) goto labelFunc040D_05C2;
	message("\"He is not partial to visitors, so I doubt that thou shalt ever have the chance to make his acquaintance.\"");
	say();
labelFunc040D_05C2:
	var0009 = Func09AE(var0009);
labelFunc040D_05CB:
	case "learn" attend labelFunc040D_05DE:
	UI_remove_answer("learn");
	message("\"Perhaps thou hast heard the name Rotoluncia?\"");
	say();
labelFunc040D_05DE:
	case "the Adepts" attend labelFunc040D_0602:
	UI_remove_answer("the Adepts");
	message("\"Besides the MageLord, there are two others who compose the Council of Mages.\"");
	say();
	message("\"Adept Gustacio is a wise wizard, but strict in his ways and aloof from Mundanes.\"");
	say();
	message("\"As for Adept Rotoluncia, she is steeped in magic and a mistress of the arcane. Do not provoke her, for her anger is terrible.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0602:
	case "the Magister" attend labelFunc040D_062A:
	UI_remove_answer("the Magister");
	message("\"Fedabiblio is the Magister. 'Tis he who directs the Seminarium, where young magelings are taught.\"");
	say();
	message("\"In former times, 'twas his job to go to the mainland and acquire those babies which had promise of magical powers.\"");
	say();
	message("\"But each year there have been fewer students, until now the school lies nearly empty.\"");
	say();
	message("\"Perhaps this hath something to do with the multi-colored storms.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_062A:
	case "Melino and Columna" attend labelFunc040D_065B:
	UI_remove_answer("Melino and Columna");
	message("\"Such an odd couple! Melino is one of our eldest Mages, retired from the Council. He is a good man, but often befuddled.\"");
	say();
	message("\"As for Columna, she is only one-third his age! And such an attractive woman...\"");
	say();
	if (!var0003) goto labelFunc040D_064E;
	message("\"Between thou and me, she is too young for that husband of hers. If I were her, I'd die!\"");
	say();
	goto labelFunc040D_0652;
labelFunc040D_064E:
	message("\"There are many in this town who would like to steal her from Melino, but none hath succeeded!\"");
	say();
labelFunc040D_0652:
	var0009 = Func09AE(var0009);
labelFunc040D_065B:
	case "the minor Mages" attend labelFunc040D_06A2:
	UI_remove_answer("the minor Mages");
	message("\"Well, there is Mortegro -- his speciality is dead things, spirits, and burial rites. Not a pleasant fellow.\"");
	say();
	message("\"And Torrissio, a fine young Mage with a burning ambition. He reads books and keeps to himself.\"");
	say();
	message("\"Then there is Frigidazzi, the Frost Sorceress.\"");
	say();
	if (!var0003) goto labelFunc040D_0683;
	message("\"She hath some strange habits, need I say more. The MageLord protects her, for she is his latest paramour.\"");
	say();
	goto labelFunc040D_0687;
labelFunc040D_0683:
	message("\"But thou shouldst stay away from her, for she is the MageLord's mistress, and he is a jealous man!\"");
	say();
labelFunc040D_0687:
	gflags[0x02A1] = true;
	if (!(gflags[0x02A0] && gflags[0x02A1])) goto labelFunc040D_0699;
	gflags[0x0292] = true;
labelFunc040D_0699:
	var0009 = Func09AE(var0009);
labelFunc040D_06A2:
	case "visitors" attend labelFunc040D_0730:
	UI_remove_answer("visitors");
	message("\"Perhaps thou shouldst speak to Rocco at the Blue Boar Inn. All of the town's visitors stay at his fine inn, even that travelling scholar.\"");
	say();
	message("\"Also, Julia keeps an eye on all undesirables.\"");
	say();
	var000C = Func0992(0xFFFD, "@Then she must have spotted Batlin!@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc040D_071C;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc040D_0715;
	var000D = var000C;
labelFunc040D_06E8:
	if (!(var000D == var000C)) goto labelFunc040D_0705;
	var000D = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc040D_06E8;
labelFunc040D_0705:
	var000D = Func0992(var000D, "@Ah, but Batlin can be very gentlemanly when it suits his purposes.@", 0x0000, false);
labelFunc040D_0715:
	UI_set_conversation_slot(0x0000);
labelFunc040D_071C:
	message("\"A visit to the Chief Ranger might be a good idea. Thou canst find her at the Winery, in the western part of town.\"");
	say();
	var0009 = Func09AE(var0009);
	UI_add_answer("travelling scholar");
labelFunc040D_0730:
	case "travelling scholar" attend labelFunc040D_0743:
	UI_remove_answer("travelling scholar");
	message("\"Rocco could tell thee more, for he came to know her rather... well. I only know her name: Gwenno. She left here a few weeks ago.\"");
	say();
labelFunc040D_0743:
	case "places" attend labelFunc040D_0769:
	message("\"Interested in seeing the sights, eh? Well, I can tell thee about the islands, or the mountains.\"");
	say();
	UI_push_answers();
	var000B = 0x0002;
	UI_add_answer(["islands", "mountains", "nothing more"]);
labelFunc040D_0769:
	case "islands" attend labelFunc040D_0785:
	UI_remove_answer("islands");
	message("\"I hope thou art not planning to visit the isle of the Mad Mage, Erstam? He was once, perhaps, a powerful wizard -- one of the founders. But now, I wonder about a man who feels the need to run from civilization.\" ~\"Now, if thou dost mean to visit Monk Isle, than I shall not discourage thee. Residing within the dense forest, the monks devote their entire lives to the pursuit of knowledge.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0785:
	case "mountains" attend labelFunc040D_07A1:
	UI_remove_answer("mountains");
	message("\"Ah, yes, the Mountains of Freedom. They occupy the entire shoreline of the northern part of the island. Be wary, for there are plenty of native monstrosities that call the mountainous caverns their home.\"");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_07A1:
	case "strange objects" attend labelFunc040D_09EA:
	var000B = (var000B + 0x0001);
	UI_remove_answer("strange objects");
	var000E = [];
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc040D_07D5;
	var000E = (var000E & "pinecone");
labelFunc040D_07D5:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc040D_07EA;
	var000E = (var000E & "moonsilk stockings");
labelFunc040D_07EA:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc040D_07FF;
	var000E = (var000E & "urn");
labelFunc040D_07FF:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc040D_0814;
	var000E = (var000E & "apparatus");
labelFunc040D_0814:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc040D_0829;
	var000E = (var000E & "pumice");
labelFunc040D_0829:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc040D_083E;
	var000E = (var000E & "lost ring");
labelFunc040D_083E:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc040D_0853;
	var000E = (var000E & "fur cap");
labelFunc040D_0853:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc040D_0868;
	var000E = (var000E & "slippers");
labelFunc040D_0868:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc040D_087D;
	var000E = (var000E & "breastplate");
labelFunc040D_087D:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc040D_0892;
	var000E = (var000E & "blue egg");
labelFunc040D_0892:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc040D_08A7;
	var000E = (var000E & "strange hairbrush");
labelFunc040D_08A7:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc040D_08BC;
	var000E = (var000E & "bottle of wine");
labelFunc040D_08BC:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc040D_08D1;
	var000E = (var000E & "strange coins");
labelFunc040D_08D1:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc040D_08E6;
	var000E = (var000E & "skull");
labelFunc040D_08E6:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc040D_08FB;
	var000E = (var000E & "bloody hand");
labelFunc040D_08FB:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc040D_0910;
	var000E = (var000E & "plain shield");
labelFunc040D_0910:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc040D_0925;
	var000E = (var000E & "glowing rock");
labelFunc040D_0925:
	if (!(gflags[0x007B] && (!gflags[0x007C]))) goto labelFunc040D_093A;
	var000E = (var000E & "fish-net stockings");
labelFunc040D_093A:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc040D_0956;
	var000E = (var000E & "brown bottle");
labelFunc040D_0956:
	if (!(var000E == [])) goto labelFunc040D_0986;
	var000C = Func0992(0x0001, (("@But we have no strange objects to ask about, " + var0002) + ".@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"I do not think I can help thee, but if I think of anything, I'll inform thee!\"");
	say();
	goto labelFunc040D_09EA;
labelFunc040D_0986:
	message("\"What sort of items art thou inquiring about?\"");
	say();
	UI_push_answers();
	var000F = 0x0005;
labelFunc040D_0994:
	if (!(var000F > 0x0000)) goto labelFunc040D_09E3;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_09CF;
	var000F = 0x0000;
	var0006 = true;
labelFunc040D_09CF:
	UI_add_answer(var0005);
	var000F = (var000F - 0x0001);
	goto labelFunc040D_0994;
labelFunc040D_09E3:
	UI_add_answer("nothing more");
labelFunc040D_09EA:
	case "pinecone" attend labelFunc040D_0AAA:
	UI_remove_answer("pinecone");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc040D_0A60;
	message("\"'Tis a pinecone! I don't know where they come from, but Captain Hawk gave me one once. May I have this one, too?\"");
	say();
	gflags[0x0108] = true;
	if (!Func0955()) goto labelFunc040D_0A59;
	message("\"Thank thee!\"");
	say();
	if (!(UI_get_npc_id(0xFFF3) < 0x0019)) goto labelFunc040D_0A40;
	UI_set_npc_id(0xFFF3, (UI_get_npc_id(0xFFF3) + 0x0005));
labelFunc040D_0A40:
	var0008 = UI_remove_party_items(0x0001, 0x0108, 0xFE99, 0xFE99, 0x0000);
	goto labelFunc040D_0A5D;
labelFunc040D_0A59:
	message("\"'Tis fine, I do not need another one.\"");
	say();
labelFunc040D_0A5D:
	goto labelFunc040D_0A68;
labelFunc040D_0A60:
	message("\"Perhaps the Magister could help thee. He is an authority on many subjects.\"");
	say();
	gflags[0x010B] = true;
labelFunc040D_0A68:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0AAA;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0AA3;
	var0006 = true;
labelFunc040D_0AA3:
	UI_add_answer(var0005);
labelFunc040D_0AAA:
	case "moonsilk stockings" attend labelFunc040D_0B92:
	UI_remove_answer("moonsilk stockings");
	gflags[0x028D] = true;
	message("\"From thy description, the stockings could only be one kind -- Moonsilk Stockings.\"");
	say();
	message("\"I sell them here in the store, but not often. Only the Mages can afford luxuries like these.\"");
	say();
	var000C = Func0992(0xFFFF, "@And who buys these fripperies?@", "@Whom dost thou sell them to, milady?@", false);
	UI_set_conversation_slot(0x0000);
	message("\"The Green Sorceress, Columna -- she dresses in only the finest materials.\"");
	say();
	message("\"She also has a moonsilk sleeping gown, which cost more guilders than I shall ever make!\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc040D_0B4C;
	message("\"Please, may I see the stockings...\"");
	say();
	message("\"The silk is so soft! Didst thou know that the stockings are made from the cocoons of lunar moths?\"");
	say();
	message("\"May I... could I... wouldst thou mind if I kept this pair? No Mundane could ever own such finery!\"");
	say();
	if (!Func0955()) goto labelFunc040D_0B48;
	message("\"Ooooh!\"");
	say();
	if (!(UI_get_npc_id(0xFFF3) < 0x0014)) goto labelFunc040D_0B2F;
	UI_set_npc_id(0xFFF3, (UI_get_npc_id(0xFFF3) + 0x000A));
labelFunc040D_0B2F:
	var0008 = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, 0x0000);
	goto labelFunc040D_0B4C;
labelFunc040D_0B48:
	message("\"Oh.\"");
	say();
labelFunc040D_0B4C:
	gflags[0x028D] = true;
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0B92;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0B8B;
	var0006 = true;
labelFunc040D_0B8B:
	UI_add_answer(var0005);
labelFunc040D_0B92:
	case "urn" attend labelFunc040D_0C07:
	UI_remove_answer("urn");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc040D_0BBD;
	message("\"I do not know what that is, but it doth give me a shuddery feeling. Please, take it away...\"");
	say();
	goto labelFunc040D_0BC5;
labelFunc040D_0BBD:
	message("\"It doth sound like some sort of pot. Perhaps Topo could aid thee -- he assists Master Ducio in fashioning bowls and pots for the Mages.\"");
	say();
	gflags[0x010F] = true;
labelFunc040D_0BC5:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0C07;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0C00;
	var0006 = true;
labelFunc040D_0C00:
	UI_add_answer(var0005);
labelFunc040D_0C07:
	case "apparatus" attend labelFunc040D_0C75:
	UI_remove_answer("apparatus");
	if (!gflags[0x00DB]) goto labelFunc040D_0C27;
	message("\"Since thou art a Mage, perhaps thou couldst ask thy fellow wizards about this magical apparatus.\"");
	say();
	gflags[0x0110] = true;
	goto labelFunc040D_0C33;
labelFunc040D_0C27:
	message("\"'Twill do no good to speak with the Mages, for they ignore Mundanes like ourselves.\"");
	say();
	message("\"But if thou spokest with Master Ducio, perhaps he could help thee. He makes all of the apparatus for the wizards of Moonshade.\"");
	say();
	gflags[0x0111] = true;
labelFunc040D_0C33:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0C75;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0C6E;
	var0006 = true;
labelFunc040D_0C6E:
	UI_add_answer(var0005);
labelFunc040D_0C75:
	case "pumice" attend labelFunc040D_0CEA:
	UI_remove_answer("pumice");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc040D_0CA0;
	message("\"What an ugly rock. Take that with thee when thou leavest, please?\"");
	say();
	goto labelFunc040D_0CA8;
labelFunc040D_0CA0:
	message("\"The Magister is a storehouse of knowledge. Perhaps he could aid thee.\"");
	say();
	gflags[0x0112] = true;
labelFunc040D_0CA8:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0CEA;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0CE3;
	var0006 = true;
labelFunc040D_0CE3:
	UI_add_answer(var0005);
labelFunc040D_0CEA:
	case "lost ring" attend labelFunc040D_0D67:
	UI_remove_answer("lost ring");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc040D_0D1D;
	message("\"What a pretty ring! A simple stone in a carved setting -- so unlike anything the Mages would have!\"");
	say();
	message("\"All they think of are jewels and gold, until they've driven out all the beauty!\"");
	say();
	message("\"I'll wager that ring comes from the Sea City, Fawn. Where else could such a wonderful creation come from?\"");
	say();
	goto labelFunc040D_0D25;
labelFunc040D_0D1D:
	message("\"Perhaps thou couldst speak to the Master Artisan. He hath made many baubles for the MageLord and his mistresses.\"");
	say();
	gflags[0x0113] = true;
labelFunc040D_0D25:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0D67;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0D60;
	var0006 = true;
labelFunc040D_0D60:
	UI_add_answer(var0005);
labelFunc040D_0D67:
	case "fur cap" attend labelFunc040D_0E18:
	UI_remove_answer("fur cap");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc040D_0DCE;
	message("\"Why, I sold that cap myself, from this very shop!\"");
	say();
	message("\"Ordered it special from the furrier in Monitor. She obtained it from the far north, where the Trappers hunt bears, snow leopards, and the man-eating Gwani.\"");
	say();
	message("\"With the storms, though, 'tis too dangerous to sail to the north. And we cannot trade by way of land, for the Swamp of Gorlab cuts the mainland in half.\"");
	say();
	var000C = Func0992(0x0001, "@About the fur cap...@", "@About the fur cap...@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Yes, yes, yes, I remember. I sold it to the MageLord, who gave it to his favorite at the Feast of Illusions. I'm surprised that unusual fellow never bought one, what with all the other furs he was collecting.\"");
	say();
	gflags[0x02A0] = true;
	UI_add_answer("unusual fellow");
	if (!(gflags[0x02A0] && gflags[0x02A1])) goto labelFunc040D_0DCB;
	gflags[0x0292] = true;
labelFunc040D_0DCB:
	goto labelFunc040D_0DD6;
labelFunc040D_0DCE:
	message("\"Anyone could tell thee that fur comes from the north, on the mainland beyond the great swamp.\"");
	say();
	message("\"I've sold fur caps and cloaks from time to time, but the storms have isolated us from the Trappers. So I have none left to sell!\"");
	say();
labelFunc040D_0DD6:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0E18;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0E11;
	var0006 = true;
labelFunc040D_0E11:
	UI_add_answer(var0005);
labelFunc040D_0E18:
	case "unusual fellow" attend labelFunc040D_0E2B:
	UI_remove_answer("unusual fellow");
	message("\"He was here about two months ago, buying all sorts of furs and such. Obviously he was planning a trip to the north. Of course, no one knows where he actually went, since he left in such a hurry.\"");
	say();
labelFunc040D_0E2B:
	case "slippers" attend labelFunc040D_0EA4:
	UI_remove_answer("slippers");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc040D_0E5A;
	message("\"Such old, ratty things! Must have belonged to some Mundane -- no Mage would wear anything so worn.\"");
	say();
	gflags[0x0115] = true;
	goto labelFunc040D_0E62;
labelFunc040D_0E5A:
	message("\"Slippers? No Mundane could afford them, but perhaps a Mage is missing a pair.\"");
	say();
	gflags[0x0114] = true;
labelFunc040D_0E62:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0EA4;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0E9D;
	var0006 = true;
labelFunc040D_0E9D:
	UI_add_answer(var0005);
labelFunc040D_0EA4:
	case "breastplate" attend labelFunc040D_0F1D:
	UI_remove_answer("breastplate");
	if (!Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000)) goto labelFunc040D_0ED3;
	message("\"How exotic -- armour made for a woman! 'Tis too beautiful to come from Monitor, and no ranger here wears such a thing...\"");
	say();
	message("\"I'll wager that it comes from the sea-city of Fawn. Thou shouldst ask about it there.\"");
	say();
	goto labelFunc040D_0EDB;
labelFunc040D_0ED3:
	message("\"Such items of heavy armour are not needed here, as we depend upon the Mages for our defense.\"");
	say();
	message("\"Thou shouldst ask the armourers of the warrior-city of Monitor -- they make many kinds of armour.\"");
	say();
labelFunc040D_0EDB:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0F1D;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0F16;
	var0006 = true;
labelFunc040D_0F16:
	UI_add_answer(var0005);
labelFunc040D_0F1D:
	case "blue egg" attend labelFunc040D_0F97:
	UI_remove_answer("blue egg");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc040D_0F4D;
	message("\"Oh, 'tis a rotten egg! Leave here with that!\"");
	say();
	gflags[0x0104] = true;
	abort;
	goto labelFunc040D_0F55;
labelFunc040D_0F4D:
	message("\"A blue egg? I have never heard of such a thing, but the Magister is wise in many subjects. Perhaps thou shouldst inquire of Fedabiblio.\"");
	say();
	gflags[0x010C] = true;
labelFunc040D_0F55:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0F97;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0F90;
	var0006 = true;
labelFunc040D_0F90:
	UI_add_answer(var0005);
labelFunc040D_0F97:
	case "strange hairbrush" attend labelFunc040D_100C:
	UI_remove_answer("strange hairbrush");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc040D_0FC2;
	message("\"Such an odd little brush. I don't know why, but it doth give me a most unnatural feeling. Please, take it back!\"");
	say();
	goto labelFunc040D_0FCA;
labelFunc040D_0FC2:
	message("\"Thou art seeking brushes? Perhaps Topo the Artisan could help thee -- he makes many things for the Master Artisan.\"");
	say();
	gflags[0x0116] = true;
labelFunc040D_0FCA:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_100C;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_1005;
	var0006 = true;
labelFunc040D_1005:
	UI_add_answer(var0005);
labelFunc040D_100C:
	case "bottle of wine" attend labelFunc040D_10AF:
	UI_remove_answer("bottle of wine");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc040D_1052;
	message("\"Allow me to see that bottle. But of course! This is Moonshade wine, made by the Rangers of our town!\"");
	say();
	message("\"If thou desirest more, simply inquire at the Winery on the west side of town.\"");
	say();
	var000C = Func0992(0xFFFF, "@Very good idea. Let's go.@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc040D_106D;
labelFunc040D_1052:
	message("\"Perhaps thou shouldst inquire at the Winery. The Rangers are most knowledgeable about wines.\"");
	say();
	var000C = Func0992(0xFFFF, "@A visit to the Winery seems in order!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc040D_106D:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_10AF;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_10A8;
	var0006 = true;
labelFunc040D_10A8:
	UI_add_answer(var0005);
labelFunc040D_10AF:
	case "strange coins" attend labelFunc040D_1124:
	UI_remove_answer("strange coins");
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc040D_10DE;
	message("\"Why, 'tis the money used in the sea-city of Fawn. See the gems in the center!\"");
	say();
	message("\"If thou desirest, I can exchange those coins for valuable Moonshadian guilders.\"");
	say();
	goto labelFunc040D_10E2;
labelFunc040D_10DE:
	message("\"I cannot tell thee what the coin is unless I see it, but if it isn't green and glowing, 'tis worthless.\"");
	say();
labelFunc040D_10E2:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1124;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_111D;
	var0006 = true;
labelFunc040D_111D:
	UI_add_answer(var0005);
labelFunc040D_1124:
	case "skull" attend labelFunc040D_1199:
	UI_remove_answer("skull");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc040D_114F;
	message("\"How quaint. Take it with thee when thou leavest...\"");
	say();
	goto labelFunc040D_1157;
labelFunc040D_114F:
	message("\"A skull?! I know nothing about bones! Perhaps Magister Fedabiblio could help thee.\"");
	say();
	gflags[0x010E] = true;
labelFunc040D_1157:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1199;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_1192;
	var0006 = true;
labelFunc040D_1192:
	UI_add_answer(var0005);
labelFunc040D_1199:
	case "bloody hand" attend labelFunc040D_1230:
	UI_remove_answer("bloody hand");
	if (!Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000)) goto labelFunc040D_11DA;
	message("\"What dost thou have there? Why, 'tis moving...\"");
	say();
	Func097F(0xFFF3, "@Ah!!!@", 0x0000);
	UI_set_schedule_type(0xFFF3, 0x0014);
	goto labelFunc040D_11EE;
labelFunc040D_11DA:
	message("\"How repugnant.\"");
	say();
	message("\"Probably the work of the Goblins -- I have heard that they are most crude, though they do not bother us here on this island.\"");
	say();
	message("\"Or perhaps one of the Mages hath been experimenting again in the forbidden arts.\"");
	say();
	message("\"Mortegro doth have an interest in Death, and goodness knows what the Mad Mage might be doing!\"");
	say();
	gflags[0x0117] = true;
labelFunc040D_11EE:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1230;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_1229;
	var0006 = true;
labelFunc040D_1229:
	UI_add_answer(var0005);
labelFunc040D_1230:
	case "plain shield" attend labelFunc040D_12A5:
	UI_remove_answer("plain shield");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc040D_125B;
	message("\"Those colors are the hues worn by the Monitorians. The shield must have come from a pikeman.\"");
	say();
	goto labelFunc040D_1263;
labelFunc040D_125B:
	message("\"Perhaps Ernesto at the Winery could help thee. 'Tis said that he is good with weapons and such.\"");
	say();
	gflags[0x0118] = true;
labelFunc040D_1263:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_12A5;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_129E;
	var0006 = true;
labelFunc040D_129E:
	UI_add_answer(var0005);
labelFunc040D_12A5:
	case "glowing rock" attend labelFunc040D_1332:
	UI_remove_answer("glowing rock");
	if (!(var0001 || gflags[0x0119])) goto labelFunc040D_12DE;
	if (!var0001) goto labelFunc040D_12CF;
	message("\"Put that away! I hope that no one saw...\"");
	say();
	message("\"Dost thou not know that it is a crime to possess Stoneheart! It is a most dangerous substance.\"");
	say();
	goto labelFunc040D_12D3;
labelFunc040D_12CF:
	message("\"Thou dost know that it is a crime to possess Stoneheart! It drives men into lunacy!\"");
	say();
labelFunc040D_12D3:
	message("\"Thou shouldst discard it in some safe place, such as a remote isle or distant mountaintop.\"");
	say();
	gflags[0x0119] = true;
	goto labelFunc040D_12F0;
labelFunc040D_12DE:
	message("\"I'm not sure of what thou speakest, but perhaps Pothos the Apothecary could identify it for thee.\"");
	say();
	gflags[0x011A] = true;
	if (!gflags[0x00D9]) goto labelFunc040D_12F0;
	message("\"Sadly, his shop is closed today. He hath not been seen for some time.\"");
	say();
labelFunc040D_12F0:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1332;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_132B;
	var0006 = true;
labelFunc040D_132B:
	UI_add_answer(var0005);
labelFunc040D_1332:
	case "fish-net stockings" attend labelFunc040D_13EF:
	UI_remove_answer("fish-net stockings");
	var0010 = Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001);
	if (!var0010) goto labelFunc040D_1363;
	message("\"Those are very interesting, but too daring for a nice girl to wear, methinks.\"");
	say();
	goto labelFunc040D_1367;
labelFunc040D_1363:
	message("\"I think I know the stockings thou art speaking of, but I am not certain...\"");
	say();
labelFunc040D_1367:
	message("\"I do not stock such goods any more, but I know where they can be obtained -- Fawn, the sea-city.\"");
	say();
	var000C = Func0992(0xFFFE, "@But thou used to sell these stockings?@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc040D_13AD;
	UI_set_conversation_slot(0x0000);
	if (!var0010) goto labelFunc040D_13A1;
	message("\"Oh, yes. To the Sorceress of the Night, Selenia. But she hath been absent from this city for many weeks now.\"");
	say();
	message("\"This stocking might be a clue to her strange disappearance! Thou shouldst take this to the Chief Ranger!\"");
	say();
	gflags[0x0106] = true;
	goto labelFunc040D_13AD;
labelFunc040D_13A1:
	message("\"Well, not having seen thy stocking, I cannot be sure. But it sounds like it might be the kind which I used to sell to the Sorceress of the Night.\"");
	say();
	message("\"Perhaps this is a clue to the strange disappearance of Selenia!\"");
	say();
	gflags[0x0106] = true;
labelFunc040D_13AD:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_13EF;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_13E8;
	var0006 = true;
labelFunc040D_13E8:
	UI_add_answer(var0005);
labelFunc040D_13EF:
	case "brown bottle" attend labelFunc040D_1492:
	UI_remove_answer("brown bottle");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0000)) goto labelFunc040D_1435;
	message("\"Could I see thy bottle? Hmm... A bitter ale of some kind.\"");
	say();
	message("\"If I were thee, I'd discard this bile and replace it with some of our excellent Moonshadian wine. If thou desirest some, simply inquire at the Winery on the west side of town.\"");
	say();
	var000C = Func0992(0xFFFF, "@Can we go?@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc040D_1450;
labelFunc040D_1435:
	message("\"Perhaps thou shouldst inquire at the Winery. Ernesto is most knowledgeable about wines.\"");
	say();
	var000C = Func0992(0xFFFF, "@I enjoy visiting wineries!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc040D_1450:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1492;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_148B;
	var0006 = true;
labelFunc040D_148B:
	UI_add_answer(var0005);
labelFunc040D_1492:
	case "nothing more" attend labelFunc040D_14CE:
	if (!(var000B == 0x0001)) goto labelFunc040D_14AF;
	UI_pop_answers();
	message("\"I wish I could have been of more help to thee...\"");
	say();
	goto labelFunc040D_14CE;
labelFunc040D_14AF:
	if (!(var000B > 0x0001)) goto labelFunc040D_14CA;
	UI_pop_answers();
	var000B = (var000B - 0x0001);
	goto labelFunc040D_14AF;
labelFunc040D_14CA:
	message("\"Is there anything else I can help thee with?\"");
	say();
labelFunc040D_14CE:
	case "provisions" attend labelFunc040D_14EC:
	message("\"The owner keeps the shop well-stocked with all of the most useful goods.\"");
	say();
	if (!(!var000A)) goto labelFunc040D_14E9;
	message("\"But I am afraid that prices are rather high these days, now that the ships no longer sail.\"");
	say();
	var000A = true;
labelFunc040D_14E9:
	Func080C();
labelFunc040D_14EC:
	case "exchange" attend labelFunc040D_14F7:
	Func080B();
labelFunc040D_14F7:
	case "bye" attend labelFunc040D_1521:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@I must be going.@", 0x0000);
	Func097F(0xFFF3, "@Do return sometime!@", 0x0002);
	Func08FF();
	goto labelFunc040D_1524;
labelFunc040D_1521:
	goto labelFunc040D_0309;
labelFunc040D_1524:
	endconv;
labelFunc040D_1525:
	return;
}


