#game "blackgate"
// externs
extern void Func089C 0x89C ();
extern var Func090A 0x90A ();
extern void Func089B 0x89B (var var0000, var var0001);
extern void Func089A 0x89A (var var0000, var var0001);
extern void Func092F 0x92F (var var0000);

void Func04B5 object#(0x4B5) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04B5_01D9;
	UI_show_npc_face(0xFF4B, 0x0000);
	var0000 = false;
	var0001 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0246])) goto labelFunc04B5_003F;
	message("The gargoyle has a pleasant expression on his face.");
	say();
	gflags[0x0246] = true;
	goto labelFunc04B5_0043;
labelFunc04B5_003F:
	message("\"To be pleased at your return, human,\" says Inforlem.");
	say();
labelFunc04B5_0043:
	converse attend labelFunc04B5_01D4;
	case "name" attend labelFunc04B5_0060:
	message("\"To be known as Inforlem.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Inforlem");
labelFunc04B5_0060:
	case "Inforlem" attend labelFunc04B5_0073:
	message("\"To mean `make strong one.'\"");
	say();
	UI_remove_answer("Inforlem");
labelFunc04B5_0073:
	case "job" attend labelFunc04B5_00A4:
	message("\"To train others in Terfin to be strong and powerful. To sell some weapons, also.\"");
	say();
	UI_add_answer(["train", "others", "Terfin", "buy"]);
	if (!(gflags[0x0244] && (!var0000))) goto labelFunc04B5_00A4;
	UI_add_answer("conflicts");
labelFunc04B5_00A4:
	case "buy" attend labelFunc04B5_00D0:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc04B5_00CC;
	Func089C();
	goto labelFunc04B5_00D0;
labelFunc04B5_00CC:
	message("\"To sell during shop hours. To ask you to come back to me at that time, please.\"");
	say();
labelFunc04B5_00D0:
	case "train" attend labelFunc04B5_010A:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc04B5_0106;
	message("\"To be a better warrior or mage?\"");
	say();
	UI_add_answer(["warrior", "mage"]);
	goto labelFunc04B5_010A;
labelFunc04B5_0106:
	message("\"To train during training hours. To ask you to come back to me at that time, please.\"");
	say();
labelFunc04B5_010A:
	case "warrior" attend labelFunc04B5_0135:
	message("\"To charge 50 gold for each training session. To be all right?\"");
	say();
	if (!Func090A()) goto labelFunc04B5_0131;
	Func089B([0x0000, 0x0001, 0x0004], 0x0032);
	goto labelFunc04B5_0135;
labelFunc04B5_0131:
	message("\"To apologize, but I must charge that amount!\"");
	say();
labelFunc04B5_0135:
	case "mage" attend labelFunc04B5_015D:
	message("\"To charge 50 gold for each training session. To be acceptable?\"");
	say();
	if (!Func090A()) goto labelFunc04B5_0159;
	Func089A([0x0006, 0x0002], 0x0032);
	goto labelFunc04B5_015D;
labelFunc04B5_0159:
	message("\"To apologize, but I must charge that amount!\"");
	say();
labelFunc04B5_015D:
	case "conflicts" attend labelFunc04B5_0178:
	message("\"To know of the conflicts between the altars and the Fellowship, but to have no information. To suggest you see Quan, The Fellowship leader here and ask him.\"");
	say();
	var0000 = true;
	gflags[0x023C] = true;
	UI_remove_answer("conflicts");
labelFunc04B5_0178:
	case "Terfin" attend labelFunc04B5_018B:
	message("\"To see there are troubles here, but to be unaware of the causes and solutions.\"");
	say();
	UI_remove_answer("Terfin");
labelFunc04B5_018B:
	case "others" attend labelFunc04B5_01B3:
	message("\"To tell you Forbrak knows much about Terfin and its residents, and,\" he says, \"about its conflicts.\"");
	say();
	UI_remove_answer("others");
	UI_add_answer("Forbrak");
	if (!(!var0000)) goto labelFunc04B5_01B3;
	UI_add_answer("conflicts");
labelFunc04B5_01B3:
	case "Forbrak" attend labelFunc04B5_01C6:
	message("\"To be the tavernkeeper.\"");
	say();
	UI_remove_answer("Forbrak");
labelFunc04B5_01C6:
	case "bye" attend labelFunc04B5_01D1:
	goto labelFunc04B5_01D4;
labelFunc04B5_01D1:
	goto labelFunc04B5_0043;
labelFunc04B5_01D4:
	endconv;
	message("\"To expect to see you again, human.\"*");
	say();
labelFunc04B5_01D9:
	if (!(event == 0x0000)) goto labelFunc04B5_01E7;
	Func092F(0xFF4B);
labelFunc04B5_01E7:
	return;
}


