#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func046D object#(0x46D) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc046D_01F0;
	UI_show_npc_face(0xFF93, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02CA])) goto labelFunc046D_003A;
	message("你看到一个僧侣显然漫无目的地在四处游荡。");
	say();
	gflags[0x02CA] = true;
	goto labelFunc046D_0044;
labelFunc046D_003A:
	message("「你好， ");
	message(var0000);
	message("。需要我帮忙吗？」 Wayne 问。");
	say();
labelFunc046D_0044:
	converse attend labelFunc046D_01EB;
	case "姓名" attend labelFunc046D_0060:
	message("「你可以叫我 Wayne 兄弟， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc046D_0060:
	case "职业" attend labelFunc046D_007A:
	message("「我的工作？嗯，我，呃，目前并没有真正的工作。」他低头看着自己的脚。");
	say();
	UI_remove_answer("职业");
	UI_add_answer("目前");
labelFunc046D_007A:
	case "目前" attend labelFunc046D_00A0:
	message("「是的，我是……嗯，我迷路了， ");
	message(var0000);
	message("。我来自这里南边的修道院……或者是北边……也许是西北边。」他托着下巴擡头看。~~「东南边？」");
	say();
	UI_remove_answer("目前");
	UI_add_answer(["迷路", "修道院"]);
labelFunc046D_00A0:
	case "迷路" attend labelFunc046D_00B3:
	message("「嗯……我确定这不是永久的。」他脸红了。「我只是需要确定一下方向，就这样，」他缺乏说服力地说。");
	say();
	UI_remove_answer("迷路");
labelFunc046D_00B3:
	case "修道院" attend labelFunc046D_00D6:
	message("「我是玫瑰友谊会的僧侣。我和一位名叫 Taylor 的弟兄一起研究地理和自然。」");
	say();
	UI_remove_answer("修道院");
	UI_add_answer(["地理", "自然", "Taylor"]);
labelFunc046D_00D6:
	case "地理" attend labelFunc046D_00E9:
	message("「嗯，」他耸耸肩，「我想我应该学得好一点的。」他难为情地笑了。");
	say();
	UI_remove_answer("地理");
labelFunc046D_00E9:
	case "自然" attend labelFunc046D_0109:
	message("「不列颠尼亚有这么多美丽的事物可看。动物和植物都给观察者带来了兴奋感。」");
	say();
	UI_remove_answer("自然");
	UI_add_answer(["动物", "植物"]);
labelFunc046D_0109:
	case "Taylor" attend labelFunc046D_011C:
	message("「嗯，我其实已经有一段时间没见到他了。我假设他还在继续他的研究。」");
	say();
	UI_remove_answer("Taylor");
labelFunc046D_011C:
	case "植物" attend labelFunc046D_014B:
	message("「啊，是的， ");
	message(var0000);
	message("，它们看起来非常奇妙。我强烈建议你要随时观察你的周遭环境。否则， ");
	message(var0000);
	message("，你会错过生活中的很多东西：花朵、树木、鸟类……地标！」");
	say();
	UI_remove_answer("植物");
	UI_add_answer(["花朵", "树木", "鸟类"]);
labelFunc046D_014B:
	case "树木" attend labelFunc046D_015E:
	message("「啊，我最不喜欢的科目。我觉得树木比鸟类无趣多了。」");
	say();
	UI_remove_answer("树木");
labelFunc046D_015E:
	case "鸟类" attend labelFunc046D_0171:
	message("「我最喜欢的动物！鸟类如此自由，能够飞行很远的距离。我多么希望能漫游在广阔的天空……特别是考虑到我目前的处境。从空中你可以看到更多东西，我敢肯定！」");
	say();
	UI_remove_answer("鸟类");
labelFunc046D_0171:
	case "花朵" attend labelFunc046D_0197:
	message("「非常、非常可爱的植物。有彩虹所有的颜色，甚至更多。修道院里有一位僧侣拥有一个美丽的花园。据我所知，她可能还在打理它， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("花朵");
	if (!gflags[0x014C]) goto labelFunc046D_0197;
	UI_add_answer("她还在打理。");
labelFunc046D_0197:
	case "她还在打理。" attend labelFunc046D_01B7:
	message("「太好了， ");
	message(var0000);
	message("。我很高兴听到这件事。如果 Aimi 为了她的另一个……消遣而放弃那个花园，那就太可惜了。」");
	say();
	UI_remove_answer("她还在打理。");
	UI_add_answer("另一个消遣");
labelFunc046D_01B7:
	case "另一个消遣" attend labelFunc046D_01CA:
	message("「Aimi 也画画。或者说，做了大胆的尝试。当然，我必须赞扬她的努力。」");
	say();
	UI_remove_answer("另一个消遣");
labelFunc046D_01CA:
	case "动物" attend labelFunc046D_01DD:
	message("「我最喜欢的是鸟类，尤其是金颊林莺 (Golden-Cheeked Warbler) 。我喜欢跟随并观察牠们。不过，牠们的方向感似乎不太好。」他叹了口气。「但这片土地上有很多种类。」");
	say();
	UI_remove_answer("动物");
labelFunc046D_01DD:
	case "告辞" attend labelFunc046D_01E8:
	goto labelFunc046D_01EB;
labelFunc046D_01E8:
	goto labelFunc046D_0044;
labelFunc046D_01EB:
	endconv;
	message("「愿你的好运指引你走过人生的道路。」*");
	say();
labelFunc046D_01F0:
	if (!(event == 0x0000)) goto labelFunc046D_01FE;
	Func092E(0xFF93);
labelFunc046D_01FE:
	return;
}


