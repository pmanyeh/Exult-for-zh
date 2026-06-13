#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0424 object#(0x424) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = Func0942(0xFFDD);
	var0003 = UI_get_item_flag(0xFFFD, 0x0006);
	var0004 = UI_get_item_flag(0xFFDC, 0x001C);
	if (!(event == 0x0001)) goto labelFunc0424_0064;
	UI_item_say(0xFE9C, "@A moment, good fellow.@");
	0xFFDC->Func07D1();
	var0005 = ("@Do not hit me...@" & "@I beg thee!@");
	Func094F(0xFFDC, var0005);
	UI_set_schedule_type(0xFFDC, 0x0003);
labelFunc0424_0064:
	if (!(event == 0x0009)) goto labelFunc0424_04B8;
	UI_run_schedule(0xFFDC);
	UI_clear_item_say(0xFFDC);
	UI_show_npc_face0(0xFFDC, 0x0000);
	if (!(!var0004)) goto labelFunc0424_0092;
	message("\"What dost thou want, if thou dost not want to beat me?\"");
	say();
	goto labelFunc0424_0096;
labelFunc0424_0092:
	message("\"Thou hast come to beat me again, I know it!\"");
	say();
labelFunc0424_0096:
	UI_add_answer(["name", "duties"]);
	if (!gflags[0x01BE]) goto labelFunc0424_00B0;
	UI_add_answer("teleportation");
labelFunc0424_00B0:
	UI_add_answer("bye");
labelFunc0424_00B7:
	converse attend labelFunc0424_04B7;
	case "name" attend labelFunc0424_00E1:
	UI_remove_answer("name");
	message("\"I am an orphan. I have no name. My parents were so poor they could not afford to give me one!\"");
	say();
	UI_push_answers();
	UI_add_answer(["orphan", "What art thou called?", "change subject"]);
labelFunc0424_00E1:
	case "change subject" attend labelFunc0424_00F7:
	message("\"Yes, master... er, I mean, ");
	message(var0000);
	message(".\"");
	say();
	UI_pop_answers();
labelFunc0424_00F7:
	case "orphan" attend labelFunc0424_010A:
	UI_remove_answer("orphan");
	message("\"My parents served an evil sorceress who stole me away and had them banished. She raised me as her own dog -- er, I mean son. But she was eventually caught and hanged for all her heinous crimes. I still miss my stepmother, terribly.\"");
	say();
labelFunc0424_010A:
	case "What art thou called?" attend labelFunc0424_014E:
	UI_remove_answer("What art thou called?");
	message("\"As a child, I was called a freak because I collected bugs! But when I went to dispose of my collection, I was called grotesque! I was so upset I could barely finish eating! But now I am called by an honorable gentleman's name, given to me by the Master.\"");
	say();
	var0006 = Func0992(0xFFFD, "@Avatar, talking to this little fellow doth turn my stomach.@", 0x0000, false);
	if (!(var0006 != 0xFE9C)) goto labelFunc0424_013E;
	UI_set_conversation_slot(0x0000);
labelFunc0424_013E:
	UI_add_answer(["freak", "grotesque", "master"]);
labelFunc0424_014E:
	case "freak" attend labelFunc0424_0161:
	UI_remove_answer("freak");
	message("\"Merely because I had a brief career with one sideshow, everyone hath marked me for life! Still, it taught me things that have helped me in my work here. It gave me a strong stomach.\"");
	say();
labelFunc0424_0161:
	case "grotesque" attend labelFunc0424_0174:
	UI_remove_answer("grotesque");
	message("\"They called me that when I was young. But looking back on it, I think they meant it in a complimentary way.\"");
	say();
labelFunc0424_0174:
	case "master" attend labelFunc0424_01B7:
	UI_remove_answer("master");
	message("\"'Tis my master who calls me Vasel. Thou mayest address me by that name as well.\"");
	say();
	UI_set_item_flag(0xFFDC, 0x001C);
	if (!var0002) goto labelFunc0424_01B0;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"They shall be carving that name on thy tombstone if thou dost not return to work!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_01B0:
	UI_add_answer("Who is thy master?");
labelFunc0424_01B7:
	case "Who is thy master?" attend labelFunc0424_01D7:
	UI_remove_answer("Who is thy master?");
	message("\"I serve Erstam. He is the master of this Manor.\"");
	say();
	UI_add_answer(["Why serve him?", "Erstam"]);
labelFunc0424_01D7:
	case "Why serve him?" attend labelFunc0424_01EA:
	UI_remove_answer("Why serve him?");
	message("\"There is something about him that reminds me of my stepmother! Call it crazy if thou wilt!\"");
	say();
labelFunc0424_01EA:
	case "Erstam" attend labelFunc0424_0227:
	UI_remove_answer("Erstam");
	message("\"He is the one who is called the Mad Mage!\"");
	say();
	if (!var0002) goto labelFunc0424_0220;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"Thou dost dare to speak that name in my presence, thou cretin?! I said I do not want to hear that name come from thy lips ever again!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Never again! Never again! I promise! Do not beat me, Master!\"");
	say();
labelFunc0424_0220:
	UI_add_answer("mad mage");
labelFunc0424_0227:
	case "mad mage" attend labelFunc0424_023A:
	UI_remove_answer("mad mage");
	message("\"The Master hath not been himself since he lost his one true love, the enchantress Drogeni. Many years ago she left on what she said was a secret errand for a wealthy patron, and she hath never returned.\"");
	say();
