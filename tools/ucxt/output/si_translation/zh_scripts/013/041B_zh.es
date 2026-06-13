#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func041B object#(0x41B) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc041B_0036;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc041B_0036:
	if (!(event == 0x0001)) goto labelFunc041B_0058;
	UI_item_say(0xFE9C, "@Could we speak?@");
	0xFFE5->Func07D1();
	UI_set_schedule_type(0xFFE5, 0x0003);
labelFunc041B_0058:
	if (!(event == 0x0000)) goto labelFunc041B_020B;
	var0004 = UI_get_array_size(UI_find_nearby(0xFE9C, 0x020B, 0x0023, 0x0000));
	if (!(var0004 < 0x000A)) goto labelFunc041B_00F3;
	var0005 = 0x0000;
	var0006 = UI_get_random(0x0002);
labelFunc041B_0091:
	if (!(var0005 < var0006)) goto labelFunc041B_00F3;
	var0005 = (var0005 + 0x0001);
	var0007 = UI_get_object_position(0xFFE5);
	var0008 = UI_create_new_object2(0x020B, [(var0007[0x0001] - 0x0001), (var0007[0x0002] - 0x0001), var0007[0x0003]]);
	if (!var0008) goto labelFunc041B_00F0;
	UI_set_item_flag(var0008, 0x0012);
	UI_set_schedule_type(var0008, 0x0009);
labelFunc041B_00F0:
	goto labelFunc041B_0091;
labelFunc041B_00F3:
	var0009 = UI_get_random(0x0006);
	if (!(var0004 > 0x0000)) goto labelFunc041B_0193;
	if (!(var0009 == 0x0001)) goto labelFunc041B_011B;
	UI_item_say(0xFFE5, "@Nice rats.@");
labelFunc041B_011B:
	if (!(var0009 == 0x0002)) goto labelFunc041B_012F;
	UI_item_say(0xFFE5, "@Come to mother!@");
labelFunc041B_012F:
	if (!(var0009 == 0x0003)) goto labelFunc041B_0143;
	UI_item_say(0xFFE5, "@Cheese!@");
labelFunc041B_0143:
	if (!(var0009 == 0x0004)) goto labelFunc041B_0157;
	UI_item_say(0xFFE5, "@Here, rats!@");
labelFunc041B_0157:
	if (!(var0009 == 0x0005)) goto labelFunc041B_016B;
	UI_item_say(0xFFE5, "@Now, do not bite me!@");
labelFunc041B_016B:
	if (!(var0009 == 0x0006)) goto labelFunc041B_0190;
	var000A = ["@I am very hungry...@", "@Hmmm...@", "@Do I smell baked fish?@", "@Petra is a marvelous chef...@"];
	Func094F(0xFFE5, var000A);
labelFunc041B_0190:
	goto labelFunc041B_020B;
labelFunc041B_0193:
	if (!(var0009 == 0x0001)) goto labelFunc041B_01A7;
	UI_item_say(0xFFE5, "@Where are they?@");
labelFunc041B_01A7:
	if (!(var0009 == 0x0002)) goto labelFunc041B_01BB;
	UI_item_say(0xFFE5, "@I've lost my rats.@");
labelFunc041B_01BB:
	if (!(var0009 == 0x0003)) goto labelFunc041B_01CF;
	UI_item_say(0xFFE5, "@Do not bother me.@");
labelFunc041B_01CF:
	if (!(var0009 == 0x0004)) goto labelFunc041B_01E3;
	UI_item_say(0xFFE5, "@Stay away!@");
labelFunc041B_01E3:
	if (!(var0009 == 0x0005)) goto labelFunc041B_01F7;
	UI_item_say(0xFFE5, "@Death to cats!@");
labelFunc041B_01F7:
	if (!(var0009 == 0x0006)) goto labelFunc041B_020B;
	UI_item_say(0xFFE5, "@Where am I?@");
