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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0147])) goto labelFunc04F2_003E;
	message("你看到一個有魅力、看起來很用功的男人。");
	say();
	gflags[0x0147] = true;
	goto labelFunc04F2_0048;
labelFunc04F2_003E:
	message("「是的，");
	message(var0000);
	message("，」Taylor 問道。「我能幫你嗎？」");
	say();
labelFunc04F2_0048:
	if (!gflags[0x0138]) goto labelFunc04F2_005F;
	var0001 = true;
	UI_add_answer(["小精靈", "Emps"]);
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
	case "職業" attend labelFunc04F2_00A7:
	message("「我在這座修道院研究當地的植物、動物和地理。」");
	say();
	UI_add_answer(["植物", "動物", "地理", "修道院"]);
labelFunc04F2_00A7:
	case "植物" attend labelFunc04F2_00BA:
	message("「這個地區有很多美麗的植物。我正在努力了解它們全部。」");
	say();
	UI_remove_answer("植物");
labelFunc04F2_00BA:
	case "動物" attend labelFunc04F2_00E1:
	message("「森林裡居住著許多不同種類的動物。在我的研究中，我遇到了一些迷人的物種。」");
	say();
	if (!gflags[0x0100]) goto labelFunc04F2_00DA;
	if (!(!var0001)) goto labelFunc04F2_00DA;
	UI_add_answer("小精靈");
labelFunc04F2_00DA:
	UI_remove_answer("動物");
labelFunc04F2_00E1:
	case "修道院" attend labelFunc04F2_00FB:
	message("「我們的教團被稱為玫瑰友誼會（Brotherhood of the Rose）。」");
	say();
	UI_add_answer("教團");
	UI_remove_answer("修道院");
labelFunc04F2_00FB:
	case "教團" attend labelFunc04F2_012E:
	message("「是的，");
	message(var0000);
	message("。還有一位修道士，Aimi，住在這座修道院裡。她是一位畫家和園丁。」");
	say();
	UI_add_answer(["畫家", "園丁"]);
	if (!gflags[0x0148]) goto labelFunc04F2_0127;
	UI_add_answer("Kreg");
labelFunc04F2_0127:
	UI_remove_answer("教團");
labelFunc04F2_012E:
	case "畫家" attend labelFunc04F2_0141:
	message("他笑了。「在我們之間，她是個好得多的園丁。」");
	say();
	UI_remove_answer("畫家");
labelFunc04F2_0141:
	case "園丁" attend labelFunc04F2_0154:
	message("「她種出了我見過最可愛的花朵！你必須親眼看看才會相信它們的存在。」");
	say();
	UI_remove_answer("園丁");
labelFunc04F2_0154:
	case "地理" attend labelFunc04F2_016E:
	message("「我運用我對當地地形的知識來輔助我的研究。我對這個地方越了解，我就能離開友誼會修道院走得越遠，並且還能確信自己能回來——不像我的一位同修。」");
	say();
	UI_remove_answer("地理");
	UI_add_answer("同修");
labelFunc04F2_016E:
	case "同修" attend labelFunc04F2_0181:
	message("「前段時間，他在該地區調查鳥類時迷路了——我記得是金頰黑背林鶯。可悲的是，他走得太遠了，從那以後我們就再也沒有他的消息了。~~「我不希望遭遇同樣的命運。」");
	say();
	UI_remove_answer("同修");
labelFunc04F2_0181:
	case "Kreg" attend labelFunc04F2_019A:
	message("「那個名字聽起來不熟悉，");
	message(var0000);
	message("。或許他不是這個地區的人。」");
	say();
	UI_remove_answer("Kreg");
labelFunc04F2_019A:
	case "Julius" attend labelFunc04F2_01AD:
	message("「Julius？我無法確定，但他可能是一個現在住在……墓地的人。我曾聽說過這個名字，說是有個人被帶到修道院來埋葬，雖然我不知道是誰帶他來的，我也不記得是聽誰說的。我真心希望他不是你的朋友，」他充滿歉意地說。");
	say();
	UI_remove_answer("Julius");
