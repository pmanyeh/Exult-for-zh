#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0889 0x889 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04BD object#(0x4BD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04BD_0345;
	UI_show_npc_face(0xFF43, 0x0000);
	var0000 = false;
	var0001 = false;
	var0002 = Func08F7(0xFFFC);
	UI_add_answer(["name", "job", "bye"]);
	if (!var0002) goto labelFunc04BD_00C4;
	message("\"To greet you, human,\" the gargoyle says to Dupre. \"To ask how well the study is progressing?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Why 'tis progressing nicely, friend Forbrak.\"");
	say();
	var0003 = Func08F7(0xFFFD);
	if (!(var0003 && (!gflags[0x024E]))) goto labelFunc04BD_00B3;
	UI_remove_npc_face(0xFF43);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"-What- study?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Why, er, surely thou hast heard of the famous guides compiled for Brommer!\"");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Aye, I have. But I'll be tarred if there is one detailing various drinking establishments!\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Well, yes, er, 'tis, ah, something new. Now, how about a drink!\"");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"New? 'Tis about as new as my backside...,\" mutters Shamino.");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc04BD_00B3:
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF43, 0x0000);
labelFunc04BD_00C4:
	if (!(!gflags[0x024E])) goto labelFunc04BD_00D6;
	message("The gargoyle tending bar lifts a tankard to you.");
	say();
	gflags[0x024E] = true;
	goto labelFunc04BD_00DA;
labelFunc04BD_00D6:
	message("\"To ask what brings you to this fine establishment?\" asks Forbrak.");
	say();
labelFunc04BD_00DA:
	converse attend labelFunc04BD_0340;
	case "name" attend labelFunc04BD_00F7:
	message("\"To be Forbrak.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Forbrak");
labelFunc04BD_00F7:
	case "Forbrak" attend labelFunc04BD_0111:
	message("\"To mean `strong arm' in the language of the gargoyles.\"");
	say();
	UI_remove_answer("Forbrak");
	UI_add_answer("gargoyles");
labelFunc04BD_0111:
	case "job" attend labelFunc04BD_0124:
	message("He gestures around the room with an open hand.~~ \"To serve food and drink at the Hall of Refreshment.\"");
	say();
	UI_add_answer("buy");
labelFunc04BD_0124:
	case "buy" attend labelFunc04BD_014E:
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF43));
	if (!(var0004 == 0x0007)) goto labelFunc04BD_014A;
	Func0889();
	goto labelFunc04BD_014E;
labelFunc04BD_014A:
	message("\"To ask you to please come back when my shop is open.\"");
	say();
labelFunc04BD_014E:
	case "gargoyles" attend labelFunc04BD_016E:
	message("\"To know many of the residents in town, and some of the troubles.\"");
	say();
	UI_add_answer(["residents", "troubles"]);
	UI_remove_answer("gargoyles");
labelFunc04BD_016E:
	case "troubles" attend labelFunc04BD_018E:
	message("\"To know of only two. To see the conflict between the shrines and The Fellowship, and to know of the struggles of the wingless ones.\"");
	say();
	UI_add_answer(["shrine vs. Fellowship", "wingless vs. winged"]);
	UI_remove_answer("troubles");
labelFunc04BD_018E:
	case "shrine vs. Fellowship" attend labelFunc04BD_01CC:
	message("\"To believe there are disagreements between the old philosophy and the new. To expect no violence, but to ask you to seek the trainer and healer. To know they are observant and may have seen something. To also suggest you speak with members of The Fellowship.\"");
	say();
	gflags[0x023C] = true;
	UI_remove_answer("shrine vs. Fellowship");
	if (!(!var0001)) goto labelFunc04BD_01B3;
	UI_add_answer("trainer");
labelFunc04BD_01B3:
	if (!(!var0000)) goto labelFunc04BD_01C1;
	UI_add_answer("healer");
labelFunc04BD_01C1:
	UI_add_answer("members");
	gflags[0x0244] = true;
labelFunc04BD_01CC:
	case "members" attend labelFunc04BD_01EC:
	message("\"To recommend you talk to their leader and their clerk.\"");
	say();
	UI_add_answer(["leader", "clerk"]);
	UI_remove_answer("members");
