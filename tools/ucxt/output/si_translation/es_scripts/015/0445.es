#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern void Func084A 0x84A ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0988 0x988 (var var0000, var var0001);

void Func0445 object#(0x445) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_get_item_flag(0xFFBB, 0x001C);
	var0003 = "I serve Lord British";
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = "He is my friend";
	var0008 = false;
	var0009 = UI_get_item_flag(0xFFFD, 0x0006);
	var000A = UI_get_item_flag(0xFFFE, 0x0006);
	var000B = UI_get_item_flag(0xFFFF, 0x0006);
	var000C = UI_is_dead(0xFFB4);
	var000D = "he";
	if (!UI_is_pc_female()) goto labelFunc0445_0079;
	var000D = "she";
labelFunc0445_0079:
	if (!(event == 0x0002)) goto labelFunc0445_0184;
	if (!gflags[0x0038]) goto labelFunc0445_0091;
	UI_run_schedule(0xFFBB);
	goto labelFunc0445_0257;
labelFunc0445_0091:
	if (!gflags[0x00B7]) goto labelFunc0445_0098;
	abort;
labelFunc0445_0098:
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0445], 0x00C8);
	if (!(!UI_npc_nearby(0xFFFF))) goto labelFunc0445_0183;
	var000E = UI_approach_avatar(0xFFFF, 0x0064, 0x0028);
	if (!var000E) goto labelFunc0445_016A;
	var000F = UI_get_object_position(0xFFFF);
	var0010 = UI_create_new_object2(0x00E4, [(var000F[0x0001] + 0x0001), (var000F[0x0002] - 0x0001), var000F[0x0003]]);
	var0011 = UI_create_new_object2(0x00E4, [(var000F[0x0001] - 0x0001), (var000F[0x0002] - 0x0001), var000F[0x0003]]);
	UI_set_alignment(var0010, 0x0000);
	UI_set_alignment(var0011, 0x0000);
	UI_set_schedule_type(var0010, 0x0003);
	UI_set_schedule_type(var0011, 0x0003);
	UI_set_npc_id(var0010, 0x000D);
	UI_set_npc_id(var0011, 0x000D);
labelFunc0445_016A:
	Func09AC(0xFFFF, 0xFFFF, 0x0000, 0x0003);
	UI_set_schedule_type(0xFFFF, 0x0003);
labelFunc0445_0183:
	abort;
labelFunc0445_0184:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFBB, 0x001D))) goto labelFunc0445_01E0;
	if (!gflags[0x0093]) goto labelFunc0445_01CE;
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("\"Thou hast ruined everything! With the current emotional and spiritual state of the city, the Goblins are certain to win this war against us!\"");
	say();
	message("\"The problem lies with the Bears and Wolves -- their bickering weakens us. So I had a plan! The Leopards would rule, and I would be King.\"");
	say();
	message("\"And with the miracle weapons in our hidden arsenal, not even the Goblins could have taken this city...\"");
	say();
	UI_clear_item_flag(0xFFBB, 0x001D);
	UI_reduce_health(0xFFBB, 0x0032, 0x0000);
	abort;
	goto labelFunc0445_01E0;
labelFunc0445_01CE:
	var000E = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0445_01E0:
	if (!(event == 0x0001)) goto labelFunc0445_0248;
	UI_item_say(0xFE9C, "@Greetings, sir.@");
	0xFFBB->Func07D1();
	if (!gflags[0x0038]) goto labelFunc0445_0232;
	UI_set_schedule_type(0xFFBB, 0x000F);
	Func097F(0xFFBB, "@What!@", 0x0002);
	0xFFBB->Func07D2();
	var000E = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x55, 0x0445], 0x0007);
	abort;
labelFunc0445_0232:
	Func097F(0xFFBB, "@Hello.@", 0x0002);
	UI_set_schedule_type(0xFFBB, 0x0003);
labelFunc0445_0248:
	if (!(event == 0x0009)) goto labelFunc0445_0CC6;
	UI_run_schedule(0xFFBB);
labelFunc0445_0257:
	UI_clear_item_say(0xFFBB);
	UI_show_npc_face0(0xFFBB, 0x0000);
	if (!(!var0002)) goto labelFunc0445_02E8;
	var000E = [0xFF6A, 0xFFC1, 0xFFB7, 0xFFB3, 0xFFBB];
	enum();
labelFunc0445_0285:
	for (var0014 in var000E with var0012 to var0013) attend labelFunc0445_029A;
	UI_revert_schedule(var0014);
	goto labelFunc0445_0285;
labelFunc0445_029A:
	message("\"Greetings, stranger. I am Lord Marsten. Thou hast come to this city at a grievous hour. We are here to entomb the ashes of this brave Pikeman Groat, as well as to mourn the loss of our Knight Champion.\"");
	say();
	UI_set_item_flag(0xFFBB, 0x001C);
	Func094E(0xFFC1, "@Astrid was the finest Knight that Monitor ever had!@");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"The Goblins ambushed her patrol. They slew all but one of the Pikemen, and took Astrid's body back to their camp -- to be feasted upon and used to make their sickening trophies, no doubt! When the reinforcements came, they were mere moments too late. They managed to rescue Groat but his injuries were too severe. Not even our healer Harnna could save him.\"");
	say();
	Func094E(0xFF6A, "@Damn the Goblins! They should be exterminated...@");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"What business dost thou have with me, stranger?\"");
	say();
	UI_add_answer(["Astrid", "Knight Champion"]);
	goto labelFunc0445_0341;
