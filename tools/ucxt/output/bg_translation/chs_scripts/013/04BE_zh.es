#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0853 0x853 ();
extern void Func092F 0x92F (var var0000);

void Func04BE object#(0x4BE) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04BE_01DC;
	UI_show_npc_face(0xFF42, 0x0000);
	var0000 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x024F])) goto labelFunc04BE_0038;
	message("这只石像鬼张开手做了一个挥舞的动作来欢迎你。");
	say();
	gflags[0x024F] = true;
	goto labelFunc04BE_003C;
labelFunc04BE_0038:
	message("「再次欢迎你，人类，」 Betra 说。");
	say();
labelFunc04BE_003C:
	if (!gflags[0x0251]) goto labelFunc04BE_004F;
	if (!gflags[0x023E]) goto labelFunc04BE_004F;
	UI_add_answer("Quaeven");
labelFunc04BE_004F:
	converse attend labelFunc04BE_01D7;
	case "姓名" attend labelFunc04BE_009F:
	message("「名字是 Betra。你是 Terfin 的新面孔吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04BE_0071;
	message("「告诉你去跟贤者 Teregus 或酒馆老板 Forbrak 谈谈，获取关于城镇的信息。协助了解建筑位置和居民。」");
	say();
	goto labelFunc04BE_0075;
labelFunc04BE_0071:
	message("「欢迎回到 Terfin。」");
	say();
labelFunc04BE_0075:
	UI_remove_answer("姓名");
	UI_add_answer(["Terfin", "Betra"]);
	gflags[0x0251] = true;
	if (!(gflags[0x023E] && (!var0000))) goto labelFunc04BE_009F;
	UI_add_answer("Quaeven");
labelFunc04BE_009F:
	case "Betra" attend labelFunc04BE_00B2:
	message("「是『小小的勇气』这个词。」");
	say();
	UI_remove_answer("Betra");
labelFunc04BE_00B2:
	case "职业" attend labelFunc04BE_00C5:
	message("「是物资的销售者。」");
	say();
	UI_add_answer("购买");
labelFunc04BE_00C5:
	case "Terfin" attend labelFunc04BE_00E5:
	message("「是为我们这些希望居住在自己文化中的石像鬼所保留的城镇。」");
	say();
	UI_remove_answer("Terfin");
	UI_add_answer(["被人类安置", "文化"]);
labelFunc04BE_00E5:
	case "文化" attend labelFunc04BE_00F8:
	message("「有许多我们种族独特的事物——除了我们的外表——使我们与人类区别开来。有所不同，但也平等。」");
	say();
	UI_remove_answer("文化");
labelFunc04BE_00F8:
	case "被人类安置" attend labelFunc04BE_0112:
	message("「被人类安置在这里。被允许离开，也可以居住在其他地方，但知道许多人类不喜欢我们。」");
	say();
	UI_remove_answer("被人类安置");
	UI_add_answer("不喜欢");
labelFunc04BE_0112:
	case "不喜欢" attend labelFunc04BE_0125:
	message("「这非常讽刺。唯一一个人类和石像鬼数量相等的城镇，却是发生最多种族冲突的地方。」~~他耸了耸肩。「或许把这么多差异放在一起是不明智的。真是悲哀的时代。」");
	say();
	UI_remove_answer("不喜欢");
labelFunc04BE_0125:
	case "购买" attend labelFunc04BE_014F:
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF42));
	if (!(var0002 == 0x0007)) goto labelFunc04BE_014B;
	Func0853();
	goto labelFunc04BE_014F;
labelFunc04BE_014B:
	message("「在早上 9 点到晚上 6 点之间卖东西给你。很抱歉，在这些时间之外什么都不卖。」");
	say();
labelFunc04BE_014F:
	case "Quaeven" attend labelFunc04BE_016D:
	message("提到这个名字他笑了。~~「是个讨人喜欢的年轻石像鬼。」");
	say();
	var0000 = true;
	UI_add_answer("加入友谊会？");
	UI_remove_answer("Quaeven");
labelFunc04BE_016D:
	case "加入友谊会？" attend labelFunc04BE_0190:
	message("「加入友谊会？」他摇摇头。「这不是适合我的组织。我现在这样很快乐，奉献于祭坛。相信 Quaeven 是被友谊会的其他人误导了。不信任他们，尤其是 Sarpling 。」");
	say();
	UI_add_answer(["被误导", "Sarpling", "祭坛"]);
	UI_remove_answer("加入友谊会？");
labelFunc04BE_0190:
	case "被误导" attend labelFunc04BE_01A3:
	message("「相信友谊会有欺骗行为，并预期事情并非表面看起来那样。相信 Quaeven 刚加入时所做出的幸福承诺，是 Quaeven 自己实现的，而不是友谊会。」");
	say();
	UI_remove_answer("被误导");
labelFunc04BE_01A3:
	case "Sarpling" attend labelFunc04BE_01B6:
	message("「对他的信任度极低，而且我绝对会尽可能地远离他。」");
	say();
	UI_remove_answer("Sarpling");
labelFunc04BE_01B6:
	case "祭坛" attend labelFunc04BE_01C9:
	message("「听说过破坏祭坛的谣言。感到沮丧，但没有证据。~~知道只有两只石像鬼能轻易取得这种武器。我是其中之一，而且知道 Sarpling 是另一个。」");
	say();
	UI_remove_answer("祭坛");
labelFunc04BE_01C9:
	case "告辞" attend labelFunc04BE_01D4:
	goto labelFunc04BE_01D7;
labelFunc04BE_01D4:
	goto labelFunc04BE_004F;
labelFunc04BE_01D7:
	endconv;
	message("「祝你旅途平安，人类。」*");
	say();
labelFunc04BE_01DC:
	if (!(event == 0x0000)) goto labelFunc04BE_01EA;
	Func092F(0xFF42);
labelFunc04BE_01EA:
	return;
}


