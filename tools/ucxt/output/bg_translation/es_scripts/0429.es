#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0429 object#(0x429) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0429_023D;
	UI_show_npc_face(0xFFD7, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFD7));
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	if (!(var0002 == 0x0007)) goto labelFunc0429_0067;
	var0003 = Func08FC(0xFFD7, 0xFFE6);
	if (!var0003) goto labelFunc0429_0052;
	message("Candice is listening intently to the Fellowship meeting.*");
	say();
	abort;
	goto labelFunc0429_0067;
labelFunc0429_0052:
	if (!gflags[0x00DA]) goto labelFunc0429_0062;
	message("\"Hast thou seen Batlin? He has not shown up for the Fellowship meeting!\"");
	say();
	goto labelFunc0429_0067;
	goto labelFunc0429_0067;
labelFunc0429_0062:
	message("\"Oh! I must not stop to speak with thee! I am late for a Fellowship meeting!\"*");
	say();
	abort;
labelFunc0429_0067:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00AA])) goto labelFunc0429_008D;
	message("This is a bright woman who looks much younger than she actually is.");
	say();
	message("\"Well! Thy reputation precedes thee! The Avatar in person! Word has spread that thou wert in Britain!\"");
	say();
	gflags[0x00AA] = true;
	goto labelFunc0429_00B9;
labelFunc0429_008D:
	if (!(var0002 == 0x0000)) goto labelFunc0429_00B5;
	var0004 = Func08F7(0xFFD5);
	if (!var0004) goto labelFunc0429_00AE;
	message("Candice looks guilty about something. She gives you a little wave, but says nothing. She looks at Patterson, hoping that he will do the talking.*");
	say();
	abort;
	goto labelFunc0429_00B2;
labelFunc0429_00AE:
	message("\"Yes, Avatar?\" Candice says.");
	say();
labelFunc0429_00B2:
	goto labelFunc0429_00B9;
labelFunc0429_00B5:
	message("\"Yes, Avatar?\" Candice says.");
	say();
labelFunc0429_00B9:
	converse attend labelFunc0429_0238;
	case "name" attend labelFunc0429_00CF:
	message("\"My name is Candice,\" she says brightly. \"I must say I am honored to meet the Avatar!\" She curtsies.");
	say();
	UI_remove_answer("name");
labelFunc0429_00CF:
	case "job" attend labelFunc0429_0104:
	message("\"I am the curator of the Royal Museum.");
	say();
	if (!(var0000 == 0x0007)) goto labelFunc0429_00EC;
	message("\"Feel free to ask about any of the exhibits.");
	say();
	goto labelFunc0429_00F0;
labelFunc0429_00EC:
	message("\"I hope to see thee there when the museum is open.");
	say();
labelFunc0429_00F0:
	message("\"I spend the rest of my time working with The Fellowship.\"");
	say();
	UI_add_answer(["Royal Museum", "exhibits", "Fellowship"]);
labelFunc0429_0104:
	case "Royal Museum" attend labelFunc0429_0124:
	message("\"It has been in Britain for many, many years. It contains historical artifacts, as well as works of art.\"");
	say();
	UI_remove_answer("Royal Museum");
	UI_add_answer(["artifacts", "works of art"]);
labelFunc0429_0124:
	case "exhibits" attend labelFunc0429_014F:
	if (!(var0000 == 0x0007)) goto labelFunc0429_0144;
	message("\"We have just opened a special section in which thou might be interested -- an exhibit of 'Avatar artifacts'!\"");
	say();
	UI_add_answer("Avatar artifacts");
	goto labelFunc0429_0148;
labelFunc0429_0144:
	message("\"Come to the museum when it is open!\"");
	say();
labelFunc0429_0148:
	UI_remove_answer("exhibits");
labelFunc0429_014F:
	case "artifacts" attend labelFunc0429_0162:
	message("\"There are relics from early Britannia and even from the Three Ages of Darkness -- back when Britannia was known as Sosaria.\"");
	say();
	UI_remove_answer("artifacts");
labelFunc0429_0162:
	case "Avatar artifacts" attend labelFunc0429_01A3:
	message("\"Well, thou surely must recognize them. They are supposed to be authentic! Things like the Silver Horn and the eight stones. I understand the stones were used for teleportation, and if mages were not so sick in the head these days, they could cast a 'Recall' spell on them to teleport to specific places around Britannia. I believe if one casts a 'Mark' spell on one, thou canst re-assign the teleportation location! But I suppose none of that works anymore.\"");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0429_019C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you, \"Er, Avatar, thou dost know that I do not condone stealing. But, er, I do believe these stones may be useful to us. Perhaps we should come back later when the museum is closed, if thou dost know what I mean? After all, these items technically belong to thee!\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFD7, 0x0000);
labelFunc0429_019C:
	UI_remove_answer("Avatar artifacts");
labelFunc0429_01A3:
	case "works of art" attend labelFunc0429_01B6:
	message("\"Britannia is proud of the artists who donate their works to the museum. Thou wilt see pieces all over the country by Britannian artists Watson, Richard Fox, Randi Frank, Glen Johnson, and Denis Loubet.\"");
	say();
	UI_remove_answer("works of art");
labelFunc0429_01B6:
	case "Fellowship" attend labelFunc0429_01E8:
	if (!(!var0001)) goto labelFunc0429_01CC;
	message("\"We meet every evening at the Hall. Thou must come and visit!");
	say();
	goto labelFunc0429_01D0;
labelFunc0429_01CC:
	message("\"Thou must know all about it by now! I hope to see thee at an evening meeting!");
	say();
labelFunc0429_01D0:
	message("\"The Fellowship has given me a great purpose in life. I have made new friends, and have even found love!\" She giggles. \"Ooops! I gave away my secret! I must not speak of it. Do forget I said that, please?\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["purpose", "secret"]);
labelFunc0429_01E8:
	case "purpose" attend labelFunc0429_0202:
	message("\"I want to attain a higher level of acceptance in The Fellowship. I want to hear the 'voice'. That is mine one true goal.\"");
	say();
	UI_remove_answer("purpose");
	UI_add_answer("voice");
labelFunc0429_0202:
	case "voice" attend labelFunc0429_0219:
	message("\"Dost thou not know? The longer one is a member of The Fellowship, the greater the chances that one will hear the 'voice'. Supposedly, it is a man's voice that thou wilt hear -- perhaps in thy dreams, perhaps while thou art concentrating on something else -- it is a voice that tells thee things, suggests things. I do not know, really. I have not heard it yet, so I am only speaking of what I have heard from others more fortunate than I.\"");
	say();
	UI_remove_answer("voice");
	gflags[0x008C] = true;
labelFunc0429_0219:
	case "secret" attend labelFunc0429_022A:
	message("\"What secret? I do -not- have a secret! It was a slip of the tongue. I cannot really speak to anyone about it. Why, if word got out that the Mayor and I... I mean, uhm, -may- I... er, ask thee to forget that I said anything?\"~~Candice turns beet red and turns away.*");
	say();
	gflags[0x0080] = true;
	abort;
labelFunc0429_022A:
	case "bye" attend labelFunc0429_0235:
	goto labelFunc0429_0238;
labelFunc0429_0235:
	goto labelFunc0429_00B9;
labelFunc0429_0238:
	endconv;
	message("\"Good day, Avatar.\"*");
	say();
labelFunc0429_023D:
	if (!(event == 0x0000)) goto labelFunc0429_024B;
	Func092E(0xFFD7);
labelFunc0429_024B:
	return;
}


