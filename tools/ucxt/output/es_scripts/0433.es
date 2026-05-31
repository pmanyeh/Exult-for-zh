#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A7 0x8A7 ();
extern void Func092E 0x92E (var var0000);

void Func0433 object#(0x433) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0433_01A1;
	UI_show_npc_face(0xFFCD, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCD));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00B4])) goto labelFunc0433_004F;
	message("You see a sturdy-looking farmer's wife. She gives you a hospitable smile before returning to her chores.");
	say();
	gflags[0x00B4] = true;
	goto labelFunc0433_0059;
labelFunc0433_004F:
	message("\"What brings us the pleasure of having thee back on this day, ");
	message(var0000);
	message("?\" says Kelly.");
	say();
labelFunc0433_0059:
	converse attend labelFunc0433_0196;
	case "name" attend labelFunc0433_0075:
	message("\"I am called Kelly, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc0433_0075:
	case "job" attend labelFunc0433_0091:
	message("\"Mine husband Fred and I run the Farmer's Market.\"");
	say();
	UI_add_answer(["Fred", "Farmer's Market", "buy"]);
labelFunc0433_0091:
	case "Fred" attend labelFunc0433_00B7:
	message("\"My Fred is one of the most respected merchants in Britain. He sells the eggs and vegetables grown by Brownie and Mack, as well as exotic imported fruits.\"");
	say();
	UI_remove_answer("Fred");
	UI_add_answer(["eggs", "fruits and vegetables", "Brownie", "Mack"]);
labelFunc0433_00B7:
	case "Farmer's Market" attend labelFunc0433_00D7:
	message("\"The Farmer's Market is where most of Britain buys its food. Why even the people in Paws will come here to buy eggs and vegetables. Fred has never raised the price of anything since opening this market many years ago.\"");
	say();
	UI_remove_answer("Farmer's Market");
	UI_add_answer(["Britain", "Paws"]);
labelFunc0433_00D7:
	case "eggs" attend labelFunc0433_00EA:
	message("\"Farmer Mack's chickens lay plenty of eggs. It is a good thing the people here have such healthy appetites!\"");
	say();
	UI_remove_answer("eggs");
labelFunc0433_00EA:
	case "fruits and vegetables" attend labelFunc0433_00FD:
	message("\"We sell those mostly to older people. Thou dost know, I am sure, how children do not like to eat their vegetables. Some people do not want to keep a lot of fruit in their home as they are afraid of attracting fruit flies.\"");
	say();
	UI_remove_answer("fruits and vegetables");
labelFunc0433_00FD:
	case "Brownie" attend labelFunc0433_0110:
	message("\"Brownie is a good man. I do hope he runs for the mayorship again. If he does thou must be sure to vote for him.\"");
	say();
	UI_remove_answer("Brownie");
labelFunc0433_0110:
	case "Mack" attend labelFunc0433_0123:
	message("\"I do believe that poor old Mack has been cooped up with his chickens for too long. He is a good person. Do not be put off by the strange stories he doth tell. He rarely ever sleeps as he spends most of the night staring at the sky. Of course his rooster crows at dawn and no farmer can afford to sleep past the dawn. So his mind is a bit ragged.\"");
	say();
	UI_remove_answer("Mack");
labelFunc0433_0123:
	case "Britain" attend labelFunc0433_0136:
	message("\"Oh, in Britain they look for quality produce. I see the people who buy here look over every egg for cracks and every vegetable for any sign of spoilage.\"");
	say();
	UI_remove_answer("Britain");
labelFunc0433_0136:
	case "Paws" attend labelFunc0433_0149:
	message("\"The people of Paws are always short of money. Mine heart goes out to them. They are always looking to buy the least expensive items for it is all they can afford.\"");
	say();
	UI_remove_answer("Paws");
labelFunc0433_0149:
	case "buy" attend labelFunc0433_0188:
	if (!(!(var0002 == 0x0007))) goto labelFunc0433_0163;
	message("\"The market is now closed. Thou must return when we are open for business.\"");
	say();
	goto labelFunc0433_0181;
labelFunc0433_0163:
	message("\"Wouldst thou like to buy some eggs, fruits or vegetables? We have plenty of delicious fresh eggs here for thee. And our vegetables are sure to keep thee in good health.\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0433_017D;
	message("\"I am sure we have something here that will be to thy liking.\"");
	say();
	Func08A7();
	goto labelFunc0433_0181;
labelFunc0433_017D:
	message("\"Perhaps another time then.\"");
	say();
labelFunc0433_0181:
	UI_remove_answer("buy");
labelFunc0433_0188:
	case "bye" attend labelFunc0433_0193:
	goto labelFunc0433_0196;
labelFunc0433_0193:
	goto labelFunc0433_0059;
labelFunc0433_0196:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0433_01A1:
	if (!(event == 0x0000)) goto labelFunc0433_0228;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCD));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0433_0222;
	if (!(var0004 == 0x0001)) goto labelFunc0433_01E5;
	var0005 = "@Come to the Farmer's Market!@";
labelFunc0433_01E5:
	if (!(var0004 == 0x0002)) goto labelFunc0433_01F5;
	var0005 = "@The Market is open!@";
labelFunc0433_01F5:
	if (!(var0004 == 0x0003)) goto labelFunc0433_0205;
	var0005 = "@Vegetables! Meats!@";
labelFunc0433_0205:
	if (!(var0004 == 0x0004)) goto labelFunc0433_0215;
	var0005 = "@Come one, come all!@";
labelFunc0433_0215:
	UI_item_say(0xFFCD, var0005);
	goto labelFunc0433_0228;
labelFunc0433_0222:
	Func092E(0xFFCD);
labelFunc0433_0228:
	return;
}


