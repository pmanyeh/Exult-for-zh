#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0955 0x955 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0433 object#(0x433) ()
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
	if (!(event == 0x0007)) goto labelFunc0433_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0433_002D:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFCD) == 0x0007))) goto labelFunc0433_0094;
	var0004 = ["@Garth will save me...@", (("@Damn " + var0002) + "!@"), "@I need more food!@", "@Jailer!@", "@Be patient.@", "@Curse that weaver!@"];
	if (!UI_npc_nearby(0xFFCA)) goto labelFunc0433_007D;
	var0004 = (var0004 & ("@Be silent, Priestess!@" & ("@Pleasure me, Kylista!@" & "@Our time shall come...@")));
labelFunc0433_007D:
	Func097F(0xFFCD, var0004[UI_get_random(UI_get_array_size(var0004))], 0x0000);
labelFunc0433_0094:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFCD) != 0x000F))) goto labelFunc0433_0125;
	0xFFCD->Func07D1();
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0433_00FD;
	UI_item_say(0xFE9C, "@Hail, criminal!@");
	UI_set_schedule_type(0xFFCD, 0x000F);
	Func097F(0xFFCD, "@Not thee!@", 0x0002);
	0xFFCD->Func07D2();
	var0003 = UI_delayed_execute_usecode_array(0xFFCD, [(byte)0x23, (byte)0x55, 0x0433], 0x0007);
	goto labelFunc0433_0125;
