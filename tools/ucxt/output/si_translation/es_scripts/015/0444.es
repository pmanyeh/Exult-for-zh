#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func08F0 0x8F0 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0953 0x953 ();
extern var Func0956 0x956 (var var0000);
extern void Func0842 0x842 ();
extern void Func0843 0x843 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097A 0x97A (var var0000);

void Func0444 object#(0x444) ()
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

	var0000 = false;
	if (!(UI_get_schedule_type(0xFFBC) == 0x0007)) goto labelFunc0444_0016;
	var0000 = true;
labelFunc0444_0016:
	var0001 = Func0954();
	var0002 = false;
	var0003 = false;
	if (!(Func0994() == 0x000D)) goto labelFunc0444_0032;
	var0003 = true;
labelFunc0444_0032:
	if (!gflags[0x0048]) goto labelFunc0444_003E;
	var0001 = "knight";
labelFunc0444_003E:
	var0004 = UI_is_pc_female();
	var0005 = Func0954();
	var0006 = false;
	var0007 = false;
	var0008 = false;
	if (!(event == 0x0007)) goto labelFunc0444_006F;
	var0009 = UI_execute_usecode_array(item, [(byte)0x55, 0x01D0]);
labelFunc0444_006F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFBC) != 0x000A))) goto labelFunc0444_00E5;
	UI_item_say(0xFE9C, "@Hello, sir.@");
	0xFFBC->Func07D1();
	if (!var0000) goto labelFunc0444_00CF;
	Func097F(0xFFBC, "@Hello.@", 0x0002);
	UI_set_schedule_type(0xFFBC, 0x000A);
	0xFFBC->Func07D2();
	var0009 = UI_delayed_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x55, 0x0444], 0x0007);
	goto labelFunc0444_00E5;
labelFunc0444_00CF:
	Func097F(0xFFBC, "@Hello.@", 0x0002);
	UI_set_schedule_type(0xFFBC, 0x0003);
labelFunc0444_00E5:
	if (!(event == 0x0002)) goto labelFunc0444_00F1;
	event = 0x0009;
labelFunc0444_00F1:
	if (!(event == 0x0009)) goto labelFunc0444_0684;
	UI_run_schedule(0xFFBC);
	UI_clear_item_say(0xFFBC);
	if (!(UI_get_schedule_type(0xFFBC) == 0x0007)) goto labelFunc0444_0119;
	var0000 = true;
labelFunc0444_0119:
	UI_show_npc_face0(0xFFBC, 0x0000);
	Func08F0();
	var000A = UI_get_item_flag(0xFFBC, 0x001C);
	if (!(!var000A)) goto labelFunc0444_0164;
	if (!var0000) goto labelFunc0444_014D;
	message("\"Hello, ");
	message(var0001);
	message(". I am Krayg the Provisioner. If thou needest any goods, I can provide them at a fair price.\"");
	say();
	goto labelFunc0444_0157;
labelFunc0444_014D:
	message("\"Hello, ");
	message(var0001);
	message(". How can I help thee?\"");
	say();
labelFunc0444_0157:
	UI_set_item_flag(0xFFBC, 0x001C);
	goto labelFunc0444_0181;
labelFunc0444_0164:
	if (!gflags[0x0048]) goto labelFunc0444_0177;
	message("\"Hello again, ");
	message(var0001);
	message(".\"");
	say();
	goto labelFunc0444_0181;
