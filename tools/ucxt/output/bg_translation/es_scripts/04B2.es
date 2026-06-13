#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B2 object#(0x4B2) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B2_02C5;
	UI_show_npc_face(0xFF4E, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF4E));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0212]) goto labelFunc04B2_004A;
	if (!(!gflags[0x0218])) goto labelFunc04B2_004A;
	UI_add_answer("thief");
labelFunc04B2_004A:
	if (!gflags[0x021C]) goto labelFunc04B2_005E;
	if (!(!gflags[0x0218])) goto labelFunc04B2_005E;
	UI_add_answer("venom");
labelFunc04B2_005E:
	if (!(!gflags[0x022B])) goto labelFunc04B2_0074;
	message("You see a sulking lad, who doesn't seem to want to look you in the eye.");
	say();
	message("\"Just what I need. Another Avatar,\" he mumbles under his breath.");
	say();
	gflags[0x022B] = true;
	goto labelFunc04B2_0085;
labelFunc04B2_0074:
	if (!gflags[0x0218]) goto labelFunc04B2_0081;
	message("\"Yes, Avatar?\" Tobias asks.");
	say();
	goto labelFunc04B2_0085;
labelFunc04B2_0081:
	message("\"What dost thou want?\" Tobias asks.");
	say();
labelFunc04B2_0085:
	converse attend labelFunc04B2_02B3;
	case "name" attend labelFunc04B2_00A8:
	if (!gflags[0x0218]) goto labelFunc04B2_009D;
	message("\"I am still Tobias!\"");
	say();
	goto labelFunc04B2_00A1;
labelFunc04B2_009D:
	message("\"I am Tobias. I suppose I am to believe thou art someone important.\"");
	say();
labelFunc04B2_00A1:
	UI_remove_answer("name");
labelFunc04B2_00A8:
	case "job" attend labelFunc04B2_00C1:
	message("\"I am too young to have a job. I just help my mother on the farm.\"");
	say();
	UI_add_answer(["mother", "farm"]);
labelFunc04B2_00C1:
	case "mother" attend labelFunc04B2_00F5:
	message("\"Her name is Camille. She speaks of thee. Or rather she speaks of the Avatar, is what I meant to say. Some people in town think she is mad because she still believes in the Eight Virtues.\"");
	say();
	if (!gflags[0x022A]) goto labelFunc04B2_00D7;
	message("\"Thou hast already met her.\"");
	say();
labelFunc04B2_00D7:
	if (!gflags[0x0218]) goto labelFunc04B2_00E1;
	message("\"But thanks to thee I have more respect for her beliefs.\"");
	say();
labelFunc04B2_00E1:
	UI_remove_answer("mother");
	UI_add_answer(["Avatar", "Eight Virtues"]);
