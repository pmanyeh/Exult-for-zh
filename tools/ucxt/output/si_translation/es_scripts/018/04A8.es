#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func086A 0x86A ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func04A8 object#(0x4A8) ()
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
	var var0011;
	var var0012;
	var var0013;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = UI_part_of_day();
	var0005 = false;
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc04A8_003F;
	var0004 = "day";
	goto labelFunc04A8_0045;
labelFunc04A8_003F:
	var0004 = "evening";
labelFunc04A8_0045:
	if (!(event == 0x0001)) goto labelFunc04A8_007B;
	UI_item_say(0xFE9C, "@Hello!@");
	0xFF58->Func07D1();
	Func097F(0xFF58, (("@Felicitations, " + var0000) + ".@"), 0x0002);
	UI_set_schedule_type(0xFF58, 0x0003);
labelFunc04A8_007B:
	if (!(event == 0x0009)) goto labelFunc04A8_087E;
	UI_run_schedule(0xFF58);
	UI_clear_item_say(0xFF58);
	UI_show_npc_face0(0xFF58, 0x0000);
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04A8_00BC;
	UI_set_schedule_type(0xFF58, 0x001F);
	UI_add_answer("leave");
	goto labelFunc04A8_00CA;
labelFunc04A8_00BC:
	UI_run_schedule(0xFF58);
	UI_add_answer("join");
