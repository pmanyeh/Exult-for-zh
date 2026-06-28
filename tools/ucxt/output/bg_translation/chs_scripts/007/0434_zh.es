#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0946 0x946 ();
extern void Func0947 0x947 ();
extern void Func0948 0x948 ();
extern void Func092E 0x92E (var var0000);

void Func0434 object#(0x434) ()
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

	if (!(event == 0x0001)) goto labelFunc0434_037C;
	UI_show_npc_face(0xFFCC, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCC));
	var0003 = UI_part_of_day();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0085]) goto labelFunc0434_0059;
	UI_add_answer("Jeanette");
labelFunc0434_0059:
	if (!gflags[0x00CB]) goto labelFunc0434_0066;
	UI_add_answer("做面包");
labelFunc0434_0066:
	var0005 = Func0931(0xFE9B, 0x0001, 0x035F, 0xFE99, 0x000E);
	var0006 = Func0931(0xFE9B, 0x0001, 0x035F, 0xFE99, 0x000F);
	if (!(var0005 || var0006)) goto labelFunc0434_00A1;
	UI_add_answer("卖面粉");
labelFunc0434_00A1:
	if (!(!gflags[0x00B5])) goto labelFunc0434_00B3;
	message("你看见一个看起来很爱干净、胖乎乎的年轻人，正疯狂地向你挥手。");
	say();
	gflags[0x00B5] = true;
	goto labelFunc0434_00B7;
labelFunc0434_00B3:
	message("「啊，你好啊！很高兴又见到你了！」 Willy 说。");
	say();
