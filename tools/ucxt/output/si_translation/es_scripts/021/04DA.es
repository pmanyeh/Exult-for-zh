#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0957 0x957 (var var0000);
extern void Func09B0 0x9B0 (var var0000);
extern var Func0955 0x955 ();

void Func04DA object#(0x4DA) ()
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
	var0003 = UI_get_item_flag(0xFFD9, 0x001C);
	if (!(event == 0x0007)) goto labelFunc04DA_006F;
	UI_show_npc_face0(0xFFD9, 0x0000);
	message("\"Art thou insane? Why art thou attacking me? This is my dream!\" *\"If I had a two-handed sword, I would make mincemeat of thee!\" *\"I must awaken...\"");
	say();
	UI_remove_npc_face0();
	var0004 = UI_get_object_position(item);
	UI_play_sound_effect(0x004C);
	UI_sprite_effect(0x0007, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF26);
labelFunc04DA_006F:
	if (!(event == 0x0001)) goto labelFunc04DA_00A5;
	UI_item_say(0xFE9C, "@Hail, minstrel!@");
	0xFF26->Func07D1();
	Func097F(0xFF26, (("@Greetings, " + var0000) + "!@"), 0x0005);
	UI_set_schedule_type(0xFF26, 0x0003);
labelFunc04DA_00A5:
	if (!(event == 0x0009)) goto labelFunc04DA_05FB;
	UI_set_schedule_type(0xFF26, 0x000C);
	UI_show_npc_face0(0xFFD9, 0x0000);
	if (!(var0003 == true)) goto labelFunc04DA_00D0;
	message("\"I had wondered when I would encounter thee here, Avatar.\" ~\"I expect that thou wouldst like some answers, no doubt.\" *\"Or perhaps I could sing thee a song to ease thy way.\"");
	say();
	goto labelFunc04DA_00D4;
labelFunc04DA_00D0:
	message("\"Welcome, fellow dreamer!\" ~\"I am Byrin, a gleeman by trade.\" *\"Thou dost look perplexed. I'll warrant that thou wouldst like some answers.\" ~\"Or perhaps I could sing thee a song to ease thy way.\"");
	say();
labelFunc04DA_00D4:
	UI_add_answer(["answers", "song", "bye"]);
labelFunc04DA_00E4:
	converse attend labelFunc04DA_05FA;
	case "answers" attend labelFunc04DA_0101:
	message("\"Thou mayest find that the answers only give rise to more questions.\" ~\"But I shall do my best to help thee.\" *\"First thou shouldst know that thou dost walk in the land of dreamers.\" ~\"There are only two ways to enter or exit here.\"");
	say();
	UI_remove_answer("answers");
	UI_add_answer("two ways");
labelFunc04DA_0101:
	case "two ways" attend labelFunc04DA_011B:
	message("\"The first way to enter this realm is from the safety of thy bed...\" ~\"In thy nightly slumber.\" *\"The second way to enter here is far more perilous...\" ~\"By falling prey to the enchantments in Gorlab Swamp.\"");
	say();
	UI_remove_answer("two ways");
	UI_add_answer("Gorlab Swamp");
labelFunc04DA_011B:
	case "Gorlab Swamp" attend labelFunc04DA_013B:
	message("\"Long ago -- even before the serpent people made this land their home -- a sorceror named Rabindrinath swore to destroy the peaceful town of Gorlab.\" ~\"But the town healer, Siranush, opposed him and the evil spell went awry.\" *\"The inhabitants of the town were not destroyed, but were instead trapped\twithin the realm of dreams...\" ~\"Along with the mad sorceror...\" ~\"And any who dare enter the environs of Gorlab.\"");
	say();
	UI_remove_answer("Gorlab Swamp");
	UI_add_answer(["Rabindrinath", "Siranush"]);
labelFunc04DA_013B:
	case "Rabindrinath" attend labelFunc04DA_0155:
	message("\"Rabindrinath hath struggled mightily against Siranush across the span of time.\" ~\"Each of his attacks have been repelled...\" ~\"Much to his displeasure.\"");
	say();
	UI_remove_answer("Rabindrinath");
	UI_add_answer("displeasure");
labelFunc04DA_0155:
	case "displeasure" attend labelFunc04DA_0168:
	message("\"Rabindrinath releases his anger by troubling the thoughts of those who venture here within their dreams.\"");
	say();
	UI_remove_answer("displeasure");
