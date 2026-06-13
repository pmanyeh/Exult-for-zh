#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0483 object#(0x483) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0483_02B3;
	UI_show_npc_face(0xFF7D, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x017E] && (!gflags[0x017F]))) goto labelFunc0483_003A;
	UI_add_answer("locket");
labelFunc0483_003A:
	if (!gflags[0x0180]) goto labelFunc0483_0047;
	UI_add_answer("strangers");
labelFunc0483_0047:
	if (!(!gflags[0x018C])) goto labelFunc0483_0059;
	message("You see a humble-looking older woman. She gives you a friendly smile.");
	say();
	gflags[0x018C] = true;
	goto labelFunc0483_0063;
labelFunc0483_0059:
	message("Magenta smiles. \"Good day, ");
	message(var0000);
	message(". May I help thee?\"");
	say();
labelFunc0483_0063:
	converse attend labelFunc0483_02AE;
	case "name" attend labelFunc0483_0080:
	message("\"I am Magenta, of New Magincia.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("New Magincia");
labelFunc0483_0080:
	case "job" attend labelFunc0483_0099:
	message("\"I am the Mayor of New Magincia, and the wife of Boris.\"");
	say();
	UI_add_answer(["Mayor", "Boris"]);
labelFunc0483_0099:
	case "Mayor" attend labelFunc0483_00B3:
	message("\"It is a job that requires little actual administration. I mostly try to make sure that everyone is getting along with everyone else. Apart from that, the town practically runs itself.\"");
	say();
	UI_remove_answer("Mayor");
	UI_add_answer("administration");
labelFunc0483_00B3:
	case "administration" attend labelFunc0483_00C6:
	message("\"Why even the taxes here are less severe than anywhere else in Britannia. The Britannian Tax Council sometimes forgets to come collecting here for years on end.\"");
	say();
	UI_remove_answer("administration");
labelFunc0483_00C6:
	case "Boris" attend labelFunc0483_00D9:
	message("\"Boris is the local innkeeper and a bit of a scoundrel if I say so myself. But he pours a good drink and tells a good story. Although I have to keep an eye on him, I love him.\"");
	say();
	UI_remove_answer("Boris");
labelFunc0483_00D9:
	case "New Magincia" attend labelFunc0483_00F3:
	message("\"Oh, nothing is ever new in New Magincia, as the joke around here goes. But that is how we like it. We have few visitors here.\"");
	say();
	UI_add_answer("visitors");
	UI_remove_answer("New Magincia");
labelFunc0483_00F3:
	case "visitors", "strangers" attend labelFunc0483_0116:
	message("\"I hear there are three other new arrivals wandering around here somewhere. I always try to give people the benefit of the doubt, but be careful of them.\"");
	say();
	UI_add_answer("new arrivals");
	UI_remove_answer(["strangers", "visitors"]);
labelFunc0483_0116:
	case "new arrivals" attend labelFunc0483_0129:
	message("\"Certainly some of the other townsfolk must have seen them by now. Perhaps they will have more information.\"");
	say();
	UI_remove_answer("new arrivals");
labelFunc0483_0129:
	case "locket" attend labelFunc0483_0143:
	message("You see the locket Henry described to you hanging around Magenta's neck. \"Is it not beautiful? I found it in the secret hiding place behind mine husband's bar.\"");
	say();
	UI_add_answer("found");
	UI_remove_answer("locket");
labelFunc0483_0143:
	case "found" attend labelFunc0483_0163:
	message("\"I would never have suspected anything so romantic from Boris. The locket must be a surprise for me!\"");
	say();
	UI_add_answer(["romantic", "surprise"]);
	UI_remove_answer("found");
labelFunc0483_0163:
	case "romantic" attend labelFunc0483_018B:
	if (!(!gflags[0x017F])) goto labelFunc0483_0179;
	message("\"He must be trying to get back on my good side after all of the times I have caught him wenching and carousing.\"");
	say();
	goto labelFunc0483_017D;
labelFunc0483_0179:
	message("\"Well, I -did- think he was going to give it to me to make up for all the times I have caught him wenching and carousing.\"");
	say();
labelFunc0483_017D:
	UI_add_answer("carousing");
	UI_remove_answer("romantic");
labelFunc0483_018B:
	case "carousing" attend labelFunc0483_021C:
	message("\"Say, dost thou think that Boris could have meant to give this locket to someone else?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0483_0211;
	message("Magenta's eyes widen in shock. \"Who?\"");
	say();
	UI_push_answers();
	var0002 = Func090B(["Constance", "don't know who"]);
	if (!(var0002 == "Constance")) goto labelFunc0483_01F8;
	message("\"I cannot possibly wear a piece of jewelry meant for another woman. As mayor, I charge thee, Avatar, with the task of returning it to her, or more properly to the person who had intended to give it to her. As for Boris... well, I shall deal with him later!\"");
	say();
	if (!(!gflags[0x017F])) goto labelFunc0483_01F8;
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, false);
	if (!var0003) goto labelFunc0483_01F4;
	message("\"Here is the locket. Take it.\"");
	say();
	gflags[0x017F] = true;
	goto labelFunc0483_01F8;
labelFunc0483_01F4:
	message("\"I cannot give thee the locket. Thou art too encumbered. Come back after thou hast put a few things down.\"");
	say();
labelFunc0483_01F8:
	if (!(var0002 == "don't know who")) goto labelFunc0483_020A;
	message("Magenta looks puzzled. \"I wonder who it could be?");
	say();
	message("Then Magenta gets a devilish gleam in her eye. \"Well then. I shall just beat it out of him!\"");
	say();
labelFunc0483_020A:
	UI_pop_answers();
	goto labelFunc0483_0215;
labelFunc0483_0211:
	message("Magenta sighs with relief. \"I am glad thou hast said this. Now I shall feel no guilt about keeping it.\"");
	say();
labelFunc0483_0215:
	UI_remove_answer("carousing");
labelFunc0483_021C:
	case "surprise" attend labelFunc0483_02A0:
	if (!(!gflags[0x017F])) goto labelFunc0483_0295;
	message("\"I am flattered Boris would buy me such an obviously expensive gift. But how could he ever have afforded it?\"");
	say();
	UI_push_answers();
	var0004 = Func090B(["stolen", "don't know how"]);
	if (!(var0004 == "stolen")) goto labelFunc0483_0280;
	message("Although Magenta struggles to retain her dignity, she cannot hide her disappointment. \"As Mayor, I charge thee with the task of locating the rightful owner of this locket and returning it to them.\"");
	say();
	if (!(!gflags[0x017F])) goto labelFunc0483_0280;
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, false);
	if (!var0003) goto labelFunc0483_027C;
	message("\"Here it is. Take it.\"");
	say();
	gflags[0x017F] = true;
	goto labelFunc0483_0280;