labelFunc04A8_00CA:
	var0006 = UI_get_item_flag(0xFF58, 0x001C);
	if (!gflags[0x0004]) goto labelFunc04A8_01F4;
	if (!(!UI_get_item_flag(0xFF22, 0x0004))) goto labelFunc04A8_012B;
	message("\"I am not a cowardly man, ");
	message(var0000);
	message(", but I am powerfully glad to see thee again. I am in terrible trouble.\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc04A8_0121;
	message("\"In fact, I think that I will stay close by thee -- that will be safest for me!\"");
	say();
	UI_add_to_party(0xFF58);
	gflags[0x000F] = true;
	UI_remove_answer("join");
	UI_add_answer("leave");
labelFunc04A8_0121:
	UI_add_answer("trouble");
	goto labelFunc04A8_01DD;
labelFunc04A8_012B:
	if (!gflags[0x0137]) goto labelFunc04A8_0145;
	message("\"I hope that thy quest doth fare well, ");
	message(var0000);
	message(". Hast thou yet recovered the Rock Serpent?\"");
	say();
	UI_add_answer("Rock Serpent");
	goto labelFunc04A8_01DD;
labelFunc04A8_0145:
	if (!gflags[0x00FB]) goto labelFunc04A8_0158;
	message("\"I hope that thy quest doth fare well, ");
	message(var0000);
	message(". How might a humble man such as myself be of aid to thee?\"");
	say();
	goto labelFunc04A8_01DD;
labelFunc04A8_0158:
	message("\"If I were not quaking with fear, ");
	message(var0000);
	message(", I would go down on both knees before thee. I am so grateful for thine aid.\"");
	say();
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04A8_0180;
	UI_remove_from_party(0xFF58);
	Func086A();
	UI_remove_answer("leave");
labelFunc04A8_0180:
	UI_set_new_schedules(0xFF58, [0x0000, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x000C, 0x001A, 0x0004], [0x09A7, 0x0778, 0x08C7, 0x0714, 0x099F, 0x078F, 0x08BE, 0x0707, 0x08B6, 0x070C]);
	UI_set_schedule_type(0xFF58, 0x000C);
	UI_add_answer("grateful");
labelFunc04A8_01DD:
	UI_add_answer("happenings");
	if (!gflags[0x0149]) goto labelFunc04A8_01F1;
	UI_add_answer("thy death");
labelFunc04A8_01F1:
	goto labelFunc04A8_0262;
labelFunc04A8_01F4:
	if (!(var0003 == 0x000F)) goto labelFunc04A8_0251;
	if (!(var0006 == false)) goto labelFunc04A8_023A;
	UI_set_item_flag(0xFF58, 0x001C);
	Func09AC(0xFF58, 0xFFFF, 0x0000, 0x000C);
	UI_set_schedule_type(0xFF58, 0x0014);
	message("\"I am Stefano, late of Moonshade, and obtainer of rarities...\"");
	say();
	message("\"I was unjustly imprisoned here, ");
	message(var0000);
	message("! I'll freely admit that I am no fighter... But I have a quick wit and information that should help us pass out of this foul place. Perhaps if we join together, we have some small chance of escape.\"");
	say();
	goto labelFunc04A8_023E;
labelFunc04A8_023A:
	message("\"How may I aid thee, Avatar?\"");
	say();
labelFunc04A8_023E:
	UI_add_answer(["Moonshade", "rarities", "information"]);
	goto labelFunc04A8_0262;
labelFunc04A8_0251:
	message("\"I see that thou art still hale and whole, Avatar!\"");
	say();
	UI_add_answer(["Moonshade", "rarities"]);
labelFunc04A8_0262:
	if (!(gflags[0x000F] && ((!UI_get_item_flag(0xFF58, 0x0006)) && UI_get_cont_items(0xFF58, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc04A8_028C;
	UI_add_answer("belongings");
labelFunc04A8_028C:
	UI_add_answer(["bye"]);
labelFunc04A8_0296:
	converse attend labelFunc04A8_087D;
	case "thy death" attend labelFunc04A8_02BE:
	UI_remove_answer("thy death");
	gflags[0x0149] = false;
	message("\"Thou dost recall correctly -- I was dead when last we met...");
	say();
	message("\"Next I remember, this beautiful woman was standing over me. She kissed me, and a warmth spread throughout my body...\"");
	say();
	message("\"She said her name was Thoxa, and that I had to live in order to fulfill thy destiny, ");
	message(var0002);
	message(". And so I'm here.\"");
	say();
labelFunc04A8_02BE:
	case "change subject", "nothing more" attend labelFunc04A8_02EA:
	UI_pop_answers();
	if (!var0005) goto labelFunc04A8_02DA;
	message("\"Umm... I apologize for droning on and on. What wouldst thou like to speak about?\"");
	say();
	goto labelFunc04A8_02EA;
labelFunc04A8_02DA:
	message("\"My talk bores thee, eh? So thou dost think that I drone on and on with my long-winded stories...\"");
	say();
	message("\"Well, actually, 'tis the truth. A bad habit that I'd like to be rid of.\"");
	say();
	message("\"At any rate, what dost thou desire to speak of?\"");
	say();
	var0005 = true;
labelFunc04A8_02EA:
	case "belongings" attend labelFunc04A8_02FC:
	UI_remove_answer("belongings");
	Func086A();
labelFunc04A8_02FC:
	case "Rock Serpent" attend labelFunc04A8_0327:
	UI_remove_answer("Rock Serpent");
	message("\"Thou hast but to look within the vault behind mine old house, ");
	message(var0002);
	message(". I will not touch it again. It hath brought me enough bad luck...\"");
	say();
	message("\"I am not a bold adventurer like thee, ");
	message(var0002);
	message(". I have no need of such things, but I am sure that thou wilt find it useful.\"");
	say();
	message("\"And I thank thee once again for saving my life. I shall never forget thee.\"");
	say();
	gflags[0x00FB] = true;
labelFunc04A8_0327:
	case "happenings" attend labelFunc04A8_0344:
	UI_remove_answer("happenings");
	message("\"A terrible, glowing being came to Moonshade, and battled against all of the Mages! I believe them to be dead...\"");
	say();
	message("\"I did not stay to be sure, but came here to hide myself. 'Tis the end of the world, ");
	message(var0002);
	message("!\"");
	say();
labelFunc04A8_0344:
	case "grateful" attend labelFunc04A8_037E:
	UI_remove_answer("grateful");
	message("\"I thank thee a thousand times over for saving my life, ");
	message(var0002);
	message("! There is no way for me to repay thee, but something I possess might be of use to thee on thy quest.\"");
	say();
	message("\"This is the key to the vault behind mine old house, which is west of the city. With it, thou wilt be able to retrieve the cursed Rock Serpent that hath caused me such trouble. Take it with my blessings!\"");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00C2, 0x0009, 0x0000, true);
	gflags[0x0137] = true;
labelFunc04A8_037E:
	case "trouble" attend labelFunc04A8_03AC:
	UI_remove_answer("trouble");
	message("\"This all started with a piece of work I did for the late MageLord, which involved procuring some stockings...\"");
	say();
	message("\"'Tis a long story, but to be brief, Columna the Green Witch hated me for what I did. She is dead now, but her curse lives on.\"");
	say();
	UI_push_answers();
	UI_add_answer(["curse", "stockings", "Columna", "change subject"]);
labelFunc04A8_03AC:
	case "curse" attend labelFunc04A8_03DB:
	UI_remove_answer("curse");
	message("\"I'd spit on her grave, if she had one, the hag!\"");
	say();
	message("\"From the depths of some hell, she hath summoned up a tireless warrior to pursue me!\"");
	say();
	message("\"'Tis a Death Knight, whose sole purpose is to slay the victim he is promised. Columna pledged my soul to this one.\"");
	say();
	message("\"Surely, thou canst save me! Slay him for me, and thou shalt have my most priceless reward!\"");
	say();
	UI_add_answer(["slay", "reward", "Where is he?"]);
labelFunc04A8_03DB:
	case "slay" attend labelFunc04A8_042D:
	UI_remove_answer("slay");
	message("\"Well, I don't know how to kill him. I only know that he is very, very tough. Mayhap immortal.\"");
	say();
	var0008 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var0008 != 0xFF58) && (var0008 != 0xFE9C))) goto labelFunc04A8_0429;
	UI_show_npc_face1(var0008, 0x0000);
	message("\"Perhaps nothing can stop a Death Knight.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc04A8_0429:
	message("\"Don't let me discourage thee from making the attempt to slay the thing. My life depends on it, friend!\"");
	say();
labelFunc04A8_042D:
	case "reward" attend labelFunc04A8_0448:
	UI_remove_answer("reward");
	message("\"Well, thou dost see, I have this item which might interest thee. In fact, I think it belongs to thee. I suspect one of those magic storms brought it my way.\"");
	say();
	message("\"If I was an honorable man, I suppose I'd give it to thee straight away. But I'm not. So if thou canst kill the Death Knight, the Rock Serpent is thine. If not...\"");
	say();
	message("\"And do not think of killing me and taking the Serpent. I have it well hidden.\"");
	say();
labelFunc04A8_0448:
	case "Where is he?" attend labelFunc04A8_045B:
	UI_remove_answer("Where is he?");
	message("\"Wish I knew. He doth charge at me when I least expect it. Sometimes he appears from thin air!\"");
	say();
labelFunc04A8_045B:
	case "Moonshade" attend labelFunc04A8_0489:
	UI_remove_answer("Moonshade");
	message("\"No, I'm no mage... Though they tell me that I have a bit of the ability. But what good is that when the entire city is ruled by Adepts? No, no, 'tis not for me!\"");
	say();
	message("\"Give me a good challenging search any day! The harder something is to find, the better I like it.\"");
	say();
	UI_push_answers();
	UI_add_answer(["ability", "Adepts", "search", "change subject"]);
labelFunc04A8_0489:
	case "stockings" attend labelFunc04A8_04A4:
	UI_remove_answer("stockings");
	message("\"Filbercio promised me a small but substantial fortune if I could procure a certain pair of moonsilk stockings.\"");
	say();
	message("\"It seems that he was eager to enjoy the pleasures of one of the female Mages, and felt that these stockings would provide leverage for his arguments -- if thou dost see where I am reaching...\"");
	say();
	message("\"So I stole -- er, acquired -- the stockings for him. But then the lightning stole them from me. Filbercio accused me of swindling him, and tossed me in Dungeon Freedom!\"");
	say();
labelFunc04A8_04A4:
	case "Columna" attend labelFunc04A8_04C3:
	UI_remove_answer("Columna");
	message("\"If thou must know -- Columna is married to Melino, an old and doddering Mage but no fool. 'Tis no surprise that she lusts for young Torrissio!\"");
	say();
	message("\"The stockings were evidence, since only Columna wears this sort, and because I found them in Torrissio's manor.\"");
	say();
	message("\"However, Columna found out that I stole them, and she wants mine head on a platter. Literally!\"");
	say();
	message("\"I'm glad the old witch is dead. I only wish her curse had died with her...\"");
	say();
labelFunc04A8_04C3:
	case "ability" attend labelFunc04A8_04E8:
	UI_remove_answer("ability");
	message("\"Magic! It seems as if some dark magic is following me these days...\"");
	say();
	message("\"I sometimes carry a spell scroll or two... May as well make use of any edge I can acquire.\"");
	say();
	if (!(var0003 == 0x000F)) goto labelFunc04A8_04E8;
	message("\"In fact, if we escape, I suggest that thou shouldst acquire as many spell scrolls as thou canst -- they come in very handy!\"");
	say();
labelFunc04A8_04E8:
	case "Adepts" attend labelFunc04A8_050C:
	UI_remove_answer("Adepts");
	message("\"If Moonshade weren't ruled by the Adepts, canst thou imagine what it would be like trying to govern all those powerful mages? With all their fragile egos? -- LARGE, fragile egos.\"");
	say();
	message("\"If there's one central problem with the Adepts, 'tis that they have no regard for those with little or no magic. However, in some ways, that makes my life easier.\"");
	say();
	UI_add_answer(["egos", "easier"]);
labelFunc04A8_050C:
	case "egos" attend labelFunc04A8_053E:
	UI_remove_answer("egos");
	message("\"Thou dost not know the half of it! One time I was passing time at the Blue Boar while Frigidazzi was there.\"");
	say();
	message("\"Rotoluncia entered and rather pointedly remarked that Frigidazzi was looking excessively rumpled that day. And suddenly they were at each other...\"");
	say();
	message("\"Of course, they were pretty much evenly matched. Until Celennia showed up that is. But 'tis that I refer to... Fragile egos and hot tempers, and magic to top it. Not a safe combination.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Frigidazzi", "Rotoluncia", "Celennia", "nothing more"]);
labelFunc04A8_053E:
	case "Frigidazzi" attend labelFunc04A8_055D:
	UI_remove_answer("Frigidazzi");
	message("\"Thou knowest the kind of beauty that artisans create? 'Tis like unto Frigidazzi -- like a cold marble carving.\"");
	say();
	message("\"Oh, I'll grant that there's a hot predator under that shroud of ice, but few have seen it.\"");
	say();
	message("\"Like the cold spells she excels in, Frigidazzi certainly knows how to lower the temperature in a room...\"");
	say();
	message("\"'Tis a wonder that Filbercio hath not died of frostbite by now! I cannot discern if he's a brave man... or merely stupid!\"");
	say();
labelFunc04A8_055D:
	case "Rotoluncia" attend labelFunc04A8_057A:
	UI_remove_answer("Rotoluncia");
	message("\"Dead, is she? At thine hand?\"");
	say();
	message("\"I'm impressed at thy skills, ");
	message(var0000);
	message("! Most could not have killed the Red Witch.\"");
	say();
labelFunc04A8_057A:
	case "Celennia" attend labelFunc04A8_059F:
	UI_remove_answer("Celennia");
	message("\"I would rather face the ire of Frigidazzi AND Rotoluncia than that of Celennia! She's worse than a cat, ");
	message(var0000);
	message("! She'll toy with thee before she kills thee -- She wants thee to have time to consider what will happen to thee, and why.\"");
	say();
	message("\"Celennia was Frigidazzi's dearest friend until they had a fight. I do not know what it was about but I wouldn't be surprised if it was caused by Frigidazzi being friendly with the MageLord... I think Celennia thought she was to be his next companion.\"");
	say();
	message("\"All I know is that the fight was spectacular, and Celennia was on Hawk's ship the next day, bound for Sleeping Bull. They say she doth have relatives in Monitor...\"");
	say();
	var0009 = true;
labelFunc04A8_059F:
	case "Vasculio" attend labelFunc04A8_05C1:
	UI_remove_answer("Vasculio");
	message("\"I'm not sure I can speak of it here, in this awful place. Old Fedabiblio uses it as a tale to frighten the novices... And I'll admit that it made an impression on me.\"");
	say();
	message("\"Vasculio was an Adept who lived outside of the Strictures. He tortured and killed without restraint, using death agony to feed power into his spells.\"");
	say();
	message("\"The Council put him to death, but his power had grown beyond even that limitation. They found his grave empty not long after burial... And they say he still wanders the world looking for new victims.\"");
	say();
	UI_add_answer("Strictures");
labelFunc04A8_05C1:
	case "Strictures" attend labelFunc04A8_05DE:
	UI_remove_answer("Strictures");
	message("\"The Strictures are the rules that all mages must obey, novice and Adept alike. They address what experimentation can be done, what reagents can be used or sold... things like that.\"");
	say();
	message("\"The Strictures are meant to keep mages from abandoning all bonds of civilized behavior in pursuit of knowledge. As thou shouldst know, ");
	message(var0000);
	message(", there are some things in the world that would be better unknown.\"");
	say();
labelFunc04A8_05DE:
	case "easier" attend labelFunc04A8_060C:
	UI_remove_answer("easier");
	message("\"As I said, ");
	message(var0000);
	message(", I acquire rarities. And sometimes those items are... previously owned, shall we say?\"");
	say();
	message("\"But Adepts, being the pompous lot they are, fail to see anything other than a magical attack as a threat.\"");
	say();
	message("\"Most Adepts resort to simple physical traps to guard their mansions. Of course, there's always the automatons to deal with... But once I know that secret, their home is as good as mine!\"");
	say();
	UI_add_answer(["physical traps", "automatons"]);
labelFunc04A8_060C:
	case "physical traps" attend labelFunc04A8_0623:
	UI_remove_answer("physical traps");
	message("\"Oh, it could be anything from sliding walls, to fireballs that shoot out of the wall, to secret doors.  And dealing with most of those are easy enough, if thou art careful.\"");
	say();
	message("\"The automatons are harder to deal with...\"");
	say();
labelFunc04A8_0623:
	case "automatons" attend labelFunc04A8_0636:
	UI_remove_answer("automatons");
	message("\"Those are the constructs that Torrissio makes. They are quite fast and fierce fighters. Definitely not what thou wouldst care to encounter in a dark hallway, I'll tell thee! I still have the scars to prove it...\"");
	say();
labelFunc04A8_0636:
	case "search" attend labelFunc04A8_064D:
	UI_remove_answer("search");
	message("\"When people hire my services, they know exactly what they need and where it is. Or perhaps I should say that they know whose mansion it is in.\"");
	say();
	message("\"From there I must determine how to enter, and when. And then I have to outwit the Adept who wished to keep it hidden from my talents. I have yet to be outdone, I might add.\"");
	say();
labelFunc04A8_064D:
	case "rarities" attend labelFunc04A8_0674:
	UI_remove_answer("rarities");
	message("\"I'll admit that that title covers quite a bit... Scrolls, magical apparatus, lab equipment, reagents. Anything that a client thinks is of value -- that's what I mean by rarities.\"");
	say();
	UI_push_answers();
	UI_add_answer(["magical apparatus", "client", "change subject"]);
labelFunc04A8_0674:
	case "magical apparatus" attend labelFunc04A8_068B:
	UI_remove_answer("magical apparatus");
	message("\"Wands, crystal balls... things like that.\"");
	say();
	message("\"Of course I'll never admit to anything in specific. I value my life too much. Unless I'm actually caught in the act, no one can prove anything... And I stay alive a bit longer. Thou mightest say it's a game of sorts.\"");
	say();
labelFunc04A8_068B:
	case "client" attend labelFunc04A8_06A8:
	UI_remove_answer("client");
	message("\"Oh, no! Ask no more! I guarantee my clients complete secrecy.\"");
	say();
	message("\"If I ever forget that promise, dealing with mages, I'll be very dead, very fast. Or at least I hope I'll be dead... There are a few drawbacks to knowing anything about magic, ");
	message(var0000);
	message(". All the alternatives to being dead come too readily to mind!\"");
	say();
labelFunc04A8_06A8:
	case "information" attend labelFunc04A8_06D0:
	UI_remove_answer("information");
	message("\"Somewhere, within this labyrinth, there are two switches that must be thrown... at the same time, in order to continue to the exit. I do not know where it is exactly, but I'm sure that it will be apparent.\"");
	say();
	message("\"Without me to aid thee, thou hast no chance of winning free of this place for all thy prowess. And without thee, I have no hope of surmounting what lies in the next room.\"");
	say();
	UI_push_answers();
	UI_add_answer(["next room", "change subject"]);
labelFunc04A8_06D0:
	case "next room" attend labelFunc04A8_06FE:
	UI_remove_answer("next room");
	message("\"One of the things I bless about my peculiar line of work is the ability to move silently, ");
	message(var0000);
	message(". It may be the only thing that saved my life this time...\"");
	say();
	message("\"When I came into this room, I heard some sort of commotion in the next room. When I sneaked into the entrance, all I saw was a mage and a VERY, VERY large monster before I ran back in here.\"");
	say();
	message("\"Last time I looked, they were still in there...\"");
	say();
	UI_add_answer(["mage", "monster"]);
labelFunc04A8_06FE:
	case "mage" attend labelFunc04A8_0718:
	UI_remove_answer("mage");
	message("\"I did not recognize him. But by the robes, I judged him a mage. I have heard that a few foolhardy mages have attempted to sneak into these tunnels in search of Stoneheart. Few who try ever return to the outside world.\"");
	say();
	UI_add_answer("Stoneheart");
labelFunc04A8_0718:
	case "Stoneheart" attend labelFunc04A8_0738:
	UI_remove_answer("Stoneheart");
	message("\"It is forbidden to possess Stoneheart, ");
	message(var0000);
	message(", and for good reason. It is the basis for the reagent that fueled all of Vasculio's spells -- and some say it can steal a man's wits. It is very dangerous.\"");
	say();
	UI_add_answer("Vasculio");
labelFunc04A8_0738:
	case "monster" attend labelFunc04A8_0759:
	UI_remove_answer("monster");
	message("\"I... I think it was a... a dragon!\"");
	say();
	message("\"Oh, please, ");
	message(var0000);
	message("! Thou must let me join thee!\"");
	say();
	message("\"Without mine aid thou canst not hope to escape, and I am no fighter! Without thee I am a dead man!\"");
	say();
labelFunc04A8_0759:
	case "join" attend labelFunc04A8_078B:
	if (!gflags[0x0239]) goto labelFunc04A8_076E;
	message("\"No, but thank thee for asking.\"");
	say();
	goto labelFunc04A8_078B;
labelFunc04A8_076E:
	UI_remove_answer("join");
	UI_add_answer("leave");
	message("\"Thou and I, we'll do good together!\"");
	say();
	UI_add_to_party(0xFF58);
	gflags[0x000F] = true;
labelFunc04A8_078B:
	case "leave" attend labelFunc04A8_07B7:
	UI_remove_answer("leave");
	if (!gflags[0x0004]) goto labelFunc04A8_07AD;
	message("\"But that thing will kill me, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc04A8_07B7;
labelFunc04A8_07AD:
	message("\"But thou needest mine aid, ");
	message(var0000);
	message("!\"");
	say();
labelFunc04A8_07B7:
	case "bye" attend labelFunc04A8_087A:
	if (!(gflags[0x0004] && (!gflags[0x00FA]))) goto labelFunc04A8_0814;
	message("\"Wait. I almost forgot about this...\"");
	say();
	message("\"Found this object when I happened to be passing through one of the manors, if thou knowest what I mean...\"");
	say();
	message("\"Let me give this to thee, as a token of my great esteem for thine ability to save my life.\"");
	say();
	message("\"It looks to be one of the Serpent Teeth that Mad Erstam used to collect.\"");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x022F, 0x0000, 0x000E, 0x0000, true);
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x04A8], 0x0014);
	gflags[0x00FA] = true;
