#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0876 0x876 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04C7 object#(0x4C7) ()
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

	if (!(event == 0x0001)) goto labelFunc04C7_0431;
	UI_show_npc_face(0xFF39, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFC);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C7_0069;
	if (!gflags[0x0275]) goto labelFunc04C7_004F;
	UI_add_answer("帮助");
labelFunc04C7_004F:
	if (!gflags[0x0275]) goto labelFunc04C7_0069;
	if (!gflags[0x0259]) goto labelFunc04C7_0069;
	UI_add_answer("得到碎片");
	UI_remove_answer("帮助");
labelFunc04C7_0069:
	if (!var0002) goto labelFunc04C7_0092;
	message("「向你致敬， Dupre 爵士。你又回来为 Brommer 研究葡萄酒了吗？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「哎呀，啊，是的，我的好朋友， Denton 。我，呃，还在进行那项研究。」他转向你并耸耸肩，难为情地笑着。");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF39, 0x0000);
labelFunc04C7_0092:
	if (!(!gflags[0x0270])) goto labelFunc04C7_00A4;
	message("你面前的男人似乎茫然地盯着你。");
	say();
	gflags[0x0270] = true;
	goto labelFunc04C7_00AE;
labelFunc04C7_00A4:
	message("「哈啰，");
	message(var0001);
	message("，」Denton 说道。");
	say();
labelFunc04C7_00AE:
	converse attend labelFunc04C7_0426;
	case "姓名" attend labelFunc04C7_00E7:
	message("「我是 Denton 爵士，");
	message(var0001);
	message("。」");
	say();
	gflags[0x0275] = true;
	UI_remove_answer("姓名");
	if (!gflags[0x025E]) goto labelFunc04C7_00E7;
	if (!(!(gflags[0x0259] && (!gflags[0x0261])))) goto labelFunc04C7_00E7;
	UI_add_answer("帮助");
labelFunc04C7_00E7:
	case "职业" attend labelFunc04C7_0109:
	message("「我是酒馆老板，");
	message(var0001);
	message("。我贩卖茶点给不列颠尼亚的公民，特别是 Serpent's Hold 的骑士们。」");
	say();
	UI_add_answer(["贩卖", "Serpent's Hold", "骑士"]);
labelFunc04C7_0109:
	case "骑士" attend labelFunc04C7_0132:
	message("「这里几乎每个居民都是高贵的战士。例外的是物资商人 Jehanne 女士； Tory 女士；治疗师 Leigh 女士；以及训练师 Menion 。我也可以告诉你关于其他居民的事。」");
	say();
	UI_add_answer(["Jehanne 女士", "Lady Tory", "Lady Leigh", "Menion", "居民"]);
	UI_remove_answer("骑士");
labelFunc04C7_0132:
	case "贩卖" attend labelFunc04C7_013D:
	Func0876();
labelFunc04C7_013D:
	case "Serpent's Hold" attend labelFunc04C7_0150:
	message("「Serpent's Hold 准确地位于东经 53 度，南纬 165 度。」");
	say();
	UI_remove_answer("Serpent's Hold");
labelFunc04C7_0150:
	case "居民" attend labelFunc04C7_017F:
	message("「是的，");
	message(var0001);
	message("，我可以告诉你关于以下这些人的事：");
	say();
	UI_push_answers();
	UI_add_answer(["先不用了", "Lord John-Paul", "Sir Richter", "Sir Horffe", "Sir Jordan", "Sir Pendaran"]);
labelFunc04C7_017F:
	case "先不用了" attend labelFunc04C7_0192:
	UI_pop_answers();
	UI_remove_answer("居民");
labelFunc04C7_0192:
	case "Lord John-Paul" attend labelFunc04C7_01A5:
	message("「他是 Serpent's Hold 的领主。他是个有能力的领导者，也是个公平的人。」");
	say();
	UI_remove_answer("Lord John-Paul");
