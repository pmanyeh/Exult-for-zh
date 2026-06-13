#game "blackgate"
// externs
extern void Func0841 0x841 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04D7 object#(0x4D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D7_021C;
	UI_show_npc_face(0xFF29, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0294])) goto labelFunc04D7_0034;
	message("The winged gargoyle has a very calm air about him. As he first sees you, a smile of recognition appears on his face. \"To present greetings, Avatar.\"");
	say();
	gflags[0x0294] = true;
	goto labelFunc04D7_0038;
labelFunc04D7_0034:
	message("\"To ask how to help you?\"");
	say();
labelFunc04D7_0038:
	converse attend labelFunc04D7_0217;
	case "name" attend labelFunc04D7_0055:
	message("\"To be called Ansikart.\"");
	say();
	UI_add_answer("Ansikart");
	UI_remove_answer("name");
labelFunc04D7_0055:
	case "Ansikart" attend labelFunc04D7_0068:
	message("\"To mean `anti-dry-master.'\"");
	say();
	UI_remove_answer("Ansikart");
labelFunc04D7_0068:
	case "job" attend labelFunc04D7_0081:
	message("\"To serve food and drink to others.\"");
	say();
	UI_add_answer(["buy", "others"]);
labelFunc04D7_0081:
	case "buy" attend labelFunc04D7_00AB:
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF29));
	if (!(var0000 == 0x0007)) goto labelFunc04D7_00A7;
	Func0841();
	goto labelFunc04D7_00AB;
labelFunc04D7_00A7:
	message("\"To apologize, but to ask you to return when I am open.\"");
	say();
labelFunc04D7_00AB:
	case "others" attend labelFunc04D7_00E9:
	message("\"To know all the gargoyles in Vesper. To want to know about specific ones?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D7_00D7;
	message("\"To want information, perhaps, about the provisioner or the sage?");
	say();
	UI_add_answer(["sage", "provisioner"]);
	goto labelFunc04D7_00DB;
labelFunc04D7_00D7:
	message("\"To warn you that many hold resentment for their poor treatment. To be careful, please.\"");
	say();
labelFunc04D7_00DB:
	UI_add_answer("Vesper");
	UI_remove_answer("others");
labelFunc04D7_00E9:
	case "Vesper" attend labelFunc04D7_0109:
	message("\"To be a town full of hate -- to have the humans hate us and to know many hate them, especially Anmanivas and Foranamo. To be not a good thing.\" He appears saddened.");
	say();
	UI_add_answer(["Anmanivas", "Foranamo"]);
	UI_remove_answer("Vesper");
labelFunc04D7_0109:
	case "sage" attend labelFunc04D7_012D:
	message("\"To be named Wis-Sur.\"");
	say();
	if (!gflags[0x0003]) goto labelFunc04D7_0122;
	message("\"To be a great mind, knowledgeable in many things.\"");
	say();
	goto labelFunc04D7_0126;
labelFunc04D7_0122:
	message("\"To have once been a great mind. To be now paranoid and reclusive. To feel pity for Wis-Sur.\"");
	say();
labelFunc04D7_0126:
	UI_remove_answer("sage");
labelFunc04D7_012D:
	case "provisioner" attend labelFunc04D7_0140:
	message("\"To be Aurvidlem. To have become sullen lately, but to know not why.\"");
	say();
	UI_remove_answer("provisioner");
labelFunc04D7_0140:
	case "For-Lem" attend labelFunc04D7_0153:
	message("\"To be a laborer for the town.\"");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D7_0153:
	case "Lap-Lem" attend labelFunc04D7_0173:
	message("\"To mine for the Mining company here. To be the only gargoyle still mining here.\" He nods his head.~~ \"To be very tolerant, like For-Lem.\"");
	say();
	UI_add_answer(["tolerant", "For-Lem"]);
	UI_remove_answer("Lap-Lem");
labelFunc04D7_0173:
	case "tolerant" attend labelFunc04D7_0186:
	message("\"To work now with only humans, who hate and degrade him. To continue working, however, despite this. To be quite tolerant of human intolerance.\" He nods, as if to emphasize his point.");
	say();
	UI_remove_answer("tolerant");
labelFunc04D7_0186:
	case "Anmanivas" attend labelFunc04D7_01CD:
	var0002 = UI_is_dead(UI_get_npc_object(0xFF27));
	if (!var0002) goto labelFunc04D7_01AF;
	var0003 = "have been";
	message("\"To have been killed by you in this very tavern. To remember not?~~\"To have been his fault, but still, to tell you I feel remorse for him and his brother.\"");
	say();
	goto labelFunc04D7_01B5;
labelFunc04D7_01AF:
	var0003 = "be";
labelFunc04D7_01B5:
	message("\"To have worked the mines with Lap-Lem, but to have left just recently.\" He shakes his head.~~\"To hate the humans who work there, and who live on the other side of the oasis. To be too violent. To ");
	message(var0003);
	message(" no longer permitted on the other side.\"");
	say();
	UI_add_answer("Lap-Lem");
	UI_remove_answer("Anmanivas");
labelFunc04D7_01CD:
	case "Foranamo" attend labelFunc04D7_0209:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF26));
	if (!var0004) goto labelFunc04D7_01F2;
	var0005 = "have been";
	goto labelFunc04D7_01F8;
labelFunc04D7_01F2:
	var0005 = "be";
labelFunc04D7_01F8:
	message("\"To be brother to Anmanivas and to have been raised by the same parent. To hate humans as much as Anmanivas, and,\" he sighs, \"to ");
	message(var0005);
	message(" allowed no longer to visit the human side.\"");
	say();
	UI_remove_answer("Foranamo");
labelFunc04D7_0209:
	case "bye" attend labelFunc04D7_0214:
	goto labelFunc04D7_0217;
labelFunc04D7_0214:
	goto labelFunc04D7_0038;
labelFunc04D7_0217:
	endconv;
	message("\"To hope you will bring peace again to our people, Avatar.\"*");
	say();
labelFunc04D7_021C:
	if (!(event == 0x0000)) goto labelFunc04D7_022A;
	Func092F(0xFF29);
labelFunc04D7_022A:
	return;
}


