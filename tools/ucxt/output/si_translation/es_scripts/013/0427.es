#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0957 0x957 (var var0000);
extern void Func09B0 0x9B0 (var var0000);
extern var Func0955 0x955 ();

void Func0427 object#(0x427) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFFD9, 0x001C);
	var0004 = Func0994();
	var0005 = Func0942(0xFFFD);
	var0006 = Func0942(0xFFFF);
	var0007 = Func0942(0xFFFE);
	if (!(event == 0x0001)) goto labelFunc0427_0077;
	UI_item_say(0xFE9C, "@Hail, minstrel!@");
	0xFFD9->Func07D1();
	Func097F(0xFFD9, (("@Greetings, " + var0000) + "!@"), 0x0005);
	UI_set_schedule_type(0xFFD9, 0x0003);
labelFunc0427_0077:
	if (!(event == 0x0009)) goto labelFunc0427_06A0;
	UI_run_schedule(0xFFD9);
	UI_clear_item_say(0xFFD9);
	UI_show_npc_face0(0xFFD9, 0x0000);
	if (!(var0004 == 0x001F)) goto labelFunc0427_00D1;
	if (!(var0003 == true)) goto labelFunc0427_00B0;
	message("\"I had wondered when I would encounter thee here, Avatar. Thou wouldst like some answers, no doubt.\" *\"Or perhaps I could sing thee a song to ease thy way.\"");
	say();
	goto labelFunc0427_00BE;
labelFunc0427_00B0:
	message("\"Welcome, fellow dreamer! I am Byrin, a gleeman by trade.\" *\"Thou dost look perplexed. I'll warrant that thou wouldst like some answers. Or perhaps I could sing thee a song to ease thy way.\"");
	say();
	UI_set_item_flag(0xFFD9, 0x001C);
labelFunc0427_00BE:
	UI_add_answer(["answers", "song", "bye"]);
	goto labelFunc0427_0122;
labelFunc0427_00D1:
	if (!(var0003 == false)) goto labelFunc0427_0108;
	if (!(gflags[0x003E] == true)) goto labelFunc0427_00F7;
	if (!(var0001 == true)) goto labelFunc0427_00F0;
	message("\"Ah, welcome to the Sleeping Bull, noble lady! I am Byrin, a gleeman... or minstrel, if thou wilt. I know several tales or tunes that might stir thy brave heart.\"");
	say();
	goto labelFunc0427_00F4;
labelFunc0427_00F0:
	message("\"Welcome to the Sleeping Bull, brave pikeman! I am Byrin, a gleeman... or minstrel, if thou wilt. I know many tales and tunes of valor and adventure.\"");
	say();
labelFunc0427_00F4:
	goto labelFunc0427_00FB;
labelFunc0427_00F7:
	message("\"Thou art welcome to the Sleeping Bull, fellow traveller! I am Byrin, a wandering gleeman... or minstrel, if thou wilt. I know many tales and tunes to help pass the evenings.\"");
	say();
labelFunc0427_00FB:
	UI_set_item_flag(0xFFD9, 0x001C);
	goto labelFunc0427_0112;
labelFunc0427_0108:
	message("\"");
	message(var0002);
	message("! What a pleasure to see thee here... I knew that thou couldst not stay long away from my tales and tunes!\"");
	say();
labelFunc0427_0112:
	UI_add_answer(["tales", "tunes", "bye"]);
labelFunc0427_0122:
	converse attend labelFunc0427_069F;
	case "answers" attend labelFunc0427_013F:
	message("\"Thou mayest find that the answers only give rise to more questions. But I shall do my best to help thee.\" *\"First thou must know that thou dost walk in the land of dreamers. There are only two ways to enter or exit here.\"");
	say();
	UI_remove_answer("answers");
	UI_add_answer("two ways");
