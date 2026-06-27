#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func0478 object#(0x478) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0478_0278;
	UI_show_npc_face(0xFF88, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0217]) goto labelFunc0478_003C;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc0478_003C:
	if (!gflags[0x0170]) goto labelFunc0478_0049;
	UI_add_answer("Sprellic");
labelFunc0478_0049:
	if (!(!gflags[0x0172])) goto labelFunc0478_005B;
	message("你看到一個男人散發著精明管理者的外在舉止，與他年輕的外表形成對比。");
	say();
	gflags[0x0172] = true;
	goto labelFunc0478_005F;
labelFunc0478_005B:
	message("Joseph 恭敬地對你點頭。「我能為你效勞嗎？」");
	say();
labelFunc0478_005F:
	converse attend labelFunc0478_0273;
	case "姓名" attend labelFunc0478_0075:
	message("「我的名字是 Joseph 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0478_0075:
	case "職業" attend labelFunc0478_008E:
	message("「目前，我是 Jhelom 的市長。」");
	say();
	UI_add_answer(["市長", "Jhelom"]);
labelFunc0478_008E:
	case "市長" attend labelFunc0478_00A1:
	message("「我做這份工作可能看起來有點年輕，但在這樣一個城鎮，我不僅要管理行政，也經常被要求幫忙維持秩序。我劍與筆並用。」");
	say();
	UI_remove_answer("市長");
labelFunc0478_00A1:
	case "Jhelom" attend labelFunc0478_00BB:
	message("「這座城鎮是個粗獷的地方。對於戰鬥的男男女女來說是個好住處。或許你已經看過我們當地的運動了？」");
	say();
	UI_remove_answer("Jhelom");
	UI_add_answer("運動");
labelFunc0478_00BB:
	case "運動" attend labelFunc0478_00DB:
	message("「哎呀，就是決鬥！每天中午十二點，城鎮廣場就會變成戰場。」");
	say();
	UI_add_answer(["決鬥", "戰場"]);
	UI_remove_answer("運動");
labelFunc0478_00DB:
	case "決鬥" attend labelFunc0478_00EE:
	message("「嗯，聽起來比實際情況糟。這其實只是一種訓練和運動的形式。戰士們用標靶等東西練習。那就是能找到我的地方，我也在那裡保持我自己的技術敏銳。」");
	say();
	UI_remove_answer("決鬥");
labelFunc0478_00EE:
	case "戰場" attend labelFunc0478_010E:
	message("「我誇張了。鎮上許多戰士會聚在一起和訓練假人對打，練習各種戰鬥方法。有時候也會有一些無害的比賽。偶爾會有點粗暴。有些人會為此下注並從中獲利。」");
	say();
	UI_remove_answer("戰場");
	UI_add_answer(["對打", "下注"]);
labelFunc0478_010E:
	case "對打" attend labelFunc0478_0121:
	message("「咳嗯……當然，大多數的決鬥只是點到為止，不是生死決鬥。這種做法有助於克制路過的無賴和流氓。」");
	say();
	UI_remove_answer("對打");
labelFunc0478_0121:
	case "下注" attend labelFunc0478_0134:
	message("「去跟我們鎮上酒館兼旅館的 Daphne 或 Ophelia 談談。」");
	say();
	UI_remove_answer("下注");
labelFunc0478_0134:
	case "友誼會" attend labelFunc0478_0154:
	message("「這就是許多決鬥的原因！有人說友誼會是一堆垃圾，有人說它是唯一的真理。其他人則說那是愚蠢的。當然，作為市長，我在這些事情上保持中立。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["真理", "愚蠢"]);
labelFunc0478_0154:
	case "Elizabeth 和 Abraham" attend labelFunc0478_0180:
	if (!(!gflags[0x0088])) goto labelFunc0478_016E;
	message("「Elizabeth 和 Abraham ？」 Joseph 抓了抓頭。「喔，對了！他們就是剛剛來過的友誼會成員！他們試圖在 Jhelom 建立分會。我還沒決定要怎麼回覆他們。我們可能需要召開鎮民大會來決定是否要在這裡設立分會。這對夫婦說他們要回不列顛城幾天。」");
	say();
	gflags[0x016B] = true;
	goto labelFunc0478_0172;
labelFunc0478_016E:
	message("「Elizabeth 和 Abraham ？」 Joseph 抓了抓頭。「喔，對了！他們是來過這裡的友誼會成員——哎呀，那一定是上個禮拜左右的事了。從那之後我就沒見過他們了。」");
	say();
labelFunc0478_0172:
	UI_add_answer("友誼會");
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc0478_0180:
	case "真理" attend labelFunc0478_01A0:
	message("「傷疤圖書館的領導人 De Snel 要求他的成員參與許多決鬥。這個禮拜他們可能為某個理念而戰，下個禮拜又為相反的立場而戰。」");
	say();
	UI_remove_answer("真理");
	UI_add_answer(["De Snel", "傷疤圖書館"]);
labelFunc0478_01A0:
	case "愚蠢" attend labelFunc0478_01C6:
	if (!var0001) goto labelFunc0478_01BB;
	message("Joseph 看起來有點尷尬。「作為友誼會的一員，我無意冒犯你， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0478_01BF;
labelFunc0478_01BB:
	message("「如果你非得知道我的意見，」他自信地小聲對你說，「我同意那些說友誼會是一堆愚蠢玩意的人。」");
	say();
labelFunc0478_01BF:
	UI_remove_answer("愚蠢");
labelFunc0478_01C6:
	case "De Snel" attend labelFunc0478_01D9:
	message("「De Snel 說他只希望他的學校能有最好的人才。如果他的戰士被打敗了，他會把他們踢出去，並招募勝利者加入傷疤圖書館。」");
	say();
	UI_remove_answer("De Snel");
labelFunc0478_01D9:
	case "傷疤圖書館" attend labelFunc0478_01EC:
	message("「它吸引了來自全不列顛尼亞想要向 De Snel 學習的戰士。他們是一群不守規矩的人。你最好離他們遠點。」");
	say();
	UI_remove_answer("傷疤圖書館");
labelFunc0478_01EC:
	case "Sprellic" attend labelFunc0478_020C:
	message("「是的，我聽說過關於 Sprellic 這個人和對抗傷疤圖書館決鬥的事，但坦白說，我的官方政策是不介入這種私人爭端。」");
	say();
	UI_remove_answer("Sprellic");
	UI_add_answer(["介入", "私人爭端"]);
labelFunc0478_020C:
	case "介入" attend labelFunc0478_022C:
	message("「De Snel 和我有一種默契。他管他的，我管我的。要在這座城鎮維持秩序已經夠難了，我不想破壞這種平衡。如果我介入， De Snel 就會向我挑戰決鬥，如果我被殺了，他對這座城鎮的控制將會是絕對的。」");
	say();
	UI_remove_answer("介入");
	UI_add_answer(["挑戰", "默契"]);
labelFunc0478_022C:
	case "私人爭端" attend labelFunc0478_023F:
	message("「作為市長和維和者，我必須非常謹慎地選擇我的戰鬥。我和傷疤圖書館的成員之間沒有任何好感，但他們可以合理地聲稱自己受了委屈。我在這件事上必須保持中立。就我所見， Sprellic 拿走榮譽旗是自找麻煩。如果你想阻止這場決鬥，你只需要說服他把旗子還回去。」");
	say();
	UI_remove_answer("私人爭端");
labelFunc0478_023F:
	case "默契" attend labelFunc0478_0252:
	message("「相信我，我們經常在一起並不是因為我們是朋友。我們這麼做是為了仔細監視對方。親近你的朋友，但更要親近你的敵人。這是 Jhelom 的生存法則。」");
	say();
	UI_remove_answer("默契");
labelFunc0478_0252:
	case "挑戰" attend labelFunc0478_0265:
	message("「當我說 De Snel 會向我挑戰決鬥時，我並不是在暗示那會是一場公平或光榮的比賽——更可能是我走在某條暗巷時，被他手下的某個惡霸從背後捅一刀。所謂的決鬥只是他用來讓暗殺我這件事聽起來光榮一點的說詞。」");
	say();
	UI_remove_answer("挑戰");
labelFunc0478_0265:
	case "告辭" attend labelFunc0478_0270:
	goto labelFunc0478_0273;
labelFunc0478_0270:
	goto labelFunc0478_005F;
labelFunc0478_0273:
	endconv;
	message("「祝你在我的城市玩得愉快。但如果你沒有戰鬥的膽量，你不該久留。」*");
	say();
labelFunc0478_0278:
	if (!(event == 0x0000)) goto labelFunc0478_0286;
	Func092E(0xFF88);
labelFunc0478_0286:
	return;
}


