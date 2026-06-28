#game "blackgate"
// externs
extern void Func01B0 shape#(0x1B0) ();
extern var Func0881 0x881 ();
extern var Func092D 0x92D (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0696 object#(0x696) ();
extern void Func069A object#(0x69A) ();

void Func009A shape#(0x9A) ()
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
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;

	if (!(event == 0x0000)) goto labelFunc009A_01CB;
	var0000 = UI_find_nearest(item, 0x0150, 0x0001);
	var0001 = UI_find_nearest(item, 0x0152, 0x0001);
	var0002 = UI_find_nearest(item, 0x03E5, 0x0001);
	if (!(var0000 || (var0001 || var0002))) goto labelFunc009A_00F8;
	var0003 = UI_get_random(0x0064);
	if (!(var0003 >= 0x003C)) goto labelFunc009A_005D;
	UI_item_say(item, "@该死的蜡烛！@");
	return;
labelFunc009A_005D:
	if (!(var0003 <= 0x0028)) goto labelFunc009A_00F5;
	var0004 = var0000;
	var0004 = (var0004 & var0001);
	var0004 = (var0004 & var0002);
	enum();
labelFunc009A_0082:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc009A_00CF;
	var0008 = UI_get_object_position(var0007);
	UI_remove_item(var0007);
	UI_sprite_effect(0x0005, (var0008[0x0001] - 0x0001), (var0008[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0008);
	goto labelFunc009A_0082;
labelFunc009A_00CF:
	var0009 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x27, 0x0001, (byte)0x01, (byte)0x52, "@An Ailem！", (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0006]);
	return;
labelFunc009A_00F5:
	goto labelFunc009A_01CB;
labelFunc009A_00F8:
	if (!UI_find_nearest(item, 0x0369, 0x0001)) goto labelFunc009A_0112;
	UI_item_say(item, "@我饿坏了！@");
	return;
	goto labelFunc009A_01CB;
labelFunc009A_0112:
	var000A = UI_find_nearest(item, 0x01B0, 0x0002);
	var000B = UI_find_nearest(item, 0x01B1, 0x0002);
	if (!(var000A || var000B)) goto labelFunc009A_0163;
	if (!var000A) goto labelFunc009A_0151;
	UI_item_say(item, "@终于，我的门。@");
	event = 0x0001;
	var000A->Func01B0();
	return;
labelFunc009A_0151:
	if (!var000B) goto labelFunc009A_0160;
	UI_item_say(item, "@终于，我的门。@");
	return;
labelFunc009A_0160:
	goto labelFunc009A_01CB;
labelFunc009A_0163:
	var000C = UI_find_nearby(item, 0x025F, 0x0000, 0x0010);
	if (!var000C) goto labelFunc009A_01CB;
	enum();
labelFunc009A_017B:
	for (var000F in var000C with var000D to var000E) attend labelFunc009A_01CB;
	if (!((UI_get_item_frame(var000F) == 0x0004) && (UI_get_item_frame(item) >= 0x0010))) goto labelFunc009A_01BF;
	UI_item_say(item, "@啊，一堵墙。@");
	var0010 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@我跟着它走。@"], 0x0012);
	return;
	goto labelFunc009A_01C8;
labelFunc009A_01BF:
	UI_item_say(item, "@我在哪里？@");
	return;
labelFunc009A_01C8:
	goto labelFunc009A_017B;
labelFunc009A_01CB:
	if (!(!UI_get_cont_items(item, 0x031D, 0x00F0, 0x0004))) goto labelFunc009A_01DE;
	return;
labelFunc009A_01DE:
	if (!(event == 0x0001)) goto labelFunc009A_0220;
	if (!(!Func0881())) goto labelFunc009A_021F;
	var0011 = Func092D(item);
	var0012 = ((var0011 + 0x0004) % 0x0008);
	var0009 = UI_execute_usecode_array(item, [(byte)0x61, (byte)0x59, var0012, (byte)0x55, 0x009A, 0x0000]);
	goto labelFunc009A_0220;
labelFunc009A_021F:
	abort;
labelFunc009A_0220:
	if (!(event == 0x0002)) goto labelFunc009A_093E;
	var0013 = Func0908();
	if (!gflags[0x030E]) goto labelFunc009A_0243;
	UI_show_npc_face(0xFEE2, 0x0001);
	message("「我不会再跟你说话了，圣者！」他无视了你。*");
	say();
	abort;
labelFunc009A_0243:
	if (!(!gflags[0x0310])) goto labelFunc009A_0286;
	UI_show_npc_face(0xFEE2, 0x0000);
	message("当你靠近时，老人挺直身子，直视着你说：「很高兴见到你，");
	message(var0013);
	message("。我名叫 Erethian 。虽然你不认识我，但我却对你非常了解。」");
	say();
	message("「我曾见证你摧毁 Mondain 的力量，从而击败那误入歧途的法师；我见证你征服了女巫 Minax ；我也曾以一种非常独特的方式，看着你如何击倒地狱魔物 Exodus 。」");
	say();
	message("他在这里沉默下来，你注意到这老人的双眼呈现乳白色。");
	say();
	gflags[0x0310] = true;
	UI_add_answer(["姓名", "职业", "Mondain", "Minax", "Exodus", "告辞"]);
	goto labelFunc009A_02C6;
labelFunc009A_0286:
	if (!(!(gflags[0x032A] || gflags[0x032B]))) goto labelFunc009A_02A8;
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「再次向你致意，");
	message(var0013);
	message("。我有什么能帮你的吗？」盲眼老法师准确无误地看向你的方向。");
	say();
	goto labelFunc009A_02B6;
labelFunc009A_02A8:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("「这样下去我什么事都做不成！你想从我这里得到什么？」 Erethian 此刻显得有些暴躁。");
	say();
labelFunc009A_02B6:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc009A_02C6:
	if (!gflags[0x0337]) goto labelFunc009A_02E4;
	if (!(!gflags[0x0338])) goto labelFunc009A_02E1;
	if (!(!gflags[0x0330])) goto labelFunc009A_02E1;
	UI_add_answer("黑剑");
labelFunc009A_02E1:
	goto labelFunc009A_02F8;
labelFunc009A_02E4:
	if (!(!gflags[0x0312])) goto labelFunc009A_02F8;
	if (!gflags[0x0311]) goto labelFunc009A_02F8;
	UI_add_answer("强大的神器");
labelFunc009A_02F8:
	if (!gflags[0x0313]) goto labelFunc009A_0338;
	if (!(!gflags[0x032F])) goto labelFunc009A_030F;
	UI_add_answer("恶魔之镜");
	goto labelFunc009A_0335;
labelFunc009A_030F:
	if (!(!gflags[0x0330])) goto labelFunc009A_0327;
	if (!(!gflags[0x0338])) goto labelFunc009A_0324;
	UI_add_answer("恶魔宝石");
labelFunc009A_0324:
	goto labelFunc009A_0335;
labelFunc009A_0327:
	if (!(!gflags[0x0339])) goto labelFunc009A_0335;
	UI_add_answer("恶魔之刃");
labelFunc009A_0335:
	goto labelFunc009A_0352;
labelFunc009A_0338:
	if (!gflags[0x032F]) goto labelFunc009A_0352;
	if (!gflags[0x0330]) goto labelFunc009A_0352;
	if (!(!gflags[0x0339])) goto labelFunc009A_0352;
	UI_add_answer("恶魔之刃");
labelFunc009A_0352:
	if (!gflags[0x0318]) goto labelFunc009A_035F;
	UI_add_answer("Psyche回来了");
labelFunc009A_035F:
	if (!gflags[0x0327]) goto labelFunc009A_036C;
	UI_add_answer("巨大的邪恶");
labelFunc009A_036C:
	if (!gflags[0x0341]) goto labelFunc009A_0379;
	UI_add_answer("无限护符");
labelFunc009A_0379:
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = false;
labelFunc009A_0389:
	converse attend labelFunc009A_0929;
	case "Psyche回来了" attend labelFunc009A_03B7:
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「这可能是真的吗？」 Erethian 盲目的双眼闪烁着毫不掩饰的喜悦。「这对我来说是多么好的一个机会啊。」");
	say();
	UI_show_npc_face(0xFEE2, 0x0001);
	message("他再次注意到你的存在。「现在，不要让任何破坏的怪念头进入你的脑袋，圣者。我绝不会让你剥夺我体验这世界真正奇迹的机会。现在走开吧……难道在其他地方没有你需要去伸张的正义吗？」");
	say();
	UI_remove_answer("Psyche回来了");
labelFunc009A_03B7:
	case "巨大的邪恶" attend labelFunc009A_03D4:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("年迈的法师皱起眉头。「我感觉不到任何巨大的邪恶，但话说回来，我从未完全掌握感知宇宙的诀窍。不过，你别太担心了。这些事情往往会自己解决的。」你感觉就像是被人摸了摸头，然后叫去别的地方玩一样。");
	say();
	UI_remove_answer("巨大的邪恶");
labelFunc009A_03D4:
	case "无限护符" attend labelFunc009A_0485:
	if (!(!gflags[0x030F])) goto labelFunc009A_0434;
	gflags[0x030F] = true;
	message("「啊，是的。我曾经有一卷卷轴，上面记载着一个同名护符的事。要是我能想起把它放哪里就好了。你刚好有带着那张名为『无限卷轴』的羊皮纸吗？」");
	say();
	if (!Func090A()) goto labelFunc009A_042D;
	if (!(!UI_count_objects(0xFE9B, 0x031D, 0x0032, 0x0001))) goto labelFunc009A_040C;
	message("「如果你没有那卷轴，我这件事就帮不上忙了。」");
	say();
	goto labelFunc009A_042A;
labelFunc009A_040C:
	message("「就在这里。那么，它似乎是以一种奇怪的格式写成的。甚至可以说是一种密码……我知道了！显然，这个护符目前存在于大虚空（Great Void）之中。一个有些远离我们的位面。如果你想进入这个虚空，你需要制作两片透镜：一片凹透镜，另一片凸透镜。光线通过适当附魔的透镜聚焦，将会在我们的领域与虚空之间打开一条信道。我相信这篇论述提到了三个原则护符（Talismans of Principle），它们会向无限护符发出呼唤并将其带到这里。一旦它到了这里，看起来它唯一的目的就是将一股强大的力量强行拉入虚空之中。」一个念头如闪电劈中树木般击中这位法师。「噢，不，圣者……你别想再从我这里得到任何帮助。我或许瞎了，但我看穿了你的把戏。我不会帮你把内核（Core）送进虚空的。」 Erethian 沉默了下来，看来他不会再开口了。");
	say();
	UI_remove_npc_face(0xFEE2);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("Arcadion 的声音如静止池塘中的涟漪般向你低语：「别怕，我的主人。我对这些事情略知一二。」*");
	say();
	gflags[0x030E] = true;
	abort;
labelFunc009A_042A:
	goto labelFunc009A_0431;
labelFunc009A_042D:
	message("「很好。我需要那卷卷轴才能给你进一步的信息。」");
	say();
labelFunc009A_0431:
	goto labelFunc009A_047E;
labelFunc009A_0434:
	message("「你的随身物品中有无限卷轴吗？」");
	say();
	if (!Func090A()) goto labelFunc009A_047A;
	if (!(!UI_count_objects(0xFE9B, 0x031D, 0x0032, 0x0001))) goto labelFunc009A_0459;
	message("「我必须亲自触摸那卷轴才能了解它的含义。否则我无法在这件事上帮助你。」");
	say();
	goto labelFunc009A_0477;
labelFunc009A_0459:
	message("「就在这里。那么，它似乎是以一种奇怪的格式写成的。甚至可以说是一种密码……我知道了！显然，这个护符目前存在于大虚空（Great Void）之中。一个有些远离我们的位面。如果你想进入这个虚空，你需要制作两片透镜：一片凹透镜，另一片凸透镜。光线通过适当附魔的透镜聚焦，将会在我们的领域与虚空之间打开一条信道。我相信这篇论述提到了三个原则护符（Talismans of Principle），它们会向无限护符发出呼唤并将其带到这里。一旦它到了这里，看起来它唯一的目的就是将一股强大的力量强行拉入虚空之中。」一个念头如闪电劈中树木般击中这位法师。「噢，不，圣者……你别想再从我这里得到任何帮助。我或许瞎了，但我看穿了你的把戏。我不会帮你把内核（Core）送进虚空的。」 Erethian 沉默了下来，看来他不会再开口了。");
	say();
	UI_remove_npc_face(0xFEE2);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("Arcadion 的声音如静止池塘中的涟漪般向你低语：「别怕，我的主人。我对这些事情略知一二。」*");
	say();
	gflags[0x030E] = true;
	abort;
labelFunc009A_0477:
	goto labelFunc009A_047E;
labelFunc009A_047A:
	message("「如果你把卷轴带来给我，我可以协助你找出那古老文本的含意。」");
	say();
labelFunc009A_047E:
	UI_remove_answer("无限护符");
labelFunc009A_0485:
	case "强大的神器" attend labelFunc009A_0498:
	message("「我曾试图创造一把威力强大的剑。」 Erethian 专注地皱起眉头，接着说：「如果你想接续我的工作，你需要一些锻造设备……还有一个可以放置它们的地方……我知道一个绝佳地点。跟我来，我看看能帮你什么忙。」*");
	say();
	var0015 = true;
	goto labelFunc009A_0929;
labelFunc009A_0498:
	case "黑剑" attend labelFunc009A_050D:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("当你告诉 Erethian 你对那把黑剑的困扰时，他点了点头。「是的，我可以理解这把剑在战斗中挥舞起来会有多笨重。不过，如果你能将一个魔法力量源绑定在剑柄上，你或许就能抵销这把剑难以驾驭的特性。」");
	say();
	if (!UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D)) goto labelFunc009A_04F2;
	UI_show_npc_face(0xFEDD, 0x0000);
	message("话题一转，那颗小宝石闪烁了起来。「我相信以我目前的型态，我可以完美地胜任这把剑的稳定力量。事实上，这将能让我为你提供一些我更具戏剧性的力量。」这只恶魔对这个前景听起来很兴奋，也许兴奋过头了。");
	say();
	UI_remove_npc_face(0xFEDD);
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 轻声说道：「在你将 Arcadion 绑定到剑上之前请三思。因为他确实能解决剑的平衡问题，但他能解决他自己的问题吗？」");
	say();
	UI_add_answer("问题");
	goto labelFunc009A_04FC;
labelFunc009A_04F2:
	if (!gflags[0x032F]) goto labelFunc009A_04FC;
	message("你想知道也许 Arcadion 能够厘清这个问题，仿佛读懂了你的心思般， Erethian 说：「小心那只恶魔。他的目标与你或我不同。如果他主动提出要帮忙，那是为了帮他自己。这点你可以肯定。」");
	say();
labelFunc009A_04FC:
	gflags[0x0338] = true;
	UI_remove_answer(["黑剑", "恶魔宝石"]);
labelFunc009A_050D:
	case "问题" attend labelFunc009A_0520:
	message("「这是你的选择。显然你需要让这把剑发挥作用，但如果这恶魔是你唯一的依靠，我同情你。因为就像 Arcadion 会被绑定在剑里一样肯定，你也会被绑定去持有它。我不能再多说什么了。」");
	say();
	UI_remove_answer("问题");
labelFunc009A_0520:
	case "姓名" attend labelFunc009A_0539:
	message("法师对你微微一笑，「看来你的记忆力衰退了，");
	message(var0013);
	message("。正如我所说，我的名字是 Erethian 。」");
	say();
	UI_remove_answer("姓名");
labelFunc009A_0539:
	case "职业" attend labelFunc009A_056E:
	message("「我是真理原则的追随者。但与 Lyceaum 的那些人不同，我宁愿主动去寻求知识，而不是等它自己找上门。");
	say();
	message("正是这种好奇心把我带到了这座岛屿， Mondain 和 Minax 的子嗣 Exodus 曾经试图从这里统治世界。");
	say();
	message("这里的书籍和卷轴教会了我许多关于不列颠尼亚的历史与其他……有趣的主题。」");
	say();
	message("他混浊的双眼闪烁着智能。但你忍不住好奇，书籍和卷轴对一个受失明之苦的人能有什么用。");
	say();
	UI_remove_answer("职业");
	UI_add_answer(["Mondain", "Minax", "Exodus", "主题", "失明"]);
labelFunc009A_056E:
	case "主题" attend labelFunc009A_0581:
	message("「如果你有兴趣，请随意查阅。这里可不是图书馆。」仿佛对自己友善的举动感到后悔，他补充道：「不过，我相信你会非常小心对待那些古老的书籍。」他停顿下来，似乎还想再说些什么。");
	say();
	UI_remove_answer("主题");
labelFunc009A_0581:
	case "失明" attend labelFunc009A_059F:
	if (!(!gflags[0x032B])) goto labelFunc009A_059A;
	var0014 = true;
	goto labelFunc009A_0929;
	goto labelFunc009A_059F;
labelFunc009A_059A:
	message("「你真是个烦人的小孩。别管我！」他无视你的存在。*");
	say();
	abort;
labelFunc009A_059F:
	case "Mondain" attend labelFunc009A_05C7:
	message("Erethian 皱着眉头，「那可是个强大的巫师。有点扭曲，但谁知道当人类的心智屈服于他所掌握的力量时会发生什么事。");
	say();
	message("甚至有传言说光是他的头骨就有摧毁敌人的力量……他一定在上面锁定了一个魔法矩阵，我得好好研究一下。」他点点头，似乎在心里记下了一笔，然后带着一丝渴望的神情继续说道，");
	say();
	message("「我本来会很想研究那颗迷人的不朽宝石，但可惜啊，我出生的时代太晚了。」");
	say();
	UI_add_answer(["不朽宝石", "头骨"]);
	UI_remove_answer("Mondain");
labelFunc009A_05C7:
	case "Minax" attend labelFunc009A_063A:
	message("巫师脸上露出一抹带着感伤的甜美微笑，「她曾经是个相当清秀的少女，有着一颗永远在探索的心。」他的表情暗了下来，「但是后来 Mondain 把她所有良知都给夺走了。");
	say();
	message("随着时间过去，她自己成为了一股势力。我认为她并未能完全匹敌她的前导师 Mondain ，但无论如何，她仍是一股不容小觑的力量。");
	say();
	message("而你做到了，用那把快剑 Enilno 。这项壮举很可能在下一个纪元里都会被传唱。」他低声补充道：「即使 Iolo 是唯一一个在唱的人。」");
	say();
	if (!UI_find_nearest(item, 0x01D1, 0x0028)) goto labelFunc009A_062C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 带着愤慨的神情说道：「请原谅，先生。但我必须让你知道，关于圣者的民谣仍然为不列颠尼亚所有最高级的酒馆增添光彩。」");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「那真是种可疑的荣耀啊。」法师的嘴角泛起一丝微妙的微笑。");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("当老法师举起双手做出和平的手势时， Iolo 嘴边愤怒的反驳便咽了回去。");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「拜托，请原谅我的冒犯。你应该知道，我几乎是亲眼见证了圣者在逆境中展现的勇气。");
	say();
	message("我对这位黑暗时代的终结者及启蒙时代的先驱，只有最高的敬意。");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc009A_062C:
	UI_add_answer("快剑 Enilno");
	UI_remove_answer("Minax");
