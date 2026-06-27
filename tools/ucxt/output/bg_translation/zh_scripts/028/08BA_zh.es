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
	message("「算命費用要 20 個金幣。可以嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc08BA_0044;
	var0002 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0002) goto labelFunc08BA_0038;
	message("Margareta 收下了你的錢。");
	say();
	goto labelFunc08BA_0041;
labelFunc08BA_0038:
	message("「你的金幣不夠。」");
	say();
	message("Margareta 從你身邊轉過身去。*");
	say();
	abort;
labelFunc08BA_0041:
	goto labelFunc08BA_004D;
labelFunc08BA_0044:
	message("「那就算了。」");
	say();
	message("Margareta 從你身邊轉過身去。*");
	say();
	abort;
labelFunc08BA_004D:
	UI_play_music(0x001F, 0x0000);
	message("這名吉普賽婦人凝視著她的水晶球。");
	say();
	if (!(!var0000)) goto labelFunc08BA_0073;
	if (!gflags[0x00E2]) goto labelFunc08BA_006F;
	message("「我看見一個女人站在神龕旁。她愛著你。關於這點，我看不出更多了。");
	say();
	goto labelFunc08BA_0073;
labelFunc08BA_006F:
	message("「我看見一個女人站在神龕旁。她在你的生命中將扮演重要的角色。");
	say();
labelFunc08BA_0073:
	message("「嗯…水晶球非常渾濁……");
	say();
	if (!(!gflags[0x0006])) goto labelFunc08BA_0085;
	message("「我看見…如果你想了解更多關於友誼會的事，並發現他們的真實本質，你就必須加入他們。");
	say();
	goto labelFunc08BA_0089;
labelFunc08BA_0085:
	message("「既然…你已經是友誼會的成員，你遲早會更了解他們，並發現他們的真實本質。");
	say();
labelFunc08BA_0089:
	message("「不是很清楚……啊，對了……有一種新的邪惡正在威脅不列顛尼亞。我看見你將來必須與它交手。");
	say();
	message("「水晶球告訴我，世界的以太——即控制魔法的物質——已經受到這種新的邪惡存在所影響。");
	say();
	message("「我進一步看見，這種邪惡的存在，在不久後的某個事件中，將會獲得更強大的力量。這個事件與行星有關。去 Moonglow 的天文台找一個人，了解更多關於這件事的資訊。我看見他有一個對你非常有用的裝置。儘快去找他，因為這個事件即將來臨。」");
	say();
	message("「這是什麼？我看見……我看見……你在尋找一個『帶著鉤子的人』。他不是你真正的對手，但找到他，是完成你終極任務的必要條件。");
	say();
	message("「等等！我看見你必須去覲見 Time Lord。他有麻煩了，雖然我看不出是什麼麻煩。Time Lord 知道許多關於這個新邪惡的事，所以千萬不要錯過去找他。");
	say();
	message("「要找到 Time Lord，你必須先見到住在 Yew 森林裡的 『鬼火』。他們是你聯繫他最好的途徑。『人神修道院』的僧侶，也許知道如何聯繫這些『鬼火』。");
	say();
	message("「球體變暗了。我看不出更多了。」");
	say();
	message("Margareta 抬頭看著你說：「你前方將面臨許多危險。多加保重。」");
	say();
	message("說完這些話，Margareta 癱軟下來，閉上眼睛休息。她顯然筋疲力竭了。*");
	say();
	if (!(!gflags[0x0100])) goto labelFunc08BA_00BA;
	Func0911(0x0032);
labelFunc08BA_00BA:
	gflags[0x0100] = true;
	return;
}
