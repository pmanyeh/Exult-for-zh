#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0852 0x852 ();
extern void Func0911 0x911 (var var0000);
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func084F 0x84F ();
extern void Func0850 0x850 ();
extern void Func084D 0x84D ();
extern void Func0851 0x851 ();
extern void Func092E 0x92E (var var0000);

void Func041A object#(0x41A) ()
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

	if (!(event == 0x0001)) goto labelFunc041A_0695;
	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFE6));
	var0001 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0001) goto labelFunc041A_0057;
	message("巴特林双眼瞇成红色的细缝，目光仿佛要将你看穿。");
	say();
	message("「你有立方体（Cube）！你不能用它来对付 -我- ！」");
	say();
	message("说完，巴特林猛然转身，在你的眼前消失了！*");
	say();
	gflags[0x00DA] = true;
	UI_remove_npc(UI_get_npc_object(0xFFE6));
	abort;
labelFunc041A_0057:
	if (!gflags[0x001E]) goto labelFunc041A_0066;
	message("巴特林看着你，他的目光又回到了『末日决战（Armageddon）』的冬季风暴中。「多年前，圣者，我去了幽灵之城 Skara Brae 。现在世界的样子让我想起了那个死寂的地方。在 Skara Brae ，我有过一次非常深刻的精神体验，深刻到我从未对任何人提起过。我现在想与你分享那个体验，圣者。");
	say();
	message("「在那里，在 Skara Brae ，我看到一个被称为『受折磨的人』的人。我问这个死人，请告诉我，生与死的问题的答案是什么？他没有回答我，我又问了他一次。我恳求他传授我一些微小的智能。生与死的问题的答案是什么？！他什么也没说，但在他的眼中... 在他的眼中，我能看到，圣者，他无法回答我，因为根本没有答案可以给。没有生与死问题的答案！就在那时，我明白了。没有意义！没有美德！没有价值观！！！...我赞赏你，圣者，因为你达到了同样令人解脱的启蒙！」*");
	say();
	abort;
labelFunc041A_0066:
	if (!gflags[0x0038]) goto labelFunc041A_0103;
	message("「你准备好回答《友谊会之书》里的问题了吗？」");
	say();
	if (!Func090A()) goto labelFunc041A_00FE;
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc041A_00EA;
	if (!(var0000 == 0x001C)) goto labelFunc041A_0099;
	message("「太棒了，圣者！」");
	say();
	message("你压抑着犹豫的颤抖，从高脚杯中深深地喝了一大口。巴特林走向你。「愿这个消息传遍四方，我们最新的成员正是圣者！」");
	say();
	message("其他的友谊会成员高兴地欢呼起来。");
	say();
	goto labelFunc041A_009D;
labelFunc041A_0099:
	message("「很好，圣者。」");
	say();
labelFunc041A_009D:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0002) goto labelFunc041A_00D0;
	message("「请容我为你献上你的友谊会徽章。」巴特林将徽章交给你。「请——随时戴着你的徽章，因为它将向所有看到它的人象征着你与友谊会同行。立刻把它戴在脖子上吧！喔，还有... 欢迎加入友谊会，圣者。」*");
	say();
	gflags[0x0090] = true;
	goto labelFunc041A_00D4;
labelFunc041A_00D0:
	message("「你的负载太重了，无法接受友谊会徽章。你必须减轻你的负担。」*");
	say();
labelFunc041A_00D4:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x56, 0x0017]);
	abort;
	goto labelFunc041A_00FB;
labelFunc041A_00EA:
	message("「我亲爱的圣者。你必须明白，在我引导你入会之前，你必须了解关于友谊会的所有知识。请研读你的《友谊会之书》然后再来找我。");
	say();
	message("你的思绪似乎不太清晰。如果你无法理解\t与你交谈的另一个灵魂，我也不会感到惊讶。」");
	say();
	UI_set_item_flag(item, 0x0019);
	abort;
labelFunc041A_00FB:
	goto labelFunc041A_0103;
labelFunc041A_00FE:
	message("「准备好了再来吧。」*");
	say();
	abort;
labelFunc041A_0103:
	var0004 = Func0909();
	var0005 = UI_wearing_fellowship();
	var0006 = UI_part_of_day();
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFE6));
	var0007 = Func0908();
	if (!(var0000 == 0x001C)) goto labelFunc041A_0149;
	if (!(gflags[0x008D] && (!gflags[0x0091]))) goto labelFunc041A_0146;
	Func084F();
	goto labelFunc041A_0149;
labelFunc041A_0146:
	Func0850();