labelFunc009A_063A:
	case "Exodus" attend labelFunc009A_065E:
	message("「那家伙最近成了我的狂热所在。」他几乎兴奋得发光。「的确，这正是把我带到这里的原因。当我在 Lyceaum 的时候，我偶然在手稿中看到一段描述烈火岛的文本。");
	say();
	message("在进一步的研究后，我发现这个被称为 Exodus 的实体并未真正被摧毁。牠的两个部分与世界之间的接口只是被切断了而已。」");
	say();
	UI_add_answer(["两个部分", "接口"]);
	UI_remove_answer("Exodus");
labelFunc009A_065E:
	case "两个部分" attend labelFunc009A_069C:
	message("「其中一个部分，我们称之为牠的 Psyche (心灵)，被居住在我们下方、世界另一端领域的石像鬼带走了。他们有着极其迷人的文化，但我离题了……」你开始纳闷这个老人究竟已经与世隔绝多久了。");
	say();
	message("他继续说道：「另一个部分，我放在这里。我称它为黑暗内核，因为没有了 Psyche ，它几乎了无生气。」他的脸庞看起来变年轻了，你感觉自己仿佛在和一个描述着新玩具……或者可能是新宠物的孩子说话。");
	say();
	message("「我相信正是从内核中移除了 Psyche ，才导致这座岛沉没在海浪之下。」");
	say();
	UI_add_answer("石像鬼");
	if (!(!var0016)) goto labelFunc009A_0687;
	UI_add_answer("Psyche");
