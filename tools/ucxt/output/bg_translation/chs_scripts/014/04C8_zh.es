#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04C8 object#(0x4C8) ()
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

	if (!(event == 0x0001)) goto labelFunc04C8_031B;
	UI_show_npc_face(0xFF38, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0271])) goto labelFunc04C8_0044;
	message("女人慈悲地对你微笑。");
	say();
	gflags[0x0271] = true;
	goto labelFunc04C8_004E;
labelFunc04C8_0044:
	message("Tory 笑了笑并向你伸出手。「哈啰，");
	message(var0000);
	message("。我感觉到你很烦恼。」");
	say();
labelFunc04C8_004E:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C8_0060;
	UI_add_answer("雕像");
labelFunc04C8_0060:
	if (!(gflags[0x0277] && (!gflags[0x0278]))) goto labelFunc04C8_0072;
	UI_add_answer("Riky");
labelFunc04C8_0072:
	converse attend labelFunc04C8_0316;
	case "姓名" attend labelFunc04C8_00A0:
	message("「我是 Tory 女士，");
	message(var0001);
	message("。」");
	say();
	if (!(!gflags[0x0277])) goto labelFunc04C8_0099;
	message("「Riky 的母亲，」她啜泣着说。");
	say();
	UI_add_answer("Riky");
labelFunc04C8_0099:
	UI_remove_answer("姓名");
labelFunc04C8_00A0:
	case "职业" attend labelFunc04C8_00B9:
	message("「我的工作是为 Lord John-Paul、以及这座堡垒里任何需要指导的人提供顾问服务。」");
	say();
	UI_add_answer(["Lord John-Paul", "堡垒"]);
