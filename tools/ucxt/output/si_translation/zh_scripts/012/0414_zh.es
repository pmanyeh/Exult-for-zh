#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func08FF 0x8FF ();

void Func0414 object#(0x414) ()
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

	var0000 = UI_get_item_flag(0xFFEC, 0x001C);
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc0414_0042;
	var0004 = "day";
	goto labelFunc0414_0048;
labelFunc0414_0042:
	var0004 = "evening";
labelFunc0414_0048:
	var0005 = "his";
	if (!var0002) goto labelFunc0414_005A;
	var0005 = "her";
labelFunc0414_005A:
	var0006 = UI_get_distance(0xFFEC, 0xFE9C);
	var0007 = [0x0975, 0x0748, 0x0000];
	var0008 = UI_get_object_position(0xFFEC);
	var0009 = [0x0986, 0x0766];
	var000A = Func09A0(0x0005, 0x0003);
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0414_00BB;
	var000B = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0414_00BB:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFEC) != 0x000F))) goto labelFunc0414_019D;
	if (!(UI_get_npc_id(0xFFEC) != 0x0000)) goto labelFunc0414_00E7;
	UI_set_npc_id(0xFFEC, 0x0000);
labelFunc0414_00E7:
	var0008 = UI_get_object_position(0xFFEC);
	if (!(gflags[0x0125] && ((var0008[0x0001] > 0x0587) && ((var0008[0x0001] < 0x098A) && ((var0008[0x0002] > 0x0740) && (var0008[0x0002] < 0x0750)))))) goto labelFunc0414_0162;
	0xFFEC->Func07D2();
	0xFFEC->Func07D1();
	UI_set_schedule_type(0xFFEC, 0x000F);
	Func097F(0xFFEC, "@Oh, 'tis thee!@", 0x0002);
	var000B = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x00E6, 0x0000], 0x0005);
	goto labelFunc0414_019D;
labelFunc0414_0162:
	UI_item_say(0xFE9C, "Pardon me...");
	0xFFEC->Func07D1();
	if (!var0002) goto labelFunc0414_0187;
	Func097F(0xFFEC, "@Yes, love?@", 0x0002);
	goto labelFunc0414_0193;
labelFunc0414_0187:
	Func097F(0xFFEC, "@Yes, handsome?@", 0x0002);
labelFunc0414_0193:
	UI_set_schedule_type(0xFFEC, 0x0003);
labelFunc0414_019D:
	if (!(event == 0x0009)) goto labelFunc0414_03B9;
	UI_run_schedule(0xFFEC);
	UI_clear_item_say(0xFFEC);
	UI_show_npc_face0(0xFFEC, 0x0000);
	if (!(var0000 == false)) goto labelFunc0414_01D6;
	UI_set_item_flag(0xFFEC, 0x001C);
	message("\"Yes, we met at the MageLord's banquet. I am Frigidazzi, of course.\"");
	say();
	goto labelFunc0414_01DA;
labelFunc0414_01D6:
	message("\"Back so soon? But of course.\"");
	say();
labelFunc0414_01DA:
	if (!gflags[0x0292]) goto labelFunc0414_01E7;
	UI_add_answer("fur cap");
labelFunc0414_01E7:
	UI_add_answer(["spells", "goblin", "Batlin", "Moonshade", "Gwenno", "bye"]);
labelFunc0414_0200:
	converse attend labelFunc0414_03B8;
	case "fur cap" attend labelFunc0414_026B:
	UI_remove_answer("fur cap");
	var000B = Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004);
	if (!var000B) goto labelFunc0414_0267;
	message("\"Why, thou dost have my favorite fur cap! I have been looking for it everywhere! In fact, I have not seen it since that storm we had a while ago. Hmmm, that would mean that I have something that belongs to thee. I shall trade thee thine helm for my fur cap.\"");
	say();
	gflags[0x0292] = false;
	var000B = UI_remove_party_items(0x0001, 0x03EC, 0xFE99, 0x0004, 0x0000);
	var000B = Func099B(0xFE9C, 0x0001, 0x017F, 0xFE99, 0x0000, 0x0000, true);
	goto labelFunc0414_026B;
labelFunc0414_0267:
	message("\"Thou must me talking about my favorite fur cap! I have been looking for it everywhere! In fact, I have not seen it since that storm we had a while ago. Hmmm, perhaps that means I have something that belongs to thee. If thou dost return my fur cap to me I shall see what I have of thine.\"");
	say();