labelFunc009A_0687:
	if (!(!var0017)) goto labelFunc009A_0695;
	UI_add_answer("黑暗内核");
labelFunc009A_0695:
	UI_remove_answer("两个部分");
labelFunc009A_069C:
	case "接口" attend labelFunc009A_06D7:
	message("他面无表情，「你摧毁的那台机器是 Exodus 与世界沟通及控制世界的手段。");
	say();
	message("当它被摧毁时，牠的 Psyche 再也无法保持对黑暗内核的控制。");
	say();
	message("我经常在想，如果创建了另一个接口， Psyche 会不会回归，或者是可能会重生……」");
	say();
	message("当他的闲散推论开始朝向可能危险的结论发展时，他清晰地闭上了嘴。");
	say();
	if (!(!var0016)) goto labelFunc009A_06C2;
	UI_add_answer("Psyche");
labelFunc009A_06C2:
	if (!(!var0017)) goto labelFunc009A_06D0;
	UI_add_answer("黑暗内核");
labelFunc009A_06D0:
	UI_remove_answer("接口");
labelFunc009A_06D7:
	case "石像鬼" attend labelFunc009A_06F2:
	message("「有趣的生物，你可能会叫牠们炎魔，但牠们并不是历史上所描绘的野兽。");
	say();
	message("那些体型较大、有翅膀的种类天生充满智能且具有魔力，而体型较小、无翅的种类似乎是该物种的劳动力。」");
	say();
	message("他将头转向你，眼神中带着困惑的表情。「我有一种最古怪的感觉，仿佛你已经听过这一切了……」 Erethian 陷入了沉默。");
	say();
	UI_remove_answer("石像鬼");