labelFunc0434_00B7:
	converse attend labelFunc0434_0371;
	case "姓名" attend labelFunc0434_00CD:
	message("「我的本名是 Wilhelm ，虽然没人这样叫我。我比较喜欢别人叫我 Willy 。非常感谢你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0434_00CD:
	case "职业" attend labelFunc0434_0190:
	message("「我是这里不列颠城的烘焙师，我做的是你尝过最甜的面包！");
	say();
	if (!(var0002 == 0x0012)) goto labelFunc0434_018C;
	message("「你有机会尝过我的面包了吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0434_0161;
	message("「啊，那么你也同意它是最甜的，不是吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0434_015A;
	message("「哈！你看到了吧？每个人都同意！这应该就是最好的证明！」");
	say();
	var0004 = Func08F7(0xFFFE);
	if (!var0004) goto labelFunc0434_0157;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我要吃！」*");
	say();
	UI_show_npc_face(0xFFCC, 0x0000);
	message("「给你，小伙子。」 Willy 递给 Spark 一个糕点，男孩一口就把它吞了下去。*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「嗯嗯嗯！我说，");
	message(var0001);
	message("，我想我们路上需要很多这个。我们最好买一些，好吗？」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFCC, 0x0000);
labelFunc0434_0157:
	goto labelFunc0434_015E;
labelFunc0434_015A:
	message("「你不同意？！哎呀，别开玩笑了！你当然同意！」");
	say();
labelFunc0434_015E:
	goto labelFunc0434_017C;
labelFunc0434_0161:
	message("「那给你，你一定要尝尝！」他从带着的几条面包上撕下一块，塞进你嘴里。「看吧！这不是你尝过最甜的面包吗？是的，对不对？！」你尽快地咀嚼着，以便回答他。");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0434_0178;
	message("他捏住你的脸颊，在你的额头上印下一个大大的吻。「你真是个有品味的好食客！」");
	say();
	goto labelFunc0434_017C;
labelFunc0434_0178:
	message("Willy 沮丧地低头看着他拿着的面包。他嗅了两下，然后把它扔得远远的。");
	say();
labelFunc0434_017C:
	UI_add_answer(["烘焙师", "面包"]);
	goto labelFunc0434_0190;
labelFunc0434_018C:
	message("「请在白天面包店营业时来，你可以尝尝看！」");
	say();
labelFunc0434_0190:
	case "烘焙师" attend labelFunc0434_01BA:
	message("他点点头。「是的，我是个烘焙师，我有很多父母传下来的秘密食谱。哎呀，甚至有人说我是个大师级烘焙师！");
	say();
	message("「而且有些人还叫我……甜甜圈。」他皱着眉头说。");
	say();
	UI_remove_answer("烘焙师");
	UI_add_answer(["秘密食谱", "父母", "大师级烘焙师", "甜甜圈"]);
labelFunc0434_01BA:
	case "秘密食谱" attend labelFunc0434_01CD:
	message("「噢，天哪。别告诉我你又是另一个想从我这里套出秘密食谱的人！如果你是为了这个而来，那你一定会失望的！」");
	say();
	UI_remove_answer("秘密食谱");
labelFunc0434_01CD:
	case "父母" attend labelFunc0434_01E7:
	message("Willy 擦去一滴眼泪。「都走了。两个人都走了。去天上那个伟大的厨房与我的祖先相聚了。我永远无法像他们那样烹饪。但我还是坚持着，努力保持家族的名声，这就是我成为烘焙师的原因。但我想这不是唯一的原因。」");
	say();
	UI_remove_answer("父母");
	UI_add_answer("为什么");
labelFunc0434_01E7:
	case "大师级烘焙师" attend labelFunc0434_01FE:
	message("「是的，很多人都这么告诉我。现在你也这么说。既然你也这么说，那一定是真的！」");
	say();
	message("Willy 咬了一口自己的面包。「嗯。我『是』个大师级烘焙师！」");
	say();
	UI_remove_answer("大师级烘焙师");
labelFunc0434_01FE:
	case "甜甜圈" attend labelFunc0434_0211:
	message("他疑惑地看着你好一会儿。过了一会儿，他拿起一条面包，往你头上敲下去。");
	say();
	UI_remove_answer("甜甜圈");
labelFunc0434_0211:
	case "为什么" attend labelFunc0434_022B:
	message("「其实，我当烘焙师有一个很好的理由。」");
	say();
	UI_remove_answer("为什么");
	UI_add_answer("理由");
labelFunc0434_022B:
	case "理由" attend labelFunc0434_0245:
	message("「因为抓住女人的心，要先抓住她的胃。哎呀，我现在可是有两个女人爱着我，而且我连追都不用追。」");
	say();
	UI_remove_answer("理由");
	UI_add_answer("两个女人");
labelFunc0434_0245:
	case "两个女人" attend labelFunc0434_0265:
	message("他叹了口气。「如果你一定要知道，她们的名字是 Jeanette 和 Gaye 。」");
	say();
	UI_remove_answer("两个女人");
	UI_add_answer(["Jeanette", "Gaye"]);
labelFunc0434_0265:
	case "Jeanette" attend labelFunc0434_0278:
	message("「Jeanette 是个满讨人喜欢的女孩，但说实话，我无法想像自己跟一个酒馆女侍在一起。她以为我没注意到她对我的感觉。坦白说，我真希望她能离我远一点。」");
	say();
	UI_remove_answer("Jeanette");
labelFunc0434_0278:
	case "Gaye" attend labelFunc0434_028B:
	message("「经营服饰店的 Gaye 比较引起我的兴趣。但她是友谊会成员，而我不想加入。我希望这不会妨碍我们交往。」");
	say();
	UI_remove_answer("Gaye");
labelFunc0434_028B:
	case "面包" attend labelFunc0434_02AB:
	message("「我的面包是不列颠尼亚最好的。它以美味和合理的价格闻名。但是要做出足够的数量来满足不断的需求是很辛苦的工作。我需要雇用人来帮我。」");
	say();
	UI_remove_answer("面包");
	UI_add_answer(["买东西", "雇用"]);
labelFunc0434_02AB:
	case "买东西" attend labelFunc0434_02E5:
	if (!(var0002 == 0x0012)) goto labelFunc0434_02DA;
	message("「我不只卖面包，还有糕点、蛋糕和餐包。你能想像塞进嘴里最美味的烘焙食品！你想买一些吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0434_02D3;
	Func0946();
	goto labelFunc0434_02D7;
labelFunc0434_02D3:
	message("「如果你是一个真正有品味的人，你就会买一些！」");
	say();
labelFunc0434_02D7:
	goto labelFunc0434_02DE;
labelFunc0434_02DA:
	message("「恐怕面包店已经打烊了。请在正常营业时间再来。」");
	say();
labelFunc0434_02DE:
	UI_remove_answer("买东西");
labelFunc0434_02E5:
	case "雇用" attend labelFunc0434_033F:
	if (!(var0002 == 0x0012)) goto labelFunc0434_0334;
	message("「你可以在店里为我工作做面包。或者我会跟你买几袋面粉。你可以在 Paws 批发买，我会以每袋 4 枚金币向你收购。」");
	say();
	message("「你想在这里为我工作吗？」 Willy 满怀希望地问。");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0434_032D;
	message("「太好了！你可以马上开始工作！你每做五条面包，我就付你 5 枚金币。好吗？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0434_0326;
	gflags[0x00CB] = true;
	message("「首先你必须用面粉揉面团。只要在桌上撒点面粉，加点水让它变浓稠，嗯，变成面团。然后把面团放进烤箱里烤。等一会儿，然后——瞧！你就有面包了！」");
	say();
	goto labelFunc0434_032A;
labelFunc0434_0326:
	message("「很好。但我警告你，现在工作可不好找！」");
	say();
labelFunc0434_032A:
	goto labelFunc0434_0331;
labelFunc0434_032D:
	message("「很可惜你没空。你看起来像个懂得在厨房里穿梭的人。」");
	say();
labelFunc0434_0331:
	goto labelFunc0434_0338;
labelFunc0434_0334:
	message("「我很乐意在正常营业时间与你谈谈在我店里工作的事。」");
	say();
labelFunc0434_0338:
	UI_remove_answer("雇用");
labelFunc0434_033F:
	case "做面包" attend labelFunc0434_0351:
	Func0947();
	UI_remove_answer("做面包");
labelFunc0434_0351:
	case "卖面粉" attend labelFunc0434_0363:
	Func0948();
	UI_remove_answer("卖面粉");
labelFunc0434_0363:
	case "告辞" attend labelFunc0434_036E:
	goto labelFunc0434_0371;
labelFunc0434_036E:
	goto labelFunc0434_00B7;
labelFunc0434_0371:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("，祝你胃口大开！」*");
	say();
labelFunc0434_037C:
	if (!(event == 0x0000)) goto labelFunc0434_0403;
	var0003 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCC));
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0012)) goto labelFunc0434_03FD;
	if (!(var000D == 0x0001)) goto labelFunc0434_03C0;
	var000E = "@美味的面包！@";
labelFunc0434_03C0:
	if (!(var000D == 0x0002)) goto labelFunc0434_03D0;
	var000E = "@美味的糕点！@";
labelFunc0434_03D0:
	if (!(var000D == 0x0003)) goto labelFunc0434_03E0;
	var000E = "@国王吃的面包！@";
labelFunc0434_03E0:
	if (!(var000D == 0x0004)) goto labelFunc0434_03F0;
	var000E = "@新鲜的糕点！@";
labelFunc0434_03F0:
	UI_item_say(0xFFCC, var000E);
	goto labelFunc0434_0403;
labelFunc0434_03FD:
	Func092E(0xFFCC);
labelFunc0434_0403:
	return;
}


