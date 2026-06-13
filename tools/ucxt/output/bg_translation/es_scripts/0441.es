#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0441 object#(0x441) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0441_0009;
	abort;
labelFunc0441_0009:
	if (!(event == 0x0001)) goto labelFunc0441_010E;
	UI_show_npc_face(0xFFBF, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00C2])) goto labelFunc0441_003D;
	message("You see an impressive winged gargoyle with a stately demeanor.");
	say();
	gflags[0x00C2] = true;
	goto labelFunc0441_0041;
labelFunc0441_003D:
	message("\"To greet thee again,\" Wislem says.");
	say();
labelFunc0441_0041:
	converse attend labelFunc0441_0109;
	case "name" attend labelFunc0441_005E:
	message("\"To be known as Wislem.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Wislem");
labelFunc0441_005E:
	case "Wislem" attend labelFunc0441_0071:
	message("To be the word for `wise man.'\"");
	say();
	UI_remove_answer("Wislem");
labelFunc0441_0071:
	case "job" attend labelFunc0441_0084:
	message("\"To be advisor to Lord British, and act as representative for my race here in Britain. To be honored to be in long line of advisors to the king.\"");
	say();
	UI_add_answer("advisor");
labelFunc0441_0084:
	case "advisor" attend labelFunc0441_00A4:
	message("\"To make sure the gargoyle race is heard in the castle. To have been a long road to acceptance and integration into Britannian society.\"");
	say();
	UI_add_answer(["integration", "society"]);
	UI_remove_answer("advisor");
labelFunc0441_00A4:
	case "integration" attend labelFunc0441_00B7:
	message("\"To tell you that, not long after your last visit, the gargoyles settled upon Terfin, an island to the southeast. To have moved, little by little, onto the mainland.\"");
	say();
	UI_remove_answer("integration");
labelFunc0441_00B7:
	case "society" attend labelFunc0441_00D1:
	message("\"To be accepted in most places. To feel sad, however, that there are still towns that do not accept us. But our Lord and King, Draxinusom, is still alive and is doing a magnificent job. To know and help all gargoyles who are alive.\"");
	say();
	UI_add_answer("Inamo");
	UI_remove_answer("society");
labelFunc0441_00D1:
	case "Inamo" attend labelFunc0441_00FB:
	message("Wislem listens to your story about the murders in Trinsic. \"To be sad to hear this. To suggest that you visit Lord Draxinusom in Terfin and tell him about Inamo. He will know who Inamo's parent gargoyle is. To recommend you relay this news as soon as possible.~~\"To go soon and tell Draxinusom about Inamo?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0441_00F0;
	message("\"To know you are reliable.\"");
	say();
	goto labelFunc0441_00F4;
labelFunc0441_00F0:
	message("\"To be concerned that Inamo's parent shall never know what happened.\" He appears saddened.");
	say();
labelFunc0441_00F4:
	UI_remove_answer("Inamo");
labelFunc0441_00FB:
	case "bye" attend labelFunc0441_0106:
	goto labelFunc0441_0109;
labelFunc0441_0106:
	goto labelFunc0441_0041;
labelFunc0441_0109:
	endconv;
	message("\"To bid farewell.\"*");
	say();
labelFunc0441_010E:
	return;
}


