#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func08BA 0x8BA ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_is_pc_female();
	message("「算命费用要 20 个金币。可以吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc08BA_0044;
	var0002 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0002) goto labelFunc08BA_0038;
	message("Margareta 收下了你的钱。");
	say();
	goto labelFunc08BA_0041;
labelFunc08BA_0038:
	message("「你的金币不够。」");
	say();
	message("Margareta 从你身边转过身去。*");
	say();
	abort;
labelFunc08BA_0041:
	goto labelFunc08BA_004D;
labelFunc08BA_0044:
	message("「那就算了。」");
	say();
	message("Margareta 从你身边转过身去。*");
	say();
	abort;
labelFunc08BA_004D:
	UI_play_music(0x001F, 0x0000);
	message("这名吉普赛妇人凝视着她的水晶球。");
	say();
	if (!(!var0000)) goto labelFunc08BA_0073;
	if (!gflags[0x00E2]) goto labelFunc08BA_006F;
	message("「我看见一个女人站在神龛旁。她爱着你。关于这点，我看不出更多了。");
	say();
	goto labelFunc08BA_0073;
labelFunc08BA_006F:
	message("「我看见一个女人站在神龛旁。她在你的生命中将扮演重要的角色。");
	say();
labelFunc08BA_0073:
	message("「嗯…水晶球非常浑浊……");
	say();
	if (!(!gflags[0x0006])) goto labelFunc08BA_0085;
	message("「我看见…如果你想了解更多关于友谊会的事，并发现他们的真实本质，你就必须加入他们。");
	say();
	goto labelFunc08BA_0089;
labelFunc08BA_0085:
	message("「既然…你已经是友谊会的成员，你迟早会更了解他们，并发现他们的真实本质。");
	say();
labelFunc08BA_0089:
	message("「不是很清楚……啊，对了……有一种新的邪恶正在威胁不列颠尼亚。我看见你将来必须与它交手。");
	say();
	message("「水晶球告诉我，世界的以太——即控制魔法的物质——已经受到这种新的邪恶存在所影响。");
	say();
	message("「我进一步看见，这种邪恶的存在，在不久后的某个事件中，将会获得更强大的力量。这个事件与行星有关。去 Moonglow 的天文台找一个人，了解更多关于这件事的信息。我看见他有一个对你非常有用的设备。尽快去找他，因为这个事件即将来临。」");
	say();
	message("「这是什么？我看见……我看见……你在寻找一个『带着钩子的人』。他不是你真正的对手，但找到他，是完成你终极任务的必要条件。");
	say();
	message("「等等！我看见你必须去觐见 Time Lord。他有麻烦了，虽然我看不出是什么麻烦。Time Lord 知道许多关于这个新邪恶的事，所以千万不要错过去找他。");
	say();
	message("「要找到 Time Lord，你必须先见到住在 Yew 森林里的 『鬼火』。他们是你联系他最好的途径。『人神修道院』的僧侣，也许知道如何联系这些『鬼火』。");
	say();
	message("「球体变暗了。我看不出更多了。」");
	say();
	message("Margareta 擡头看着你说：「你前方将面临许多危险。多加保重。」");
	say();
	message("说完这些话，Margareta 瘫软下来，闭上眼睛休息。她显然筋疲力竭了。*");
	say();
	if (!(!gflags[0x0100])) goto labelFunc08BA_00BA;
	Func0911(0x0032);
labelFunc08BA_00BA:
	gflags[0x0100] = true;
	return;
}
