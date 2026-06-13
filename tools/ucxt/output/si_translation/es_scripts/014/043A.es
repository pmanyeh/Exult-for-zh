#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern void Func08A9 0x8A9 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func043A object#(0x43A) ()
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
	var0001 = Func0942(0xFFCC);
	var0002 = Func0953();
	var0003 = UI_is_pc_female();
	var0004 = Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000);
	var0005 = UI_get_object_position(0xFFC6);
	if (!((var0005[0x0001] > 0x03A0) && ((var0005[0x0001] < 0x06D1) && ((var0005[0x0002] > 0x03BF) && (var0005[0x0002] < 0x06EF))))) goto labelFunc043A_006D;
	var0006 = true;
labelFunc043A_006D:
	if (!(event == 0x0002)) goto labelFunc043A_00ED;
	if (!(gflags[0x0190] || gflags[0x018B])) goto labelFunc043A_0080;
	abort;
labelFunc043A_0080:
	if (!(Func0994() == 0x0003)) goto labelFunc043A_00D0;
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043A], 0x0014);
	var0007 = UI_approach_avatar(0xFFC6, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFC6, 0x0003);
	Func097F(0xFFC6, "@Hold there, old man!@", 0x0002);
	goto labelFunc043A_00ED;
labelFunc043A_00D0:
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043A], 0x0032);
labelFunc043A_00ED:
	if (!(event == 0x0007)) goto labelFunc043A_0107;
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043A_0107:
	if (!(event == 0x0001)) goto labelFunc043A_0135;
	UI_item_say(0xFE9C, "@A word with thee, friend.@");
	0xFFC6->Func07D1();
	Func097F(0xFFC6, "@If thou art paying...@", 0x0005);
	UI_set_schedule_type(0xFFC6, 0x0003);
labelFunc043A_0135:
	if (!(event == 0x0009)) goto labelFunc043A_0FDE;
	UI_run_schedule(0xFFC6);
	UI_clear_item_say(0xFFC6);
	UI_show_npc_face0(0xFFC6, 0x0000);
	if (!(gflags[0x018C] && ((!gflags[0x018B]) && (!gflags[0x0190])))) goto labelFunc043A_0204;
	message("\"Say there, thou with the lute! Art thou a bard?\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Yes, I am, though as of late I do not feel the music within me.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I beg of thee, canst thou indulge me for but one song? The sinister thunder doth linger in mine ears.\"");
	say();
	message("\"A few strums from thy strings may bring comfort to this sorrowful town...\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"I am truly sorry, but I do not think that I can help thee...\"");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	gflags[0x018B] = true;
	UI_set_schedule_type(0xFFC6, 0x000F);
	Func097F(0xFFFD, "@Hmmmm...@", 0x0000);
	Func097F(0xFFD0, "@Please sing...@", 0x0002);
	Func097F(0xFFCA, "@Sing of Beauty!@", 0x0004);
	Func097F(0xFFCB, "@Disperse!@", 0x0008);
	Func097F(0xFFC6, "@Now I need me a drink!@", 0x000C);
	var0007 = UI_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x27, 0x000A, (byte)0x55, 0x01D1]);
	abort;
