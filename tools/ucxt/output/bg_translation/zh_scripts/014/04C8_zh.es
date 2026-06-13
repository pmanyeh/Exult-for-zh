#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04C8 object#(0x4C8) ()
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

	if (!(event == 0x0001)) goto labelFunc04C8_031B;
	UI_show_npc_face(0xFF38, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0271])) goto labelFunc04C8_0044;
	message("女人慈悲地對你微笑。");
	say();
	gflags[0x0271] = true;
	goto labelFunc04C8_004E;
labelFunc04C8_0044:
	message("Tory 笑了笑並向你伸出手。「哈囉，");
	message(var0000);
	message("。我感覺到你很煩惱。」");
	say();
labelFunc04C8_004E:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C8_0060;
	UI_add_answer("雕像");
labelFunc04C8_0060:
	if (!(gflags[0x0277] && (!gflags[0x0278]))) goto labelFunc04C8_0072;
	UI_add_answer("Riky");
labelFunc04C8_0072:
	converse attend labelFunc04C8_0316;
	case "姓名" attend labelFunc04C8_00A0:
	message("「我是 Tory 女士，");
	message(var0001);
	message("。」");
	say();
	if (!(!gflags[0x0277])) goto labelFunc04C8_0099;
	message("「Riky 的母親，」她啜泣著說。");
	say();
	UI_add_answer("Riky");
labelFunc04C8_0099:
	UI_remove_answer("姓名");
labelFunc04C8_00A0:
	case "職業" attend labelFunc04C8_00B9:
	message("「我的工作是為 Lord John-Paul、以及這座堡壘裡任何需要指導的人提供顧問服務。」");
	say();
	UI_add_answer(["Lord John-Paul", "堡壘"]);
