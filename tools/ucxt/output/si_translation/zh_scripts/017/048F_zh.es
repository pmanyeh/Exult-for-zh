#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func048F object#(0x48F) ()
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

	if (!(event == 0x0001)) goto labelFunc048F_0028;
	UI_item_say(0xFE9C, "@Greetings@");
	Func097F(0xFF71, "@We knew thou would come.@", 0x0003);
	UI_set_schedule_type(0xFF71, 0x0003);
labelFunc048F_0028:
	if (!(event == 0x0009)) goto labelFunc048F_0448;
	UI_run_schedule(0xFF71);
	UI_clear_item_say(0xFF71);
	UI_show_npc_face0(0xFF71, 0x0000);
	var0000 = Func097D(0xFE9B, 0x0001, 0x032A, 0x0009, 0x0002);
	var0001 = UI_get_item_flag(0xFF71, 0x001C);
	if (!var0001) goto labelFunc048F_0077;
	message("\"We meet again.\"");
	say();
	goto labelFunc048F_007B;
labelFunc048F_0077:
	message("\"Thou art Avatar!\"");
	say();
labelFunc048F_007B:
	UI_add_answer(["name", "bye"]);
	if (!var0000) goto labelFunc048F_0095;
	UI_add_answer("got blood");
labelFunc048F_0095:
	converse attend labelFunc048F_0447;
	case "got blood" attend labelFunc048F_00AC:
	UI_remove_answer("got blood");
	message("\"Hurry! Take Ice Dragon blood to Yenani! No time to delay!\"");
	say();
	abort;
labelFunc048F_00AC:
	case "name" attend labelFunc048F_00D6:
	UI_remove_answer("name");
	message("\"I am Baiyanda, mate of Mwaerno and healer for Gwani people.\"");
	say();
	UI_set_item_flag(0xFF71, 0x001C);
	UI_add_answer(["Mwaerno", "healer"]);
labelFunc048F_00D6:
	case "Mwaerno" attend labelFunc048F_00F6:
	UI_remove_answer("Mwaerno");
	message("\"He great hunter. Mwaerno and Baiyanda joined by Yenani many years ago.\"");
	say();
	UI_add_answer(["hunter", "Yenani"]);
labelFunc048F_00F6:
	case "hunter" attend labelFunc048F_0109:
	UI_remove_answer("hunter");
	message("\"Myauri Master Hunter of Gwani. He know where game are and how to find. But Mwaerno best at catching game. I very proud of him.\"");
	say();
labelFunc048F_0109:
	case "Yenani" attend labelFunc048F_0123:
	UI_remove_answer("Yenani");
	message("\"She our chieftain. Gwani people always led by females. Yenani good friend of Gwenno.\"");
	say();
	UI_add_answer("Gwenno");
labelFunc048F_0123:
	case "Gwenno" attend labelFunc048F_015C:
	UI_remove_answer("Gwenno");
	var0002 = UI_get_schedule_type(0xFF6B);
	if (!(var0002 == 0x000F)) goto labelFunc048F_0158;
	message("\"Gwenno dead. She good woman. Very generous. She once make gift of bucket to Baiyanda. Baiyanda place body at sacred Gwani Death Temple.\"");
	say();
	gflags[0x0262] = true;
	UI_add_answer("Where is the temple?");
	goto labelFunc048F_015C;
labelFunc048F_0158:
	message("\"Baiyanda happy that Gwenno alive again!\"");
	say();
labelFunc048F_015C:
	case "Where is the temple?" attend labelFunc048F_016F:
	UI_remove_answer("Where is the temple?");
	message("\"It not thing for thou to know. Gwenno must rest now, her soul rest. Leave her. I know it painful, but thou must do this. Even if thou found her thou could not unseal her body without sacred horn of Gwani. Long ago it taken by fiend who steals our dead from us.\"");
	say();
labelFunc048F_016F:
	case "healer" attend labelFunc048F_018F:
	UI_remove_answer("healer");
	message("\"I treat all wounds and illness of Gwani people. Baiyanda not use ways of human healers. Gwani live simple in balance with nature, not force on nature. Gwani healers learn secrets of herbs and animals. If thou need healer, I will help thou.\"");
	say();
	UI_add_answer(["I need a healer", "herbs and animals"]);
labelFunc048F_018F:
	case "I need a healer" attend labelFunc048F_02CD:
	UI_remove_answer("I need a healer");
	message("\"Rest easy. I will help thou.\"");
	say();
	message("\"Who thou want to heal?\"");
	say();
	var0003 = Func098E();
	var0003 = (0x0000 & var0003);
	var0004 = ["nobody"];
	enum();
labelFunc048F_01C0:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc048F_01E7;
	if (!(!(var0007 == 0x0000))) goto labelFunc048F_01E4;
	var0004 = (var0004 & UI_get_npc_name(var0007));
labelFunc048F_01E4:
	goto labelFunc048F_01C0;
labelFunc048F_01E7:
	var0008 = Func0957(var0004);
	var0008 = var0003[var0008];
	if (!(var0008 == 0x0000)) goto labelFunc048F_020A;
	message("\"Maybe thou return later.\"");
	say();
	goto labelFunc048F_02CD;
labelFunc048F_020A:
	var0009 = UI_get_npc_number(var0008);
	var000A = UI_get_item_flag(var0008, 0x0008);
	var000B = UI_get_npc_prop(var0008, 0x0000);
	var000C = UI_get_npc_prop(var0008, 0x0003);
	var000D = UI_get_npc_name(var0008);
	if (!(var000B > var000C)) goto labelFunc048F_0276;
	var000E = (var000B - var000C);
	var000F = UI_set_npc_prop(var0009, 0x0003, var000E);
	message("\"All right, ");
	message(var000D);
	message(" healed now!\"");
	say();
	goto labelFunc048F_02B7;
