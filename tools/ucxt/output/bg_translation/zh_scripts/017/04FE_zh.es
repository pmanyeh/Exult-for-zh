#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);

void Func04FE object#(0x4FE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0000)) goto labelFunc04FE_0009;
	abort;
labelFunc04FE_0009:
	UI_show_npc_face(0xFF02, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x02CD])) goto labelFunc04FE_002B;
	message("你看到一隻大小和形狀都像馬的生物。牠的頭上長著一根筆直的角。牠用閃爍著智慧光芒的眼睛看著你。");
	say();
	gflags[0x02CD] = true;
	goto labelFunc04FE_002F;
labelFunc04FE_002B:
	message("「我再次向你致敬，聖者，」獨角獸 Lasher 說。");
	say();
labelFunc04FE_002F:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc04FE_003F:
	converse attend labelFunc04FE_0414;
	case "姓名" attend labelFunc04FE_0055:
	message("這隻生物說話了。「我的姓名是 Lasher。」");
	say();
	UI_remove_answer("姓名");
labelFunc04FE_0055:
	case "職業" attend labelFunc04FE_006E:
	message("Lasher 看著你眨了眨眼。「得了吧，聖者！我不靠人類社會的規則生活。我有我的身分，也就是獨角獸。然後我有我的目的，這完全是另一回事。」");
	say();
	UI_add_answer(["獨角獸", "目的"]);
labelFunc04FE_006E:
	case "獨角獸" attend labelFunc04FE_00A4:
	message("Lasher 驚呆地看著你。「告訴我，你知道獨角獸是什麼嗎？」");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc04FE_008E;
	message("Lasher 茫然地看著你。牠的嘴巴張得大大的。「很好。那我就告訴你獨角獸是什麼。");
	say();
	goto labelFunc04FE_0092;
labelFunc04FE_008E:
	message("Lasher 悲傷地搖了搖頭。「不，你只是『以為』你知道獨角獸是什麼，但我要告訴你真相。");
	say();
labelFunc04FE_0092:
	message("「獨角獸是自然精靈家族的一員，很多很多年前，我們曾被召喚去幫助一位非常強大的巫師。」");
	say();
	UI_remove_answer("獨角獸");
	UI_add_answer("巫師");
labelFunc04FE_00A4:
	case "目的" attend labelFunc04FE_00BE:
	message("「哦，別跟我裝蒜了，聖者。你很清楚獨角獸的目的。~~我們是萬無一失的『童貞探測器』！」");
	say();
	UI_remove_answer("目的");
	UI_add_answer("童貞探測器");
labelFunc04FE_00BE:
	case "巫師" attend labelFunc04FE_00D8:
	message("「我不記得那位巫師的姓名了，因為那已經是很久以前的事了，但只要知道他是個十足的混蛋就夠了。總之，出於某種原因，我們氏族的酋長，當時是一頭名叫 Sharp-Hoof 的蠢驢決定，與其回應這位巫師合法，且正確執行的召喚儀式，不如帶著大家去追逐一群非常漂亮的小母馬。」");
	say();
	UI_remove_answer("巫師");
	UI_add_answer("Sharp-Hoof");
labelFunc04FE_00D8:
	case "Sharp-Hoof" attend labelFunc04FE_00F2:
	message("「我說到哪了？哦，對了，Sharp-Hoof！第二天早上，在我們和那些小母馬尋歡作樂之後，這位巫師又召喚了我們。這次 Sharp-Hoof 意識到我們最好還是回應，結果我們後悔莫及！巫師非常生氣！而且，嗯，我只能說我們與這種人的協議是非常、非常具有約束力的。」");
	say();
	UI_remove_answer("Sharp-Hoof");
	UI_add_answer("約束");
labelFunc04FE_00F2:
	case "約束" attend labelFunc04FE_0112:
	message("「我們不僅被迫為這位巫師服務一千年，他還在我們身上下了一個可怕的詛咒。」");
	say();
	UI_remove_answer("約束");
	UI_add_answer(["服務", "詛咒"]);
labelFunc04FE_0112:
	case "服務" attend labelFunc04FE_0125:
	message("「結果是，我們實際上並沒有為那位巫師服務一千年。他在給我們下詛咒幾週後，就縮短了時間。」Lasher 諷刺地哼了一聲，「我真是傷心欲絕。」");
	say();
	UI_remove_answer("服務");
labelFunc04FE_0125:
	case "詛咒" attend labelFunc04FE_013F:
	message("「我們自然精靈過去在坊間可是以『多情』著稱，而那名巫師大費周章召喚我們，不過是想藉由我們的天賦去誘拐某個無辜少女。當我們放了他鴿子後……呵呵，怎麼說呢？這位大法師在控制他身上那根『魔杖』的威能時，似乎遇上了相當嚴峻的『障礙』。總之，為了挽救他那可悲又日益衰退的『男子氣概』，他惱羞成怒，用了一個極其惡毒的『貞操詛咒』，徹底毀了我們的自由。」");
	say();
	UI_remove_answer("詛咒");
	UI_add_answer("貞操");
