#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func08DD 0x8DD ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0401 object#(0x401) ()
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

	gflags[0x0014] = true;
	var0000 = Func0908();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFF);
	var0003 = Func0909();
	var0004 = UI_is_pc_female();
	if (!(event == 0x0003)) goto labelFunc0401_0173;
	if (!((!gflags[0x003B]) && ((!gflags[0x005C]) && UI_get_item_flag(0xFE9C, 0x0010)))) goto labelFunc0401_016C;
	UI_play_music(0x0023, 0x0000);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x23, (byte)0x55, 0x06AA], 0x007D);
	var0005 = UI_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x54, 0x0023, 0x0001, (byte)0x52, "@There, there...@"]);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@'Tis horrible!@"], 0x0010);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@I know, 'tis shocking!@"], 0x0021);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@Who could have done it?@"], 0x0031);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@I know not...@"], 0x0041);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@He had no enemies...@"], 0x0051);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@Poor man.@"], 0x0061);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@What is to be done?@"], 0x0071);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@I know not...@"], 0x0081);
	gflags[0x005C] = true;
	abort;
	goto labelFunc0401_0173;
labelFunc0401_016C:
	UI_add_to_party(0xFFFF);
labelFunc0401_0173:
	if (!((gflags[0x003B] == false) && (event == 0x0002))) goto labelFunc0401_0268;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("A rather large, familiar man looks up and sees you. The shock that is evident from his dumbfounded expression quickly evolves into delight. He smiles broadly.~~\"");
	message(var0000);
	message("! If I did not trust the infallibility of mine own eyes, I would not believe it! I was just thinking to myself, 'If only the Avatar were here!' Then...~~\"Lo and behold! Who says that magic is dying! Here is living proof that it is not!~~ \"Dost thou realize, ");
	message(var0000);
	message(", that it hath been 200 Britannian years since we last met? Why, thou hast not aged at all!\"");
	say();
	message("Iolo winks conspiratorially. He whispers, \"Due no doubt to the difference in the structure of time in our original homeland and that of Britannia?\"~~He resumes speaking aloud. \"I have aged a little, as thou canst see. But of course, I have stayed here in Britannia all this time.~~\"Oh, but Avatar! Wait until I tell the others! They will be happy to see thee! Welcome to Trinsic!\"*");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!var0004) goto labelFunc0401_01B8;
	var0006 = "her";
	goto labelFunc0401_01BE;
labelFunc0401_01B8:
	var0006 = "him";
labelFunc0401_01BE:
	message("The distraught peasant interrupts Iolo. \"Show ");
	message(var0006);
	message(" the stables, milord. 'Tis horrible!\"*");
	say();
	UI_remove_npc_face(0xFFF5);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo nods, his joy fading quickly as he is reminded of the reason he was standing there in the first place.~~ \"Ah, yes. Our friend Petre here discovered something truly ghastly this morning. Take a look inside the stables. I shall accompany thee.\"");
	say();
	if (!(!UI_mouse_exists())) goto labelFunc0401_01E9;
	message("Iolo takes you aside and whispers, \"Avatar, for the sake of our mutual sanity, I strongly suggest that thou shouldst purchase a mouse.\"");
	say();
labelFunc0401_01E9:
	var0007 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x23, (byte)0x2C, (byte)0x27, 0x0014, (byte)0x55, 0x06FA], 0x0005);
	Func08DD();
	UI_add_to_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFF5), 0x0007);
	UI_set_schedule_type(UI_get_npc_object(0xFFF4), 0x0003);
	UI_halt_scheduled(UI_get_npc_object(0xFFFF));
	UI_halt_scheduled(UI_get_npc_object(0xFFF5));
	if (!(!gflags[0x003B])) goto labelFunc0401_0267;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x0000, 0x0000]);
	gflags[0x003B] = true;
labelFunc0401_0267:
	abort;