labelFunc0445_02E8:
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc0445_0307;
	message("\"Oh, art thou bothering me again! No servant of Beast British is welcome here.\"");
	say();
	UI_add_answer(["I renounce Lord British", "I serve Lord British"]);
	goto labelFunc0445_03D6;
labelFunc0445_0307:
	if (!gflags[0x0038]) goto labelFunc0445_0324;
	message("\"Didst thou come to ask me why I did betray my city? Ha! Any idiot can see the reason. With the current emotional and spiritual state of the city, the Goblins are certain to win this war against us! The foolish Bears and the cowardly Wolves are weakening us! They needed to be turned against each other so that the Leopard Command could assume their rightful leadership of Monitor. I had even devised a secret weapon to defend the city without the Bears or Wolves.\"");
	say();
	UI_add_answer(["foolish Bears", "cowardly Wolves", "secret weapon"]);
	goto labelFunc0445_03D6;
labelFunc0445_0324:
	if (!gflags[0x0048]) goto labelFunc0445_0337;
	message("\"'Tis a pleasure to see thee, Knight ");
	message(var0001);
	message(". As the Lord of Monitor, I am always at thy service.\"");
	say();
	goto labelFunc0445_0341;
labelFunc0445_0337:
	message("\"Greetings, ");
	message(var0001);
	message(". What is thy business with me?\"");
	say();
labelFunc0445_0341:
	UI_add_answer(["duties", "Goblins"]);
	if (!gflags[0x0048]) goto labelFunc0445_035B;
	UI_add_answer("traitor");
labelFunc0445_035B:
	if (!(gflags[0x003C] && (!gflags[0x002F]))) goto labelFunc0445_036D;
	UI_add_answer("ask permission");
labelFunc0445_036D:
	if (!(gflags[0x004A] && (!gflags[0x0048]))) goto labelFunc0445_037F;
	UI_add_answer("Knighthood");
labelFunc0445_037F:
	if (!(gflags[0x0036] && (!gflags[0x0038]))) goto labelFunc0445_0391;
	UI_add_answer("accuse");
labelFunc0445_0391:
	if (!(gflags[0x00A9] && (!gflags[0x0078]))) goto labelFunc0445_03A3;
	UI_add_answer("enchanter");
labelFunc0445_03A3:
	if (!((UI_get_schedule_type(0xFFBB) == 0x0007) && (!gflags[0x0038]))) goto labelFunc0445_03BD;
	UI_add_answer("Hall of Monitor");
labelFunc0445_03BD:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0445_03D6;
	UI_add_answer("brown bottle");
labelFunc0445_03D6:
	UI_add_answer("bye");
labelFunc0445_03DD:
	converse attend labelFunc0445_0CC5;
	case "brown bottle" attend labelFunc0445_0420:
	UI_remove_answer("brown bottle");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0445_0418;
	message("\"Leave me with that dirty bottle! It doth look to have been lying in the woods for weeks...\"");
	say();
	Func097F(0xFFBB, "@'Sblood!@", 0x0000);
	abort;
	goto labelFunc0445_0420;
labelFunc0445_0418:
	message("\"I care not what thou didst find in the woods. 'Tis probably Goblin loot.\"");
	say();
	message("\"There is no traitor in Monitor. Search thou not for evidence, for thou shalt not find it. Instead, help us to eradicate the Goblins!\"");
	say();
labelFunc0445_0420:
	case "I renounce Lord British" attend labelFunc0445_04C5:
	UI_remove_answer(["I renounce Lord British", "I serve Lord British"]);
	message("\"Yes? Thou dost wish to say something to me?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"I renounce Lord British and everything for which he stands. From this moment forward, I am his friend and servant no longer.\"");
	say();
	UI_remove_npc_face1();
	if (!var0009) goto labelFunc0445_0471;
	UI_show_npc_face1(0xFFFD, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Avatar! I cannot believe thy words!\"");
	say();
	UI_remove_npc_face1();
labelFunc0445_0471:
	if (!var000A) goto labelFunc0445_0490;
	UI_show_npc_face1(0xFFFE, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"How could thee renounce thy rightful liege?\"");
	say();
	UI_remove_npc_face1();
labelFunc0445_0490:
	if (!var000B) goto labelFunc0445_04AB;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Very well, Avatar. Do what thou must.\"");
	say();
labelFunc0445_04AB:
	UI_set_conversation_slot(0x0000);
	message("\"Thou must feel better to have purged thyself of that burden. Thou wilt now be accepted by all of Monitor.\"");
	say();
	message("\"Who doth know? Perhaps one day thou couldst become a true knight of Monitor. But only if thou passest the Test of Knighthood.\"");
	say();
	UI_add_answer("Test of Knighthood");
	gflags[0x00A5] = true;
