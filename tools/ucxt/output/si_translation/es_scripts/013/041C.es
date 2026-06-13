#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func0994 0x994 ();
extern var Func0955 0x955 ();
extern void Func0852 0x852 ();
extern void Func0853 0x853 ();
extern void Func0851 0x851 ();
extern var Func09B3 0x9B3 (var var0000);
extern void Func09B4 0x9B4 (var var0000);
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func08FF 0x8FF ();

void Func041C object#(0x41C) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_object_position(0xFFE4);
	if (!((var0003[0x0001] < 0x08DF) && ((var0003[0x0001] > 0x0890) && ((var0003[0x0002] < 0x072F) && (var0003[0x0002] > 0x0700))))) goto labelFunc041C_004F;
	var0004 = true;
labelFunc041C_004F:
	var0005 = false;
	var0006 = UI_part_of_day();
	if (!((var0006 > 0x0001) || (var0006 < 0x0006))) goto labelFunc041C_0075;
	var0006 = "day";
	goto labelFunc041C_007B;
labelFunc041C_0075:
	var0006 = "evening";
labelFunc041C_007B:
	if (!(event == 0x0007)) goto labelFunc041C_00B5;
	if (!UI_get_item_flag(0xFFE4, 0x001D)) goto labelFunc041C_00B5;
	Func0976(0xFFE4, 0x0005);
	UI_clear_item_flag(0xFFE4, 0x001D);
	var0003 = UI_execute_usecode_array(0xFFE4, [(byte)0x55, 0x070A]);
labelFunc041C_00B5:
	if (!(event == 0x0001)) goto labelFunc041C_00EB;
	UI_item_say(0xFE9C, "@Hello, there.@");
	0xFFE4->Func07D1();
	Func097F(0xFFE4, (("@Greetings, " + var0000) + ".@"), 0x0002);
	UI_set_schedule_type(0xFFE4, 0x0003);
labelFunc041C_00EB:
	if (!(event == 0x0000)) goto labelFunc041C_0197;
	var0007 = UI_get_random(0x0006);
	if (!(var0007 == 0x0001)) goto labelFunc041C_0111;
	UI_item_say(0xFFE4, "@Art thou thirsty?@");
labelFunc041C_0111:
	if (!(var0007 == 0x0002)) goto labelFunc041C_0125;
	UI_item_say(0xFFE4, "@Ale! Wine!@");
labelFunc041C_0125:
	if (!(var0007 == 0x0003)) goto labelFunc041C_0139;
	UI_item_say(0xFFE4, "@Welcome!@");
labelFunc041C_0139:
	if (!(var0007 == 0x0004)) goto labelFunc041C_014D;
	UI_item_say(0xFFE4, "@Want a room?@");
labelFunc041C_014D:
	if (!(var0007 == 0x0005)) goto labelFunc041C_0183;
	if (!Func0942(0xFFE2)) goto labelFunc041C_0179;
	UI_item_say(0xFFE4, "@Rocco!@");
	Func097F(0xFFE2, "@In a minute...@", 0x0002);
	goto labelFunc041C_0183;
labelFunc041C_0179:
	UI_item_say(0xFFE4, "@Work, work, work...@");
labelFunc041C_0183:
	if (!(var0007 == 0x0006)) goto labelFunc041C_0197;
	UI_item_say(0xFFE4, "@Baked fish!@");
labelFunc041C_0197:
	if (!(event == 0x0008)) goto labelFunc041C_01DC;
	if (!gflags[0x0228]) goto labelFunc041C_01D2;
	var0003 = UI_set_npc_prop(0xFE9C, 0x000A, 0x0000);
	UI_set_polymorph(0xFFE4, 0x02D1);
	var0003 = UI_set_npc_prop(0xFE9C, 0x000A, 0x0001);
	goto labelFunc041C_01DC;
labelFunc041C_01D2:
	UI_set_polymorph(0xFFE4, 0x02D1);
