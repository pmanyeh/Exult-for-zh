#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func095D 0x95D (var var0000);

void Func093A 0x93A (var var0000)
{
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

	var0001 = Func0953();
	var0002 = "his";
	if (!UI_is_pc_female()) goto labelFunc093A_0019;
	var0002 = "her";
labelFunc093A_0019:
	if (!gflags[0x0170]) goto labelFunc093A_0351;
	if (!(var0000 == 0x0057)) goto labelFunc093A_0119;
	var0003 = UI_execute_usecode_array(0xFFCD, [(byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B]);
	UI_init_conversation();
	UI_show_npc_face0(0xFFCA, 0x0000);
	message("\"I thank thee, Captain Voldin.\"");
	say();
	var0003 = Func08AC(false);
	message("\"We shall recess until tomorrow, and then return to hear ");
	message(var0003);
	message("'s defense. Dost thou agree with this course of action, Lady Yelinda?\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"Oh... why, yes... of course. Make it so.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"");
	message(var0003);
	message(", know that thou mayest defend thyself or appoint any willing person to speak on thy behalf. Dost thou have a preference?\"");
	say();
	UI_show_npc_face1(Func08AC(true), 0x0000);
	message("\"Yes, I wish my friend -- ");
	message(var0001);
	message(", the Avatar -- to present my case. I have faith that I will be acquitted.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Very well, ");
	message(var0001);
	message(" shall be thy champion. Guard, please take the defendant to his cell.\"");
	say();
	UI_end_conversation();
	var0004 = UI_find_nearby(0xFE9C, 0x017D, 0x000A, 0x0008);
	if (!var0004) goto labelFunc093A_0118;
	var0003 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Yes, Priestess.@"]);
	var0005 = UI_get_object_position(var0004);
	var0005[0x0001] = (var0005[0x0001] - 0x0003);
	UI_si_path_run_usecode(var0004, var0005, 0x000D, var0004, 0x07F8, false);
labelFunc093A_0118:
	abort;
labelFunc093A_0119:
	if (!(var0000 == 0x0058)) goto labelFunc093A_0140;
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_0140:
	if (!(var0000 == 0x0059)) goto labelFunc093A_0189;
	var0003 = UI_find_nearby(item, 0x017A, 0x0005, 0x0000);
	if (!var0003) goto labelFunc093A_0188;
	UI_remove_item(var0003);
	UI_play_sound_effect(0x0075);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x61, (byte)0x55, 0x07F8]);
labelFunc093A_0188:
	abort;
labelFunc093A_0189:
	if (!(var0000 == 0x005A)) goto labelFunc093A_01BF;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Come with me, prisoner.@"]);
	UI_si_path_run_usecode(item, [0x0407, 0x0679, 0x0000], 0x000D, item, 0x07F8, false);
	abort;
labelFunc093A_01BF:
	if (!(var0000 == 0x005B)) goto labelFunc093A_020A;
	UI_remove_item(item);
	var0003 = Func08AC(true);
	UI_remove_from_party(var0003);
	UI_si_path_run_usecode(var0003, [0x0408, 0x067A, 0x0000], 0x000D, UI_get_npc_object(var0003), 0x07F8, false);
	Func097F(var0003, "@Goodbye...@", 0x0000);
	abort;
labelFunc093A_020A:
	if (!(var0000 == 0x005C)) goto labelFunc093A_02C7;
	gflags[0x0171] = true;
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x52, "@This trial is now in recess!@"]);
	var0004 = ("" & ("@What a farce!@" & ("@What shall I do?@" & "@Woe is me...@")));
	Func094F(0xFE9C, var0004);
	UI_remove_npc(Func08AC(true));
	UI_si_path_run_usecode(0xFE9C, [0x0407, 0x068D, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x07F8, false);
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0002), 0x0000);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x042E], 0x01F4);
	var0003 = UI_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_02C7:
	if (!(var0000 == 0x005D)) goto labelFunc093A_034E;
	gflags[0x0170] = false;
	gflags[0x0172] = true;
	var0003 = UI_get_party_list2();
	enum();
labelFunc093A_02E1:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc093A_02F9;
	UI_set_schedule_type(var0008, 0x001F);
	goto labelFunc093A_02E1;
labelFunc093A_02F9:
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	var0003 = (UI_find_nearby(item, 0x01B0, 0x000A, 0x0000) & UI_find_nearby(item, 0x010E, 0x000A, 0x0000));
	enum();
