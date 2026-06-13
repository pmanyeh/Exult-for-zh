#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func07D2 object#(0x7D2) ();
extern void Func08AB 0x8AB ();

void Func0437 object#(0x437) ()
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
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;

	if (!(UI_get_item_flag(0xFFC9, 0x0020) && (event == 0x0009))) goto labelFunc0437_0033;
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFFC9), [(byte)0x23, (byte)0x55, 0x0294]);
	UI_run_schedule(0xFFC9);
	abort;
labelFunc0437_0033:
	if (!(event == 0x0008)) goto labelFunc0437_0050;
	if (!(gflags[0x0004] && (!gflags[0x0212]))) goto labelFunc0437_0050;
	UI_set_polymorph(0xFFC9, 0x0294);
labelFunc0437_0050:
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_get_npc_id(0xFFC9);
	if (!(event == 0x0007)) goto labelFunc0437_0087;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0437_0087:
	if (!(event == 0x0002)) goto labelFunc0437_03F0;
	var0005 = UI_get_party_list2();
	enum();
labelFunc0437_0097:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0437_00C7;
	var0009 = UI_get_schedule_type(var0008);
	if (!(UI_get_schedule_type(var0008) == 0x000F)) goto labelFunc0437_00C4;
	var0000 = (var0000 + 0x0001);
labelFunc0437_00C4:
	goto labelFunc0437_0097;
labelFunc0437_00C7:
	if (!gflags[0x0007]) goto labelFunc0437_01BF;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var000A = [0x03A4, 0x06F7, 0x0006];
	var000B = 0x0000;
	if (!gflags[0x0173]) goto labelFunc0437_00FB;
	var0008 = 0xFFFF;
labelFunc0437_00FB:
	if (!gflags[0x0175]) goto labelFunc0437_0107;
	var0008 = 0xFFFE;
labelFunc0437_0107:
	if (!gflags[0x0174]) goto labelFunc0437_0113;
	var0008 = 0xFFFD;
labelFunc0437_0113:
	UI_remove_from_party(var0008);
	UI_remove_npc(var0008);
	var0005 = UI_get_party_list2();
	enum();
labelFunc0437_0129:
	for (var0008 in var0005 with var000C to var000D) attend labelFunc0437_017A;
	UI_set_schedule_type(var0008, 0x001F);
	UI_move_object(var0008, [0x03A9, (0x06F1 + (var000B * 0x0002)), 0x0006]);
	var0000 = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x59, 0x0006]);
	var000B = (var000B + 0x0002);
	goto labelFunc0437_0129;
labelFunc0437_017A:
	UI_set_alignment(0xFFCB, 0x0000);
	UI_move_object(0xFE9C, var000A);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0400], 0x000A);
	gflags[0x0007] = false;
	UI_revert_schedule(0xFFC9);
	UI_revert_schedule(0xFFCB);
	UI_run_schedule(0xFFCB);
	abort;
labelFunc0437_01BF:
	var0005 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc0437_01D1:
	for (var0008 in var0005 with var000E to var000F) attend labelFunc0437_0278;
	if (!UI_get_item_flag(var0008, 0x001E)) goto labelFunc0437_0275;
	UI_clear_item_flag(var0008, 0x001E);
	var0000 = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x52, "@Oh!@", (byte)0x6C, (byte)0x6D, (byte)0x6E]);
	UI_set_schedule_type(var0008, 0x000F);
	var0010 = UI_get_object_position(var0008);
	var0010[0x0001] = (var0010[0x0001] - (var0010[0x0003] / 0x0002));
	var0010[0x0002] = (var0010[0x0002] - (var0010[0x0003] / 0x0002));
	UI_sprite_effect(0x0017, var0010[0x0001], var0010[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
labelFunc0437_0275:
	goto labelFunc0437_01D1;
labelFunc0437_0278:
	var0008 = false;
	enum();
labelFunc0437_027D:
	for (var0013 in var0005 with var0011 to var0012) attend labelFunc0437_02B4;
	if (!(UI_npc_nearby(var0013) && ((!(UI_get_schedule_type(var0013) == 0x000F)) && (!UI_get_item_flag(var0013, 0x001E))))) goto labelFunc0437_02B1;
	var0008 = var0013;
labelFunc0437_02B1:
	goto labelFunc0437_027D;
labelFunc0437_02B4:
	if (!var0008) goto labelFunc0437_0306;
	UI_set_item_flag(var0008, 0x001E);
	var0000 = UI_set_to_attack(0xFFCB, var0008, 0x0118);
	var0000 = UI_execute_usecode_array(0xFFCB, [(byte)0x67, (byte)0x58, 0x0035, (byte)0x7A, (byte)0x61]);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0437], 0x0002);
	goto labelFunc0437_03EF;
