#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04E6 object#(0x4E6) ()
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

	if (!(event == 0x0001)) goto labelFunc04E6_0241;
	UI_show_npc_face(0xFF1A, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	var0002 = Func0909();
	var0003 = Func0908();
	var0004 = "Avatar";
	var0005 = "a pseudonym";
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04E6_0059;
	UI_add_answer("Hook");
labelFunc04E6_0059:
	if (!(!gflags[0x02B3])) goto labelFunc04E6_006B;
	message("你看到一個穿著優雅且明顯富有的海盜。他身上散發著髮油的味道。");
	say();
	gflags[0x02B3] = true;
	goto labelFunc04E6_006F;
labelFunc04E6_006B:
	message("「什麼事？」 Gordy 問。");
	say();
labelFunc04E6_006F:
	converse attend labelFunc04E6_023C;
	case "姓名" attend labelFunc04E6_0085:
	message("「我是 Gordy 。」他咧嘴大笑，向你伸出手。你注意到他的手不太乾淨。");
	say();
	UI_remove_answer("姓名");
labelFunc04E6_0085:
	case "職業" attend labelFunc04E6_0138:
	message("「我是遊戲之屋的『老闆 (The Mister) 』。在我的屋內你可以挑戰你在機率遊戲上的技巧。」他仔細地打量你，衡量你的價值和好騙程度。");
	say();
	if (!((var0000 == 0x0005) || ((var0000 == 0x0006) || ((var0000 == 0x0007) || (var0000 == 0x0000))))) goto labelFunc04E6_011A;
	message("「進來享受吧！但首先你必須登記。請在簿子上簽名，這樣我們才能核實你所聲稱的身價。」你簽哪個名字？");
	say();
	var0006 = [var0003, var0004, var0005];
	var0007 = Func090B(var0006);
	if (!(var0007 == var0003)) goto labelFunc04E6_00E3;
	message("你簽了你的名字。「很好，");
	message(var0003);
	message("。歡迎來到賭坊 (House of Games) ！」 Gordy 張開雙臂做了一個誇張的姿勢，顯然很高興能歡迎你的錢來到他的賭場。");
	say();
labelFunc04E6_00E3:
	if (!(var0007 == var0004)) goto labelFunc04E6_0103;
	message("當 Gordy 看到你寫的名字時皺起眉頭。「聖者，是嗎？我們一週前才剛有一個。他在牌桌上作弊被抓到了！」他退後一步並怒視著。「你要給我們惹麻煩嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E6_00FF;
	message("「那你不能進來！」*");
	say();
	abort;
	goto labelFunc04E6_0103;
labelFunc04E6_00FF:
	message("「我們走著瞧！」");
	say();
labelFunc04E6_0103:
	if (!(var0007 == var0005)) goto labelFunc04E6_0117;
	message("你簽了一個假名字。「好的，");
	message(var0002);
	message("。我很高興歡迎你！」 Gordy 張開雙臂做了一個誇張的姿勢，顯然很高興能歡迎你的錢來到他的賭場。");
	say();
labelFunc04E6_0117:
	goto labelFunc04E6_011E;
labelFunc04E6_011A:
	message("「我希望在營業時間能在那裡見到你。」");
	say();
labelFunc04E6_011E:
	if (!gflags[0x0006]) goto labelFunc04E6_0128;
	message("「啊，你是友誼會的成員。你肯定會在這裡的牌桌上找到你的報償！」 Gordy 眨眼並用手肘推了你一下，然後大聲狂笑。");
	say();
labelFunc04E6_0128:
	UI_add_answer(["老闆 (The Mister)", "賭坊 (House of Games)", "技巧"]);
labelFunc04E6_0138:
	case "賭坊 (House of Games)" attend labelFunc04E6_0158:
	message("「賭坊 (House of Games) 是六年前用……一位利益相關者的資金建立的。它吸引了來自全不列顛尼亞想要用他們的錢過危險生活的人。這門生意非常有利可圖。」他拍了拍他的袋子，發出金幣叮噹的聲音。「非常有利可圖。」他笑著說。");
	say();
	UI_remove_answer("賭坊 (House of Games)");
	UI_add_answer(["靠山", "有利可圖"]);
labelFunc04E6_0158:
	case "老闆 (The Mister)" attend labelFunc04E6_0176:
	message("「這是指我是監督，但這裡的每個人都一直叫我『老闆 (The Mister) 』。我不確定為什麼。但它很吸引我。」他像隻小公雞一樣挺起胸膛，試圖看起來很重要。他幾乎成功了。");
	say();
	message("「而對你來說，那是『Gordy 先生』！」");
	say();
	UI_remove_answer("老闆 (The Mister)");
	UI_add_answer("Gordy 先生");
labelFunc04E6_0176:
	case "Gordy 先生" attend labelFunc04E6_018D:
	message("「是的，我能為你做什麼？」");
	say();
	message("他咧嘴笑了，對自己非常滿意。");
	say();
	UI_remove_answer("Gordy 先生");
labelFunc04E6_018D:
	case "技巧" attend labelFunc04E6_01B0:
	message("「每個遊戲都需要明確的技巧來決定最有利潤的下注方式。許多來遊戲之屋的訪客發現他們有這種技巧。其他人，很可悲地，沒有。」");
	say();
	if (!gflags[0x0006]) goto labelFunc04E6_01A9;
	if (!var0001) goto labelFunc04E6_01A9;
	message("他指著你的友誼會獎章。「你應該不會有任何問題。」他眨眨眼並挑了挑眉。");
	say();
labelFunc04E6_01A9:
	UI_remove_answer("技巧");
labelFunc04E6_01B0:
	case "有利可圖" attend labelFunc04E6_01C3:
	message("「嗯，海盜巢穴 (Buccaneer's Den)不在不列顛尼亞稅務委員會的管轄範圍內。我們不受不列顛尼亞的稅收約束。」 Gordy 邪惡地笑著。「而那……非常有利可圖！」");
	say();
	UI_remove_answer("有利可圖");
labelFunc04E6_01C3:
	case "Hook" attend labelFunc04E6_01F8:
	var0008 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc04E6_01ED;
	message("方塊震動了一會兒。「是的，我非常了解 Hook 。他住在賭坊 (House of Games) 下面。去跟 Sintag 談談。他可以為你指路。」");
	say();
	goto labelFunc04E6_01F1;
labelFunc04E6_01ED:
	message("「我不認識符合那描述的人。」 Gordy 緊張地環顧四周，鬆了鬆衣領，好像它突然變緊了一樣。");
	say();
labelFunc04E6_01F1:
	UI_remove_answer("Hook");
labelFunc04E6_01F8:
	case "靠山" attend labelFunc04E6_022E:
	var0008 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc04E6_0222;
	message("方塊震動了一會兒。「當然是友誼會 。」");
	say();
	goto labelFunc04E6_0227;
labelFunc04E6_0222:
	message("「嗯，現在，……那樣就會洩漏我的生意和利潤的秘密了，不是嗎？」當他向你靠近並咆哮時，他的舉止變得具有威脅性：「去自己找靠山吧，小狗！」*");
	say();
	abort;
labelFunc04E6_0227:
	UI_remove_answer("靠山");
labelFunc04E6_022E:
	case "告辭" attend labelFunc04E6_0239:
	goto labelFunc04E6_023C;
labelFunc04E6_0239:
	goto labelFunc04E6_006F;
labelFunc04E6_023C:
	endconv;
	message("「再會，朋友。我期待你的歸來。」*");
	say();
labelFunc04E6_0241:
	if (!(event == 0x0000)) goto labelFunc04E6_024F;
	Func092E(0xFF1A);
labelFunc04E6_024F:
	return;
}


