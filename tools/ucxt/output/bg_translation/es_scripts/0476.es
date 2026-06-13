#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func085D 0x85D ();
extern void Func085E 0x85E ();
extern var Func090A 0x90A ();
extern void Func085C 0x85C ();
extern void Func092E 0x92E (var var0000);

void Func0476 object#(0x476) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0476_022A;
	UI_show_npc_face(0xFF8A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0208])) goto labelFunc0476_0045;
	message("At your approach, the woman raises her eyebrows to indicate she is aware of your presence and interested in what you are about to say.");
	say();
	gflags[0x0208] = true;
	goto labelFunc0476_004F;
labelFunc0476_0045:
	message("\"And how may I help thee, ");
	message(var0000);
	message("?\" asks Carlyn.");
	say();
labelFunc0476_004F:
	converse attend labelFunc0476_0229;
	case "name" attend labelFunc0476_0065:
	message("\"I am Carlyn.\" She smiles broadly.");
	say();
	UI_remove_answer("name");
labelFunc0476_0065:
	case "job" attend labelFunc0476_00A1:
	message("\"I am the tailor of Moonglow.\"");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc0476_0094;
	message("\"I also tend the bar for Phearcy in the evenings.\"");
	say();
	UI_add_answer("buy refreshment");
	if (!(!var0002)) goto labelFunc0476_0094;
	UI_add_answer("Phearcy");
labelFunc0476_0094:
	UI_add_answer(["tailor", "Moonglow"]);
labelFunc0476_00A1:
	case "buy refreshment" attend labelFunc0476_00CB:
	message("\"Wouldst thou prefer food or drink, ");
	message(var0000);
	message("?\"");
	say();
	UI_push_answers();
	UI_add_answer(["food", "drink"]);
	UI_remove_answer("buy refreshment");
labelFunc0476_00CB:
	case "food" attend labelFunc0476_00E1:
	Func085D();
	UI_pop_answers();
	UI_remove_answer("food");
labelFunc0476_00E1:
	case "drink" attend labelFunc0476_00F7:
	Func085E();
	UI_pop_answers();
	UI_remove_answer("drink");
labelFunc0476_00F7:
	case "Phearcy" attend labelFunc0476_0134:
	if (!(var0001 == 0x0007)) goto labelFunc0476_0112;
	var0003 = "here";
	goto labelFunc0476_0118;
labelFunc0476_0112:
	var0003 = "at the Friendly Knave";
labelFunc0476_0118:
	message("\"He is the owner and bartender. Every night at 9, he goes to the Fellowship meetings, so I serve refreshment for him ");
	message(var0003);
	message(".\"");
	say();
	var0002 = true;
	UI_remove_answer("Phearcy");
	UI_add_answer("Fellowship");
labelFunc0476_0134:
	case "Moonglow" attend labelFunc0476_015B:
	message("\"'Tis a very pleasant town, ");
	message(var0000);
	message(". There are so many different types of people here. I wish I knew more of them.~~\"If thou hast any questions about them, I highly recommend to thee that thou speakest with Phearcy.\"");
	say();
	if (!(!var0002)) goto labelFunc0476_0154;
	UI_add_answer("Phearcy");
labelFunc0476_0154:
	UI_remove_answer("Moonglow");
labelFunc0476_015B:
	case "Fellowship" attend labelFunc0476_017B:
	message("\"I know little about the group. Every night at 9 they have a meeting or some such of all the members. And, if I remember correctly, the leader of that branch doth give a speech -- a sermon is what I believe it is called.~~\"There is another member in town, if thou hast questions about The Fellowship.\"");
	say();
	UI_add_answer(["another", "leader"]);
	UI_remove_answer("Fellowship");
labelFunc0476_017B:
	case "another" attend labelFunc0476_0195:
	message("\"I believe his name is Tolemac. He is a farmer, from what I have heard. Phearcy would know more than I. Or thou couldst ask their clerk.\"");
	say();
	UI_add_answer("clerk");
	UI_remove_answer("another");
labelFunc0476_0195:
	case "clerk" attend labelFunc0476_01A8:
	message("\"'Tis a woman, I know that, but I do not know her name.\"");
	say();
	UI_remove_answer("clerk");
labelFunc0476_01A8:
	case "leader" attend labelFunc0476_01BB:
	message("\"His name is Rankin. I do not believe he has been here terribly long.\"");
	say();
	UI_remove_answer("leader");
labelFunc0476_01BB:
	case "tailor" attend labelFunc0476_0213:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || ((var0001 == 0x0005) || (var0001 == 0x0006))))) goto labelFunc0476_0202;
	message("\"Yes, I love sewing clothing. Wouldst thou be interested in seeing or purchasing some of my creations?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0476_01FB;
	Func085C();
	goto labelFunc0476_01FF;
labelFunc0476_01FB:
	message("Shock covers her face.~~\"Well,\" she huffs.");
	say();
labelFunc0476_01FF:
	goto labelFunc0476_020C;
labelFunc0476_0202:
	message("\"Yes, ");
	message(var0000);
	message(". 'Tis my job, and my passion. I love sewing clothing. If thou were to come to my shop when it was open, I could show thee many exquisite things.\"");
	say();
labelFunc0476_020C:
	UI_remove_answer("tailor");
labelFunc0476_0213:
	case "bye" attend labelFunc0476_0226:
	message("\"Fare thee well, ");
	message(var0000);
	message(".\"*");
	say();
	abort;
labelFunc0476_0226:
	goto labelFunc0476_004F;
labelFunc0476_0229:
	endconv;
labelFunc0476_022A:
	if (!(event == 0x0000)) goto labelFunc0476_0238;
	Func092E(0xFF8A);
labelFunc0476_0238:
	return;
}


