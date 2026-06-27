#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0876 0x876 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04C7 object#(0x4C7) ()
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

	if (!(event == 0x0001)) goto labelFunc04C7_0431;
	UI_show_npc_face(0xFF39, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFC);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C7_0069;
	if (!gflags[0x0275]) goto labelFunc04C7_004F;
	UI_add_answer("幫助");
labelFunc04C7_004F:
	if (!gflags[0x0275]) goto labelFunc04C7_0069;
	if (!gflags[0x0259]) goto labelFunc04C7_0069;
	UI_add_answer("得到碎片");
	UI_remove_answer("幫助");
labelFunc04C7_0069:
	if (!var0002) goto labelFunc04C7_0092;
	message("「向你致敬， Dupre 爵士。你又回來為 Brommer 研究葡萄酒了嗎？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「哎呀，啊，是的，我的好朋友， Denton 。我，呃，還在進行那項研究。」他轉向你並聳聳肩，難為情地笑著。");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF39, 0x0000);
labelFunc04C7_0092:
	if (!(!gflags[0x0270])) goto labelFunc04C7_00A4;
	message("你面前的男人似乎茫然地盯著你。");
	say();
	gflags[0x0270] = true;
	goto labelFunc04C7_00AE;
labelFunc04C7_00A4:
	message("「哈囉，");
	message(var0001);
	message("，」Denton 說道。");
	say();
labelFunc04C7_00AE:
	converse attend labelFunc04C7_0426;
	case "姓名" attend labelFunc04C7_00E7:
	message("「我是 Denton 爵士，");
	message(var0001);
	message("。」");
	say();
	gflags[0x0275] = true;
	UI_remove_answer("姓名");
	if (!gflags[0x025E]) goto labelFunc04C7_00E7;
	if (!(!(gflags[0x0259] && (!gflags[0x0261])))) goto labelFunc04C7_00E7;
	UI_add_answer("幫助");
labelFunc04C7_00E7:
	case "職業" attend labelFunc04C7_0109:
	message("「我是酒館老闆，");
	message(var0001);
	message("。我販賣茶點給不列顛尼亞的公民，特別是 Serpent's Hold 的騎士們。」");
	say();
	UI_add_answer(["販賣", "Serpent's Hold", "騎士"]);
labelFunc04C7_0109:
	case "騎士" attend labelFunc04C7_0132:
	message("「這裡幾乎每個居民都是高貴的戰士。例外的是物資商人 Jehanne 女士； Tory 女士；治療師 Leigh 女士；以及訓練師 Menion 。我也可以告訴你關於其他居民的事。」");
	say();
	UI_add_answer(["Jehanne 女士", "Lady Tory", "Lady Leigh", "Menion", "居民"]);
	UI_remove_answer("騎士");
labelFunc04C7_0132:
	case "販賣" attend labelFunc04C7_013D:
	Func0876();
labelFunc04C7_013D:
	case "Serpent's Hold" attend labelFunc04C7_0150:
	message("「Serpent's Hold 準確地位於東經 53 度，南緯 165 度。」");
	say();
	UI_remove_answer("Serpent's Hold");
labelFunc04C7_0150:
	case "居民" attend labelFunc04C7_017F:
	message("「是的，");
	message(var0001);
	message("，我可以告訴你關於以下這些人的事：");
	say();
	UI_push_answers();
	UI_add_answer(["先不用了", "Lord John-Paul", "Sir Richter", "Sir Horffe", "Sir Jordan", "Sir Pendaran"]);
labelFunc04C7_017F:
	case "先不用了" attend labelFunc04C7_0192:
	UI_pop_answers();
	UI_remove_answer("居民");
labelFunc04C7_0192:
	case "Lord John-Paul" attend labelFunc04C7_01A5:
	message("「他是 Serpent's Hold 的領主。他是個有能力的領導者，也是個公平的人。」");
	say();
	UI_remove_answer("Lord John-Paul");
