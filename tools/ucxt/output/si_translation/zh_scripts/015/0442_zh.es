#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0442 object#(0x442) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_object_position(0xFFBE);
	if (!(event == 0x0002)) goto labelFunc0442_01AB;
	if (!UI_get_item_flag(0xFFBE, 0x001C)) goto labelFunc0442_014F;
	UI_show_npc_face0(0xFFBE, 0x0000);
	message("\"Thou hast slain me! My blood spills away... all because of Pomdirgun, that betrayer!\"");
	say();
	message("\"Come nearer, that I may boast of my deeds before I die.\"");
	say();
	UI_add_answer(["deeds", "Pomdirgun", "bye"]);
labelFunc0442_0041:
	converse attend labelFunc0442_014B;
	case "deeds" attend labelFunc0442_005E:
	UI_remove_answer("deeds");
	message("\"I am a Goblin! I have lived amongst the foolish Knights all these many years and no one hath suspected!! Yes! I have supplied my fellow Goblins with all of Monitor's military secrets!\"");
	say();
	UI_add_answer("military secrets");
labelFunc0442_005E:
	case "military secrets" attend labelFunc0442_0071:
	UI_remove_answer("military secrets");
	message("\"That is right! I have relayed patrol plans and other military information to King Pomdirgun. The assault on Fawn Tower was a success thanks to me! Monitor's Knight Champion was ambushed because of mine ingenuity!\"");
	say();
labelFunc0442_0071:
	case "Pomdirgun" attend labelFunc0442_0091:
	UI_remove_answer("Pomdirgun");
	message("\"He is our leader! But he hath double-crossed me! That is why I am telling thee this! He promised ME the Helm of Monitor, but the greedy bastard kept it for himself! After all the loyal years I have served the Goblins, I deserve it! Well, I shall have to extract revenge!\"");
	say();
	UI_add_answer(["loyal years", "revenge"]);
labelFunc0442_0091:
	case "loyal years" attend labelFunc0442_00B1:
	UI_remove_answer("loyal years");
	message("\"That is right! I have been in Monitor longer than anyone else here! I came to the town many, many years ago!\"");
	say();
	UI_add_answer(["many years ago", "cover"]);
labelFunc0442_00B1:
	case "many years ago" attend labelFunc0442_00C4:
	UI_remove_answer("many years ago");
	message("\"It was Pomdirgun's father who procured the magic potion that enabled me to change mine appearance. But now... I am tired of being a Man! I want to be a Goblin again! I have thrown away mine entire life! I want to die...\"");
	say();
labelFunc0442_00C4:
	case "cover" attend labelFunc0442_00D7:
	UI_remove_answer("cover");
	message("\"A Moonshadian mage created a potion that enabled us to make our appearance Man-like. But it is addictive! I cannot live without it...\"");
	say();
labelFunc0442_00D7:
	case "revenge", "bye" attend labelFunc0442_0148:
	message("\"Hmmm... Perhaps thou wouldst like to know the secret location of Pomdirgun's camp? If thou dost promise to slay King Pomdirgun, I shall tell thee!\"");
	say();
	if (!Func0955()) goto labelFunc0442_00FF;
	message("\"There is a Great Dead Tree in the Knights' Forest, north of Knight's Test. Thou wilt know it because it is surrounded by rocks. Hidden nearby is an ancient stairway leading into the bowels of the earth.\"");
	say();
	message("\"This leads to a passageway which will bring thee to the chief's village, hidden in a secret valley. No Man hath ever set foot there...\"");
	say();
	message("\"But be careful! There are many challenges for the unwary, and thou must survive to cleave Pomdirgun's head into two!\"");
	say();
	message("\"The passageway is sealed with an iron door, but thou shalt find the key tied around my neck.\"");
	say();
	goto labelFunc0442_0103;
labelFunc0442_00FF:
	message("\"Curse thee, then! I shall take the secret of the Goblins with me to my grave...\"");
	say();
labelFunc0442_0103:
	message("\"Urrgh...\"");
	say();
	var0001 = Func0992(0x0001, "@He's dead.@", "@He's dead.@", true);
	UI_set_conversation_slot(0x0000);
	UI_clear_item_flag(0xFFBE, 0x001D);
	UI_clear_item_flag(0xFFBE, 0x0004);
	UI_kill_npc(0xFFBE);
	UI_set_item_flag(0xFFB4, 0x0004);
	gflags[0x0046] = true;
	abort;
labelFunc0442_0148:
	goto labelFunc0442_0041;
labelFunc0442_014B:
	endconv;
	goto labelFunc0442_01AB;
labelFunc0442_014F:
	UI_show_npc_face0(0xFFBE, 0x0000);
	message("\"Thou hast found out my secret! Now, thou must die...\"");
	say();
	UI_set_item_flag(0xFFBE, 0x001D);
	UI_set_alignment(0xFFBE, 0x0002);
	Func097F(0xFFBE, "@Die!@", 0x0000);
	UI_set_new_schedules(0xFFBE, 0x0000, 0x0000, [var0000[0x0001], var0000[0x0002]]);
	UI_run_schedule(0xFFBE);
	UI_set_oppressor(0xFE9C, 0xFFBE);
	abort;
labelFunc0442_01AB:
	if (!((event == 0x0007) && (!UI_get_item_flag(0xFFBE, 0x001C)))) goto labelFunc0442_0217;
	UI_set_schedule_type(0xFFBE, 0x000F);
	UI_set_item_flag(0xFFBE, 0x0004);
	var0002 = UI_execute_usecode_array(0xFFBE, [(byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E]);
	UI_set_item_flag(0xFFBE, 0x001C);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000A, (byte)0x55, 0x0442]);
labelFunc0442_0217:
	return;
}


