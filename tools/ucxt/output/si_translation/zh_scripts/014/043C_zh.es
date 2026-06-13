#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func043C object#(0x43C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc043C_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043C_002D:
	if (!(event == 0x0001)) goto labelFunc043C_0063;
	UI_item_say(0xFE9C, "@Greetings, sir.@");
	0xFFC4->Func07D1();
	Func097F(0xFFC4, (("@Hello, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFC4, 0x0003);
labelFunc043C_0063:
	if (!(event == 0x0009)) goto labelFunc043C_038C;
	UI_run_schedule(0xFFC4);
	UI_clear_item_say(0xFFC4);
	UI_show_npc_face0(0xFFC4, 0x0000);
	var0004 = UI_get_item_flag(0xFFC4, 0x001C);
	if (!(var0004 == false)) goto labelFunc043C_00A9;
	message("\"Good, a new face! I am Scots, a geographer. Perhaps thou wouldst share tales of other places with me, so I might add detail to my maps.\"");
	say();
	UI_set_item_flag(0xFFC4, 0x001C);
	goto labelFunc043C_00B3;
labelFunc043C_00A9:
	message("\"Welcome back, ");
	message(var0002);
	message("! What tales hast thou for me today?\"");
	say();
labelFunc043C_00B3:
	UI_add_answer(["goblins", "storms", "tales", "maps", "bye"]);
	if (!(gflags[0x0004] == true)) goto labelFunc043C_00D8;
	UI_add_answer("Iolo the Mad");
labelFunc043C_00D8:
	converse attend labelFunc043C_038B;
	case "goblins" attend labelFunc043C_0125:
	UI_remove_answer("goblins");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043C_0100;
	message("\"I think that we shall be safe from their raiding parties, now that the Lady hath admitted us within the city walls.\"");
	say();
	goto labelFunc043C_0125;
labelFunc043C_0100:
	message("\"The Pikemen track them into the woods around their Knight's Test, west of here. Then they simply seem to disappear.\"");
	say();
	if (!(gflags[0x014E] == false)) goto labelFunc043C_0113;
	message("\"We have held against their raiding parties with the help of the Pikemen. But now that the tower hath been taken and we cannot seek refuge in the city, I fear that we are lost.\"");
	say();
	goto labelFunc043C_0117;
labelFunc043C_0113:
	message("\"We withstand their attacks only with the help of the Pikemen. We had given up hope when the goblins took the tower. But we may hold a while longer now that it hath been returned to Monitorian keeping.\"");
	say();
labelFunc043C_0117:
	UI_add_answer("Pikemen");
	UI_add_answer("Knight's Test");
labelFunc043C_0125:
	case "Pikemen" attend labelFunc043C_014E:
	if (!(gflags[0x003E] == true)) goto labelFunc043C_013C;
	message("\"Thou seekest to jest with me. By the mark on thy face, 'tis plain to see that thou art a Pikeman. Surely Monitor's bravest have better things to do than pull pranks on a poor, landbound sailor.\"");
	say();
	goto labelFunc043C_0147;
labelFunc043C_013C:
	message("\"They are warriors that come from Monitor, a city south of here. Very brave. I can usually count on many tales from them.\"");
	say();
	UI_add_answer("Monitor");
labelFunc043C_0147:
	UI_remove_answer("Pikemen");
labelFunc043C_014E:
	case "Monitor" attend labelFunc043C_0170:
	if (!(gflags[0x003E] == true)) goto labelFunc043C_0165;
	message("\"Perhaps thou hast been in one fight too many, if thou dost not recall thine own town.\" *\"Travel southward from here. One of thy Pikeman comrades will take thee to the healer in Monitor, I'm certain.\"");
	say();
	goto labelFunc043C_0169;
labelFunc043C_0165:
	message("\"'Tis on the very south edge of the continent. There are mountains to either side of the city. Very defensible.\" *\"The city is run by a representative from one of the three Pikemen units -- the wolves, the leopards, and the bears. Each unit takes a turn at having one of their number govern the city.\"");
	say();
labelFunc043C_0169:
	UI_remove_answer("Monitor");
labelFunc043C_0170:
	case "Knight's Test" attend labelFunc043C_0192:
	if (!(gflags[0x003E] == true)) goto labelFunc043C_0187;
	message("\"All I know, good knight, is that all Monitorians travel to a peninsula southwest of here for some rite of passage. 'Tis all I can tell thee. Unless thou wishest to further enlighten me...\"");
	say();
	goto labelFunc043C_018B;
labelFunc043C_0187:
	message("\"The Pikemen I spoke to were rather closed-mouthed about it. All I could gather is that it's some sort of rite of passage\tfor all Monitorians.\" *\"'Tis located on a peninsula to the southwest of here.\"");
	say();
labelFunc043C_018B:
	UI_remove_answer("Knight's Test");
labelFunc043C_0192:
	case "storms" attend labelFunc043C_01AC:
	message("\"I've travelled far and wide all my life, and never have I seen the likes before. These storms appear without warning and leave chaos in their wake. Move things around, change things around... Simply not natural. Makes me think Leon might be right.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer("Leon");
labelFunc043C_01AC:
	case "Leon" attend labelFunc043C_01D9:
	message("\"Thou hast not met Leon yet? Thou hast only to look for the crowd of people. Thou'lt find him in the center of it all, no doubt.\" *\"Leon is a very charismatic Fellowship follower. He speaks their beliefs fairly, to be sure. Hath drawn many of the folk from the town. I'll wager that's why that Priestess had us banned from entering the city.\"");
	say();
	UI_remove_answer("Leon");
	gflags[0x016A] = true;
	UI_add_answer("Priestess");
	if (!(gflags[0x0169] == false)) goto labelFunc043C_01D9;
	UI_add_answer("Fellowship");
labelFunc043C_01D9:
	case "Fellowship" attend labelFunc043C_01FF:
	message("\"I can tell thee that it digresses from the Virtues that Lord British set forth. But it makes sense.\" *\"Talk to Leon. He's far more eloquent than I on the subject.\"");
	say();
	UI_remove_answer("Fellowship");
	gflags[0x0169] = true;
	if (!(gflags[0x016A] == false)) goto labelFunc043C_01FF;
	UI_add_answer("Leon");
labelFunc043C_01FF:
	case "Priestess" attend labelFunc043C_022F:
	UI_remove_answer("Priestess");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043C_0224;
	message("\"'Tis a shame to see any creature so beautiful placed behind bars, but I think we shall all be safer because of it.\"");
	say();
	goto labelFunc043C_022F;
labelFunc043C_0224:
	message("\"Kylista is as beautiful as the day is long, but with the soul of a viper. I wouldn't trust her if I were thee.\" *\"She's plotting something with the Chancellor, I'll wager.\"");
	say();
	UI_add_answer("Chancellor");
labelFunc043C_022F:
	case "Chancellor" attend labelFunc043C_0249:
	message("\"Little worm named Zulith. Lady Yelinda's shadow... leads her around by the hand all the time. If thou seekest an audience with the Lady, thou must first speak to Zulith.\" *\"I saw Kylista speaking to Zulith the day before we sailors were banned from the city. She was afraid that Leon was stealing her followers. And Zulith,\tthe power-hungry toad that he is, saw to it that her wishes became law.\" *\"'Tis the Great Captains and the Chancellor that run things in Fawn, I'm afraid.\"");
	say();
	UI_remove_answer("Chancellor");
	UI_add_answer("Great Captains");
labelFunc043C_0249:
	case "Great Captains" attend labelFunc043C_025C:
	message("\"There are three of them: Joth, Garth, and Voldin. Make a great show of honoring Beauty, but they honor money and power more. Yelinda consults them and Zulith about everything... even the dinner menu, I'll warrant.\" *\"And with Kylista whispering in Zulith's ear, thou hadst best count her as one of the powers of Fawn as well.\"");
	say();
	UI_remove_answer("Great Captains");
labelFunc043C_025C:
	case "tales" attend labelFunc043C_0276:
	message("\"What good is a geographer if he cannot explore and map the lands he finds? The storms keep me and my shipmates from taking to the sea.\" *\"I ask all those who come to me for tales of distant places. There may be some truth in the telling, and I add what I can to my maps, as Gwenno suggested.\"");
	say();
	UI_remove_answer("tales");
	UI_add_answer("Gwenno");
labelFunc043C_0276:
	case "Gwenno" attend labelFunc043C_029F:
	message("\"She contacted me back in Britannia with an opportunity to explore a new land. Naturally, I accepted. She was to transport some sort of obelisk here for The Fellowship and then she was free to explore and collect all the tales she wished.\"");
	say();
	UI_remove_answer("Gwenno");
	UI_add_answer("obelisk");
	if (!(gflags[0x0169] == false)) goto labelFunc043C_029F;
	UI_add_answer("Fellowship");
labelFunc043C_029F:
	case "obelisk" attend labelFunc043C_02B9:
	message("\"It was abominably heavy! Quite a chore to move it on land. Then one day after we had it safely on the shore and Gwenno had already headed inland, there was a huge explosion. When I could see again, there stood Batlin -- and the obelisk was shattered all over the ground.\"");
	say();
	UI_remove_answer("obelisk");
	UI_add_answer("Batlin");
labelFunc043C_02B9:
	case "Batlin" attend labelFunc043C_02D3:
	message("\"He seemed most upset at the time he arrived. Though I suspect that it was merely a result of the disorientation from the teleportation storm that brought him here.\" *\"He took several members of the crew with him and headed inland. He was looking for some blackrock artifact... Mayhap it doth have some connection to the obelisk. I don't know.\"");
	say();
	UI_remove_answer("Batlin");
	UI_add_answer("blackrock artifact");
labelFunc043C_02D3:
	case "blackrock artifact" attend labelFunc043C_02ED:
	message("\"I remember that he mentioned that it was fashioned in the likeness of a snake, but that's all. Thou mightest ask Delphynia, the herbalist. I know he talked to her.\"");
	say();
	UI_remove_answer("blackrock artifact");
	UI_add_answer("Delphynia");
labelFunc043C_02ED:
	case "Delphynia" attend labelFunc043C_0307:
	message("\"She's an herbalist in the city that hath been doing the healer's work ever since the goblins killed the last healer.\" *\"Thou shouldst ask Ruggs if thou wishest to know more. They spent quite a bit of time together before we were cast out of the city.\"");
	say();
	UI_remove_answer("Delphynia");
	UI_add_answer("Ruggs");
labelFunc043C_0307:
	case "Ruggs" attend labelFunc043C_031A:
	message("\"Thou wouldst know him if thou hadst seen him. What he lacks in handsomeness, he makes up for in the goodness of his heart. He cares deeply for Delphynia. But Delphynia is a superstitious woman and fears Ruggs' deformities are the result of some curse. 'Tis a sadness. They would make a fine couple.\"");
	say();
	UI_remove_answer("Ruggs");
labelFunc043C_031A:
	case "maps" attend labelFunc043C_0348:
	message("\"Lord British once said that I was the finest map maker in all Britannia. I take great care in my work. Since I have explored very little of this continent, I fear that my map is less than accurate.\" *\"I would be honored if thou wouldst accept a copy of my map. Perhaps it would aid thee in thy quest.\"");
	say();
	var0005 = Func099B(0xFE9C, 0x0001, 0x00B2, 0xFE99, 0x0000, false, true);
	gflags[0x0151] = true;
	UI_remove_answer("maps");
labelFunc043C_0348:
	case "Iolo the Mad" attend labelFunc043C_0361:
	message("\"What great calamity must have befallen thy trusted companion, ");
	message(var0002);
	message(". I fear that his reason hath fled. He terrorizes the city with his fiendish jokes.\" *\"Only yesterday, Iolo announced to the citizens of Fawn that he would prove once and for all whether or not Beauty was skin deep. He then cast a spell on poor Lady Yelinda and removed all of her skin. She ran out of the city toward Gorlab Swamp. Without the true ruler, I fear that Fawn will never be restored... even with thine aid.\"");
	say();
	UI_remove_answer("Iolo the Mad");
labelFunc043C_0361:
	case "bye" attend labelFunc043C_0388:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thanks for thine assistance.@", 0x0000);
	Func097F(0xFFC4, "@A pleasure...@", 0x0005);
	goto labelFunc043C_038B;
labelFunc043C_0388:
	goto labelFunc043C_00D8;
labelFunc043C_038B:
	endconv;
labelFunc043C_038C:
	return;
}


