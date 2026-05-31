#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func042B object#(0x42B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc042B_02F0;
	UI_show_npc_face(0xFFD5, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc042B_0052;
	var0001 = Func08FC(0xFFD5, 0xFFE6);
	if (!var0001) goto labelFunc042B_003D;
	message("Patterson is concentrating on the Fellowship meeting and does not wish to speak.*");
	say();
	abort;
	goto labelFunc042B_0052;
labelFunc042B_003D:
	if (!gflags[0x00DA]) goto labelFunc042B_004D;
	message("\"I wonder where Batlin could be! 'Tis not like him to miss a meeting.\"");
	say();
	goto labelFunc042B_0052;
	goto labelFunc042B_0052;
labelFunc042B_004D:
	message("\"I cannot stop to speak right now. I am late for the Fellowship meeting!\"*");
	say();
	abort;
labelFunc042B_0052:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0080]) goto labelFunc042B_006F;
	UI_add_answer("Candice");
labelFunc042B_006F:
	if (!gflags[0x00D1]) goto labelFunc042B_007C;
	UI_add_answer("body");
labelFunc042B_007C:
	if (!(!gflags[0x00AC])) goto labelFunc042B_0092;
	message("You see a nobleman in his forties who looks like either a politician or a well-dressed merchant.");
	say();
	message("\"Avatar! I was just alerted of thy presence in our fair city! I have been expecting thee!\"");
	say();
	gflags[0x00AC] = true;
	goto labelFunc042B_010D;
labelFunc042B_0092:
	if (!((var0000 == 0x0000) || ((var0000 == 0x0001) || (var0000 == 0x0002)))) goto labelFunc042B_0109;
	var0002 = Func08F7(0xFFD7);
	var0003 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc042B_0102;
	message("\"Avatar! Er, uhm, how art thee? Oh, dost thou know Candice, the curator at the Royal Museum? She is a 'brother' at The Fellowship. I was, er, just seeing her home!\"");
	say();
	if (!var0003) goto labelFunc042B_00E6;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Hmmm. And does thy wife know thou art seeing Candice home?\"");
	say();
	UI_remove_npc_face(0xFFFF);
	goto labelFunc042B_00EA;
labelFunc042B_00E6:
	message("You ask if Judith knows about this.");
	say();
labelFunc042B_00EA:
	UI_show_npc_face(0xFFD5, 0x0000);
	message("\"Why, she doth not need to know! It does not matter! 'Tis nothing, really!\"~~The Mayor is sweating profusely. He looks at you with beady eyes. He knows he has been found out. His body slumps. He is mortified and ashamed.~~\"Thou hast discovered my... our secret. Please do not tell Judith. I... will end this. I swear. Candice -- we must stop meeting. I... I'm sorry.\"~~You decide to leave Patterson and Candice to work out what has happened, and you hope that the Mayor has learned something about honesty.*");
	say();
	Func0911(0x0014);
	abort;
	goto labelFunc042B_0106;
labelFunc042B_0102:
	message("\"How may I help thee?\" Patterson asks.");
	say();
labelFunc042B_0106:
	goto labelFunc042B_010D;
labelFunc042B_0109:
	message("\"How may I help thee?\" Patterson asks.");
	say();
labelFunc042B_010D:
	converse attend labelFunc042B_02EB;
	case "name" attend labelFunc042B_0123:
	message("\"I am Patterson. Named after my father.\" He holds his hand out, takes yours, and shakes it firmly. \"It is such a pleasure to meet the Avatar!\"");
	say();
	UI_remove_answer("name");
labelFunc042B_0123:
	case "job" attend labelFunc042B_013F:
	message("\"Why, I am the Town Mayor! The Town Mayor of Britain, that is! I would have thee know that mine election was an overwhelming victory! Mine opponent never had a chance!~~ \"I am also President of the Britannian Tax Council.\"");
	say();
	UI_add_answer(["election", "opponent", "Tax Council"]);
labelFunc042B_013F:
	case "election" attend labelFunc042B_0159:
	message("\"It was held two years ago. I received 84 percent of the votes. It was an impressive victory, I must admit.~~ \"Of course, when one has a group like The Fellowship behind them...\"");
	say();
	UI_remove_answer("election");
	UI_add_answer("Fellowship");
labelFunc042B_0159:
	case "opponent" attend labelFunc042B_0177:
	message("\"He was an old farmer named Brownie. Didn't have much money to put into a campaign. Even the peasants didn't support him.\"");
	say();
	UI_remove_answer("opponent");
	UI_add_answer("peasants");
	gflags[0x007F] = true;
labelFunc042B_0177:
	case "Fellowship" attend labelFunc042B_01A9:
	message("\"My life has improved greatly since I joined. I find that mine honesty is impeccable, my leadership is unchallengeable, and my love for my wife is irreproachable.");
	say();
	if (!(!gflags[0x0006])) goto labelFunc042B_0191;
	message("\"Thou shouldst consider attending one of our meetings in the evening.\"");
	say();
	goto labelFunc042B_0195;