labelFunc04A8_0814:
	UI_remove_npc_face0();
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04A8_0840;
	Func097F(0xFF58, "@Pleased to be of service.@", 0x0002);
	Func097F(0xFE9C, "@Thanks!@", 0x0000);
	goto labelFunc04A8_0879;
labelFunc04A8_0840:
	Func097F(0xFE9C, "@So long!@", 0x0000);
	if (!(gflags[0x0004] && (!UI_get_item_flag(0xFF22, 0x0004)))) goto labelFunc04A8_086D;
	Func097F(0xFF58, "@Please protect me...@", 0x0000);
	goto labelFunc04A8_0879;
labelFunc04A8_086D:
	Func097F(0xFF58, "@'Til we meet again!@", 0x0002);
labelFunc04A8_0879:
	abort;
labelFunc04A8_087A:
	goto labelFunc04A8_0296;
labelFunc04A8_087D:
	endconv;
labelFunc04A8_087E:
	if (!(event == 0x000E)) goto labelFunc04A8_089F;
	Func097F(0xFF58, "@Eeek! A spider!@", 0x0002);
	Func097F(0xFF58, "@Kill it, Avatar!@", 0x0016);
	abort;
labelFunc04A8_089F:
	if (!(event == 0x000A)) goto labelFunc04A8_0989;
	var000A = UI_find_nearest(0xFE9C, 0x0313, 0x0003);
	var000B = UI_find_nearest(0xFF58, 0x0313, 0x0003);
	if (!(var000A && var000B)) goto labelFunc04A8_097F;
	var000C = UI_direction_from(0xFE9C, var000A);
	var000D = UI_direction_from(0xFF58, var000B);
	var000E = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x59, var000C, (byte)0x52, "@Now, Stefano!@", (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var000E = UI_execute_usecode_array(0xFF58, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x27, 0x0002, (byte)0x59, var000D, (byte)0x27, 0x0002, (byte)0x52, "@All right!@", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var000E = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x27, 0x000C, (byte)0x55, 0x0313]);
	var000E = UI_execute_usecode_array(var000B, [(byte)0x23, (byte)0x27, 0x000C, (byte)0x55, 0x0313, (byte)0x55, 0x04A8]);
