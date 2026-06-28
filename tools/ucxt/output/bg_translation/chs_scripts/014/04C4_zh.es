#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern void Func08D4 0x8D4 ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func08D3 0x8D3 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04C4 object#(0x4C4) ()
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

	if (!(event == 0x0001)) goto labelFunc04C4_0366;
	UI_show_npc_face(0xFF3C, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF3C));
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!gflags[0x0266]) goto labelFunc04C4_0051;
	var0004 = var0001;
labelFunc04C4_0051:
	if (!gflags[0x0267]) goto labelFunc04C4_005D;
	var0004 = var0000;
labelFunc04C4_005D:
	if (!(!gflags[0x026D])) goto labelFunc04C4_00B4;
	message("你看到一位潇洒的年轻人，他转身向你问候。~~「我是 Richter，堡垒的骑士。你是谁？」");
	say();
	var0005 = Func090B([var0001, var0002]);
	if (!(var0005 == var0001)) goto labelFunc04C4_0098;
	message("「很高兴见到你，");
	message(var0001);
	message("。」");
	say();
	var0004 = var0001;
	gflags[0x0266] = true;
	goto labelFunc04C4_00AD;
labelFunc04C4_0098:
	message("「我懂了，」他怀疑地看着你。「那么你是回来要更多的吗？你别想再骗我，我警告你。」");
	say();
	var0004 = var0000;
	gflags[0x0267] = true;
	UI_add_answer("更多");
labelFunc04C4_00AD:
	gflags[0x026D] = true;
	goto labelFunc04C4_00BE;
labelFunc04C4_00B4:
	message("「哈啰，");
	message(var0004);
	message("。」Richter 说道。");
	say();
labelFunc04C4_00BE:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C4_00D0;
	UI_add_answer("雕像");
labelFunc04C4_00D0:
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C4_00EF;
	if (!gflags[0x027B]) goto labelFunc04C4_00EF;
	if (!(!gflags[0x0279])) goto labelFunc04C4_00EF;
	UI_add_answer("石像鬼的血");
labelFunc04C4_00EF:
	converse attend labelFunc04C4_0361;
	case "姓名" attend labelFunc04C4_0122:
	message("「我告诉过你了，我叫做 Richter。」");
	say();
	gflags[0x027B] = true;
	UI_remove_answer("姓名");
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C4_0122;
	if (!(!gflags[0x0279])) goto labelFunc04C4_0122;
	UI_add_answer("石像鬼的血");
labelFunc04C4_0122:
	case "更多" attend labelFunc04C4_0142:
	message("他清了清嗓子，更仔细地打量你。~~「啊，你不用在意我的咕哝，");
	message(var0004);
	message("。」");
	say();
	UI_add_answer("我介意");
	UI_remove_answer("更多");
labelFunc04C4_0142:
	case "职业" attend labelFunc04C4_015E:
	message("「我是堡垒的军械士。」");
	say();
	UI_add_answer(["盔甲", "武器", "堡垒"]);
labelFunc04C4_015E:
	case "堡垒" attend labelFunc04C4_0178:
	message("「是的，你在 Serpent's Hold，这里是许多高贵且勇敢的骑士的家。」");
	say();
	UI_remove_answer("堡垒");
	UI_add_answer("骑士");
labelFunc04C4_0178:
	case "骑士" attend labelFunc04C4_019B:
	message("「John-Paul 领主负责监督这座堡垒，不过 Horffe 爵士才是卫兵队长。当然，我们其他人都在此服务不列颠王以及不列颠尼亚的需求。」");
	say();
	UI_remove_answer("骑士");
	UI_add_answer(["John-Paul", "Horffe", "需求"]);
labelFunc04C4_019B:
	case "石像鬼的血" attend labelFunc04C4_01B2:
	message("「我早该知道会是 Horffe。」他瞇起眼睛。「他不断表现出整体缺乏道德和团结感。我会和 John-Paul 谈谈这件事。」");
	say();
	var0006 = true;
	UI_remove_answer("石像鬼的血");
labelFunc04C4_01B2:
	case "John-Paul" attend labelFunc04C4_01C5:
	message("「我对他能力的信任无人能及。我无法告诉你，当他选择我做他的副手时，我有多骄傲！」");
	say();
	UI_remove_answer("John-Paul");
labelFunc04C4_01C5:
	case "Horffe" attend labelFunc04C4_01E5:
	message("他若有所思。「我知道其他人信任他，我自己也不怀疑他的战斗技巧。但我无法摆脱这种感觉，他需要更多的道德约束。有时我觉得有义务要盯着他。」");
	say();
	UI_remove_answer("Horffe");
	UI_add_answer(["其他人", "盯着"]);
