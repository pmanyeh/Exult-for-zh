#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func042A object#(0x42A) ()
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

	if (!(event == 0x0001)) goto labelFunc042A_0302;
	UI_show_npc_face(0xFFD6, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00DC]) goto labelFunc042A_003C;
	UI_add_answer("兑换");
labelFunc042A_003C:
	if (!gflags[0x00AF]) goto labelFunc042A_0049;
	UI_add_answer("James");
labelFunc042A_0049:
	if (!(!gflags[0x00AB])) goto labelFunc042A_005B;
	message("你看见一位看起来热心且有效率的女人。");
	say();
	gflags[0x00AB] = true;
	goto labelFunc042A_005F;
labelFunc042A_005B:
	message("「有什么我能帮你的吗？」 Cynthia 问。");
	say();
labelFunc042A_005F:
	converse attend labelFunc042A_02F7;
	case "姓名" attend labelFunc042A_0075:
	message("「我的名字是 Cynthia 。」");
	say();
	UI_remove_answer("姓名");
labelFunc042A_0075:
	case "职业" attend labelFunc042A_008E:
	message("「我是造币厂 (Mint) 的出纳员。我也是不列颠尼亚税务委员会的一员。」");
	say();
	UI_add_answer(["造币厂", "不列颠尼亚税务委员会"]);
labelFunc042A_008E:
	case "造币厂" attend labelFunc042A_00BD:
	message("「在造币厂，我们保存黄金，监督硬币的生产，并准确统计王国有多少可用资金，用于农业、修建道路、开发淡水资源、照顾公民的健康、维护贵族的庄园、招募守卫民兵以及运行不列颠王的法令。」");
	say();
	UI_remove_answer("造币厂");
	UI_add_answer(["资金", "农业", "道路", "淡水", "健康", "庄园", "守卫"]);
labelFunc042A_00BD:
	case "不列颠尼亚税务委员会" attend labelFunc042A_00F5:
	message("「不列颠尼亚税务委员会负责税收的会计、评估和征收。如果你要在不列颠尼亚这里赚钱，你需要拿着这份文档。」");
	say();
	var0002 = UI_add_party_items(0x0001, 0x031D, 0x000C, 0xFE99, true);
	if (!var0002) goto labelFunc042A_00EA;
	message("「填写完后，在年底回来缴税时把它交回这里。」");
	say();
	goto labelFunc042A_00EE;
labelFunc042A_00EA:
	message("「你带了太多东西了。等你没有背负那么重时再来，我会把文档给你。」");
	say();
labelFunc042A_00EE:
	UI_remove_answer("不列颠尼亚税务委员会");
labelFunc042A_00F5:
	case "资金" attend labelFunc042A_0119:
	message("「为了保持货币标准的稳定，我们也为那些拥有大量黄金的人提供兑换服务。~~我们提供等值于他们黄金的王国流通硬币，然后将我们收到的黄金转换成更多的钱。所以，如你所见，这是一个非常有效率的系统。」");
	say();
	gflags[0x00DC] = true;
	UI_remove_answer("资金");
	UI_add_answer(["兑换", "系统"]);
labelFunc042A_0119:
	case "农业" attend labelFunc042A_012C:
	message("「我肯定你一定知道，那场幸好在几年前结束的七年大旱，让王国的大部分农业陷入混乱。这就是为什么食物的成本如此昂贵。但如果没有皇家金库的支持，价格会更高。」");
	say();
	UI_remove_answer("农业");
labelFunc042A_012C:
	case "道路" attend labelFunc042A_013F:
	message("「马车使用量的增加导致不列颠尼亚各地的许多道路迅速恶化。修建新道路并保持它们的维修需要花费大量的资金。」");
	say();
	UI_remove_answer("道路");
labelFunc042A_013F:
	case "淡水" attend labelFunc042A_0152:
	message("「确保其人民拥有干净的水源对王国来说是至关重要的，这需要定期供应新的、干净的水井。」");
	say();
	UI_remove_answer("淡水");
