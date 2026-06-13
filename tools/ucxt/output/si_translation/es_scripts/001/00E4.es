#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func0855 0x855 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0932 0x932 (var var0000);
extern var Func0955 0x955 ();
extern void Func0855 0x855 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0957 0x957 (var var0000);
extern var Func098E 0x98E ();
extern void Func0933 0x933 (var var0000, var var0001);
extern void Func0934 0x934 (var var0000);

void Func00E4 shape#(0xE4) ()
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
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;

	var0000 = UI_get_npc_id(item);
	if (!(var0000 == 0x0000)) goto labelFunc00E4_0029;
	UI_set_npc_id(item, UI_die_roll(0x000A, 0x000C));
	var0000 = UI_get_npc_id(item);
labelFunc00E4_0029:
	var0001 = Func0954();
	if (!(var0000 == 0x000E)) goto labelFunc00E4_00E6;
	if (!((event == 0x0007) && (!gflags[0x00C9]))) goto labelFunc00E4_005E;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	gflags[0x00C9] = true;
	abort;
labelFunc00E4_005E:
	if (!UI_get_item_flag(item, 0x0000)) goto labelFunc00E4_0097;
	UI_play_sound_effect(0x0030);
	UI_clear_item_flag(item, 0x0000);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], UI_get_random(0x0006));
	goto labelFunc00E4_00E5;
labelFunc00E4_0097:
	UI_play_sound_effect(0x0039);
	var0003 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_flag(item, 0x0000);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0002);
labelFunc00E4_00E5:
	abort;
labelFunc00E4_00E6:
	if (!(var0000 == 0x001E)) goto labelFunc00E4_0103;
	if (!((event == 0x000A) || (event == 0x0002))) goto labelFunc00E4_0103;
	Func0855(event);
	abort;
labelFunc00E4_0103:
	if (!(event == 0x0001)) goto labelFunc00E4_01FC;
	UI_item_say(0xFE9C, "@Pikeman!@");
	Func097F(item, "@Yes?@", 0x0002);
	if (!(var0000 == 0x0009)) goto labelFunc00E4_017D;
	if (!Func0932(0xFE9C)) goto labelFunc00E4_0160;
	UI_clear_item_say(item);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc00E4_0155;
	Func097F(item, "@Fight!@", 0x0001);
	goto labelFunc00E4_015F;
labelFunc00E4_0155:
	Func097F(item, "@Don't be a coward!@", 0x0001);
labelFunc00E4_015F:
	abort;
labelFunc00E4_0160:
	gflags[0x0007] = true;
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0006);
	abort;
labelFunc00E4_017D:
	if (!(var0000 == 0x001E)) goto labelFunc00E4_01F4;
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("\"I suppose thou dost wish me to operate the gate?\"");
	say();
	if (!Func0955()) goto labelFunc00E4_01DB;
	if (!(!gflags[0x0048])) goto labelFunc00E4_01C1;
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("\"Stand back while I crank the winch. 'Tis heavy and dangerous. Thou dost never know when it might come down upon thine head.\"");
	say();
	event = 0x0009;
	Func0855(event);
	abort;
	goto labelFunc00E4_01D8;
labelFunc00E4_01C1:
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("\"Gladly I will for a fellow Knight. Have a pleasant day and may goblin blood stain thy sword soon.\"");
	say();
	event = 0x0009;
	Func0855(event);
	abort;
labelFunc00E4_01D8:
	goto labelFunc00E4_01F4;
labelFunc00E4_01DB:
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("\"Then bother me not! I must be about my duty!\"");
	say();
	Func097F(item, "@Watch out for goblins...@", 0x0002);
	abort;
labelFunc00E4_01F4:
	UI_set_schedule_type(item, 0x0003);
labelFunc00E4_01FC:
	if (!(event == 0x000D)) goto labelFunc00E4_0225;
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0005);
	return;
