#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func08ED 0x8ED (var var0000);
extern void Func07D2 object#(0x7D2) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func01C3 shape#(0x1C3) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = "he";
	if (!UI_is_pc_female()) goto labelFunc01C3_001F;
	var0002 = "she";
labelFunc01C3_001F:
	if (!(event == 0x0002)) goto labelFunc01C3_0FF1;
	if (!((UI_get_npc_id(0xFFBB) == 0x000C) && (item == UI_get_npc_object(0xFFBC)))) goto labelFunc01C3_007C;
	Func097F(0xFFBC, "@Keep him away from me!@", 0x0000);
	UI_set_item_flag(0xFFBC, 0x001C);
	UI_si_path_run_usecode(0xFFBC, [0x0413, 0x0A8B, 0x0000], 0x000D, item, 0x01C3, false);
	UI_set_path_failure(0x01C3, item, 0x000E);
	abort;
labelFunc01C3_007C:
	if (!((UI_get_npc_id(0xFFBB) == 0x0001) && (item == UI_get_npc_object(0xFFBC)))) goto labelFunc01C3_00BB;
	UI_si_path_run_usecode(0xFFBC, [0x0415, 0x0A7D, 0x0000], 0x000D, item, 0x01C3, false);
	UI_set_path_failure(0x01C3, item, 0x000E);
	abort;
labelFunc01C3_00BB:
	if (!(UI_get_npc_id(0xFFBB) == 0x000E)) goto labelFunc01C3_01A7;
	UI_set_npc_id(0xFFBB, 0x000F);
	UI_set_alignment(0xFE9C, 0x0001);
	Func097F(0xFFBB, "@Stop this!@", 0x0000);
	UI_set_item_flag(0xFFBB, 0x001C);
	UI_set_item_flag(0xFFB6, 0x0004);
	UI_set_schedule_type(0xFFB6, 0x000F);
	UI_set_alignment(0xFFB6, 0x0000);
	UI_set_item_flag(0xFFB9, 0x0004);
	UI_set_schedule_type(0xFFB9, 0x000F);
	UI_set_alignment(0xFFB9, 0x0000);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x55, 0x01C3], 0x000A);
	UI_play_music(0x001D, Func09A0(0x0005, 0x0001));
	var0004 = UI_get_npc_prop(0xFFB6, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB6, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	var0004 = UI_get_npc_prop(0xFFB9, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB9, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	abort;
labelFunc01C3_01A7:
	if (!(UI_get_npc_id(0xFFBB) == 0x000D)) goto labelFunc01C3_0299;
	UI_set_npc_id(0xFFBB, 0x000E);
	UI_set_alignment(0xFE9C, 0x0000);
	UI_set_attack_mode(0xFFB9, 0x0000);
	UI_set_attack_mode(0xFFB6, 0x0000);
	UI_set_alignment(0xFFB9, 0x0002);
	UI_set_schedule_type(0xFFB9, 0x0000);
	UI_set_opponent(0xFFB9, 0xFFB6);
	UI_set_oppressor(0xFFB9, 0xFFB6);
	UI_set_alignment(0xFFB6, 0x0001);
	UI_set_schedule_type(0xFFB6, 0x0000);
	UI_set_opponent(0xFFB6, 0xFFB9);
	UI_set_oppressor(0xFFB6, 0xFFB9);
	Func097F(0xFF6A, "@Strike for his eyes!@", 0x000F);
	UI_set_item_flag(0xFF6A, 0x001C);
	Func097F(0xFFB3, "@Tell them to stop.@", 0x0019);
	UI_set_item_flag(0xFFB3, 0x001C);
	Func097F(0xFFC1, "@Strike, Luther!@", 0x000A);
	UI_set_item_flag(0xFFC1, 0x001C);
	Func097F(0xFE9C, "@Hey, careful!@", 0x0005);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x6F, (byte)0x55, 0x01C3], 0x0023);
	abort;
labelFunc01C3_0299:
	if (!(UI_get_npc_id(0xFFBB) == 0x000C)) goto labelFunc01C3_02E4;
	UI_set_npc_id(0xFFBB, 0x000D);
	UI_si_path_run_usecode(0xFFB6, [0x041B, 0x0A84, 0x0000], 0x000D, UI_get_npc_object(0xFFB6), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB6), 0x000E);
	abort;
