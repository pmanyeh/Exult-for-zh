#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0840 0x840 ();
extern void Func092E 0x92E (var var0000);

void Func04F6 object#(0x4F6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04F6_02D2;
	UI_show_npc_face(0xFF0A, 0x0000);
	var0000 = Func0908();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0133] && (!gflags[0x0196]))) goto labelFunc04F6_0047;
	UI_add_answer(["鬼火", "筆記本"]);
labelFunc04F6_0047:
	if (!gflags[0x0196]) goto labelFunc04F6_0054;
	UI_add_answer("答案");
labelFunc04F6_0054:
	if (!(!gflags[0x0189])) goto labelFunc04F6_0066;
	message("你看到一個高大的男人，散發著一種幾乎狡猾、博學的氣息。");
	say();
	gflags[0x0189] = true;
	goto labelFunc04F6_006A;
labelFunc04F6_0066:
	message("「又見面了，」Alagner 說。");
	say();
labelFunc04F6_006A:
	converse attend labelFunc04F6_02CD;
	case "姓名" attend labelFunc04F6_00B4:
	message("這位賢者微笑並點點頭。「我的名字是 Alagner。你又是誰？」");
	say();
	UI_push_answers();
	var0002 = Func090B([var0000, "Avatar"]);
	if (!(var0002 == var0000)) goto labelFunc04F6_009B;
	message("「我明白了。很高興認識你。走開。我很忙。」*");
	say();
	abort;
labelFunc04F6_009B:
	if (!(var0002 == "Avatar")) goto labelFunc04F6_00B4;
	message("Alagner 睜大了眼睛。~~「我的天啊！我認得你！這真是太榮幸了！我有什麼可以為你效勞的嗎？」");
	say();
	UI_pop_answers();
	UI_remove_answer("姓名");
labelFunc04F6_00B4:
	case "職業" attend labelFunc04F6_00CD:
	message("「我的職業——或者說，我的命運——是學習和了解所有事物。我來到 New Magincia 建立我的工作室並實踐此事。」");
	say();
	UI_add_answer(["New Magincia", "工作室"]);
