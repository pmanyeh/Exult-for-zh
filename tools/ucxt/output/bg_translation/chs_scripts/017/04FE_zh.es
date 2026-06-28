#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);

void Func04FE object#(0x4FE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0000)) goto labelFunc04FE_0009;
	abort;
labelFunc04FE_0009:
	UI_show_npc_face(0xFF02, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x02CD])) goto labelFunc04FE_002B;
	message("你看到一只大小和形状都像马的生物。牠的头上长着一根笔直的角。牠用闪烁着智能光芒的眼睛看着你。");
	say();
	gflags[0x02CD] = true;
	goto labelFunc04FE_002F;
labelFunc04FE_002B:
	message("「我再次向你致敬，圣者，」独角兽 Lasher 说。");
	say();
labelFunc04FE_002F:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc04FE_003F:
	converse attend labelFunc04FE_0414;
	case "姓名" attend labelFunc04FE_0055:
	message("这只生物说话了。「我的姓名是 Lasher。」");
	say();
	UI_remove_answer("姓名");
labelFunc04FE_0055:
	case "职业" attend labelFunc04FE_006E:
	message("Lasher 看着你眨了眨眼。「得了吧，圣者！我不靠人类社会的规则生活。我有我的身分，也就是独角兽。然后我有我的目的，这完全是另一回事。」");
	say();
	UI_add_answer(["独角兽", "目的"]);
labelFunc04FE_006E:
	case "独角兽" attend labelFunc04FE_00A4:
	message("Lasher 惊呆地看着你。「告诉我，你知道独角兽是什么吗？」");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc04FE_008E;
	message("Lasher 茫然地看着你。牠的嘴巴张得大大的。「很好。那我就告诉你独角兽是什么。");
	say();
	goto labelFunc04FE_0092;
labelFunc04FE_008E:
	message("Lasher 悲伤地摇了摇头。「不，你只是『以为』你知道独角兽是什么，但我要告诉你真相。");
	say();
labelFunc04FE_0092:
	message("「独角兽是自然精灵家族的一员，很多很多年前，我们曾被召唤去帮助一位非常强大的巫师。」");
	say();
	UI_remove_answer("独角兽");
	UI_add_answer("巫师");
labelFunc04FE_00A4:
	case "目的" attend labelFunc04FE_00BE:
	message("「哦，别跟我装蒜了，圣者。你很清楚独角兽的目的。~~我们是万无一失的『童贞探测器』！」");
	say();
	UI_remove_answer("目的");
	UI_add_answer("童贞探测器");
labelFunc04FE_00BE:
	case "巫师" attend labelFunc04FE_00D8:
	message("「我不记得那位巫师的姓名了，因为那已经是很久以前的事了，但只要知道他是个十足的混蛋就够了。总之，出于某种原因，我们氏族的酋长，当时是一头名叫 Sharp-Hoof 的蠢驴决定，与其回应这位巫师合法，且正确运行的召唤仪式，不如带着大家去追逐一群非常漂亮的小母马。」");
	say();
	UI_remove_answer("巫师");
	UI_add_answer("Sharp-Hoof");
labelFunc04FE_00D8:
	case "Sharp-Hoof" attend labelFunc04FE_00F2:
	message("「我说到哪了？哦，对了，Sharp-Hoof！第二天早上，在我们和那些小母马寻欢作乐之后，这位巫师又召唤了我们。这次 Sharp-Hoof 意识到我们最好还是回应，结果我们后悔莫及！巫师非常生气！而且，嗯，我只能说我们与这种人的协议是非常、非常具有约束力的。」");
	say();
	UI_remove_answer("Sharp-Hoof");
	UI_add_answer("约束");
labelFunc04FE_00F2:
	case "约束" attend labelFunc04FE_0112:
	message("「我们不仅被迫为这位巫师服务一千年，他还在我们身上下了一个可怕的诅咒。」");
	say();
	UI_remove_answer("约束");
	UI_add_answer(["服务", "诅咒"]);
labelFunc04FE_0112:
	case "服务" attend labelFunc04FE_0125:
	message("「结果是，我们实际上并没有为那位巫师服务一千年。他在给我们下诅咒几周后，就缩短了时间。」Lasher 讽刺地哼了一声，「我真是伤心欲绝。」");
	say();
	UI_remove_answer("服务");
labelFunc04FE_0125:
	case "诅咒" attend labelFunc04FE_013F:
	message("「我们自然精灵过去在坊间可是以『多情』著称，而那名巫师大费周章召唤我们，不过是想借由我们的天赋去诱拐某个无辜少女。当我们放了他鸽子后……呵呵，怎么说呢？这位大法师在控制他身上那根『魔杖』的威能时，似乎遇上了相当严峻的『障碍』。总之，为了挽救他那可悲又日益衰退的『男子气概』，他恼羞成怒，用了一个极其恶毒的『贞操诅咒』，彻底毁了我们的自由。」");
	say();
	UI_remove_answer("诅咒");
	UI_add_answer("贞操");