labelFunc0445_04C5:
	case "I serve Lord British" attend labelFunc0445_04D2:
	message("\"Away with thee, foul servant of the Beast!\" ~\"Renounce thine allegiance with that cruel tyrant or feel a halberd in thy back as the pikemen escort thee from our fine town!\"");
	say();
	abort;
labelFunc0445_04D2:
	case "Astrid" attend labelFunc0445_050E:
	UI_remove_answer("Astrid");
	message("\"Canst thou imagine the horrors of being devoured alive?! She was a masterful warrior, and deserved a finer death than this...\"");
	say();
	if (!(!gflags[0x0032])) goto labelFunc0445_0503;
	Func094E(0xFF6A, "@Understand, stranger, that Marsten and this woman\twere bedmates.@");
	UI_set_conversation_slot(0x0000);
	UI_add_answer("bedmates");
labelFunc0445_0503:
	message("\"There is none to replace her, and certainly none able to reclaim the Helm of Monitor from the Goblins.\"");
	say();
	UI_add_answer("Helm of Monitor");
labelFunc0445_050E:
	case "Helm of Monitor" attend labelFunc0445_0553:
	UI_remove_answer("Helm of Monitor");
	message("\"'Tis a sacred item once belonging to the Goblins. It was what gave their ancient leader, Gurnordir, the power to build the Goblin Horde.\"");
	say();
	message("\"When our forefathers killed Gurnordir, the Helm was claimed for Monitor. It hath since been worn by the Knight Champion.\"");
	say();
	UI_add_answer("Gurnordir");
	if (!(!var0008)) goto labelFunc0445_053A;
	UI_add_answer("Knight Champion");
labelFunc0445_053A:
	if (!(!UI_get_item_flag(0xFEF7, 0x0004))) goto labelFunc0445_0553;
	message("\"We need to reclaim it! Else, the Goblins shall again build their Horde and invade this great city.\"");
	say();
	UI_add_answer("raid the Goblins");
labelFunc0445_0553:
	case "Gurnordir" attend labelFunc0445_056A:
	UI_remove_answer("Gurnordir");
	message("\"If thou dost wish to learn more of this evil race and its history, speak to Templar. He is an expert on the subject.\"");
	say();
	gflags[0x00A4] = true;
labelFunc0445_056A:
	case "raid the Goblins" attend labelFunc0445_05A3:
	UI_remove_answer("raid the Goblins");
	if (!gflags[0x0048]) goto labelFunc0445_059F;
	message("\"We must smash the Goblins! Their chieftain must be slain, the Helm recovered, and their village pillaged.\"");
	say();
	if (!gflags[0x0044]) goto labelFunc0445_0598;
	message("\"Certainly, thou didst force that cretin Simon to give thee some clue before his execution!\"");
	say();
	message("\"The Goblins shall be defenseless if thou dost strike now. Take only thy companions, and surprise them, for a larger force would be seen by their scouts.\"");
	say();
	message("\"Go now, and regain the Helm!\"");
	say();
	goto labelFunc0445_059C;
labelFunc0445_0598:
	message("\"But no one knows where the Goblin village lies. 'Tis an evil mystery...\"");
	say();
labelFunc0445_059C:
	goto labelFunc0445_05A3;
labelFunc0445_059F:
	message("\"I see no reason to discuss this matter with someone who is not even a Knight.\"");
	say();
