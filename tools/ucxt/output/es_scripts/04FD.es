#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0864 0x864 ();

void Func04FD object#(0x4FD) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04FD_01F1;
	UI_show_npc_face(0xFF03, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF04);
	var0002 = Func08F7(0xFF0C);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02CB])) goto labelFunc04FD_004C;
	message("The wide-eyed expression of this youth seems indicative of his naivete.");
	say();
	gflags[0x02CB] = true;
	goto labelFunc04FD_0056;
labelFunc04FD_004C:
	message("\"Why, hello there, ");
	message(var0000);
	message(",\" says Cosmo.");
	say();
labelFunc04FD_0056:
	converse attend labelFunc04FD_01E6;
	case "name" attend labelFunc04FD_0083:
	message("\"I am Cosmo, ");
	message(var0000);
	message(", betrothed of Ophelia.\"");
	say();
	gflags[0x02D7] = true;
	UI_remove_answer("name");
	UI_add_answer(["betrothed", "Ophelia"]);
labelFunc04FD_0083:
	case "job" attend labelFunc04FD_009C:
	message("\"I am, uh, searching for something, ");
	message(var0000);
	message(".\"");
	say();
	UI_add_answer("searching");
labelFunc04FD_009C:
	case "betrothed" attend labelFunc04FD_00DE:
	message("\"Aye, ");
	message(var0000);
	message(", we are to be wed as soon I return to her silky arms.\"");
	say();
	if (!var0002) goto labelFunc04FD_00D7;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("\"Oh, please!\" He rolls his eyes.*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF03, 0x0000);
labelFunc04FD_00D7:
	UI_remove_answer("betrothed");
labelFunc04FD_00DE:
	case "searching" attend labelFunc04FD_0138:
	message("\"Well, ");
	message(var0000);
	message(", 'tis a bit of a personal matter.\"");
	say();
	if (!var0002) goto labelFunc04FD_012A;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("\"What he is searching for, ");
	message(var0000);
	message(", is his virginity!\"*");
	say();
	UI_show_npc_face(0xFF03, 0x0000);
	message("\"That is not true!\" He blushes.~~\"I am looking for a way to -prove-... my virginity!\"*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_add_answer("proof");
labelFunc04FD_012A:
	UI_add_answer("personal");
	UI_remove_answer("searching");
labelFunc04FD_0138:
	case "personal" attend labelFunc04FD_0151:
	message("\"I would... rather... not discuss it, ");
	message(var0000);
	message(",\" he stammers.");
	say();
	UI_remove_answer("personal");
labelFunc04FD_0151:
	case "Ophelia" attend labelFunc04FD_0164:
	message("\"She is the most beautiful woman in all Britannia. I still find it hard to believe she has agreed to marry me, a lowly warrior. I will travel to the ends of the world for her, if that be necessary, to keep her heart!\"");
	say();
	UI_remove_answer("Ophelia");
labelFunc04FD_0164:
	case "proof" attend labelFunc04FD_0184:
	message("He looks down at his feet. \"Milady Ophelia is concerned that I might not be... pure. I have waited mine entire life for someone like her. Can she not see that I held myself for marriage?\"");
	say();
	UI_add_answer(["held", "pure"]);
	UI_remove_answer("proof");
labelFunc04FD_0184:
	case "held" attend labelFunc04FD_019D:
	message("\"Surely thou dost see the value in that, ");
	message(var0000);
	message(". No woman would want me if I had not refrained from... well... thou dost understand.\"");
	say();
	UI_remove_answer("held");
labelFunc04FD_019D:
	case "pure" attend labelFunc04FD_01C1:
	message("\"I must prove to the lovely Ophelia that I am still a virgin. To do this I need to demonstrate that a unicorn will allow me to touch it. My friends and I are here to find such a creature, for recent legend purports that one lives in this dungeon.\"");
	say();
	gflags[0x02E0] = true;
	if (!gflags[0x02D0]) goto labelFunc04FD_01BA;
	UI_add_answer("the unicorn said no");
labelFunc04FD_01BA:
	UI_remove_answer("pure");
labelFunc04FD_01C1:
	case "the unicorn said no" attend labelFunc04FD_01D8:
	message("\"Thou hast seen the unicorn?\" He frowns for a moment, but that quickly melts away.~~\"Nevertheless, I shall endeavor to seek it out. Nothing shall keep me from my beloved Ophelia.\"");
	say();
	UI_remove_answer("the unicorn said no");
	gflags[0x02D0] = false;
labelFunc04FD_01D8:
	case "bye" attend labelFunc04FD_01E3:
	goto labelFunc04FD_01E6;
labelFunc04FD_01E3:
	goto labelFunc04FD_0056;
labelFunc04FD_01E6:
	endconv;
	message("\"Good day,");
	message(var0000);
	message(". If thou dost see the unicorn, tell it to wait for me.\"*");
	say();
labelFunc04FD_01F1:
	if (!(event == 0x0000)) goto labelFunc04FD_01FC;
	Func0864();
labelFunc04FD_01FC:
	return;
}