labelFunc04C7_01A5:
	case "Lady Leigh" attend labelFunc04C7_01B8:
	message("「据说她的治疗技巧无与伦比。」");
	say();
	UI_remove_answer("Lady Leigh");
labelFunc04C7_01B8:
	case "Sir Richter" attend labelFunc04C7_01D2:
	message("「他是 John-Paul 领主的副手。他正在教我如何赌得好。事实上，在加入友谊会后，他开始增加课程。」");
	say();
	UI_add_answer("友谊会");
	UI_remove_answer("Sir Richter");
labelFunc04C7_01D2:
	case "Sir Horffe" attend labelFunc04C7_01F2:
	message("「Horffe 爵士是一位优秀的战士。他是一只石像鬼，在很小的时候被两名骑士发现。他们选择把他当作自己的孩子抚养。他非常高尚。」");
	say();
	UI_remove_answer("Sir Horffe");
	if (!gflags[0x026E]) goto labelFunc04C7_01F2;
	UI_add_answer("石像鬼口音");
labelFunc04C7_01F2:
	case "石像鬼口音" attend labelFunc04C7_0205:
	message("「Horffe 爵士选择使用石像鬼语法来说我们的语言，这样他就能更好地保持文化联系。」");
	say();
	UI_remove_answer("石像鬼口音");
labelFunc04C7_0205:
	case "Sir Jordan" attend labelFunc04C7_0218:
	message("「尽管他双眼失明，Jordan 爵士却能很好地感知周围的物体。他是一位出色的修补匠，可以修理许多物品。」");
	say();
	UI_remove_answer("Sir Jordan");
labelFunc04C7_0218:
	case "Lady Tory" attend labelFunc04C7_022B:
	message("「我相信她是一名德鲁伊。她正在教我如何比以前更有同情心。她非常擅长了解别人的感受以及他们为什么会经历这样的情绪。」");
	say();
	UI_remove_answer("Lady Tory");
labelFunc04C7_022B:
	case "Menion" attend labelFunc04C7_023E:
	message("「他是战斗教练。在空闲时间，他喜欢打造剑。 Menion 很好心，给了我一把他的作品。」");
	say();
	UI_remove_answer("Menion");
labelFunc04C7_023E:
	case "Sir Pendaran" attend labelFunc04C7_0251:
	message("「Pendaran 爵士是堡垒的一名骑士。他非常友善，但我听说他有时会很霸道。」");
	say();
	UI_remove_answer("Sir Pendaran");
labelFunc04C7_0251:
	case "Jehanne 女士" attend labelFunc04C7_026B:
	message("「她是 Pendaran 爵士的女士。她一直在帮助我改善幽默感。」");
	say();
	UI_add_answer("幽默");
	UI_remove_answer("Jehanne 女士");
