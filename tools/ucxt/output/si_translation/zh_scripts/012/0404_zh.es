#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern void Func08FF 0x8FF ();

void Func0404 object#(0x404) ()
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
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0404_0035;
	var0003 = "day";
	goto labelFunc0404_003B;
labelFunc0404_0035:
	var0003 = "evening";
labelFunc0404_003B:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0404_005E;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0404_005E:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFFC) == 0x0009))) goto labelFunc0404_00B0;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc0404_0081;
	abort;
labelFunc0404_0081:
	var0005 = ["@How fascinating!@", "@Pay me no mind.@", "@I am simply watching...@", "@What art thou doing?@", "@I do hope I'm not in the way...@", "@May I see?@"];
	Func097F(0xFFFC, var0005[UI_get_random(UI_get_array_size(var0005))], 0x0000);
labelFunc0404_00B0:
	if (!(event == 0x0001)) goto labelFunc0404_00EE;
	UI_item_say(0xFE9C, (("@Good " + var0003) + "!@"));
	0xFFFC->Func07D1();
	Func097F(0xFFFC, (("@Greetings, " + var0000) + "."), 0x0002);
	UI_set_schedule_type(0xFFFC, 0x0003);
labelFunc0404_00EE:
	if (!(event == 0x0009)) goto labelFunc0404_04DB;
	UI_run_schedule(0xFFFC);
	UI_clear_item_say(0xFFFC);
	UI_show_npc_face0(0xFFFC, 0x0000);
	var0006 = UI_get_item_flag(0xFFFC, 0x001C);
	if (!gflags[0x0004]) goto labelFunc0404_0133;
	message("\"Oh, am I glad to see thee! I have been very scared.\"");
	say();
	UI_add_answer("scared");
	gflags[0x00F4] = true;
	goto labelFunc0404_015E;
labelFunc0404_0133:
	if (!(var0006 == false)) goto labelFunc0404_0153;
	UI_set_item_flag(0xFFFC, 0x001C);
	message("\"Hello, I am Andrio. I never meet outsiders. Couldst thou tell me all about thy travels and adventures?\"");
	say();
	UI_add_answer("adventures");
	goto labelFunc0404_015E;
labelFunc0404_0153:
	message("\"Hast thou done anything exciting lately?\"");
	say();
	UI_add_answer("exciting");
labelFunc0404_015E:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0404_0177;
	UI_add_answer("kidnap");
labelFunc0404_0177:
	UI_add_answer(["bye"]);
labelFunc0404_0181:
	converse attend labelFunc0404_04DA;
	case "scared" attend labelFunc0404_019E:
	UI_remove_answer("scared");
	message("\"The Glowing Man came and killed nearly everyone in the entire town. Fedabiblio tried to stop him, but not even he could withstand the Glowing Man's attack.\"");
	say();
	UI_add_answer("Fedabiblio");
labelFunc0404_019E:
	case "Fedabiblio" attend labelFunc0404_01D3:
	UI_remove_answer("Fedabiblio");
	var0007 = UI_get_schedule_type(0xFFEF);
	if (!(var0007 == 0x000F)) goto labelFunc0404_01CF;
	message("\"Fedabiblio fought a terrific battle, but when the Glowing Man was done with him, he had been turned into a statue. It remains beyond mine abilities to restore him.\"");
	say();
	UI_add_answer("restore");
	goto labelFunc0404_01D3;
labelFunc0404_01CF:
	message("\"Thank goodness, thou wert able to restore him to life. Else I would never finish my Mage's training!\"");
	say();
labelFunc0404_01D3:
	case "restore" attend labelFunc0404_01F3:
	UI_remove_answer("restore");
	message("\"I do not know for certain if anything can bring Fedabiblio back to life. Once I overheard Columna talking about a special wand that Torrissio owned.\"");
	say();
	UI_add_answer(["wand", "Torrissio"]);
labelFunc0404_01F3:
	case "wand" attend labelFunc0404_020A:
	UI_remove_answer("wand");
	message("\"'Twas called the Philanderer's Friend. It enabled the user to command objects to move -- quite useful in thievery, I imagine. Perhaps it is a similar sort of magic that is required to\tenable Fedabiblio to move again.\"");
	say();
	gflags[0x0147] = true;
