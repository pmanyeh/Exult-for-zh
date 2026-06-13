#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AD 0x9AD (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func0900 0x900 (var var0000);
extern var Func095B 0x95B (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0988 0x988 (var var0000, var var0001);

void Func041F object#(0x41F) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0007) && UI_get_item_flag(0xFFE1, 0x001D))) goto labelFunc041F_0088;
	UI_show_npc_face0(0xFFE1, 0x0000);
	UI_clear_item_flag(0xFFE1, 0x001D);
	UI_reduce_health(0xFFE1, 0x0032, 0x0000);
	var0003 = Func0992(0x0001, 0x0000, 0x0000, true);
	Func097F(var0003, "@The witch is dead!@", 0x0005);
	message("\"With my dying breath, I place the Curse of the Red Witch upon thee!\"");
	say();
	message("\"Arrgh...\"");
	say();
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x016B], 0x0005);
labelFunc041F_0088:
	if (!(event == 0x0001)) goto labelFunc041F_00BD;
	UI_item_say(0xFE9C, "@Listen, witch!@");
	Func097F(0xFFE1, "@Cretin!@", 0x0005);
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x55, 0x041F]);
labelFunc041F_00BD:
	if (!(event == 0x0009)) goto labelFunc041F_01E4;
	UI_show_npc_face0(0xFFE1, 0x0000);
	if (!(!gflags[0x0133])) goto labelFunc041F_014A;
	message("\"So, thou hast come to rescue thy friend? Well, thou must kill me first -- I have the only key to his cell!\"");
	say();
	message("\"Or wilt thou tell me the secret which I desire, the key to controlling Daemons!!!\"");
	say();
	var0003 = Func0992(0x0001, "@But we know nothing about gargoyles... er, Daemons.@", "@But I know nothing of Daemons...@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Then thou shalt die, liar.\"");
	say();
	Func09AD(0xFFE1);
	UI_clear_item_say(0xFFE1);
	Func097F(0xFFE1, "@Kill the Avatar!@", 0x0000);
	Func09AC(0xFFE1, 0xFFFF, 0x0000, 0x0000);
	var0004 = UI_find_nearby(item, 0x016B, 0x001E, 0x0000);
	enum();
labelFunc041F_0133:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc041F_0147;
	Func09AD(var0007);
	goto labelFunc041F_0133;
labelFunc041F_0147:
	goto labelFunc041F_01E0;
labelFunc041F_014A:
	message("\"I am tired of playing games with thee, ");
	message(var0002);
	message(". Thou must either give me thy secrets, or kill me -- I have the only key to this chamber!\"");
	say();
	message("\"This is thy last chance -- wilt thou tell me the secret which I desire, the key to controlling Daemons!!!\"");
	say();
	if (!Func0955()) goto labelFunc041F_01BA;
	message("\"Thou shalt not live to regret this. Open thy mind to me!\"");
	say();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFFE1, 0x000A);
	UI_set_schedule_type(0xFE9C, 0x000F);
	gflags[0x0007] = true;
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Ugh...@", (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x52, "@Mine head!@", (byte)0x27, 0x0006, (byte)0x55, 0x041F]);
	abort;
	goto labelFunc041F_01E0;
labelFunc041F_01BA:
	message("\"Then thou shalt die with thy secret, Avatar...\"");
	say();
	Func09AD(0xFFE1);
	Func097F(0xFFE1, "@Die, fool!@", 0x0000);
	Func09AC(0xFFE1, 0xFFFF, 0x0000, 0x0000);
	abort;
labelFunc041F_01E0:
	gflags[0x0148] = true;
labelFunc041F_01E4:
	if (!(event == 0x0002)) goto labelFunc041F_09AA;
	if (!gflags[0x000A]) goto labelFunc041F_020D;
	gflags[0x000A] = false;
	UI_set_schedule_type(0xFFE1, 0x0003);
	Func097F(0xFFE1, "@Surprised, Avatar?@", 0x0003);
	abort;
labelFunc041F_020D:
	if (!gflags[0x0009]) goto labelFunc041F_027A;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0862, 0x0835, 0x0000]);
	UI_move_object(0xFFE1, [0x086F, 0x0822, 0x0000]);
	gflags[0x0009] = false;
	gflags[0x000A] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636, (byte)0x27, 0x0008, (byte)0x55, 0x041F], 0x0005);
	abort;
