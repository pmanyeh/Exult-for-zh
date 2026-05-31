#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func085F 0x85F (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04A1 object#(0x4A1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04A1_020C;
	UI_show_npc_face(0xFF5F, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "Avatar";
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x01F1]) goto labelFunc04A1_0040;
	var0003 = var0000;
labelFunc04A1_0040:
	if (!gflags[0x01F3]) goto labelFunc04A1_004C;
	var0003 = var0002;
labelFunc04A1_004C:
	if (!gflags[0x01F2]) goto labelFunc04A1_0058;
	var0003 = var0001;
labelFunc04A1_0058:
	if (!(!gflags[0x0203])) goto labelFunc04A1_0066;
	message("You see a lithe-looking fighter smile in your direction.");
	say();
	goto labelFunc04A1_0070;
labelFunc04A1_0066:
	message("Chad smiles. \"Hello, ");
	message(var0003);
	message(". I hope thy days are going well.\"");
	say();
labelFunc04A1_0070:
	converse attend labelFunc04A1_0207;
	case "name" attend labelFunc04A1_0152:
	message("\"Chad, at thy service, ");
	message(var0001);
	message(". And what is thy name?\"");
	say();
	UI_remove_answer("name");
	var0004 = Func090B([var0000, var0002, var0001]);
	if (!(var0004 == var0000)) goto labelFunc04A1_00B6;
	message("\"Greetings, ");
	message(var0000);
	message(". I am at thy service.\"");
	say();
	gflags[0x01F1] = true;
labelFunc04A1_00B6:
	if (!(var0004 == var0001)) goto labelFunc04A1_00CE;
	message("\"Greetings, ");
	message(var0001);
	message(".\" He shrugs.");
	say();
	gflags[0x01F2] = true;
labelFunc04A1_00CE:
	if (!(var0004 == var0002)) goto labelFunc04A1_0147;
	message("\"Of course, of course,\" he smiles. \"I should have realized that thou wert the Avatar. Why, it must have been, oh, at least, two weeks since thy last visit!\" He winks.*");
	say();
	var0005 = Func08F7(0xFFFD);
	if (!var0005) goto labelFunc04A1_0143;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Thou art a fool! Cannot thy feeble eyes see this is the Avatar?\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5F, 0x0000);
	message("\"Yes, yes! I can see that,\" he laughs. \"Then I must be Iolo!\"*");
	say();
	var0006 = Func08F7(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	if (!var0006) goto labelFunc04A1_012E;
	message("\"No, rogue! He is Iolo!\" He nods to Iolo. \"Thou... art a blind idiot!\"*");
	say();
	goto labelFunc04A1_0132;
labelFunc04A1_012E:
	message("\"No, rogue, thou art a blind idiot!\"*");
	say();
labelFunc04A1_0132:
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5F, 0x0000);
labelFunc04A1_0143:
	gflags[0x01F3] = true;
labelFunc04A1_0147:
	gflags[0x0203] = true;
	UI_remove_answer("name");
labelFunc04A1_0152:
	case "job" attend labelFunc04A1_016B:
	message("\"I teach expertise with light weapons here in Moonglow.\"");
	say();
	UI_add_answer(["train", "Moonglow"]);
labelFunc04A1_016B:
	case "Moonglow" attend labelFunc04A1_018B:
	message("\"Dost thou want the location of the city or to know about the townspeople?\"");
	say();
	UI_add_answer(["location", "townspeople"]);
	UI_remove_answer("Moonglow");
labelFunc04A1_018B:
	case "location" attend labelFunc04A1_019E:
	message("\"Moonglow is on an island directly east of the border between Britain and Paws.\"");
	say();
	UI_remove_answer("location");
labelFunc04A1_019E:
	case "townspeople" attend labelFunc04A1_01B1:
	message("\"The person to ask for that information would be Phearcy, the bartender. All I know are other bar patrons: Tolemac and Morz, two farmers.\"");
	say();
	UI_remove_answer("townspeople");
labelFunc04A1_01B1:
	case "train" attend labelFunc04A1_01F9:
	var0007 = UI_part_of_day();
	if (!((var0007 == 0x0006) || (var0007 == 0x0007))) goto labelFunc04A1_01D9;
	message("\"Yes, I train people. But only during the day. Now, 'tis time for drink!\"");
	say();
	goto labelFunc04A1_01F9;
labelFunc04A1_01D9:
	message("\"Wilt thou pay the 45 gold for the training session?\"");
	say();
	if (!Func090A()) goto labelFunc04A1_01F5;
	Func085F([0x0001, 0x0004], 0x002D);
	goto labelFunc04A1_01F9;
labelFunc04A1_01F5:
	message("\"Well, mayhap next time thou wilt be willing.\"");
	say();
labelFunc04A1_01F9:
	case "bye" attend labelFunc04A1_0204:
	goto labelFunc04A1_0207;
labelFunc04A1_0204:
	goto labelFunc04A1_0070;
labelFunc04A1_0207:
	endconv;
	message("\"Remember, always keeps thy wits about and thy blade ready.\"*");
	say();
labelFunc04A1_020C:
	if (!(event == 0x0000)) goto labelFunc04A1_021A;
	Func092E(0xFF5F);
labelFunc04A1_021A:
	return;
}


