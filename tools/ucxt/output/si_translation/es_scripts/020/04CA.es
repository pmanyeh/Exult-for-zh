#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func0924 0x924 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04CA object#(0x4CA) ()
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

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04CA_000F;
	Func0809();
	abort;
labelFunc04CA_000F:
	var0000 = UI_get_item_flag(0xFF36, 0x001C);
	if (!(event == 0x0001)) goto labelFunc04CA_03B4;
	UI_clear_item_say(0xFF36);
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!(!var0000)) goto labelFunc04CA_0050;
	message("\"Halt! Only a true follower of Order may pass this portal. Art thou such a disciple?\"");
	say();
	UI_add_answer(["I follow Order", "I follow Chaos"]);
	goto labelFunc04CA_0085;
labelFunc04CA_0050:
	if (!gflags[0x0251]) goto labelFunc04CA_0071;
	message("\"'Tis good to see thee again, scholar of Order.\"");
	say();
	message("\"I surmise thou didst come across with the others.\"");
	say();
	UI_add_answer(["door locked", "others", "bye"]);
	goto labelFunc04CA_0085;
labelFunc04CA_0071:
	message("\"Oh, 'tis only thee. I hope that thou hast become more learned in the ways of Order, lest thou wilt not be permitted to enter the grand shrine.\"");
	say();
	UI_add_answer(["Give me the test", "grand shrine", "bye"]);
labelFunc04CA_0085:
	converse attend labelFunc04CA_03B3;
	case "I follow Order" attend labelFunc04CA_00B1:
	UI_remove_answer(["I follow Order", "I follow Chaos"]);
	message("\"That may be, but I must test thy knowledge before I permit thee access to the grand shrine.\"");
	say();
	UI_add_answer(["test", "grand shrine", "bye"]);
labelFunc04CA_00B1:
	case "test" attend labelFunc04CA_00D5:
	UI_remove_answer("test");
	message("\"Though I doubt one such as thee would attempt to deceive me, many 'followers' of late do not appear to truly be devoted to Order.\"");
	say();
	message("\"In truth, I believe them to be impostors, though they did answer the question I put to them.\"");
	say();
	UI_add_answer(["impostors", "question"]);
labelFunc04CA_00D5:
	case "question" attend labelFunc04CA_00F6:
	UI_remove_answer("question");
	message("\"To insure that thou art a true student of Order, I will ask thee to complete a line from one of our greatest books and thou must name the book.\"");
	say();
	message("\"Only a devout student of Order would know the answer.\"");
	say();
	UI_add_answer(["Give me the test"]);
labelFunc04CA_00F6:
	case "Give me the test" attend labelFunc04CA_013E:
	UI_remove_answer("Give me the test");
	message("\"Which book tells us, ~'Being sincere and fair in all of thy transactions will provide thee with more power than thou ever hadst.'\"*");
	say();
	message("\"'Thou wert strong, thou wilt be stronger. Thy strength will be exalted in truth.'\"");
	say();
	UI_push_answers();
	UI_add_answer(["Strength Though Ethics", "Guidelines of Life", "Tenets of Discipline"]);
	if (!gflags[0x0252]) goto labelFunc04CA_0134;
	UI_add_answer(["The Structure of Order"]);
	goto labelFunc04CA_013E;
labelFunc04CA_0134:
	UI_add_answer(["The Joy of Order"]);
labelFunc04CA_013E:
	case "Strength Though Ethics" attend labelFunc04CA_0158:
	UI_pop_answers();
	message("\"An excellent book, one that can guide a disciple of Order to new consciousness. I would recommend that thou readest it. Then thou wouldst realize that the answer thou didst give was incorrect.\"");
	say();
	UI_add_answer(["Give me the test"]);
labelFunc04CA_0158:
	case "Tenets of Discipline" attend labelFunc04CA_0172:
	UI_pop_answers();
	message("\"Shushuro was a great man indeed. If only mine hollow head could be so enlightened. But at least I realize my quote was not from that book's pages. Mayhap thou shouldst return to the city and examine thy books further.\"");
	say();
	UI_add_answer(["Give me the test"]);
labelFunc04CA_0172:
	case "Guidelines of Life" attend labelFunc04CA_0190:
	UI_pop_answers();
	message("\"A masterpiece! Indeed, its words of wisdom could educate thee very well. Then thou wouldst be enlightened to learn that the book thou didst name doth not contain any such quote.\"");
	say();
	message("\"Mayhap thou dost need to study more at the Hierophant's library. 'Tis a wondrous place full of the wisdom of Order.\"");
	say();
	UI_add_answer(["Give me the test"]);
labelFunc04CA_0190:
	case "The Joy of Order" attend labelFunc04CA_01AA:
	UI_pop_answers();
	message("\"Curious, I have never heard of that book. Methinks that thou art trying to deceive me. Please, do us both a service and return thou to the library for further study.\"");
	say();
	UI_add_answer(["Give me the test"]);
