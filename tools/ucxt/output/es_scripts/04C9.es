#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08AC 0x8AC (var var0000, var var0001, var var0002);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04C9 object#(0x4C9) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04C9_01D8;
	UI_show_npc_face(0xFF37, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF37));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0259]) goto labelFunc04C9_0049;
	if (!gflags[0x027A]) goto labelFunc04C9_0049;
	UI_add_answer("examine chips");
labelFunc04C9_0049:
	if (!(!gflags[0x0272])) goto labelFunc04C9_005B;
	message("This attractive woman gives you an approving look.");
	say();
	gflags[0x0272] = true;
	goto labelFunc04C9_0065;
labelFunc04C9_005B:
	message("\"Greetings, ");
	message(var0000);
	message(".\" Leigh smiles at you.");
	say();
labelFunc04C9_0065:
	converse attend labelFunc04C9_01CD;
	case "name" attend labelFunc04C9_007B:
	message("She blushes. \"I am Lady Leigh.\"");
	say();
	UI_remove_answer("name");
labelFunc04C9_007B:
	case "job" attend labelFunc04C9_00A5:
	message("\"I am the Healer of Serpent's Hold.\"");
	say();
	UI_add_answer(["Serpent's Hold", "heal"]);
	gflags[0x027A] = true;
	if (!gflags[0x0259]) goto labelFunc04C9_00A5;
	UI_add_answer("examine chips");
labelFunc04C9_00A5:
	case "heal" attend labelFunc04C9_00D1:
	if (!(var0001 == 0x0007)) goto labelFunc04C9_00C6;
	Func08AC(0x0019, 0x0008, 0x0181);
	goto labelFunc04C9_00CA;
labelFunc04C9_00C6:
	message("\"I am sorry, but I have too many other patients to help thee now. Perhaps when I next open my shop.\"");
	say();
labelFunc04C9_00CA:
	UI_remove_answer("heal");
labelFunc04C9_00D1:
	case "Serpent's Hold" attend labelFunc04C9_00F1:
	message("\"Lord Jean-Paul is in charge of keeping the order here, but Sir Denton would be an even better source of information about Serpent's Hold.\"");
	say();
	UI_add_answer(["John-Paul", "Denton"]);
	UI_remove_answer("Serpent's Hold");
labelFunc04C9_00F1:
	case "John-Paul" attend labelFunc04C9_0120:
	message("\"He is an easy man to find, for Sir Horffe hardly ever leaves his side. Watch for the tall, muscular gargoyle.\"");
	say();
	if (!(!gflags[0x025E])) goto labelFunc04C9_0108;
	message("\"In fact,\" she says, looking off in the distance, \"I believe he may have a desire to speak with thee. Perhaps thou shouldst truly seek him out.\"");
	say();
labelFunc04C9_0108:
	message("\"If thou hast business about the town, and are not able to locate John-Paul, thou mightest wish to speak with Sir Richter.\"");
	say();
	UI_remove_answer("John-Paul");
	UI_add_answer(["Horffe", "Richter"]);
labelFunc04C9_0120:
	case "Horffe" attend labelFunc04C9_0133:
	message("\"He was found at a very young age, apparently abandoned by his father. Two people took and raised him as their own. As thou couldst see simply by meeting him, he is a very noble person and a stout warrior.\"");
	say();
	UI_remove_answer("Horffe");
labelFunc04C9_0133:
	case "Richter" attend labelFunc04C9_0146:
	message("\"He is the armourer. His shop is in the back of the Hold.\"");
	say();
	UI_remove_answer("Richter");
labelFunc04C9_0146:
	case "Denton" attend labelFunc04C9_0159:
	message("\"He is the tavern keeper at the Hallowed Dock, just inside the Hold's doors. He is wonderful at remembering and discussing important facts.\"");
	say();
	UI_remove_answer("Denton");
labelFunc04C9_0159:
	case "examine chips" attend labelFunc04C9_01A6:
	var0002 = Func0931(0xFE9B, 0x0001, 0x032F, 0xFE99, 0x0004);
	if (!var0002) goto labelFunc04C9_019B;
	if (!gflags[0x0268]) goto labelFunc04C9_0189;
	message("She looks at you, puzzled. \"Did I not do that already?\"");
	say();
	goto labelFunc04C9_0198;
labelFunc04C9_0189:
	message("She takes the stone chips from you and examines them. Using several vials of strange and unusual mixtures, she analyzes the blood. Finally, after a few silent minutes, she looks up, grinning.~~\"I have determined the nature of the blood. It is definitely not human. In fact,\" she looks back down at the sample and raises one eyebrow, \"it is gargoyle blood.\"");
	say();
	UI_add_answer("gargoyle blood");
	gflags[0x025F] = true;
labelFunc04C9_0198:
	goto labelFunc04C9_019F;
labelFunc04C9_019B:
	message("\"I am afraid that I must be able to see them to examine them.\"");
	say();
labelFunc04C9_019F:
	UI_remove_answer("examine chips");
labelFunc04C9_01A6:
	case "gargoyle blood" attend labelFunc04C9_01BF:
	message("She appears thoughtful.~~\"What is odd, ");
	message(var0000);
	message(", is that there is only one gargoyle in Serpent's Hold. But I cannot imagine Sir Horffe would have had anything to do with this wanton destruction.\"");
	say();
	UI_remove_answer("gargoyle blood");
labelFunc04C9_01BF:
	case "bye" attend labelFunc04C9_01CA:
	goto labelFunc04C9_01CD;
labelFunc04C9_01CA:
	goto labelFunc04C9_0065;
labelFunc04C9_01CD:
	endconv;
	message("\"Farewell, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04C9_01D8:
	if (!(event == 0x0000)) goto labelFunc04C9_01E6;
	Func092E(0xFF37);
labelFunc04C9_01E6:
	return;
}


