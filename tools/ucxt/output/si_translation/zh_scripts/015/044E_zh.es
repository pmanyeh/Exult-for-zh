#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);
extern void Func0867 0x867 ();
extern void Func0866 0x866 ();
extern void Func0868 0x868 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097A 0x97A (var var0000);

void Func044E object#(0x44E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	if (!gflags[0x0048]) goto labelFunc044E_0012;
	var0000 = "Knight";
labelFunc044E_0012:
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(UI_get_schedule_type(0xFFB2) == 0x000D)) goto labelFunc044E_0031;
	var0002 = true;
labelFunc044E_0031:
	if (!(event == 0x0001)) goto labelFunc044E_005F;
	UI_item_say(0xFE9C, "@Hail there!@");
	0xFFB2->Func07D1();
	Func097F(0xFFB2, "@Greetings.@", 0x0003);
	UI_set_schedule_type(0xFFB2, 0x0003);
labelFunc044E_005F:
	if (!(event == 0x0009)) goto labelFunc044E_02A2;
	UI_run_schedule(0xFFB2);
	UI_clear_item_say(0xFFB2);
	UI_show_npc_face0(0xFFB2, 0x0000);
	if (!var0001) goto labelFunc044E_0092;
	message("\"What dost thou wish of me, ");
	message(var0000);
	message("?\"");
	say();
	goto labelFunc044E_00A0;
labelFunc044E_0092:
	message("\"I am Standarr the Armourer. What dost thou wish of me?\"");
	say();
	UI_set_item_flag(0xFFB2, 0x001C);
labelFunc044E_00A0:
	if (!(gflags[0x009F] && (!gflags[0x0294]))) goto labelFunc044E_00B2;
	UI_add_answer("strange breastplate");
labelFunc044E_00B2:
	if (!gflags[0x008D]) goto labelFunc044E_00BF;
	UI_add_answer("Brunt");
labelFunc044E_00BF:
	if (!gflags[0x00BA]) goto labelFunc044E_00CC;
	UI_add_answer("Quests of Courage");
labelFunc044E_00CC:
	if (!gflags[0x0038]) goto labelFunc044E_00D9;
	UI_add_answer("Marsten");
labelFunc044E_00D9:
	if (!gflags[0x002C]) goto labelFunc044E_00E6;
	UI_add_answer("Helm of Monitor");
labelFunc044E_00E6:
	if (!gflags[0x0044]) goto labelFunc044E_00F3;
	UI_add_answer("Simon");
labelFunc044E_00F3:
	if (!gflags[0x00CC]) goto labelFunc044E_0100;
	UI_add_answer("Pomdirgun");
labelFunc044E_0100:
	UI_add_answer(["buy", "bye"]);
labelFunc044E_010D:
	converse attend labelFunc044E_02A1;
	case "Pomdirgun" attend labelFunc044E_0123:
	UI_add_answer("Pomdirgun");
	message("\"I envy thee the chance to kill Pomdirgun. I hope thou didst make him suffer!\"");
	say();
labelFunc044E_0123:
	case "Helm of Monitor" attend labelFunc044E_0136:
	UI_remove_answer("Helm of Monitor");
	message("\"Thanks to thee for liberating the Helm of Monitor from the Goblins. Thou hast truly earned the title of Champion Knight.\"");
	say();
labelFunc044E_0136:
	case "Simon" attend labelFunc044E_0149:
	UI_remove_answer("Simon");
	message("\"Simon was a Goblin spy! I would never have suspected...\"");
	say();
labelFunc044E_0149:
	case "Marsten" attend labelFunc044E_015C:
	UI_remove_answer("Marsten");
	message("\"Before he was arrested I worked for Marsten. He was, after all, acting Lord of Monitor. I created a new type of weapon for him. A highly combustible powder that exploded when it came in contact with fire. Thou shouldst keep thine eye open for it. It would be a disaster if it ever fell into the hands of the Goblins.\"");
	say();
labelFunc044E_015C:
	case "Quests of Courage" attend labelFunc044E_016F:
	UI_remove_answer("Quests of Courage");
	message("\"We Knights on occasion go on what we call Quests of Courage. Many times they involve going into the woods on Goblin raids. Other times they involve entering the depths of a dungeon called Furnace. That place is filled with a withering heat and many monsters live there. Recently, a Knight and good friend of ours named Pendar went off on a quest to Furnace in search of a treasure of which he had heard rumors. He hath not returned, and we worry about him and wonder if we shall ever see him again. Perhaps, he is spending his\ttreasure! Ha!\"");
	say();