labelFunc04A8_097F:
	UI_set_schedule_type(0xFF58, 0x001F);
labelFunc04A8_0989:
	if (!(event == 0x0002)) goto labelFunc04A8_0BB5;
	if (!gflags[0x0007]) goto labelFunc04A8_0A2C;
	gflags[0x0007] = false;
	UI_show_npc_face0(0xFF58, 0x0000);
	message("\"We are back in Moonshade! This means that we have won our freedom!\" *\"What a team we made! With thy muscle and mine intellect we showed them who they can and cannot keep in that prison. Thank thee, Avatar.\" *\"I must away now for other duties call. But if thou art ever in need of my talents, do but call and I shall accommodate thee.\"");
	say();
	Func097F(0xFF58, "@See thee someday...@", 0x0000);
	Func097F(0xFE9C, "@So long, Stefano.@", 0x0005);
	UI_remove_from_party(0xFF58);
	Func086A();
	UI_set_new_schedules(0xFF58, [0x0000, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x000C, 0x001A, 0x0004], [0x09A7, 0x0778, 0x08C7, 0x0714, 0x099F, 0x078F, 0x08BE, 0x0707, 0x08B6, 0x070C]);
	UI_set_schedule_type(0xFF58, 0x0014);
	UI_run_schedule(0xFF58);
	abort;
	goto labelFunc04A8_0BB5;
