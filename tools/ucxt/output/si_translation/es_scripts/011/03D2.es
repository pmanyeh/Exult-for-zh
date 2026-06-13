#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern void Func0821 0x821 ();
extern void Func0822 0x822 ();
extern void Func0823 0x823 ();
extern void Func0824 0x824 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func03D2 shape#(0x3D2) ()
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

	var0000 = UI_get_npc_id(item);
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = Func0954();
	var0004 = Func0942(0xFFFD);
	var0005 = Func0942(0xFFFF);
	var0006 = Func0942(0xFFFE);
	var0007 = false;
	var0008 = false;
	var0009 = false;
	var000A = false;
	if (!(event == 0x0001)) goto labelFunc03D2_0059;
	item->Func07D1();
	UI_set_schedule_type(item, 0x0003);
labelFunc03D2_0059:
	if (!(event == 0x0009)) goto labelFunc03D2_09CF;
	UI_show_npc_face0(0xFECA, 0x0000);
	if (!(var0000 == false)) goto labelFunc03D2_0087;
	message("\"A human. How interesting. What dost thou want?\"");
	say();
	UI_add_answer(["Who art thou?", "bye"]);
	goto labelFunc03D2_00A1;
labelFunc03D2_0087:
	message("\"Greetings, ");
	message(var0002);
	message(". How may I be of service to thee?\"");
	say();
	UI_add_answer(["information", "riddles", "bye"]);
labelFunc03D2_00A1:
	converse attend labelFunc03D2_09CE;
	case "Who art thou?" attend labelFunc03D2_019E:
	UI_remove_answer("Who art thou?");
	message("\"My, what an impudent hatchling. Thou hast the gall to march into my home, walk up to my presence on thy tiny, ridiculous legs, and dare to ask my name?!\"");
	say();
	message("\"I think that I shall be the one to ask the questions. We shall begin by asking thee what thou art called and why thou hast come to my domain.\"");
	say();
	var000B = Func0956(["I am the Avatar", ("I am " + var0002)]);
	if (!(var000B == "I am the Avatar")) goto labelFunc03D2_00E4;
	message("\"How interesting.\"");
	say();
	UI_set_npc_id(item, 0x0001);
labelFunc03D2_00E4:
	if (!(var000B == ("I am " + var0002))) goto labelFunc03D2_00FE;
	message("\"I see.\"");
	say();
	UI_set_npc_id(item, 0x0001);
labelFunc03D2_00FE:
	message("\"Thou dost not look like those humans who call themselves Ophidians, but I canst smell their spore upon thee.\"");
	say();
	message("\"Art thou an official envoy from Serpent's Fang?\"");
	say();
	var000C = Func0955();
	if (!var000C) goto labelFunc03D2_0119;
	message("\"Hmmm. I suppose I can tolerate thy presence for a few moments.\"");
	say();
	goto labelFunc03D2_011D;
labelFunc03D2_0119:
	message("\"I thought as much! Thou dost not have that irrational look in thy eyes as do those ill-mannered Ophidians.\"");
	say();
labelFunc03D2_011D:
	message("\"Now then, why hast thou come to my domain?\"");
	say();
	var000D = Func0956(["No reason", "I'm looking for something", "I'm lost"]);
	if (!(var000D == "No reason")) goto labelFunc03D2_014D;
	message("\"I see. Well then, ");
	message(var0003);
	message(" ");
	message(var0002);
	message(", it hath been many years since one of thy kind hath dared to enter my domain.\"");
	say();
labelFunc03D2_014D:
	if (!(var000D == "I'm looking for something")) goto labelFunc03D2_0166;
	message("\"Yes, well... are not we all. Ahem. I suppose that I should not bore thee with my sophomoric philosophy.\"");
	say();
	message("\"Well, I won't ask thee what it is that thou are searching for. However, if thou art willing to stay a while I might be inclined to help thee find whatever it is thou dost seek.\"");
	say();
	UI_add_answer("help");
