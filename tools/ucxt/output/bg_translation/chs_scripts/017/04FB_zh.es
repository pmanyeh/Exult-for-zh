#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04FB object#(0x4FB) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04FB_02EC;
	UI_show_npc_face(0xFF05, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0000 == 0x0007)) goto labelFunc04FB_0048;
	message("Danag 对你点点头。「我无意失礼，但我正在专心玩游戏。我希望能赢一大笔钱！」");
	say();
	message("他高兴地搓着手。*");
	say();
	abort;
labelFunc04FB_0048:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04FB_0069;
	UI_add_answer("Hook");
labelFunc04FB_0069:
	if (!gflags[0x0264]) goto labelFunc04FB_0076;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04FB_0076:
	if (!(!gflags[0x02A9])) goto labelFunc04FB_00A8;
	message("你看到一位带着灿烂笑容、快活的男人。很明显他很享受他的生活。");
	say();
	if (!var0001) goto labelFunc04FB_008F;
	message("他注意到了你的奖章。");
	say();
	message("「友谊会成员！你好吗！希望你来海盗巢穴的旅程不会太麻烦！欢迎来到我们的岛屿！」");
	say();
labelFunc04FB_008F:
	if (!var0002) goto labelFunc04FB_00A1;
	message("立方体震动了。");
	say();
	message("「我认出你就是圣者！我知道你被判处死刑了！」");
	say();
	message("Danag 微笑着，仿佛他刚才说的是你被邀请与国王共进晚餐一样。");
	say();
labelFunc04FB_00A1:
	gflags[0x02A9] = true;
	goto labelFunc04FB_00AC;
labelFunc04FB_00A8:
	message("「哈啰！」Danag 说。");
	say();
labelFunc04FB_00AC:
	converse attend labelFunc04FB_02E7;
	case "姓名" attend labelFunc04FB_00C2:
	message("「我是 Danag ，我的朋友。」这名男子夸张地鞠了个躬。");
	say();
	UI_remove_answer("姓名");
labelFunc04FB_00C2:
	case "职业" attend labelFunc04FB_00DB:
	message("「我是这里海盗巢穴的友谊会代理分会长。我们正式的会长 Abraham，目前因为友谊会的事务外出了。」");
	say();
	UI_add_answer(["友谊会", "Abraham"]);
