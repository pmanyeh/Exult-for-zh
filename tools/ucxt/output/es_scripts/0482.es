#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0855 0x855 ();
extern void Func092E 0x92E (var var0000);

void Func0482 object#(0x482) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;

	if (!(event == 0x0001)) goto labelFunc0482_0499;
	UI_show_npc_face(0xFF7E, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF7E));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0180]) goto labelFunc0482_004A;
	UI_add_answer("strangers");
labelFunc0482_004A:
	if (!gflags[0x017D]) goto labelFunc0482_0057;
	UI_add_answer("locket");
labelFunc0482_0057:
	if (!gflags[0x0195]) goto labelFunc0482_0072;
	message("\"Art thou ready to pay thy bill?\"");
	say();
	if (!Func090A()) goto labelFunc0482_006D;
	goto labelFunc0482_00EA;
	goto labelFunc0482_0072;
labelFunc0482_006D:
	message("\"Goodbye, then!\"*");
	say();
	abort;
labelFunc0482_0072:
	if (!(!gflags[0x018B])) goto labelFunc0482_0187;
	message("You see a leering, ill-postured man who chortles to himself.");
	say();
	gflags[0x018B] = true;
	if (!(var0002 == 0x0017)) goto labelFunc0482_0184;
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc0482_0184;
	message("\"Well if it isn't Dupre! -Sir- Dupre now, is it?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"That it is, Boris.\"");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("\"Hmmm-- it seems to me thou dost have a tab still going here? Yes?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Oh? Do I?\"");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("\"Yes indeed! Let me see... I believe the total that thou dost owe is 74 gold pieces. I am afraid that thou must pay up before I can speak with thee or anyone else with thee.\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre looks embarrassed. He turns to you. \"My friend, wilt thou help me out?\"");
	say();
	if (!Func090A()) goto labelFunc0482_0171;
labelFunc0482_00EA:
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x004A)) goto labelFunc0482_0165;
	var0005 = UI_remove_party_items(0x004A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc0482_0159;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"I thank thee, Avatar.\"");
	say();
	message("You hand the gold over to Boris.");
	say();
	gflags[0x0195] = false;
	UI_show_npc_face(0xFF7E, 0x0000);
	message("\"'Tis a pleasure to do business with thee, Sir Dupre! And welcome to my pub!\"");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF7E, 0x0000);
	goto labelFunc0482_0162;
labelFunc0482_0159:
	message("\"Hmmm, where did our gold go?\"*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_0162:
	goto labelFunc0482_016E;
labelFunc0482_0165:
	message("\"I am afraid are pockets are too empty!\"*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_016E:
	goto labelFunc0482_0184;
labelFunc0482_0171:
	UI_show_npc_face(0xFF7E, 0x0000);
	message("\"Well, I wilt not be serving thee or speaking to thee until thy bill is paid!\"*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_0184:
	goto labelFunc0482_018B;
labelFunc0482_0187:
	message("\"Hello again,\" says Boris.");
	say();
labelFunc0482_018B:
	converse attend labelFunc0482_0494;
	case "name" attend labelFunc0482_01A1:
	message("\"Call me Boris.\"");
	say();
	UI_remove_answer("name");
labelFunc0482_01A1:
	case "job" attend labelFunc0482_01BA:
	message("\"I run The Modest Damsel, here in New Magincia.\"");
	say();
	UI_add_answer(["Modest Damsel", "New Magincia"]);
labelFunc0482_01BA:
	case "Modest Damsel" attend labelFunc0482_01EE:
	if (!(var0002 == 0x0017)) goto labelFunc0482_01E3;
	message("\"It is a little inn and tavern. I am the owner, along with my wife, Magenta. Wouldst thou like something to eat or drink, or perhaps a room?\"");
	say();
	UI_add_answer(["Magenta", "eat or drink", "room"]);
	goto labelFunc0482_01E7;
labelFunc0482_01E3:
	message("\"The Modest Damsel is now closed for business. But do please return during business hours.\"");
	say();
labelFunc0482_01E7:
	UI_remove_answer("Modest Damsel");
labelFunc0482_01EE:
	case "Magenta" attend labelFunc0482_0201:
	message("\"She became the mayor of New Magincia after the death of the old mayor, her father, several years ago. She has done such a good job that no one has opposed her for the position yet.\"");
	say();
	UI_remove_answer("Magenta");
labelFunc0482_0201:
	case "eat or drink" attend labelFunc0482_0210:
	message("\"I am certain thou wilt enjoy our food and drink.\"");
	say();
	Func0855();
labelFunc0482_0210:
	case "room" attend labelFunc0482_02C3:
	message("\"Why dost thou not stay the night? For but 3 gold thou canst let one of our rooms. Dost thou wish to stay the night?\"");
	say();
	if (!Func090A()) goto labelFunc0482_02B8;
	var0006 = UI_get_party_list();
	var0007 = 0x0000;
	enum();
labelFunc0482_0230:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc0482_0248;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0482_0230;
labelFunc0482_0248:
	var000B = (var0007 * 0x0003);
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var000B)) goto labelFunc0482_02B1;
	var000D = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var000D) goto labelFunc0482_02A4;
	message("\"Here is thy room key. 'Twill only work in this inn.\"");
	say();
	var000E = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0482_02AE;
labelFunc0482_02A4:
	message("\"Sorry, ");
	message(var0000);
	message(", thou must remove some of thy load before I can give thee the room key.\"");
	say();
labelFunc0482_02AE:
	goto labelFunc0482_02B5;
labelFunc0482_02B1:
	message("\"Thou hast not enough gold for my rooms.\"");
	say();
labelFunc0482_02B5:
	goto labelFunc0482_02BC;
labelFunc0482_02B8:
	message("\"Some other evening, perhaps.\"");
	say();
