#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func094D 0x94D ();
extern void Func094E 0x94E ();

void Func04CF object#(0x4CF) ()
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

	if (!(event == 0x0001)) goto labelFunc04CF_027F;
	UI_show_npc_face(0xFF31, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "圣者";
	var0003 = Func08F7(0xFFFC);
	var0004 = false;
	var0005 = false;
	var0006 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!var0003) goto labelFunc04CF_0072;
	message("「啊，我的好朋友， Dupre 。今天这么好的天气，我能为你做什么？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「啊， Yongi 大师，总是准备好提供你最好的一杯。」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF31, 0x0000);
labelFunc04CF_0072:
	if (!(!gflags[0x028C])) goto labelFunc04CF_0088;
	message("在吧台服务的是一个看起来很愉快的人。「欢迎来到镀金蜥蜴 (Gilded Lizard) 。」");
	say();
	var0006 = true;
	gflags[0x028C] = true;
	goto labelFunc04CF_008C;
labelFunc04CF_0088:
	message("「欢迎回到镀金蜥蜴 (Gilded Lizard) 。我能为你做什么？」 Yongi 问。");
	say();
labelFunc04CF_008C:
	converse attend labelFunc04CF_027A;
	case "姓名" attend labelFunc04CF_0100:
	message("「我的名字是 Yongi ，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!var0006) goto labelFunc04CF_0100;
	message("「而你是？」");
	say();
	var0007 = Func090B([var0000, var0002, var0001]);
	if (!(var0007 == var0002)) goto labelFunc04CF_00D8;
	message("「是的，");
	message(var0001);
	message("。你说得对。如果你不想告诉我，我一点也不介意。」他眨了眨眼。");
	say();
labelFunc04CF_00D8:
	if (!(var0007 == var0000)) goto labelFunc04CF_00EC;
	message("「欢迎来到我的酒馆，");
	message(var0000);
	message("。」");
	say();
labelFunc04CF_00EC:
	if (!(var0007 == var0001)) goto labelFunc04CF_0100;
	message("「你说得对，");
	message(var0001);
	message("。没有必要告诉任何人你的名字。」");
	say();
labelFunc04CF_0100:
	case "职业" attend labelFunc04CF_0119:
	message("「为什么，我管理我的酒吧。而且借我的耳朵给客人，」他补充道，摸了摸他的右耳以示强调。");
	say();
	UI_add_answer(["顾客", "购买"]);
labelFunc04CF_0119:
	case "Vesper" attend labelFunc04CF_013A:
	message("「哎呀，我不想住在其他地方。当然，如果我们能摆脱那些豺狼，石像鬼，这个镇会更好。」");
	say();
	if (!(!var0005)) goto labelFunc04CF_0133;
	UI_add_answer("石像鬼");
labelFunc04CF_0133:
	UI_remove_answer("Vesper");
labelFunc04CF_013A:
	case "石像鬼" attend labelFunc04CF_016B:
	message("「石像鬼！他们怎么了？他们是这片伟大土地上爬行过的最卑鄙、最邪恶、最残酷、最可鄙的东西。我强烈建议你远离他们。我只能想像如果没有石像鬼，这会是个多么美好的城镇。当然，我知道那些狗可能也在这么说我们。每个人都知道他们总有一天晚上会来在我们睡梦中杀光我们。」");
	say();
	if (!(!var0004)) goto labelFunc04CF_015C;
	message("「为什么，就在前几天，其中一个攻击了 Blorn 。去吧，问问他这件事。」");
	say();
	var0004 = true;
	UI_add_answer("Blorn");
labelFunc04CF_015C:
	var0005 = true;
	UI_remove_answer("石像鬼");
	gflags[0x0283] = true;
labelFunc04CF_016B:
	case "顾客" attend labelFunc04CF_0191:
	message("「嗯，我在 Vesper 真正认识的只有我的常客： Cador 、 Mara 和 Blorn 。你可能会想和镇长 Auston ，或他的书记员 Liana 谈谈。啊，现在那里有一位年轻漂亮的女孩。」他对你眨了眨眼。");
	say();
	UI_add_answer(["Cador", "Mara", "Blorn", "Vesper"]);
	UI_remove_answer("顾客");
labelFunc04CF_0191:
	case "Cador" attend labelFunc04CF_01BF:
	var0008 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0008) goto labelFunc04CF_01B4;
	message("「他以前每晚都会来这里，直到他在一场斗殴中被杀。」酒保说话时瞇起了眼睛。");
	say();
	goto labelFunc04CF_01B8;
labelFunc04CF_01B4:
	message("「他每天下班后都在这里。好人，工作努力。」");
	say();
labelFunc04CF_01B8:
	UI_remove_answer("Cador");
labelFunc04CF_01BF:
	case "Mara" attend labelFunc04CF_01ED:
	var0009 = UI_is_dead(UI_get_npc_object(0xFF34));
	if (!var0009) goto labelFunc04CF_01E2;
	message("「她和 Cador 在矿区工作。她比大多数男人更有男子气概，那个人就是。而且她也死得像个男人——在酒馆的斗殴中！」他怀疑地看着你说。");
	say();
	goto labelFunc04CF_01E6;
labelFunc04CF_01E2:
	message("「她和 Cador 在矿区工作。那个人坚如磐石。她比镇上大多数男人都更有男子气概。」");
	say();
labelFunc04CF_01E6:
	UI_remove_answer("Mara");
labelFunc04CF_01ED:
	case "Blorn" attend labelFunc04CF_0228:
	message("「有一个人明白事理。他知道这个城镇出了什么问题！石像鬼！这就是问题所在。他恨他们，他真的很恨。」");
	say();
	if (!(!var0004)) goto labelFunc04CF_0208;
	message("「不久前他甚至被那些豺狼之一给搭讪了。去问问他这件事吧，你怎么不去问问呢。」");
	say();
	var0004 = true;
labelFunc04CF_0208:
	if (!(!gflags[0x0283])) goto labelFunc04CF_021D;
	if (!(!var0005)) goto labelFunc04CF_021D;
	UI_add_answer("石像鬼");
labelFunc04CF_021D:
	UI_remove_answer("Blorn");
	gflags[0x0283] = true;
labelFunc04CF_0228:
	case "购买" attend labelFunc04CF_0248:
	message("「你想要食物还是饮料？」");
	say();
	UI_add_answer(["食物", "饮料"]);
	UI_remove_answer("购买");
labelFunc04CF_0248:
	case "食物" attend labelFunc04CF_025A:
	Func094D();
	UI_remove_answer("食物");
labelFunc04CF_025A:
	case "饮料" attend labelFunc04CF_026C:
	Func094E();
	UI_remove_answer("饮料");
labelFunc04CF_026C:
	case "告辞" attend labelFunc04CF_0277:
	goto labelFunc04CF_027A;
labelFunc04CF_0277:
	goto labelFunc04CF_008C;
labelFunc04CF_027A:
	endconv;
	message("「愿道路平坦迎接你！」*");
	say();
labelFunc04CF_027F:
	if (!(event == 0x0000)) goto labelFunc04CF_0349;
	var000A = UI_part_of_day();
	var000B = UI_get_schedule_type(UI_get_npc_object(0xFF31));
	var000C = UI_die_roll(0x0001, 0x0004);
	if (!((var000A >= 0x0001) && (var000A <= 0x0003))) goto labelFunc04CF_02CB;
	if (!(var000B == 0x000E)) goto labelFunc04CF_02CB;
	var000D = "@Zzzzz . . .@";
labelFunc04CF_02CB:
	if (!((var000A == 0x0004) || ((var000A == 0x0005) || ((var000A == 0x0006) || ((var000A == 0x0007) || (var000A == 0x0000)))))) goto labelFunc04CF_033F;
	if (!(var000B == 0x000B)) goto labelFunc04CF_033F;
	if (!(var000C == 0x0001)) goto labelFunc04CF_030F;
	var000D = "@这里有茶水点心！@";
labelFunc04CF_030F:
	if (!(var000C == 0x0002)) goto labelFunc04CF_031F;
	var000D = "@来杯上好的葡萄酒吧！@";
labelFunc04CF_031F:
	if (!(var000C == 0x0003)) goto labelFunc04CF_032F;
	var000D = "@这里有最好的烈酒！@";
labelFunc04CF_032F:
	if (!(var000C == 0x0004)) goto labelFunc04CF_033F;
	var000D = "@石像鬼不得入内！@";
labelFunc04CF_033F:
	UI_item_say(0xFF31, var000D);
labelFunc04CF_0349:
	return;
}


