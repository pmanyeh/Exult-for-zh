#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0994 0x994 ();
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func092B 0x92B ();
extern void Func09AA 0x9AA ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0863 0x863 ();
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func09B4 0x9B4 (var var0000);

void Func0402 object#(0x402) ()
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

	var0000 = UI_get_npc_id(0xFFFE);
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((event == 0x0007) && UI_get_item_flag(0xFFFE, 0x001D))) goto labelFunc0402_0135;
	if (!gflags[0x0083]) goto labelFunc0402_0076;
	var0005 = UI_get_oppressor(0xFFFE);
	var0005 = (0x0000 - var0005);
	if (!(!gflags[0x0007])) goto labelFunc0402_006E;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0005), UI_get_npc_object(0xFFFE));
	return;
labelFunc0402_006E:
	Func092E(item);
	return;
	goto labelFunc0402_0135;
labelFunc0402_0076:
	if (!gflags[0x025B]) goto labelFunc0402_0135;
	if (!((Func0994() != 0x0010) && ((!gflags[0x0004]) && (Func0994() != 0x0018)))) goto labelFunc0402_011E;
	UI_show_npc_face0(0xFEE2, 0x0000);
	message("\"Do not die, my sweet King...\"");
	say();
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Beatrix, is that thee?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I forgive thee for deserting us, King Shamino. To prove that my love for thee is stronger than eternity, I shall heal thee of thy wounds.\"");
	say();
	message("\"Keep this book as a keepsake between us. Now I must go into the Void, but remember me always...\"");
	say();
	var0006 = Func095C(0xFFFE, 0x0000);
	var0007 = Func095C(0xFFFE, 0x0003);
	var0008 = (var0006 - var0007);
	Func095E(0xFFFE, 0x0003, var0008);
	var0009 = Func099B(0xFFFE, 0x0001, 0x0282, 0x003F, 0x0000, 0x0000, true);
	gflags[0x025B] = false;
	gflags[0x025C] = true;
	UI_clear_item_flag(0xFFFE, 0x001D);
	goto labelFunc0402_0135;
labelFunc0402_011E:
	UI_clear_item_flag(0xFFFE, 0x001D);
	UI_reduce_health(0xFFFE, 0x0032, 0x0000);
labelFunc0402_0135:
	if (!(event == 0x0001)) goto labelFunc0402_01E1;
	UI_item_say(0xFE9C, "Shamino...");
	0xFFFE->Func07D1();
	if (!(!UI_get_item_flag(0xFFFE, 0x001E))) goto labelFunc0402_017C;
	Func097F(0xFFFE, (("@Yes, " + var0003) + "?"), 0x0002);
	UI_set_schedule_type(0xFFFE, 0x0003);
	goto labelFunc0402_01E1;
labelFunc0402_017C:
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var000A == 0x0001)) goto labelFunc0402_019F;
	Func097F(0xFFFE, "@Backward, not forward!@", 0x0002);
labelFunc0402_019F:
	if (!(var000A == 0x0002)) goto labelFunc0402_01B5;
	Func097F(0xFFFE, "@Free thyselves!@", 0x0002);
labelFunc0402_01B5:
	if (!(var000A == 0x0003)) goto labelFunc0402_01CB;
	Func097F(0xFFFE, "@Chaos reigns!@", 0x0002);
labelFunc0402_01CB:
	if (!(var000A == 0x0004)) goto labelFunc0402_01E1;
	Func097F(0xFFFE, "@Take from the rich!@", 0x0002);
labelFunc0402_01E1:
	if (!(event == 0x0009)) goto labelFunc0402_0658;
	UI_clear_item_say(0xFFFE);
	if (!UI_get_item_flag(0xFFFE, 0x0006)) goto labelFunc0402_0211;
	UI_set_schedule_type(0xFFFE, 0x001F);
	UI_add_answer("leave");
	goto labelFunc0402_021F;