labelFunc04C8_00B9:
	case "Riky" attend labelFunc04C8_0170:
	if (!gflags[0x0277]) goto labelFunc04C8_0140;
	message("「你找到我的孩子了嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C8_0139;
	var0004 = Func0931(0xFE9B, 0x0001, 0x02DA, 0xFE99, 0x0002);
	if (!var0004) goto labelFunc04C8_0109;
	Func0911(0x0064);
	message("「我不知該如何表達我的感激，");
	message(var0001);
	message("。非常感謝你！」~她喜極而泣。「請、請輕輕地把他放回搖籃裡。」");
	say();
	gflags[0x0278] = true;
	goto labelFunc04C8_0136;
labelFunc04C8_0109:
	var0005 = Func0931(0xFE9B, 0x0001, 0x02DA, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc04C8_0131;
	message("「為什麼，那不是我的小 Riky ，");
	message(var0001);
	message("。你帶著別人的孩子。哦，我的男孩會被帶去哪裡？」她哭著說。");
	say();
	goto labelFunc04C8_0136;
labelFunc04C8_0131:
	message("「但是，我沒看到你帶著孩子。你的幽默感很黑暗。請帶著我的男嬰回來時再來！」*");
	say();
	abort;
labelFunc04C8_0136:
	goto labelFunc04C8_013D;
labelFunc04C8_0139:
	message("「拜託，我懇求你，繼續你的追捕！」");
	say();
labelFunc04C8_013D:
	goto labelFunc04C8_0169;
labelFunc04C8_0140:
	gflags[0x0277] = true;
	message("「我可憐的男嬰。他——他有一天晚上被殘忍的鷹身女妖抓走了，她們想要一個屬於自己的孩子。我——我不知道她們把他帶到哪裡去了，但我聽一些騎士提起過，有一群邪惡的鳥身女妖聚集在榮譽神殿 (Shrine of Honor) 周圍。但是，他們還無法擊敗她們。」她吸了吸鼻子。「但是你");
	message(var0001);
	message("，你會幫我找回我的孩子。哦，拜託，你會嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C8_0161;
	message("「我對你的幫助感激不盡！」她看起來高興多了。");
	say();
	goto labelFunc04C8_0169;
labelFunc04C8_0161:
	message("「你不過是個懦夫。走開，懦夫！」");
	say();
	gflags[0x0278] = true;
labelFunc04C8_0169:
	UI_remove_answer("Riky");
labelFunc04C8_0170:
	case "雕像" attend labelFunc04C8_0183:
	message("「嗯，」她似乎若有所思，「當這件事在堡壘這裡對大家提起時，我記得 Jordan 爵士變得有點緊張。或許你應該去跟他談談。」");
	say();
	UI_remove_answer("雕像");
labelFunc04C8_0183:
	case "堡壘" attend labelFunc04C8_01CF:
	message("「我感覺你想知道 Serpent's Hold 這裡的居民。是這樣嗎？」");
	say();
	var0007 = Func090A();
	if (!(!var0007)) goto labelFunc04C8_01A3;
	message("「好吧。如果你改變主意再來找我。」");
	say();
	goto labelFunc04C8_01C8;
labelFunc04C8_01A3:
	message("「身為堡壘的顧問，我可以告訴你許多人的事。你見過治療師或物資商人了嗎？而且，身為一名戰士，你可能會想去拜訪訓練師和軍械士。」");
	say();
	if (!(!var0002)) goto labelFunc04C8_01B5;
	UI_add_answer("Lord John-Paul");
labelFunc04C8_01B5:
	UI_add_answer(["治療師", "軍械士", "訓練師", "補給官"]);
labelFunc04C8_01C8:
	UI_remove_answer("堡壘");
labelFunc04C8_01CF:
	case "Lord John-Paul" attend labelFunc04C8_01ED:
	message("「他是位非凡的領袖。每個人都尊敬他。你只需要問問他的隊長就知道了。」");
	say();
	UI_remove_answer("Lord John-Paul");
	UI_add_answer("隊長");
	var0002 = true;
labelFunc04C8_01ED:
	case "治療師" attend labelFunc04C8_0200:
	message("「Leigh 女士作為一名治療師非常熟練。我還沒見過她失去任何病人。」");
	say();
	UI_remove_answer("治療師");
labelFunc04C8_0200:
	case "軍械士" attend labelFunc04C8_021A:
	message("「嗯。 Richter 爵士最近改變了很多——自從他加入友誼會之後。他似乎變得不那麼有同情心了。」");
	say();
	UI_add_answer("友誼會");
	UI_remove_answer("軍械士");
labelFunc04C8_021A:
	case "酒館老闆" attend labelFunc04C8_022D:
	message("「Denton 爵士是我見過最精明的人。他是唯一一個我無法感知的人。而且我從未見過他脫下盔甲……」她聳了聳肩。");
	say();
	UI_remove_answer("酒館老闆");
labelFunc04C8_022D:
	case "訓練師" attend labelFunc04C8_0247:
	message("「我對 Menion 最不了解。他非常安靜，大部分空閒時間都在打造武器。酒館老闆可能對他了解更多。」");
	say();
	UI_add_answer("酒館老闆");
	UI_remove_answer("訓練師");
labelFunc04C8_0247:
	case "補給官" attend labelFunc04C8_0261:
	message("「她的名字是 Jehanne 女士。她是 Pendaran 爵士的女士，」她眼中閃爍著光芒說道。");
	say();
	UI_add_answer("Pendaran 爵士");
	UI_remove_answer("補給官");
labelFunc04C8_0261:
	case "隊長" attend labelFunc04C8_0281:
	message("「衛兵隊長 Horffe 爵士，是一隻石像鬼。他被兩名人類發現並撫養成為一名勇敢的騎士。他是一位非常忠誠的戰士，很少離開 John-Paul 領主的身邊。」");
	say();
	if (!gflags[0x026E]) goto labelFunc04C8_027A;
	UI_add_answer("石像鬼口音");
labelFunc04C8_027A:
	UI_remove_answer("隊長");
labelFunc04C8_0281:
	case "石像鬼口音" attend labelFunc04C8_0294:
	message("「儘管他是由人類撫養長大的， Horffe 一直在努力維持他的石像鬼認同。透過以與他同胞相同的方式說話，他覺得自己能更好地保留他的背景。」");
	say();
	UI_remove_answer("石像鬼口音");
labelFunc04C8_0294:
	case "Pendaran 爵士" attend labelFunc04C8_02A7:
	message("「他是一個勇敢而熱情的戰士，而且，」她笑了，「他也相當有吸引力。」");
	say();
	UI_remove_answer("Pendaran 爵士");
labelFunc04C8_02A7:
	case "友誼會" attend labelFunc04C8_02C1:
	message("「友誼會在這裡沒有分部，但我們的兩名騎士是成員： Richter 爵士和 Pendaran 爵士。我知道他們也有意讓 Jordan 爵士加入。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer("Jordan 爵士");
labelFunc04C8_02C1:
	case "Jordan 爵士" attend labelFunc04C8_0308:
	message("「他是個奇蹟。儘管雙眼失明，他戰鬥的敏捷度卻令人驚訝。事實上，他也喜歡玩弄機械物品，而失去視力似乎也並未影響他。~~不過，我感覺他最近有非常明顯的改變，非常像 Richter 爵士那樣。他會是個有趣的交談對象。你可以在 Iolo's South 找到他。」*");
	say();
	var0008 = Func08F7(0xFFFF);
	if (!var0008) goto labelFunc04C8_0301;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 自豪地笑著。~~「我的店自從你上次來之後，呃，成長了一些，");
	message(var0000);
	message("。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF38, 0x0000);
labelFunc04C8_0301:
	UI_remove_answer("Jordan 爵士");
labelFunc04C8_0308:
	case "告辭" attend labelFunc04C8_0313:
	goto labelFunc04C8_0316;
labelFunc04C8_0313:
	goto labelFunc04C8_0072;
labelFunc04C8_0316:
	endconv;
	message("「我感覺你在其他地方有緊急約會。向你道別。」*");
	say();
labelFunc04C8_031B:
	if (!(event == 0x0000)) goto labelFunc04C8_0329;
	Func092E((long)0xFF38);
labelFunc04C8_0329:
	return;
}


