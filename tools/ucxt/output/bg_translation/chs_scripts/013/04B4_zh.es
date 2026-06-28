#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func04B4 object#(0x4B4) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B4_027B;
	UI_show_npc_face(0xFF4C, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0239]) goto labelFunc04B4_003C;
	if (!(!gflags[0x0238])) goto labelFunc04B4_003C;
	UI_add_answer("Inamo");
labelFunc04B4_003C:
	if (!gflags[0x0004]) goto labelFunc04B4_0049;
	UI_add_answer("月之门");
labelFunc04B4_0049:
	if (!(!gflags[0x0245])) goto labelFunc04B4_005B;
	message("你看到一位年迈的石像鬼，身躯弯曲枯槁，却带着一种王者的风范。他温和地笑了笑。");
	say();
	gflags[0x0245] = true;
	goto labelFunc04B4_005F;
labelFunc04B4_005B:
	message("「很高兴再次见到你，老朋友。这么快又需要 Draxinusom 了？」");
	say();
labelFunc04B4_005F:
	converse attend labelFunc04B4_0276;
	case "姓名" attend labelFunc04B4_007B:
	message("「很多年了。是你的老熟人，");
	message(var0000);
	message("，Draxinusom。」");
	say();
	UI_remove_answer("姓名");
labelFunc04B4_007B:
	case "职业" attend labelFunc04B4_0094:
	message("「问起职业？目前无法说我真的有一份职业。注意到年轻人不再向我寻求指导了。更多是去找 Teregus ，或者，更常见的是去找友谊会里的人。」");
	say();
	UI_add_answer(["Teregus", "友谊会"]);
labelFunc04B4_0094:
	case "Terfin" attend labelFunc04B4_00AE:
	message("「对我们的需求来说相当舒适。然而，不幸的是，人类认为有必要将我们隔离起来。这在我们的年轻一代中引发了怨恨和紧张。他们不记得过去的日子，我的朋友——我们必须共同努力才能生存的日子。」他笑了笑，重温着往昔的记忆，然后摇了摇头。~~「我们搬迁时不得不放弃很多东西。」");
	say();
	UI_add_answer("放弃");
	UI_remove_answer("Terfin");
labelFunc04B4_00AE:
	case "放弃" attend labelFunc04B4_00D8:
	message("「有很多最喜欢的财产。搬运这么多东西太麻烦了。」他叹了口气。");
	say();
	if (!gflags[0x01E0]) goto labelFunc04B4_00D1;
	message("~「特别后悔卖掉了我的以太戒指 (Ethereal Ring) 。」");
	say();
	UI_add_answer(["贩卖", "以太戒指 (Ethereal Ring)"]);
labelFunc04B4_00D1:
	UI_remove_answer("放弃");
labelFunc04B4_00D8:
	case "以太戒指 (Ethereal Ring)" attend labelFunc04B4_00EB:
	message("「啊。确实是一件可爱的宝物。曾经非常有用。真的，不得不卖掉它真是个遗憾。曾经是我最喜欢的宝物之一。」");
	say();
	UI_remove_answer("以太戒指 (Ethereal Ring)");
labelFunc04B4_00EB:
	case "贩卖" attend labelFunc04B4_0105:
	message("「当我们被……呃……可以说是被要求搬到这座岛上时，卖掉了我大部分的宝物。这一切都发生得相当快，你看。大部分都卖给了 Spektran 的苏丹。」");
	say();
	UI_add_answer("Sultan");
	UI_remove_answer("贩卖");
labelFunc04B4_0105:
	case "Sultan" attend labelFunc04B4_0129:
	message("「对人类来说，他看起来够好。即使以人类的标准来看，他也有点疯狂。告诉你，他住在我们西边的一个岛上。至少我知道，我珍贵的财产在他手上会很安全。」");
	say();
	UI_add_answer("安全");
	gflags[0x023B] = true;
	Func0911(0x0032);
	UI_remove_answer("Sultan");
labelFunc04B4_0129:
	case "安全" attend labelFunc04B4_013C:
	message("他点点头。「据说拥有全不列颠尼亚防守最严密的金库之一。据说是被附魔过的。不知道细节。」");
	say();
	UI_remove_answer("安全");
