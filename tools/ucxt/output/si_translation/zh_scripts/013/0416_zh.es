#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0834 0x834 ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func095D 0x95D (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08FF 0x8FF ();

void Func0416 object#(0x416) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = "Mundane";
	if (!gflags[0x00DB]) goto labelFunc0416_0012;
	var0000 = "Mage";
labelFunc0416_0012:
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0416_0042;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0416_0042:
	if (!(event == 0x0001)) goto labelFunc0416_0070;
	UI_item_say(0xFE9C, "@A moment, sir.@");
	0xFFEA->Func07D1();
	Func097F(0xFFEA, "@I am a busy mage...@", 0x0002);
	UI_set_schedule_type(0xFFEA, 0x0003);
labelFunc0416_0070:
	if (!(event == 0x0009)) goto labelFunc0416_0591;
	UI_run_schedule(0xFFEA);
	UI_clear_item_say(0xFFEA);
	UI_show_npc_face0(0xFFEA, 0x0000);
	var0004 = UI_get_item_flag(0xFFEA, 0x001C);
	if (!(UI_get_schedule_type(0xFFEA) == 0x000E)) goto labelFunc0416_00BC;
	message("\"Canst thou not see that I am trying to sleep!\"");
	say();
	Func097F(0xFFEA, "@Return tomorrow!@", 0x0000);
	abort;
labelFunc0416_00BC:
	if (!(var0004 == false)) goto labelFunc0416_00FD;
	if (!gflags[0x00D9]) goto labelFunc0416_00D1;
	message("\"I know thee! Thou art the adventurer for whom the MageLord held the banquet.\"");
	say();
	goto labelFunc0416_00D5;
labelFunc0416_00D1:
	message("\"A pleasure to meet thee, I am certain. But I have no patience for idle tongue wagging.\"");
	say();
labelFunc0416_00D5:
	message("\"Forgive me, but this is an absolute waste of time, when there are other matters which are pressing...\"");
	say();
	UI_set_item_flag(0xFFEA, 0x001C);
	UI_set_schedule_type(0xFFEA, 0x000C);
	Func097F(0xFFEA, "@To work...@", 0x0000);
	abort;
	goto labelFunc0416_013E;
labelFunc0416_00FD:
	if (!(!gflags[0x00E2])) goto labelFunc0416_0118;
	message("\"I am sorry, but I do not have time for this. My studies devour mine entire day.\"");
	say();
	Func097F(0xFFEA, "@Now, where is that book?@", 0x0000);
	abort;
	goto labelFunc0416_013E;
labelFunc0416_0118:
	message("\"It is an honor to receive thee, ");
	message(var0002);
	message(". How may I be of service to thee?\"");
	say();
	if (!(!gflags[0x0239])) goto labelFunc0416_0130;
	UI_add_answer("Dungeon Freedom");
labelFunc0416_0130:
	if (!(!gflags[0x0172])) goto labelFunc0416_013E;
	UI_add_answer("the trial");
labelFunc0416_013E:
	if (!(gflags[0x00E3] && (!gflags[0x0128]))) goto labelFunc0416_0150;
	UI_add_answer("experiment");
labelFunc0416_0150:
	if (!(gflags[0x0128] && ((!gflags[0x00E6]) && (!gflags[0x011D])))) goto labelFunc0416_0167;
	UI_add_answer("Ale is Edrin");
labelFunc0416_0167:
	if (!(gflags[0x0128] && ((!gflags[0x00E6]) && gflags[0x011D]))) goto labelFunc0416_017D;
	UI_add_answer("instructions");
labelFunc0416_017D:
	if (!(gflags[0x00E6] && (!gflags[0x00E5]))) goto labelFunc0416_018F;
	UI_add_answer("experiment");
labelFunc0416_018F:
	if (!(gflags[0x00FE] && (!gflags[0x00CE]))) goto labelFunc0416_01A1;
	UI_add_answer("Daemon Sword");
labelFunc0416_01A1:
	if (!gflags[0x00E2]) goto labelFunc0416_01AE;
	UI_add_answer("stone altar");
labelFunc0416_01AE:
	UI_add_answer(["name", "spells", "bye"]);
	if (!(gflags[0x00E3] && (!gflags[0x00E6]))) goto labelFunc0416_01D0;
	UI_remove_answer("spells");
