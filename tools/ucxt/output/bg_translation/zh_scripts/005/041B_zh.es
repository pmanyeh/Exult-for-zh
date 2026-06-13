#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08D1 0x8D1 ();
extern void Func092E 0x92E (var var0000);

void Func041B object#(0x41B) ()
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

	if (!(event == 0x0001)) goto labelFunc041B_024E;
	UI_show_npc_face(0xFFE5, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE5));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0068]) goto labelFunc041B_0044;
	UI_add_answer("試鏡");
labelFunc041B_0044:
	if (!gflags[0x0069]) goto labelFunc041B_0057;
	UI_add_answer(["Miranda", "Max"]);
labelFunc041B_0057:
	if (!(!gflags[0x009C])) goto labelFunc041B_0069;
	message("你可以看到這個人的創造力，源源不絕地湧現出來。他饒富興味地看著你。");
	say();
	gflags[0x009C] = true;
	goto labelFunc041B_006D;
labelFunc041B_0069:
	message("「是……？」 Raymundo 沒好氣地說。「你要什麼？我很忙！」");
	say();
labelFunc041B_006D:
	converse attend labelFunc041B_0249;
	case "姓名" attend labelFunc041B_0083:
	message("「我是 Raymundo。」");
	say();
	UI_remove_answer("姓名");