labelFunc093A_0328:
	for (var0008 in var0003 with var0009 to var000A) attend labelFunc093A_034D;
	if (!(UI_get_item_quality(var0008) == 0x00B3)) goto labelFunc093A_034A;
	Func0907(var0008, 0x0002);
labelFunc093A_034A:
	goto labelFunc093A_0328;
labelFunc093A_034D:
	abort;
labelFunc093A_034E:
	goto labelFunc093A_1406;
labelFunc093A_0351:
	if (!(var0000 == 0x0057)) goto labelFunc093A_04BF;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("\"Both sides have stated their facts, and called their witnesses. Let it not be said that there is no justice in Fawn!\"");
	say();
	var0003 = Func08AC(false);
	message("\"Now, before the face of Beauty, I call for a verdict upon ");
	message(var0003);
	message("!\"");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x52, "@All rise and face the Oracle!", (byte)0x27, 0x0001, (byte)0x59, 0x0000]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_03B4:
	for (var0004 in var0008 with var000B to var000C) attend labelFunc093A_03E7;
	var0003 = (0x0007 + UI_get_random(0x0003));
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x59, 0x0000], var0003);
	goto labelFunc093A_03B4;
labelFunc093A_03E7:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCC];
	enum();
labelFunc093A_03FA:
	for (var0004 in var0008 with var000D to var000E) attend labelFunc093A_0433;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0001, (byte)0x59, 0x0000], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_03FA;
labelFunc093A_0433:
	var0008 = [0xFFCF, 0xFFCE];
	enum();
labelFunc093A_0440:
	for (var0004 in var0008 with var000F to var0010) attend labelFunc093A_0479;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0001, (byte)0x59, 0x0006], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_0440;
labelFunc093A_0479:
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x61], 0x0005);
	var0003 = UI_delayed_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x61], 0x0007);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x0014);
	abort;
labelFunc093A_04BF:
	if (!(var0000 == 0x0058)) goto labelFunc093A_0622;
	UI_init_conversation();
	UI_show_npc_face0(0xFEFB, 0x0000);
	var0003 = Func08AC(false);
	if (!gflags[0x016E]) goto labelFunc093A_04FE;
	message("\"");
	message(var0003);
	message(" is innocent! ");
	message(var0001);
	message(" and ");
	message(var0002);
	message(" companions have no wish to destroy Beauty!\"");
	say();
	message("\"Free them at once!\"");
	say();
labelFunc093A_04FE:
	if (!gflags[0x016F]) goto labelFunc093A_0512;
	message("\"");
	message(var0003);
	message(" is innocent! Set him and his companions free!\"");
	say();
	message("\"The true criminals are Priestess Kylista and Great Captain Voldin, who have conspired to convict this innocent man!\"");
	say();
labelFunc093A_0512:
	if (!((!gflags[0x016F]) && (!gflags[0x016E]))) goto labelFunc093A_05F6;
	message("\"");
	message(var0003);
	message(" is guilty of associating with Daemons to destroy our Beauty! The fiend, ");
	message(var0001);
	message(", is also guilty!\"");
	say();
	message("\"Such offense to Beauty cannot go unpunished... The stain of their presence must be washed away with their blood.\"");
	say();
	Func097F(0xFFC3, "@It cries for their blood...@", 0x0000);
	Func097F(0xFFCF, "@Stone them!@", 0x0003);
	Func097F(0xFFCC, "@Behead the fiends!@", 0x0005);
	Func097F(Func08AC(true), "@What shall we do?@", 0x0001);
	Func097F(0xFFC9, "@Oh, my...@", 0x0005);
	UI_end_conversation();
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_05F3;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	UI_move_object(0xFFD2, var0005);
	UI_si_path_run_usecode(0xFFD2, [0x0408, 0x0670, 0x0000], 0x000D, UI_get_npc_object(0xFFD2), 0x07F8, false);
labelFunc093A_05F3:
	goto labelFunc093A_0621;
labelFunc093A_05F6:
	UI_end_conversation();
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0062);
	var0003 = UI_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8]);
labelFunc093A_0621:
	abort;
labelFunc093A_0622:
	if (!(var0000 == 0x0059)) goto labelFunc093A_078C;
	UI_clear_item_say(0xFFD2);
	Func097F(0xFFD2, "@Stop the proceedings!@", 0x0000);
	UI_set_schedule_type(0xFFD2, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFD2, [(byte)0x23, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x61]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_0670:
	for (var0004 in var0008 with var0011 to var0012) attend labelFunc093A_069B;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0004], (0x0002 + UI_get_random(0x0003)));
	goto labelFunc093A_0670;
