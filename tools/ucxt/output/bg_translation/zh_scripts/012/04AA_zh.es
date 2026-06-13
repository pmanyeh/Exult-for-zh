#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04AA object#(0x4AA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04AA_0273;
	UI_show_npc_face(0xFF56, 0x0000);
	var0000 = Func0908();
	var0001 = "聖者";
	var0002 = "不關你的事";
	var0003 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0212]) goto labelFunc04AA_0047;
	UI_add_answer("小偷");
labelFunc04AA_0047:
	if (!gflags[0x0218]) goto labelFunc04AA_005B;
	UI_remove_answer("小偷");
	UI_add_answer("竊盜案解決");
labelFunc04AA_005B:
	if (!gflags[0x0215]) goto labelFunc04AA_0075;
	var0004 = var0001;
	if (!(!gflags[0x021E])) goto labelFunc04AA_0075;
	UI_add_answer("道歉");
labelFunc04AA_0075:
	if (!gflags[0x022D]) goto labelFunc04AA_0081;
	var0004 = var0000;
labelFunc04AA_0081:
	if (!gflags[0x022E]) goto labelFunc04AA_008D;
	var0004 = var0003;
labelFunc04AA_008D:
	if (!(!gflags[0x0223])) goto labelFunc04AA_00FA;
	message("「你看到一個不斷眨眼的緊張男人。他看見你，看起來像在發脾氣。『你是誰？』」");
	say();
	var0005 = Func090B([var0000, var0001, var0002]);
	if (!(var0005 == var0000)) goto labelFunc04AA_00C8;
	message("「很好，");
	message(var0000);
	message("，你想要什麼？」");
	say();
	var0004 = var0000;
	gflags[0x022D] = true;
labelFunc04AA_00C8:
	if (!(var0005 == var0002)) goto labelFunc04AA_00E0;
	message("「好吧！」");
	say();
	var0004 = var0003;
	gflags[0x022E] = true;
labelFunc04AA_00E0:
	if (!(var0005 == var0001)) goto labelFunc04AA_00F7;
	message("「你真是個最可悲的小蟲子。真的，所有這些關於聖者的胡言亂語不過是為了引起注意的可悲乞求。」*");
	say();
	gflags[0x0223] = true;
	gflags[0x0215] = true;
	abort;
labelFunc04AA_00F7:
	goto labelFunc04AA_0104;
labelFunc04AA_00FA:
	message("「哦，");
	message(var0004);
	message("～是你啊！」");
	say();
labelFunc04AA_0104:
	converse attend labelFunc04AA_0268;
	case "姓名" attend labelFunc04AA_011A:
	message("「我是 Merrick。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AA_011A:
	case "職業" attend labelFunc04AA_0136:
	message("「我曾經是 Paws 這裡的農夫。現在我想我是為友誼會工作。我住在他們的庇護所裡。」");
	say();
	UI_add_answer(["農夫", "Paws", "友誼會"]);
labelFunc04AA_0136:
	case "道歉" attend labelFunc04AA_0153:
	message("「我最謙卑地向你道歉，");
	message(var0004);
	message("。我相信你一定知道，自從你上次造訪我們以來，有許多人聲稱自己是唯一真正的聖者。」");
	say();
	gflags[0x021E] = true;
	UI_remove_answer("道歉");
labelFunc04AA_0153:
	case "農夫" attend labelFunc04AA_0176:
	message("「我曾經是個農夫；當然，那是在七年乾旱之前。Komor、Fenn 和我淪為了窮光蛋。」");
	say();
	UI_remove_answer("農夫");
	UI_add_answer(["Komor", "Fenn", "窮光蛋"]);
labelFunc04AA_0176:
	case "竊盜案解決" attend labelFunc04AA_0189:
	message("「我聽說是 Garritt 偷了毒液。哼！想想看，我竟然和這個小流氓住在同一個屋簷下。我必須更加小心看管我的物品。」");
	say();
	UI_remove_answer("竊盜案解決");
labelFunc04AA_0189:
	case "Paws" attend labelFunc04AA_019C:
	message("「我一輩子都住在 Paws 這裡。我現在不會離開。我永遠不會離開。」");
	say();
	UI_remove_answer("Paws");
labelFunc04AA_019C:
	case "友誼會" attend labelFunc04AA_01C9:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc04AA_01B8;
	message("「很高興看到你是我們的一員。有聖者作為友誼會成員，給了友誼會很大的聲望。我敢肯定，已經有更多人因此想要加入了。」");
	say();
	goto labelFunc04AA_01BB;
labelFunc04AA_01B8:
	Func0919();
labelFunc04AA_01BB:
	UI_remove_answer("友誼會");
	UI_add_answer("理念");
labelFunc04AA_01C9:
	case "理念" attend labelFunc04AA_01DB:
	Func091A();
	UI_remove_answer("理念");
labelFunc04AA_01DB:
	case "小偷" attend labelFunc04AA_01FB:
	message("「我聽說 Morfin 的一些毒液被偷了。我無法想像誰會這麼做，除非是那個和農場寡婦住在一起的臭小子。」");
	say();
	UI_remove_answer("小偷");
	UI_add_answer(["臭小子", "寡婦"]);
labelFunc04AA_01FB:
	case "臭小子" attend labelFunc04AA_020E:
	message("「我相信他的名字是 Tobias。」");
	say();
	UI_remove_answer("臭小子");
labelFunc04AA_020E:
	case "寡婦" attend labelFunc04AA_0221:
	message("「我相信她的名字是 Camille。」");
	say();
	UI_remove_answer("寡婦");
labelFunc04AA_0221:
	case "Komor" attend labelFunc04AA_0234:
	message("「他曾經擁有全 Britannia 最大的農場之一。他出生於富裕的家庭。失去農場後，他開始睡在路邊。一天晚上，一群惡霸想搶他的金幣。他沒有，所以他們把他打成了瘸子。他是個充滿怨恨的人。真悲慘。」");
	say();
	UI_remove_answer("Komor");
labelFunc04AA_0234:
	case "Fenn" attend labelFunc04AA_0247:
	message("「Fenn 是個農場勞工，也是 Komor 最信任的朋友之一。農場沒了，Fenn 就無處可去，也無法生存了。」");
	say();
	UI_remove_answer("Fenn");
labelFunc04AA_0247:
	case "窮光蛋" attend labelFunc04AA_025A:
	message("「多年來，Komor、Fenn 和我靠著別人的垃圾為生，睡在路邊。然後我找到了友誼會，我的生活變得更好了。我試圖與我的朋友們分享我新找到的財富，但我擔心他們因為我比他們更有辦法而恨我。」");
	say();
	UI_remove_answer("窮光蛋");
labelFunc04AA_025A:
	case "告辭" attend labelFunc04AA_0265:
	goto labelFunc04AA_0268;
labelFunc04AA_0265:
	goto labelFunc04AA_0104;
labelFunc04AA_0268:
	endconv;
	message("「祝你有美好的一天，");
	message(var0004);
	message("。」*");
	say();
labelFunc04AA_0273:
	if (!(event == 0x0000)) goto labelFunc04AA_0281;
	Func092E(0xFF56);
labelFunc04AA_0281:
	return;
}


