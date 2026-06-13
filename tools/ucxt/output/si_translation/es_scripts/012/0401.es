#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func0829 0x829 ();
extern void Func09B4 0x9B4 (var var0000);
extern void Func092B 0x92B ();
extern var Func0994 0x994 ();

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

	var0000 = UI_get_npc_id(0xFFFF);
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = UI_is_pc_female();
	if (!(event == 0x0007)) goto labelFunc0401_0061;
	if (!gflags[0x0083]) goto labelFunc0401_0061;
	var0004 = UI_get_oppressor(0xFFFF);
	var0004 = (0x0000 - var0004);
	if (!(!gflags[0x0007])) goto labelFunc0401_005C;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0004), UI_get_npc_object(0xFFFF));
	return;
labelFunc0401_005C:
	Func092E(item);
	return;
labelFunc0401_0061:
	if (!(event == 0x0001)) goto labelFunc0401_010D;
	UI_item_say(0xFE9C, "@Dupre...@");
	0xFFFF->Func07D1();
	if (!(!UI_get_item_flag(0xFFFF, 0x001E))) goto labelFunc0401_00A8;
	Func097F(0xFFFF, (("@Yes, " + var0001) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFFF, 0x0003);
	goto labelFunc0401_010D;
labelFunc0401_00A8:
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc0401_00CB;
	Func097F(0xFFFF, "@Bring to me a woman!@", 0x0002);
labelFunc0401_00CB:
	if (!(var0005 == 0x0002)) goto labelFunc0401_00E1;
	Func097F(0xFFFF, "@I will slay you all!@", 0x0002);
labelFunc0401_00E1:
	if (!(var0005 == 0x0003)) goto labelFunc0401_00F7;
	Func097F(0xFFFF, "@Fulfill thy desires!@", 0x0002);
labelFunc0401_00F7:
	if (!(var0005 == 0x0004)) goto labelFunc0401_010D;
	Func097F(0xFFFF, "@I must have ale!@", 0x0002);
labelFunc0401_010D:
	if (!(event == 0x0009)) goto labelFunc0401_04C3;
	UI_show_npc_face0(0xFFFF, 0x0000);
	UI_clear_item_say(0xFFFF);
	if (!UI_get_item_flag(0xFFFF, 0x0006)) goto labelFunc0401_0147;
	UI_set_schedule_type(0xFFFF, 0x001F);
	UI_add_answer("leave");
	goto labelFunc0401_0155;
labelFunc0401_0147:
	UI_run_schedule(0xFFFF);
	UI_add_answer("join");
labelFunc0401_0155:
	if (!(var0000 == 0x001E)) goto labelFunc0401_01C7;
	message("\"How good to see thee again, ");
	message(var0001);
	message("! Knowing that thou wouldst soon return, I have waited for thee at this establishment.\"");
	say();
	if (!Func0942(0xFFE2)) goto labelFunc0401_0186;
	Func094E(0xFFE2, "@And he hath developed quite a bar tab!@");
	UI_set_conversation_slot(0x0000);
	message("\"One that I shall pay, worry thou not!\"");
	say();
labelFunc0401_0186:
	if (!(!gflags[0x0135])) goto labelFunc0401_019E;
	message("\"And I have good news for thee, ");
	message(var0001);
	message(".\"");
	say();
	UI_add_answer("good news");
labelFunc0401_019E:
	UI_set_npc_id(0xFFFF, 0x0000);
	UI_add_to_party(0xFFFF);
	gflags[0x0017] = true;
	UI_remove_answer("join");
	UI_add_answer(["leave"]);
	goto labelFunc0401_027A;
labelFunc0401_01C7:
	if (!(gflags[0x0006] && (!gflags[0x00B7]))) goto labelFunc0401_0235;
	message("\"");
	message(var0002);
	message("! I thought I would never find thee!\"");
	say();
	message("\"When that strange storm struck, there was a flash, and then I found myself in a wilderness.\"");
	say();
	message("\"Fearing to be slain by the Goblins patrolling the woods, I instead took shelter in this walled city. But these Pikemen insist on escorting me to their leader!\"");
	say();
	if (!UI_npc_nearby(0xFFBB)) goto labelFunc0401_0207;
	UI_show_npc_face1(0xFFBB, 0x0000);
	message("\"That is all right. If thou art with my friend here, thou needest not speak with me.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0401_0207:
	UI_add_to_party(0xFFFF);
	UI_remove_answer("join");
	UI_add_answer("leave");
	UI_set_new_schedules(0xFFFF, 0x0000, 0x001A, [0x097C, 0x0464]);
	goto labelFunc0401_027A;
labelFunc0401_0235:
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x0001)) goto labelFunc0401_0250;
	message("\"This is no time for idle chat. We're on a quest!\"");
	say();