labelFunc042A_0152:
	case "健康" attend labelFunc042A_0165:
	message("「由于不列颠尼亚的人口在过去两百年间大幅增加，传染病的风险也随之增加，例如那些服用银蛇毒液的人所感染的神秘皮肤恶化症。王国需要的治疗师数量急剧上升。」");
	say();
	UI_remove_answer("健康");
labelFunc042A_0165:
	case "庄园" attend labelFunc042A_0178:
	message("「当地领主和市长的住所都由王国赞助维护。」");
	say();
	UI_remove_answer("庄园");
labelFunc042A_0178:
	case "守卫" attend labelFunc042A_018B:
	message("「军事训练在 Serpent's Hold 进行，保护不列颠尼亚所有城镇的守卫都在那里受训。这是由皇家金库资助的。」");
	say();
	UI_remove_answer("守卫");
labelFunc042A_018B:
	case "系统" attend labelFunc042A_019E:
	message("「这不仅适用于黄金，也适用于所有矿物。我们负责监督不列颠尼亚矿业公司 (不列颠尼亚n Mining Company) 开采的珍贵矿石的销售和兑换率。但我们不处理宝石的销售。城里有一家珠宝商负责处理那部分。」");
	say();
	UI_remove_answer("系统");
labelFunc042A_019E:
	case "兑换" attend labelFunc042A_02D2:
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFD6));
	if (!(var0003 == 0x001E)) goto labelFunc042A_02C7;
	message("「你有一些想要兑换的黄金吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc042A_02C0;
	var0005 = Func0931(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99);
	if (!(var0005 || var0006)) goto labelFunc042A_0209;
	var0007 = true;
	goto labelFunc042A_020D;
labelFunc042A_0209:
	var0007 = false;
labelFunc042A_020D:
	if (!(!var0007)) goto labelFunc042A_021B;
	message("「我看到你没有金块或金条。你拥有的任何黄金都已经是王国的硬币了。我无法再帮你更多了。」");
	say();
	goto labelFunc042A_02BD;
labelFunc042A_021B:
	message("「我们可以将你的金块和金条兑换成可花费的硬币。每一块金块我会给你十枚金币，每一根金条我会给你一百枚金币。」");
	say();
	var0008 = UI_count_objects(0xFE9B, 0x0285, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x0286, 0xFE99, 0xFE99);
	var000A = (0x000A * var0008);
	var000B = (0x0064 * var0009);
	var000C = (var000A + var000B);
	var000D = UI_add_party_items(var000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var000D)) goto labelFunc042A_0285;
	message("「喔，天啊。你不可能拿得下这么多金币。你必须在你的背包有更多空间时再来。」");
	say();
	goto labelFunc042A_02BD;
labelFunc042A_0285:
	var000E = UI_remove_party_items(var0008, 0x0285, 0xFE99, 0xFE99, true);
	var000F = UI_remove_party_items(var0009, 0x0286, 0xFE99, 0xFE99, true);
	message("「这是给你的 ");
	message(var000C);
	message(" 枚金币作为回报，");
	message(var0000);
	message("。感谢你的光临。」");
	say();
labelFunc042A_02BD:
	goto labelFunc042A_02C4;
labelFunc042A_02C0:
	message("「很好。或许下次吧。」");
	say();
labelFunc042A_02C4:
	goto labelFunc042A_02CB;
labelFunc042A_02C7:
	message("「请在正常营业时间来造币厂 (The Mint)。」");
	say();
labelFunc042A_02CB:
	UI_remove_answer("兑换");
labelFunc042A_02D2:
	case "James" attend labelFunc042A_02E9:
	message("「James 是我的丈夫，我非常担心他。我知道他最近感到很不快乐，而且他不喜欢他的工作。如果你有跟他说话，请告诉他，即使我们最近没说什么话，我仍然在想着他，我仍然在乎他。」");
	say();
	UI_remove_answer("James");
	gflags[0x0092] = true;
labelFunc042A_02E9:
	case "告辞" attend labelFunc042A_02F4:
	goto labelFunc042A_02F7;
labelFunc042A_02F4:
	goto labelFunc042A_005F;
labelFunc042A_02F7:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc042A_0302:
	if (!(event == 0x0000)) goto labelFunc042A_0310;
	Func092E(0xFFD6);
labelFunc042A_0310:
	return;
}