labelFunc0427_013F:
	case "two ways" attend labelFunc0427_0159:
	message("\"The first way to enter this realm is from the safety of thy bed... In thy nightly slumber.\" *\"The second way to enter here is far more perilous... By falling prey to the enchantments in Gorlab Swamp.\"");
	say();
	UI_remove_answer("two ways");
	UI_add_answer("Gorlab Swamp");
labelFunc0427_0159:
	case "Gorlab Swamp" attend labelFunc0427_0179:
	message("\"Long ago -- even before the serpent people made this land their home -- a sorcerer named Rabindrinath swore to destroy the peaceful town of Gorlab. But the town healer, Siranush, opposed him and the evil spell went awry.\" *\"The inhabitants of the town were not destroyed, but trapped within the realm of dreams... Along with the mad sorceror... And any who dare enter the environs of Gorlab.\"");
	say();
	UI_remove_answer("Gorlab Swamp");
	UI_add_answer(["Rabindrinath", "Siranush"]);
labelFunc0427_0179:
	case "Rabindrinath" attend labelFunc0427_0193:
	message("\"Rabindrinath hath struggled mightily against Siranush across the span of time. Each of his attacks have been repelled... Much to his displeasure.\"");
	say();
	UI_remove_answer("Rabindrinath");
	UI_add_answer("displeasure");
labelFunc0427_0193:
	case "displeasure" attend labelFunc0427_01A6:
	message("\"Rabindrinath vents his anger by troubling the dreams of those who venture here.\"");
	say();
	UI_remove_answer("displeasure");
labelFunc0427_01A6:
	case "Siranush" attend labelFunc0427_01C0:
	message("\"Siranush is a strong-willed woman who hath repelled all of Rabindrinath's attacks on her people. She is no sorcerer, and I fear that her strength will one day fail her.\" *\"If Siranush is vanquished, I am sure that Rabindrinath will turn his evil intent on the wandering dreamers. Without Siranush's guidance, those who enter here might never leave.\"");
	say();
	UI_remove_answer("Siranush");
	UI_add_answer("leave");
labelFunc0427_01C0:
	case "leave" attend labelFunc0427_01DA:
	message("\"As I said before, there are two ways to enter the land of dreamers. If thou didst come here from the comfort of thy bed, thou canst simply awaken and thou wilt return to the land of waking men.\" *\"But, if thou didst come here through the enchantments in the Swamp, thou must die here to return to thy body.\"");
	say();
	UI_remove_answer("leave");
	UI_add_answer("die");
labelFunc0427_01DA:
	case "die" attend labelFunc0427_01ED:
	message("\"By die, I do not mean that thou must cease living. I mean that thy perceived life here must end...\" *\"Thy death here returns thee to thy body. So long as Siranush prevails and thy body lives, thou canst return to the world of waking men.\" *\"But if Siranush should fall, or thy body die... Thou shalt remain trapped here for all time.\"");
	say();
	UI_remove_answer("die");
labelFunc0427_01ED:
	case "song" attend labelFunc0427_031B:
	message("\"I know many songs...\" ~\"Dost thou wish to hear one I have already sung?\" ~\"Or dost thou wish to hear a new song?\"");
	say();
	var0008 = [];
	if (!(Func0957(["old song", "new song"]) == 0x0001)) goto labelFunc0427_0281;
	if (!(gflags[0x01D3] == true)) goto labelFunc0427_0224;
	var0008 = (var0008 & 0x0001);
labelFunc0427_0224:
	if (!(gflags[0x01D4] == true)) goto labelFunc0427_0236;
	var0008 = (var0008 & 0x0002);
labelFunc0427_0236:
	if (!(gflags[0x01D5] == true)) goto labelFunc0427_0248;
	var0008 = (var0008 & 0x0003);
labelFunc0427_0248:
	if (!(gflags[0x01D6] == true)) goto labelFunc0427_025A;
	var0008 = (var0008 & 0x0004);