labelFunc0401_0250:
	if (!(var0006 == 0x0002)) goto labelFunc0401_025E;
	message("\"This must wait. There is no time for delay!\"");
	say();
labelFunc0401_025E:
	if (!(var0006 == 0x0003)) goto labelFunc0401_026C;
	message("\"We must press on, Avatar!\"");
	say();
labelFunc0401_026C:
	if (!(var0006 == 0x0004)) goto labelFunc0401_027A;
	message("\"The Sands of Time are dwindling! We must hurry!\"");
	say();
labelFunc0401_027A:
	if (!(UI_get_npc_id(0xFFFE) == 0x001E)) goto labelFunc0401_028F;
	UI_add_answer("Shamino's whereabouts");
labelFunc0401_028F:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0401_02A4;
	UI_add_answer("Iolo's whereabouts");
labelFunc0401_02A4:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0401_02B9;
	UI_add_answer("Boydon's whereabouts");
labelFunc0401_02B9:
	if (!(gflags[0x0017] && ((!UI_get_item_flag(0xFFFF, 0x0006)) && UI_get_cont_items(0xFFFF, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc0401_02E3;
	UI_add_answer("belongings");
labelFunc0401_02E3:
	UI_add_answer(["bye"]);
labelFunc0401_02ED:
	converse attend labelFunc0401_04C2;
	case "belongings" attend labelFunc0401_0302:
	UI_remove_answer("belongings");
	Func0829();
labelFunc0401_0302:
	case "good news" attend labelFunc0401_0341:
	UI_remove_answer("good news");
	if (!(UI_get_item_flag(0xFFFD, 0x0006) || (UI_get_npc_id(0xFFFD) == 0x001E))) goto labelFunc0401_0331;
	message("\"But I should let Iolo tell thee...\"");
	say();
	goto labelFunc0401_0341;
labelFunc0401_0331:
	message("\"The wizard Gustacio hath agreed to aid us, if we will but assist him in his experiments.\"");
	say();
	message("\"He bet with me that thou wouldst not survive Freedom, but I told him that thou wert made of tougher stuff than any dungeon!\"");
	say();
	message("\"I think thy survival shall impress him...\"");
	say();
	gflags[0x0135] = true;
labelFunc0401_0341:
	case "join" attend labelFunc0401_03C3:
	if (!(gflags[0x0082] && (!gflags[0x004A]))) goto labelFunc0401_0380;
	message("\"But Sir Shmed said that the Test is only for one, ");
	message(var0001);
	message("! I cannot come with thee.\"");
	say();
	Func094E(0xFFB5, "@Thou must enter alone, stranger.@");
	Func097F(0xFFB5, "@Alone!@", 0x0000);
	Func097F(0xFFFF, "@Be brave!@", 0x0000);
	abort;
labelFunc0401_0380:
	UI_remove_answer("join");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0401_03AF;
	UI_add_answer("leave");
	message("\"With great pride!\"");
	say();
	UI_add_to_party(0xFFFF);
	gflags[0x0017] = true;
	goto labelFunc0401_03C3;
labelFunc0401_03AF:
	message("\"But thou hast so many companions, ");
	message(var0002);
	message("! I shall only be in thy way.\"");
	say();
	message("\"'Twould be better for me to remain where I am, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0401_03C3:
	case "leave" attend labelFunc0401_03FB:
	UI_remove_answer("leave");
	if (!(!gflags[0x0006])) goto labelFunc0401_03E0;
	message("\"Leave thee at a time such as this? Surely, thou dost jest. Onward!\"");
	say();
	goto labelFunc0401_03FB;
labelFunc0401_03E0:
	UI_add_answer("join");
	message("\"I hesitate to leave thee. But if thou dost insist...\"");
	say();
	UI_remove_from_party(0xFFFF);
	Func0829();
	Func09B4(0xFFFF);
labelFunc0401_03FB:
	case "Shamino's whereabouts" attend labelFunc0401_0422:
	UI_remove_answer("Shamino's whereabouts");
	if (!gflags[0x012B]) goto labelFunc0401_0414;
	message("\"I have exciting news -- the monks have returned Shamino to us again, healthy and whole! This he can explain to thee.\"");
	say();
labelFunc0401_0414:
	message("\"Not being as patient as I am, ");
	message(var0001);
	message(", our good friend Shamino hath gone into the woods to hunt wild game.\"");
	say();
	message("\"He went west from here, towards the magic woods.\"");
	say();
labelFunc0401_0422:
	case "Iolo's whereabouts" attend labelFunc0401_0439:
	UI_remove_answer("Iolo's whereabouts");
	message("\"The good bard was very disturbed by thy sudden departure, and hath been questioning the Mages constantly as to thy fate.\"");
	say();
	message("\"He hath gained the friendship of the Sorcerer Gustacio, and hath taken to aiding that worthy in his studies. We can find him there.\"");
	say();
labelFunc0401_0439:
	case "Boydon's whereabouts" attend labelFunc0401_0450:
	UI_remove_answer("Boydon's whereabouts");
	message("\"Thou wouldst never believe it! Boydon hath become very friendly with young Bucia of the Canton, and spends much time with her.\"");
	say();
	message("\"If we can find her, then we shall find him!\"");
	say();
labelFunc0401_0450:
	case "bye" attend labelFunc0401_04BF:
	if (!(gflags[0x0006] && (!gflags[0x00B7]))) goto labelFunc0401_0498;
	message("\"Before we go any farther, Avatar, I think we should take stock of our supplies.\"");
	say();
	message("\"That blasted storm exchanged all of mine equipment for useless refuse! Even mine enchanted shield!\"");
	say();
	message("\"We cannot hope to survive long without the proper equipment. Perhaps if we can find where this rubbish came from, we can find our good equipment.\"");
	say();
	message("\"I shall prepare a list.\"");
	say();
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc0401_0491;
	Func094E(0xFFFE, "@I have already begun one.@");
	UI_set_conversation_slot(0x0000);
	message("\"Then I shall add to it.\"");
	say();
labelFunc0401_0491:
	Func092B();
	gflags[0x00B7] = true;
labelFunc0401_0498:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@That's all for now.@", 0x0000);
	Func097F(0xFFFF, (("@Yes, " + var0001) + "."), 0x0002);
	goto labelFunc0401_04C2;
labelFunc0401_04BF:
	goto labelFunc0401_02ED;
labelFunc0401_04C2:
	endconv;
labelFunc0401_04C3:
	if (!(event == 0x0003)) goto labelFunc0401_04FA;
	var0007 = Func0994();
	if (!(var0007 == 0x0016)) goto labelFunc0401_04FA;
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("\"Unholy creatures!\tWe must destroy these foul skeletons, Avatar!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFF, "@I hate skeletons!@", 0x0002);
	abort;
labelFunc0401_04FA:
	return;
}