labelFunc04C8_00B9:
	case "Riky" attend labelFunc04C8_0170:
	if (!gflags[0x0277]) goto labelFunc04C8_0140;
	message("「你找到我的孩子了吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C8_0139;
	var0004 = Func0931(0xFE9B, 0x0001, 0x02DA, 0xFE99, 0x0002);
	if (!var0004) goto labelFunc04C8_0109;
	Func0911(0x0064);
	message("「我不知该如何表达我的感激，");
	message(var0001);
	message("。非常感谢你！」~她喜极而泣。「请、请轻轻地把他放回摇篮里。」");
	say();
	gflags[0x0278] = true;
	goto labelFunc04C8_0136;
labelFunc04C8_0109:
	var0005 = Func0931(0xFE9B, 0x0001, 0x02DA, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc04C8_0131;
	message("「为什么，那不是我的小 Riky ，");
	message(var0001);
	message("。你带着别人的孩子。哦，我的男孩会被带去哪里？」她哭着说。");
	say();
	goto labelFunc04C8_0136;
labelFunc04C8_0131:
	message("「但是，我没看到你带着孩子。你的幽默感很黑暗。请带着我的男婴回来时再来！」*");
	say();
	abort;
labelFunc04C8_0136:
	goto labelFunc04C8_013D;
labelFunc04C8_0139:
	message("「拜托，我恳求你，继续你的追捕！」");
	say();
labelFunc04C8_013D:
	goto labelFunc04C8_0169;
labelFunc04C8_0140:
	gflags[0x0277] = true;
	message("「我可怜的男婴。他——他有一天晚上被残忍的鹰身女妖抓走了，她们想要一个属于自己的孩子。我——我不知道她们把他带到哪里去了，但我听一些骑士提起过，有一群邪恶的鸟身女妖聚集在荣誉神殿 (Shrine of Honor) 周围。但是，他们还无法击败她们。」她吸了吸鼻子。「但是你");
	message(var0001);
	message("，你会帮我找回我的孩子。哦，拜托，你会吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C8_0161;
	message("「我对你的帮助感激不尽！」她看起来高兴多了。");
	say();
	goto labelFunc04C8_0169;
labelFunc04C8_0161:
	message("「你不过是个懦夫。走开，懦夫！」");
	say();
	gflags[0x0278] = true;
labelFunc04C8_0169:
	UI_remove_answer("Riky");
labelFunc04C8_0170:
	case "雕像" attend labelFunc04C8_0183:
	message("「嗯，」她似乎若有所思，「当这件事在堡垒这里对大家提起时，我记得 Jordan 爵士变得有点紧张。或许你应该去跟他谈谈。」");
	say();
	UI_remove_answer("雕像");
labelFunc04C8_0183:
	case "堡垒" attend labelFunc04C8_01CF:
	message("「我感觉你想知道 Serpent's Hold 这里的居民。是这样吗？」");
	say();
	var0007 = Func090A();
	if (!(!var0007)) goto labelFunc04C8_01A3;
	message("「好吧。如果你改变主意再来找我。」");
	say();
	goto labelFunc04C8_01C8;
labelFunc04C8_01A3:
	message("「身为堡垒的顾问，我可以告诉你许多人的事。你见过治疗师或物资商人了吗？而且，身为一名战士，你可能会想去拜访训练师和军械士。」");
	say();
	if (!(!var0002)) goto labelFunc04C8_01B5;
	UI_add_answer("Lord John-Paul");
labelFunc04C8_01B5:
	UI_add_answer(["治疗师", "军械士", "训练师", "补给官"]);
labelFunc04C8_01C8:
	UI_remove_answer("堡垒");
labelFunc04C8_01CF:
	case "Lord John-Paul" attend labelFunc04C8_01ED:
	message("「他是位非凡的领袖。每个人都尊敬他。你只需要问问他的队长就知道了。」");
	say();
	UI_remove_answer("Lord John-Paul");
	UI_add_answer("队长");
	var0002 = true;
labelFunc04C8_01ED:
	case "治疗师" attend labelFunc04C8_0200:
	message("「Leigh 女士作为一名治疗师非常熟练。我还没见过她失去任何病人。」");
	say();
	UI_remove_answer("治疗师");
labelFunc04C8_0200:
	case "军械士" attend labelFunc04C8_021A:
	message("「嗯。 Richter 爵士最近改变了很多——自从他加入友谊会之后。他似乎变得不那么有同情心了。」");
	say();
	UI_add_answer("友谊会");
	UI_remove_answer("军械士");
labelFunc04C8_021A:
	case "酒馆老板" attend labelFunc04C8_022D:
	message("「Denton 爵士是我见过最精明的人。他是唯一一个我无法感知的人。而且我从未见过他脱下盔甲……」她耸了耸肩。");
	say();
	UI_remove_answer("酒馆老板");
labelFunc04C8_022D:
	case "训练师" attend labelFunc04C8_0247:
	message("「我对 Menion 最不了解。他非常安静，大部分空闲时间都在打造武器。酒馆老板可能对他了解更多。」");
	say();
	UI_add_answer("酒馆老板");
	UI_remove_answer("训练师");
labelFunc04C8_0247:
	case "补给官" attend labelFunc04C8_0261:
	message("「她的名字是 Jehanne 女士。她是 Pendaran 爵士的女士，」她眼中闪烁着光芒说道。");
	say();
	UI_add_answer("Pendaran 爵士");
	UI_remove_answer("补给官");
labelFunc04C8_0261:
	case "队长" attend labelFunc04C8_0281:
	message("「卫兵队长 Horffe 爵士，是一只石像鬼。他被两名人类发现并抚养成为一名勇敢的骑士。他是一位非常忠诚的战士，很少离开 John-Paul 领主的身边。」");
	say();
	if (!gflags[0x026E]) goto labelFunc04C8_027A;
	UI_add_answer("石像鬼口音");
labelFunc04C8_027A:
	UI_remove_answer("队长");
labelFunc04C8_0281:
	case "石像鬼口音" attend labelFunc04C8_0294:
	message("「尽管他是由人类抚养长大的， Horffe 一直在努力维持他的石像鬼认同。通过以与他同胞相同的方式说话，他觉得自己能更好地保留他的背景。」");
	say();
	UI_remove_answer("石像鬼口音");
labelFunc04C8_0294:
	case "Pendaran 爵士" attend labelFunc04C8_02A7:
	message("「他是一个勇敢而热情的战士，而且，」她笑了，「他也相当有吸引力。」");
	say();
	UI_remove_answer("Pendaran 爵士");
labelFunc04C8_02A7:
	case "友谊会" attend labelFunc04C8_02C1:
	message("「友谊会在这里没有分部，但我们的两名骑士是成员： Richter 爵士和 Pendaran 爵士。我知道他们也有意让 Jordan 爵士加入。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer("Jordan 爵士");
labelFunc04C8_02C1:
	case "Jordan 爵士" attend labelFunc04C8_0308:
	message("「他是个奇迹。尽管双眼失明，他战斗的敏捷度却令人惊讶。事实上，他也喜欢玩弄机械物品，而失去视力似乎也并未影响他。~~不过，我感觉他最近有非常明显的改变，非常像 Richter 爵士那样。他会是个有趣的交谈对象。你可以在 Iolo's South 找到他。」*");
	say();
	var0008 = Func08F7(0xFFFF);
	if (!var0008) goto labelFunc04C8_0301;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 自豪地笑着。~~「我的店自从你上次来之后，呃，成长了一些，");
	message(var0000);
	message("。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF38, 0x0000);
labelFunc04C8_0301:
	UI_remove_answer("Jordan 爵士");
labelFunc04C8_0308:
	case "告辞" attend labelFunc04C8_0313:
	goto labelFunc04C8_0316;
labelFunc04C8_0313:
	goto labelFunc04C8_0072;
labelFunc04C8_0316:
	endconv;
	message("「我感觉你在其他地方有紧急约会。向你道别。」*");
	say();
labelFunc04C8_031B:
	if (!(event == 0x0000)) goto labelFunc04C8_0329;
	Func092E((long)0xFF38);
labelFunc04C8_0329:
	return;
}


