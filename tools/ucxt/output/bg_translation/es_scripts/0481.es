#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0481 object#(0x481) ()
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

	if (!(event == 0x0001)) goto labelFunc0481_0367;
	UI_show_npc_face(0xFF7F, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF7F));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x017D]) goto labelFunc0481_0051;
	UI_add_answer("locket");
labelFunc0481_0051:
	if (!var0003) goto labelFunc0481_005E;
	UI_add_answer("medallion");
labelFunc0481_005E:
	if (!gflags[0x0127]) goto labelFunc0481_0071;
	UI_add_answer(["Hook", "Crown Jewel"]);
labelFunc0481_0071:
	if (!gflags[0x0180]) goto labelFunc0481_007E;
	UI_add_answer("strangers");
labelFunc0481_007E:
	if (!(!gflags[0x018A])) goto labelFunc0481_0090;
	message("Before you is a shrewd-looking craftsman, obviously filled with the contentment of a peaceful life.");
	say();
	gflags[0x018A] = true;
	goto labelFunc0481_0094;
labelFunc0481_0090:
	message("\"What may I do for thee?\" says Russell.");
	say();
labelFunc0481_0094:
	converse attend labelFunc0481_035C;
	case "name" attend labelFunc0481_00AA:
	message("\"I am Russell, a shipwright.\"");
	say();
	UI_remove_answer("name");
labelFunc0481_00AA:
	case "job" attend labelFunc0481_00C6:
	message("\"I build ships in New Magincia. It is a profession I enjoy very much. I also sell deeds for my ships, and sextants by which one can navigate the open seas.\"");
	say();
	UI_add_answer(["New Magincia", "deeds", "sextants"]);
labelFunc0481_00C6:
	case "deeds" attend labelFunc0481_017D:
	if (!(var0002 == 0x0007)) goto labelFunc0481_0172;
	if (!gflags[0x0193]) goto labelFunc0481_00E5;
	message("\"But I have already sold thee the deed to 'The Nymphet'! I am afraid that was the only ship I had at this time.\"");
	say();
	goto labelFunc0481_016F;
labelFunc0481_00E5:
	message("\"Thou wishest to purchase my ship 'The Nymphet'? The deed will cost thee 600 gold.\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0481_0165;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0005 >= 0x0258)) goto labelFunc0481_0158;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0011, 0xFE99, false);
	if (!var0006) goto labelFunc0481_0151;
	message("\"'The Nymphet' is thine, ");
	message(var0000);
	message(". Enjoy the waters.\"");
	say();
	var0007 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0193] = true;
	goto labelFunc0481_0155;
labelFunc0481_0151:
	message("\"Thou art carrying too much to take thy deed. Come back after putting some things down.\"");
	say();
labelFunc0481_0155:
	goto labelFunc0481_0162;
labelFunc0481_0158:
	message("\"Mine apologies, ");
	message(var0000);
	message(", thou dost not have enough gold.\"");
	say();
labelFunc0481_0162:
	goto labelFunc0481_016F;
labelFunc0481_0165:
	message("\"I understand, ");
	message(var0000);
	message(", the seas aren't for everyone.\"");
	say();
labelFunc0481_016F:
	goto labelFunc0481_0176;
labelFunc0481_0172:
	message("\"When my shop is again open I shall be more than happy to help thee.\"");
	say();
labelFunc0481_0176:
	UI_remove_answer("deeds");
