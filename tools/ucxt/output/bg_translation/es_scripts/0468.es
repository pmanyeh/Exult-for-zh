#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0856 0x856 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0468 object#(0x468) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0468_01AD;
	UI_show_npc_face(0xFF98, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0142])) goto labelFunc0468_003A;
	message("You see a man leaning on a longbow.");
	say();
	gflags[0x0142] = true;
	goto labelFunc0468_0044;
labelFunc0468_003A:
	message("Bradman greets you. \"Hail, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0468_0044:
	converse attend labelFunc0468_01A2;
	case "name" attend labelFunc0468_005A:
	message("\"I am Bradman.\"");
	say();
	UI_remove_answer("name");
labelFunc0468_005A:
	case "job" attend labelFunc0468_0083:
	message("\"Why, 'tis my job to train the many who visit Yew to become more agile.\"");
	say();
	UI_add_answer(["Yew", "train", "many"]);
	if (!gflags[0x014D]) goto labelFunc0468_0083;
	UI_add_answer("Penni");
labelFunc0468_0083:
	case "many" attend labelFunc0468_00A3:
	message("\"The forest attracts a lot of people who want to spend some time away from the larger towns like Minoc and Britain. So they come to Yew.~~\"And, something about the woods makes most people want to explore.\" He pats his bow.~~\"That is where this comes in. The bow is the tool of survival in the forest. And I,\" he jerks his thumb to his chest, \"teach proficiency with the bow.\"");
	say();
	UI_remove_answer("many");
	UI_add_answer(["explore", "bow"]);
labelFunc0468_00A3:
	case "explore" attend labelFunc0468_00B6:
	message("\"There are many exciting things to see in the forest. Not a day goes by when I do not see something interesting: a new type of bird, a beautiful butterfly, or, best of all -- a deer.\"");
	say();
	UI_remove_answer("explore");
labelFunc0468_00B6:
	case "bow" attend labelFunc0468_00C9:
	message("\"'Tis my weapon of choice. It takes a keen eye and a steady arm to shoot accurately. I think it has more finesse than a sword or a spear, for example.\"");
	say();
	UI_remove_answer("bow");
labelFunc0468_00C9:
	case "Yew" attend labelFunc0468_0146:
	message("\"I love the forest. It is very beautiful. Also,\" he raises his bow, \"I moved out here to be near the two great archers, Iolo and Tseramed.\"*");
	say();
	var0001 = Func08F7(0xFFFF);
	var0002 = Func08F7(0xFFF6);
	if (!var0001) goto labelFunc0468_010C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo blushes. \"I am honored, my friend. I was not aware I had an admirer in this part of the land.\" He bows to Bradman, who returns the gesture.*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF98, 0x0000);
labelFunc0468_010C:
	if (!var0002) goto labelFunc0468_0138;
	UI_show_npc_face(0xFFF6, 0x0000);
	message("\"Thank you for thy kind words, good sir. Perhaps we may practice sometime in the future.\"*");
	say();
	UI_remove_npc_face(0xFFF6);
	UI_show_npc_face(0xFF98, 0x0000);
	message("\"I would be greatly honored, milord!\"");
	say();
	goto labelFunc0468_013F;
labelFunc0468_0138:
	UI_add_answer("Tseramed");
labelFunc0468_013F:
	UI_remove_answer("Yew");
labelFunc0468_0146:
	case "Tseramed" attend labelFunc0468_0159:
	message("\"He is a great archer who resides in the forest. He moved here to get away from the far-too-quickly growing towns.\"");
	say();
	UI_remove_answer("Tseramed");
labelFunc0468_0159:
	case "train" attend labelFunc0468_0181:
	message("\"If thou wantest to train, my charge is 30 gold. Art thou still interested?\"");
	say();
	if (!Func090A()) goto labelFunc0468_0177;
	Func0856(0x0001, 0x001E);
	goto labelFunc0468_0181;
labelFunc0468_0177:
	message("\"I understand, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0468_0181:
	case "Penni" attend labelFunc0468_0194:
	message("\"Thou hast met Penni? I hope thou hast not trained with her,\" he winks. \"She is a valuable friend, but she hunts as well as a weed and she is as clumsy as an ox. I am afraid she knows nothing about fighting.\"");
	say();
	UI_remove_answer("Penni");
labelFunc0468_0194:
	case "bye" attend labelFunc0468_019F:
	goto labelFunc0468_01A2;
labelFunc0468_019F:
	goto labelFunc0468_0044;
labelFunc0468_01A2:
	endconv;
	message("\"May the trees part around thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0468_01AD:
	if (!(event == 0x0000)) goto labelFunc0468_01BB;
	Func092E(0xFF98);
labelFunc0468_01BB:
	return;
}