labelFunc041C_01DC:
	if (!(event == 0x000A)) goto labelFunc041C_01EE;
	UI_item_say(0xFFE4, "@I'm ready.@");
labelFunc041C_01EE:
	if (!(event == 0x0009)) goto labelFunc041C_08BF;
	if (!UI_get_item_flag(0xFFE4, 0x0006)) goto labelFunc041C_0217;
	UI_set_schedule_type(0xFFE4, 0x001F);
	UI_add_answer("leave");
	goto labelFunc041C_0232;
labelFunc041C_0217:
	UI_run_schedule(0xFFE4);
	UI_clear_item_say(0xFFE4);
	if (!gflags[0x0015]) goto labelFunc041C_0232;
	UI_add_answer("belongings");
labelFunc041C_0232:
	UI_show_npc_face0(0xFFE4, 0x0000);
	var0008 = UI_get_item_flag(0xFFE4, 0x001C);
	if (!((var0008 == false) && (!gflags[0x0004]))) goto labelFunc041C_0274;
	UI_set_item_flag(0xFFE4, 0x001C);
	message("\"This is the Blue Boar Inn, and I am the barmaid. My name is Petra.\"");
	say();
	UI_add_answer(["Blue Boar Inn", "barmaid"]);
	goto labelFunc041C_02DD;
labelFunc041C_0274:
	if (!gflags[0x0004]) goto labelFunc041C_02C6;
	if (!(!gflags[0x0139])) goto labelFunc041C_0296;
	message("\"Mine existence is pointless now, ");
	message(var0000);
	message(". Rocco -- my love -- is dead, and the Blue Boar destroyed.\"");
	say();
	message("\"I am only an automaton, with no hope that any soul I may have will join Rocco in the world beyond this one. There is nothing left for me.\"");
	say();
	gflags[0x0139] = true;
	goto labelFunc041C_02C3;
labelFunc041C_0296:
	if (!(UI_get_item_flag(0xFFE4, 0x0006) || (!(Func0994() == 0x000E)))) goto labelFunc041C_02B9;
	message("\"Glad to talk to thee again, ");
	message(var0002);
	message(". I only wish I could be of more help to thee. I am merely an automaton...\"");
	say();
	goto labelFunc041C_02C3;
labelFunc041C_02B9:
	message("\"Aiding thee is mine only solace. How may I be of service, ");
	message(var0000);
	message("?\"");
	say();
labelFunc041C_02C3:
	goto labelFunc041C_02DD;
labelFunc041C_02C6:
	if (!var0004) goto labelFunc041C_02D9;
	message("\"Can I bring thee anything, ");
	message(var0000);
	message("?\"");
	say();
	goto labelFunc041C_02DD;
labelFunc041C_02D9:
	message("\"Is this not a nice day?\"");
	say();
labelFunc041C_02DD:
	if (!(gflags[0x0226] && (!UI_get_item_flag(0xFFE4, 0x0006)))) goto labelFunc041C_02F6;
	UI_add_answer("acid");
labelFunc041C_02F6:
	if (!(gflags[0x0227] && ((Func0994() == 0x0011) && (!UI_get_item_flag(0xFE9C, 0x0023))))) goto labelFunc041C_034A;
	var0009 = UI_find_nearby(0xFE9C, 0x0314, 0x000F, 0x0000);
	enum();
labelFunc041C_0324:
	for (var000C in var0009 with var000A to var000B) attend labelFunc041C_034A;
	if (!(UI_get_item_quality(var000C) == 0x003D)) goto labelFunc041C_0347;
	UI_add_answer("switch bodies");
	goto labelFunc041C_034A;
labelFunc041C_0347:
	goto labelFunc041C_0324;
labelFunc041C_034A:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041C_0363;
	UI_add_answer("kidnap");