labelFunc009A_06F2:
	case "Psyche" attend labelFunc009A_0709:
	message("「最终，我会将我的研究转向那个存在。石像鬼将它安置在一座雕像内，放在他们致力于『勤勉』原则的神殿中。");
	say();
	var0016 = true;
	UI_remove_answer("Psyche");
labelFunc009A_0709:
	case "黑暗内核" attend labelFunc009A_0748:
	if (!UI_find_nearest(UI_get_npc_object(0xFE9C), 0x03DE, 0x0007)) goto labelFunc009A_0729;
	message("「是的，在这里。它就是放置在那边基座上的圆柱体。」他朝着黑暗内核的方向指了指。");
	say();
labelFunc009A_0729:
	message("「我发现它简直是个充满实用事实的宝库。它唯一的目的似乎就是保存信息。");
	say();
	message("大部分信息都很琐碎，像是详细描述了亿万年前某一天天空的颜色，");
	say();
	message("而其他部分则提供了操控这个世界的指示。");
	say();
	message("在里面我甚至找到了升起并维持我们所站立的这座岛屿的知识。它真是一件非凡的神器。」");
	say();
	message("他思考了片刻，然后紧张地看向你的方向。「拜托，在它附近千万要小心。神器似乎有一种……该怎么说呢，在你周围就会消失的倾向。」");
	say();
	var0017 = true;
	UI_remove_answer("黑暗内核");
