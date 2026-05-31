#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func093C 0x93C (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func08F2 0x8F2 (var var0000, var var0001);
extern void Func08F4 0x8F4 (var var0000, var var0001);
extern var Func08F5 0x8F5 (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func08F3 0x8F3 (var var0000);

void Func040A object#(0x40A) ()
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
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;

	if (!(event == 0x0001)) goto labelFunc040A_0A8C;
	UI_show_npc_face(0xFFF6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_get_party_list();
	var0003 = Func093C(UI_get_npc_object(0xFE9C), var0002);
	var0004 = UI_get_npc_object(0xFFF6);
	var0005 = UI_get_npc_object(0xFFFA);
	if (!(UI_is_pc_female() == 0x0000)) goto labelFunc040A_005D;
	var0006 = "Abraham";
	goto labelFunc040A_0063;
labelFunc040A_005D:
	var0006 = "Elizabeth";
labelFunc040A_0063:
	var0007 = UI_get_array_size(var0002);
	var0008 = "";
	if (!(var0007 > 0x0001)) goto labelFunc040A_0083;
	var0008 = "s";
labelFunc040A_0083:
	var0009 = 0x0000;
	var000A = false;
	var000B = false;
	var000C = false;
	var000D = false;
	var000E = false;
	var000F = false;
	var0010 = false;
	var0011 = false;
	var0012 = false;
	var0013 = false;
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = UI_find_nearby(var0004, 0x0211, 0x000D, 0x0000);
	var0018 = UI_find_nearby(var0004, 0x01FE, 0x000D, 0x0000);
	var0019 = UI_find_nearby(var0004, 0x0214, 0x000D, 0x0000);
	var001A = UI_find_nearby(var0004, 0x01EE, 0x0014, 0x0000);
	var001B = false;
	if (!(Func08F7(0x00E5) || Func08F7(0x00E4))) goto labelFunc040A_0121;
	var001B = true;
labelFunc040A_0121:
	var001C = "valiant warrior";
	if (!gflags[0x015E]) goto labelFunc040A_0133;
	var001C = "noble enchanter";
labelFunc040A_0133:
	if (!((!gflags[0x001D]) && gflags[0x015D])) goto labelFunc040A_0148;
	Func08F2(var0000, var0006);
	abort;
labelFunc040A_0148:
	if (!(var0004 in var0002)) goto labelFunc040A_01AE;
	Func08F4(var0000, var0007);
	if (!var001B) goto labelFunc040A_0168;
	UI_add_answer("hermits");
labelFunc040A_0168:
	if (!var0017) goto labelFunc040A_0175;
	UI_add_answer("slime");
labelFunc040A_0175:
	if (!var0018) goto labelFunc040A_0182;
	UI_add_answer("foxes");
labelFunc040A_0182:
	if (!var0019) goto labelFunc040A_018F;
	UI_add_answer("harpies");
labelFunc040A_018F:
	if (!var001A) goto labelFunc040A_01A0;
	message("\"We need not be concerned about these bees, so long as we have a number of my trusty arrows.\"");
	say();
	UI_add_answer("bees");
labelFunc040A_01A0:
	UI_add_answer("Fellowship");
	var0013 = true;
	goto labelFunc040A_01B8;
labelFunc040A_01AE:
	message("\"Greetings, traveller");
	message(var0008);
	message(".\"");
	say();
labelFunc040A_01B8:
	if (!gflags[0x015D]) goto labelFunc040A_01C4;
	var001C = "lowly deceiver";
labelFunc040A_01C4:
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x001D] && (var0007 == 0x0001))) goto labelFunc040A_01E6;
	gflags[0x015F] = true;
labelFunc040A_01E6:
	if (!(gflags[0x0162] && (!(var0004 in var0002)))) goto labelFunc040A_01FC;
	UI_add_answer(var0006);
labelFunc040A_01FC:
	if (!((!gflags[0x015F]) && ((var0007 > 0x0001) && gflags[0x001D]))) goto labelFunc040A_0216;
	UI_add_answer("introduce");
