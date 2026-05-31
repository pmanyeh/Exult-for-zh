#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();

void Func0454 object#(0x454) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0454_0009;
	abort;
labelFunc0454_0009:
	UI_show_npc_face(0xFFAC, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x010F])) goto labelFunc0454_003B;
	message("You see a young gypsy lad. He is wearing a Fellowship medallion. His eyes look down and his expression is one of extreme sorrow.");
	say();
	gflags[0x010F] = true;
	goto labelFunc0454_0045;
labelFunc0454_003B:
	message("Sasha looks up. \"Good day to thee, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0454_0045:
	converse attend labelFunc0454_012B;
	case "name" attend labelFunc0454_005B:
	message("\"My name is Sasha.\"");
	say();
	UI_remove_answer("name");
labelFunc0454_005B:
	case "job" attend labelFunc0454_0077:
	message("\"I am too young to have a job. I am a gypsy as my parents vere gypsies. I am also a member of The Fellowship.\"");
	say();
	UI_add_answer(["parents", "gypsies", "Fellowship"]);
labelFunc0454_0077:
	case "parents" attend labelFunc0454_0091:
	message("\"My parents - Frederico and Tania - vere murdered. I do not know vhy anyone vould vant to harm them.\" The words choke out of the boy. Suddenly he is overwhelmed by grief and is unable to speak further.");
	say();
	UI_remove_answer("parents");
	UI_add_answer("murders");
labelFunc0454_0091:
	case "murders" attend labelFunc0454_00A4:
	message("\"It happened at the sawmill in Minoc.\"");
	say();
	UI_remove_answer("murders");
labelFunc0454_00A4:
	case "Fellowship" attend labelFunc0454_00BA:
	Func0919();
	message("\"For the past veek I have been avay from home doing vork for The Fellowship.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0454_00BA:
	case "philosophy" attend labelFunc0454_00CC:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc0454_00CC:
	case "gypsies" attend labelFunc0454_00EC:
	message("\"I have returned to be vith Margareta and Jergi to grieve for my parents. They did not approve of my joining The Fellowship but I know that they vere concerned out of their love for me, just as I loved them.\"");
	say();
	UI_remove_answer("gypsies");
	UI_add_answer(["Margareta", "Jergi"]);
labelFunc0454_00EC:
	case "Margareta" attend labelFunc0454_00FF:
	message("\"She is very vise and knows many things but vhen I asked her if I should go back to The Fellowship or stay with them she did not answer me.\"");
	say();
	UI_remove_answer("Margareta");
labelFunc0454_00FF:
	case "Jergi" attend labelFunc0454_011D:
	message("\"He vas my father's brother. He is a good man and vise. Now he is the leader of our people. He vill do what is right for us.\"");
	say();
	if (!(!gflags[0x011B])) goto labelFunc0454_0116;
	message("\"Perhaps thou shouldst talk vith him.\"");
	say();
labelFunc0454_0116:
	UI_remove_answer("Jergi");
labelFunc0454_011D:
	case "bye" attend labelFunc0454_0128:
	goto labelFunc0454_012B;
labelFunc0454_0128:
	goto labelFunc0454_0045;
labelFunc0454_012B:
	endconv;
	message("The lad stoically nods and turns away.*");
	say();
	return;
}