labelFunc01C3_02E4:
	if (!(UI_get_npc_id(0xFFBB) == 0x000B)) goto labelFunc01C3_039A;
	UI_set_npc_id(0xFFBB, 0x000C);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBC, 0x0000);
	message("\"I am weary of thine insults, Luther! I am no more of a traitor than thou art!\"");
	say();
	UI_end_conversation();
	UI_set_schedule_type(0xFFB6, 0x0000);
	UI_si_path_run_usecode(0xFFB9, [0x0425, 0x0A82, 0x0000], 0x000D, UI_get_npc_object(0xFFB9), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB9), 0x000E);
	var0003 = UI_delayed_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x55, 0x01C3], 0x000A);
	Func097F(0xFFB9, "@I shall make him talk!@", 0x0002);
	gflags[0x004E] = true;
	Func097F(0xFFB3, "@This is unseemly...@", 0x0000);
	Func097F(0xFFB6, "@Cease!@", 0x0002);
	Func097F(0xFFBC, "@Leave me alone!@", 0x0000);
	abort;
labelFunc01C3_039A:
	if (!(UI_get_npc_id(0xFFBB) == 0x000A)) goto labelFunc01C3_0479;
	UI_set_npc_id(0xFFBB, 0x000B);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("\"Listen, Knights -- it doth not take a wizard to untangle this skein. Who among us acts strangely, doth do things in secret, and avoids his knightly duties?\"");
	say();
	UI_set_item_flag(0xFFB9, 0x001C);
	UI_end_conversation();
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x27, 0x0003, (byte)0x66, (byte)0x67, (byte)0x52, "@'Tis him!@", (byte)0x27, 0x0007, (byte)0x52, "@Krayg!@"]);
	var0003 = UI_delayed_execute_usecode_array(0xFFB3, [(byte)0x23, (byte)0x6C, (byte)0x6B], 0x0005);
	var0003 = UI_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x52, "@Curse thee, Luther!@", (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C3]);
	UI_si_path_run_usecode(0xFFBA, [0x0439, 0x0A77, 0x0000], 0x000D, UI_get_npc_object(0xFFBA), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFBA), 0x000E);
	abort;