labelFunc0445_05A3:
	case "bedmates" attend labelFunc0445_05EC:
	UI_remove_answer("bedmates");
	message("\"Yes, Astrid and I were bedmates. I will not say we were lovers. For we were also warriors and comrades in arms. And we knew that any time either one of us took the battlefield might have been the last time we could have seen each other. I loved her, but we were not in love. I shall always remember her.\"");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("\"As shall I....\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"What was that thou saidest, Brendann!\"");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("\"What??! Oh, nothing, merely mentioning that we shall all miss her presence. She was a fine warrior.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0445_05EC:
	case "Goblins" attend labelFunc0445_060E:
	UI_remove_answer("Goblins");
	message("\"I vow to war upon them until the end of the world! There shall be no end to my vengeance upon the Goblins.\"");
	say();
	message("\"They have robbed, pillaged, and murdered our people since our ancestors came here centuries ago. They delight in kidnapping our women and eating them alive!\"");
	say();
	message("\"In the end, 'tis either Men or Goblins -- both of us cannot dwell here.\"");
	say();
	UI_add_answer("ancestors");
labelFunc0445_060E:
	case "ancestors" attend labelFunc0445_0643:
	UI_remove_answer("ancestors");
	message("\"Our people fled from their homeland when an evil tyrant united the kingdoms, and sought to force his philosophy upon them.\"");
	say();
	message("\"So we set sail from Sosaria, and -- led beyond the Serpent Pillars by a mage named Erstam -- we came to the Serpent Isle.\"");
	say();
	message("\"This land was deserted then, settled only by Goblins and covered with the ruins of a mysterious ancient Serpentine civilization.\"");
	say();
	UI_push_answers();
	UI_add_answer(["tyrant", "Sosaria", "ruins", "Erstam", "change subject"]);
labelFunc0445_0643:
	case "tyrant" attend labelFunc0445_06B1:
	UI_remove_answer("tyrant");
	if (!((gflags[0x00A5] == false) && (gflags[0x002D] == false))) goto labelFunc0445_06A0;
	message("\"He was an evil man, and Knight and Mage alike rebelled against his tyranny. So our ancestors fled here, and founded the Three Cities.\"");
	say();
	message("\"British was his name. Lord British, he called himself. But we call him Beast British!\"");
	say();
	if (!(Func0956([var0003, "say nothing"]) == var0003)) goto labelFunc0445_069D;
	message("\"What?! I should have known that evil tyrant would yet live! Beware -- no servant of the Beast shall be aided by any Knight of Monitor!\"");
	say();
	gflags[0x002D] = true;
	if (!gflags[0x00B7]) goto labelFunc0445_0690;
	UI_revert_schedule(0xFFBB);
labelFunc0445_0690:
	Func097F(0xFFBB, "@Begone!@", 0x0000);
	abort;
labelFunc0445_069D:
	goto labelFunc0445_06A4;
labelFunc0445_06A0:
	message("\"Thou dost agree, since thou dost not speak well of the Beast! Aye, a tyrant if there ever were one.\"");
	say();
labelFunc0445_06A4:
	UI_add_answer(["Three Cities", "Beast British"]);
labelFunc0445_06B1:
	case "Three Cities" attend labelFunc0445_06C8:
	UI_remove_answer("Three Cities");
	message("\"Three great cities were founded by those who fled the tyrant: Moonshade, Fawn and Monitor.\"");
	say();
	message("\"Moonshade is the City of Mages. Fawn is a city that worships Beauty. As for Monitor, 'tis the city thou art in now. 'Tis a city based on Courage.\"");
	say();
labelFunc0445_06C8:
	case "Beast British" attend labelFunc0445_06DB:
	UI_remove_answer("Beast British");
	message("\"That tyrant Beast British tried to force his bent philosophical 'virtues' upon our ancestors. As magic depends greatly upon illusion, the Moon mages dismissed the value of Truth. As worshippers of Beauty, the people of Fawn saw little worth in unconditional Love. We of Monitor feel that Courage stands above his other virtues.\"");
	say();
labelFunc0445_06DB:
	case "Sosaria" attend labelFunc0445_06EE:
	UI_remove_answer("Sosaria");
	message("\"This new land was originally to be called New Sosaria, but it became known as the Serpent Isle upon the discovery of various ruins and mysterious ancient serpent writing. We know little else of the race that left its mark here.\"");
	say();
labelFunc0445_06EE:
	case "ruins" attend labelFunc0445_0709:
	UI_remove_answer("ruins");
	message("\"Thou dost see them across the land, left behind by the evil creatures which once dwelled in this place.\"");
	say();
	message("\"That fellow Krayg could tell thee more. He is most fond of taking long walks in distant places, and often sees strange sights.\"");
	say();
	gflags[0x00A6] = true;
labelFunc0445_0709:
	case "Erstam" attend labelFunc0445_071C:
	UI_remove_answer("Erstam");
	message("\"He was a wild-eyed man, driven by his thirst for knowledge and his need for the freedom to pursue it. 'Tis said that in his studies and experimentations he did discover things that drove him insane. Others say it was the loss of a woman who was his true love that drove him mad. Today he is known as the Mad Mage. And his name is most often spoken in hushed whispers.\"");
	say();
labelFunc0445_071C:
	case "change subject" attend labelFunc0445_0733:
	UI_remove_answer("change subject");
	message("\"Certainly...\"");
	say();
	UI_pop_answers();
labelFunc0445_0733:
	case "duties" attend labelFunc0445_0763:
	UI_remove_answer("duties");
	message("\"I am the Lord of Monitor, the City of Knights.\"");
	say();
	message("\"There are three bodies of Knights in the city. No Command is better than another, for all warriors are equal.\"");
	say();
	message("\"As the leader of the Leopards, this is my year to rule Monitor.\"");
	say();
	if (!(!var0005)) goto labelFunc0445_075C;
	UI_add_answer("Leopards");
labelFunc0445_075C:
	UI_add_answer("Command");
labelFunc0445_0763:
	case "Leopards" attend labelFunc0445_079A:
	UI_remove_answer("Leopards");
	var0005 = true;
	message("\"We are the peacemakers. The Bears and the Wolves always quarrel, but we stop them from wringing each others' necks.\"");
	say();
	message("\"We bring balance to the community. 'Tis not always glorious to be a Leopard, but we are proud to do our duty.\"");
	say();
	if (!(!var0006)) goto labelFunc0445_078C;
	UI_add_answer("Wolves");
labelFunc0445_078C:
	if (!(!var0004)) goto labelFunc0445_079A;
	UI_add_answer("Bears");
labelFunc0445_079A:
	case "Command" attend labelFunc0445_07DF:
	UI_remove_answer("Command");
	message("\"Every citizen of the town must become a Knight of Monitor, or be banished when they reach the age of\tfifteen.\"");
	say();
	message("\"The Knights are organized into three war bands, which are known as Commands -- the Bears, the Wolves, and the Leopards.\"");
	say();
	message("\"As thou hast no doubt noted, our tattoos mark us according to our Command.\"");
	say();
	if (!(!var0006)) goto labelFunc0445_07C3;
	UI_add_answer("Wolves");
labelFunc0445_07C3:
	if (!(!var0004)) goto labelFunc0445_07D1;
	UI_add_answer("Bears");
labelFunc0445_07D1:
	if (!(!var0005)) goto labelFunc0445_07DF;
	UI_add_answer("Leopards");
labelFunc0445_07DF:
	case "Bears" attend labelFunc0445_07FA:
	UI_remove_answer("Bears");
	var0004 = true;
	message("\"The Bears have saved this city again and again. They never forget that we live under siege, that the Goblins could always attack.\"");
	say();
	message("\"The city walls were constructed by the Bears. They are tough, strong, powerful warriors. Caladin is their lord.\"");
	say();
labelFunc0445_07FA:
	case "Wolves" attend labelFunc0445_0819:
	var0006 = true;
	UI_remove_answer("Wolves");
	message("\"The prosperity of Monitor is due to the foresight of the Wolves. They have forced us to reach out to our fellow Man.\"");
	say();
	message("\"The Wolves repaired the ancient highway, and added new roads to link the Three Cities. They built the guard towers.\"");
	say();
	message("\"Brendann is their lord. The Wolves are smart, preferring cunning over brute force.\"");
	say();
labelFunc0445_0819:
	case "Knight Champion" attend labelFunc0445_083F:
	UI_remove_answer("Knight Champion");
	var0008 = true;
	message("\"Knight Champion is the most revered title in Monitor -- more than Lord! To be Knight Champion is to be the finest warrior in the land.\"");
	say();
	message("\"To hone their skills, our Knights meet daily on the List Field to spar. Thus, they demonstrate their martial prowess.\"");
	say();
	message("\"From success in tournament and in battle, the Knight Champion is determined. He or she is privileged to wear the Helm of Monitor.\"");
	say();
	UI_add_answer("List Field");
labelFunc0445_083F:
	case "List Field" attend labelFunc0445_0868:
	UI_remove_answer("List Field");
	message("\"Thou canst hardly miss the List Field -- 'tis the walled field in the south part of town.\"");
	say();
	message("\"There is no shortage of opponents, especially if thou dost go there in the late morning or afternoon.\"");
	say();
	if (!(!gflags[0x0048])) goto labelFunc0445_0868;
	message("\"Even strangers like thyself are welcome to spar. 'Tis good preparation for the Test of Knighthood.\"");
	say();
	UI_add_answer("Test of Knighthood");
labelFunc0445_0868:
	case "traitor" attend labelFunc0445_08CC:
	UI_remove_answer("traitor");
	if (!var000C) goto labelFunc0445_0884;
	message("\"Thou hast done us a valuable service by rooting out that miserable traitor, Simon. Although in the true sense of the word, he was merely a loyal Goblin, not a traitor... Bah! A pox on all Goblins!\"");
	say();
	goto labelFunc0445_08CC;
labelFunc0445_0884:
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0445_08B0;
	message("\"Thou hast slain the traitor, Knight! Well done!");
	say();
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0445_08A9;
	message("\"Lydia must have been part of Shmed's secret conspiracy. But that no longer matters -- both of the Goblin spies are dead!\"");
	say();
	goto labelFunc0445_08AD;
labelFunc0445_08A9:
	message("\"The Goblins shall no more steal our secrets, eh!\"");
	say();
labelFunc0445_08AD:
	goto labelFunc0445_08CC;
labelFunc0445_08B0:
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0445_08C8;
	message("\"I must apologize to thee for the attack upon thee by the traitor, Shmed.\"");
	say();
	message("\"I did not believe that there was a traitor, but this evidence proves it.\"");
	say();
	goto labelFunc0445_08CC;
labelFunc0445_08C8:
	message("\"I do not care for this talk of traitors. Who would betray us to the Goblins? No man could be that insane.\"");
	say();
labelFunc0445_08CC:
	case "Test of Knighthood" attend labelFunc0445_08F4:
	UI_remove_answer("Test of Knighthood");
	message("\"One cannot be born a Knight, nor can the title be bestowed for money or influence. Only a worthy warrior can become a Knight.\"");
	say();
	message("\"To test the worthiness of those who sought Knighthood, a special dungeon was prepared. If one can survive Knight's Test, then one is ready for Knighthood.\"");
	say();
	message("\"'Tis an honor to become a Knight of Monitor, yet 'tis also a heavy responsibility. There are many enemies in the land.\"");
	say();
	UI_add_answer(["Knight's Test", "responsibility"]);
labelFunc0445_08F4:
	case "Knight's Test" attend labelFunc0445_0915:
	UI_remove_answer("Knight's Test");
	message("\"The dungeon lies north of town, in the mountains. At the entrance, a Knight named Shmed awaits the hopeful warriors.\"");
	say();
	message("\"He can explain the rules of the Test to thee, or thou couldst speak with Caladin. 'Tis Caladin's duty to instruct Knight candidates.\"");
	say();
	if (!(!gflags[0x003C])) goto labelFunc0445_0915;
	Func084A();
labelFunc0445_0915:
	case "responsibility" attend labelFunc0445_0930:
	UI_remove_answer("responsibility");
	message("\"One cannot shirk one's responsibilities after becoming a Knight. Thy Command might call thee to Tower duty, or to scout the Goblins.\"");
	say();
	message("\"There is nothing worse than deserting thy Command. In times of crisis, thy place is here in Monitor.\"");
	say();
	message("\"For instance, young Knight Wilfred hath left Monitor to investigate the strange death of his father. Such nonsense! He is needed here, with his brother Knights.\"");
	say();
labelFunc0445_0930:
	case "ask permission" attend labelFunc0445_0942:
	UI_remove_answer("ask permission");
	Func084A();
labelFunc0445_0942:
	case "Knighthood" attend labelFunc0445_09AA:
	UI_remove_answer("Knighthood");
	message("\"Congratulations! Thou dost not even need to tell me. I can see that thou hast triumphed in the dungeon.\"");
	say();
	if (!(!(gflags[0x007E] && (gflags[0x003E] && gflags[0x0091])))) goto labelFunc0445_0968;
	message("\"Now thou must prepare for thy banquet, at which thou wilt become a Knight of Monitor.\"");
	say();
labelFunc0445_0968:
	if (!(!gflags[0x003E])) goto labelFunc0445_0973;
	message("\"Thou wouldst be a poor Knight without the Mark. Seek out Lydia, for she will give thee the Tattoo of Knighthood.\"");
	say();
labelFunc0445_0973:
	if (!(!gflags[0x007E])) goto labelFunc0445_0982;
	message("\"In the dungeon, thou didst slay the animal which the Ashes of Gurnordir did send to thee.\"");
	say();
	message("\"Now bring the animal's body to Cellia the Furrier. From the carcass, she shall make thy Cloak of Knighthood.\"");
	say();
labelFunc0445_0982:
	if (!(!gflags[0x0091])) goto labelFunc0445_0991;
	message("\"The traditional meal of the banquet is a stew made from the meat of the animal thou didst slay.\"");
	say();
	message("\"Bring the meat to Lucilla in the pub, and she shall prepare the feast.\"");
	say();
labelFunc0445_0991:
	if (!(gflags[0x003E] && (gflags[0x007E] && gflags[0x0091]))) goto labelFunc0445_09A6;
	message("\"Thou art ready, young Knight! Go to the banquet hall in one hour. I shall meet thee there.\"");
	say();
	goto labelFunc0445_09AA;
labelFunc0445_09A6:
	message("\"When thou hast finished thy work, then thy knighting can occur.\"");
	say();
labelFunc0445_09AA:
	case "accuse" attend labelFunc0445_09CA:
	UI_remove_answer("accuse");
	message("\"What art thou talking about? Thou dost know nothing! Leave at once, or I shall call the Pikemen!\"");
	say();
	Func097F(0xFFBB, "@Leave!@", 0x0000);
	abort;
labelFunc0445_09CA:
	case "enchanter" attend labelFunc0445_0AFD:
	UI_remove_answer("enchanter");
	if (!(!gflags[0x00AA])) goto labelFunc0445_0A0E;
	message("\"It was most disrespectful, the way that enchanter did interrupt our memorial service. The white-haired wizard appeared on top of the Cremator, in the most reverent part of the ceremony!\"");
	say();
	message("\"I ordered him jailed. We are very strict here in Monitor.\"");
	say();
	var0015 = Func0992(0x0001, (("@Could this be our friend Iolo, " + var0000) + "?@"), "@Could this be my friend Iolo?", false);
	UI_set_conversation_slot(0x0000);
	message("\"Then thou shouldst visit the criminal at jail. We have our hands full in this town with the Goblins and we do not need such pranksters in Monitor!\"");
	say();
	goto labelFunc0445_0AFD;
labelFunc0445_0A0E:
	if (!(!gflags[0x00BD])) goto labelFunc0445_0A98;
	message("\"I understand thou hast spoken with this villain.\"");
	say();
	if (!(var0007 == Func0956([var0007, "say nothing"]))) goto labelFunc0445_0A98;
	message("\"Then explain to me thy friend's actions. Is he a sorcerer?\"");
	say();
	if (!Func0955()) goto labelFunc0445_0A3E;
	message("\"Then he can remain in jail until he rots. I have no love of mages. I will not abide their pranks under any circumstances.\"");
	say();
	abort;
	goto labelFunc0445_0A98;
labelFunc0445_0A3E:
	message("\"Then how did he appear in the middle of the funeral? Doth he fly?\"");
	say();
	var0016 = Func0956(["@Yes, he does.@", "@He was hit by lightning.@", "@I do not know.@"]);
	if (!(var0016 == "@Yes, he does.@")) goto labelFunc0445_0A6B;
	Func097F(0xFFBB, "@Bah!@", 0x0000);
	abort;
labelFunc0445_0A6B:
	if (!(var0016 == "@I do not know.@")) goto labelFunc0445_0A79;
	message("\"Well, these are mysterious times. Strange occurrences have become usual...\"");
	say();
labelFunc0445_0A79:
	if (!(var0016 == "@He was hit by lightning.@")) goto labelFunc0445_0A98;
	if (!gflags[0x004C]) goto labelFunc0445_0A90;
	message("\"I see! And the urn which thou didst return to Caladin -- it was exchanged for thy friend!\"");
	say();
	goto labelFunc0445_0A94;
labelFunc0445_0A90:
	message("\"Indeed. The storms have been known to magically displace their victims.\"");
	say();
labelFunc0445_0A94:
	gflags[0x00BD] = true;
labelFunc0445_0A98:
	if (!gflags[0x0048]) goto labelFunc0445_0AF1;
	if (!gflags[0x00CD]) goto labelFunc0445_0AB8;
	message("\"Art thou daft? I have already given thee the key. Thy friend is locked in the jail. It is in the northeast part of town.\"");
	say();
	Func097F(0xFFBB, "@Free thy friend!@", 0x0000);
	abort;
	goto labelFunc0445_0AEE;
labelFunc0445_0AB8:
	message("\"If thou wilt vouch for thy friend's future behavior, then I shall let him go free.\"");
	say();
	if (!Func0955()) goto labelFunc0445_0AEA;
	message("\"Very well. Keep thine eye on him. We do not want people popping in and out of our city like this!\"");
	say();
	message("\"Here is the key to thy friend's jail cell. Set him free.\"");
	say();
	var000E = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0000, 0x0000, true);
	gflags[0x00CD] = true;
	goto labelFunc0445_0AEE;
