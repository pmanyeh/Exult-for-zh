#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func087A 0x87A ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0878 0x878 ();
extern void Func0924 0x924 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern void Func0877 0x877 ();
extern void Func0876 0x876 ();
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0879 0x879 ();

void Func04AA object#(0x4AA) ()
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

	var0000 = Func0942(0xFFFE);
	var0001 = Func0942(0xFFFD);
	var0002 = Func0942(0xFFFF);
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	var0005 = Func0953();
	var0006 = Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0014);
	var0007 = UI_get_item_flag(0xFF56, 0x001C);
	var0008 = (("I am " + var0005) + ".");
	var0009 = "his";
	var000A = "him";
	var000B = "he";
	if (!var0004) goto labelFunc04AA_0088;
	var0009 = "her";
	var000A = "her";
	var000B = "she";
labelFunc04AA_0088:
	if (!(event == 0x0000)) goto labelFunc04AA_0198;
	var000C = UI_find_nearby(item, 0x0313, 0x000A, 0x0000);
	var000D = UI_get_item_quality(var000C);
	if (!((var000D == 0x0047) && (gflags[0x01FE] == false))) goto labelFunc04AA_00F3;
	var000E = (UI_get_item_frame(var000C) + 0x0001);
	UI_set_item_frame(var000C, var000E);
	Func087A();
	Func094F(0xFF56, "To enter our realm...");
	gflags[0x01FE] = true;
	Func097F(0xFF56, "@To seek the Pillars!@", 0x0010);
	Func0878();
	abort;
labelFunc04AA_00F3:
	if (!((var000D == 0x0049) && (gflags[0x01FE] && (!gflags[0x01FF])))) goto labelFunc04AA_0198;
	gflags[0x01FF] = true;
	var000E = (UI_get_item_frame(var000C) + 0x0001);
	UI_set_item_frame(var000C, var000E);
	Func0924(0x0049, 0xFE99);
	Func094F(0xFF56, "To go in Virtue!");
	Func097F(0xFE9C, "@May Virtue be with thee!@", 0x0010);
	Func0878();
	var000F = UI_find_nearby(item, 0x0314, 0x001E, 0x0000);
	enum();
labelFunc04AA_0155:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc04AA_0197;
	var0013 = UI_get_item_quality(var0012);
	if (!(var0013 == 0x0000)) goto labelFunc04AA_0194;
	var0014 = UI_set_item_quality(var0012, 0x0049);
	var0015 = UI_get_object_position(var0012);
	Func0924(var0012, 0x0001);
labelFunc04AA_0194:
	goto labelFunc04AA_0155;
labelFunc04AA_0197:
	abort;
labelFunc04AA_0198:
	if (!(event == 0x0001)) goto labelFunc04AA_0204;
	UI_item_say(0xFE9C, "@Greetings, fine Gargoyle!@");
	0xFF56->Func07D1();
	Func097F(0xFF56, "@To say greetings.@", 0x0002);
	if (!gflags[0x01FE]) goto labelFunc04AA_01CF;
	UI_set_schedule_type(0xFF56, 0x0003);
	goto labelFunc04AA_0204;
labelFunc04AA_01CF:
	if (!(UI_get_schedule_type(0xFF56) != 0x000F)) goto labelFunc04AA_0204;
	UI_set_schedule_type(0xFF56, 0x000F);
	0xFF56->Func07D2();
	var0014 = UI_delayed_execute_usecode_array(0xFF56, [(byte)0x23, (byte)0x55, 0x04AA], 0x0007);
labelFunc04AA_0204:
	if (!(event == 0x0002)) goto labelFunc04AA_0222;
	if (!(item == UI_get_npc_object(0xFF56))) goto labelFunc04AA_021F;
	event = 0x0009;
	goto labelFunc04AA_0222;
labelFunc04AA_021F:
	Func087A();
