#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04F7 object#(0x4F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04F7_0399;
	UI_show_npc_face(0xFF09, 0x0000);
	if (!(!gflags[0x01B2])) goto labelFunc04F7_001E;
	message("这名没有实体的男子凝视着你身后，似乎穿透了建筑物的边界，或许甚至是穿透了这个世界。然后，他突然发抖，仿佛充满了痛苦。*");
	say();
	abort;
labelFunc04F7_001E:
	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x01C2])) goto labelFunc04F7_0052;
	message("这名幽灵般的男子露出了充满痛苦的表情。");
	say();
	gflags[0x01C2] = true;
	goto labelFunc04F7_008A;
labelFunc04F7_0052:
	message("「你好，");
	message(var0003);
	message("。」Caine 深吸了一口气，显然是在强忍着他的痛苦。");
	say();
	if (!(gflags[0x017C] && (!gflags[0x0196]))) goto labelFunc04F7_0072;
	UI_add_answer("问题");
	var0002 = true;
labelFunc04F7_0072:
	if (!(!gflags[0x01BF])) goto labelFunc04F7_008A;
	if (!gflags[0x01C0]) goto labelFunc04F7_008A;
	UI_add_answer("需要配方");
	var0001 = true;
labelFunc04F7_008A:
	if (!gflags[0x01BF]) goto labelFunc04F7_009E;
	if (!(!gflags[0x01D0])) goto labelFunc04F7_009E;
	UI_add_answer("指示");
labelFunc04F7_009E:
	if (!gflags[0x0198]) goto labelFunc04F7_00B2;
	if (!(!gflags[0x01A1])) goto labelFunc04F7_00B2;
	UI_add_answer("牺牲");
labelFunc04F7_00B2:
	converse attend labelFunc04F7_038E;
	case "姓名" attend labelFunc04F7_0103:
	message("「我，」他喘息着说，「名叫 Caine。但我也被我的……镇民同胞们起了一个别名。对他们来说，我被称为『被折磨者』。」他双手在空中挥舞，但似乎什么也没指。「你可以看出来为什么。」");
	say();
	if (!(gflags[0x017C] && (!gflags[0x0196]))) goto labelFunc04F7_00DA;
	if (!(!var0002)) goto labelFunc04F7_00DA;
	UI_add_answer("问题");
labelFunc04F7_00DA:
	UI_remove_answer("姓名");
	UI_add_answer("为什么？");
	if (!(!var0001)) goto labelFunc04F7_0103;
	if (!(!gflags[0x01BF])) goto labelFunc04F7_0103;
	if (!gflags[0x01C0]) goto labelFunc04F7_0103;
	UI_add_answer("需要配方");
labelFunc04F7_0103:
	case "为什么？" attend labelFunc04F7_0116:
	message("「火焰呀！笨蛋！是火焰呀！」他又喘了一口气。");
	say();
	UI_remove_answer("为什么？");
labelFunc04F7_0116:
	case "职业" attend labelFunc04F7_0150:
	message("他对你的话冷笑。~~「你想知道我的工作？我告诉你我的工作！」他大喊。~「为了我对美丽的 Skara Brae 犯下的罪行，在这里永远在火焰中燃烧！那，」他停顿了一下以强调语气，「就是我的工作！」~过了一会儿，他平静下来。~「我很抱歉，");
	message(var0003);
	message("。我知道你的问题无意进一步折磨我，」他叹了口气，把脸转过去不看你。「曾经，我是这里的炼金术士。」");
	say();
	UI_add_answer(["火焰", "Skara Brae"]);
	if (!(!var0001)) goto labelFunc04F7_0150;
	if (!(!gflags[0x01BF])) goto labelFunc04F7_0150;
	if (!gflags[0x01C0]) goto labelFunc04F7_0150;
	UI_add_answer("需要配方");
labelFunc04F7_0150:
	case "火焰" attend labelFunc04F7_0171:
	message("他低头看着地面，脸上流露出懊悔的表情。~~「火焰是我的惩罚。多年前，当邪恶的巫妖第一次对 Skara Brae 施加他死亡的统治时，治疗师 Mordra 构想了一个消灭这最邪恶生物的计划。~~「她设计了一种混合物，可以摧毁构成巫妖的魔法束缚。这个配方被交给了我们的镇长，然后他交给了我。~~「但是，」他皱起眉头，「当我准备药水时出了问题。比例混合不当，或者……我不知道！」他大喊着，紧握双拳。~~「我只记得商店爆炸了，然后是火！火！所有那些人都死了……因为我……因为我的错误……」");
	say();
	UI_remove_answer("火焰");
	if (!(!var0000)) goto labelFunc04F7_0171;
	UI_add_answer("镇长");