labelFunc0445_0AEA:
	message("\"Then he must remain in his cell.\"");
	say();
labelFunc0445_0AEE:
	goto labelFunc0445_0AFD;
labelFunc0445_0AF1:
	message("\"If only thou wert a Knight! Then I could let thee vouch for thy friend, and let him free.\"");
	say();
	message("\"But thou art merely a stranger here...\"");
	say();
	gflags[0x00B5] = true;
labelFunc0445_0AFD:
	case "Hall of Monitor" attend labelFunc0445_0B1D:
	UI_remove_answer("Hall of Monitor");
	message("\"This is a magnificent building. It serves as both a seat of government where important meetings are held, and as a museum of sorts.\"");
	say();
	UI_add_answer(["meetings", "museum"]);
labelFunc0445_0B1D:
	case "meetings" attend labelFunc0445_0B30:
	UI_remove_answer("meetings");
	message("\"Spektor, Caladin, Brendann and myself meet at noon every day to make all the decisions involved in ruling the town.\"");
	say();
labelFunc0445_0B30:
	case "museum" attend labelFunc0445_0B62:
	UI_remove_answer("museum");
	message("\"There are many fine exhibits in our museum. Thou shouldst especially note the artifacts captured from the Goblins...\"");
	say();
	message("\"Many of the artifacts are crafted from the bones of defeated Knights, I am certain. And the drum -- I think the skin across the top is human!\"");
	say();
	var0015 = Func0992(0xFFFD, "@I find this discussion disgusting.@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"Oh, show courage! Thou dost look like thou mightest lose thy last meal!\"");
	say();