labelFunc041A_0149:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0041]) goto labelFunc041A_0166;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc041A_0166:
	if (!gflags[0x0096]) goto labelFunc041A_017A;
	if (!(!gflags[0x0006])) goto labelFunc041A_017A;
	UI_add_answer("加入");
labelFunc041A_017A:
	if (!(gflags[0x00D7] || (gflags[0x00D6] && (!gflags[0x0109])))) goto labelFunc041A_0190;
	UI_add_answer("包裹");
labelFunc041A_0190:
	if (!gflags[0x0109]) goto labelFunc041A_01A4;
	UI_add_answer("已送达的包裹");
	UI_remove_answer("包裹");
labelFunc041A_01A4:
	if (!gflags[0x0102]) goto labelFunc041A_01B1;
	UI_add_answer("包裹已送达");
labelFunc041A_01B1:
	if (!gflags[0x011E]) goto labelFunc041A_01BE;
	UI_add_answer("包裹已送达");
labelFunc041A_01BE:
	if (!gflags[0x008E]) goto labelFunc041A_01DE;
	UI_remove_answer(["已送达的包裹", "包裹已送达"]);
	if (!gflags[0x0097]) goto labelFunc041A_01DE;
	UI_add_answer("箱子");
labelFunc041A_01DE:
	if (!gflags[0x008D]) goto labelFunc041A_01EB;
	UI_remove_answer("箱子");
labelFunc041A_01EB:
	if (!gflags[0x0091]) goto labelFunc041A_01FF;
	if (!(!gflags[0x0090])) goto labelFunc041A_01FF;
	UI_add_answer("medallion");
labelFunc041A_01FF:
	if (!gflags[0x0094]) goto labelFunc041A_020C;
	UI_add_answer("苹果");
labelFunc041A_020C:
	if (!(gflags[0x008A] || (gflags[0x008C] || gflags[0x000A]))) goto labelFunc041A_0221;
	UI_add_answer("理智的声音");
labelFunc041A_0221:
	if (!gflags[0x008B]) goto labelFunc041A_022E;
	UI_add_answer("冥想静修院");
labelFunc041A_022E:
	if (!(!gflags[0x009B])) goto labelFunc041A_0254;
	message("你看到一位圆润的年长绅士，他既谦逊又端庄。他温和的眼神流露出对同胞的关怀。");
	say();
	gflags[0x009B] = true;
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0251;
	message("男人的目光集中在你脖子上的友谊会徽章上。");
	say();
	message("「我亲爱的朋友，你冒充友谊会成员！立刻摘下那枚徽章！」*");
	say();
	abort;
labelFunc041A_0251:
	goto labelFunc041A_0271;
labelFunc041A_0254:
	if (!(var0005 && (!gflags[0x0006]))) goto labelFunc041A_0267;
	message("「除非你摘下那枚友谊会徽章，否则我不会和你说话。你冒充友谊会成员！」*");
	say();
	abort;
	goto labelFunc041A_0271;
labelFunc041A_0267:
	message("「");
	message(var0007);
	message("，我亲爱的朋友！很高兴再次见到你！」巴特林说。");
	say();
labelFunc041A_0271:
	converse attend labelFunc041A_0690;
	case "姓名" attend labelFunc041A_0287:
	message("「我的名字，好朋友，是巴特林。能亲眼见到圣者确实是我的荣幸。」");
	say();
	UI_remove_answer("姓名");
labelFunc041A_0287:
	case "职业" attend labelFunc041A_029A:
	message("「我曾经是一名德鲁伊。现在我是友谊会的领袖和创始人。它在整个不列颠尼亚迅速发展，让我非常忙碌，你可以想像。哈哈哈！」");
	say();
	UI_add_answer("友谊会");
