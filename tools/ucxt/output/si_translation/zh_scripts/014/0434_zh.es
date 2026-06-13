#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func09AE 0x9AE (var var0000);
extern void Func083D 0x83D ();
extern void Func083E 0x83E ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08A9 0x8A9 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0434 object#(0x434) ()
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

	var0000 = UI_game_hour();
	var0001 = Func0954();
	if (!(var0000 < 0x000C)) goto labelFunc0434_0020;
	var0002 = "morning";
	goto labelFunc0434_0039;
labelFunc0434_0020:
	if (!(var0000 > 0x0011)) goto labelFunc0434_0033;
	var0002 = "evening";
	goto labelFunc0434_0039;
labelFunc0434_0033:
	var0002 = "afternoon";
labelFunc0434_0039:
	if (!(event == 0x0007)) goto labelFunc0434_0053;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0434_0053:
	if (!(event == 0x0001)) goto labelFunc0434_0099;
	UI_item_say(0xFE9C, (("@Good " + var0002) + ", barkeep.@"));
	0xFFCC->Func07D1();
	Func097F(0xFFCC, (((("@Good " + var0002) + ", ") + var0001) + ".@"), 0x0002);
	UI_set_schedule_type(0xFFCC, 0x0003);
labelFunc0434_0099:
	if (!(event == 0x0009)) goto labelFunc0434_14D0;
	UI_run_schedule(0xFFCC);
	UI_clear_item_say(0xFFCC);
	UI_show_npc_face0(0xFFCC, 0x0000);
	var0003 = 0x0005;
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0434_00E7;
	message("\"I should have known that thou wert trouble! Askin' all those questions...\"");
	say();
	message("\"I shall not speak to thee until the Oracle hath ruled!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCC, "@Be gone!@", 0x0000);
	abort;
labelFunc0434_00E7:
	if (!(!UI_get_item_flag(0xFFCC, 0x001C))) goto labelFunc0434_0146;
	if (!UI_is_pc_female()) goto labelFunc0434_0122;
	message("\"I am Jendon, ");
	message(var0001);
	message(", proprietor of the Broken Oar. Hast thou need of something here?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0434_011B;
	message("\"How may I help thee this ");
	message(var0002);
	message("?\"");
	say();
	goto labelFunc0434_011F;
labelFunc0434_011B:
	message("\"Then thou shouldst be on thy way. 'Tis not a fit place for such a beautiful lady as thyself.\"");
	say();
labelFunc0434_011F:
	goto labelFunc0434_0132;
labelFunc0434_0122:
	message("\"The name's Jendon, ");
	message(var0001);
	message(", proprietor of the Broken Oar. What can I do for thee this ");
	message(var0002);
	message("?\"");
	say();
labelFunc0434_0132:
	UI_set_item_flag(0xFFCC, 0x001C);
	UI_add_answer("proprietor");
	goto labelFunc0434_0151;
labelFunc0434_0146:
	message("\"Returned so soon? How may I help thee now?\"");
	say();
	UI_add_answer("duties");
labelFunc0434_0151:
	if (!Func0942(0xFFC6)) goto labelFunc0434_0160;
	var0003 = 0x0003;
labelFunc0434_0160:
	if (!(UI_get_schedule_type(0xFFCC) == 0x0010)) goto labelFunc0434_0174;
	var0003 = 0x0001;
labelFunc0434_0174:
	UI_add_answer(["information"]);
	if (!(UI_get_schedule_type(0xFFCC) == 0x0017)) goto labelFunc0434_0193;
	UI_add_answer("buy");
labelFunc0434_0193:
	UI_add_answer("bye");
	var0004 = 0x0000;
labelFunc0434_01A0:
	converse attend labelFunc0434_14CF;
	case "buy" attend labelFunc0434_01C6:
	message("\"Dost thou desire a stiff drink, a warm meal, or a room where thou canst rest?\"");
	say();
	UI_push_answers();
	UI_add_answer(["food", "drink", "room", "nothing"]);
labelFunc0434_01C6:
	case "proprietor", "duties" attend labelFunc0434_01F4:
	UI_remove_answer(["proprietor", "duties"]);
	message("\"I used ta serve the sailors that spent their days drinkin' sea spray and their nights drinkin' ale. Not a pretty bunch, but they spent enough ta keep a roof over mine head.\"");
	say();
	message("\"But since those cursed storms destroyed the fleet, there hath been precious little business.\"");
	say();
	message("\"Used ta have a lad that served the drinks for me. His mother cooked and did the washin' up. But Danysia became ill and died -- the healers could do nothing -- and young Rindor went ta sea... never returned.\"");
	say();
	UI_add_answer(["storms"]);
labelFunc0434_01F4:
	case "storms" attend labelFunc0434_020B:
	UI_remove_answer("storms");
	message("\"Products of evil, I tell ya! We be folks as live off the bounty of the sea. But these storms do not like nothin' on the water!\"");
	say();
	message("\"All the fishin' ships have either been destroyed or transformed inta somethin' that was never meant ta touch water. That was what happened ta Rindor -- his ship suddenly became a grain wagon. Wagons don't float too good...\"");
	say();
labelFunc0434_020B:
	case "room" attend labelFunc0434_02B3:
	message("\"Used ta rent my sleepin' rooms regularly ta strangers that came through. But we've had only a few visitors since the storms began.\"");
	say();
	message("\"The cost for a room is 12 filari per person. Dost thou want one?\"");
	say();
	if (!Func0955()) goto labelFunc0434_02AF;
	var0005 = UI_get_party_list();
	var0006 = 0x0000;
	enum();
labelFunc0434_022F:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc0434_0247;
	var0006 = (var0006 + 0x0001);
	goto labelFunc0434_022F;
labelFunc0434_0247:
	var000A = (var0006 * 0x000C);
	var000B = UI_count_objects(0xFE9B, 0x03B4, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc0434_02A8;
	message("\"Here is thy key.\"");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x000B, 0x0004, 0x0000, true);
	var000C = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, 0x0000);
	message("\"Thy room be upstairs.\"");
	say();
	goto labelFunc0434_02AC;
labelFunc0434_02A8:
	message("\"Thou dost not have enough filari! If thou canst not pay, then I do not rent ye a room!\"");
	say();
labelFunc0434_02AC:
	goto labelFunc0434_02B3;
labelFunc0434_02AF:
	message("\"Some other time, then.\"");
	say();
labelFunc0434_02B3:
	case "information" attend labelFunc0434_02FC:
	if (!((!gflags[0x01A0]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc0434_02F2;
	message("\"What be thou interested in?\"");
	say();
	UI_push_answers();
	var0004 = 0x0001;
	UI_add_answer(["people", "places", "strange objects", "nothing more"]);
	goto labelFunc0434_02FC;
labelFunc0434_02F2:
	message("\"Return later, ");
	message(var0001);
	message(". This be a bad time now.\"");
	say();
labelFunc0434_02FC:
	case "people" attend labelFunc0434_0322:
	message("\"Who dost thou wish ta know about -- townsfolk or strangers?\"");
	say();
	UI_push_answers();
	var0004 = 0x0002;
	UI_add_answer(["townsfolk", "strangers", "nothing more"]);
labelFunc0434_0322:
	case "townsfolk" attend labelFunc0434_0358:
	UI_remove_answer("townsfolk");
	message("\"Whom dost thou wish ta know about?\"");
	say();
	UI_push_answers();
	var0004 = 0x0003;
	UI_add_answer(["the sailors", "the shopkeepers", "the healers", "the Priestess", "town leaders", "nothing more"]);
labelFunc0434_0358:
	case "the sailors" attend labelFunc0434_0380:
	UI_remove_answer("the sailors");
	message("\"These cursed wizard-storms have destroyed all of our ships. Olon is the only sailor left alive in the city.\"");
	say();
	message("\"Used to be a mate on one of the fishin' ships...\"");
	say();
	message("\"'til it sank.\"");
	say();
	message("\"Could say he's lucky... though he doth not think so. He doth spend most of his time here drinking... I fear that he is a lost soul. He even refuses ta go ta the Temple!\"");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_0380:
	case "the shopkeepers" attend labelFunc0434_03AB:
	UI_remove_answer("the shopkeepers");
	message("\"Aside from me, there be only old Delin the Provisioner, and he be half-crazy.\"");
	say();
	message("\"Delin hath not been quite right since his wife died, and the Magister came to take away his infant child.\"");
	say();
	message("\"His daughter, Alyssand, looks after him these days. She doth make certain that he doth not wander away.\"");
	say();
	UI_add_answer("Magister");
	var0003 = Func09AE(var0003);
labelFunc0434_03AB:
	case "Magister" attend labelFunc0434_03CF:
	UI_remove_answer("Magister");
	message("\"Thou dost not know of the Magister? The Mage who comes in the night and steals our children away?\"");
	say();
	message("\"The Mages of Moonshade claim that it would be dangerous for magically-gifted children to grow up without proper training.\"");
	say();
	message("\"I do not like it, but there is not much mortals can do against a City of Mages...\"");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_03CF:
	case "the healers" attend labelFunc0434_03F8:
	UI_remove_answer("the healers");
	message("\"Last one we had was killed by the Goblins a few months ago. Closest thing we have now is the herbalist, Delphynia.\"");
	say();
	message("\"Little slip of a woman. She's usually at her greenhouse or at the healer's hall.\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0434_03F4;
	message("\"Some of the townsfolk are a bit shy of having a female healer -- it doth go against tradition, if thou dost see? But it doth not bother me!\"");
	say();
	goto labelFunc0434_03F8;
labelFunc0434_03F4:
	message("\"But I say that 'tis no duty for a woman. I know thou wouldst agree with me, mate.\"");
	say();
labelFunc0434_03F8:
	case "the Priestess" attend labelFunc0434_0438:
	UI_remove_answer("the Priestess");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_0427;
	message("\"Kylista hath been imprisoned since the trial, ");
	message(var0001);
	message(". I think the experience hath been a boon to her.\"");
	say();
	message("\"She is a changed woman, I think. Hast thou visited her in her cell?\"");
	say();
	goto labelFunc0434_042F;
labelFunc0434_0427:
	message("\"Kylista is the Priestess of Beauty. Ta her falls the duty of keeping Fawn on the path of Beauty through these dark days.\"");
	say();
	message("\"An' that be a large job for such slender shoulders, make no mistake!\"");
	say();
labelFunc0434_042F:
	var0003 = Func09AE(var0003);
labelFunc0434_0438:
	case "town leaders" attend labelFunc0434_046B:
	UI_remove_answer("town leaders");
	message("\"Well now, there be plenty of those here. Who dost thou wish ta know about?\"");
	say();
	UI_push_answers();
	var0004 = 0x0004;
	UI_add_answer(["Lady Yelinda", "Chancellor Zulith", "Commander Jorvin", "the Great Captains", "nothing more"]);
labelFunc0434_046B:
	case "Lady Yelinda" attend labelFunc0434_048B:
	UI_remove_answer("Lady Yelinda");
	message("\"Lady Yelinda be the ruler here in Fawn. She be Fawn's living symbol of Beauty.\"");
	say();
	message("\"She be a wise lady. Always concerned with what the people think -- Always listens ta any advice offered.\"");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_048B:
	case "Chancellor Zulith" attend labelFunc0434_04AB:
	UI_remove_answer("Chancellor Zulith");
	message("\"I hate to speak ill of anyone, but for Zulith I shall make an exception.\"");
	say();
	message("\"He is called the Chancellor, but Zulith is little more than a messenger with an over-full ego. Thou wouldst be wise ta steer clear of him, for he takes offense at petty things.\"");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_04AB:
	case "Commander Jorvin" attend labelFunc0434_04ED:
	UI_remove_answer("Commander Jorvin");
	message("\"Jorvin be the Commander of the Fawn Guards. He is a fine, strong lad. And I think that he is sweet on the Lady.\"");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_04E4;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Aye! An' the Lady be sweet on him, too!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Thou shouldst not speak of the Lady so!\"");
	say();
labelFunc0434_04E4:
	var0003 = Func09AE(var0003);
labelFunc0434_04ED:
	case "the Great Captains" attend labelFunc0434_0543:
	UI_remove_answer("the Great Captains");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_052A;
	message("\"Why, they have been in disrepute ever since the trial. Joth hath taken to drinking, and as for Garth -- well, no woman will give him the time of day!");
	say();
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc0434_0523;
	message("\"As for old Voldin, I think he is not greatly missed.\"");
	say();
	goto labelFunc0434_0527;
labelFunc0434_0523:
	message("\"Voldin doth scheme endlessly in his cell, but what can come of it?\"");
	say();
labelFunc0434_0527:
	goto labelFunc0434_053A;
labelFunc0434_052A:
	message("\"To ease the burdens which Lady Yelinda must carry, the Great Captains assist her in ruling the city.\"");
	say();
	message("\"Voldin be the eldest of the three Great Captains. They say he's a wise man, but I do not much care for him.\"");
	say();
	message("\"Then there's Joth, an old sea-farin' man and a good customer of mine. But since he was hurt in the storms, he hath been a bit gruff.\"");
	say();
	message("\"Captain Garth is the youngest of Lady Yelinda's advisors. He is always trailing some lady's skirts, that puppy!\"");
	say();
labelFunc0434_053A:
	var0003 = Func09AE(var0003);
labelFunc0434_0543:
	case "strangers" attend labelFunc0434_0577:
	UI_remove_answer("strangers");
	message("\"The only visitors we have had of late are connected with the strange voyagers from a distant land. First came the sailors and scholars, and lastly, their leader.\"");
	say();
	message("\"Who wouldst thou care to hear about?\"");
	say();
	UI_push_answers();
	var0004 = 0x0003;
	UI_add_answer(["sailors", "scholars", "leader", "nothing more"]);
labelFunc0434_0577:
	case "sailors" attend labelFunc0434_05B8:
	UI_remove_answer("sailors");
	message("\"They were the crew of that ship that sailed from the other side of the world -- said something about Serpent Pillars in the ocean.\"");
	say();
	message("\"Brunt, Ruggs, Deadeye, Kalen... I found them congenial enough. Excepting Kalen... he enjoyed arguing with my customers.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_05A4;
	message("\"The Lady hath admitted them back into the city, thou dost know... They have not made trouble yet, but I'm keeping an eye on them.\"");
	say();
	goto labelFunc0434_05A8;
labelFunc0434_05A4:
	message("\"But when the sailors began spouting that Fellowship nonsense, Kylista did right, orderin' their contagion outside the city walls.\"");
	say();
labelFunc0434_05A8:
	var0003 = Func09AE(var0003);
	UI_add_answer("Fellowship");
labelFunc0434_05B8:
	case "Fellowship" attend labelFunc0434_05CF:
	UI_remove_answer("Fellowship");
	message("\"Mere foolishness. Everyone knows that Beauty is what is important.\"");
	say();
	message("\"After all these centuries, we have no intention of changing our sacred beliefs now...\"");
	say();
labelFunc0434_05CF:
	case "leader" attend labelFunc0434_05FE:
	UI_remove_answer("leader");
	message("\"He arrived in the most unnatural way! The sailors had erected a great pillar made outa some blackish rock...\"");
	say();
	message("\"Then in the night -- BLAM! Lightning, explosions! The pillar is disintegrated. And this mage is standing there.\"");
	say();
	message("\"Said his name was Batlin. Came to town askin' about the Daemon artifacts hereabouts. Bothering poor Delin...\"");
	say();
	message("\"Told him ta go talk ta others of his ilk, not badger the honest folk.\"");
	say();
	var0003 = Func09AE(var0003);
	UI_add_answer("Daemon artifacts");
labelFunc0434_05FE:
	case "Daemon artifacts" attend labelFunc0434_061D:
	UI_remove_answer("Daemon artifacts");
	message("\"Stay away from 'em myself. But thou canst not miss 'em...\"");
	say();
	message("\"Have snakes carved all over 'em. Left behind by the ancient inhabitants of this land. Horrible Daemonic folk.\"");
	say();
	message("\"Legend claims that the Lady keeps a Daemon shrine locked away in a secret room of her palace. Hard to believe, eh?\"");
	say();
	gflags[0x0158] = true;
labelFunc0434_061D:
	case "scholars" attend labelFunc0434_0654:
	UI_remove_answer("scholars");
	message("\"Came on the ship. Said The Fellowship had sent them here to study our way of life -- make maps, collect histories, and so forth.\"");
	say();
	message("\"Scots is the geographer. Spends all his time working on his new map of the continent.\"");
	say();
	message("\"Then there was the culturist -- her name was, uh...\"");
	say();
	message("\"Gwenno...\"");
	say();
	message("\"Askin' about folk tales. Bought the boys a round or two ta loosen their tongues. Her favorites were the tales of the Gwani.\"");
	say();
	gflags[0x0155] = true;
	var0003 = Func09AE(var0003);
	UI_add_answer("Gwani");
labelFunc0434_0654:
	case "Gwani" attend labelFunc0434_0673:
	UI_remove_answer("Gwani");
	message("\"Never seen 'em. Never wanted to.\"");
	say();
	message("\"Covered in fur, like an animal. Hear they're worse than Goblins... even eat their own kind!\"");
	say();
	message("\"Olon might be able to tell ya more.\"");
	say();
	gflags[0x01A9] = true;
labelFunc0434_0673:
	case "places" attend labelFunc0434_069D:
	message("\"I know little about the wilderness areas hereabouts. I be a town man, meself.\"");
	say();
	message("\"But I can tell thee about the other towns, if thou wouldst like.\"");
	say();
	UI_push_answers();
	var0004 = 0x0002;
	UI_add_answer(["wilderness areas", "other towns", "nothing more"]);
labelFunc0434_069D:
	case "wilderness areas" attend labelFunc0434_06C8:
	UI_remove_answer("wilderness areas");
	message("\"Oh, I wandered about a bit as a lad, but I never went too far. Never wanted ta lose myself...\"");
	say();
	message("\"Went as far west of here as that forest the Monitorian warriors use for their training. Did not enter. I got stopped by some of those fancy knights who told me ta turn back.\"");
	say();
	if (!(!gflags[0x002C])) goto labelFunc0434_06BF;
	message("\"Hear the woods are overrun by Goblins, these days.\"");
	say();
labelFunc0434_06BF:
	var0003 = Func09AE(var0003);
labelFunc0434_06C8:
	case "other towns" attend labelFunc0434_06F8:
	UI_remove_answer("other towns");
	message("\"Well now, like I said before, I have never visited the other towns. But I have heard tell of them.\"");
	say();
	UI_push_answers();
	var0004 = 0x0003;
	UI_add_answer(["Moonshade", "Monitor", "Sleeping Bull", "nothing more"]);
labelFunc0434_06F8:
	case "Moonshade" attend labelFunc0434_071C:
	UI_remove_answer("Moonshade");
	message("\"'Tis the town of wizards on an island east of here...\"");
	say();
	message("\"Which is just as well by my line of thinking. Who would want ta live where ya can't trust anything? Mark my words, don't thou trust no wizards. They'll lead ye wrong.\"");
	say();
	gflags[0x0157] = true;
	var0003 = Func09AE(var0003);
labelFunc0434_071C:
	case "Sleeping Bull" attend labelFunc0434_073C:
	UI_remove_answer("Sleeping Bull");
	message("\"Sleeping Bull is not exactly a town, but it doth lie on the road ta Monitor and is where thou mayest hire passage to Moonshade.\"");
	say();
	message("\"The inn is run by a man called Angus, and his wife, Devra. Honest folk... though I have heard tell that the inn was originally a pirate fort, a very long time ago.\"");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_073C:
	case "Monitor" attend labelFunc0434_0792:
	UI_remove_answer("Monitor");
	if (!(gflags[0x003E] == true)) goto labelFunc0434_0772;
	message("\"Why ask me, ");
	message(var0001);
	message("? 'Tis plain thou hast already been there.\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0434_076B;
	message("\"It looks most comely on thee. Thou must be the adventurous sort...\"");
	say();
	goto labelFunc0434_076F;
labelFunc0434_076B:
	message("\"Thou dost look a bit like a bold pirate with that jaunty mark.\"");
	say();
labelFunc0434_076F:
	goto labelFunc0434_0785;
labelFunc0434_0772:
	message("\"Arrogant people down there. Always wantin' ta beat thee. They have a big walled city south of here. Monitor is where the Pikemen are from.\"");
	say();
	message("\"Larcenous bunch of armoured scum! They'll protect the roads for thee... if thou dost give them all thy money!\"");
	say();
	message("\"The lot hereabouts weren't much good. The Goblins killed 'em.\"");
	say();
	UI_add_answer("Goblins");
labelFunc0434_0785:
	gflags[0x019F] = true;
	var0003 = Func09AE(var0003);
labelFunc0434_0792:
	case "Goblins" attend labelFunc0434_07AF:
	UI_remove_answer("Goblins");
	message("\"Vile creatures, ");
	message(var0001);
	message("! They steal our children if we don't keep close watch. Like human flesh, they do.\"");
	say();
	message("\"They've become bolder here of late. That's why Fawn closes her gates at night now.\"");
	say();
labelFunc0434_07AF:
	case "food" attend labelFunc0434_07BE:
	message("\"Aye, we have something here that'll fill thy belly.\"");
	say();
	Func083D();
labelFunc0434_07BE:
	case "drink" attend labelFunc0434_07CD:
	message("\"If thou dost want ta wet thy whistle, I can sell thee a fine drink -- Fawnish Ale. 'Tis a strong refreshment, though...\"");
	say();
	Func083E();
labelFunc0434_07CD:
	case "strange objects" attend labelFunc0434_0A1A:
	gflags[0x01AA] = true;
	UI_remove_answer("strange objects");
	var0004 = (var0004 + 0x0001);
	var000D = [];
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc0434_0805;
	var000D = (var000D & "pinecone");
labelFunc0434_0805:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc0434_081A;
	var000D = (var000D & "moonsilk stockings");
labelFunc0434_081A:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc0434_082F;
	var000D = (var000D & "urn");
labelFunc0434_082F:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc0434_0844;
	var000D = (var000D & "apparatus");
labelFunc0434_0844:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc0434_0859;
	var000D = (var000D & "pumice");
labelFunc0434_0859:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc0434_086E;
	var000D = (var000D & "lost ring");
labelFunc0434_086E:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc0434_0883;
	var000D = (var000D & "fur cap");
labelFunc0434_0883:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc0434_0898;
	var000D = (var000D & "slippers");
labelFunc0434_0898:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc0434_08AD;
	var000D = (var000D & "breastplate");
labelFunc0434_08AD:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc0434_08C2;
	var000D = (var000D & "blue egg");
labelFunc0434_08C2:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc0434_08D7;
	var000D = (var000D & "strange hairbrush");
labelFunc0434_08D7:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0434_08EC;
	var000D = (var000D & "bottle of wine");
labelFunc0434_08EC:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc0434_0901;
	var000D = (var000D & "strange coins");
labelFunc0434_0901:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc0434_0916;
	var000D = (var000D & "skull");
labelFunc0434_0916:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc0434_092B;
	var000D = (var000D & "bloody hand");
labelFunc0434_092B:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc0434_0940;
	var000D = (var000D & "plain shield");
labelFunc0434_0940:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc0434_0955;
	var000D = (var000D & "glowing rock");
labelFunc0434_0955:
	if (!(gflags[0x007B] && (!gflags[0x007C]))) goto labelFunc0434_096A;
	var000D = (var000D & "fish-net stockings");
labelFunc0434_096A:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0434_0986;
	var000D = (var000D & "brown bottle");
labelFunc0434_0986:
	if (!(var000D == [])) goto labelFunc0434_09B6;
	var000E = Func0992(0x0001, (("@But we have no strange objects to ask about, " + var0001) + ".@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"If thou dost think of anything, let me know!\"");
	say();
	goto labelFunc0434_0A1A;
labelFunc0434_09B6:
	message("\"What sort of items art thou inquiring about?\"");
	say();
	UI_push_answers();
	var000F = 0x0005;
labelFunc0434_09C4:
	if (!(var000F > 0x0000)) goto labelFunc0434_0A13;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_09FF;
	var000F = 0x0000;
	var0011 = true;
labelFunc0434_09FF:
	UI_add_answer(var0010);
	var000F = (var000F - 0x0001);
	goto labelFunc0434_09C4;
labelFunc0434_0A13:
	UI_add_answer("nothing more");
labelFunc0434_0A1A:
	case "pinecone" attend labelFunc0434_0A8A:
	UI_remove_answer("pinecone");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0434_0A45;
	message("\"That looks like a pinecone to me!\"");
	say();
	goto labelFunc0434_0A49;
labelFunc0434_0A45:
	message("\"Sounds like a pinecone to me!\"");
	say();
labelFunc0434_0A49:
	message("\"They come from big trees, but not like those hereabouts. Thou couldst ask Olon about it, he hath travelled quite a bit.\"");
	say();
	gflags[0x0191] = true;
	if (!(!var0011)) goto labelFunc0434_0A8A;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0A83;
	var0011 = true;
labelFunc0434_0A83:
	UI_add_answer(var0010);
labelFunc0434_0A8A:
	case "moonsilk stockings" attend labelFunc0434_0B6D:
	UI_remove_answer("moonsilk stockings");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc0434_0AE8;
	if (!UI_is_pc_female()) goto labelFunc0434_0ADD;
	message("\"Hast thou no modesty, ");
	message(var0001);
	message("? Showing thy stockings about like that...\"");
	say();
	var000E = Func0992(0x0001, "@They are not hers!@", "@They are not mine!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Oh... They are fine things, not what thou wouldst find among the women of fisher-folk.\"");
	say();
	goto labelFunc0434_0AE1;
labelFunc0434_0ADD:
	message("\"These are fine things, not what thou wouldst find among the women of fisher-folk.\"");
	say();
labelFunc0434_0AE1:
	message("\"Perhaps Alyssand could help thee. She is a good hand at weaving the stockings that are found hereabouts.\"");
	say();
	goto labelFunc0434_0B30;
labelFunc0434_0AE8:
	if (!UI_is_pc_female()) goto labelFunc0434_0B22;
	message("\"I know nothing of women's stockings, ");
	message(var0001);
	message("!\"");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_0B1B;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Aye! That be the truth! No woman would have him!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0434_0B1B:
	message("\"Seek thou Alyssand. She makes stockings. She might be able to help thee.\"");
	say();
	goto labelFunc0434_0B30;
labelFunc0434_0B22:
	message("\"A mighty fancy pair of stockings, ");
	message(var0001);
	message("! Thou wilt make some woman happy...\"");
	say();
	message("\"We have none so fancy here -- Only the ones that Alyssand makes.\"");
	say();
labelFunc0434_0B30:
	gflags[0x0192] = true;
	if (!(!var0011)) goto labelFunc0434_0B6D;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0B66;
	var0011 = true;
labelFunc0434_0B66:
	UI_add_answer(var0010);
labelFunc0434_0B6D:
	case "urn" attend labelFunc0434_0C04:
	UI_remove_answer("urn");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc0434_0BBD;
	message("\"Why art thou carrying a dead person with thee? Was it someone kin to thee?\"");
	say();
	var000E = Func0992(0x0001, "@What?!@", "@What?!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Thou didst not know? That urn holds the ashes of one of Monitor's dead warriors.\"");
	say();
	message("\"I am sure they would appreciate its return, ");
	message(var0001);
	message(".\"");
	say();
	goto labelFunc0434_0BCB;
labelFunc0434_0BBD:
	message("\"I cannot be sure without seeing it, ");
	message(var0001);
	message(". But it sounds like one of the urns that hold the ashes of one of Monitor's dead warriors.\"");
	say();
	message("\"I am sure they would appreciate its return...\"");
	say();
labelFunc0434_0BCB:
	if (!(!var0011)) goto labelFunc0434_0C04;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0BFD;
	var0011 = true;
labelFunc0434_0BFD:
	UI_add_answer(var0010);
labelFunc0434_0C04:
	case "apparatus" attend labelFunc0434_0C74:
	UI_remove_answer("apparatus");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0434_0C2F;
	message("\"Doth not look like anything I ever heard of.\"");
	say();
	goto labelFunc0434_0C33;
labelFunc0434_0C2F:
	message("\"Doth not sound like anything I ever heard of.\"");
	say();
labelFunc0434_0C33:
	message("\"But perhaps Delphynia could help thee. She uses all manner of fancy equipment to prepare her herbs for healing and such.\"");
	say();
	gflags[0x0193] = true;
	if (!(!var0011)) goto labelFunc0434_0C74;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0C6D;
	var0011 = true;
labelFunc0434_0C6D:
	UI_add_answer(var0010);
labelFunc0434_0C74:
	case "pumice" attend labelFunc0434_0CE4:
	UI_remove_answer("pumice");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0434_0CA7;
	message("\"What a strange rock... Not from around here. Wouldn't be much good for building or for ballast.\"");
	say();
	message("\"Go thou and ask Delphynia, though. She collects odd things that she calls reagents. Perhaps she might know what that is.\"");
	say();
	gflags[0x0194] = true;
	goto labelFunc0434_0CAB;
labelFunc0434_0CA7:
	message("\"I have never heard of such a rock. Who doth care about rocks?\"");
	say();
labelFunc0434_0CAB:
	if (!(!var0011)) goto labelFunc0434_0CE4;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0CDD;
	var0011 = true;
labelFunc0434_0CDD:
	UI_add_answer(var0010);
labelFunc0434_0CE4:
	case "lost ring" attend labelFunc0434_0D83:
	UI_remove_answer("lost ring");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc0434_0D42;
	message("\"Why, that looks exactly like the engagement ring that Keth gave Alyssand!\"");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_0D32;
	message("\"What dost thou think, Olon?\"");
	say();
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Aye, sure as ships sail. That be Alyssand's ring all right. Keth showed it to me enough times, I should know.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0434_0D32:
	message("\"Thou shouldst find Alyssand and give to her the ring, ");
	message(var0001);
	message(". She hath been a bit crazy since she lost it\"");
	say();
	Func08A9();
	goto labelFunc0434_0D4A;
labelFunc0434_0D42:
	message("\"Can't say without seeing it, but it might be the ring that one of our young ladies did lose.\"");
	say();
	message("\"Bring it here, and I can tell thee for certain.\"");
	say();
labelFunc0434_0D4A:
	if (!(!var0011)) goto labelFunc0434_0D83;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0D7C;
	var0011 = true;
labelFunc0434_0D7C:
	UI_add_answer(var0010);
labelFunc0434_0D83:
	case "fur cap" attend labelFunc0434_0DF7:
	UI_remove_answer("fur cap");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc0434_0DB2;
	message("\"Nice cap. A bit small, though. Not something a fisherman would wear... It would blow off the ship.\"");
	say();
	message("\"Ask thou Delin if he hath seen a cap like this. He is the provisioner. He should know.\"");
	say();
	goto labelFunc0434_0DBA;
labelFunc0434_0DB2:
	message("\"Doth not sound like something a fisherman would wear...\"");
	say();
	message("\"Ask thou Delin if he hath heard of such a cap. He is the provisioner. He should know.\"");
	say();
labelFunc0434_0DBA:
	gflags[0x0195] = true;
	if (!(!var0011)) goto labelFunc0434_0DF7;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0DF0;
	var0011 = true;
labelFunc0434_0DF0:
	UI_add_answer(var0010);
labelFunc0434_0DF7:
	case "slippers" attend labelFunc0434_0E67:
	UI_remove_answer("slippers");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc0434_0E2A;
	message("\"I cannot recall having seen any of the women in town with slippers like these.\"");
	say();
	message("\"Thou mightest check with Delin to see if he remembers who purchased these.\"");
	say();
	gflags[0x0196] = true;
	goto labelFunc0434_0E2E;
labelFunc0434_0E2A:
	message("\"I cannot recall any of the women wearing slippers like thou hast described.\"");
	say();
labelFunc0434_0E2E:
	if (!(!var0011)) goto labelFunc0434_0E67;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0E60;
	var0011 = true;
labelFunc0434_0E60:
	UI_add_answer(var0010);
labelFunc0434_0E67:
	case "breastplate" attend labelFunc0434_0F0F:
	UI_remove_answer("breastplate");
	gflags[0x0294] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000)) goto labelFunc0434_0EB4;
	message("\"Perhaps Fawn's luck shall change after all!\"");
	say();
	message("\"That is the Priestess Kylista's ceremonial breastplate!");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_0EAD;
	message("\"Thou shouldst leave it in the Temple, for it belongs within the Place of Beauty.\"");
	say();
	goto labelFunc0434_0EB1;
labelFunc0434_0EAD:
	message("\"Thou shouldst take it to her quickly!\"");
	say();
labelFunc0434_0EB1:
	goto labelFunc0434_0ED6;
labelFunc0434_0EB4:
	message("\"Too bad thou dost not have it with thee. But that is Fawn's luck nowadays!\"");
	say();
	message("\"It sounds like Priestess Kylista's ceremonial breastplate.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_0ED2;
	message("\"If it is, then it belongs in the Temple. Perhaps thou shouldst leave it before the Oracle.\"");
	say();
	goto labelFunc0434_0ED6;
labelFunc0434_0ED2:
	message("\"Thou shouldst as least tell her that thou hast seen it -- it will cheer her.\"");
	say();
labelFunc0434_0ED6:
	if (!(!var0011)) goto labelFunc0434_0F0F;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0F08;
	var0011 = true;
labelFunc0434_0F08:
	UI_add_answer(var0010);
labelFunc0434_0F0F:
	case "blue egg" attend labelFunc0434_0F96:
	UI_remove_answer("blue egg");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0434_0F51;
	message("\"A rotten egg! How it smells! Leave here with that!\"");
	say();
	Func097F(0xFFCC, "@Whew!@", 0x0000);
	UI_set_schedule_type(0xFFCC, 0x0014);
	abort;
	goto labelFunc0434_0F5D;
labelFunc0434_0F51:
	message("\"I have never heard of a blue egg.\"");
	say();
	message("\"Ask Delphynia. She doth know all manner of strange things.\"");
	say();
	gflags[0x0197] = true;
labelFunc0434_0F5D:
	if (!(!var0011)) goto labelFunc0434_0F96;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0F8F;
	var0011 = true;
labelFunc0434_0F8F:
	UI_add_answer(var0010);
labelFunc0434_0F96:
	case "strange hairbrush" attend labelFunc0434_1006:
	UI_remove_answer("strange hairbrush");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc0434_0FC9;
	message("\"Strange lookin' brush...\"");
	say();
	message("\"Come ta think of it, it looks like something that Jorvin was talking about, when our healer was killed. Thou shouldst show it to him.\"");
	say();
	gflags[0x0198] = true;
	goto labelFunc0434_0FCD;
labelFunc0434_0FC9:
	message("\"Hmmm... sounds malformed. No one in the City of Beauty would use such a brush.\"");
	say();
labelFunc0434_0FCD:
	if (!(!var0011)) goto labelFunc0434_1006;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0FFF;
	var0011 = true;
labelFunc0434_0FFF:
	UI_add_answer(var0010);
labelFunc0434_1006:
	case "bottle of wine" attend labelFunc0434_1072:
	UI_remove_answer("bottle of wine");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0434_1035;
	message("\"I know that bottle! That there is Moonshade wine.\"");
	say();
	message("\"I do not have much demand for it around here, though. The sailors don't care much for such a weak vintage -- Fawn folk prefer Fawn ale!\"");
	say();
	goto labelFunc0434_1039;
labelFunc0434_1035:
	message("\"Doth not sound like Fawn ale... Maybe that weak vintage from Moonshade. I do not sell it here -- Fawn folk prefer Fawn ale!\"");
	say();
labelFunc0434_1039:
	if (!(!var0011)) goto labelFunc0434_1072;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_106B;
	var0011 = true;
labelFunc0434_106B:
	UI_add_answer(var0010);
labelFunc0434_1072:
	case "strange coins" attend labelFunc0434_10EC:
	UI_remove_answer("strange coins");
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0434_10A1;
	message("\"Why, those are Filari! Those are the coins of Fawn...\"");
	say();
	message("\"They simply appeared, thou sayest? Strange storms, these. I seem to recall Delin complaining that he had lost some coins -- but I thought that was his forgetfulness!\"");
	say();
	goto labelFunc0434_10AF;
labelFunc0434_10A1:
	message("\"Without seeing the coins, ");
	message(var0001);
	message(", I cannot tell thee what coins thou didst have.\"");
	say();
	message("\"Perhaps thou shouldst ask Delin. He is the Provisioner here in town.\"");
	say();
labelFunc0434_10AF:
	gflags[0x019A] = true;
	if (!(!var0011)) goto labelFunc0434_10EC;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_10E5;
	var0011 = true;
labelFunc0434_10E5:
	UI_add_answer(var0010);
labelFunc0434_10EC:
	case "skull" attend labelFunc0434_1162:
	UI_remove_answer("skull");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0434_111F;
	message("\"'Tis the skull of some beast, obviously. Perhaps it is a Goblin skull -- I would be glad of that.\"");
	say();
	message("\"Ask Jorvin if it is a Goblin skull. If it is, I might buy it from thee to hang above the door!\"");
	say();
	gflags[0x019B] = true;
	goto labelFunc0434_1129;
labelFunc0434_111F:
	message("\"I am no expert on the bones of creatures, ");
	message(var0001);
	message(". Especially bones that I cannot see.\"");
	say();
labelFunc0434_1129:
	if (!(!var0011)) goto labelFunc0434_1162;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_115B;
	var0011 = true;
labelFunc0434_115B:
	UI_add_answer(var0010);
labelFunc0434_1162:
	case "bloody hand" attend labelFunc0434_11DB:
	UI_remove_answer("bloody hand");
	if (!Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000)) goto labelFunc0434_119E;
	message("\"What manner of beast art thou, to carry such things with thee?!\"");
	say();
	message("\"Thou art as bad as those horrible wizards from Moonshade! No respect for life!\"");
	say();
	Func097F(0xFFCC, "@Take it away!@", 0x0000);
	abort;
	goto labelFunc0434_11A2;
labelFunc0434_119E:
	message("\"Sounds like the work of those horrible wizards from Moonshade! No respect for life!\"");
	say();
labelFunc0434_11A2:
	if (!(!var0011)) goto labelFunc0434_11DB;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_11D4;
	var0011 = true;
labelFunc0434_11D4:
	UI_add_answer(var0010);
labelFunc0434_11DB:
	case "plain shield" attend labelFunc0434_125B:
	UI_remove_answer("plain shield");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc0434_1210;
	message("\"Do I look like a warrior, ");
	message(var0001);
	message("? What would a poor innkeeper know about arms and such like?\"");
	say();
	message("\"Talk with Jorvin. He of any here in Fawn would know where such armour hails from.\"");
	say();
	goto labelFunc0434_121E;
labelFunc0434_1210:
	message("\"I have no knowledge of arms, ");
	message(var0001);
	message(". I am a poor innkeeper, not a guard.\"");
	say();
	message("\"Seek Jorvin's aid. He is well trained with the devices of battle. I shall content myself with a mug and broom...\"");
	say();
labelFunc0434_121E:
	gflags[0x019C] = true;
	if (!(!var0011)) goto labelFunc0434_125B;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_1254;
	var0011 = true;
labelFunc0434_1254:
	UI_add_answer(var0010);
labelFunc0434_125B:
	case "glowing rock" attend labelFunc0434_12D1:
	UI_remove_answer("glowing rock");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc0434_1290;
	message("\"Now that is strange, indeed! It fairly reeks of wizardry, ");
	message(var0001);
	message(".\"");
	say();
	message("\"I shall thank thee to take it out of here. I want nothing to do with such evil things... Take it to Delphynia, if thou must parade it about.\"");
	say();
	goto labelFunc0434_1294;
labelFunc0434_1290:
	message("\"I suppose that Delphynia would be the best to answer thy question. This stone sounds magical -- since she deals with spell reagents, perhaps she'll know of it.\"");
	say();
labelFunc0434_1294:
	gflags[0x019D] = true;
	if (!(!var0011)) goto labelFunc0434_12D1;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_12CA;
	var0011 = true;
labelFunc0434_12CA:
	UI_add_answer(var0010);
labelFunc0434_12D1:
	case "fish-net stockings" attend labelFunc0434_13AA:
	UI_remove_answer("fish-net stockings");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc0434_132B;
	if (!UI_is_pc_female()) goto labelFunc0434_1324;
	message("\"'Tis not proper, ");
	message(var0001);
	message(", flaunting personal garments about like that!\"");
	say();
	var000E = Func0992(0x0001, "@They are not hers!@", "@They are not mine!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Well... uh... these are made right here, by young Alyssand.\"");
	say();
	goto labelFunc0434_1328;
labelFunc0434_1324:
	message("\"These are stockings thou mayest find our fisher women wearing. They are made right here, by young Alyssand.\"");
	say();
labelFunc0434_1328:
	goto labelFunc0434_136D;
labelFunc0434_132B:
	if (!UI_is_pc_female()) goto labelFunc0434_1365;
	message("\"What dost thou take me for!\"");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_135E;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Trust me, ");
	message(var0001);
	message(", Jendon knows nothing of the fairer sex!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0434_135E:
	message("\"Seek another woman to help thee... Alyssand, perhaps. She makes stockings.\"");
	say();
	goto labelFunc0434_136D;
labelFunc0434_1365:
	message("\"If it is stockings thou seekest...\"");
	say();
	message("\"Alyssand weaves them right here in Fawn.\"");
	say();
labelFunc0434_136D:
	gflags[0x019E] = true;
	if (!(!var0011)) goto labelFunc0434_13AA;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_13A3;
	var0011 = true;
labelFunc0434_13A3:
	UI_add_answer(var0010);
labelFunc0434_13AA:
	case "brown bottle" attend labelFunc0434_143D:
	UI_remove_answer("brown bottle");
	message("\"Why, thou hast better taste than I didst give thee credit for, ");
	message(var0001);
	message(". I would not have chosen thee for a Fawn ale drinker!\"");
	say();
	message("\"No one outside of our town cares for it at all.\"");
	say();
	if (!UI_npc_nearby(0xFFC6)) goto labelFunc0434_13EE;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Thou dost speak in error, friend. Remember, thou hast a customer in Monitor...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Aye. The innkeeper in Monitor doth order Fawnish ale from time to time, but I know not for whom.\"");
	say();
labelFunc0434_13EE:
	message("\"Wouldst thou like more Fawnish ale?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0434_1400;
	Func083E();
	goto labelFunc0434_1404;
labelFunc0434_1400:
	message("\"Another time, then...\"");
	say();
labelFunc0434_1404:
	if (!(!var0011)) goto labelFunc0434_143D;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_1436;
	var0011 = true;
labelFunc0434_1436:
	UI_add_answer(var0010);
labelFunc0434_143D:
	case "nothing more" attend labelFunc0434_147F:
	if (!(var0004 == 0x0001)) goto labelFunc0434_145A;
	UI_pop_answers();
	message("\"I wish I could have been of more help to thee...\"");
	say();
	goto labelFunc0434_147F;
labelFunc0434_145A:
	if (!(var0004 > 0x0001)) goto labelFunc0434_1475;
	UI_pop_answers();
	var0004 = (var0004 - 0x0001);
	goto labelFunc0434_145A;
labelFunc0434_1475:
	message("\"Glad ta be of service ta thee, ");
	message(var0001);
	message(". Return if thou hast more questions.\"");
	say();
labelFunc0434_147F:
	case "change subject" attend labelFunc0434_148F:
	UI_pop_answers();
	message("\"Why, we've drifted completely off the subject! What were we talking about...?\"");
	say();
labelFunc0434_148F:
	case "nothing" attend labelFunc0434_149F:
	message("\"I understand -- everyone is short of coins these days...\"");
	say();
	UI_pop_answers();
labelFunc0434_149F:
	case "bye" attend labelFunc0434_14CC:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(0xFFCC, "@Walk in Beauty!@", 0x0002);
	Func08AA();
	goto labelFunc0434_14CF;
labelFunc0434_14CC:
	goto labelFunc0434_01A0;
labelFunc0434_14CF:
	endconv;
labelFunc0434_14D0:
	return;
}