labelFunc04AA_0222:
	if (!(event == 0x0009)) goto labelFunc04AA_0A28;
	UI_run_schedule(0xFF56);
	UI_clear_item_say(0xFF56);
	UI_show_npc_face0(0xFF56, 0x0000);
	if (!(gflags[0x01FE] && (!gflags[0x01FB]))) goto labelFunc04AA_026C;
	message("\"To have told you to seek the Pillar of Fire. To grasp it and enter the Test of the Ancients.\"");
	say();
	message("\"To delay no longer.\"");
	say();
	Func097F(0xFF56, "@The Pillar!@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x0014);
	abort;
labelFunc04AA_026C:
	if (!gflags[0x01FB]) goto labelFunc04AA_039A;
	if (!(gflags[0x01EB] && (gflags[0x01EC] && (gflags[0x01ED] && (!gflags[0x0207]))))) goto labelFunc04AA_0292;
	UI_add_answer("explain test");
	Func0877();
	goto labelFunc04AA_0397;
labelFunc04AA_0292:
	if (!gflags[0x0207]) goto labelFunc04AA_029E;
	Func0876();
	goto labelFunc04AA_0397;
labelFunc04AA_029E:
	if (!(!gflags[0x0200])) goto labelFunc04AA_02C1;
	message("\"To be caught in indecision!\"");
	say();
	message("\"To say that you have returned from the Test, as the Dream said that the Hero would.\"");
	say();
	message("\"Yet you did not succeed at the Test. You have failed to show Virtue. To have thought that you would have passed all the tests if you were the Hero!\"");
	say();
	UI_add_answer(["second chance", "never mind"]);
	goto labelFunc04AA_0397;
labelFunc04AA_02C1:
	if (!(!gflags[0x0201])) goto labelFunc04AA_0394;
	message("\"To ask if you have brought me the Goblet. To know that this shall prove you to be the Hero of the Dream.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04AA_0334;
	if (!(var0006 == true)) goto labelFunc04AA_0305;
	var0016 = Func0992(0x0001, "@We have brought the Goblet!@", "@I have the Goblet...@", false);
	UI_set_conversation_slot(0x0000);
	message("\"To be true! To apologize most sincerely for doubting you...\"");
	say();
	message("\"To keep the Goblet, Hero From Another World. To hope that it might have powers to aid you on your quest.\"");
	say();
	Func0877();
	gflags[0x0201] = true;
	goto labelFunc04AA_0331;
labelFunc04AA_0305:
	var0016 = Func0992(0x0001, "@We do not have the Goblet!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"To wonder if you jest. To say you do not have the Goblet. To be unwilling to deal with you until you have gotten it.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF56, "@Not until then.@", 0x0002);
	abort;
labelFunc04AA_0331:
	goto labelFunc04AA_0391;
labelFunc04AA_0334:
	if (!(var0006 == true)) goto labelFunc04AA_0365;
	var0016 = Func0992(0x0001, "@But we do have the Goblet!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"To say that you are confused, but to give you the ring as promised. To say that I am certain that you are the Hero from our dream.\"");
	say();
	message("\"To keep the Goblet, Hero From Another World. To hope that it might have powers to aid you on your quest.\"");
	say();
	Func0877();
	gflags[0x0201] = true;
	goto labelFunc04AA_0391;
labelFunc04AA_0365:
	var0016 = Func0992(0x0001, "@We do not have the Goblet!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"To be displeased that you do not have the Goblet. To be unwilling to deal with you until you have gotten it.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF56, "@Not until then.@", 0x0002);
	abort;
labelFunc04AA_0391:
	goto labelFunc04AA_0397;
labelFunc04AA_0394:
	Func0876();
labelFunc04AA_0397:
	goto labelFunc04AA_03C9;
labelFunc04AA_039A:
	if (!(gflags[0x01EF] == true)) goto labelFunc04AA_03C6;
	message("\"To ask if you have reconsidered. The Twin Pillars await the Hero of the Dream.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04AA_03B4;
	Func0879();
	goto labelFunc04AA_03C3;
labelFunc04AA_03B4:
	message("\"To waste our precious time! To leave now!\"");
	say();
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_03C3:
	goto labelFunc04AA_03C9;
labelFunc04AA_03C6:
	Func0876();
labelFunc04AA_03C9:
	UI_add_answer("bye");
labelFunc04AA_03D0:
	converse attend labelFunc04AA_0A27;
	case var0008 attend labelFunc04AA_041B:
	message("\"To be wary that you might be like others of your kind, who come here to slay my people and steal our treasures.\"");
	say();
	message("\"And yet... to wonder if you are the Hero of the Dream.\"");
	say();
	if (!var0004) goto labelFunc04AA_03ED;
	message("\"To be female as the Hero was in the dream...\"");
	say();
labelFunc04AA_03ED:
	UI_remove_answer([var0008, "I am the Avatar.", "I am lost..."]);
	UI_add_answer(["others of your kind", "treasures", "dream"]);
	if (!(!gflags[0x01FE])) goto labelFunc04AA_041B;
	UI_add_answer("drawbridge");
labelFunc04AA_041B:
	case "drawbridge" attend labelFunc04AA_0432:
	UI_remove_answer("drawbridge");
	message("\"To be protection against our enemies. To be lowered and raised by ancient levers.\"");
	say();
	message("\"To know that only gargoyles are strong enough to pull the levers!\"");
	say();
labelFunc04AA_0432:
	case "others of your kind" attend labelFunc04AA_0454:
	UI_remove_answer("others of your kind");
	message("\"To say sadly that Men come to do us harm. To not understand why they call us Daemons...\"");
	say();
	message("\"To say they are brawny warriors in stout armour. To delight in shedding our blood. To hate us greatly.\"");
	say();
	message("\"To regret that we cannot make peace with them.\"");
	say();
	UI_add_answer("Daemons");
labelFunc04AA_0454:
	case "Daemons" attend labelFunc04AA_046B:
	UI_remove_answer("Daemons");
	message("\"To tell you there is no such thing as a daemon. To be sure that Daemons are creatures from stories, used to frighten young ones.\"");
	say();
	message("\"To disbelieve that Men can believe us to be Daemons. To be Gargoyles.\"");
	say();
labelFunc04AA_046B:
	case "treasures" attend labelFunc04AA_0493:
	UI_remove_answer("treasures");
	message("\"To say that many Men have come here to steal the wealth of the Lost City.\"");
	say();
	message("\"To be willing to share... To be angry that the Men in Armour do not want to share. To want only to kill us.\"");
	say();
	message("\"To be as ignorant as they are\tgreedy.\"");
	say();
	UI_add_answer(["ignorant", "Lost City"]);
labelFunc04AA_0493:
	case "ignorant" attend labelFunc04AA_04AA:
	UI_remove_answer("ignorant");
	message("\"To say that these invaders cannot stand the heat of this place! To quickly die.\"");
	say();
	message("\"To be amused to see them come again and again, only to die. To survive long enough to vex us with their weapons, before their deaths.\"");
	say();
labelFunc04AA_04AA:
	case "Lost City" attend labelFunc04AA_04C5:
	UI_remove_answer("Lost City");
	message("\"To say that several generations of gargoyles have dwelled here. To assure you that this place was old before we came.\"");
	say();
	message("\"To look about and know that the people who dwelt here revered serpents. To say that they also suffered a great calamity.\"");
	say();
	message("\"To wonder what happened to those who once dwelt here...\"");
	say();
labelFunc04AA_04C5:
	case "dream" attend labelFunc04AA_0569:
	UI_remove_answer("dream");
	UI_push_answers();
	message("\"To tell you that our slumber is filled with a single Dream, a vision of a Hero from another world...\"");
	say();
	if (!var0004) goto labelFunc04AA_04E9;
	message("\"To say that the Hero is most like you...\"");
	say();
	goto labelFunc04AA_04ED;
labelFunc04AA_04E9:
	message("\"To say that the Hero is a Man, most like you.\"");
	say();
labelFunc04AA_04ED:
	var0016 = Func0992(0xFFFF, (("@It must be thee, " + var0005) + "!@"), 0x0000, false);
	if (!(var0016 != 0xFE9C)) goto labelFunc04AA_0558;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc04AA_0551;
	var0017 = var0016;
labelFunc04AA_0524:
	if (!(var0017 == var0016)) goto labelFunc04AA_0541;
	var0017 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc04AA_0524;
labelFunc04AA_0541:
	var0017 = Func0992(var0017, "@The Avatar is the Hero... No doubt about it!@", 0x0000, false);
labelFunc04AA_0551:
	UI_set_conversation_slot(0x0000);
labelFunc04AA_0558:
	message("\"To wonder if you are the Hero.\"");
	say();
	UI_add_answer(["I am not the Hero", "tell me more"]);
labelFunc04AA_0569:
	case "I am not the Hero" attend labelFunc04AA_0590:
	message("\"To go your way! To leave my people to their slumbers, and the fate which grasps them in the night.\"");
	say();
	message("\"To hope the Hero comes soon...\"");
	say();
	Func097F(0xFF56, "@Soon...@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_0590:
	case "tell me more" attend labelFunc04AA_05DA:
	UI_remove_answer(["I am not the Hero", "tell me more"]);
	message("\"To say that the Dream tells of great disasters -- storms that disintegrate with their bolts, diseases which kill the meek, and a spectral Trinity which spreads Evil.\"");
	say();
	message("\"To declare that a Hero shall come from beyond this world. To have seen that this warrior shall slay the Trinity, and triumph through virtue.\"");
	say();
	message("\"To be required to give this Hero an ancient artifact, which will provide guidance to ");
	message(var000A);
	message(".\"");
	say();
	message("\"To know the Hero by this sign -- ");
	message(var000B);
	message(" shall submit to the Test of Purity, and be shown worthy by returning in virtue.\"");
	say();
	UI_add_answer(["Test of Purity", "ancient artifact", "storms", "diseases", "Evil Trinity", "nothing"]);
labelFunc04AA_05DA:
	case "Test of Purity" attend labelFunc04AA_0618:
	UI_remove_answer("Test of Purity");
	message("\"To tell you that this city is old. To have a long history before the gargoyles found it.\"");
	say();
	message("\"To know little about the former inhabitants, but to believe that they were not Evil. To have visited their sacred places amid the ruins.\"");
	say();
	message("\"To know that the Dream says that the Hero shall go to the Place of the Twin Pillars, where ");
	message(var000B);
	message(" must face the ordeal of the ancients.\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc04AA_060E;
	message("\"To assure your companions that no harm shall come to you or to them during the Test. To believe this myself.\"");
	say();
labelFunc04AA_060E:
	UI_add_answer(["Twin Pillars"]);
labelFunc04AA_0618:
	case "Twin Pillars" attend labelFunc04AA_063D:
	UI_remove_answer("Twin Pillars");
	message("\"To have visited this place within the Underground City. To be in the north-eastern chambers of the city.\"");
	say();
	message("\"To have seen two stone pillars of great size, in the semblance of serpents.\"");
	say();
	message("\"To say that the Pillar of Ice is broken. To say that the Pillar of Fire yet stands.\"");
	say();
	message("\"To have dreamed of the Hero grasping the fiery serpent with ");
	message(var0009);
	message(" hands, and thus commencing the Test.\"");
	say();
labelFunc04AA_063D:
	case "ancient artifact" attend labelFunc04AA_0658:
	UI_remove_answer("ancient artifact");
	message("\"To have a great treasure among the Gargoyles, an artifact discovered among the ruins. To not know its powers.\"");
	say();
	message("\"To have seen by the Dream, that we must entrust this device to the Hero who shall come.\"");
	say();
	message("\"To say that this Ring of the Serpent shall be the means of guiding the Hero in his struggle against the Imbalance.\"");
	say();
labelFunc04AA_0658:
	case "storms" attend labelFunc04AA_0673:
	UI_remove_answer("storms");
	message("\"To have detected a change in the structure of the world, by means of an Imbalance of Essences.\"");
	say();
	message("\"To know this is the reason why great storms now howl across the face of this world, hurling their lightnings down.\"");
	say();
	message("\"To know this is not all -- to become worse with time, until the End of the World. Unless the Hero prevails.\"");
	say();
labelFunc04AA_0673:
	case "diseases" attend labelFunc04AA_068E:
	UI_remove_answer("diseases");
	message("\"To weep for the creatures that succumb most easily to the sickness of this world.\"");
	say();
	message("\"To have dreamed of dying infants, of minds numbed or gone insane, and of beings which simply waste away due to the Imbalance.\"");
	say();
	message("\"To despair for my people, for they are lost in slumbers and the Dream. Only I remain.\"");
	say();
labelFunc04AA_068E:
	case "Evil Trinity" attend labelFunc04AA_06A9:
	UI_remove_answer("Evil Trinity");
	message("\"To have seen the Three Ghosts stalking the land, through the Dream.\"");
	say();
	message("\"To declare that one has the Evil Glow. One has the haunting eyes that mock. One has the Serpent's Head.\"");
	say();
	message("\"To know that this is not yet, but shall soon be. These are the Enemies of the Hero.\"");
	say();
labelFunc04AA_06A9:
	case "nothing" attend labelFunc04AA_06E9:
	UI_remove_answer("nothing");
	message("\"To delay my purpose no longer...\"");
	say();
	message("\"To ask if you are willing to take the Test. To prove that you are the Hero of which we dream.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04AA_06CE;
	Func0879();
	goto labelFunc04AA_06E9;
labelFunc04AA_06CE:
	message("\"To be sad... To know that we are fading rapidly. To hope that the Hero comes soon.\"");
	say();
	Func097F(0xFF56, "@Depart...@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_06E9:
	case "I am the Avatar." attend labelFunc04AA_0749:
	UI_remove_answer([var0008, "I am the Avatar.", "I am lost..."]);
	message("\"To not have heard of any Avatar...\"");
	say();
	message("\"To be wary that you are not like other Men, and to hope that you are not here to steal our treasures.\"");
	say();
	var0016 = Func0992(0xFFFD, "@The Avatar is the Champion of Virtue, dear gargoyle.@", 0x0000, false);
	if (!(var0016 != 0xFE9C)) goto labelFunc04AA_0731;
	UI_set_conversation_slot(0x0000);
	message("\"To be possible? To be the Hero that we have dreamed of?\"");
	say();
	goto labelFunc04AA_0735;
labelFunc04AA_0731:
	message("\"To seem to recognize you, as if from the vision of my slumbers... To wonder if you are the Hero of the Dream...\"");
	say();
labelFunc04AA_0735:
	gflags[0x01FD] = true;
	UI_add_answer(["others of your kind", "treasures", "dream"]);
labelFunc04AA_0749:
	case "I am lost..." attend labelFunc04AA_076C:
	message("\"To think that you wish to do us harm, like all of your kind. To think that you are here to steal our treasures. To demand that you leave now!\"");
	say();
	Func097F(0xFF56, "@Leave!@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_076C:
	case "dreaming sickness" attend labelFunc04AA_0786:
	message("\"To be concerned. To have an imbalance in the land. To have affected the gargoyles and thrown them into helpless dreaming.\" *\"To be the only one that remains awake to fight back the trolls...\"");
	say();
	UI_remove_answer("dreaming sickness");
	UI_add_answer("trolls");
labelFunc04AA_0786:
	case "trolls" attend labelFunc04AA_07A0:
	message("\"To be uncivilized creatures! To enjoy killing... To have been plaguing us for generations.\" *\"To be advised to be cautious if you hear drums.\"");
	say();
	UI_remove_answer("trolls");
	UI_add_answer("drums");
labelFunc04AA_07A0:
	case "drums" attend labelFunc04AA_07B3:
	message("\"To be thought of as the trolls' communication. To be trouble for all within the sound of the drums.\"");
	say();
	UI_remove_answer("drums");
labelFunc04AA_07B3:
	case "ring" attend labelFunc04AA_07CD:
	message("\"To be a relic of the humans who once dwelt here... To have dreamed that it is a thing of great power.\" *\"To have seen in the dream that you will receive great assistance from the ring.\"");
	say();
	UI_remove_answer("ring");
	UI_add_answer("assistance");
labelFunc04AA_07CD:
	case "assistance" attend labelFunc04AA_07E0:
	message("\"To have been unclear. To have only seen two snakes fighting... To know that the ring is important in the battle. To know nothing else.\"");
	say();
	UI_remove_answer("assistance");
labelFunc04AA_07E0:
	case "Serpent Staff" attend labelFunc04AA_07FA:
	message("\"To have once had the Serpent Staff. To have been taken by the troll king.\"");
	say();
	UI_remove_answer("Serpent Staff");
	UI_add_answer("troll king");
labelFunc04AA_07FA:
	case "troll king" attend labelFunc04AA_080D:
	UI_remove_answer("troll king");
	message("\"To be thinking that the staff will bring the trolls the power to destroy the gargoyles. To be certain that you will have to kill the troll king to reclaim the staff.\" *\"To regret that the dreamers must remain guarded. To wish to go with you...\"");
	say();
labelFunc04AA_080D:
	case "information" attend labelFunc04AA_0824:
	UI_remove_answer("information");
	message("\"To have little to tell you...\"");
	say();
	message("\"To only say that the Imbalance is growing worse. To fear that there will be no gargoyles left undreaming soon.\"");
	say();
labelFunc04AA_0824:
	case "aid" attend labelFunc04AA_0837:
	UI_remove_answer("aid");
	message("\"To be fighting the dreaming. To regret that there is no aid to give as long as the Imbalance exists!\"");
	say();
labelFunc04AA_0837:
	case "second chance" attend labelFunc04AA_0895:
	UI_remove_answer("second chance");
	UI_set_npc_id(0xFF56, 0x0001);
	message("\"To need one last task from you. To be without doubt. To be done before giving thee the artifact.\"");
	say();
	var0016 = Func0992(0xFFFE, "@The Avatar took thy test willingly! Nothing was said about passing all the tests!@", 0x0000, false);
	if (!(var0016 != 0xFE9C)) goto labelFunc04AA_0879;
	UI_set_conversation_slot(0x0000);
	message("\"To be sure that your friends are hasty in your behalf.\"");
	say();
labelFunc04AA_0879:
	message("\"To be unwilling to allow the ring to fall into the wrong hands. To say that the Dream warns of the deceitfulness of the Spectral Trinity.\"");
	say();
	message("\"To set you this test: To show Virtue by risking your life to enter the Conjury of the Ancients, and obtain the Goblet of Replenishing Water.\"");
	say();
	gflags[0x0200] = true;
	UI_add_answer(["goblet", "Conjury"]);
	Func0878();
labelFunc04AA_0895:
	case "Conjury" attend labelFunc04AA_08AC:
	UI_remove_answer("Conjury");
	message("\"To have been a mighty hall within the city of the Ancients. To be recognized by the tiles of gold and black which floor the chamber. To be in the northern chambers of the city.\"");
	say();
	message("\"To keep its secrets well guarded. To have slain all of our warriors who entered.\"");
	say();
labelFunc04AA_08AC:
	case "goblet" attend labelFunc04AA_08C3:
	UI_remove_answer("goblet");
	message("\"To have listened to the dying speech of one explorer, and have heard of a Magic Goblet which lies in this room.\"");
	say();
	message("\"To believe that only the noblest Hero could retrieve such an object.\"");
	say();
labelFunc04AA_08C3:
	case "never mind" attend labelFunc04AA_08E6:
	UI_remove_answer("never mind");
	message("\"To refuse to give you the Ring of the Serpent. To ask that you submit further proof of your Virtue.\"");
	say();
	Func097F(0xFF56, "@Proof!@", 0x0000);
	Func0878();
	abort;
labelFunc04AA_08E6:
	case "leave Furnace" attend labelFunc04AA_098B:
	UI_remove_answer("leave Furnace");
	var0018 = UI_find_nearby(0xFF56, 0x0313, 0x0014, 0x0000);
	if (!(UI_get_item_quality(var0018) == 0x0049)) goto labelFunc04AA_0944;
	message("\"To open the brass gate, that you may gain the surface.\"");
	say();
	Func097F(0xFF56, "@To wait.@", 0x0000);
	UI_set_new_schedules(0xFF56, 0x0000, 0x001D, UI_get_object_position(0xFF56));
	UI_run_schedule(0xFF56);
	goto labelFunc04AA_098B;
labelFunc04AA_0944:
	message("\"To know that the only exit is at the brass gate at where we first met. To know that Men are too weak to pull the levers to open it.\"");
	say();
	message("\"To go now to the brass gate, Hero. To meet you there and\tto let you return to the surface.\"");
	say();
	Func097F(0xFF56, "@To meet you there...@", 0x0000);
	Func097F(0xFE9C, "@See thee at the gate...@", 0x0000);
	var0019 = [0x05C4, 0x09B3];
	UI_set_new_schedules(0xFF56, 0x0000, 0x000A, [var0019]);
	UI_run_schedule(0xFF56);
	abort;
labelFunc04AA_098B:
	case "explain test" attend labelFunc04AA_09AA:
	UI_remove_answer("explain test");
	message("\"To reveal that the emotional pleas for you to flee this dying world were a test of your Logic. As all worlds are connected, it would have done you no good to flee.\"");
	say();
	message("\"To commend you for your Ethicality when faced with the coercion of others. To be heartened that you did not seek to benefit from their servitude.\"");
	say();
	message("\"To see that you are the Hero, for you are Virtuous and able to complete a task -- no matter how tedious. To be relieved that you have come at last...\"");
	say();
	gflags[0x01FA] = true;
labelFunc04AA_09AA:
	case "bye" attend labelFunc04AA_0A24:
	if (!(UI_get_npc_id(0xFF56) == 0x0001)) goto labelFunc04AA_0A05;
	UI_set_npc_id(0xFF56, 0x0000);
	message("\"To give me your answer -- will you bring me the Goblet of the Conjury?\"");
	say();
	if (!Func0955()) goto labelFunc04AA_09E7;
	message("\"To have nothing to fear, if you are the Hero. To meditate to give you strength.\"");
	say();
	Func097F(0xFF56, "@To be strong!@", 0x0000);
	goto labelFunc04AA_09F7;
labelFunc04AA_09E7:
	message("\"To know that time is short. To wish that the true Hero shall come soon.\"");
	say();
	Func097F(0xFF56, "@Soon...@", 0x0000);
labelFunc04AA_09F7:
	UI_set_schedule_type(0xFF56, 0x0014);
	abort;
	goto labelFunc04AA_0A24;
labelFunc04AA_0A05:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Well met!@", 0x0000);
	Func097F(0xFF56, "@To wish you luck!@", 0x0002);
	goto labelFunc04AA_0A27;
labelFunc04AA_0A24:
	goto labelFunc04AA_03D0;
labelFunc04AA_0A27:
	endconv;
labelFunc04AA_0A28:
	return;
}