labelFunc0404_020A:
	case "kidnap" attend labelFunc0404_0280:
	UI_remove_answer("kidnap");
	message("\"I knew that thou didst lead an interesting life, ");
	message(var0001);
	message("! I'm sure I can help thee.\"");
	say();
	message("\"Dost thou suspect townsfolk, or strangers?\"");
	say();
	var0004 = Func0956(["townsfolk", "strangers"]);
	if (!(var0004 == "strangers")) goto labelFunc0404_0248;
	message("\"Perhaps. Yet to me, this doth have the stench of a Moonshadian intrigue.\"");
	say();
	message("\"For the moment, let us assume that I am right and thou art wrong...\"");
	say();
labelFunc0404_0248:
	message("\"Is thine enemy a Mundane, or a Mage? What dost thou believe?\"");
	say();
	var0004 = Func0956(["Mundane", "Mage"]);
	if (!(var0004 == "Mundane")) goto labelFunc0404_0270;
	message("\"No, no, no. How could a mere mortal snatch thy friend in such an arcane fashion?\"");
	say();
	message("\"The criminal must be a Mage!\"");
	say();
	goto labelFunc0404_0274;
labelFunc0404_0270:
	message("\"Exactly so!\"");
	say();
labelFunc0404_0274:
	message("\"This narrows the search! If thou dost want the secrets of the Mages, ask Bucia the Provisioner -- she doth know all the gossip of the town.\"");
	say();
	message("\"Yet I suspect Torrissio. He is a true swine, and it would take a devious person to plan such a crime.\"");
	say();
	gflags[0x0142] = true;
labelFunc0404_0280:
	case "adventures", "exciting" attend labelFunc0404_02A9:
	UI_remove_answer(["adventures", "exciting"]);
	message("\"Yes, yes. I would very much love to hear about thine exciting adventures. While studying magic I have so little time to plan any expeditions of mine own.\"");
	say();
	UI_add_answer(["magic", "expeditions"]);
labelFunc0404_02A9:
	case "magic" attend labelFunc0404_02CD:
	UI_remove_answer("magic");
	message("\"I am working to become a great master. Someday I hope to be as great as Master Filbercio.\"");
	say();
	message("\"Of course, I know that level of expertise will take some time. But I have the discipline! Just ask Freli, he will tell thee I do.\"");
	say();
	UI_add_answer(["Filbercio", "Freli"]);
labelFunc0404_02CD:
	case "Filbercio" attend labelFunc0404_02E7:
	UI_remove_answer("Filbercio");
	message("\"He is the MageLord of all Moonshade. There are rumors that no mage hath lived who was more powerful, not even the Mad Mage!\"");
	say();
	UI_add_answer("Mad Mage");
labelFunc0404_02E7:
	case "Mad Mage" attend labelFunc0404_030F:
	UI_remove_answer("Mad Mage");
	message("\"His name is Erstam. He was one of the founders of Moonshade. However, our instructors\tclaim he slowly became insane as his power grew. Eventually, he left the city to\tbe far away from his fellow spellcasters.\"");
	say();
	message("\"They tell us the same could happen to us should we seek too much power too soon. I wonder if that is what caused the other two mages to flee to the Mountains of Freedom?\"");
	say();
	message("\"Goodness, I hope that doth not happen to me!\"");
	say();
	UI_add_answer(["two mages", "Mountains of Freedom"]);
labelFunc0404_030F:
	case "two mages" attend labelFunc0404_0322:
	UI_remove_answer("two mages");
	message("\"I remember not their names, but they had a reputation for conducting unusual experiments,\tespecially with reagents. Someone once told me that they were always searching for more powerful components to assist in their magics.\"");
	say();
labelFunc0404_0322:
	case "Mountains of Freedom" attend labelFunc0404_0350:
	UI_remove_answer("Mountains of Freedom");
	message("\"They lie to the north of the island. I have heard that the caves there are filled with the\trare mineral known as Stoneheart. I am sure someone as brave as thou art will go there someday and discover whether the legend is true. Please promise to bring the tale whenever thou dost return from such a grand excursion.\"");
	say();
	message("\"Thou wilt tell, wilt thou not?\"");
	say();
	if (!Func0955()) goto labelFunc0404_034C;
	message("\"Excellent, ");
	message(var0000);
	message(". I cannot wait to hear further tales of thy journeys.\"");
	say();
	goto labelFunc0404_0350;
labelFunc0404_034C:
	message("\"I see... I suppose one with thine important duties hast not the time for a simple apprentice of the arcane arts...");
	say();
