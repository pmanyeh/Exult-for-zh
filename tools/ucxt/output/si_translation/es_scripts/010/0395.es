#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func09AD 0x9AD (var var0000);

void Func0395 shape#(0x395) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = false;
	var0001 = UI_get_object_position(0xFE9C);
	var0002 = var0001[0x0001];
	var0003 = var0001[0x0002];
	if (!((var0002 > 0x0498) && ((var0002 < 0x04F8) && ((var0003 > 0x01AF) && (var0003 < 0x021F))))) goto labelFunc0395_0046;
	var0000 = true;
labelFunc0395_0046:
	if (!((event == 0x0007) && UI_get_item_flag(0xFEED, 0x001D))) goto labelFunc0395_0092;
	UI_show_npc_face0(0xFEE8, 0x0000);
	message("\"Argh! Thou thinkest thou canst save thy precious Gwani by slaying me? Fool! Thou hast the brain of a headless!\" *\"I laugh at thee, even as I lie here dying in mine own blood. The Gwani are doomed I tell thee, doomed like a feeble rabbit in my trap, hahaha...\"");
	say();
	UI_remove_npc_face0();
	UI_clear_item_flag(0xFEED, 0x001D);
	Func097F(0xFE9C, "@Taste my steel, trapper!@", 0x0001);
	UI_reduce_health(0xFEED, 0x0037, 0x0000);
	gflags[0x0263] = true;
labelFunc0395_0092:
	if (!((event == 0x0001) && (var0000 == false))) goto labelFunc0395_00C0;
	UI_item_say(0xFE9C, "@Stand fast, trapper!@");
	0x0395->Func07D1();
	Func097F(0x0395, "@Thou shalt not take me!@", 0x0003);
	Func09AD(item);
labelFunc0395_00C0:
	if (!((event == 0x0001) && var0000)) goto labelFunc0395_00F0;
	UI_item_say(0xFE9C, "@Stand fast, Trapper!@");
	0x0395->Func07D1();
	Func097F(0x0395, "@At last!@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc0395_00F0:
	if (!(event == 0x0009)) goto labelFunc0395_01C3;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEE8, 0x0000);
	message("\"We have stalked each other long enough!\"");
	say();
	UI_add_answer(["Are you The Trapper?", "bye"]);
labelFunc0395_011D:
	converse attend labelFunc0395_01C2;
	case "Are you The Trapper?" attend labelFunc0395_013A:
	UI_remove_answer("Are you The Trapper?");
	message("\"Forgo the pretense, I am Hazard the Trapper as thou dost know well by now.\"");
	say();
	UI_add_answer("Murderer!");
labelFunc0395_013A:
	case "Murderer!" attend labelFunc0395_015D:
	UI_remove_answer("Murderer!");
	message("\"That charge is most unfair! The Gwani are merely animals! I kill them as I would a bear, or a leopard.\"* \"Their skins keep many a man warm when they venture into these icy regions. Why, I would kill a man if he dared to steal mine.\"* \"Aye, their skins are the most profitable, too.\"");
	say();
	UI_add_answer(["animals", "profit", "Gwani"]);
labelFunc0395_015D:
	case "profit" attend labelFunc0395_0170:
	UI_remove_answer("profit");
	message("\"Aye, the best skins I take are those I peel from those beasts while they still live. I have not killed a Gwani before skinning it in years, and I shan't stop till the last one is gone!\"");
	say();
labelFunc0395_0170:
	case "animals" attend labelFunc0395_018A:
	UI_remove_answer("animals");
	message("\"Trapping them is too easy. 'Tis a wonder they survive out here at all! Why, they are as docile as sheep!\"* \"A leopard at least is sport. It would sever mine arm if I gave it the chance. Slaughtering the Gwani is doing them a favor.\"");
	say();
	UI_add_answer("Stop the killing.");
labelFunc0395_018A:
	case "Gwani" attend labelFunc0395_019D:
	UI_remove_answer("Gwani");
	message("\"They provide me a fat living. Thou art daft to be concerned for the likes of them!\"* \"And if thou hast a plan for stopping me then I think thou shouldst leave now, lest I skin thee alive, too!\"");
	say();
labelFunc0395_019D:
	case "Stop the killing." attend labelFunc0395_01AE:
	message("\"No one tells me what I can and cannot kill! Prepare to join thy Gwani friends on my wall, Avatar.\"");
	say();
	Func09AD(item);
	abort;
labelFunc0395_01AE:
	case "bye" attend labelFunc0395_01BF:
	message("\"From the look in thine eye I can see that this is far from over. Truly this is farewell, Avatar.\"");
	say();
	Func09AD(item);
	abort;
labelFunc0395_01BF:
	goto labelFunc0395_011D;
labelFunc0395_01C2:
	endconv;
labelFunc0395_01C3:
	return;
}