labelFunc041B_020B:
	if (!(event == 0x0009)) goto labelFunc041B_06C5;
	UI_run_schedule(0xFFE5);
	UI_clear_item_say(0xFFE5);
	UI_show_npc_face0(0xFFE5, 0x0000);
	var000B = UI_get_item_flag(0xFFE5, 0x001C);
	if (!(var000B == false)) goto labelFunc041B_0251;
	UI_set_item_flag(0xFFE5, 0x001C);
	message("\"So what'rt thou looking at, eh?\"");
	say();
	goto labelFunc041B_0285;
labelFunc041B_0251:
	if (!gflags[0x00EF]) goto labelFunc041B_0281;
	if (!Func097D(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x000D)) goto labelFunc041B_027A;
	message("\"I smell something... thou hast some fish! Thou hast brought it for me! Oh, I do so love a good fish.\"");
	say();
	UI_add_answer("give fish");
	goto labelFunc041B_027E;
labelFunc041B_027A:
	message("\"Oh, it is my friend! Hast thou brought me something? No, I suppose not...\"");
	say();
labelFunc041B_027E:
	goto labelFunc041B_0285;
labelFunc041B_0281:
	message("\"Why dost thou not leave me alone?\"");
	say();
labelFunc041B_0285:
	UI_add_answer("name");
	if (!(gflags[0x00EE] && (!gflags[0x00EF]))) goto labelFunc041B_029E;
	UI_add_answer("Columna");
labelFunc041B_029E:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc041B_02B0;
	UI_add_answer("slippers");
labelFunc041B_02B0:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041B_02C9;
	UI_add_answer("kidnap");
labelFunc041B_02C9:
	UI_add_answer(["bye"]);
labelFunc041B_02D3:
	converse attend labelFunc041B_06C4;
	case "kidnap" attend labelFunc041B_02F6:
	UI_remove_answer("kidnap");
	message("\"Well, do not stare at me like that. I be innocent. They've never convicted me of any crimes...\"");
	say();
	Func097F(0xFFE5, "@Leave me alone!@", 0x0000);
	abort;
labelFunc041B_02F6:
	case "name" attend labelFunc041B_0316:
	UI_remove_answer("name");
	message("\"What's it to ye? Some call me the Rat Woman, but I'll have ye know that my rightful name is Mosh.\"");
	say();
	UI_add_answer(["Rat Woman", "Mosh"]);
labelFunc041B_0316:
	case "Mosh" attend labelFunc041B_0341:
	UI_remove_answer("Mosh");
	message("\"Aye, Mosh...\"");
	say();
	if (!gflags[0x00EF]) goto labelFunc041B_033D;
	message("\"..and I am linked by fate to Columna, the Green Enchantress! She is my very own sister.\"");
	say();
	UI_add_answer("sister");
	goto labelFunc041B_0341;
labelFunc041B_033D:
	message("\"Would that thou wert to believe me, I could tell thee a story! 'Tis done... though not forgotten. I will not talk of it now.\"");
	say();
labelFunc041B_0341:
	case "sister" attend labelFunc041B_0358:
	UI_remove_answer("sister");
	message("\"I tell thee that I have a twin. She is Columna! Yet wert thou to see us together, any similarity would be gone.\"");
	say();
	message("\"It is she who possesses the youth and beauty I held dear not long ago. But ask whether love passes between us and I will tell thee nay.\"");
	say();
labelFunc041B_0358:
	case "Rat Woman" attend labelFunc041B_0385:
	UI_remove_answer("Rat Woman");
	message("\"Snigger not at me! I have company enough -- more guests in mine house than thou couldst have in thine.\"");
	say();
	message("\"I was a powerful enchantress, in my prime. Before I was cheated of my powers.\"");
	say();
	UI_add_answer(["company", "house", "enchantress", "magic", "cheated"]);