labelFunc040A_0216:
	converse attend labelFunc040A_0A8B;
	var0002 = UI_get_party_list();
	var001D = "";
	case "name" attend labelFunc040A_0277:
	UI_remove_answer("name");
	if (!(gflags[0x001D] == true)) goto labelFunc040A_024A;
	message("\"I am Tseramed the woodsman. Thou art a ");
	message(var001C);
	message(".\"");
	say();
	goto labelFunc040A_0277;
labelFunc040A_024A:
	message("\"I am called Tseramed. Art thou Fellowship members? How art thou called?\"");
	say();
	UI_push_answers();
	var0009 = (var0009 + 0x0001);
	UI_add_answer([var0000, "Fellowship"]);
	if (!(!gflags[0x0161])) goto labelFunc040A_0277;
	UI_add_answer("Avatar");
labelFunc040A_0277:
	case "Avatar" attend labelFunc040A_028E:
	UI_remove_answer("Avatar");
	gflags[0x0161] = true;
	message("\"The Avatar! This is a strange chance. Tell me Avatar, by what name art thou called?\"");
	say();
labelFunc040A_028E:
	case var0000 attend labelFunc040A_02D9:
	UI_remove_answer(var0000);
	gflags[0x001D] = true;
	message("\"Well met, ");
	message(var0000);
	message("\"");
	say();
	if (!gflags[0x0161]) goto labelFunc040A_02B5;
	message("Thy demeanor is noble.");
	say();
labelFunc040A_02B5:
	if (!(var0007 == 0x0001)) goto labelFunc040A_02C3;
	gflags[0x015F] = true;
labelFunc040A_02C3:
	UI_pop_answers();
	if (!(!gflags[0x015F])) goto labelFunc040A_02D9;
	message("Perhaps thou couldst introduce me to thy companions?\"");
	say();
	UI_add_answer("introduce");
labelFunc040A_02D9:
	case "Fellowship" attend labelFunc040A_0328:
	UI_remove_answer("Fellowship");
	if (!gflags[0x001D]) goto labelFunc040A_0317;
	if (!((var0004 in var0002) || gflags[0x0162])) goto labelFunc040A_0310;
	message("\"I do not trust The Fellowship, and most especially ");
	message(var0006);
	message(".\"");
	say();
	UI_add_answer(var0006);
	goto labelFunc040A_0314;
labelFunc040A_0310:
	message("\"I have no love for The Fellowship. We shall speak of it when I know thee better.\"");
	say();
labelFunc040A_0314:
	goto labelFunc040A_0328;
labelFunc040A_0317:
	message("\"Yes. Perhaps I am addressing the illustrious ");
	message(var0006);
	message("?\"");
	say();
	UI_add_answer(var0006);
labelFunc040A_0328:
	case var0006 attend labelFunc040A_03AC:
	UI_remove_answer(var0006);
	if (!gflags[0x001D]) goto labelFunc040A_037A;
	message("\"Not long ago The Fellowship began to spread its influence throughout Britannia.");
	say();
	message("\"In their early days they attracted many bright and enthusiastic young people, among them my love, Lady M.");
	say();
	message("A woman so intelligent could not help but rise in their ranks. Her direct superior was ");
	message(var0006);
	message(".");
	say();
	message("One black evening she fell gravely ill. According to friends of mine, ");
	message(var0006);
	message(" forbade her to visit the local healer. By the time I learned of this, she had already passed away.");
	say();
	message("She rests now forever in the Yew graveyard, may her sleep be peaceful. I searched the land for ");
	message(var0006);
	message(", but never found my quarry. In fact, it seems that every time I near my prey, they have already vanished! My search shall never be truly over.\"");
	say();
	UI_remove_answer(var0006);
	UI_add_answer(["Yew", "Lady M."]);
	goto labelFunc040A_03AC;