labelFunc041F_027A:
	if (!gflags[0x0008]) goto labelFunc041F_02C7;
	UI_set_schedule_type(0xFE9C, 0x001F);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6E, (byte)0x01, (byte)0x78, 0x0064, 0x0002, (byte)0x6E, (byte)0x6E]);
	gflags[0x0008] = false;
	Func09AC(0xFFE1, 0xFFFF, 0x0000, 0x0000);
	abort;
labelFunc041F_02C7:
	if (!gflags[0x0007]) goto labelFunc041F_0352;
	var0008 = UI_get_object_position(0xFE9C);
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x001B, (var0008[0x0001] - 0x0001), (var0008[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0007] = false;
	gflags[0x0008] = true;
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6E, (byte)0x01, (byte)0x55, 0x041F, (byte)0x6E], 0x0008);
	abort;
labelFunc041F_0352:
	if (!(gflags[0x0134] && (!gflags[0x00EA]))) goto labelFunc041F_03AF;
	UI_show_npc_face0(0xFED2, 0x0000);
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc041F_037C;
	message("\"I am speaking to thee from beyond the grave. I shall have vengeance!\"");
	say();
	abort;
	goto labelFunc041F_03AF;
labelFunc041F_037C:
	message("\"Greetings, Stranger from Another Land. Once again, I am speaking to thee by means of a magic scroll.\"");
	say();
	var0009 = UI_get_npc_name((0x0000 - UI_get_npc_id(0xFFE1)));
	message("\"If thou art looking for thy companion, ");
	message(var0009);
	message(", look no further -- I have kidnapped him.\"");
	say();
	message("\"Since thou wilt not give me thy secrets, I shall obtain them from him!\"");
	say();
	message("\"Farewell, ");
	message(var0002);
	message("...\"");
	say();
	gflags[0x00EA] = true;
	abort;
labelFunc041F_03AF:
	if (!((gflags[0x00D7] == true) && (!gflags[0x00E9]))) goto labelFunc041F_0663;
	gflags[0x00E9] = true;
	var000A = false;
	var000B = false;
	var000C = false;
	var000D = UI_get_array_size(UI_get_party_list());
	UI_show_npc_face0(0xFED2, 0x0000);
	message("\"Greetings, Stranger from Another Land. I am speaking to thee by means of this magic scroll -- there is no need to be afraid.\"");
	say();
	var000E = Func0900(0x0002);
	if (!(var000E != false)) goto labelFunc041F_0448;
	UI_show_npc_face1(var000E[0x0001], 0x0000);
	message("\"Afraid? Why, the Avatar is not afraid of magic.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"But all barbarians fear sorcery.\"");
	say();
	UI_show_npc_face1(var000E[0x0002], 0x0000);
	var0003 = Func095B(var000E[0x0001]);
	message("\"Be quiet, ");
	message(var0003);
	message(". That witch can hear thee through that scroll!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Who said that! Death draws near for those who taunt Rotoluncia the Red Witch.\"");
	say();
labelFunc041F_0448:
	UI_add_answer(["magic", "Council", "not afraid", "bye"]);