labelFunc04BD_01EC:
	case "wingless vs. winged" attend labelFunc04BD_021F:
	message("\"To watch wingless friends be discontented with their lot. To wonder why, but to never ask. To talk to the healer and the trainer. To expect they will have seen evidence if there is evidence to be seen.\"");
	say();
	UI_remove_answer("wingless vs. winged");
	if (!(!var0000)) goto labelFunc04BD_020D;
	UI_add_answer("healer");
labelFunc04BD_020D:
	if (!(!var0001)) goto labelFunc04BD_021B;
	UI_add_answer("trainer");
labelFunc04BD_021B:
	gflags[0x0244] = true;
labelFunc04BD_021F:
	case "residents" attend labelFunc04BD_0259:
	message("\"To know many gargoyles. To want to know about some of them?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04BD_024E;
	message("\"To be sure you already know our leader. To wonder if you have met Teregus, or the learning center head.~~\"To be more practical, you may need the provisioner,\" he nods his head.");
	say();
	UI_add_answer(["learning center", "Teregus", "provisioner"]);
	goto labelFunc04BD_0252;
labelFunc04BD_024E:
	message("\"To tell you about them later if you wish.\"");
	say();
labelFunc04BD_0252:
	UI_remove_answer("residents");
labelFunc04BD_0259:
	case "trainer" attend labelFunc04BD_0270:
	message("\"To be named Inforlem. To be very strong.\"");
	say();
	var0001 = true;
	UI_remove_answer("trainer");
labelFunc04BD_0270:
	case "healer" attend labelFunc04BD_0287:
	message("\"To be named Inmanilem.\"");
	say();
	var0000 = true;
	UI_remove_answer("healer");
labelFunc04BD_0287:
	case "leader" attend labelFunc04BD_029A:
	message("\"To be very friendly. To be called Quan.\"");
	say();
	UI_remove_answer("leader");
labelFunc04BD_029A:
	case "clerk" attend labelFunc04BD_02C5:
	message("\"To be extremely violent.\" He shakes his head. \"To be named Runeb, which means `red mist.' To be all that he leaves of a foe after combat.\"");
	say();
	UI_remove_answer("clerk");
	var0006 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0006) goto labelFunc04BD_02C5;
	message("\"To be dead now, though.\"");
	say();
labelFunc04BD_02C5:
	case "learning center" attend labelFunc04BD_02DF:
	message("\"To be a wonderful place to gain knowledge and exercise. To be managed by a gargoyle name Quaeven. To be very educated, this Quaeven. Also, to be wingless, like Silamo.\"");
	say();
	UI_remove_answer("learning center");
	UI_add_answer("Silamo");
labelFunc04BD_02DF:
	case "provisioner" attend labelFunc04BD_02F9:
	message("\"To be called Betra. To be one of two shopkeepers. To say the other is Sarpling.\"");
	say();
	UI_remove_answer("provisioner");
	UI_add_answer("Sarpling");
labelFunc04BD_02F9:
	case "Teregus" attend labelFunc04BD_030C:
	message("\"To be a sage. To be very well-educated, like Quaeven. To live here a long time.\"");
	say();
	UI_remove_answer("Teregus");
labelFunc04BD_030C:
	case "Silamo" attend labelFunc04BD_031F:
	message("\"To be the gardener who lives to the east of the mountains.\"");
	say();
	UI_remove_answer("Silamo");
labelFunc04BD_031F:
	case "Sarpling" attend labelFunc04BD_0332:
	message("\"To know him little, and to have never been in his shop, and, therefore, to be unable to tell you what he sells. To know his name means `snake tongue.'\"");
	say();
	UI_remove_answer("Sarpling");
labelFunc04BD_0332:
	case "bye" attend labelFunc04BD_033D:
	goto labelFunc04BD_0340;
labelFunc04BD_033D:
	goto labelFunc04BD_00DA;
labelFunc04BD_0340:
	endconv;
	message("\"To wish you well, human.\"*");
	say();
labelFunc04BD_0345:
	if (!(event == 0x0000)) goto labelFunc04BD_0353;
	Func092F(0xFF43);
labelFunc04BD_0353:
	return;
}