labelFunc0482_02BC:
	UI_remove_answer("room");
labelFunc0482_02C3:
	case "New Magincia" attend labelFunc0482_02DD:
	message("\"In all of Britannia thou shalt not find a place that changes so little. Even the people always seem the same.\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("New Magincia");
labelFunc0482_02DD:
	case "people" attend labelFunc0482_0300:
	message("\"There are merchants and laborers, as well as a few new folks.\"");
	say();
	UI_add_answer(["merchants", "laborers", "new folks"]);
	UI_remove_answer("people");
labelFunc0482_0300:
	case "merchants" attend labelFunc0482_0323:
	message("\"They would be Russell, the shipwright; Henry, the peddler; and Sam, the flower man.\"");
	say();
	UI_add_answer(["Russell", "Henry", "Sam"]);
	UI_remove_answer("merchants");
labelFunc0482_0323:
	case "laborers" attend labelFunc0482_0343:
	message("\"They would be Katrina, the shepherd, and Constance, the water carrier.\"");
	say();
	UI_add_answer(["Katrina", "Constance"]);
	UI_remove_answer("laborers");
labelFunc0482_0343:
	case "new folks" attend labelFunc0482_0363:
	message("\"Except for the three strangers, the only relatively new person on the island is Alagner, the sage.\"");
	say();
	UI_add_answer(["Alagner", "strangers"]);
	UI_remove_answer("new folks");
labelFunc0482_0363:
	case "Alagner" attend labelFunc0482_0376:
	message("\"Alagner is not from New Magincia, of course, but has settled here after studying the world, for he well knows the value of our peace and solitude.\"");
	say();
	UI_remove_answer("Alagner");
labelFunc0482_0376:
	case "Russell" attend labelFunc0482_0389:
	message("\"A brilliant artist and craftsman, Russell cares little for wealth or notoriety. He is content simply building his fine ships and watching them sail.\"");
	say();
	UI_remove_answer("Russell");
labelFunc0482_0389:
	case "Katrina" attend labelFunc0482_03F4:
	message("\"Katrina has come to the aid of the people of this town on more than one occasion. She gets an interesting smile on her face whenever thy name is mentioned.\"");
	say();
	var000F = Func08F7(0xFFF7);
	if (!var000F) goto labelFunc0482_03ED;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"That is because the Avatar is one my dearest friends.\"");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("\"Am I not one of thy dearest friends, Katrina?\"");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"Thou art a flirt, Boris! Dost Magenta know how thou dost want to be dearest friends with the other women living on the island?\"");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("\"Thou dost torture me, Katrina!\" He laughs.");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7E, 0x0000);
labelFunc0482_03ED:
	UI_remove_answer("Katrina");
labelFunc0482_03F4:
	case "Henry" attend labelFunc0482_0407:
	message("\"Henry's parents were so poor it is a wonder he did not starve to death. I think Constance kept him going. He has loved her since they were children.\"");
	say();
	UI_remove_answer("Henry");
labelFunc0482_0407:
	case "Constance" attend labelFunc0482_041A:
	message("\"Constance is an orphan who was raised mostly by Katrina. Her innocence is surpassed only by her beauty. She is loved by all.\" Boris stares off into space for a few seconds before coming to his senses.");
	say();
	UI_remove_answer("Constance");
labelFunc0482_041A:
	case "Sam" attend labelFunc0482_042D:
	message("Boris laughs. \"Thou wouldst have to meet Sam for thyself. He is an incredible person who is perfecting the art of enjoying life.\"");
	say();
	UI_remove_answer("Sam");
labelFunc0482_042D:
	case "strangers" attend labelFunc0482_0444:
	message("\"A shipwreck has brought three strangers to our island. Rumor has it one of them is a monied gentleman from Buccaneer's Den, and the other two are his hired swords. They were in here drinking one night. They are not the sort of crowd I would wish to serve at mine establishment.\"");
	say();
	gflags[0x0180] = true;
	UI_remove_answer("strangers");
labelFunc0482_0444:
	case "locket" attend labelFunc0482_0486:
	if (!gflags[0x017F]) goto labelFunc0482_0457;
	message("\"I do not wish to hear of that locket ever again! Do not speak to me of it!\"");
	say();
	abort;
labelFunc0482_0457:
	if (!(!gflags[0x0185])) goto labelFunc0482_0469;
	message("\"I am quite certain I have never seen such a locket. I shall be happy to keep mine eyes open, though.\"");
	say();
	gflags[0x0183] = true;
	goto labelFunc0482_047F;
labelFunc0482_0469:
	if (!(!gflags[0x017E])) goto labelFunc0482_047B;
	message("You tell Boris what you had heard from the pirate, Battles. He breaks out into a cold sweat. \"Thou hast seen through my deception. I shall hand it over to thee.\" He opens a secret panel from behind the bar and looks inside. When he looks back to you his face has lost all color. \"The locket is gone! I swear to thee, I know not where it is!\"");
	say();
	gflags[0x017E] = true;
	goto labelFunc0482_047F;
labelFunc0482_047B:
	message("\"I still have not been able to find the locket!\" Boris looks as if he is about to tear his hair out, \"But I will keep looking until I find it!\"");
	say();
labelFunc0482_047F:
	UI_remove_answer("locket");
labelFunc0482_0486:
	case "bye" attend labelFunc0482_0491:
	goto labelFunc0482_0494;
labelFunc0482_0491:
	goto labelFunc0482_018B;
labelFunc0482_0494:
	endconv;
	message("\"Good journey!\"*");
	say();
labelFunc0482_0499:
	if (!(event == 0x0000)) goto labelFunc0482_04A7;
	Func092E(0xFF7E);
labelFunc0482_04A7:
	return;
}


