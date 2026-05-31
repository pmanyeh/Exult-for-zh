#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func044D object#(0x44D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc044D_0275;
	UI_show_npc_face(0xFFB3, 0x0000);
	var0000 = UI_is_pc_female();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00E0]) goto labelFunc044D_0036;
	UI_add_answer("Nastassia");
labelFunc044D_0036:
	if (!gflags[0x006A]) goto labelFunc044D_0049;
	UI_add_answer(["bill", "Lock Lake"]);
labelFunc044D_0049:
	if (!(!gflags[0x00EA])) goto labelFunc044D_005F;
	message("This regal gentleman epitomizes a well-liked politician.");
	say();
	message("\"Hello! Lord British sent word that thou might come to visit us. Welcome to Cove, Avatar!\"");
	say();
	gflags[0x00EA] = true;
	goto labelFunc044D_0063;
labelFunc044D_005F:
	message("\"Hello again, Avatar!\" Lord Heather proclaims.");
	say();
labelFunc044D_0063:
	converse attend labelFunc044D_0270;
	case "name" attend labelFunc044D_0079:
	message("\"I am Lord Heather. And I recognize thee, Avatar!\"");
	say();
	UI_remove_answer("name");
labelFunc044D_0079:
	case "job" attend labelFunc044D_0092:
	message("\"I am the Town Mayor of Cove, home of the Shrine of Compassion.\"");
	say();
	UI_add_answer(["Cove", "Shrine"]);
labelFunc044D_0092:
	case "Cove" attend labelFunc044D_00A5:
	message("\"It's a small place, I know. Many of our residents have moved away to the larger towns, especially Britain. But we have maintained a small core of loyal Covites.\"");
	say();
	UI_remove_answer("Cove");
labelFunc044D_00A5:
	case "Shrine" attend labelFunc044D_00BF:
	message("\"We are proud of our Shrine. One of our residents takes good care of it. Thou must try and visit the Shrine if thou hast not already. It is a monument to all the lovers in town.\"");
	say();
	UI_add_answer("lovers");
	UI_remove_answer("Shrine");
labelFunc044D_00BF:
	case "lovers" attend labelFunc044D_00DF:
	message("\"Britain may be the city of Compassion, but Cove has become the city of Passion. Everyone here seems to fall in love rather easily. Thou wilt find that everyone loves someone. Almost everyone, that is.\"");
	say();
	UI_remove_answer("lovers");
	UI_add_answer(["everyone", "almost everyone"]);
labelFunc044D_00DF:
	case "everyone" attend labelFunc044D_01AE:
	message("\"Well, let's see... I am in love with Jaana, our healer.\tAnd she is in love with me, of course. Then there is Zinaida, who runs the Emerald. She has an interest in De Maria, our local bard. And vice versa. Rayburt, our trainer, is courting Pamela, the innkeeper.\"");
	say();
	var0001 = Func08F7(0xFFFF);
	if (!var0001) goto labelFunc044D_0119;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Sounds like bad theatre to me!\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_0119:
	var0002 = Func08F7(0xFFFE);
	if (!var0002) goto labelFunc044D_0147;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Any wenches mine own age around here?\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_0147:
	gflags[0x00E4] = true;
	UI_remove_answer("everyone");
	var0003 = Func08F7(0xFFFB);
	if (!var0003) goto labelFunc044D_01AE;
	message("\"I see that thou art leaving Cove for a while, my dear?\"*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"Yes, milord. But I shall return. I promise thee.\"*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("\"I shall try not to worry about thee, but it will be difficult.\"*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("\"Do not worry. I shall be safe with the Avatar.\"*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("\"I do hope so.\" The Mayor embraces Jaana.*");
	say();
	UI_remove_npc_face(0xFFFB);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_01AE:
	case "almost everyone" attend labelFunc044D_01C8:
	message("\"Except for Nastassia.\"");
	say();
	UI_remove_answer("almost everyone");
	UI_add_answer("Nastassia");
labelFunc044D_01C8:
	case "Nastassia" attend labelFunc044D_0208:
	if (!(!gflags[0x00E0])) goto labelFunc044D_01E2;
	message("\"She is a lovely young woman who is always melancholy. De Maria can tell thee more about her. I suggest thou seekest him at the Emerald. 'Tis a sad but compelling tale.\"");
	say();
	gflags[0x00E3] = true;
	goto labelFunc044D_0201;
labelFunc044D_01E2:
	if (!var0000) goto labelFunc044D_01F1;
	var0004 = "someone";
	goto labelFunc044D_01F7;
labelFunc044D_01F1:
	var0004 = "a man like thee";
labelFunc044D_01F7:
	message("\"I do hope thou canst help her. She needs ");
	message(var0004);
	message(" to bring her out of her depression.\"");
	say();
labelFunc044D_0201:
	UI_remove_answer("Nastassia");
labelFunc044D_0208:
	case "bill" attend labelFunc044D_024F:
	if (!(!gflags[0x00DE])) goto labelFunc044D_0244;
	var0005 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99);
	if (!var0005) goto labelFunc044D_023D;
	message("\"'Tis about time that the government did something about the awful stench coming from that lake! I shall be happy to sign thy bill of law! Take it back to the Great Council post haste!\" Lord Heather signs the bill and hands it back to you.");
	say();
	gflags[0x00DE] = true;
	goto labelFunc044D_0241;
labelFunc044D_023D:
	message("\"But thou dost not have a bill of law!\"");
	say();
labelFunc044D_0241:
	goto labelFunc044D_0248;
labelFunc044D_0244:
	message("\"I thought I already signed that bill!\"");
	say();
labelFunc044D_0248:
	UI_remove_answer("bill");
labelFunc044D_024F:
	case "Lock Lake" attend labelFunc044D_0262:
	message("\"It has gotten so putrid that on hot summer days the stink is suffocating. I believe that the Britannian Mining Company in Minoc is the source of the problem. Mining waste is being deposited in the Lake. Thou shouldst be glad it is nearly winter!\"");
	say();
	UI_remove_answer("Lock Lake");
labelFunc044D_0262:
	case "bye" attend labelFunc044D_026D:
	goto labelFunc044D_0270;
labelFunc044D_026D:
	goto labelFunc044D_0063;
labelFunc044D_0270:
	endconv;
	message("\"Do come and visit again, Avatar!\"*");
	say();
labelFunc044D_0275:
	if (!(event == 0x0000)) goto labelFunc044D_0283;
	Func092E(0xFFB3);
labelFunc044D_0283:
	return;
}