labelFunc03D2_0166:
	if (!(var000D == "I'm lost")) goto labelFunc03D2_017B;
	message("\"I'm sorry to hear that. I myself rarely venture far from my domain.\"");
	say();
	UI_add_answer("rarely");
labelFunc03D2_017B:
	message("\"Now that I know something about thee, it is only fair that I tell thee that my name is Draxinar. My friends, however, call me 'Stumpy'.\"");
	say();
	message("\"If thou dost desire to stay for a while I shall not prevent thee. Indeed, thy company would be most welcome.\"");
	say();
	message("\"And perhaps if thou art willing, I shall puzzle thee with my riddles.\"");
	say();
	message("\"Now then, how may I help thee?\"");
	say();
	UI_add_answer(["riddles", "information", "company", "Stumpy?"]);
labelFunc03D2_019E:
	case "riddles" attend labelFunc03D2_02C3:
	UI_push_answers();
	UI_remove_answer("riddles");
	if (!var0007) goto labelFunc03D2_01BE;
	message("\"As I have said before, I am very good at riddles. Art thou sure that thou doth want to play?\"");
	say();
	goto labelFunc03D2_01C6;
labelFunc03D2_01BE:
	message("\"I don't like to boast, but I daresay there is no better riddlemaster than myself! Art thou sure thou doth want to play?\"");
	say();
	var0007 = true;
labelFunc03D2_01C6:
	if (!Func0955()) goto labelFunc03D2_02B4;
	if (!((!gflags[0x0309]) && ((!gflags[0x030A]) && ((!gflags[0x030B]) && (!gflags[0x030C]))))) goto labelFunc03D2_01ED;
	message("\"Excellent! We shall start with a simple riddle.\"");
	say();
	message("\"If thou dost answer it correctly I shall give thee a more dificult riddle.\"");
	say();
	Func0821();
labelFunc03D2_01ED:
	if (!(gflags[0x0309] && ((!gflags[0x030A]) && ((!gflags[0x030B]) && (!gflags[0x030C]))))) goto labelFunc03D2_021D;
	message("\"Thou didst solve my first riddle. Shall I tell thee a slightly more dificult riddle?\"");
	say();
	if (!Func0955()) goto labelFunc03D2_0212;
	Func0822();
	goto labelFunc03D2_021D;
labelFunc03D2_0212:
	message("\"So be it. Perhaps thou wilt enjoy a riddle later.\"");
	say();
	UI_add_answer("bye");
labelFunc03D2_021D:
	if (!(gflags[0x0309] && (gflags[0x030A] && ((!gflags[0x030B]) && (!gflags[0x030C]))))) goto labelFunc03D2_024C;
	message("\"Thou didst solve my first two riddles. Dost thou want to hear another riddle?\"");
	say();
	if (!Func0955()) goto labelFunc03D2_0241;
	Func0823();
	goto labelFunc03D2_024C;
labelFunc03D2_0241:
	message("\"So be it. Perhaps thou wilt enjoy a riddle later.\"");
	say();
	UI_add_answer("bye");
labelFunc03D2_024C:
	if (!(gflags[0x0309] && (gflags[0x030A] && (gflags[0x030B] && (!gflags[0x030C]))))) goto labelFunc03D2_0277;
	message("\"Thou hath solved my first three riddles. Doth thou wish to try a more dificult one?\"");
	say();
	if (!Func0955()) goto labelFunc03D2_0273;
	message("\"Very well. See if thou canst solve my last riddle!\"");
	say();
	Func0824();
	goto labelFunc03D2_0277;
labelFunc03D2_0273:
	message("\"So be it. Perhaps thou wilt enjoy a riddle later.\"");
	say();
