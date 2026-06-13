#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func08A8 0x8A8 ();
extern void Func092E 0x92E (var var0000);

void Func04ED object#(0x4ED) ()
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

	if (!(event == 0x0001)) goto labelFunc04ED_0309;
	UI_show_npc_face(0xFF13, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF13));
	var0002 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0003 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc04ED_005F;
	UI_add_answer("毒液");
labelFunc04ED_005F:
	if (!(!gflags[0x00B1])) goto labelFunc04ED_0071;
	message("你看到一位看起來非常有權威的年長男人，正帶著深思熟慮的關切看著你。");
	say();
	gflags[0x00B1] = true;
	goto labelFunc04ED_0075;
labelFunc04ED_0071:
	message("「我很高興你又來看我了，」 Kessler 說。");
	say();
labelFunc04ED_0075:
	converse attend labelFunc04ED_02FE;
	case "姓名" attend labelFunc04ED_008B:
	message("「我的名字是 Kessler 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04ED_008B:
	case "職業" attend labelFunc04ED_009E:
	message("「我在 Britain 這裡經營藥劑店。」");
	say();
	UI_add_answer("藥劑師");
labelFunc04ED_009E:
	case "藥劑師" attend labelFunc04ED_00C1:
	message("「雖然藥劑師的正常職責是管理藥水和魔法配方，但我現在幾乎專為 Lord British 工作，試圖研究一個特定的問題。」");
	say();
	UI_remove_answer("藥劑師");
	UI_add_answer(["藥水", "研究", "問題"]);
labelFunc04ED_00C1:
	case "藥水" attend labelFunc04ED_00E1:
	message("「它們在 Britannia 這裡絕對不是最近的發明！藥水是具有某些魔法特性的液體，用於各種目的，例如治療傷害和疾病。如果你感興趣的話，我有一些可以出售。」");
	say();
	UI_remove_answer("藥水");
	UI_add_answer(["魔法特性", "買藥水"]);
labelFunc04ED_00E1:
	case "魔法特性" attend labelFunc04ED_00FB:
	message("「自從法師們變得如此無能後，我們被迫發展其他方法來完成我們過去依賴法師所做的一切事情。不幸的是，許多這些新方法至今仍未經測試。」");
	say();
	UI_remove_answer("魔法特性");
	UI_add_answer("未經測試");
labelFunc04ED_00FB:
	case "未經測試" attend labelFunc04ED_010E:
	message("「我們對我們使用的大多數物質的影響仍然知之甚少。許多物質引起的問題比解決的還多，或者如果與其他元素一起服用，會產生不同的反應。有些可能會讓你對健康產生依賴，有些則可能根本就是有毒的。」");
	say();
	UI_remove_answer("未經測試");
labelFunc04ED_010E:
	case "研究" attend labelFunc04ED_012E:
	message("「我正在研究一種名為銀蛇毒液的特定物質的影響。但我遇到了一些困難。」");
	say();
	UI_remove_answer("研究");
	UI_add_answer(["銀蛇", "困難"]);
labelFunc04ED_012E:
	case "銀蛇" attend labelFunc04ED_0148:
	message("「就像人可以從名字中猜到的那樣，它是從危險的銀蛇身上取出的毒液。許多人對這些生物的著迷引起了對毒液本身極大的好奇。」");
	say();
	UI_remove_answer("銀蛇");
	UI_add_answer("好奇心");
labelFunc04ED_0148:
	case "好奇心" attend labelFunc04ED_015B:
	message("「有些人聲稱石像鬼服用毒液，這導致他們在戰鬥等方面獲得增強。這可能只是一個神話，但人們感受到的好奇心卻是千真萬確的。」");
	say();
	UI_remove_answer("好奇心");
labelFunc04ED_015B:
	case "困難" attend labelFunc04ED_017B:
	message("「我最大的困難在於找到大量有意義的銀蛇毒液。但這絕不是我唯一的困難。」");
	say();
	UI_remove_answer("困難");
	UI_add_answer(["尋找", "其他困難"]);
labelFunc04ED_017B:
	case "尋找" attend labelFunc04ED_0192:
	message("「如果你碰巧遇到任何銀蛇毒液，把它帶回這裡給我。對於你能提供的每一瓶，我將支付你五十金幣。」");
	say();
	var0004 = true;
	UI_remove_answer("尋找");
labelFunc04ED_0192:
	case "其他困難" attend labelFunc04ED_01A5:
	message("「人們需要被警告銀蛇毒液有多危險。為此，我希望在 Lord British 和領主與市長們的會議前發表我的發現，但為了做到這一點，我必須先完成我的研究。」");
	say();
	UI_remove_answer("其他困難");
labelFunc04ED_01A5:
	case "問題" attend labelFunc04ED_01BF:
	message("「最近一種非常奇怪物質的使用量急遽上升。人們開始刻意服用銀蛇的毒液。」");
	say();
	UI_remove_answer("問題");
	UI_add_answer("服用");
labelFunc04ED_01BF:
	case "服用" attend labelFunc04ED_01D9:
	message("「銀蛇會產生一種極度致命的毒液，但當服用的量少於致死量時，它會引起各種奇怪的影響。」");
	say();
	UI_remove_answer("服用");
	UI_add_answer("影響");
labelFunc04ED_01D9:
	case "影響" attend labelFunc04ED_01F3:
	message("「有一段時間，毒液會提升人的生理和心理表現，例如讓人能更努力工作。但在藥效退去後，它會對使用者造成永久性的損害。」");
	say();
	UI_remove_answer("影響");
	UI_add_answer("損害");
labelFunc04ED_01F3:
	case "損害" attend labelFunc04ED_0206:
	message("「它首先會讓使用者感到極度疲憊，最終導致皮膚脫落。毒液是一種危險物質，你在任何情況下都不應該服用它。」");
	say();
	UI_remove_answer("損害");
labelFunc04ED_0206:
	case "毒液" attend labelFunc04ED_02B5:
	var0005 = UI_count_objects(0xFE9B, 0x0289, 0xFE99, 0xFE99);
	var0006 = (0x0032 * var0005);
	if (!(var0005 == 0x0000)) goto labelFunc04ED_023C;
	message("「你沒有任何毒液瓶！」");
	say();
	goto labelFunc04ED_02AE;
labelFunc04ED_023C:
	if (!(var0005 == 0x0001)) goto labelFunc04ED_024D;
	message("Kessler 仔細檢查這瓶毒液。");
	say();
	goto labelFunc04ED_0251;
labelFunc04ED_024D:
	message("Kessler 仔細檢查這些毒液。");
	say();
labelFunc04ED_0251:
	message("他抬頭看你並點點頭。「這確實是銀蛇毒液。我將以每瓶 50 金幣向你收購。好嗎？」");
	say();
	if (!Func090A()) goto labelFunc04ED_02AA;
	var0007 = UI_remove_party_items(var0005, 0x0289, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc04ED_02A3;
	var0008 = UI_add_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc04ED_029C;
	message("Kessler 打開他的錢包並付給你 ");
	message(var0006);
	message(" 金幣。");
	say();
	goto labelFunc04ED_02A0;
labelFunc04ED_029C:
	message("「你負擔太重了，帶不了更多錢。」");
	say();
labelFunc04ED_02A0:
	goto labelFunc04ED_02A7;
labelFunc04ED_02A3:
	message("「我看到你手頭上有一批銀蛇毒液。或許我們應該進一步談談。」");
	say();
labelFunc04ED_02A7:
	goto labelFunc04ED_02AE;
labelFunc04ED_02AA:
	message("「很好。」");
	say();
labelFunc04ED_02AE:
	UI_remove_answer("毒液");
labelFunc04ED_02B5:
	case "買藥水" attend labelFunc04ED_02F0:
	if (!(!(var0001 == 0x0007))) goto labelFunc04ED_02CF;
	message("「藥劑店關門了。它的營業時間是中午到午夜。你可以到時候再來。」");
	say();
	goto labelFunc04ED_02E9;
labelFunc04ED_02CF:
	message("「我總是保持新鮮的原料庫存和調配好的藥水庫存，以防任何人需要它們。你想買一瓶嗎？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc04ED_02E5;
	Func08A8();
	goto labelFunc04ED_02E9;
labelFunc04ED_02E5:
	message("「如果你需要任何藥水，一定要回來。」");
	say();
labelFunc04ED_02E9:
	UI_remove_answer("買藥水");
labelFunc04ED_02F0:
	case "告辭" attend labelFunc04ED_02FB:
	goto labelFunc04ED_02FE;
labelFunc04ED_02FB:
	goto labelFunc04ED_0075;
labelFunc04ED_02FE:
	endconv;
	message("「很高興和你說話，");
	message(var0002);
	message("。」*");
	say();
labelFunc04ED_0309:
	if (!(event == 0x0000)) goto labelFunc04ED_0317;
	Func092E(0xFF13);
labelFunc04ED_0317:
	return;
}


