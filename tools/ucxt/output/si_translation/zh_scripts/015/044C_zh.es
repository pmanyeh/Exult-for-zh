#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func0620 object#(0x620) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func044C object#(0x44C) ()
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

	var0000 = Func0954();
	var0001 = UI_get_item_flag(0xFFB4, 0x001C);
	var0002 = Func0953();
	var0003 = false;
	if (!((event == 0x0007) && ((gflags[0x0045] || gflags[0x005F]) && ((!UI_get_item_flag(0xFFB4, 0x001E)) && (!gflags[0x0044]))))) goto labelFunc044C_015C;
	UI_show_npc_face0(0xFFB4, 0x0000);
	message("\"So, thou hast found me out? Well, to the blazes with it all!\"");
	say();
	UI_set_item_flag(0xFFB4, 0x001E);
	UI_set_item_flag(0xFFB4, 0x0004);
	var0004 = UI_get_object_position(0xFFB4);
	var0004[0x0001] = (var0004[0x0001] - (var0004[0x0003] / 0x0002));
	var0004[0x0002] = (var0004[0x0002] - (var0004[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0077);
	UI_remove_npc(0xFFB4);
	UI_move_object(0xFFBE, var0004);
	UI_set_alignment(0xFFBE, 0x0002);
	UI_set_new_schedules(0xFFBE, 0x0000, 0x0004, [var0004[0x0001], var0004[0x0002]]);
	UI_run_schedule(0xFFBE);
	Func097F(0xFFBE, "@Lorfag Tar!@", 0x0002);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x55, 0x0442]);
	gflags[0x0044] = true;
	var0005 = UI_find_nearby(0xFE9C, 0xFFFF, 0x0028, 0x0008);
	enum();
labelFunc044C_0139:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc044C_015B;
	UI_set_opponent(var0008, 0xFFBE);
	UI_set_oppressor(var0008, 0xFFBE);
	goto labelFunc044C_0139;
labelFunc044C_015B:
	abort;
labelFunc044C_015C:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFB4) != 0x000A))) goto labelFunc044C_01CA;
	Func097F(0xFE9C, "@Hello!@", 0x0000);
	0xFFB4->Func07D1();
	Func097F(0xFFB4, "@Welcome!@", 0x0002);
	if (!(UI_get_schedule_type(0xFFB4) != 0x0007)) goto labelFunc044C_01A9;
	UI_set_schedule_type(0xFFB4, 0x0003);
	goto labelFunc044C_01CA;
labelFunc044C_01A9:
	var0005 = UI_delayed_execute_usecode_array(0xFFB4, [(byte)0x23, (byte)0x55, 0x044C], 0x0005);
	UI_set_schedule_type(0xFFB4, 0x000A);
labelFunc044C_01CA:
	if (!(event == 0x0002)) goto labelFunc044C_01D6;
	event = 0x0009;
labelFunc044C_01D6:
	if (!(event == 0x0009)) goto labelFunc044C_0953;
	UI_run_schedule(0xFFB4);
	UI_clear_item_say(0xFFB4);
	UI_show_npc_face0(0xFFB4, 0x0000);
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc044C_022F;
	UI_clear_item_flag(0xFE9C, 0x000F);
	gflags[0x00B8] = true;
	message("\"Unusual taste, eh? I dare say I am the only one outside of the city of Fawn who drinks it.\"");
	say();
	message("\"I would share more with thee, but I think that thou dost not appreciate it. Besides, I must clean this foulness!\"");
	say();
	UI_set_schedule_type(0xFFB4, 0x000B);
	Func097F(0xFFB4, "@Such a waste!@", 0x0000);
	abort;
labelFunc044C_022F:
	if (!(!var0001)) goto labelFunc044C_0247;
	message("\"How may I help thee? My name is Simon.\"");
	say();
	UI_set_item_flag(0xFFB4, 0x001C);
	goto labelFunc044C_0251;
labelFunc044C_0247:
	message("\"How can I help, ");
	message(var0000);
	message("?\"");
	say();
labelFunc044C_0251:
	UI_add_answer(["duties", "visitors"]);
	if (!(gflags[0x0045] && gflags[0x005F])) goto labelFunc044C_026F;
	UI_add_answer("brown bottle");