labelFunc04C4_01E5:
	case "盯着" attend labelFunc04C4_01F8:
	message("「我不确定我到底在观察什么。不过，我预料他会变得具有攻击性或成为盗贼。他似乎并不真正相信堡垒的团结。」");
	say();
	UI_remove_answer("盯着");
labelFunc04C4_01F8:
	case "其他人" attend labelFunc04C4_0218:
	message("「嗯，很明显 John-Paul 尊重他的能力。Tory 女士告诉过我，她能『感知』到他的诚实，但我并非没有怀疑。」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer(["Tory", "感知"]);
labelFunc04C4_0218:
	case "感知" attend labelFunc04C4_022B:
	message("「Tory 女士有着不可思议的共情能力。她只需一句简单的问候，就能判断出对方的意图和情绪。」");
	say();
	UI_remove_answer("感知");
labelFunc04C4_022B:
	case "Tory" attend labelFunc04C4_023E:
	message("「她是堡垒的顾问，经常为骑士们提供指导。」他的表情变得惆怅。「她也非常、非常美丽。」");
	say();
	UI_remove_answer("Tory");
labelFunc04C4_023E:
	case "需求" attend labelFunc04C4_0251:
	message("「嗯，显然大陆上有很多寻找机会恐吓乡间的邪恶野兽。保护平民是我们的职责。此外，我们在这里也是为了向一般大众提供良好行为的榜样。」");
	say();
	UI_remove_answer("需求");
labelFunc04C4_0251:
	case "我介意" attend labelFunc04C4_0264:
	message("他低下头，稍微变换了一下站姿。他擡起头，瞇着眼睛说：~~「不久前有个人进入我的军械库，声称自己是圣者，就像你现在说的一样。当我转身去拿他要的武器时，他偷了几样东西就跑了。~~我假设，」他谨慎地说，「你不是那个流氓。」");
	say();
	UI_remove_answer("我介意");
labelFunc04C4_0264:
	case "盔甲" attend labelFunc04C4_028F:
	if (!((var0003 == 0x0007) || (var0003 == 0x000D))) goto labelFunc04C4_0284;
	Func08D4();
	goto labelFunc04C4_0288;
labelFunc04C4_0284:
	message("「很抱歉。这件事等我店铺营业时讨论会更好。」");
	say();
labelFunc04C4_0288:
	UI_remove_answer("盔甲");
labelFunc04C4_028F:
	case "友谊会" attend labelFunc04C4_02BC:
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C4_02AB;
	message("「哎呀，是的，我看你也是成员。」");
	say();
	goto labelFunc04C4_02AE;
labelFunc04C4_02AB:
	Func0919();
labelFunc04C4_02AE:
	UI_remove_answer("友谊会");
	UI_add_answer("理念");
labelFunc04C4_02BC:
	case "理念" attend labelFunc04C4_02CE:
	Func091A();
	UI_remove_answer("理念");
labelFunc04C4_02CE:
	case "武器" attend labelFunc04C4_02F9:
	if (!((var0003 == 0x0007) || (var0003 == 0x000D))) goto labelFunc04C4_02EE;
	Func08D3();
	goto labelFunc04C4_02F2;
labelFunc04C4_02EE:
	message("「很抱歉。这件事等我店铺营业时讨论会更好。」");
	say();
labelFunc04C4_02F2:
	UI_remove_answer("武器");
labelFunc04C4_02F9:
	case "雕像" attend labelFunc04C4_0353:
	message("他脸上露出厌恶的表情。~~「很明显，这是一个不寻求团结的人做的！他不配得到回报！」~~过了一会儿，他平静下来。");
	say();
	if (!(!gflags[0x0259])) goto labelFunc04C4_034C;
	message("「你是在调查这起危害人类的罪行吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04C4_0348;
	message("「那让我给你这些。」他举起一些石片。「这是在雕像底部发现的。你会注意到有些地方被染红了。我相信那是血。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x032F, 0xFE99, 0x0004, false);
	if (!var0009) goto labelFunc04C4_0341;
	gflags[0x0259] = true;
	goto labelFunc04C4_0345;
labelFunc04C4_0341:
	message("「或许等你有了更多空间时，我再给你。」");
	say();
labelFunc04C4_0345:
	goto labelFunc04C4_034C;
labelFunc04C4_0348:
	message("「我明白了。」");
	say();
labelFunc04C4_034C:
	UI_remove_answer("雕像");
labelFunc04C4_0353:
	case "告辞" attend labelFunc04C4_035E:
	goto labelFunc04C4_0361;
labelFunc04C4_035E:
	goto labelFunc04C4_00EF;
labelFunc04C4_0361:
	endconv;
	message("「旅途愉快。记住，信任你的兄弟。」*");
	say();
labelFunc04C4_0366:
	if (!(event == 0x0000)) goto labelFunc04C4_0374;
	Func092E(0xFF3C);
labelFunc04C4_0374:
	return;
}


