#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04B7 object#(0x4B7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04B7_02B5;
	UI_show_npc_face(0xFF49, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0248])) goto labelFunc04B7_003A;
	message("你看到一只正值壮年的有翼石像鬼。~~「向你致敬，人类！欢迎来到祭坛之屋。有什么我可以帮忙的吗？」");
	say();
	gflags[0x0248] = true;
	goto labelFunc04B7_003E;
labelFunc04B7_003A:
	message("「回来了！很高兴再次见到你，人类，」 Teregus 说。「欢迎来到祭坛之屋。需要什么帮助吗？」");
	say();
labelFunc04B7_003E:
	if (!gflags[0x023F]) goto labelFunc04B7_004B;
	UI_add_answer("证据");
labelFunc04B7_004B:
	if (!gflags[0x0254]) goto labelFunc04B7_005E;
	if (!gflags[0x0239]) goto labelFunc04B7_005E;
	UI_add_answer("Inamo");
labelFunc04B7_005E:
	converse attend labelFunc04B7_02B0;
	case "姓名" attend labelFunc04B7_0085:
	message("「叫做 Teregus 。」");
	say();
	gflags[0x0254] = true;
	if (!gflags[0x0239]) goto labelFunc04B7_007E;
	UI_add_answer("Inamo");
labelFunc04B7_007E:
	UI_remove_answer("姓名");
labelFunc04B7_0085:
	case "职业" attend labelFunc04B7_009E:
	message("「负责照顾控制、热情和勤勉的祭坛。是个责任重大的职位。在这个动荡的时期尤其重要。」");
	say();
	UI_add_answer(["麻烦", "祭坛"]);
labelFunc04B7_009E:
	case "麻烦" attend labelFunc04B7_00BE:
	message("「最近镇上有很多分歧。祭坛原则的追随者与友谊会追随者之间关系非常紧张。听到过威胁祭坛的谣言。」");
	say();
	UI_add_answer(["友谊会", "谣言"]);
	UI_remove_answer("麻烦");
labelFunc04B7_00BE:
	case "友谊会" attend labelFunc04B7_00F5:
	var0001 = UI_is_dead(0xFF48);
	if (!var0001) goto labelFunc04B7_00DD;
	message("「很高兴现在是 Quan 在管理我们的分会。相信他是被误导了，但在 Runeb 离开后，他是个讲理得多的石像鬼。」");
	say();
	goto labelFunc04B7_00E1;
labelFunc04B7_00DD:
	message("「对友谊会的理想保持警惕。在追求团结的过程中忽视了祭坛，并失去了对古老传统的尊重。还算不坏。告诉你我们的分会是由 Quan 和 Runeb 管理的。」");
	say();
labelFunc04B7_00E1:
	UI_add_answer(["Quan", "Runeb"]);
	UI_remove_answer("友谊会");
labelFunc04B7_00F5:
	case "谣言" attend labelFunc04B7_0127:
	var0001 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0001) goto labelFunc04B7_0118;
	message("「为失去 Runeb 感到遗憾。或许这样最好。但肯定很高兴能避免祭坛受到破坏。」");
	say();
	goto labelFunc04B7_0120;
labelFunc04B7_0118:
	message("「听说镇上有某人计划破坏祭坛的物理实体。当然，这与实际摧毁控制、热情和勤勉的基本原则不同，但对我们来说依然是件坏事。如果有时间的话，或许能帮我们查出是谁在策划这件事。当你决定行动方针时，带着证据回来找我。会非常感谢你的协助。」");
	say();
	gflags[0x0253] = true;
labelFunc04B7_0120:
	UI_remove_answer("谣言");
