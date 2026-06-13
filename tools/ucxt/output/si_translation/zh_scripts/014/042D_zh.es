#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern void Func0874 0x874 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0875 0x875 ();

void Func042D object#(0x42D) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = Func0942(0xFFFD);
	var0005 = Func0942(0xFFFF);
	var0006 = Func0942(0xFFFE);
	if (!(event == 0x0000)) goto labelFunc042D_00D4;
	var0007 = UI_get_random(0x0006);
	if (!(var0007 == 0x0001)) goto labelFunc042D_005A;
	UI_item_say(0xFFD3, "@Care to fight?@");
labelFunc042D_005A:
	if (!(var0007 == 0x0002)) goto labelFunc042D_006E;
	UI_item_say(0xFFD3, "@Move aside!@");
labelFunc042D_006E:
	if (!(var0007 == 0x0003)) goto labelFunc042D_0082;
	UI_item_say(0xFFD3, "@I need a drink!@");
labelFunc042D_0082:
	if (!(var0007 == 0x0004)) goto labelFunc042D_0096;
	UI_item_say(0xFFD3, "@Where are the women?@");
labelFunc042D_0096:
	if (!(var0007 == 0x0005)) goto labelFunc042D_00C0;
	if (!Func0942(0xFFDA)) goto labelFunc042D_00B6;
	UI_item_say(0xFFD3, "@Argus, thou art a coward!@");
	goto labelFunc042D_00C0;
labelFunc042D_00B6:
	UI_item_say(0xFFD3, "@I'm bored!@");
labelFunc042D_00C0:
	if (!(var0007 == 0x0006)) goto labelFunc042D_00D4;
	UI_item_say(0xFFD3, "@My sword wants blood!@");
labelFunc042D_00D4:
	if (!((event == 0x0002) && (!UI_get_item_flag(0xFFD3, 0x0004)))) goto labelFunc042D_0148;
	var0008 = UI_set_npc_prop(0xFFD3, 0x0003, 0x000A);
	UI_show_npc_face0(0xFFD3, 0x0000);
	message("\"I was a fool to join with thee, Avatar! Now I am to lose my life in this foolish quest.\"");
	say();
	UI_remove_from_party(0xFFD3);
	gflags[0x01E2] = true;
	Func0874();
	message("\"I am leaving -- do not try to stop me!\"");
	say();
	Func097F(0xFFD3, "@Farewell!@", 0x0000);
	UI_set_attack_mode(0xFFD3, 0x0007);
	UI_set_schedule_type(0xFFD3, 0x0014);
	Func09AC(0xFFD3, 0xFFFF, 0x0000, 0x000C);
	abort;
labelFunc042D_0148:
	if (!(event == 0x0007)) goto labelFunc042D_01A4;
	if (!UI_get_item_flag(0xFFD3, 0x001D)) goto labelFunc042D_01A4;
	UI_clear_item_flag(0xFFD3, 0x001D);
	var0008 = UI_set_npc_prop(0xFFD3, 0x0003, 0x000A);
	UI_set_attack_mode(0xFFD3, 0x0007);
	Func097F(0xFFD3, "@I am dying!@", 0x0000);
	var0008 = UI_delayed_execute_usecode_array(0xFFD3, [(byte)0x23, (byte)0x55, 0x042D], 0x0007);
labelFunc042D_01A4:
	if (!(event == 0x0001)) goto labelFunc042D_01D2;
	UI_item_say(0xFE9C, "@Well met, Knight!@");
	0xFFD3->Func07D1();
	Func097F(0xFFD3, "@Greetings!@", 0x0005);
	UI_set_schedule_type(0xFFD3, 0x0003);
labelFunc042D_01D2:
	if (!(event == 0x0009)) goto labelFunc042D_0762;
	UI_run_schedule(0xFFD3);
	UI_clear_item_say(0xFFD3);
	UI_show_npc_face0(0xFFD3, 0x0000);
	if (!UI_get_item_flag(0xFFD3, 0x0006)) goto labelFunc042D_0213;
	UI_set_schedule_type(0xFFD3, 0x001F);
	UI_add_answer("leave");
	goto labelFunc042D_021A;
labelFunc042D_0213:
	UI_run_schedule(0xFFD3);
labelFunc042D_021A:
	var0009 = UI_get_item_flag(0xFFD3, 0x001C);
	if (!(!UI_get_item_flag(0xFFD3, 0x0006))) goto labelFunc042D_023F;
	UI_run_schedule(0xFFD3);
	goto labelFunc042D_0250;
labelFunc042D_023F:
	UI_set_schedule_type(0xFFD3, 0x001F);
	UI_add_answer("leave");