labelFunc0481_017D:
	case "sextants" attend labelFunc0481_021F:
	if (!(var0002 == 0x0007)) goto labelFunc0481_0214;
	message("\"Thou wishest to purchase one of my fine sextants? 'Twill cost thee 40 gold.\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0481_0207;
	var0009 = Func0931(0xFE9B, 0x0028, 0x0284, 0xFE99, 0xFE99);
	if (!var0009) goto labelFunc0481_01FA;
	message("\"'Tis thine, ");
	message(var0000);
	message(". Enjoy the waters.\"");
	say();
	var000A = UI_remove_party_items(0x0028, 0x0284, 0xFE99, 0xFE99, true);
	var000B = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	if (!(!var000B)) goto labelFunc0481_01F7;
	message("\"I would gladly give thee thy sextant but thou shalt have to put something down! Thou art carrying\ttoo much to take it.\"");
	say();
labelFunc0481_01F7:
	goto labelFunc0481_0204;
labelFunc0481_01FA:
	message("\"Mine apologies, ");
	message(var0000);
	message(", thou dost not have enough gold.\"");
	say();
labelFunc0481_0204:
	goto labelFunc0481_0211;
labelFunc0481_0207:
	message("\"I understand, ");
	message(var0000);
	message(", some of us can navigate with just the naked stars!\"");
	say();
labelFunc0481_0211:
	goto labelFunc0481_0218;
labelFunc0481_0214:
	message("\"At present my shop is closed. If thou wilt come back during business hours I shall be more than happy to help thee.\"");
	say();
labelFunc0481_0218:
	UI_remove_answer("sextants");
labelFunc0481_021F:
	case "New Magincia" attend labelFunc0481_0239:
	message("\"Things have been very peaceful in New Magincia. There has been little trouble from outsiders lately.\"");
	say();
	UI_add_answer("outsiders");
	UI_remove_answer("New Magincia");
labelFunc0481_0239:
	case "outsiders" attend labelFunc0481_0253:
	message("\"Before thine arrival there had not been a stranger in New Magincia for years, save for the survivors of the shipwreck.\"");
	say();
	UI_add_answer("shipwreck");
	UI_remove_answer("outsiders");
labelFunc0481_0253:
	case "shipwreck" attend labelFunc0481_0273:
	message("\"I found the wreckage. Three men were clinging to it for their lives.\"");
	say();
	UI_add_answer(["wreckage", "three men"]);
	UI_remove_answer("shipwreck");
labelFunc0481_0273:
	case "wreckage" attend labelFunc0481_0286:
	message("\"I had never seen a ship like it before. The markings show it was constructed by a Minoc shipwright named Owen. It was not very well constructed.\"");
	say();
	UI_remove_answer("wreckage");
labelFunc0481_0286:
	case "three men", "strangers" attend labelFunc0481_02AD:
	message("\"They were from Buccaneer's Den. Most people that come here come because they are lost on their way to or from Buccaneer's Den.\"");
	say();
	gflags[0x0180] = true;
	UI_add_answer("Buccaneer's Den");
	UI_remove_answer(["strangers", "three men"]);
labelFunc0481_02AD:
	case "Buccaneer's Den" attend labelFunc0481_02C4:
	message("\"The three men wish to go back. They say there is a house of games in Buccaneer's Den.\" Russell shrugs. \"As if that would be a reason to go there.");
	say();
	message("\"I offered to sell them a ship, but they had no money. They actually seemed offended when I would not give it to them for free!\"");
	say();
	UI_remove_answer("Buccaneer's Den");
labelFunc0481_02C4:
	case "locket" attend labelFunc0481_02DE:
	message("\"The three strangers tried to offer me some kind of trinket to build or sell them a ship. It sounds like the locket thou art describing.\"");
	say();
	UI_add_answer("trinket");
	UI_remove_answer("locket");
labelFunc0481_02DE:
	case "trinket" attend labelFunc0481_02F1:
	message("\"I would not have accepted their offer, but I was curious. Later they said nothing when I wanted to see the trinket again. I doubt they have it.\"");
	say();
	UI_remove_answer("trinket");
labelFunc0481_02F1:
	case "medallion" attend labelFunc0481_0304:
	message("\"I could not help noticing your medallion. It does look somewhat sinister. I cannot recall ever having seen one like it before.\"");
	say();
	UI_remove_answer("medallion");
labelFunc0481_0304:
	case "Crown Jewel" attend labelFunc0481_0329:
	if (!(!gflags[0x0181])) goto labelFunc0481_031E;
	message("\"The Crown Jewel just left here a short while ago. I do not know where it was headed.\"");
	say();
	gflags[0x0181] = true;
	goto labelFunc0481_0322;
labelFunc0481_031E:
	message("\"I have heard nothing more of the Crown Jewel since we last spoke of it.\"");
	say();
labelFunc0481_0322:
	UI_remove_answer("Crown Jewel");
labelFunc0481_0329:
	case "Hook" attend labelFunc0481_034E:
	if (!(!gflags[0x0182])) goto labelFunc0481_0343;
	message("\"Just as the Crown Jewel left I saw a man with a hook jump on board. There was a gargoyle accompanying him.\"");
	say();
	gflags[0x0182] = true;
	goto labelFunc0481_0347;
labelFunc0481_0343:
	message("\"I have heard nothing more of this man Hook since we last spoke of him.\"");
	say();
labelFunc0481_0347:
	UI_remove_answer("Hook");
labelFunc0481_034E:
	case "bye" attend labelFunc0481_0359:
	goto labelFunc0481_035C;
labelFunc0481_0359:
	goto labelFunc0481_0094;
labelFunc0481_035C:
	endconv;
	message("\"Fare thee well, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0481_0367:
	if (!(event == 0x0000)) goto labelFunc0481_0375;
	Func092E(0xFF7F);
labelFunc0481_0375:
	return;
}