labelFunc03D2_0277:
	if (!(gflags[0x0309] && (gflags[0x030A] && (gflags[0x030B] && gflags[0x030C])))) goto labelFunc03D2_02B1;
	message("\"Thou hath solved all of mine riddles. Doth thou wish to hear them again?\"");
	say();
	if (!Func0955()) goto labelFunc03D2_02AD;
	message("\"As thy wish. I shall start again with Rhys...\"");
	say();
	gflags[0x0309] = false;
	gflags[0x030A] = false;
	gflags[0x030B] = false;
	gflags[0x030C] = false;
	Func0821();
	goto labelFunc03D2_02B1;
labelFunc03D2_02AD:
	message("\"I understand perfectly. Why wouldst thou, who hast already solved my riddles, want to hear them again?\"");
	say();
labelFunc03D2_02B1:
	goto labelFunc03D2_02BF;
labelFunc03D2_02B4:
	message("\"That is unfortunate. I had hoped to stump thee with my riddles. Later, perhaps, thou wilt change thy mind.\"");
	say();
	UI_add_answer("bye");
labelFunc03D2_02BF:
	UI_pop_answers();
labelFunc03D2_02C3:
	case "information" attend labelFunc03D2_02E6:
	UI_remove_answer("information");
	message("\"And what dost thou wish to know?\"");
	say();
	UI_add_answer(["people", "places", "things"]);