labelFunc044C_026F:
	if (!(gflags[0x00A1] && (!gflags[0x0297]))) goto labelFunc044C_0281;
	UI_add_answer("strange wine");
labelFunc044C_0281:
	if (!gflags[0x0048]) goto labelFunc044C_028E;
	UI_add_answer("traitor");
labelFunc044C_028E:
	UI_add_answer("bye");
labelFunc044C_0295:
	converse attend labelFunc044C_0952;
	case "duties" attend labelFunc044C_02D0:
	UI_remove_answer("duties");
	message("\"I am the innkeeper of The Sleeping Soldier, Monitor's inn. If thou dost need a bed, I can certainly accommodate thee.\"");
	say();
	if (!(!gflags[0x00B8])) goto labelFunc044C_02BD;
	message("\"Or if thou dost care to join me in a bottle of ale, I will gladly share with thee.\"");
	say();
	UI_add_answer("ale");
labelFunc044C_02BD:
	UI_add_answer(["innkeeper", "The Sleeping Soldier", "Monitor", "bed"]);
labelFunc044C_02D0:
	case "innkeeper" attend labelFunc044C_02EA:
	UI_remove_answer("innkeeper");
	message("\"I have been Monitor's innkeeper for -- well, longer than I care to remember! I am probably the oldest person in town. I can remember when Marsten, our current Lord of Monitor, was but a baby! But I have no complaints. It hath been a fair life.\"");
	say();
	UI_add_answer("life");
labelFunc044C_02EA:
	case "life" attend labelFunc044C_030A:
	UI_remove_answer("life");
	message("\"Well, one cannot truly control one's destiny, can one? I have had my share of misfortune. I have learned to move forward and try and forget the past.\"");
	say();
	UI_add_answer(["misfortune", "the past"]);
labelFunc044C_030A:
	case "misfortune" attend labelFunc044C_031D:
	UI_remove_answer("misfortune");
	message("\"Alas, long ago, my young bride was killed by Goblins. We had ventured out onto the roads to journey to Fawn. At that time I was a Knight, and I stupidly believed that I could protect her on mine own. We were ambushed by the foul creatures. I barely escaped with mine own life.\"");
	say();
labelFunc044C_031D:
	case "the past" attend labelFunc044C_0330:
	UI_remove_answer("the past");
	message("\"When I was young I was a Knight of Monitor. I suppose technically I still am. Mine age prevents me from performing any Quests of Courage or going on patrol, of course. I passed the Test of Knighthood, but shortly afterwards the incident with the Goblins occurred. I am afraid that I had no more desire to battle after that. I have chosen to live quietly and run the inn.\"");
	say();
labelFunc044C_0330:
	case "The Sleeping Soldier" attend labelFunc044C_0343:
	UI_remove_answer("The Sleeping Soldier");
	message("\"'Tis an old inn. As old as Monitor itself. I can gladly accommodate thee if thou dost wish.\"");
	say();
labelFunc044C_0343:
	case "Monitor" attend labelFunc044C_035D:
	UI_remove_answer("Monitor");
	message("\"I have lived here all my life. My parents were killed when I was very young. In a Goblin raid, of course. Most deaths are usually caused by Goblins. We have spent our entire history fighting the creatures.\"");
	say();
	UI_add_answer("Goblins");
labelFunc044C_035D:
	case "Goblins" attend labelFunc044C_0386:
	UI_remove_answer("Goblins");
	message("\"No one knows where their home is. Templar is our local Goblin expert, so thou shouldst speak with him.\"");
	say();
	gflags[0x00A4] = true;
	message("\"Since the death of Astrid, some say that there is a traitor amongst us -- selling our secrets to the Goblins.\"");
	say();
	if (!(!var0003)) goto labelFunc044C_0386;
	UI_add_answer("traitor");
labelFunc044C_0386:
	case "traitor" attend labelFunc044C_03A1:
	UI_remove_answer("traitor");
	var0003 = true;
	message("\"I have mine own suspicions. Take a close look at Krayg. He seems to spend a lot of time in the woods on long walks... alone.\"");
	say();
	var0009 = true;