labelFunc01C3_0479:
	if (!(UI_get_npc_id(0xFFBB) == 0x0009)) goto labelFunc01C3_04DB;
	UI_set_npc_id(0xFFBB, 0x000A);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB3, 0x0000);
	message("\"I think this talk of a traitor in Monitor is all rather speculative. Surely, no one suspects anyone at this table of being a Goblin spy.\"");
	say();
	UI_end_conversation();
	Func097F(0xFFB6, "@Sit down, Luther!@", 0x0006);
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x52, "@I do!@", (byte)0x27, 0x0004, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0005, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_04DB:
	if (!(UI_get_npc_id(0xFFBB) == 0x0008)) goto labelFunc01C3_05BE;
	UI_set_npc_id(0xFFBB, 0x0009);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB1, 0x0000);
	message("\"Forgive me, lord, but I, too, have a serious matter to put before the leaders of Monitor.\"");
	say();
	UI_set_item_flag(0xFFB1, 0x001C);
	UI_show_npc_face1(0xFFB6, 0x0000);
	message("\"Dost thou not need to rest thyself, Templar? Thou hast had no time to heal from thy wounds.\"");
	say();
	UI_remove_npc_face1();
	UI_set_item_flag(0xFFB6, 0x001C);
	UI_set_conversation_slot(0x0000);
	message("\"I am right enough, Shazzana. And I cannot rest until I have aired my concerns.\"");
	say();
	UI_show_npc_face1(0xFFBB, 0x0000);
	message("\"Speak thy mind, then, warrior.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"As thou knowest, I am the sole survivor of the patrol which the Goblins ambushed -- when Astrid was taken.\"");
	say();
	message("\"The Goblins were ready for us, milord! It could not have been by accident.\"");
	say();
	message("\"Lord Marsten, there is a traitor in our midst.\"");
	say();
	UI_end_conversation();
	Func097F(0xFF6A, "@Templar is right!@", 0x0008);
	Func097F(0xFFB9, "@Damn spy!@", 0x0000);
	Func097F(0xFFBA, "@What shall we do?@", 0x0005);
	var0003 = UI_execute_usecode_array(0xFFB1, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var0003 = UI_execute_usecode_array(0xFFB3, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x6C, (byte)0x61, (byte)0x52, "@Now, now...@", (byte)0x27, 0x0006, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_05BE:
	if (!(UI_get_npc_id(0xFFBB) == 0x0007)) goto labelFunc01C3_07FF;
	UI_set_npc_id(0xFFBB, 0x0008);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB0, 0x0000);
	message("\"What didst thou think of the Knight's Test? Didst thou have any harrowing experiences?\"");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	message("\"Oh, it isn't that much of a challenge. After all, thou didst survive it, Flicken!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Never mind that lout. What part of the dungeon was the most difficult, ");
	message(var0001);
	message("?\"");
	say();
	var0005 = 0x0000;
	UI_add_answer(["the gremlins", "the explosions", "the Cyclops", "the invisible man", "change subject"]);
labelFunc01C3_0627:
	converse attend labelFunc01C3_073A;
	case "the gremlins" attend labelFunc01C3_0659:
	UI_remove_answer("the gremlins");
	message("\"Gremlins? Thou art merely trying to impress us, ");
	message(var0001);
	message(". There aren't any gremlins in the Knight's Test!\"");
	say();
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_0659;
	goto labelFunc01C3_073B;
labelFunc01C3_0659:
	case "the explosions" attend labelFunc01C3_069B:
	UI_remove_answer("the explosions");
	message("\"But those are so easy to avoid...\"");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("\"Perhaps thou didst not walk fast enough. If thou dost lag, the explosions will catch thee.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_069B;
	goto labelFunc01C3_073B;
labelFunc01C3_069B:
	case "the Cyclops" attend labelFunc01C3_06E3:
	UI_remove_answer("the Cyclops");
	message("\"Didst thou hear what ");
	message(var0002);
	message(" didst say? There are magical beasts in the Knight's Test!\"");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("\"We must speak with Shmed about this. Our dungeon is strictly a test of fighting ability -- no magic allowed!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_06E3;
	goto labelFunc01C3_073B;
labelFunc01C3_06E3:
	case "the invisible man" attend labelFunc01C3_0725:
	UI_remove_answer("the invisible man");
	message("\"Oh, surely thou art mistaken!\"");
	say();
	UI_show_npc_face1(0xFFB1, 0x0000);
	message("\"Perhaps in the darkness, thou didst become disoriented and imagine such an enemy.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_0725;
	goto labelFunc01C3_073B;
labelFunc01C3_0725:
	case "change subject" attend labelFunc01C3_0737:
	UI_remove_answer("change subject");
	goto labelFunc01C3_073B;
labelFunc01C3_0737:
	goto labelFunc01C3_0627;
labelFunc01C3_073A:
	endconv;
labelFunc01C3_073B:
	UI_show_npc_face1(0xFFBB, 0x0000);
	if (!(var0005 == 0x0000)) goto labelFunc01C3_0762;
	message("\"It is good to see a Knight who is not boastful. Luther, thou couldst learn from this one.\"");
	say();
	Func097F(0xFFB9, "@I doubt it...@", 0x0000);
	goto labelFunc01C3_078F;
labelFunc01C3_0762:
	if (!(var0005 < 0x0003)) goto labelFunc01C3_077F;
	message("\"Shmed is the Master of Knight's Test. If I were thee, I would speak to him about thy strange experiences.\"");
	say();
	Func097F(0xFFB0, "@Such a story!@", 0x0000);
	goto labelFunc01C3_078F;
labelFunc01C3_077F:
	message("\"My friend, I am convinced thou hast been the victim of an evil scheme! Tomorrow, I shall speak with Shmed personally.\"");
	say();
	Func097F(0xFFB0, "@An outrage!@", 0x0000);
labelFunc01C3_078F:
	UI_end_conversation();
	UI_move_object(0xFFBD, [0x0437, 0x0A7C, 0x0000]);
	UI_si_path_run_usecode(0xFFBD, [0x0421, 0x0A74, 0x0000], 0x000D, UI_get_npc_object(0xFFBD), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFBD), 0x000E);
	Func097F(0xFFBD, "@Terrible news!@", 0x000A);
	UI_set_item_flag(0xFFBD, 0x001C);
	UI_play_music(0x001E, Func09A0(0x0005, 0x0001));
	abort;
labelFunc01C3_07FF:
	if (!(UI_get_npc_id(0xFFBB) == 0x0006)) goto labelFunc01C3_089F;
	UI_set_npc_id(0xFFBB, 0x0007);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("\"Lucilla hath prepared this feast, the main dish of which includes meat from the wolf which thou didst slay in the Knight's Test.\"");
	say();
	message("\"Now let us eat, and as we do so, let us extend our fellowship to this new Knight.\"");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x52, "@Let us eat...@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0010, (byte)0x55, 0x01C3]);
	Func097F(0xFFB9, "@Hurry, Lucilla!@", 0x0004);
	Func097F(0xFFBF, "@This knife is dull...@", 0x0008);
	UI_set_item_flag(0xFFBF, 0x001C);
	Func097F(0xFFB0, (("@" + var0001) + "...@"), 0x0010);
	UI_play_music(0x0022, Func09A0(0x0005, 0x0001));
	abort;
labelFunc01C3_089F:
	if (!(UI_get_npc_id(0xFFBB) == 0x0005)) goto labelFunc01C3_0920;
	UI_set_npc_id(0xFFBB, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("\"And I am here, both as the Lord of Monitor, and as the leader of the Leopards.\"");
	say();
	if (!(UI_get_schedule_type(0xFFBA) == 0x000F)) goto labelFunc01C3_08E1;
	UI_set_schedule_type(0xFFBA, 0x0017);
labelFunc01C3_08E1:
	UI_end_conversation();
	Func097F(0xFFB3, "@Hurrah!@", 0x0000);
	Func097F(0xFFB6, "@Leopards!@", 0x0002);
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x66, (byte)0x27, 0x0006, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_0920:
	if (!(UI_get_npc_id(0xFFBB) == 0x0004)) goto labelFunc01C3_09F4;
	UI_set_npc_id(0xFFBB, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("\"As the leader of the Wolves -- \"");
	say();
	message("\"which, unlike the Bears, prefer to rely on our wits rather than brute strength -- \"");
	say();
	message("\"I, too, welcome thee to the ranks of the Knights.\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc01C3_095D;
	message("\"And, if I might say so, thou art no doubt the most beautiful Knight in the city!\"");
	say();
labelFunc01C3_095D:
	message("\"Since thou art under my Command, I expect to know thee much better in the days to come.\"");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0006, (byte)0x55, 0x01C3]);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x59, 0x0004], 0x0003);
	Func097F(0xFFBF, "@Welcome, warrior.@", 0x0000);
	Func097F(0xFFBC, "@Wolves!@", 0x0001);
	if (!(!UI_is_pc_female())) goto labelFunc01C3_09DD;
	UI_set_schedule_type(0xFFBA, 0x000F);
	0xFFBA->Func07D2();
	Func097F(0xFFBA, "@I like his looks.@", 0x0003);
	goto labelFunc01C3_09E9;
labelFunc01C3_09DD:
	Func097F(0xFFBA, "@Glad to meet thee.@", 0x0003);
labelFunc01C3_09E9:
	UI_set_item_flag(0xFFBA, 0x001C);
	abort;
labelFunc01C3_09F4:
	if (!(UI_get_npc_id(0xFFBB) == 0x0003)) goto labelFunc01C3_0A9D;
	UI_set_npc_id(0xFFBB, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("\"On behalf of the Bears -- which, by the way, are the mightiest warriors in the land -- I welcome thee to thy Knighthood Banquet.\"");
	say();
	UI_end_conversation();
	Func097F(0xFFB0, "@Welcome!@", 0x0002);
	Func097F(0xFFB1, "@Aye! Bears!@", 0x0001);
	Func097F(0xFFB9, "@Hear! Hear!@", 0x0000);
	var0003 = UI_execute_usecode_array(0xFFC1, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var0003 = UI_delayed_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x6C, (byte)0x61], 0x000A);
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x27, 0x0006, (byte)0x59, 0x0006, (byte)0x52, "@The Wolves...@", (byte)0x27, 0x000A, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_0A9D:
	if (!(UI_get_npc_id(0xFFBB) == 0x0002)) goto labelFunc01C3_0B0D;
	UI_set_npc_id(0xFFBB, 0x0003);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("\"Congratulations on successfully completing the Knight's Test.\"");
	say();
	message("\"Thus thou hast proven thyself worthy of joining an elite band of warriors.\"");
	say();
	message("\"In thine honor, all of the Commands of Monitor have sent their representatives to thy Knighthood Banquet.\"");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x52, "@The Bears...@"]);
	var0003 = UI_delayed_execute_usecode_array(0xFFC1, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C3], 0x0004);
	abort;
