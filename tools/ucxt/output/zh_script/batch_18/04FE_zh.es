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
	message("「哦，別跟我裝蒜了，聖者。你很清楚獨角獸的目的。~~我們是萬無一失的童貞探測器！」");
	say();
	UI_remove_answer("目的");
	UI_add_answer("童貞探測器");
labelFunc04FE_00BE:
	case "巫師" attend labelFunc04FE_00D8:
	message("「我不記得那位巫師的姓名了，因為那已經是很久以前的事了，但只要知道他是個十足的混蛋就夠了。總之，出於某種原因，我們氏族的酋長，當時是一頭名叫 Sharp-Hoof 的蠢驢，決定與其理會這位巫師合法且正確執行的召喚儀式，不如帶著獸群去追逐一群非常漂亮的小母馬。」");
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
	message("「我們自然精靈過去以好色聞名，而這位巫師召喚我們是為了幫他勾引某個少女。當我們放他鴿子時……嗯，這麼說吧，他是一個在說服自己的『魔杖』發揮作用方面有問題的魔術師。總之，為了一種可悲的企圖，想要支撐他那衰退的男子氣概，他用一個非常強大的貞操詛咒毀了我們。」");
	say();
	UI_remove_answer("詛咒");
	UI_add_answer("貞操");
labelFunc04FE_013F:
	case "貞操" attend labelFunc04FE_0152:
	message("「那是一個可怕的詛咒。首先，它驅使我們殺死了我們氏族中所有的女性成員。然後，它讓我們染上了一種讓我們聞名於世的特殊敏感。」");
	say();
	UI_remove_answer("貞操");
labelFunc04FE_0152:
	case "童貞探測器" attend labelFunc04FE_016C:
	message("「沒錯。我們這個種族的成員對所有形式的性能量都非常敏感，以至於我們只能容忍與那些還沒有任何此類繁衍——或者如果你喜歡稱之為娛樂經驗的人，進行身體接觸。」");
	say();
	UI_remove_answer("童貞探測器");
	UI_add_answer("敏感");
labelFunc04FE_016C:
	case "敏感" attend labelFunc04FE_018C:
	message("「是的，我發現與任何不是處子之身的人進行身體接觸都非常令人不快，只要有可能我就會盡量避免。」");
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
	message("「是的，你還沒開口，我就能猜出我問題的答案了。你保持童貞是出於選擇還是因為環境？」");
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
	message("「如果你只關心滿足你的情慾，那麼你應該在Buccaneer's Den的浴池裡找到滿足感。但一定要帶足錢。」");
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
	UI_remove_answer("marriages");
	if (!gflags[0x02E0]) goto labelFunc04FE_0396;
	UI_add_answer("男性童貞測試");
	goto labelFunc04FE_039D;
labelFunc04FE_0396:
	UI_add_answer("傻瓜");
labelFunc04FE_039D:
	UI_remove_answer("bachelorhood");
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
	message("「哦，如果他願意冒著生命危險來到這裡證明他的貞潔，那她一定是個非常迷人的少女。」");
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