labelFunc041B_0385:
	case "house" attend labelFunc041B_03C4:
	UI_remove_answer("house");
	message("\"'Tis not a bad place to live.\"");
	say();
	var000C = Func0992(0x0001, "@The sewers not bad? Art thou daft?@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc041B_03C0;
	UI_set_conversation_slot(0x0000);
	message("\"Scowl not at Mosh. Thou knowest nothing of what thou sayest. Each one of us makes of life what we can, whether by fate or the treachery of others. Dost thou see me judging ye?\"");
	say();
	goto labelFunc041B_03C4;
labelFunc041B_03C0:
	message("\"Each one of us makes of life what we can, whether by fate or the treachery of others. Dost thou see me judging ye?\"");
	say();
labelFunc041B_03C4:
	case "company" attend labelFunc041B_03FF:
	UI_remove_answer("company");
	message("\"The rats are my friends. Dost thou not like my companions?\"");
	say();
	if (!Func0955()) goto labelFunc041B_03E4;
	message("\"Good! Then with time, perhaps, we could learn to like thee.\"");
	say();
	goto labelFunc041B_03FF;
labelFunc041B_03E4:
	message("\"Then I do not like thee!\"");
	say();
	Func097F(0xFFE5, "@Away from me!@", 0x0000);
	UI_set_schedule_type(0xFFE5, 0x0014);
	abort;
labelFunc041B_03FF:
	case "enchantress" attend labelFunc041B_043B:
	UI_remove_answer("enchantress");
	message("\"I was once a beautiful young woman, and not so many years ago as thou mightest believe! There was a young mage who wanted mine hand -- \"");
	say();
	message("\"Trulacci, whose ill-fated son now languishes in the depths of the Mountains of Freedom.\"");
	say();
	if (!gflags[0x00EF]) goto labelFunc041B_0423;
	message("\"It was Columna who stole him from my love, by using her magics on him. Yet she never loved him... he was simply a toy to her.\"");
	say();
	goto labelFunc041B_0431;
labelFunc041B_0423:
	message("\"But another stole Trulacci's heart from me, and I shall never forgive her for that!\"");
	say();
	UI_add_answer(["another"]);
labelFunc041B_0431:
	UI_add_answer(["Trulacci"]);
labelFunc041B_043B:
	case "Trulacci" attend labelFunc041B_0473:
	UI_remove_answer("Trulacci");
	message("\"Where hath he gone? Bah, I know not. Nor, for that matter, do I care!\"");
	say();
	var000C = Func0992(0xFFFD, "@Ah, but I can see that thou dost still care, madam.@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc041B_0473;
	UI_set_conversation_slot(0x0000);
	message("\"Rubbish! 'Tis long gone, and I am an old woman now.\"");
	say();
labelFunc041B_0473:
	case "magic" attend labelFunc041B_0535:
	UI_remove_answer("magic");
	if (!gflags[0x00EF]) goto labelFunc041B_048F;
	message("\"Let me be honest with thee. My powers have dwindled to nothingness. I can teach thee no spell worth knowing!\"");
	say();
	goto labelFunc041B_0535;
labelFunc041B_048F:
	message("\"My spells are not for sale, not to the likes of such as thyself. But assume not that all my powers have left me, for some still remain.\"");
	say();
	message("\"I have no need for others, when I can create mine own friends.\"");
	say();
	Func097F(0xFFE5, "@See for thyself!@", 0x0000);
	var000D = UI_get_object_position(0xFFE5);
	var000D[0x0001] = (var000D[0x0001] + 0x0002);
	var000D[0x0002] = (var000D[0x0002] - 0x0002);
	var0008 = UI_create_new_object2(0x020B, var000D);
	if (!var0008) goto labelFunc041B_0515;
	UI_obj_sprite_effect(var0008, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(var0008, 0x0009);
	Func097F(var0008, "@Eek!@", 0x0005);
	goto labelFunc041B_0534;
labelFunc041B_0515:
	UI_sprite_effect(0x0015, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc041B_0534:
	abort;
labelFunc041B_0535:
	case "cheated" attend labelFunc041B_0561:
	UI_remove_answer("cheated");
	if (!gflags[0x00EF]) goto labelFunc041B_055D;
	message("\"Cheated, and by mine own sister, wouldst thou believe it!\"");
	say();
	message("\"Yet it is as nothing compared to the greater swindles which she practices. She doth conspire against Nature itself, didst thou know?\"");
	say();
	message("\"She doth possess a Magic Comb, stolen from the City of Beauty. 'Tis an enchanted object which she used to make herself appear young and beautiful.\"");
	say();
	message("\"Without it, she would be exactly like me! I know not where she keeps it. But I am certain it is in a well hidden spot.\"");
	say();
	goto labelFunc041B_0561;
labelFunc041B_055D:
	message("\"I will not speak of that now, but suffice it to say that she who looks like me deep inside hath taken from me all that should be mine!\"");
	say();
labelFunc041B_0561:
	case "another" attend labelFunc041B_0583:
	UI_remove_answer("another");
	message("\"Thou shouldst speak to she who hath done me wrong: The Sorceress Columna, whom they sometimes call the Green Sorceress.\"");
	say();
	message("\"Listen to what she says!\"");
	say();
	UI_add_answer("the Green Sorceress");
	gflags[0x00DF] = true;
labelFunc041B_0583:
	case "the Green Sorceress" attend labelFunc041B_0596:
	UI_remove_answer("the Green Sorceress");
	message("\"The rumors say that her name stems from her attire, but I know the truth. 'Tis the very envy she doth have for me that hath spawned her title.\"");
	say();
labelFunc041B_0596:
	case "Columna" attend labelFunc041B_0610:
	UI_remove_answer("Columna");
	message("\"So thou hast spoken to that hag! Tell me now -- dost thou believe me, or she?\"");
	say();
	var000E = Func0956(["believe Columna", "believe Mosh"]);
	if (!(var000E == "believe Columna")) goto labelFunc041B_05DD;
	message("\"Thou art worthless.\"");
	say();
	Func097F(0xFFE5, "@Come, rats!@", 0x0000);
	UI_set_schedule_type(0xFFE5, 0x0014);
	abort;
labelFunc041B_05DD:
	message("\"Thou dost truly believe me now... ah, I see that thou dost. Thou art truly one I can say is my friend.\"");
	say();
	gflags[0x00EF] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x000D)) goto labelFunc041B_0608;
	message("\"I smell something... thou hast some fish! Oh, I do so love a good fish.\"");
	say();
	UI_add_answer("give fish");
	goto labelFunc041B_0610;
labelFunc041B_0608:
	message("\"If thou art ever in need, come to me. I shall give thee anything I possess. Thou dost see, I have a good heart.\"");
	say();
	message("\"And if thou dost ever have something that I could use, please bring it. Nothing large. Perhaps a morsel of food.\"");
	say();
labelFunc041B_0610:
	case "give fish" attend labelFunc041B_0657:
	UI_remove_answer("give fish");
	var0003 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x000D, 0x0012);
	if (!gflags[0x00E1]) goto labelFunc041B_0642;
	message("\"I thank ye for thy fish, as I do love it!\"");
	say();
	goto labelFunc041B_0657;
labelFunc041B_0642:
	message("\"I thank ye, ");
	message(var0000);
	message(". Thou art indeed a kind one. I knew the moment I saw ye I could call ye friend.\"");
	say();
	message("\"And know that my little ones call ye friend as well, as do their larger cousins.\"");
	say();
	UI_add_answer("larger cousins");
labelFunc041B_0657:
	case "larger cousins" attend labelFunc041B_068F:
	UI_remove_answer("larger cousins");
	message("\"Aye, my friend. Beneath the very ground upon which thou dost walk rest many twisting tunnels. They are known as the catacombs, and the lovelies who call them home are the ratmen.\"");
	say();
	message("\"But how will they recognize ye as my friend? I know! I will give ye mine harp. Shouldst thou ever find thyself in the complex below, strum it for them.\"");
	say();
	message("\"The sweet tunes from mine instrument will pacify them, for in younger days I did play it for them as they laid themselves down to sleep. Here, please take this for thy kindness.\"");
	say();
	var0003 = Func099B(0xFE9C, 0x0001, 0x01FA, 0xFE99, 0xFE99, 0x0000, true);
	gflags[0x00E1] = true;
labelFunc041B_068F:
	case "bye" attend labelFunc041B_06C1:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thanks for thine help.@", 0x0000);
	Func097F(0xFFE5, (("@Fare thee well, " + var0000) + ".@"), 0x0005);
	Func08FF();
	goto labelFunc041B_06C4;
labelFunc041B_06C1:
	goto labelFunc041B_02D3;
labelFunc041B_06C4:
	endconv;
labelFunc041B_06C5:
	return;
}