labelFunc0427_025A:
	if (!(gflags[0x01D7] == true)) goto labelFunc0427_026C;
	var0008 = (var0008 & 0x0005);
labelFunc0427_026C:
	if (!(gflags[0x01D8] == true)) goto labelFunc0427_027E;
	var0008 = (var0008 & 0x0006);
labelFunc0427_027E:
	goto labelFunc0427_02ED;
labelFunc0427_0281:
	if (!(gflags[0x01D3] == false)) goto labelFunc0427_0293;
	var0008 = (var0008 & 0x0001);
labelFunc0427_0293:
	if (!(gflags[0x01D4] == false)) goto labelFunc0427_02A5;
	var0008 = (var0008 & 0x0002);
labelFunc0427_02A5:
	if (!(gflags[0x01D5] == false)) goto labelFunc0427_02B7;
	var0008 = (var0008 & 0x0003);
labelFunc0427_02B7:
	if (!(gflags[0x01D6] == false)) goto labelFunc0427_02C9;
	var0008 = (var0008 & 0x0004);
labelFunc0427_02C9:
	if (!(gflags[0x01D7] == false)) goto labelFunc0427_02DB;
	var0008 = (var0008 & 0x0005);
labelFunc0427_02DB:
	if (!(gflags[0x01D8] == false)) goto labelFunc0427_02ED;
	var0008 = (var0008 & 0x0006);
labelFunc0427_02ED:
	if (!(var0008 == [])) goto labelFunc0427_02FE;
	message("\"I'm sorry... Thou hast heard all of my songs.\"");
	say();
	goto labelFunc0427_031B;
labelFunc0427_02FE:
	var0009 = UI_get_random(UI_get_array_size(var0008));
	var000A = var0008[var0009];
	Func09B0(var000A);
labelFunc0427_031B:
	case "tales" attend labelFunc0427_0346:
	message("\"For those with an adventurous spirit, I can tell thee of the northern savages.\"");
	say();
	message("\"For those who wish to hear of a lost civilization, I can tell thee of the people who left the ruins on this continent.\"");
	say();
	message("\"For those who would hear a tale of bitter bravery, I can tell thee of the lost king.\"");
	say();
	UI_remove_answer("tales");
	UI_add_answer(["northern savages", "lost culture", "lost king"]);
labelFunc0427_0346:
	case "northern savages" attend labelFunc0427_0386:
	message("\"Once thou dost leave the warm lands of Man, thou dost come into the realm of the northern savages. These creatures have faces that strongly resemble that of a normal man, but they are covered head to foot in a shaggy fur pelt.\"");
	say();
	message("\"Some say that these creatures are some lost tribe of Man that hath adapted to the cold.\" ~\"Still others claim that the savages are a mage-created race that guards some great, mystical secret.\"");
	say();
	message("\"None can say if they are intelligent.\" ~\"They build no structures and speak no recognizable language.\"");
	say();
	if (!(gflags[0x01D5] == false)) goto labelFunc0427_037F;
	message("\"There is also a song about the northern savages.\" ~\"Wouldst thou care to hear it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_037B;
	message("\"All right, then...\"");
	say();
	Func09B0(0x0003);
	goto labelFunc0427_037F;
labelFunc0427_037B:
	message("\"Perhaps some other time, then.\"");
	say();
labelFunc0427_037F:
	UI_remove_answer("northern savages");
labelFunc0427_0386:
	case "lost culture" attend labelFunc0427_03A1:
	message("\"Long ago, before any of the cities thou knowest today were built, there was a race of Man who worshipped three great elemental serpents. Some followed one of fire. Others followed one of ice. And still others followed one of earth.\"");
	say();
	message("\"As only the serpent of earth could withstand both the fire and the ice of the other serpents, it possessed the most power. The fire and ice serpents were violently opposed to each other, but were held in check by the serpent of earth.\"");
	say();
	message("\"Then the serpent of earth lost power. The fire and ice serpents warred for supremacy. When the battle ended, it mattered not which serpent had won... for the land was destroyed and all the worshippers lay dead.\"");
	say();
	UI_remove_answer("lost culture");
labelFunc0427_03A1:
	case "lost king" attend labelFunc0427_046D:
	message("\"To the north of here stand two castles, seemingly left empty by the ravages of time. But neither is truly empty, for they both hold the ghosts of trust betrayed.\"");
	say();
	message("\"In one majestic castle a lady waits for her faithless lover who pledged his love and never returned. In the other, a father and ruler, driven mad for the loss of daughter and erstwhile friend, took his people beyond the cares of time.\"");
	say();
	message("\"All the trapped souls await the return of the one whose desertion forever changed the land he had sworn to protect. All wait for the return of the lost king... and revenge!\"");
	say();
	if (!(var0007 == true)) goto labelFunc0427_03DA;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Wait! What art thou talking about? It seems... But no! It could not be!\" *\"Hast thou any more to tell of this @lost king@? Dost thou know his name?\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Few in truth have ventured within that castle, lord. They fear the wrath of she who dwells there...\" *\"And none have ever returned from the other castle. But the name that is given for the lost king is... Lord Shamino.\"");
	say();
	UI_remove_npc_face1();