labelFunc041B_0083:
	case "職業" attend labelFunc041B_00CC:
	message("「哎呀，我可是全國聞名的！你難道沒聽說過我嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc041B_00A2;
	message("「我早說過了吧！");
	say();
	goto labelFunc041B_00A6;
labelFunc041B_00A2:
	message("「-真的嗎-！？我很驚訝！不過算了…");
	say();
labelFunc041B_00A6:
	message("「我是 Britain 這裡皇家劇院的導演。我也是駐院劇作家。我偶爾也會作些曲子。我有時也會演戲，但演自己導的戲可不是明智之舉。~");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc041B_00BB;
	message("「我們目前正在排練一齣戲。」");
	say();
	goto labelFunc041B_00BF;
labelFunc041B_00BB:
	message("「白天來劇院看看我們排戲吧。」");
	say();
labelFunc041B_00BF:
	UI_add_answer(["皇家劇院", "排戲"]);
labelFunc041B_00CC:
	case "排戲" attend labelFunc041B_0114:
	message("「這是我寫的一點小東西，名為『聖者的試煉（The Trials of the Avatar）』。這是關於 Britannia 歷史上一位傳奇人物的故事。」這位藝術家上下打量著你。");
	say();
	message("「嗯...你的確有一種特質...你曾經在舞台上演過戲嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc041B_00EF;
	message("「我就知道！");
	say();
	goto labelFunc041B_00F3;
labelFunc041B_00EF:
	message("「嗯，沒關係。我相信你能很快適應的。");
	say();
labelFunc041B_00F3:
	message("「官方說法是試鏡已經結束，而且選角也完成了。然而，我們需要找一個人，作為『聖者』這個角色的替補演員。你想要試鏡嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc041B_010F;
	message("「太棒了！你需要做的是去 Gaye 的服裝店，買一套聖者的服裝。等我看到你穿著 -合適的- 服裝後，我就可以幫你試鏡。快去辦吧，快點，我是個大忙人。」*");
	say();
	gflags[0x0067] = true;
	abort;
	goto labelFunc041B_0114;
labelFunc041B_010F:
	message("「不？你從未夢想過在舞台上表演嗎？看到你的名字在火炬下閃耀？畫上傳統的油彩妝和戴上假髮？在雷鳴般的掌聲中鞠躬？好吧，那就走吧，我沒時間和民眾閒聊。」*");
	say();
	abort;
labelFunc041B_0114:
	case "皇家劇院" attend labelFunc041B_0134:
	message("「這是個很棒的空間，你不覺得嗎？它去年才剛開幕，這多虧了我們這座偉大城市幾位富有的市民的贊助。」");
	say();
	UI_remove_answer("皇家劇院");
	UI_add_answer(["資助", "贊助者"]);
labelFunc041B_0134:
	case "資助" attend labelFunc041B_017F:
	message("「雖然，劇院建築的建設費用，實際上是由皇家鑄幣局支付的，但劇團的運作，完全依賴像你這樣的人來支持。你願意為我們的劇團，做出一點微薄的貢獻嗎？例如…十枚金幣？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc041B_0174;
	var0006 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc041B_016D;
	message("「我感謝你。你已經證明了自己是一位真正的『藝術贊助者』，一個有教養和有品味的人。」");
	say();
	goto labelFunc041B_0171;
labelFunc041B_016D:
	message("「你不具說服力的表演，暴露了你的底細！你根本沒有十枚金幣！」");
	say();
labelFunc041B_0171:
	goto labelFunc041B_0178;
labelFunc041B_0174:
	message("「給一個人一條麵包，你只能餵飽他一天；給一個人一齣戲，或許你已經餵飽了他的靈魂一輩子！一旦你看過我們的一部作品，我相信你一定會重新考慮的。」");
	say();
labelFunc041B_0178:
	UI_remove_answer("資助");
labelFunc041B_017F:
	case "試鏡" attend labelFunc041B_01C3:
	if (!(var0001 == 0x0007)) goto labelFunc041B_01BE;
	var0007 = Func0931(0xFE9C, 0x0001, 0x0346, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc041B_01B6;
	message("「我看你準備好了？很好。請走到舞台中央好嗎？」");
	say();
	Func08D1();
	goto labelFunc041B_01BB;
labelFunc041B_01B6:
	message("「你的服裝在哪裡？沒有服裝你不能試鏡！」*");
	say();
	abort;
labelFunc041B_01BB:
	goto labelFunc041B_01C3;
labelFunc041B_01BE:
	message("「請在排練時間來劇院好嗎？」*");
	say();
	abort;
labelFunc041B_01C3:
	case "Miranda" attend labelFunc041B_01DA:
	message("Raymundo 深吸了一口氣，笑了起來。");
	say();
	message("「啊，可愛的女人。可惜她對政治比對舞台更感興趣。但我得說，我們相處得極好！」");
	say();
	UI_remove_answer("Miranda");
labelFunc041B_01DA:
	case "Max" attend labelFunc041B_01F1:
	message("「他可是個很有個性的人，不是嗎？」 Raymundo 的臉上洋溢著驕傲。");
	say();
	message("「得說，他真像他老爸。他肯定會成為一個偉大的演員。或者作家。或者導演。或者製作人。」");
	say();
	UI_remove_answer("Max");
labelFunc041B_01F1:
	case "贊助者" attend labelFunc041B_0211:
	message("「嗯，我真的無權透露我們贊助者的名字。但他們大多數都屬於友誼會。」");
	say();
	UI_remove_answer("贊助者");
	UI_add_answer(["主顧", "友誼會"]);
labelFunc041B_0211:
	case "主顧" attend labelFunc041B_0224:
	message("「這些是為我們劇院做出貢獻的人。他們來自各行各業，除了對優秀戲劇的熱愛之外，幾乎沒有什麼共同點。」");
	say();
	UI_remove_answer("主顧");
labelFunc041B_0224:
	case "友誼會" attend labelFunc041B_023B:
	message("「對於非藝術家來說，他們對劇院做出了慷慨的貢獻。在我的標準裡，他們是 -好- 人！」他高興地搓著手。");
	say();
	message("「不過，我不是會員。」");
	say();
	UI_remove_answer("友誼會");
labelFunc041B_023B:
	case "告辭" attend labelFunc041B_0246:
	goto labelFunc041B_0249;
labelFunc041B_0246:
	goto labelFunc041B_006D;
labelFunc041B_0249:
	endconv;
	message("「要走了？抱歉，我不簽名。」*");
	say();
labelFunc041B_024E:
	if (!(event == 0x0000)) goto labelFunc041B_02D5;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE5));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc041B_02CF;
	if (!(var0008 == 0x0001)) goto labelFunc041B_0292;
	var0009 = "「大聲點！我聽不見你的聲音！」";
labelFunc041B_0292:
	if (!(var0008 == 0x0002)) goto labelFunc041B_02A2;
	var0009 = "「請往舞台左側移動。」";
labelFunc041B_02A2:
	if (!(var0008 == 0x0003)) goto labelFunc041B_02B2;
	var0009 = "「那場戲再試一次。」";
labelFunc041B_02B2:
	if (!(var0008 == 0x0004)) goto labelFunc041B_02C2;
	var0009 = "「請從頭再來一遍。」";
labelFunc041B_02C2:
	UI_item_say(0xFFE5, var0009);
	goto labelFunc041B_02D5;
labelFunc041B_02CF:
	Func092E(0xFFE5);
labelFunc041B_02D5:
	return;
}