labelFunc03D2_02E6:
	case "Stumpy?" attend labelFunc03D2_034F:
	UI_remove_answer("Stumpy?");
	if (!(var0008 == true)) goto labelFunc03D2_034B;
	message("\"As thou hast probably guessed by now, my friends started calling me 'Stumpy' because I loved to stump them with my riddles.\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0348;
	var000F = "@That is one of the worst nicknames I have ever\r\n\t\t\t\t\t\theard!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc03D2_0348:
	goto labelFunc03D2_034F;
labelFunc03D2_034B:
	message("\"Tis my nickname. Perhaps when I know thee better, I shall tell thee the reason I was given this nickname...\"");
	say();
labelFunc03D2_034F:
	case "company" attend labelFunc03D2_0369:
	UI_remove_answer("company");
	message("\"It hath been years since I last talked with anyone. Thou wouldst not believe how lonely the life of a dragon can be.\"");
	say();
	UI_add_answer("lonely");
labelFunc03D2_0369:
	case "lonely" attend labelFunc03D2_037C:
	UI_remove_answer("lonely");
	message("\"Everyone fears us. Dragons, that is. In the process of defending myself from countless attacks I have killed many men. Those who have come before thee let their weapons do the talking.\"");
	say();
labelFunc03D2_037C:
	case "help" attend labelFunc03D2_038F:
	UI_remove_answer("help");
	message("\"Indeed. I know that I do not look it, but I am several centuries old. Although I have lived in this area a mere dozen decades, I have managed to learn quite a few things...\"");
	say();
labelFunc03D2_038F:
	case "rarely" attend labelFunc03D2_03A9:
	UI_remove_answer("rarely");
	message("\"My cave hast grown comfortable. I see little reason to traipse about the hinterlands like some hatchling, especially when one considers the many hazards in this area.\"");
	say();
	UI_add_answer("hazards");
labelFunc03D2_03A9:
	case "hazards" attend labelFunc03D2_03DF:
	UI_remove_answer("hazards");
	if (!(var0009 == true)) goto labelFunc03D2_03CE;
	message("\"I have already mentioned the Opidian civil war, but I don't think thou art aware of the the liche known as Aram-Dol.\"");
	say();
	UI_add_answer("Aram-Dol");
	goto labelFunc03D2_03DF;
labelFunc03D2_03CE:
	message("\"Truly thou art not from these parts if thou art not aware of the civil war the Ophidians wage against each other, or the perils of Aram-Dol's domain!\"");
	say();
	UI_add_answer(["civil war", "Aram-Dol"]);
labelFunc03D2_03DF:
	case "Ophidians" attend labelFunc03D2_03F9:
	UI_remove_answer("Ophidians");
	message("\"Yes, I have heard of these people and I don't particularly care for them.\"");
	say();
	UI_add_answer("don't care for them");
labelFunc03D2_03F9:
	case "The Fiend" attend labelFunc03D2_0463:
	UI_remove_answer("The Fiend");
	message("\"I have heard a tale about a mad human who is known as 'The Fiend'. Apparently he is very dangerous.\"");
	say();
	message("\"Doesn't it strike\tthee as odd that the most evil creatures in these caverns are humans?\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0463;
	var000F = "@I suppose there has never been a dragon that was evil, eh?!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@Bloody Wyrm!@", 0x0000);
labelFunc03D2_0463:
	case "civil war" attend labelFunc03D2_049B:
	UI_remove_answer("civil war");
	if (!(var0009 == true)) goto labelFunc03D2_0493;
	message("\"I have mentioned this war to thee already. Shall I repeat what I said?\"");
	say();
	if (!Func0955()) goto labelFunc03D2_0490;
	message("\"Very well.\"");
	say();
	message("\"The tribe of humans known as the Ophidians wage war upon one another. I do not know much about these humans.\"");
	say();
	message("\"They seem to worship the powers of Order and Chaos.\"");
	say();
labelFunc03D2_0490:
	goto labelFunc03D2_049B;
labelFunc03D2_0493:
	message("\"Aye. The tribe of humans known as the Ophidians wage war upon one another. I do not know much about these humans. They seem to worship the powers of Order and Chaos.\"");
	say();
	var0009 = true;
labelFunc03D2_049B:
	case "Aram-Dol" attend labelFunc03D2_05A6:
	UI_remove_answer("Aram-Dol");
	if (!(var000A == true)) goto labelFunc03D2_0536;
	message("\"I have already told described the liche to thee. Shall I tell thee about the liche again?\"");
	say();
	if (!Func0955()) goto labelFunc03D2_052F;
	message("\"A more evil or cunning creature thou wilt not find! Fortunately, the liche rarely ventures from its lair.");
	say();
	message("\"If thou art fond of thy life I would advise against venturing into Aram-Dol's domain.\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0517;
	var000F = "@The Avatar has fought the undead before and triumphed!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@<PCName> is not afraid!@", 0x0000);
labelFunc03D2_0517:
	message("\"Aram-Dol is not easily reached. The liche hath surrounded his lair with many creatures.\"");
	say();
	message("\"If I were thee, I would avoid his domain... Although, I have heard that the liche possesses two fabulous treasures.\"");
	say();
	UI_add_answer(["fabulous treasures", "creatures"]);
	goto labelFunc03D2_0533;
labelFunc03D2_052F:
	message("\"Very well. What shall we discuss next?\"");
	say();
labelFunc03D2_0533:
	goto labelFunc03D2_0599;
labelFunc03D2_0536:
	message("\"A more evil or cunning creature thou wilt not find! Fortunately, the liche rarely ventures from its lair.");
	say();
	message("\"If thou art fond of thy life I would advise against venturing into Aram-Dol's domain.\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0591;
	var000F = "@The Avatar has fought the undead before and triumphed!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@<PCName> is not afraid!@", 0x0000);
labelFunc03D2_0591:
	message("\"Aram-Dol is not easily reached. The liche hath surrounded his lair with many creatures.\"");
	say();
	message("\"If I were thee, I would avoid his domain... Although, I have heard that the liche possesses two fabulous treasures.\"");
	say();
labelFunc03D2_0599:
	UI_add_answer(["fabulous treasures", "creatures"]);
labelFunc03D2_05A6:
	case "Longtooth" attend labelFunc03D2_05C0:
	UI_remove_answer("Longtooth");
	message("\"Longtooth is my aunt's son. A sorrier\tdragon thou shalt never find! Of course, what happened to him was not his fault.\"");
	say();
	UI_add_answer("what happened?");
labelFunc03D2_05C0:
	case "what happened?" attend labelFunc03D2_05DF:
	UI_remove_answer("what happened?");
	message("\"Longtooth was once smart, handsome, and very fierce. Many hatchlings looked up to Longtooth, and many females wanted to mate with him. Then one day some iron-plated human warrior came along and tried to kill him.\"");
	say();
	message("\"Longtooth thought the idea of a human challenging him, a prime example of dragonkind, was funny. So Longtooth obliged the human and the fight began.\"");
	say();
	message("\"What my cousin was not aware of was that the human had friends who were hiding. When Longtooth had the warrior pinned, the jackals struck from ambush. Longtooth managed to escape, but he's never been the same since.\"");
	say();
	message("\"Why, he can't even out riddle a goblin!\"");
	say();
labelFunc03D2_05DF:
	case "fabulous treasures" attend labelFunc03D2_05F6:
	UI_remove_answer("fabulous treasures");
	message("\"One of these treasures, I have heard tell, is a weapon -- an axe, I believe -- of unimagineable power. The other treasure is a pair of gauntlets that purportedly once belonged to some thief known\tas 'Karas the Quick'.\"");
	say();
	message("\"I have not heard what power the gauntlets possess.\"");
	say();
labelFunc03D2_05F6:
	case "creatures" attend labelFunc03D2_0614:
	UI_remove_answer("creatures");
	message("\"The liche uses dead humans that he has reanimated as guardians. To reach Aram-Dol, one must traverse a veritable gauntlet of undead creatures.\"");
	say();
	message("\"There are also the abominations called the 'Arachnians'.\"");
	say();
	UI_add_answer("Arachnians");
labelFunc03D2_0614:
	case "Arachnians" attend labelFunc03D2_067E:
	UI_remove_answer("Arachnians");
	message("\"In years past, Aram-Dol took many humans as prisoners. By means of the blackest sorcery, Aram-Dol fused the torsos of men with the bulbous bodies of giant spiders.\"");
	say();
	message("\"These creatures are fiercesome fighters. They are cunning and evil. Pray to whatever gods thou doth worship if thou art caught by the Arachnians. They eat their prey alive...\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_067E;
	var000F = "@By the virtues! Such foul creatures should be exterminated!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@Eaten alive. Yuch!@", 0x0000);
labelFunc03D2_067E:
	case "treasure" attend labelFunc03D2_06A4:
	UI_remove_answer("treasure");
	message("\"It hath been many years since one of thy kind ventured into my domain. Those who came before thought they could slay me with their bits of iron and steal my tresure!");
	say();
	message("\"They were wrong. They paid for their foolishness and greed with their lives.\"");
	say();
	message("\"Aye, tis true. I have a treasure. What self-respecting dragon doesn't have a treasure horde?\"");
	say();
	message("\"Of course, there is my aunt's son Longtooth. A sorrier dragon thou shalt never find! Of course, what happened to him was not his fault.\"");
	say();
	UI_add_answer("Longtooth");
labelFunc03D2_06A4:
	case "people" attend labelFunc03D2_0721:
	UI_remove_answer("people");
	message("\"People! Hrrmphh. Thou dost realize, I hope, that not every sentient creature likes to be characterized in human terminology.\"");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_070A;
	var000F = "@Thou art an insufferable wyrm!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@What arrogance!@", 0x0000);