labelFunc009A_0748:
	case "快剑 Enilno" attend labelFunc009A_0776:
	message("「啊，这是个好问题。自从黑暗时代结束后，我就再也没听过它的下落。但愿我知道它在哪里。");
	say();
	message("据说它是一件强大的魔法物品。你觉得呢？」他在问这个问题时，将头偏向了一侧。");
	say();
	var0018 = Func090A();
	if (!var0018) goto labelFunc009A_076B;
	message("「是的，失去这样一件古物真是个遗憾。也许随着时间流逝它会出现。这些东西总是有办法在最奇怪的时候浮现。」");
	say();
	goto labelFunc009A_076F;
labelFunc009A_076B:
	message("「没有吗？它似乎为你发挥了足够的效用来除掉女巫 Minax 。不过话说回来，我想只有蹩脚的吟游诗人才会怪罪自己的乐器。」他调皮地朝你的方向眨了眨眼。");
	say();
labelFunc009A_076F:
	UI_remove_answer("快剑 Enilno");
labelFunc009A_0776:
	case "不朽宝石" attend labelFunc009A_0791:
	message("那双如两颗弹珠般的乳白眼珠闪闪发光地看着你，「啊，是的。但你对那个小玩意儿可太清楚了。");
	say();
	message("毕竟，就是你把它打成了碎片，在 Lord Blackthorn 摄政期间给你惹了那么多麻烦。");
	say();
	message("如此强大的力量，即使处于粉碎状态，它的魔法仍然流动着。失去这样一件神器真令人悲伤。」仿佛突然想起他是在和谁说话，他改口道：「总比让 Mondain 到处乱搞要好得多，我想。」");
	say();
	UI_remove_answer("不朽宝石");