labelFunc01C3_0B0D:
	if (!(UI_get_npc_id(0xFFBB) == 0x0001)) goto labelFunc01C3_0B59;
	UI_si_path_run_usecode(0xFE9C, [0x041F, 0x0A7B, 0x0000], 0x000D, item, 0x01C3, false);
	UI_set_path_failure(0x01C3, item, 0x000E);
	var0003 = UI_delayed_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x55, 0x01C3], 0x000F);
	abort;
labelFunc01C3_0B59:
	if (!(UI_get_npc_id(0xFFBB) == 0x0000)) goto labelFunc01C3_0E6E;
	UI_play_music(0x000F, Func09A0(0x0005, 0x0001));
	UI_set_item_flag(0xFE9C, 0x0010);
	var0004 = UI_get_npc_prop(0xFFB6, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB6, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	var0004 = UI_get_npc_prop(0xFFB9, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB9, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	UI_end_conversation();
	var0006 = Func0992(0x0001, 0x0000, 0x0000, true);
	var0003 = "We";
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0003)) goto labelFunc01C3_0C00;
	var0003 = "I";
labelFunc01C3_0C00:
	Func097F(var0006, (("@" + var0003) + " shall wait for thee here!@"), 0x0005);
	var0003 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc01C3_0C26:
	for (var0009 in var0003 with var0007 to var0008) attend labelFunc01C3_0C68;
	UI_remove_from_party(var0009);
	var0005 = UI_get_object_position(var0009);
	UI_set_new_schedules(var0009, 0x0000, 0x000A, [var0005[0x0001], var0005[0x0002]]);
	UI_run_schedule(var0009);
	goto labelFunc01C3_0C26;