labelFunc0427_03DA:
	if (!(var0006 == true)) goto labelFunc0427_03FB;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"It can't be!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0427_03FB:
	if (!(var0005 == true)) goto labelFunc0427_041C;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"There must be some mistake!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0427_041C:
	if (!(gflags[0x01D3] == false)) goto labelFunc0427_0441;
	message("\"There is a song about the lady.\" ~\"Wouldst thou care to hear it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_043D;
	message("\"It is a sad ballad indeed...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc0427_0441;
labelFunc0427_043D:
	message("\"Another time, then.\"");
	say();
labelFunc0427_0441:
	if (!(gflags[0x01D8] == false)) goto labelFunc0427_0466;
	message("\"There is a song about the other castle, as well.\" ~\"Wouldst thou care to hear it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_0462;
	message("\"Prepare thyselves...\"");
	say();
	Func09B0(0x0006);
	goto labelFunc0427_0466;
labelFunc0427_0462:
	message("\"Another time, then.\"");
	say();
labelFunc0427_0466:
	UI_remove_answer("lost king");
labelFunc0427_046D:
	case "tunes" attend labelFunc0427_04C5:
	if (!(gflags[0x003E] == true)) goto labelFunc0427_04AD;
	if (!(var0001 == true)) goto labelFunc0427_0499;
	message("\"For thee, brave lady, I would sing of dreams, or perhaps of tragedy. Of course, although I sing to entertain others, I hope for some small token of appreciation... if possible. Singing is thirsty business.\"");
	say();
	UI_add_answer(["dreams", "tragedy"]);
	goto labelFunc0427_04AA;
labelFunc0427_0499:
	message("\"For thee, noble sir, I would sing a heart-rending ballad, or perhaps long-lost lore. Of course, although I sing to entertain others, I hope for some small token of appreciation... if possible. Singing is thirsty business.\"");
	say();
	UI_add_answer(["ballad", "lore"]);
labelFunc0427_04AA:
	goto labelFunc0427_04BE;
labelFunc0427_04AD:
	message("\"I sense that thou dost like adventure. For thee I would sing of strange beings and strange places. Of course, although I sing to entertain others, I hope for some small token of appreciation... if possible. Singing is thirsty business.\"");
	say();
	UI_add_answer(["strange beings", "strange places"]);
labelFunc0427_04BE:
	UI_remove_answer("tunes");
labelFunc0427_04C5:
	case "dreams" attend labelFunc0427_050D:
	if (!(gflags[0x01D7] == true)) goto labelFunc0427_04FC;
	message("\"I believe that thou hast already heard that one.\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_04EE;
	message("\"My pleasure...\"");
	say();
	Func09B0(0x0005);
	goto labelFunc0427_04F9;
labelFunc0427_04EE:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc0427_04F9:
	goto labelFunc0427_0506;
labelFunc0427_04FC:
	message("\"I hope thou dost enjoy it...\"");
	say();
	Func09B0(0x0005);
labelFunc0427_0506:
	UI_remove_answer("dreams");
labelFunc0427_050D:
	case "tragedy" attend labelFunc0427_0555:
	if (!(gflags[0x01D8] == true)) goto labelFunc0427_0544;
	message("\"I seem to remember singing this for thee before...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_0536;
	message("\"One more time then...\"");
	say();
	Func09B0(0x0006);
	goto labelFunc0427_0541;
labelFunc0427_0536:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc0427_0541:
	goto labelFunc0427_054E;
labelFunc0427_0544:
	message("\"Relax and be at ease...\"");
	say();
	Func09B0(0x0006);
labelFunc0427_054E:
	UI_remove_answer("tragedy");
labelFunc0427_0555:
	case "ballad" attend labelFunc0427_059D:
	if (!(gflags[0x01D3] == true)) goto labelFunc0427_058C;
	message("\"I am sure that thou hast already...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_057E;
	message("\"As thou wishest...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc0427_0589;
labelFunc0427_057E:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc0427_0589:
	goto labelFunc0427_0596;
labelFunc0427_058C:
	message("\"I believe I remember it...\"");
	say();
	Func09B0(0x0001);
labelFunc0427_0596:
	UI_remove_answer("ballad");
labelFunc0427_059D:
	case "lore" attend labelFunc0427_05E5:
	if (!(gflags[0x01D4] == true)) goto labelFunc0427_05D4;
	message("\"I fear that thou dost already know this one...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_05C6;
	message("\"Thou canst sing along if thou wishest...\"");
	say();
	Func09B0(0x0002);
	goto labelFunc0427_05D1;
labelFunc0427_05C6:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc0427_05D1:
	goto labelFunc0427_05DE;
labelFunc0427_05D4:
	message("\"I think this be the right key...\"");
	say();
	Func09B0(0x0002);
labelFunc0427_05DE:
	UI_remove_answer("lore");
labelFunc0427_05E5:
	case "strange beings" attend labelFunc0427_062D:
	if (!(gflags[0x01D5] == true)) goto labelFunc0427_061C;
	message("\"I have done this one for thee before...\" \"~Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_060E;
	message("\"Very well...\"");
	say();
	Func09B0(0x0003);
	goto labelFunc0427_0619;
labelFunc0427_060E:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc0427_0619:
	goto labelFunc0427_0626;
labelFunc0427_061C:
	message("\"Thou wilt like the tempo on this one...\"");
	say();
	Func09B0(0x0003);
labelFunc0427_0626:
	UI_remove_answer("strange beings");
labelFunc0427_062D:
	case "strange places" attend labelFunc0427_0675:
	if (!(gflags[0x01D6] == true)) goto labelFunc0427_0664;
	message("\"Thou knowest this one...\" \"~Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_0656;
	message("\"I am cheered that thou dost like it...\"");
	say();
	Func09B0(0x0004);
	goto labelFunc0427_0661;
labelFunc0427_0656:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc0427_0661:
	goto labelFunc0427_066E;
labelFunc0427_0664:
	message("\"Listen carefully...\"");
	say();
	Func09B0(0x0004);
labelFunc0427_066E:
	UI_remove_answer("strange places");
labelFunc0427_0675:
	case "bye" attend labelFunc0427_069C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell, gleeman!@", 0x0000);
	Func097F(0xFFD9, "@May thy path be smooth!@", 0x0005);
	goto labelFunc0427_069F;
labelFunc0427_069C:
	goto labelFunc0427_0122;
labelFunc0427_069F:
	endconv;
labelFunc0427_06A0:
	return;
}