labelFunc009A_0791:
	case "头骨" attend labelFunc009A_07A4:
	message("「看起来有人，」他戏剧性地停顿了一下，「让那东西掉进了火山……」他苦涩的笑容与他漫不经心的语气自相矛盾。");
	say();
	UI_remove_answer("头骨");
labelFunc009A_07A4:
	case "恶魔之镜" attend labelFunc009A_07C4:
	message("「啊，原来你见过那个老爱吹牛的家伙了。老实说，我觉得我最好能摆脱那只累人的野兽，但他有时候还是挺有用的。要不是他老爱抱怨，或许我和他能相处得更好。」");
	say();
	UI_add_answer(["抱怨", "释放"]);
	UI_remove_answer("恶魔之镜");
labelFunc009A_07C4:
	case "抱怨" attend labelFunc009A_07D7:
	message("「这是他最喜欢的消遣。他乞求、恳求、甚至威胁我，要我把他从那面愚蠢的镜子里放出来。相信我，如果我能做到，我早就做了。」 Erethian 满布皱纹的脸上露出懊恼的神情。");
	say();
	UI_remove_answer("抱怨");
labelFunc009A_07D7:
	case "释放" attend labelFunc009A_07F1:
	message("「他想要这个特别的小玩意。我曾经拥有他寻找的这颗宝石，而且我认为一旦他得到它，他也不会高兴到哪去。我试着告诉过他，这只会把他囚禁在一个更具机动性的监狱里，但可惜，他的脑袋是石头做的。」");
	say();
	UI_add_answer("监狱");
	UI_remove_answer("释放");