labelFunc04F2_01AD:
	case "小精靈" attend labelFunc04F2_01D1:
	message("「小精靈？」他笑了。「我懷疑它們是否存在。我知道許多人似乎相信它們的存在，但我從未見過任何一隻。~~「如果你一定要知道，民間傳說認為它們居住在森林區域，靠近 Emps 的地方。據說，Emps 能夠和它們說話。」他聳了聳肩。「如果你希望，你可以去尋找它們，但我自己是不會浪費寶貴的時間的。」");
	say();
	UI_add_answer(["寶貴的時間", "Emps"]);
	gflags[0x0138] = true;
	UI_remove_answer("小精靈");
labelFunc04F2_01D1:
	case "寶貴的時間" attend labelFunc04F2_01EA:
	message("「有太多令人興奮的事物值得研究了……例如，樹花，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("寶貴的時間");
labelFunc04F2_01EA:
	case "Emps" attend labelFunc04F2_020E:
	message("「啊，Emps。我還沒能收集到太多關於它們的資訊。~~「它們住在深林的東部邊緣，離這裡不算是太遠。~~「它們長得有點像猿，但只有一點點像。它們極其害羞，很少會覺得自在到足以接近人類。~~「我唯一一次能近距離觀察 Emp 是因為我背包裡剛好有從 Bee Cave 撿來的蜂蜜。那隻生物出現了，盯著我看了幾分鐘，然後要——我要說，是要——我的蜂蜜。我相信它們有同理心（empathic），這也是它們名字的由來。~~「非常有趣的物種，你不同意嗎？」");
	say();
	UI_add_answer(["蜂蜜", "Bee Cave"]);
	var0002 = true;
	UI_remove_answer("Emps");
labelFunc04F2_020E:
	case "蜂蜜" attend labelFunc04F2_0221:
	message("「洞穴裡的蜂蜜相當美味，但很少有人能不經過戰鬥就得到它。Bee Cave 可能是一個相當危險的地方。」");
	say();
	UI_remove_answer("蜂蜜");
labelFunc04F2_0221:
	case "Bee Cave" attend labelFunc04F2_028C:
	message("「Bee Cave 位於修道院的西南方。但如果你計畫去那裡，要小心住在洞穴裡的巨蜂。牠們的毒液非常毒。~~");
	say();
	var0003 = Func0931(0xFE9B, 0x0001, 0x0301, 0xFE99, 0xFE99);
	if (!(!var0003)) goto labelFunc04F2_0285;
	message("「如果你希望，我可以給你一顆煙霧彈，它能在短時間內驅趕蜜蜂。你想要嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F2_0281;
	var0005 = UI_add_party_items(0x0001, 0x0301, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04F2_027A;
	message("「給你。」");
	say();
	goto labelFunc04F2_027E;
labelFunc04F2_027A:
	message("「或許你應該先減輕你的負重，再拿炸彈。」");
	say();
labelFunc04F2_027E:
	goto labelFunc04F2_0285;
labelFunc04F2_0281:
	message("「很好。但如果你剛好路過洞穴，要小心點！」");
	say();
labelFunc04F2_0285:
	UI_remove_answer("Bee Cave");
labelFunc04F2_028C:
	case "告辭" attend labelFunc04F2_0297:
	goto labelFunc04F2_029A;
labelFunc04F2_0297:
	goto labelFunc04F2_005F;
labelFunc04F2_029A:
	endconv;
	message("「願你的知識隨著你與自然的邂逅而增長，");
	message(var0000);
	message("。」*");
	say();
labelFunc04F2_02A5:
	if (!(event == 0x0000)) goto labelFunc04F2_02AE;
	abort;
labelFunc04F2_02AE:
	return;
}


