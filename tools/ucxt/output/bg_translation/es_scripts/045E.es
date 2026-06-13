#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08A6 0x8A6 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func045E object#(0x45E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc045E_0263;
	UI_show_npc_face(0xFFA2, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA2));
	UI_add_answer(["name", "job", "bye", "murders"]);
	if (!gflags[0x00F4]) goto labelFunc045E_004D;
	UI_add_answer("gypsies");
labelFunc045E_004D:
	if (!gflags[0x00F5]) goto labelFunc045E_005A;
	UI_add_answer("attractive");
labelFunc045E_005A:
	if (!(!gflags[0x0119])) goto labelFunc045E_006C;
	message("You see a stealthy-looking woman, dressed all in green. There is a wicked grin on her face.");
	say();
	gflags[0x0119] = true;
	goto labelFunc045E_0070;
labelFunc045E_006C:
	message("\"How good to see thee again,\" says Karenna.");
	say();
labelFunc045E_0070:
	converse attend labelFunc045E_025E;
	case "name" attend labelFunc045E_0086:
	message("\"I answer to Karenna, and to nothing else.\"");
	say();
	UI_remove_answer("name");
labelFunc045E_0086:
	case "job" attend labelFunc045E_00C0:
	if (!gflags[0x011F]) goto labelFunc045E_00AB;
	message("\"I am a teacher in Minoc, along with Jakher.\"");
	say();
	UI_add_answer(["teacher", "Minoc", "Jakher"]);
	goto labelFunc045E_00C0;
labelFunc045E_00AB:
	message("\"An odd question to ask at such a time as this, ");
	message(var0000);
	message(". Dost thou know that two people lie dead in that sawmill and they are dead from the hand of perpetrator or perpetrators unknown?\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc045E_00C0:
	case "Minoc" attend labelFunc045E_00E0:
	message("\"Minoc was usually busy, but quiet. Then our town was bothered by this nonsense over Owen's monument, and now these murders.\"");
	say();
	UI_add_answer(["monument", "murders"]);
	UI_remove_answer("Minoc");
labelFunc045E_00E0:
	case "murders" attend labelFunc045E_00F3:
	message("\"Shocking! Such things do not normally happen here. It well proves the value of knowing how to defend oneself.\"");
	say();
	UI_remove_answer("murders");
labelFunc045E_00F3:
	case "Jakher" attend labelFunc045E_0146:
	message("\"He is quite an able trainer in his own right. Not as skilled as myself, obviously. But I do think he is cute, though I bid thee, do not tell him that I spoke of this. It will only encourage him.\"");
	say();
	var0003 = Func08F7(0xFFA1);
	if (!var0003) goto labelFunc045E_013B;
	UI_show_npc_face(0xFFA1, 0x0000);
	message("\"Art thou speaking about me? Mine ears are burning!\"*");
	say();
	UI_show_npc_face(0xFFA2, 0x0000);
	message("\"Nothing thou shouldst be concerned about, Jakher.\" She winks at you.*");
	say();
	UI_remove_npc_face(0xFFA1);
	UI_show_npc_face(0xFFA2, 0x0000);
labelFunc045E_013B:
	gflags[0x00F6] = true;
	UI_remove_answer("Jakher");
labelFunc045E_0146:
	case "teacher" attend labelFunc045E_018D:
	if (!(var0002 == 0x001B)) goto labelFunc045E_0182;
	message("\"I teach that singular skill which enables one to learn all the lessons of life without losing it in the process. Combat!~~\"I would charge thee 20 gold for each training session. Art thou still interested?\"");
	say();
	if (!Func090A()) goto labelFunc045E_0174;
	Func08A6([0x0001, 0x0004], 0x0014);
	goto labelFunc045E_017F;
labelFunc045E_0174:
	message("\"Very well. If thou art fortunate thou wilt not have cause to regret it.\"");
	say();
	UI_remove_answer("teacher");
labelFunc045E_017F:
	goto labelFunc045E_018D;
labelFunc045E_0182:
	message("\"Our establishment is now closed. Please come by during business hours.\"");
	say();
	UI_remove_answer("teacher");
labelFunc045E_018D:
	case "monument" attend labelFunc045E_01A7:
	message("\"I understand it is to be thirty feet high and will display our local shipwright as he holds aloft a sextant. Thou wouldst not believe a thing as benign as this could create such trouble.\"");
	say();
	UI_remove_answer("monument");
	UI_add_answer("trouble");
labelFunc045E_01A7:
	case "trouble" attend labelFunc045E_01C1:
	message("\"It would seem the increase in hostilities amongst the fair citizenry over our shipwright's monument has filled much of the local populace with a burning desire to acquire combative skills. Business has never been better!\"");
	say();
	UI_remove_answer("trouble");
	UI_add_answer("hostilities");
labelFunc045E_01C1:
	case "hostilities" attend labelFunc045E_01D4:
	message("\"Everyone in town is all up in arms about this and that. But surely others would know more of these local politics. I care not.\"");
	say();
	UI_remove_answer("hostilities");
labelFunc045E_01D4:
	case "attractive" attend labelFunc045E_0223:
	message("\"Jakher told thee he doth find me attractive? He denies it, of course, but I have known for years that he doth have feelings for me.\"");
	say();
	var0003 = Func08F7(0xFFA1);
	if (!var0003) goto labelFunc045E_021C;
	UI_show_npc_face(0xFFA1, 0x0000);
	message("\"What? What didst thou say?\"*");
	say();
	UI_show_npc_face(0xFFA2, 0x0000);
	message("\"Nothing, Jakher. Go away.\" She giggles conspiratorally at you.*");
	say();
	UI_remove_npc_face(0xFFA1);
	UI_show_npc_face(0xFFA2, 0x0000);
labelFunc045E_021C:
	UI_remove_answer("attractive");
labelFunc045E_0223:
	case "gypsies" attend labelFunc045E_023D:
	message("\"Frederico, the leader of the Gypsies, and his wife, Tania, were good people. Why, the worst thing I ever knew either of them to do was a simple prank.\"");
	say();
	UI_remove_answer("gypsies");
	UI_add_answer("prank");
labelFunc045E_023D:
	case "prank" attend labelFunc045E_0250:
	message("\"Once Frederico threw a rock through the window of the local Fellowship branch... Oh, well, I thought it was amusing!\"");
	say();
	UI_remove_answer("prank");
labelFunc045E_0250:
	case "bye" attend labelFunc045E_025B:
	goto labelFunc045E_025E;
labelFunc045E_025B:
	goto labelFunc045E_0070;
labelFunc045E_025E:
	endconv;
	message("\"Farewell. May all thy journeys be interesting ones.\"*");
	say();
labelFunc045E_0263:
	if (!(event == 0x0000)) goto labelFunc045E_0271;
	Func092E(0xFFA2);
labelFunc045E_0271:
	return;
}