labelFunc0433_00FD:
	UI_item_say(0xFE9C, "@A moment of thy time, sir.@");
	Func097F(0xFFCD, (("@At thy service, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFCD, 0x0003);
labelFunc0433_0125:
	if (!(event == 0x0002)) goto labelFunc0433_0162;
	UI_run_schedule(0xFFCD);
	UI_clear_item_say(0xFFCD);
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("\"So thou hast come to pity me, eh, ");
	message(var0002);
	message("? Well, I'm not done yet!\"");
	say();
	UI_add_answer(["false Oracle", "Kylista", "not done yet"]);
	goto labelFunc0433_0220;
labelFunc0433_0162:
	if (!(event == 0x0009)) goto labelFunc0433_05E8;
	UI_run_schedule(0xFFCD);
	UI_clear_item_say(0xFFCD);
	UI_show_npc_face0(0xFFCD, 0x0000);
	var0005 = UI_get_item_flag(0xFFCD, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0433_01BD;
	message("\"Thou dost dare to confront me? Thou, that didst bring the blasphemer to Lady Yelinda!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCD, "@Spare me thy presence!@", 0x0000);
	UI_set_schedule_type(0xFFCD, 0x0014);
	abort;
labelFunc0433_01BD:
	if (!(var0005 == false)) goto labelFunc0433_0209;
	if (!(gflags[0x003E] == true)) goto labelFunc0433_01E3;
	if (!(var0001 == true)) goto labelFunc0433_01DC;
	message("\"Another of Monitor's female Pikemen, I see. Odd that they encourage women to disfigure themselves.\" *\"I am Great Captain Voldin.\"");
	say();
	goto labelFunc0433_01E0;
labelFunc0433_01DC:
	message("\"Welcome, good Pikeman. Thy presence honors us.\" *\"I am Great Captain Voldin.\"");
	say();
labelFunc0433_01E0:
	goto labelFunc0433_01FC;
labelFunc0433_01E3:
	if (!(var0001 == true)) goto labelFunc0433_01F8;
	message("\"Thy Beauty enriches us. Welcome to Fawn, ");
	message(var0000);
	message(".\" *\"I am Great Captain Voldin.\"");
	say();
	goto labelFunc0433_01FC;
labelFunc0433_01F8:
	message("\"It is a pleasure to meet thee. I am Great Captain Voldin.\" *\"Fawn is in sore need of more men to help hold the Goblins at bay.\"");
	say();
labelFunc0433_01FC:
	UI_set_item_flag(0xFFCD, 0x001C);
	goto labelFunc0433_0213;
labelFunc0433_0209:
	message("\"How might I be of service this time, ");
	message(var0002);
	message("?\"");
	say();
labelFunc0433_0213:
	UI_add_answer(["storms", "Goblins"]);
labelFunc0433_0220:
	UI_add_answer("bye");
labelFunc0433_0227:
	converse attend labelFunc0433_05E7;
	case "false Oracle" attend labelFunc0433_024E:
	UI_remove_answer("false Oracle");
	message("\"The Oracle hath always been a fraud! Dost thou not comprehend?\"");
	say();
	message("\"Even in our ancient homeland, the Statue of Beauty was controlled by the Great Captains. It said what we told it to.\"");
	say();
	UI_add_answer(["fraud", "Why?"]);
labelFunc0433_024E:
	case "fraud" attend labelFunc0433_0265:
	UI_remove_answer("fraud");
	message("\"For centuries, the women of our culture have believed themselves to be divine. Yet the men governed secretly, through the revelations issued by the Oracle.\"");
	say();
	message("\"Thou hast destroyed a great tradition, foreigner! It was glorious, while it lasted...\"");
	say();
labelFunc0433_0265:
	case "Why?" attend labelFunc0433_0290:
	UI_remove_answer("Why?");
	if (!UI_is_pc_female()) goto labelFunc0433_0282;
	message("\"Thou wouldst not understand...\"");
	say();
	goto labelFunc0433_0290;
labelFunc0433_0282:
	message("\"Learn from our experience, ");
	message(var0002);
	message("! Women are easily controlled by their vanity. Tell them that they are superior -- and then manipulate them. That's the key!\"");
	say();
	message("\"The females of our race are exceedingly willful, yet they lack common sense. Without men to dominate them, they would ruin everything.\"");
	say();
labelFunc0433_0290:
	case "Kylista" attend labelFunc0433_02D6:
	UI_remove_answer("Kylista");
	message("\"She was merely our pawn -- a pretty thing, clever in a limited way, but always our tool.\"");
	say();
	if (!UI_npc_nearby(0xFFCA)) goto labelFunc0433_02D6;
	UI_show_npc_face1(0xFFCA, 0x0000);
	message("\"Close thy trap, Voldin, or I'll scratch thine eyes out!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Such a clever threat, girl! Dost thou not realize that thou dost live at my pleasure?\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0433_02D6;
	message("\"Fear not -- so long as the nights remain cold, I shall have a use for thee...\"");
	say();
labelFunc0433_02D6:
	case "not done yet" attend labelFunc0433_02F1:
	UI_remove_answer("not done yet");
	message("\"Surely, thou dost not think that Leon the Preacher and Alyssand the Weaver have won? They don't have the strength to govern.\"");
	say();
	message("\"Give it time. Perhaps three moons. And then the people will clamor for the old ways, and remember Voldin in his jail cell.\"");
	say();
	message("\"Then I shall rule as I always deserved, as King of Fawn!\"");
	say();
labelFunc0433_02F1:
	case "storms" attend labelFunc0433_0311:
	message("\"The storms are a regrettable consequence of incurring the heavens' displeasure. I'm certain that our punishment will end soon if we adhere to Beauty's truth.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer(["the heavens' displeasure", "Beauty's truth"]);
labelFunc0433_0311:
	case "the heavens' displeasure" attend labelFunc0433_0331:
	message("\"Out of misguided kindness, we allowed infidels to enter our city. They spread their contagion, corrupting many of our people to their misguided ways. This displeased the heavens. The storms were clearly sent to punish us.\"");
	say();
	UI_remove_answer("the heavens' displeasure");
	UI_add_answer(["infidels", "misguided ways"]);
labelFunc0433_0331:
	case "infidels" attend labelFunc0433_034B:
	message("\"The sailors camped outside of the city are infidels. They do not follow the path of Beauty.\" *\"They came to our city claiming to be from Britannia, which -- as any sailor knows -- is pure fiction. The Priestess was right to remove their ugly dishonesty from our midst.\"");
	say();
	UI_remove_answer("infidels");
	UI_add_answer("Priestess");
labelFunc0433_034B:
	case "Priestess" attend labelFunc0433_0365:
	message("\"Kylista is the Priestess of Beauty. She receives the wisdom of the Oracle and interprets it for those of us who cannot understand the words of the heavens.\" *\"Kylista tried to dissuade us from allowing that false prophet into our city. Now we are paying for our folly.\"");
	say();
	UI_remove_answer("Priestess");
	UI_add_answer("Oracle");
labelFunc0433_0365:
	case "Oracle" attend labelFunc0433_037F:
	message("\"The Oracle is an instrument of the heavens. Its words are divine revelations to those who follow Beauty's truth.\"");
	say();
	UI_remove_answer("Oracle");
	UI_add_answer("revelations");
labelFunc0433_037F:
	case "revelations" attend labelFunc0433_03A9:
	message("\"Thou hast not heard a revelation from the Oracle yet?\"");
	say();
	var0006 = Func0955();
	if (!var0006) goto labelFunc0433_039E;
	message("\"Then thou knowest that these are words meant to enlighten and guide our lives to Beauty.\"");
	say();
	goto labelFunc0433_03A2;
labelFunc0433_039E:
	message("\"Thou shouldst go to the Temple. Judging by the time, there will be another revelation soon.\" *\"I'm certain that thou wilt find it an enlightening experience.\"");
	say();
labelFunc0433_03A2:
	UI_remove_answer("revelations");
labelFunc0433_03A9:
	case "misguided ways" attend labelFunc0433_03C3:
	message("\"There is one among them, Leon, who preaches of something they call The Fellowship. While I'll grant that he is a powerful speaker, he is clearly a misguided fool.\" *\"Who in their right mind would believe that the world could be changed by such simplistic views?\"");
	say();
	UI_remove_answer("misguided ways");
	UI_add_answer("simplistic views");
labelFunc0433_03C3:
	case "simplistic views" attend labelFunc0433_0402:
	if (!(var0001 == true)) goto labelFunc0433_03E0;
	message("\"Forgive me, ");
	message(var0000);
	message(". I did not intend to enter a philosophical discussion. Thy Beauty distracted me, I must confess.\"");
	say();
	goto labelFunc0433_03FB;
labelFunc0433_03E0:
	message("\"What man could honestly expect that the neighbor who covets thy land would not do everything possible to acquire it?\" *\"Wouldst thou, like a trusting woman, trust such a neighbor to act in Unity with thee, and work to become Worthy of owning thy land?\"");
	say();
	var0007 = Func0955();
	if (!var0007) goto labelFunc0433_03F7;
	message("\"Then thou art destined for a dismal life, my friend. For the world is what thou makest of it. Thou canst acquire only what thou takest.\"");
	say();
	goto labelFunc0433_03FB;
labelFunc0433_03F7:
	message("\"Of course not! Thou art a man of the world. Thou knowest that thou canst acquire only what thou takest.\"");
	say();
labelFunc0433_03FB:
	UI_remove_answer("simplistic views");
labelFunc0433_0402:
	case "Beauty's truth" attend labelFunc0433_0415:
	message("\"Everyone is drawn to that which is beautiful. Therefore, if we strive to honor and protect all things beautiful, our lives will be fulfilled.\" *\"All good and honest people are Beautiful.\"");
	say();
	UI_remove_answer("Beauty's truth");
labelFunc0433_0415:
	case "Goblins" attend labelFunc0433_0492:
	if (!(gflags[0x003E] == true)) goto labelFunc0433_045F;
	if (!(gflags[0x014E] == true)) goto labelFunc0433_0443;
	if (!(var0001 == true)) goto labelFunc0433_043C;
	message("\"Please convey Fawn's thanks to thy fellow Pikemen who retook the tower from Pomdirgun and the Goblins. 'Twas most nobly done and Monitor doth have Lady Yelinda's gratitude.\"");
	say();
	goto labelFunc0433_0440;
labelFunc0433_043C:
	message("\"Thou hast Fawn's thanks, noble Pikeman. Lady Yelinda was quite distraught until thou didst retake the tower from Pomdirgun and the Goblins.\"");
	say();
labelFunc0433_0440:
	goto labelFunc0433_045C;
labelFunc0433_0443:
	if (!(var0001 == true)) goto labelFunc0433_0458;
	message("\"Not to belittle thy prowess, ");
	message(var0000);
	message(", but thou shouldst remain here in safety with Lady Yelinda. Leave the retaking of the tower to thy larger male companions.\" *\"The battle will likely be more fierce than thou canst imagine with Pomdirgun goading them on.\"");
	say();
	goto labelFunc0433_045C;
labelFunc0433_0458:
	message("\"I will feel more secure in the knowledge that thou wilt be among the fighters seeking to reclaim our tower. With Pomdirgun goading them on, the battle will most likely be quite fierce.\" *\"I wish it were not my duty to protect Lady Yelinda. I would join thee in the fray if I could.\"");
	say();
labelFunc0433_045C:
	goto labelFunc0433_047E;
labelFunc0433_045F:
	if (!(var0001 == true)) goto labelFunc0433_0474;
	message("\"Thou shouldst have remained in the safety of the city, noble ");
	message(var0000);
	message(". The Pikemen have been driven from the tower by Pomdirgun and his Goblin hordes.\" *\"I have advised Lady Yelinda to order that the gates remain closed at night until the tower is retaken.\"");
	say();
	goto labelFunc0433_047E;
labelFunc0433_0474:
	message("\"Thou art just in time for a fine fight, brave ");
	message(var0000);
	message("! Pomdirgun and his Goblin hordes must be driven from the Pikeman tower.\" *\"Lady Yelinda will be most grateful to all who join in the fray.\"");
	say();
labelFunc0433_047E:
	UI_remove_answer("Goblins");
	UI_add_answer(["Lady Yelinda", "Pomdirgun"]);
labelFunc0433_0492:
	case "Lady Yelinda" attend labelFunc0433_04B2:
	message("\"Lady Yelinda is the most beautiful woman in the city. She rules Fawn with the aid of the Chancellor and the Great Captain's Council.\"");
	say();
	UI_remove_answer("Lady Yelinda");
	UI_add_answer(["Chancellor", "Great Captain's Council"]);
labelFunc0433_04B2:
	case "Chancellor" attend labelFunc0433_04C5:
	message("\"The Chancellor is Lady Yelinda's chief assistant. He conveys messages to and from the Council to her Ladyship and makes public proclamations of Lady Yelinda's judgments.\" *\"If thou wishest a matter brought before her Ladyship, thou must first speak with Zulith. Look for a small man wearing bright green robes. That will be the Chancellor.\"");
	say();
	UI_remove_answer("Chancellor");
labelFunc0433_04C5:
	case "Great Captain's Council" attend labelFunc0433_04E8:
	message("\"The Great Captains take much of the weight of mundane affairs from Lady Yelinda's schedule. Garth, Joth and I oversee trade and the disposition of the fleets.\"");
	say();
	UI_remove_answer("Great Captain's Council");
	UI_add_answer(["Garth", "Joth", "fleet"]);
labelFunc0433_04E8:
	case "Garth" attend labelFunc0433_04FB:
	message("\"Garth is merely a lad. He could never have gotten a Council seat without his family's money.\" *\"He spends his days chasing skirts. Which is just as well, as it keeps him out from under foot.\"");
	say();
	UI_remove_answer("Garth");
labelFunc0433_04FB:
	case "Joth" attend labelFunc0433_050E:
	message("\"Joth is an old fishing captain who had to be forcibly removed from the fleet, I'm afraid. I don't think that he quite realizes that he isn't on the deck of a ship anymore, poor man.\" *\"He thinks we can rebuild the fleet with little or no money. We humor him as best we can.\"");
	say();
	UI_remove_answer("Joth");
labelFunc0433_050E:
	case "fleet" attend labelFunc0433_0521:
	message("\"These severe storms have caused the total loss of all our fishing ships. Fawn once supplied fish to the other cities. But that is a thing of the past, I'm afraid.\" *\"Even if we were able to rebuild the ships, we have almost no able-bodied men to crew them. This may be the death knell of Fawn without the proper guidance.\"");
	say();
	UI_remove_answer("fleet");
labelFunc0433_0521:
	case "Pomdirgun" attend labelFunc0433_053B:
	message("\"I do not know what evil spawned such a fearful creature. Pomdirgun is easily larger than the other Goblins, and twice as fierce. All the other Goblins fear him.\" *\"His first foray against Fawn cost us our healer, Seth. And now he hath led the Goblins to overtake the Pikeman tower. I'd give much to see his head on a pike!\"");
	say();
	UI_remove_answer("Pomdirgun");
	UI_add_answer("Seth");
labelFunc0433_053B:
	case "Seth" attend labelFunc0433_0568:
	message("\"Seth was a stubborn man. But a good healer. He refused to take a guard contingent along with him to hunt herbs. He said that the guards did nothing but trample what he was looking for.\" *\"Unfortunately, such stubbornness cost him his life.\"");
	say();
	if (!(var0001 == true)) goto labelFunc0433_0556;
	message("\"The details are best left unmentioned. 'Tis not a tale for a beautiful lady.\" *\"The result is that Delphynia is all Fawn doth have in the way of a healer.\"");
	say();
	goto labelFunc0433_055A;
labelFunc0433_0556:
	message("\"By the time the guards caught up with the foul creatures, they had eaten all but his head!\" *\"But perhaps the worst part of the tale is that Fawn is left with only Delphynia as a healer!\"");
	say();
labelFunc0433_055A:
	UI_remove_answer("Seth");
	UI_add_answer("Delphynia");
labelFunc0433_0568:
	case "Delphynia" attend labelFunc0433_0586:
	message("\"Delphynia is a nice enough woman. But she is no healer. She's a horticulturist. Not even an herbalist. But she's all we have until these cursed storms lighten.\"");
	say();
	message("\"I fear, however, that she hath fallen under the spell of one of those infidels! Ruggs, I think his name is.\"");
	say();
	UI_remove_answer("Delphynia");
	UI_add_answer("Ruggs");
labelFunc0433_0586:
	case "Ruggs" attend labelFunc0433_0599:
	message("\"Ruggs is so ugly that his sins are written plain for all to see. But Delphynia seems to find him compelling. I'm told he speaks sweetly, as doth his companion Leon.\" *\"But I expect all evil things are compelling in some manner. Else how would any good person be tempted by them?\"");
	say();
	UI_remove_answer("Ruggs");
labelFunc0433_0599:
	case "bye" attend labelFunc0433_05E4:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0433_05D2;
	Func097F(0xFFCD, "@Thou shalt see!@", 0x0002);
	goto labelFunc0433_05DE;
labelFunc0433_05D2:
	Func097F(0xFFCD, "@Walk in Beauty.@", 0x0002);
labelFunc0433_05DE:
	Func08AA();
	goto labelFunc0433_05E7;
labelFunc0433_05E4:
	goto labelFunc0433_0227;
labelFunc0433_05E7:
	endconv;
labelFunc0433_05E8:
	return;
}


