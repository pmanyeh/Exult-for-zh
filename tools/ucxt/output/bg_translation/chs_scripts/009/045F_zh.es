#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func089F 0x89F (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045F object#(0x45F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc045F_025B;
	UI_show_npc_face(0xFFA1, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA1));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00F6]) goto labelFunc045F_004A;
	UI_add_answer("可爱");
labelFunc045F_004A:
	if (!(!gflags[0x011A])) goto labelFunc045F_005C;
	message("你看到一个严厉但看起来很友善的男人，穿着军装。当你看着他时，你会觉得他也在打量你。");
	say();
	gflags[0x011A] = true;
	goto labelFunc045F_0060;
labelFunc045F_005C:
	message("「我有什么可以为你效劳的吗？」Jakher 说。");
	say();
labelFunc045F_0060:
	converse attend labelFunc045F_0256;
	case "姓名" attend labelFunc045F_007D:
	message("「我是 Jakher，以 Sosaria 古代一位伟大将军的名字命名。欢迎来到 Minoc。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Minoc");
labelFunc045F_007D:
	case "职业" attend labelFunc045F_00AE:
	if (!gflags[0x011F]) goto labelFunc045F_009F;
	message("「和 Karenna 一样，我也是战斗技艺的训练师。我的专长是力量与策略。在战场上，如果一个人在使用肌肉的同时不用脑子，他就有掉脑袋的危险。」");
	say();
	UI_add_answer(["Karenna", "训练师"]);
	goto labelFunc045F_00AE;
labelFunc045F_009F:
	message("「也许这是我们应该在更合适的时间谈论的事情。现在我们应该关心的是，找出是谁对刚在 William 锯木厂发现的两起谋杀案负责。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc045F_00AE:
	case "训练师" attend labelFunc045F_00F2:
	if (!(var0002 == 0x001B)) goto labelFunc045F_00E7;
	message("「我的收费是每次训练 20 枚金币。你还有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc045F_00DC;
	Func089F([0x0002, 0x0000], 0x0014);
	goto labelFunc045F_00E4;
labelFunc045F_00DC:
	message("「我所教导的真正价值是无法估量的。我的时间对我来说很宝贵，因此很有价值。如果你付给我微不足道的钱，而我依然训练你，那对我们双方都是一种侮辱。");
	say();
	message("「可惜很少有人真正理解策略和战术的价值。你可以尽情地用剑挥砍，但它无法代替你思考。」");
	say();
labelFunc045F_00E4:
	goto labelFunc045F_00F2;
labelFunc045F_00E7:
	message("「我没有在这个特定时间进行训练的习惯。」");
	say();
	UI_remove_answer("训练师");
labelFunc045F_00F2:
	case "Minoc" attend labelFunc045F_0112:
	message("「我们的城市是一个商业城市，尽管最近它的主要交易似乎是八卦和嫉妒。在这些谋杀案发生之前，当地最新的丑闻是即将为造船匠 Owen 建造的雕像。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["谋杀案", "Owen"]);
labelFunc045F_0112:
	case "谋杀案" attend labelFunc045F_0132:
	message("「我怀疑凶手——或者凶手们——是从外地来的，而且现在可能早就离开了。在今天之前，这里已经有一段时间没有发生过谋杀案了。我们相当程度的繁荣使得这里的人们大多能互相包容。这就是吉普赛人定居在这里的原因。显然缺乏动机这一点令人费解。」");
	say();
	UI_remove_answer("谋杀案");
	UI_add_answer(["离开", "吉普赛人"]);
labelFunc045F_0132:
	case "离开" attend labelFunc045F_0145:
	message("「我怀疑我们社区里有人是凶手。如果涉案的陌生人，在犯案后继续逗留很长时间，他们很快就会暴露。因此，凶手已经不在镇上了。」");
	say();
	UI_remove_answer("离开");
labelFunc045F_0145:
	case "Karenna" attend labelFunc045F_01A5:
	message("「一个技巧娴熟且凶猛的战士，但恐怕在战术方面有点短视。尽管如此，像她这样有吸引力的女人，在遇到时也足够有趣了。但别告诉她我这么说过。这只会鼓励她。现在和她同住一个屋檐下已经够不自在了。」");
	say();
	var0003 = Func08F7(0xFFA2);
	if (!var0003) goto labelFunc045F_018D;
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「你在那边嘀咕什么？」*");
	say();
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「没什么！什么都没有！」Jakher 对你眨了眨眼。*");
	say();
	UI_remove_npc_face(0xFFA2);
	UI_show_npc_face(0xFFA1, 0x0000);
labelFunc045F_018D:
	UI_remove_answer("Karenna");
	var0004 = true;
	UI_add_answer(["短视", "屋檐"]);
labelFunc045F_01A5:
	case "短视" attend labelFunc045F_01F4:
	message("「她是那种坚信所有问题都可以用三种方法之一解决的人。打得更用力。打得更快。或者，打得更多。」");
	say();
	var0003 = Func08F7(0xFFA2);
	if (!var0003) goto labelFunc045F_01ED;
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「你是在说我吗？我感觉我的耳朵在发烫！」*");
	say();
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「你在作梦，Karenna。我为什么要谈论你？」他对着你神秘地窃笑。*");
	say();
	UI_remove_npc_face(0xFFA2);
	UI_show_npc_face(0xFFA1, 0x0000);
labelFunc045F_01ED:
	UI_remove_answer("短视");
labelFunc045F_01F4:
	case "屋檐" attend labelFunc045F_0207:
	message("「Minoc 以前有两个训练馆，但其中一个被闪电击中后烧毁了。现在我们两人都被迫共用这一个。」");
	say();
	UI_remove_answer("屋檐");
labelFunc045F_0207:
	case "可爱" attend labelFunc045F_021A:
	message("「啊，所以 Karenna 说我很可爱，是吗？是的，我知道她看上我很多年了。」");
	say();
	UI_remove_answer("可爱");
labelFunc045F_021A:
	case "Owen" attend labelFunc045F_0231:
	message("「我和镇上任何人一样，认识 Owen 很久了。几年前，他建造的三艘船沉没了。我们当地一位较有特色居民 Karl 的兄弟被杀了。从未对沉船原因进行过调查，但 Owen 曾向我吐露，他暗地里责怪自己。他开始酗酒，最终加入了友谊会。」");
	say();
	UI_remove_answer("Owen");
	gflags[0x00F8] = true;
labelFunc045F_0231:
	case "吉普赛人" attend labelFunc045F_0248:
	message("「你最好去问 Karenna。她是吉普赛人的好朋友，会比我更了解他们。」");
	say();
	UI_remove_answer("吉普赛人");
	gflags[0x00F4] = true;
labelFunc045F_0248:
	case "告辞" attend labelFunc045F_0253:
	goto labelFunc045F_0256;
labelFunc045F_0253:
	goto labelFunc045F_0060;
labelFunc045F_0256:
	endconv;
	message("「很高兴与你交谈。」*");
	say();
labelFunc045F_025B:
	if (!(event == 0x0000)) goto labelFunc045F_0269;
	Func092E(0xFFA1);
labelFunc045F_0269:
	return;
}