labelFunc0437_0306:
	if (!UI_get_item_flag(0xFFCB, 0x001E)) goto labelFunc0437_03A6;
	gflags[0x0007] = true;
	var0010 = UI_get_object_position(0xFE9C);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000F);
	var0010[0x0001] = (var0010[0x0001] - (var0010[0x0003] / 0x0002));
	var0010[0x0002] = (var0010[0x0002] - (var0010[0x0003] / 0x0002));
	UI_sprite_effect(0x0017, var0010[0x0001], var0010[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x55, 0x0437]);
	goto labelFunc0437_03EF;
labelFunc0437_03A6:
	var0000 = UI_set_to_attack(0xFFCB, 0xFE9C, 0x0118);
	var0000 = UI_execute_usecode_array(0xFFCB, [(byte)0x67, (byte)0x58, 0x0035, (byte)0x7A, (byte)0x61]);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0437], 0x0002);
	UI_set_item_flag(0xFFCB, 0x001E);
labelFunc0437_03EF:
	abort;
labelFunc0437_03F0:
	if (!(event == 0x0001)) goto labelFunc0437_0485;
	if (!UI_get_item_flag(0xFFC9, 0x0020)) goto labelFunc0437_0428;
	UI_item_say(0xFE9C, "@Lady!@");
	item->Func07D1();
	Func097F(item, "@Avert thine eyes!@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
	goto labelFunc0437_0485;
labelFunc0437_0428:
	UI_item_say(0xFE9C, "@Greetings, Lady.@");
	0xFFC9->Func07D1();
	Func097F(0xFFC9, (("@Greetings, " + var0001) + ".@"), 0x0002);
	UI_set_schedule_type(0xFFC9, 0x0003);
	if (!(gflags[0x015C] && (!(gflags[0x0173] || (gflags[0x0175] || gflags[0x0174]))))) goto labelFunc0437_0485;
	UI_si_path_run_usecode(0xFFCB, UI_get_object_position(0xFFC9), 0x000D, UI_get_npc_object(0xFFCB), 0x0435, false);
labelFunc0437_0485:
	if (!(event == 0x0009)) goto labelFunc0437_0A16;
	UI_run_schedule(0xFFC9);
	UI_clear_item_say(0xFFC9);
	UI_show_npc_face0(0xFFC9, 0x0000);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0437_04CD;
	message("\"It is not fitting that I be seen with thee until thou hast been judged by the Oracle.\"");
	say();
	message("\"Please do not approach me again until the Oracle hath ruled!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC9, "@'Tis unseemly!@", 0x0000);
	abort;
labelFunc0437_04CD:
	if (!(gflags[0x0004] == true)) goto labelFunc0437_04F1;
	if (!(gflags[0x0212] == true)) goto labelFunc0437_04E4;
	message("\"Thank thee, Avatar! Thank thee for returning me to my former Beauty.\"");
	say();
	goto labelFunc0437_04EE;
labelFunc0437_04E4:
	message("\"I wish I had some way to further reward thee, ");
	message(var0003);
	message(". I wish thee luck on thy quest!\"");
	say();
labelFunc0437_04EE:
	goto labelFunc0437_078B;
labelFunc0437_04F1:
	var0014 = UI_get_item_flag(0xFFC9, 0x001C);
	if (!(gflags[0x015C] && (!gflags[0x01B5]))) goto labelFunc0437_073A;
	if (!(UI_npc_nearby(0xFFFD) && UI_get_item_flag(0xFFFD, 0x0006))) goto labelFunc0437_072E;
	gflags[0x0170] = true;
	gflags[0x01B5] = true;
	UI_play_music(0x001F, Func09A0(0x0005, 0x0001));
	message("\"I am so glad that thou hast come -- and thou hast brought the Good Bard Iolo!\"");
	say();
	message("\"Dear Iolo, our subjects have spoken of that fine ballad which thou didst sing, and thy devotion to thy lost wife hath touched our heart.\"");
	say();
	message("\"I give thee this White Diamond Necklace, which thou mayest give to thy beloved when thou dost at last find her. It is a twin to mine own, except that mine is of a more subtle hue.\"");
	say();
	var0000 = Func099B(0xFFFD, 0x0001, 0x03BB, 0x0000, 0x0008, 0x0000, true);
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Thou art too kind, Lady! I thank thee, and shall give it to Gwenno upon our reunion!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"This calls for a toast. Hail to Beauty!\"");
	say();
	var0015 = Func0992(0x0001, "@To Beauty!@", "@To Beauty!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"And to love! Let us drink to the virtues of romance and bliss!\"");
	say();
	var0015 = Func0992(0x0001, "@To bliss!@", "@To bliss!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"And to good rulers, such as beloved Queen Fawn, who founded our fine society.\"");
	say();
	var0015 = false;
	var0016 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFFFF) in var0016)) goto labelFunc0437_05D4;
	var0015 = 0xFFFF;
	gflags[0x0173] = true;
	goto labelFunc0437_0607;