labelFunc00E4_0225:
	if (!(event == 0x0002)) goto labelFunc00E4_0294;
	if (!gflags[0x0007]) goto labelFunc00E4_027A;
	gflags[0x0007] = false;
	var0004 = UI_get_object_position(0xFE9C);
	var0005 = UI_get_object_position(item);
	if (!((UI_get_distance(item, 0xFE9C) < 0x0005) && (var0004[0x0003] == var0005[0x0003]))) goto labelFunc00E4_026C;
	goto labelFunc00E4_0956;
	goto labelFunc00E4_0279;
labelFunc00E4_026C:
	UI_clear_item_say(item);
	UI_item_say(item, "@Please step forward.@");
labelFunc00E4_0279:
	abort;
labelFunc00E4_027A:
	if (!((UI_get_item_frame(item) != 0x000A) && (!gflags[0x0083]))) goto labelFunc00E4_0293;
	UI_set_schedule_type(item, 0x0010);
labelFunc00E4_0293:
	return;
labelFunc00E4_0294:
	if (!(event == 0x0000)) goto labelFunc00E4_0327;
	var0006 = UI_die_roll(0x0000, 0x0008);
	if (!(var0006 == 0x0001)) goto labelFunc00E4_02BB;
	UI_item_say(item, "@Do not tarry here!@");
labelFunc00E4_02BB:
	if (!(var0006 == 0x0002)) goto labelFunc00E4_02CD;
	UI_item_say(item, "@Pay the tariff.@");
labelFunc00E4_02CD:
	if (!(var0006 == 0x0003)) goto labelFunc00E4_02DF;
	UI_item_say(item, "@Move along.@");
labelFunc00E4_02DF:
	if (!(var0006 == 0x0004)) goto labelFunc00E4_02F1;
	UI_item_say(item, "@Beware of Goblins.@");
labelFunc00E4_02F1:
	if (!(var0006 == 0x0005)) goto labelFunc00E4_0303;
	UI_item_say(item, "@Is it meal time yet?@");
labelFunc00E4_0303:
	if (!(var0006 == 0x0006)) goto labelFunc00E4_0326;
	if (!gflags[0x0048]) goto labelFunc00E4_031E;
	UI_item_say(item, "@Greetings, Knight!@");
	goto labelFunc00E4_0326;
labelFunc00E4_031E:
	UI_item_say(item, "@Knave!@");
labelFunc00E4_0326:
	abort;