labelFunc04B2_00F5:
	case "Avatar" attend labelFunc04B2_0139:
	message("\"Art thou truly the Avatar?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B2_0121;
	if (!gflags[0x0218]) goto labelFunc04B2_011A;
	message("\"Yes, I do believe thou art the true Avatar.\" Tobias smiles briefly.");
	say();
	goto labelFunc04B2_011E;
labelFunc04B2_011A:
	message("\"Thou art no Avatar!\" Tobias frowns.");
	say();
labelFunc04B2_011E:
	goto labelFunc04B2_0132;
labelFunc04B2_0121:
	if (!gflags[0x0218]) goto labelFunc04B2_012E;
	message("\"I think that thou mayest have a little bit of the way of the Avatar about thee. There is a little bit of the Avatar in everyone, or so my mother says.\"");
	say();
	goto labelFunc04B2_0132;
labelFunc04B2_012E:
	message("\"I knew that thou wert nothing but an imposter.\"");
	say();
labelFunc04B2_0132:
	UI_remove_answer("Avatar");
labelFunc04B2_0139:
	case "Eight Virtues" attend labelFunc04B2_0153:
	message("\"My mother once took me to the Shrine of Sacrifice when I was younger. That was soon after my father died so I do not remember it very well.~~I do not think it is there anymore, for she never talks about going back.~~I think that perhaps she does not want to mention it because there are so many in town who belong to The Fellowship. And because it makes her sad.\"");
	say();
	UI_remove_answer("Eight Virtues");
	UI_add_answer("Fellowship");
labelFunc04B2_0153:
	case "farm" attend labelFunc04B2_019A:
	message("\"My mother grows grain.\"");
	say();
	if (!(var0001 == 0x0006)) goto labelFunc04B2_016D;
	message("\"Dost thou not know a farm when thou dost see one?\"");
	say();
labelFunc04B2_016D:
	if (!(var0001 == 0x001A)) goto labelFunc04B2_017B;
	message("\"Surely thou canst find the farm. It is just north of the shelter.\"");
	say();
labelFunc04B2_017B:
	if (!(!gflags[0x0218])) goto labelFunc04B2_0186;
	message("Tobias looks at you as if he thinks you are a bit dim.");
	say();
labelFunc04B2_0186:
	UI_remove_answer("farm");
	UI_add_answer(["grain", "shelter"]);
labelFunc04B2_019A:
	case "grain" attend labelFunc04B2_01BA:
	message("\"She sells grain to Thurston the miller from time to time so that we may go to the pub or buy milk at the dairy every once in a while, but we usually just grow crops to keep ourselves fed.\"");
	say();
	UI_add_answer(["Thurston", "dairy"]);
	UI_remove_answer("grain");
labelFunc04B2_01BA:
	case "shelter" attend labelFunc04B2_01D4:
	message("\"It's that place just south of here. It's run by The Fellowship.\"");
	say();
	UI_remove_answer("shelter");
	UI_add_answer("Fellowship");
labelFunc04B2_01D4:
	case "Thurston" attend labelFunc04B2_01E7:
	message("\"He is one of the few people in town that I like. He is nice to us.\"");
	say();
	UI_remove_answer("Thurston");
labelFunc04B2_01E7:
	case "dairy" attend labelFunc04B2_01FA:
	message("\"The dairy is south of the shelter. Andrew -- the man who runs the dairy -- his father was friends with my father.\"");
	say();
	UI_remove_answer("dairy");
labelFunc04B2_01FA:
	case "Fellowship" attend labelFunc04B2_021A:
	message("For the first time he looks you in the eye. \"I hate The Fellowship! The only other person in town mine own age is that cretin Garritt and it is all he ever talks about! He is always trying to convince my mother to join.\" He clenches his fist angrily. \"Please do not mention them again.\"");
	say();
	UI_add_answer(["Garritt", "mother join?"]);
	UI_remove_answer("Fellowship");
labelFunc04B2_021A:
	case "mother join?" attend labelFunc04B2_022D:
	message("\"Those bloody Fellowship people know that everyone is never more than a meal away from being penniless. They say that they want us to join immediately because the shelter is intended to help only Fellowship members. If we ever need to live there they may have to turn us away in favor of other Fellowship members.\"");
	say();
	UI_remove_answer("mother join?");
labelFunc04B2_022D:
	case "thief" attend labelFunc04B2_0244:
	message("\"There is a thief running free in Paws! He stole silver serpent venom from Morfin, owner of the slaughterhouse. No one knows who he is.\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("thief");
labelFunc04B2_0244:
	case "venom" attend labelFunc04B2_025E:
	message("\"I do not know anything about the stolen venom. I am falsely accused!\"");
	say();
	UI_remove_answer("venom");
	UI_add_answer("falsely accused");
labelFunc04B2_025E:
	case "falsely accused" attend labelFunc04B2_0271:
	message("\"That is right! Garritt did it. I just know it. He was in my room the other day when I came in from the fields. He said he was looking for a ball, but I do not believe him. Thou canst believe me or not, I do not care. But if thou art truly the Avatar, thou wilt know I am telling the truth.\"");
	say();
	UI_remove_answer("falsely accused");
labelFunc04B2_0271:
	case "Garritt" attend labelFunc04B2_02A5:
	if (!gflags[0x0218]) goto labelFunc04B2_028C;
	message("You tell Tobias how you discovered that Garritt was the thief. \"Thank thee, ");
	message(var0000);
	message(", for not believing I was the guilty one. I am not sure if thou art truly the real Avatar but thou dost certainly have the way of the Avatar about thee.\"");
	say();
	goto labelFunc04B2_029E;
labelFunc04B2_028C:
	if (!(!gflags[0x0213])) goto labelFunc04B2_029A;
	message("\"He is the only other boy in town anywhere near mine age. His parents do not want him playing with me because they think that 'associating with those kind of people' will 'hamper his education' or some such rubbish. I cannot stand the little bastard. And I hate the way he plays those stinking whistle panpipes!\"");
	say();
	goto labelFunc04B2_029E;
labelFunc04B2_029A:
	message("\"That spoiled brat Garritt must have planted the venom in my room! He is usually lounging about, even if his parents disapprove of him playing with me. I know he is up to something no good! Thou shouldst look in HIS room!\"");
	say();
labelFunc04B2_029E:
	UI_remove_answer("Garritt");
labelFunc04B2_02A5:
	case "bye" attend labelFunc04B2_02B0:
	goto labelFunc04B2_02B3;
labelFunc04B2_02B0:
	goto labelFunc04B2_0085;
labelFunc04B2_02B3:
	endconv;
	if (!gflags[0x0218]) goto labelFunc04B2_02C1;
	message("\"Goodbye, Avatar. Good luck to thee.\"*");
	say();
	goto labelFunc04B2_02C5;
labelFunc04B2_02C1:
	message("\"Be on thy way then, o great and wise Avatar.\"*");
	say();
labelFunc04B2_02C5:
	if (!(event == 0x0000)) goto labelFunc04B2_02D3;
	Func092E(0xFF4E);
labelFunc04B2_02D3:
	return;
}