labelFunc044E_016F:
	case "Brunt" attend labelFunc044E_0182:
	UI_remove_answer("Brunt");
	message("\"Let me tell thee, when in the trade of blacksmith, one doth develop his muscles. I am no weakling, I can assure thee. But this fellow Brunt who did accompany the sage Batlin through town could probably hoist me with his weak arm. Not the brightest of fellows, mind thee. But strong as an ox! He bested me in the tournament, but not by skill. By sheer muscle.\"");
	say();
labelFunc044E_0182:
	case "buy" attend labelFunc044E_0219:
	if (!(UI_get_schedule_type(0xFFB2) == 0x000D)) goto labelFunc044E_0215;
	message("\"Wouldst thou be interested in buying or selling?\"");
	say();
	var0003 = Func0956(["nothing", "buying", "selling"]);
	if (!(var0003 == "buying")) goto labelFunc044E_01EC;
	message("\"Wouldst thou care to buy weapons or armour?\"");
	say();
	var0004 = Func0956(["weapons", "armour"]);
	if (!(var0004 == "weapons")) goto labelFunc044E_01E2;
	Func0867();
	UI_add_answer("buy weapons");
	goto labelFunc044E_01EC;
labelFunc044E_01E2:
	Func0866();
	UI_add_answer("buy armour");
labelFunc044E_01EC:
	if (!(var0003 == "selling")) goto labelFunc044E_0204;
	message("\"I buy only armour, friend, and I do not haggle on the price.\"");
	say();
	Func0868();
	UI_add_answer("sell armour");
labelFunc044E_0204:
	if (!(var0003 == "nothing")) goto labelFunc044E_0212;
	message("\"Another time, perhaps.\"");
	say();
labelFunc044E_0212:
	goto labelFunc044E_0219;
labelFunc044E_0215:
	message("\"Return when my shop is open, and we can talk business.\"");
	say();
labelFunc044E_0219:
	case "buy weapons" attend labelFunc044E_0224:
	Func0867();
labelFunc044E_0224:
	case "buy armour" attend labelFunc044E_022F:
	Func0866();
labelFunc044E_022F:
	case "sell armour" attend labelFunc044E_023A:
	Func0868();
labelFunc044E_023A:
	case "strange breastplate" attend labelFunc044E_0273:
	UI_remove_answer("strange breastplate");
	var0005 = Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000);
	if (!var0005) goto labelFunc044E_026F;
	message("\"I recognize this!  This is the ornamental breastplate that I made for Kylista, priestess of Fawn.\"");
	say();
	gflags[0x0294] = true;
	goto labelFunc044E_0273;
labelFunc044E_026F:
	message("\"I am familiar with the making of many types of weapon and armour. A pity thou dost not have it with thee. Without looking at it, I can tell thee no more.\"");
	say();
labelFunc044E_0273:
	case "bye" attend labelFunc044E_029E:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Stay well!@", 0x0000);
	Func097F(0xFFB2, "@Farewell!@", 0x0003);
	goto labelFunc044E_02A1;
labelFunc044E_029E:
	goto labelFunc044E_010D;
labelFunc044E_02A1:
	endconv;
labelFunc044E_02A2:
	if (!(event == 0x0000)) goto labelFunc044E_0310;
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!var0002) goto labelFunc044E_030A;
	if (!(var0006 == 0x0001)) goto labelFunc044E_02CD;
	var0007 = "@Armour?@";
labelFunc044E_02CD:
	if (!(var0006 == 0x0002)) goto labelFunc044E_02DD;
	var0007 = "@We sell the best armour here!@";
labelFunc044E_02DD:
	if (!(var0006 == 0x0003)) goto labelFunc044E_02ED;
	var0007 = "@Finest goods here!@";
labelFunc044E_02ED:
	if (!(var0006 == 0x0004)) goto labelFunc044E_02FD;
	var0007 = "@Best weapons in Monitor!@";
labelFunc044E_02FD:
	UI_item_say(0xFFB2, var0007);
	goto labelFunc044E_0310;
labelFunc044E_030A:
	Func097A(0xFFB2);
labelFunc044E_0310:
	return;
}