labelFunc009A_07F1:
	case "监狱" attend labelFunc009A_080B:
	message("「确实如此。 Arcadion 试图统治不列颠尼亚，并相信这颗宝石能让他在此施展他的力量。事实上，以太宝石的作用恰恰相反，拥有这颗宝石的人将能够使用他的力量。」");
	say();
	UI_add_answer("以太宝石");
	UI_remove_answer("监狱");
labelFunc009A_080B:
	case "以太宝石" attend labelFunc009A_082E:
	message("「这颗宝石被一条脾气暴躁的龙从我这里偷走了。她硬闯进这座城堡，伏击了保护原则神殿的魔像，然后在前往勇气考验的路上毁掉了一扇完好的密门。我倒真想看看她是如何挤过她弄出来的那个洞，那个洞对她那种体型的生物来说根本不够大。」法师乳白的眼珠闪烁着压抑不住的笑意。");
	say();
	UI_add_answer(["魔像", "原则神殿", "勇气考验"]);
	UI_remove_answer("以太宝石");
labelFunc009A_082E:
	case "魔像" attend labelFunc009A_0848:
	message("「嗯……是的。这对人形魔法构造体曾经守护着原则神殿，但可惜的是，当龙袭击城堡时，其中一个被落石击中了。另一个捡起了他的，呃……兄弟，可以这么说，并带着他穿过发送门前往了爱之考验。」");
	say();
	UI_add_answer("爱之考验");
	UI_remove_answer("魔像");