labelFunc04FE_013F:
	case "贞操" attend labelFunc04FE_0152:
	message("「那是一个极其歹毒的诅咒。它先是夺走了我们的心智，驱使我们亲手屠杀了氏族中所有的女性同胞……接着，又在我们身上烙下了一种病态的『敏感』——那种如今让我们恶名昭彰、求死不能的极端感知。」");
	say();
	UI_remove_answer("贞操");
labelFunc04FE_0152:
	case "童贞探测器" attend labelFunc04FE_016C:
	message("「正是如此。我们这族的族人如今对任何形式的『性能量』都敏锐至极，这导致我们在肉体接触上有了近乎病态的苛求——我们唯一能容忍的，只有那些在繁衍——或者随你怎么称呼那种娱乐经验——上，依旧洁白无瑕、毫无经验之人的触碰。」");
	say();
	UI_remove_answer("童贞探测器");
	UI_add_answer("敏感");
labelFunc04FE_016C:
	case "敏感" attend labelFunc04FE_018C:
	message("「没错。我发现与任何非处子之身的人发生肉体接触，都会带来令人作呕的痛苦与不适……因此只要一有机会，我都会竭尽所能地逃避。」");
	say();
	UI_remove_answer("敏感");
	UI_add_answer(["避免", "不愉快"]);
labelFunc04FE_018C:
	case "避免" attend labelFunc04FE_028D:
	message("「是的，嗯，我不想跟你谈得这么私密，但如果你不介意的话，你是处子之身吗？」");
	say();
	var0002 = Func090A();
	if (!(!var0002)) goto labelFunc04FE_0260;
	if (!(gflags[0x029D] || (gflags[0x029C] || gflags[0x029E]))) goto labelFunc04FE_01BA;
	message("「我就知道！」Lasher 开始紧张地踱步。「如果你不介意退后一点，我将不胜感激。」");
	say();
	goto labelFunc04FE_025D;
labelFunc04FE_01BA:
	message("Lasher 缓慢地摇了摇头。「老实说，你不需要为了给我留下好印象而吹嘘，也不用害怕任何形式的口头惩罚。顺便说一下，我肩胛骨中间有点痒。你介意帮我抓一下吗？」Lasher 向你伸直身体。「非常感谢。」");
	say();
	var0003 = UI_is_pc_female();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFD);
	var0006 = Func08F7(0xFFFC);
	if (!(!var0003)) goto labelFunc04FE_025D;
	if (!var0004) goto labelFunc04FE_020C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「这没什么好丢脸的，大人，」Iolo 表情非常严肃地说。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_020C:
	if (!var0005) goto labelFunc04FE_0231;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「不，这完全可以理解。你最近太忙了，」Shamino 说。你感觉到他正努力保持严肃。*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_0231:
	if (!var0006) goto labelFunc04FE_0256;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「你为什么不去摸摸这匹漂亮的小马呢。我们会这么做的，但我认为牠更喜欢你。」说完，你听到一阵爆笑和咯咯的笑声。*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_0256:
	UI_add_answer("童贞");
labelFunc04FE_025D:
	goto labelFunc04FE_0286;
labelFunc04FE_0260:
	if (!(gflags[0x029D] || (gflags[0x029C] || gflags[0x029E]))) goto labelFunc04FE_0275;
	message("「请原谅，但也许你该去Lycaeum，找人帮你查一下『童贞』这个词的定义。麻烦你退后一点好吗？！你让我感到紧张。」");
	say();
	goto labelFunc04FE_0286;
labelFunc04FE_0275:
	message("「是的，你还没开口，我就能知道答案了。你保持童贞…是出于选择，还是因为……环境？」");
	say();
	UI_add_answer(["选择", "环境"]);
labelFunc04FE_0286:
	UI_remove_answer("避免");
labelFunc04FE_028D:
	case "童贞" attend labelFunc04FE_02AD:
	message("「当然，圣者，你知道你每次回到不列颠尼亚时，都会奇迹般地恢复你的童贞！从那以后，你保持童贞是出于选择还是环境？」");
	say();
	UI_remove_answer("童贞");
	UI_add_answer(["选择", "环境"]);
labelFunc04FE_02AD:
	case "选择" attend labelFunc04FE_02C6:
	message("「嗯，我相信你总有一天会找到合适的人的。」");
	say();
	UI_remove_answer(["选择", "环境"]);
