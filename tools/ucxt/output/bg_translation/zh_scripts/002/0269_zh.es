#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func0269 shape#(0x269) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0269_0009;
	abort;
labelFunc0269_0009:
	UI_show_npc_face(0xFEE4, 0x0000);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0347, 0xFE99, 0x0000);
	if (!(gflags[0x0004] && (!gflags[0x0012]))) goto labelFunc0269_0056;
	message("「恭喜你，聖者，摧毀了球體。我從我的天球監獄中解脫了。我感謝你。但我很遺憾地通知你，守護者設計了那個球體，它的毀滅永久地癱瘓了月之門，以及你的月之寶珠。你無法再透過紅色的月之門回到你的家鄉了。~~");
	say();
	message("「在你完成任務後，離開不列顛尼亞唯一的希望，就是使用守護者自己進入這片土地的載具——黑門。"  );
	say();
	message("「守護者的追隨者們正在用黑石建造黑門，並將利用魔法和自然元素來啟動它。守護者計畫在即將到來的天體對齊期間進入不列顛尼亞，那已經迫在眉睫了。那是唯一一次元素運作良好，使黑門變得可穿透且活躍的時候。你需要一個有能力破壞黑石的裝置。如果你還沒有遇到這樣的裝置，你可以在 Cove 的法師 Rudyom 的工作坊裡找到能幫你的東西。");
	say();
	message("「在你找到黑門之前，還有一個產生器必須被摧毀。這是用來將守護者的聲音傳達給他的追隨者，並魅惑他們服從他意願的裝置。去 Serpent's Hold 附近的區域尋找包含這個產生器的地牢。它最可能的形狀是一個立方體。它很可能就在 Serpent's Hold 東邊的友誼會島嶼上。");
	say();
	message("「當你完成這項任務時，將你的精力集中在海盜巢穴 (Buccaneer's Den)上。你或許會在那裡找到黑門位置的線索。");
	say();
	message("「如果你想再次跟我說話，只需使用沙漏。再見。」*");
	say();
	gflags[0x0012] = true;
	Func0911(0x00C8);
	abort;
labelFunc0269_0056:
	if (!(gflags[0x0005] && (!gflags[0x0013]))) goto labelFunc0269_0078;
	message("「聖者！天體對齊即將到來！時間不多了！必須阻止守護者穿過黑門！」");
	say();
	message("「立方體將幫助你找到黑門的位置。只要你擁有它，那些受守護者影響的人將會更願意對你說實話。」");
	say();
	message("「去海盜巢穴 (Buccaneer's Den)。尋找那個叫『Hook』的人。跟那些所謂的友誼會談談。你在那裡要查明他的下落應該不難。我相信你最終一定能找到黑門的位置！祝你好運！」*");
	say();
	gflags[0x0013] = true;
	Func0911(0x00C8);
	abort;
labelFunc0269_0078:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x01D4])) goto labelFunc0269_00AD;
	message("你看到一個似曾相識但令人生畏的身影被關在某種圓柱形的牢房中。他專注地看著你。~~「自從我們在 Exodus 的時代見面以來，已經過了好幾年了！我從來沒有像最近這樣這麼想見到你！你早該來了！我可沒有幾個紀元的時間可以浪費在等你上面！現在有一場危機，不列顛尼亞需要你的幫忙！我需要你的幫忙！整個宇宙都需要你的幫忙！」");
	say();
	UI_add_answer(["早該來了", "危機"]);
	gflags[0x01D4] = true;
	Func0911(0x00C8);
	goto labelFunc0269_00E2;
