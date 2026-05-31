#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func08A0 0x8A0 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func042F object#(0x42F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc042F_01D0;
	UI_show_npc_face(0xFFD1, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFD1));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x007B]) goto labelFunc042F_0044;
	UI_add_answer("Charles");
labelFunc042F_0044:
	if (!(!gflags[0x00B0])) goto labelFunc042F_0056;
	message("This young, lovely tavern wench is sexy and sweet.");
	say();
	gflags[0x00B0] = true;
	goto labelFunc042F_005A;
labelFunc042F_0056:
	message("\"Hello again!\" bubbly Jeanette says.");
	say();
labelFunc042F_005A:
	converse attend labelFunc042F_01CB;
	case "name" attend labelFunc042F_0070:
	message("\"Jeanette, at thy service!\"");
	say();
	UI_remove_answer("name");
labelFunc042F_0070:
	case "job" attend labelFunc042F_00E1:
	message("\"I work for Lucy at the Blue Boar. I serve food and drinks.");
	say();
	if (!(var0001 == 0x0017)) goto labelFunc042F_00DD;
	message("\"If there is anything thou wouldst like, please say so! And, er, I shall give thee a discount if thou dost buy from me!\"");
	say();
	var0002 = Func08F7(0xFFFC);
	if (!var0002) goto labelFunc042F_00CA;
	message("\"Why, Sir Dupre! How good to see thee again!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Hello milady! I thought I might re-sample The Blue Boar's fine beverages!\"*");
	say();
	UI_show_npc_face(0xFFD1, 0x0000);
	message("\"Any time, milord! Any time!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFD1, 0x0000);
labelFunc042F_00CA:
	UI_add_answer(["food", "drink", "buy"]);
	goto labelFunc042F_00E1;
labelFunc042F_00DD:
	message("\"I work during the day and evening hours. Thou shouldst come by the pub then and we shall talk more!\"");
	say();
labelFunc042F_00E1:
	case "food" attend labelFunc042F_00FB:
	message("\"Lucy is a good cook. I recommend everything. Especially Silverleaf.\"");
	say();
	UI_add_answer("Silverleaf");
	UI_remove_answer("food");
labelFunc042F_00FB:
	case "Silverleaf" attend labelFunc042F_010E:
	message("\"Wonderful dish. Try it!\"");
	say();
	UI_remove_answer("Silverleaf");
labelFunc042F_010E:
	case "drink" attend labelFunc042F_0121:
	message("\"Thou dost look like thou dost need a good drink!\"");
	say();
	UI_remove_answer("drink");
labelFunc042F_0121:
	case "buy" attend labelFunc042F_012C:
	Func08A0();
labelFunc042F_012C:
	case "Charles" attend labelFunc042F_0150:
	message("\"He spoke of me, did he? Well, he may think again! I cannot bring myself to socialize with the upper class. Those bourgeoisie rich men are obnoxious and egotistical. Besides, I am in love with another.\"");
	say();
	gflags[0x007D] = true;
	UI_remove_answer("Charles");
	UI_add_answer(["upper class", "another"]);
labelFunc042F_0150:
	case "upper class" attend labelFunc042F_0163:
	message("\"They are all alike. They work in castles and have piles of gold and can have any woman they want! On the other hand, a humble merchant is the perfect man.\"");
	say();
	UI_remove_answer("upper class");
labelFunc042F_0163:
	case "another" attend labelFunc042F_01BD:
	message("\"'Tis Willy the Baker! But he does not know it yet!\" she giggles.");
	say();
	gflags[0x0085] = true;
	var0003 = Func08F7(0xFFDB);
	if (!var0003) goto labelFunc042F_01A4;
	UI_show_npc_face(0xFFDB, 0x0000);
	message("\"A moment, Jeanette! Thou hast it all wrong! Charles is a -servant-! Thou art an ignoramus! Charles is not 'upper class'! He is as working class as thee! 'Tis Willy who is the rich merchant! If thou dost ask me, 'tis Willy who is obnoxious and egotistical. Charles is a dream!\"");
	say();
	UI_remove_npc_face(0xFFDB);
	UI_show_npc_face(0xFFD1, 0x0000);
	goto labelFunc042F_01A8;
labelFunc042F_01A4:
	message("You point out to Jeanette that Charles is a servant.");
	say();
labelFunc042F_01A8:
	message("Jeanette thinks about what was said. \"Thou art right! I cannot believe I have been so blind! Oh, Charles! I can actually consider Charles! And he is... so handsome!\" Jeanette squeals with delight. \"I shall have to flirt with him in earnest next time he is in the pub!\"");
	say();
	gflags[0x007E] = true;
	Func0911(0x0014);
	UI_remove_answer("another");
labelFunc042F_01BD:
	case "bye" attend labelFunc042F_01C8:
	goto labelFunc042F_01CB;
labelFunc042F_01C8:
	goto labelFunc042F_005A;
labelFunc042F_01CB:
	endconv;
	message("\"Farewell!\"*");
	say();
labelFunc042F_01D0:
	if (!(event == 0x0000)) goto labelFunc042F_01DE;
	Func092E(0xFFD1);
labelFunc042F_01DE:
	return;
}