labelFunc041F_045B:
	converse attend labelFunc041F_0662;
	case "magic" attend labelFunc041F_04DC:
	UI_remove_answer("magic");
	message("\"I am the most powerful wizard in this city, and I could teach thee many things -- if thou wert not a mere Mundane.\"");
	say();
	var000E = Func0900(0x0002);
	if (!(var000E != false)) goto labelFunc041F_04D0;
	UI_show_npc_face1(var000E[0x0001], 0x0000);
	message("\"But the Avatar is not a Mundane...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"What is this that they say?\"");
	say();
	UI_show_npc_face1(var000E[0x0002], 0x0000);
	var0003 = Func095B(var000E[0x0001]);
	message("\"Thou dost speak overly much, ");
	message(var0003);
	message(".\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc041F_04D0:
	message("\"Thou art not a mage, or I would have detected thy powers by now.\"");
	say();
	message("\"Or... perhaps thou dost shield thine abilities from my senses? Most interesting...\"");
	say();
	var000A = true;
labelFunc041F_04DC:
	case "Council" attend labelFunc041F_04F7:
	UI_remove_answer("Council");
	message("\"So my servant told thee that I sit on the Council of Mages? Perhaps I shall dismantle him to adjust a loose tongue...\"");
	say();
	message("\"Indeed, I am one of the Three who rule this city, along with Gustacio the Decrepit, and that weak-willed profligate, Filbercio.\"");
	say();
	var000B = true;
labelFunc041F_04F7:
	case "not afraid" attend labelFunc041F_0511:
	UI_remove_answer("not afraid");
	message("\"Thou dost surprise me. Most Mundanes are frightened by the very idea of sorcery.\"");
	say();
	UI_add_answer("Mundanes");
labelFunc041F_0511:
	case "Mundanes" attend labelFunc041F_056A:
	UI_remove_answer("Mundanes");
	message("\"Indeed, thou art from a distant land if thou dost not know such a common term.\"");
	say();
	message("\"The world is divided into two sorts of Men -- those who can handle magics, and mere ordinary folk.\"");
	say();
	var000F = [];
	if (!(var000D > 0x0001)) goto labelFunc041F_055C;
	var000F = "and thy companion";
	if (!(var000D > 0x0002)) goto labelFunc041F_0552;
	var000F = (var000F + "s");
labelFunc041F_0552:
	var000F = (var000F + " ");
labelFunc041F_055C:
	message("\"Common folk such as thee ");
	message(var000F);
	message("are known as the Mundane.\"");
	say();
	var000C = true;
labelFunc041F_056A:
	case "bye" attend labelFunc041F_065F:
	message("\"Not so fast! Thou shouldst know that I met with thine ally, the fat and loathsome sage called Batlin...\"");
	say();
	message("\"He travelled with a Daemon named Palos. Where did Batlin obtain such power? If I had this power, I could rule Serpent Isle!\"");
	say();
	message("\"Reveal to me the secret of controlling Daemonfolk, and I shall reward thee with power beyond thy comprehension.\"");
	say();
	if (!Func0955()) goto labelFunc041F_065A;
	message("\"Then open thy mind to me, and let me withdraw the knowledge which I lust after!\"");
	say();
	var0010 = Func0992(0x0001, "@No, my friend. Thou must not...!@", 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc041F_060C;
	UI_set_npc_id(0xFFE1, (0x0000 - var0010));
	UI_set_conversation_slot(0x0000);
	message("\"Thy friends must learn not to interfere in the interests of mages. Let them learn now!!!\"");
	say();
	var0008 = UI_get_object_position(var0010);
	UI_obj_sprite_effect(UI_get_npc_object(var0010), 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0011 = UI_create_new_object(0x037F);
	if (!var0011) goto labelFunc041F_0609;
	UI_set_item_flag(var0011, 0x0012);
	var0004 = UI_update_last_created(var0008);
labelFunc041F_0609:
	goto labelFunc041F_0657;
labelFunc041F_060C:
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000F);
	gflags[0x0007] = true;
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Ugh...@", (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x52, "@Mine head!@", (byte)0x27, 0x0006, (byte)0x55, 0x041F]);
	abort;
labelFunc041F_0657:
	goto labelFunc041F_065E;
labelFunc041F_065A:
	message("\"I shall contact thee again, when perhaps thou shalt be more receptive to mine offers. Adieu.\"");
	say();
labelFunc041F_065E:
	abort;
labelFunc041F_065F:
	goto labelFunc041F_045B;
labelFunc041F_0662:
	endconv;
labelFunc041F_0663:
	if (!(gflags[0x00DD] && (!gflags[0x00EA]))) goto labelFunc041F_09AA;
	UI_move_object(0xFFE7, [0x09B9, 0x0715, 0x0000]);
	UI_set_schedule_type(0xFFE7, 0x000F);
	UI_set_item_flag(0xFFE7, 0x001D);
	var0010 = (0x0000 - UI_get_npc_id(0xFFE1));
	if (!((var0010 == 0x0000) || UI_get_item_flag(var0010, 0x0004))) goto labelFunc041F_072E;
	var0004 = [];
	if (!(!UI_get_item_flag(0xFFFE, 0x0004))) goto labelFunc041F_06D6;
	var0004 = (var0004 & 0xFFFE);
labelFunc041F_06D6:
	if (!(gflags[0x0078] && (!UI_get_item_flag(0xFFFD, 0x0004)))) goto labelFunc041F_06F2;
	var0004 = (var0004 & 0xFFFD);
labelFunc041F_06F2:
	if (!(gflags[0x00B7] && (!UI_get_item_flag(0xFFFF, 0x0004)))) goto labelFunc041F_070E;
	var0004 = (var0004 & 0xFFFF);
labelFunc041F_070E:
	if (!var0004) goto labelFunc041F_0728;
	var0010 = var0004[UI_get_random(UI_get_array_size(var0004))];
	goto labelFunc041F_072E;
labelFunc041F_0728:
	var0010 = 0xFE9C;
labelFunc041F_072E:
	gflags[0x00EA] = true;
	if (!(var0010 != 0xFE9C)) goto labelFunc041F_0924;
	UI_set_npc_id(0xFFE1, (0x0000 - var0010));
	if (!UI_npc_nearby(var0010)) goto labelFunc041F_07E9;
	UI_show_npc_face0(var0010, 0x0000);
	message("\"What! What's happening...\"");
	say();
	var0008 = UI_get_object_position(var0010);
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x001A, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = Func095B(var0010);
	var0003 = Func0992(0x0001, (("@" + var0009) + "!"), 0x0000, true);
	Func097F(0xFE9C, "@Where did he go!@", 0x0002);
	goto labelFunc041F_08DC;
labelFunc041F_07E9:
	gflags[0x0134] = true;
	gflags[0x00EA] = false;
	var0012 = UI_create_new_object(0x02C3);
	if (!var0012) goto labelFunc041F_0861;
	UI_set_item_frame(var0012, 0x0006);
	var0004 = UI_set_item_quality(var0012, 0x001F);
	var0008 = UI_get_object_position(0xFE9C);
	var0004 = UI_update_last_created(var0008);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!var0004) goto labelFunc041F_085E;
	var0003 = Func0992(0x0001, "@Look! A scroll!@", "@A scroll...@", true);
labelFunc041F_085E:
	goto labelFunc041F_08DC;
labelFunc041F_0861:
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x001F, 0x0006, 0x0012, false);
	if (!((var0004[0x0001] == 0x0000) && (var0004[0x0002] == 0x0000))) goto labelFunc041F_08A5;
	var0003 = Func0992(0x0001, "@Thou hast a scroll!@", "@A scroll!@", true);
	goto labelFunc041F_08DC;
