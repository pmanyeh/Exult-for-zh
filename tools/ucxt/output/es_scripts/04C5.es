#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04C5 object#(0x4C5) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04C5_01E2;
	UI_show_npc_face(0xFF3B, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x026E])) goto labelFunc04C5_0078;
	var0000 = UI_get_distance(0xFF3B, 0xFF3D);
	if (!(var0000 < 0x000B)) goto labelFunc04C5_0058;
	if (!gflags[0x026C]) goto labelFunc04C5_004F;
	var0001 = " standing at attention just behind Lord John-Paul.";
	goto labelFunc04C5_0055;
labelFunc04C5_004F:
	var0001 = " standing at attention just behind another knight.";
labelFunc04C5_0055:
	goto labelFunc04C5_005E;
labelFunc04C5_0058:
	var0001 = ".";
labelFunc04C5_005E:
	message("You see a gargoyle with a very stern expression on his face");
	message(var0001);
	message("");
	say();
	var0002 = Func08F7(0xFF3D);
	gflags[0x026E] = true;
	goto labelFunc04C5_007C;
labelFunc04C5_0078:
	message("\"To ask how to be of assistance.\" His eyes narrow.");
	say();
labelFunc04C5_007C:
	if (!(gflags[0x025E] && (!gflags[0x0265]))) goto labelFunc04C5_008E;
	UI_add_answer("statue");
labelFunc04C5_008E:
	if (!(gflags[0x0276] && (!gflags[0x0261]))) goto labelFunc04C5_00A0;
	UI_add_answer("Pendaran did it");
labelFunc04C5_00A0:
	converse attend labelFunc04C5_01DD;
	case "name" attend labelFunc04C5_00B6:
	message("\"To be named Horffe.\"");
	say();
	UI_remove_answer("name");
labelFunc04C5_00B6:
	case "job" attend labelFunc04C5_00CF:
	message("\"To be the Captain of the guard. To serve and protect the people of Serpent's Hold.\"");
	say();
	UI_add_answer(["Captain", "Serpent's Hold"]);
labelFunc04C5_00CF:
	case "Captain" attend labelFunc04C5_00EF:
	message("\"To have been commanded to protect the people who live in Serpent's Hold and to maintain the general order of the knights.\"");
	say();
	UI_remove_answer("Captain");
	UI_add_answer(["people", "knights"]);
labelFunc04C5_00EF:
	case "Serpent's Hold", "people" attend labelFunc04C5_010B:
	message("\"To direct you to Sir Denton, the tavernkeeper at the Hallowed Dock. To know more about the Hold and the people than I.\"");
	say();
	UI_remove_answer(["people", "Serpent's Hold"]);
labelFunc04C5_010B:
	case "Pendaran did it" attend labelFunc04C5_011E:
	message("\"To thank you for this information. To be pleased to know the identity of my assailant.\"");
	say();
	UI_remove_answer("Pendaran did it");
labelFunc04C5_011E:
	case "knights" attend labelFunc04C5_0131:
	message("\"To inform you that many fine warriors take up residence between the Hold's walls. To have little fear of an attack from bandits or vicious animals.\"");
	say();
	UI_remove_answer("knights");
labelFunc04C5_0131:
	case "statue" attend labelFunc04C5_0151:
	message("\"To know nothing about that!\"");
	say();
	if (!gflags[0x025F]) goto labelFunc04C5_014A;
	UI_add_answer("blood on fragments");
labelFunc04C5_014A:
	UI_remove_answer("statue");
labelFunc04C5_0151:
	case "blood on fragments" attend labelFunc04C5_016F:
	message("His rough demeanor softens.~~\"To be my blood.\" He sighs. \"But to be not the one who defaced the statue! To have been wounded while trying to stop the vandal.\"");
	say();
	UI_add_answer("vandal");
	UI_remove_answer("blood on fragments");
	gflags[0x0265] = true;
labelFunc04C5_016F:
	case "vandal" attend labelFunc04C5_018F:
	message("He looks down at his feet.~~\"To know not who he was. To have been very dark. To ask you not to tell Sir Richter.\"");
	say();
	UI_remove_answer("vandal");
	UI_add_answer(["dark", "Sir Richter"]);
labelFunc04C5_018F:
	case "dark" attend labelFunc04C5_01A2:
	message("\"To have been very poor visibility, but to be positive I was scuffling with an armed knight.\"");
	say();
	UI_remove_answer("dark");
labelFunc04C5_01A2:
	case "Sir Richter" attend labelFunc04C5_01BC:
	message("\"To know he will not believe one who openly defies The Fellowship.\"");
	say();
	UI_remove_answer("Sir Richter");
	UI_add_answer("Fellowship");
labelFunc04C5_01BC:
	case "Fellowship" attend labelFunc04C5_01CF:
	message("\"To know little about it. To like little about it.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04C5_01CF:
	case "bye" attend labelFunc04C5_01DA:
	goto labelFunc04C5_01DD;
labelFunc04C5_01DA:
	goto labelFunc04C5_00A0;
labelFunc04C5_01DD:
	endconv;
	message("\"To say goodbye.\"*");
	say();
labelFunc04C5_01E2:
	if (!(event == 0x0000)) goto labelFunc04C5_01F0;
	Func092F(0xFF3B);
labelFunc04C5_01F0:
	return;
}