labelFunc040A_037A:
	UI_pop_answers();
	gflags[0x015D] = true;
	var001E = "";
	if (!gflags[0x0161]) goto labelFunc040A_0394;
	var001E = "thou dost tarnish the title of Avatar!";
labelFunc040A_0394:
	message("\"Knave, ");
	message(var001E);
	message(" I have not forgotten thy wrong doing, nor the evil crime that followed it.");
	say();
	message("Oh soul as black as pitch!\"");
	say();
	Func08F2(var0000, var0006);
	abort;
labelFunc040A_03AC:
	case "Lady M." attend labelFunc040A_03BF:
	UI_remove_answer("Lady M.");
	message("\"Youth is hers forever.\"");
	say();
labelFunc040A_03BF:
	case "job" attend labelFunc040A_041B:
	if (!(!var000A)) goto labelFunc040A_0409;
	var000A = true;
	if (!(var0004 in var0002)) goto labelFunc040A_03F0;
	message("\"I travel with thee, ");
	message(var001C);
	message(", to aid thee with my wood craft.\"");
	say();
	UI_add_answer("forest");
	goto labelFunc040A_0406;
labelFunc040A_03F0:
	message("\"I am but a humble woodsman. I garner my living from the forest and find knowledge in its depths.");
	say();
	message("I have explored all this region.\"");
	say();
	UI_add_answer("knowledge");
	UI_add_answer("forest");
labelFunc040A_0406:
	goto labelFunc040A_041B;
labelFunc040A_0409:
	message("\"As I said, my woodcraft encompasses all this forest, even the caves in the mountain.\"");
	say();
	UI_add_answer("forest");
	UI_add_answer("caves");
labelFunc040A_041B:
	case "introduce" attend labelFunc040A_0436:
	var0003 = Func08F5(var0002, var0003);
	UI_remove_answer("introduce");
labelFunc040A_0436:
	if (!(gflags[0x001D] && (!var0013))) goto labelFunc040A_0462;
	if (!((var0004 in var0002) || (UI_get_array_size(var0003) == 0x0000))) goto labelFunc040A_0462;
	UI_add_answer("Fellowship");
	var0013 = true;
labelFunc040A_0462:
	var001F = 0x0000;
	case "forest" attend labelFunc040A_0476:
	var001F = 0x0001;
labelFunc040A_0476:
	case "caves", "secret places" attend labelFunc040A_0487:
	var001F = 0x0002;
labelFunc040A_0487:
	case "knowledge" attend labelFunc040A_0495:
	var001F = 0x0003;
labelFunc040A_0495:
	if (!(var001F > 0x0000)) goto labelFunc040A_04E2;
	if (!((!gflags[0x015F]) || (!gflags[0x001D]))) goto labelFunc040A_04E2;
	var0020 = ["We may speak more after introductions...", "Perhaps introductions are in order first."];
	var0021 = var0020[UI_die_roll(0x0001, UI_get_array_size(var0020))];
	message("\"");
	message(var0021);
	message("\"");
	say();
	var001F = 0x0000;
	UI_add_answer("introduce");
labelFunc040A_04E2:
	if (!(var001F == 0x0001)) goto labelFunc040A_0501;
	var000D = true;
	message("\"The forest is a wild place, but tamed somewhat in recent years. Within, ");
	message(var001C);
	message(", thou mayest still find creatures spoken of only in legend.\"");
	say();
	UI_add_answer("creatures");
labelFunc040A_0501:
	if (!(var001F == 0x0002)) goto labelFunc040A_0527;
	var000C = true;
	message("\"North of my hut is a deep bore-hole into the mountains. Within live bees of a size to rival sheep, or hounds. Their wings stir up leaves as they fly, and they humm with a noise to make men flee in fear.\"");
	say();
	message("\"Some have entered, never to return. Perhaps they are there still... Death is greedy, and holds a fate for those of like intent.\"");
	say();
	UI_add_answer(["mountains", "bees", "death"]);
