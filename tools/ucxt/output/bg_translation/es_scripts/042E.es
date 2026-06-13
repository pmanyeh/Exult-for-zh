#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func042E object#(0x42E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc042E_0305;
	UI_show_npc_face(0xFFD2, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD2));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0092]) goto labelFunc042E_004A;
	UI_add_answer("Cynthia said");
labelFunc042E_004A:
	if (!(!gflags[0x00AF])) goto labelFunc042E_005C;
	message("You see a sour-faced innkeeper who looks at you as if all of his problems were your fault.");
	say();
	gflags[0x00AF] = true;
	goto labelFunc042E_0066;
labelFunc042E_005C:
	message("\"What must I do for thee now, ");
	message(var0000);
	message("?\" asks James.");
	say();
labelFunc042E_0066:
	converse attend labelFunc042E_0300;
	case "name" attend labelFunc042E_007C:
	message("\"My name is James.\"");
	say();
	UI_remove_answer("name");
labelFunc042E_007C:
	case "job" attend labelFunc042E_0095:
	message("\"I am the proprietor of the inn.\"");
	say();
	UI_add_answer(["proprietor", "inn"]);
labelFunc042E_0095:
	case "proprietor" attend labelFunc042E_00B5:
	message("\"It is just another way of saying that I am the man who is the desk clerk. Which thou mayest think is an easy job although it is not, I can assure thee.\"");
	say();
	UI_remove_answer("proprietor");
	UI_add_answer(["desk clerk", "not easy"]);
labelFunc042E_00B5:
	case "inn" attend labelFunc042E_00C8:
	message("\"This place is called the Wayfarer's Inn. It has a long and substantial history in Britain. If thy grandparents ever came to town this is probably where they stayed.\"");
	say();
	UI_remove_answer("inn");
labelFunc042E_00C8:
	case "desk clerk" attend labelFunc042E_00E8:
	message("\"Of course, being desk clerk is not all I do. I must spend all day listening to people talk about their problems as if I am supposed to solve them!\"");
	say();
	UI_remove_answer("desk clerk");
	UI_add_answer(["listening", "solve"]);
labelFunc042E_00E8:
	case "listening" attend labelFunc042E_0101:
	message("\"That is correct, ");
	message(var0000);
	message(". So if thou dost have a problem, allow me the courtesy of not having to hear all about it. Now what was it that I was saying again?\"");
	say();
	UI_remove_answer("listening");
labelFunc042E_0101:
	case "solve" attend labelFunc042E_011B:
	message("\"Maybe solving people's problems is an easy task for other innkeepers, but, not only am I bad at it, I have mine own problems as well.\"");
	say();
	UI_remove_answer("solve");
	UI_add_answer("problems");
labelFunc042E_011B:
	case "problems" attend labelFunc042E_013B:
	message("\"I do not like my job! I never wanted to be an innkeeper, I just wanted to keep the place going after my father passed on. Now that I am married to Cynthia, I am more tied down than ever!\"");
	say();
	UI_remove_answer("problems");
	UI_add_answer(["innkeeper", "Cynthia"]);
labelFunc042E_013B:
	case "innkeeper" attend labelFunc042E_015B:
	message("\"Instead of being an innkeeper I always secretly wanted to be a pirate! When I was not sailing the seas I would be living in Buccaneer's Den.\"");
	say();
	UI_remove_answer("innkeeper");
	UI_add_answer(["pirate", "Buccaneer's Den"]);
labelFunc042E_015B:
	case "Buccaneer's Den" attend labelFunc042E_016E:
	message("\"As I understand it they have an excellent House of Games there as well as opulent baths. Or at least so I have heard from Gordon, the man who sells fish and chips.\"");
	say();
	UI_remove_answer("Buccaneer's Den");
labelFunc042E_016E:
	case "Cynthia" attend labelFunc042E_018E:
	message("\"Do not mistake my words, ");
	message(var0000);
	message(". I love Cynthia with all mine heart. But there are I times I feel I am too young to be married. Besides, I know I cannot be a good husband for her.\"");
	say();
	UI_remove_answer("Cynthia");
	UI_add_answer("good husband");
labelFunc042E_018E:
	case "pirate" attend labelFunc042E_01A1:
	message("\"Thou knowest for certain that few if any people would pour their troubles out to pirates. If I were a pirate I could get this bad foot replaced with a peg, too!\"");
	say();
	UI_remove_answer("pirate");
