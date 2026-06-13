#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047C object#(0x47C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc047C_0448;
	UI_show_npc_face(0xFF84, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = false;
	var0003 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0004 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0005 = UI_is_dead(UI_get_npc_object(0xFF81));
	if (!(var0003 && (var0004 && var0005))) goto labelFunc047C_005F;
	var0002 = true;
labelFunc047C_005F:
	if (!(gflags[0x0168] && (!gflags[0x016A]))) goto labelFunc047C_0071;
	UI_add_answer("我有假旗幟");
labelFunc047C_0071:
	if (!(var0002 || gflags[0x016A])) goto labelFunc047C_0089;
	UI_add_answer("你現在安全了");
	UI_remove_answer("我有假旗幟");
labelFunc047C_0089:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0176])) goto labelFunc047C_00B6;
	message("你看到一個骨瘦如柴且看起來膽小的男人，他恐懼地看著你。");
	say();
	message("「喔，天啊！」他大叫。「這次真的是聖者！請不要傷害我，聖者！」");
	say();
	gflags[0x0176] = true;
	UI_add_answer("這次");
	goto labelFunc047C_00C0;
labelFunc047C_00B6:
	message("「再次問候你，");
	message(var0000);
	message("，」Sprellic 說。");
	say();
labelFunc047C_00C0:
	if (!gflags[0x0186]) goto labelFunc047C_00DB;
	if (!(!gflags[0x0170])) goto labelFunc047C_00DB;
	if (!(!gflags[0x016A])) goto labelFunc047C_00DB;
	UI_add_answer("冠軍戰士");
labelFunc047C_00DB:
	converse attend labelFunc047C_0443;
	case "姓名" attend labelFunc047C_00F1:
	message("「我的名字是 Sprellic。」");
	say();
	UI_remove_answer("姓名");
labelFunc047C_00F1:
	case "職業" attend labelFunc047C_010A:
	message("「我是 Jhelom 這裡舖位與凳子(Bunk and Stool)的老闆。」");
	say();
	UI_add_answer(["舖位與凳子", "Jhelom"]);
labelFunc047C_010A:
	case "舖位與凳子" attend labelFunc047C_0143:
	message("「這是當地的一家旅店，所有來自傷痕圖書館的戰士都會來這裡喝酒。如果不是 Ophelia 和 Daphne，他們每晚都會把這地方拆了。」");
	say();
	if (!(!(gflags[0x016A] || var0002))) goto labelFunc047C_012C;
	message("「但那已經不重要了，因為我很快就會死了。」");
	say();
	UI_add_answer("死了？");
labelFunc047C_012C:
	UI_remove_answer("舖位與凳子");
	UI_add_answer(["傷痕圖書館", "Ophelia", "Daphne"]);
labelFunc047C_0143:
	case "Jhelom" attend labelFunc047C_0156:
	message("「這是一個戰士們透過血腥決鬥來打發時間的城鎮。這地方不適合我。我真不該離開 Minoc 的！」");
	say();
	UI_remove_answer("Jhelom");
labelFunc047C_0156:
	case "傷痕圖書館" attend labelFunc047C_0169:
	message("「那是 De Snel 大師經營的戰士俱樂部！是全不列顛尼亞最兇猛、最無情的戰士們的第二個家。」");
	say();
	UI_remove_answer("傷痕圖書館");
labelFunc047C_0169:
	case "Ophelia" attend labelFunc047C_017C:
	message("「Ophelia 是我的一位酒館女侍。她很漂亮。如果 Daphne 無法應付那些變得不守規矩的顧客，Ophelia 會簡單地用魅力迷住他們。」");
	say();
	UI_remove_answer("Ophelia");
labelFunc047C_017C:
	case "Daphne" attend labelFunc047C_018F:
	message("「Daphne 是我的一位酒館女侍。她，呃，體型相當龐大。如果 Ophelia 無法迷住那些變得不守規矩的顧客，Daphne 就會把他們摔倒在地。」");
	say();
	UI_remove_answer("Daphne");
labelFunc047C_018F:
	case "這次", "死了？" attend labelFunc047C_01B2:
	message("「說來話長。我可能還沒說完就死了。」");
	say();
	UI_remove_answer(["這次", "死了？"]);
	UI_add_answer("故事");
labelFunc047C_01B2:
	case "故事" attend labelFunc047C_01F3:
	message("「我的故事很離奇。這可能會讓你感到不安和困惑。你確定你想聽嗎？」");
	say();
	var0006 = Func090A();
	if (!(!var0006)) goto labelFunc047C_01D9;
	message("「好吧，那麼希望我曾對你有所幫助。永遠別了，");
	message(var0000);
	message("。」*");
	say();
	abort;
	goto labelFunc047C_01EC;