labelFunc041C_0363:
	if (!(var0004 && (!UI_get_item_flag(0xFFE4, 0x0006)))) goto labelFunc041C_0385;
	UI_add_answer(["food", "drink", "room"]);
labelFunc041C_0385:
	UI_add_answer(["bye"]);
labelFunc041C_038F:
	converse attend labelFunc041C_08BE;
	case "food" attend labelFunc041C_03BC:
	message("\"We have a fine selection of meals available for thee to choose from. Art thou hungry, ");
	message(var0000);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc041C_03B2;
	Func0852();
	goto labelFunc041C_03BC;
labelFunc041C_03B2:
	message("\"Summon me if thou dost change thy mind, ");
	message(var0000);
	message(".\"");
	say();
labelFunc041C_03BC:
	case "drink" attend labelFunc041C_03E6:
	message("\"I think thou wilt like our selection of potables, ");
	message(var0000);
	message(". Dost thou wish a drink?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc041C_03DC;
	Func0853();
	goto labelFunc041C_03E6;
labelFunc041C_03DC:
	message("\"Perhaps later, then, ");
	message(var0000);
	message(".\"");
	say();
labelFunc041C_03E6:
	case "room" attend labelFunc041C_03F1:
	Func0851();
labelFunc041C_03F1:
	case "kidnap" attend labelFunc041C_0408:
	UI_remove_answer("kidnap");
	message("\"Oh, this is horrible! Though I am but a woman of metal, I have a heart that feels pain for thee.\"");
	say();
	message("\"Thou shouldst go quickly to Julia -- the Rangers can solve crimes such as this!\"");
	say();
labelFunc041C_0408:
	case "leave" attend labelFunc041C_04C8:
	UI_remove_answer("leave");
	if (!gflags[0x0220]) goto labelFunc041C_0424;
	message("\"I will do so with haste. I have duties which need attending.\"");
	say();
	goto labelFunc041C_042E;
labelFunc041C_0424:
	message("\"As thou wishest, ");
	message(var0000);
	message("... If thou hast further need of me, thou hast but to ask.\"");
	say();
labelFunc041C_042E:
	UI_remove_from_party(0xFFE4);
	if (!UI_get_cont_items(0xFFE4, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc041C_04C2;
	message("\"Dost thou wish thy belongings returned to thee?\"");
	say();
	if (!Func0955()) goto labelFunc041C_04BA;
	message("\"Here they are.\"");
	say();
	gflags[0x0015] = false;
	var0003 = Func09B3(0xFFE4);
	if (!(var0003[0x0001] != 0x0000)) goto labelFunc041C_0497;
	message("\"Thy companions carry some of thine inventory.\"");
	say();
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_0494;
	var0003 = var0003[0x0002];
	message("\"I also had to place ");
	message(var0003);
	message(" items of thine upon the ground.\"");
	say();
labelFunc041C_0494:
	goto labelFunc041C_04B7;
labelFunc041C_0497:
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_04B7;
	var0003 = var0003[0x0002];
	message("\"I had to place ");
	message(var0003);
	message(" items of thine on the ground.\"");
	say();
labelFunc041C_04B7:
	goto labelFunc041C_04C2;
labelFunc041C_04BA:
	gflags[0x0015] = true;
	message("\"Then I will keep thine inventory for thee. Find me if thou changest thy mind.\"");
	say();
labelFunc041C_04C2:
	Func09B4(0xFFE4);
labelFunc041C_04C8:
	case "belongings" attend labelFunc041C_0551:
	UI_remove_answer("belongings");
	message("\"Thou hast returned for thy belongings. Dost thou want them now?\"");
	say();
	if (!Func0955()) goto labelFunc041C_0549;
	message("\"Here they are.\"");
	say();
	gflags[0x0015] = false;
	var0003 = Func09B3(0xFFE4);
	if (!(var0003[0x0001] != 0x0000)) goto labelFunc041C_0526;
	message("\"Thy companions carry some of thine inventory.\"");
	say();
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_0523;
	var0003 = var0003[0x0002];
	message("\"I also had to place ");
	message(var0003);
	message(" items of thine upon the ground.\"");
	say();
labelFunc041C_0523:
	goto labelFunc041C_0546;
labelFunc041C_0526:
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_0546;
	var0003 = var0003[0x0002];
	message("\"I had to place ");
	message(var0003);
	message(" items of thine on the ground.\"");
	say();
labelFunc041C_0546:
	goto labelFunc041C_0551;
labelFunc041C_0549:
	gflags[0x0015] = true;
	message("\"Then I will continue to keep thine inventory for thee. Find me if thou dost truly want them returned.\"");
	say();
labelFunc041C_0551:
	case "Blue Boar Inn" attend labelFunc041C_059A:
	UI_remove_answer("Blue Boar Inn");
	message("\"The finest eating and drinking establishment in all Moonshade! Run by the finest man in all Moonshade...\"");
	say();
	if (!(Func0942(0xFFE2) == true)) goto labelFunc041C_058C;
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("\"What madness art thou saying, Petra?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"It is not madness, Rocco. I am proud of thee...\"");
	say();
labelFunc041C_058C:
	message("\"Rocco, the innkeeper. A finer man thou shalt not find.\"");
	say();
	UI_add_answer(["Rocco"]);
labelFunc041C_059A:
	case "Rocco" attend labelFunc041C_05C1:
	UI_remove_answer("Rocco");
	message("\"Thou mayest find Rocco a bit gruff, but he doth have a good heart. After all, he alone hath stood between Torrissio and me... At great peril to himself, I might add.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Torrissio", "peril", "change subject"]);
labelFunc041C_05C1:
	case "change subject" attend labelFunc041C_05D1:
	message("\"Oh, of course! I did not mean to bore thee...\"");
	say();
	UI_pop_answers();
labelFunc041C_05D1:
	case "Torrissio" attend labelFunc041C_05F3:
	UI_remove_answer("Torrissio");
	message("\"Thou canst not have failed to notice that I am an automaton. Torrissio is my maker... Curse his black heart!\"");
	say();
	message("\"Torrissio is a man who feeds off the misery of others. He created me with the sole intent of having a captive to torment for the rest of his life.\"");
	say();
	message("\"But I escaped and Rocco took me in.\"");
	say();
	UI_add_answer("automaton");
labelFunc041C_05F3:
	case "automaton" attend labelFunc041C_061B:
	UI_remove_answer("automaton");
	message("\"I am a magical construct. An animated body of metal.\"");
	say();
	message("\"Yet I can think. I can reason. And I believe I can care for others.\"");
	say();
	message("\"Whether this means that I have a soul locked away within the confines of mine hollow body, I do not know. All I do know is that I am much more complex than the automatons Torrissio normally makes for the other Mages.\"");
	say();
	UI_add_answer(["soul", "other Mages"]);
labelFunc041C_061B:
	case "soul" attend labelFunc041C_0636:
	UI_remove_answer("soul");
	message("\"If thou dost love, if thou hast compassion for others, if thou dost feel the injustice of the world, art thou not said to possess a soul?\"");
	say();
	message("\"If I have all these things, can I not say that I, too, have a soul?\"");
	say();
	message("\"In this I am unique, for none of the other automatons claim to feel emotions as I do. But I do not know why I should be different.\"");
	say();
labelFunc041C_0636:
	case "other Mages" attend labelFunc041C_0661:
	UI_remove_answer("other Mages");
	message("\"Most Mages do not wish to be disturbed by the presence of other living beings. Therefore they come to Torrissio to provide them with servants and guards of undemanding metal.\"");
	say();
	message("\"However, the magic did not originate with Torrissio --\"");
	say();
	message("he is merely the latest master of the ancient spells which he did find in certain buried ruins. It is said that automatons served those who dwelt in this land anciently.\"");
	say();
	message("\"Even with all his magic, Torrissio cannot construct new automatons --\"");
	say();
	message("he can merely reanimate those broken automatons which are discovered in the ruins.\"");
	say();
	message("\"What better servants to have? Automatons can exist for centuries without any maintenance at all.\"");
	say();
	message("\"They ask nothing. They expect nothing. They do what task is assigned to them until their magic at last fails, and then they simply stop.\"");
	say();
labelFunc041C_0661:
	case "peril" attend labelFunc041C_0689:
	UI_remove_answer("peril");
	message("\"Oh, ");
	message(var0000);
	message("! Thou canst not know what danger there is in thwarting the will of a Mage!\"");
	say();
	message("\"Rocco could be killed easily, and spells are untraceable. Or he could be spirited away to hideous torture. No one would be the wiser.\"");
	say();
	message("\"So I look after him as best I can, even as he doth care for me. It also helps that everyone believes the tale we have spread.\"");
	say();
	UI_add_answer("tale");
labelFunc041C_0689:
	case "tale" attend labelFunc041C_06A4:
	UI_remove_answer("tale");
	message("\"Rocco hath led everyone to believe that he and Torrissio reached an agreement to have me work here to advertise Torrissio's skill.\"");
	say();
	message("\"In truth, my cooking ability doth do Torrissio no small credit. And I dare say that it wins him many customers as well.\"");
	say();
	message("\"But he is still a willful, vicious man who doth not take it kindly when he feels cheated. And I fear his vengeance, for both myself and Rocco.\"");
	say();
labelFunc041C_06A4:
	case "barmaid" attend labelFunc041C_06C8:
	UI_remove_answer("barmaid");
	message("\"I serve Rocco in whatever function I can... Barmaid, cook, whatever needs to be done. I have performed every job thou canst imagine here at the inn. Everything from painting the ceiling to keeping Mosh from stealing our fish.\"");
	say();
	UI_add_answer("Mosh");
	if (!var0004) goto labelFunc041C_06C8;
	message("\"Can I bring thee something?\"");
	say();
labelFunc041C_06C8:
	case "Mosh" attend labelFunc041C_06DB:
	UI_remove_answer("Mosh");
	message("\"They call her the Rat Woman, which is not a very kind description, but is a reasonably true one, I am sorry to say. There are others in town who can tell thee about her. She doth like fish, I will say that one thing for her.\"");
	say();
labelFunc041C_06DB:
	case "acid" attend labelFunc041C_0788:
	UI_remove_answer("acid");
	message("\"Yes, I know what acid is, ");
	message(var0000);
	message(". It is a corrosive liquid that is very detrimental to human flesh and most metals... Except mine.\"");
	say();
	message("\"Dost thou desire mine help, ");
	message(var0000);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc041C_077E;
	if (!gflags[0x0227]) goto labelFunc041C_076D;
	message("\"Let me see if I understand thee correctly. Thou wishest me to accompany thee to an ancient temple.\"");
	say();
	message("\"Once there, I will take thy form, and thou wilt take mine, for a brief period of time. Hmmm...\"");
	say();
	message("\"It sounds intriguing. I shall discover, if only for an instant, what it is to truly be human.\"");
	say();
	if (!gflags[0x0270]) goto labelFunc041C_0734;
	if (!(Func0994() == 0x000E)) goto labelFunc041C_072D;
	message("\"No, I must decline thine offer. Though I have enjoyed thy companionship, I must return to my duties. I shall keep the Blue Boar open, despite any calamity -- in Rocco's memory.\"");
	say();
	goto labelFunc041C_0731;
labelFunc041C_072D:
	message("\"No, I must decline thine offer. Though I have enjoyed thy companionship, I must return to Moonshade. I must bury my beloved Rocco.\"");
	say();
labelFunc041C_0731:
	goto labelFunc041C_076A;
labelFunc041C_0734:
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc041C_075C;
	UI_add_answer("leave");
	gflags[0x0015] = true;
	message("\"If thou dost wish it, then I shall accompany thee. Perhaps the danger shall cause me to forget my grief.\"");
	say();
	UI_add_to_party(0xFFE4);
	goto labelFunc041C_076A;
labelFunc041C_075C:
	message("\"Thou art not serious, ");
	message(var0002);
	message("! With so many companions, thou hast no need of me.\"");
	say();
	message("\"I think thou art merely trying to cheer me. For this, I thank thee, but nothing can fill an empty heart.\"");
	say();
labelFunc041C_076A:
	goto labelFunc041C_077B;
labelFunc041C_076D:
	message("\"But I am not very brave, ");
	message(var0000);
	message("! I could not face the hazards of such a place, even with thy company!\"");
	say();
	message("\"If only there were a way to put thy courage into my metal body...\"");
	say();
labelFunc041C_077B:
	goto labelFunc041C_0788;
labelFunc041C_077E:
	message("\"Oh, I am so glad! I am not very brave, ");
	message(var0000);
	message(".\"");
	say();
labelFunc041C_0788:
	case "switch bodies" attend labelFunc041C_084B:
	UI_remove_answer("switch bodies");
	var000D = UI_find_nearest(var000C, 0x033D, 0x0008);
	if (!(!var000D)) goto labelFunc041C_07B5;
	message("\"Once we find the Body Transferance Chamber, I will oblige thee.\"");
	say();
	goto labelFunc041C_084B;
labelFunc041C_07B5:
	message("\"If thou canst promise my safety, I will agree to aid thee.\"");
	say();
	message("\"Dost thou give me thy promise?\"");
	say();
	if (!Func0955()) goto labelFunc041C_0847;
	message("\"These temples are awful old. I hope thou knowest what thou art doing.\"");
	say();
	var000E = UI_get_object_position(var000D);
	var000F = UI_create_new_object(0x025F);
	if (!var000F) goto labelFunc041C_0843;
	UI_set_item_frame(var000F, 0x0007);
	var0003 = UI_update_last_created([(var000E[0x0001] - 0x0001), (var000E[0x0002] - 0x0001), (var000E[0x0003] + 0x0001)]);
	if (!var0003) goto labelFunc041C_0843;
	UI_set_schedule_type(0xFFE4, 0x000F);
	Func090E(0xFFE4, var000F, 0x0000, 0x0000, 0xFFFF, 0x041C, UI_get_npc_object(0xFFE4), 0x000A, false);
labelFunc041C_0843:
	return;
	goto labelFunc041C_084B;
labelFunc041C_0847:
	message("\"Then I am sorry, but I will not take any unnecessary risks.\"");
	say();
labelFunc041C_084B:
	case "bye" attend labelFunc041C_08BB:
	UI_remove_npc_face0();
	if (!(UI_get_item_flag(0xFFE4, 0x0006) || (!(Func0994() == 0x000E)))) goto labelFunc041C_0888;
	Func097F(0xFE9C, "@Thanks.@", 0x0000);
	Func097F(0xFFE4, "@Glad to be of help.@", 0x0002);
	goto labelFunc041C_08B5;
labelFunc041C_0888:
	Func097F(0xFE9C, "@So long!@", 0x0000);
	if (!gflags[0x0004]) goto labelFunc041C_08A9;
	Func097F(0xFFE4, "@Farewell...@", 0x0002);
	goto labelFunc041C_08B5;
labelFunc041C_08A9:
	Func097F(0xFFE4, "@Please come again!@", 0x0002);
labelFunc041C_08B5:
	Func08FF();
	goto labelFunc041C_08BE;
labelFunc041C_08BB:
	goto labelFunc041C_038F;
labelFunc041C_08BE:
	endconv;
labelFunc041C_08BF:
	return;
}