labelFunc0445_0B62:
	case "foolish Bears" attend labelFunc0445_0B75:
	UI_remove_answer("foolish Bears");
	message("\"The Bear Command would have hibernated safe within the walls of the city, and would never have seen the danger until the Goblin hordes were climbing over our walls.\"");
	say();
labelFunc0445_0B75:
	case "cowardly Wolves" attend labelFunc0445_0B88:
	UI_remove_answer("cowardly Wolves");
	message("\"The Wolf Command would have never remained here this long. They would have pulled up their stakes and gone roaming the day we had to fight to keep this place. Once on the run they would have been cut down like dogs!\"");
	say();
labelFunc0445_0B88:
	case "secret weapon" attend labelFunc0445_0B9B:
	UI_remove_answer("secret weapon");
	message("\"I had learned of a weapon unlike any that hath ever been seen in this world. A substance that could change the face of war forever! The substance I would have used is well hidden. And thou shalt never find it. Ha!\"");
	say();
labelFunc0445_0B9B:
	case "bye" attend labelFunc0445_0CC2:
	if (!(!gflags[0x0032])) goto labelFunc0445_0CA7;
	message("\"But why hast thou come to our town? What is thy business here?\"");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("\"Perhaps ");
	message(var000D);
	message(" is a spy for the Goblins!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Now, I do not agree with all this talk of a spy in our midst. Do not let these rumors divide our city, Caladin.\"");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("\"Yet there was that other suspicious stranger, the fat sage...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Whom I threw out of town...\"");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("\"And that scholar -- a woman with fine bone structure, but a little too old to pleasure me...\"");
	say();
	UI_remove_npc_face1();
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc0445_0C1C;
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"Could he be speaking of Iolo's wife, the good lady Gwenno?\"");
	say();
