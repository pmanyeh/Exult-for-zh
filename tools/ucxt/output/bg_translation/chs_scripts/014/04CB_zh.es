#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);

void Func04CB object#(0x4CB) ()
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

	if (!(event == 0x0001)) goto labelFunc04CB_0245;
	UI_show_npc_face(0xFF35, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_part_of_day();
	var0004 = UI_get_npc_object(0xFF35);
	var0005 = UI_get_npc_object(0xFF34);
	var0006 = UI_get_schedule_type(var0004);
	var0007 = UI_get_alignment(var0004);
	UI_add_answer(["姓名", "职业", "告辞", "友谊会"]);
	if (!(var0007 == 0x0002)) goto labelFunc04CB_0084;
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0005, 0x0000);
labelFunc04CB_0084:
	if (!gflags[0x0284]) goto labelFunc04CB_0091;
	UI_add_answer("Elizabeth 与 Abraham");
labelFunc04CB_0091:
	if (!(!gflags[0x0288])) goto labelFunc04CB_00A3;
	message("你看到一个宽肩、神情庄重的男人。");
	say();
	gflags[0x0288] = true;
	goto labelFunc04CB_00AD;
labelFunc04CB_00A3:
	message("「是的，");
	message(var0000);
	message("？」 Cador 说。");
	say();
labelFunc04CB_00AD:
	converse attend labelFunc04CB_023A;
	case "姓名" attend labelFunc04CB_0127:
	message("男人和你握手。「我是 Cador 。」");
	say();
	if (!(var0006 == 0x001A)) goto labelFunc04CB_0120;
	message("「你的名字是？」");
	say();
	var0008 = Func090B([var0001, var0002, var0000]);
	if (!(var0008 == var0002)) goto labelFunc04CB_0116;
	message("「什么？你是说把那些石像鬼带到我们宝贵土地上的人就是你？」他变得相当愤怒。~~「恶魔的爱人！」*");
	say();
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_alignment(var0004, 0x0002);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_alignment(var0005, 0x0002);
	abort;
	goto labelFunc04CB_0120;
labelFunc04CB_0116:
	message("「很高兴认识你，");
	message(var0000);
	message("。」");
	say();
labelFunc04CB_0120:
	UI_remove_answer("姓名");
labelFunc04CB_0127:
	case "职业" attend labelFunc04CB_0143:
	message("「我负责监督不列颠尼亚矿业公司在 Vesper 的分部。我们开采许多不同的矿物。」");
	say();
	UI_add_answer(["Vesper", "我们", "矿物"]);
labelFunc04CB_0143:
	case "矿物" attend labelFunc04CB_0156:
	message("「黄金和铅。」");
	say();
	UI_remove_answer("矿物");
labelFunc04CB_0156:
	case "Vesper" attend labelFunc04CB_0176:
	message("「那是我们城镇的名字。市政厅的 Liana 可以给你任何你可能需要的进一步信息，但自从这里的分部开设以来，我就和家人住在这里。」");
	say();
	UI_add_answer(["Liana", "家人"]);
	UI_remove_answer("Vesper");
labelFunc04CB_0176:
	case "友谊会" attend labelFunc04CB_019A:
	message("「这是一个很棒的组织。他们举办许多慈善活动和特殊事件——游行之类的。」他指着他的奖章。「如你所见，我是成员之一。我完全相信内在力量的三位一体 (Triad of Inner Strength) 。」");
	say();
	if (!gflags[0x0284]) goto labelFunc04CB_018C;
	message("「事实上，两位友谊会官员刚刚才来过这里。他们说在镇上创建分会之前，了解城镇的经济运作很重要。你明白这意味着什么吗？」他自豪地笑着。「他们要在 Vesper 创建友谊会分部。」");
	say();
labelFunc04CB_018C:
	UI_add_answer("三位一体 (Triad)");
	UI_remove_answer("友谊会");
labelFunc04CB_019A:
	case "三位一体 (Triad)" attend labelFunc04CB_01AD:
	message("「那些是友谊会的三项基本原则：致力合一 (Strive for Unity) 、信赖你的兄弟 (Trust thy Brother) 以及价值先行于报偿 (Worthiness Precedes Reward) 。」");
	say();
	UI_remove_answer("三位一体 (Triad)");
labelFunc04CB_01AD:
	case "Elizabeth 与 Abraham" attend labelFunc04CB_01C0:
	message("「他们就是刚在这里的两名友谊会官员！他们只待了一两分钟。我不知道他们现在在哪里。」");
	say();
	UI_remove_answer("Elizabeth 与 Abraham");
labelFunc04CB_01C0:
	case "我们" attend labelFunc04CB_01E0:
	message("「我和 Mara 以及一只名叫 Lap-Lem 的石像鬼一起工作。」");
	say();
	UI_add_answer(["Mara", "Lap-Lem"]);
	UI_remove_answer("我们");
labelFunc04CB_01E0:
	case "Mara" attend labelFunc04CB_01F3:
	message("「她是一名了不起的工人。比我一起采矿过的大多数男人都好。」");
	say();
	UI_remove_answer("Mara");
labelFunc04CB_01F3:
	case "Lap-Lem" attend labelFunc04CB_0206:
	message("「嗯，对于一只石像鬼来说，他不算太懒惰。他比那个离开的 Anmanivas 工作努力得多。但如果我们不是需要人手，我很乐意让他走。」");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04CB_0206:
	case "Liana" attend labelFunc04CB_0219:
	message("「她在市政厅保管记录。」");
	say();
	UI_remove_answer("Liana");
labelFunc04CB_0219:
	case "家人" attend labelFunc04CB_022C:
	message("「是的，我的妻子 Yvella ，和我的女儿 Catherine 。」");
	say();
	UI_remove_answer("家人");
labelFunc04CB_022C:
	case "告辞" attend labelFunc04CB_0237:
	goto labelFunc04CB_023A;
labelFunc04CB_0237:
	goto labelFunc04CB_00AD;
labelFunc04CB_023A:
	endconv;
	message("「这是我的荣幸，");
	message(var0000);
	message("。」*");
	say();
labelFunc04CB_0245:
	if (!(event == 0x0000)) goto labelFunc04CB_024E;
	abort;
labelFunc04CB_024E:
	return;
}