labelFunc0402_0211:
	UI_run_schedule(0xFFFE);
	UI_add_answer("join");
labelFunc0402_021F:
	UI_show_npc_face0(0xFFFE, 0x0000);
	if (!(gflags[0x0006] && (!gflags[0x02A2]))) goto labelFunc0402_0295;
	message("\"Avatar! Art thou all right? I heard what sounded like the explosions of a volcano -- and look at all the fire here...\"");
	say();
	message("\"I have been searching all over for thee! That storm hath left me quite disconcerted. I can find neither Iolo nor Dupre.\"");
	say();
	message("\"And, to make matters worse, nothing remains of the equipment that Lord British gave us! It hath all been replaced by strange items that I do not recognize.\"");
	say();
	message("\"Perhaps thou shouldst inspect thine equipment as well! I shall make a list of what we have.\"");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x031D, 0x00BD, 0x0000, 0x0000, true);
	Func092B();
	gflags[0x02A2] = true;
	Func097F(0xFFFE, "@Such strangeness!@", 0x0000);
	Func09AA();
	UI_add_to_party(0xFFFE);
	gflags[0x0018] = true;
	UI_set_new_schedules(0xFFFE, 0x0000, 0x001A, [0x097C, 0x0464]);
	abort;
labelFunc0402_0295:
	if (!(var0000 == 0x001E)) goto labelFunc0402_033A;
	message("\"Thou hast escaped the foul mages' prison swiftly, indeed. Most wonderful!\"");
	say();
	message("\"Of course, I never doubted that thou wouldst return...\"");
	say();
	message("\"I also have news, ");
	message(var0001);
	message(". I bear a message, as well as two presents.\"");
	say();
	var000B = false;
	var000C = false;
	UI_add_answer(["message", "presents"]);
	if (!(!gflags[0x0135])) goto labelFunc0402_02D4;
	UI_add_answer("news");
labelFunc0402_02D4:
	if (!gflags[0x013A]) goto labelFunc0402_02E1;
	UI_add_answer("How didst thou arrive?");
labelFunc0402_02E1:
	if (!gflags[0x012B]) goto labelFunc0402_02EE;
	UI_add_answer("death");
labelFunc0402_02EE:
	UI_remove_answer("join");
	goto labelFunc0402_03B9;
labelFunc0402_02F8:
	UI_add_to_party(0xFFFE);
	gflags[0x0018] = true;
	UI_set_npc_id(0xFFFE, 0x0000);
	var0009 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x000A);
	Func097F(0xFFFE, "@Welcome back!@", 0x0000);
	abort;
	goto labelFunc0402_0344;