labelFunc0444_0177:
	message("\"Hello, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0444_0181:
	if (!gflags[0x0048]) goto labelFunc0444_018E;
	UI_add_answer("duties");
labelFunc0444_018E:
	if (!((!var0003) || gflags[0x004E])) goto labelFunc0444_01A0;
	UI_add_answer("walks in the woods");
labelFunc0444_01A0:
	if (!gflags[0x004E]) goto labelFunc0444_01AD;
	UI_add_answer("Luther");
labelFunc0444_01AD:
	if (!(gflags[0x0045] || (gflags[0x00A6] || (gflags[0x009E] || gflags[0x009B])))) goto labelFunc0444_01C6;
	UI_add_answer("information");
labelFunc0444_01C6:
	UI_add_answer(["Knights", "supplies", "bye"]);
labelFunc0444_01D6:
	converse attend labelFunc0444_0683;
	case "information" attend labelFunc0444_0241:
	UI_remove_answer("information");
	message("\"Someone hath sent thee to me, eh? Well, I shall try to be of help to thee. What dost thou inquire about?\"");
	say();
	UI_push_answers();
	if (!(gflags[0x009B] && (!gflags[0x0290]))) goto labelFunc0444_0202;
	UI_add_answer("pumice");
labelFunc0444_0202:
	if (!(gflags[0x009E] && (!gflags[0x0293]))) goto labelFunc0444_0214;
	UI_add_answer("slippers");
labelFunc0444_0214:
	if (!gflags[0x00A6]) goto labelFunc0444_0221;
	UI_add_answer("ruins");
labelFunc0444_0221:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0444_023A;
	UI_add_answer("brown bottle");
labelFunc0444_023A:
	UI_add_answer("change subject");
labelFunc0444_0241:
	case "brown bottle" attend labelFunc0444_0299:
	UI_remove_answer("brown bottle");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0444_0274;
	message("\"See! I told everyone that I could not be the traitor!\"");
	say();
	message("\"I am not even a drinking man. But Luther is known to imbibe to excess...\"");
	say();
	message("\"This bottle must be his! Luther is the traitor!\"");
	say();
	goto labelFunc0444_0299;
labelFunc0444_0274:
	message("\"A bottle in the woods? And thou dost think that I dropped it?\"");
	say();
	var0009 = Func0953();
	message("\"Thou art wrong, ");
	message(var0009);
	message("! Ask anyone -- they will tell thee that I am not a drinking man.\"");
	say();
	message("\"'Tis due to mine injuries. Milk is all that I can tolerate. Boiled milk.\"");
	say();
	Func097F(0xFFBC, "@Leave me alone...@", 0x0000);
	abort;
labelFunc0444_0299:
	case "duties" attend labelFunc0444_02BD:
	UI_remove_answer("duties");
	message("\"I run the supplies shop in Monitor, The Tools of the Trade. 'Tis not a glorious duty, but I cannot wield a sword comfortably because of my condition.\"");
	say();
	UI_push_answers();
	UI_add_answer(["condition", "change subject"]);
labelFunc0444_02BD:
	case "condition" attend labelFunc0444_02D4:
	UI_remove_answer("condition");
	message("\"If thou dost look closely, thou canst see that mine arm is bent unnaturally at the elbow. I was wounded as a lad, in my very first battle -- the Goblins surprised us, and it was a heated battle... I was not able to obtain healing in time. Thus I was left unfit for combat.\"");
	say();
	UI_pop_answers();
labelFunc0444_02D4:
	case "Luther" attend labelFunc0444_02F9:
	UI_remove_answer("Luther");
	message("\"So thou art a comrade of that brute Luther, eh? I know that he is no friend of mine. He is suspicious of me for no other reason than that I happen to like to take walks in the woods!\"");
	say();
	message("\"He is merely following his leader, Caladin -- they all think the Wolves are their enemies!\"");
	say();
	if (!(!var0002)) goto labelFunc0444_02F9;
	UI_add_answer("walks in the woods");
labelFunc0444_02F9:
	case "supplies" attend labelFunc0444_0374:
	if (!var0000) goto labelFunc0444_036A;
	message("\"I sell many things that a warrior would require while travelling outside the city. I also buy a few goods that I need. Dost thou wish to buy or sell?\"");
	say();
	var000B = Func0956(["nothing", "buy", "sell"]);
	if (!(var000B == "buy")) goto labelFunc0444_0331;
	Func0842();
	UI_add_answer("buy");
labelFunc0444_0331:
	if (!(var000B == "sell")) goto labelFunc0444_0353;
	message("\"I buy a few leather items, ");
	message(var0001);
	message("...\"");
	say();
	message("\"But my prices are set, I'm afraid.\"");
	say();
	Func0843();
	UI_add_answer("sell");
labelFunc0444_0353:
	if (!(var000B == "nothing")) goto labelFunc0444_0367;
	message("\"Perhaps another time, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0444_0367:
	goto labelFunc0444_0374;
labelFunc0444_036A:
	message("\"I sell supplies when I am open, ");
	message(var0001);
	message("!\"");
	say();
labelFunc0444_0374:
	case "buy" attend labelFunc0444_037F:
	Func0842();
labelFunc0444_037F:
	case "sell" attend labelFunc0444_038A:
	Func0843();
labelFunc0444_038A:
	case "Knights" attend labelFunc0444_03F5:
	UI_remove_answer("Knights");
	if (!var0003) goto labelFunc0444_03A6;
	message("\"We are all Knights in this town.\"");
	say();
	goto labelFunc0444_03AA;
labelFunc0444_03A6:
	message("\"In the City of Monitor, everyone is a Knight.\"");
	say();
labelFunc0444_03AA:
	if (!gflags[0x0048]) goto labelFunc0444_03E0;
	message("\"I myself belong to the Command of the Wolf.\"");
	say();
	UI_push_answers();
	UI_add_answer("Commands");
	if (!(!var0006)) goto labelFunc0444_03CD;
	UI_add_answer("Wolf");
labelFunc0444_03CD:
	UI_add_answer(["Bear", "Leopard", "change subject"]);
	goto labelFunc0444_03F5;
labelFunc0444_03E0:
	if (!var0003) goto labelFunc0444_03ED;
	message("\"I must tell thee, stranger, that if thou art not a Knight, thou art nothing in this town. If thou canst not master the Test of the Knights, then it would be best for thee to move on.\"");
	say();
	goto labelFunc0444_03F1;
labelFunc0444_03ED:
	message("\"In Monitor, one is either a Knight, or one is nothing at all. Unless thou art thinking of taking the Test of the Knights, thou mightest want to avoid the City of Monitor.\"");
	say();
labelFunc0444_03F1:
	gflags[0x0080] = true;
labelFunc0444_03F5:
	case "Commands" attend labelFunc0444_040C:
	UI_remove_answer("Commands");
	message("\"Thou dost not know about the Commands? All Monitorians belong to one of three Commands: the Bears, the Wolves, or the Leopards.\"");
	say();
	gflags[0x007F] = true;
labelFunc0444_040C:
	case "Wolf" attend labelFunc0444_0423:
	message("\"It is hard to be a Knight who doth not fight well. I am useless on the battlefield, but by being Provisioner I can at least earn my keep! The Wolves have treated me well. Now if I were a Bear... well, all they can think of is Prowess.\"");
	say();
	UI_remove_answer("Wolf");
	var0006 = true;
labelFunc0444_0423:
	case "Bear" attend labelFunc0444_044E:
	UI_remove_answer("Bear");
	var0007 = true;
	message("\"They are brutes! All they can think of are their incessant duels. The Bears fight only for glory -- but what about the Goblins? What about bandits on the road? Caladin and his Knights are too concerned with winning glory to worry about the true battles which face us.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Caladin", "duels", "nothing more"]);
labelFunc0444_044E:
	case "Leopard" attend labelFunc0444_047F:
	UI_remove_answer("Leopard");
	if (!(gflags[0x0038] == true)) goto labelFunc0444_047B;
	if (!(gflags[0x0069] == false)) goto labelFunc0444_0474;
	message("\"That fool Marsten is a blight upon all that the Commands stood for... I believe he hath ruined the reputation of the Leopard Command for good.\"");
	say();
	goto labelFunc0444_0478;
labelFunc0444_0474:
	message("\"Well, that foolish leader of the Leopards is now dead. I wonder who will replace him?\"");
	say();
labelFunc0444_0478:
	goto labelFunc0444_047F;
labelFunc0444_047B:
	message("\"The Leopards are not as bad as everyone says they are. They keep the Bears from ruining us! Lord Marsten hath ruled well here, and he is a Leopard. He hath no favorites among the Commands.\"");
	say();
labelFunc0444_047F:
	case "Caladin" attend labelFunc0444_0492:
	UI_remove_answer("Caladin");
	message("\"Caladin is not a bad sort, but his mind is mired in the past. All he sees is Prowess. Can he not see that we Monitorians must stop duelling amongst ourselves, and instead turn our attention outward? Caladin thinks that the Wolves hate the Bears, but the truth is that he cannot abide the plans of our leader, Brendann.\"");
	say();
labelFunc0444_0492:
	case "duels" attend labelFunc0444_04B6:
	UI_remove_answer("duels");
	message("\"They waste too many hours at the List Fields, fighting any who will challenge them.\"");
	say();
	if (!gflags[0x0048]) goto labelFunc0444_04B2;
	message("\"Luther is the worst! Thou didst hear him! He doth accuse me of being a traitor.\"");
	say();
	goto labelFunc0444_04B6;
labelFunc0444_04B2:
	message("\"Luther is the worst!\"");
	say();
labelFunc0444_04B6:
	case "walks in the woods" attend labelFunc0444_0516:
	UI_remove_answer("walks in the woods");
	if (!var0002) goto labelFunc0444_04D2;
	message("\"Oh, let us not discuss this again...\"");
	say();
	goto labelFunc0444_0516;
labelFunc0444_04D2:
	UI_push_answers();
	var0002 = true;
	if (!gflags[0x004E]) goto labelFunc0444_04EB;
	message("\"It pains me that simply because I have this natural tendency, others would viciously gossip that I was conspiring with our enemy. I seldom venture far while I am alone and I take exceeding care, thou canst well believe me.\"");
	say();
	UI_add_answer("conspiring");
labelFunc0444_04EB:
	message("\"I take long walks. Well, what is wrong with that, I ask thee? I especially like to visit sites of battles, looking for antique weaponry or armour.\tI collect them. I collect many things.\"");
	say();
	if (!(!var0008)) goto labelFunc0444_0500;
	UI_add_answer(["battle sites"]);
labelFunc0444_0500:
	UI_add_answer("change subject");
	if (!((!gflags[0x004E]) && var0008)) goto labelFunc0444_0516;
	UI_pop_answers();
labelFunc0444_0516:
	case "change subject", "nothing more" attend labelFunc0444_0529:
	message("\"Very well...\"");
	say();
	UI_pop_answers();
labelFunc0444_0529:
	case "battle sites", "ruins" attend labelFunc0444_0551:
	var0008 = true;
	UI_remove_answer("battle sites");
	UI_remove_answer("ruins");
	message("\"There must have been a great war here, in the days when the Daemons ruled the Serpent Isle. My walks have taken me deep into the most tangled woods, where I have found many mysteries -- ruins built of strange stone, artifacts made of brass, sometimes a skull or shattered weapon... and always, the Sign of the Serpent.\"");
	say();
	UI_add_answer("Sign of the Serpent");
labelFunc0444_0551:
	case "Sign of the Serpent" attend labelFunc0444_0564:
	UI_remove_answer("Sign of the Serpent");
	message("\"Hast thou not wondered why our land is known as the Serpent Isle? Everywhere our ancestors went, they found the Sign of the Serpent -- in carvings, statuettes, throughout the many ancient ruins. Monitor itself was built on the site of an ancient ruin from the times of the Serpent.\"");
	say();
labelFunc0444_0564:
	case "Goblins" attend labelFunc0444_0577:
	UI_remove_answer("Goblins");
	message("\"They are an infestation! We have fought them since the moment our ancestors set foot on this island. We must destroy them if we are ever to be safe, but we cannot do this unless the Bears and Leopards are willing to listen to Brendann. We must track them to their village lair and slay them. And if a traitor doth exist, then we are doomed from the start...\"");
	say();
labelFunc0444_0577:
	case "conspiring" attend labelFunc0444_059E:
	UI_remove_answer("conspiring");
	message("\"Dost thou accuse me? I am an innocent man, and soon I shall present evidence of that fact! I have reasons of mine own to believe that someone among us is selling our secrets to the Goblins.\"");
	say();
	UI_push_answers();
	UI_add_answer(["reasons of mine own", "evidence", "nothing more"]);
labelFunc0444_059E:
	case "reasons of mine own" attend labelFunc0444_05E1:
	UI_remove_answer("reasons of mine own");
	message("\"There is someone else who takes long walks in the woods. I have never seen him clearly. He is very clever, and always dashes away into the forest before I can identify him.\"");
	say();
	var000C = Func0992(0xFFFF, "@But was he Goblin or Man?@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc0444_05DD;
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"He was not Goblin! They never travel in the woods except in war parties. Yet there was something in his gait that was not entirely Man-like, either.\"");
	say();
	goto labelFunc0444_05E1;
labelFunc0444_05DD:
	message("\"He could not have been Goblin, for they never walk in the woods alone. Therefore... I think he must have been the Monitorian traitor!\"");
	say();
labelFunc0444_05E1:
	case "evidence" attend labelFunc0444_0601:
	UI_remove_answer("evidence");
	message("\"Listen to this -- if there is a traitor, he must meet with the Goblins somewhere. I know of a place where the Goblins often gather. Perhaps I can find evidence there of who the traitor is. But of late, there have been too many Goblin patrols near the rendezvous. I have been unable to reach the place undetected.\"");
	say();
	UI_add_answer(["patrols", "rendezvous"]);
labelFunc0444_0601:
	case "patrols" attend labelFunc0444_0614:
	UI_remove_answer("patrols");
	message("\"The Goblins have been thick in the woods north of Knight's Test for weeks now. They have been emboldened ever since they overran the guardtower west of Fawn. That is where they slew Astrid, the bastards!\"");
	say();
labelFunc0444_0614:
	case "rendezvous" attend labelFunc0444_062B:
	UI_remove_answer("rendezvous");
	message("\"The place is easy to find, for the Goblins are attracted to the ancient ruins of this Isle. In the midst of the great cypress woods north of Knight's Test, look for a strange black obelisk. This is the gathering place of the Goblin war parties, before they strike south.\"");
	say();
	gflags[0x00C0] = true;
labelFunc0444_062B:
	case "pumice" attend labelFunc0444_0646:
	UI_remove_answer("pumice");
	message("\"I recognize thy description! Such rocks doth come from the depths of the earth, where lava flows free and deadly gasses abound. Standarr the Blacksmith hath been to places such as these, on his Quests of Courage -- thou mightest acquire more information from him.\"");
	say();
	gflags[0x0290] = true;
	gflags[0x00BA] = true;
labelFunc0444_0646:
	case "slippers" attend labelFunc0444_0659:
	UI_remove_answer("slippers");
	message("\"The nearest place where decorative footwear like that would be worn is Sleeping Bull. Certainly, no one in Monitor would be caught dead wearing them!\"");
	say();
labelFunc0444_0659:
	case "bye" attend labelFunc0444_0680:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Must go now!@", 0x0000);
	Func097F(0xFFBC, "@Walk in Courage!@", 0x0002);
	goto labelFunc0444_0683;
labelFunc0444_0680:
	goto labelFunc0444_01D6;
labelFunc0444_0683:
	endconv;
labelFunc0444_0684:
	if (!(event == 0x0000)) goto labelFunc0444_0702;
	var000D = UI_die_roll(0x0001, 0x0005);
	if (!var0000) goto labelFunc0444_06FC;
	if (!(var000D == 0x0001)) goto labelFunc0444_06AF;
	var000E = "@Supplies?@";
labelFunc0444_06AF:
	if (!(var000D == 0x0002)) goto labelFunc0444_06BF;
	var000E = "@Leather boots?@";
labelFunc0444_06BF:
	if (!(var000D == 0x0003)) goto labelFunc0444_06CF;
	var000E = "@Finest goods here!@";
labelFunc0444_06CF:
	if (!(var000D == 0x0004)) goto labelFunc0444_06DF;
	var000E = "@Best goods in Monitor!@";
labelFunc0444_06DF:
	if (!(var000D == 0x0005)) goto labelFunc0444_06EF;
	var000E = "@Bedroll?@";
labelFunc0444_06EF:
	UI_item_say(0xFFBC, var000E);
	goto labelFunc0444_0702;
labelFunc0444_06FC:
	Func097A(0xFFBC);
labelFunc0444_0702:
	return;
}