labelFunc0269_00AD:
	if (!(!gflags[0x01D3])) goto labelFunc0269_00DE;
	message("「你決定好要幫我了嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0269_00D6;
	message("時間領主看起來鬆了一口氣。");
	say();
	message("「那麼我有一個任務要交給你。」");
	say();
	UI_add_answer("任務");
	goto labelFunc0269_00DB;
labelFunc0269_00D6:
	message("「那麼快去吧！」*");
	say();
	abort;
labelFunc0269_00DB:
	goto labelFunc0269_00E2;
labelFunc0269_00DE:
	message("「我有什麼能幫你的嗎，聖者？」時間領主問道。");
	say();
labelFunc0269_00E2:
	if (!gflags[0x01D3]) goto labelFunc0269_00EF;
	UI_add_answer("守護者");
labelFunc0269_00EF:
	if (!gflags[0x0000]) goto labelFunc0269_0102;
	UI_add_answer(["四面體", "以太防禦"]);
labelFunc0269_0102:
	if (!gflags[0x0003]) goto labelFunc0269_0115;
	UI_remove_answer(["四面體", "以太防禦"]);
labelFunc0269_0115:
	if (!gflags[0x0001]) goto labelFunc0269_0128;
	UI_add_answer(["球體", "月之門"]);
labelFunc0269_0128:
	if (!gflags[0x0004]) goto labelFunc0269_013B;
	UI_remove_answer(["球體", "月之門"]);
labelFunc0269_013B:
	if (!(gflags[0x0012] && (!gflags[0x0005]))) goto labelFunc0269_014D;
	UI_add_answer("立方體");
labelFunc0269_014D:
	if (!gflags[0x0002]) goto labelFunc0269_0160;
	UI_add_answer(["立方體", "噪音"]);
labelFunc0269_0160:
	if (!gflags[0x0005]) goto labelFunc0269_0173;
	UI_remove_answer(["立方體", "噪音"]);
labelFunc0269_0173:
	if (!(gflags[0x0211] || var0000)) goto labelFunc0269_0184;
	UI_add_answer("修復魔法");
labelFunc0269_0184:
	if (!gflags[0x0003]) goto labelFunc0269_0191;
	UI_remove_answer("修復魔法");
labelFunc0269_0191:
	converse attend labelFunc0269_03C7;
	case "姓名" attend labelFunc0269_01A7:
	message("「我被稱為時間領主。」");
	say();
	UI_remove_answer("姓名");
labelFunc0269_01A7:
	case "職業" attend labelFunc0269_01B3:
	message("「我確保時間在空間中平穩地流動。」他聳了聳肩。「別要我解釋這個。這超越了凡人的理解範圍。」");
	say();
labelFunc0269_01B3:
	case "早該來了" attend labelFunc0269_01D1:
	message("「是我把紅色的月之門送到你的家鄉，把你引誘到不列顛尼亞的！這耗盡了我所有的力量才讓它運作，但還是出了點差錯。你抵達了 Trinsic ，那不是我的本意。因此，你花在找到我的時間比我預期的要長得多。"  );
	say();
	message("「一旦你到達不列顛尼亞，我唯一能聯絡你的方法就是透過鬼火 。自從創造紅色月之門以來，經過了相當長時間的休息，我設法修復了一個能帶你來找我的月之寶珠位置。我被困在這裡時，無法在時空中自由漫遊，執行我的工作。」");
	say();
	UI_remove_answer("早該來了");
	UI_add_answer("鬼火");
labelFunc0269_01D1:
	case "危機" attend labelFunc0269_021E:
	message("「這片土地正受到來自另一個維度、強大且惡意存在的攻擊，而你是唯一能阻止他的人！我因為守護者施展的一種巫術伎倆而被困在這裡。守護者創造了一個強大的『產生器』，使月之門和你的月之寶珠幾乎無法運作，從而在時空連續體中產生了皺褶。"  );
	say();
	message("「你『必須』釋放我，我們必須合作對抗守護者。你的人民的命運就取決於此。你接受嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0269_01FB;
	message("「那麼我有一個任務要交給你。」");
	say();
	UI_add_answer("任務");
	goto labelFunc0269_0217;
labelFunc0269_01FB:
	message("「那麼你將注定永遠無法完成你的任務。你確定嗎？我再給你一次機會。你想要幫忙嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0269_0212;
	message("「那麼我有一個任務要交給你。」");
	say();
	goto labelFunc0269_0217;
labelFunc0269_0212:
	message("「那麼別了，聖者。現在離開吧。當你意識到幫助我是你的宿命時，你會回來的。」*");
	say();
	abort;
labelFunc0269_0217:
	UI_remove_answer("危機");
labelFunc0269_021E:
	case "任務" attend labelFunc0269_0269:
	message("「我就知道你不會讓我失望。~~「立刻前往 Serpent's Spine 區域。在不列顛城西北方的某處尋找一個地牢的入口。我相信它可能被稱為『Despise 地牢』。這將引導你找到造成問題的產生器。如果我的直覺正確，它會像一個巨大的球體。"  );
	say();
	if (!gflags[0x0001]) goto labelFunc0269_0234;
	message("「你可能已經看過它了。"  );
	say();
labelFunc0269_0234:
	message("「你必須找到摧毀它的方法。"  );
	say();
	if (!(!gflags[0x0001])) goto labelFunc0269_024D;
	message("「它可能有防禦機制。如果你無法征服它，回到這裡向我描述它的防禦。或許我能給你更多幫助。如果你必須再次前往那裡，明智的做法是使用標記術和召回術，以省去你第二次穿過整個地牢的麻煩。」");
	say();
	UI_add_answer("球體");
	goto labelFunc0269_025E;
labelFunc0269_024D:
	message("「如你所知，它的防禦是一個不尋常的月之門。」");
	say();
	UI_add_answer(["球體", "月之門"]);
labelFunc0269_025E:
	gflags[0x01D3] = true;
	UI_remove_answer("任務");
labelFunc0269_0269:
	case "鬼火" attend labelFunc0269_027C:
	message("「異常冷漠的生物。他們過去曾是很好的信使。」");
	say();
	UI_remove_answer("鬼火");
labelFunc0269_027C:
	case "守護者" attend labelFunc0269_028F:
	message("「他是無上邪惡的化身。必須阻止他。他以支配和控制為生。」");
	say();
	UI_remove_answer("守護者");
labelFunc0269_028F:
	case "球體" attend labelFunc0269_02A2:
	message("「那是守護者從他的世界送來的魔法產生器。它的目的是癱瘓月之門。你必須打破它的外部防禦並進入結構內部，拿走漂浮在裡面的較小球體。保留那個小球體，它以後會有用的。」");
	say();
	UI_remove_answer("球體");
labelFunc0269_02A2:
	case "月之門" attend labelFunc0269_02C6:
	message("「球體的外部防禦會將你的隊伍送回空間中的特定位置。在打破這個防禦之前，你無法進入產生器。你必須找到 Nicodemus 的沙漏。~~「如果我的假設正確，球體的內部防禦將會與月之門有關。尋找一個視覺模式來幫助你解開這個謎團。」");
	say();
	gflags[0x01D2] = true;
	UI_remove_answer("月之門");
	UI_add_answer(["沙漏", "Nicodemus"]);
labelFunc0269_02C6:
	case "沙漏" attend labelFunc0269_02EE:
	if (!(!gflags[0x0004])) goto labelFunc0269_02E3;
	message("「這是一個施了魔法的沙漏，如果在球體的位置使用它，將會對你有所幫助。一旦我從產生器的力量中解脫，你就可以使用這個沙漏來召喚我。」");
	say();
	UI_remove_answer("沙漏");
	goto labelFunc0269_02EE;
labelFunc0269_02E3:
	message("「它現在對你沒有用處了，除非你想再次召喚我。」");
	say();
	UI_remove_answer("沙漏");
labelFunc0269_02EE:
	case "Nicodemus" attend labelFunc0269_0301:
	message("「他是一位住在 Yew 森林西邊的法師。」");
	say();
	UI_remove_answer("Nicodemus");
labelFunc0269_0301:
	case "修復魔法" attend labelFunc0269_0329:
	if (!(!gflags[0x0003])) goto labelFunc0269_031E;
	message("時間領主思考了片刻。~~「在不列顛尼亞的法師能再次使用魔法之前，必須修復以太。我建議你去 Moonglow 找 Penumbra 。她或許能幫你解決這個問題。」");
	say();
	UI_add_answer("Penumbra");
	goto labelFunc0269_0322;
labelFunc0269_031E:
	message("「聖者，現在魔法一定能正常運作了。明智地使用它。」");
	say();
labelFunc0269_0322:
	UI_remove_answer("修復魔法");
labelFunc0269_0329:
	case "四面體" attend labelFunc0269_033C:
	message("「那是守護者從他的世界送來的魔法產生器。它控制著法師施展魔法所依賴的以太。就像球體一樣，你必須穿透它的外部防禦，進入結構內部，並拿走漂浮在裡面的較小四面體。」");
	say();
	UI_remove_answer("四面體");
labelFunc0269_033C:
	case "以太防禦" attend labelFunc0269_0353:
	message("「四面體有這樣的防禦並不令人驚訝。在 Moonglow 的 Penumbra 應該能幫你解決。現在很明顯，在你能摧毀球體之前，必須先摧毀四面體。~~「我不確定四面體內部可能會有什麼樣的防禦。它可能很危險。進入它時，請確保裝備齊全。」");
	say();
	gflags[0x0007] = true;
	UI_remove_answer("以太防禦");
labelFunc0269_0353:
	case "Penumbra" attend labelFunc0269_0366:
	message("「她是一位住在 Moonglow 的年長法師。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc0269_0366:
	case "立方體" attend labelFunc0269_0399:
	if (!(!(gflags[0x0004] || gflags[0x0003]))) goto labelFunc0269_0380;
	message("「那是守護者從他的世界送來的魔法產生器。從你所說的來看，聽起來像是他用來向他的追隨者『說話』並魅惑他們服從他意願的裝置。恐怕在你能摧毀它之前，你必須先處理守護者放在不列顛尼亞的其他魔法產生器。」");
	say();
	goto labelFunc0269_0384;
labelFunc0269_0380:
	message("「那是守護者從他的世界送來的第三個也是最後一個魔法產生器。這是他用來向他的追隨者『說話』並魅惑他們服從他意願的裝置。它在 Serpents Hold 附近的一個地牢裡。你必須摧毀它的外部防禦，進入它，並拿走漂浮在裡面的較小立方體。」");
	say();
labelFunc0269_0384:
	UI_remove_answer("立方體");
	if (!(!gflags[0x0002])) goto labelFunc0269_0399;
	UI_add_answer("立方體防禦");
labelFunc0269_0399:
	case "立方體防禦", "噪音" attend labelFunc0269_03B9:
	message("「這個外部防禦可以透過使用覆蓋耳朵的特殊頭盔來克服。頭盔必須由一種叫做『Caddellite』的稀有礦物製成。它存在於隕石中。去找 Lycaeum 附近天文台的 Brion 。他可以給你更多關於尋找這種礦物的建議。~~「內部防禦很可能會涉及守護者本人。不要聽信他可能會告訴你的任何話。」");
	say();
	gflags[0x0008] = true;
	UI_remove_answer(["立方體防禦", "噪音"]);
labelFunc0269_03B9:
	case "告辭" attend labelFunc0269_03C4:
	goto labelFunc0269_03C7;
labelFunc0269_03C4:
	goto labelFunc0269_0191;
labelFunc0269_03C7:
	endconv;
	message("「別了，聖者。祝你好運。」*");
	say();
	return;
}