labelFunc0445_0C1C:
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("\"And do not forget the enchanter who appeared in the midst of the funeral services for our deceased Pikemen!\"");
	say();
	UI_remove_npc_face1();
	gflags[0x00A9] = true;
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("\"Warriors, be still! There is no spy in Monitor, and I refuse to hear more of this!\"");
	say();
	gflags[0x0032] = true;
	Func097F(0xFFBB, "@There is no spy!@", 0x0000);
	Func097F(0xFFC1, "@I am not convinced...@", 0x0004);
	Func097F(0xFF6A, "@Nor I!@", 0x0008);
	UI_set_schedule_type(0xFFBB, 0x0014);
	UI_set_schedule_type(0xFFC1, 0x0014);
	UI_set_schedule_type(0xFF6A, 0x0014);
	var000E = UI_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0445]);
	goto labelFunc0445_0CBF;
labelFunc0445_0CA7:
	Func097F(0xFE9C, "@Good day!@", 0x0000);
	Func097F(0xFFBB, "@Certainly...@", 0x0002);
labelFunc0445_0CBF:
	goto labelFunc0445_0D4F;
labelFunc0445_0CC2:
	goto labelFunc0445_03DD;
labelFunc0445_0CC5:
	endconv;
labelFunc0445_0CC6:
	if (!(event == 0x0000)) goto labelFunc0445_0E70;
	if (!gflags[0x0038]) goto labelFunc0445_0D20;
	var0017 = UI_die_roll(0x0001, 0x0003);
	if (!(var0017 == 0x0001)) goto labelFunc0445_0CF5;
	UI_item_say(0xFFBB, "@Damn that Avatar!@");