labelFunc04FE_02C6:
	case "环境" attend labelFunc04FE_02E6:
	message("「那太糟糕了，我非常抱歉。我很乐意帮助你，但那已经不再是我的目的了。」");
	say();
	UI_remove_answer(["环境", "选择"]);
	UI_add_answer("帮助");
labelFunc04FE_02E6:
	case "帮助" attend labelFunc04FE_0306:
	message("「哦，我不知道。自从我亲身参与这种事情以来，已经过了很长的时间。你是在寻求爱，还是在寻求情欲？」");
	say();
	UI_add_answer(["爱", "情欲"]);
	UI_remove_answer("帮助");
labelFunc04FE_0306:
	case "爱" attend labelFunc04FE_031F:
	message("「嗯，爱通常是一个非常难以捉摸的猎物。我想你可以去 Cove 城碰碰运气。那是一个恋人之城，至少我听说是这样。」");
	say();
	UI_remove_answer(["爱", "情欲"]);
labelFunc04FE_031F:
	case "情欲" attend labelFunc04FE_0338:
	message("「如果你只关心满足你的情欲，那么你应该在海盗巢穴 (Buccaneer's Den)的浴池里找到满足感。但一定要带足钱。」");
	say();
	UI_remove_answer(["爱", "情欲"]);
labelFunc04FE_0338:
	case "不愉快" attend labelFunc04FE_0352:
	message("「事实上，身为童贞探测器，我最无法忍受的部分是，必须应某个聪明的法师、吟游诗人或英雄的要求，让他们未来的妻子试着触摸我。」");
	say();
	UI_remove_answer("不愉快");
	UI_add_answer("妻子");
labelFunc04FE_0352:
	case "妻子" attend labelFunc04FE_0373:
	message("「这是一场悲剧。男人总是会紧张，然后给婚姻加上一个条件：他的新娘必须是处女。他们叫我来测试她，而男人的单身生活也因此得到了缓刑。我毁掉的婚约比黑死病还多。」");
	say();
	UI_remove_answer("妻子");
	if (!(!gflags[0x02D1])) goto labelFunc04FE_0373;
	UI_add_answer("单身");
labelFunc04FE_0373:
	case "单身" attend labelFunc04FE_03A4:
	message("「我敢打赌，就像那些为了同样原因在下面徘徊寻找我的傻瓜一样。好吧，他们可以打消这个念头了。我喜欢女人，我真的喜欢，坦白说，我厌倦了被用作羞辱她们的工具。」");
	say();
	UI_remove_answer("婚约");
	if (!gflags[0x02E0]) goto labelFunc04FE_0396;
	UI_add_answer("男性童贞测试");
	goto labelFunc04FE_039D;
labelFunc04FE_0396:
	UI_add_answer("傻瓜");
labelFunc04FE_039D:
	UI_remove_answer("单身");
labelFunc04FE_03A4:
	case "傻瓜" attend labelFunc04FE_03BB:
	message("「我是一个魔法生物。只要我愿意，我可以在下面避开他们。他们在抓到我之前就会老死。我拒绝协助他们逃避某种违背承诺的责任。如果你看到他们，你可以把这话告诉他们。」");
	say();
	gflags[0x02D0] = true;
	UI_remove_answer("傻瓜");
labelFunc04FE_03BB:
	case "男性童贞测试" attend labelFunc04FE_03D5:
	message("「他们想要为一个即将结婚的男人进行童贞测试？！」Lasher 发出了一阵长长的惊讶笑声。「在我的有生之年，我从未听说过这样的事！」");
	say();
	UI_remove_answer("男性童贞测试");
	UI_add_answer("结婚");
labelFunc04FE_03D5:
	case "结婚" attend labelFunc04FE_03EF:
	message("「哦，如果他愿意冒着生命危险，来到这里证明他的贞洁，那她一定是个非常迷人的少女。」");
	say();
	UI_remove_answer("结婚");
	UI_add_answer("迷人的少女");
labelFunc04FE_03EF:
	case "迷人的少女" attend labelFunc04FE_0406:
	message("「这男孩一定是对这位少女神魂颠倒了。我想我应该去进一步调查这件事。如果他像你说的那么有诚意，也许我会帮帮这个可怜的小伙子。」");
	say();
	UI_remove_answer("迷人的少女");
	gflags[0x02D1] = true;
labelFunc04FE_0406:
	case "告辞" attend labelFunc04FE_0411:
	goto labelFunc04FE_0414;
labelFunc04FE_0411:
	goto labelFunc04FE_003F;
labelFunc04FE_0414:
	endconv;
	message("「祝你好运，圣者。」*");
	say();
	return;
}


