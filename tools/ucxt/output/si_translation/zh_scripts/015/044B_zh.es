#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A6 0x9A6 (var var0000);
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);

void Func044B object#(0x44B) ()
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

	var0000 = Func0953();
	var0001 = Func0994();
	if (!(event == 0x0001)) goto labelFunc044B_007E;
	UI_item_say(0xFE9C, "@Greetings, Guard!@");
	0xFFB5->Func07D1();
	if (!gflags[0x0004]) goto labelFunc044B_0052;
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("\"It was horrible! I was a wolf! I know I was! I saw myself in a reflection on a puddle of water!\"");
	say();
	UI_set_attack_mode(0xFFB5, 0x0007);
	Func097F(0xFFB5, "@Aieee!!@", 0x0000);
	abort;
	goto labelFunc044B_007E;
labelFunc044B_0052:
	if (!(!gflags[0x004A])) goto labelFunc044B_0068;
	Func097F(0xFFB5, "@Greetings!@", 0x0002);
	goto labelFunc044B_0074;
labelFunc044B_0068:
	Func097F(0xFFB5, "@It cannot be!@", 0x0002);
labelFunc044B_0074:
	UI_set_schedule_type(0xFFB5, 0x0003);
labelFunc044B_007E:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFB5, 0x001D))) goto labelFunc044B_00E1;
	UI_clear_item_say(0xFFB5);
	if (!(!gflags[0x00C5])) goto labelFunc044B_00B1;
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("\"But I don't understand. How didst thou survive the Knight's Test? We fixed the place with traps to be absolutely fatal!\"");
	say();
	message("\"I did not want to do it. She seduced me into trying to kill thee! Yet even now, I cannot betray her...\"");
	say();
labelFunc044B_00B1:
	UI_clear_item_flag(0xFFB5, 0x001D);
	Func097F(0xFFB5, "@My love!@", 0x0000);
	Func097F(0xFE9C, "@Die with dishonor!@", 0x0005);
	UI_reduce_health(0xFFB5, 0x0037, 0x0000);
	abort;
labelFunc044B_00E1:
	if (!(event == 0x0009)) goto labelFunc044B_05FD;
	UI_run_schedule(0xFFB5);
	UI_clear_item_say(0xFFB5);
	var0002 = false;
	if (!(var0001 == 0x000C)) goto labelFunc044B_0109;
	var0002 = true;
labelFunc044B_0109:
	UI_show_npc_face0(0xFFB5, 0x0000);
	if (!gflags[0x004A]) goto labelFunc044B_0142;
	message("\"But I don't understand. How didst thou survive the Knight's Test? We fixed the place with traps to be absolutely fatal!\"");
	say();
	message("\"I did not want to do it. She seduced me into trying to kill thee! Yet even now, I cannot betray her...\"");
	say();
	Func09AD(0xFFB5);
	UI_set_item_flag(0xFFB5, 0x001D);
	Func097F(0xFFB5, "@Take this!@", 0x0000);
	gflags[0x00C5] = true;
	abort;
labelFunc044B_0142:
	var0003 = UI_get_item_flag(0xFFB5, 0x001C);
	if (!var0003) goto labelFunc044B_015C;
	message("\"Hello again.\"");
	say();
	goto labelFunc044B_016E;
labelFunc044B_015C:
	message("\"My name is Shmed. I am a Knight of Monitor, at thy service...\"");
	say();
	UI_set_item_flag(0xFFB5, 0x001C);
	var0004 = false;
labelFunc044B_016E:
	if (!gflags[0x0080]) goto labelFunc044B_017B;
	UI_add_answer("the Test");
labelFunc044B_017B:
	UI_add_answer(["duties", "bye"]);
labelFunc044B_0188:
	converse attend labelFunc044B_05FC;
	case "duties" attend labelFunc044B_01C0:
	UI_remove_answer("duties");
	if (!gflags[0x004A]) goto labelFunc044B_01A4;
	message("\"But thou already knowest!\"");
	say();
labelFunc044B_01A4:
	message("\"I am the Knight in charge of the Test of the Knights.\"");
	say();
	if (!var0002) goto labelFunc044B_01B2;
	message("\"The Test takes place here, beyond that locked door.\"");
	say();
labelFunc044B_01B2:
	if (!(!var0004)) goto labelFunc044B_01C0;
	UI_add_answer("the Test");
