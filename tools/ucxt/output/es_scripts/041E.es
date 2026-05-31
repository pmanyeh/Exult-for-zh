#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func041E object#(0x41E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc041E_0191;
	UI_show_npc_face(0xFFE2, 0x0000);
	var0000 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	var0001 = Func08F7(0xFFFD);
	if (!(gflags[0x006B] || var0001)) goto labelFunc041E_0043;
	UI_add_answer("Shamino");
labelFunc041E_0043:
	if (!(!gflags[0x009F])) goto labelFunc041E_0055;
	message("This lovely actress is dressed in a mouse costume.");
	say();
	gflags[0x009F] = true;
	goto labelFunc041E_0059;
labelFunc041E_0055:
	message("\"Hello, there!\" Amber says.");
	say();
labelFunc041E_0059:
	converse attend labelFunc041E_018C;
	case "name" attend labelFunc041E_006F:
	message("\"I am Amber.\"");
	say();
	UI_remove_answer("name");
labelFunc041E_006F:
	case "job" attend labelFunc041E_008B:
	message("\"I am an actress at the Royal Theatre. I am playing the role of Sherry the Mouse in the new play.\"");
	say();
	UI_add_answer(["Royal Theatre", "Sherry", "play"]);
labelFunc041E_008B:
	case "Royal Theatre" attend labelFunc041E_00AB:
	message("\"'Tis a lovely space in which to perform. I have dedicated my life to acting, thou knowest.\"");
	say();
	UI_remove_answer("Royal Theatre");
	UI_add_answer(["space", "dedicated"]);
labelFunc041E_00AB:
	case "space" attend labelFunc041E_00BE:
	message("\"Raymundo himself had a hand in the design of the theatre.\"");
	say();
	UI_remove_answer("space");
labelFunc041E_00BE:
	case "dedicated" attend labelFunc041E_00D1:
	message("\"Actually, this will be my debut theatrical performance. I have been working as a barmaid waiting for my first chance to be in the theatre.\"");
	say();
	UI_remove_answer("dedicated");
labelFunc041E_00D1:
	case "play" attend labelFunc041E_00E4:
	message("\"Between thee and me, methinks the play stinks.\" She winks at you.");
	say();
	UI_remove_answer("play");
labelFunc041E_00E4:
	case "Sherry" attend labelFunc041E_0104:
	message("\"Canst thou imagine such drivel? I do not believe there ever was a Sherry the Mouse. Who ever heard of a mouse that could talk! Especially these lines! I would rather play a queen. Much more fitting for me, I would say.\"");
	say();
	UI_remove_answer("Sherry");
	UI_add_answer(["lines", "queen"]);
labelFunc041E_0104:
	case "lines" attend labelFunc041E_0117:
	message("\"I have to memorize this preposterous children's story called 'Hubert's Hair-Raising Adventure'.");
	say();
	UI_remove_answer("lines");
labelFunc041E_0117:
	case "queen" attend labelFunc041E_012A:
	message("\"I asked Raymundo about this and he threw a tantrum. He said that it would not be historically accurate. Ha! As if that were something of any significance!\"");
	say();
	UI_remove_answer("queen");
labelFunc041E_012A:
	case "Shamino" attend labelFunc041E_017E:
	var0001 = Func08F7(0xFFFD);
	if (!var0001) goto labelFunc041E_016B;
	message("\"Poo Poo Head!\" she cries. She then rushes to him and kisses him full on the mouth. Shamino turns red and shuffles his feet.*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Not in front of the Avatar, Poo!\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFE2, 0x0000);
	message("\"To blazes with the Avatar!\" She kisses him again. \"The Avatar is the last one who will convince thee to settle down.\"");
	say();
	goto labelFunc041E_016F;
labelFunc041E_016B:
	message("\"Dost thou know my beau? He is probably drowning his sorrows at the Blue Boar. The lazy knave! I will not let him go about adventuring. It is time for him to settle down. Thou canst tell him I said so!\"");
	say();
labelFunc041E_016F:
	gflags[0x006D] = true;
	gflags[0x006E] = true;
	UI_remove_answer("Shamino");
labelFunc041E_017E:
	case "bye" attend labelFunc041E_0189:
	goto labelFunc041E_018C;
labelFunc041E_0189:
	goto labelFunc041E_0059;
labelFunc041E_018C:
	endconv;
	message("\"Adieu!\"*");
	say();
labelFunc041E_0191:
	if (!(event == 0x0000)) goto labelFunc041E_0211;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFE2));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc041E_020B;
	if (!(var0003 == 0x0001)) goto labelFunc041E_01CE;
	var0004 = "@Hubert the Lion was...@";
labelFunc041E_01CE:
	if (!(var0003 == 0x0002)) goto labelFunc041E_01DE;
	var0004 = "@Why do I say that?@";
labelFunc041E_01DE:
	if (!(var0003 == 0x0003)) goto labelFunc041E_01EE;
	var0004 = "@My costume is too big.@";
labelFunc041E_01EE:
	if (!(var0003 == 0x0004)) goto labelFunc041E_01FE;
	var0004 = "@I -hate- my lines!@";
labelFunc041E_01FE:
	UI_item_say(0xFFE2, var0004);
	goto labelFunc041E_0211;
labelFunc041E_020B:
	Func092E(0xFFE2);
labelFunc041E_0211:
	return;
}