labelFunc0437_05D4:
	if (!(UI_get_npc_object(0xFFFE) in var0016)) goto labelFunc0437_05EF;
	var0015 = 0xFFFE;
	gflags[0x0175] = true;
	goto labelFunc0437_0607;
labelFunc0437_05EF:
	if (!(UI_get_npc_object(0xFFFD) in var0016)) goto labelFunc0437_0607;
	var0015 = 0xFFFD;
	gflags[0x0174] = true;
labelFunc0437_0607:
	UI_show_npc_face1(var0015, 0x0000);
	message("\"Thou must not forget our distant liege, Lady Yelinda. All hail Lord British and the glory that is Britannia!\"");
	say();
	UI_remove_npc_face1();
	UI_play_music(0x001E, Func09A0(0x0005, 0x0001));
	UI_set_conversation_slot(0x0000);
	message("\"Oh, my!\"");
	say();
	UI_show_npc_face1(0xFFCB, 0x0000);
	message("\"Milady, this one is allied with that foul fiend, Beast British!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"This is blasphemy! Jorvin, lock that criminal away and call for a speedy trial. Let this intruder be executed, even as Beast British slew our forefathers during his conquest of Sosaria!\"");
	say();
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFFCB, 0x000F);
	0xFFCB->Func07D2();
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0437], 0x0000);
	Func097F(0xFFCB, "@Take this!@", 0x0000);
	UI_set_new_schedules(0xFFC9, 0x0000, 0x0014, [0x0000, 0x0000]);
	UI_run_schedule(0xFFC9);
	Func097F(0xFFC9, "@Blasphemer!@", 0x0005);
	var0000 = 0x0003;
labelFunc0437_06B7:
	if (!(var0000 > 0x0000)) goto labelFunc0437_0718;
	var0008 = UI_create_new_object2(0x017D, [0x0000, 0x0000, 0x0000]);
	if (!var0008) goto labelFunc0437_070B;
	var0000 = UI_approach_avatar(var0008, 0x005A, 0x0028);
	if (!var0000) goto labelFunc0437_070B;
	UI_si_path_run_usecode(var0008, UI_get_object_position(0xFFCB), 0x000D, var0008, 0x017D, true);
labelFunc0437_070B:
	var0000 = (var0000 - 0x0001);
	goto labelFunc0437_06B7;
labelFunc0437_0718:
	if (!var0008) goto labelFunc0437_072A;
	Func097F(var0008, "@Save the Queen!@", 0x0002);
labelFunc0437_072A:
	abort;
	goto labelFunc0437_0737;