labelFunc0401_0268:
	if (!(event == 0x0001)) goto labelFunc0401_0733;
	var0000 = Func0908();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFF);
	var0003 = Func0909();
	UI_show_npc_face(0xFFFF, 0x0000);
	var0008 = Func08F7(0xFFF5);
	var0009 = Func08F7(0xFFFD);
	var000A = false;
	var000B = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02EA]) goto labelFunc0401_02ED;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0401_02DD;
	message("\"I am sorry, I do not join thieves.\"");
	say();
	abort;
	goto labelFunc0401_02ED;
labelFunc0401_02DD:
	message("\"All right, I suppose thou hast learned thy lesson. I shall rejoin.\"");
	say();
	UI_add_to_party(0xFFFF);
	gflags[0x02EA] = false;
	abort;
labelFunc0401_02ED:
	if (!(!gflags[0x0057])) goto labelFunc0401_02FB;
	UI_add_answer("Trinsic");
labelFunc0401_02FB:
	if (!(var0002 in var0001)) goto labelFunc0401_030C;
	UI_add_answer("leave");
labelFunc0401_030C:
	if (!(!(var0002 in var0001))) goto labelFunc0401_031E;
	UI_add_answer("join");
labelFunc0401_031E:
	if (!gflags[0x003F]) goto labelFunc0401_032B;
	UI_add_answer("Fellowship");
labelFunc0401_032B:
	if (!var0008) goto labelFunc0401_0338;
	UI_add_answer("Petre");
labelFunc0401_0338:
	if (!(gflags[0x003C] && (!gflags[0x0057]))) goto labelFunc0401_034D;
	UI_add_answer("murder");
	goto labelFunc0401_0354;
labelFunc0401_034D:
	UI_add_answer("stables");
labelFunc0401_0354:
	if (!gflags[0x003C]) goto labelFunc0401_0361;
	UI_remove_answer("stables");
labelFunc0401_0361:
	message("\"Yes, ¸­ friend?\" Iolo asks.");
	say();
labelFunc0401_0365:
	converse attend labelFunc0401_072E;
	case "name" attend labelFunc0401_0381:
	message("Your friend snorts. \"What, art thou joking, ");
	message(var0003);
	message("? Thou dost not know thine old friend Iolo?\"");
	say();
	UI_remove_answer("name");
labelFunc0401_0381:
	case "stables" attend labelFunc0401_0394:
	message("\"Thou must see for thyself, ");
	message(var0000);
	message(". Brace thyself, my friend. 'Tis truly a horrible sight.\"*");
	say();
	abort;
labelFunc0401_0394:
	case "job" attend labelFunc0401_03AE:
	message("\"Why, right now 'tis adventuring with that most courageous of all legendary heroes, the Avatar!\"");
	say();
	UI_add_answer("Avatar");
	UI_remove_answer("job");
labelFunc0401_03AE:
	case "Avatar" attend labelFunc0401_03D4:
	message("\"Why, there is no doubt -thou- art the Avatar, ");
	message(var0000);
	message("! However, thou mayest have some trouble convincing those who do not know thy face.~~\"Of course, thou -shouldst- be safe around thy friends!\"");
	say();
	UI_remove_answer("Avatar");
	UI_add_answer(["trouble", "friends"]);
labelFunc0401_03D4:
	case "trouble" attend labelFunc0401_03E7:
	message("\"Well, after all, thou hast been gone for 200 years! Most of those who would recognize thee are long gone! Sorry to be blunt and all, my friend, but there it is.\"");
	say();
	UI_remove_answer("trouble");
labelFunc0401_03E7:
	case "murder" attend labelFunc0401_0415:
	if (!(!gflags[0x003D])) goto labelFunc0401_040A;
	message("\"Ugly, is it not? From what I have heard, neither Christopher nor Inamo deserved so grisly a death. Thou shouldst certainly ask everyone in town about it.\"");
	say();
	UI_add_answer(["Christopher", "Inamo"]);
	goto labelFunc0401_040E;
labelFunc0401_040A:
	message("\"I wish thee luck in determining what is going on. I haven't a clue!\" Iolo grins broadly, patting you on the back.");
	say();
labelFunc0401_040E:
	UI_remove_answer("murder");