labelFunc040A_0527:
	if (!(var001F == 0x0003)) goto labelFunc040A_054C;
	UI_remove_answer("knowledge");
	message("\"Many years have I dwelt by the mountains. Many spans have vanished under my roaming feet. Into the depths of the dark swamp I have gone, and to the heights of the mountains. I know the trees of the forest, and the secret places in the earth.\"");
	say();
	UI_add_answer(["mountains", "swamp", "secret places"]);
labelFunc040A_054C:
	case "swamp" attend labelFunc040A_057A:
	UI_remove_answer("swamp");
	message("\"North of the mountain spur is a dense swamp. Killing slime [lurk within, guarding a clear spring. All about the water is foul and noisome.");
	say();
	message("Into thy boots the foul concoction will seep, bringing on nausea and dizziness. The wise traveller wears swamp boots in such places.");
	say();
	message("East, North, and West that mire is drained. Through Yew and past the Abbey the westward river flows. The others both bend north into the sea.\"");
	say();
	UI_add_answer(["slime", "Yew", "Abbey", "sea"]);
labelFunc040A_057A:
	case "Abbey" attend labelFunc040A_059A:
	UI_remove_answer("Abbey");
	message("\"Empath Abbey is its proper name ");
	message(var0001);
	message(". They practice ancient arts there, the eldest being the fermentation and distillation of spirits. Demand for their products is high in Yew.\"");
	say();
	UI_add_answer("Yew");
labelFunc040A_059A:
	case "Yew" attend labelFunc040A_05B1:
	UI_remove_answer("Yew");
	message("\"Citizens of a reclusive nature feel at peace there. Within the forest lie its buildings, many so grown-over as to seem a part of the wood.\"");
	say();
	message("\"East of my dwelling the wood is thick, but a woodcrafty traveller may find the houses there.\"");
	say();
labelFunc040A_05B1:
	case "sea" attend labelFunc040A_05E0:
	UI_remove_answer("sea");
	message("\"The sea!  Its waves sooth a rough mood, but its fury is unrivaled. Ask those who live upon it! A gift it is, to live by it and reap its natural harvest. I cast in a line when I may.");
	say();
	message("Dost thou wonder what mysteries the sea must hold?\"");
	say();
	if (!Func090A()) goto labelFunc040A_05DC;
	message("\"I also wonder. But the doings of those who travel upon it are more familiar to me. I have seen pirates land upon the northern coast.\"");
	say();
	UI_add_answer("pirates");
	goto labelFunc040A_05E0;
labelFunc040A_05DC:
	message("\"Perhaps thou art not as fond of the sea as I...\"");
	say();
labelFunc040A_05E0:
	case "pirates" attend labelFunc040A_05F3:
	UI_remove_answer("pirates");
	message("\"Perhaps they land to cache their booty in the forest. I have never followed them.\"");
	say();
labelFunc040A_05F3:
	case "mountains" attend labelFunc040A_0610:
	var000B = true;
	message("\"Vaulting in from the coast looms a narrow spine. Dangerous and sharp rear the crags of those mountains. Caves there hold danger, and death for the unwary.\"");
	say();
	UI_add_answer(["caves", "death"]);
labelFunc040A_0610:
	case "death" attend labelFunc040A_062A:
	UI_remove_answer("death");
	message("\"Death for the greedy. Death for any who steal from the dwellers in the caves.\"");
	say();
	UI_add_answer("caves");
labelFunc040A_062A:
	case "creatures" attend labelFunc040A_0654:
	UI_remove_answer("creatures");
	message("\"Aye. Such as would devour the unwary and pick bones dry. In the forest are harpies, and slime on the margins of the swamp, and bees in the caves.");
	say();
	message("\"Good game live also in the forest: Foxes and the like.\"");
	say();
	UI_add_answer(["slime", "foxes", "harpies", "bees"]);
