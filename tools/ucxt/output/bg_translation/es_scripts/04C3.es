#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04C3 object#(0x4C3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04C3_0385;
	UI_show_npc_face(0xFF3D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFF3B);
	var0003 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x026C])) goto labelFunc04C3_0075;
	message("The very serious man breaks into a half-smile as he greets you.");
	say();
	var0004 = UI_get_distance(0xFF3D, 0xFF3B);
	if (!(var0004 < 0x000A)) goto labelFunc04C3_006E;
	if (!gflags[0x026E]) goto labelFunc04C3_006A;
	message("Horffe is standing at attention just behind him.");
	say();
	goto labelFunc04C3_006E;
labelFunc04C3_006A:
	message("Standing at attention just behind him is a wingled gargoyle.");
	say();
labelFunc04C3_006E:
	gflags[0x026C] = true;
	goto labelFunc04C3_0079;
labelFunc04C3_0075:
	message("\"Good day to thee,\" says Lord John-Paul.");
	say();
labelFunc04C3_0079:
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C3_0092;
	if (!(!gflags[0x0261])) goto labelFunc04C3_0092;
	UI_add_answer("Sir Horffe responsible");
labelFunc04C3_0092:
	if (!(gflags[0x025D] && (!gflags[0x0261]))) goto labelFunc04C3_00AB;
	UI_add_answer("Sir Pendaran responsible");
	UI_remove_answer("Sir Horffe responsible");
