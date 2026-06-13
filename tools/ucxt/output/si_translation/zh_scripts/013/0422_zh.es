#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func080A 0x80A ();
extern var Func0955 0x955 ();
extern void Func09B4 0x9B4 (var var0000);

void Func0422 object#(0x422) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_get_item_flag(0xFFFE, 0x0006);
	var0003 = UI_get_item_flag(0xFFFD, 0x0006);
	var0004 = UI_get_item_flag(0xFFFF, 0x0006);
	var0005 = UI_get_item_flag(0xFFDE, 0x0006);
	var0006 = UI_get_item_flag(0xFFDE, 0x001C);
	var0007 = UI_get_item_flag(0xFFDE, 0x0004);
	if (!((event == 0x0007) && gflags[0x0083])) goto labelFunc0422_009C;
	var0008 = UI_get_oppressor(0xFFDE);
	var0008 = (0x0000 - var0008);
	if (!(!gflags[0x0007])) goto labelFunc0422_0097;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0008), UI_get_npc_object(0xFFDE));
	return;
labelFunc0422_0097:
	Func092E(item);
	return;
labelFunc0422_009C:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFDE, 0x001D))) goto labelFunc0422_0337;
	UI_clear_item_flag(0xFFDE, 0x001D);
	var0009 = UI_get_object_position(0xFFDE);
	UI_play_sound_effect(0x002A);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x001E, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFFDE);
	UI_kill_npc(0xFFDE);
	var000A = UI_create_new_object(0x031F);
	if (!var000A) goto labelFunc0422_0160;
	UI_set_item_frame(var000A, 0x0012);
	var000B = UI_update_last_created(var0009);
	var000B = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x52, "@My beautiful body!!@"]);
labelFunc0422_0160:
	var000C = 0x0001;
	var000D = [0x0006, 0x000C, 0x0012, 0x0018];
	var000E = [0x0004, 0xFFFB, 0xFFFD, 0x0005, 0x0000, 0xFFFE, 0x0001, 0x0005, 0x0005, 0x0005, 0xFFFB, 0x0004, 0x0003, 0x0002, 0x0001, 0x0005, 0x0001, 0x0000, 0x0000, 0x0002, 0x0002, 0x0002, 0x0001, 0xFFFD, 0x0000, 0x0003, 0x0002, 0x0003, 0xFFFF, 0x0004, 0x0004, 0x0004];
	var000F = [0x0001, 0xFFFE, 0x0001, 0xFFFB, 0x0001, 0xFFFC, 0x0004, 0xFFFC, 0xFFFD, 0x0002, 0x0001, 0xFFFB, 0x0005, 0x0005, 0x0005, 0x0000, 0x0005, 0x0001, 0x0002, 0x0000, 0x0002, 0x0001, 0x0002, 0x0000, 0x0003, 0x0002, 0xFFFD, 0x0001, 0x0003, 0x0004, 0x0003, 0x0002];
labelFunc0422_0244:
	if (!(var000C < 0x0005)) goto labelFunc0422_0337;
	var0010 = 0x0000;
	var000A = UI_create_new_object(0x031A);
	if (!var000A) goto labelFunc0422_0334;
	UI_set_item_frame(var000A, var000D[var000C]);
labelFunc0422_0271:
	if (!(var0010 < 0x001A)) goto labelFunc0422_0334;
	var0011 = [(var0009[0x0001] + var000E[var0010]), (var0009[0x0002] + var000F[var0010]), var0009[0x0003]];
	if (!UI_is_not_blocked(var0011, 0x031F, 0x0000)) goto labelFunc0422_0327;
	var000C = (var000C + 0x0001);
	var0010 = 0x001B;
	var000B = UI_update_last_created(var0011);
	var000A = UI_create_new_object(0x0390);
	if (!var000A) goto labelFunc0422_0324;
	UI_set_item_frame(var000A, UI_die_roll(0x0000, 0x0003));
	var0011 = [((var0009[0x0001] + var000E[var0010]) + 0x0001), ((var0009[0x0002] + var000F[var0010]) + 0x0001), var0009[0x0003]];
	var000B = UI_update_last_created(var0011);
labelFunc0422_0324:
	goto labelFunc0422_0331;