labelFunc04B4_013C:
	case "Inamo" attend labelFunc04B4_017E:
	UI_remove_answer("Inamo");
	message("「是个优秀的年轻石像鬼。由祭坛看守者 Teregus 抚养长大。因为祭坛崇拜者与友谊会之间的紧张关系而离开了城镇。对友谊会感到愤怒且不信任。有他的消息吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04B4_017A;
	message("「太好了！你见过他？知道他过得怎样吗？好吗？」");
	say();
	gflags[0x0238] = true;
	UI_push_answers();
	UI_add_answer(["被谋杀", "不好", "好"]);
	goto labelFunc04B4_017E;
labelFunc04B4_017A:
	message("「啊。太糟糕了。告诉你， Teregus 想知道他过得怎样。」");
	say();
labelFunc04B4_017E:
	case "好" attend labelFunc04B4_018E:
	message("「非常好。知道 Teregus 听到这个消息也会很高兴的！」");
	say();
	UI_pop_answers();
labelFunc04B4_018E:
	case "被谋杀" attend labelFunc04B4_019E:
	message("「真是个坏消息！他是个这么好的石像鬼。知道 Teregus 一定会心碎。希望他不要太伤心，但你应该立刻把消息带给他。由你来告诉他会比较好。」");
	say();
	UI_pop_answers();
labelFunc04B4_019E:
	case "月之门" attend labelFunc04B4_01B1:
	message("「我自己拥有的月之宝珠 (Orb of the Moons) 最近爆炸了！再也无法通过月之门旅行了。真奇怪！」");
	say();
	UI_remove_answer("月之门");
labelFunc04B4_01B1:
	case "不好" attend labelFunc04B4_01C1:
	message("「真是个遗憾。会把这个消息带给 Teregus 。还在纳闷为什么最近都没听到 Inamo 的消息。」");
	say();
	UI_pop_answers();
labelFunc04B4_01C1:
	case "Teregus" attend labelFunc04B4_01EA:
	message("「确实是个优秀的年轻石像鬼。也是最明理的之一。选择坚持古老的方式，祭坛的方式。看到一些最年轻的仍然仰慕他，但大多数似乎都被友谊会的魅力吸引走了。」");
	say();
	if (!(!gflags[0x0238])) goto labelFunc04B4_01E3;
	message("「告诉你他的孩子， Inamo ，现在在 Trinsic 。」");
	say();
	gflags[0x0239] = true;
	UI_add_answer("Inamo");
labelFunc04B4_01E3:
	UI_remove_answer("Teregus");
labelFunc04B4_01EA:
	case "友谊会" attend labelFunc04B4_020A:
	message("「不知道该如何看待他们和他们的教义。似乎不危险，但没有遵循古老的方式，也就是热情、勤勉和控制的方式。当然，假装崇拜 Terfin 的神殿，特别是控制神殿，但还不能信任他们。等着瞧吧。有着强势的领袖拥护着屈服的教义。」他耸了耸肩。~~「也许真的受到了启发，也许没有。」");
	say();
	UI_add_answer(["Terfin", "领袖"]);
	UI_remove_answer("友谊会");
labelFunc04B4_020A:
	case "领袖" attend labelFunc04B4_022A:
	message("「通知你，友谊会由两位有翼弟兄领导。叫做 Runeb 和 Quan 。」");
	say();
	UI_add_answer(["Runeb", "Quan"]);
	UI_remove_answer("领袖");
labelFunc04B4_022A:
	case "Runeb" attend labelFunc04B4_0255:
	message("「在你们的语言中，意思是『红色迷雾』。之所以被赋予这个名字，是因为这就是他在战斗后留给对手的一切。在被友谊会改变之前，被认为是个特别残忍且危险的石像鬼。」");
	say();
	var0002 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0002) goto labelFunc04B4_024E;
	message("「已经不在了——现在已经死了。」");
	say();
labelFunc04B4_024E:
	UI_remove_answer("Runeb");
labelFunc04B4_0255:
	case "Quan" attend labelFunc04B4_0268:
	message("「啊，是个有趣的人。拥有强大有力的性格，来自我们社会中最能宣称拥有高贵血统的家族之一。一直都非常自私，只努力为自己获取地位和财富。自从加入友谊会后，他的态度的确改变了。然而，我怀疑他的目标是否也改变了。」");
	say();
	UI_remove_answer("Quan");
labelFunc04B4_0268:
	case "告辞" attend labelFunc04B4_0273:
	goto labelFunc04B4_0276;
labelFunc04B4_0273:
	goto labelFunc04B4_005F;
labelFunc04B4_0276:
	endconv;
	message("「道别了，老朋友。如果还有什么我能为你做的，请毫不犹豫地回来。对于一个致力于古老传统的老石像鬼来说，这里现在很孤单……」*");
	say();
labelFunc04B4_027B:
	if (!(event == 0x0000)) goto labelFunc04B4_0284;
	abort;
labelFunc04B4_0284:
	return;
}


