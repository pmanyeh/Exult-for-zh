#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();

void Func04D2 object#(0x4D2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D2_0221;
	UI_show_npc_face(0xFF2E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x028F])) goto labelFunc04D2_0044;
	message("You see a short woman with a distracted look on her face.");
	say();
	gflags[0x028F] = true;
	goto labelFunc04D2_0048;
labelFunc04D2_0044:
	message("\"What is thy concern?\"");
	say();
labelFunc04D2_0048:
	converse attend labelFunc04D2_021C;
	case "name" attend labelFunc04D2_005E:
	message("Breaking from her work, the woman turns to look at you long enough to respond, \"My name is Liana.\"");
	say();
	UI_remove_answer("name");
labelFunc04D2_005E:
	case "job" attend labelFunc04D2_0077:
	message("\"I am the Mayor's clerk. I am responsible for keeping track of official records and documents in Vesper.\"");
	say();
	UI_add_answer(["Vesper", "mayor"]);
labelFunc04D2_0077:
	case "Vesper" attend labelFunc04D2_0097:
	message("\"I like the town, but 'tis so far from Britain that it attracts some truly... unusual people.\"");
	say();
	UI_add_answer(["people", "unusual"]);
	UI_remove_answer("Vesper");
labelFunc04D2_0097:
	case "mayor" attend labelFunc04D2_00AA:
	message("\"I respect Auston in an unofficial capacity. But,\" she adds, raising her eyebrows, \"as a mayor, he is far too spineless. He is afraid of taking sides on any issue. I do not think he should have volunteered for the election.\"");
	say();
	UI_remove_answer("mayor");
labelFunc04D2_00AA:
	case "unusual" attend labelFunc04D2_00D3:
	message("\"Well, there are a couple of strange ones: Mara and Yongi. And there is Blorn -- he is a mean one, and... well... of course, there is Eldroth. And,\" she says with a shudder, \"the gargoyles.\"");
	say();
	UI_add_answer(["Mara", "Yongi", "Blorn", "Eldroth", "gargoyles"]);
	UI_remove_answer("unusual");
labelFunc04D2_00D3:
	case "Mara" attend labelFunc04D2_0101:
	var0003 = UI_is_dead(UI_get_npc_object(0xFF34));
	if (!var0003) goto labelFunc04D2_00F6;
	message("\"I feel bad about the things I said now that she is gone. Too bad she was killed in that bar fight.\"");
	say();
	goto labelFunc04D2_00FA;
labelFunc04D2_00F6:
	message("\"Mara? She needs to learn how to act like a woman. Her manly attitude doth not fool anyone.\"");
	say();
labelFunc04D2_00FA:
	UI_remove_answer("Mara");
labelFunc04D2_0101:
	case "Yongi" attend labelFunc04D2_0114:
	message("\"Yongi is nothing more than a drunk. The only reason he opened a tavern was to have an excuse to purchase large amounts of alcohol at wholesale prices. And do not\task him about the gargoyles unless thou dost want him to talk thine ear off. He hates them almost as much as Blorn does!\"");
	say();
	UI_remove_answer("Yongi");
labelFunc04D2_0114:
	case "Eldroth" attend labelFunc04D2_0127:
	message("\"He is nice, I suppose, but he is also a doddering old fool. I do not think he hath had a brain for more than a decade.\"");
	say();
	UI_remove_answer("Eldroth");
labelFunc04D2_0127:
	case "Blorn" attend labelFunc04D2_0141:
	message("\"There is a troublemaker and thief if I have ever seen one. He needs to think about leaving town -- quickly, if he knows what is best for him. There is one thing I like about him, though -- he hates the gargoyles more than anyone!\"");
	say();
	UI_add_answer("gargoyles");
	UI_remove_answer("Blorn");
labelFunc04D2_0141:
	case "gargoyles" attend labelFunc04D2_017D:
	message("\"Now there is a disgusting creature for thee. I think they were better named back when we called them daemons!\"");
	say();
	if (!(!var0002)) goto labelFunc04D2_0176;
	var0004 = UI_add_party_items(0x0001, 0x031D, 0x0002, 0xFE99, true);
	if (!var0004) goto labelFunc04D2_0176;
	message("\"In fact...\" She hands you a piece of paper.");
	say();
	var0002 = true;
labelFunc04D2_0176:
	UI_remove_answer("gargoyles");
labelFunc04D2_017D:
	case "people" attend labelFunc04D2_01A0:
	message("\"Well, there are Cador, Yvella, and Zaksam -- those are the\tnormal ones.\"");
	say();
	UI_add_answer(["Cador", "Yvella", "Zaksam"]);
	UI_remove_answer("people");
labelFunc04D2_01A0:
	case "Zaksam" attend labelFunc04D2_01B3:
	message("\"He is the trainer. Quite a good fighter from what I hear.\"");
	say();
	UI_remove_answer("Zaksam");
labelFunc04D2_01B3:
	case "Cador" attend labelFunc04D2_01E8:
	var0005 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0005) goto labelFunc04D2_01DD;
	message("\"'Tis too bad he is dead. I have heard many compliment his abilities as a leader at the mines.\"");
	say();
	UI_add_answer("dead");
	goto labelFunc04D2_01E8;
labelFunc04D2_01DD:
	message("\"Cador is the head of the Britannian Mining Company branch here in Vesper.\"");
	say();
	UI_remove_answer("Cador");
labelFunc04D2_01E8:
	case "dead" attend labelFunc04D2_01FB:
	message("\"He was killed in a brutal slaughter in Yongi's tavern. No one really knows what happened, but I suppose that is how many people meet their death when drinking.\" She shrugs.");
	say();
	UI_remove_answer("dead");
labelFunc04D2_01FB:
	case "Yvella" attend labelFunc04D2_020E:
	message("\"She is Cador's wife.\"");
	say();
	UI_remove_answer("Yvella");
labelFunc04D2_020E:
	case "bye" attend labelFunc04D2_0219:
	goto labelFunc04D2_021C;
labelFunc04D2_0219:
	goto labelFunc04D2_0048;
labelFunc04D2_021C:
	endconv;
	message("She nods at you as she returns to her business.*");
	say();
labelFunc04D2_0221:
	if (!(event == 0x0000)) goto labelFunc04D2_022A;
	abort;
labelFunc04D2_022A:
	return;
}