labelFunc0437_072E:
	message("\"\"I am so glad that thou hast come... But where is the Good Bard Iolo?\"");
	say();
	message("\"I wish to welcome him as well as thee. Return when he is with thee!\"");
	say();
	abort;
labelFunc0437_0737:
	goto labelFunc0437_078B;
labelFunc0437_073A:
	if (!(var0014 == false)) goto labelFunc0437_075E;
	if (!((var0002 == true) && (gflags[0x003E] == true))) goto labelFunc0437_0757;
	message("\"What an interesting Beauty mark thou hast... I am Lady Yelinda, ruler of Fawn -- the city of Beauty.\"");
	say();
	goto labelFunc0437_075B;
labelFunc0437_0757:
	message("\"Welcome to the city of Beauty. I am Lady Yelinda, ruler of Fawn.\"");
	say();
labelFunc0437_075B:
	goto labelFunc0437_078B;
labelFunc0437_075E:
	if (!(gflags[0x0170] && (!gflags[0x0172]))) goto labelFunc0437_0781;
	message("\"Until thy friend's innocence or guilt hath been proven, Avatar, we may not speak together.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC9, "@I am sorry...@", 0x0000);
	abort;
	goto labelFunc0437_078B;
labelFunc0437_0781:
	message("\"Welcome back, ");
	message(var0003);
	message(". Thy presence in Fawn adds greatly\tto its Beauty.\"");
	say();
labelFunc0437_078B:
	UI_set_item_flag(0xFFC9, 0x001C);
	UI_add_answer(["Fawn", "Beauty", "goblins", "storms", "name"]);
	UI_add_answer("bye");
labelFunc0437_07B2:
	converse attend labelFunc0437_0A15;
	case "goblins" attend labelFunc0437_07D3:
	message("\"Oh, horrible, vile creatures! They have killed all the Pikemen that were guarding the road to our beautiful city.\"");
	say();
	message("\"Whatever shall we do now?\"");
	say();
	UI_remove_answer("goblins");
	UI_add_answer("Pikemen");
labelFunc0437_07D3:
	case "Pikemen" attend labelFunc0437_07ED:
	message("\"Wonderful people. They hail from Monitor. They keep the roads safe.\"");
	say();
	UI_remove_answer("Pikemen");
	UI_add_answer("Monitor");
labelFunc0437_07ED:
	case "Monitor" attend labelFunc0437_0828:
	UI_remove_answer("Monitor");
	message("\"'Tis south of here. I do not associate with them. They are too warlike.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0437_081D;
	message("\"Chancellor Zulith deals with them for me.\"");
	say();
	UI_add_answer("Chancellor");
	goto labelFunc0437_0828;
labelFunc0437_081D:
	message("\"The Great Captains deal with them for me.\"");
	say();
	UI_add_answer("Great Captains");
labelFunc0437_0828:
	case "Great Captains" attend labelFunc0437_0846:
	message("\"Yes, Joth, Garth, and Voldin. They are my most trusted advisors... Aside from the Chancellor, of course.\"");
	say();
	message("\"They handle all the horrible little details of running the city. I would be lost without them, 'tis certain.\"");
	say();
	UI_remove_answer("Great Captains");
	UI_add_answer("Chancellor");
labelFunc0437_0846:
	case "Chancellor" attend labelFunc0437_0859:
	message("\"Zulith is a dear little man. He absolutely dotes on me, I fear. He simply would not have a life if he were not looking after me. He keeps all the paperwork for me and schedules mine audiences. Quite a mouse of a man, though.\"");
	say();
	UI_remove_answer("Chancellor");
labelFunc0437_0859:
	case "storms" attend labelFunc0437_08A3:
	UI_remove_answer("storms");
	message("\"Quite a nuisance, actually.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0437_0886;
	message("\"Alyssand tells me that the storms are the result of a lack of devotion to the pure concept of Beauty.");
	say();
	message("\"She is quite helpful to me. I think I shall make her my chief advisor...\"");
	say();
	goto labelFunc0437_08A3;
labelFunc0437_0886:
	message("\"The Oracle says the storms are a result of permitting the heretics within the city gates.\"");
	say();
	message("\"Odd that they did not stop after the heretics were banished from the city. I shall have to consult Kylista.\"");
	say();
	UI_add_answer("heretics");
	if (!(!gflags[0x018A])) goto labelFunc0437_08A3;
	UI_add_answer("Oracle");
labelFunc0437_08A3:
	case "heretics" attend labelFunc0437_08BD:
	message("\"Those filthy sailors camped outside the city gates have no regard whatsoever for Beauty. They preach some ridiculous notion about brotherhood... or some such.\"");
	say();
	UI_remove_answer("heretics");
	UI_add_answer("sailors");
labelFunc0437_08BD:
	case "sailors" attend labelFunc0437_08D7:
	message("\"They and their passengers arrived shortly before the storms began.\"");
	say();
	UI_remove_answer("sailors");
	UI_add_answer("passengers");
labelFunc0437_08D7:
	case "passengers" attend labelFunc0437_08F7:
	message("\"There was a portly mage named Batlin and a lovely lady named Gwenno.\"");
	say();
	UI_remove_answer("passengers");
	UI_add_answer(["Batlin", "Gwenno"]);
labelFunc0437_08F7:
	case "Batlin" attend labelFunc0437_0911:
	message("\"A disagreeable fellow. Travelled with some very rough sorts. He was seeking Daemon artifacts, I believe.\"");
	say();
	UI_remove_answer("Batlin");
	UI_add_answer("Daemon artifacts");
labelFunc0437_0911:
	case "Daemon artifacts" attend labelFunc0437_0924:
	message("\"Thou mayest find them throughout the land. They are of little interest... not Beautiful at all.\"");
	say();
	UI_remove_answer("Daemon artifacts");
labelFunc0437_0924:
	case "Gwenno" attend labelFunc0437_0937:
	message("\"She was interested in folk tales, I believe. I am afraid I could not help her. My last bard was transformed into a fox during a storm and ran away.\"");
	say();
	UI_remove_answer("Gwenno");
labelFunc0437_0937:
	case "Fawn" attend labelFunc0437_0960:
	UI_remove_answer("Fawn");
	message("\"Our city was named after the beautiful ruler who commissioned the Oracle.\"");
	say();
	gflags[0x0189] = true;
	if (!(gflags[0x0171] || (!gflags[0x0172]))) goto labelFunc0437_0960;
	UI_add_answer("Oracle");
labelFunc0437_0960:
	case "Oracle" attend labelFunc0437_097E:
	message("\"Thou hast never heard of the Oracle of Beauty?\" *\"Thou shouldst speak with Kylista at the temple.\"");
	say();
	gflags[0x018A] = true;
	UI_remove_answer("Oracle");
	UI_add_answer("Kylista");
labelFunc0437_097E:
	case "Kylista" attend labelFunc0437_09A0:
	message("\"She is the most beautiful woman in town...\"");
	say();
	message("\"aside from myself, of course.\"");
	say();
	message("\"She is the Priestess of Beauty. Thou canst find her at the temple.\"");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("temple");
labelFunc0437_09A0:
	case "temple" attend labelFunc0437_09B3:
	message("\"'Tis the largest building in the city, except for my palace.\"");
	say();
	UI_remove_answer("temple");
labelFunc0437_09B3:
	case "Beauty" attend labelFunc0437_09D5:
	message("\"We revere and protect all beautiful things here in Fawn. Everyone is dedicated to the truths of Beauty.\"");
	say();
	UI_remove_answer("Beauty");
	if (!(gflags[0x0189] == false)) goto labelFunc0437_09D5;
	UI_add_answer("Fawn");
labelFunc0437_09D5:
	case "name" attend labelFunc0437_09E8:
	message("\"Forgive me, I thought I had already introduced myself. I am Lady Yelinda.\"");
	say();
	UI_remove_answer("name");
labelFunc0437_09E8:
	case "bye" attend labelFunc0437_0A12:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell, gracious Lady!@", 0x0000);
	Func097F(0xFFC9, "@Do come again!@", 0x0002);
	goto labelFunc0437_0A15;
labelFunc0437_0A12:
	goto labelFunc0437_07B2;
labelFunc0437_0A15:
	endconv;
labelFunc0437_0A16:
	return;
}


