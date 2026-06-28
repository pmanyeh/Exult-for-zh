#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0840 0x840 ();
extern void Func092E 0x92E (var var0000);

void Func04F6 object#(0x4F6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04F6_02D2;
	UI_show_npc_face(0xFF0A, 0x0000);
	var0000 = Func0908();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0133] && (!gflags[0x0196]))) goto labelFunc04F6_0047;
	UI_add_answer(["鬼火", "笔记本"]);
labelFunc04F6_0047:
	if (!gflags[0x0196]) goto labelFunc04F6_0054;
	UI_add_answer("答案");
labelFunc04F6_0054:
	if (!(!gflags[0x0189])) goto labelFunc04F6_0066;
	message("你看到一个高大的男人，散发着一种几乎狡猾、博学的气息。");
	say();
	gflags[0x0189] = true;
	goto labelFunc04F6_006A;
labelFunc04F6_0066:
	message("「又见面了，」Alagner 说。");
	say();
labelFunc04F6_006A:
	converse attend labelFunc04F6_02CD;
	case "姓名" attend labelFunc04F6_00B4:
	message("这位贤者微笑并点点头。「我的名字是 Alagner。你又是谁？」");
	say();
	UI_push_answers();
	var0002 = Func090B([var0000, "Avatar"]);
	if (!(var0002 == var0000)) goto labelFunc04F6_009B;
	message("「我明白了。很高兴认识你。走开。我很忙。」*");
	say();
	abort;
labelFunc04F6_009B:
	if (!(var0002 == "Avatar")) goto labelFunc04F6_00B4;
	message("Alagner 睁大了眼睛。~~「我的天啊！我认得你！这真是太荣幸了！我有什么可以为你效劳的吗？」");
	say();
	UI_pop_answers();
	UI_remove_answer("姓名");
labelFunc04F6_00B4:
	case "职业" attend labelFunc04F6_00CD:
	message("「我的职业——或者说，我的命运——是学习和了解所有事物。我来到 New Magincia 创建我的工作室并实践此事。」");
	say();
	UI_add_answer(["New Magincia", "工作室"]);