labelFunc0416_01D0:
	converse attend labelFunc0416_0590;
	case "the trial" attend labelFunc0416_01F6:
	UI_remove_answer("the trial");
	message("\"Please do not hold me responsible for that travesty of justice! In Moonshade, one doth not contradict the MageLord!\"");
	say();
	message("\"Besides, thou wast guilty of the crime, meaning that thou wast in the forbidden bedchamber...\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0416_01F6;
	message("\"Oh, how I envy thee! But I am old now, and have my researches to content me.\"");
	say();
labelFunc0416_01F6:
	case "Dungeon Freedom" attend labelFunc0416_0213:
	UI_remove_answer("Dungeon Freedom");
	message("\"Thou must indeed be a formidable Mage, ");
	message(var0002);
	message(", since thou wast able to survive Filbercio's dungeons.\"");
	say();
	message("\"I apologize for being brusque with thee before. I had no true concept of thine abilities.\"");
	say();
labelFunc0416_0213:
	case "name" attend labelFunc0416_0226:
	message("\"My name is Gustacio, if thou must inquire!\"");
	say();
	UI_remove_answer("name");
labelFunc0416_0226:
	case "Daemon Sword" attend labelFunc0416_028C:
	UI_remove_answer("Daemon Sword");
	message("\"Thy daemon sword needs to have its sorcerous energies realigned. I could repair it if I had my flux analyzer.\"");
	say();
	if (!gflags[0x023C]) goto labelFunc0416_0288;
	var0005 = Func0992(0x0001, "@We found it in Skullcrusher!@", "@I found it in Skullcrusher!@", false);
	var0006 = UI_count_objects(0xFE9B, 0x01C8, 0xFE99, 0xFE99);
	if (!(var0006 > 0x0000)) goto labelFunc0416_027A;
	UI_set_conversation_slot(0x0000);
	message("\"Excellent! Now we can repair thy sword.\"~ \"Place it here and activate it. When the machine is working, use it on the sword.\"");
	say();
	goto labelFunc0416_0285;
labelFunc0416_027A:
	UI_set_conversation_slot(0x0000);
	message("\"Thou didst? But then where is it?\"~ \"Thou wouldst have me think that thou didst find it!\"");
	say();
labelFunc0416_0285:
	goto labelFunc0416_028C;
labelFunc0416_0288:
	message("\"Unfortunately, it was stolen from me years ago.\"");
	say();
labelFunc0416_028C:
	case "spells" attend labelFunc0416_0308:
	UI_remove_answer("spells");
	if (!gflags[0x00E6]) goto labelFunc0416_02AB;
	message("\"I thank thee for thine excellent help. Now that my work hath been completed, I have time to teach thee magic as I promised.\"");
	say();
	Func0834();
	goto labelFunc0416_0308;
labelFunc0416_02AB:
	if (!gflags[0x011C]) goto labelFunc0416_02BB;
	message("\"Thou didst agree to help with mine experiments. Why hast thou not taken the energy globe to the tower on the plains?\"");
	say();
	goto labelFunc0416_02C9;
	goto labelFunc0416_0308;
labelFunc0416_02BB:
	message("\"If thou wilt aid me with mine experiments involving the teleport storms, I shall reward thee with magic. Dost thou agree?\"");
	say();
	if (!Func0955()) goto labelFunc0416_02F7;
	message("\"Excellent! First I shall need to tell thee what I have learned of these storms so far. They appear to have three powers: teleportation, transposition and transmutation. Also, the lightning of the teleport storms appears to have several different colors.\"");
	say();
labelFunc0416_02C9:
	UI_push_answers();
	var0007 = true;
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	UI_add_answer(["teleportation", "transposition", "transmutation", "lightning colors"]);
	goto labelFunc0416_0308;
labelFunc0416_02F7:
	message("\"Then I am sorry, I do not have any time to spare for thee.\"");
	say();
	Func097F(0xFFEA, "@Farewell...@", 0x0000);
	abort;
labelFunc0416_0308:
	case "teleportation" attend labelFunc0416_0338:
	UI_remove_answer("teleportation");
	gflags[0x0007] = true;
	message("\"This is the mysterious power to move things from one place to another without passing through the space between.\"");
	say();
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_0338;
	UI_add_answer("further details");
labelFunc0416_0338:
	case "transposition" attend labelFunc0416_0368:
	UI_remove_answer("transposition");
	gflags[0x0008] = true;
	message("\"This is a more elaborate form of teleportation, wherein two objects exchange places -- neither passing through the physical space between them. Fascinating!\"");
	say();
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_0368;
	UI_add_answer("further details");
labelFunc0416_0368:
	case "transmutation" attend labelFunc0416_0398:
	UI_remove_answer("transmutation");
	gflags[0x0009] = true;
	message("\"I am not quite certain that this power actually exists. I have theorized that it would involve taking one object and literally changing it into another type of object. The difficulty in proving that something like this exists is that this power must be directly witnessed. Otherwise how is one to know that an item is not what it always was?\"");
	say();
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_0398;
	UI_add_answer("further details");
labelFunc0416_0398:
	case "lightning colors" attend labelFunc0416_03DA:
	UI_remove_answer("lightning colors");
	gflags[0x000A] = true;
	message("\"I have a theory that the colors of the lightning somehow directly correspond to the supernatural force behind it.\"");
	say();
	if (!(!gflags[0x00E3])) goto labelFunc0416_03BD;
	message("\"But I have developed an experiment to test this theory, and thou canst help me with it.\"");
	say();
	goto labelFunc0416_03C1;
labelFunc0416_03BD:
	message("\"And the experiment that thou didst carry out for me seems to confirm what I believed to be true.\"");
	say();
labelFunc0416_03C1:
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_03DA;
	UI_add_answer("further details");
labelFunc0416_03DA:
	case "further details" attend labelFunc0416_045A:
	UI_remove_answer("further details");
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	if (!(!gflags[0x011C])) goto labelFunc0416_0421;
	message("\"Since thou hast agreed to help with mine experiments, take this energy globe to my special tower. Thou wilt find this tower in the valley to the north of Moonshade in the middle of the plains.\"");
	say();
	var0003 = Func099B(0xFE9C, 0x0001, 0x01C2, 0x0000, 0x0002, 0x0000, true);
	gflags[0x011C] = true;
labelFunc0416_0421:
	message("\"Place the globe on the platform, on top of the tower structure.\"");
	say();
	message("\"Next, thou shouldst engage the winch. This will seal thee within the tower, and activate the levers. It will also summon a magical storm.\"");
	say();
	var0005 = Func0992(0x0001, "@Thou dost want us to summon a storm? This is madness!@", 0x0000, false);
	if (!(var0005 != 0xFE9C)) goto labelFunc0416_044E;
	UI_set_conversation_slot(0x0000);
	message("\"I assure thee, thou art in no danger! I would do this myself, but at mine age, climbing stairs is very difficult...\"");
	say();
labelFunc0416_044E:
	message("\"Pull the levers one at a time. This will draw down lightning from the storm, and cause it to strike the objects which I have placed on the tower.\"");
	say();
	message("\"Observe the effects, and most importantly -- observe which color lightning hath which effect. Then return to me with thy report.\"");
	say();
	UI_pop_answers();
labelFunc0416_045A:
	case "experiment" attend labelFunc0416_04C2:
	UI_remove_answer("experiment");
	if (!gflags[0x0128]) goto labelFunc0416_04BA;
	message("\"Thou hast completed the experiment. As a token of appreciation, here is the Mirror of Truth.\"");
	say();
	gflags[0x00E5] = true;
	Func095D(0x03E8);
	var0003 = Func099B(0xFE9C, 0x0001, 0x0289, 0x0000, 0x000B, 0x0000, true);
	gflags[0x02D9] = true;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0064);
	goto labelFunc0416_04C2;