labelFunc040A_0654:
	case "harpies" attend labelFunc040A_0674:
	UI_remove_answer("harpies");
	if (!var0019) goto labelFunc040A_0670;
	message("\"Harpies! To battle! Let us slay them at once!\"");
	say();
	goto labelFunc040A_0674;
labelFunc040A_0670:
	message("\"A malformed flying horror. Thou wouldst not want to meet one.\"");
	say();
labelFunc040A_0674:
	case "slime" attend labelFunc040A_0692:
	var000E = true;
	message("\"A dangerous organism is the greenish slime. Acidic to touch, it will hurl pseudopods at its prey from three paces.");
	say();
	message("\"Never sleeping, it has no mind and is composed in the main of\tpoisonous substances. It engulfs and devours hapless animals voraciously.\"");
	say();
	if (!var0017) goto labelFunc040A_0692;
	message("\"Attack it with flame! Slime has no defense against it.\"");
	say();
labelFunc040A_0692:
	case "foxes" attend labelFunc040A_06C1:
	var000F = true;
	if (!UI_find_nearby(var0004, 0x01FE, 0x000A, 0x0000)) goto labelFunc040A_06B7;
	var001D = "  See how lustrous is the coat of that fox.";
labelFunc040A_06B7:
	message("\"Cunning is the fox, and shy of humans. We shall never belong to the forest as they do.");
	message(var001D);
	message("\"");
	say();
labelFunc040A_06C1:
	case "bees" attend labelFunc040A_0705:
	var0011 = true;
	if (!var001A) goto labelFunc040A_06E1;
	message("\"Bees such as these may be tamed with my special arrows!\"");
	say();
	UI_add_answer("arrows");
	goto labelFunc040A_0705;
labelFunc040A_06E1:
	message("\"Such bees as thou hast never seen! Large as a wolf they are, with wings stretching over a span in length.");
	say();
	message("A creature stung by them will pass into a deep, death-like sleep.\"");
	say();
	if (!(!(var0004 in var0002))) goto labelFunc040A_0705;
	message("\"I have hunted them on many occasions, for I use their poison on my arrows. And I like their honey. Perhaps together we might journey into the cave for some?\"");
	say();
	UI_add_answer(["join", "arrows"]);
labelFunc040A_0705:
	case "arrows" attend labelFunc040A_0818:
	UI_remove_answer("arrows");
	message("\"I fashion my arrows from the stingers of giant bees. With them one may put a foe to sleep.\"");
	say();
	var0022 = "";
	var0023 = 0x0000;
	if (!gflags[0x0153]) goto labelFunc040A_0783;
	var0023 = UI_count_objects(0xFE9B, 0x03B3, 0xFE99, 0xFE99);
	if (!(var0023 > 0x0006)) goto labelFunc040A_074D;
	var0023 = 0x0006;
labelFunc040A_074D:
	var0024 = UI_count_objects(0xFE9B, 0x0238, 0xFE99, 0xFE99);
	if (!((var0004 in var0002) && ((var0024 < 0x0006) && (var0023 > 0x0000)))) goto labelFunc040A_0780;
	var0022 = "Shall I fashion these stingers into arrows?";
labelFunc040A_0780:
	goto labelFunc040A_078F;
labelFunc040A_0783:
	var0022 = "If thou wouldst like, I would be happy to give thee a dozen of my special arrows. Art thou interested?";
	var0023 = 0x000C;
labelFunc040A_078F:
	if (!(var0022 != "")) goto labelFunc040A_0818;
	message(var0022);
	message("");
	say();
	if (!Func090A()) goto labelFunc040A_080E;
	var0025 = UI_add_party_items(var0023, 0x0238, 0xFE99, 0xFE99, false);
	if (!var0025) goto labelFunc040A_0807;
	var0026 = "";
	if (!(var0023 > 0x0001)) goto labelFunc040A_07D6;
	var0026 = "s";
