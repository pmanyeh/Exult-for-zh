#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func092E 0x92E (var var0000);

void Func0440 object#(0x440) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0440_0127;
	UI_show_npc_face(0xFFC0, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0099]) goto labelFunc0440_0035;
	UI_add_answer("Nystul");
labelFunc0440_0035:
	if (!(!gflags[0x00C1])) goto labelFunc0440_0047;
	message("你看见你从前的同伴和朋友，皇家守卫队长 Geoffrey。");
	say();
	gflags[0x00C1] = true;
	goto labelFunc0440_0051;
labelFunc0440_0047:
	message("「什么事，");
	message(var0000);
	message("？」 Geoffrey 问道。");
	say();
labelFunc0440_0051:
	converse attend labelFunc0440_0122;
	case "姓名" attend labelFunc0440_0067:
	message("Geoffrey 轻笑着。「你在开玩笑吗？我是 Geoffrey 啊！」");
	say();
	UI_remove_answer("姓名");
labelFunc0440_0067:
	case "职业" attend labelFunc0440_007A:
	message("「这些日子以来，我仍然担任皇家守卫队长的职位。我是不列颠王的私人贴身侍卫，而且我负责城堡的安全。我现在没有太多时间，也没必要去冒险了。」");
	say();
	UI_add_answer("冒险");
labelFunc0440_007A:
	case "冒险" attend labelFunc0440_009A:
	message("「在过去这两百年间，我老了一些。恐怕我这次不能与你同行了。但我的心与你同在，如果我能提供一些协助，我很乐意帮忙。」");
	say();
	UI_remove_answer("冒险");
	UI_add_answer(["老了", "协助"]);
labelFunc0440_009A:
	case "老了" attend labelFunc0440_00AD:
	message("「是的，以不列颠尼亚的历法来算，我已经很久没见过我的故乡了。当你完成你的事情后，一定要回来告诉我我们家乡发生的新闻。」");
	say();
	UI_remove_answer("老了");
labelFunc0440_00AD:
	case "协助" attend labelFunc0440_00CD:
	message("「我给你的建议是，尽快累积你的经验和技能。你已经离开不列颠尼亚很长一段时间了。你可能不再处于你上次在这里冒险结束时的最佳状态。」");
	say();
	UI_remove_answer("协助");
	UI_add_answer(["经验", "状态"]);
labelFunc0440_00CD:
	case "状态" attend labelFunc0440_00E0:
	message("「这显然是我们两个世界的另一个不同之处。每当你回来时，就好像你的肉体是第一次来到这里一样。这也是为什么你许多同伴选择留在这里，尽管他们在不列颠尼亚的时间流逝中已经变老了。」");
	say();
	UI_remove_answer("状态");
labelFunc0440_00E0:
	case "经验" attend labelFunc0440_00F3:
	message("「去找怪物吧。击败他们。拿走他们的黄金！获取经验！当你去拜访训练师时，使用那些经验。增加你的力量、敏捷度和智力，以及你的战斗技能和施法能力。如果没有这种必要的经验进化，你会迷失的！」");
	say();
	UI_remove_answer("经验");
labelFunc0440_00F3:
	case "Nystul" attend labelFunc0440_0114:
	if (!(!gflags[0x0003])) goto labelFunc0440_0109;
	message("「他相当疯癫。如果你问我，我相信这片土地上所有的法师都遭殃了。你自己去看看并找出答案吧。」");
	say();
	goto labelFunc0440_010D;
labelFunc0440_0109:
	message("「他现在好多了！」");
	say();
labelFunc0440_010D:
	UI_remove_answer("Nystul");
labelFunc0440_0114:
	case "告辞" attend labelFunc0440_011F:
	goto labelFunc0440_0122;
labelFunc0440_011F:
	goto labelFunc0440_0051;
labelFunc0440_0122:
	endconv;
	message("「要有勇气。要有信念。要坚强。要明智。」*");
	say();
labelFunc0440_0127:
	if (!(event == 0x0000)) goto labelFunc0440_0135;
	Func092E(0xFFC0);
labelFunc0440_0135:
	return;
}