labelFunc0401_0415:
	case "Lord British" attend labelFunc0401_0452:
	var000A = true;
	if (!gflags[0x0065]) goto labelFunc0401_0432;
	message("\"Well, between thee and me, I think that he hath aged much more than I!\"");
	say();
	message("\"Full of information, that chap. But he never seems to leave Britain anymore.\"");
	say();
	goto labelFunc0401_0436;
labelFunc0401_0432:
	message("\"My liege will be enormously pleased to see thee. We should travel to Britain post haste. I am sure he can give thee some valuable information and update thee on much of what thou hast missed in the 200 years of thine absence.\"");
	say();
labelFunc0401_0436:
	if (!(!var000B)) goto labelFunc0401_0444;
	UI_add_answer("Britain");
labelFunc0401_0444:
	UI_add_answer("information");
	UI_remove_answer("Lord British");
labelFunc0401_0452:
	case "information" attend labelFunc0401_0473:
	message("\"Certainly. LB is always a repository of the most amazing facts, eh? Probably something to do with listening and not always talking.\"");
	say();
	if (!var0009) goto labelFunc0401_0468;
	message("\"Right, Shamino?\"~~Shamino grunts and turns away as Iolo grins mischievously.");
	say();
labelFunc0401_0468:
	message("\"Speaking of information, reminds me of something! I have a little item which might be useful to thee. 'Tis an abacus. Use it to tally up all of our gold.\"");
	say();
	UI_remove_answer("information");
labelFunc0401_0473:
	case "friends" attend labelFunc0401_0493:
	message("\"Thou must mean Shamino and Dupre.\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Shamino", "Dupre"]);
labelFunc0401_0493:
	case "Dupre" attend labelFunc0401_050A:
	var000C = Func08F7(0xFFFC);
	if (!var000C) goto labelFunc0401_04E0;
	message("\"Why, he is right there, ");
	message(var0003);
	message(".\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"I am right here, ");
	message(var0003);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"See? I told thee!\"");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04E0:
	message("\"I am sure we shall find him somewhere. Last I heard, he was in Jhelom. Didst thou know he was knighted?\"");
	say();
	if (!Func090A()) goto labelFunc0401_04F1;
	message("\"Hard to believe, is it not?\"");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04F1:
	message("\"It's true! Lord British knighted him recently. Why he did so, I cannot imagine!\"");
	say();
	if (!(!var000A)) goto labelFunc0401_0503;
	UI_add_answer("Lord British");
labelFunc0401_0503:
	UI_remove_answer("Dupre");
labelFunc0401_050A:
	case "Shamino" attend labelFunc0401_0567:
	if (!var0009) goto labelFunc0401_054E;
	message("\"Why, he is right there, ");
	message(var0003);
	message(".\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"I am right here, ");
	message(var0003);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"See? I told thee!\"");
	say();
	goto labelFunc0401_0560;
labelFunc0401_054E:
	message("\"Thy best bet in finding that rascal is to look in Britain. He has a girlfriend employed as an actress at the Royal Theatre.\"");
	say();
	if (!(!var000B)) goto labelFunc0401_0560;
	UI_add_answer("Britain");
labelFunc0401_0560:
	UI_remove_answer("Shamino");
labelFunc0401_0567:
	case "Trinsic" attend labelFunc0401_0587:
	message("\"The town has changed little, has it not? Everyone seems a little defensive, though. When we ran into each other, I was passing through and had stopped to visit my friend Finnigan.\"");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer(["defensive", "Finnigan"]);
labelFunc0401_0587:
	case "defensive" attend labelFunc0401_059A:
	message("\"I think it best for thee to speak with them thyself. There have been many changes since last thou didst visit, Avatar. I think thou wilt feel at times a bit... well, old-fashioned.\"");
	say();
	UI_remove_answer("defensive");
labelFunc0401_059A:
	case "Britain" attend labelFunc0401_05C6:
	var000B = true;
	message("\"It has grown since thou last saw it. Paws is now a virtual township of Britain! It dominates the east coast of Britannia.~~\"Lord British's castle is still the overwhelming feature.\"");
	say();
	UI_remove_answer("Britain");
	if (!(!var000A)) goto labelFunc0401_05BF;
	UI_add_answer("Lord British");