labelFunc04DA_0168:
	case "Siranush" attend labelFunc04DA_0182:
	message("\"Siranush is a strong-willed woman who hath repelled all of Rabindrinath's attacks on her people.\" ~\"She is no sorceror, and I fear that her strength will one day fail her.\" *\"Were Siranush to be vanquished, I am sure that Rabindrinath would turn his evil intent on the wandering dreamers.\" ~\"Without Siranush's guidance, those who enter here might never leave.\"");
	say();
	UI_remove_answer("Siranush");
	UI_add_answer("leave");
labelFunc04DA_0182:
	case "leave" attend labelFunc04DA_019C:
	message("\"As I said before, there are two ways to enter the land of dreamers.\" ~\"If thou didst come here from the comfort of thy bed, thou canst simply awaken and thou wilt return to the land of waking men.\" *\"But, if thou didst come here through the enchantments in the Swamp, thou must die here to return to thy body.\"");
	say();
	UI_remove_answer("leave");
	UI_add_answer("die");
labelFunc04DA_019C:
	case "die" attend labelFunc04DA_01AF:
	message("\"By die, I do not mean that thou must cease living.\" ~\"I mean that thy perceived life here must end...\" *\"Thy death here returns thee to thy body.\" ~\"So long as Siranush prevails and thy body lives, thou canst return to the world of waking men.\" *\"But if Siranush should fall, or thy body die...\" ~\"thou shalt remain trapped here for all time.\"");
	say();
	UI_remove_answer("die");
labelFunc04DA_01AF:
	case "song" attend labelFunc04DA_02DD:
	message("\"I know many songs...\" ~\"Dost thou wish to hear one I have already sung?\" ~\"Or dost thou wish to hear a new song?\"");
	say();
	var0005 = [];
	if (!(Func0957(["old song", "new song"]) == 0x0001)) goto labelFunc04DA_0243;
	if (!(gflags[0x01D3] == true)) goto labelFunc04DA_01E6;
	var0005 = (var0005 & 0x0001);
labelFunc04DA_01E6:
	if (!(gflags[0x01D4] == true)) goto labelFunc04DA_01F8;
	var0005 = (var0005 & 0x0002);
labelFunc04DA_01F8:
	if (!(gflags[0x01D5] == true)) goto labelFunc04DA_020A;
	var0005 = (var0005 & 0x0003);
labelFunc04DA_020A:
	if (!(gflags[0x01D6] == true)) goto labelFunc04DA_021C;
	var0005 = (var0005 & 0x0004);
labelFunc04DA_021C:
	if (!(gflags[0x01D7] == true)) goto labelFunc04DA_022E;
	var0005 = (var0005 & 0x0005);
labelFunc04DA_022E:
	if (!(gflags[0x01D8] == true)) goto labelFunc04DA_0240;
	var0005 = (var0005 & 0x0006);
labelFunc04DA_0240:
	goto labelFunc04DA_02AF;
labelFunc04DA_0243:
	if (!(gflags[0x01D3] == false)) goto labelFunc04DA_0255;
	var0005 = (var0005 & 0x0001);
labelFunc04DA_0255:
	if (!(gflags[0x01D4] == false)) goto labelFunc04DA_0267;
	var0005 = (var0005 & 0x0002);
labelFunc04DA_0267:
	if (!(gflags[0x01D5] == false)) goto labelFunc04DA_0279;
	var0005 = (var0005 & 0x0003);
labelFunc04DA_0279:
	if (!(gflags[0x01D6] == false)) goto labelFunc04DA_028B;
	var0005 = (var0005 & 0x0004);
labelFunc04DA_028B:
	if (!(gflags[0x01D7] == false)) goto labelFunc04DA_029D;
	var0005 = (var0005 & 0x0005);
labelFunc04DA_029D:
	if (!(gflags[0x01D8] == false)) goto labelFunc04DA_02AF;
	var0005 = (var0005 & 0x0006);
labelFunc04DA_02AF:
	if (!(var0005 == [])) goto labelFunc04DA_02C0;
	message("\"I'm sorry... ~Thou hast heard all of my songs.\"");
	say();
	goto labelFunc04DA_02DD;
labelFunc04DA_02C0:
	var0006 = UI_get_random(UI_get_array_size(var0005));
	var0007 = var0005[var0006];
	Func09B0(var0007);
labelFunc04DA_02DD:
	case "tales" attend labelFunc04DA_0308:
	message("\"For those with an adventurous spirit, I can tell thee of the northern savages.\"");
	say();
	message("\"For those who wish to hear of a lost civilization, I can tell thee of the people who left the ruins on this continent.\"");
	say();
	message("\"For those who would hear a tale of bitter bravery, I can tell thee of the lost king.\"");
	say();
	UI_remove_answer("tales");
	UI_add_answer(["northern savages", "lost culture", "lost king"]);