labelFunc048F_0276:
	if (!(var000A == false)) goto labelFunc048F_029C;
	if (!(var0009 == 0xFE9C)) goto labelFunc048F_028F;
	message("\"Thou not hurt!\"");
	say();
	goto labelFunc048F_0299;
labelFunc048F_028F:
	message("\"");
	message(var000D);
	message(" not hurt! Thou play trick?\"");
	say();
labelFunc048F_0299:
	goto labelFunc048F_02B7;
labelFunc048F_029C:
	if (!(var0009 == 0xFE9C)) goto labelFunc048F_02AD;
	message("\"Thou poisoned bad! I fix.\"");
	say();
	goto labelFunc048F_02B7;
labelFunc048F_02AD:
	message("\"");
	message(var000D);
	message(" poisoned bad! I fix.\"");
	say();
labelFunc048F_02B7:
	if (!(var000A == true)) goto labelFunc048F_02CD;
	UI_clear_item_flag(var0008, 0x0008);
	message("\"Good! Poison gone now.\"");
	say();
labelFunc048F_02CD:
	case "herbs and animals" attend labelFunc048F_02F0:
	UI_remove_answer("herbs and animals");
	message("\"Magic corrupts balance of nature. Gwani healers learn things like prepare dried fish and use Ice Dragon blood.\"");
	say();
	UI_add_answer(["balance of nature", "dried fish", "Ice Dragon blood"]);
labelFunc048F_02F0:
	case "balance of nature" attend labelFunc048F_0303:
	UI_remove_answer("balance of nature");
	message("\"To Gwani, best way to live -- only way -- to live in harmony with nature. And so we not do anything that force nature.\"");
	say();
labelFunc048F_0303:
	case "dried fish" attend labelFunc048F_0348:
	UI_remove_answer("dried fish");
	message("\"Dried fish very good food. It keeps thou from hunger longer than other food.\"");
	say();
	message("\"Would thou like some?\"");
	say();
	var0010 = Func0955();
	if (!var0010) goto labelFunc048F_0344;
	message("\"Here, have some. It good.\"");
	say();
	var0011 = Func099B(0xFE9C, 0x0001, 0x01FD, 0xFE99, 0xFE99, false, true);
	goto labelFunc048F_0348;
labelFunc048F_0344:
	message("\"Too bad. Thou should try some.\"");
	say();
labelFunc048F_0348:
	case "Ice Dragon blood" attend labelFunc048F_03C6:
	UI_remove_answer("Ice Dragon blood");
	message("\"Special things about blood of Ice Dragon that can cure almost any sickness.\"");
	say();
	message("\"But Ice Dragons very rare creatures. Gwani honor all life -- try everything before we hunt them.\"");
	say();
	message("\"One did live north of our village. We drove different one east many years ago.\"");
	say();
	var0012 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0012) goto labelFunc048F_03B2;
	message("\"Ice Dragon blood maybe only thing powerful enough to cure Neyobi. But it so rare that it very hard to find. Five of our hunters looking for it.\"");
	say();
	message("\"Gwenno said thou help people in need. Thou must find some Ice Dragon blood for Neyobi! It is the last hope!\"");
	say();
	if (!(!gflags[0x0264])) goto labelFunc048F_03AB;
	message("\"Here, take bucket of mine. If thou find and slay Ice Dragon, please bring bucket of blood. Take to Yenani, she know what to do with it.\"");
	say();
	var0013 = Func099B(0xFE9C, 0x0001, 0x032A, 0x0000, 0x0000, false, true);
	message("\"Good luck. Neyobi's life depend on it.\"");
	say();
	gflags[0x0264] = true;
	goto labelFunc048F_03AF;
labelFunc048F_03AB:
	message("\"Give Yenani bucket of Ice Dragon blood. She know what to do with it.\"");
	say();
labelFunc048F_03AF:
	goto labelFunc048F_03B6;
labelFunc048F_03B2:
	message("\"Ice Dragon blood saved Neyobi's life. Great many thanks, Avatar.\"");
	say();
labelFunc048F_03B6:
	UI_add_answer(["north dragon", "east dragon", "Neyobi"]);
labelFunc048F_03C6:
	case "north dragon" attend labelFunc048F_03D9:
	UI_remove_answer("north dragon");
	message("\"I do not know exactly where. We heard nothing for many years.\"");
	say();
labelFunc048F_03D9:
	case "east dragon" attend labelFunc048F_03EC:
	UI_remove_answer("east dragon");
	message("\"Years ago, Gwani attacked by dragon. Myauri and Mwaerno led hunters to fight it. Gwani drove it east beyond mountains. It very old dragon and still unmated. Very rare.\"");
	say();
labelFunc048F_03EC:
	case "Neyobi" attend labelFunc048F_0419:
	UI_remove_answer("Neyobi");
	var0012 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0012) goto labelFunc048F_0415;
	message("\"Neyobi ill from strange sickness. Baiyanda never seen before. Nothing Baiyanda tried help her. Ice Dragon blood only thing that could save her.\"");
	say();
	goto labelFunc048F_0419;
labelFunc048F_0415:
	message("\"No magic in whole world would have saved Neyobi's life. But when Gwani way of healing with balance of nature done, she better.\"");
	say();
labelFunc048F_0419:
	case "bye" attend labelFunc048F_0444:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@I thank thee.@", 0x0000);
	Func097F(0xFF71, "@Very good.@", 0x0003);
	goto labelFunc048F_0447;
labelFunc048F_0444:
	goto labelFunc048F_0095;
labelFunc048F_0447:
	endconv;
labelFunc048F_0448:
	return;
}


