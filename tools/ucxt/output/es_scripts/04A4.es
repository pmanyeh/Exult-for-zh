#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func04A4 object#(0x4A4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04A4_026C;
	UI_show_npc_face(0xFF5C, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0206])) goto labelFunc04A4_0044;
	message("You see a handsome,hardened, muscular man who, surprisingly, bears a friendly smile on his face.");
	say();
	gflags[0x0206] = true;
	goto labelFunc04A4_0060;
labelFunc04A4_0044:
	message("\"Please, ");
	message(var0001);
	message(". Join me for some company.\"");
	say();
	if (!(gflags[0x01DD] && (!gflags[0x01ED]))) goto labelFunc04A4_0060;
	UI_add_answer("crystal");
labelFunc04A4_0060:
	converse attend labelFunc04A4_0261;
	case "name" attend labelFunc04A4_007C:
	message("\"I am called Addom, ");
	message(var0001);
	message(".");
	say();
	UI_remove_answer("name");
labelFunc04A4_007C:
	case "job" attend labelFunc04A4_00AA:
	message("\"I travel the world in search of rare and unique items to sell to museums. I am not a resident of Moonglow.\"");
	say();
	UI_add_answer(["Moonglow", "travel", "items"]);
	if (!(gflags[0x01DD] && (!gflags[0x01ED]))) goto labelFunc04A4_00AA;
	UI_add_answer("crystal");
labelFunc04A4_00AA:
	case "travel" attend labelFunc04A4_00CA:
	message("\"I have been all over Britannia, ");
	message(var0001);
	message(". Nothing about the land frightens me any longer.\"~~ He grins. \"The same is not true of some of the residents.\"");
	say();
	UI_add_answer("residents");
	UI_remove_answer("travel");
labelFunc04A4_00CA:
	case "residents" attend labelFunc04A4_00E3:
	message("\"'Twas a joke, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("residents");
labelFunc04A4_00E3:
	case "items" attend labelFunc04A4_0115:
	message("\"I have found many odd artifacts. Many of the things thou hast seen in The Music Hall and the Lycaeum have been brought to them by me.\"");
	say();
	if (!(!gflags[0x01DD])) goto labelFunc04A4_010E;
	message("\"In fact, ");
	message(var0001);
	message(", I have this unique crystal I found on the mainland near Jhelom that I am hoping will fetch a fair price from Nelson.\"~~He pulls out a small clear crystal and shows it to you.~~The facets gleam in the light.");
	say();
	if (!(!var0002)) goto labelFunc04A4_010E;
	UI_add_answer("Nelson");
labelFunc04A4_010E:
	UI_remove_answer("items");
labelFunc04A4_0115:
	case "Nelson" attend labelFunc04A4_012C:
	message("\"He is in charge of the Lycaeum. He loves trinkets and rarities.\"");
	say();
	var0002 = true;
	UI_remove_answer("Nelson");
labelFunc04A4_012C:
	case "Moonglow" attend labelFunc04A4_015C:
	message("\"I am afraid, ");
	message(var0001);
	message(", that I know nothing about this fair city. I reside in Yew with my wife, Penni, who is the trainer there.~~\"Actually, ");
	message(var0001);
	message(", I have met two people here, other than Nelson.\"");
	say();
	UI_remove_answer("Moonglow");
	UI_add_answer(["people", "Penni"]);
	gflags[0x01DE] = true;
labelFunc04A4_015C:
	case "people" attend labelFunc04A4_017C:
	message("I have come to know the bartender and the healer.\"");
	say();
	UI_remove_answer("people");
	UI_add_answer(["bartender", "healer"]);
labelFunc04A4_017C:
	case "bartender" attend labelFunc04A4_019D:
	message("\"Phearcy is quite friendly. But he does love to gossip. He has offered me a deal whereby I might earn free meals if I can discover why Nelson's assistant reacts differently to some man, or something like that. I am not going to bother, but pray, do not tell Phearcy that!\"");
	say();
	if (!(!var0002)) goto labelFunc04A4_0196;
	UI_add_answer("Nelson");
labelFunc04A4_0196:
	UI_remove_answer("bartender");
labelFunc04A4_019D:
	case "healer" attend labelFunc04A4_01B0:
	message("\"Elad is very generous. In fact, he is letting me sleep in one of his spare beds while I am in town. His only charge,\" he laughs, \"is the stories I tell him about mine adventures.~~\"Not a bad trade if I say so myself,\" he shrugs.");
	say();
	UI_remove_answer("healer");
labelFunc04A4_01B0:
	case "Penni" attend labelFunc04A4_01C3:
	message("\"She teaches close-quarter combat. Everything I needed to know to survive on my journeys I learned from her.\"");
	say();
	UI_remove_answer("Penni");
labelFunc04A4_01C3:
	case "crystal" attend labelFunc04A4_0253:
	message("\"Dost thou mean this?\" He pulls a small, clear, multi-faceted gem from a pouch beneath his cloak. \"I just found this recently. I was hoping to sell it to the Lycaeum, but, alas, they have no use for it. Dost thou want it, perhaps?\" he asks, hopefully. \"I will sell it to thee for 20 gold.\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04A4_0248;
	var0004 = UI_add_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
	var0005 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04A4_0227;
	if (!var0004) goto labelFunc04A4_021A;
	message("\"I thank thee.\"");
	say();
	gflags[0x01ED] = true;
	goto labelFunc04A4_0224;
labelFunc04A4_021A:
	message("\"I am truly sorry, ");
	message(var0001);
	message(", but thou dost not have enough room.\"");
	say();
labelFunc04A4_0224:
	goto labelFunc04A4_0245;
labelFunc04A4_0227:
	message("\"I am truly sorry, ");
	message(var0001);
	message(", but thou dost not have enough gold.\"");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
labelFunc04A4_0245:
	goto labelFunc04A4_024C;
labelFunc04A4_0248:
	message("\"Very well,\" he sighs, disappointed.");
	say();
labelFunc04A4_024C:
	UI_remove_answer("crystal");
labelFunc04A4_0253:
	case "bye" attend labelFunc04A4_025E:
	goto labelFunc04A4_0261;
labelFunc04A4_025E:
	goto labelFunc04A4_0060;
labelFunc04A4_0261:
	endconv;
	message("\"May thy days be always pleasant, ");
	message(var0001);
	message(".\"*");
	say();
labelFunc04A4_026C:
	if (!(event == 0x0000)) goto labelFunc04A4_0275;
	abort;
labelFunc04A4_0275:
	return;
}