labelFunc04A8_0A2C:
	if (!gflags[0x0004]) goto labelFunc04A8_0B45;
	if (!UI_get_item_flag(0xFF22, 0x0004)) goto labelFunc04A8_0A40;
	abort;
labelFunc04A8_0A40:
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x04A8], (UI_get_random(0x0064) + 0x0032));
	if (!UI_npc_nearby(0xFF58)) goto labelFunc04A8_0B42;
	UI_play_music(0x001E, Func09A0(0x0005, 0x0001));
	var0007 = UI_approach_avatar(0xFF22, 0x0078, 0x0028);
	if (!(!var0007)) goto labelFunc04A8_0AE0;
	var0007 = UI_get_object_position(0xFE9C);
	var0007[0x0001] = (var0007[0x0001] + 0x000A);
	UI_move_object(0xFF22, var0007);
	UI_sprite_effect(0x001A, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
labelFunc04A8_0AE0:
	UI_set_alignment(0xFF22, 0x0002);
	UI_set_schedule_type(0xFF22, 0x0000);
	UI_set_opponent(0xFF22, 0xFF58);
	UI_set_oppressor(0xFF22, 0xFF58);
	UI_clear_item_say(0xFF22);
	Func097F(0xFF22, "@Die, Stefano!@", 0x0000);
	UI_clear_item_say(0xFF58);
	Func097F(0xFF58, "@Save me!@", 0x0002);
	UI_set_schedule_type(0xFF58, 0x0000);
	UI_set_attack_mode(0xFF58, 0x0007);
labelFunc04A8_0B42:
	goto labelFunc04A8_0BB5;
labelFunc04A8_0B45:
	var000F = UI_find_nearby(item, 0x00E9, 0x0028, 0x0000);
	enum();
labelFunc04A8_0B57:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc04A8_0BB5;
	if (!(UI_get_item_frame(var0012) == 0x0002)) goto labelFunc04A8_0BB2;
	UI_set_item_frame(var0012, 0x0001);
	var0013 = UI_get_object_position(var0012);
	UI_sprite_effect(0x000D, (var0013[0x0001] - 0x0002), (var0013[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
labelFunc04A8_0BB2:
	goto labelFunc04A8_0B57;
labelFunc04A8_0BB5:
	return;
}