labelFunc04F6_00CD:
	case "New Magincia" attend labelFunc04F6_00E7:
	message("這位賢者嘆了口氣。「我離開不列顛尼亞大陸，來到相對和平安寧的 New Magincia。我在這裡很滿足，因為它與世隔絕，而且免受……不列顛尼亞正在發生的污穢和腐敗的影響。沒有多少人看到這一點。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer("腐敗");
labelFunc04F6_00E7:
	case "工作室" attend labelFunc04F6_0101:
	message("「這是我的工作室。我在這裡細讀我的書籍和論文。偶爾，我會發明一些東西，例如這個水晶球。」");
	say();
	UI_remove_answer("工作室");
	UI_add_answer("水晶球");
labelFunc04F6_0101:
	case "水晶球" attend labelFunc04F6_0114:
	message("「它是一個記錄裝置。如果我忘記了實驗中的一個程序或步驟，我可以看水晶球，看看昨天發生的事。請隨意使用。你會看到我昨天在做什麼。」");
	say();
	UI_remove_answer("水晶球");
labelFunc04F6_0114:
	case "鬼火" attend labelFunc04F6_0127:
	message("「牠們是來自另一個維度極為冷漠的生物。你會以為牠們是你的朋友，但牠們很可能在替別人監視『你』！牠們對善惡沒有忠誠——牠們關心的只是獲取情報——牠們獲取情報的方式有時是光榮的，有時則不然。」");
	say();
	UI_remove_answer("鬼火");
labelFunc04F6_0127:
	case "腐敗" attend labelFunc04F6_0147:
	message("「不列顛尼亞的人民變得粗心且懶惰。他們不尋求真正的知識。他們不尊重他們的土地。他們不尊重彼此。我們土地的資源正在被浪費。礦工正在用危險的材料做實驗。這片土地上存在著一種邪惡，而我不確定它是否就在人民自己身上。」");
	say();
	UI_remove_answer("腐敗");
	UI_add_answer(["真正的知識", "邪惡"]);
labelFunc04F6_0147:
	case "真正的知識" attend labelFunc04F6_015A:
	message("「真正的知識是獲得完全滿足的唯一途徑。」");
	say();
	UI_remove_answer("真正的知識");
labelFunc04F6_015A:
	case "邪惡" attend labelFunc04F6_0193:
	if (!var0001) goto labelFunc04F6_0176;
	message("「我懂了，你是友誼會的成員。你肯定不了解他們的一切。如果你了解，你就不會是會員了！」");
	say();
	UI_add_answer("臥底");
	goto labelFunc04F6_0181;
labelFunc04F6_0176:
	message("「我相信你現在已經聽說過友誼會了。」");
	say();
	UI_add_answer("懷疑");
labelFunc04F6_0181:
	message("「他們狡猾且虛偽。我正在努力獲取這方面的證據。」");
	say();
	UI_remove_answer("邪惡");
	UI_add_answer("證據");
labelFunc04F6_0193:
	case "證據" attend labelFunc04F6_01B3:
	message("「我正在我的筆記本裡記錄這些情報。」");
	say();
	UI_remove_answer("證據");
	UI_add_answer(["情報", "筆記本"]);
labelFunc04F6_01B3:
	case "情報" attend labelFunc04F6_01C6:
	message("「全都在筆記本裡。」");
	say();
	UI_remove_answer("情報");
labelFunc04F6_01C6:
	case "臥底" attend labelFunc04F6_01D9:
	message("「你加入友誼會是為了研究他們的作風？你也懷疑他們？也許你比我想像的更有內涵。我們正朝著同一個目標努力。」");
	say();
	UI_remove_answer("臥底");
labelFunc04F6_01D9:
	case "懷疑" attend labelFunc04F6_01EC:
	message("「你懷疑友誼會有不軌行為？那太好了！你確實很有洞察力！也許我們正朝著同一個目標努力！」");
	say();
	UI_remove_answer("懷疑");
labelFunc04F6_01EC:
	case "筆記本" attend labelFunc04F6_0219:
	message("「它被藏在一個安全的地方，還有我其他珍貴的知識來源。」");
	say();
	if (!(gflags[0x0133] && (!gflags[0x0196]))) goto labelFunc04F6_0212;
	message("Alagner 聽你說你想借那本筆記本。");
	say();
	message("「既然你在執行一項光榮的任務，我想我可以讓你借用它，條件是你必須向我保證你會歸還它，並且如果你能提供證據，證明你渴望了解世界上真正的知識。」");
	say();
	UI_add_answer("了解");
labelFunc04F6_0212:
	UI_remove_answer("筆記本");
labelFunc04F6_0219:
	case "了解" attend labelFunc04F6_0265:
	message("「很好。你知道關於生與死問題的答案嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04F6_0244;
	if (!gflags[0x0196]) goto labelFunc04F6_023D;
	Func0840();
	goto labelFunc04F6_0241;
labelFunc04F6_023D:
	message("「我不相信你知道。」");
	say();
labelFunc04F6_0241:
	goto labelFunc04F6_0248;
labelFunc04F6_0244:
	message("「不，你當然不知道。」");
	say();
labelFunc04F6_0248:
	if (!(!gflags[0x017C])) goto labelFunc04F6_025E;
	message("「只有那些離開今生的靈魂才知道這些事。去尋找被折磨者（The Tortured One）的靈魂。問他關於生與死問題的答案是什麼。當你帶著正確答案回來時，我就會相信你是真心實意地在追求知識。只有在那時，我才會允許你借用筆記本。」");
	say();
	UI_add_answer("被折磨者");
	gflags[0x017C] = true;
labelFunc04F6_025E:
	UI_remove_answer("了解");
labelFunc04F6_0265:
	case "被折磨者" attend labelFunc04F6_027F:
	message("「唉，他是個可憐的靈魂，注定要在他的住所遊蕩直到永恆。」");
	say();
	UI_remove_answer("被折磨者");
	UI_add_answer("住所");
labelFunc04F6_027F:
	case "住所" attend labelFunc04F6_0292:
	message("「去 Skara Brae 找他吧。但要小心。那是一個危險的地方。我還建議你，你必須使用降靈術才能與島上的任何人交談。他們都是不死生物。」");
	say();
	UI_remove_answer("住所");
labelFunc04F6_0292:
	case "答案" attend labelFunc04F6_02BF:
	message("「你已經和被折磨者談過，並知道了關於生與死問題的答案了嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F6_02B4;
	message("「那麼答案是什麼？」");
	say();
	Func0840();
	goto labelFunc04F6_02B8;
labelFunc04F6_02B4:
	message("「在你做到之前不要回來。」");
	say();
labelFunc04F6_02B8:
	UI_remove_answer("答案");
labelFunc04F6_02BF:
	case "告辭" attend labelFunc04F6_02CA:
	goto labelFunc04F6_02CD;
labelFunc04F6_02CA:
	goto labelFunc04F6_006A;
labelFunc04F6_02CD:
	endconv;
	message("「再見。願你的旅程有所收穫。」*");
	say();
labelFunc04F6_02D2:
	if (!(event == 0x0000)) goto labelFunc04F6_02E0;
	Func092E(0xFF0A);
labelFunc04F6_02E0:
	return;
}