labelFunc041A_029A:
	case "友谊会" attend labelFunc041A_02B4:
	message("「友谊会是二十年前在不列颠王的完全批准和支持下成立的。这是一个精神追求者的协会，他们努力达到人类潜能的最高境界，并与所有人自由分享这些知识。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer("精神上的");
labelFunc041A_02B4:
	case "精神上的" attend labelFunc041A_02D4:
	message("「友谊会推广『自信认知（sanguine cognition）』的理念，这是一种通过所谓的『内在力量的三位一体（Triad of Inner Strength）』，将积极的思维秩序应用于个人生活的方式。」");
	say();
	UI_remove_answer("精神上的");
	UI_add_answer(["自信认知", "三位一体"]);
labelFunc041A_02D4:
	case "自信认知" attend labelFunc041A_02EE:
	message("「我们努力避免自古以来神秘主义者和贤哲所犯的错误。他们将过去的标准（例如美德）应用于衡量现在，因此他们无法正确地感知现在。我们寻求以我们自己的方式来审视我们现在的生活，并看清世界本来的面目。」");
	say();
	UI_remove_answer("自信认知");
	UI_add_answer("美德");
labelFunc041A_02EE:
	case "美德" attend labelFunc041A_0301:
	message("「对于那些出于某种原因觉得自己仍然需要它们的人来说，它们非常合适。但没有人，甚至连你自己，圣者，你也必须承认，没有人能完美地实践它们。因此，它们最终是一种创建在失败之上的理念。我们从未声称我们的教义可以替代美德。然而，我们的信仰是创建在成功而非失败之上的。」");
	say();
	UI_remove_answer("美德");
labelFunc041A_0301:
	case "三位一体" attend labelFunc041A_031B:
	message("「『内在力量三位一体（Triad of Inner Strength）』简单来说就是三个基本的价值观，当它们被统一起来应用时，就能使一个人在生活中更具创造力、更满足、更成功。」");
	say();
	UI_remove_answer("三位一体");
	UI_add_answer("价值观");
labelFunc041A_031B:
	case "价值观" attend labelFunc041A_033E:
	message("「内在力量三原则的三个价值观是：『致力合一（Strive For Unity）』、『信赖你的兄弟 (Trust Thy Brother)』和『价值先行于报偿 (Worthiness Precedes Reward)』。」");
	say();
	UI_remove_answer("价值观");
	UI_add_answer(["致力合一", "信赖你的兄弟", "价值先行于报偿"]);
labelFunc041A_033E:
	case "致力合一" attend labelFunc041A_0358:
	message("「当我们说『致力合一』时，这只是我们表达不列颠尼亚人民应该如何合作与共同努力的方式。这是一种非常有价值的观念，我相信你也会同意。」");
	say();
	UI_remove_answer("致力合一");
	UI_add_answer("加入");
labelFunc041A_0358:
	case "信赖你的兄弟" attend labelFunc041A_0372:
	message("「友谊会的意思是，人人都是一样的，而世界大体上是一个支持与孕育生命的地方。我们对彼此的信任就像是将我们社会维系在一起的枢纽。相当真实，难道你不同意吗？」");
	say();
	UI_remove_answer("信赖你的兄弟");
	UI_add_answer("加入");
labelFunc041A_0372:
	case "价值先行于报偿" attend labelFunc041A_038C:
	message("「请允许我解释『价值先行于报偿』的含义。我们每个人都在寻求我们在生活中所渴望的东西，而我们必须努力让自己配得上我们所追求的东西。我很确定你很难反对这一点。」");
	say();
	UI_remove_answer("价值先行于报偿");
	UI_add_answer("加入");
labelFunc041A_038C:
	case "Elizabeth 和 Abraham" attend labelFunc041A_03E5:
	if (!(!gflags[0x0105])) goto labelFunc041A_03A3;
	message("「啊，我的好同事 Elizabeth 和 Abraham 刚才还在这里。他们今天早上为友谊会的事务前往 Minoc 了。他们负责资金的分配和收集。」");
	say();
	gflags[0x0087] = true;
labelFunc041A_03A3:
	if (!(gflags[0x0105] && (!gflags[0x016B]))) goto labelFunc041A_03B2;
	message("「自从他们上次来过之后，我就没见过我的同事们了。他们都是大忙人。」");
	say();
labelFunc041A_03B2:
	if (!(gflags[0x0217] && (!gflags[0x016B]))) goto labelFunc041A_03C1;
	message("「自从他们上次来过之后，我就没见过我的同事们了。他们都是大忙人。」");
	say();
labelFunc041A_03C1:
	if (!(gflags[0x016B] && (!gflags[0x0284]))) goto labelFunc041A_03D4;
	message("巴特林笑了笑，摇了摇头。「你追踪他们的运气不太好，是吧？他们来过这里，在 Jhelom 处理了一些工作，但现在他们已经去了 Vesper ，看看能不能在那里成立分会。」");
	say();
	gflags[0x0088] = true;
labelFunc041A_03D4:
	if (!gflags[0x0284]) goto labelFunc041A_03DE;
	message("「自从他们上次来过之后，我就没见过我的同事们了。他们都是大忙人。」");
	say();
labelFunc041A_03DE:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc041A_03E5:
	case "加入" attend labelFunc041A_0416:
	if (!gflags[0x0006]) goto labelFunc041A_03FA;
	message("「但你已经是会员了，圣者！一个人只能加入一次！」");
	say();
	goto labelFunc041A_040F;
labelFunc041A_03FA:
	if (!(gflags[0x0096] && (!gflags[0x0097]))) goto labelFunc041A_040C;
	message("「你还没完成你的任务。记住『价值先于回报』。一旦你完成了任务，你就可以加入。」");
	say();
	goto labelFunc041A_040F;
labelFunc041A_040C:
	Func084D();
labelFunc041A_040F:
	UI_remove_answer("加入");
labelFunc041A_0416:
	case "包裹" attend labelFunc041A_0478:
	if (!(gflags[0x00D7] && (!gflags[0x008F]))) goto labelFunc041A_0475;
	message("「啊！我真希望你的双手没有满到拿不下这个包裹。」");
	say();
	var0008 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0009 = UI_set_last_created(var0008);
	var000A = UI_give_last_created(0xFE9C);
	if (!var000A) goto labelFunc041A_0463;
	message("「太棒了！这就是了。你现在必须上路了！」*");
	say();
	gflags[0x008F] = true;
	abort;
labelFunc041A_0463:
	var000A = UI_give_last_created(0xFFE6);
	message("「圣者！我对此感到厌烦了！请在你的物品栏中腾出空间来装包裹！」*");
	say();
	abort;
	goto labelFunc041A_0478;
labelFunc041A_0475:
	Func0851();
labelFunc041A_0478:
	case "已送达的包裹" attend labelFunc041A_0492:
	message("「恭喜，圣者，我们感谢你成功地将我们的包裹送交给 Minoc 的 Elynor 。现在，在你加入友谊会之前，我们还有另一个任务要处理。因为你送达了包裹，你已经证明自己有资格运行另一个任务。」");
	say();
	UI_remove_answer("已送达的包裹");
	UI_add_answer("任务");
labelFunc041A_0492:
	case "包裹已送达" attend labelFunc041A_0512:
	message("「圣者，你有把包裹送交给 Minoc 的 Elynor 吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc041A_04E4;
	message("「你打开了包裹吗？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc041A_04C8;
	message("「你明知道我们指示过你不要打开它。我们信任你能一字不差地运行我们的指示，但这份信任被打破了。」");
	say();
	UI_add_answer("任务");
	goto labelFunc041A_04CC;
labelFunc041A_04C8:
	message("「Minoc 的 Elynor 可不是这么告诉我们的。我们信任你能一字不差地运行我们的指示，但这份信任被打破了。");
	say();
labelFunc041A_04CC:
	if (!gflags[0x011E]) goto labelFunc041A_04D6;
	message("「据我了解，包裹里的内容物也不见了，这确实非常严重！");
	say();
labelFunc041A_04D6:
	message("「恐怕你必须为我们运行一项任务作为信任的测试，这样你才能开始真正与友谊会同行。」");
	say();
	UI_add_answer("任务");
	goto labelFunc041A_050B;
labelFunc041A_04E4:
	message("巴特林惊讶地睁大了眼睛。");
	say();
	message("「发生了什么事？你把包裹弄丢了吗？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc041A_0506;
	message("「啧。啧。啧。这真是不幸。我们信任你能送达包裹，但这份信任被打破了。恐怕你必须为我们运行一项任务作为信任的测试，这样你才能开始真正与友谊会同行。」");
	say();
	UI_add_answer("任务");
	goto labelFunc041A_050B;
labelFunc041A_0506:
	message("「请去送我们的包裹，圣者。等你完成后，我们还有更多事情要谈。」*");
	say();
	abort;
labelFunc041A_050B:
	UI_remove_answer("包裹已送达");
labelFunc041A_0512:
	case "任务" attend labelFunc041A_0530:
	message("「你将前往 Destard 地城，它位于 Trinsic 以西的群山中。别担心，那里已经完全废弃了。在那里，你会找到一个装有友谊会资金的箱子，这是几天前为了安全起见藏起来的。你会认出这个箱子，因为它不仅装有黄金，还有两枚友谊会徽章。那个地点也很可能标有友谊会的法杖。将这些资金带回给我们，不要遗失任何一枚硬币，你将成功完成你的任务。不需要带回箱子，只要带回黄金。现在，你必须上路了！」*");
	say();
	gflags[0x008E] = true;
	Func0911(0x0064);
	UI_remove_answer("任务");
	abort;
labelFunc041A_0530:
	case "箱子" attend labelFunc041A_0556:
	message("「啊，是的，你从 Destard 地城回来了！但等等！我没有看到你要带回来的友谊会资金！发生了什么事？！」");
	say();
	UI_add_answer(["拦路强盗", "怪物", "海盗", "船沉了"]);
	UI_remove_answer("箱子");
labelFunc041A_0556:
	case "拦路强盗" attend labelFunc041A_0570:
	message("「哎呀，你的故事太离谱了！我拒绝相信！」巴特林恼火地嗤之以鼻。");
	say();
	UI_remove_answer("拦路强盗");
	UI_add_answer("加入");
labelFunc041A_0570:
	case "怪物" attend labelFunc041A_0596:
	message("「怪物！ Destard 地城里潜伏着怪物？！好吧，那我为你的不便道歉。」");
	say();
	UI_remove_answer(["怪物", "拦路强盗", "船沉了", "海盗"]);
	UI_add_answer("加入");
labelFunc041A_0596:
	case "海盗" attend labelFunc041A_05B0:
	message("「你肯定能找到更好的借口！如果你只是不想回答我的问题，你为什么不直说呢？」");
	say();
	UI_remove_answer("海盗");
	UI_add_answer("加入");
labelFunc041A_05B0:
	case "船沉了" attend labelFunc041A_05CA:
	message("巴特林缓慢地翻了个白眼。「你应该去当个吟游诗人，你用这种故事来款待我！」");
	say();
	UI_remove_answer("船沉了");
	UI_add_answer("加入");
labelFunc041A_05CA:
	case "medallion" attend labelFunc041A_0605:
	var0002 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	if (!var0002) goto labelFunc041A_05FE;
	message("「请容我为你献上你的友谊会徽章。」巴特林将徽章交给你。「请——随时戴着这枚徽章。立刻把它戴在脖子上吧！喔，还有... 欢迎加入友谊会，圣者。」");
	say();
	gflags[0x0090] = true;
	UI_remove_answer("medallion");
	goto labelFunc041A_0605;
labelFunc041A_05FE:
	message("「你无法接受你的友谊会徽章。你的负载太重了！」*");
	say();
	goto labelFunc041A_0690;
labelFunc041A_0605:
	case "苹果" attend labelFunc041A_0618:
	message("「当你在这里的时候，请随意享用苹果。我敢肯定你会发现这是全不列颠尼亚最好的苹果。它们是由皇家果园提供给友谊会的。」");
	say();
	UI_remove_answer("苹果");
labelFunc041A_0618:
	case "理智的声音" attend labelFunc041A_0645:
	if (!gflags[0x0096]) goto labelFunc041A_0633;
	message("「一旦一个人与友谊会同行够久，并将『内在力量三位一体（Triad of Inner Strength）』应用于他的生活，他就能清除脑海中所有冲突、适得其反的念头，达到他能实际听到他内在理智声音的地步。这个理智的声音是你内心的内核，通过纯粹的本能、智能和无懈可击的逻辑引导着你。一旦有人开始聆听它并遵循它的指引，他就达到了启蒙的最高境界。也许有一天你也会听到它。」");
	say();
	Func0911(0x0014);
	goto labelFunc041A_063E;
labelFunc041A_0633:
	message("「只有活跃的或潜在的友谊会成员才能接触到『声音』的概念。当你接受友谊会的测试时，我可以告诉你更多。」");
	say();
	UI_add_answer("测试");
labelFunc041A_063E:
	UI_remove_answer("理智的声音");
labelFunc041A_0645:
	case "测试" attend labelFunc041A_066F:
	message("「喔，你准备好加入友谊会了吗？」");
	say();
	if (!Func090A()) goto labelFunc041A_065D;
	Func084D();
	goto labelFunc041A_0668;
labelFunc041A_065D:
	message("「除非你准备好加入，否则我不能再告诉你关于测试的更多细节。」");
	say();
	UI_add_answer("加入");
labelFunc041A_0668:
	UI_remove_answer("测试");
labelFunc041A_066F:
	case "冥想静修院" attend labelFunc041A_0682:
	message("「那是一个远离日常生活压力和干扰的静修之处，友谊会的新成员可以去那里学习友谊会的理念。它位于 Serpent's Hold 东方的一个岛上。」");
	say();
	UI_remove_answer("冥想静修院");
labelFunc041A_0682:
	case "告辞" attend labelFunc041A_068D:
	goto labelFunc041A_0690;
labelFunc041A_068D:
	goto labelFunc041A_0271;
labelFunc041A_0690:
	endconv;
	message("「直到我们再次相会，圣者。」*");
	say();
labelFunc041A_0695:
	if (!(event == 0x0000)) goto labelFunc041A_06A3;
	Func092E(0xFFE6);
labelFunc041A_06A3:
	return;
}