labelFunc03D2_070A:
	message("\"To answer thy question, however, I know, or have heard of, many 'people'. Who, in particular, wert thou interested in?\"");
	say();
	UI_add_answer(["Ophidians", "The Fiend", "Aram-Dol", "Longtooth"]);
labelFunc03D2_0721:
	case "not human" attend labelFunc03D2_07B5:
	UI_remove_answer("not human");
	message("\"Aye. This new commander is some sort of magical construct. I believe the Ophidians call these creatures 'automatons'. I daresay that it is probably an improvement...\"");
	say();
	UI_add_answer("automatons");
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_078E;
	var000F = "@Now see here! There is no cause to be insulting!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@Insolent dragon!@", 0x0000);
labelFunc03D2_078E:
	if (!(var000E == 0xFFE4)) goto labelFunc03D2_07B5;
	var000F = "@I'll take that as a compliment!@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc03D2_07B5:
	case "places" attend labelFunc03D2_07D8:
	UI_remove_answer("places");
	message("\"What place art thou interested in?\"");
	say();
	UI_add_answer(["Serpent's Fang", "The Maze", "home"]);
labelFunc03D2_07D8:
	case "home" attend labelFunc03D2_0811:
	UI_remove_answer("home");
	message("\"I am quite familiar with my own cave, although I doubt that thou wouldst find it quite as charming as I do...\" Art thou really interested in learning about my humble domicile?\"");
	say();
	var0010 = Func0955();
	if (!var0010) goto labelFunc03D2_080D;
	message("\"Thou art a most unusual human.\"");
	say();
	message("\"I moved to this cave one hundred and twelve years ago. It was not\teasy finding the perfect cave -- I have my standards, afterall. And thou wouldst not believe how dificult it is to find a good cave.\"");
	say();
	message("\"Anyway, I had spent weeks searching and was about to give up the search when, quite by accident, I wandered into this cavern.\"");
	say();
	UI_add_answer("cavern");
	goto labelFunc03D2_0811;
