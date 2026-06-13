#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0891 0x891 ();

void Func0890 0x890 ()
{
	var var0000;

	UI_show_npc_face(0xFEE0, 0x0000);
	if (!(!gflags[0x0314])) goto labelFunc0890_0028;
	UI_add_answer(["不知道", "犧牲了", "告辭"]);
	gflags[0x0314] = true;
	goto labelFunc0890_0038;
labelFunc0890_0028:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0890_0038:
	if (!gflags[0x031E]) goto labelFunc0890_0045;
	UI_add_answer("接下來呢");
labelFunc0890_0045:
	converse attend labelFunc0890_022C;
	case "不知道" attend labelFunc0890_008F:
	message("他跪在屍體旁檢查另一個魔像。當他的手指滑過 Bollux 胸口那個大洞時，他的臉上露出恍然大悟的表情。~「他、他的心臟不見了！」~他低頭看著自己的胸口。「他犧牲了自己，把他的心臟給了我……這個傻瓜！」他的話語充滿了侮辱，但語氣中卻帶著深情。");
	say();
	UI_remove_answer(["不知道", "犧牲了"]);
	message("「我必須幫助他，就像他幫助我一樣！你願意幫忙嗎？」");
	say();
	if (!Func090A()) goto labelFunc0890_0086;
	message("「非常好，」他明顯鬆了一口氣地說。「我先謝謝你了。」");
	say();
	gflags[0x031E] = true;
	UI_add_answer(["姓名", "職業", "傻瓜"]);
	goto labelFunc0890_008F;
labelFunc0890_0086:
	message("「那我就只能靠自己了，」他生氣地說。「這只不過是朋友之間應該做的事……這只不過是 Bollux 為我做的事！」");
	say();
	message("他仔細地看著你。他如石頭般冷酷的面容，完全無法掩飾他臉上和語氣中的懷疑。~「對我來說很明顯，你只不過是個迷路的旅行者，絕對不是我誤認的那個聖者。」*");
	say();
	abort;
labelFunc0890_008F:
	case "犧牲了" attend labelFunc0890_00D6:
	message("你很快地講述了 Bollux 死亡的細節，他是如何從自己胸口拔出那東西，並放進另一個魔像的身體裡。~「他犧牲了自己，把他的心臟給了我……這個傻瓜！」他的話語充滿了侮辱，但語氣中卻帶著深情。");
	say();
	UI_remove_answer(["不知道", "犧牲了"]);
	message("「我必須幫助他，就像他幫助我一樣！你願意幫忙嗎？」");
	say();
	if (!Func090A()) goto labelFunc0890_00CD;
	message("「非常好，」他明顯鬆了一口氣地說。「我先謝謝你了。」");
	say();
	gflags[0x031E] = true;
	UI_add_answer(["姓名", "職業", "傻瓜"]);
	goto labelFunc0890_00D6;
labelFunc0890_00CD:
	message("「那我就只能靠自己了，」他生氣地說。「這只不過是朋友之間應該做的事……這只不過是 Bollux 為我做的事！」");
	say();
	message("他仔細地看著你。他如石頭般冷酷的面容，完全無法掩飾他臉上和語氣中的懷疑。~「對我來說很明顯，你只不過是個迷路的旅行者，絕對不是我誤認的那個聖者。」*");
	say();
	abort;
labelFunc0890_00D6:
	case "姓名" attend labelFunc0890_00E9:
	UI_remove_answer("姓名");
	message("「我是名為 Adjhar 的魔像，為你服務。」");
	say();
labelFunc0890_00E9:
	case "職業" attend labelFunc0890_0105:
	message("「我是真理、愛與勇氣神殿的守護者之一。當牆壁倒塌並壓碎我的時候，Bollux 和我正在做這件事。」");
	say();
	UI_add_answer(["Bollux", "神殿", "牆壁"]);
labelFunc0890_0105:
	case "神殿" attend labelFunc0890_0118:
	UI_remove_answer("神殿");
	message("「你肯定聽說過三大原則神殿：真理、愛與勇氣！我們魔像被製造出來是為了保護神殿，因為只有聖者——『那位』聖者——才能利用它們所能傳達的驚人力量。」");
	say();
labelFunc0890_0118:
	case "牆壁" attend labelFunc0890_013C:
	UI_remove_answer("牆壁");
	message("「我對那起事件記得不是很清楚。不過，我會講述我能回憶起來的部分。Bollux 和我正在原則神殿的房間裡站崗，這時我們察覺到有人入侵了城堡。除了意識到巨大的熱量之外，我什麼也不記得了，然後一部分牆壁崩塌砸在我身上，壓碎了我的腿。我想 Bollux 比較幸運。是他把我帶到這裡的嗎？」");
	say();
	if (!Func090A()) goto labelFunc0890_0138;
	message("「那我們必須找到讓他復活的方法！就算沒有別的理由，我也欠他一份感激之情。」");
	say();
	goto labelFunc0890_013C;
labelFunc0890_0138:
	message("「奇怪，」他困惑地說。「那我就無法解釋我為什麼會在這裡了。~無論如何，我『必須』找到讓他復活的方法！」");
	say();
labelFunc0890_013C:
	case "Bollux" attend labelFunc0890_0156:
	message("「你難道還沒見過他嗎？他是我的哥哥，也是我的朋友。」");
	say();
	UI_remove_answer("Bollux");
	UI_add_answer("更年長");
labelFunc0890_0156:
	case "更年長" attend labelFunc0890_0169:
	message("「Astelleron 大師——我們其實稱他為父親——在創造我之前創造了他。而且他首先賦予了 Bollux 人格。」");
	say();
	UI_remove_answer("更年長");
labelFunc0890_0169:
	case "接下來呢" attend labelFunc0890_01BA:
	UI_remove_answer("接下來呢");
	message("「你有那本名為『Castambre 之石』的書嗎？」");
	say();
	if (!Func090A()) goto labelFunc0890_01B2;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc0890_01A7;
	message("他的眼神中透露出希望。當他從你手中接過書時，看起來幾乎像是在微笑。」");
	say();
	Func0891();
	goto labelFunc0890_01AF;
labelFunc0890_01A7:
	message("「我必須看著那本書才能使用它。也許你把它隨手放在哪裡了。」他直視著你。「我必須擁有那本書，這至關重要。我懇求你，去幫我把它找回來！」");
	say();
	gflags[0x031F] = true;
labelFunc0890_01AF:
	goto labelFunc0890_01BA;
labelFunc0890_01B2:
	message("「那麼請去把它找回來。我相信裡面包含了可以幫助我同伴的資訊。」");
	say();
	gflags[0x031F] = true;
labelFunc0890_01BA:
	case "傻瓜" attend labelFunc0890_021C:
	UI_remove_answer("傻瓜");
	message("「可憐的 Bollux 並不知道 Castambre 之石。他的犧牲也許是不必要的。你碰巧見過 MacCuth 寫的《Castambre 之石》嗎？」");
	say();
	if (!Func090A()) goto labelFunc0890_0218;
	message("「你有帶在身上嗎？」");
	say();
	if (!Func090A()) goto labelFunc0890_020D;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc0890_0202;
	message("他的眼神中透露出希望。當他從你手中接過書時，看起來幾乎像是在微笑。」");
	say();
	Func0891();
	goto labelFunc0890_020A;
labelFunc0890_0202:
	message("「我必須看著那本書才能使用它。也許你把它隨手放在哪裡了。」他直視著你。「我必須擁有那本書，這至關重要。我懇求你，去幫我把它找回來！」");
	say();
	gflags[0x031F] = true;
labelFunc0890_020A:
	goto labelFunc0890_0215;
labelFunc0890_020D:
	message("「那麼請去把它找回來。我相信裡面包含了可以幫助我同伴的資訊。」");
	say();
	gflags[0x031F] = true;
labelFunc0890_0215:
	goto labelFunc0890_021C;
labelFunc0890_0218:
	message("「那麼我建議你去我主人的房間裡找找看。書頁中包含可能有助於我同伴的詞語。」");
	say();
labelFunc0890_021C:
	case "告辭" attend labelFunc0890_0229:
	message("「對於你的幫助，我除了最深切的感激之外，無法提供任何東西。請平安上路。」*");
	say();
	abort;
labelFunc0890_0229:
	goto labelFunc0890_0045;
labelFunc0890_022C:
	endconv;
	return;
}