labelFunc0402_033A:
	message("\"I am ready to provide whatever aid I can, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0402_0344:
	if (!(UI_get_npc_id(0xFFFF) == 0x001E)) goto labelFunc0402_0359;
	UI_add_answer("Dupre's whereabouts");
labelFunc0402_0359:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0402_036E;
	UI_add_answer("Iolo's whereabouts");
labelFunc0402_036E:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0402_0383;
	UI_add_answer("Boydon's whereabouts");
labelFunc0402_0383:
	if (!((!UI_get_item_flag(0xFFFE, 0x0006)) && (UI_get_cont_items(0xFFFE, 0xFE99, 0xFE99, 0xFE99) && (gflags[0x0018] == true)))) goto labelFunc0402_03AF;
	UI_add_answer("belongings");
labelFunc0402_03AF:
	UI_add_answer(["bye"]);
labelFunc0402_03B9:
	converse attend labelFunc0402_0657;
	case "belongings" attend labelFunc0402_03CE:
	UI_remove_answer("belongings");
	Func0863();
labelFunc0402_03CE:
	case "How didst thou arrive?" attend labelFunc0402_03F2:
	UI_remove_answer("How didst thou arrive?");
	message("\"The monks came and brought me here, saying that it was vitally important for me to be here.\"");
	say();
	message("\"The one called Karnax said that I must fulfill my purpose, or the world itself would be in jeopardy...\"");
	say();
	if (!(var000B && var000C)) goto labelFunc0402_03F2;
	goto labelFunc0402_02F8;
labelFunc0402_03F2:
	case "death" attend labelFunc0402_0412:
	UI_remove_answer("death");
	message("\"That is right, I was dead when last we saw one another. However, the good monks found my body and returned life to me.\"");
	say();
	if (!(var000B && var000C)) goto labelFunc0402_0412;
	goto labelFunc0402_02F8;
labelFunc0402_0412:
	case "news" attend labelFunc0402_0463:
	UI_remove_answer("news");
	if (!UI_get_item_flag(0xFFFD, 0x0006)) goto labelFunc0402_0435;
	message("\"To be honest, this is not my news -- it belongs to our good friend, the Bard. Thou shouldst ask Iolo.\"");
	say();
	goto labelFunc0402_0456;
labelFunc0402_0435:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0402_044A;
	message("\"Quickly, let us find Iolo. He can tell thee all about the discovery!\"");
	say();
	goto labelFunc0402_0456;
labelFunc0402_044A:
	message("\"The Mages of this place are not friendly toward outsiders, but thy survival shall surely impress them.\"");
	say();
	message("\"Particularly, I am sure that the one known as Gustacio will be inclined to help us now. Let us seek him out.\"");
	say();
	gflags[0x0135] = true;
labelFunc0402_0456:
	if (!(var000B && var000C)) goto labelFunc0402_0463;
	goto labelFunc0402_02F8;
labelFunc0402_0463:
	case "message" attend labelFunc0402_04A6:
	UI_remove_answer("message");
	var000B = true;
	if (!var0002) goto labelFunc0402_0487;
	message("\"I have had the chance to spend a few hours in the company of the Mage Frigidazzi, on whose account thou hast been imprisoned.\"");
	say();
	message("\"She asked me to convey her apologies to thee, and to present thee with three gifts.\"");
	say();
	goto labelFunc0402_0499;
labelFunc0402_0487:
	message("\"The Sorceress Frigidazzi met secretly with me, and expressed her sorrow at what had been done to thee.\"");
	say();
	message("\"I think she likes thee, ");
	message(var0001);
	message(". But with that MageLord around, she doth not dare to see thee again!\"");
	say();
	message("\"As a sign of her regret for what hath happened -- jail and all -- she sent three gifts to thee.\"");
	say();
labelFunc0402_0499:
	if (!(var000B && var000C)) goto labelFunc0402_04A6;
	goto labelFunc0402_02F8;
labelFunc0402_04A6:
	case "presents" attend labelFunc0402_053E:
	UI_remove_answer("presents");
	var000C = true;
	if (!var0002) goto labelFunc0402_04CE;
	message("\"These earrings are of ancient devising, and I was told that they would be most flattering to thee.\"");
	say();
	message("\"Note that they are engraved with serpentine runes, milady.\"");
	say();
	message("\"There is also a magic scroll, upon which is inscribed a spell to protect against heat. This we shall need ere we venture into the subterranean passageways.\"");
	say();
	goto labelFunc0402_04DA;
labelFunc0402_04CE:
	message("\"I bear three gifts from thine admirer -- a magic scroll, an earring, and a note.\"");
	say();
	message("\"The scroll bears a spell of protection against heat, and should be most useful.\"");
	say();
	message("\"As for the earring, it is inscribed with serpentine runes of ancient design.\"");
	say();
labelFunc0402_04DA:
	message("\"Lastly, there is a note, but its contents are not known to me.\"");
	say();
	message("\"Here they are...\"");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x027B, 0xFE99, 0x0000, 0x0000, true);
	var0009 = Func099B(0xFE9C, 0x0001, 0x031D, 0x00CD, 0x0006, 0x0000, true);
	var0009 = Func099B(0xFE9C, 0x0001, 0x02CB, 0x0010, 0x0000, 0x0000, true);
	gflags[0x014B] = true;
	if (!(var000B && var000C)) goto labelFunc0402_053E;
	goto labelFunc0402_02F8;