labelFunc04F6_00CD:
	case "New Magincia" attend labelFunc04F6_00E7:
	message("这位贤者叹了口气。「我离开不列颠尼亚大陆，来到相对和平安宁的 New Magincia。我在这里很满足，因为它与世隔绝，而且免受……不列颠尼亚正在发生的污秽和腐败的影响。没有多少人看到这一点。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer("腐败");
labelFunc04F6_00E7:
	case "工作室" attend labelFunc04F6_0101:
	message("「这是我的工作室。我在这里细读我的书籍和论文。偶尔，我会发明一些东西，例如这个水晶球。」");
	say();
	UI_remove_answer("工作室");
	UI_add_answer("水晶球");
labelFunc04F6_0101:
	case "水晶球" attend labelFunc04F6_0114:
	message("「它是一个记录设备。如果我忘记了实验中的一个进程或步骤，我可以看水晶球，看看昨天发生的事。请随意使用。你会看到我昨天在做什么。」");
	say();
	UI_remove_answer("水晶球");
labelFunc04F6_0114:
	case "鬼火" attend labelFunc04F6_0127:
	message("「牠们是来自另一个维度极为冷漠的生物。你会以为牠们是你的朋友，但牠们很可能在替别人监视『你』！牠们对善恶没有忠诚——牠们关心的只是获取情报——牠们获取情报的方式有时是光荣的，有时则不然。」");
	say();
	UI_remove_answer("鬼火");
labelFunc04F6_0127:
	case "腐败" attend labelFunc04F6_0147:
	message("「不列颠尼亚的人民变得粗心且懒惰。他们不寻求真正的知识。他们不尊重他们的土地。他们不尊重彼此。我们土地的资源正在被浪费。矿工正在用危险的材料做实验。这片土地上存在着一种邪恶，而我不确定它是否就在人民自己身上。」");
	say();
	UI_remove_answer("腐败");
	UI_add_answer(["真正的知识", "邪恶"]);
labelFunc04F6_0147:
	case "真正的知识" attend labelFunc04F6_015A:
	message("「真正的知识是获得完全满足的唯一途径。」");
	say();
	UI_remove_answer("真正的知识");
labelFunc04F6_015A:
	case "邪恶" attend labelFunc04F6_0193:
	if (!var0001) goto labelFunc04F6_0176;
	message("「我懂了，你是友谊会的成员。你肯定不了解他们的一切。如果你了解，你就不会是会员了！」");
	say();
	UI_add_answer("卧底");
	goto labelFunc04F6_0181;
labelFunc04F6_0176:
	message("「我相信你现在已经听说过友谊会了。」");
	say();
	UI_add_answer("怀疑");
labelFunc04F6_0181:
	message("「他们狡猾且虚伪。我正在努力获取这方面的证据。」");
	say();
	UI_remove_answer("邪恶");
	UI_add_answer("证据");
labelFunc04F6_0193:
	case "证据" attend labelFunc04F6_01B3:
	message("「我正在我的笔记本里记录这些情报。」");
	say();
	UI_remove_answer("证据");
	UI_add_answer(["情报", "笔记本"]);
labelFunc04F6_01B3:
	case "情报" attend labelFunc04F6_01C6:
	message("「全都在笔记本里。」");
	say();
	UI_remove_answer("情报");
labelFunc04F6_01C6:
	case "卧底" attend labelFunc04F6_01D9:
	message("「你加入友谊会是为了研究他们的作风？你也怀疑他们？也许你比我想像的更有内涵。我们正朝着同一个目标努力。」");
	say();
	UI_remove_answer("卧底");
labelFunc04F6_01D9:
	case "怀疑" attend labelFunc04F6_01EC:
	message("「你怀疑友谊会有不轨行为？那太好了！你确实很有洞察力！也许我们正朝着同一个目标努力！」");
	say();
	UI_remove_answer("怀疑");
labelFunc04F6_01EC:
	case "笔记本" attend labelFunc04F6_0219:
	message("「它被藏在一个安全的地方，还有我其他珍贵的知识来源。」");
	say();
	if (!(gflags[0x0133] && (!gflags[0x0196]))) goto labelFunc04F6_0212;
	message("Alagner 听你说你想借那本笔记本。");
	say();
	message("「既然你在运行一项光荣的任务，我想我可以让你借用它，条件是你必须向我保证你会归还它，并且如果你能提供证据，证明你渴望了解世界上真正的知识。」");
	say();
	UI_add_answer("了解");
labelFunc04F6_0212:
	UI_remove_answer("笔记本");
labelFunc04F6_0219:
	case "了解" attend labelFunc04F6_0265:
	message("「很好。你知道关于生与死问题的答案吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04F6_0244;
	if (!gflags[0x0196]) goto labelFunc04F6_023D;
	Func0840();
	goto labelFunc04F6_0241;
labelFunc04F6_023D:
	message("「我不相信你知道。」");
	say();
labelFunc04F6_0241:
	goto labelFunc04F6_0248;
labelFunc04F6_0244:
	message("「不，你当然不知道。」");
	say();
labelFunc04F6_0248:
	if (!(!gflags[0x017C])) goto labelFunc04F6_025E;
	message("「只有那些离开今生的灵魂才知道这些事。去寻找被折磨者（The Tortured One）的灵魂。问他关于生与死问题的答案是什么。当你带着正确答案回来时，我就会相信你是真心实意地在追求知识。只有在那时，我才会允许你借用笔记本。」");
	say();
	UI_add_answer("被折磨者");
	gflags[0x017C] = true;
labelFunc04F6_025E:
	UI_remove_answer("了解");
labelFunc04F6_0265:
	case "被折磨者" attend labelFunc04F6_027F:
	message("「唉，他是个可怜的灵魂，注定要在他的住所游荡直到永恒。」");
	say();
	UI_remove_answer("被折磨者");
	UI_add_answer("住所");
labelFunc04F6_027F:
	case "住所" attend labelFunc04F6_0292:
	message("「去 Skara Brae 找他吧。但要小心。那是一个危险的地方。我还建议你，你必须使用降灵术才能与岛上的任何人交谈。他们都是不死生物。」");
	say();
	UI_remove_answer("住所");
labelFunc04F6_0292:
	case "答案" attend labelFunc04F6_02BF:
	message("「你已经和被折磨者谈过，并知道了关于生与死问题的答案了吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F6_02B4;
	message("「那么答案是什么？」");
	say();
	Func0840();
	goto labelFunc04F6_02B8;
labelFunc04F6_02B4:
	message("「在你做到之前不要回来。」");
	say();
labelFunc04F6_02B8:
	UI_remove_answer("答案");
labelFunc04F6_02BF:
	case "告辞" attend labelFunc04F6_02CA:
	goto labelFunc04F6_02CD;
labelFunc04F6_02CA:
	goto labelFunc04F6_006A;
labelFunc04F6_02CD:
	endconv;
	message("「再见。愿你的旅程有所收获。」*");
	say();
labelFunc04F6_02D2:
	if (!(event == 0x0000)) goto labelFunc04F6_02E0;
	Func092E(0xFF0A);
labelFunc04F6_02E0:
	return;
}


