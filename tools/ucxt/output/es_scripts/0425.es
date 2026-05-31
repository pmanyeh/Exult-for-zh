#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B7 0x8B7 ();
extern void Func092E 0x92E (var var0000);

void Func0425 object#(0x425) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0425_02BA;
	UI_show_npc_face(0xFFDB, 0x0000);
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFDB));
	var0004 = Func0909();
	if (!gflags[0x0083]) goto labelFunc0425_0045;
	var0005 = var0000;
labelFunc0425_0045:
	if (!gflags[0x0084]) goto labelFunc0425_0051;
	var0005 = var0001;
labelFunc0425_0051:
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0003 == 0x0017)) goto labelFunc0425_007B;
	UI_add_answer(["drink", "food", "buy"]);
labelFunc0425_007B:
	if (!(!gflags[0x00A6])) goto labelFunc0425_011D;
	message("You see an attractive woman in her fifties. She has a warm smile. \"Welcome! Who art thou, stranger?\"");
	say();
	var0006 = Func090B([var0000, var0001]);
	if (!(var0006 == var0000)) goto labelFunc0425_00B3;
	message("\"Well, hello, ");
	message(var0000);
	message(".\"");
	say();
	gflags[0x0083] = true;
	var0005 = var0000;
labelFunc0425_00B3:
	if (!(var0006 == var0001)) goto labelFunc0425_0116;
	if (!(var0003 == 0x0017)) goto labelFunc0425_0108;
	message("\"Whoa! Hey everyone! This here is the Avatar!\"");
	say();
	message("Everyone in the Blue Boar laughs.");
	say();
	message("\"And I'd bet thou dost need a drink, right?\"");
	say();
	gflags[0x0084] = true;
	var0007 = Func08F7(0xFFFC);
	if (!var0007) goto labelFunc0425_0105;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Damn! How did she know?\"");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFDB, 0x0000);
labelFunc0425_0105:
	goto labelFunc0425_0110;
labelFunc0425_0108:
	message("\"Oh, really?\" she says in mock surprise. \"Why, I have always wanted to meet the Avatar!\"");
	say();
	gflags[0x0084] = true;
labelFunc0425_0110:
	var0005 = var0001;
labelFunc0425_0116:
	gflags[0x00A6] = true;
	goto labelFunc0425_0146;
labelFunc0425_011D:
	if (!((var0002 < 0x0001) || (var0002 > 0x0002))) goto labelFunc0425_013C;
	message("\"What will it be, ");
	message(var0005);
	message("?\" Lucy asks.");
	say();
	goto labelFunc0425_0146;
labelFunc0425_013C:
	message("\"What can I do for thee, ");
	message(var0005);
	message("?\" Lucy asks.");
	say();
labelFunc0425_0146:
	converse attend labelFunc0425_02B5;
	case "name" attend labelFunc0425_015C:
	message("\"I'm Lucy!\"");
	say();
	UI_remove_answer("name");
labelFunc0425_015C:
	case "job" attend labelFunc0425_01C0:
	message("\"I run The Blue Boar. Oldest tavern in Britannia.\"");
	say();
	if (!(var0003 == 0x0017)) goto labelFunc0425_01BC;
	message("\"If thou dost want anything to eat or drink, just say so!\"");
	say();
	UI_add_answer("Blue Boar");
	var0007 = Func08F7(0xFFFC);
	if (!var0007) goto labelFunc0425_01B9;
	message("She addresses Dupre. \"How about thou, handsome? Want something to eat?\" She bats her eyelashes.*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"My dear, thou wouldst make any man hungry!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFDB, 0x0000);
	message("\"I like thy friends, ");
	message(var0005);
	message(".\"");
	say();
labelFunc0425_01B9:
	goto labelFunc0425_01C0;
labelFunc0425_01BC:
	message("\"I shall be happy to serve thee something if thou dost come to the pub during open hours!\"");
	say();
labelFunc0425_01C0:
	case "Blue Boar" attend labelFunc0425_01E6:
	message("\"Smashing place for a revel! It hath been here for ages! I inherited it from my grandfather. I enjoy it because I love to cook. And eat.\" She laughs. \"And drink!\" She laughs again.~~\"But mostly I like it because I meet so many interesting people. Just like thee, ");
	message(var0005);
	message("!\"");
	say();
	UI_remove_answer("Blue Boar");
	UI_add_answer(["revel", "people"]);
labelFunc0425_01E6:
	case "revel" attend labelFunc0425_021D:
	message("\"Thou dost look like the kind of person who doth enjoy a fair bit of revelry!");
	say();
	if (!(!(var0002 == 0x0007))) goto labelFunc0425_020B;
	message("\"Come back to the pub in the evening to hear our house band, The Avatars!\"");
	say();
	UI_add_answer("The Avatars");
	goto labelFunc0425_020F;
labelFunc0425_020B:
	message("\"Our house band The Avatars is performing in the other room!\"");
	say();
labelFunc0425_020F:
	UI_remove_answer("revel");
	UI_add_answer("revelry");
labelFunc0425_021D:
	case "revelry" attend labelFunc0425_0230:
	message("Lucy laughs. \"Revelry! Singing! Dancing! Eating! Drinking! All in a time and place where one may stop and enjoy life! I can see it hath been too long since thou hast sampled the simple pleasures of life in Britannia!\"");
	say();
	UI_remove_answer("revelry");
labelFunc0425_0230:
	case "The Avatars" attend labelFunc0425_0249:
	message("\"They are a popular local singing group. I am sure thou wilt like them, ");
	message(var0005);
	message("!\"");
	say();
	UI_remove_answer("The Avatars");
labelFunc0425_0249:
	case "people" attend labelFunc0425_025C:
	message("\"Oh, I so enjoy meeting men who like to go out and 'kill' things!\"");
	say();
	UI_remove_answer("people");
labelFunc0425_025C:
	case "food" attend labelFunc0425_0276:
	message("\"Everything I serve is delicious. I highly recommend that thou tasteth the Silverleaf dish. Worth every gold piece spent!\"");
	say();
	UI_remove_answer("food");
	UI_add_answer("Silverleaf");
labelFunc0425_0276:
	case "drink" attend labelFunc0425_0289:
	message("\"I serve Britain's finest ale and wine.\"");
	say();
	UI_remove_answer("drink");
labelFunc0425_0289:
	case "Silverleaf" attend labelFunc0425_029C:
	message("\"It's made from the root of a very rare tree. Quite superb, it is!\"");
	say();
	UI_remove_answer("Silverleaf");
labelFunc0425_029C:
	case "buy" attend labelFunc0425_02A7:
	Func08B7();
labelFunc0425_02A7:
	case "bye" attend labelFunc0425_02B2:
	goto labelFunc0425_02B5;
labelFunc0425_02B2:
	goto labelFunc0425_0146;
labelFunc0425_02B5:
	endconv;
	message("\"Talk to thee later!\"*");
	say();
labelFunc0425_02BA:
	if (!(event == 0x0000)) goto labelFunc0425_02C8;
	Func092E(0xFFDB);
labelFunc0425_02C8:
	return;
}