labelFunc093A_069B:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCF, 0xFFCE, 0xFFCC];
	enum();
labelFunc093A_06B4:
	for (var0004 in var0008 with var0013 to var0014) attend labelFunc093A_06E3;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x61, (byte)0x59, 0x0006], (0x0004 + UI_get_random(0x0004)));
	goto labelFunc093A_06B4;
labelFunc093A_06E3:
	var0008 = [0xFFC9, 0xFFC3];
	enum();
labelFunc093A_06F0:
	for (var0004 in var0008 with var0015 to var0016) attend labelFunc093A_071B;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0002], (0x0003 + UI_get_random(0x0003)));
	goto labelFunc093A_06F0;
labelFunc093A_071B:
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_078B;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCB, var0005);
	UI_si_path_run_usecode(0xFFCB, [0x0406, 0x0670, 0x0000], 0x000D, UI_get_npc_object(0xFFCB), 0x07F8, false);
labelFunc093A_078B:
	abort;
labelFunc093A_078C:
	if (!(var0000 == 0x005A)) goto labelFunc093A_08D9;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("\"We have found the real traitors!\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"What is this all about, Captain Jorvin?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Now we know the truth about this town...\"");
	say();
	UI_show_npc_face1(0xFFCB, 0x0000);
	message("\"I have grave news, dearest Lady. There have been foul deeds done in this Temple!\"");
	say();
	UI_clear_item_say(0xFFCB);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_07FA;
	message("\"Acting upon information supplied by Alyssand, I did enter a secret room within this building. Here, I discovered Priestess Kylista manipulating some form of machine.\"");
	say();
	Func097F(0xFFCB, "@Guards, send in the traitor!@", 0x0000);
	goto labelFunc093A_080A;
labelFunc093A_07FA:
	message("\"Acting upon information supplied by Alyssand, I did enter a secret room within this building. Here, I discovered Priestess Kylista and Great Captain Voldin manipulating some form of machine.\"");
	say();
	Func097F(0xFFCB, "@Guards, send in the traitors!@", 0x0000);
labelFunc093A_080A:
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFCB, [(byte)0x27, 0x0001, (byte)0x59, 0x0002]);
	var0003 = UI_execute_usecode_array(0xFFD2, [(byte)0x27, 0x0003, (byte)0x59, 0x0000]);
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_08B8;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCA, var0005);
	UI_si_path_run_usecode(0xFFCA, [0x0408, 0x0672, 0x0000], 0x000D, UI_get_npc_object(0xFFCA), 0x07F8, false);
	Func097F(0xFFCA, "@Don't shove me!@", 0x0007);
labelFunc093A_08B8:
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_08D8;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x005C);
labelFunc093A_08D8:
	abort;
labelFunc093A_08D9:
	if (!(var0000 == 0x005B)) goto labelFunc093A_0960;
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_095F;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCD, var0005);
	UI_si_path_run_usecode(0xFFCD, [0x0406, 0x0672, 0x0000], 0x000D, UI_get_npc_object(0xFFCD), 0x07F8, false);
	Func097F(0xFFCD, "@Save us, Lady Yelinda!@", 0x0002);
labelFunc093A_095F:
	abort;
labelFunc093A_0960:
	if (!(var0000 == 0x005C)) goto labelFunc093A_0A16;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("\"Voldin and Kylista have played us all for fools! And we have followed blindly along...\"");
	say();
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_0996;
	UI_show_npc_face1(0xFFCA, 0x0000);
	goto labelFunc093A_09A0;
labelFunc093A_0996:
	UI_show_npc_face1(0xFFCD, 0x0000);
labelFunc093A_09A0:
	message("\"Silence, chit! What dost thou know of these matters?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I am certain that heaven built the levers in the secret room! Kylista, hath it been a great boon to thee, being a mouthpiece of the heavens?\"");
	say();
	UI_show_npc_face1(0xFFCA, 0x0000);
	message("\"Delin, take thy daughter in hand! She speaks out of turn.\"");
	say();
	message("\"As for the levers -- why, they are prayer levers, by which I commune with Beauty! They are sacred, not to be profaned by doubters such as Alyssand.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("\"Then the outcome of the trial would not change, say, if I moved those prayer levers...?\"");
	say();
	message("\"Lady Yelinda, wouldst thou please call once again upon the Oracle, for its decision?\"");
	say();
	UI_end_conversation();
	UI_clear_item_say(0xFFCA);
	Func097F(0xFFCA, "@It hath already spoken!@", 0x0000);
	Func097F(0xFFD2, "@See what it says now!@", 0x0002);
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8], 0x000A);
	abort;