labelFunc040A_07D6:
	message("\"Use them with care, for even a scratch may put one to sleep!\" he says, handing you ");
	message(var0023);
	message(" arrow");
	message(var0026);
	message(".");
	say();
	if (!gflags[0x0153]) goto labelFunc040A_0800;
	var001F = UI_remove_party_items(var0023, 0x03B3, 0xFE99, 0xFE99, true);
labelFunc040A_0800:
	gflags[0x0153] = true;
	goto labelFunc040A_080B;
labelFunc040A_0807:
	message("\"Perhaps when thou art carrying less I can give them to thee.\"");
	say();
labelFunc040A_080B:
	goto labelFunc040A_0818;
labelFunc040A_080E:
	message("\"Very well, ");
	message(var0001);
	message(".\"");
	say();
labelFunc040A_0818:
	case "join" attend labelFunc040A_0856:
	UI_remove_answer("join");
	if (!(var0007 < 0x0008)) goto labelFunc040A_084C;
	UI_add_to_party(0xFFF6);
	message("\"I would be honored, ");
	message(var0001);
	message(".\"");
	say();
	UI_add_answer("Fellowship");
	goto labelFunc040A_0856;
labelFunc040A_084C:
	message("\"'Twould appear, ");
	message(var0001);
	message(", that thou already hast more than enough travelling companions.\"");
	say();
labelFunc040A_0856:
	case "leave" attend labelFunc040A_08C0:
	var0027 = true;
	message("\"Dost thou want me to wait here or should I go home?\"");
	say();
	UI_clear_answers();
	var0028 = Func090B(["wait here", "go home"]);
	if (!(var0028 == "wait here")) goto labelFunc040A_08A0;
	message("\"Very well! I shall wait for thee!\"*");
	say();
	UI_remove_from_party(0xFFF6);
	UI_set_schedule_type(UI_get_npc_object(0xFFF6), 0x000F);
	abort;
	goto labelFunc040A_08C0;
labelFunc040A_08A0:
	message("\"Very well, ");
	message(var0001);
	message(". Fare thee well.\"*");
	say();
	UI_remove_from_party(0xFFF6);
	UI_set_schedule_type(UI_get_npc_object(0xFFF6), 0x000B);
	abort;
labelFunc040A_08C0:
	var0029 = false;
	case "hermits" attend labelFunc040A_08D0:
	var0029 = true;
labelFunc040A_08D0:
	if (!((var000C && var000B) && (!var0012))) goto labelFunc040A_08F2;
	message("\"Speaking of caves and mountains, there are some who dwell near, or perhaps in, the cave of bees. They are hermits.\"");
	say();
	var0029 = true;
	var0012 = true;
	UI_add_answer("bees");
labelFunc040A_08F2:
	if (!var0029) goto labelFunc040A_0937;
	UI_remove_answer("hermits");
	if (!(!gflags[0x0152])) goto labelFunc040A_0922;
	message("\"One day I glimpsed a man and a woman deep within the cave as I was hunting. Since then I have seen them twice. I believe they are former citizens of Yew, though I do not know how they live in harmony with the bees.\"");
	say();
	if (!var001B) goto labelFunc040A_0914;
	message("\"These are the people I saw!\"");
	say();
labelFunc040A_0914:
	gflags[0x0152] = true;
	UI_add_answer("bees");
	goto labelFunc040A_0933;
labelFunc040A_0922:
	if (!var001B) goto labelFunc040A_092F;
	message("\"These people are the hermits I spoke of before.\"");
	say();
	goto labelFunc040A_0933;
labelFunc040A_092F:
	message("\"Perhaps those hermits are still living in the cave.\"");
	say();
labelFunc040A_0933:
	var0012 = true;