labelFunc047C_01D9:
	message("「這一切都從前天晚上開始。我讓 Ophelia 和 Daphne 放了一晚的假。一個陌生人來到了我的旅店……一個非常古怪的陌生人。");
	say();
	message("「他……他聲稱他是——聖者——！");
	say();
	message("「……而且我還相信了他，這證明了我有多容易上當！」");
	say();
	UI_add_answer("陌生人");
labelFunc047C_01EC:
	UI_remove_answer("故事");
labelFunc047C_01F3:
	case "陌生人" attend labelFunc047C_0224:
	message("「他的財富似乎是他唯一比古怪更勝一籌的地方。他訂下了旅店裡的兩個房間，這樣他就能試睡每張床，然後自己決定哪一張最舒服。至於食物，他簡直是飢不擇食。");
	say();
	if (!var0001) goto labelFunc047C_020C;
	message("「無意冒犯，但他也是友誼會的成員！」");
	say();
	goto labelFunc047C_0210;
labelFunc047C_020C:
	message("「他也是友誼會的成員！」");
	say();
labelFunc047C_0210:
	UI_remove_answer("陌生人");
	UI_add_answer(["古怪", "食物"]);
labelFunc047C_0224:
	case "古怪" attend labelFunc047C_0237:
	message("「我擔心這個陌生人根本不是他所聲稱的那個人。我是一個巨大且可怕的騙局的受害者。」");
	say();
	UI_remove_answer("古怪");
labelFunc047C_0237:
	case "食物" attend labelFunc047C_0257:
	message("「這個陌生人點了菜單上每一種食物和飲料。這樣如果他想吃什麼，食物就在那裡。我做了好幾個小時的飯。但接著情況變得更糟了。他去睡覺了。」");
	say();
	UI_remove_answer("食物");
	UI_add_answer(["做飯", "睡覺"]);
labelFunc047C_0257:
	case "做飯" attend labelFunc047C_026A:
	message("「當然，他留下的大部分食物都沒吃！一旦食物開始變壞，我就不得不把它們送人！」");
	say();
	UI_remove_answer("做飯");
labelFunc047C_026A:
	case "睡覺" attend labelFunc047C_0284:
	message("「他上床睡覺後，抱怨說太冷了。我給他拿了越來越多的毯子，但還是不夠。最後，他把旅店裡所有的毯子都拿走了。而且他還是覺得冷！」");
	say();
	UI_remove_answer("睡覺");
	UI_add_answer("冷");
labelFunc047C_0284:
	case "冷" attend labelFunc047C_02A4:
	message("「在絕望中，我跑到街上。那是半夜。所有的商店都關門了。我唯一能找到的，就是一塊掛在牆上的舊掛毯。所以我就把它拿了下來。」");
	say();
	UI_remove_answer("冷");
	UI_add_answer(["夜晚", "掛毯"]);
labelFunc047C_02A4:
	case "夜晚" attend labelFunc047C_02B7:
	message("「其實，現在回想起來，在夜晚的空氣中外出，那是一個相當宜人的夜晚。唉，當時我滿腦子只想著為那位陌生人服務能賺到一筆可觀的錢。我真悲哀！」");
	say();
	UI_remove_answer("夜晚");
labelFunc047C_02B7:
	case "掛毯" attend labelFunc047C_02D7:
	message("「我接下來記得的是，有一個憤怒的女人追著我。不知為何她想殺了我！我設法逃脫了她，回到旅店，用掛毯把陌生人蓋上。最後他終於睡著了。」");
	say();
	UI_remove_answer("掛毯");
	UI_add_answer(["憤怒的女人", "睡著"]);
labelFunc047C_02D7:
	case "憤怒的女人" attend labelFunc047C_02EA:
	message("「其實，我以前見過這個憤怒的女人。她偶爾會光顧我的店。不幸的是，這是我們第一次正式打交道。」");
	say();
	UI_remove_answer("憤怒的女人");
labelFunc047C_02EA:
	case "睡著" attend labelFunc047C_030A:
	message("「我也睡著了，只是我睡過頭了。當我醒來時，客人已經走了。他沒付帳單，還拿走了所有的毯子，甚至那塊掛毯。在我能去找他之前，我有了一位訪客。」");
	say();
	UI_remove_answer("睡著");
	UI_add_answer(["走了", "訪客"]);
labelFunc047C_030A:
	case "走了" attend labelFunc047C_031D:
	message("「就像我說的，我被一個專業人士騙了。毫無疑問是個犯罪大師——而且他現在還消遙法外！」");
	say();
	UI_remove_answer("走了");
labelFunc047C_031D:
	case "訪客" attend labelFunc047C_033D:
	message("「是前天晚上追我的那個女人。她的名字叫 Syria。她說我從傷痕圖書館的牆上偷走了榮譽旗幟。她還向我挑戰一場生死決鬥，除非我把旗幟還回去。而且她比我高大多了！當我試圖解釋我無法還回去時，她打了我。很痛。非常痛！」");
	say();
	UI_remove_answer("訪客");
	UI_add_answer(["打", "決鬥"]);