labelFunc01C3_0C68:
	UI_item_say(0xFE9C, "@This must be the place!@");
	UI_si_path_run_usecode(0xFE9C, [0x041F, 0x0A90, 0x0000], 0x000D, item, 0x01C3, true);
	UI_set_path_failure(0x01C3, item, 0x000E);
	gflags[0x00BF] = true;
	var000A = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0006));
	var000B = UI_find_nearby(var000A, 0x0113, 0x0028, 0x0010);
	enum();
labelFunc01C3_0CC2:
	for (var000E in var000B with var000C to var000D) attend labelFunc01C3_0E32;
	var000F = UI_get_object_position(var000E);
	var0010 = UI_get_item_quality(var000E);
	var0011 = false;
	if (!(var0010 == 0x0001)) goto labelFunc01C3_0CFB;
	var0012 = 0x0004;
	var0011 = 0xFFBB;
labelFunc01C3_0CFB:
	if (!(var0010 == 0x0002)) goto labelFunc01C3_0D11;
	var0012 = 0x0004;
	var0011 = 0xFFB3;
labelFunc01C3_0D11:
	if (!(var0010 == 0x0004)) goto labelFunc01C3_0D27;
	var0012 = 0x0004;
	var0011 = 0xFFB6;
labelFunc01C3_0D27:
	if (!(var0010 == 0x0006)) goto labelFunc01C3_0D3D;
	var0012 = 0x0002;
	var0011 = 0xFF6A;
labelFunc01C3_0D3D:
	if (!(var0010 == 0x0008)) goto labelFunc01C3_0D53;
	var0012 = 0x0002;
	var0011 = 0xFFBF;
labelFunc01C3_0D53:
	if (!(var0010 == 0x000A)) goto labelFunc01C3_0D69;
	var0012 = 0x0002;
	var0011 = 0xFFBC;
labelFunc01C3_0D69:
	if (!(var0010 == 0x000C)) goto labelFunc01C3_0D9B;
	UI_move_object(0xFFBA, var000F);
	UI_set_schedule_type(0xFFBA, 0x000F);
	var0013 = UI_execute_usecode_array(0xFFBA, [(byte)0x59, 0x0006, (byte)0x61]);
labelFunc01C3_0D9B:
	if (!(var0010 == 0x0005)) goto labelFunc01C3_0DB1;
	var0012 = 0x0004;
	var0011 = 0xFFB0;
labelFunc01C3_0DB1:
	if (!(var0010 == 0x0007)) goto labelFunc01C3_0DC7;
	var0012 = 0x0006;
	var0011 = 0xFFC1;
