#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08AB 0x8AB ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func08F7(0xFFF2);
	var0001 = Func08F7(0xFF14);
	var0002 = Func08F7(0xFFEE);
	var0003 = Func08F7(0xFFEA);
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFE);
	UI_show_npc_face(0xFFF0, 0x0000);
	message("Klog 正带领镇民进行一场友谊会会议。");
	say();
	message("「感谢各位 Trinsic 的友谊会成员今晚参加我们的会议。~~我想你们一定都很清楚我们城里所发生的罪行。现在是哀悼那些我们失去之人的时刻。我们将永远铭记我们的铁匠 Christopher，他既是我们镇上宝贵的公民，也是一位挚友。Inamo 是一位和蔼可亲且勤奋的石像鬼。正如他们的死亡所显示的，不列颠尼亚比以往任何时候都更需要友谊会。」");
	say();
	message("「友谊会的创立是为了推广一种理念，一种将乐观的思考秩序应用于生活的实践方法。你该如何遵循这种方法呢？通过将内在力量的三位一体 (Triad of Inner Strength) 应用于你的生活。这三位一体 (Triad) 由三个原则组成，当这三个原则同时应用于你的生活时，它们可以安抚社会的狂热，因为社会教导你接受失败，并从你的灵魂中驱逐破坏性的虚幻思想与情感。」");
	say();
	message("「第一个原则是致力合一 (Strive For Unity)。这意味着我们应该拒绝分歧，搁置我们的差异，并为了我们所有人的利益而共同努力。」");
	say();
	message("「第二个原则是信赖你的兄弟 (Trust Thy Brother)。信任是必不可少的，因为如果你们必须因不断提防彼此而分裂，你们还能成就什么呢？」");
	say();
	message("「第三个也是最后一个原则是价值先行于报偿 (Worthiness Precedes Reward)。一个人必须努力配得上我们每个人所追求的奖励，因为如果一个人不配得到奖励，你为什么会认为他们应该得到呢？」");
	say();
	message("「我们必须将这种理念传播给每一个能听到的人。因为除了我们友谊会之外，还有谁能将分裂、猜忌且不配的不列颠尼亚从悲惨的境地中提升起来呢？」");
	say();
	message("「现在是时候请我们每一位成员大声发表感言，并讲述与友谊会同行是如何影响他们的生活。」*");
	say();
	if (!var0001) goto labelFunc08AB_007B;
	UI_show_npc_face(0xFF14, 0x0000);
	message("「友谊会让我能够伸出援手帮助他人，而在此之前我总是太忙碌了。」*");
	say();
	UI_remove_npc_face(0xFF14);
labelFunc08AB_007B:
	if (!var0000) goto labelFunc08AB_0096;
	UI_show_npc_face(0xFFF2, 0x0000);
	message("「友谊会让我运行 Trinsic 守卫的工作时变得更加机警和细心。」*");
	say();
	UI_remove_npc_face(0xFFF2);
labelFunc08AB_0096:
	if (!var0002) goto labelFunc08AB_00BF;
	UI_show_npc_face(0xFFEE, 0x0000);
	message("「友谊会让我成为一个更快乐、更随和的人。」*");
	say();
	UI_show_npc_face(0xFFF0, 0x0000);
	message("「感谢你的分享，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFEE);
labelFunc08AB_00BF:
	if (!var0003) goto labelFunc08AB_00DA;
	UI_show_npc_face(0xFFEA, 0x0000);
	message("「身为友谊会成员，我觉得我正在为不列颠尼亚做一些好事。」*");
	say();
	UI_remove_npc_face(0xFFEA);
labelFunc08AB_00DA:
	if (!var0005) goto labelFunc08AB_00F5;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 小声嘀咕着，不对任何人说：「这是我有幸身处其中过最无聊的马粪堆了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc08AB_00F5:
	if (!var0004) goto labelFunc08AB_0110;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 拍了拍自己的脸颊，让自己不要睡着。~~「圣者，我相信我们已经听够这些了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc08AB_0110:
	UI_show_npc_face(0xFFF0, 0x0000);
	message("显然这场会议还会持续一段时间……你决定你有更重要的事情要处理。*");
	say();
	abort;
	return;
}