labelFunc093A_0A16:
	if (!(var0000 == 0x005D)) goto labelFunc093A_0B66;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("\"What can it hurt, Kylista, to speak again to the great Oracle?\"");
	say();
	var0003 = Func08AC(false);
	message("\"Again, before the face of Beauty, I call for a verdict upon ");
	message(var0003);
	message("!\"");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@All rise and face the Oracle!", (byte)0x27, 0x0001, (byte)0x59, 0x0000]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_0A6B:
	for (var0004 in var0008 with var0017 to var0018) attend labelFunc093A_0A9E;
	var0003 = (0x0007 + UI_get_random(0x0003));
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x59, 0x0000], var0003);
	goto labelFunc093A_0A6B;
labelFunc093A_0A9E:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCC, 0xFFCD, 0xFFCA, 0xFFD2, 0xFFCB];
	enum();
labelFunc093A_0ABD:
	for (var0004 in var0008 with var0019 to var001A) attend labelFunc093A_0AE8;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0000], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_0ABD;
labelFunc093A_0AE8:
	var0008 = [0xFFCF, 0xFFCE];
	enum();
labelFunc093A_0AF5:
	for (var0004 in var0008 with var001B to var001C) attend labelFunc093A_0B20;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0006], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_0AF5;
labelFunc093A_0B20:
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x61], 0x0005);
	var0003 = UI_delayed_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x61], 0x0007);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x0014);
	abort;
labelFunc093A_0B66:
	if (!(var0000 == 0x005E)) goto labelFunc093A_0C4D;
	UI_init_conversation();
	UI_show_npc_face0(0xFEFB, 0x0000);
	message("\"Kylista and Voldin have defiled these proceedings! False evidence hath been offered! This trial is a farce!\"");
	say();
	var0003 = Func08AC(false);
	message("\"");
	message(var0003);
	message(" is innocent! Set ");
	message(var0003);
	message(" and his companions free!\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"What doth this mean? The verdict hath changed...\"");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFCB, 0x0000);
	message("\"This means, dearest Lady, that the Oracle will proclaim any result which the secret levers request. I saw Alyssand instruct the Oracle to give this verdict, with my very own eyes!\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_0BDB;
	message("\"We are betrayed! Take Kylista from my sight! I shall deal with her perfidy later...\"");
	say();
	goto labelFunc093A_0BDF;
labelFunc093A_0BDB:
	message("\"We are betrayed! Take them from my sight! I shall deal with their perfidy later...\"");
	say();
labelFunc093A_0BDF:
	UI_end_conversation();
	Func097F(0xFFCB, "@Come with me...@", 0x0000);
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0C4C;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_si_path_run_usecode(0xFFCB, var0005, 0x000D, UI_get_npc_object(0xFFCB), 0x07F8, false);
labelFunc093A_0C4C:
	abort;
labelFunc093A_0C4D:
	if (!(var0000 == 0x005F)) goto labelFunc093A_0CEA;
	UI_move_object(0xFFCB, [0x0000, 0x0000, 0x0000]);
	UI_set_schedule_type(0xFFCB, 0x000F);
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0CE9;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000B);
	UI_si_path_run_usecode(0xFFCA, var0005, 0x000D, UI_get_npc_object(0xFFCA), 0x07F8, false);
	Func097F(0xFFCA, "@Vengeance shall be mine!@", 0x0000);
	Func097F(0xFFD2, "@Truth shall prevail!@", 0x0004);
labelFunc093A_0CE9:
	abort;
labelFunc093A_0CEA:
	if (!(var0000 == 0x0060)) goto labelFunc093A_0DA4;
	Func09AC(0xFFCA, 0x03DC, 0x0616, 0x0007);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_0D3A;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0062);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F8]);
	goto labelFunc093A_0DA3;
labelFunc093A_0D3A:
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0DA3;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_si_path_run_usecode(0xFFCD, var0005, 0x000D, UI_get_npc_object(0xFFCD), 0x07F8, false);
	Func097F(0xFFCD, "@She lied to me...@", 0x0000);
labelFunc093A_0DA3:
	abort;
labelFunc093A_0DA4:
	if (!(var0000 == 0x0061)) goto labelFunc093A_0DD1;
	Func09AC(0xFFCD, 0x03DC, 0x0617, 0x0007);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F8]);