labelFunc01C3_0DC7:
	if (!(var0010 == 0x0009)) goto labelFunc01C3_0DDD;
	var0012 = 0x0006;
	var0011 = 0xFFB1;
labelFunc01C3_0DDD:
	if (!(var0010 == 0x000B)) goto labelFunc01C3_0DF3;
	var0012 = 0x0006;
	var0011 = 0xFFB9;
labelFunc01C3_0DF3:
	if (!(var0011 && (!UI_get_item_flag(var0011, 0x0004)))) goto labelFunc01C3_0E2F;
	UI_move_object(var0011, var000F);
	UI_set_schedule_type(var0011, 0x000F);
	var0013 = UI_execute_usecode_array(var0011, [(byte)0x59, var0012, (byte)0x01, (byte)0x6B]);
labelFunc01C3_0E2F:
	goto labelFunc01C3_0CC2;
labelFunc01C3_0E32:
	var000A = (UI_get_object_position(0xFE9C) & (0x0000 & 0x0007));
	var000B = UI_find_nearby(var000A, 0x0113, 0x001E, 0x0010);
	enum();
labelFunc01C3_0E58:
	for (var000E in var000B with var0014 to var0015) attend labelFunc01C3_0E6D;
	UI_remove_item(var000E);
	goto labelFunc01C3_0E58;
labelFunc01C3_0E6D:
	abort;
labelFunc01C3_0E6E:
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(0xFFB9, 0x0004);
	UI_clear_item_flag(0xFFB6, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("\"Lay down thine arms, Knights! Such fighting belongs on the List Field, not in the banquet hall.\"");
	say();
	message("\"Thy behavior hath disrupted this celebration. In the interest of calming all of our tempers, I declare this banquet to be over.\"");
	say();
	message("\"");
	message(var0001);
	message(", couldst thou please speak to Harnna about her daughter? Perhaps thou mightest have some new insights.\"");
	say();
	var0003 = UI_find_nearby(0xFE9C, 0x01B0, 0x0028, 0x0000);
	enum();
labelFunc01C3_0EC0:
	for (var0009 in var0003 with var0016 to var0017) attend labelFunc01C3_0EE5;
	if (!(UI_get_item_quality(var0009) == 0x0033)) goto labelFunc01C3_0EE2;
	Func0907(var0009, 0x0001);
labelFunc01C3_0EE2:
	goto labelFunc01C3_0EC0;
labelFunc01C3_0EE5:
	Func097F(0xFFBB, "@Go home!@", 0x0000);
	Func097F(0xFFB6, "@Until next time...@", 0x0004);
	Func097F(0xFFB9, "@Coward!@", 0x0008);
	Func097F(0xFFC1, "@I'm hungry!@", 0x000A);
	gflags[0x0048] = true;
	var0018 = [0xFFBC, 0xFFBF, 0xFF6A, 0xFFB3, 0xFFB6, 0xFFBB, 0xFFBD, 0xFFB0, 0xFFC1, 0xFFBA, 0xFFB1, 0xFFB9];
	enum();
labelFunc01C3_0F44:
	for (var0005 in var0018 with var0019 to var001A) attend labelFunc01C3_0F60;
	UI_revert_schedule(var0005);
	UI_run_schedule(var0005);
	goto labelFunc01C3_0F44;
labelFunc01C3_0F60:
	var0018 = [0xFFB0, 0xFFC1, 0xFFB1, 0xFFB9];
	enum();
labelFunc01C3_0F73:
	for (var0005 in var0018 with var001B to var001C) attend labelFunc01C3_0F8B;
	UI_set_schedule_type(var0005, 0x001A);
	goto labelFunc01C3_0F73;
labelFunc01C3_0F8B:
	UI_set_schedule_type(0xFFBA, 0x0017);
	var0003 = UI_execute_usecode_array(0xFFBF, [(byte)0x23, (byte)0x6C, (byte)0x61]);
	var0003 = UI_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x6D, (byte)0x6C, (byte)0x61]);
	var001D = [0xFFBF, 0xFFB0, 0xFFBD, 0xFFBC, 0xFFBA, 0xFFBB, 0xFFB3];
	enum();
labelFunc01C3_0FD9:
	for (var0005 in var001D with var001E to var001F) attend labelFunc01C3_0FF1;
	UI_clear_item_flag(var0005, 0x001D);
	goto labelFunc01C3_0FD9;
