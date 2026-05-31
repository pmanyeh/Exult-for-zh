#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0427 object#(0x427) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0427_0101;
	UI_show_npc_face(0xFFD9, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0427_003F;
	var0001 = Func08F7(0xFFCA);
	if (!var0001) goto labelFunc0427_003A;
	message("Neno is busy performing with The Avatars and cannot speak at the moment.*");
	say();
	abort;
	goto labelFunc0427_003F;
labelFunc0427_003A:
	message("\"I must get to my performance at The Blue Boar! The Avatars are playing tonight!\"*");
	say();
	abort;
labelFunc0427_003F:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A8])) goto labelFunc0427_0061;
	message("You see a handsome and flamboyant musician.");
	say();
	gflags[0x00A8] = true;
	goto labelFunc0427_0065;
labelFunc0427_0061:
	message("\"Hello,\" Neno says.");
	say();
labelFunc0427_0065:
	converse attend labelFunc0427_00FC;
	case "name" attend labelFunc0427_007B:
	message("The musician nods at you. \"I am Neno.\"");
	say();
	UI_remove_answer("name");
labelFunc0427_007B:
	case "job" attend labelFunc0427_0094:
	message("\"I am studying to be the greatest bard that Britannia has ever known. I probably already -am- the greatest bard Britannia has ever known.\" You note that Neno is not at all modest.");
	say();
	UI_add_answer(["bard", "studying"]);
labelFunc0427_0094:
	case "bard" attend labelFunc0427_00AE:
	message("\"It is a great honor to be a bard. Thou art someone who gives pleasure to other people, while at the same time fulfilling a creative urge within thyself. It is truly magical. I know this from mine experience playing with The Avatars.\"");
	say();
	UI_remove_answer("bard");
	UI_add_answer("The Avatars");
labelFunc0427_00AE:
	case "studying" attend labelFunc0427_00C8:
	message("\"The Music Hall provides a great environment for study. Judith is a wonderful teacher, and the opportunities here are of the highest quality. One day I shall travel the world and entertain the common folk and nobles alike.\"");
	say();
	UI_remove_answer("studying");
	UI_add_answer("entertain");
labelFunc0427_00C8:
	case "entertain" attend labelFunc0427_00DB:
	message("\"It is my dream to be famous throughout the land. I shall tour the country every year, and play in the largest pubs in every town.\" He winks at you. \"I shall be assured of wooing the women, dost thou not think?\"");
	say();
	UI_remove_answer("entertain");
labelFunc0427_00DB:
	case "The Avatars" attend labelFunc0427_00EE:
	message("\"'Tis a singing group I play with. We play at The Blue Boar every evening. Please, come listen to us.\" Neno leans in to whisper, \"But I plan to begin performing alone very soon. I am obviously the most talented member of the quartet.\"");
	say();
	UI_remove_answer("The Avatars");
labelFunc0427_00EE:
	case "bye" attend labelFunc0427_00F9:
	goto labelFunc0427_00FC;
labelFunc0427_00F9:
	goto labelFunc0427_0065;
labelFunc0427_00FC:
	endconv;
	message("\"Farewell! Thou must watch the postings for our performance dates!\"*");
	say();
labelFunc0427_0101:
	if (!(event == 0x0000)) goto labelFunc0427_010F;
	Func092E(0xFFD9);
labelFunc0427_010F:
	return;
}