labelFunc03D2_080D:
	message("\"I understand. I can not blame thee for not being interested. It is not a particularly fascinating topic.\"");
	say();
labelFunc03D2_0811:
	case "Serpent's Fang" attend labelFunc03D2_0833:
	UI_remove_answer("Serpent's Fang");
	message("\"Serpent's Fang is what the Ophidians call that Keep of theirs. I don't really know much about the place except that the commander of the few humans that are left is not human.\"");
	say();
	message("\"Frankly, I do not\tcare to know much about that place.\"");
	say();
	message("\"As long as those humans stay out of my domain I shall reciprocate by not trespassing upon theirs.\"");
	say();
	UI_add_answer("not human");
labelFunc03D2_0833:
	case "things" attend labelFunc03D2_084D:
	UI_remove_answer("things");
	message("\"My goodness! Thou art a curious one! I suppose that I should inform thee of the numerous hazards that are found within our subterranean realm.\"");
	say();
	UI_add_answer("hazards");
labelFunc03D2_084D:
	case "automatons" attend labelFunc03D2_0860:
	UI_remove_answer("automatons");
	message("\"I have heard that these constructs are absolutely obedient to their Ophidian masters, that they never tire, and that they do not need food!\"");
	say();
labelFunc03D2_0860:
	case "don't care for them" attend labelFunc03D2_0880:
	UI_remove_answer("don't care for them");
	message("\"The Ophidians are the ill-mannered humans who built the large Keep not far from this cavern. Only a few of them are left in that Keep, however.\"");
	say();
	UI_add_answer(["ill-mannered", "Keep"]);
labelFunc03D2_0880:
	case "Keep" attend labelFunc03D2_08A2:
	UI_remove_answer("Keep");
	message("\"The Ophidians call their keep 'Serpent's Fang'. I don't really know much about the place except that the commander of the few humans that are left is not human.\"");
	say();
	message("\"Frankly, I do not\tcare to know much about that place.\"");
	say();
	message("\"As long as those humans stay out of my domain I shall reciprocate by not trespassing upon theirs.\"");
	say();
	UI_add_answer("not human");
labelFunc03D2_08A2:
	case "ill-mannered" attend labelFunc03D2_08C4:
	UI_remove_answer("ill-mannered");
	message("\"Before the Ophidians came to these caverns there existed a natural balance\tamongst the creatures that lived here. There was conflict, to be sure, but there existed a rythym to life.\"");
	say();
	message("\"There was space and food enough for everyone. The Ophidians arrival disrupted the balance. They forced many creatures from their homes. And now they wage a war amongst themselves.\"");
	say();
	message("\"Truly. I think I shall never understand humans.\"");
	say();
	UI_add_answer("civil-war");
