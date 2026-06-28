#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0850 0x850 ()
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

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	message("仪式开始了，巴特林站在聚集的友谊会成员面前。大厅里充满了雷鸣般的欢呼声。他们以敬畏和纯粹的崇拜交织的目光看着他。巴特林站着，在热烈的欢迎中沐浴了片刻，脸上挂着胜利的微笑。他轻轻一挥手，人群便安静了下来。");
	say();
	message("「很高兴今晚能在这里见到你们！」巴特林说。「你们确实让我为能成为我们所深爱的友谊会的一员而感到自豪。」又爆发出一阵掌声。");
	say();
	message("「在你的心中，为你与友谊会同行而感到高兴吧！不列颠尼亚的人民生活在虚幻的思想和情感的狂热状态中。但我今晚在这里看到的人，都是在这世界上寻求真善美的人！他们走在通往真正认知的道路上。但是你如何找到你的路呢？问任何一个友谊会成员，他们都会告诉你！通往完全觉知的道路很容易找到。一个人必须将内在力量三位一体 (Triad) 应用到他的生活中。」");
	say();
	message("「『内在力量的三位一体』包含了『三个价值观』，可以使心灵达到乐观认知的完美状态。第一个价值观是『致力合一』。当全世界所有人都想完成某件事时，这件事就会实现。因此，一旦全世界的人都朝着同一个目标努力，就没有什么是不可能的。想像一下！一个可以实现任何梦想、可以达成任何善行的世界。但正如你通过观察我们自己这个悲惨的社会所能清楚看到的，当全世界的人不团结时，能完成任何事情简直是个奇迹！");
	say();
	message("「第二个价值观是『信赖你的兄弟』。你必须放弃你的恐惧、偏见和猜疑。看看你自己吧！在质疑任何事情之前，先质疑你自己！世界是一个自然平衡在你甚至没有意识到的情况下每秒都在保护你的地方！如果你把所有的时间都花在质疑你的兄弟上，你在这个世界上能成就什么？！他有我这么努力吗？他的真实动机是什么？当你浪费精力去想这些时，他看到你，也开始对你想着同样的事情。因此世界被削弱了！");
	say();
	message("「第三个价值观是『价值先行于报偿』。我们当中没有一个人是没有欲望的。世上许多的苦难都可以追溯到未满足的欲望。但等一下！你凭什么得到你想要的东西？大多数人在这一生中都会得到他们应得的。如果你配不上你的欲望，那么如果你的欲望没有实现，你就不应该感到惊讶。只有当你变得『配得上』时，你才会对实现欲望，敞开大门。欲望是一件奇怪的事。许多人渴望他们并不真正想要的东西。他们真正渴望的是『配得上』这件事！");
	say();
	message("「我刚刚已经告诉你们遵循内在力量三位一体所需要知道的一切。这些教导很简单。衡量你理解程度的真正标准，在于你将多么绝对地将它们应用到你的生活中。你现在已经知道了你将需要的所有东西。你不需要正在消亡的魔法艺术的奥秘知识。你不需要治疗师不确定的手法和他有限的知识。你所需要的就是不断地寻求自己最好的一面，并生活在那些愿意做同样事情的人当中。只有那样，你才是真正地与友谊会同行。」");
	say();
	message("「现在我认为是听听我们成员分享的好时机。听听他们与我们分享友谊会如何为他们的生活带来积极的改变。」");
	say();
	var0002 = Func08F7(0xFFD7);
	if (!var0002) goto labelFunc0850_005A;
	UI_show_npc_face(0xFFD7, 0x0000);
	message("「友谊会让我看到我一直害怕自己，我必须敞开心扉去接受生活的体验，」Candice 说。*");
	say();
	UI_remove_npc_face(0xFFD7);
labelFunc0850_005A:
	var0003 = Func08F7(0xFFD5);
	if (!var0003) goto labelFunc0850_008C;
	UI_show_npc_face(0xFFD5, 0x0000);
	message("「友谊会帮助我对人更加诚实，」Patterson 说。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「谢谢你的分享，Patterson。」*");
	say();
	UI_remove_npc_face(0xFFD5);
labelFunc0850_008C:
	var0004 = Func08F7(0xFFD3);
	if (!var0004) goto labelFunc0850_00B0;
	UI_show_npc_face(0xFFD3, 0x0000);
	message("「友谊会教会我如何更好地履行身为皇家果园管理员的职责，」Figg 说。*");
	say();
	UI_remove_npc_face(0xFFD3);
labelFunc0850_00B0:
	var0005 = Func08F7(0xFFCB);
	if (!var0005) goto labelFunc0850_00D4;
	UI_show_npc_face(0xFFCB, 0x0000);
	message("「友谊会教会我，首先也是最重要的是，要尊重他人，」Gaye 说。*");
	say();
	UI_remove_npc_face(0xFFCB);
labelFunc0850_00D4:
	var0006 = Func08F7(0xFFC9);
	if (!var0006) goto labelFunc0850_00F8;
	UI_show_npc_face(0xFFC9, 0x0000);
	message("「加入友谊会后，我学会了如何成为一个真正的男人，」Grayson 说。*");
	say();
	UI_remove_npc_face(0xFFC9);
labelFunc0850_00F8:
	var0007 = Func08F7(0xFFC6);
	if (!var0007) goto labelFunc0850_012A;
	UI_show_npc_face(0xFFC6, 0x0000);
	message("「友谊会正在帮助我从个人和财务破产的边缘中恢复过来，」Gordon 说。*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「你说得对，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFC6);
labelFunc0850_012A:
	var0008 = Func08F7(0xFFC5);
	if (!var0008) goto labelFunc0850_014E;
	UI_show_npc_face(0xFFC5, 0x0000);
	message("「友谊会将我从平庸的虚幻吸引力中解放出来，」Sean 说。*");
	say();
	UI_remove_npc_face(0xFFC5);
labelFunc0850_014E:
	var0009 = Func08F7(0xFFC1);
	if (!var0009) goto labelFunc0850_0172;
	UI_show_npc_face(0xFFC1, 0x0000);
	message("「在友谊会里，我学到我需要将我的一生奉献给一个特殊的目标，」Millie 说。*");
	say();
	UI_remove_npc_face(0xFFC1);
labelFunc0850_0172:
	var000A = Func08F7(0xFFFE);
	if (!var000A) goto labelFunc0850_0196;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「这整个仪式和里面的每一个人都让我毛骨悚然！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0850_0196:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0850_01BA;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看到这么多人生活中没有更好的事可做，只能盲目地跟随这个可疑的精神领袖，真是一件可悲的事。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0850_01BA:
	var000C = Func08F7(0xFFFD);
	if (!var000C) goto labelFunc0850_01DE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「不列颠尼亚堕落到如此地步，竟然让自己对友谊会这样的团体敞开大门，真是一件可悲的事。」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0850_01DE:
	var000D = Func08F7(0xFFFC);
	if (!var000D) goto labelFunc0850_0202;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我甚至无聊到无法在友谊会的仪式上睁开眼睛，真是一件可悲的事！」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0850_0202:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("看着巴特林和其他人，你有一种感觉，友谊会的仪式将会持续到深夜。现在是个溜走的好时机，不会引起太多注意……*");
	say();
	abort;
	return;
}