labelFunc0483_027C:
	message("\"Thou hast not room to carry even such a small thing as this! If thou wilt set something down, I will give thee the locket.\"");
	say();
labelFunc0483_0280:
	if (!(var0004 == "don't know how")) goto labelFunc0483_028E;
	message("Magenta looks puzzled. Then she smiles. \"Oh well. It sure is nice, is it not? If he thought this would improve our marital relations, he was not altogether wrong!\"");
	say();
labelFunc0483_028E:
	UI_pop_answers();
	goto labelFunc0483_0299;
labelFunc0483_0295:
	message("\"Well, I thought at first that Boris had bought the locket for me as a surprise! Wait until I get mine hands on that no good...\" Magenta's face turns as red as her hair.");
	say();
labelFunc0483_0299:
	UI_remove_answer("surprise");
labelFunc0483_02A0:
	case "bye" attend labelFunc0483_02AB:
	goto labelFunc0483_02AE;
labelFunc0483_02AB:
	goto labelFunc0483_0063;
labelFunc0483_02AE:
	endconv;
	message("\"I look forward to the next time when I will see thee.\"*");
	say();
labelFunc0483_02B3:
	if (!(event == 0x0000)) goto labelFunc0483_02C1;
	Func092E(0xFF7D);
labelFunc0483_02C1:
	return;
}