labelFunc040A_0937:
	if (!((var000E && var000F) && (!var0010))) goto labelFunc040A_0967;
	message("\"This puts me in mind of a story. Wouldst thou like to hear it?\"");
	say();
	if (!Func090A()) goto labelFunc040A_095F;
	message("\"One day while walking along the edge of the swamp I happened upon a strange sight. A fox was held at bay on a small hillock in the midst of the swamp, and all about the hillock writhed green slime.");
	say();
	message("Slowly the slime crept up toward the fox, when suddenly the fox trotted directly across the surface of the ooze!");
	say();
	message("Unharmed, the fox dashed off into the wood, leaving the slime writhing behind. By this I guess that the victims of slime are those caught sleeping, or unaware.\"");
	say();
	goto labelFunc040A_0963;
labelFunc040A_095F:
	message("\"Perhaps another time.\"");
	say();
labelFunc040A_0963:
	var0010 = true;
labelFunc040A_0967:
	if (!var000E) goto labelFunc040A_0974;
	UI_remove_answer("slime");
labelFunc040A_0974:
	if (!var000F) goto labelFunc040A_0981;
	UI_remove_answer("foxes");
labelFunc040A_0981:
	if (!var0011) goto labelFunc040A_098E;
	UI_remove_answer("bees");
labelFunc040A_098E:
	if (!var000C) goto labelFunc040A_09A9;
	UI_remove_answer("caves");
	UI_remove_answer("secret places");
	UI_remove_answer("death");
labelFunc040A_09A9:
	if (!var000B) goto labelFunc040A_09B6;
	UI_remove_answer("mountains");
labelFunc040A_09B6:
	if (!var000D) goto labelFunc040A_09C3;
	UI_remove_answer("forest");
labelFunc040A_09C3:
	if (!(gflags[0x0161] && ((var0004 in var0002) && (!gflags[0x0162])))) goto labelFunc040A_09E0;
	Func08F3(var0002);
	gflags[0x0162] = true;
labelFunc040A_09E0:
	if (!(var0004 in var0002)) goto labelFunc040A_09F1;
	UI_remove_answer("join");
labelFunc040A_09F1:
	case "bye" attend labelFunc040A_0A88:
	if (!((var0004 in var0002) || var0027)) goto labelFunc040A_0A0B;
	var0016 = true;
labelFunc040A_0A0B:
	if (!(gflags[0x001D] && (!var0016))) goto labelFunc040A_0A7B;
	if (!(!gflags[0x0161])) goto labelFunc040A_0A63;
	message("\"Thy pardon, ");
	message(var0001);
	message(", but thy visage brings to my mind a statue that I once saw.  'Twas a likeness of the ancient hero known as the Avatar.");
	say();
	message("Art thou not that same honorable soul?\"");
	say();
	if (!Func090A()) goto labelFunc040A_0A59;
	var002A = "That sculptor did thee justice.";
	if (!(UI_is_pc_female() == 0x0001)) goto labelFunc040A_0A48;
	var002A = "Thou art more fair by far than any likeness in stone could portray.";
labelFunc040A_0A48:
	message("\"Noble hero, it is an honor to make thine aquaintance. ");
	message(var002A);
	message("\"");
	say();
	gflags[0x0161] = true;
	goto labelFunc040A_0A60;
labelFunc040A_0A59:
	message("\"I must be mistaken. Farewell.\"");
	say();
	goto labelFunc040A_0A8B;
labelFunc040A_0A60:
	goto labelFunc040A_0A78;
labelFunc040A_0A63:
	message("\"^");
	message(var0001);
	message(", if it pleases thee, I would be honored to travel with thee. I have skill in arms, and I can offer my knowledge and wood craft to thee...\"");
	say();
	UI_add_answer("join");
	var0016 = true;
labelFunc040A_0A78:
	goto labelFunc040A_0A88;
labelFunc040A_0A7B:
	message("\"'Til next time, ");
	message(var0001);
	message(".\"*");
	say();
	goto labelFunc040A_0A8B;
labelFunc040A_0A88:
	goto labelFunc040A_0216;
labelFunc040A_0A8B:
	endconv;
labelFunc040A_0A8C:
	if (!(event == 0x0000)) goto labelFunc040A_0A95;
	abort;
labelFunc040A_0A95:
	return;
}