labelFunc009A_0848:
	case "原则神殿" attend labelFunc009A_085B:
	message("「神殿就在大厅后方的门外。在那里你可以找到三尊雕像，每一尊都献给不列颠王在启蒙时代初期所设立的某项原则。」他神秘兮兮地补充道：「是有点古板，不过当衣架倒是挺不错的。」");
	say();
	UI_remove_answer("原则神殿");
labelFunc009A_085B:
	case "爱之考验" attend labelFunc009A_086E:
	message("「我还没机会去检查那个奇特的地方，不过，欢迎你在闲暇时去仔细看看。」他像个爷爷给孩子礼物般微笑着。");
	say();
	UI_remove_answer("爱之考验");
labelFunc009A_086E:
	case "勇气考验" attend labelFunc009A_089D:
	if (!UI_is_pc_female()) goto labelFunc009A_0886;
	var0019 = "女英雄的";
	goto labelFunc009A_088C;
labelFunc009A_0886:
	var0019 = "英雄的";
labelFunc009A_088C:
	message("「我相信这是由不列颠王发起的，为了考验……」他朝着你的方向比划了一下，「一位具备美德的");
	message(var0019);
	message("战斗能力和勇气。不过，城堡后方的那些雕像可以告诉你更多关于考验的事。」 Erethian 神秘地咧嘴笑了。");
	say();
	UI_remove_answer("勇气考验");
labelFunc009A_089D:
	case "恶魔宝石" attend labelFunc009A_08F4:
	message("「所以……你已经让 Arcadion 成为你的仆人了。能摆脱他无休止的抱怨真是太好了。希望你觉得他跟我一样觉得有用。」你不确定，但他的话可能被解读为一种诅咒。");
	say();
	if (!UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D)) goto labelFunc009A_08ED;
	UI_show_npc_face(0xFEDD, 0x0000);
	message("宝石发出更亮的光芒，「终于不用再看到你了真好，老头。也许在来生，我会是你的主人，而你是奴隶。」恶魔发出一声令人毛骨悚然的轻笑。");
	say();
	UI_remove_npc_face(0xFEDD);
	UI_show_npc_face(0xFEE2, 0x0001);
	message("听到恶魔的声音， Erethian 看起来有些动摇，但很快恢复了平静。「我不这么认为，恶魔。我根本不确定你是否有办法从那个小宝石里逃出来。」这位年迈法师的表情难以捉摸。*");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
labelFunc009A_08ED:
	UI_remove_answer("恶魔宝石");
labelFunc009A_08F4:
	case "恶魔之刃" attend labelFunc009A_090B:
	message("「看来你没有听从我的警告。唉，我将永远为你感到惋惜。那么，暗影之刃的主人与奴隶，你想从我这里得到什么？」");
	say();
	gflags[0x0339] = true;
	UI_remove_answer("恶魔之刃");
labelFunc009A_090B:
	case "告辞" attend labelFunc009A_0926:
	if (!(!gflags[0x0338])) goto labelFunc009A_0921;
	message("「再见，祝你好运……你会需要它的。」老法师低声窃笑着，仿佛在享受着一个私人的笑话，而且很可能是拿你开玩笑。*");
	say();
	goto labelFunc009A_0925;
labelFunc009A_0921:
	message("「再见，祝你好运……」 Erethian 的声音听起来真的充满同情。");
	say();
labelFunc009A_0925:
	abort;
labelFunc009A_0926:
	goto labelFunc009A_0389;
labelFunc009A_0929:
	endconv;
	if (!var0014) goto labelFunc009A_0934;
	item->Func0696();
labelFunc009A_0934:
	if (!var0015) goto labelFunc009A_093E;
	item->Func069A();
labelFunc009A_093E:
	return;
}