labelFunc0401_05BF:
	UI_add_answer("Paws");
labelFunc0401_05C6:
	case "Paws" attend labelFunc0401_05D9:
	message("\"It still lies between Britain and Trinsic, but it has grown further into Britain itself.\"");
	say();
	UI_remove_answer("Paws");
labelFunc0401_05D9:
	case "Finnigan" attend labelFunc0401_05EC:
	message("\"He is a good man. The Mayor of Trinsic, he is. I have known him for years.\"");
	say();
	UI_remove_answer("Finnigan");
labelFunc0401_05EC:
	case "Christopher" attend labelFunc0401_0605:
	message("\"I did not know him, ");
	message(var0003);
	message(".\"");
	say();
	UI_remove_answer("Christopher");
labelFunc0401_0605:
	case "Inamo" attend labelFunc0401_061F:
	message("\"I never spoke with him. It is truly a shame. There are not many gargoyles living amongst the humans. This will only discourage the practice even more.\"");
	say();
	UI_remove_answer("Inamo");
	UI_add_answer("gargoyles");
labelFunc0401_061F:
	case "leave" attend labelFunc0401_0696:
	message("Iolo looks hurt. \"Thou dost really want me to leave?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0401_0692;
	message("\"Dost thou want me to wait here or dost thou want me to go home to Yew?\"");
	say();
	UI_clear_answers();
	var000E = Func090B(["wait here", "go home"]);
	if (!(var000E == "wait here")) goto labelFunc0401_0675;
	message("\"Very well. I shall wait here until thou dost return and ask me to rejoin.\"*");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000F);
	abort;
	goto labelFunc0401_068F;
labelFunc0401_0675:
	message("\"Farewell, then. I shall always rejoin if thou dost so desire.\" Iolo turns away from you.*");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000B);
	abort;
labelFunc0401_068F:
	goto labelFunc0401_0696;
labelFunc0401_0692:
	message("\"Whew. Thou didst frighten me!\"");
	say();
labelFunc0401_0696:
	case "join" attend labelFunc0401_06E7:
	message("\"I was waiting until thou didst ask me!\"");
	say();
	var000F = 0x0000;
	enum();
labelFunc0401_06A9:
	for (var0012 in var0001 with var0010 to var0011) attend labelFunc0401_06C1;
	var000F = (var000F + 0x0001);
	goto labelFunc0401_06A9;
labelFunc0401_06C1:
	if (!(var000F < 0x0008)) goto labelFunc0401_06E3;
	UI_add_to_party(0xFFFF);
	UI_remove_answer("join");
	UI_add_answer("leave");
	goto labelFunc0401_06E7;
labelFunc0401_06E3:
	message("\"It seems that thou hast enough members travelling with thee already! I shall wait until someone leaves the group.\"");
	say();
labelFunc0401_06E7:
	case "gargoyles" attend labelFunc0401_06FA:
	message("\"Since thou wert last in Britannia, the Gargoyles have begun to integrate with the humans. Most of them live on Sutek's old island, which was renamed 'Terfin'. However, thou mayest see one here and there throughout the land.\"");
	say();
	UI_remove_answer("gargoyles");
labelFunc0401_06FA:
	case "Fellowship" attend labelFunc0401_070D:
	message("\"I do not know much about them, except that they originated about twenty Britannian years ago. They seem to do good deeds and are looked at with favor by most everyone. They have branch offices all over Britannia. I have not personally had any dealings with them.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0401_070D:
	case "Petre" attend labelFunc0401_0720:
	message("\"He is just an acquaintance.\"");
	say();
	UI_remove_answer("Petre");
labelFunc0401_0720:
	case "bye" attend labelFunc0401_072B:
	goto labelFunc0401_072E;
labelFunc0401_072B:
	goto labelFunc0401_0365;
labelFunc0401_072E:
	endconv;
	message("\"'Tis always a pleasure to speak with thee, my friend.\"*");
	say();
labelFunc0401_0733:
	if (!(event == 0x0000)) goto labelFunc0401_0741;
	Func092E(0xFFFF);
labelFunc0401_0741:
	return;
}


