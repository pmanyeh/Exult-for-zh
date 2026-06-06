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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0248])) goto labelFunc04B7_003A;
	message("你看到一隻正值壯年的有翼石像鬼。~~「向你致敬，人類！歡迎來到祭壇之屋。有什麼我可以幫忙的嗎？」");
	say();
	gflags[0x0248] = true;
	goto labelFunc04B7_003E;
labelFunc04B7_003A:
	message("「回來了！很高興再次見到你，人類，」 Teregus 說。「歡迎來到祭壇之屋。需要什麼幫助嗎？」");
	say();
labelFunc04B7_003E:
	if (!gflags[0x023F]) goto labelFunc04B7_004B;
	UI_add_answer("證據");
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
	case "職業" attend labelFunc04B7_009E:
	message("「負責照顧控制、熱情和勤勉的祭壇。是個責任重大的職位。在這個動盪的時期尤其重要。」");
	say();
	UI_add_answer(["麻煩", "祭壇"]);
labelFunc04B7_009E:
	case "麻煩" attend labelFunc04B7_00BE:
	message("「最近鎮上有很多分歧。祭壇原則的追隨者與友誼會追隨者之間關係非常緊張。聽到過威脅祭壇的謠言。」");
	say();
	UI_add_answer(["友誼會", "謠言"]);
	UI_remove_answer("麻煩");
labelFunc04B7_00BE:
	case "友誼會" attend labelFunc04B7_00F5:
	var0001 = UI_is_dead(0xFF48);
	if (!var0001) goto labelFunc04B7_00DD;
	message("「很高興現在是 Quan 在管理我們的分會。相信他是被誤導了，但在 Runeb 離開後，他是個講理得多的石像鬼。」");
	say();
	goto labelFunc04B7_00E1;
labelFunc04B7_00DD:
	message("「對友誼會的理想保持警惕。在追求團結的過程中忽視了祭壇，並失去了對古老傳統的尊重。還算不壞。告訴你我們的分會是由 Quan 和 Runeb 管理的。」");
	say();
labelFunc04B7_00E1:
	UI_add_answer(["Quan", "Runeb"]);
	UI_remove_answer("友誼會");
labelFunc04B7_00F5:
	case "謠言" attend labelFunc04B7_0127:
	var0001 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0001) goto labelFunc04B7_0118;
	message("「為失去 Runeb 感到遺憾。或許這樣最好。但肯定很高興能避免祭壇受到破壞。」");
	say();
	goto labelFunc04B7_0120;
labelFunc04B7_0118:
	message("「聽說鎮上有某人計畫破壞祭壇的物理實體。當然，這與實際摧毀控制、熱情和勤勉的基本原則不同，但對我們來說依然是件壞事。如果有時間的話，或許能幫我們查出是誰在策劃這件事。當你決定行動方針時，帶著證據回來找我。會非常感謝你的協助。」");
	say();
	gflags[0x0253] = true;
labelFunc04B7_0120:
	UI_remove_answer("謠言");