labelFunc04CA_01AA:
	case "The Structure of Order" attend labelFunc04CA_02D0:
	UI_remove_answer("The Structure of Order");
	UI_pop_answers();
	message("\"Ah, so thou art a true accolyte of Order. I will permit thee to enter the Grand Shrine.\"");
	say();
	UI_remove_npc_face0();
	var0001 = UI_find_nearby(item, 0x0314, 0x001E, 0x0000);
	enum();
labelFunc04CA_01D7:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc04CA_023B;
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x0000)) goto labelFunc04CA_0221;
	var0006 = UI_set_item_quality(var0004, 0x0096);
	gflags[0x0251] = true;
	var0007 = UI_get_object_position(var0004);
	UI_play_sound_effect(0x001E);
	Func0924(var0004, 0x0001);
labelFunc04CA_0221:
	if (!(var0005 == 0x0078)) goto labelFunc04CA_0238;
	var0006 = UI_set_item_quality(var0004, 0x0093);
labelFunc04CA_0238:
	goto labelFunc04CA_01D7;
labelFunc04CA_023B:
	var0001 = UI_find_nearby(item, 0x036C, 0x0014, 0x0000);
	enum();
labelFunc04CA_024D:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc04CA_0268;
	var0006 = UI_set_item_quality(var000A, 0x0093);
	goto labelFunc04CA_024D;
labelFunc04CA_0268:
	var0001 = UI_find_nearby(item, 0x03A7, 0x0014, 0x0000);
	enum();
labelFunc04CA_027A:
	for (var000A in var0001 with var000B to var000C) attend labelFunc04CA_02C3;
	var0006 = UI_set_item_quality(var000A, 0x0093);
	var0001 = UI_find_nearby(item, 0x0314, 0x0014, 0x0000);
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x0093)) goto labelFunc04CA_02C0;
	Func0924(var0004, 0x0000);
labelFunc04CA_02C0:
	goto labelFunc04CA_027A;
labelFunc04CA_02C3:
	Func097F(0xFF36, "@Seek Order.@", 0x0003);
	abort;
labelFunc04CA_02D0:
	case "grand shrine" attend labelFunc04CA_02E3:
	UI_remove_answer("grand shrine");
	message("\"At the end of this corridor lies the grand shrine of Order. That is where the Hierophant performs the ceremony to open the Wall of Lights.\"");
	say();
labelFunc04CA_02E3:
	case "impostors" attend labelFunc04CA_0304:
	UI_remove_answer("impostors");
	message("\"Though I should not speak such, they appeared to be, shall we say, less than intelligent. They seemed to have great difficulty with answering the most modest of my queries.\"");
	say();
	message("\"One of their number even threatened to tear me limb from limb if I failed to open this portal. But it was the large one who answered all the questions correctly. He alone was no dolt.\"");
	say();
	UI_add_answer(["large one"]);
labelFunc04CA_0304:
	case "others" attend labelFunc04CA_0325:
	UI_remove_answer("others");
	message("\"The others that I spoke about earlier. Or did I mention them? I thought that I mentioned that the 'disciples' of late do not appear to be truly devout.\"*");
	say();
	message("\"In truth, I believed them to be impostors, though they passed the test I put upon them.\"");
	say();
	UI_add_answer(["impostors"]);
labelFunc04CA_0325:
	case "large one" attend labelFunc04CA_033C:
	UI_remove_answer("large one");
	message("\"He was an impressive man, in both size and intellect. He appeared to have the combined intellect that the rest of the party lacked.\"*");
	say();
	message("\"He answered my questions easily, though in truth I cannot remember what I asked of him.\"");
	say();
labelFunc04CA_033C:
	case "door locked" attend labelFunc04CA_034F:
	UI_remove_answer("door locked");
	message("\"I am truly sorry, but I can only operate these doors. I know nothing about any other doors in this place.\"");
	say();
labelFunc04CA_034F:
	case "I follow Chaos" attend labelFunc04CA_037B:
	UI_remove_answer("I follow Chaos");
	message("\"Then thou shalt not pass.\"");
	say();
	Func097F(0xFF36, "@Duty.@", 0x0003);
	UI_set_schedule_type(0xFF36, 0x001D);
	goto labelFunc04CA_03B3;
labelFunc04CA_037B:
	case "bye" attend labelFunc04CA_03B0:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@I have heard enough.@", 0x0000);
	Func097F(0xFF36, "@Always follow Order.@", 0x0003);
	UI_set_schedule_type(0xFF36, 0x001D);
	goto labelFunc04CA_03B3;
labelFunc04CA_03B0:
	goto labelFunc04CA_0085;
labelFunc04CA_03B3:
	endconv;
labelFunc04CA_03B4:
	return;
}


