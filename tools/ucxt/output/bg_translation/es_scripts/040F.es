#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func040F object#(0x40F) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc040F_0009;
	abort;
labelFunc040F_0009:
	UI_show_npc_face(0xFFF1, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFD0);
	if (!(!gflags[0x02C4])) goto labelFunc040F_0034;
	message("You see a stunningly attractive oriental woman. She is armed to the teeth.");
	say();
	gflags[0x02C4] = true;
	goto labelFunc040F_0038;
labelFunc040F_0034:
	message("\"Thou dost wish to speak with me again?\" asks Eiko.");
	say();
labelFunc040F_0038:
	if (!(gflags[0x02DC] && (!gflags[0x02DD]))) goto labelFunc040F_004A;
	UI_add_answer("Stay thine hand!");
labelFunc040F_004A:
	UI_add_answer(["name", "job", "bye"]);
labelFunc040F_005A:
	converse attend labelFunc040F_019F;
	case "name" attend labelFunc040F_0070:
	message("\"My name is Eiko.\"");
	say();
	UI_remove_answer("name");
labelFunc040F_0070:
	case "job" attend labelFunc040F_0098:
	if (!(!gflags[0x02DD])) goto labelFunc040F_008D;
	message("\"I have no job. I have a quest. My quest is shared with mine half-sister, Amanda.\"");
	say();
	UI_add_answer("quest");
	goto labelFunc040F_0091;
labelFunc040F_008D:
	message("\"We are leaving this dungeon now that our quest is over.\"");
	say();
labelFunc040F_0091:
	UI_add_answer("Amanda");
labelFunc040F_0098:
	case "quest" attend labelFunc040F_00BC:
	message("\"Eighteen years ago my father was murdered by a cyclops called Iskander Ironheart. Mine half-sister Amanda and I are his only surviving kin and we have vowed to avenge him.\"");
	say();
	gflags[0x02DB] = true;
	UI_remove_answer("quest");
	UI_add_answer(["father", "Iskander"]);
labelFunc040F_00BC:
	case "father" attend labelFunc040F_00FF:
	message("\"Our father was a mage named Kalideth. He was working to find a cause of the disturbances of the ethereal waves that have been preventing magic from working for the past twenty years and more, as well as the madness that has afflicted all mages since then.\"");
	say();
	if (!var0001) goto labelFunc040F_00F8;
	UI_show_npc_face(0xFFD0, 0x0000);
	message("\"Our father was a wise and kind man. His death was a loss for all of Britannia.\" She sniffs.");
	say();
	if (!(!gflags[0x02DD])) goto labelFunc040F_00E7;
	message("\"His killer deserves to die.\"");
	say();
labelFunc040F_00E7:
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
labelFunc040F_00F8:
	UI_remove_answer("father");
labelFunc040F_00FF:
	case "Amanda" attend labelFunc040F_0137:
	message("\"Neither one of us knew that the other existed until after the death of our father.\"");
	say();
	if (!var0001) goto labelFunc040F_0130;
	UI_show_npc_face(0xFFD0, 0x0000);
	message("\"I had always felt like I had a sister somewhere. But I attributed those feelings to the natural loneliness a child feels upon losing a father. Learning about each other has been the only good thing that has happened to me since father's death.\"");
	say();
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
labelFunc040F_0130:
	UI_remove_answer("Amanda");
labelFunc040F_0137:
	case "Iskander" attend labelFunc040F_014A:
	message("\"Yes, I know I am not pronouncing it correctly. I understand he has a more human nickname that is actually a translation from the ancient cyclops language. But I do not know what it is.\"");
	say();
	UI_remove_answer("Iskander");
labelFunc040F_014A:
	case "Stay thine hand!" attend labelFunc040F_0191:
	message("You explain to Eiko what you have learned. Kalideth had gone mad when he fought with Iskander and the source of what is causing the problems with magic and the mage's minds was the thing that really killed Kalideth!");
	say();
	message("\"Then if thou hast discovered the true force that killed my father, my vengeance against Kalideth would be unjust.\"");
	say();
	if (!var0001) goto labelFunc040F_018A;
	UI_show_npc_face(0xFFD0, 0x0000);
	if (!(!gflags[0x02DE])) goto labelFunc040F_018A;
	message("\"How canst thou say that? I thought that thou wert my sister? Thou art a traitor!\"");
	say();
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
	gflags[0x02DD] = true;
labelFunc040F_018A:
	UI_remove_answer("Stay thine hand!");
labelFunc040F_0191:
	case "bye" attend labelFunc040F_019C:
	goto labelFunc040F_019F;
labelFunc040F_019C:
	goto labelFunc040F_005A;
labelFunc040F_019F:
	endconv;
	message("\"Farewell.\"");
	say();
	return;
}