labelFunc043A_0204:
	var0008 = UI_get_item_flag(0xFFC6, 0x001C);
	if (!((UI_get_timer(0x000C) < 0x0003) && gflags[0x0165])) goto labelFunc043A_0241;
	message("\"Go away, I'm not drunk enough yet.\"");
	say();
	Func097F(0xFFC6, "@A drink!@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
	goto labelFunc043A_0245;
labelFunc043A_0241:
	gflags[0x0165] = false;
labelFunc043A_0245:
	if (!(var0008 == false)) goto labelFunc043A_0291;
	if (!(gflags[0x003E] == true)) goto labelFunc043A_0279;
	if (!(var0003 == true)) goto labelFunc043A_026B;
	message("\"By my sore eyes! 'Tis a comely wench wit' a tattoo... like any good sailor! Me name's Olon, and I'm a fisherman by trade.\"");
	say();
	UI_add_answer("tattoo");
	goto labelFunc043A_0276;
labelFunc043A_026B:
	message("\"I haven't been out of this 'ere tavern all day. Find someone else ta put the blame on, Pikeman! Me name's Olon, and I'm a fisherman by trade.\"");
	say();
	UI_add_answer("Pikeman");
labelFunc043A_0276:
	goto labelFunc043A_0284;
labelFunc043A_0279:
	message("\"If it's a word or three thou art wantin' of me, I do me best talkin' wit' a bottle of Fawn ale! Me name's Olon, and I'm a fisherman by trade.\"");
	say();
	UI_add_answer("Fawn ale");
labelFunc043A_0284:
	UI_set_item_flag(0xFFC6, 0x001C);
	goto labelFunc043A_02BE;
labelFunc043A_0291:
	message("\"Welcome back, ol' friend. These're thirsty times, aye?\"");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc043A_02BE;
	if (!(var0003 == true)) goto labelFunc043A_02B3;
	message("\"Come lift a glass wit' me, lass. I do enjoy the company of a tattooed wench!\"");
	say();
	UI_add_answer("tattoo");
	goto labelFunc043A_02BE;
labelFunc043A_02B3:
	message("\"Come lift a glass wit' me, lad. Tell me what a brave Pikeman like ye have been a doin'.\"");
	say();
	UI_add_answer("Pikeman");
labelFunc043A_02BE:
	UI_add_answer(["goblins", "bye"]);
	if (!(gflags[0x0164] == false)) goto labelFunc043A_02DA;
	UI_add_answer("storms");
labelFunc043A_02DA:
	if (!(gflags[0x0191] && (!gflags[0x028C]))) goto labelFunc043A_02EC;
	UI_add_answer("pinecone");
labelFunc043A_02EC:
	if (!(gflags[0x0199] && (!gflags[0x0298]))) goto labelFunc043A_02FE;
	UI_add_answer("dead cat");
labelFunc043A_02FE:
	converse attend labelFunc043A_0FDD;
	case "tattoo" attend labelFunc043A_0338:
	message("\"Now don't go tellin' me that thou beest a Pikeman like those ugly sons out in the tower.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_031C;
	message("\"Well, mayhaps they be uppin' their standards. Thou certainly art easy on the eyes. Jendon over there's pleasant enough, but ain't what thee'd be wantin' ta spend time with... if thou knowest what I mean.\"");
	say();
	goto labelFunc043A_0320;
labelFunc043A_031C:
	message("\"I didn't think so! Thou art more pleasin' ta look at. 'Tisn't often that thou findest a woman what's brave enough ta face the tattoo needle around here.\"");
	say();
labelFunc043A_0320:
	if (!var0006) goto labelFunc043A_0331;
	message("\"Join me over a bottle of Fawn's finest ale and we can swap tales. I'd like ta know how a beauty like thee came away with a tattoo.\"");
	say();
	UI_add_answer("tales");
labelFunc043A_0331:
	UI_remove_answer("tattoo");
labelFunc043A_0338:
	case "tales" attend labelFunc043A_035B:
	message("\"Don't be hasty! There's plenty of time for that. Thou still hast not told me how a comely piece of work like unto thee did find herself with a tattoo.\"");
	say();
	UI_remove_answer("tales");
	UI_add_answer(["I don't remember.", "I was tricked.", "I am Monitor's Champion."]);
labelFunc043A_035B:
	case "I don't remember." attend labelFunc043A_037E:
	message("\"Ah! I can understand right well, that I can. I've lost a day or two meself. Come ta think of it, that's how I ended up with me first tattoo... That was on that voyage when we found that pecul'ar island of cats.\"");
	say();
	UI_remove_answer(["I don't remember.", "I was tricked.", "I am Monitor's Champion."]);
	UI_add_answer("island of cats");
labelFunc043A_037E:
	case "island of cats" attend labelFunc043A_0416:
	message("\"There's this island... Can't at all remember where it is. No one lives there, though. A barren, uninviting place...\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0404;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Oh, not that ale tale again, Olon! If thou drivest away what customers I have left, thou canst find somewhere else ta drink.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Quit thy complainin', Jendon. I'm the only reason anyone comes in here now, and thou knowest it! They come ta hear me tales...\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Be that as may be, Olon. 'Tis not some bar maid that thou art speakin' with. Some of thy tales are not fit for any but a sailor's ears.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"What objection hast thou of this tale?\"");
	say();
	UI_set_conversation_slot(0x0001);
	if (!var0003) goto labelFunc043A_03F1;
	message("\"None ta this one, though it is a bigger tale than the story about the flying whale. But I know thee! Let thee start on one tale and thou must tell them all. And I'll not have thee frightening the lady.\"");
	say();
	UI_set_conversation_slot(0x0000);
	if (!gflags[0x003E]) goto labelFunc043A_03E6;
	message("\"Frighten a saucy thing that wears a tattoo? Now where was I? Oh, yes...\"");
	say();
	goto labelFunc043A_03EA;
labelFunc043A_03E6:
	message("\"Frighten such an adventurous wench? Now where was I? Oh, yes...\"");
	say();
labelFunc043A_03EA:
	UI_remove_npc_face1();
	goto labelFunc043A_0404;
labelFunc043A_03F1:
	message("\"None ta this one, though it is a bigger tale than the story about the flying whale. But I know thee! Let thee start on one tale and thou must tell them all. And I'll not have thee makin' a payin' customer sick wit' thy stories.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Turn the stomach of so bold a lad? Now where was I? Oh, yes...\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_0404:
	message("\"The whole island is crawling with glowin' cats. Don't know how they arrived there, nor how they live in such a forsaken spot. But I've heard it said that they live there guarding some fantastical cat treasure.\" ~\"This be little Delphynia's favorite tale...\"");
	say();
	UI_remove_answer("island of cats");
	UI_add_answer("Delphynia");
labelFunc043A_0416:
	case "Delphynia" attend labelFunc043A_04D7:
	message("\"Delphynia is an herbalist.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_046A;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"She's a Horticulturist, Olon. Thou shouldst only give facts...\"");
	say();
	UI_set_conversation_slot(0x0000);
	if (!var0003) goto labelFunc043A_044C;
	message("\"Thou wouldst have me say such things in front of a lady? Weren't thou the one what was tellin' me ta mind me manners?\"");
	say();
	goto labelFunc043A_0450;
labelFunc043A_044C:
	message("\"Thou wouldst have me say such things of a lady? Weren't thou the one what was tellin' me ta mind me manners?\"");
	say();
labelFunc043A_0450:
	UI_set_conversation_slot(0x0001);
	message("\"Oh, I surrender!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"An' him worried about what's proper an' what's not...\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_046A:
	message("\"She's what passes for a healer in these forsaken parts ever since the last healer were et by them goblins.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_04BD;
	UI_show_npc_face1(0xFFCC, 0x0000);
	if (!var0003) goto labelFunc043A_0498;
	message("\"Don't rant on about the goblins, Olon! 'Tis not a fit subject ta discuss before a lady.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Go back ta washin' the glasses, Jendon! Thou art no judge of what ta say in front of ladies.\"");
	say();
	goto labelFunc043A_04A7;
labelFunc043A_0498:
	message("\"Don't rant on about the goblins, Olon! Thou canst turn the stomach of a bilge rat when thou dost have a mind to.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Go back ta washin' the glasses, Jendon! Thou art no judge of what a darin' adventurer like this 'ere lad might like ta hear.\"");
	say();
labelFunc043A_04A7:
	UI_set_conversation_slot(0x0001);
	message("\"I'd throw thee out, if thou weren't mine only steady customer. I would.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_04BD:
	message("\"Wouldst thou care to spend a while longer listenin' to another story?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_04D0;
	UI_add_answer("story");
labelFunc043A_04D0:
	UI_remove_answer("Delphynia");
labelFunc043A_04D7:
	case "story" attend labelFunc043A_04FE:
	if (!var0003) goto labelFunc043A_04EC;
	message("\"Ah, I know just the one for a bold wench as thyself! A tale ta stir the blood, that's for certain... the King of the White Dragon!\"");
	say();
	goto labelFunc043A_04F0;
labelFunc043A_04EC:
	message("\"Ah, I know just the one for a bold warrior as thyself! A tale ta stir the blood, that's for certain... the King of the White Dragon!\"");
	say();
labelFunc043A_04F0:
	UI_remove_answer("story");
	UI_add_answer("King of the White Dragon");
labelFunc043A_04FE:
	case "I was tricked." attend labelFunc043A_057B:
	message("\"Aye, there are those that would do such things. Sometimes 'tis them that thou trustest most. Just like that ol' King of the White Dragon...\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0564;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Olon, even I don't want ta hear that one... ever again!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou always didst lack a backbone, Jendon! Go ta Temple and soothe thy nerves with the Oracle's empty mouthings!\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Now 'tis blasphemy, is it, Olon? I would never have guessed thou hadst been taken in by that lot of fools.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou art a fine one ta be talkin' about being taken in, Jendon. An' I've said so often enough.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"That's all thou ever dost, Olon -- talk.\"");
	say();
	UI_set_conversation_slot(0x0000);
	UI_add_answer(["Temple", "Oracle"]);
	UI_remove_npc_face1();
labelFunc043A_0564:
	UI_remove_answer(["I don't remember.", "I was tricked.", "I am Monitor's Champion."]);
	UI_add_answer("King of the White Dragon");
labelFunc043A_057B:
	case "Temple" attend labelFunc043A_058E:
	message("\"It sits crouching in the shadow of the palace. But 'tis what controls the palace, if'n thou knowest what I mean.\"");
	say();
	UI_remove_answer("Temple");
labelFunc043A_058E:
	case "Oracle" attend labelFunc043A_05A1:
	message("\"I hear tell it was built by some important mage, in the days before our ancestors left Sosaria. Supposed ta be an instrument of truth. But, seein' that lot, I wonder whose truth it tells.\"");
	say();
	UI_remove_answer("Oracle");
labelFunc043A_05A1:
	case "King of the White Dragon" attend labelFunc043A_0639:
	message("\"Long ago, when the mountains were young, this land was ruled by two rival kings. One of those kings was called the King of the White Dragon.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0622;
	UI_show_npc_face1(0xFFCC, 0x0000);
	if (!var0003) goto labelFunc043A_05F5;
	message("\"I'll not stay here and listen ta this again! Lady, I see that thou art armed. If he doth offend thee, run him through. I'll make no complaint.\" *\"If thou hast need of me, I shall be in back.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Perhaps he is right. Perhaps this tale is too rough for thy pretty ears. Dost thou wish me ta tell another tale instead?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_05E3;
	message("\"Then perhaps thou wouldst prefer ta hear a tale of a timeless love story that crosses the frozen wastes.\"");
	say();
	goto labelFunc043A_05E7;
labelFunc043A_05E3:
	message("\"I was right! Thou art a sturdy wench! I'll tell thee a fine love story next. Now where was I?\"");
	say();
labelFunc043A_05E7:
	UI_add_answer("love story");
	UI_remove_npc_face1();
	goto labelFunc043A_0622;
labelFunc043A_05F5:
	message("\"I'll not stay here and listen ta this again! Milord, I see that thou art armed. If he doth offend thee, run him through. I'll make no complaint.\" *\"If thou hast need of me, I shall be in back.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Perhaps he is right. Perhaps this tale is too brutal even for thee. Dost thou wish me ta tell another tale instead?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0613;
	message("\"Then perhaps thou wouldst prefer ta hear a tale of a timeless love story that crosses the frozen wastes.\"");
	say();
	goto labelFunc043A_0617;
labelFunc043A_0613:
	message("\"I was right! Thou art a brave lad! I'll tell thee a fine love story next. Now where was I?\"");
	say();
labelFunc043A_0617:
	UI_add_answer("love story");
	UI_remove_npc_face1();
labelFunc043A_0622:
	message("\"The King of the White Dragon drove away his rival king, but he could not enjoy his victory, for the goblins were come. Hordes and hordes of goblins... and there weren't nothin' the old King of the White Dragon could do ta hold 'em back.\"");
	say();
	message("\"Somethin' snapped in that old man's head when he saw that he could never control the land. So the King planned a way for him ta have control over everything at last. He summoned all his folk for a big party, and locked them inta the castle. Then, one by one, he murdered them all -- down ta the last babe.\"");
	say();
	message("\"And then, as dawn broke, he stood on the tower all bloody and called ta the goblins that the King of the White Dragon had saved his people from their stewpots.\"");
	say();
	message("\"They say he lives there still, feeding off any who pass by. One thing's certain, the goblins don't go near that place to this very day.\"");
	say();
	UI_remove_answer("King of the White Dragon");
labelFunc043A_0639:
	case "love story" attend labelFunc043A_06D1:
	message("\"This is not thine usual love story, no. This here's about dragons, ice dragons.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_069D;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"A love story about ice dragons! Now I've heard everything, even from thee, Olon.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou wouldst not recognize a love story if it hit thee between the eyes, Jendon.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"So sayest thou, Olon. I think Alyssand's story qualifies well enough.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Shows what thou knowest, Jendon. We bards would call that a tragedy.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Thou wouldst style thyself a bard now? Perhaps I should bow.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Do that, and quiet! Thou hast interrupted all my tales so far. 'Tis rude.\"");
	say();
	UI_add_answer("Alyssand");
	UI_remove_npc_face1();
labelFunc043A_069D:
	message("\"Back around the time Fawn was founded, many of our folk took it upon themselves ta explore the waterways. More than one ship returned with tales of a glittering ice dragon slowly making its way southward, calling pitiful-like.\"");
	say();
	message("\"A few years later these same sailors spied TWO ice dragons sitting atop an icy peak, singin' ta one another. Them scholars over in Moonshade say that dragons mate for life. I'd wager that's what our lads came across -- a dragon out hunting for a mate.\"");
	say();
	message("\"The only other thing I ever heard from those mages that made sense is that a dragon turns very hostile if its mate or young is killed.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_06CA;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Now that's truly touchin', Olon. Thou surely hast brought a tear ta mine eye, thou hast.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_06CA:
	UI_remove_answer("love story");
labelFunc043A_06D1:
	case "Alyssand" attend labelFunc043A_07A4:
	message("\"Alyssand's the daughter of Delin, the shopkeeper. Thou mightest think she hath had enough sadness in her short life.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_06FE;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"'Tis hard ta find many who have borne more, I'll wager.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_06FE:
	message("\"Her mother died after givin' birth ta Delin's only son. Never saw a man take it harder. He near ta lost his mind. Then he did go a little crazy after the Magister took young Freli away during the annual testing.\" *\"Alyssand hath looked after him all alone ever since, helpin' mind the store and doin' her weavin'. Then she met Keth.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0727;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"A sturdy lad, Keth was. 'Twere a pity ta lose him.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"I'll thank thee to keep thy comments to thyself, Jendon. Thou art ruining my tale.\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_0727:
	message("\"Keth doted upon Alyssand. Treated her better than the Lady of Fawn, he did. Sent all the way ta Moonshade ta have an engagement ring made for her.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_074C;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Cost him a pretty penny, I'll wager.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_074C:
	message("\"Then one day Keth didn't run fast enough ta shelter when one of those cursed storms hit. No one hath seen him since.\" *\"Until she lost her engagement ring ta another one of those storms here recently, Alyssand swore that Keth would return. She's a changed woman now.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0787;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Sounds like a love story to me...\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"An' I suppose that thou considerest the island of cats a tragedy then?\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"No, I'd call it an ale tale.. made from the fumes of mine ale!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0787:
	UI_remove_answer("Alyssand");
	UI_add_answer("island of cats");
	if (!(var0004 == true)) goto labelFunc043A_07A4;
	UI_add_answer("engagement ring");
labelFunc043A_07A4:
	case "engagement ring" attend labelFunc043A_07DB:
	message("\"That could be it, right enough. Though thou shouldst ask Alyssand herself. Mine eyes are not what they were.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_07D1;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"'Tis it, sure as the tide comes in! Keth flashed it around enough, I'd recognize it anywhere.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_07D1:
	Func08A9();
	UI_remove_answer("engagement ring");
labelFunc043A_07DB:
	case "I am Monitor's Champion." attend labelFunc043A_0823:
	message("\"Why not say that thou art the new Lady of Fawn, whilst thou art about it, bold wench? Methinks that thy tales must be taller than mine.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0808;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Now that be truly difficult, too.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0808:
	message("\"I think that thou wouldst benefit from the wisdom of an honest tradesman. Perhaps it would divert thy mind from a foolish girl's dreams.\"");
	say();
	UI_remove_answer(["I don't remember.", "I was tricked.", "I am Monitor's Champion."]);
	UI_add_answer("wisdom");
labelFunc043A_0823:
	case "wisdom" attend labelFunc043A_0843:
	message("\"That woman who travelled with the Fellowship sailors said that the greatest wisdom comes from those of us what works for our living. Smart lady. She was willin' ta listen ta what I have to say.\"");
	say();
	UI_remove_answer("wisdom");
	UI_add_answer(["woman", "Fellowship sailors"]);
labelFunc043A_0843:
	case "woman" attend labelFunc043A_0866:
	message("\"A red-haired beauty by the name of Gwenno. I told her about the island of cats, the King of the White Dragon. An' I told her a love story. I remember that -- she laughed and bought another round before she left.\"");
	say();
	UI_remove_answer("woman");
	UI_add_answer(["island of cats", "King of the White Dragon", "love story"]);
labelFunc043A_0866:
	case "Fellowship sailors" attend labelFunc043A_08C0:
	UI_remove_answer("Fellowship sailors");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043A_088B;
	message("\"Now, if thou dost want to know more about them, thou shouldst ask them. The Lady hath let them back into the city, thou dost know...\"");
	say();
	goto labelFunc043A_08C0;
labelFunc043A_088B:
	message("\"They're the poor lads that Jendon prattles about all the time. Ta hear him talk, the Oracle all but shook down the Temple when Kylista asked if they were the cause of the storms.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_08B0;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Thou canst blaspheme all thou likest, Olon, I was there and heard it!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_08B0:
	UI_add_answer(["Temple", "Oracle", "Kylista"]);
labelFunc043A_08C0:
	case "Kylista" attend labelFunc043A_08DA:
	message("\"Kylista is the priestess of Beauty. She's wondrous fair of face, but her heart's as cold as the sea is deep. Kylista cares only for those who bow and scrape ta her. She doth have no use for those what can't make her more important.\"");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("Beauty");
labelFunc043A_08DA:
	case "Beauty" attend labelFunc043A_08ED:
	message("\"'Tis what everyone of this town is dedicated to. Everyone but those tryin' ta increase their power or wealth, that is...\" *\"Me sire told me that, once upon a time, Fawn was built in honor of love. We've come a far cry from that, I'd say.\"");
	say();
	UI_remove_answer("Beauty");
labelFunc043A_08ED:
	case "Pikeman" attend labelFunc043A_091A:
	message("\"I'm not so far gone in me cups as ta not be able ta see the mark that thou bearest on thy face. All the world knows thee for a Pikeman.\"");
	say();
	if (!(gflags[0x014E] == true)) goto labelFunc043A_0908;
	message("\"But thou must be weary after takin' back the tower from those foul goblins. Pull up a chair an' we'll swap a few yarns over a cup or two.\"");
	say();
	goto labelFunc043A_090C;
labelFunc043A_0908:
	message("\"Thou dost not seem a bad sort of fellow. I'd be lookin' for a bit of drink and company, too, if I wert thou.\" *\"I doubt that it will be long before thou and thy companions lay siege ta those vile goblins in the tower.\" *\"Come lift a few with me, and I'll tell a few yarns ta take thy mind off thy troubles.\"");
	say();
labelFunc043A_090C:
	UI_remove_answer("Pikeman");
	UI_add_answer("yarns");
labelFunc043A_091A:
	case "yarns" attend labelFunc043A_0956:
	if (!(gflags[0x014E] == true)) goto labelFunc043A_0944;
	message("\"I'm certain that thou hast many yarns ta tell. Wert thou amongst the company that retook the tower?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_093D;
	message("\"I'd wager that it was as gruesome as the King of the White Dragon's castle.\"");
	say();
	goto labelFunc043A_0941;
labelFunc043A_093D:
	message("\"'Twas for the best, I'll warrant. I hear it was as gruesome as the King of the White Dragon's castle. An' everyone knows what happened there.\"");
	say();
labelFunc043A_0941:
	goto labelFunc043A_0948;
labelFunc043A_0944:
	message("\"I'd not be in thy shoes, good Pikeman. Retaking that tower will be as gruesome as the King of the White Dragon's castle.\"");
	say();
labelFunc043A_0948:
	UI_remove_answer("yarns");
	UI_add_answer("King of the White Dragon");
labelFunc043A_0956:
	case "King of the White Dragon" attend labelFunc043A_09EA:
	message("\"Thou hast not heard of the King of the White Dragon? The bards of Monitor have been lax of late then. I'll wager that thou hast not heard of the island of cats neither. Or a proper love story, neither.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0999;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Listen ta him, wilt thou? Art thou sayin' that thou art Fawn's bard now, Olon?\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Our 'ficial one went down with the Delyssia. Reckon I'm all there is now.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"I'd better start washin' more mugs, then. I may not have enough ta last, when word o' this gets out... If thou art not thrown out of town for thy braggin' first!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0999:
	message("\"Long ago, when the mountains were young, this land was ruled by two rival kings. One of those kings was called the King of the White Dragon.\"");
	say();
	message("\"The King of the White Dragon drove away his rival king, but he could not enjoy his victory, for the goblins were come. Hordes and hordes of goblins... and there wasn't nothin' the old King of the White Dragon could do ta hold them back.\"");
	say();
	message("\"Somethin' snapped in that old man's head when he saw that he could never control the land. So the King planned a way for him ta have control over everything at last. He summoned all his folk for a big party, and locked them inta the castle. Then, one by one, he murdered them all -- down ta the last babe.\"");
	say();
	message("\"And then, as dawn broke, he stood on the tower all bloody and called ta the goblins that the King of the White Dragon had saved his people from their stewpots.\"");
	say();
	message("\"They say he lives there still, feeding off any who pass by. One thing's for sure, the goblins don't go near that place ta this very day.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_09D6;
	if (!(gflags[0x014E] == false)) goto labelFunc043A_09D6;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"I'm sure that thou hast taken his mind off his problems, for sure, Olon. Why worry about goblins when thou canst worry about the King of the White Dragon?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_09D6:
	UI_remove_answer("King of the White Dragon");
	UI_add_answer(["island of cats", "love story"]);
labelFunc043A_09EA:
	case "island of cats" attend labelFunc043A_0A31:
	message("\"There's this island... Can't at all remember where it is. No one lives there, though. A barren, uninviting place...\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0A1B;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Oh, not again, Olon! If thou drivest away what customers I have left, thou canst find somewhere else ta drink.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Cease thy complainin', Jendon. I'm the only reason anyone comes in here now, and thou knowest it! They come ta hear me tales...\" Now where was I? Oh, yes...\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_0A1B:
	message("\"The whole island is crawling with cats. Don't know how they arrived there, nor how they live in such a forsaken spot. But I've heard it said that they live there guarding some fantastical cat treasure.\"");
	say();
	message("\"This be Delphynia's favorite tale.\"");
	say();
	UI_remove_answer("island of cats");
	UI_add_answer("Delphynia");
labelFunc043A_0A31:
	case "Delphynia" attend labelFunc043A_0AB6:
	message("\"Delphynia is an herbalist.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0A74;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"She's a Hor-ti-culturist, Olon. Thou shouldst only give facts...\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou wouldst have me say such things in front of a stranger? 'Tisn't polite ta speak of a lady in such a fashion, Jendon.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Oh, I surrender!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0A74:
	message("\"She's what passes for a healer in these forsaken parts ever since the last healer was et by them goblins.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0AAF;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Don't rant on about the goblins, Olon! `Tis not a subject this young lord wishes ta hear right now, I'm certain.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Return ta washin' the glasses, Jendon! Thou art no judge of what a warrior wishes ta hear.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"And thou art? I'd throw thee out, if thou weren't mine only steady customer. I would.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0AAF:
	UI_remove_answer("Delphynia");
labelFunc043A_0AB6:
	case "love story" attend labelFunc043A_0B55:
	message("\"This is not thine usual love story, no. This here's about dragons, ice dragons.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0B1A;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"A love story about ice dragons! Now I've heard everything, even from thee, Olon.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou wouldst not recognize a love story if it hit thee between the eyes, Jendon.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"So sayest thou, Olon. I think Alyssand's story qualifies well enough.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Shows what thou knowest, Jendon. We bards would call that a tragedy.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Perhaps I should bow.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Do that, and quiet! Thou art rude to interrupt.\"");
	say();
	UI_add_answer("Alyssand");
	UI_remove_npc_face1();
labelFunc043A_0B1A:
	message("\"Back around the time Fawn was founded, many of our folk took it upon themselves ta explore the waterways. More than one ship returned with tales of a glittering ice dragon slowly making its way southward, calling pitiful-like.\"");
	say();
	message("\"A few years later these same sailors spied TWO ice dragons sitting atop an icy peak, singing ta one another. Them scholars over in Moonshade say that dragons mate for life. I'd wager that's what our lads came across -- a dragon out hunting for a mate.\"");
	say();
	message("\"The only other thing I ever heard from those mages that made sense is that a dragon is very hostile if its mate or young is killed.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0B47;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Now that's truly touchin', Olon. Thou surely hast brought a tear ta mine eye, thou hast.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0B47:
	UI_remove_answer("love story");
	UI_add_answer("Alyssand");
labelFunc043A_0B55:
	case "Alyssand" attend labelFunc043A_0C17:
	message("\"Alyssand's the daughter of Delin, the shopkeeper. Thou mightest think she hath had enough sadness in her short life.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0B82;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"'Tis hard ta find many who have borne more, I'll wager.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0B82:
	message("\"Her mother died after givin' birth ta Delin's only son. Never saw a man take it harder. He near ta lost his mind.\"");
	say();
	message("\"Then he did go a little crazy after the Magister took young Freli away during the annual testing.\" *\"Alyssand hath looked after him all alone ever since, helpin' mind the store and doin' her weavin'. Then she met Keth.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0BAF;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"A sturdy lad, Keth was. 'Twere a pity ta lose him.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"I'll thank thee ta keep thy comments ta thyself, Jendon. Thou art ruining my tale.\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_0BAF:
	message("\"Keth doted upon Alyssand. Treated her better than the Lady of Fawn, he did. Sent all the way ta Moonshade ta have an engagement ring made for her.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0BD4;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Cost him a pretty penny, I'll wager.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0BD4:
	message("\"Then one day Keth didn't run fast enough ta shelter when one of those cursed storms hit. No one hath seen him since.\"");
	say();
	message("\"Until she lost her engagement ring ta another one of those storms here recently, Alyssand swore that Keth would return. She's a changed woman now.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0C01;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Sounds like a love story ta me...\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Goes ta show what thou knowest!\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_0C01:
	UI_remove_answer("Alyssand");
	if (!(var0004 == true)) goto labelFunc043A_0C17;
	UI_add_answer("engagement ring");
labelFunc043A_0C17:
	case "engagement ring" attend labelFunc043A_0C4B:
	message("\"That could be it, right enough. Though thou shouldst ask Alyssand herself. Mine eyes are not what they were.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0C44;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"'Tis it, sure as the tide comes in! Keth flashed it around enough, I'd recognize it anywhere.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0C44:
	UI_remove_answer("engagement ring");
labelFunc043A_0C4B:
	case "Fawn ale" attend labelFunc043A_0D9E:
	if (!(var0003 == true)) goto labelFunc043A_0C8E;
	message("\"'Tis a drink from the heavens. Thou shouldst try it.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0C87;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"I'd advise against it, lady. There aren't many outside Fawn that care for its taste, I've found. I only export a bit ta Monitor now.\"");
	say();
	UI_add_answer("Monitor");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0C87:
	message("\"If thou wishest Fawn ale, it only comes in brown bottles.\"");
	say();
	goto labelFunc043A_0CBE;
labelFunc043A_0C8E:
	message("\"The drink of hard-workin' men! A drink ta put hair on thy chest and make the women throw themselves at thee.\" *\"Thou shouldst try it.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0CBA;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Be careful, Olon. There aren't many outside Fawn that care for its taste. I only export a bit ta Monitor now.\"");
	say();
	UI_add_answer("Monitor");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0CBA:
	message("\"If thou wishest Fawn ale, it comes only in brown bottles.\"");
	say();
labelFunc043A_0CBE:
	message("\"Wilt thou buy me a drink? I would be glad ta share stories with thee if thou dost.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0D75;
	if (!(var0001 == true)) goto labelFunc043A_0D6E;
	message("\"Jendon! Bring thy lazy backside over here! Thou hast a payin' customer with a thirst.\"");
	say();
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"As sweet-tongued as always, Olon. Dost thou truly wish ta buy this sot a drink, ");
	message(var0000);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0D49;
	message("\"Seest thou, Jendon, not everyone is as hard-hearted as thee!\"");
	say();
	if (!(UI_count_objects(0xFE9B, 0x03B4, 0xFE99, 0xFE99) > 0x0009)) goto labelFunc043A_0D24;
	var0007 = UI_remove_party_items(0x000A, 0x03B4, 0xFE99, 0xFE99, true);
	goto labelFunc043A_0D46;
labelFunc043A_0D24:
	UI_set_conversation_slot(0x0000);
	message("\"Not enough filari, no drink. No drink, no stories. Well, thou knowest where ta find me, if thou dost wish ta hear me stories.\"");
	say();
	Func097F(0xFFC6, "@I'm thirsty...@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
labelFunc043A_0D46:
	goto labelFunc043A_0D64;
labelFunc043A_0D49:
	message("\"Changed thy mind, aye? No drink, no stories. Well, thou knowest where ta find me, if thou dost wish ta hear me stories.\"");
	say();
	Func097F(0xFFC6, "@I'm thirsty...@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
labelFunc043A_0D64:
	UI_set_conversation_slot(0x0000);
	goto labelFunc043A_0D72;
labelFunc043A_0D6E:
	message("\"Jendon doth not seem ta be around right now. Perhaps thou couldst buy that drink when he comes back. An' then me throat won't be too dry ta tell thee those stories.\"");
	say();
labelFunc043A_0D72:
	goto labelFunc043A_0D90;
labelFunc043A_0D75:
	message("\"No drink, no stories! Thou knowest where ta find me, if thou dost wish ta hear me stories.\"");
	say();
	Func097F(0xFFC6, "@I'm thirsty...@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
labelFunc043A_0D90:
	UI_remove_answer("Fawn ale");
	UI_add_answer("stories");
labelFunc043A_0D9E:
	case "Monitor" attend labelFunc043A_0DB8:
	message("\"If thou shouldst want some while thou art in Monitor, Jendon sends it ta Simon. It doth not disappear very fast, but he orders a new batch every few months.\"");
	say();
	UI_remove_answer("Monitor");
	UI_add_answer("Simon");
labelFunc043A_0DB8:
	case "Simon" attend labelFunc043A_0DCB:
	message("\"He is the innkeeper in Monitor. If thou hast the opportunity ta stay there, send him regards from Olon in Fawn... a fellow Fawn ale drinker.\"");
	say();
	UI_remove_answer("Simon");
labelFunc043A_0DCB:
	case "stories" attend labelFunc043A_0DEE:
	message("\"I know some fine ones -- scary, sentimental, or jus' plain odd. I can tell thee about the King of the White Dragon. Or I can tell thee about the island of cats. Or I can thee a love story.\"");
	say();
	UI_remove_answer("stories");
	UI_add_answer(["King of the White Dragon", "island of cats", "love story"]);
labelFunc043A_0DEE:
	case "goblins" attend labelFunc043A_0E0E:
	message("\"Fierce little monsters, the goblins are. Not long in brains, but hard ta handle in a fight. Pomdirgun sends them at us in waves until we are all so tired that we can hardly stand and fight. But still, I'd rather deal with goblins than Gwani.\"");
	say();
	UI_remove_answer("goblins");
	UI_add_answer(["Pomdirgun", "Gwani"]);
labelFunc043A_0E0E:
	case "Pomdirgun" attend labelFunc043A_0E46:
	message("\"He's not like other goblins, no. ~He's smart, and clever. Almost makes me think he might be a Daemon of some sort, leadin' them ta take over the world. Cook us all if they can, they will.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0E3F;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"They'll not cook thee, Olon. Thou art already pickled!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"An' they'll not eat thy tongue, either... 'Tis too tough from overuse!\"");
	say();
	UI_remove_npc_face1();
labelFunc043A_0E3F:
	UI_remove_answer("Pomdirgun");
labelFunc043A_0E46:
	case "Gwani" attend labelFunc043A_0E94:
	message("\"Thou hast never heard of the Gwani? They're cousins ta the goblins that live north, beyond the frozen mountains.\" *\"Gwani make the goblins look like innocent children.\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0E89;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"How wouldst thou know, Olon? Thou hast never seen one, I'll wager!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Nor would I like ta... Thou art enough ta scare a man half ta death!\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"If thou weren't mine only steady customer, Olon, I'd throw thee out on thine ear! I would.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0E89:
	message("\"'Tis true, upon my sire's grave I swear it! They'll eat their own -- as well as outsiders!\" *\"If thou dost travel inta the northern wastes, thou art risking ending thy life in the cookpot of a fur-covered goblin!\"");
	say();
	UI_remove_answer("Gwani");
labelFunc043A_0E94:
	case "storms" attend labelFunc043A_0F12:
	message("\"I would almost believe that the world was at an end. These horrible storms have all but destroyed the town! How's a body ta make a livin' without a ship? How can a fisherman fish from a wagon... it sinks!\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0EC1;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Perhaps 'twould be best if thou didst not ask him about such things right now. He's no use like this.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0EC1:
	message("\"Can't put a sail on a cart and expect it ta take thee out ta sea and back again! Drowned!\" *\"Good men all... gone ta the bottom o' the sea! An' I should 'ave been with them! They'll come for me. I know they will! Down to the bottom o' the sea!\"");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0EEC;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("\"Come back in a few hours, ");
	message(var0000);
	message(". He'll have had a drink or two ta calm him down. Then thou canst have him tell his tales.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0EEC:
	gflags[0x0164] = true;
	gflags[0x0165] = true;
	UI_set_timer(0x000C);
	Func097F(0xFFC6, "@Bottom of the sea!@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x000C);
	abort;
labelFunc043A_0F12:
	case "pinecone" attend labelFunc043A_0F4F:
	UI_remove_answer("pinecone");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc043A_0F47;
	message("\"That be a mighty big pinecone thou dost have, ");
	message(var0000);
	message("!\"");
	say();
	message("\"I haven't seen one that size since the last time we sailed around that big forest north of here. They were all over there.\"");
	say();
	goto labelFunc043A_0F4F;
labelFunc043A_0F47:
	message("\"Sounds like a big pinecone!\"");
	say();
	message("\"I haven't heard tell of one that size since the last time we sailed around that big forest north of here. They were all over there.\"");
	say();
labelFunc043A_0F4F:
	case "dead cat" attend labelFunc043A_0FAD:
	UI_remove_answer("dead cat");
	if (!Func097D(0xFE9B, 0x0001, 0x037C, 0xFE99, 0x001E)) goto labelFunc043A_0F8F;
	message("\"Poor critter. Thou shouldst give it a decent burial... Before Jendon sees it, if thou dost know what be good for thee.\"");
	say();
	message("\"He be mighty partic'lar about things like that in his inn.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC6, "@Quick now!@", 0x0000);
	abort;
	goto labelFunc043A_0FAD;
labelFunc043A_0F8F:
	message("\"I never figured that Jendon would be listenin' ta my tales! It sounds just like them cats on that island...\"");
	say();
	message("\"Did I tell thee about the islands of cats?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0FA6;
	message("\"Oh, well... Another time, perhaps.\"");
	say();
	goto labelFunc043A_0FAD;
labelFunc043A_0FA6:
	UI_add_answer("island of cats");
labelFunc043A_0FAD:
	case "bye" attend labelFunc043A_0FDA:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks!@", 0x0000);
	Func097F(0xFFC6, "@Take care.@", 0x0002);
	Func08AA();
	goto labelFunc043A_0FDD;
labelFunc043A_0FDA:
	goto labelFunc043A_02FE;
labelFunc043A_0FDD:
	endconv;
labelFunc043A_0FDE:
	return;
}


