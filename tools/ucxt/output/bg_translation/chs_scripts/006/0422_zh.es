#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0422 object#(0x422) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0422_0271;
	UI_show_npc_face(0xFFDE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDE));
	var0002 = UI_wearing_fellowship();
	if (!(var0000 == 0x0007)) goto labelFunc0422_0067;
	var0003 = Func08FC(0xFFDE, 0xFFE6);
	if (!var0003) goto labelFunc0422_0052;
	message("Nanna 因为你在友谊会集会时打扰她而给了你一个严厉的眼神，就像你曾经遇到过的小学老师那样。*");
	say();
	abort;
	goto labelFunc0422_0067;
labelFunc0422_0052:
	if (!gflags[0x00DA]) goto labelFunc0422_0062;
	message("「我无法想像巴特林在哪里。他从未缺席过友谊会的集会！」");
	say();
	goto labelFunc0422_0067;
	goto labelFunc0422_0067;
labelFunc0422_0062:
	message("「喔！哈啰！我现在不能停下来说话。我正在去友谊会集会的路上！」*");
	say();
	abort;
labelFunc0422_0067:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A3])) goto labelFunc0422_0089;
	message("你看到一位散发着和蔼气息的劳工阶级年长妇女。");
	say();
	gflags[0x00A3] = true;
	goto labelFunc0422_008D;
labelFunc0422_0089:
	message("「是的，我能帮你吗？」 Nanna 问。");
	say();
labelFunc0422_008D:
	converse attend labelFunc0422_026C;
	case "姓名" attend labelFunc0422_00A3:
	message("「喔，大家只叫我『Nanna』。」");
	say();
	UI_remove_answer("姓名");
labelFunc0422_00A3:
	case "职业" attend labelFunc0422_00BF:
	message("「我负责看管皇家育儿室。我是这些棒孩子们的保母。」");
	say();
	UI_add_answer(["皇家育儿室", "保母", "孩子们"]);
labelFunc0422_00BF:
	case "皇家育儿室" attend labelFunc0422_013C:
	message("「近年来不列颠尼亚出生了许多婴儿，所以不列颠王创建了这个育儿室。贵族男女能有这种奢侈的服务真是不错，这样他们就能专心处理日常职务了。」");
	say();
	UI_remove_answer("皇家育儿室");
	UI_add_answer("奢侈");
	var0004 = Func08F7(0xFFFE);
	if (!(var0001 == 0x0007)) goto labelFunc0422_0135;
	if (!var0004) goto labelFunc0422_0107;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「呼！你有闻到我闻到的味道吗，圣者？」*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0422_0107:
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0422_012B;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我相信那是尿布的味道，孩子。当有一天你成为父亲时，你就会很熟悉那个味道了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0422_012B:
	UI_show_npc_face(0xFFDE, 0x0000);
labelFunc0422_0135:
	UI_remove_answer("皇家育儿室");
labelFunc0422_013C:
	case "保母" attend labelFunc0422_015C:
	message("「嗯，我喂他们吃饭、帮他们换尿布，并大声朗读你看到散落在一旁的所有书籍。幸运的是，我有 Sherry 来帮我。」");
	say();
	UI_remove_answer("保母");
	UI_add_answer(["书籍", "Sherry"]);
labelFunc0422_015C:
	case "书籍" attend labelFunc0422_016F:
	message("「不列颠王把这些书从他的家乡带来的。这些对我们不列颠尼亚来说非常陌生，但孩子们一样很喜欢。」");
	say();
	UI_remove_answer("书籍");
labelFunc0422_016F:
	case "Sherry" attend labelFunc0422_0182:
	message("「Sherry 是一只特别的老鼠，她在城堡里住了很多、许多年了。她会为孩子们朗诵故事。」");
	say();
	UI_remove_answer("Sherry");
labelFunc0422_0182:
	case "孩子们" attend labelFunc0422_01B8:
	message("「他们很可爱，不是吗？每一天他们似乎都学得越来越多。大部分时间他们都是一种快乐。」 Nanna 神秘兮兮地对你耳语，「而在其他时候，我真想把他们连同洗澡水一起倒掉！」");
	say();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFFE0));
	if (!(var0006 == 0x0019)) goto labelFunc0422_01B1;
	message("「孩子们现在一定在外面和 Sherry 玩。」");
	say();
	UI_add_answer("Sherry");
labelFunc0422_01B1:
	UI_remove_answer("孩子们");
labelFunc0422_01B8:
	case "奢侈" attend labelFunc0422_01D2:
	message("「是的，我想这真的是一种奢侈。不列颠尼亚较贫穷的人当然没有这种照顾他们孩子的服务。富人确实有优势。」你从她的声音中听出了一丝苦涩。");
	say();
	UI_remove_answer("奢侈");
	UI_add_answer("优势");
labelFunc0422_01D2:
	case "优势" attend labelFunc0422_01F2:
	message("「我绝不是要抱怨。我很热爱我的工作。但与许多贵族男女的想法相反，不列颠尼亚的阶级结构比以往任何时候都存在。税收令人难以承受。俗话说，富人越来越富，穷人越来越穷。」");
	say();
	UI_remove_answer("优势");
	UI_add_answer(["阶级结构", "税收"]);
labelFunc0422_01F2:
	case "税收" attend labelFunc0422_0205:
	message("「不列颠尼亚税务委员会把我们都榨干了。尤其是中下阶层。」");
	say();
	UI_remove_answer("税收");
labelFunc0422_0205:
	case "阶级结构" attend labelFunc0422_0229:
	message("「嗯，你看看周围！有钱人住在富丽堂皇的城堡里。而就在外面，穷人住在破屋里。你知道石像鬼（gargoyles）有分有翅膀和没翅膀的吗？嗯，看来人类也变得同样分裂了。这片土地上不再有团结了。这就是为什么我加入了友谊会。」");
	say();
	UI_remove_answer("阶级结构");
	UI_add_answer(["友谊会", "理念"]);
	gflags[0x0082] = true;
labelFunc0422_0229:
	case "友谊会" attend labelFunc0422_023B:
	Func0919();
	UI_remove_answer("友谊会");
labelFunc0422_023B:
	case "理念" attend labelFunc0422_025E:
	if (!var0002) goto labelFunc0422_0250;
	message("她注意到了你的徽章。「但你已经知道这一切了！");
	say();
	goto labelFunc0422_0257;
labelFunc0422_0250:
	message("「你真的应该来参加集会。你会学到很多！」");
	say();
	Func091A();
labelFunc0422_0257:
	UI_remove_answer("理念");
labelFunc0422_025E:
	case "告辞" attend labelFunc0422_0269:
	goto labelFunc0422_026C;
labelFunc0422_0269:
	goto labelFunc0422_008D;
labelFunc0422_026C:
	endconv;
	message("「祝你有个美好的一天！一定要快点再回来拜访喔！」*");
	say();
labelFunc0422_0271:
	if (!(event == 0x0000)) goto labelFunc0422_027F;
	Func092E(0xFFDE);
labelFunc0422_027F:
	return;
}


