#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func08A8 0x8A8 ();
extern void Func092E 0x92E (var var0000);

void Func04ED object#(0x4ED) ()
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

	if (!(event == 0x0001)) goto labelFunc04ED_0309;
	UI_show_npc_face(0xFF13, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF13));
	var0002 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0003 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc04ED_005F;
	UI_add_answer("毒液");
labelFunc04ED_005F:
	if (!(!gflags[0x00B1])) goto labelFunc04ED_0071;
	message("你看到一位看起来非常有权威的年长男人，正带着深思熟虑的关切看着你。");
	say();
	gflags[0x00B1] = true;
	goto labelFunc04ED_0075;
labelFunc04ED_0071:
	message("「我很高兴你又来看我了，」 Kessler 说。");
	say();
labelFunc04ED_0075:
	converse attend labelFunc04ED_02FE;
	case "姓名" attend labelFunc04ED_008B:
	message("「我的名字是 Kessler 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04ED_008B:
	case "职业" attend labelFunc04ED_009E:
	message("「我在不列颠城这里经营药剂店。」");
	say();
	UI_add_answer("药剂师");
labelFunc04ED_009E:
	case "药剂师" attend labelFunc04ED_00C1:
	message("「虽然药剂师的正常职责是管理药水和魔法配方，但我现在几乎专为不列颠王工作，试图研究一个特定的问题。」");
	say();
	UI_remove_answer("药剂师");
	UI_add_answer(["药水", "研究", "问题"]);
labelFunc04ED_00C1:
	case "药水" attend labelFunc04ED_00E1:
	message("「它们在不列颠尼亚这里绝对不是最近的发明！药水是具有某些魔法特性的液体，用于各种目的，例如治疗伤害和疾病。如果你感兴趣的话，我有一些可以出售。」");
	say();
	UI_remove_answer("药水");
	UI_add_answer(["魔法特性", "买药水"]);
labelFunc04ED_00E1:
	case "魔法特性" attend labelFunc04ED_00FB:
	message("「自从法师们变得如此无能后，我们被迫发展其他方法来完成我们过去依赖法师所做的一切事情。不幸的是，许多这些新方法至今仍未经测试。」");
	say();
	UI_remove_answer("魔法特性");
	UI_add_answer("未经测试");
labelFunc04ED_00FB:
	case "未经测试" attend labelFunc04ED_010E:
	message("「我们对我们使用的大多数物质的影响仍然知之甚少。许多物质引起的问题比解决的还多，或者如果与其他元素一起服用，会产生不同的反应。有些可能会让你对健康产生依赖，有些则可能根本就是有毒的。」");
	say();
	UI_remove_answer("未经测试");
labelFunc04ED_010E:
	case "研究" attend labelFunc04ED_012E:
	message("「我正在研究一种名为银蛇毒液的特定物质的影响。但我遇到了一些困难。」");
	say();
	UI_remove_answer("研究");
	UI_add_answer(["银蛇", "困难"]);
labelFunc04ED_012E:
	case "银蛇" attend labelFunc04ED_0148:
	message("「就像人可以从名字中猜到的那样，它是从危险的银蛇身上取出的毒液。许多人对这些生物的着迷引起了对毒液本身极大的好奇。」");
	say();
	UI_remove_answer("银蛇");
	UI_add_answer("好奇心");
labelFunc04ED_0148:
	case "好奇心" attend labelFunc04ED_015B:
	message("「有些人声称石像鬼服用毒液，这导致他们在战斗等方面获得增强。这可能只是一个神话，但人们感受到的好奇心却是千真万确的。」");
	say();
	UI_remove_answer("好奇心");
labelFunc04ED_015B:
	case "困难" attend labelFunc04ED_017B:
	message("「我最大的困难在于找到大量有意义的银蛇毒液。但这绝不是我唯一的困难。」");
	say();
	UI_remove_answer("困难");
	UI_add_answer(["寻找", "其他困难"]);
labelFunc04ED_017B:
	case "寻找" attend labelFunc04ED_0192:
	message("「如果你碰巧遇到任何银蛇毒液，把它带回这里给我。对于你能提供的每一瓶，我将支付你五十金币。」");
	say();
	var0004 = true;
	UI_remove_answer("寻找");
labelFunc04ED_0192:
	case "其他困难" attend labelFunc04ED_01A5:
	message("「人们需要被警告银蛇毒液有多危险。为此，我希望在不列颠王和领主与市长们的会议前发表我的发现，但为了做到这一点，我必须先完成我的研究。」");
	say();
	UI_remove_answer("其他困难");
labelFunc04ED_01A5:
	case "问题" attend labelFunc04ED_01BF:
	message("「最近一种非常奇怪物质的使用量急遽上升。人们开始刻意服用银蛇的毒液。」");
	say();
	UI_remove_answer("问题");
	UI_add_answer("服用");
labelFunc04ED_01BF:
	case "服用" attend labelFunc04ED_01D9:
	message("「银蛇会产生一种极度致命的毒液，但当服用的量少于致死量时，它会引起各种奇怪的影响。」");
	say();
	UI_remove_answer("服用");
	UI_add_answer("影响");
labelFunc04ED_01D9:
	case "影响" attend labelFunc04ED_01F3:
	message("「有一段时间，毒液会提升人的生理和心理表现，例如让人能更努力工作。但在药效退去后，它会对用户造成永久性的损害。」");
	say();
	UI_remove_answer("影响");
	UI_add_answer("损害");
labelFunc04ED_01F3:
	case "损害" attend labelFunc04ED_0206:
	message("「它首先会让用户感到极度疲惫，最终导致皮肤脱落。毒液是一种危险物质，你在任何情况下都不应该服用它。」");
	say();
	UI_remove_answer("损害");
labelFunc04ED_0206:
	case "毒液" attend labelFunc04ED_02B5:
	var0005 = UI_count_objects(0xFE9B, 0x0289, 0xFE99, 0xFE99);
	var0006 = (0x0032 * var0005);
	if (!(var0005 == 0x0000)) goto labelFunc04ED_023C;
	message("「你没有任何毒液瓶！」");
	say();
	goto labelFunc04ED_02AE;
labelFunc04ED_023C:
	if (!(var0005 == 0x0001)) goto labelFunc04ED_024D;
	message("Kessler 仔细检查这瓶毒液。");
	say();
	goto labelFunc04ED_0251;
labelFunc04ED_024D:
	message("Kessler 仔细检查这些毒液。");
	say();
labelFunc04ED_0251:
	message("他擡头看你并点点头。「这确实是银蛇毒液。我将以每瓶 50 金币向你收购。好吗？」");
	say();
	if (!Func090A()) goto labelFunc04ED_02AA;
	var0007 = UI_remove_party_items(var0005, 0x0289, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc04ED_02A3;
	var0008 = UI_add_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc04ED_029C;
	message("Kessler 打开他的钱包并付给你 ");
	message(var0006);
	message(" 金币。");
	say();
	goto labelFunc04ED_02A0;
labelFunc04ED_029C:
	message("「你负担太重了，带不了更多钱。」");
	say();
labelFunc04ED_02A0:
	goto labelFunc04ED_02A7;
labelFunc04ED_02A3:
	message("「我看到你手头上有一批银蛇毒液。或许我们应该进一步谈谈。」");
	say();
labelFunc04ED_02A7:
	goto labelFunc04ED_02AE;
labelFunc04ED_02AA:
	message("「很好。」");
	say();
labelFunc04ED_02AE:
	UI_remove_answer("毒液");
labelFunc04ED_02B5:
	case "买药水" attend labelFunc04ED_02F0:
	if (!(!(var0001 == 0x0007))) goto labelFunc04ED_02CF;
	message("「药剂店关门了。它的营业时间是中午到午夜。你可以到时候再来。」");
	say();
	goto labelFunc04ED_02E9;
labelFunc04ED_02CF:
	message("「我总是保持新鲜的原料库存和调配好的药水库存，以防任何人需要它们。你想买一瓶吗？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc04ED_02E5;
	Func08A8();
	goto labelFunc04ED_02E9;
labelFunc04ED_02E5:
	message("「如果你需要任何药水，一定要回来。」");
	say();
labelFunc04ED_02E9:
	UI_remove_answer("买药水");
labelFunc04ED_02F0:
	case "告辞" attend labelFunc04ED_02FB:
	goto labelFunc04ED_02FE;
labelFunc04ED_02FB:
	goto labelFunc04ED_0075;
labelFunc04ED_02FE:
	endconv;
	message("「很高兴和你说话，");
	message(var0002);
	message("。」*");
	say();
labelFunc04ED_0309:
	if (!(event == 0x0000)) goto labelFunc04ED_0317;
	Func092E(0xFF13);
labelFunc04ED_0317:
	return;
}