labelFunc042E_01A1:
	case "good husband" attend labelFunc042E_01C1:
	message("\"How can I make Cynthia happy on the pittance an innkeeper makes when all day long she is counting all that money in the mint? I know I cannot.\"");
	say();
	UI_remove_answer("good husband");
	UI_add_answer(["happy", "mint"]);
labelFunc042E_01C1:
	case "mint" attend labelFunc042E_01D4:
	message("\"I know the nature of the heart, my good friend. After being exposed to such large sums of money she shall begin to covet it. As I cannot provide it, she shall leave me to give her heart to a wealthy man. Perhaps a merchant or a nobleman. The thought of it makes my blood boil.\"");
	say();
	UI_remove_answer("mint");
labelFunc042E_01D4:
	case "not easy" attend labelFunc042E_01F4:
	message("\"When one is an innkeeper one must run around all day long. If anyone wants anything thou art the one who must take care of it for them!\"");
	say();
	UI_remove_answer("not easy");
	UI_add_answer(["run around", "room"]);
labelFunc042E_01F4:
	case "run around" attend labelFunc042E_0207:
	message("\"I spend so much time running around that I have gotten a bad foot.\"");
	say();
	UI_remove_answer("run around");
labelFunc042E_0207:
	case "happy" attend labelFunc042E_021A:
	message("\"Already I can sense she is worried about our marriage. I know that there is something wrong between us.\"");
	say();
	UI_remove_answer("happy");
labelFunc042E_021A:
	case "room" attend labelFunc042E_02DF:
	if (!(var0002 == 0x0007)) goto labelFunc042E_02CE;
	message("\"Oh, I suppose thou wouldst like a room now! There, that is just what I mean! It is ten gold pieces per person for a night. Thou dost want a room, dost thou not?\"");
	say();
	if (!Func090A()) goto labelFunc042E_02C7;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	enum();
labelFunc042E_0244:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc042E_025C;
	var0004 = (var0004 + 0x0001);
	goto labelFunc042E_0244;
labelFunc042E_025C:
	var0008 = (var0004 * 0x000A);
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 >= var0008)) goto labelFunc042E_02C0;
	var000A = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000A)) goto labelFunc042E_02A5;
	message("\"Thou art carrying too much to take the room key!\"");
	say();
	goto labelFunc042E_02BD;
labelFunc042E_02A5:
	message("\"Here is thy room key. It is only good until thou leavest the inn.\"");
	say();
	var000B = UI_remove_party_items(var0008, 0x0284, 0xFE99, 0xFE99, true);
labelFunc042E_02BD:
	goto labelFunc042E_02C4;
labelFunc042E_02C0:
	message("\"Thou dost not have enough gold to get a room here. Now I suppose thou shalt be telling me all about how such a sorry state befell thee. Well, I shall not listen to thee!\"");
	say();
labelFunc042E_02C4:
	goto labelFunc042E_02CB;
labelFunc042E_02C7:
	message("James wipes his brow. \"Phew! That was a close call!\"");
	say();
labelFunc042E_02CB:
	goto labelFunc042E_02D8;
labelFunc042E_02CE:
	message("\"Please, ");
	message(var0000);
	message(". Do allow me some time to myself! Presently I am not doing the business of the inn and I do wish to keep it that way. Thou must attend to the inn during business hours.\"");
	say();
labelFunc042E_02D8:
	UI_remove_answer("room");
labelFunc042E_02DF:
	case "Cynthia said" attend labelFunc042E_02F2:
	message("You repeat the words that Cynthia had said to you about him. A smile comes across his face. \"Aww, who wants to be a pirate anyway? I would hate that!\" With that he goes back to wiping the bar, but you notice that the smile is still there.");
	say();
	UI_remove_answer("Cynthia");
labelFunc042E_02F2:
	case "bye" attend labelFunc042E_02FD:
	goto labelFunc042E_0300;
labelFunc042E_02FD:
	goto labelFunc042E_0066;
labelFunc042E_0300:
	endconv;
	message("\"Oh, thou shalt just come back again wanting something else from me! I just know it!\"*");
	say();
labelFunc042E_0305:
	if (!(event == 0x0000)) goto labelFunc042E_0313;
	Func092E(0xFFD2);
labelFunc042E_0313:
	return;
}