labelFunc044C_03A1:
	case "bed" attend labelFunc044C_046B:
	UI_remove_answer("bed");
	if (!(UI_get_schedule_type(0xFFB4) == 0x0007)) goto labelFunc044C_0467;
	message("\"The cost is 5 monetari per person. Wouldst thou like a room for the night?\"");
	say();
	if (!Func0955()) goto labelFunc044C_0460;
	var000A = (UI_get_array_size(UI_get_party_list()) * 0x0005);
	var000B = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc044C_042A;
	message("\"Here is thy key.\"");
	say();
	var000C = UI_remove_party_items(var000A, 0x03B7, 0xFE99, 0xFE99, 0x0000);
	var0005 = Func099B(0xFE9C, 0x0001, 0x0281, 0x004A, 0x0006, 0x0000, true);
	goto labelFunc044C_045D;
labelFunc044C_042A:
	var000D = Func0992(0x0001, "@But we do not have enough money...@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!(var000D == 0xFE9C)) goto labelFunc044C_0452;
	message("\"I do believe thou dost not have enough monetari. Please return when thou dost have the appropriate amount.\"");
	say();
	goto labelFunc044C_045D;
labelFunc044C_0452:
	UI_set_conversation_slot(0x0000);
	message("\"Please return when thou dost have the appropriate amount.\"");
	say();
labelFunc044C_045D:
	goto labelFunc044C_0464;
labelFunc044C_0460:
	message("\"Some other time, then.\"");
	say();
labelFunc044C_0464:
	goto labelFunc044C_046B;
labelFunc044C_0467:
	message("\"I can give thee a room if thou wilt come to mine inn when I am open!\"");
	say();
labelFunc044C_046B:
	case "ale" attend labelFunc044C_05AE:
	UI_remove_answer("ale");
	message("\"Yes, thou mayest drink thy fill of ale here. But I am particularly fond of mine own personal brand of ale. Have a drink?\"");
	say();
	gflags[0x005F] = true;
	if (!gflags[0x0045]) goto labelFunc044C_048F;
	UI_add_answer("brown bottle");
labelFunc044C_048F:
	var000E = Func0955();
	if (!var000E) goto labelFunc044C_05AA;
	UI_set_schedule_type(0xFFB4, 0x000F);
	Func094E(0xFE9C, "@Pfffz!@");
	var000D = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_04F3;
	UI_show_npc_face0(var000D, 0x0000);
	message("\"");
	message(var0002);
	message("! Art thou all right?\"");
	say();
	Func097F(var000D, "@What a mess!@", 0x0005);
	UI_remove_npc_face0();
	UI_set_conversation_slot(0x0000);
labelFunc044C_04F3:
	UI_halt_scheduled(0xFE9C);
	0xFE9C->Func0620();
	var0005 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x044C], 0x0019);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0004, (byte)0x6D, (byte)0x27, 0x0004, (byte)0x6E, (byte)0x27, 0x0004, (byte)0x61]);
	Func094F(0xFE9C, ["@Ohh!@", "@Eeehhh!@", "@Bleh!@", "@Yuk!@"]);
	var0005 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0795], 0x0011);
	var000F = UI_create_new_object(0x0268);
	if (!var000F) goto labelFunc044C_05A6;
	UI_set_item_frame(var000F, 0x0009);
	UI_set_item_flag(var000F, 0x0012);
	var0010 = UI_get_object_position(0xFE9C);
	var0011 = UI_update_last_created(var0010);
labelFunc044C_05A6:
	abort;
	goto labelFunc044C_05AE;
labelFunc044C_05AA:
	message("\"Suit thyself, then.\"");
	say();
labelFunc044C_05AE:
	case "visitors" attend labelFunc044C_05CE:
	UI_remove_answer("visitors");
	message("\"The only two memorable visitors we have had -- besides thyself -- were a fat sage and a scholar.\"");
	say();
	UI_add_answer(["fat sage", "scholar"]);