labelFunc0422_0327:
	var0010 = (var0010 + 0x0001);
labelFunc0422_0331:
	goto labelFunc0422_0271;
labelFunc0422_0334:
	goto labelFunc0422_0244;
labelFunc0422_0337:
	if (!(event == 0x0001)) goto labelFunc0422_0365;
	UI_item_say(0xFE9C, "@Ahem...@");
	0xFFDE->Func07D1();
	Func097F(0xFFDE, "@Thou didst speak?@", 0x0002);
	UI_set_schedule_type(0xFFDE, 0x0003);
labelFunc0422_0365:
	if (!(event == 0x0002)) goto labelFunc0422_0371;
	event = 0x0009;
labelFunc0422_0371:
	if (!(event == 0x0009)) goto labelFunc0422_07F2;
	if (!(item == UI_get_npc_object(0xFFDE))) goto labelFunc0422_0430;
	if (!UI_get_item_flag(0xFFDE, 0x0006)) goto labelFunc0422_03A6;
	UI_set_schedule_type(0xFFDE, 0x001F);
	UI_add_answer("leave");
	goto labelFunc0422_03BA;
labelFunc0422_03A6:
	UI_run_schedule(0xFFDE);
	if (!gflags[0x01BA]) goto labelFunc0422_03BA;
	UI_add_answer("join");
labelFunc0422_03BA:
	UI_show_npc_face0(0xFFDE, 0x0000);
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0422_0411;
	message("\"Master, I am grateful that thou dost still live! I have grown fond of thee, almost as a son looks upon a parent...\"");
	say();
	if (!(!gflags[0x0135])) goto labelFunc0422_03E8;
	message("\"It might please thee to know that there is good news!\"");
	say();
	UI_add_answer("good news");
labelFunc0422_03E8:
	UI_set_npc_id(0xFFDE, 0x0000);
	UI_add_to_party(0xFFDE);
	gflags[0x0013] = true;
	UI_remove_answer("join");
	UI_add_answer(["leave"]);
	goto labelFunc0422_042D;
labelFunc0422_0411:
	if (!(!var0006)) goto labelFunc0422_0429;
	message("\"I have a body! I have a body!\"");
	say();
	UI_set_item_flag(0xFFDE, 0x001C);
	goto labelFunc0422_042D;
labelFunc0422_0429:
	message("\"Hello, there!\"");
	say();
labelFunc0422_042D:
	goto labelFunc0422_046E;