labelFunc0414_026B:
	case "goblin" attend labelFunc0414_027E:
	UI_remove_answer("goblin");
	message("\"Yes, I have a goblin for a servant. What of it? She is a perfect servant because she is almost completely impervious to the cold. But surely we can think of more interesting things to talk about...\"");
	say();
labelFunc0414_027E:
	case "Gwenno" attend labelFunc0414_0291:
	UI_remove_answer("Gwenno");
	message("\"Yes, I saw her briefly a few times while she was in our city. She spent a lot of time at the Seminarium. Gwenno had a lot of interest in the exotic races of our land.\"");
	say();
labelFunc0414_0291:
	case "Batlin" attend labelFunc0414_02AF:
	UI_remove_answer("Batlin");
	message("\"That disgusting oaf! He wanted to buy a serpent relic from me, but I did not sell it to him!\"");
	say();
	message("\"Cannot we find a different topic of conversation?\"");
	say();
	UI_add_answer("serpent relic");
labelFunc0414_02AF:
	case "serpent relic" attend labelFunc0414_02E3:
	UI_remove_answer("serpent relic");
	message("\"It was not very remarkable -- merely a stone in the shape of a serpent's tooth. It had no powers that I know of...\"");
	say();
	message("\"Many of us have these stones. In fact, it is a tradition for the best Mages to own one or more of them.\"");
	say();
	message("\"Canst thou keep a secret?\"");
	say();
	if (!Func0955()) goto labelFunc0414_02DF;
	message("\"I can tell thee from whence the Serpent Teeth came...\"");
	say();
	message("\"The Mages of Moonshade steal them from Erstam, the Mad Mage who lives on the island! It is such fine sport, but if he catches thee, he turns thee into a newt!\"");
	say();
	message("\"We do not know why he values them so. And since he now hates us, I doubt that he shall explain the matter to us.\"");
	say();
	goto labelFunc0414_02E3;
labelFunc0414_02DF:
	message("\"Neither can I! But I had best not share my secrets with thee...\"");
	say();
labelFunc0414_02E3:
	case "Moonshade" attend labelFunc0414_02F6:
	UI_remove_answer("Moonshade");
	message("\"A beautiful city, is it not? But ever so much more beautiful at night when the moon is shining down upon it. Dost thou not agree?\"");
	say();
labelFunc0414_02F6:
	case "spells" attend labelFunc0414_035A:
	UI_remove_answer("spells");
	message("\"I could teach thee many things, ");
	message(var0003);
	message(". Come after midnight, alone, to my manor, and I shall reveal such knowledge as thou hast never before beheld.\"");
	say();
	message("\"I am a heavy sleeper, so thou shalt most likely have to awaken me...\"");
	say();
	gflags[0x0125] = true;
	var000B = UI_find_nearby(0xFE9C, 0x010E, 0x003C, 0x0000);
	enum();
labelFunc0414_032B:
	for (var000E in var000B with var000C to var000D) attend labelFunc0414_0350;
	if (!(UI_get_item_quality(var000E) == 0x00C8)) goto labelFunc0414_034D;
	Func0907(var000E, 0x0001);
labelFunc0414_034D:
	goto labelFunc0414_032B;
labelFunc0414_0350:
	UI_add_answer(["knowledge"]);
labelFunc0414_035A:
	case "knowledge" attend labelFunc0414_0378:
	UI_remove_answer("knowledge");
	message("\"I am the mistress of cold-fire magic, a specialty I learned during my many travels to the north.\"");
	say();
	message("\"Extreme cold is in its own way just as powerful a force as extreme heat. Over time, I have learned to bend it to my will.\"");
	say();
	UI_add_answer("travels to the north");
labelFunc0414_0378:
	case "travels to the north" attend labelFunc0414_038B:
	UI_remove_answer("travels to the north");
	message("\"Some of my most memorable experiences have been on my various expeditions to the north. It is a harsh and unforgiving environment, that brings out the passionate will in one's heart to survive. It is extremely invigorating. All I shall tell thee is that if thou shouldst ever travel there thou shouldst dress warmly!\"");
	say();
labelFunc0414_038B:
	case "bye" attend labelFunc0414_03B5:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(0xFFEC, "@Until next time!@", 0x0002);
	Func08FF();
	goto labelFunc0414_03B8;
labelFunc0414_03B5:
	goto labelFunc0414_0200;
labelFunc0414_03B8:
	endconv;
labelFunc0414_03B9:
	return;
}