labelFunc093A_0DD1:
	if (!(var0000 == 0x0062)) goto labelFunc093A_0ED2;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	var0003 = Func08AC(false);
	message("\"");
	message(var0003);
	message(", we have wronged thee. There is nothing I can do to erase our shame, but I would be pleased if thou wouldst accept a token of our regret.\"");
	say();
	message("\"Here is the Crystal Rose of Love...\"");
	say();
	var0003 = Func08AC(true);
	var0003 = Func099B(var0003, 0x0001, 0x0289, 0xFE99, 0x0003, 0x0000, true);
	Func095D(0x0190);
	if (!gflags[0x016F]) goto labelFunc093A_0EB9;
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0EB1;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	UI_move_object(0xFFD2, var0005);
	var0005[0x0002] = (var0005[0x0002] - 0x0008);
	UI_si_path_run_usecode(0xFFD2, var0005, 0x000D, UI_get_npc_object(0xFFD2), 0x07F8, false);
labelFunc093A_0EB1:
	UI_end_conversation();
	abort;
	goto labelFunc093A_0ED2;
labelFunc093A_0EB9:
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0066);
	var0000 = 0x0065;
labelFunc093A_0ED2:
	if (!(var0000 == 0x0063)) goto labelFunc093A_103C;
	UI_clear_item_say(0xFFD2);
	Func097F(0xFFD2, "@Good news!@", 0x0000);
	UI_set_schedule_type(0xFFD2, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFD2, [(byte)0x23, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x61]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_0F20:
	for (var0004 in var0008 with var001D to var001E) attend labelFunc093A_0F4B;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0004], (0x0002 + UI_get_random(0x0003)));
	goto labelFunc093A_0F20;
labelFunc093A_0F4B:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCF, 0xFFCE, 0xFFCC];
	enum();
labelFunc093A_0F64:
	for (var0004 in var0008 with var001F to var0020) attend labelFunc093A_0F93;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x61, (byte)0x59, 0x0006], (0x0004 + UI_get_random(0x0004)));
	goto labelFunc093A_0F64;
labelFunc093A_0F93:
	var0008 = [0xFFC9, 0xFFC3];
	enum();
labelFunc093A_0FA0:
	for (var0004 in var0008 with var0021 to var0022) attend labelFunc093A_0FCB;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0002], (0x0003 + UI_get_random(0x0003)));
	goto labelFunc093A_0FA0;
labelFunc093A_0FCB:
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_103B;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCB, var0005);
	UI_si_path_run_usecode(0xFFCB, [0x0406, 0x0670, 0x0000], 0x000D, UI_get_npc_object(0xFFCB), 0x07F8, false);
labelFunc093A_103B:
	abort;
labelFunc093A_103C:
	if (!(var0000 == 0x0064)) goto labelFunc093A_1117;
	UI_set_schedule_type(0xFFCB, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFCB, 0x0000);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_1072;
	message("\"We have captured the falsehearted traitor, Lady Yelinda! Kylista is in chains, and Great Captain Voldin hath been found dead...\"");
	say();
	goto labelFunc093A_1076;
labelFunc093A_1072:
	message("\"We have captured the falsehearted traitors, Lady Yelinda! Kylista and Voldin are in chains.\"");
	say();
labelFunc093A_1076:
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"Thou hast acted correctly, Jorvin -- the Oracle hath just denounced them...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"The Priestess of Beauty hath confessed to me that she and Great Captain Voldin were united in an evil conspiracy.\"");
	say();
	message("\"By use of secret levers, they dared to control the utterings of the sacred Oracle! Only by the actions of the brave ");
	message(var0001);
	message(" hath the Oracle been freed to utter the truth!\"");
	say();
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Who knows how long this deception hath been practiced! Have the citizens of Fawn always been the victims of the Great Captains and the Priestess?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I did mistrust thy words previously, Alyssand, but now that Kylista hath confessed... I know not what to believe.\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_10DC;
	message("\"Such perfidy makes my blood run cold. Have the Priestess jailed until I decide what fate she deserves!\"");
	say();
	message("\"As for Voldin's death -- that saves me the trouble of having him executed. Praise the deed!\"");
	say();
	goto labelFunc093A_10EF;
labelFunc093A_10DC:
	message("\"Such perfidy makes my blood run cold. Have the traitors jailed until I decide what fate they deserve!\"");
	say();
	Func09AC(0xFFCD, 0x03DC, 0x0617, 0x0007);