labelFunc0416_04BA:
	message("\"But of course! Thou must needs go to Fedabiblio for the answers...\"");
	say();
	gflags[0x00E4] = true;
labelFunc0416_04C2:
	case "instructions" attend labelFunc0416_04DB:
	UI_remove_answer("instructions");
	if (!gflags[0x011D]) goto labelFunc0416_04DB;
	message("\"Why hast thou not taken the energy globe which I did give thee to the tower on the plains?\"");
	say();
labelFunc0416_04DB:
	case "Ale is Edrin" attend labelFunc0416_053E:
	message("\"Thou must needs take the bird Ale to the tower in the wilderness, and place him where the lightning can strike him.\"");
	say();
	if (!(!gflags[0x014A])) goto labelFunc0416_050F;
	message("\"I shall give thee this cage to hold the bird within.\"");
	say();
	gflags[0x014A] = true;
	var0003 = Func099B(0xFE9C, 0x0001, 0x0346, 0x0000, 0x0000, 0x0000, true);
labelFunc0416_050F:
	if (!(!gflags[0x011D])) goto labelFunc0416_0537;
	message("\"Return to the tower with this new energy globe!\"");
	say();
	var0003 = Func099B(0xFE9C, 0x0001, 0x01C2, 0x0000, 0x0001, 0x0000, true);
	gflags[0x011D] = true;
labelFunc0416_0537:
	UI_remove_answer("Ale is Edrin");
labelFunc0416_053E:
	case "stone altar" attend labelFunc0416_0563:
	UI_remove_answer("stone altar");
	message("\"Such a curious thing happened during mine experiments, ");
	message(var0002);
	message(".\"");
	say();
	message("\"While Mortegro and I were working to discover the secret of the teleportation storms, Mortegro was hit by a lightning strike.\"");
	say();
	message("\"In his place, within my cellar, is this odd stone altar. By its look it is something from a Serpent temple, but I have no idea how to send it back where it came from... yet.\"");
	say();
	message("\"If I can discern how to reverse the teleportation, perhaps I can rescue poor Mortegro. I hope he was not killed in the exchange...\"");
	say();
labelFunc0416_0563:
	case "bye" attend labelFunc0416_058D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks!@", 0x0000);
	Func097F(0xFFEA, "@Back to my studies...@", 0x0002);
	Func08FF();
	goto labelFunc0416_0590;
labelFunc0416_058D:
	goto labelFunc0416_01D0;
labelFunc0416_0590:
	endconv;
labelFunc0416_0591:
	return;
}


