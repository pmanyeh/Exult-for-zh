#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0430 object#(0x430) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0430_0009;
	abort;
labelFunc0430_0009:
	UI_show_npc_face(0xFFD0, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFF1);
	if (!(!gflags[0x02C5])) goto labelFunc0430_0034;
	message("You see an attractive woman dressed in armour and carrying a small arsenal of weapons with her.");
	say();
	gflags[0x02C5] = true;
	goto labelFunc0430_0038;
labelFunc0430_0034:
	message("\"How may I help thee?\" asks Amanda.");
	say();
labelFunc0430_0038:
	if (!gflags[0x02DC]) goto labelFunc0430_004C;
	if (!(!gflags[0x02DE])) goto labelFunc0430_004C;
	UI_add_answer("Stay thine hand!");
labelFunc0430_004C:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0430_005C:
	converse attend labelFunc0430_0213;
	case "name" attend labelFunc0430_0072:
	message("\"My name is Amanda.\"");
	say();
	UI_remove_answer("name");
labelFunc0430_0072:
	case "job" attend labelFunc0430_00A0:
	if (!gflags[0x02DE]) goto labelFunc0430_008E;
	message("\"Mine half-sister and I have no job at this time. We are journeying to seek inner peace, now that our quest has been aborted.\"");
	say();
	UI_add_answer("inner peace");
	goto labelFunc0430_0099;
labelFunc0430_008E:
	message("\"Mine half-sister and I have no job but to serve our quest.\"");
	say();
	UI_add_answer("quest");
labelFunc0430_0099:
	UI_add_answer("half-sister");
labelFunc0430_00A0:
	case "half-sister" attend labelFunc0430_00F3:
	if (!gflags[0x02DE]) goto labelFunc0430_00B7;
	var0002 = "would have been";
	goto labelFunc0430_00BD;
labelFunc0430_00B7:
	var0002 = "will be";
labelFunc0430_00BD:
	message("\"Mine half-sister is Eiko. She, like myself, is a warrior trained by Karenna in the ways of combat. We studied long and hard together to master the skills that ");
	message(var0002);
	message(" required to achieve our vengeance.\"");
	say();
	if (!var0001) goto labelFunc0430_00EC;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("\"The two of us had not even met before our father's death. But we bonded like sisters in the rigorous disciplines we learned from our trainer, Karenna of Minoc.\"*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_00EC:
	UI_remove_answer("half-sister");
labelFunc0430_00F3:
	case "inner peace" attend labelFunc0430_00FF:
	message("\"Yes. Our lives have been dedicated to vengeance for so long that we feel adrift, aimless without it. We must find a new reason for living.~~\"We are considering joining The Fellowship, as they offer guidance for lost souls. But we must consider this longer. We are still unsure.\"");
	say();
labelFunc0430_00FF:
	case "quest" attend labelFunc0430_0119:
	message("\"We are on the trail of our father's murderer.\"");
	say();
	UI_remove_answer("quest");
	UI_add_answer("killer");
labelFunc0430_0119:
	case "killer" attend labelFunc0430_013F:
	message("\"Our father was slain in a most violent manner by a vicious and terrible cyclops. He was impaled on a spear. It took several hours for him to die.\"~~She looks up, eyes glittering. \"Hast thou ever watched anyone die from a belly wound, ");
	message(var0000);
	message("? The agony cannot be imagined.\"");
	say();
	UI_remove_answer("killer");
	UI_add_answer(["cyclops", "impaled"]);
labelFunc0430_013F:
	case "cyclops" attend labelFunc0430_0177:
	message("\"We have been tracking this creature for years, ever since we completed our training. We have followed him from one end of Britannia to another. Sometimes he was just one step ahead of us. But now we know that we are nearer to him than we have ever been before.\"");
	say();
	if (!var0001) goto labelFunc0430_0170;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("\"When we find him there shall be no escape. We want vengeance and we mean to have it!\"*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_0170:
	UI_remove_answer("cyclops");
labelFunc0430_0177:
	case "impaled" attend labelFunc0430_01AF:
	message("\"Our father fought bravely for his life. He did not die easily. He died a hero's death. Although we may both die in the effort, we intend to give his murderer a death fit for a true villain.\"");
	say();
	if (!var0001) goto labelFunc0430_01A8;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("Eiko smiles wickedly.*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_01A8:
	UI_remove_answer("impaled");
labelFunc0430_01AF:
	case "Stay thine hand!" attend labelFunc0430_0205:
	message("You explain to Amanda what you have learned. Kalideth had gone mad when he fought with Iskander and the source of what is causing the problems with magic and the mage's minds - the thing that really killed Kalideth - has been destroyed.~~\"Thou hast robbed me of my rightful vengeance! How dare thee!\"");
	say();
	if (!var0001) goto labelFunc0430_01F5;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("Eiko sighs, and her shoulders slump. \"Come now, sister. With the matter of our father's untimely death now settled we can at last let it go. Now we can devote our lives to ourselves rather than remain trapped in the past. It is for the best, thou must trust me.\"*");
	say();
	UI_show_npc_face(0xFFD0, 0x0000);
	message("Amanda shakes her head, dazed and confused. \"Perhaps thou art correct, Eiko. I must think.\"*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
	gflags[0x02DE] = true;
	goto labelFunc0430_01FD;
labelFunc0430_01F5:
	message("Amanda turns and slams her fist into the wall, then collapses onto it with a sob. After a moment, she straightens, but does not turn to face you.~~\"Have no fear that I will continue my vengeance against the cyclops. I am not so far gone that I would kill a creature for acting in self-defense.~\"But I must have some time to myself now. Please, go. I must think.\"");
	say();
	gflags[0x02DE] = true;
labelFunc0430_01FD:
	abort;
	UI_remove_answer("Stay thine hand!");
labelFunc0430_0205:
	case "bye" attend labelFunc0430_0210:
	goto labelFunc0430_0213;
labelFunc0430_0210:
	goto labelFunc0430_005C;
labelFunc0430_0213:
	endconv;
	message("\"Good journey to thee, ");
	message(var0000);
	message(".\"*");
	say();
	return;
}