labelFunc04FE_013F:
	case "貞操" attend labelFunc04FE_0152:
	message("「那是一個極其歹毒的詛咒。它先是奪走了我們的心智，驅使我們親手屠殺了氏族中所有的女性同胞……接著，又在我們身上烙下了一種病態的『敏感』——那種如今讓我們惡名昭彰、求死不能的極端感知。」");
	say();
	UI_remove_answer("貞操");
labelFunc04FE_0152:
	case "童貞探測器" attend labelFunc04FE_016C:
	message("「正是如此。我們這族的族人如今對任何形式的『性能量』都敏銳至極，這導致我們在肉體接觸上有了近乎病態的苛求——我們唯一能容忍的，只有那些在繁衍——或者隨你怎麼稱呼那種娛樂經驗——上，依舊潔白無瑕、毫無經驗之人的觸碰。」");
	say();
	UI_remove_answer("童貞探測器");
	UI_add_answer("敏感");
labelFunc04FE_016C:
	case "敏感" attend labelFunc04FE_018C:
	message("「沒錯。我發現與任何非處子之身的人發生肉體接觸，都會帶來令人作嘔的痛苦與不適……因此只要一有機會，我都會竭盡所能地逃避。」");
	say();
	UI_remove_answer("敏感");
	UI_add_answer(["避免", "不愉快"]);
labelFunc04FE_018C:
	case "避免" attend labelFunc04FE_028D:
	message("「是的，嗯，我不想跟你談得這麼私密，但如果你不介意的話，你是處子之身嗎？」");
	say();
	var0002 = Func090A();
	if (!(!var0002)) goto labelFunc04FE_0260;
	if (!(gflags[0x029D] || (gflags[0x029C] || gflags[0x029E]))) goto labelFunc04FE_01BA;
	message("「我就知道！」Lasher 開始緊張地踱步。「如果你不介意退後一點，我將不勝感激。」");
	say();
	goto labelFunc04FE_025D;
labelFunc04FE_01BA:
	message("Lasher 緩慢地搖了搖頭。「老實說，你不需要為了給我留下好印象而吹噓，也不用害怕任何形式的口頭懲罰。順便說一下，我肩胛骨中間有點癢。你介意幫我抓一下嗎？」Lasher 向你伸直身體。「非常感謝。」");
	say();
	var0003 = UI_is_pc_female();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFD);
	var0006 = Func08F7(0xFFFC);
	if (!(!var0003)) goto labelFunc04FE_025D;
	if (!var0004) goto labelFunc04FE_020C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「這沒什麼好丟臉的，大人，」Iolo 表情非常嚴肅地說。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_020C:
	if (!var0005) goto labelFunc04FE_0231;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「不，這完全可以理解。你最近太忙了，」Shamino 說。你感覺到他正努力保持嚴肅。*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_0231:
	if (!var0006) goto labelFunc04FE_0256;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「你為什麼不去摸摸這匹漂亮的小馬呢。我們會這麼做的，但我認為牠更喜歡你。」說完，你聽到一陣爆笑和咯咯的笑聲。*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_0256:
	UI_add_answer("童貞");
labelFunc04FE_025D:
	goto labelFunc04FE_0286;
labelFunc04FE_0260:
	if (!(gflags[0x029D] || (gflags[0x029C] || gflags[0x029E]))) goto labelFunc04FE_0275;
	message("「請原諒，但也許你該去Lycaeum，找人幫你查一下『童貞』這個詞的定義。麻煩你退後一點好嗎？！你讓我感到緊張。」");
	say();
	goto labelFunc04FE_0286;
labelFunc04FE_0275:
	message("「是的，你還沒開口，我就能知道答案了。你保持童貞…是出於選擇，還是因為……環境？」");
	say();
	UI_add_answer(["選擇", "環境"]);
labelFunc04FE_0286:
	UI_remove_answer("避免");
labelFunc04FE_028D:
	case "童貞" attend labelFunc04FE_02AD:
	message("「當然，聖者，你知道你每次回到不列顛尼亞時，都會奇蹟般地恢復你的童貞！從那以後，你保持童貞是出於選擇還是環境？」");
	say();
	UI_remove_answer("童貞");
	UI_add_answer(["選擇", "環境"]);
labelFunc04FE_02AD:
	case "選擇" attend labelFunc04FE_02C6:
	message("「嗯，我相信你總有一天會找到合適的人的。」");
	say();
	UI_remove_answer(["選擇", "環境"]);