labelFunc044B_01C0:
	case "the Test" attend labelFunc044B_05CE:
	var0004 = true;
	UI_remove_answer("the Test");
	if (!(!gflags[0x004A])) goto labelFunc044B_05CE;
	message("\"All Monitorians must pass the Test before they can be granted their Knighthood.\"");
	say();
	message("\"The Test of the Knights is a challenge which only one stout of heart, keen of mind and strong of arm can pass. It is specially designed to test thy might, thy fleetness, thy courage and thy wits. If thou dost complete the test thou shouldst follow the directions of the words contained in the scrolls that thou wilt find. Thy totem animal will then appear. Slay it and take it back to town. Cellia will take its skin to make a cloak for thee. Lucilla will cook its meat. All the Knights will have a banquet in thine honor -- if thou dost pass the test.\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc044B_021A;
	message("\"It is a test which one must endure alone, without companions.\"");
	say();
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc044B_021A;
	Func094E(0xFFD4, (("@But not before finishing our quest, " + var0000) + "!@"));
	UI_set_conversation_slot(0x0000);
labelFunc044B_021A:
	if (!(!gflags[0x002F])) goto labelFunc044B_022C;
	message("\"If thou dost wish to take the Test, thou must speak with Lord Marsten and obtain his permission.\"");
	say();
	gflags[0x003C] = true;
	goto labelFunc044B_05CE;
labelFunc044B_022C:
	if (!var0002) goto labelFunc044B_05C2;
	message("\"Dost thou wish to test thy mettle by taking the Test of Knighthood?\"");
	say();
	var0005 = Func0955();
	if (!var0005) goto labelFunc044B_05AE;
	var0006 = UI_get_object_position(0xFFB5);
	var0007 = var0006[0x0001];
	var0008 = var0006[0x0002];
	if (!(!((var0007 > 0x0319) && ((var0007 < 0x0347) && ((var0008 > 0x08BD) && (var0008 < 0x08E2)))))) goto labelFunc044B_02AE;
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("\"Come to the building just south of the entrance to Knight's Test. There I can properly attend to thee before the test.\"");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_item_say(0xFE9C, "@Farewell.@");
	Func097F(0xFFB5, "@See thee there...@", 0x0002);
	abort;
labelFunc044B_02AE:
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("\"Pray tell, what be the password?\"");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Courage is the Soul of Life.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Steel thyself! If thou dost make it through to the other side, then all will know that thou art worthy to be a Knight of Monitor.\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc044B_03F4;
	message("\"Thy friends must wait for thee here.\"");
	say();
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc044B_0321;
	Func094E(0xFFD4, "@Then he cannot take this Test! I refuse to leave!@");
	UI_set_conversation_slot(0x0000);
	message("\"I cannot change the rules of the Test. Therefore, I cannot admit thee, stranger.\"");
	say();
	Func097F(0xFFB5, "@Good-bye.@", 0x0000);
	abort;
labelFunc044B_0321:
	gflags[0x0082] = true;
	Func09AC(0xFFB5, 0xFFFF, 0x0000, 0x000B);
	var0009 = Func0992(0xFFFF, "@Couldn't we wait at the pub in town?@", 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc044B_039F;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc044B_0398;
	var000A = var0009;
labelFunc044B_0363:
	if (!(var000A == var0009)) goto labelFunc044B_0380;
	var000A = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc044B_0363;
labelFunc044B_0380:
	var000A = Func0992(var000A, (("@Of course not. We shall wait faithfully for thee here, " + var0000) + ".@"), 0x0000, false);
labelFunc044B_0398:
	UI_set_conversation_slot(0x0000);
labelFunc044B_039F:
	var000B = UI_get_party_list2();
	if (!var000B) goto labelFunc044B_03F4;
	enum();
labelFunc044B_03AD:
	for (var000E in var000B with var000C to var000D) attend labelFunc044B_03F4;
	if (!(!(UI_get_npc_number(var000E) == 0xFE9C))) goto labelFunc044B_03F1;
	UI_remove_from_party(var000E);
	var000F = [0x0322, 0x08DA];
	UI_set_new_schedules(var000E, 0x0000, 0x000B, var000F);
	UI_run_schedule(var000E);
labelFunc044B_03F1:
	goto labelFunc044B_03AD;
labelFunc044B_03F4:
	UI_clear_item_flag(0xFE9C, 0x0000);
	var0010 = UI_find_nearby(0xFFB5, 0x020A, 0x0064, 0x0000);
	var0011 = 0x0000;
	enum();
labelFunc044B_0418:
	for (var0014 in var0010 with var0012 to var0013) attend labelFunc044B_0444;
	if (!(UI_get_item_quality(var0014) == 0x0048)) goto labelFunc044B_0441;
	UI_set_item_shape(var0014, 0x0320);
	var0011 = var0014;
labelFunc044B_0441:
	goto labelFunc044B_0418;
labelFunc044B_0444:
	if (!(var0011 == 0x0000)) goto labelFunc044B_0487;
	var0015 = UI_create_new_object(0x0320);
	if (!var0015) goto labelFunc044B_0480;
	var0016 = UI_set_item_quality(var0015, 0x0048);
	var0016 = UI_update_last_created(UI_get_object_position(item));
	var0011 = var0015;
	goto labelFunc044B_0487;
labelFunc044B_0480:
	UI_error_message("backup chest creation failed.");
labelFunc044B_0487:
	message("\"For now I will take thy things and keep them safe. Thou art only permitted to wear leather armour and to carry no other weapon but a simple mace when thou art taking the Knight's Test of Monitor.\"");
	say();
	var0017 = 0x0000;
	var0018 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc044B_04A4:
	if (!(var0017 < 0x0002)) goto labelFunc044B_0539;
	enum();
labelFunc044B_04AF:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc044B_0519;
	if (!(Func09A6(var001B) || (var0017 == 0x0001))) goto labelFunc044B_0516;
	var001C = UI_get_item_shape(var001B);
	if (!(!((var001C == 0x01E6) || ((var001C == 0x025F) || (var001C == 0x01E5))))) goto labelFunc044B_0516;
	if (!(!UI_set_last_created(var001B))) goto labelFunc044B_0503;
	UI_error_message(" failed the push!");
	abort;
labelFunc044B_0503:
	if (!(!UI_give_last_created(var0011))) goto labelFunc044B_0516;
	UI_error_message(" failed the pop!");
	abort;
labelFunc044B_0516:
	goto labelFunc044B_04AF;
labelFunc044B_0519:
	var0017 = (var0017 + 0x0001);
	var0018 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc044B_04A4;
labelFunc044B_0539:
	var0015 = UI_add_cont_items(0xFE9C, 0x0001, 0x0293, 0xFE99, 0x0000, false);
	var0015 = UI_add_cont_items(0xFE9C, 0x0001, 0x0239, 0xFE99, 0x0000, false);
	UI_si_path_run_usecode(0xFFB5, [0x0339, 0x08D7, 0x0000], 0x0007, 0xFE9C, 0x0739, true);
	Func097F(0xFFB5, "@Follow me...@", 0x0002);
	Func097F(0xFE9C, "@Lead onwards...@", 0x0005);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	abort;
	goto labelFunc044B_05BF;
labelFunc044B_05AE:
	message("\"Harrumph! Perhaps when thou hast found a bit of courage!\"");
	say();
	Func097F(0xFFB5, "@Be on thy way then!@", 0x0003);
	abort;
labelFunc044B_05BF:
	goto labelFunc044B_05CE;
labelFunc044B_05C2:
	message("\"If thou dost meet me at the Place of the Test, thou canst take the Test of Knighthood.\"");
	say();
	message("\"Follow the Kings' Road north of Monitor, then take the trail leading west.\"");
	say();
	message("\"I can be found there everyday, from dawn until late in the afternoon.\"");
	say();
labelFunc044B_05CE:
	case "bye" attend labelFunc044B_05F9:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Farewell.@", 0x0000);
	Func097F(0xFFB5, "@On thy way, then.@", 0x0002);
	goto labelFunc044B_0658;
labelFunc044B_05F9:
	goto labelFunc044B_0188;
labelFunc044B_05FC:
	endconv;
labelFunc044B_05FD:
	if (!(event == 0x0002)) goto labelFunc044B_0658;
	var001D = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	enum();
labelFunc044B_0619:
	for (var0020 in var001D with var001E to var001F) attend labelFunc044B_0658;
	if (!(UI_get_item_quality(var0020) == 0x0048)) goto labelFunc044B_0655;
	if (!(Func0906(var0020) == 0x0002)) goto labelFunc044B_0655;
	Func0907(var0020, 0x0000);
	Func094F(item, ["There thou dost go...", "Thou mayest begin."]);
labelFunc044B_0655:
	goto labelFunc044B_0619;
labelFunc044B_0658:
	return;
}