labelFunc042B_0191:
	message("\"I would wager that thy life has improved as well!\"");
	say();
labelFunc042B_0195:
	UI_remove_answer("Fellowship");
	UI_add_answer(["honesty", "wife"]);
labelFunc042B_01A9:
	case "peasants" attend labelFunc042B_01C3:
	message("\"Did I say that? I certainly did not mean it. There is no class system in Britain anymore, nor in the entire country, for that matter! What I meant is that the 'peasantry', that is, those people who are not of superior lineage -- which is the type of man Brownie is -- -they- did not support him either. They knew who would be the best leader!\"");
	say();
	UI_remove_answer("peasants");
	UI_add_answer("superior");
labelFunc042B_01C3:
	case "superior" attend labelFunc042B_01E3:
	message("\"Did I say that? I do not think I really meant that the way it sounded. What I meant to say was that there are people who come from families of better standing than others. And Brownie is not one of them! But do not misunderstand me -- I still maintain that the class system in Britannia has been abolished!\"");
	say();
	UI_remove_answer("superior");
	if (!gflags[0x0082]) goto labelFunc042B_01E3;
	UI_add_answer("Nanna");
labelFunc042B_01E3:
	case "Nanna" attend labelFunc042B_01F6:
	message("\"She said what? Well, she's wrong! And to think she is a 'brother'. One of The Fellowship! I shall have to speak to Batlin about her.\"~~You notice that Patterson seems ill-at-ease.");
	say();
	UI_remove_answer("Nanna");
labelFunc042B_01F6:
	case "honesty" attend labelFunc042B_0216:
	message("\"I am obviously the most honest person in Britain! Perhaps I should move to Moonglow! Ha!\"");
	say();
	UI_remove_answer("honesty");
	if (!gflags[0x0081]) goto labelFunc042B_0216;
	UI_add_answer("Judith suspicious");
labelFunc042B_0216:
	case "wife" attend labelFunc042B_0229:
	message("\"Her name is Judith. She's the music teacher at The Music Hall. Perhaps thou hast met her. We have a wonderful relationship.\"");
	say();
	UI_remove_answer("wife");
labelFunc042B_0229:
	case "Tax Council" attend labelFunc042B_023C:
	message("\"The land must have some way of generating income. Taxes are the only solution. Every merchant and farmer is taxed. Anyone who works for a living is taxed.\"~~ \"The Britannian Tax Council has its main office in the Royal Mint.\"");
	say();
	UI_remove_answer("Tax Council");
labelFunc042B_023C:
	case "Judith suspicious" attend labelFunc042B_027D:
	message("\"Why, I do not know what she is talking about! I work late, that is all!\"");
	say();
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc042B_0276;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you, \"This man seems very defensive, dost thou not think? I say we should observe him and see where he goes after The Fellowship meeting tonight.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFD5, 0x0000);
labelFunc042B_0276:
	UI_remove_answer("Judith suspicious");
labelFunc042B_027D:
	case "Candice" attend labelFunc042B_0290:
	message("Patterson's eyes widen and for a moment looks very nervous. But very quickly he regains his composure.~~ \"Candice? Why, she is a friend! A 'brother' at The Fellowship! That is all!\"");
	say();
	UI_remove_answer("Candice");
labelFunc042B_0290:
	case "body" attend labelFunc042B_02AA:
	message("You relate what Lord British said about the murder in Britain a few years ago. Patterson nods.~~\"I remember it well. Quite gruesome, it was. There was a man named Finster who was running for public office. He was quite outspoken in his opinions, and I suppose this got him into trouble.\"");
	say();
	UI_remove_answer("body");
	UI_add_answer("opinions");
labelFunc042B_02AA:
	case "opinions" attend labelFunc042B_02C4:
	message("\"He was trying to make many social changes. He wanted more power for the Great Council and the Britannian Tax Council, and he wanted to disband The Fellowship. Finster was a nobleman with too much ambition. Anyway, his beliefs must have provided him with a few enemies.\"");
	say();
	UI_remove_answer("opinions");
	UI_add_answer("enemies");
labelFunc042B_02C4:
	case "enemies" attend labelFunc042B_02DD:
	message("\"How should I know? Anyway, his body was found in an abandoned building which is no longer standing. It used to be a storehouse of some kind, up near the castle. It was torn down a couple of years ago. The body was mutilated beyond belief. It was as if someone tied the poor man down with stakes and cut off all of his limbs. Finster was then beheaded. It was almost... what is the word... ritualistic!~~\"And that is all I remember. No one was ever arrested for the crime.\"");
	say();
	Func0911(0x0014);
	UI_remove_answer("enemies");
labelFunc042B_02DD:
	case "bye" attend labelFunc042B_02E8:
	goto labelFunc042B_02EB;
labelFunc042B_02E8:
	goto labelFunc042B_010D;
labelFunc042B_02EB:
	endconv;
	message("Patterson nods his head at you.*");
	say();
labelFunc042B_02F0:
	if (!(event == 0x0000)) goto labelFunc042B_02FE;
	Func092E(0xFFD5);
labelFunc042B_02FE:
	return;
}


