#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0444 object#(0x444) ()
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

	if (!(event == 0x0001)) goto labelFunc0444_01AC;
	UI_show_npc_face(0xFFBC, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0071]) goto labelFunc0444_0035;
	UI_add_answer("absent-minded");
labelFunc0444_0035:
	var0001 = UI_part_of_day();
	var0002 = UI_get_party_list();
	if (!(!gflags[0x00C5])) goto labelFunc0444_0055;
	message("You see an elderly man with good humor and a warm smile.");
	say();
	gflags[0x00C5] = true;
	goto labelFunc0444_0059;
labelFunc0444_0055:
	message("\"Yes, Avatar?\" Bennie asks with authority.");
	say();
labelFunc0444_0059:
	converse attend labelFunc0444_01A1;
	case "name" attend labelFunc0444_006F:
	message("\"All my friends call me Bennie.\"");
	say();
	UI_remove_answer("name");
labelFunc0444_006F:
	case "job" attend labelFunc0444_0088:
	message("\"I am the Head Servant at the castle. My job consists of keeping the other servants in line and serving the meals.\"");
	say();
	UI_add_answer(["Head Servant", "meals"]);
labelFunc0444_0088:
	case "Head Servant" attend labelFunc0444_009B:
	message("\"Yes, I have been Head Servant for many years. Mine entire family works for Lord British. My son is the king's gentleman's gentleman. My daughter is the Royal Chambermaid. My wife is Head Cook. We are pleased to work for Lord British.\"");
	say();
	UI_remove_answer("Head Servant");
labelFunc0444_009B:
	case "meals" attend labelFunc0444_0180:
	message("\"My wife, Boots, is the head cook. Her specialty is roast beef. She makes wonderful pastries, too. Enough of those will give thee a very un-Avatar-like figure!");
	say();
	if (!((var0001 == 0x0003) || (var0001 == 0x0006))) goto labelFunc0444_0175;
	message("\"Wouldst thou like to order a meal?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0444_016E;
	if (!gflags[0x00D8]) goto labelFunc0444_00DC;
	var0004 = UI_get_timer(0x0001);
	goto labelFunc0444_00E6;
labelFunc0444_00DC:
	gflags[0x00D8] = true;
	var0004 = 0x0019;
labelFunc0444_00E6:
	if (!(var0004 >= 0x0018)) goto labelFunc0444_0161;
	message("\"For thee, it is free!\"~~Bennie serves you and your party a delicious meal of beef and pastry.");
	say();
	var0002 = UI_get_party_list();
	var0005 = 0x0000;
	enum();
labelFunc0444_0102:
	for (var0008 in var0002 with var0006 to var0007) attend labelFunc0444_011A;
	var0005 = (var0005 + 0x0001);
	goto labelFunc0444_0102;
labelFunc0444_011A:
	var0009 = UI_add_party_items(var0005, 0x0179, 0xFE99, 0x0009, true);
	var000A = UI_add_party_items(var0005, 0x0179, 0xFE99, 0x0006, true);
	if (!(var000A || var0009)) goto labelFunc0444_015A;
	UI_set_timer(0x0001);
	message("\"Return tomorrow and thou canst have another free meal.\"");
	say();
	goto labelFunc0444_015E;
labelFunc0444_015A:
	message("\"Thou art carrying too much to take the beef and pastry!\"");
	say();
labelFunc0444_015E:
	goto labelFunc0444_016B;
labelFunc0444_0161:
	message("\"I am sorry, ");
	message(var0000);
	message(", but I am allowed to serve thee only once per day. Return tomorrow for a meal.\"");
	say();
labelFunc0444_016B:
	goto labelFunc0444_0172;
labelFunc0444_016E:
	message("\"Oh. Well, thou must return when thou art hungry.\"");
	say();
labelFunc0444_0172:
	goto labelFunc0444_0179;
labelFunc0444_0175:
	message("\"Come to the dining room during breakfast or dinner and I will be most honored to serve thee!\"");
	say();
labelFunc0444_0179:
	UI_remove_answer("meals");
labelFunc0444_0180:
	case "absent-minded" attend labelFunc0444_0193:
	message("\"Yes, I suppose I am. I am also becoming a little hard-of-hearing. When thou hast seen as many years as I have, one's faculties are no longer perfect.\"");
	say();
	UI_remove_answer("absent-minded");
labelFunc0444_0193:
	case "bye" attend labelFunc0444_019E:
	goto labelFunc0444_01A1;
labelFunc0444_019E:
	goto labelFunc0444_0059;
labelFunc0444_01A1:
	endconv;
	message("\"Safe journeys, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0444_01AC:
	if (!(event == 0x0000)) goto labelFunc0444_01BA;
	Func092E(0xFFBC);
labelFunc0444_01BA:
	return;
}