labelFunc0404_0350:
	case "Freli" attend labelFunc0404_03AC:
	UI_remove_answer("Freli");
	message("\"He is my companion and fellow student. We have been friends for a very long time. And his mastery of magic is almost as great as mine own.\"");
	say();
	if (!Func0942(0xFFED)) goto labelFunc0404_03AC;
	UI_show_npc_face1(0xFFED, 0x0000);
	message("\"Almost!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Well...\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Better!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Thou art mad!\"");
	say();
	UI_push_answers();
	UI_add_answer(["Stop this bickering!", "bye"]);
labelFunc0404_03AC:
	case "Stop this bickering!" attend labelFunc0404_03EC:
	UI_remove_answer("Stop this bickering!");
	UI_pop_answers();
	UI_show_npc_face1(0xFFED, 0x0000);
	message("\"Quite right, ");
	message(var0000);
	message(". I am sorry.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah, yes, ");
	message(var0000);
	message(". I, too, am truly sorry.\"");
	say();
	message("\"How else may I help thee?\"");
	say();
labelFunc0404_03EC:
	case "expeditions" attend labelFunc0404_0406:
	UI_remove_answer("expeditions");
	message("\"Well, I am hesitant to admit how little I have seen of the land. Unlike thee, I am not an experienced traveller. There is so little I know about my surroundings, save how to manipulate them with magic. I have no knowledge of what it is like to face danger daily. Certainly nothing so grand as that which thou dost meet frequently. In comparison, my life is filled with boredom.\"");
	say();
	UI_add_answer("boredom");
labelFunc0404_0406:
	case "boredom" attend labelFunc0404_0426:
	UI_remove_answer("boredom");
	message("\"Yesterday I saw Torrissio leave his house at 9 in the morning -- same as always -- and run into one of the food vendors. I was positive Torrissio was about to transform her into a frog or some such, but instead, he gave no more than a rude chastising.\"");
	say();
	UI_add_answer(["chastising", "Torrissio"]);
labelFunc0404_0426:
	case "chastising" attend labelFunc0404_0439:
	UI_remove_answer("chastising");
	message("\"Torrissio is not very friendly. I have heard he bears ill will for many things, and doth not often forgive transgressions. I hope never to cross him, for I could not endure his enmity for long. Thou, too, shouldst walk with care, for if thou dost ever need his aid, pray no such bad feelings exist between thee and he\tor he will offer nothing.\"");
	say();
labelFunc0404_0439:
	case "Torrissio" attend labelFunc0404_0481:
	UI_remove_answer("Torrissio");
	if (!gflags[0x0004]) goto labelFunc0404_0470;
	var0007 = UI_get_schedule_type(0xFFEF);
	if (!(var0007 == 0x000F)) goto labelFunc0404_0469;
	message("\"I know not if the wand is in Torrissio's possession, but perhap thou wilt be able to\tconvince him to help thee. Be wary of him, however! He hath a reputation for being very tricky!\"");
	say();
	goto labelFunc0404_046D;
labelFunc0404_0469:
	message("\"I am glad thou wert able to successfully deal with him, without him getting the best of thee!\"");
	say();
labelFunc0404_046D:
	goto labelFunc0404_0481;
labelFunc0404_0470:
	message("\"He is an adept mage who commands the powers of life magic. Some day, when I am less afraid of his coarse manner, I plan to ask for his assistance in my Transmute Flesh to Wood\tspell. I am told he hath done something similar with stone before.\"");
	say();
	UI_add_answer(["flesh to wood", "similar"]);
labelFunc0404_0481:
	case "flesh to wood" attend labelFunc0404_049A:
	UI_remove_answer("flesh to wood");
	message("\"Yes, ");
	message(var0000);
	message(". This spell will change a warrior's skin, making it as tough as wood. This way, a fighter will require less armour to deflect blows. My greatest obstacle right now is how to permit the fighter to move once his flesh hath solidified into the wood.\"");
	say();
labelFunc0404_049A:
	case "similar" attend labelFunc0404_04AD:
	UI_remove_answer("similar");
	message("\"Freli is researching a spell like mine, but involving stone instead of wood. The patrons at the\tBlue Boar suggested we contact Torrissio about transforming such things, because his arcane emphasis involves matters of life, including changing flesh to other materials.\"");
	say();
labelFunc0404_04AD:
	case "bye" attend labelFunc0404_04D7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Must be going...@", 0x0000);
	Func097F(0xFFFC, "@I thank thee.@", 0x0002);
	Func08FF();
	goto labelFunc0404_04DA;
labelFunc0404_04D7:
	goto labelFunc0404_0181;
labelFunc0404_04DA:
	endconv;
labelFunc0404_04DB:
	return;
}