labelFunc03D2_08C4:
	case "civil-war" attend labelFunc03D2_08E8:
	UI_remove_answer("civil-war");
	message("\"Aye, these snake-lovers took up arms against one another. They have taken to slaughtering one another as easily as a hatchling takes to breathing fire...\"");
	say();
	message("\"They have been fighting for at least a year I think.\"");
	say();
	UI_add_answer(["why", "snake-lovers"]);
labelFunc03D2_08E8:
	case "why" attend labelFunc03D2_08FF:
	UI_remove_answer("why");
	message("\"I cannot say why you humans do the things you do: you are peculiar creatures, with odd customs and strange rituals.\"");
	say();
	message("\"All I know is that these Ophidians starting slaughtering each other about one year ago.\"");
	say();
labelFunc03D2_08FF:
	case "snake-lovers" attend labelFunc03D2_091D:
	UI_remove_answer("snake-lovers");
	message("\"As I have said, I know little of your human rituals, but I do know that these Ophidians worship snakes.\"");
	say();
	message("\"Now that I think about it, I remember hearing that they worship the forces of Order and Chaos, albeit in the forms of snakes.\"");
	say();
	UI_add_answer("Order and Chaos?");
labelFunc03D2_091D:
	case "Order and Chaos?" attend labelFunc03D2_0930:
	UI_remove_answer("Order and Chaos?");
	message("\"Tis a silly philosophy if thou dost ask me. The Ophidians, however, believe in their doctrines so well that they have taken up arms against one another!\"");
	say();
labelFunc03D2_0930:
	case "cavern" attend labelFunc03D2_094E:
	UI_remove_answer("cavern");
	message("\"These caverns are fairly large, a fact that suited me because I myself am fairly large.\"");
	say();
	message("\"This cave was perfect for me. I could come and go as I pleased, at least until Aram-Dol started expanding his territory.\"");
	say();
	UI_add_answer("territory");
labelFunc03D2_094E:
	case "territory" attend labelFunc03D2_096E:
	UI_remove_answer("territory");
	message("\"Many years ago Aram-Dol created the Arachnian creatures. The liche released these creatures into these caverns. The foul beasts killed everything within their path. The vile creatures even managed to attack me in mass! I was very nearly slain. Fortunately for me, the Arachnians have a weakness.\"");
	say();
	UI_add_answer(["weakness", "Arachnians"]);
labelFunc03D2_096E:
	case "weakness" attend labelFunc03D2_0989:
	UI_remove_answer("weakness");
	message("\"Aye, the bugs have a weakness: they are especially vulnerable to fire. I fried dozens of the monsters before they broke ranks and ran!\"");
	say();
	message("\"After that battle I caved-in some of the passageways near my cave and moved large boulders to block other entrances into my cave.\"");
	say();
	message("\"The tactic seems to have worked because I have had little trouble from the creatures since I erected the barriers.\"");
	say();
labelFunc03D2_0989:
	case "The Maze" attend labelFunc03D2_09A0:
	UI_remove_answer("The Maze");
	message("\"The Ophidians built other structures within these caverns besides that Keep of theirs. One of these structures is a maze. Although I have not been there, I have heard that it is extremely dificult.\"");
	say();
	message("\"I don't mean any offense to thee, but I think that any maze devised by the mind of man could easily be solved by any sensible dragon!\"");
	say();
labelFunc03D2_09A0:
	case "bye" attend labelFunc03D2_09CB:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(item, "@Fare thee well!@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	abort;
labelFunc03D2_09CB:
	goto labelFunc03D2_00A1;
labelFunc03D2_09CE:
	endconv;
labelFunc03D2_09CF:
	return;
}