labelFunc0422_0430:
	UI_show_npc_face0(0xFED3, 0x0000);
	message("\"Now I see thee. Greetings! I am Boydon, the Living Head.\"");
	say();
	if (!(!gflags[0x01C0])) goto labelFunc0422_046E;
	var0012 = Func0992(0xFFFD, "The severed head speaks!", 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_046A;
	UI_set_conversation_slot(0x0000);
	message("\"Yes, I do. Strange, is it not?\"");
	say();
labelFunc0422_046A:
	gflags[0x01C0] = true;
labelFunc0422_046E:
	if (!(gflags[0x0013] && ((!UI_get_item_flag(0xFFDE, 0x0006)) && UI_get_cont_items(0xFFDE, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc0422_0498;
	UI_add_answer("return my belongings");
labelFunc0422_0498:
	UI_add_answer(["name", "duties", "bye"]);
labelFunc0422_04A8:
	converse attend labelFunc0422_07F1;
	case "return my belongings" attend labelFunc0422_04BD:
	UI_remove_answer("return my belongings");
	Func080A();
labelFunc0422_04BD:
	case "good news" attend labelFunc0422_04D8:
	UI_remove_answer("good news");
	message("\"Master, I have taken the time to speak with the Mages of this place. I do believe that the one known as Gustacio is of\ta mind to aid thee.\"");
	say();
	message("\"He said that anyone who can survive Freedom is worthy of his time!\"");
	say();
	gflags[0x0135] = true;
labelFunc0422_04D8:
	case "name" attend labelFunc0422_04EB:
	UI_remove_answer("name");
	message("\"My name is Boydon.\"");
	say();
labelFunc0422_04EB:
	case "duties" attend labelFunc0422_0571:
	UI_remove_answer("duties");
	if (!(!gflags[0x01BB])) goto labelFunc0422_0515;
	message("\"I am hardly capable of performing my duties now, I'm sorry to say. I was the assistant to Erstam, the one they call the Mad Mage -- dost thou know him? Wonderful fellow. Well, one night he woke me to help him with one of his experiments.\"");
	say();
	UI_add_answer(["Erstam", "experiments"]);
	goto labelFunc0422_0571;
labelFunc0422_0515:
	if (!var0007) goto labelFunc0422_0522;
	message("\"It seems I am no longer able to perform any duties save being an observer of thine adventures. But thank goodness Erstam chose me as the subject of his experiment! The man hath now saved my life twice over! As his one-time assistant, however, I can assure thee my body hath been destroyed beyond repair, and mine head will reject any new body that it might be attatched to. Oh, well! I am sorry that I can be of no further use to thee. If I squinch up my face I am fairly certain that I shall hardly take up any room in thy backpack.\"");
	say();
	goto labelFunc0422_0571;
labelFunc0422_0522:
	message("\"Actually, I do believe my job now is to be observed by a careful eye in order to judge the success of Erstam's experiment. Although now I am most certainly capable of many jobs.\"");
	say();
	if (!(!var0005)) goto labelFunc0422_055A;
	var0012 = Func0992(0xFFFF, ((("@My first job would be to " + "take a long hot bath. I swear some of those ") + "body parts must have been lying about ") + "Erstam's Manor for some time!@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_055A;
	UI_set_conversation_slot(0x0000);
labelFunc0422_055A:
	if (!var0005) goto labelFunc0422_0564;
	message("\"I do hope I shall be of some assistance to thee as I travel with thee during thine adventures! I am having quite a bit of fun, actually.\"");
	say();
labelFunc0422_0564:
	UI_add_answer(["observed", "many jobs"]);
labelFunc0422_0571:
	case "Erstam" attend labelFunc0422_0584:
	message("\"I found working for Erstam extremely interesting and most educational. Why, for example, my knowledge of anatomy hath improved so much. He is not exactly a friendly fellow, the Master, but there is never a dull moment.\"");
	say();
	UI_remove_answer("Erstam");
labelFunc0422_0584:
	case "experiments" attend labelFunc0422_05A7:
	message("\"Of course Erstam, having mastered the art of teleportation, hath turned his sights to the creation of life. On this particular night that I am remembering we went down to his lab. He pulled an abundance of levers and things... my memory begins to fade a bit after that. The next thing I remember is awakening in this condition.\"");
	say();
	UI_remove_answer("experiments");
	UI_add_answer(["teleportation", "creation of life", "condition"]);
labelFunc0422_05A7:
	case "teleportation" attend labelFunc0422_05BA:
	message("\"Oh, I am afraid I cannot tell thee anything about that. After all, I was merely the Mad Mage's assistant.\"");
	say();
	UI_remove_answer("teleportation");
labelFunc0422_05BA:
	case "creation of life" attend labelFunc0422_05CD:
	message("\"Is that not amazing? It doth go far beyond my comprehension of life and death. The mind fairly boggles at the ramifications of it.\"");
	say();
	UI_remove_answer("creation of life");
labelFunc0422_05CD:
	case "condition" attend labelFunc0422_05E0:
	message("\"It is not so bad. I am never hungry because I do not have a stomach. I do not need to breathe because I do not have any lungs. I do sleep occasionally. Sometimes my nose itches. Nothing bothers me. Most people tend to find a talking severed head a bit unsettling. Right now I am enjoying talking to someone.\"");
	say();
	UI_remove_answer("condition");
labelFunc0422_05E0:
	case "observed" attend labelFunc0422_062A:
	UI_remove_answer("observed");
	message("\"Certainly someone should keep an eye on me. To make sure my new body will not start to fall apart. Not to worry, I feel strange, but very well indeed.\"");
	say();
	if (!(!var0005)) goto labelFunc0422_0623;
	var0012 = Func0992(0xFFFD, (("@Thou dost not need to observe. " + "Not when the smell reaches one ") + "first! Phew!@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_0623;
	UI_set_conversation_slot(0x0000);
labelFunc0422_0623:
	UI_add_answer("strange feelings");
labelFunc0422_062A:
	case "strange feelings" attend labelFunc0422_063D:
	UI_remove_answer("strange feelings");
	message("\"Well, for one thing I have decided something about my new self. I have been thinking about it for a while and I have come to the realization that I simply do not like fire. I simply do not. I cannot exactly say why. I simply do not.\"");
	say();
labelFunc0422_063D:
	case "many jobs" attend labelFunc0422_06DE:
	message("\"I feel I am capable of doing most anything in my present condition.\"");
	say();
	if (!(!gflags[0x01B9])) goto labelFunc0422_06D7;
	message("\"In fact, I was wondering if thou couldst use someone like me to accompany thee in thy travels and adventures.\"");
	say();
	message("\"Wouldst thou like me to join thee?\"");
	say();
	var0013 = Func0955();
	if (!var0013) goto labelFunc0422_06A0;
	message("\"I am delighted to hear thee say that. But first thou shouldst ask Erstam if I may go. After all, I am his creation. He is the one who made me what I am today.\"");
	say();
	gflags[0x01B9] = true;
	var0012 = Func0992(0xFFFE, (((("@Art thou certain about this, " + var0001) + "? Boydon seems game enough, but he is also ") + "extremely gamey. I am surprised thou hast ") + "not noticed this for thyself.@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_069D;
	UI_set_conversation_slot(0x0000);
labelFunc0422_069D:
	goto labelFunc0422_06D7;
labelFunc0422_06A0:
	message("\"If thou wouldst ever change thy mind, or find thyself in need of a companion, I would be most honored if thou wouldst consider me.\"");
	say();
	var0012 = Func0992(0xFFFD, 0x0000, 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_06D7;
	UI_show_npc_face1(var0012, 0x0000);
	message("\"That was a near escape. I could not believe thou wouldst consider having that fellow join us. Just the smell of him is near enough to kill a dragon! He is otherwise a most pleasant fellow, I will concede.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0422_06D7:
	UI_remove_answer("many jobs");
labelFunc0422_06DE:
	case "join" attend labelFunc0422_074C:
	UI_remove_answer("join");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0422_073E;
	UI_add_answer("leave");
	message("\"That is wonderful news! Lead on!\"");
	say();
	var0012 = Func0992(0xFFFE, (("@Far be it from me to question thy judgment, Avatar. " + "But are thy senses so dulled that thou dost not notice ") + "the potent aroma emanating from this fellow?@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_0730;
	UI_set_conversation_slot(0x0000);
labelFunc0422_0730:
	UI_add_to_party(0xFFDE);
	gflags[0x0013] = true;
	goto labelFunc0422_074C;
labelFunc0422_073E:
	message("\"But there are so many in thy travelling party! I am not accustomed to crowds.\"");
	say();
	message("\"I think that I must remain where I am. Apologies, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0422_074C:
	case "leave" attend labelFunc0422_07A3:
	UI_remove_answer("leave");
	message("\"If that is what thou dost truly want, I will leave. But if thou dost ever change thy mind, do ask me to join again and I will.\"");
	say();
	UI_remove_from_party(0xFFDE);
	Func080A();
	Func09B4(0xFFDE);
	var0012 = Func0992(0xFFFF, ((("@I am also sad to see him go." * "But in truth, ") + "mine eyes were watering more while he was with us than ") + "when he left!@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_079C;
	UI_set_conversation_slot(0x0000);
labelFunc0422_079C:
	UI_add_answer("join");
labelFunc0422_07A3:
	case "bye" attend labelFunc0422_07EE:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Good luck!@", 0x0000);
	if (!(item == UI_get_npc_object(0xFFDE))) goto labelFunc0422_07D6;
	Func097F(0xFFDE, "@And to thee!@", 0x0002);
	goto labelFunc0422_07EB;
labelFunc0422_07D6:
	var000B = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@And to thee!@"], 0x0005);
labelFunc0422_07EB:
	goto labelFunc0422_07F1;
labelFunc0422_07EE:
	goto labelFunc0422_04A8;
labelFunc0422_07F1:
	endconv;
labelFunc0422_07F2:
	return;
}


