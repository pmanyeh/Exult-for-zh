#game "blackgate"
// externs
extern void Func0896 0x896 ();
extern void Func0895 0x895 ();
extern void Func08FF 0x8FF (var var0000);

void Func0894 0x894 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!gflags[0x031B]) goto labelFunc0894_0010;
	UI_set_schedule_type(var0000, 0x000B);
labelFunc0894_0010:
	if (!(event == 0x0001)) goto labelFunc0894_02D0;
	UI_show_npc_face(0xFEDF, 0x0000);
	if (!(gflags[0x0324] && (!gflags[0x031C]))) goto labelFunc0894_0031;
	message("「我『必須』把生命還給他。他『一定』會有一顆新的心臟！」他強而有力的凝視和站姿，顯然表露出他的決心。");
	say();
labelFunc0894_0031:
	if (!gflags[0x0328]) goto labelFunc0894_003A;
	Func0896();
labelFunc0894_003A:
	if (!gflags[0x031B]) goto labelFunc0894_0043;
	Func0895();
labelFunc0894_0043:
	if (!(!gflags[0x0315])) goto labelFunc0894_00A9;
	gflags[0x0315] = true;
	message("石像低著頭站著。儘管它有著花崗岩的特徵，但臉上明顯帶著沮喪的神情。令人驚訝的是，它轉過身來對你說話。");
	say();
	Func08FF("@天哪，群星在上，我相信這是一隻生物！@");
	message("慢慢地，彷彿費了很大的力氣，它抬起了頭。");
	say();
	UI_show_npc_face(0xFEDF, 0x0000);
	var0001 = UI_get_item_frame(UI_find_nearest(0xFE9C, 0x019E, 0x0028));
	if (!(!((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc0894_0094;
	message("「你……想要什麼？」它緩慢地問道。");
	say();
	goto labelFunc0894_009F;
labelFunc0894_0094:
	message("「幫助他？」它小心翼翼地問，指著躺在它旁邊的倒塌雕像。");
	say();
	UI_add_answer("幫助");
labelFunc0894_009F:
	UI_add_answer("生物？");
	goto labelFunc0894_00AD;
labelFunc0894_00A9:
	message("「我能如何協助你？」");
	say();
labelFunc0894_00AD:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0002 = false;
	var0003 = false;
labelFunc0894_00C5:
	converse attend labelFunc0894_02CF;
	UI_show_npc_face(0xFEDF, 0x0000);
	case "姓名" attend labelFunc0894_0104:
	UI_remove_answer("姓名");
	if (!gflags[0x031D]) goto labelFunc0894_00EE;
	message("他歪著頭，疑惑地看著你。~「我道歉。我不是已經告訴過你我的主人叫我 Bollux 了嗎？」");
	say();
	goto labelFunc0894_00F6;
labelFunc0894_00EE:
	message("「我的主人為我命名為 Bollux。");
	say();
	gflags[0x031D] = true;
labelFunc0894_00F6:
	if (!(!var0003)) goto labelFunc0894_0104;
	UI_add_answer("主人");
labelFunc0894_0104:
	case "職業" attend labelFunc0894_0117:
	message("「我是原則神殿的守護者。」");
	say();
	UI_add_answer("守護者");
labelFunc0894_0117:
	case "守護者" attend labelFunc0894_012A:
	UI_remove_answer("守護者");
	message("「我們被……創造出來保護原則神殿。只有……聖者應該使用它們的力量。Adjhar 和我正在……守衛……這時牆壁砸在了 Adjhar 身上。然後傳來了巨大的聲響……我把他帶到這裡，這樣我就可以修復他，但我不知道……怎麼做。」");
	say();
labelFunc0894_012A:
	case "生物？" attend labelFunc0894_0156:
	UI_remove_answer("生物？");
	message("「我們被稱為石魔像……因為我們是由石頭和岩石製成的。」");
	say();
	if (!(!var0002)) goto labelFunc0894_014F;
	UI_add_answer("製成");
	var0002 = true;
labelFunc0894_014F:
	UI_add_answer("石頭");
labelFunc0894_0156:
	case "主人", "Astelleron" attend labelFunc0894_0188:
	UI_remove_answer(["Astelleron", "主人"]);
	var0003 = true;
	message("「Astelleron 製造了我們。他是我們的主人。」");
	say();
	if (!(!var0002)) goto labelFunc0894_0188;
	UI_add_answer("製成");
	var0002 = true;
labelFunc0894_0188:
	case "石頭" attend labelFunc0894_019B:
	UI_remove_answer("石頭");
	message("「我們是……用這個小島上採石場的岩石……塑造而成的。」");
	say();
labelFunc0894_019B:
	case "製成" attend labelFunc0894_01CD:
	var0002 = true;
	UI_remove_answer("製成");
	message("「我對這個過程一無所知，但 Astelleron 曾經告訴我，他使用了一種叫做……魔法的東西賦予我們生命和……活力。」魔像停頓了一下，顯然意識到了他接下來的想法。~「他不喜歡他的……孤獨。他說他很……寂寞。」");
	say();
	UI_add_answer(["魔法", "寂寞"]);
	if (!(!var0003)) goto labelFunc0894_01CD;
	UI_add_answer("Astelleron");
labelFunc0894_01CD:
	case "魔法" attend labelFunc0894_01E7:
	UI_remove_answer("魔法");
	message("「我不知道那……是什麼，但他房子裡有很多書。也許……那裡有關於……魔法的東西。」");
	say();
	UI_add_answer("書籍");
labelFunc0894_01E7:
	case "書籍" attend labelFunc0894_0231:
	UI_remove_answer("書籍");
	if (!(!gflags[0x0323])) goto labelFunc0894_022D;
	message("「我這裡有一本書，Adjhar 說裡面講述了關於……我們被……創造的故事。這可能有助於讓 Adjhar 復活。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x0282, 0x0090, 0xFE99, false);
	if (!var0004) goto labelFunc0894_0226;
	message("他遞給你一本非常古老的書。很明顯這本書已經被翻閱過很多次，因為皮革封面已經磨損，露出了下面的木頭，而且書頁也捲角了。~「我已經把石頭放好了，」他補充說，「就像……書上說的那樣。」");
	say();
	gflags[0x0323] = true;
	goto labelFunc0894_022A;
labelFunc0894_0226:
	message("「你……帶了太多東西了。放下一些東西，我就可以把這個給你。」");
	say();
labelFunc0894_022A:
	goto labelFunc0894_0231;
labelFunc0894_022D:
	message("「房子裡散落著好幾本……其他的書。我不知道……它們是關於什麼的。Adjhar 讀過它們。」");
	say();
labelFunc0894_0231:
	case "寂寞" attend labelFunc0894_0244:
	UI_remove_answer("寂寞");
	message("「Astelleron 說那是一個……人在周圍沒有人時的感覺。他告訴我們在我們……出生後他有多……高興。~ 他稱我為……兒子。」");
	say();
labelFunc0894_0244:
	case "幫助" attend labelFunc0894_0299:
	UI_remove_answer("幫助");
	message("「我的同伴……Adjhar……他快死了。你必須幫忙修復他。拜託，我懇求……你。」");
	say();
	if (!(!gflags[0x0323])) goto labelFunc0894_0292;
	message("「我這裡有一本書，Adjhar 說裡面講述了關於……我們被……創造的故事。這可能有助於讓他復活。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x0282, 0x0090, 0xFE99, false);
	if (!var0004) goto labelFunc0894_028E;
	message("他遞給你一本非常古老的書。很明顯這本書已經被翻閱過很多次，因為皮革封面已經磨損，露出了下面的木頭，而且書頁也捲角了。「我已經放好了五塊……石頭來標記……血液的位置。」");
	say();
	UI_add_answer("血液");
	gflags[0x0323] = true;
	goto labelFunc0894_0292;
labelFunc0894_028E:
	message("「你……帶了太多東西了。放下一些東西，我就可以把這個給你。」");
	say();
labelFunc0894_0292:
	UI_add_answer("Adjhar");
labelFunc0894_0299:
	case "Adjhar" attend labelFunc0894_02AC:
	UI_remove_answer("Adjhar");
	message("「他是我的兄弟……也是我的朋友。我們一起保護了……神殿。我們不能讓他……一直這樣下去。幫我……協助他。」");
	say();
labelFunc0894_02AC:
	case "血液" attend labelFunc0894_02BF:
	UI_remove_answer("血液");
	message("「我不……懂那本書，但我記得……血液……」");
	say();
labelFunc0894_02BF:
	case "告辭" attend labelFunc0894_02CC:
	message("「再……見。」*");
	say();
	abort;
labelFunc0894_02CC:
	goto labelFunc0894_00C5;
labelFunc0894_02CF:
	endconv;
labelFunc0894_02D0:
	return;
}