labelFunc093A_10EF:
	var0003 = UI_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8]);
	UI_end_conversation();
	Func09AC(0xFFCA, 0x03DC, 0x0616, 0x0007);
	abort;
labelFunc093A_1117:
	if (!(var0000 == 0x0065)) goto labelFunc093A_11C5;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	var0003 = Func08AC(false);
	message("\"I am sorry that we have delayed thee in thy quest, ");
	message(var0003);
	message(". Please forgive us.\"");
	say();
	message("\"Thou mayest leave Fawn freely, and be assured of a warm welcome if thou shouldst return. Thou hast shown me that I have much to learn about being a ruler... And I thank thee.\"");
	say();
	message("\"Guards, release ");
	message(var0003);
	message(".\"");
	say();
	UI_end_conversation();
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_11C4;
	var0004 = UI_find_nearby(var0003, 0x017D, 0x0003, 0x0008);
	if (!var0004) goto labelFunc093A_11C4;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(var0004, var0005, 0x000D, var0004, 0x07F8, false);
labelFunc093A_11C4:
	abort;
labelFunc093A_11C5:
	if (!(var0000 == 0x0066)) goto labelFunc093A_11EC;
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_11EC:
	if (!(var0000 == 0x0067)) goto labelFunc093A_12C7;
	var0003 = UI_find_nearby(item, 0x017A, 0x0005, 0x0000);
	enum();
labelFunc093A_1208:
	for (var0008 in var0003 with var0023 to var0024) attend labelFunc093A_1232;
	if (!(UI_get_item_frame(var0008) == 0x0005)) goto labelFunc093A_122F;
	UI_play_sound_effect(0x0075);
	UI_remove_item(var0008);
labelFunc093A_122F:
	goto labelFunc093A_1208;
labelFunc093A_1232:
	var0003 = UI_find_nearby(item, 0x017A, 0x0032, 0x0000);
	enum();
labelFunc093A_1244:
	for (var0008 in var0003 with var0025 to var0026) attend labelFunc093A_1267;
	if (!(UI_get_item_frame(var0008) == 0x0006)) goto labelFunc093A_1264;
	UI_remove_item(var0008);
labelFunc093A_1264:
	goto labelFunc093A_1244;
labelFunc093A_1267:
	var0003 = (UI_find_nearby(item, 0x01B1, 0x0032, 0x0000) & UI_find_nearby(item, 0x0178, 0x0032, 0x0000));
	enum();
labelFunc093A_1288:
	for (var0008 in var0003 with var0027 to var0028) attend labelFunc093A_12AD;
	if (!(UI_get_item_quality(var0008) == 0x0028)) goto labelFunc093A_12AA;
	Func0907(var0008, 0x0000);
labelFunc093A_12AA:
	goto labelFunc093A_1288;
labelFunc093A_12AD:
	var0003 = UI_execute_usecode_array(item, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_12C7:
	if (!(var0000 == 0x0068)) goto labelFunc093A_1337;
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_1336;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0001] = (var0005[0x0001] + 0x0003);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(item, var0005, 0x000D, item, 0x07F8, false);
labelFunc093A_1336:
	abort;
labelFunc093A_1337:
	if (!(var0000 == 0x0069)) goto labelFunc093A_1406;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_schedule_type(item, 0x000A);
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@This trial is now dismissed!@"]);
	var0003 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCC, 0xFFCF, 0xFFCE, 0xFFC9, 0xFFC3, 0xFFCB, 0xFFD2];
	enum();
labelFunc093A_138E:
	for (var0004 in var0003 with var0029 to var002A) attend labelFunc093A_13E2;
	UI_run_schedule(var0004);
	var0008 = UI_get_random(0x0008);
	var0005 = [(byte)0x23];
labelFunc093A_13B2:
	if (!(var0008 > 0x0000)) goto labelFunc093A_13D2;
	var0005 = (var0005 & (byte)0x61);
	var0008 = (var0008 - 0x0001);
	goto labelFunc093A_13B2;
labelFunc093A_13D2:
	var0008 = UI_execute_usecode_array(var0004, var0005);
	goto labelFunc093A_138E;
labelFunc093A_13E2:
	gflags[0x0173] = false;
	gflags[0x0174] = false;
	gflags[0x0175] = false;
	gflags[0x0170] = true;
	if (!gflags[0x016E]) goto labelFunc093A_1406;
	UI_run_schedule(0xFFCA);
	UI_run_schedule(0xFFCD);
labelFunc093A_1406:
	return;
}


