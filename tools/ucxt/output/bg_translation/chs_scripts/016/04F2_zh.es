#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();

void Func04F2 object#(0x4F2) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04F2_02A5;
	UI_show_npc_face(0xFF0E, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0147])) goto labelFunc04F2_003E;
	message("你看到一个有魅力、看起来很用功的男人。");
	say();
	gflags[0x0147] = true;
	goto labelFunc04F2_0048;
labelFunc04F2_003E:
	message("「是的，");
	message(var0000);
	message("，」Taylor 问道。「我能帮你吗？」");
	say();
labelFunc04F2_0048:
	if (!gflags[0x0138]) goto labelFunc04F2_005F;
	var0001 = true;
	UI_add_answer(["鬼火", "森灵"]);
labelFunc04F2_005F:
	converse attend labelFunc04F2_029A;
	case "姓名" attend labelFunc04F2_0088:
	message("「我的名字是 Taylor，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E2]) goto labelFunc04F2_0088;
	UI_add_answer("Julius");
labelFunc04F2_0088:
	case "职业" attend labelFunc04F2_00A7:
	message("「我在这座修道院研究当地的植物、动物和地理。」");
	say();
	UI_add_answer(["植物", "动物", "地理", "修道院"]);
labelFunc04F2_00A7:
	case "植物" attend labelFunc04F2_00BA:
	message("「这个地区有很多美丽的植物。我正在努力了解它们全部。」");
	say();
	UI_remove_answer("植物");
labelFunc04F2_00BA:
	case "动物" attend labelFunc04F2_00E1:
	message("「森林里居住着许多不同种类的动物。在我的研究中，我遇到了一些迷人的物种。」");
	say();
	if (!gflags[0x0100]) goto labelFunc04F2_00DA;
	if (!(!var0001)) goto labelFunc04F2_00DA;
	UI_add_answer("鬼火");
labelFunc04F2_00DA:
	UI_remove_answer("动物");
labelFunc04F2_00E1:
	case "修道院" attend labelFunc04F2_00FB:
	message("「我们的教团被称为玫瑰友谊会（Brotherhood of the Rose）。」");
	say();
	UI_add_answer("教团");
	UI_remove_answer("修道院");
labelFunc04F2_00FB:
	case "教团" attend labelFunc04F2_012E:
	message("「是的，");
	message(var0000);
	message("。还有一位修道士，Aimi，住在这座修道院里。她是一位画家和园丁。」");
	say();
	UI_add_answer(["画家", "园丁"]);
	if (!gflags[0x0148]) goto labelFunc04F2_0127;
	UI_add_answer("Kreg");
labelFunc04F2_0127:
	UI_remove_answer("教团");
labelFunc04F2_012E:
	case "画家" attend labelFunc04F2_0141:
	message("他笑了。「在我们之间，她是个好得多的园丁。」");
	say();
	UI_remove_answer("画家");
labelFunc04F2_0141:
	case "园丁" attend labelFunc04F2_0154:
	message("「她种出了我见过最可爱的花朵！你必须亲眼看看才会相信它们的存在。」");
	say();
	UI_remove_answer("园丁");
labelFunc04F2_0154:
	case "地理" attend labelFunc04F2_016E:
	message("「我运用我对当地地形的知识来辅助我的研究。我对这个地方越了解，我就能离开友谊会修道院走得越远，并且还能确信自己能回来——不像我的一位同修。」");
	say();
	UI_remove_answer("地理");
	UI_add_answer("同修");
labelFunc04F2_016E:
	case "同修" attend labelFunc04F2_0181:
	message("「前段时间，他在该地区调查鸟类时迷路了——我记得是金颊黑背林莺。可悲的是，他走得太远了，从那以后我们就再也没有他的消息了。~~「我不希望遭遇同样的命运。」");
	say();
	UI_remove_answer("同修");
labelFunc04F2_0181:
	case "Kreg" attend labelFunc04F2_019A:
	message("「那个名字听起来不熟悉，");
	message(var0000);
	message("。或许他不是这个地区的人。」");
	say();
	UI_remove_answer("Kreg");
labelFunc04F2_019A:
	case "Julius" attend labelFunc04F2_01AD:
	message("「Julius？我无法确定，但他可能是一个现在住在……墓地的人。我曾听说过这个名字，说是有个人被带到修道院来埋葬，虽然我不知道是谁带他来的，我也不记得是听谁说的。我真心希望他不是你的朋友，」他充满歉意地说。");
	say();
	UI_remove_answer("Julius");
labelFunc04F2_01AD:
	case "鬼火" attend labelFunc04F2_01D1:
	message("「鬼火？」他大笑了起来：『我怀疑那些东西根本不存在。我知道很多人似乎对此深信不疑，但我可是从来没见过。~~「你若非知不可，民间传说倒是一直坚称牠们栖息在森林一带，就在森灵族的聚落附近。据说，森灵族能够与牠们交谈。」他耸了耸肩：「你若真想找，大可自己去碰碰运气，但换作是我，我可不会把宝贵的时间浪费在这种事情上。」");
	say();
	UI_add_answer(["宝贵的时间", "森灵"]);
	gflags[0x0138] = true;
	UI_remove_answer("鬼火");
labelFunc04F2_01D1:
	case "宝贵的时间" attend labelFunc04F2_01EA:
	message("「有太多令人兴奋的事物值得研究了……例如，树花，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("宝贵的时间");
labelFunc04F2_01EA:
	case "森灵" attend labelFunc04F2_020E:
	message("「啊，森灵族。关于牠们，我目前所能收集到的情报也相当有限。~~「牠们栖息在深林东缘，离此地并不算太远。~~「牠们的外表略微神似猿猴，但也仅仅是有些相仿。牠们的生性极度害羞，极少能在人类面前感到自在并主动接近。~~「我唯一一次得以近距离观察森灵族的经历，是有次我恰巧在背包里带了刚从『蜜蜂洞窟（Bee Cave）』采集到的蜂蜜。那只小生物突然现身，盯着我看了好几分钟，接着竟然开口——我没听错，牠确实是开口——向我索要我的蜂蜜。我相信牠们具备极高的共情感知能力（Empathic），这也是其族名的由来。~~「真是个极其有趣的物种，你不这么认为吗？」");
	say();
	UI_add_answer(["蜂蜜", "蜜蜂洞窟"]);
	var0002 = true;
	UI_remove_answer("森灵");
labelFunc04F2_020E:
	case "蜂蜜" attend labelFunc04F2_0221:
	message("「洞穴里的蜂蜜相当美味，但很少有人能不经过战斗就得到它。蜜蜂洞窟可能是一个相当危险的地方。」");
	say();
	UI_remove_answer("蜂蜜");
labelFunc04F2_0221:
	case "蜜蜂洞窟" attend labelFunc04F2_028C:
	message("「蜜蜂洞窟位于修道院的西南方。但如果你计划去那里，要小心住在洞穴里的巨蜂。牠们的毒液非常毒。~~");
	say();
	var0003 = Func0931(0xFE9B, 0x0001, 0x0301, 0xFE99, 0xFE99);
	if (!(!var0003)) goto labelFunc04F2_0285;
	message("「如果你希望，我可以给你一颗烟雾弹，它能在短时间内驱赶蜜蜂。你想要吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F2_0281;
	var0005 = UI_add_party_items(0x0001, 0x0301, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04F2_027A;
	message("「给你。」");
	say();
	goto labelFunc04F2_027E;
labelFunc04F2_027A:
	message("「或许你应该先减轻你的负重，再拿炸弹。」");
	say();
labelFunc04F2_027E:
	goto labelFunc04F2_0285;
labelFunc04F2_0281:
	message("「很好。但如果你刚好路过洞穴，要小心点！」");
	say();
labelFunc04F2_0285:
	UI_remove_answer("蜜蜂洞窟");
labelFunc04F2_028C:
	case "告辞" attend labelFunc04F2_0297:
	goto labelFunc04F2_029A;
labelFunc04F2_0297:
	goto labelFunc04F2_005F;
labelFunc04F2_029A:
	endconv;
	message("「愿你的知识，随着你与自然的邂逅而增长，");
	message(var0000);
	message("。」*");
	say();
labelFunc04F2_02A5:
	if (!(event == 0x0000)) goto labelFunc04F2_02AE;
	abort;
labelFunc04F2_02AE:
	return;
}