labelFunc04C7_01A5:
	case "Lady Leigh" attend labelFunc04C7_01B8:
	message("「據說她的治療技巧無與倫比。」");
	say();
	UI_remove_answer("Lady Leigh");
labelFunc04C7_01B8:
	case "Sir Richter" attend labelFunc04C7_01D2:
	message("「他是 John-Paul 領主的副手。他正在教我如何賭得好。事實上，在加入友誼會後，他開始增加課程。」");
	say();
	UI_add_answer("友誼會");
	UI_remove_answer("Sir Richter");
labelFunc04C7_01D2:
	case "Sir Horffe" attend labelFunc04C7_01F2:
	message("「Horffe 爵士是一位優秀的戰士。他是一隻石像鬼，在很小的時候被兩名騎士發現。他們選擇把他當作自己的孩子撫養。他非常高尚。」");
	say();
	UI_remove_answer("Sir Horffe");
	if (!gflags[0x026E]) goto labelFunc04C7_01F2;
	UI_add_answer("石像鬼口音");
labelFunc04C7_01F2:
	case "石像鬼口音" attend labelFunc04C7_0205:
	message("「Horffe 爵士選擇使用石像鬼語法來說我們的語言，這樣他就能更好地保持文化聯繫。」");
	say();
	UI_remove_answer("石像鬼口音");
labelFunc04C7_0205:
	case "Sir Jordan" attend labelFunc04C7_0218:
	message("「儘管他雙眼失明，Jordan 爵士卻能很好地感知周圍的物體。他是一位出色的修補匠，可以修理許多物品。」");
	say();
	UI_remove_answer("Sir Jordan");
labelFunc04C7_0218:
	case "Lady Tory" attend labelFunc04C7_022B:
	message("「我相信她是一名德魯伊。她正在教我如何比以前更有同情心。她非常擅長了解別人的感受以及他們為什麼會經歷這樣的情緒。」");
	say();
	UI_remove_answer("Lady Tory");
labelFunc04C7_022B:
	case "Menion" attend labelFunc04C7_023E:
	message("「他是戰鬥教練。在空閒時間，他喜歡打造劍。 Menion 很好心，給了我一把他的作品。」");
	say();
	UI_remove_answer("Menion");
labelFunc04C7_023E:
	case "Sir Pendaran" attend labelFunc04C7_0251:
	message("「Pendaran 爵士是堡壘的一名騎士。他非常友善，但我聽說他有時會很霸道。」");
	say();
	UI_remove_answer("Sir Pendaran");
labelFunc04C7_0251:
	case "Jehanne 女士" attend labelFunc04C7_026B:
	message("「她是 Pendaran 爵士的女士。她一直在幫助我改善幽默感。」");
	say();
	UI_add_answer("幽默");
	UI_remove_answer("Jehanne 女士");