labelFunc04DA_0308:
	case "northern savages" attend labelFunc04DA_0348:
	message("\"Once thou leavest the warm lands of Man, thou dost come into the realm of the northern savages.\" ~\"These creatures have faces that strongly resemble that of a normal man, but they are covered head to foot in a shaggy fur pelt.\"");
	say();
	message("\"Some say that these creatures are some lost tribe of Man that hath adapted to the cold.\" ~\"Still others claim that the savages are a mage-created race that guards some great, mystical secret.\"");
	say();
	message("\"None can say if they are intelligent.\" ~\"They build no structures and speak no recognizable language.\"");
	say();
	if (!(gflags[0x01D5] == false)) goto labelFunc04DA_0341;
	message("\"There is also a song about the northern savages. ~Wouldst thou care to hear it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_033D;
	message("\"All right, then...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_0341;
labelFunc04DA_033D:
	message("\"Perhaps some other time, then.\"");
	say();
labelFunc04DA_0341:
	UI_remove_answer("northern savages");
labelFunc04DA_0348:
	case "lost culture" attend labelFunc04DA_0363:
	message("\"Long ago, before any of the cities thou knowest today were built, there was a race of Man who worshipped three great elemental serpents.\" ~\"Some followed one of fire. Others followed one of ice. And still others followed one of earth.\"");
	say();
	message("\"As only the serpent of earth could withstand both the fire and the ice of the other serpents, it did possess the most power.\" ~\"The fire and ice serpents were violently opposed to each other, but were held in check by the serpent of earth.\"");
	say();
	message("\"Then the serpent of earth lost power. The fire and ice serpents warred for supremacy.\" ~\"When the battle ended, it mattered not which serpent had won...\" ~\"for the land was destroyed and all the worshippers lay dead.\"");
	say();
	UI_remove_answer("lost culture");
labelFunc04DA_0363:
	case "lost king" attend labelFunc04DA_03C8:
	message("\"To the north of here stand two castles, seemingly empty from the ravages of time.\" ~\"But neither is truly empty, for they both hold the ghosts of trust betrayed.\"");
	say();
	message("\"In one majestic castle a lady waits for her faithless lover who pledged his love and never returned.\" ~\"In the other, a father and ruler, driven mad by the loss of daughter and erstwhile friend, took his people beyond the cares of time.\"");
	say();
	message("\"All the trapped souls await the return of the one whose desertion forever changed the land he had sworn to protect.\" ~\"All wait for the return of the lost king... and revenge!\"");
	say();
	if (!(gflags[0x01D3] == false)) goto labelFunc04DA_039C;
	message("\"There is a song about the lady.\" ~\"Wouldst thou care to hear it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0398;
	message("\"It is a sad ballad indeed...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_039C;
labelFunc04DA_0398:
	message("\"Another time, then.\"");
	say();
labelFunc04DA_039C:
	if (!(gflags[0x01D8] == false)) goto labelFunc04DA_03C1;
	message("\"There is a song about the other castle, as well.\" ~\"Wouldst thou care to hear it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_03BD;
	message("\"Prepare thyselves...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_03C1;
labelFunc04DA_03BD:
	message("\"Another time, then.\"");
	say();
labelFunc04DA_03C1:
	UI_remove_answer("lost king");
labelFunc04DA_03C8:
	case "tunes" attend labelFunc04DA_0420:
	if (!(gflags[0x003E] == true)) goto labelFunc04DA_0408;
	if (!(var0001 == true)) goto labelFunc04DA_03F4;
	message("\"For thee, brave lady, I would sing of dreams, or perhaps of tragedy.\" ~\"Of course, although I sing to entertain others, I hope for some small token of appreciation...\" ~\"if possible. Singing is thirsty business.\"");
	say();
	UI_add_answer(["dreams", "tragedy"]);
	goto labelFunc04DA_0405;
labelFunc04DA_03F4:
	message("\"For thee, noble sir, I would sing a heart-rending ballad, or perhaps long-lost lore.\" ~\"Of course, although I sing to entertain others, I hope for some small token of appreciation...\" ~\"if possible. Singing is thirsty business.\"");
	say();
	UI_add_answer(["ballad", "lore"]);
labelFunc04DA_0405:
	goto labelFunc04DA_0419;
labelFunc04DA_0408:
	message("\"I sense that thou dost like adventure.\" ~\"For thee I would sing of strange beings and strange places.\" ~\"Of course, although I sing to entertain others, I hope for some small token of appreciation...\" ~\"if possible. Singing is thirsty business.\"");
	say();
	UI_add_answer(["strange beings", "strange places"]);
labelFunc04DA_0419:
	UI_remove_answer("tunes");
labelFunc04DA_0420:
	case "dreams" attend labelFunc04DA_0468:
	if (!(gflags[0x01D7] == true)) goto labelFunc04DA_0457;
	message("\"I believe that thou hast already heard that one.\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0449;
	message("\"My pleasure...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_0454;
labelFunc04DA_0449:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc04DA_0454:
	goto labelFunc04DA_0461;
labelFunc04DA_0457:
	message("\"I hope thou dost enjoy it...\"");
	say();
	Func09B0(0x0001);
labelFunc04DA_0461:
	UI_remove_answer("dreams");
labelFunc04DA_0468:
	case "tragedy" attend labelFunc04DA_04B0:
	if (!(gflags[0x01D8] == true)) goto labelFunc04DA_049F;
	message("\"I seem to remember singing this for thee before...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0491;
	message("\"One more time, then...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_049C;
labelFunc04DA_0491:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc04DA_049C:
	goto labelFunc04DA_04A9;
labelFunc04DA_049F:
	message("\"Relax and be at ease...\"");
	say();
	Func09B0(0x0001);
labelFunc04DA_04A9:
	UI_remove_answer("tragedy");
labelFunc04DA_04B0:
	case "ballad" attend labelFunc04DA_04F8:
	if (!(gflags[0x01D3] == true)) goto labelFunc04DA_04E7;
	message("\"I'm certain that thou hast before...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_04D9;
	message("\"As thou wishest...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_04E4;
labelFunc04DA_04D9:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc04DA_04E4:
	goto labelFunc04DA_04F1;
labelFunc04DA_04E7:
	message("\"I do hope I remember it...\"");
	say();
	Func09B0(0x0001);
labelFunc04DA_04F1:
	UI_remove_answer("ballad");
labelFunc04DA_04F8:
	case "lore" attend labelFunc04DA_0540:
	if (!(gflags[0x01D4] == true)) goto labelFunc04DA_052F;
	message("\"I fear that thou dost already know this one...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0521;
	message("\"Thou canst sing along if thou wishest...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_052C;
labelFunc04DA_0521:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc04DA_052C:
	goto labelFunc04DA_0539;
labelFunc04DA_052F:
	message("\"I think I am in the right key...\"");
	say();
	Func09B0(0x0001);
labelFunc04DA_0539:
	UI_remove_answer("lore");
labelFunc04DA_0540:
	case "strange beings" attend labelFunc04DA_0588:
	if (!(gflags[0x01D5] == true)) goto labelFunc04DA_0577;
	message("\"I have done this one for thee before...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0569;
	message("\"Very well...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_0574;
labelFunc04DA_0569:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc04DA_0574:
	goto labelFunc04DA_0581;
labelFunc04DA_0577:
	message("\"Thou wilt like the tempo on this one...\"");
	say();
	Func09B0(0x0001);
labelFunc04DA_0581:
	UI_remove_answer("strange beings");
labelFunc04DA_0588:
	case "strange places" attend labelFunc04DA_05D0:
	if (!(gflags[0x01D6] == true)) goto labelFunc04DA_05BF;
	message("\"Thou knowest this one...\" ~\"Wouldst thou like to hear it again?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_05B1;
	message("\"I am cheered in that thou dost like it...\"");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_05BC;
labelFunc04DA_05B1:
	message("\"Perhaps I could find another song for thee...\"");
	say();
	UI_add_answer("song");
labelFunc04DA_05BC:
	goto labelFunc04DA_05C9;
labelFunc04DA_05BF:
	message("\"Listen carefully...\"");
	say();
	Func09B0(0x0001);
labelFunc04DA_05C9:
	UI_remove_answer("strange places");
labelFunc04DA_05D0:
	case "bye" attend labelFunc04DA_05F7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell, gleeman!@", 0x0000);
	Func097F(0xFFD9, "@May thy path be smooth!@", 0x0005);
	goto labelFunc04DA_05FA;
labelFunc04DA_05F7:
	goto labelFunc04DA_00E4;
labelFunc04DA_05FA:
	endconv;
labelFunc04DA_05FB:
	return;
}