labelFunc04C3_00AB:
	converse attend labelFunc04C3_037A;
	case "name" attend labelFunc04C3_010F:
	message("\"I am Lord John-Paul of Serpent's Hold. Thou art ");
	message(var0000);
	message(", the Avatar, correct?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04C3_00F7;
	if (!(gflags[0x025E] && (!gflags[0x0260]))) goto labelFunc04C3_00DE;
	message("\"I remember thee.\"");
	say();
	goto labelFunc04C3_00F4;
labelFunc04C3_00DE:
	message("\"Excellent.\"");
	say();
	if (!(!gflags[0x0263])) goto labelFunc04C3_00ED;
	message("\"I have something that might interest thee.\"");
	say();
labelFunc04C3_00ED:
	UI_add_answer("I am interested");
labelFunc04C3_00F4:
	goto labelFunc04C3_0101;
labelFunc04C3_00F7:
	message("He looks surprised. \"Forgive me, ");
	message(var0001);
	message(", I could have sworn... Ah, well, no matter.\"");
	say();
labelFunc04C3_0101:
	UI_remove_answer("name");
	UI_add_answer("Serpent's Hold");
labelFunc04C3_010F:
	case "job" attend labelFunc04C3_0122:
	message("\"I am charged with overseeing the Hold.\"");
	say();
	UI_add_answer("overseeing");
labelFunc04C3_0122:
	case "overseeing" attend labelFunc04C3_0142:
	message("\"It is not a difficult job. Sir Richter and Sir Horffe insure that things run smoothly as often as possible.\"");
	say();
	UI_remove_answer("overseeing");
	UI_add_answer(["Sir Richter", "Sir Horffe"]);
labelFunc04C3_0142:
	case "Sir Richter" attend labelFunc04C3_015C:
	message("\"He is in charge of the Hold when I am otherwise occupied. He has seemed somewhat changed of late, but I trust him nonetheless.\"");
	say();
	UI_remove_answer("Sir Richter");
	UI_add_answer("changed");
labelFunc04C3_015C:
	case "changed" attend labelFunc04C3_017C:
	message("\"It began when he joined The Fellowship. He became more... what is the word... orderly.\"~~He smiles. \"I suppose there is a regimented structure within The Fellowship that has done him good, no?\"");
	say();
	UI_remove_answer("changed");
	UI_add_answer(["orderly", "Fellowship"]);
labelFunc04C3_017C:
	case "Fellowship" attend labelFunc04C3_0193:
	message("\"I'm afraid I know so little about them. They seem to help many people. However, I have noticed Sir Horffe has become rather apprehensive since Richter joined.\"");
	say();
	var0003 = true;
	UI_remove_answer("Fellowship");
labelFunc04C3_0193:
	case "orderly" attend labelFunc04C3_01A6:
	message("\"It is difficult to explain. He seems more disciplined,\" he gives a short laugh, \"which, of course, is rather fitting for the Hold.\"");
	say();
	UI_remove_answer("orderly");
labelFunc04C3_01A6:
	case "Sir Horffe" attend labelFunc04C3_01E8:
	message("\"He is the captain of the guards. I would have no other for his position. He is the most honorable warrior I have ever met.\"");
	say();
	if (!var0002) goto labelFunc04C3_01D7;
	UI_show_npc_face(0xFF3B, 0x0000);
	message("\"To thank you, Sir!\"");
	say();
	UI_remove_npc_face(0xFF3B);
	UI_show_npc_face(0xFF3D, 0x0000);
labelFunc04C3_01D7:
	if (!var0003) goto labelFunc04C3_01E1;
	message("\"He seems to have taken a dislike for The Fellowship, however. I have noticed he is reluctant to mention this around Sir Richter.\" He shrugs.");
	say();
labelFunc04C3_01E1:
	UI_remove_answer("Sir Horffe");
labelFunc04C3_01E8:
	case "Serpent's Hold" attend labelFunc04C3_0208:
	message("\"It has changed little since thy last visit, ");
	message(var0000);
	message(". Of course, all of the people are new.\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("Serpent's Hold");
labelFunc04C3_0208:
	case "people" attend labelFunc04C3_021B:
	message("\"I am afraid I must attend to other business shortly, and cannot show thee around. But I recommend that thou visitest the Hallowed Dock. Many of the Hold's knights frequent there in the evening.\"");
	say();
	UI_remove_answer("people");
labelFunc04C3_021B:
	case "I am interested" attend labelFunc04C3_026C:
	if (!(!gflags[0x0260])) goto labelFunc04C3_0254;
	message("He smiles gratefully at you and begins pacing.~~ \"Very recently, a terrible crime was committed. It seems the statue of Lord British, the one in the Hold commons, was defaced by an unknown vandal.~~ \"Perhaps,\" he looks at you hopefully, \"thou couldst help track down the villain?\"");
	say();
	gflags[0x0263] = true;
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C3_0245;
	message("\"Very good. The best way to begin is by speaking with Sir Denton, the tavernkeeper at the Hallowed Dock. His ability to solve puzzles and problems is remarkable. When thou hast solved this little mystery, please inform me of thy findings.\"");
	say();
	goto labelFunc04C3_024D;
labelFunc04C3_0245:
	message("\"Of course. I understand. Thou dost have much more important matters to resolve. I will call for an official from Yew to handle this issue.\"");
	say();
	gflags[0x0260] = true;
labelFunc04C3_024D:
	gflags[0x025E] = true;
	goto labelFunc04C3_0265;
labelFunc04C3_0254:
	message("\"Oh, yes, I forgot. I am terribly sorry to have disturbed thee twice with this matter. Please excuse my forgetfulness, ");
	message(var0000);
	message(". The matter is being handled.\"");
	say();
	UI_add_answer("handled?");
labelFunc04C3_0265:
	UI_remove_answer("I am interested");
labelFunc04C3_026C:
	case "handled?" attend labelFunc04C3_0286:
	message("\"I have sent for a judge from the High Court in Yew. I realize thou dost not have the time for such petty matters.\"");
	say();
	UI_add_answer("I have the time");
	UI_remove_answer("handled?");
labelFunc04C3_0286:
	case "I have the time" attend labelFunc04C3_02A0:
	message("\"Yes, yes, thou art very kind, but I am sure there are much more important matters thou must attend to. I thank thee none the less.\"");
	say();
	UI_remove_answer("I have the time");
	UI_add_answer("-I- -want- -to- -do- -it-!");
labelFunc04C3_02A0:
	case "-I- -want- -to- -do- -it-!" attend labelFunc04C3_02B3:
	message("\"Oh, I see. Well, in that case. The best way to begin is by speaking with Sir Denton, the tavernkeeper at the Hallowed Dock. His ability to solve puzzles and problems is remarkable. Please come to me with thy findings after thou hast solved this little mystery.\"");
	say();
	UI_remove_answer("-I- -want- -to- -do- -it-!");
labelFunc04C3_02B3:
	case "Sir Pendaran responsible" attend labelFunc04C3_02CD:
	message("He appears puzzled.~~\"I see. And how didst thou reach this conclusion?\"");
	say();
	UI_add_answer("Lady Jehanne");
	UI_remove_answer("Sir Pendaran responsible");
labelFunc04C3_02CD:
	case "Lady Jehanne" attend labelFunc04C3_0329:
	Func0911(0x0064);
	message("He smiles and extends his hand.~~\"Excellent job, ");
	message(var0000);
	message(". I cannot adequately express my gratitude. I will see that Sir Pendaran is properly reprimanded. I thank thee, ");
	message(var0000);
	message(".\"");
	say();
	if (!gflags[0x0262]) goto labelFunc04C3_031E;
	message("\"Now I must apologize to Sir Horffe!\"");
	say();
	if (!var0002) goto labelFunc04C3_031E;
	message("*");
	say();
	UI_show_npc_face(0xFF3B, 0x0000);
	message("\"To have no need! To be happy the true vandal is discovered.\"*");
	say();
	UI_remove_npc_face(0xFF3B);
	UI_show_npc_face(0xFF3D, 0x0000);
labelFunc04C3_031E:
	gflags[0x0261] = true;
	UI_remove_answer("Lady Jehanne");
labelFunc04C3_0329:
	case "Sir Horffe responsible" attend labelFunc04C3_0343:
	message("He appears surprised.~~\"I see. And how didst thou reach this conclusion?\"");
	say();
	UI_add_answer("gargoyle blood on fragments");
	UI_remove_answer("Sir Horffe responsible");
labelFunc04C3_0343:
	case "gargoyle blood on fragments" attend labelFunc04C3_036C:
	message("\"Very well.\" He is obviously troubled.");
	say();
	if (!var0002) goto labelFunc04C3_035D;
	message("He turns to reprimand the gargoyle at his side.*");
	say();
	abort;
	goto labelFunc04C3_0361;
labelFunc04C3_035D:
	message("\"I will take care of this immediately!\"");
	say();
labelFunc04C3_0361:
	gflags[0x0262] = true;
	UI_remove_answer("gargoyle blood on fragment");
labelFunc04C3_036C:
	case "bye" attend labelFunc04C3_0377:
	goto labelFunc04C3_037A;
labelFunc04C3_0377:
	goto labelFunc04C3_00AB;
labelFunc04C3_037A:
	endconv;
	message("\"Carry on, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04C3_0385:
	if (!(event == 0x0000)) goto labelFunc04C3_038E;
	abort;
labelFunc04C3_038E:
	return;
}