labelFunc04FE_02C6:
	case "環境" attend labelFunc04FE_02E6:
	message("「那太糟糕了，我非常抱歉。我很樂意幫助你，但那已經不再是我的目的了。」");
	say();
	UI_remove_answer(["環境", "選擇"]);
	UI_add_answer("幫助");
labelFunc04FE_02E6:
	case "幫助" attend labelFunc04FE_0306:
	message("「哦，我不知道。自從我親身參與這種事情以來，已經過了很長的時間。你是在尋求愛，還是在尋求情慾？」");
	say();
	UI_add_answer(["愛", "情慾"]);
	UI_remove_answer("幫助");
labelFunc04FE_0306:
	case "愛" attend labelFunc04FE_031F:
	message("「嗯，愛通常是一個非常難以捉摸的獵物。我想你可以去 Cove 城碰碰運氣。那是一個戀人之城，至少我聽說是這樣。」");
	say();
	UI_remove_answer(["愛", "情慾"]);
labelFunc04FE_031F:
	case "情慾" attend labelFunc04FE_0338:
	message("「如果你只關心滿足你的情慾，那麼你應該在海盜巢穴 (Buccaneer's Den)的浴池裡找到滿足感。但一定要帶足錢。」");
	say();
	UI_remove_answer(["愛", "情慾"]);
labelFunc04FE_0338:
	case "不愉快" attend labelFunc04FE_0352:
	message("「事實上，身為童貞探測器，我最無法忍受的部分是，必須應某個聰明的法師、吟遊詩人或英雄的要求，讓他們未來的妻子試著觸摸我。」");
	say();
	UI_remove_answer("不愉快");
	UI_add_answer("妻子");
labelFunc04FE_0352:
	case "妻子" attend labelFunc04FE_0373:
	message("「這是一場悲劇。男人總是會緊張，然後給婚姻加上一個條件：他的新娘必須是處女。他們叫我來測試她，而男人的單身生活也因此得到了緩刑。我毀掉的婚約比黑死病還多。」");
	say();
	UI_remove_answer("妻子");
	if (!(!gflags[0x02D1])) goto labelFunc04FE_0373;
	UI_add_answer("單身");
labelFunc04FE_0373:
	case "單身" attend labelFunc04FE_03A4:
	message("「我敢打賭，就像那些為了同樣原因在下面徘徊尋找我的傻瓜一樣。好吧，他們可以打消這個念頭了。我喜歡女人，我真的喜歡，坦白說，我厭倦了被用作羞辱她們的工具。」");
	say();
	UI_remove_answer("婚約");
	if (!gflags[0x02E0]) goto labelFunc04FE_0396;
	UI_add_answer("男性童貞測試");
	goto labelFunc04FE_039D;
labelFunc04FE_0396:
	UI_add_answer("傻瓜");
labelFunc04FE_039D:
	UI_remove_answer("單身");
labelFunc04FE_03A4:
	case "傻瓜" attend labelFunc04FE_03BB:
	message("「我是一個魔法生物。只要我願意，我可以在下面避開他們。他們在抓到我之前就會老死。我拒絕協助他們逃避某種違背承諾的責任。如果你看到他們，你可以把這話告訴他們。」");
	say();
	gflags[0x02D0] = true;
	UI_remove_answer("傻瓜");
labelFunc04FE_03BB:
	case "男性童貞測試" attend labelFunc04FE_03D5:
	message("「他們想要為一個即將結婚的男人進行童貞測試？！」Lasher 發出了一陣長長的驚訝笑聲。「在我的有生之年，我從未聽說過這樣的事！」");
	say();
	UI_remove_answer("男性童貞測試");
	UI_add_answer("結婚");
labelFunc04FE_03D5:
	case "結婚" attend labelFunc04FE_03EF:
	message("「哦，如果他願意冒著生命危險，來到這裡證明他的貞潔，那她一定是個非常迷人的少女。」");
	say();
	UI_remove_answer("結婚");
	UI_add_answer("迷人的少女");
labelFunc04FE_03EF:
	case "迷人的少女" attend labelFunc04FE_0406:
	message("「這男孩一定是對這位少女神魂顛倒了。我想我應該去進一步調查這件事。如果他像你說的那麼有誠意，也許我會幫幫這個可憐的小夥子。」");
	say();
	UI_remove_answer("迷人的少女");
	gflags[0x02D1] = true;
labelFunc04FE_0406:
	case "告辭" attend labelFunc04FE_0411:
	goto labelFunc04FE_0414;
labelFunc04FE_0411:
	goto labelFunc04FE_003F;
labelFunc04FE_0414:
	endconv;
	message("「祝你好運，聖者。」*");
	say();
	return;
}


