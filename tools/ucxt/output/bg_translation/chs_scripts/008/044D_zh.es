#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func044D object#(0x44D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc044D_0275;
	UI_show_npc_face(0xFFB3, 0x0000);
	var0000 = UI_is_pc_female();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00E0]) goto labelFunc044D_0036;
	UI_add_answer("Nastassia");
labelFunc044D_0036:
	if (!gflags[0x006A]) goto labelFunc044D_0049;
	UI_add_answer(["法案", "Lock Lake"]);
labelFunc044D_0049:
	if (!(!gflags[0x00EA])) goto labelFunc044D_005F;
	message("这位充满王者风范的绅士完美诠释了一位受欢迎的政治家。");
	say();
	message("「你好！不列颠王传话说你也许会来拜访我们。欢迎来到 Cove，圣者！」");
	say();
	gflags[0x00EA] = true;
	goto labelFunc044D_0063;
labelFunc044D_005F:
	message("「再次问候，圣者！」Lord Heather 声明着。");
	say();
labelFunc044D_0063:
	converse attend labelFunc044D_0270;
	case "姓名" attend labelFunc044D_0079:
	message("「我是 Lord Heather。我认得你，圣者！」");
	say();
	UI_remove_answer("姓名");
labelFunc044D_0079:
	case "职业" attend labelFunc044D_0092:
	message("「我是 Cove 的镇长，慈悲神殿的所在地。」");
	say();
	UI_add_answer(["Cove", "神殿"]);
labelFunc044D_0092:
	case "Cove" attend labelFunc044D_00A5:
	message("「我知道这是个小地方。我们许多居民都搬到较大的城镇去了，尤其是不列颠城。但我们保留了一小群忠诚的 Cove 镇民。」");
	say();
	UI_remove_answer("Cove");
labelFunc044D_00A5:
	case "神殿" attend labelFunc044D_00BF:
	message("「我们为我们的神殿感到骄傲。我们的一位居民把它照顾得很好。如果你还没去过，一定要去看看神殿。它是镇上所有恋人的纪念碑。」");
	say();
	UI_add_answer("恋人们");
	UI_remove_answer("神殿");
labelFunc044D_00BF:
	case "恋人们" attend labelFunc044D_00DF:
	message("「不列颠城也许是慈悲之城，但 Cove 已经成为热情之城。这里的每个人似乎都很容易坠入爱河。你会发现每个人都爱着某个人。几乎每个人都是如此。」");
	say();
	UI_remove_answer("恋人们");
	UI_add_answer(["每个人", "几乎每个人"]);
labelFunc044D_00DF:
	case "每个人" attend labelFunc044D_01AE:
	message("「嗯，让我想想……我爱上了我们的治疗师 Jaana。当然，她也爱我。然后是经营翡翠酒馆的 Zinaida。她对我们当地的吟游诗人 De Maria 有好感。反之亦然。我们的训练师 Rayburt 正在追求旅店老板 Pamela。」");
	say();
	var0001 = Func08F7(0xFFFF);
	if (!var0001) goto labelFunc044D_0119;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「这听起来就像一出糟糕的戏剧！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_0119:
	var0002 = Func08F7(0xFFFE);
	if (!var0002) goto labelFunc044D_0147;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「这附近有跟我同年纪的女孩吗？」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_0147:
	gflags[0x00E4] = true;
	UI_remove_answer("每个人");
	var0003 = Func08F7(0xFFFB);
	if (!var0003) goto labelFunc044D_01AE;
	message("「亲爱的，我看你要暂时离开 Cove 了？」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「是的，大人。但我会回来的。我向你保证。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我会尽量不为你担心，但这很难。」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「别担心。我和圣者在一起会很安全的。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我希望如此。」镇长拥抱了 Jaana。*");
	say();
	UI_remove_npc_face(0xFFFB);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_01AE:
	case "几乎每个人" attend labelFunc044D_01C8:
	message("「除了 Nastassia。」");
	say();
	UI_remove_answer("几乎每个人");
	UI_add_answer("Nastassia");
labelFunc044D_01C8:
	case "Nastassia" attend labelFunc044D_0208:
	if (!(!gflags[0x00E0])) goto labelFunc044D_01E2;
	message("「她是一位可爱的年轻女子，但总是忧郁。De Maria 可以告诉你更多关于她的事。我建议你去翡翠酒馆找他。那是一个悲伤但引人入胜的故事。」");
	say();
	gflags[0x00E3] = true;
	goto labelFunc044D_0201;
labelFunc044D_01E2:
	if (!var0000) goto labelFunc044D_01F1;
	var0004 = "『某个人』";
	goto labelFunc044D_01F7;
labelFunc044D_01F1:
	var0004 = "『与君相似的人』";
labelFunc044D_01F7:
	message("「我真的希望你能帮她。她需要");
	message(var0004);
	message("将她从忧郁中带出来。」");
	say();
labelFunc044D_0201:
	UI_remove_answer("Nastassia");
labelFunc044D_0208:
	case "法案" attend labelFunc044D_024F:
	if (!(!gflags[0x00DE])) goto labelFunc044D_0244;
	var0005 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99);
	if (!var0005) goto labelFunc044D_023D;
	message("「官府早该对那座湖传出的恶臭采取行动了！我很乐意签署你的法案！快把它带回大议会！」Lord Heather 签署了法案并交还给你。");
	say();
	gflags[0x00DE] = true;
	goto labelFunc044D_0241;
labelFunc044D_023D:
	message("「但你没有法案！」");
	say();
labelFunc044D_0241:
	goto labelFunc044D_0248;
labelFunc044D_0244:
	message("「我以为我已经签过那法案了！」");
	say();
labelFunc044D_0248:
	UI_remove_answer("法案");
labelFunc044D_024F:
	case "Lock Lake" attend labelFunc044D_0262:
	message("「它变得如此腐臭，在炎热的夏日里，臭味令人窒息。我相信 Minoc 的不列颠尼亚矿业公司是问题的根源。采矿废料被倒进了湖里。你应该庆幸现在快冬天了！」");
	say();
	UI_remove_answer("Lock Lake");
labelFunc044D_0262:
	case "告辞" attend labelFunc044D_026D:
	goto labelFunc044D_0270;
labelFunc044D_026D:
	goto labelFunc044D_0063;
labelFunc044D_0270:
	endconv;
	message("「欢迎再次来访，圣者！」*");
	say();
labelFunc044D_0275:
	if (!(event == 0x0000)) goto labelFunc044D_0283;
	Func092E(0xFFB3);
labelFunc044D_0283:
	return;
}