labelFunc04F7_0171:
	case "Skara Brae" attend labelFunc04F7_018B:
	message("「这曾是座繁荣的城镇——直到我毁了它！」他的下腭一紧，整张脸因痛苦而扭曲。");
	say();
	message("「为什么？为什么、为什么、为什么！」他再次因痛苦而剧烈抽息，但很快便按捺住情绪。");
	say();
	message("「那里有那么多无辜的百姓，」他直勾勾地盯着你说道：「我真的无法相信，我竟然必须为他们所有人的死负责。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Skara Brae");
labelFunc04F7_018B:
	case "牺牲" attend labelFunc04F7_01A8:
	message("「我很抱歉，");
	message(var0003);
	message("，但我必须在这里度过我的永恒，不断回忆那些被我摧毁的人。」");
	say();
	gflags[0x01A1] = true;
	UI_remove_answer("牺牲");
labelFunc04F7_01A8:
	case "镇长", "Forsythe" attend labelFunc04F7_01C8:
	message("「Forsythe 是镇长。如果你想和他说话，也许你可以在镇政厅找到他。」");
	say();
	var0000 = true;
	UI_remove_answer(["Forsythe", "镇长"]);
labelFunc04F7_01C8:
	case "需要配方" attend labelFunc04F7_01FD:
	message("「你居然相信我告诉你配方！在我对这个城镇做了这一切之后？你疯了吗？我希望至少，你已经和 Mordra 确认了正确的比例，对吧？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F7_01F2;
	message("他难以置信地摇摇头。~~「你真是疯了。但是，」他耸耸肩，「你除了自己的生命之外也没什么好失去的……」");
	say();
	UI_add_answer("指示");
	gflags[0x01BF] = true;
	goto labelFunc04F7_01F6;
labelFunc04F7_01F2:
	message("「这还差不多。你让我怀疑了一下。」他的语气中夹杂着如释重负和失望。");
	say();
labelFunc04F7_01F6:
	UI_remove_answer("需要配方");
labelFunc04F7_01FD:
	case "指示" attend labelFunc04F7_0210:
	message("「首先你需要这三种药水。然后，你必须将每种药水放在连接管的正下方——顺序无关紧要。拿一个空玻璃瓶——我的实验室里应该有一个——并将其放在喷嘴下方。然后，打开燃烧器。几分钟后，混合物就会形成，装满的玻璃瓶就为你准备好了。」");
	say();
	UI_remove_answer("指示");
labelFunc04F7_0210:
	case "人" attend labelFunc04F7_0238:
	message("「你想知道我杀了谁？我只能假设所有人都死在火灾中：Markham 和他的酒吧女侍 Paulette；Trent 和 Forsythe；当然还有治疗师 Mordra。」");
	say();
	UI_add_answer("Trent");
	if (!(!var0000)) goto labelFunc04F7_0231;
	UI_add_answer("Forsythe");
labelFunc04F7_0231:
	UI_remove_answer("人");
labelFunc04F7_0238:
	case "Trent" attend labelFunc04F7_0258:
	message("「他现在是——曾经是——铁匠。我唯一的安慰就在他身上，因为我以为他的死至少会有一个好处。可悲的是，」他深吸了一口气，「连这点都没发生。」");
	say();
	UI_add_answer(["铁匠", "好处"]);
	UI_remove_answer("Trent");
labelFunc04F7_0258:
	case "铁匠" attend labelFunc04F7_0272:
	message("「他曾经是所有金属制品的大师。现在我听说他所做的，就是无休止地打造那个该死的笼子！」");
	say();
	UI_remove_answer("铁匠");
	UI_add_answer("笼子");
labelFunc04F7_0272:
	case "笼子" attend labelFunc04F7_0285:
	message("「我对此一无所知，只知道必须先把巫妖关进去，我的……药水才能对他起作用。」");
	say();
	UI_remove_answer("笼子");
labelFunc04F7_0285:
	case "好处" attend labelFunc04F7_02A5:
	message("「巫妖从 Trent 身边夺走了这位铁匠生命中最宝贵的东西——他的妻子 Rowena。我原本希望他的死至少能消除他的痛苦。」他冷嘲热讽地笑着。~~「嗯，就某种意义上来说，这确实结束了他的痛苦。」");
	say();
	UI_remove_answer("好处");
	UI_add_answer(["Rowena", "结束"]);
labelFunc04F7_02A5:
	case "结束" attend labelFunc04F7_02B8:
	message("「痛苦消失了，但取而代之的是他执着的愤怒。这个可怜的傻瓜甚至没有意识到他已经死了！他靠着他的愤怒而存在。」");
	say();
	UI_remove_answer("结束");
labelFunc04F7_02B8:
	case "Rowena" attend labelFunc04F7_02D2:
	message("「她是他活着的全部。当巫妖试图把她从他身边夺走时，他被她死亡的空虚吞噬了。但是，在他自己死后，」他直视着你，「他苦涩的感情变得更加糟糕。~~「我怀疑现在没法跟他讲道理了。」");
	say();
	UI_remove_answer("Rowena");
	UI_add_answer("讲道理");
labelFunc04F7_02D2:
	case "讲道理" attend labelFunc04F7_02E5:
	message("「我怀疑他甚至不会相信自己的死，更别说在乎了。」");
	say();
	UI_remove_answer("讲道理");
labelFunc04F7_02E5:
	case "问题" attend labelFunc04F7_0350:
	if (!(!gflags[0x01BC])) goto labelFunc04F7_031B;
	message("幽灵带着一丝愉快的表情看着你。「你正在寻找关于生与死问题的答案？」");
	say();
	if (!Func090A()) goto labelFunc04F7_0313;
	message("被折磨者认真地看着你。停顿片刻后，他说。「如果你同意帮助我，我会告诉你我所知道的。释放我。释放我们所有人。将我们从邪恶的巫妖手中解放出来。」");
	say();
	UI_add_answer("巫妖");
	UI_remove_answer("问题");
	goto labelFunc04F7_0318;
labelFunc04F7_0313:
	message("「那么我没有答案可以给你。」*");
	say();
	abort;
labelFunc04F7_0318:
	goto labelFunc04F7_0349;
labelFunc04F7_031B:
	if (!gflags[0x01AA]) goto labelFunc04F7_0345;
	message("「你已经将我们从巫妖手中解救出来。你有权得到我这部分的约定。~~「所以你想知道生与死问题的答案吗？」");
	say();
	if (!Func090A()) goto labelFunc04F7_033D;
	message("被折磨者认真地看着你。然后，他笑着摇了摇头。「我没有秘密，我愚蠢的朋友。你真是个傻瓜。根本『没有』答案。只有问题。」~~他看起来像是痛苦得要大叫出来。然后 Caine 转身背对着你。「现在走开吧。让我留给我的永恒。」*");
	say();
	gflags[0x0196] = true;
	Func0911(0x02BC);
	abort;
	goto labelFunc04F7_0342;
labelFunc04F7_033D:
	message("「那你为什么要浪费时间？走开，傻瓜！」*");
	say();
	abort;
labelFunc04F7_0342:
	goto labelFunc04F7_0349;
labelFunc04F7_0345:
	message("「你还没有替我们除掉邪恶的巫妖。按照你的承诺完成这项任务，我就会给你你寻找的答案。」");
	say();
labelFunc04F7_0349:
	UI_remove_answer("问题");
labelFunc04F7_0350:
	case "巫妖" attend labelFunc04F7_0380:
	message("「他是一个附身在可怜的死者 Horance 身体里的邪恶灵魂。他控制着这个城镇里的每一个生物——甚至是我。他吸取我们灵魂中的生命力——所剩无几的生命力。拜托，你必须将我们从他的力量中解放出来。你愿意尝试吗？」");
	say();
	if (!Func090A()) goto labelFunc04F7_0374;
	message("被折磨者的眼睛稍微亮了起来，仿佛他在漫长黑暗的隧道尽头看到了光芒。「那你给了我希望。首先，去和 Mordra 女士谈谈。她可以告诉你如何完成这项壮举。」");
	say();
	UI_remove_answer("巫妖");
	gflags[0x01BC] = true;
	goto labelFunc04F7_0379;
labelFunc04F7_0374:
	message("「那么你永远不会知道关于生与死问题的答案。以眼还眼，我的朋友。」*");
	say();
	abort;
labelFunc04F7_0379:
	UI_remove_answer("巫妖");
labelFunc04F7_0380:
	case "告辞" attend labelFunc04F7_038B:
	goto labelFunc04F7_038E;
labelFunc04F7_038B:
	goto labelFunc04F7_00B2;
labelFunc04F7_038E:
	endconv;
	message("「再见，");
	message(var0003);
	message("。」你离开时他压抑着痛苦的尖叫。*");
	say();
labelFunc04F7_0399:
	if (!(event == 0x0000)) goto labelFunc04F7_03A2;
	abort;
labelFunc04F7_03A2:
	return;
}


