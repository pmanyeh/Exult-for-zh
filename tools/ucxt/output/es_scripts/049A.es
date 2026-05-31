#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func049A object#(0x49A) ()
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
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc049A_03B1;
	UI_show_npc_face(0xFF66, 0x0000);
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFF10);
	var0003 = Func08F7(0xFF24);
	var0004 = Func0909();
	var0005 = Func0908();
	UI_set_alignment(UI_get_npc_object(0xFF66), 0x0002);
	if (!(!gflags[0x02BE])) goto labelFunc049A_0075;
	message("The troll snarls at you, obviously displeased at your presence.");
	say();
	gflags[0x02BE] = true;
	goto labelFunc049A_0079;
labelFunc049A_0075:
	message("\"What you want?\" asks Grod.");
	say();
labelFunc049A_0079:
	converse attend labelFunc049A_03AC;
	case "name" attend labelFunc049A_0175:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049A_0122;
	message("\"I Grod. Why you want know? Is voice unhappy?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc049A_011B;
	message("He seems truly worried.~~\"I will do job better. I promise! I beat harder and more often!\"");
	say();
	if (!var0002) goto labelFunc049A_00EF;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	if (!gflags[0x02C3]) goto labelFunc049A_00C8;
	var0008 = "Anton,";
	goto labelFunc049A_00CE;
labelFunc049A_00C8:
	var0008 = "a prisoner,";
labelFunc049A_00CE:
	message("\"Thank thee ever so much, ");
	message(var0004);
	message(",\" says ");
	message(var0008);
	message(" sarcastically.*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_00EF:
	if (!(var0002 && var0003)) goto labelFunc049A_0118;
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Now, now, Anton, the nice person was simply answering a question.\"*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_0118:
	goto labelFunc049A_011F;
labelFunc049A_011B:
	message("\"Good. I do my job good!\"");
	say();
labelFunc049A_011F:
	goto labelFunc049A_016E;
labelFunc049A_0122:
	message("\"I Grod. Who you?\"");
	say();
	var0005 = Func0908();
	var0009 = "the Avatar";
	var000A = Func090B([var0005, var0009, var0004]);
	if (!(var000A == var0005)) goto labelFunc049A_0152;
	message("\"I not know you.\" He shrugs.");
	say();
labelFunc049A_0152:
	if (!(var000A == var0004)) goto labelFunc049A_0160;
	message("\"Funny name. But, all humans have funny names.\" He shrugs.");
	say();
labelFunc049A_0160:
	if (!(var000A == var0009)) goto labelFunc049A_016E;
	message("\"The Avatar?\" He begins laughing. \"The Avatar not been here for...,\" he begins counting on his fingers. After several attempts, he gives up, saying, \"for many years!~~\"You no Avatar.\"");
	say();
labelFunc049A_016E:
	UI_remove_answer("name");
labelFunc049A_0175:
	case "job" attend labelFunc049A_026C:
	message("\"I torture prisoners,\" he says, thumping his chest proudly.*");
	say();
	if (!var0001) goto labelFunc049A_01A6;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark's eyes light up.~\"Torture? Wow! He quickly looks at you and changes expressions.~~ \"I, er, mean, that is very awful.\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_01A6:
	var000B = UI_wearing_fellowship();
	if (!var000B) goto labelFunc049A_025F;
	message("\"Want to help?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc049A_025A;
	if (!(var0003 && var0002)) goto labelFunc049A_0253;
	message("He points to one of the prisoners.~~\"He not fun like the other. Torture other first.\"*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"What? No, that's all right, ");
	message(var0004);
	message(". Torture me, first.\"*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
	message("\"Yes, ");
	message(var0004);
	message(". Torture him first.\"*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"I thank thee,\" he says to the other.*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF66, 0x0000);
	message("\"Go ahead,\" says Grod.*");
	say();
	var000D = UI_add_party_items(0x0001, 0x026E, 0xFE99, 0xFE99, true);
	if (!var000D) goto labelFunc049A_024B;
	message("He hands you a whip.");
	say();
	goto labelFunc049A_024F;
labelFunc049A_024B:
	message("\"You too wimpy to use whip!\"");
	say();
labelFunc049A_024F:
	abort;
	goto labelFunc049A_0257;
labelFunc049A_0253:
	message("\"No one here to abuse.\" He appears disappointed.");
	say();
labelFunc049A_0257:
	goto labelFunc049A_025F;
labelFunc049A_025A:
	message("\"You make funny joke. Go ahead, torture.\"*");
	say();
	abort;
labelFunc049A_025F:
	UI_add_answer(["torture", "prisoners"]);
labelFunc049A_026C:
	case "Fellowship" attend labelFunc049A_02AA:
	var000E = UI_wearing_fellowship();
	if (!var000E) goto labelFunc049A_0298;
	message("\"Yes,\" he nods. \"I belong, too. I strive for unity. I be worthy for my reward. And I trust my brother.\"~~ He smiles, obviously pleased with himself.\"");
	say();
	UI_add_answer(["strive", "worthy", "trust"]);
	goto labelFunc049A_02A3;
labelFunc049A_0298:
	message("\"Big group, many people. You should join!\"");
	say();
	UI_add_answer("join");
labelFunc049A_02A3:
	UI_remove_answer("Fellowship");
labelFunc049A_02AA:
	case "strive", "worthy", "trust" attend labelFunc049A_02CC:
	message("\"You don't know?\" He frowns.~~ \"You should learn before the voice become angry!\"");
	say();
	UI_remove_answer(["strive", "worthy", "trust"]);
labelFunc049A_02CC:
	case "join" attend labelFunc049A_02DF:
	message("\"Good, join. See Abraham or Danag about join.\"");
	say();
	UI_remove_answer("join");
labelFunc049A_02DF:
	case "prisoners" attend labelFunc049A_0338:
	if (!(gflags[0x02E2] && gflags[0x02E1])) goto labelFunc049A_02F8;
	message("\"None here at the moment...\" he appears truly disconcerted.");
	say();
	goto labelFunc049A_0331;
labelFunc049A_02F8:
	message("\"There one!\" he says, pointing to a man.*");
	say();
	if (!(!(gflags[0x02E1] && (!gflags[0x02E2])))) goto labelFunc049A_0327;
	message("\"There another one!\" he says, indicating the other man.");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"How art thou today, ");
	message(var0004);
	message("?\" he says, smiling.");
	say();
	UI_remove_npc_face(0xFF24);
labelFunc049A_0327:
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_0331:
	UI_remove_answer("prisoners");
labelFunc049A_0338:
	case "torture" attend labelFunc049A_0391:
	message("\"Much fun! Prisoners scream loudly.\"*");
	say();
	if (!var0003) goto labelFunc049A_034E;
	message("\"Except that one. He not scream. He just talk. And talk. I get so bored I get mad. So I torture more. And,\" he throws up his hands, \"he just talk more! I no know what to do.\"*");
	say();
labelFunc049A_034E:
	if (!var0000) goto labelFunc049A_038A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"That is terrible, ");
	message(var0005);
	message(". We must command him to stop!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF66, 0x0000);
	if (!var0003) goto labelFunc049A_0383;
	message("\"I try make him stop. But he talk and talk. You try? Maybe he stop.\"");
	say();
labelFunc049A_0383:
	UI_add_answer("stop torturing");
labelFunc049A_038A:
	UI_remove_answer("torture");
labelFunc049A_0391:
	case "stop torturing" attend labelFunc049A_039E:
	message("\"Oh, no! Grod love job! Grod never stop. You go away now.\"*");
	say();
	abort;
labelFunc049A_039E:
	case "bye" attend labelFunc049A_03A9:
	goto labelFunc049A_03AC;
labelFunc049A_03A9:
	goto labelFunc049A_0079;
labelFunc049A_03AC:
	endconv;
	message("\"Come back and visit Grod. Hear victims squeal!\"*");
	say();
labelFunc049A_03B1:
	if (!(event == 0x0000)) goto labelFunc049A_03BA;
	abort;
labelFunc049A_03BA:
	return;
}


