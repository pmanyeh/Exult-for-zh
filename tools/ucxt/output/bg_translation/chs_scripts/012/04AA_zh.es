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
	var0001 = "圣者";
	var0002 = "不关你的事";
	var0003 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0212]) goto labelFunc04AA_0047;
	UI_add_answer("小偷");
labelFunc04AA_0047:
	if (!gflags[0x0218]) goto labelFunc04AA_005B;
	UI_remove_answer("小偷");
	UI_add_answer("窃盗案解决");
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
	message("「你看到一个不断眨眼的紧张男人。他看见你，看起来像在发脾气。『你是谁？』」");
	say();
	var0005 = Func090B([var0000, var0001, var0002]);
	if (!(var0005 == var0000)) goto labelFunc04AA_00C8;
	message("「很好，");
	message(var0000);
	message("，你想要什么？」");
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
	message("「你真是个最可悲的小虫子。真的，所有这些关于圣者的胡言乱语不过是为了引起注意的可悲乞求。」*");
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
	case "职业" attend labelFunc04AA_0136:
	message("「我曾经是 Paws 这里的农夫。现在我想我是为友谊会工作。我住在他们的庇护所里。」");
	say();
	UI_add_answer(["农夫", "Paws", "友谊会"]);
labelFunc04AA_0136:
	case "道歉" attend labelFunc04AA_0153:
	message("「我最谦卑地向你道歉，");
	message(var0004);
	message("。我相信你一定知道，自从你上次造访我们以来，有许多人声称自己是唯一真正的圣者。」");
	say();
	gflags[0x021E] = true;
	UI_remove_answer("道歉");
labelFunc04AA_0153:
	case "农夫" attend labelFunc04AA_0176:
	message("「我曾经是个农夫；当然，那是在七年干旱之前。Komor、Fenn 和我沦为了穷光蛋。」");
	say();
	UI_remove_answer("农夫");
	UI_add_answer(["Komor", "Fenn", "穷光蛋"]);
labelFunc04AA_0176:
	case "窃盗案解决" attend labelFunc04AA_0189:
	message("「我听说是 Garritt 偷了毒液。哼！想想看，我竟然和这个小流氓住在同一个屋檐下。我必须更加小心看管我的物品。」");
	say();
	UI_remove_answer("窃盗案解决");
labelFunc04AA_0189:
	case "Paws" attend labelFunc04AA_019C:
	message("「我一辈子都住在 Paws 这里。我现在不会离开。我永远不会离开。」");
	say();
	UI_remove_answer("Paws");
labelFunc04AA_019C:
	case "友谊会" attend labelFunc04AA_01C9:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc04AA_01B8;
	message("「很高兴看到你是我们的一员。有圣者作为友谊会成员，给了友谊会很大的声望。我敢肯定，已经有更多人因此想要加入了。」");
	say();
	goto labelFunc04AA_01BB;
labelFunc04AA_01B8:
	Func0919();
labelFunc04AA_01BB:
	UI_remove_answer("友谊会");
	UI_add_answer("理念");
labelFunc04AA_01C9:
	case "理念" attend labelFunc04AA_01DB:
	Func091A();
	UI_remove_answer("理念");
labelFunc04AA_01DB:
	case "小偷" attend labelFunc04AA_01FB:
	message("「我听说 Morfin 的一些毒液被偷了。我无法想像谁会这么做，除非是那个和农场寡妇住在一起的臭小子。」");
	say();
	UI_remove_answer("小偷");
	UI_add_answer(["臭小子", "寡妇"]);
labelFunc04AA_01FB:
	case "臭小子" attend labelFunc04AA_020E:
	message("「我相信他的名字是 Tobias。」");
	say();
	UI_remove_answer("臭小子");
labelFunc04AA_020E:
	case "寡妇" attend labelFunc04AA_0221:
	message("「我相信她的名字是 Camille。」");
	say();
	UI_remove_answer("寡妇");
labelFunc04AA_0221:
	case "Komor" attend labelFunc04AA_0234:
	message("「他曾经拥有全不列颠尼亚最大的农场之一。他出生于富裕的家庭。失去农场后，他开始睡在路边。一天晚上，一群恶霸想抢他的金币。他没有，所以他们把他打成了瘸子。他是个充满怨恨的人。真悲惨。」");
	say();
	UI_remove_answer("Komor");
labelFunc04AA_0234:
	case "Fenn" attend labelFunc04AA_0247:
	message("「Fenn 是个农场劳工，也是 Komor 最信任的朋友之一。农场没了，Fenn 就无处可去，也无法生存了。」");
	say();
	UI_remove_answer("Fenn");
labelFunc04AA_0247:
	case "穷光蛋" attend labelFunc04AA_025A:
	message("「多年来，Komor、Fenn 和我靠着别人的垃圾为生，睡在路边。然后我找到了友谊会，我的生活变得更好了。我试图与我的朋友们分享我新找到的财富，但我担心他们因为我比他们更有办法而恨我。」");
	say();
	UI_remove_answer("穷光蛋");
labelFunc04AA_025A:
	case "告辞" attend labelFunc04AA_0265:
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