labelFunc047C_033D:
	case "打" attend labelFunc047C_0350:
	message("「我必須說 Syria 女士這點。她生氣的時候非常漂亮……至少，她打了我之後，在我腦海中盤旋的她的幻影是非常漂亮的。可悲的是，我醒了。」");
	say();
	UI_remove_answer("打");
labelFunc047C_0350:
	case "決鬥" attend labelFunc047C_037E:
	message("「那天晚些時候，我遇到了一個名叫 Vokes 的男人。他是傷痕圖書館的一名戰士。他要求我歸還榮譽旗幟，當我試圖告訴他我辦不到時，他打了我。然後他向我挑戰一場生死決鬥，要在我和 Syria 的決鬥之後馬上進行。");
	say();
	message("「Vokes 離開後，我遇到了一個名叫 Timmons 的男人。他要求我將榮譽旗幟歸還給傷痕圖書館。我告訴他我辦不到，他也向我挑戰一場生死決鬥。我告訴他我很忙，但他把挑戰安排在我和 Vokes 的決鬥之後馬上進行。");
	say();
	message("「Timmons、Vokes 和 Syria 是 Jhelom 最強悍的三名戰士。我連對抗他們其中一個都無法存活，更何況是三個。那個神秘的客人和榮譽旗幟都不知去向。就連現在，我的酒館女侍們都在拿我的死法下注！」");
	say();
	UI_remove_answer("決鬥");
	UI_add_answer(["Timmons", "Vokes", "Syria", "死法"]);
labelFunc047C_037E:
	case "Timmons" attend labelFunc047C_0391:
	message("「Timmons 最近才來到 Jhelom。關於他，我無法告訴你更多了。」");
	say();
	UI_remove_answer("Timmons");
labelFunc047C_0391:
	case "Vokes" attend labelFunc047C_03A4:
	message("「他是一個無所畏懼的戰士，珍惜任何戰鬥的機會。要小心他。」");
	say();
	UI_remove_answer("Vokes");
labelFunc047C_03A4:
	case "Syria" attend labelFunc047C_03B7:
	message("「她並沒有看起來那麼糟。毫無疑問，那個女人脾氣不好。但我確信，一旦你有機會了解她，她其實是相當不錯的。如果不是這些悲慘的情況，我們也許有機會更進一步認識彼此。」");
	say();
	UI_remove_answer("Syria");
labelFunc047C_03B7:
	case "死法" attend labelFunc047C_03D5:
	message("「我唯一的生存希望是找到一位能與 Jhelom 最兇猛戰士對抗的冠軍戰士。」");
	say();
	gflags[0x0186] = true;
	UI_remove_answer("死法");
	UI_add_answer("冠軍戰士");
labelFunc047C_03D5:
	case "冠軍戰士" attend labelFunc047C_0403:
	message("「你願意成為我的冠軍戰士嗎，聖者？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc047C_03F8;
	message("Sprellic 充滿感激地跪在你面前。「聖者，你救了我的命！我對你感激不盡！」");
	say();
	gflags[0x0170] = true;
	goto labelFunc047C_03FC;
labelFunc047C_03F8:
	message("「喔，好吧。我別無選擇，只能問問。」");
	say();
labelFunc047C_03FC:
	UI_remove_answer("冠軍戰士");
labelFunc047C_0403:
	case "你現在安全了" attend labelFunc047C_041E:
	message("你告訴 Sprellic 情況已經解決了，以及事情是如何解決的。");
	say();
	message("Sprellic 幾乎要親吻你的腳了。");
	say();
	message("「我該如何感謝你？你是我見過最高尚的人！我將永遠欠你一份情！謝謝你！」");
	say();
	UI_remove_answer("你現在安全了");
labelFunc047C_041E:
	case "我有假旗幟" attend labelFunc047C_0435:
	message("你告訴 Sprellic，Kliftin 為你做了一面假旗幟。");
	say();
	message("「多麼巧妙啊！拜託你！請盡快把它交給 Syria！感謝你費心幫我！」");
	say();
	UI_remove_answer("我有假旗幟");
labelFunc047C_0435:
	case "告辭" attend labelFunc047C_0440:
	goto labelFunc047C_0443;
labelFunc047C_0440:
	goto labelFunc047C_00DB;
labelFunc047C_0443:
	endconv;
	message("「祝你有個美好的一天，聖者。」");
	say();
labelFunc047C_0448:
	if (!(event == 0x0000)) goto labelFunc047C_0456;
	Func092E(0xFF84);
labelFunc047C_0456:
	return;
}