labelFunc01C3_0FF1:
	if (!(event == 0x000E)) goto labelFunc01C3_11FC;
	if (!((item == UI_get_npc_object(0xFFBF)) && (UI_get_npc_id(0xFFBB) == 0x0008))) goto labelFunc01C3_1026;
	UI_set_schedule_type(0xFFBF, 0x000F);
	UI_item_say(0xFFBF, "@Poor Cantra...@");
	abort;
labelFunc01C3_1026:
	if (!((item == UI_get_npc_object(0xFFB6)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_108E;
	UI_set_npc_id(0xFFBB, 0x000D);
	UI_set_schedule_type(0xFFB6, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFB6, [(byte)0x23, (byte)0x64, (byte)0x52, "@Restrain thyself, Luther!@", (byte)0x27, 0x000B, (byte)0x55, 0x01C3]);
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x27, 0x0008, (byte)0x64, (byte)0x52, "@Thou must make me!@"]);
	abort;
labelFunc01C3_108E:
	if (!((item == UI_get_npc_object(0xFFB9)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_111F;
	UI_set_schedule_type(0xFFB9, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("\"Leave him alone, Luther.\"");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	message("\"Thou shouldst stay out of this, woman...\"");
	say();
	UI_end_conversation();
	Func097F(0xFF6A, "@No, Shazzana...@", 0x0004);
	Func097F(0xFFB6, "@Thou shalt not tell me what to do!@", 0x0002);
	UI_si_path_run_usecode(0xFFB6, [0x041C, 0x0A81, 0x0000], 0x000D, UI_get_npc_object(0xFFB6), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB6), 0x000E);
	abort;
labelFunc01C3_111F:
	if (!(item == UI_get_npc_object(0xFFBD))) goto labelFunc01C3_1142;
	UI_move_object(0xFFBD, [0x0421, 0x0A74, 0x0000]);
	event = 0x000D;
labelFunc01C3_1142:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_1165;
	UI_set_schedule_type(0xFFBC, 0x000F);
	abort;
labelFunc01C3_1165:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x0002))) goto labelFunc01C3_1194;
	UI_move_object(0xFFBC, [0x0415, 0x0A7D, 0x0000]);
	event = 0x000D;
labelFunc01C3_1194:
	if (!((UI_get_npc_id(0xFFBB) == 0x0001) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C3_11C3;
	UI_move_object(0xFE9C, [0x041F, 0x0A7B, 0x0000]);
	event = 0x000D;
labelFunc01C3_11C3:
	if (!((UI_get_npc_id(0xFFBB) == 0x0000) && ((UI_get_item_shape(item) == 0x01B0) || (UI_get_item_shape(item) == 0x010E)))) goto labelFunc01C3_11FC;
	UI_move_object(0xFE9C, [0x041F, 0x0A90, 0x0000]);
	event = 0x000D;
labelFunc01C3_11FC:
	if (!(event == 0x000D)) goto labelFunc01C3_1675;
	if (!((item == UI_get_npc_object(0xFFBF)) && (UI_get_npc_id(0xFFBB) == 0x0008))) goto labelFunc01C3_1253;
	UI_set_schedule_type(0xFFBF, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFBF, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x52, "@Do not cry...@"]);
	abort;
labelFunc01C3_1253:
	if (!((item == UI_get_npc_object(0xFFB6)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_12BB;
	UI_set_npc_id(0xFFBB, 0x000D);
	UI_set_schedule_type(0xFFB6, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFB6, [(byte)0x23, (byte)0x64, (byte)0x52, "@Leave him alone, Luther!@", (byte)0x27, 0x000B, (byte)0x55, 0x01C3]);
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x27, 0x0008, (byte)0x64, (byte)0x52, "@Thou must make me!@"]);
	abort;
labelFunc01C3_12BB:
	if (!((item == UI_get_npc_object(0xFFB9)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_134C;
	UI_set_schedule_type(0xFFB9, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("\"Leave him alone, Luther.\"");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	message("\"Thou shouldst stay out of this, woman...\"");
	say();
	UI_end_conversation();
	Func097F(0xFF6A, "@No, Shazzana...@", 0x0004);
	Func097F(0xFFB6, "@Thou shalt not tell me what to do!@", 0x0002);
	UI_si_path_run_usecode(0xFFB6, [0x041C, 0x0A81, 0x0000], 0x000D, UI_get_npc_object(0xFFB6), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB6), 0x000E);
	abort;
labelFunc01C3_134C:
	if (!(item == UI_get_npc_object(0xFFBD))) goto labelFunc01C3_145D;
	gflags[0x0079] = true;
	UI_set_schedule_type(0xFFBD, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBD, 0x0000);
	message("\"My daughter Cantra is gone! I have looked everywhere for her. We need to send out a patrol!\"");
	say();
	UI_show_npc_face1(0xFFB1, 0x0000);
	message("\"The Goblins have struck again!\"");
	say();
	message("\"I am sorry, Harnna, but if the Goblins have her, she is lost. There is not an ounce of mercy or remorse within them.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"But the Goblins did not take her!\"");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("\"Thou canst not know any such thing. It must have been the Goblins. Remember, they killed thine husband right outside this city, not even leaving a body!\"");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x52, "@My daughter!@", (byte)0x6C, (byte)0x6D, (byte)0x27, 0x0007, (byte)0x52, "@Oh!@", (byte)0x27, 0x0007, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x52, "@We must find her!@", (byte)0x6C, (byte)0x6D, (byte)0x6E]);
	var0003 = UI_delayed_execute_usecode_array(0xFFB1, [(byte)0x23, (byte)0x52, "@Lord Marsten...@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C3], 0x0014);
	Func097F(0xFFC1, "@Kill the Goblins!@", 0x0005);
	Func097F(0xFFBF, "@Poor dear!@", 0x0002);
	UI_si_path_run_usecode(0xFFBF, [0x0422, 0x0A73, 0x0000], 0x000D, UI_get_npc_object(0xFFBF), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFBF), 0x000E);
	UI_remove_npc_face1();
	abort;
labelFunc01C3_145D:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_1480;
	UI_set_schedule_type(0xFFBC, 0x000F);
	abort;
labelFunc01C3_1480:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x0002))) goto labelFunc01C3_14C0;
	var0003 = UI_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x52, "@I am sorry that I am late...@", (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B]);
	UI_set_schedule_type(0xFFBC, 0x000F);
	abort;
labelFunc01C3_14C0:
	if (!((UI_get_npc_id(0xFFBB) == 0x0001) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C3_1546;
	UI_set_npc_id(0xFFBB, 0x0002);
	Func097F(0xFFBB, (("@Please be seated, " + var0001) + ".@"), 0x0003);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x6C, (byte)0x61], 0x0002);
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Yes, milord.@", (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0008, (byte)0x55, 0x01C3], 0x0005);
	Func09AC(0xFFBA, 0xFFFF, 0x0000, 0x0017);
	abort;
labelFunc01C3_1546:
	if (!((UI_get_npc_id(0xFFBB) == 0x0000) && ((UI_get_item_shape(item) == 0x01B0) || (UI_get_item_shape(item) == 0x010E)))) goto labelFunc01C3_1675;
	UI_set_npc_id(0xFFBB, 0x0001);
	Func097F(0xFE9C, "@Look! Everyone is here...@", 0x0003);
	Func097F(0xFFB0, "@Where is Harnna?@", 0x0017);
	Func097F(0xFFB3, "@Our guest is here...@", 0x0016);
	var0003 = (UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x0000) & UI_find_nearby(0xFE9C, 0x01B0, 0x000A, 0x0000));
	enum();
labelFunc01C3_15BB:
	for (var0009 in var0003 with var0020 to var0021) attend labelFunc01C3_15D0;
	UI_remove_item(var0009);
	goto labelFunc01C3_15BB;
labelFunc01C3_15D0:
	var0009 = UI_create_new_object(0x01B1);
	if (!var0009) goto labelFunc01C3_1614;
	var0003 = UI_set_item_quality(var0009, 0x0000);
	UI_set_item_frame(var0009, 0x0009);
	UI_clear_item_flag(var0009, 0x0012);
	var0003 = UI_update_last_created([0x041C, 0x0A8F, 0x0000]);
labelFunc01C3_1614:
	var0009 = UI_create_new_object(0x0178);
	if (!var0009) goto labelFunc01C3_1658;
	var0003 = UI_set_item_quality(var0009, 0x0000);
	UI_set_item_frame(var0009, 0x000D);
	UI_clear_item_flag(var0009, 0x0012);
	var0003 = UI_update_last_created([0x0423, 0x0A8F, 0x0000]);
labelFunc01C3_1658:
	UI_play_sound_effect2(0x0020, item);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_1675:
	return;
}


