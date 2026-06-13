#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08AA 0x8AA ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0439 object#(0x439) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0439_0041;
	UI_item_say(0xFE9C, "@Greetings.@");
	0xFFC7->Func07D1();
	Func097F(0xFFC7, "@What dost thou want?@", 0x0005);
	UI_set_schedule_type(0xFFC7, 0x0003);
labelFunc0439_0041:
	if (!(event == 0x0009)) goto labelFunc0439_01B3;
	UI_run_schedule(0xFFC7);
	UI_clear_item_say(0xFFC7);
	UI_show_npc_face0(0xFFC7, 0x0000);
	var0003 = UI_get_item_flag(0xFFC7, 0x001C);
	if (!(var0003 == false)) goto labelFunc0439_00A5;
	if (!(gflags[0x003E] == true)) goto labelFunc0439_0094;
	if (!(var0001 == true)) goto labelFunc0439_008D;
	message("\"Bold wench, thou art, to wear a tattoo so openly.\"");
	say();
	goto labelFunc0439_0091;
labelFunc0439_008D:
	message("\"Be careful, mate, lest thou be mistaken for an honest seafarin' man.\"");
	say();
labelFunc0439_0091:
	goto labelFunc0439_0098;
labelFunc0439_0094:
	message("\"I have business to attend to. Be quick.\"");
	say();
labelFunc0439_0098:
	UI_set_item_flag(0xFFC7, 0x001C);
	goto labelFunc0439_00A9;
labelFunc0439_00A5:
	message("\"Returned again?\"");
	say();
labelFunc0439_00A9:
	if (!(gflags[0x015D] == true)) goto labelFunc0439_00B8;
	UI_add_answer("assassin");
labelFunc0439_00B8:
	UI_add_answer(["name", "job", "goblins", "storms"]);
	if (!(gflags[0x0004] == true)) goto labelFunc0439_00DA;
	UI_add_answer("Iolo the Mad");
labelFunc0439_00DA:
	UI_add_answer("bye");
labelFunc0439_00E1:
	converse attend labelFunc0439_01B2;
	case "name" attend labelFunc0439_00F7:
	message("\"Second Mate Kalen, to ye.\"");
	say();
	UI_remove_answer("name");
labelFunc0439_00F7:
	case "job" attend labelFunc0439_010A:
	message("\"I'm a seafarer. And I do whate'er the Cap'n wants done.\"");
	say();
	UI_remove_answer("job");
labelFunc0439_010A:
	case "goblins" attend labelFunc0439_011D:
	UI_remove_answer("goblins");
	message("\"Green fellows. Hospitable. Be thou sure to accept their dinner invitation.\"");
	say();
labelFunc0439_011D:
	case "storms" attend labelFunc0439_0143:
	UI_remove_answer("storms");
	message("\"Afraid of a bit of rain?\"");
	say();
	if (!(var0001 == true)) goto labelFunc0439_013F;
	message("\"I can keep ye safe, darlin'. Thou shouldst come over ta mine hut...\"");
	say();
	goto labelFunc0439_0143;
labelFunc0439_013F:
	message("\"Run back to town like a good boy. I am sure the Lady would find ye an interesting pet.\"");
	say();
labelFunc0439_0143:
	case "assassin" attend labelFunc0439_0164:
	message("\"Thou art hard to catch, Avatar. But now thou must die!\"");
	say();
	UI_set_schedule_type(0xFFC7, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFC7);
	abort;
labelFunc0439_0164:
	case "Iolo the Mad" attend labelFunc0439_0185:
	message("\"He is Master of Fawn now, Avatar. Thou wouldst be wise to leave while it amuses him to let ye live.\" *\"He might grant to me that fine wench, Alyssand, if I bring him thine head...\"");
	say();
	UI_set_schedule_type(0xFFC7, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFC7);
	abort;
labelFunc0439_0185:
	case "bye" attend labelFunc0439_01AF:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	Func097F(0xFFC7, "@Good riddance.@", 0x0005);
	Func08AA();
	goto labelFunc0439_01B2;
labelFunc0439_01AF:
	goto labelFunc0439_00E1;
labelFunc0439_01B2:
	endconv;
labelFunc0439_01B3:
	if (!(event == 0x0002)) goto labelFunc0439_01DF;
	if (!UI_get_item_flag(0xFFC7, 0x0004)) goto labelFunc0439_01C9;
	abort;
labelFunc0439_01C9:
	Func097F(0xFFC7, "@I shall return!@", 0x0000);
	UI_set_attack_mode(0xFFC7, 0x0007);
labelFunc0439_01DF:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFC7, 0x001D))) goto labelFunc0439_0252;
	gflags[0x015D] = true;
	UI_show_npc_face0(0xFFC7, 0x0000);
	UI_clear_item_flag(0xFFC7, 0x001D);
	UI_reduce_health(0xFFC7, 0x0032, 0x0000);
	Func097F(0xFFC7, "@Urgghh...@", 0x0000);
	var0004 = Func0992(0x0001, 0x0000, 0x0000, true);
	Func097F(var0004, "@He is dead...@", 0x0005);
	if (!(gflags[0x0004] == true)) goto labelFunc0439_024E;
	message("\"Thou canst defeat me, Avatar. But thou hast no hope against the power of Iolo the Mad...\"");
	say();
	goto labelFunc0439_0252;
labelFunc0439_024E:
	message("\"My death only delays the inevitable, Avatar. Batlin will soon have more power than thou canst dream of, and my reward will be sure...\"");
	say();
labelFunc0439_0252:
	return;
}