labelFunc042D_0250:
	if (!((gflags[0x01E2] || gflags[0x01E3]) && (gflags[0x0016] && UI_get_cont_items(0xFFD3, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc042D_0276;
	UI_add_answer("return my belongings");
labelFunc042D_0276:
	if (!(gflags[0x0004] == true)) goto labelFunc042D_033F;
	if (!gflags[0x01E1]) goto labelFunc042D_02A6;
	if (!UI_get_item_flag(0xFFD3, 0x0006)) goto labelFunc042D_0298;
	message("\"I am ready to aid thee. Thou couldst have chosen no better companion than myself!\"");
	say();
	goto labelFunc042D_02A3;
labelFunc042D_0298:
	message("\"Why dost thou trouble me now? Canst thou not see that I am very busy...\"");
	say();
	UI_add_answer("join");
labelFunc042D_02A3:
	goto labelFunc042D_033C;
labelFunc042D_02A6:
	message("\"Well met, Avatar!\"");
	say();
	message("\"Hath vengeance been exacted upon Batlin for his evil deeds?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042D_02D0;
	message("\"Marvelous! The world will be a better place!\"");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc042D_02C9;
	message("\"Thou art truly worthy of thy Knighthood!\"");
	say();
	goto labelFunc042D_02CD;
labelFunc042D_02C9:
	message("\"Thou art worthy of Knighthood!\"");
	say();
labelFunc042D_02CD:
	goto labelFunc042D_02EB;
labelFunc042D_02D0:
	message("\"Then I must continue to seek him.\"");
	say();
	Func097F(0xFFD3, "@Batlin must die!@", 0x0000);
	UI_set_schedule_type(0xFFD3, 0x0014);
	abort;
labelFunc042D_02EB:
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0005)) goto labelFunc042D_0334;
	message("\"I am now without a cause to champion. I see that thou art without thy companions. If thou wishest, I will join thee.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042D_032D;
	message("\"Together, none can stand in our way!\"");
	say();
	UI_add_to_party(0xFFD3);
	gflags[0x0016] = true;
	UI_set_item_flag(0xFFD3, 0x001D);
	UI_add_answer("leave");
	gflags[0x01E1] = true;
	goto labelFunc042D_0331;
labelFunc042D_032D:
	message("\"Very well. Perhaps I shall journey to Monitor and see what hath transpired there.\"");
	say();
labelFunc042D_0331:
	goto labelFunc042D_033C;
labelFunc042D_0334:
	message("\"Thou hast more than enough companions to protect thee!\"");
	say();
	message("\"Look for me in Monitor when thou dost truly need mine excellent skills. Perhaps I will aid thee then.");
	say();
labelFunc042D_033C:
	goto labelFunc042D_0369;
labelFunc042D_033F:
	if (!(var0009 == false)) goto labelFunc042D_0365;
	if (!(gflags[0x003E] == true)) goto labelFunc042D_035A;
	message("\"Ah, I see that thou art a Knight of Monitor!\"");
	say();
	message("\"Although I do not know thee, I am certain that thou knowest me!\"");
	say();
	goto labelFunc042D_0362;
labelFunc042D_035A:
	message("\"I do not recall having met thee before...\"");
	say();
	message("\"But I am certain that thou hast heard of me!\"");
	say();
labelFunc042D_0362:
	goto labelFunc042D_0369;
labelFunc042D_0365:
	message("\"Art thou not honored? We meet again...\"");
	say();
labelFunc042D_0369:
	UI_add_answer(["name", "duties", "bye"]);
	if (!(gflags[0x0004] == true)) goto labelFunc042D_0388;
	UI_add_answer("train");
labelFunc042D_0388:
	converse attend labelFunc042D_0761;
	case "return my belongings" attend labelFunc042D_03BC:
	UI_remove_answer("return my belongings");
	message("\"Art thou jesting? They belong to me now! I gave thee thy chance when I left. If thou still wantest them, thou wilt have to take them from me!!\"");
	say();
	UI_set_alignment(0xFFD3, 0x0003);
	UI_clear_item_say(0xFFD3);
	Func097F(0xFFD3, "@They are mine!@", 0x0000);
	abort;
labelFunc042D_03BC:
	case "join" attend labelFunc042D_0429:
	UI_remove_answer("join");
	if (!gflags[0x01E2]) goto labelFunc042D_03E2;
	message("\"Join thee? Why, thou art incompetent as a battle leader -- I was nearly killed the last time I journeyed with thee!\"");
	say();
	message("\"Thou couldst not give me enough coins to join with thee, ");
	message(var0002);
	message(".\"");
	say();
	goto labelFunc042D_0429;
labelFunc042D_03E2:
	if (!gflags[0x01E3]) goto labelFunc042D_03F3;
	message("\"Join thee now? When I was not good enough to continue with thee before? I think not!\"");
	say();
	message("\"One must have his pride, or be merely a worm...\"");
	say();
	goto labelFunc042D_0429;
labelFunc042D_03F3:
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0005)) goto labelFunc042D_0409;
	message("\"But thou hast all of these other companions! Knight Wilfred is not one to join a crowd...\"");
	say();
	goto labelFunc042D_0429;
labelFunc042D_0409:
	message("\"I can see that thou dost need a strong arm like myself. Since it is thy wish, I shall come with thee.\"");
	say();
	UI_add_to_party(0xFFD3);
	gflags[0x0016] = true;
	UI_set_item_flag(0xFFD3, 0x001D);
	UI_add_answer("leave");
labelFunc042D_0429:
	case "leave" attend labelFunc042D_04DB:
	UI_remove_answer("leave");
	message("\"What! Dost thou think me some strumpet, to be cast off at the first excuse? I do not agree to leave.\"");
	say();
	var000A = Func0956(["insist", "give in"]);
	if (!(var000A == "insist")) goto labelFunc042D_04D7;
	message("\"Damn thee, Avatar!\"");
	say();
	UI_remove_from_party(0xFFD3);
	Func0874();
	gflags[0x01E3] = true;
	UI_clear_item_flag(0xFFD3, 0x001D);
	Func097F(0xFFD3, "@Damn thee!@", 0x0000);
	UI_set_schedule_type(0xFFD3, 0x0014);
	UI_set_new_schedules(0xFFD3, [0x0000, 0x0003, 0x0004, 0x0005, 0x0007], [0x000E, 0x0005, 0x0003, 0x000B, 0x0005], [0x0516, 0x08F7, 0x04F7, 0x08CC, 0x050D, 0x08B6, 0x0516, 0x08A2, 0x04F7, 0x08CC]);
	abort;
	goto labelFunc042D_04DB;
labelFunc042D_04D7:
	message("\"Thou couldst not succeed without me!\"");
	say();
labelFunc042D_04DB:
	case "name" attend labelFunc042D_0507:
	UI_remove_answer("name");
	message("\"What! Thou hast not heard of me?\"");
	say();
	message("\"Where hast thou been all thy life, the frozen north?\"");
	say();
	message("\"I am Wilfred, Knight of the Bear Command -- formerly of Sleeping Bull Inn.\"");
	say();
	UI_set_item_flag(0xFFD3, 0x001C);
	UI_add_answer("Sleeping Bull");
labelFunc042D_0507:
	case "Sleeping Bull" attend labelFunc042D_0535:
	UI_remove_answer("Sleeping Bull");
	message("\"Well, if thou art so rude to ask...\"");
	say();
	var000B = Func0992(0x0001, "@Thou art the rude one!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"Devra and Angus, proprietors of the inn, are my parents. I was born here.\"");
	say();
labelFunc042D_0535:
	case "duties" attend labelFunc042D_0553:
	UI_remove_answer("duties");
	message("\"As thou canst see... I am a Knight of Monitor.\"");
	say();
	message("\"I am currently seeking the murderer of my father.\"");
	say();
	UI_add_answer("murderer");
labelFunc042D_0553:
	case "murderer" attend labelFunc042D_0577:
	UI_remove_answer("murderer");
	message("\"He disappeared some time ago, and is presumed dead. I have been seeking clues since I was notified...\"");
	say();
	message("\"Unlike my brother, Argus, who came running home to take over the inn.\"");
	say();
	UI_add_answer(["clues", "Argus"]);
labelFunc042D_0577:
	case "clues" attend labelFunc042D_0602:
	UI_remove_answer("clues");
	message("\"Why should I tell thee what I have learned? Thou mayest well be the murderer...\"");
	say();
	if (!(var0005 == true)) goto labelFunc042D_05AB;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Retract thy words, or eat them! Thou art speaking about the Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc042D_05AB:
	if (!(var0004 == true)) goto labelFunc042D_05CC;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Take the wind out of this egotistical dog's sails, Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc042D_05CC:
	if (!(var0006 == true)) goto labelFunc042D_05ED;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Thou dost tread on dangerous ground with such accusations...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc042D_05ED:
	message("\"Perhaps I was too hasty, ");
	message(var0000);
	message(". But I would see my father avenged.\"");
	say();
	message("\"If thou art truly searching for my father's killer, then I will tell thee what I have learned.\"");
	say();
	UI_add_answer("learned");
labelFunc042D_0602:
	case "learned" attend labelFunc042D_0620:
	UI_remove_answer("learned");
	message("\"Mother mentioned that a guest -- a mage by the name of Batlin -- also disappeared the same night father did. I know for a fact that Angus hated mages and would never have gone anywhere with one willingly... or alive!\"");
	say();
	message("\"The name Batlin stirred something in my brain, so I asked around Monitor before I left. And I discovered some very interesting things indeed.\"");
	say();
	UI_add_answer("interesting");
labelFunc042D_0620:
	case "interesting" attend labelFunc042D_0648:
	UI_remove_answer("interesting");
	message("\"Batlin came to Monitor some time ago. He was accompanied by several unsavory companions -- one was a huge hooded man, like the one that mother mentioned in her letter.\"");
	say();
	message("\"This odd party came asking about the Serpent ruins. The mage was unusually interested in anything to do with the Serpent people.\"");
	say();
	message("\"And... After Batlin and his henchmen left Monitor, it was discovered that a valuable Serpent relic was stolen from Andral, the sculptor.\"");
	say();
	UI_add_answer(["henchmen", "relic"]);
labelFunc042D_0648:
	case "henchmen" attend labelFunc042D_0667:
	UI_remove_answer("henchmen");
	message("\"There were three with him, so I was told.\"");
	say();
	message("\"One was a pirate, by his looks, with an unearthly white eye.\"");
	say();
	message("\"One was a dark-skinned fighter, very strong but seemingly lacking in wit.\"");
	say();
	message("\"And the other, as I have said, was a tall hooded man -- No one recalls hearing him speak at all. So perhaps he is mute.\"");
	say();
labelFunc042D_0667:
	case "relic" attend labelFunc042D_067E:
	UI_remove_answer("relic");
	message("\"Though Andral is a Pikeman, I still cannot understand the interest he places in pieces of stone...\"");
	say();
	message("\"He was the one that told me a carved blackrock serpent was missing soon after the mage left. Apparently it was a family heirloom or something.\"");
	say();
labelFunc042D_067E:
	case "Argus" attend labelFunc042D_069C:
	UI_remove_answer("Argus");
	message("\"Thou shouldst say cowardly cur, instead!\"");
	say();
	message("\"He was so glad of an excuse to flee his accusers in Monitor that he ran all the way to the inn when mother notified us of father's disappearance!\"");
	say();
	UI_add_answer("accusers");
labelFunc042D_069C:
	case "accusers" attend labelFunc042D_06C8:
	UI_remove_answer("accusers");
	message("\"There are many who say that Argus took bribes to look aside while illegal activities took place.\"");
	say();
	message("\"When Argus heard Flessar repeating these things, Argus called him into a selfish duel and killed him!\"");
	say();
	message("\"Of course, like the pack of dogs that they are, the Wolves declared it an accident. And their investigation of the bribes was more for show than anything.\"");
	say();
	gflags[0x01D9] = true;
	UI_add_answer(["Flessar", "Wolves"]);
labelFunc042D_06C8:
	case "Flessar" attend labelFunc042D_06E6:
	UI_remove_answer("Flessar");
	message("\"Flessar was a Knight of the Leopard Command. He was Templar's friend.\"");
	say();
	message("\"He was also not nearly as skilled as my... brother, being many years Argus' junior.\"");
	say();
	UI_add_answer("Templar");
labelFunc042D_06E6:
	case "Templar" attend labelFunc042D_0701:
	UI_remove_answer("Templar");
	message("\"Templar is a Knight of the Bear Command, and my friend.\"");
	say();
	message("\"Although his friendship with Flessar was unusual, in that they were from different Commands, it was inevitable that young Flessar would look to one of Monitor's best swordsmen for guidance.\"");
	say();
	message("\"Alas, Templar's skill could not help young Flessar on the dueling field.\"");
	say();
labelFunc042D_0701:
	case "Wolves" attend labelFunc042D_0720:
	UI_remove_answer("Wolves");
	message("\"Argus is... or was... a member of the Wolf Command.\"");
	say();
	message("\"It doth not take much more than a glance at their commander to see what a worthless Command they are.\"");
	say();
	message("\"Brendann's womanizing speaks well enough for the character of the rank and file of his troops.\"");
	say();
	message("\"And that includes Argus.\"");
	say();
labelFunc042D_0720:
	case "train" attend labelFunc042D_072B:
	Func0875();
labelFunc042D_072B:
	case "bye" attend labelFunc042D_075E:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	Func097F(0xFFD3, "@Indeed.@", 0x0005);
	Func097F(0xFFFD, "@What a butthead!@", 0x0007);
	goto labelFunc042D_0761;
labelFunc042D_075E:
	goto labelFunc042D_0388;
labelFunc042D_0761:
	endconv;
labelFunc042D_0762:
	return;
}