labelFunc041F_08A5:
	if (!(var0004[0x0001] == 0x0000)) goto labelFunc041F_08C5;
	var0003 = Func0992(0x0001, "@Look! A scroll!@", "@A scroll...@", true);
	goto labelFunc041F_08DC;
labelFunc041F_08C5:
	var0003 = Func0992(UI_get_npc_number(var0004[0x0001]), "@Look what I have!@", "@Thou hast a scroll!@", true);
labelFunc041F_08DC:
	if (!UI_get_item_flag(var0010, 0x0006)) goto labelFunc041F_08F0;
	UI_remove_from_party(var0010);
labelFunc041F_08F0:
	UI_set_new_schedules(var0010, 0x0000, 0x0007, [0x0858, 0x0837]);
	UI_run_schedule(var0010);
	UI_move_object(var0010, [0x0858, 0x0837, 0x0000]);
	abort;
	goto labelFunc041F_09AA;
labelFunc041F_0924:
	gflags[0x0133] = true;
	var0004 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc041F_093A:
	for (var0012 in var0004 with var0013 to var0014) attend labelFunc041F_095E;
	UI_remove_from_party(var0012);
	Func09AC(var0012, 0xFFFF, 0x0000, 0x000C);
	goto labelFunc041F_093A;
labelFunc041F_095E:
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x001A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x041F], 0x000D);
	gflags[0x0009] = true;
	abort;
labelFunc041F_09AA:
	return;
}


