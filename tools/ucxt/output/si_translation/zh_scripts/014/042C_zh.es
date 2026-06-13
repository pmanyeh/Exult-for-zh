#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0994 0x994 ();
extern void Func0861 0x861 ();
extern var Func0955 0x955 ();
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0971 0x971 (var var0000);
extern var Func0977 0x977 (var var0000);

void Func042C object#(0x42C) ()
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
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = [0x04F4, 0x08B8];
	var0003 = [0x04F4, 0x08B8];
	var0004 = [0x04F4, 0x08B8];
	if (!(event == 0x0001)) goto labelFunc042C_007A;
	if (!UI_is_pc_female()) goto labelFunc042C_004C;
	UI_item_say(0xFE9C, "@Hello.@");
	goto labelFunc042C_0056;
labelFunc042C_004C:
	UI_item_say(0xFE9C, "@Excuse me, miss...@");
labelFunc042C_0056:
	0xFFD4->Func07D1();
	Func097F(0xFFD4, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFD4, 0x0003);
labelFunc042C_007A:
	if (!(event == 0x0009)) goto labelFunc042C_0B01;
	UI_show_npc_face0(0xFFD4, 0x0000);
	UI_clear_item_say(0xFFD4);
	if (!(Func0994() == 0x0018)) goto labelFunc042C_00A2;
	message("\"I want to be alone.\"");
	say();
	abort;
labelFunc042C_00A2:
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc042C_00C3;
	UI_set_schedule_type(0xFFD4, 0x001F);
	UI_add_answer("leave");
	goto labelFunc042C_00E6;
labelFunc042C_00C3:
	UI_run_schedule(0xFFD4);
	if (!(UI_get_schedule_type(0xFFD4) == 0x0003)) goto labelFunc042C_00E6;
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
labelFunc042C_00E6:
	if (!((!UI_get_item_flag(0xFFD4, 0x0006)) && gflags[0x01CE])) goto labelFunc042C_014A;
	if (!gflags[0x01E5]) goto labelFunc042C_010F;
	message("\"If thou hast the stomach to face great danger, then perhaps we can resume the quest for the lost gold.\"");
	say();
	UI_add_answer(["resume quest"]);
	goto labelFunc042C_0147;
labelFunc042C_010F:
	if (!(!UI_get_item_flag(0xFFD4, 0x001C))) goto labelFunc042C_0132;
	message("\"Allow me to introduce myself. My name is Selina. And I have heard that thou art in need of... finances, shall we say.\"");
	say();
	message("\"I believe that I can be of help...\"");
	say();
	UI_set_item_flag(0xFFD4, 0x001C);
	goto labelFunc042C_013A;
labelFunc042C_0132:
	message("\"I have heard that thou art in need of... finances, shall we say.\"");
	say();
	message("\"I believe that I can be of help...\"");
	say();
labelFunc042C_013A:
	UI_add_answer(["finances", "help"]);
labelFunc042C_0147:
	goto labelFunc042C_01F2;
labelFunc042C_014A:
	if (!(!UI_get_item_flag(0xFFD4, 0x001C))) goto labelFunc042C_01A1;
	if (!UI_is_pc_female()) goto labelFunc042C_017B;
	message("\"'Tis a pleasure to meet thee, ");
	message(var0000);
	message(". I am Selina.\"");
	say();
	message("\"It is so wonderful that a woman such as thyself hath come to our land!\"");
	say();
	message("\"There is so much that thou canst teach us.\"");
	say();
	UI_add_answer("teach");
	goto labelFunc042C_0194;
labelFunc042C_017B:
	message("\"Pardon me, ");
	message(var0000);
	message("...\tMy name is Selina.\"");
	say();
	message("\"Thou dost look to be brave and trustworthy.\"");
	say();
	message("\"I need thy protection.\"");
	say();
	UI_add_answer("protection");
labelFunc042C_0194:
	UI_set_item_flag(0xFFD4, 0x001C);
	goto labelFunc042C_01F2;
