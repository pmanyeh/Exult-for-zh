#game "blackgate"
// externs
extern void Func092F 0x92F (var var0000);

void Func0447 object#(0x447) ()
{
	if (!(event == 0x0001)) goto labelFunc0447_018B;
	UI_show_npc_face(0xFFB9, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00C8])) goto labelFunc0447_0038;
	message("A winged gargoyle looks at you with interest and obvious intelligence.");
	say();
	message("\"To welcome thee to Britain, Avatar!\"");
	say();
	gflags[0x00C8] = true;
	goto labelFunc0447_003C;
labelFunc0447_0038:
	message("\"To greet thee again, Avatar!\" Inwisloklem smiles.");
	say();
labelFunc0447_003C:
	converse attend labelFunc0447_0186;
	case "name" attend labelFunc0447_0059:
	message("\"To be called Inwisloklem.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Inwisloklem");
labelFunc0447_0059:
	case "Inwisloklem" attend labelFunc0447_006C:
	message("\"To mean `interpreter' in your language.\"");
	say();
	UI_remove_answer("Inwisloklem");
labelFunc0447_006C:
	case "job" attend labelFunc0447_0085:
	message("\"To be, indeed, an interpreter in my homeland. To be now on the Great Council to serve our most noble ruler, Lord British. To be honored as one of the two gargoyles on the Council.\"");
	say();
	UI_add_answer(["gargoyles", "Great Council"]);
labelFunc0447_0085:
	case "gargoyles" attend labelFunc0447_00A5:
	message("\"To be one of the surviving gargoyles, and to preserve our heritage is my life work. To tell you our race emigrated to Britannia many, many years ago. To have settled on the island known as Terfin.\"");
	say();
	UI_add_answer(["surviving", "Terfin"]);
	UI_remove_answer("gargoyles");
labelFunc0447_00A5:
	case "surviving" attend labelFunc0447_00B8:
	message("\"To be so many of my people killed two hundred years ago in the War of the False Prophet. To be the war that you ended by bringing peace between our races.\"");
	say();
	UI_remove_answer("surviving");
labelFunc0447_00B8:
	case "Terfin" attend labelFunc0447_00D8:
	message("\"To be a lonely place. To be desolate. To be not what humans call `homey'. To desire to establish a new way of life for gargoyles in Britannia, and to eliminate the hatred and misunderstanding of our race in humans. To know that ignorance breeds bigotry. To be one of those who are correcting this.\"");
	say();
	UI_add_answer(["way of life", "those"]);
	UI_remove_answer("Terfin");
labelFunc0447_00D8:
	case "way of life" attend labelFunc0447_00EB:
	message("\"To desire a world where humans and gargoyles could live together in peace as equals in Britannian society.\"");
	say();
	UI_remove_answer("way of life");
labelFunc0447_00EB:
	case "those" attend labelFunc0447_0105:
	message("\"To be called The Fellowship.\"");
	say();
	UI_add_answer("Fellowship");
	UI_remove_answer("those");
labelFunc0447_0105:
	case "Fellowship" attend labelFunc0447_0118:
	message("\"To be dedicated to promoting good will and trust in the land. To be thinking of joining the group soon!\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0447_0118:
	case "Great Council" attend labelFunc0447_0138:
	message("\"To create the laws of the land. To inform you that my colleague, Miranda, can tell you more of what we are doing now. To be unfortunate that most of the Council is away now.\"");
	say();
	UI_add_answer(["Miranda", "away"]);
	UI_remove_answer("Great Council");
labelFunc0447_0138:
	case "Miranda" attend labelFunc0447_014B:
	message("\"To inform you that Miranda is an intelligent woman who has great concern for the well being of all of Britannia's citizens. To be one of Lord British's most trusted advisors.\"");
	say();
	UI_remove_answer("Miranda");
labelFunc0447_014B:
	case "away" attend labelFunc0447_0165:
	message("\"To be on holiday at the moment. To have only Miranda and myself present to enact this new law.\"");
	say();
	UI_add_answer("law");
	UI_remove_answer("away");
labelFunc0447_0165:
	case "law" attend labelFunc0447_0178:
	message("\"To tell you to ask Miranda about it, for she knows more than I.\"");
	say();
	UI_remove_answer("law");
labelFunc0447_0178:
	case "bye" attend labelFunc0447_0183:
	goto labelFunc0447_0186;
labelFunc0447_0183:
	goto labelFunc0447_003C;
labelFunc0447_0186:
	endconv;
	message("\"To say farewell.\"*");
	say();
labelFunc0447_018B:
	if (!(event == 0x0000)) goto labelFunc0447_0199;
	Func092F(0xFFB9);
labelFunc0447_0199:
	return;
}