labelFunc04FB_00DB:
	case "友谊会" attend labelFunc04FB_00F5:
	message("「友谊会在海盗巢穴存在很长一段时间了。这是不列颠尼亚最古老的分会之一，仅次于不列颠的总部。你可能会想，为什么一个名声如此狼藉的岛屿会吸引友谊会。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer("想知道");
labelFunc04FB_00F5:
	case "想知道" attend labelFunc04FB_0124:
	message("「友谊会的创始人认为，居住在这个岛上的人们会从我们的组织中获益最多。");
	say();
	if (!var0002) goto labelFunc04FB_0112;
	message("「特别是因为我们会帮助他们在海盗巢穴创建一个罪恶和暴食的帝国。」");
	say();
	message("你注意到 Danag 说话时立方体一直在震动。");
	say();
	goto labelFunc04FB_0116;
labelFunc04FB_0112:
	message("「在所有的罪恶、放荡、海盗行为、赌博、酗酒之中——友谊会已经表明了立场，并招募成员来遵循我们的原则。海盗巢穴因此改变了。」");
	say();
labelFunc04FB_0116:
	UI_remove_answer("想知道");
	UI_add_answer("海盗巢穴");
labelFunc04FB_0124:
	case "海盗巢穴" attend labelFunc04FB_015D:
	message("「很久以前，这里只是海盗、拾荒者和流氓的藏身之处。看看周围。");
	say();
	if (!var0002) goto labelFunc04FB_0141;
	message("「现在它是不列颠尼亚所有腐败的中心。海盗们都受到友谊会的控制。」");
	say();
	message("立方体持续震动。");
	say();
	goto labelFunc04FB_0145;
labelFunc04FB_0141:
	message("「现在海盗巢穴是一个岛屿天堂。它有自己的商业。它向不列颠王纳税。这里的海盗现在都是商人。他们的人生有所成就。");
	say();
labelFunc04FB_0145:
	message("「因此，浴场和游戏之屋是全国最赚钱的两家机构。」");
	say();
	UI_remove_answer("海盗巢穴");
	UI_add_answer(["浴场", "游戏之屋"]);
labelFunc04FB_015D:
	case "浴场" attend labelFunc04FB_0181:
	if (!var0002) goto labelFunc04FB_0172;
	message("「当然，这是一个让人可以体验肉体愉悦的地方。所有的利润都归友谊会所有。");
	say();
	goto labelFunc04FB_0176;
labelFunc04FB_0172:
	message("「这是一项纯粹无害的生意，迎合那些需要放松的疲惫之人。人们可以在那里获得身心上的洗涤。");
	say();
labelFunc04FB_0176:
	message("「它真的是不列颠尼亚皇冠上的一颗明珠。」");
	say();
	UI_remove_answer("浴场");
labelFunc04FB_0181:
	case "游戏之屋" attend labelFunc04FB_01A1:
	if (!var0002) goto labelFunc04FB_0196;
	message("「哎呀，这是一家赌场！友谊会肯定从那个地方赚了一大笔！」");
	say();
	goto labelFunc04FB_019A;
labelFunc04FB_0196:
	message("「这是一个挑战心智以及评估生活策略能力的机构。锻炼大脑的这部分对一个人的自尊和幸福很重要。」");
	say();
labelFunc04FB_019A:
	UI_remove_answer("游戏之屋");
labelFunc04FB_01A1:
	case "Abraham" attend labelFunc04FB_01C9:
	message("「Abraham 是友谊会内核圈的成员之一。他和他的同事 Elizabeth 会定期在全国旅行，通常是分配或收集组织的资金，并在其他分会处理事务。」");
	say();
	if (!var0002) goto labelFunc04FB_01BB;
	message("立方体震动了。");
	say();
	message("「嗯……呃……他也是处决的协调员，而且他打牌会作弊。」");
	say();
labelFunc04FB_01BB:
	UI_remove_answer("Abraham");
	UI_add_answer("Elizabeth");
labelFunc04FB_01C9:
	case "Elizabeth" attend labelFunc04FB_01ED:
	message("「Elizabeth 是一位极为聪明的女性，担任特别计划总监。她通常和不列颠的巴特林一起工作，但她大部分时间都在各分会间旅行。」");
	say();
	if (!var0002) goto labelFunc04FB_01DF;
	message("随着立方体震动，Danag 补充道，「她，嗯……也是个十足的母狗，随时都可能谋杀你。」");
	say();
labelFunc04FB_01DF:
	UI_remove_answer("Elizabeth");
	UI_add_answer("特别计划");
labelFunc04FB_01ED:
	case "特别计划" attend labelFunc04FB_0217:
	message("「他们可能做任何事，从为贫苦农民创建庇护所，到在没有友谊会大厅的城镇创建一个新分会。」");
	say();
	if (!var0002) goto labelFunc04FB_0210;
	message("随着立方体震动，Danag 自豪地补充道：「我们目前的特别计划是为守护者建造黑门。它位于圣者之岛我们秘密的地下设施中！」");
	say();
	UI_add_answer(["黑门", "设施"]);
labelFunc04FB_0210:
	UI_remove_answer("特别计划");
labelFunc04FB_0217:
	case "黑门" attend labelFunc04FB_022A:
	message("Danag 兴奋地睁大了眼睛。「这是我们即将到来的主人和主宰的门户！他大约在几个小时内就会穿过来！」");
	say();
	UI_remove_answer("黑门");
labelFunc04FB_022A:
	case "设施" attend labelFunc04FB_0244:
	message("「它在法典圣宫内的一个地城里。有一道屏障可以阻挡不速之客。有一把特殊的钥匙可以打开屏障，只有少数被选中的人才有。」");
	say();
	UI_remove_answer("设施");
	UI_add_answer("钥匙");
labelFunc04FB_0244:
	case "钥匙" attend labelFunc04FB_0257:
	message("「我没有。只有 Elizabeth 和 Abraham 、巴特林以及 Hook 本人才有。Hook 可能把他的钥匙放在他的住处。」");
	say();
	UI_remove_answer("钥匙");
labelFunc04FB_0257:
	case "Hook" attend labelFunc04FB_028E:
	if (!var0002) goto labelFunc04FB_0283;
	message("立方体震动了。");
	say();
	message("「有个铁钩的男人？那就是他的名字！『Hook』！他就住在这座岛上！事实上，他的住处就在游戏之屋后面的秘密墓穴里！你可以向守卫 Sintag 询问 Hook 来到达那里。当然，你知道 Hook 是友谊会的首席刽子手……还有他的助手，石像鬼 Forskis 。」");
	say();
	UI_add_answer(["刽子手", "Forskis"]);
	Func0911(0x0064);
	goto labelFunc04FB_0287;
labelFunc04FB_0283:
	message("「一个一只手是铁钩的海盗？不……我想我不认识他。这个岛上有很多海盗。他们很多人也缺手断脚的！」");
	say();
labelFunc04FB_0287:
	UI_remove_answer("Hook");
labelFunc04FB_028E:
	case "Elizabeth 和 Abraham" attend labelFunc04FB_02B3:
	message("「他们通常一起旅行。他们刚从我们在巨蛇堡附近的冥想休闲中心抵达，我相信他们在岛上的某个地方。Abraham 告诉我，在他回来之前，我必须继续担任代理分会长。」");
	say();
	gflags[0x02A8] = true;
	if (!var0002) goto labelFunc04FB_02AC;
	message("立方体震动了。");
	say();
	message("「事实上，我相信他们正在前往圣者之岛处理我们新的特别计划的路上。」");
	say();
labelFunc04FB_02AC:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04FB_02B3:
	case "刽子手" attend labelFunc04FB_02C6:
	message("「没错。Hook 替友谊会做所有的脏活。他是由 Jhelom 的 De Snel 大师训练的。De Snel 也训练了之前所有的刽子手。事实上，De Snel 本人就是友谊会的第一任刽子手！」");
	say();
	UI_remove_answer("刽子手");
labelFunc04FB_02C6:
	case "Forskis" attend labelFunc04FB_02D9:
	message("「据我所知，这个石像鬼的名字在石像鬼语中的意思是『心腹』。他是个强悍的无翼石像鬼，是 Hook 的帮手。我相信他和 Hook 一起住在墓穴里。」");
	say();
	UI_remove_answer("Forskis");
labelFunc04FB_02D9:
	case "告辞" attend labelFunc04FB_02E4:
	goto labelFunc04FB_02E7;
labelFunc04FB_02E4:
	goto labelFunc04FB_00AC;
labelFunc04FB_02E7:
	endconv;
	message("「再见！」*");
	say();
labelFunc04FB_02EC:
	if (!(event == 0x0000)) goto labelFunc04FB_02FA;
	Func092E(0xFF05);
labelFunc04FB_02FA:
	return;
}