labelFunc00E4_0327:
	if (!((event == 0x0009) && (var0000 == 0x000A))) goto labelFunc00E4_036B;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEF1, 0x0000);
	message("\"Why dost thou interrupt? I am a Pikeman of Monitor.\"");
	say();
	message("\"I must return to my duties lest the goblin horde take us.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(item, "@Be vigilant!@", 0x0002);
labelFunc00E4_036B:
	if (!((event == 0x0009) && (var0000 == 0x000B))) goto labelFunc00E4_03AF;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("\"I would have words with thee but my duties call.\"");
	say();
	message("\"Please consult me when I am not on duty.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(item, "@Be vigilant!@", 0x0002);
labelFunc00E4_03AF:
	if (!((event == 0x0009) && (var0000 == 0x000C))) goto labelFunc00E4_03F3;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("\"Greetings. I'm a Pikeman of Monitor.\"");
	say();
	message("\"The Goblins are dangerous. Watch out for them. As for me, I must return to my duties now.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(item, "@Be vigilant!@", 0x0002);
labelFunc00E4_03F3:
	if (!((event == 0x0009) && (var0000 == 0x0003))) goto labelFunc00E4_045A;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	if (!(!UI_get_item_flag(0xFFBB, 0x001C))) goto labelFunc00E4_042A;
	message("\"I will not discuss matters with a stranger to Monitor. Thou shouldst speak with Lord Marsten.\"");
	say();
	goto labelFunc00E4_044C;
labelFunc00E4_042A:
	if (!(!gflags[0x0048])) goto labelFunc00E4_0440;
	message("\"Thou art not a Knight. Only warriors are welcome here. Move along before thou dost feel the cold steel of mine halberd.\"");
	say();
	UI_set_schedule_type(item, 0x000C);
	goto labelFunc00E4_044C;
labelFunc00E4_0440:
	message("\"Welcome, Knight. I must be about my duties.\"");
	say();
	UI_set_schedule_type(item, 0x000C);
labelFunc00E4_044C:
	UI_remove_npc_face0();
	Func097F(item, "@Move along!@", 0x0002);
labelFunc00E4_045A:
	if (!((event == 0x0009) && (var0000 == 0x0005))) goto labelFunc00E4_0513;
	var0007 = UI_find_nearby(item, 0x00E4, 0x001E, 0x0000);
	enum();
labelFunc00E4_047C:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc00E4_04A4;
	UI_set_schedule_type(var000A, 0x0014);
	Func097F(var000A, "@Find the traitor!@", UI_get_random(0x0014));
	goto labelFunc00E4_047C;
labelFunc00E4_04A4:
	UI_show_npc_face0(0xFEF1, 0x0000);
	if (!UI_npc_nearby(0xFFC1)) goto labelFunc00E4_0504;
	message("\"Thou didst call, Lord Caladin?\"");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("\"Send thy men to arrest Lord Marsten! I have evidence that he is our traitor!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Arrest... Lord Marsten?\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Look, man, thou art a Bear like myself! Obey me now, and all will be right.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, milord.\"");
	say();
	Func097F(0xFFC1, "@On thy way, then!@", 0x0000);
	Func097F(item, "@Yes, milord.@", 0x0003);
	goto labelFunc00E4_0512;
labelFunc00E4_0504:
	message("\"Avatar, I am pleased to report that my men are scouring the city for that traitor Marsten.\"");
	say();
	Func097F(item, "@Find Marsten!@", 0x0000);
labelFunc00E4_0512:
	abort;
labelFunc00E4_0513:
	if (!((event == 0x0009) && (var0000 == 0x000F))) goto labelFunc00E4_055B;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("\"Please spare me! I shall do anything! I do not want to be roasted over a goblin's fire...\"");
	say();
	message("\"Oh, er, hello there. My name is Johnson. Pardon mine outburst, but I thought thou mightest be a goblin. I was attempting to scare them, surprise them, before I rushed them.\"");
	say();
	message("\"Thou art most fortunate. I might have accidentally killed thee had I not recognized thee as being from Monitor. I was going to kill as many of those green devils as I could before making my way back.\"");
	say();
	message("\"Let us return to Monitor! We will be greeted with a hero's welcome for we will be the first to have survived, I mean, braved the goblin's lair.\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@To Monitor!@", 0x0005);
	UI_set_npc_id(item, 0x0010);
labelFunc00E4_055B:
	if (!((event == 0x0001) && (var0000 == 0x0010))) goto labelFunc00E4_058F;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("\"There is no time for small talk! We must be on our way back to Monitor!\" *\"Thou wouldst not want us to be eaten before we have the chance to become heroes, wouldst thou?\" *\" Of course not! Let us be on our way!\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@I shan't fear goblins...@", 0x0005);
labelFunc00E4_058F:
	if (!((event == 0x0009) && (var0000 == 0x000D))) goto labelFunc00E4_05DA;
	UI_set_npc_id(item, 0x0003);
	UI_set_schedule_type(item, 0x000C);
	var000B = UI_find_nearby(item, 0x00E4, 0x0014, 0x0000);
	enum();
labelFunc00E4_05C1:
	for (var000E in var000B with var000C to var000D) attend labelFunc00E4_05D9;
	UI_set_schedule_type(var000E, 0x000C);
	goto labelFunc00E4_05C1;
labelFunc00E4_05D9:
	abort;
labelFunc00E4_05DA:
	if (!((event == 0x0009) && (var0000 == 0x0001))) goto labelFunc00E4_0946;
	UI_set_schedule_type(item, 0x0007);
	UI_show_npc_face0(0xFEF1, 0x0000);
	message("\"This is the Bull Tower, knave. State thy business or be gone. We have no time for idle chit-chat with Goblins about.\"");
	say();
	UI_add_answer(["Goblins", "pikeman", "Bull Tower"]);
	if (!(gflags[0x01CD] && (!gflags[0x01D1]))) goto labelFunc00E4_0622;
	UI_add_answer("Captain Hawk");
labelFunc00E4_0622:
	if (!(gflags[0x01CD] && (!gflags[0x01CE]))) goto labelFunc00E4_0637;
	UI_set_npc_id(0xFFD8, 0x0001);
labelFunc00E4_0637:
	var000F = (UI_get_npc_id(0xFFD8) * 0x0064);
	if (!(gflags[0x01CE] && (!gflags[0x01D1]))) goto labelFunc00E4_0657;
	UI_add_answer("pay fine");
labelFunc00E4_0657:
	UI_add_answer("bye");
labelFunc00E4_065E:
	converse attend labelFunc00E4_0945;
	case "Goblins" attend labelFunc00E4_0674:
	UI_remove_answer("Goblins");
	message("\"Yes, that entire vile race is the scourge of all men of the Serpent Isle.\"");
	say();
labelFunc00E4_0674:
	case "pikeman" attend labelFunc00E4_0687:
	UI_remove_answer("pikeman");
	message("\"I received my training on the List Fields by the finest knights and trainers in all of Monitor. Now my duty is to protect the travelling citizenry from all manner of harm. Goblins, thieves and the like.\"");
	say();
labelFunc00E4_0687:
	case "Bull Tower" attend labelFunc00E4_069A:
	UI_remove_answer("Bull Tower");
	message("\"The Bull Tower was erected to protect the people of Sleeping Bull from Goblin attack. I dare say since it was built they have seldom dared to challenge it.\"");
	say();
labelFunc00E4_069A:
	case "Captain Hawk" attend labelFunc00E4_06D8:
	UI_remove_answer("Captain Hawk");
	message("\"So, thou art a friend of that criminal? His ransom is a mere ");
	message(var000F);
	message(" Monetari.\"");
	say();
	message("\"We also accept other precious items...\"");
	say();
	if (!(!gflags[0x01CE])) goto labelFunc00E4_06CD;
	Func09AC(0xFFD4, 0x0507, 0x08BF, 0x0003);
labelFunc00E4_06CD:
	gflags[0x01CE] = true;
	UI_add_answer("pay fine");
labelFunc00E4_06D8:
	case "pay fine" attend labelFunc00E4_0735:
	message("\"Dost thou wish to pay Captain Hawk's fine?\"");
	say();
	if (!Func0955()) goto labelFunc00E4_072A;
	message("\"I do not believe that a rogue like thyself hast the riches to buy Hawk's freedom! What canst thou give us?\"");
	say();
	UI_push_answers();
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0x0002)) goto labelFunc00E4_070E;
	UI_add_answer("gold bars");
labelFunc00E4_070E:
	UI_add_answer(["jewels", "Monetari", "guilders", "Fawn money", "magic items", "nothing"]);
	goto labelFunc00E4_0735;
labelFunc00E4_072A:
	Func097F(item, "@Thou dost waste my time!@", 0x0000);
	abort;
labelFunc00E4_0735:
	case "jewels" attend labelFunc00E4_074C:
	UI_remove_answer("jewels");
	message("\"Don't take jewels. Thou mightest cheat us by telling us they was worth more than they was!\"");
	say();
	message("\"Gold or silver, yeah. Jewels, no.\"");
	say();
labelFunc00E4_074C:
	case "Monetari" attend labelFunc00E4_0868:
	UI_remove_answer("Monetari");
	message("\"Now that's something we like! How much dost thou have?\"");
	say();
	var0010 = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	var0011 = Func0992(0xFFFE, (("@We've got " + var0010) + " Monetari, sir.@"), (("@I've got " + var0010) + " Monetari.@"), false);
	UI_set_conversation_slot(0x0000);
	if (!(var0010 > var000F)) goto labelFunc00E4_0853;
	message("\"'Tis not enough!\"");
	say();
	var0011 = Func0992(0x0001, (("@But thou didst say the ransom was " + var000F) + " Monetari!@"), (("@But thou didst say the ransom was " + var000F) + " Monetari!@"), false);
	UI_set_conversation_slot(0x0000);
	var000F = (((var0010 / 0x0064) + UI_get_random(0x0005)) * 0x0064);
	if (!(var000F < 0x0BB8)) goto labelFunc00E4_083E;
	var0000 = (var000F / 0x0064);
	UI_set_npc_id(0xFFD8, var0000);
	var000F = (var0000 * 0x0064);
	message("\"Well, we changed our minds. Now we want ");
	message(var000F);
	message(" Monetari!\"");
	say();
	var0011 = Func0992(0x0001, "@They are thieves!@", 0x0000, false);
	if (!(var0011 != 0xFE9C)) goto labelFunc00E4_083B;
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc00E4_083B:
	goto labelFunc00E4_084C;
labelFunc00E4_083E:
	message("\"'Tis not enough. Bring us more!\"");
	say();
	UI_set_npc_id(0xFFD8, 0x001F);
labelFunc00E4_084C:
	UI_pop_answers();
	goto labelFunc00E4_0868;
labelFunc00E4_0853:
	message("\"Only ");
	message(var0010);
	message("? 'Tis not enough!\"");
	say();
	Func097F(item, "@Remove thyself!@", 0x0000);
	abort;
labelFunc00E4_0868:
	case "guilders" attend labelFunc00E4_087F:
	UI_remove_answer("guilders");
	message("\"Thou dost mean the strange glowing money that the mages use?\"");
	say();
	message("\"Bah! Take that to Bull and exchange it for true money -- like Monetari!!!\"");
	say();
labelFunc00E4_087F:
	case "Fawn money" attend labelFunc00E4_0892:
	UI_remove_answer("Fawn money");
	message("\"Ha ha ha!!! Very funny. Take those little silver coins to Bull, and exchange them for true coin!\"");
	say();
labelFunc00E4_0892:
	case "magic items" attend labelFunc00E4_08A5:
	UI_remove_answer("magic items");
	message("\"Pwah! Monitorians do not need magic -- especially not magic weapons!\"");
	say();
labelFunc00E4_08A5:
	case "gold bars" attend labelFunc00E4_090F:
	UI_remove_answer("gold bars");
	message("\"All right, thou canst have him. Here be the key.\"");
	say();
	var0012 = true;
labelFunc00E4_08BC:
	if (!(var0012 == true)) goto labelFunc00E4_08DD;
	var0012 = UI_remove_party_items(0x0001, 0x0286, 0xFE99, 0xFE99, 0x0000);
	goto labelFunc00E4_08BC;
labelFunc00E4_08DD:
	gflags[0x01D1] = true;
	var0002 = Func099B(0xFE9C, 0x0001, 0x0281, 0x004F, 0x0001, 0x0000, true);
	UI_set_npc_id(0xFFD8, 0x0000);
	Func097F(item, "@Thanks for the gold!@", 0x0000);
	abort;
labelFunc00E4_090F:
	case "nothing" attend labelFunc00E4_091F:
	message("\"I did not think thou didst have any money!\"");
	say();
	UI_pop_answers();
labelFunc00E4_091F:
	case "bye" attend labelFunc00E4_0942:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(item, "@Farewell!@", 0x0002);
	abort;
labelFunc00E4_0942:
	goto labelFunc00E4_065E;
labelFunc00E4_0945:
	endconv;
labelFunc00E4_0946:
	if (!((event == 0x0009) && (var0000 == 0x0009))) goto labelFunc00E4_0D43;
labelFunc00E4_0956:
	UI_clear_item_say(item);
	if (!UI_get_item_flag(0xFE9C, 0x0000)) goto labelFunc00E4_097B;
	UI_item_say(item, "@What!!?@");
	Func097F(item, "@Who said that?!@", 0x0008);
	abort;
labelFunc00E4_097B:
	UI_show_npc_face0(0xFEED, 0x0000);
	if (!gflags[0x0083]) goto labelFunc00E4_0992;
	message("\"Sorry, but we have too many people in there already.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0992:
	var0004 = UI_get_object_position(item);
	if (!((UI_get_item_frame(item) != 0x000A) || ((var0004[0x0001] != 0x03F8) || ((var0004[0x0002] != 0x0A77) || (var0004[0x0003] != 0x0006))))) goto labelFunc00E4_09E7;
	message("\"Sorry, but I cannot help thee until I return to my desk. All the paperwork that I have to fill out is there.\"");
	say();
	UI_si_path_run_usecode(item, [0x03FB, 0x0A77, 0x0006], 0x000D, item, 0x00E4, true);
	goto labelFunc00E4_0D43;
labelFunc00E4_09E7:
	message("\"My, what a fine-looking warrior! How might I be of service to thee?\"");
	say();
	var0013 = Func0957(["nothing", "fight", "train"]);
	if (!(var0013 == 0x0001)) goto labelFunc00E4_0A0E;
	message("\"Maybe when thou dost feel more brave, then.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0A0E:
	if (!((UI_game_hour() < 0x0009) || (UI_game_hour() > 0x0011))) goto labelFunc00E4_0A29;
	message("\"The business hours are from 9am to 6pm. Return then.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0A29:
	if (!(var0013 == 0x0002)) goto labelFunc00E4_0A3B;
	message("\"Merely a spar then? All right, good enough....\"");
	say();
	message("\"Which of you dost wish to fight?\"");
	say();
labelFunc00E4_0A3B:
	if (!(var0013 == 0x0003)) goto labelFunc00E4_0A49;
	message("\"Which of you dost wish to train?\"");
	say();
labelFunc00E4_0A49:
	var0014 = Func098E();
	var0014 = (0x0000 & var0014);
	var0015 = ["nobody"];
	enum();
labelFunc00E4_0A63:
	for (var000A in var0014 with var0016 to var0017) attend labelFunc00E4_0A8A;
	if (!(!(var000A == 0x0000))) goto labelFunc00E4_0A87;
	var0015 = (var0015 & UI_get_npc_name(var000A));
labelFunc00E4_0A87:
	goto labelFunc00E4_0A63;
labelFunc00E4_0A8A:
	var0018 = Func0957(var0015);
	var0018 = var0014[var0018];
	if (!(var0018 == 0x0000)) goto labelFunc00E4_0AAD;
	message("\"Well, mayhap some other time, then.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0AAD:
	var0018 = UI_get_npc_object(var0018);
	var000A = UI_get_object_position(var0018);
	var0015 = UI_get_object_position(item);
	if (!((UI_get_distance(var0018, item) > 0x0008) || ((var000A[0x0003] != var0015[0x0003]) || UI_get_item_flag(var0018, 0x0000)))) goto labelFunc00E4_0AF8;
	message("\"Where is he, anyway? Tell him to step forward before bothering me again.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0AF8:
	var0014 = [0xFFC1, 0xFFB9, 0xFFB1];
	enum();
labelFunc00E4_0B08:
	for (var0001 in var0014 with var0019 to var001A) attend labelFunc00E4_0B53;
	if (!((UI_game_hour() > 0x0008) && (UI_game_hour() < 0x000C))) goto labelFunc00E4_0B50;
	if (!((!Func0932(var0001)) && (!UI_get_item_flag(var0001, 0x0004)))) goto labelFunc00E4_0B50;
	UI_move_object(var0001, [0x03D4, 0x0A8C, 0x0000]);
labelFunc00E4_0B50:
	goto labelFunc00E4_0B08;
labelFunc00E4_0B53:
	var0014 = [0xFFB6, 0xFFB1];
	enum();
labelFunc00E4_0B60:
	for (var0001 in var0014 with var001B to var001C) attend labelFunc00E4_0BAB;
	if (!((UI_game_hour() > 0x000B) && (UI_game_hour() < 0x000F))) goto labelFunc00E4_0BA8;
	if (!((!Func0932(var0001)) && (!UI_get_item_flag(var0001, 0x0004)))) goto labelFunc00E4_0BA8;
	UI_move_object(var0001, [0x03D4, 0x0A8C, 0x0000]);
labelFunc00E4_0BA8:
	goto labelFunc00E4_0B60;
labelFunc00E4_0BAB:
	if (!((UI_game_hour() > 0x000E) && (UI_game_hour() < 0x0012))) goto labelFunc00E4_0BE8;
	if (!((!Func0932(0xFF6A)) && (!UI_get_item_flag(var0001, 0x0004)))) goto labelFunc00E4_0BE8;
	UI_move_object(0xFF6A, [0x03D4, 0x0A8C, 0x0000]);
labelFunc00E4_0BE8:
	if (!(!(Func0932(0xFFC1) || (Func0932(0xFFB6) || (Func0932(0xFF6A) || Func0932(0xFFB9)))))) goto labelFunc00E4_0C0E;
	message("\"Sorry lad, but no one is around for thee to spar with. Come back some other time.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0C0E:
	if (!(var0013 == 0x0003)) goto labelFunc00E4_0D32;
labelFunc00E4_0C18:
	message("\"With whom dost thou wish to train?\"");
	say();
	var0014 = [0x0000, 0xFFC1, 0xFFB6, 0xFF6A, 0xFFB9];
	var001D = ["nobody", "Caladin", "Shazzana", "Brendann", "Luther"];
	var001E = ["invalid time", "9am and noon", "noon and 3pm", "3pm and 6pm", "9am and noon"];
	var001F = Func0957(var001D);
	if (!(var001F == 0x0001)) goto labelFunc00E4_0C75;
	message("\"Then why art thou wasting my time?\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0C75:
	var0020 = var0014[var001F];
	if (!(var0020 == 0xFFB6)) goto labelFunc00E4_0C91;
	var0021 = "She's";
	goto labelFunc00E4_0C97;
labelFunc00E4_0C91:
	var0021 = "He's";
labelFunc00E4_0C97:
	if (!(!Func0932(var0020))) goto labelFunc00E4_0CCC;
	var0022 = var001D[var001F];
	var0023 = var001E[var001F];
	message("\"Sorry, but ");
	message(var0022);
	message(" is not around. ");
	message(var0021);
	message(" is usually here between ");
	message(var0023);
	message(". Thou mightest return then.\"");
	say();
	goto labelFunc00E4_0C18;
labelFunc00E4_0CCC:
	var0024 = var001D[var001F];
	message("\"Training costs 50 Monetari. All right?\"");
	say();
	if (!Func0955()) goto labelFunc00E4_0D2B;
	message("\"Oh, ");
	message(var0024);
	message(", this here warrior wants to train with ye!\"");
	say();
	UI_remove_npc_face0();
	UI_set_npc_id(0xFF6A, 0x0000);
	UI_set_npc_id(0xFFB1, 0x0000);
	UI_set_npc_id(0xFFC1, 0x0000);
	UI_set_npc_id(0xFFB6, 0x0000);
	UI_set_npc_id(0xFFB9, 0x0000);
	Func0933(var0020, var0018);
	goto labelFunc00E4_0D32;
labelFunc00E4_0D2B:
	message("\"Return when thou art ready.\"");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0D32:
	if (!(var0013 == 0x0002)) goto labelFunc00E4_0D43;
	Func0934(var0018);
	abort;
labelFunc00E4_0D43:
	return;
}


