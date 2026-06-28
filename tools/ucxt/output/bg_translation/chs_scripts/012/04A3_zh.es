#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func08CB 0x8CB ();
extern void Func08CC 0x8CC ();
extern void Func092E 0x92E (var var0000);

void Func04A3 object#(0x4A3) ()
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

	if (!(event == 0x0001)) goto labelFunc04A3_0420;
	UI_show_npc_face(0xFF5D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFC);
	var0003 = UI_part_of_day();
	var0004 = false;
	if (!(var0003 == 0x0007)) goto labelFunc04A3_0067;
	var0005 = Func08FC(0xFF5D, 0xFF06);
	if (!var0005) goto labelFunc04A3_005C;
	message("「抱歉，");
	message(var0001);
	message("，我晚点再跟你聊。但我现在想专心开会。」");
	say();
	abort;
	goto labelFunc04A3_0067;
labelFunc04A3_005C:
	message("「抱歉，");
	message(var0001);
	message("，我得去参加友谊会的集会！」");
	say();
	abort;
labelFunc04A3_0067:
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!var0002) goto labelFunc04A3_00A3;
	message("「哎呀，你好，Dupre 爵士。一切都好吧？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「你好，亲爱的 Phearcy。是的，谢谢你，一切都好。」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5D, 0x0000);
labelFunc04A3_00A3:
	if (!(!gflags[0x0205])) goto labelFunc04A3_00B5;
	message("「你看到一个对你友善微笑的男人。」");
	say();
	gflags[0x0205] = true;
	goto labelFunc04A3_00BF;
labelFunc04A3_00B5:
	message("「我能为您效劳吗，");
	message(var0001);
	message("？」Phearcy 问道。");
	say();
labelFunc04A3_00BF:
	if (!gflags[0x01DA]) goto labelFunc04A3_0138;
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0138;
	message("「你找到 Zelda 情绪波动的原因了吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04A3_012E;
	message("「太好了。在我去拿你的点心时告诉我吧。」当他为你准备餐点时，你告诉他你所知道关于 Zelda 和 Brion 的事。");
	say();
	var0007 = UI_add_party_items(0x0005, 0x0179, 0xFE99, 0x000F, true);
	if (!(!var0007)) goto labelFunc04A3_0108;
	message("「太糟糕了，");
	message(var0001);
	message("。等你的行囊轻一点时，我再把肉干给你。」");
	say();
	goto labelFunc04A3_010C;
labelFunc04A3_0108:
	gflags[0x01D9] = true;
labelFunc04A3_010C:
	var0008 = UI_add_party_items(0x0005, 0x0268, 0xFE99, 0x0000, true);
	if (!(!var0008)) goto labelFunc04A3_012B;
	message("「等你的负重轻一点时，我才能把饮料给你。」");
	say();
labelFunc04A3_012B:
	goto labelFunc04A3_0138;
labelFunc04A3_012E:
	message("「真可惜，");
	message(var0001);
	message("。也许你下次就会知道了。」");
	say();
labelFunc04A3_0138:
	converse attend labelFunc04A3_041B;
	case "姓名" attend labelFunc04A3_014E:
	message("「我是 Phearcy，为您效劳。」他微微鞠了个躬。");
	say();
	UI_remove_answer("姓名");
labelFunc04A3_014E:
	case "职业" attend labelFunc04A3_0167:
	message("「我是 Moonglow 这里的酒保。」");
	say();
	UI_add_answer(["Moonglow", "买东西"]);
labelFunc04A3_0167:
	case "友谊会" attend labelFunc04A3_0181:
	message("「哦，你是指这个？」他指着他的徽章问道。「你没听说过友谊会吗？我强烈建议你去分会办公室和 Rankin 或 Balayna 谈谈。友谊会为我们镇上，甚至整个不列颠尼亚做了许多事。我是一个坚定的新现实主义信徒。」");
	say();
	UI_add_answer("新现实主义");
	UI_remove_answer("友谊会");
labelFunc04A3_0181:
	case "新现实主义" attend labelFunc04A3_0194:
	message("「这是友谊会的基本原则。它由内在力量的三位一体组成，也就是努力团结、信任你的兄弟，还有……另一个是……喔，对了，善有善报，诸如此类的。」");
	say();
	UI_remove_answer("新现实主义");
labelFunc04A3_0194:
	case "Moonglow" attend labelFunc04A3_01CA:
	message("「你想打听镇上的某个人？你问对人了。我对 Moonglow 这里的居民了如指掌。我很乐意告诉你住在这里的任何店主、学者或农夫。还是你对训练师、治疗师、法师或友谊会领袖感兴趣？」");
	say();
	UI_remove_answer("Moonglow");
	UI_push_answers();
	UI_add_answer(["没有人", "店主", "学者", "农夫们", "训练师", "治疗师", "法师", "领袖"]);
labelFunc04A3_01CA:
	case "学者" attend labelFunc04A3_01F0:
	message("「啊，博学的学者们。我可以告诉你关于 Brion、Nelson、Zelda 和 Jillian 的事。」");
	say();
	UI_push_answers();
	UI_add_answer(["没有人", "Brion", "Nelson", "Zelda", "Jillian"]);
labelFunc04A3_01F0:
	case "领袖" attend labelFunc04A3_0210:
	message("「你想知道关于负责人还是他的书记的事？」");
	say();
	UI_push_answers();
	UI_add_answer(["没有人", "负责人", "书记"]);
labelFunc04A3_0210:
	case "法师" attend labelFunc04A3_023B:
	message("「啊，对了，Mariah 人很好。」");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_0229;
	message("「她可以卖给你很多法术。」");
	say();
	goto labelFunc04A3_0234;
labelFunc04A3_0229:
	if (!(!var0004)) goto labelFunc04A3_0234;
	message("「但我更想讨论 Zelda。」");
	say();
labelFunc04A3_0234:
	UI_remove_answer("法师");
labelFunc04A3_023B:
	case "店主" attend labelFunc04A3_0260:
	message("「她是一位裁缝。可爱的女人，那个 Carlyn。晚上我去参加友谊会集会时，她会帮忙看管酒吧。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0259;
	if (!(!var0004)) goto labelFunc04A3_0259;
	message("「但我宁愿讨论 Zelda。」");
	say();
labelFunc04A3_0259:
	UI_remove_answer("店主");
labelFunc04A3_0260:
	case "Jillian" attend labelFunc04A3_028C:
	message("「很棒的学者。非常好的人。与 Effrem 结了婚。」");
	say();
	UI_add_answer("Effrem");
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0285;
	if (!(!var0004)) goto labelFunc04A3_0285;
	message("「但我更想讨论 Zelda。」");
	say();
labelFunc04A3_0285:
	UI_remove_answer("Jillian");
labelFunc04A3_028C:
	case "Effrem" attend labelFunc04A3_02B7:
	message("「友善的家伙——我喜欢他。」");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_02A5;
	message("「他待在家里照顾他们的儿子。」");
	say();
	goto labelFunc04A3_02B0;
labelFunc04A3_02A5:
	if (!(!var0004)) goto labelFunc04A3_02B0;
	message("「但我更想讨论 Brion。」");
	say();
labelFunc04A3_02B0:
	UI_remove_answer("Effrem");
labelFunc04A3_02B7:
	case "训练师" attend labelFunc04A3_02DC:
	message("「Chad 是个友善的家伙——我喜欢他。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_02D5;
	if (!(!var0004)) goto labelFunc04A3_02D5;
	message("「但我宁愿讨论 Brion。」");
	say();
labelFunc04A3_02D5:
	UI_remove_answer("训练师");
labelFunc04A3_02DC:
	case "农夫们" attend labelFunc04A3_0301:
	message("「Tolemac 和 Cubolt 是兄弟。在 Morz 的帮助下，他们经营着一个农场。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_02FA;
	if (!(!var0004)) goto labelFunc04A3_02FA;
	message("「但我更想谈谈 Brion。」");
	say();
labelFunc04A3_02FA:
	UI_remove_answer("农夫们");
labelFunc04A3_0301:
	case "治疗师" attend labelFunc04A3_032C:
	message("「友善的家伙——我喜欢他。他的名字是 Elad。」");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_031A;
	message("「可悲的是，他真正的愿望是离开 Moonglow 去寻找冒险。但他不会离开，因为他觉得对他的病人有太多的责任。」Phearcy 耸了耸肩。~「也许这并非没有道理。」");
	say();
	goto labelFunc04A3_0325;
labelFunc04A3_031A:
	if (!(!var0004)) goto labelFunc04A3_0325;
	message("「但 Brion 对我来说更有趣。」");
	say();
labelFunc04A3_0325:
	UI_remove_answer("治疗师");
labelFunc04A3_032C:
	case "Nelson" attend labelFunc04A3_0351:
	message("「他是 Brion 的双胞胎兄弟。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_034A;
	if (!(!var0004)) goto labelFunc04A3_034A;
	message("「说到这个，我想讨论一下 Brion。」");
	say();
labelFunc04A3_034A:
	UI_remove_answer("Nelson");
labelFunc04A3_0351:
	case "负责人" attend labelFunc04A3_0364:
	message("「Rankin 负责整个当地分会。如果你对友谊会有任何疑问，他都能为你解答。」");
	say();
	UI_remove_answer("负责人");
labelFunc04A3_0364:
	case "书记" attend labelFunc04A3_0377:
	message("「如果你对友谊会有任何疑问，Balayna 都能为你解答。」");
	say();
	UI_remove_answer("书记");
labelFunc04A3_0377:
	case "Brion", "Zelda" attend labelFunc04A3_03A4:
	if (!gflags[0x01D9]) goto labelFunc04A3_038F;
	message("「嗯，如你所知，Brion 是天文台的负责人，而 Lyceaum 的顾问 Zelda 爱上了他。」");
	say();
	goto labelFunc04A3_03A4;
labelFunc04A3_038F:
	message("「啊，原来你也很好奇。我只知道每次有人对 Zelda 提起 Brion 的名字时，她严肃的表情就会变成微笑。~~「我们来做个交易吧。找出他们的故事，我就请你和你的朋友们免费吃喝一顿。你可以在天文台找到 Brion，在 Lyceaum 找到 Zelda。」");
	say();
	var0004 = true;
	UI_remove_answer(["Brion", "Zelda"]);
labelFunc04A3_03A4:
	case "没有人" attend labelFunc04A3_03B7:
	UI_pop_answers();
	UI_add_answer("告辞");
labelFunc04A3_03B7:
	case "买东西" attend labelFunc04A3_03E1:
	message("「食物还是饮料，");
	message(var0001);
	message("？」");
	say();
	UI_push_answers();
	UI_add_answer(["食物", "饮料"]);
	UI_remove_answer("买东西");
labelFunc04A3_03E1:
	case "食物" attend labelFunc04A3_03F7:
	Func08CB();
	UI_pop_answers();
	UI_remove_answer("食物");
labelFunc04A3_03F7:
	case "饮料" attend labelFunc04A3_040D:
	Func08CC();
	UI_pop_answers();
	UI_remove_answer("饮料");
labelFunc04A3_040D:
	case "告辞" attend labelFunc04A3_0418:
	goto labelFunc04A3_041B;
labelFunc04A3_0418:
	goto labelFunc04A3_0138;
labelFunc04A3_041B:
	endconv;
	message("「记住！告诉他们你是在『亲切恶棍酒馆』吃的！」*");
	say();
labelFunc04A3_0420:
	if (!(event == 0x0000)) goto labelFunc04A3_042E;
	Func092E(0xFF5D);
labelFunc04A3_042E:
	return;
}


