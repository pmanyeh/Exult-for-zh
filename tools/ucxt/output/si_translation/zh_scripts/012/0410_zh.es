#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0942 0x942 (var var0000);
extern void Func08FF 0x8FF ();

void Func0410 object#(0x410) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0410_0035;
	var0003 = "day";
	goto labelFunc0410_003B;
labelFunc0410_0035:
	var0003 = "evening";
labelFunc0410_003B:
	if (!(gflags[0x0128] && ((event == 0x0000) && (!gflags[0x00E6])))) goto labelFunc0410_0382;
	UI_set_npc_id(0xFFF0, (UI_get_npc_id(0xFFF0) + 0x0001));
	if (!(UI_get_npc_id(0xFFF0) == 0x0008)) goto labelFunc0410_00B3;
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	UI_sprite_effect(0x002B, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_delayed_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x55, 0x0410], 0x0003);
labelFunc0410_00B3:
	if (!(UI_get_npc_id(0xFFF0) == 0x0007)) goto labelFunc0410_011D;
	Func097F(0xFFF0, "@Oh, no!@", 0x0000);
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	var0004[0x0001] = (var0004[0x0001] - 0x0004);
	var0004[0x0002] = (var0004[0x0002] - 0x0003);
	UI_sprite_effect(0x0028, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0410_011D:
	if (!(UI_get_npc_id(0xFFF0) == 0x0006)) goto labelFunc0410_0177;
	Func097F(0xFFF0, "@Must hide...@", 0x0000);
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	var0004[0x0001] = (var0004[0x0001] + 0x0011);
	UI_sprite_effect(0x0029, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0410_0177:
	if (!(UI_get_npc_id(0xFFF0) == 0x0005)) goto labelFunc0410_01E1;
	Func097F(0xFFF0, "@Teleport storm!@", 0x0000);
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	var0004[0x0001] = (var0004[0x0001] + 0x000C);
	var0004[0x0002] = (var0004[0x0002] + 0x0007);
	UI_sprite_effect(0x002A, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0410_01E1:
	if (!(UI_get_npc_id(0xFFF0) == 0x0004)) goto labelFunc0410_0228;
	UI_set_weather(0x0003);
	Func097F(0xFFF0, "@'Tis so windy!@", 0x0003);
	var0006 = 0x0247;
	var0007 = UI_find_nearby(0xFFF0, var0006, 0x000A, 0x0000);
	if (!var0007) goto labelFunc0410_0228;
	UI_remove_item(var0007);
labelFunc0410_0228:
	if (!(UI_get_npc_id(0xFFF0) == 0x0003)) goto labelFunc0410_0268;
	Func097F(0xFFF0, "@I should fetch my belongings.@", 0x0000);
	var0006 = 0x0321;
	var0007 = UI_find_nearby(0xFFF0, var0006, 0x000A, 0x0000);
	if (!var0007) goto labelFunc0410_0268;
	UI_remove_item(var0007);
labelFunc0410_0268:
	if (!(UI_get_npc_id(0xFFF0) == 0x0002)) goto labelFunc0410_029F;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	UI_play_music(0x000C, Func09A0(0x0005, 0x0001));
	Func097F(0xFFF0, "@It doth foretell a storm...@", 0x0000);
labelFunc0410_029F:
	if (!(UI_get_npc_id(0xFFF0) == 0x0001)) goto labelFunc0410_0381;
	UI_play_sound_effect(0x0074);
	UI_set_weather(0x0002);
	var0008 = UI_find_nearby(0xFFF0, 0x025F, 0x0014, 0x0010);
	var0009 = UI_create_new_object(0x0339);
	if (!var0009) goto labelFunc0410_02F2;
	UI_set_item_flag(var0009, 0x0012);
	var0005 = UI_update_last_created(var0004);
labelFunc0410_02F2:
	enum();
labelFunc0410_02F3:
	for (var000C in var0008 with var000A to var000B) attend labelFunc0410_0381;
	if (!(UI_get_item_frame(var000C) == 0x0002)) goto labelFunc0410_0312;
	var0006 = 0x0321;
labelFunc0410_0312:
	if (!(UI_get_item_frame(var000C) == 0x0003)) goto labelFunc0410_0326;
	var0006 = 0x0247;
labelFunc0410_0326:
	if (!((UI_get_item_frame(var000C) == 0x0002) || (UI_get_item_frame(var000C) == 0x0003))) goto labelFunc0410_037E;
	var0004 = UI_get_object_position(var000C);
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
	var0009 = UI_create_new_object(var0006);
	if (!var0009) goto labelFunc0410_037E;
	UI_set_item_flag(var0009, 0x0012);
	var0005 = UI_update_last_created(var0004);
labelFunc0410_037E:
	goto labelFunc0410_02F3;
labelFunc0410_0381:
	abort;
labelFunc0410_0382:
	if (!(gflags[0x0128] && ((event == 0x0002) && (!gflags[0x00E6])))) goto labelFunc0410_03D8;
	UI_set_schedule_type(0xFFDB, 0x000C);
	Func097F(0xFFDB, "@Awk!@", 0x0002);
	UI_set_camera(0xFFDB);
	UI_remove_npc(0xFFF0);
	UI_set_polymorph(0xFFDB, 0x0304);
	var0005 = UI_delayed_execute_usecode_array(0xFFDB, [(byte)0x23, (byte)0x55, 0x0425], 0x0005);
labelFunc0410_03D8:
	if (!(event == 0x0001)) goto labelFunc0410_0400;
	UI_item_say(0xFE9C, "@Excuse me...@");
	Func097F(0xFFF0, "@But of course!@", 0x0002);
	UI_set_schedule_type(0xFFF0, 0x0003);
labelFunc0410_0400:
	if (!(event == 0x0009)) goto labelFunc0410_07B8;
	UI_run_schedule(0xFFF0);
	UI_show_npc_face0(0xFFF0, 0x0000);
	UI_clear_item_say(0xFFF0);
	var000D = UI_get_item_flag(0xFFF0, 0x001C);
	if (!(var000D == false)) goto labelFunc0410_0454;
	UI_set_item_flag(0xFFF0, 0x001C);
	message("\"I am a man! I am a man! I cannot tell thee how miserable it is to be a bird.\"");
	say();
	UI_add_answer("bird");
	UI_set_timer(0x0005);
	goto labelFunc0410_0477;
labelFunc0410_0454:
	message("\"I am forever in thy debt, ");
	message(var0000);
	message(". How may ol' Edrin be of aid to thee?\"");
	say();
	UI_add_answer("aid");
	if (!(UI_get_timer(0x0005) >= 0x0003)) goto labelFunc0410_0477;
	var000E = true;
labelFunc0410_0477:
	UI_add_answer(["name", "bye"]);
labelFunc0410_0484:
	converse attend labelFunc0410_07B7;
	case "name" attend labelFunc0410_049A:
	message("\"My name is Edrin.\"");
	say();
	UI_remove_answer("name");
labelFunc0410_049A:
	case "aid" attend labelFunc0410_04D6:
	UI_remove_answer("aid");
	if (!UI_is_pc_female()) goto labelFunc0410_04B9;
	var000F = "woman";
	goto labelFunc0410_04BF;
labelFunc0410_04B9:
	var000F = "man";
labelFunc0410_04BF:
	message("\"Well, ");
	message(var0000);
	message(", 'tis the least I can do for the ");
	message(var000F);
	message(" who made me once again a man. I can but hope thou wilt never experience the misery of being a bird!\"");
	say();
	UI_add_answer("bird");
labelFunc0410_04D6:
	case "bird" attend labelFunc0410_0525:
	UI_remove_answer("bird");
	if (!var000E) goto labelFunc0410_04FB;
	var0010 = "However,@ he appears sad, @I am still without passage home";
	UI_add_answer("still without");
	goto labelFunc0410_0508;
labelFunc0410_04FB:
	var0010 = "Of course, first I must locate passage aboard a ship";
	UI_add_answer("passage");
labelFunc0410_0508:
	message("\"'Twas terrible, ");
	message(var0000);
	message("! Well, I should say, flying was rather exciting and all, but I never became accustomed to the worms. Were it not for my dreams, I would surely have lost sanity! But now, thanks to thee, I have no want but to return to my flock. ");
	message(var0010);
	message(".\"");
	say();
	UI_add_answer(["dreams", "flock"]);
labelFunc0410_0525:
	case "dreams" attend labelFunc0410_056E:
	UI_remove_answer("dreams");
	if (!(!gflags[0x00F3])) goto labelFunc0410_0550;
	message("\"'Twas the most unusual thing I have ever known. Well, save being a bird. When I would dream, I would envision this maiden -- fair as summer's day. She called herself Siranush. Oftimes I would only see her from afar, bathing in a spring or basking in the sun. And other times, we would be together, swimming, gardening, walking...\"");
	say();
	message("\"Oh, I beg thy pardon, ");
	message(var0000);
	message(", I did forget myself for a bit.\"");
	say();
	gflags[0x00F3] = true;
	goto labelFunc0410_056E;
labelFunc0410_0550:
	if (!(!gflags[0x0213])) goto labelFunc0410_0564;
	message("\"Yes, yes, ");
	message(var0000);
	message(". I told thee about the lovely maiden, Siranush. If only she were real,\" he sighs.");
	say();
	goto labelFunc0410_056E;
labelFunc0410_0564:
	message("He smiles. \"Yes, ");
	message(var0000);
	message(". I had forgotten to offer thee my thanks. Thou hast provided for me the opportunity to learn my visions were real. Now, however, I will have not the opportunity to lay eyes upon my lovely Siranush again...\"");
	say();
labelFunc0410_056E:
	case "flock" attend labelFunc0410_0587:
	UI_remove_answer("flock");
	message("\"Indeed, ");
	message(var0000);
	message(". I am a shepherd, caretaker of sheep. I have never known another life. Well, excepting my time as a bird, of course! But, like one of mine own sheep lost in the wild, I long for a way to return home.\"");
	say();
labelFunc0410_0587:
	case "passage" attend labelFunc0410_05A7:
	UI_remove_answer("passage");
	message("\"Why, yes. After I find my brother we will return home, if possible. It will be much safer to travel by ship.\"");
	say();
	UI_add_answer(["brother", "safer"]);
labelFunc0410_05A7:
	case "still without" attend labelFunc0410_05CA:
	UI_remove_answer("still without");
	message("\"Aye. My brother says that he was told we can find safe passage aboard a ship here. But all we've seen is Captain Hawk.\"");
	say();
	UI_add_answer(["brother", "safe", "Hawk"]);
labelFunc0410_05CA:
	case "Hawk" attend labelFunc0410_0645:
	UI_remove_answer("Hawk");
	message("\"He is the captain of the... the... what is the name of that ship?\"");
	say();
	if (!Func0942(0xFFD5)) goto labelFunc0410_0622;
	UI_show_npc_face1(0xFFD5, 0x0000);
	message("\"The Arabella.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFF0, 0x0000);
	message("\"Ah, yes, now I remember. I thank thee.\"");
	say();
	UI_show_npc_face1(0xFFD5, 0x0000);
	message("\"Thou art welcome.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc0410_0626;
labelFunc0410_0622:
	message("\"Oh, well, I cannot remember.\"");
	say();
labelFunc0410_0626:
	if (!UI_get_item_flag(0xFFD8, 0x0004)) goto labelFunc0410_0641;
	message("\"Anyway, now that he hath been killed, I know not what we'll do. I suppose we must await the arrival of another ship.\"");
	say();
	UI_add_answer("killed");
	goto labelFunc0410_0645;
labelFunc0410_0641:
	message("\"Anyway, for some reason he doth refuse to sail again. I do wish he would change his mind, or that another ship would arrive.\"");
	say();
labelFunc0410_0645:
	case "killed" attend labelFunc0410_067D:
	message("\"I did not see anything...\"");
	say();
	if (!Func0942(0xFFD5)) goto labelFunc0410_0673;
	UI_show_npc_face1(0xFFD5, 0x0000);
	message("\"Nor did I!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0410_0673:
	message("\"Nor did Kane. However, he was in the tavern when Hawk scuffled with a man named Flindo. We can only guess the outcome, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0410_067D:
	case "safe", "safer" attend labelFunc0410_06A0:
	UI_remove_answer(["safe", "safer"]);
	message("\"Well, I suppose a ship would offer only a little more protection, but anything would be better than travelling in the open, what with the storms and all.\"");
	say();
	UI_add_answer("storms");
labelFunc0410_06A0:
	case "storms" attend labelFunc0410_06B9:
	UI_remove_answer("storms");
	message("\"They are most unusual, ");
	message(var0000);
	message(". The thunder and lightning I have seen before, but the suddenness with which they strike would be unbelievable had I not experienced one firsthand. The storm had barely begun, when there was a flash of lightning and a clap of thunder. And the next thing I knew, I was flapping wings instead of waving arms. My memory is weak after that, but I do remember hearing Kane's shouts.\"");
	say();
labelFunc0410_06B9:
	case "brother" attend labelFunc0410_06EB:
	UI_remove_answer("brother");
	message("\"Kane is my brother. He is a few years my junior, but certainly an able shepherd. I know how worried he must have been while I was a parrot.\"");
	say();
	if (!var000E) goto labelFunc0410_06E0;
	message("\"I'm glad he met Mistress Devra.\"");
	say();
	UI_add_answer("Devra");
	goto labelFunc0410_06EB;
labelFunc0410_06E0:
	message("\"I wonder how he will react to seeing me again. I hope he hath not strayed too far from home.\"");
	say();
	UI_add_answer("home");
labelFunc0410_06EB:
	case "home" attend labelFunc0410_070B:
	UI_remove_answer("home");
	message("\"Well, we live on the mainland. Since I spy the Mountains of Freedom off in the distance, I know that this is not the mainland. And I have seen little goblin activity.\"");
	say();
	UI_add_answer(["Mountains of Freedom", "Goblin activity"]);
labelFunc0410_070B:
	case "Mountains of Freedom" attend labelFunc0410_071E:
	UI_remove_answer("Mountains of Freedom");
	message("\"I know nothing about them, save for that they follow the coastline in an upside down `U' shape -- there are no mountain ranges like that near my farm.\"");
	say();
labelFunc0410_071E:
	case "Goblin activity" attend labelFunc0410_073E:
	UI_remove_answer("Goblin activity");
	message("\"Yes, in the forest near our farm there are a terrible number of Goblins. They often come to raid us on the way to the city.\"");
	say();
	UI_add_answer(["raid", "city"]);
labelFunc0410_073E:
	case "city" attend labelFunc0410_0757:
	UI_remove_answer("city");
	message("\"Aye, ");
	message(var0000);
	message(". We tend our sheep south of Fawn. Excellent grazing pastures there.\"");
	say();
labelFunc0410_0757:
	case "raid" attend labelFunc0410_0770:
	UI_remove_answer("raid");
	message("\"Well, they rarely set upon us, ");
	message(var0000);
	message(", though sometimes a few will steal our sheep. Sometimes they are worse than wolves, I think. And much meaner!\"");
	say();
labelFunc0410_0770:
	case "Devra" attend labelFunc0410_078A:
	UI_remove_answer("Devra");
	message("\"She is the owner of the inn at Sleeping Bull. Kane tells me that she helped him find a place to stay while waiting for Captain Hawk. Of course, now it is time for us to head home.\"");
	say();
	UI_add_answer("home");
labelFunc0410_078A:
	case "bye" attend labelFunc0410_07B4:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Fare thee well!@", 0x0000);
	Func097F(0xFFF0, "@Goodbye!@", 0x0002);
	Func08FF();
	goto labelFunc0410_07B7;
labelFunc0410_07B4:
	goto labelFunc0410_0484;
labelFunc0410_07B7:
	endconv;
labelFunc0410_07B8:
	return;
}