labelFunc04B7_0127:
	case "證據" attend labelFunc04B7_0155:
	message("「給我帶來了什麼，關於那些謠言的證據嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_014A;
	message("「太棒了！請讓我看看。」~~你把在 Sarpling 商店裡找到的 Runeb 寫的紙條交給他。~~「啊。Runeb。我早該猜到是他。總是用最暴力的手段來獲取更多。」~~他嘆了口氣。~~「請你用這個證據與他對質。建議你這樣做才能揭開真相。請做好萬全的準備，人類，因為不知道他會作何反應。」~~他搖了搖頭。~~「對和平解決不抱希望。感謝你的協助。」");
	say();
	var0003 = false;
	goto labelFunc04B7_014E;
labelFunc04B7_014A:
	message("「還沒找到什麼嗎？啊，好吧。如果發現任何異常，請回來。建議你一有線索就與嫌疑人對質。希望能在他對祭壇造成破壞之前阻止他。」");
	say();
labelFunc04B7_014E:
	UI_remove_answer("證據");
labelFunc04B7_0155:
	case "Quan" attend labelFunc04B7_0168:
	message("「為失去 Quan 給友誼會感到悲傷，人類。年輕時是個好石像鬼，但後來誤入歧途。過去幾年主要專注於自我膨脹和享樂主義。真是個遺憾。」");
	say();
	UI_remove_answer("Quan");
labelFunc04B7_0168:
	case "Runeb" attend labelFunc04B7_017B:
	message("「真是個悲慘的案例。希望曾經能夠拯救他。一直都難以控制，但過去幾年變得更糟了。似乎想盡可能地挑起爭端。加入友誼會後，找到了理由將力量對付所有較弱的人。」");
	say();
	UI_remove_answer("Runeb");
labelFunc04B7_017B:
	case "Inamo" attend labelFunc04B7_01D4:
	message("他帶著悲傷的微笑，卻明顯流露出驕傲。~");
	say();
	if (!gflags[0x023A]) goto labelFunc04B7_0194;
	message("「曾經是個優秀的年輕石像鬼。我們所有人的驕傲。希望知道是誰導致了他不光彩的結局。」");
	say();
	goto labelFunc04B7_01CD;
labelFunc04B7_0194:
	message("「非常想念他。從他還是一顆蛋的時候就撫養他。他曾相當直言不諱地表達對友誼會的不滿。覺得他離開會比較安全。」~~他嘆了口氣，然後滿懷希望地抬起頭。~~「有他的消息嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_01C9;
	message("「好嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04B7_01BB;
	message("「很好。希望能盡快聽到他的消息。」");
	say();
	goto labelFunc04B7_01C6;
labelFunc04B7_01BB:
	message("「不好？太糟糕了！有什麼我可以幫忙的嗎？」");
	say();
	UI_add_answer("太遲了");
labelFunc04B7_01C6:
	goto labelFunc04B7_01CD;
labelFunc04B7_01C9:
	message("「啊。太可惜了。等他的消息等了很久。」");
	say();
labelFunc04B7_01CD:
	UI_remove_answer("Inamo");
labelFunc04B7_01D4:
	case "太遲了" attend labelFunc04B7_01EE:
	message("「太遲了？太遲了是什麼意思？告訴我發生了什麼事！」~~他看起來非常心煩意亂。");
	say();
	UI_add_answer("被謀殺");
	UI_remove_answer("太遲了");
labelFunc04B7_01EE:
	case "被謀殺" attend labelFunc04B7_0206:
	message("「被謀殺？」~~他退了一步，被這個消息驚呆了。~~「被謀殺？難以置信。他沒有真正的敵人啊！」~~他重重地嘆了一口氣。~~「請告訴我，究竟發生了什麼事。」~~你向他講述 Inamo 死亡的細節。他再次嘆息。~~「這真是白白浪費了石像鬼的生命。如果你發現是誰想要他死，請務必通知我，我會非常感激。」~~ 他安靜了片刻，試圖適應這個情況。~~「很抱歉。我需要一些時間來哀悼。請晚點再來。」~~他轉過身去。");
	say();
	UI_remove_answer("被謀殺");
	gflags[0x023A] = true;
	abort;
labelFunc04B7_0206:
	case "祭壇" attend labelFunc04B7_0244:
	UI_remove_answer("祭壇");
	message("「是三項原則祭壇的管理員和負責人。想要捐款嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_0240;
	message("「極好。你想捐款給哪個祭壇？」");
	say();
	UI_push_answers();
	UI_add_answer(["控制", "熱情", "勤勉"]);
	goto labelFunc04B7_0244;
labelFunc04B7_0240:
	message("「啊。或許下次再捐款吧。」");
	say();
labelFunc04B7_0244:
	case "控制", "熱情", "勤勉" attend labelFunc04B7_02A2:
	message("「是個極好的選擇。捐獻 5 枚金幣就能為你在神殿冥想。願意捐獻 5 枚金幣嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_028A;
	var0005 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04B7_0283;
	message("「今晚為你冥想，人類。祝你旅途順利。」");
	say();
	goto labelFunc04B7_0287;
labelFunc04B7_0283:
	message("「沒有 5 枚金幣？等你有了金幣再回來吧。為你旅途的成功冥想。」~~他親切地微笑著。");
	say();
labelFunc04B7_0287:
	goto labelFunc04B7_028E;
labelFunc04B7_028A:
	message("「啊。誤會了。向你道歉。如果你改變主意請讓我知道。」~~他看起來很失望。");
	say();
labelFunc04B7_028E:
	UI_remove_answer(["控制", "熱情", "勤勉"]);
	UI_pop_answers();
labelFunc04B7_02A2:
	case "告辭" attend labelFunc04B7_02AD:
	goto labelFunc04B7_02B0;
labelFunc04B7_02AD:
	goto labelFunc04B7_005E;
labelFunc04B7_02B0:
	endconv;
	message("「現在先向你道別，人類。歡迎再回來。」*");
	say();
labelFunc04B7_02B5:
	if (!(event == 0x0000)) goto labelFunc04B7_02C3;
	Func092F(0xFF49);
labelFunc04B7_02C3:
	return;
}


