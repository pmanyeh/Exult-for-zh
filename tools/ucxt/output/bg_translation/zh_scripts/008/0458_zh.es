#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0919 0x919 ();
extern void Func092E 0x92E (var var0000);

void Func0458 object#(0x458) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0458_01FE;
	UI_show_npc_face(0xFFA8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0113])) goto labelFunc0458_0048;
	message("你看到一位英俊、看起來很有創造力的年輕人。");
	say();
	gflags[0x0113] = true;
	goto labelFunc0458_0052;
labelFunc0458_0048:
	message("「你好，");
	message(var0000);
	message("，」Seara 說。");
	say();
labelFunc0458_0052:
	converse attend labelFunc0458_01F3;
	case "姓名" attend labelFunc0458_006E:
	message("「我叫做 Seara ，");
	message(var0000);
	message("。很高興見到你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0458_006E:
	case "職業" attend labelFunc0458_00A5:
	if (!gflags[0x011F]) goto labelFunc0458_0090;
	message("「我是 Minoc 當地藝術家公會的成員。」");
	say();
	UI_add_answer(["藝術家公會", "Minoc"]);
	goto labelFunc0458_00A5;
labelFunc0458_0090:
	message("「拜託，");
	message(var0000);
	message("，現在可不是用這種隨便的語氣說話的時候！就在離這裡不遠的地方，發生了不只一起，而是兩起謀殺案！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc0458_00A5:
	case "藝術家公會" attend labelFunc0458_00C8:
	message("「是的，我們 Minoc 這裡有一個藝術家公會。我是其中一員。其他成員還有 Xanthia 和 Gladstone 。你可以在那裡買到不列顛尼亞各地能找到的最精美的工藝品。例如我，就是製作時鐘的。」");
	say();
	UI_add_answer(["Xanthia", "Gladstone", "時鐘"]);
	UI_remove_answer("藝術家公會");
labelFunc0458_00C8:
	case "Xanthia" attend labelFunc0458_00DB:
	message("「 Xanthia 是個非常有才華的年輕女子。她製作非常精緻且獨特的燭台。」");
	say();
	UI_remove_answer("Xanthia");
labelFunc0458_00DB:
	case "Gladstone" attend labelFunc0458_00EE:
	message("「 Gladstone 是一位雕塑家兼吹玻璃工。他也負責公會大部分的商業決策。」");
	say();
	UI_remove_answer("Gladstone");
labelFunc0458_00EE:
	case "時鐘" attend labelFunc0458_0101:
	message("「我製作各種類型的時鐘和手錶，它們能可靠地將時間精確到秒。我很樂意賣給你一個，但現在我積壓了兩年的訂單要趕。」");
	say();
	UI_remove_answer("時鐘");
labelFunc0458_0101:
	case "Minoc" attend labelFunc0458_0121:
	message("「在要建造紀念碑以及現在發生這些謀殺案之前，我一直認為這個城鎮是個適合居住的好地方。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["紀念碑", "謀殺案"]);
labelFunc0458_0121:
	case "謀殺案" attend labelFunc0458_013B:
	message("「這太可怕了。 Frederico 和 Tania 當時正在尋找他們的兒子 Sasha 。他離家出走去加入友誼會了。這種事怎麼會發生在他們身上？」Seara 緩緩地搖了搖頭。");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer("Sasha");
labelFunc0458_013B:
	case "Sasha" attend labelFunc0458_017B:
	if (!(!gflags[0x00FF])) goto labelFunc0458_0169;
	message("「幾個星期前，當他來到鎮上尋找當地友誼會分會時，我見過他。我曾讓他在公會大廳住過一晚。他說如果他父親知道他想加入友誼會，就會打他，我相信他的話。 Sasha 的父親可能是個殘酷的人。他基本上是個好小夥子，就像我們很多人一樣，只是在尋找真理。不幸的是，他找錯了地方。」");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer(["吉普賽人", "友誼會"]);
	gflags[0x00FF] = true;
	goto labelFunc0458_017B;
labelFunc0458_0169:
	message("「自從我們上次談到 Sasha 之後，我就再也沒見過或聽說過他的消息了。我不知道他是否加入了友誼會。」");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer("友誼會");
labelFunc0458_017B:
	case "吉普賽人" attend labelFunc0458_018E:
	message("「他們的營地就在鎮外不遠處。他們剩下的人不多了。我知道 Sasha 的姑姑 Margareta 是個不可思議的占卜師。只要幾枚金幣，她就能告訴你很多可能對你非常有用的事情。」");
	say();
	UI_remove_answer("吉普賽人");
labelFunc0458_018E:
	case "友誼會" attend labelFunc0458_01B8:
	if (!var0001) goto labelFunc0458_01A3;
	message("「無意冒犯，但我不認同你的信仰。事實上，我認為你們友誼會裡很少有成員是真心誠意地談論團結、信任和價值的。不過 Sasha 已經夠大，能自己做決定了，雖然我很後悔那天晚上沒有把他送回家。」");
	say();
	goto labelFunc0458_01B1;
labelFunc0458_01A3:
	Func0919();
	message("「不，我不是成員之類的，但我聽 Sasha 說過那麼多次基本教義，我都能背下來了。我從未試圖勸阻他加入友誼會，即使我根本不信那一套。我認為 Sasha 已經大到可以開始為自己做決定了。現在我真的很後悔在看到他的那一刻沒有把他送回家。」");
	say();
	UI_remove_answer("理念");
labelFunc0458_01B1:
	UI_remove_answer("友誼會");
labelFunc0458_01B8:
	case "紀念碑" attend labelFunc0458_01D2:
	message("「那個造船匠 Owen 是個自以為是的傻瓜。他的雕像只不過是他為這個城鎮帶來所有傷害與反感的紀念碑而已。我簡直不敢相信，這種毫無意義且明顯的鬧劇，竟然會危及我們公會的未來。」");
	say();
	UI_remove_answer("紀念碑");
	UI_add_answer("未來");
labelFunc0458_01D2:
	case "未來" attend labelFunc0458_01E5:
	message("「這件事你最好去問 Gladstone 。」");
	say();
	UI_remove_answer("未來");
labelFunc0458_01E5:
	case "告辭" attend labelFunc0458_01F0:
	goto labelFunc0458_01F3;
labelFunc0458_01F0:
	goto labelFunc0458_0052;
labelFunc0458_01F3:
	endconv;
	message("「祝你有個愉快的一天，");
	message(var0000);
	message("。一定要再來看我們。」*");
	say();
labelFunc0458_01FE:
	if (!(event == 0x0000)) goto labelFunc0458_020C;
	Func092E(0xFFA8);
labelFunc0458_020C:
	return;
}