labelFunc0445_0CF5:
	if (!(var0017 == 0x0002)) goto labelFunc0445_0D09;
	UI_item_say(0xFFBB, "@Never trust a Goblin!@");
labelFunc0445_0D09:
	if (!(var0017 == 0x0003)) goto labelFunc0445_0D1D;
	UI_item_say(0xFFBB, "@I ruled this town!@");
labelFunc0445_0D1D:
	goto labelFunc0445_0E70;
labelFunc0445_0D20:
	var0018 = [0xFFC1];
	enum();
labelFunc0445_0D2A:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc0445_0D4F;
	if (!(!UI_npc_nearby(var001B))) goto labelFunc0445_0D4C;
	var0018 = Func0988(var001B, var0018);
labelFunc0445_0D4C:
	goto labelFunc0445_0D2A;
labelFunc0445_0D4F:
	if (!(var0018 == [])) goto labelFunc0445_0D5A;
	abort;
labelFunc0445_0D5A:
	UI_clear_item_say(0xFFBB);
	var0015 = var0018[UI_get_random(UI_get_array_size(var0018))];
	UI_clear_item_say(var0015);
	var001C = UI_get_random(0x0006);
	if (!(var001C == 0x0001)) goto labelFunc0445_0DA3;
	UI_item_say(0xFFBB, "@We need law and order!@");
	Func097F(var0015, "@Attack the Goblins!@", 0x0003);
labelFunc0445_0DA3:
	if (!(var001C == 0x0002)) goto labelFunc0445_0DB7;
	UI_item_say(0xFFBB, "@Calm yourselves.@");
labelFunc0445_0DB7:
	if (!(var001C == 0x0003)) goto labelFunc0445_0DFD;
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc0445_0DE7;
	UI_item_say(var0015, "@The Goblins are no threat.@");
	Func097F(0xFFBB, "@I told thee so.@", 0x0003);
	goto labelFunc0445_0DFD;
labelFunc0445_0DE7:
	UI_item_say(var0015, "@The Goblins are pressing south!@");
	Func097F(0xFFBB, "@Do not be alarmed.@", 0x0003);
labelFunc0445_0DFD:
	if (!(var001C == 0x0004)) goto labelFunc0445_0E1D;
	UI_item_say(0xFFBB, "@I am in charge here!@");
	Func097F(var0015, "@Yes, milord.@", 0x0003);
labelFunc0445_0E1D:
	if (!(var001C == 0x0005)) goto labelFunc0445_0E5C;
	if (!gflags[0x0044]) goto labelFunc0445_0E46;
	UI_item_say(0xFFBB, "@The traitor is dead.@");
	Func097F(var0015, "@Was he working alone?@", 0x0002);
	goto labelFunc0445_0E5C;
labelFunc0445_0E46:
	UI_item_say(0xFFBB, "@There is no traitor.@");
	Func097F(var0015, "@Only a rumor.@", 0x0002);
labelFunc0445_0E5C:
	if (!(var001C == 0x0006)) goto labelFunc0445_0E70;
	UI_item_say(0xFFBB, "@Listen to me!@");
labelFunc0445_0E70:
	return;
}


