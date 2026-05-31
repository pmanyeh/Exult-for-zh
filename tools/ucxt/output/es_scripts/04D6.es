#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04D6 object#(0x4D6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04D6_0151;
	UI_show_npc_face(0xFF2A, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	var0000 = Func08F7(0xFF2B);
	if (!var0000) goto labelFunc04D6_0038;
	UI_add_answer("girl");
labelFunc04D6_0038:
	if (!(!gflags[0x0293])) goto labelFunc04D6_004A;
	message("You see a very large, strong wingless gargoyle.");
	say();
	gflags[0x0293] = true;
	goto labelFunc04D6_004E;
labelFunc04D6_004A:
	message("\"To wish you good day, human,\" says For-Lem.");
	say();
labelFunc04D6_004E:
	converse attend labelFunc04D6_014C;
	case "name" attend labelFunc04D6_006B:
	message("\"To answer to For-Lem.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("For-Lem");
labelFunc04D6_006B:
	case "For-Lem" attend labelFunc04D6_007E:
	message("\"To mean `strong one.'\"");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D6_007E:
	case "job" attend labelFunc04D6_0097:
	message("\"To do odd jobs for others. Also, to record gargoyle legends in written form.\"");
	say();
	UI_add_answer(["others", "legends"]);
labelFunc04D6_0097:
	case "others" attend labelFunc04D6_00B1:
	message("\"To be friends with Lap-Lem, and know he is a good miner. Also to know Ansikart, who reminds us of Singularity in these troubled times.\"");
	say();
	UI_add_answer("troubled times");
	UI_remove_answer("others");
labelFunc04D6_00B1:
	case "troubled times" attend labelFunc04D6_00C4:
	message("\"To be angry with the humans. To be treated poorly and with contempt. To know not why,\" he shrugs.");
	say();
	UI_remove_answer("troubled times");
labelFunc04D6_00C4:
	case "legends" attend labelFunc04D6_00E4:
	message("\"To have many interesting stories about our race. To be writing them down for future generations.\"");
	say();
	UI_remove_answer("legends");
	UI_add_answer(["stories", "generations"]);
labelFunc04D6_00E4:
	case "stories" attend labelFunc04D6_00F7:
	message("\"To have had many exciting myths from before the Avatar's encounters with our race. To share the concept of a hero with the humans, but to have had different heroes from our own history.\"");
	say();
	UI_remove_answer("stories");
labelFunc04D6_00F7:
	case "generations" attend labelFunc04D6_010A:
	message("\"To be afraid for the future of gargoyle youths. To tell you they know little about their heritage. To feel it important to educate them and the offspring who follow them in our ways and history.\"");
	say();
	UI_remove_answer("generations");
labelFunc04D6_010A:
	case "girl" attend labelFunc04D6_013E:
	message("A look of concern quickly appears on his face.~~ \"To talk about the human girl, Catherine? To mean no harm to her.\" He holds out his hands.~~ \"To read gargoyle mythology to her during the day only. To have been asked by her!\" His eyes widen.~~ \"To ask you not to tell her parents, for they will punish her.\" He looks hopeful. \"To tell not, agreed?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D6_0129;
	message("\"To be making the right decision.\" He appears relieved. \"To thank you, human.\" He smiles.");
	say();
	goto labelFunc04D6_012D;
labelFunc04D6_0129:
	message("\"To be making a mistake.\" He appears disappointed. \"To have the girl punished now because of me.\" He shakes his head.~~\"To feel responsible. To be very sad.\"");
	say();
labelFunc04D6_012D:
	Func0911(0x0032);
	gflags[0x027D] = true;
	UI_remove_answer("girl");
labelFunc04D6_013E:
	case "bye" attend labelFunc04D6_0149:
	goto labelFunc04D6_014C;
labelFunc04D6_0149:
	goto labelFunc04D6_004E;
labelFunc04D6_014C:
	endconv;
	message("\"To tell you goodbye, human.\"*");
	say();
labelFunc04D6_0151:
	if (!(event == 0x0000)) goto labelFunc04D6_015F;
	Func092F(0xFF2A);
labelFunc04D6_015F:
	return;
}