labelFunc04C7_026B:
	case "幽默" attend labelFunc04C7_02FE:
	message("「我的笑话很糟。如果你想听，我可以说一个。」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C7_02F3;
	message("「为什么鸡要过马路？」");
	say();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04C7_02B4;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「为了走到另一边！哦，这个笑话真新，」他讽刺地说。*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc04C7_02B4:
	if (!var0004) goto labelFunc04C7_02D5;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 在你耳边低语。~~「");
	message(var0000);
	message("，我们以前听过这个了。最好在他沉浸在另一个笑话之前离开他。」");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04C7_02D5:
	UI_show_npc_face(0xFF39, 0x0000);
	UI_push_answers();
	UI_add_answer(["到另一边去", "我不知道"]);
	goto labelFunc04C7_02F7;
labelFunc04C7_02F3:
	message("他似乎有些失望，但这很可能是你的错觉。");
	say();
labelFunc04C7_02F7:
	UI_remove_answer("幽默");
labelFunc04C7_02FE:
	case "我不知道" attend labelFunc04C7_033A:
	UI_pop_answers();
	UI_remove_answer("幽默");
	message("他微微一笑。~~「为了走到另一边。你觉得好笑吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C7_0328;
	message("他显得有些困惑。「真奇怪，没人觉得那个笑话有趣。~~或许我比我想像的还要风趣……」");
	say();
	goto labelFunc04C7_032C;
labelFunc04C7_0328:
	message("「也没人觉得好笑。我会继续练习变得风趣。」");
	say();
labelFunc04C7_032C:
	UI_remove_answer("我不知道");
	UI_remove_answer("到另一边去");
labelFunc04C7_033A:
	case "到另一边去" attend labelFunc04C7_035F:
	UI_pop_answers();
	UI_remove_answer("幽默");
	message("「哦。你以前听过了。」");
	say();
	UI_remove_answer("到另一边去");
	UI_remove_answer("我不知道");
labelFunc04C7_035F:
	case "友谊会" attend labelFunc04C7_03CC:
	message("「友谊会是一个有二十年历史的组织，举办许多节日、游行和庆祝活动。此外，他们还在 Paws 镇维持一个庇护所。他们有一个潜在的理念，被称为『内在力量的三位一体 (Triad of Inner Strength)』 。这个三位一体被分解为三个原则：『致力合一 (Strive For Unity)』、『信赖你的兄弟 (Trust Thy Brother)』和『价值先行于报偿 (Worthiness Precedes Reward)』。我现在将解释每一个原则的含义。」");
	say();
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04C7_0399;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「这个叫 Denton 的家伙真是啰嗦。」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF39, 0x0000);
labelFunc04C7_0399:
	message("「努力团结似乎意味着友谊会希望大家为了社会的福祉共同努力。信任你的兄弟暗示着每个人不应该质疑他人的行为。善有善报表明友谊会对回报的态度是，必须做好事才能得到回报。」");
	say();
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C7_03C5;
	message("他看着你的奖章。~~「我的情报正确吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04C7_03C1;
	message("「谢谢你。我总是努力做正确的事。」");
	say();
	goto labelFunc04C7_03C5;
labelFunc04C7_03C1:
	message("「我会试着获取更多信息。」");
	say();
labelFunc04C7_03C5:
	UI_remove_answer("友谊会");
labelFunc04C7_03CC:
	case "帮助" attend labelFunc04C7_03E5:
	message("「是的，");
	message(var0001);
	message("，我可以帮你调查这起犯罪。我相信最好的开始方式是跟 Richter 爵士谈谈，因为事件发生后是他搜查雕像的。」");
	say();
	UI_remove_answer("帮助");
labelFunc04C7_03E5:
	case "得到碎片" attend labelFunc04C7_0405:
	message("「或许你应该让治疗师 Leigh 女士检查一下这些石片。」");
	say();
	if (!gflags[0x025F]) goto labelFunc04C7_03FE;
	UI_add_answer("石像鬼的血");
labelFunc04C7_03FE:
	UI_remove_answer("得到碎片");
labelFunc04C7_0405:
	case "石像鬼的血" attend labelFunc04C7_0418:
	message("「那行为不像是 Horffe 爵士的作风。你或许可以向 John-Paul 领主报告，但我预期这件事没那么单纯。去找 Tory 女士是个好主意。她非常擅长感知他人的情绪，或许在事件发生后，借由观察居民了解到了一些事情。」");
	say();
	UI_remove_answer("石像鬼的血");
labelFunc04C7_0418:
	case "告辞" attend labelFunc04C7_0423:
	goto labelFunc04C7_0426;
labelFunc04C7_0423:
	goto labelFunc04C7_00AE;
labelFunc04C7_0426:
	endconv;
	message("「日安，");
	message(var0001);
	message("。」*");
	say();
labelFunc04C7_0431:
	if (!(event == 0x0000)) goto labelFunc04C7_043F;
	Func092E(0xFF39);
labelFunc04C7_043F:
	return;
}