labelFunc0424_023A:
	case "duties" attend labelFunc0424_025D:
	UI_remove_answer("duties");
	message("\"I am the custodian of the Manor. I assist the Master in his experiments. I am also called upon to do the housekeeping.\"");
	say();
	UI_add_answer(["Manor", "experiments", "housekeeping"]);
labelFunc0424_025D:
	case "Manor" attend labelFunc0424_028F:
	UI_remove_answer("Manor");
	message("\"The Master's house is very old, and constantly in need of repair.\"");
	say();
	if (!var0002) goto labelFunc0424_028F;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"That is correct, Vasel! Thou shouldst be returning to thine appointed chores!\"");
	say();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc0424_028F:
	case "experiments" attend labelFunc0424_02AF:
	UI_remove_answer("experiments");
	message("\"The Master's experiments are of an extremely secret nature. They are also quite dangerous.\"");
	say();
	UI_add_answer(["secret", "dangerous"]);
labelFunc0424_02AF:
	case "secret" attend labelFunc0424_02E5:
	UI_remove_answer("secret");
	message("\"Like any mage, the Master's work involves rare artifacts and arcane spells. Thou canst look as much as thou dost want for them. But thou shalt never be able to find them! Ha! Ha!\"");
	say();
	if (!var0002) goto labelFunc0424_02E5;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"Vasel, thou art a fool! I will not tolerate thee giving away my precious secrets! Stop it at once!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, Master... I am sorry... Please do not beat me...!\"");
	say();
labelFunc0424_02E5:
	case "dangerous" attend labelFunc0424_0308:
	UI_remove_answer("dangerous");
	message("\"I am not the first to have worked as the Master's assistant. Nor, I fear, shall I be the last. There have been many of us.\"");
	say();
	UI_add_answer(["first assistant", "last assistant", "other assistants"]);
labelFunc0424_0308:
	case "first assistant" attend labelFunc0424_033A:
	UI_remove_answer("first assistant");
	message("\"I do not know the name of the Master's first assistant. His partial remains are around here somewhere. I do not know where. They are not where I last left them.\"");
	say();
	if (!var0002) goto labelFunc0424_033A;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"Hmph!  A lazy lout he was, as well. We shall not miss him!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_033A:
	case "last assistant" attend labelFunc0424_0389:
	UI_remove_answer("last assistant");
	message("\"The last assistant to the Master -- before myself, that is -- was named Boydon. In fact, thou canst say he is still the head assistant. Heh-heh-heh-heh...\"");
	say();
	if (!var0002) goto labelFunc0424_0389;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"He was another one who was dead from the neck up!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Dost thou not actually mean dead from the neck down?\"");
	say();
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"Yes, very well, Vasel. I shall concede that point.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_0389:
	case "other assistants" attend labelFunc0424_03BB:
	UI_remove_answer("other assistants");
	message("\"Oh, little by little and bit by bit, they pop up now and again. I was never very good with names or faces... or arms or legs, or any of those other parts.\"");
	say();
	if (!var0002) goto labelFunc0424_03BB;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"Enough with this maudlin waste of time! Back to work with thee, Vasel!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_03BB:
	case "housekeeping" attend labelFunc0424_03FA:
	UI_remove_answer("housekeeping");
	message("\"This place becomes quite... unkempt, and requires constant cleaning. 'Tis a dreadful thing to do! I hate the cleanings! I hate them!\"");
	say();
	if (!var0002) goto labelFunc0424_03ED;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("\"Stop thy whining, Vasel! Back to work with thee!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_03ED:
	UI_add_answer(["Why so much cleaning?", "Why hate cleaning?"]);
labelFunc0424_03FA:
	case "Why so much cleaning?" attend labelFunc0424_040D:
	UI_remove_answer("Why so much cleaning?");
	message("\"The experiments are, to say the least, quite messy...\"");
	say();
labelFunc0424_040D:
	case "Why hate cleaning?" attend labelFunc0424_0449:
	UI_remove_answer("Why hate cleaning?");
	message("\"Because I have to... to touch... all those things! I have to pick them up, with all their little squeaky noises... and squirming!\"");
	say();
	var0006 = Func0992(0xFFFE, "@Things?! Squirming things?! What sort of squirming things?! Not snakes!@", 0x0000, false);
	UI_remove_npc_face1();
	if (!(var0006 != 0xFE9C)) goto labelFunc0424_0449;
	UI_set_conversation_slot(0x0000);
	message("\"Snakes would be pleasant compared to what thou canst find here...\"");
	say();
labelFunc0424_0449:
	case "teleportation" attend labelFunc0424_0489:
	UI_remove_answer("teleportation");
	message("\"There is a way to travel quickly from one place to another, and its magic is very powerful. The Jawbone of the Serpent enables one to walk through the great Void. But it belongs to the Master.\"");
	say();
	gflags[0x01C1] = true;
	var0006 = Func0992(0xFFFE, "@Thou dost mean one must actually touch such a hideous thing?! I simply cannot abide snakes!@", 0x0000, false);
	UI_remove_npc_face1();
	if (!(var0006 != 0xFE9C)) goto labelFunc0424_0489;
	UI_set_conversation_slot(0x0000);
	message("\"'Tis not so hideous. Sometimes I amuse myself, taking the Teeth out and putting them back into the Jawbone...\"");
	say();
labelFunc0424_0489:
	case "bye" attend labelFunc0424_04B4:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Good day to thee.@", 0x0000);
	Func097F(0xFFDC, "@Please do not hit me!@", 0x0003);
	goto labelFunc0424_04B7;
labelFunc0424_04B4:
	goto labelFunc0424_00B7;
labelFunc0424_04B7:
	endconv;
labelFunc0424_04B8:
	return;
}