labelFunc042C_01A1:
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_01E8;
	message("\"So, we meet again, ");
	message(var0001);
	message("!\"");
	say();
	message("\"It seems we are fated to be together...\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc042C_01D6;
	message("\"I'm glad thou art returned.\"");
	say();
	message("\"Thou still hast much to teach us.\"");
	say();
	UI_add_answer("teach");
	goto labelFunc042C_01E5;
labelFunc042C_01D6:
	message("\"I'm glad thou art returned.\"");
	say();
	message("\"I would still be grateful for thy protection.\"");
	say();
	UI_add_answer("protection");
labelFunc042C_01E5:
	goto labelFunc042C_01F2;
labelFunc042C_01E8:
	message("\"What dost thou wish to speak about, ");
	message(var0001);
	message("?\"");
	say();
labelFunc042C_01F2:
	if (!(gflags[0x007A] == true)) goto labelFunc042C_0201;
	UI_add_answer("fishnet stockings");
labelFunc042C_0201:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc042C_0213;
	UI_add_answer("Moonsilk stockings");
labelFunc042C_0213:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc042C_0225;
	UI_add_answer("lost ring");
labelFunc042C_0225:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc042C_0237;
	UI_add_answer("fur cap");
labelFunc042C_0237:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc042C_0249;
	UI_add_answer("Stoneheart");
labelFunc042C_0249:
	if (!(gflags[0x0011] && ((!UI_get_item_flag(0xFFD4, 0x0006)) && UI_get_cont_items(0xFFD4, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc042C_0273;
	UI_add_answer("belongings");
labelFunc042C_0273:
	if (!(UI_get_item_flag(0xFFD4, 0x0006) && (!gflags[0x01E6]))) goto labelFunc042C_028C;
	UI_add_answer("Are we there yet?");
labelFunc042C_028C:
	UI_add_answer("bye");
labelFunc042C_0293:
	converse attend labelFunc042C_0B00;
	case "Are we there yet?" attend labelFunc042C_03F5:
	UI_remove_answer("Are we there yet?");
	var0005 = [0x06D0, 0x0766, 0x0000];
	var0006 = UI_get_object_position(0xFFD4);
	var0007 = (var0005[0x0002] - var0006[0x0002]);
	var0008 = (var0005[0x0001] - var0006[0x0001]);
	var0009 = var0007;
	if (!(var0007 < 0x0000)) goto labelFunc042C_02F8;
	var0009 = (var0009 * 0xFFFF);
labelFunc042C_02F8:
	var000A = var0008;
	if (!(var0008 < 0x0000)) goto labelFunc042C_0312;
	var000A = (var000A * 0xFFFF);
labelFunc042C_0312:
	var000B = (var000A + var0009);
	if (!(var000A > var0009)) goto labelFunc042C_034E;
	if (!(var0008 > 0x0000)) goto labelFunc042C_033F;
	var000C = 0x0002;
	var000D = "east";
	goto labelFunc042C_034B;
labelFunc042C_033F:
	var000C = 0x0006;
	var000D = "west";
labelFunc042C_034B:
	goto labelFunc042C_0373;
labelFunc042C_034E:
	if (!(var0007 > 0x0000)) goto labelFunc042C_0367;
	var000C = 0x0004;
	var000D = "south";
	goto labelFunc042C_0373;
labelFunc042C_0367:
	var000C = 0x0000;
	var000D = "north";
labelFunc042C_0373:
	if (!(var000B > 0x01F4)) goto labelFunc042C_0384;
	message("\"We still have a long way to travel.\"");
	say();
	goto labelFunc042C_03A6;
labelFunc042C_0384:
	if (!(var000B < 0x0032)) goto labelFunc042C_03A2;
	message("\"This is the place!\"");
	say();
	Func097F(0xFFD4, "@We should find the gold!@", 0x0000);
	abort;
	goto labelFunc042C_03A6;
labelFunc042C_03A2:
	message("\"We are very close!\"");
	say();
labelFunc042C_03A6:
	if (!((var0006[0x0001] < 0x0593) && (var0006[0x0002] > 0x0743))) goto labelFunc042C_03CB;
	var000C = 0x0000;
	message("\"We must follow the coast north, and then turn east.\"");
	say();
	goto labelFunc042C_03DB;
labelFunc042C_03CB:
	message("\"We must go further ");
	message(var000D);
	message(". Is not this adventure exciting, ");
	message(var0001);
	message("?\"");
	say();
labelFunc042C_03DB:
	var000E = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var000C, (byte)0x6A, (byte)0x52, "@This way!@"]);
	abort;
labelFunc042C_03F5:
	case "belongings" attend labelFunc042C_0407:
	UI_remove_answer("belongings");
	Func0861();
labelFunc042C_0407:
	case "finances" attend labelFunc042C_0422:
	UI_remove_answer("finances");
	message("\"I will simply say that a little birdie told me that thou dost need desperately to sail to Moonshade.\"");
	say();
	message("\"Now, with Captain Hawk a prisoner of the Tower guards, thou must certainly be trying to scrape together a ransom sufficient to sate those greedy ruffians.\"");
	say();
	message("\"It is all so obvious, if one thinks about it just so...\"");
	say();
labelFunc042C_0422:
	case "leave" attend labelFunc042C_0435:
	UI_remove_answer("leave");
	message("\"But we agreed to be partners. From now on, thou and I are inseparable!\"");
	say();
labelFunc042C_0435:
	case "help" attend labelFunc042C_045D:
	UI_remove_answer("help");
	message("\"Not long ago, one of those strange storms took the lighthouse that was up the coast, north and east of here.\"");
	say();
	message("\"In its place is a strange building, locked tight and reportedly filled with hideous monsters and great treasure!\"");
	say();
	message("\"One I thought of as my beloved found a key on a creature outside of the building. He gave this key to me for certain... favors... and promised to meet me here so we could seek the treasure together.\"");
	say();
	UI_add_answer(["beloved", "key"]);
labelFunc042C_045D:
	case "beloved" attend labelFunc042C_0482:
	UI_remove_answer("beloved");
	message("\"He is not here, and shows no signs of keeping his word. Men!\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc042C_047E;
	message("\"Frankly, we would do best if we were to rid ourselves of Men entirely! What a sisterhood we should make...\"");
	say();
	goto labelFunc042C_0482;
labelFunc042C_047E:
	message("\"I feel terrible, for this time I had given away mine heart, and now 'tis broken...\"");
	say();
labelFunc042C_0482:
	case "key", "resume quest" attend labelFunc042C_06A8:
	UI_remove_answer(["key", "resume quest"]);
	gflags[0x01CF] = true;
	if (!gflags[0x01E5]) goto labelFunc042C_04AB;
	message("\"Dost thou pledge to go directly to the site of the gold this time?\"");
	say();
	goto labelFunc042C_04B3;
labelFunc042C_04AB:
	message("\"If thou art willing to allow me to join thee, I can lead thee to treasure enough for both of us.\"");
	say();
	message("\"I have the key and the instructions, but I am no match for what may lie ahead. Wilt thou join me in seeking the treasure?\"");
	say();
labelFunc042C_04B3:
	if (!(Func0955() == true)) goto labelFunc042C_067A;
	if (!gflags[0x01E5]) goto labelFunc042C_04C8;
	message("\"I shall hold thee to thy word!\"");
	say();
	goto labelFunc042C_04CC;
labelFunc042C_04C8:
	message("\"I knew that thou wouldst be interested!\"");
	say();
labelFunc042C_04CC:
	if (!(UI_get_array_size(UI_get_party_list2()) > 0x0001)) goto labelFunc042C_0563;
	message("\"Judging from what I've been told, it would be best if only two went. The danger to any more than two is great. Wilt thou leave thy companions here for their safety?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042C_0559;
	message("\"Thou art a true friend to them, ");
	message(var0001);
	message("! Thou canst salve their wounded pride with some of the treasure that we bring back.\"");
	say();
	var000E = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc042C_0503:
	for (var0011 in var000E with var000F to var0010) attend labelFunc042C_054A;
	UI_remove_from_party(var0011);
	UI_set_new_schedules(var0011, [0x0000, 0x0002, 0x0003], [0x000E, 0x001A, 0x0007], [var0002, var0003, var0004]);
	UI_run_schedule(var0011);
	goto labelFunc042C_0503;
labelFunc042C_054A:
	Func097F(var0011, "@I need a drink!@", 0x0002);
	goto labelFunc042C_0563;
labelFunc042C_0559:
	message("\"I hope that thou dost not live to regret thy decision, ");
	message(var0001);
	message(". They are thy friends and will not thank thee if thou dost lead them to their deaths...\"");
	say();
labelFunc042C_0563:
	if (!(UI_get_array_size(UI_get_party_list2()) > 0x0004)) goto labelFunc042C_05ED;
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_show_npc_face1(var000E, 0x0000);
	message("\"This group is getting a little large for my tastes. I think I'll stay at the Inn for a while...\"");
	say();
	UI_remove_from_party(var000E);
	UI_set_new_schedules(var000E, [0x0000, 0x0002, 0x0003], [0x000E, 0x001A, 0x0007], [var0002, var0003, var0004]);
	UI_set_schedule_type(var000E, 0x000C);
	Func097F(var000E, "@So long...@", 0x0000);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"We'll be fine without that troublemaker, ");
	message(var0001);
	message("!\"");
	say();
labelFunc042C_05ED:
	UI_add_to_party(0xFFD4);
	gflags[0x0011] = true;
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x042C], 0x0019);
	Func097F(0xFFD4, "@Onward!@", 0x0000);
	if (!(!gflags[0x01E5])) goto labelFunc042C_0645;
	message("\"Here is the key I promised.\"");
	say();
	var000E = Func099B(0xFE9C, 0x0001, 0x0281, 0x0075, 0x0003, 0x0000, true);
labelFunc042C_0645:
	gflags[0x01E5] = true;
	var000E = UI_find_object(0xFFD4, 0x0128, 0xFE99, 0x0002);
	if (!var000E) goto labelFunc042C_0676;
	var000E = UI_set_last_created(var000E);
	var000E = UI_give_last_created(0xFFD4);
labelFunc042C_0676:
	abort;
	goto labelFunc042C_06A8;
labelFunc042C_067A:
	if (!gflags[0x01E5]) goto labelFunc042C_069E;
	message("\"But how shall I gain the gold, if thou dost not aid me?\"");
	say();
	Func097F(0xFFD4, "@Oh!@", 0x0000);
	UI_set_schedule_type(0xFFD4, 0x0014);
	abort;
	goto labelFunc042C_06A8;
labelFunc042C_069E:
	message("\"I had thought thou wouldst be interested! Oh, well, 'tis his loss for buying my... favors so cheaply! And thy loss for not joining me!\" *\"But, I will not hold it against thee, ");
	message(var0001);
	message(". If thou art still here and in need of money when I return... Perhaps I will lend thee some!\"");
	say();
labelFunc042C_06A8:
	case "teach" attend labelFunc042C_06D7:
	message("\"In Monitor, women may be warriors... But at the cost of their femininity.\"");
	say();
	message("\"In Fawn, women are valued for their beauty... At the cost of their independence and intelligence.\"");
	say();
	message("\"And in Moonshade, women may be mages... But the true power lies in the hands of men.\"");
	say();
	message("\"So, thou seest... Thou art brave, intelligent and beautiful. Thou art not one nor the other... Thou art all these things at once.\"");
	say();
	UI_remove_answer("teach");
	UI_add_answer(["Monitor", "Fawn", "Moonshade"]);
labelFunc042C_06D7:
	case "Monitor" attend labelFunc042C_06F1:
	message("\"Monitor is just south of here... It is controlled by Pikemen who place fighting prowess above all else.\" *\"Few there value beauty and even fewer possess intelligence. They would do well with a dose of humility.\"");
	say();
	UI_remove_answer("Monitor");
	UI_add_answer("Pikemen");
labelFunc042C_06F1:
	case "Pikemen" attend labelFunc042C_0719:
	if (!(gflags[0x003E] == true)) goto labelFunc042C_070E;
	message("\"If the only Pikemen I had ever had the pleasure of encountering were thou and Argus, I would say differently. But many of the Pikemen I have seen are vain braggarts who delight in bullying anyone weaker than they are.\" *\"And their idea of honor is bought cheaply in ransom and @tolls@ on the travellers they are sworn to protect! I'm sorry, ");
	message(var0001);
	message(", but I think the Pikemen are, on the whole, contemptible!\"");
	say();
	goto labelFunc042C_0712;
labelFunc042C_070E:
	message("\"If the only Pikeman I had ever had the pleasure of encountering was Argus, I would say differently. But many of the Pikemen I have seen are vain braggarts who delight in bullying anyone weaker than they are.\" *\"And their idea of honor is bought cheaply in ransom and @tolls@ on the travellers they are sworn to protect! The Pikemen are, Argus excepted, contemptible!\"");
	say();
labelFunc042C_0712:
	UI_remove_answer("Pikemen");
labelFunc042C_0719:
	case "Fawn" attend labelFunc042C_0733:
	message("\"Fawn is northwest of here... They have a woman for a ruler, but she rules in name alone.\" *\"The Great Captains and money control the city in truth, and give lip service to Beauty only when it's convenient. It would serve them right if the women revolted and went to Monitor to learn how to fight.\"");
	say();
	UI_remove_answer("Fawn");
	UI_add_answer("Great Captains");
labelFunc042C_0733:
	case "Great Captains" attend labelFunc042C_074C:
	message("\"I have never been to Fawn, ");
	message(var0001);
	message(", so I can only repeat what I have heard or have been told. The Great Captains keep the Lady of Fawn in ignorance, preferring a pretty figurehead to an intelligent ruler!\"");
	say();
	UI_remove_answer("Great Captains");
labelFunc042C_074C:
	case "Moonshade" attend labelFunc042C_0766:
	message("\"Moonshade is east of here, on another island... They are ruled by Adepts, but shun normal people as below their notice.\" *\"Each mage doth have his or her own version of reality to such an extent that thou shouldst sift everything they say for a kernel of truth. I sometimes wish the mages could find themselves on the decks of Fawn's fishing fleet and work for an honest living for just a few days... Maybe then they'd learn who the important people truly are.\"");
	say();
	UI_remove_answer("Moonshade");
	UI_add_answer("Adepts");
labelFunc042C_0766:
	case "Adepts" attend labelFunc042C_077F:
	message("\"From what I've heard, being an Adept is as much a result of an accident of birth, rather than any great training. Each Adept specializes in some skill or another...\" *\"So a mage that could kill everyone in his mansion with a single spell, might well be unable to fetch his slippers from in front of the fire with even a series of spells! The Adepts are entirely too full of themselves, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("Adepts");
labelFunc042C_077F:
	case "protection" attend labelFunc042C_07A6:
	UI_remove_answer("protection");
	message("\"Yes, protection... People are disappearing around here.\" *\"I do not know if it's those mysterious storms, or if there's something more sinister at work. All I know is that I'm afraid.\"");
	say();
	UI_push_answers();
	UI_add_answer(["people disappearing", "mysterious storms", "change subject"]);
labelFunc042C_07A6:
	case "change subject" attend labelFunc042C_07BC:
	UI_pop_answers();
	message("\"We can discuss whatever thou dost wish to discuss, ");
	message(var0000);
	message("!\"");
	say();
labelFunc042C_07BC:
	case "people disappearing" attend labelFunc042C_07D6:
	message("\"First there was someone they call Silverpate... And now Angus is gone.\" *\"One built the inn and the other was the innkeeper here... And those others disappearing doth cause me to wonder if this place is cursed or something!\"");
	say();
	UI_remove_answer("people disappearing");
	UI_add_answer("others");
labelFunc042C_07D6:
	case "others" attend labelFunc042C_07F6:
	message("\"Well, Ensorcio told me that Theron, one of the servants, disappeared not long ago. And then, on the night that Angus disappeared, two guests disappeared as well.\"");
	say();
	UI_remove_answer("others");
	UI_add_answer(["Ensorcio", "two guests"]);
labelFunc042C_07F6:
	case "Ensorcio" attend labelFunc042C_0810:
	message("\"He is the mage who's staying here... He doth seem sinister, but he's nice to me. Not as nice as Argus... But nice, for a mage.\" *\"He seems to drink a lot. And he doth have a bad temper, too.\"");
	say();
	UI_remove_answer("Ensorcio");
	UI_add_answer("Argus");
labelFunc042C_0810:
	case "Argus" attend labelFunc042C_082A:
	message("\"Argus is very nice to me. He compliments me on my dress or mine hair, even though I know I look a mess.\" *\"He's much nicer when Devra isn't around... I do not think she likes me.\"");
	say();
	UI_remove_answer("Argus");
	UI_add_answer("Devra");
labelFunc042C_082A:
	case "Devra" attend labelFunc042C_083D:
	message("\"She's always watching me... It doth make me nervous. Mayhap I shall be the next one to disappear.\" *\"If she were not so old, I might think that she had something to do with those people disappearing. Or maybe she knows more than she doth admit...\"");
	say();
	UI_remove_answer("Devra");
labelFunc042C_083D:
	case "two guests" attend labelFunc042C_0850:
	message("\"I did not meet them, but Ensorcio told me about them. He said something about one of them being a mage, and the other being a very large man.\" *\"So now thou dost understand why I am so worried... If something could happen to a mage, or a big, strong man, what chance do I have?\"");
	say();
	UI_remove_answer("two guests");
labelFunc042C_0850:
	case "mysterious storms" attend labelFunc042C_0876:
	message("\"Everyone knows that these are not natural storms, ");
	message(var0001);
	message("! Why even the mages of Moonshade are worried...\" *\"Old Gustacio is practically pulling out what little hair he doth have trying to discover what's causing them. And if the mages are worried, ");
	message(var0001);
	message(", people such as we should be very wary indeed.\"");
	say();
	UI_remove_answer("mysterious storms");
	UI_add_answer("Gustacio");
labelFunc042C_0876:
	case "Gustacio" attend labelFunc042C_0896:
	message("\"Gustacio specializes in weather magic, ");
	message(var0001);
	message(". 'Tis all very confusing, if thou dost ask me...\" *\"I know that the Council of Mages questioned him closely after these storms began. But they seemed to think that he had no hand in them and set him the task of trying to stop them.\"");
	say();
	UI_remove_answer("Gustacio");
	UI_add_answer("Council of Mages");
labelFunc042C_0896:
	case "Council of Mages" attend labelFunc042C_08A9:
	message("\"The Council of Mages oversees all of the mages in Moonshade. I don't know much more about them than that.\" *\"Thou shouldst ask Ensorcio if thou dost wish to know more.\"");
	say();
	UI_remove_answer("Council of Mages");
labelFunc042C_08A9:
	case "fishnet stockings" attend labelFunc042C_08DE:
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc042C_08CD;
	message("\"Oh, look! How quaint... Fishnet stockings! I've heard that some people find them attractive, but they're much too rough for my taste. I would never wear anything like that.\"");
	say();
	goto labelFunc042C_08D7;
labelFunc042C_08CD:
	message("\"They sound quaint, ");
	message(var0001);
	message(". Perhaps thou couldst show them to me some time.\"");
	say();
labelFunc042C_08D7:
	UI_remove_answer("fishnet stockings");
labelFunc042C_08DE:
	case "Moonsilk stockings" attend labelFunc042C_098F:
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc042C_097E;
	if (!UI_is_pc_female()) goto labelFunc042C_0940;
	message("\"Moonsilk stockings! Oh, how I have longed for a pair of my very own!\"");
	say();
	message("\"Thou dost not need to enhance thy beauty, ");
	message(var0001);
	message("... Wouldst thou give them to me?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042C_0933;
	message("\"Marvelous! I knew that another woman would understand!\"");
	say();
	var000E = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	goto labelFunc042C_093D;
labelFunc042C_0933:
	message("\"Sigh... Thou canst not blame a girl for dreaming, ");
	message(var0001);
	message(".\"");
	say();
labelFunc042C_093D:
	goto labelFunc042C_097B;
labelFunc042C_0940:
	message("\"Moonsilk stockings! Oh, how I have longed for a pair of my very own!\"");
	say();
	message("\"Wouldst thou give them to me, ");
	message(var0001);
	message("? I would cherish them forever...\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042C_0971;
	message("\"Thou art wonderful! I will think of thee every time I wear them!\"");
	say();
	var000E = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	goto labelFunc042C_097B;
labelFunc042C_0971:
	message("\"Sigh... Thou canst not blame a girl for dreaming, ");
	message(var0001);
	message(".\"");
	say();
labelFunc042C_097B:
	goto labelFunc042C_0988;
labelFunc042C_097E:
	message("\"The stockings sound wonderful, ");
	message(var0001);
	message(". If thou dost find any more like them, remember me.\"");
	say();
labelFunc042C_0988:
	UI_remove_answer("Moonsilk stockings");
labelFunc042C_098F:
	case "lost ring" attend labelFunc042C_0A54:
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc042C_0A43;
	if (!UI_is_pc_female()) goto labelFunc042C_09FB;
	message("\"An engagement ring!\"");
	say();
	message("\"Congratulations, ");
	message(var0001);
	message("! Who is the lucky man?\"");
	say();
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_09E6;
	var0012 = Func0992(0x0001, "@Indeed, young lady!@", "@It isn't mine...@", false);
	UI_set_conversation_slot(0x0000);
labelFunc042C_09E6:
	message("\"Forgive me, ");
	message(var0001);
	message("... I made an assumption before examining the ring.\"");
	say();
	message("\"I should have realized that it was not thine.\tSee how crude the tracery is, and how ill the stones fit?\"");
	say();
	message("\"It is clearly an unacceptable piece of inferior quality. It looks like it may have come from one of the lesser artisans in Moonshade.\"");
	say();
	goto labelFunc042C_0A40;
labelFunc042C_09FB:
	message("\"An engagement ring!\"");
	say();
	message("\"I suppose it would be too much to hope that it was for me...\"");
	say();
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_0A28;
	var0012 = Func0992(0x0001, "@Honestly, young lady!@", "@It isn't mine...@", false);
	UI_set_conversation_slot(0x0000);
labelFunc042C_0A28:
	message("\"Forgive me, ");
	message(var0001);
	message(".\tI was merely jesting...\tI should have realized that it was not thine, ");
	message(var0001);
	message("!\"");
	say();
	message("\"See how crude the tracery is, and how ill the stones fit? It is clearly an unacceptable piece of inferior quality.\"");
	say();
	message("\"It looks like it may have come from one of the lesser artisans in Moonshade.\"");
	say();
labelFunc042C_0A40:
	goto labelFunc042C_0A4D;
labelFunc042C_0A43:
	message("\"If thou dost find it again, ");
	message(var0001);
	message(", I would love to see it.\"");
	say();
labelFunc042C_0A4D:
	UI_remove_answer("lost ring");
labelFunc042C_0A54:
	case "fur cap" attend labelFunc042C_0A83:
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc042C_0A78;
	message("\"How cute! But dost thou not think it is a bit warm here for a fur cap?\" \"And... I don't know... But it seems a bit small for thee...\"");
	say();
	goto labelFunc042C_0A7C;
labelFunc042C_0A78:
	message("\"Perhaps thou wouldst show it to me later.\"");
	say();
labelFunc042C_0A7C:
	UI_remove_answer("fur cap");
labelFunc042C_0A83:
	case "Stoneheart" attend labelFunc042C_0AC5:
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc042C_0AAD;
	message("\"I... um... I don't know about... uh... rocks, ");
	message(var0001);
	message(". Put it away... please.\"* \"Thou shouldst find someone else to ask.\"");
	say();
	goto labelFunc042C_0AB7;
labelFunc042C_0AAD:
	message("\"I know nothing about rocks, ");
	message(var0001);
	message(". Thou shouldst find someone else to ask.\"");
	say();
labelFunc042C_0AB7:
	UI_remove_answer("Stoneheart");
	UI_add_answer("someone else");
labelFunc042C_0AC5:
	case "someone else" attend labelFunc042C_0AD8:
	message("\"Thou couldst ask a scholar or some such... Perhaps even a mage might be able to help. I don't know.\"");
	say();
	UI_remove_answer("someone else");
labelFunc042C_0AD8:
	case "bye" attend labelFunc042C_0AFD:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell, Selina!@", 0x0000);
	Func097F(0xFFD4, "@Until we meet again...@", 0x0002);
	abort;
labelFunc042C_0AFD:
	goto labelFunc042C_0293;
labelFunc042C_0B00:
	endconv;
labelFunc042C_0B01:
	if (!(event == 0x0002)) goto labelFunc042C_0D6D;
	var0013 = UI_get_npc_id(0xFFD4);
	if (!(var0013 == 0x0000)) goto labelFunc042C_0C29;
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_0B2C;
	abort;
labelFunc042C_0B2C:
	var0005 = UI_get_object_position(0xFFD4);
	if (!((var0005[0x0001] < 0x0479) || (var0005[0x0002] > 0x08D9))) goto labelFunc042C_0C08;
	UI_show_npc_face0(0xFFD4, 0x0000);
	if (!(!gflags[0x01E7])) goto labelFunc042C_0BD8;
	message("\"Now look here, ");
	message(var0001);
	message(". Thou didst pledge to take me to the treasure, but this is the wrong direction!\"");
	say();
	message("\"Wilt thou take me to the treasure, or no?\"");
	say();
	if (!Func0955()) goto labelFunc042C_0BA8;
	message("\"Much better.\"");
	say();
	Func097F(0xFFD4, "@To the gold!@", 0x0000);
	gflags[0x01E7] = true;
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x042C], 0x0032);
	abort;
	goto labelFunc042C_0BD5;
labelFunc042C_0BA8:
	message("\"Then I'm leaving!\"");
	say();
	UI_remove_from_party(0xFFD4);
	Func097F(0xFFD4, "@Fool!@", 0x0000);
	Func0861();
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
	gflags[0x01E7] = false;
	abort;
labelFunc042C_0BD5:
	goto labelFunc042C_0C05;
labelFunc042C_0BD8:
	message("\"Thou still goest the wrong way. I'm leaving!\"");
	say();
	UI_remove_from_party(0xFFD4);
	Func097F(0xFFD4, "@Fool!@", 0x0000);
	Func0861();
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
	gflags[0x01E7] = false;
	abort;
labelFunc042C_0C05:
	goto labelFunc042C_0C29;
labelFunc042C_0C08:
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x042C], 0x0032);
	gflags[0x01E7] = false;
labelFunc042C_0C29:
	if (!(var0013 == 0x0001)) goto labelFunc042C_0C9F;
	var000E = UI_get_npc_object(0xFEF0);
	if (!var000E) goto labelFunc042C_0C57;
	UI_set_polymorph(var000E, 0x01F5);
	UI_set_npc_id(var000E, 0x0000);
labelFunc042C_0C57:
	var000E = UI_get_npc_object(0xFF80);
	if (!var000E) goto labelFunc042C_0C7B;
	UI_set_polymorph(var000E, 0x01F5);
	UI_set_npc_id(var000E, 0x0000);
labelFunc042C_0C7B:
	var000E = UI_get_npc_object(0xFF81);
	if (!var000E) goto labelFunc042C_0C9F;
	UI_set_polymorph(var000E, 0x01F5);
	UI_set_npc_id(var000E, 0x0000);
labelFunc042C_0C9F:
	if (!(var0013 == 0x0002)) goto labelFunc042C_0D6D;
	UI_set_polymorph(0xFEF0, 0x0373);
	UI_set_polymorph(0xFF80, 0x01CA);
	UI_set_polymorph(0xFF81, 0x0325);
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("\"Gloat if thou wilt! Even if thou slayest me here thou hast not truly defeated me!\"");
	say();
	message("\"Even as we speak, Batlin is opening the Wall of Lights in the next room! With the Guardian's help he and I shall meet in the Eternal Void to conquer new realms together!\"");
	say();
	message("\"Batlin! Guardian! I await thee in the Void!\"");
	say();
	UI_remove_npc_face0();
	var0014 = UI_find_nearby(item, 0x0300, 0x003C, 0x0000);
	enum();
labelFunc042C_0CF3:
	for (var0017 in var0014 with var0015 to var0016) attend labelFunc042C_0D11;
	var0005 = UI_get_object_position(var0017);
	Func0971(var0017);
	goto labelFunc042C_0CF3;
labelFunc042C_0D11:
	var000E = 0x0000;
	var0018 = UI_create_new_object(0x02CB);
	if (!var0018) goto labelFunc042C_0D50;
	UI_set_item_frame(var0018, 0x0000);
	var000E = UI_set_item_quality(var0018, 0x0021);
	UI_clear_item_flag(var0018, 0x0012);
	var000E = UI_give_last_created(item);
labelFunc042C_0D50:
	if (!var000E) goto labelFunc042C_0D6D;
	UI_clear_item_flag(0xFFD4, 0x001D);
	UI_reduce_health(0xFFD4, 0x0032, 0x0000);
labelFunc042C_0D6D:
	if (!(event == 0x0007)) goto labelFunc042C_0F80;
	if (!gflags[0x024E]) goto labelFunc042C_0E39;
	var0019 = UI_get_item_flag(0xFEF0, 0x0004);
	var001A = UI_get_item_flag(0xFF80, 0x0004);
	var001B = UI_get_item_flag(0xFF81, 0x0004);
	if (!(var0019 && (var001A && var001B))) goto labelFunc042C_0DEC;
	if (!(UI_get_npc_id(0xFFD4) == 0x0001)) goto labelFunc042C_0DE9;
	UI_set_npc_id(0xFFD4, 0x0002);
	var001C = UI_get_npc_object(0xFFD4);
	var000E = UI_delayed_execute_usecode_array(var001C, [(byte)0x23, (byte)0x55, 0x042C], 0x0019);
labelFunc042C_0DE9:
	goto labelFunc042C_0E36;
labelFunc042C_0DEC:
	var001D = UI_get_party_list();
	var001E = UI_die_roll(0x0001, Func0977(var001D));
	var001F = var001D[var001E];
	var000E = UI_set_to_attack(item, var001F, 0x0276);
	UI_obj_sprite_effect(var001F, 0x0021, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc042C_0E36:
	goto labelFunc042C_0F80;
labelFunc042C_0E39:
	if (!gflags[0x01E8]) goto labelFunc042C_0E40;
	abort;
labelFunc042C_0E40:
	var0020 = Func097D(0xFFD4, 0x0001, 0x0128, 0xFE99, 0x0002);
	var0021 = Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0x0002);
	var0022 = Func097D(0xFE9B, 0x0001, 0x0281, 0x0075, 0x0003);
	if (!var0020) goto labelFunc042C_0F80;
	var0023 = UI_get_oppressor(0xFFD4);
	if (!UI_get_item_flag(var0023, 0x0006)) goto labelFunc042C_0EB1;
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("\"Thou shalt not find me such easy prey, mighty Avatar!\"");
	say();
	message("\"When thou dost least expect it, thou shalt find me a worthy opponent!\"");
	say();
	goto labelFunc042C_0EBF;
labelFunc042C_0EB1:
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("\"I must retreat to the safety of the Sleeping Bull. Do not worry -- we shall meet again, Avatar!\"");
	say();
labelFunc042C_0EBF:
	UI_remove_npc_face0();
	Func097F(0xFFD4, "@We shall meet again!@", 0x0000);
	var0005 = UI_get_object_position(0xFFD4);
labelFunc042C_0ED9:
	if (!(var0005[0x0003] > 0x0000)) goto labelFunc042C_0F19;
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] - 0x0001);
	var0005[0x0003] = (var0005[0x0003] - 0x0002);
	goto labelFunc042C_0ED9;
labelFunc042C_0F19:
	UI_sprite_effect(0x0021, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc042C_0F6B;
	UI_remove_from_party(0xFFD4);
labelFunc042C_0F6B:
	UI_remove_npc(0xFFD4);
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
labelFunc042C_0F80:
	return;
}