labelFunc044C_05CE:
	case "fat sage" attend labelFunc044C_064B:
	UI_remove_answer("fat sage");
	message("\"He had such a curiosity about the ancient ruins. I believe he followed Renfry into the Crypts so he could look around -- something there fascinated him.\"");
	say();
	message("\"Thou shouldst also speak with Andral, the sculptor. He and the sage spent many hours in conversation, here at the inn.\"");
	say();
	message("\"I believe he went northeast from here, towards the little hamlet of Sleeping Bull.\"");
	say();
	var000D = Func0992(0xFFFF, "@The man's name -- dost thou recall?!@", 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_060A;
	UI_set_conversation_slot(0x0000);
labelFunc044C_060A:
	message("\"Now what was that man's name? It was a simple name, unpleasant sounding and mean...\"");
	say();
	message("\"Batlin, that was it. He called himself the Sage Batlin.\"");
	say();
	var000D = Func0992(0xFFFE, "@We have found Batlin's trail!@", 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_0633;
	UI_set_conversation_slot(0x0000);
labelFunc044C_0633:
	message("\"Oh, and did I mention that he had several underlings travelling with him? There was a warrior, a sailor, and a hooded man.\"");
	say();
	UI_remove_npc_face1();
	UI_add_answer(["warrior", "sailor", "hooded man"]);
labelFunc044C_064B:
	case "warrior" attend labelFunc044C_0662:
	UI_remove_answer("warrior");
	message("\"Standarr had a disagreement with this warrior. I'd wager he could tell thee a tale or two about him!\"");
	say();
	gflags[0x008D] = true;
labelFunc044C_0662:
	case "sailor" attend labelFunc044C_0679:
	UI_remove_answer("sailor");
	message("\"A swarthy man who was called Deadeye. He had the look of a pirate about him. Shazzana spent a bit of time with him as I recall.\"");
	say();
	gflags[0x00A8] = true;
labelFunc044C_0679:
	case "hooded man" attend labelFunc044C_068C:
	UI_remove_answer("hooded man");
	message("\"I noticed a funny smell about him... almost like -- brimstone? I also could have sworn that under his hood there were horns upon his head. But, no -- that is foolish. It must be some kind of trick.\"");
	say();
labelFunc044C_068C:
	case "scholar" attend labelFunc044C_0737:
	UI_remove_answer("scholar");
	message("\"She said she was researching the land and seemed anxious to learn all about Serpent Isle. Spektor dealt with her, mostly.\"");
	say();
	gflags[0x00A7] = true;
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc044C_0718;
	UI_show_npc_face1(0xFFFD, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Gwenno! It must have been Gwenno!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, I believe that was her name...\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"");
	message(var0002);
	message("! What luck! We have found a trail to follow! Oh, Gwenno! Dost thou know where she went from here, milord?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I believe she went east, anxious to learn the wisdom of the Xenkan Monks. She set sail with Captain Hawk, bound for Moonshade and points beyond.\"");
	say();
	message("\"Of course, this was before the Storms. No sailor will brave these dangerous waters now.\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Praise Virtue! This means she is alive and well! I thank thee, sir, for this woman is my wife!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Very kind woman, she was, sir.\"");
	say();
	goto labelFunc044C_0737;
labelFunc044C_0718:
	message("\"Her name was Gwenno. She left here for the east, anxious to learn the wisdom of the Xenkan Monks.\"");
	say();
	message("\"Of course, this was before the Storms. No sailor will brave these dangerous waters now.\"");
	say();
	var000D = Func0992(0x0001, "@What luck! We have found a trail to follow!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc044C_0737:
	case "brown bottle" attend labelFunc044C_075E:
	UI_remove_answer("brown bottle");
	message("\"Hmmm. I cannot imagine... oh yes, I remember. I was taking a walk in that area. I must have been careless and dropped the bottle.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Walk?", "area", "change subject"]);
labelFunc044C_075E:
	case "Walk?" attend labelFunc044C_077E:
	UI_remove_answer("Walk?");
	message("\"That is correct. I was taking a walk. Sometimes I want to exercise and enjoy the fresh air.\"");
	say();
	UI_add_answer(["Way up there?", "What about Goblins?"]);
labelFunc044C_077E:
	case "Way up there?" attend labelFunc044C_0791:
	UI_remove_answer("Way up there?");
	message("\"Yes. What is wrong with that?\"");
	say();
labelFunc044C_0791:
	case "What about Goblins?" attend labelFunc044C_07A4:
	UI_remove_answer("What about Goblins?");
	message("\"What about them? They did not bother me. We cannot let them control our lives!\"");
	say();
labelFunc044C_07A4:
	case "area" attend labelFunc044C_080E:
	UI_remove_answer("area");
	message("\"Is that the area they believe is the Goblin rendezvous? I do not believe it. I have never seen Goblins there.\"");
	say();
	var000D = Func0992(0xFFFF, 0x0000, 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_0807;
	UI_show_npc_face1(var000D, 0x0000);
	message("\"So thou dost go there often?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Er, no, not at all. I only meant I did not see any Goblins then.\"");
	say();
	UI_show_npc_face1(var000D, 0x0000);
	message("\"Mine instincts tell me this man is lying, Avatar!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc044C_0807:
	UI_add_answer("Thou art lying!");
labelFunc044C_080E:
	case "Thou art lying!" attend labelFunc044C_0902:
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
	message("\"So I have been found out! Well, to the blazes with it all!!\"");
	say();
	var0004 = UI_get_object_position(0xFFB4);
labelFunc044C_0834:
	if (!(var0004[0x0003] > 0x0000)) goto labelFunc044C_0874;
	var0004[0x0001] = (var0004[0x0001] - 0x0001);
	var0004[0x0002] = (var0004[0x0002] - 0x0001);
	var0004[0x0003] = (var0004[0x0003] - 0x0002);
	goto labelFunc044C_0834;
labelFunc044C_0874:
	UI_obj_sprite_effect(0xFFB4, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_get_object_position(0xFFB4);
	UI_remove_npc(0xFFB4);
	UI_move_object(0xFFBE, var0004);
	UI_set_alignment(0xFFBE, 0x0002);
	UI_set_new_schedules(0xFFBE, 0x0000, 0x0004, [var0004[0x0001], var0004[0x0002]]);
	UI_run_schedule(0xFFBE);
	Func097F(0xFFBE, "@Lorfag Tar!@", 0x0002);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x55, 0x0442]);
	gflags[0x0044] = true;
	abort;
labelFunc044C_0902:
	case "change subject" attend labelFunc044C_0919:
	UI_remove_answer("change subject");
	message("\"Gladly! Thou hast come to thy senses...\"");
	say();
	UI_pop_answers();
labelFunc044C_0919:
	case "strange wine" attend labelFunc044C_092C:
	UI_remove_answer("strange wine");
	message("\"The Rangers of Moonshade make wine. Perhaps it is from there that this wine thou dost speak of hath come.\"");
	say();
labelFunc044C_092C:
	case "bye" attend labelFunc044C_094F:
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(0xFFB4, "@Come again!@", 0x0002);
	goto labelFunc044C_0952;
labelFunc044C_094F:
	goto labelFunc044C_0295;
labelFunc044C_0952:
	endconv;
labelFunc044C_0953:
	if (!(event == 0x0000)) goto labelFunc044C_09C6;
	var0012 = UI_get_schedule_type(0xFFB4);
	var0013 = UI_die_roll(0x0001, 0x0004);
	if (!(var0012 == 0x0007)) goto labelFunc044C_09C6;
	if (!(var0013 == 0x0001)) goto labelFunc044C_098C;
	var0014 = "@Need a room?@";
labelFunc044C_098C:
	if (!(var0013 == 0x0002)) goto labelFunc044C_099C;
	var0014 = "@Fine lodgings!@";
labelFunc044C_099C:
	if (!(var0013 == 0x0003)) goto labelFunc044C_09AC;
	var0014 = "@Rest thy bones here!@";
labelFunc044C_09AC:
	if (!(var0013 == 0x0004)) goto labelFunc044C_09BC;
	var0014 = "@Sleep well here!@";
labelFunc044C_09BC:
	UI_item_say(0xFFB4, var0014);
labelFunc044C_09C6:
	return;
}


