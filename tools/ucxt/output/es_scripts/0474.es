#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0474 object#(0x474) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0474_0209;
	UI_show_npc_face(0xFF8C, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x014E])) goto labelFunc0474_003A;
	message("Resting an axe on his shoulder, a tall, broad-chested man smiles and nods at you.");
	say();
	gflags[0x014E] = true;
	goto labelFunc0474_0044;
labelFunc0474_003A:
	message("\"'ello, ");
	message(var0000);
	message(". Good day, ay?\"");
	say();
labelFunc0474_0044:
	converse attend labelFunc0474_01FE;
	case "name" attend labelFunc0474_006D:
	message("\"Thou kin call me Ben, ");
	message(var0000);
	message(". I live 'ere in the forest of Yew.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer(["Yew", "forest"]);
labelFunc0474_006D:
	case "job" attend labelFunc0474_0092:
	message("\"I be a logger, ");
	message(var0000);
	message(". 'Tis what I have done all my life. In fact, ");
	message(var0000);
	message(", 'tis what my father did. And 'is father before 'im. And so on. We have been doin' this for more than ten generations.\"");
	say();
	if (!gflags[0x012A]) goto labelFunc0474_0092;
	UI_add_answer("Silverleaf");
labelFunc0474_0092:
	case "Yew" attend labelFunc0474_00A5:
	message("\"It was once a large town, but now, 'tis but a smattering of cottages livin' throughout the woods.\"");
	say();
	UI_remove_answer("Yew");
labelFunc0474_00A5:
	case "forest" attend labelFunc0474_00CB:
	message("\"I am afraid, ");
	message(var0000);
	message(", that I know no one in this area. But,\" he adds proudly, \"I do know 'oo runs the sawmill in Minoc. I also know that monks reside in the abbey, next to the high court.\"");
	say();
	UI_add_answer(["sawmill", "high court"]);
	UI_remove_answer("forest");
labelFunc0474_00CB:
	case "sawmill" attend labelFunc0474_00DE:
	message("\"The sawyer there is named William.\"");
	say();
	UI_remove_answer("sawmill");
labelFunc0474_00DE:
	case "high court" attend labelFunc0474_00F1:
	message("\"'Tis in the building just northeast of the Brotherhood. I know they keep prisoners there.\"");
	say();
	UI_remove_answer("high court");
labelFunc0474_00F1:
	case "Silverleaf" attend labelFunc0474_0158:
	message("\"Why, yes, ");
	message(var0000);
	message(", I cut down Silverleaf trees. They only grow in one area, so I 'afta travel quite a distance when I needs some of their wood. Why dost thou ask, ");
	message(var0000);
	message("?~~\"Oh, I see,\" he grins, \"Thou wants some for thyself, ay?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0474_0122;
	message("\"I am sorry, ");
	message(var0000);
	message(", I do not know 'ow to prepare it. Perhaps thou shouldst try a pub.\"");
	say();
	goto labelFunc0474_014A;
labelFunc0474_0122:
	message("\"Thou'st got another reason for askin'?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0474_0140;
	UI_push_answers();
	UI_add_answer("Emps");
	goto labelFunc0474_014A;
labelFunc0474_0140:
	message("\"All right, ");
	message(var0000);
	message(",\" he shrugs.");
	say();
labelFunc0474_014A:
	UI_add_answer("one area");
	UI_remove_answer("Silverleaf");
labelFunc0474_0158:
	case "one area" attend labelFunc0474_016B:
	message("\"They mainly populate the east part o' the Great Forest, way on the other side.\"");
	say();
	UI_remove_answer("one area");
labelFunc0474_016B:
	case "Emps" attend labelFunc0474_0189:
	message("\"What in the bloody 'ell are emps?\"~~After you quickly explain the Silverleaf Tree situation to him, he exclaims, \"Oh, well, that's 'orrible. I did not realize anyone -- er -- any other creature used the Silverleaf trees. What\tkin I do about it?\"");
	say();
	UI_pop_answers();
	UI_add_answer("sign contract");
	UI_remove_answer("Emps");
labelFunc0474_0189:
	case "sign contract" attend labelFunc0474_01F0:
	message("\"Why, o' course I'll sign. No more Silverleaf trees for me.\"");
	say();
	var0003 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0003, 0xFE99);
	if (!var0003) goto labelFunc0474_01E1;
	message("He takes the contract from you and signs it.");
	say();
	var0004 = Func08F7(0xFFFA);
	if (!var0004) goto labelFunc0474_01CA;
	message("He turns to Trellek. \"Please apologize to thy kindred for me. I never meant to destroy thine 'omes. Friends, ay?\"~~ Trellek smiles and nods.");
	say();
	goto labelFunc0474_01D4;
labelFunc0474_01CA:
	message("\"And please apologize to the Emps for me, ");
	message(var0000);
	message(". I never meant to destroy their 'omes.\"");
	say();
labelFunc0474_01D4:
	gflags[0x012B] = true;
	Func0911(0x01F4);
	goto labelFunc0474_01E5;
labelFunc0474_01E1:
	message("\"Well, I would sign it, but it seems thou hast lost it. If thou dost find it again I will be more than happy to help thee and the Emps.\"");
	say();
labelFunc0474_01E5:
	UI_pop_answers();
	UI_remove_answer("sign contract");
labelFunc0474_01F0:
	case "bye" attend labelFunc0474_01FB:
	goto labelFunc0474_01FE;
labelFunc0474_01FB:
	goto labelFunc0474_0044;
labelFunc0474_01FE:
	endconv;
	message("\"G'bye, ");
	message(var0000);
	message(". Pleasant journeys, ay.\"*");
	say();
labelFunc0474_0209:
	if (!(event == 0x0000)) goto labelFunc0474_0212;
	abort;
labelFunc0474_0212:
	return;
}