labelFunc04C7_026B:
	case "幽默" attend labelFunc04C7_02FE:
	message("「我的笑話很糟。如果你想聽，我可以說一個。」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C7_02F3;
	message("「為什麼雞要過馬路？」");
	say();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04C7_02B4;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「為了走到另一邊！哦，這個笑話真新，」他諷刺地說。*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc04C7_02B4:
	if (!var0004) goto labelFunc04C7_02D5;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 在你耳邊低語。~~「");
	message(var0000);
	message("，我們以前聽過這個了。最好在他沉浸在另一個笑話之前離開他。」");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04C7_02D5:
	UI_show_npc_face(0xFF39, 0x0000);
	UI_push_answers();
	UI_add_answer(["到另一邊去", "我不知道"]);
	goto labelFunc04C7_02F7;
labelFunc04C7_02F3:
	message("他似乎有些失望，但這很可能是你的錯覺。");
	say();
labelFunc04C7_02F7:
	UI_remove_answer("幽默");
labelFunc04C7_02FE:
	case "我不知道" attend labelFunc04C7_033A:
	UI_pop_answers();
	UI_remove_answer("幽默");
	message("他微微一笑。~~「為了走到另一邊。你覺得好笑嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C7_0328;
	message("他顯得有些困惑。「真奇怪，沒人覺得那個笑話有趣。~~或許我比我想像的還要風趣……」");
	say();
	goto labelFunc04C7_032C;
labelFunc04C7_0328:
	message("「也沒人覺得好笑。我會繼續練習變得風趣。」");
	say();
labelFunc04C7_032C:
	UI_remove_answer("我不知道");
	UI_remove_answer("到另一邊去");
labelFunc04C7_033A:
	case "到另一邊去" attend labelFunc04C7_035F:
	UI_pop_answers();
	UI_remove_answer("幽默");
	message("「哦。你以前聽過了。」");
	say();
	UI_remove_answer("到另一邊去");
	UI_remove_answer("我不知道");
labelFunc04C7_035F:
	case "友誼會" attend labelFunc04C7_03CC:
	message("「友誼會是一個有二十年歷史的組織，舉辦許多節日、遊行和慶祝活動。此外，他們還在 Paws 鎮維持一個庇護所。他們有一個潛在的理念，被稱為『內在力量的三位一體 (Triad of Inner Strength)』 。這個三位一體被分解為三個原則：『致力合一 (Strive For Unity)』、『信賴你的兄弟 (Trust Thy Brother)』和『價值先行於報償 (Worthiness Precedes Reward)』。我現在將解釋每一個原則的含義。」");
	say();
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04C7_0399;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「這個叫 Denton 的傢伙真是囉嗦。」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF39, 0x0000);
labelFunc04C7_0399:
	message("「努力團結似乎意味著友誼會希望大家為了社會的福祉共同努力。信任你的兄弟暗示著每個人不應該質疑他人的行為。善有善報表明友誼會對回報的態度是，必須做好事才能得到回報。」");
	say();
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C7_03C5;
	message("他看著你的獎章。~~「我的情報正確嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04C7_03C1;
	message("「謝謝你。我總是努力做正確的事。」");
	say();
	goto labelFunc04C7_03C5;
labelFunc04C7_03C1:
	message("「我會試著獲取更多資訊。」");
	say();
labelFunc04C7_03C5:
	UI_remove_answer("友誼會");
labelFunc04C7_03CC:
	case "幫助" attend labelFunc04C7_03E5:
	message("「是的，");
	message(var0001);
	message("，我可以幫你調查這起犯罪。我相信最好的開始方式是跟 Richter 爵士談談，因為事件發生後是他搜查雕像的。」");
	say();
	UI_remove_answer("幫助");
labelFunc04C7_03E5:
	case "得到碎片" attend labelFunc04C7_0405:
	message("「或許你應該讓治療師 Leigh 女士檢查一下這些石片。」");
	say();
	if (!gflags[0x025F]) goto labelFunc04C7_03FE;
	UI_add_answer("石像鬼的血");
labelFunc04C7_03FE:
	UI_remove_answer("得到碎片");
labelFunc04C7_0405:
	case "石像鬼的血" attend labelFunc04C7_0418:
	message("「那行為不像是 Horffe 爵士的作風。你或許可以向 John-Paul 領主報告，但我預期這件事沒那麼單純。去找 Tory 女士是個好主意。她非常擅長感知他人的情緒，或許在事件發生後，藉由觀察居民了解到了一些事情。」");
	say();
	UI_remove_answer("石像鬼的血");
labelFunc04C7_0418:
	case "告辭" attend labelFunc04C7_0423:
	goto labelFunc04C7_0426;
labelFunc04C7_0423:
	goto labelFunc04C7_00AE;
labelFunc04C7_0426:
	endconv;
	message("「日安，");
	message(var0001);
	message("。」*");
	say();
labelFunc04C7_0431:
	if (!(event == 0x0000)) goto labelFunc04C7_043F;
	Func092E(0xFF39);
labelFunc04C7_043F:
	return;
}