labelFunc04B7_0127:
	case "证据" attend labelFunc04B7_0155:
	message("「给我带来了什么，关于那些谣言的证据吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_014A;
	message("「太棒了！请让我看看。」~~你把在 Sarpling 商店里找到的 Runeb 写的纸条交给他。~~「啊。Runeb。我早该猜到是他。总是用最暴力的手段来获取更多。」~~他叹了口气。~~「请你用这个证据与他对质。建议你这样做才能揭开真相。请做好万全的准备，人类，因为不知道他会作何反应。」~~他摇了摇头。~~「对和平解决不抱希望。感谢你的协助。」");
	say();
	var0003 = false;
	goto labelFunc04B7_014E;
labelFunc04B7_014A:
	message("「还没找到什么吗？啊，好吧。如果发现任何异常，请回来。建议你一有线索就与嫌疑人对质。希望能在他对祭坛造成破坏之前阻止他。」");
	say();
labelFunc04B7_014E:
	UI_remove_answer("证据");
labelFunc04B7_0155:
	case "Quan" attend labelFunc04B7_0168:
	message("「为失去 Quan 给友谊会感到悲伤，人类。年轻时是个好石像鬼，但后来误入歧途。过去几年主要专注于自我膨胀和享乐主义。真是个遗憾。」");
	say();
	UI_remove_answer("Quan");
labelFunc04B7_0168:
	case "Runeb" attend labelFunc04B7_017B:
	message("「真是个悲惨的案例。希望曾经能够拯救他。一直都难以控制，但过去几年变得更糟了。似乎想尽可能地挑起争端。加入友谊会后，找到了理由将力量对付所有较弱的人。」");
	say();
	UI_remove_answer("Runeb");
labelFunc04B7_017B:
	case "Inamo" attend labelFunc04B7_01D4:
	message("他带着悲伤的微笑，却明显流露出骄傲。~");
	say();
	if (!gflags[0x023A]) goto labelFunc04B7_0194;
	message("「曾经是个优秀的年轻石像鬼。我们所有人的骄傲。希望知道是谁导致了他不光彩的结局。」");
	say();
	goto labelFunc04B7_01CD;
labelFunc04B7_0194:
	message("「非常想念他。从他还是一颗蛋的时候就抚养他。他曾相当直言不讳地表达对友谊会的不满。觉得他离开会比较安全。」~~他叹了口气，然后满怀希望地擡起头。~~「有他的消息吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_01C9;
	message("「好吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04B7_01BB;
	message("「很好。希望能尽快听到他的消息。」");
	say();
	goto labelFunc04B7_01C6;
labelFunc04B7_01BB:
	message("「不好？太糟糕了！有什么我可以帮忙的吗？」");
	say();
	UI_add_answer("太迟了");
labelFunc04B7_01C6:
	goto labelFunc04B7_01CD;
labelFunc04B7_01C9:
	message("「啊。太可惜了。等他的消息等了很久。」");
	say();
labelFunc04B7_01CD:
	UI_remove_answer("Inamo");
labelFunc04B7_01D4:
	case "太迟了" attend labelFunc04B7_01EE:
	message("「太迟了？太迟了是什么意思？告诉我发生了什么事！」~~他看起来非常心烦意乱。");
	say();
	UI_add_answer("被谋杀");
	UI_remove_answer("太迟了");
labelFunc04B7_01EE:
	case "被谋杀" attend labelFunc04B7_0206:
	message("「被谋杀？」~~他退了一步，被这个消息惊呆了。~~「被谋杀？难以置信。他没有真正的敌人啊！」~~他重重地叹了一口气。~~「请告诉我，究竟发生了什么事。」~~你向他讲述 Inamo 死亡的细节。他再次叹息。~~「这真是白白浪费了石像鬼的生命。如果你发现是谁想要他死，请务必通知我，我会非常感激。」~~ 他安静了片刻，试图适应这个情况。~~「很抱歉。我需要一些时间来哀悼。请晚点再来。」~~他转过身去。");
	say();
	UI_remove_answer("被谋杀");
	gflags[0x023A] = true;
	abort;
labelFunc04B7_0206:
	case "祭坛" attend labelFunc04B7_0244:
	UI_remove_answer("祭坛");
	message("「是三项原则祭坛的管理员和负责人。想要捐款吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_0240;
	message("「极好。你想捐款给哪个祭坛？」");
	say();
	UI_push_answers();
	UI_add_answer(["控制", "热情", "勤勉"]);
	goto labelFunc04B7_0244;
labelFunc04B7_0240:
	message("「啊。或许下次再捐款吧。」");
	say();
labelFunc04B7_0244:
	case "控制", "热情", "勤勉" attend labelFunc04B7_02A2:
	message("「是个极好的选择。捐献 5 枚金币就能为你在神殿冥想。愿意捐献 5 枚金币吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_028A;
	var0005 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04B7_0283;
	message("「今晚为你冥想，人类。祝你旅途顺利。」");
	say();
	goto labelFunc04B7_0287;
labelFunc04B7_0283:
	message("「没有 5 枚金币？等你有了金币再回来吧。为你旅途的成功冥想。」~~他亲切地微笑着。");
	say();
labelFunc04B7_0287:
	goto labelFunc04B7_028E;
labelFunc04B7_028A:
	message("「啊。误会了。向你道歉。如果你改变主意请让我知道。」~~他看起来很失望。");
	say();
labelFunc04B7_028E:
	UI_remove_answer(["控制", "热情", "勤勉"]);
	UI_pop_answers();
labelFunc04B7_02A2:
	case "告辞" attend labelFunc04B7_02AD:
	goto labelFunc04B7_02B0;
labelFunc04B7_02AD:
	goto labelFunc04B7_005E;
labelFunc04B7_02B0:
	endconv;
	message("「现在先向你道别，人类。欢迎再回来。」*");
	say();
labelFunc04B7_02B5:
	if (!(event == 0x0000)) goto labelFunc04B7_02C3;
	Func092F(0xFF49);
labelFunc04B7_02C3:
	return;
}