labelFunc0402_053E:
	case "join" attend labelFunc0402_05B4:
	if (!(gflags[0x0082] && (!gflags[0x004A]))) goto labelFunc0402_057D;
	message("\"And disregard the rules of the Test of Knighthood? ");
	message(var0001);
	message(", I am shocked.\"");
	say();
	Func094E(0xFFB5, "@Thou must go alone.@");
	Func097F(0xFFB5, "@Alone!@", 0x0000);
	Func097F(0xFFFE, "@Shocked!@", 0x0002);
	abort;
labelFunc0402_057D:
	UI_remove_answer("join");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0402_05AC;
	UI_add_answer("leave");
	message("\"Most gratefully!\"");
	say();
	UI_add_to_party(0xFFFE);
	gflags[0x0018] = true;
	goto labelFunc0402_05B4;
labelFunc0402_05AC:
	message("\"I would join with thee, old friend, but I can see that thou already hast a large party.\"");
	say();
	message("\"A woodsman like myself would feel uncomfortable travelling with such a large group. I will remain here, instead.\"");
	say();
labelFunc0402_05B4:
	case "leave" attend labelFunc0402_05EC:
	UI_remove_answer("leave");
	if (!(!gflags[0x0006])) goto labelFunc0402_05D1;
	message("\"But we have barely begun, Avatar! How can I stand idly here while the adventure awaits?\"");
	say();
	goto labelFunc0402_05EC;
labelFunc0402_05D1:
	UI_add_answer("join");
	message("\"If that is what thou dost wish...\"");
	say();
	UI_remove_from_party(0xFFFE);
	Func0863();
	Func09B4(0xFFFE);
labelFunc0402_05EC:
	case "Dupre's whereabouts" attend labelFunc0402_05FF:
	UI_remove_answer("Dupre's whereabouts");
	message("\"Thou knowest our good friend! He hath deposited himself at the Blue Boar Inn, and hath been trying out the local brews!\"");
	say();
labelFunc0402_05FF:
	case "Iolo's whereabouts" attend labelFunc0402_0616:
	UI_remove_answer("Iolo's whereabouts");
	message("\"Iolo hath struck up a friendship with the Mage Gustacio, from whom he is learning much about the storms which plague this land.\"");
	say();
	message("\"I expect we could find him at Gustacio's manor.\"");
	say();
labelFunc0402_0616:
	case "Boydon's whereabouts" attend labelFunc0402_062D:
	UI_remove_answer("Boydon's whereabouts");
	message("\"Why, that magical creation doth have a budding romance with the shopgirl from the Canton!\"");
	say();
	message("\"If the shop is open when we arrive there, Boydon will almost certainly be there.\"");
	say();
labelFunc0402_062D:
	case "bye" attend labelFunc0402_0654:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thanks!@", 0x0000);
	Func097F(0xFFFE, "@Any time.@", 0x0002);
	goto labelFunc0402_0657;
labelFunc0402_0654:
	goto labelFunc0402_03B9;
labelFunc0402_0657:
	endconv;
labelFunc0402_0658:
	if (!(event == 0x0003)) goto labelFunc0402_06B7;
	var000D = Func0994();
	if (!(var000D == 0x0016)) goto labelFunc0402_068F;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"We are beset by dragons, Avatar! We must slay them quickly!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFE, "@I hate dragons!@", 0x0002);
	abort;
labelFunc0402_068F:
	if (!(var000D == 0x0010)) goto labelFunc0402_06B7;
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"It hath been so long I barely recognize this place, like somewhere from a dream. I do recall that there is an illusory door west of the castle gates near a big tree.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFE, "@Somewhere around here...@", 0x0003);
labelFunc0402_06B7:
	return;
}


