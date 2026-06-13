#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0431 object#(0x431) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	if (!(event == 0x0007)) goto labelFunc0431_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0431_002D:
	if (!(event == 0x0001)) goto labelFunc0431_005B;
	UI_item_say(0xFE9C, "@A moment, sir.@");
	0xFFCF->Func07D1();
	Func097F(0xFFCF, "@At thy service.@", 0x0005);
	UI_set_schedule_type(0xFFCF, 0x0003);
labelFunc0431_005B:
	if (!(event == 0x0009)) goto labelFunc0431_047A;
	UI_run_schedule(0xFFCF);
	UI_clear_item_say(0xFFCF);
	UI_show_npc_face0(0xFFCF, 0x0000);
	var0004 = UI_get_item_flag(0xFFCF, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0431_00B6;
	message("\"Why, thou art the confidant of the accused blasphemer! I cannot be seen speaking with thee...\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCF, "@Off with thee!@", 0x0000);
	UI_set_schedule_type(0xFFCF, 0x000C);
	abort;
labelFunc0431_00B6:
	if (!(var0004 == false)) goto labelFunc0431_0116;
	if (!(gflags[0x003E] == true)) goto labelFunc0431_00E6;
	if (!(var0002 == true)) goto labelFunc0431_00DF;
	message("\"Ah, a sweet savior! No fairer face hath a warrior worn.\"");
	say();
	message("\"Welcome to Fawn, dear ");
	message(var0000);
	message(". I am Great Captain Garth, but thou canst call me Garth.\"");
	say();
	goto labelFunc0431_00E3;
labelFunc0431_00DF:
	message("\"Welcome to Fawn, noble Pikeman. We are honored by thy presence.\" *\"I am Great Captain Garth. Call me Garth.\"");
	say();
labelFunc0431_00E3:
	goto labelFunc0431_0109;
labelFunc0431_00E6:
	if (!(var0002 == true)) goto labelFunc0431_00FF;
	message("\"Welcome to Fawn, most fair ");
	message(var0000);
	message("! Now that thou art here, we can truly say that this is the city of Beauty.\"");
	say();
	message("\"I am Great Captain Garth, but thou canst call me Garth.\"");
	say();
	goto labelFunc0431_0109;
labelFunc0431_00FF:
	message("\"Thou art a welcome sight, noble ");
	message(var0000);
	message(".\" ~\"We are sorely in need of more able-bodied fighters in Fawn's darkest hour.\" *\"I am Great Captain Garth. Call me Garth.\"");
	say();
labelFunc0431_0109:
	UI_set_item_flag(0xFFCF, 0x001C);
	goto labelFunc0431_0135;
labelFunc0431_0116:
	if (!(var0002 == true)) goto labelFunc0431_012B;
	message("\"Now may I rest my weary eyes on thy lovely face. Thou art always a welcome sight, ");
	message(var0001);
	message(".\"");
	say();
	goto labelFunc0431_0135;
labelFunc0431_012B:
	message("\"'Tis good to see thee, ");
	message(var0001);
	message(". I trust that thou art feeling well.\"");
	say();
labelFunc0431_0135:
	UI_add_answer(["storms", "goblins", "bye"]);
labelFunc0431_0145:
	converse attend labelFunc0431_0479;
	case "storms" attend labelFunc0431_0168:
	message("\"Without question, these storms are unnatural. If they do not cease soon, Fawn will perish!\" ~\"Already our livelihood hath been taken from us.\" ~\"And women weep at the loss of those who once sailed in our fleet. We have no idea what became of them.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer(["livelihood", "fleet"]);
labelFunc0431_0168:
	case "livelihood" attend labelFunc0431_01D4:
	UI_remove_answer("livelihood");
	message("\"As thou canst see, Fawn is built upon the water. We are... or were... fishermen by trade.\"");
	say();
	message("\"That is how we fed our people, and how we traded with the other towns.\"");
	say();
	if (!(var0002 == true)) goto labelFunc0431_01AF;
	message("\"But we are a hardy lot.\" ~\"We will weather these foul storms and rebuild what hath been destroyed.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0431_01A1;
	message("\"Perhaps I shall speak with Lady Yelinda again. Surely, she doth need mine advice if this town is to be saved...\"");
	say();
	goto labelFunc0431_01AC;
labelFunc0431_01A1:
	message("\"Lady Yelinda hath charged me with the task of finding a way to sustain the people until the storms pass.\"");
	say();
	UI_add_answer("Lady Yelinda");
labelFunc0431_01AC:
	goto labelFunc0431_01D4;
labelFunc0431_01AF:
	message("\"We have lost most of our men to the sea and storms.\" ~\"We do not know if they were drowned or transformed.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0431_01C9;
	message("\"May Beauty lay their souls to rest...\"");
	say();
	goto labelFunc0431_01D4;
labelFunc0431_01C9:
	message("\"Now Lady Yelinda hath charged me with the task of finding a way to sustain our people until we can rebuild our ships.\" ~\"To be truthful, I am not hopeful...\"");
	say();
	UI_add_answer("Lady Yelinda");
labelFunc0431_01D4:
	case "Lady Yelinda" attend labelFunc0431_020D:
	if (!(var0002 == true)) goto labelFunc0431_01EF;
	message("\"Lady Yelinda rules Fawn, assisted by Joth, Voldin and myself.\" ~\"Many say she is the most beautiful woman in the city.\" ~\"Others, like Zulith, say Kylista is more beautiful.\"");
	say();
	message("\"Now that I have seen thee, I think they are all wrong.\" ~\"Thou art the most wondrous beauty I have seen.\"");
	say();
	goto labelFunc0431_01F3;
labelFunc0431_01EF:
	message("\"Lady Yelinda is a ruler of Fawn, at least in name.\" ~\"Zulith fetches and carries for her, and makes her feel important.\" *\"But the truth of the matter is that Fawn's real power lies in the hands of Joth, Voldin and Kylista.\"");
	say();
labelFunc0431_01F3:
	UI_remove_answer("Lady Yelinda");
	UI_add_answer(["Zulith", "Joth", "Voldin", "Kylista"]);
labelFunc0431_020D:
	case "Zulith" attend labelFunc0431_0220:
	message("\"He is the messenger between the Great Captains and Lady Yelinda.\" ~\"He takes orders well enough, if thou dost stroke his ego enough.\" *\"But, if thou shouldst belittle him, beware!\" ~\"He hath the ears of both Yelinda and Kylista.\"");
	say();
	UI_remove_answer("Zulith");
labelFunc0431_0220:
	case "Joth" attend labelFunc0431_0246:
	message("\"Joth was a fine seaman, before his injury. But he hath little use for the politics of those on the land.\" *\"He doth do his best to represent the interests of the fleet. But it is plain that his heart is still at sea.\"");
	say();
	if (!(var0002 == false)) goto labelFunc0431_0238;
	message("\"Without his support on the Council, I am locked against Voldin and must defer to his seniority.\" ~\"If Joth would waken to life as it is, Fawn would be in far better shape.\"");
	say();
labelFunc0431_0238:
	UI_remove_answer("Joth");
	UI_add_answer("injury");
labelFunc0431_0246:
	case "injury" attend labelFunc0431_026C:
	message("\"Before one of those freak storms hit, a fine lighthouse stood near the town to guide the fleet home at night.\" ~\"During one very bad storm, its light went out and the sailors could not see to make their way back to the docks.\"");
	say();
	message("\"Joth ordered his ship to stand near the shoals and set fire to her sails so that the remainder of the fleet could find their way in.\" ~\"All of the ships docked safely that night, except for his.\"");
	say();
	message("\"A freak change of wind cast his ship aground and he was trapped in the rigging.\"");
	say();
	message("\"The healers say his back will never be the same again. He can never go back to sea.\"");
	say();
	UI_remove_answer("injury");
	UI_add_answer("lighthouse");
labelFunc0431_026C:
	case "lighthouse" attend labelFunc0431_0286:
	message("\"The heart seemed to go out of the sailors when the storms exchanged our lighthouse for a haunted building.\" ~\"They believed that it was a bad omen...\" *\"They were right.\"");
	say();
	UI_remove_answer("lighthouse");
	UI_add_answer("haunted building");
labelFunc0431_0286:
	case "haunted building" attend labelFunc0431_02A1:
	message("\"Joth led a party of sailors and guardsmen to check what happened to the lighthouse.\" ~\"We suspected goblin mayhem, to lure us out of the city.\"");
	say();
	message("\"The party returned pale and shaken. All they could tell us was that the lighthouse was gone.\" ~\"In its place was a strange haunted building!\"");
	say();
	message("\"I know no more than that. I must concern myself with trying to provide Fawn with food.\"");
	say();
	UI_remove_answer("haunted building");
labelFunc0431_02A1:
	case "Voldin" attend labelFunc0431_02C1:
	message("\"Voldin is the senior member of the Great Captains.\" ~\"He is a very ambitious man with strong opinions and no great love for our fishing captains.\"");
	say();
	UI_remove_answer("Voldin");
	UI_add_answer(["opinions", "fishing captains"]);
labelFunc0431_02C1:
	case "opinions" attend labelFunc0431_02E9:
	if (!(var0002 == true)) goto labelFunc0431_02DE;
	message("\"I shall merely say that Voldin's views are very old fashioned, ");
	message(var0000);
	message(".\" ~\"He firmly believes in the sanctity of Beauty and the protection of all things beautiful.\"");
	say();
	goto labelFunc0431_02E2;
labelFunc0431_02DE:
	message("\"Voldin doth have a very limited opinion of a woman's intelligence.\" ~\"He doth not believe that they are capable of making decisions more challenging than what to wear in the morning.\" *\"I fear that Lady Yelinda is too easily led by Voldin's wishes.\"");
	say();
labelFunc0431_02E2:
	UI_remove_answer("opinions");
labelFunc0431_02E9:
	case "fishing captains" attend labelFunc0431_0300:
	message("\"Voldin hath long been a bully -- from his days as a guardsman, to his days as a sea captain.\" ~\"Few sailors were willing to serve under him for long.\"");
	say();
	message("\"When the Council seat opened, they begged Lady Yelinda to appoint Voldin to the post. They told her it was to honor his years of service.\" ~\"But Voldin knows, as doth every other sailor, that it was to bring him in off the sea.\" *\"This was a vaster mistake than anyone could foretell.\"");
	say();
	UI_remove_answer("fishing captains");
labelFunc0431_0300:
	case "Kylista" attend labelFunc0431_032D:
	if (!(var0002 == true)) goto labelFunc0431_0317;
	message("\"Kylista is the Priestess of Beauty.\" ~\"She presides over the Oracle and insures that Fawn adheres to the tenets of Beauty.\" *\"It is her duty to advise Lady Yelinda on spiritual matters.\"");
	say();
	goto labelFunc0431_031F;
labelFunc0431_0317:
	message("\"Kylista is the Priestess of Beauty.\" ~\"She is a very ambitious woman who is not above using her feminine wiles or the words of the Oracle to obtain what she wants.\"");
	say();
	message("\"Kylista holds Zulith in her thrall, I know.\" ~\"I think she seeks to use Voldin to gain power of her own. But Voldin thinks to use her as his own pawn.\" ~\"'Tis a monumental game, and I fear Fawn is the prize.\"");
	say();
labelFunc0431_031F:
	UI_remove_answer("Kylista");
	UI_add_answer("Oracle");
labelFunc0431_032D:
	case "Oracle" attend labelFunc0431_0347:
	message("\"The Oracle is a strange magical device built long ago as an instrument of truth.\" *\"But of late its revelations have become echoes of Kylista and Voldin.\" ~\"I do not know how they accomplish this, but I am certain that their plots are anything but divine.\"");
	say();
	UI_remove_answer("Oracle");
	UI_add_answer("revelations");
labelFunc0431_0347:
	case "revelations" attend labelFunc0431_035A:
	message("\"When I was a lad, the Oracle was called on to settle disputes and reveal the truth.\" ~\"Now it pronounces marriages based more on wealth and power than on love.\" ~\"The Oracle hath become a political tool, and I have no idea how.\"");
	say();
	UI_remove_answer("revelations");
labelFunc0431_035A:
	case "fleet" attend labelFunc0431_0374:
	message("\"After the lighthouse was lost, the fleet sailed only in the daylight hours. There was no other choice.\" ~\"But the storms seemed drawn to the water. They took the ships as well, one by one.\"");
	say();
	UI_remove_answer("fleet");
	UI_add_answer("ships");
labelFunc0431_0374:
	case "ships" attend labelFunc0431_0387:
	message("\"A few we know were lost at sea... transformed into blazes knows what.\" ~\"The others could have been transported to the frozen mountains, for all we know. None have been seen again.\"");
	say();
	UI_remove_answer("ships");
labelFunc0431_0387:
	case "goblins" attend labelFunc0431_03A1:
	message("\"We have battled goblins since the time of Fawn's founding.\" ~\"We drove the savage creatures from this area when we settled here.\" *\"Because of their innate cowardice, we have always been able to drive them away with ease. Until Pomdirgun gathered them under his leadership.\"");
	say();
	UI_remove_answer("goblins");
	UI_add_answer("Pomdirgun");
labelFunc0431_03A1:
	case "Pomdirgun" attend labelFunc0431_03BF:
	message("\"Pomdirgun is far more cunning than normal goblins. He hath attacked Fawn without respite for nearly a year now.\"");
	say();
	message("\"His attacks have grown more daring of late.\"");
	say();
	UI_remove_answer("Pomdirgun");
	UI_add_answer("attacks");
labelFunc0431_03BF:
	case "attacks" attend labelFunc0431_03E1:
	message("\"Without Pomdirgun leading them, the goblins would never have had the nerve to take the Pikeman tower.\"");
	say();
	message("\"And he was responsible for the death of Seth, Fawn's healer.\"");
	say();
	message("\"Delphynia is all we have now.\"");
	say();
	UI_remove_answer("attacks");
	UI_add_answer("Delphynia");
labelFunc0431_03E1:
	case "Delphynia" attend labelFunc0431_041F:
	UI_remove_answer("Delphynia");
	message("\"Delphynia is a horticulturist.\" ~\"Her knowledge of herbs made her the only logical choice as healer when Seth was killed.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0431_040E;
	message("\"She doth seem happier of late, since the Lady did allow the Fellowship scum to return to the city.\"");
	say();
	message("\"How can she abide that fellow Ruggs? He is so confounded ugly...\"");
	say();
	goto labelFunc0431_041F;
labelFunc0431_040E:
	message("\"Delphynia hath been a sad lady since Kylista arranged to exile the Fellowship sailors from the city.\" ~\"She cannot decide whether she is glad that Ruggs is gone, or not. Poor lady.\"");
	say();
	UI_add_answer(["Fellowship sailors", "Ruggs"]);
labelFunc0431_041F:
	case "Fellowship sailors" attend labelFunc0431_0436:
	message("\"They sailed in quite a while ago. We had never seen the like of their ship before.\" ~\"Then one of them proved to be a charismatic leader who spoke eloquently of some new belief called The Fellowship.\" ~\"It appealed to many people, especially the women.\"");
	say();
	message("\"Kylista was mightily put out, I will tell thee.\" ~\"So she blamed the storms on the strangers and had them banned from the city. She still has everyone atoning for their transgressions against Beauty.\" ~\"She says the storms will not stop until the heavens are appeased. I do not think she knows when -- or if -- they will stop.\"");
	say();
	UI_remove_answer("Fellowship sailors");
labelFunc0431_0436:
	case "Ruggs" attend labelFunc0431_0449:
	message("\"Ruggs is one of the Fellowship sailors.\" ~\"He is a good man who thinks that Delphynia put the stars in the sky.\" ~\"The only problem is that he is hideously ugly.\" *\"Ruggs could curdle milk with that face! But he is a gentle man.\"");
	say();
	UI_remove_answer("Ruggs");
labelFunc0431_0449:
	case "bye" attend labelFunc0431_0476:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thou hast been most kind.@", 0x0000);
	Func097F(0xFFCE, "@A pleasure.@", 0x0005);
	Func08AA();
	goto labelFunc0431_0479;
labelFunc0431_0476:
	goto labelFunc0431_0145;
labelFunc0431_0479:
	endconv;
labelFunc0431_047A:
	return;
}


