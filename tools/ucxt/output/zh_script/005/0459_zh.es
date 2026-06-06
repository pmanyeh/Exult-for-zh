#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0459 object#(0x459) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc0459_0009;
	abort;
labelFunc0459_0009:
	UI_show_npc_face(0xFFA7, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	var0002 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0124]) goto labelFunc0459_004E;
	if (!gflags[0x00F8]) goto labelFunc0459_004E;
	UI_add_answer(["兄弟"]);
	var0001 = true;
labelFunc0459_004E:
	if (!(!gflags[0x0114])) goto labelFunc0459_0060;
	message("你看到一個似乎在荒野中待了很長一段時間的山裡人。他盯著你看了很久，然後哼了一聲，把頭轉開。");
	say();
	gflags[0x0114] = true;
	goto labelFunc0459_0064;
labelFunc0459_0060:
	message("「你想要什麼？別來煩我！」");
	say();
labelFunc0459_0064:
	converse attend labelFunc0459_020A;
	case "姓名" attend labelFunc0459_009C:
	message("「我沒有和陌生人說話的習慣，但看在你似乎不是很聰明的份上，我暫且遷就你一下。我的名字是 Karl ，以前住在 Minoc 。」");
	say();
	gflags[0x0124] = true;
	if (!gflags[0x00F8]) goto labelFunc0459_008E;
	if (!(!var0001)) goto labelFunc0459_008E;
	UI_add_answer(["兄弟"]);
labelFunc0459_008E:
	UI_remove_answer("姓名");
	UI_add_answer("Minoc");
labelFunc0459_009C:
	case "職業" attend labelFunc0459_00AF:
	message("「工作？！你瘋了嗎，");
	message(var0000);
	message("？！首先，如果你想提供我工作機會，我沒興趣。其次，如果你想因為任何原因僱用我做任何事，那我極度熱烈地拒絕你的提議。第三，如果你想知道我的職業是什麼，別想了，因為我沒有。第四也是最後一點，如果你想知道我為什麼沒有工作，現在就給我打住，因為那不關你的事！」*");
	say();
	abort;
labelFunc0459_00AF:
	case "Minoc" attend labelFunc0459_00D2:
	message("「別問我關於 Minoc 的事，那個充滿友誼會傻瓜、隨機謀殺案和無能紀念碑的骯髒小鎮。我甚至不住在這裡，就算你付錢給我我也不會住！」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["謀殺案", "紀念碑", "友誼會"]);
labelFunc0459_00D2:
	case "謀殺案" attend labelFunc0459_00E5:
	message("「哼。那干我什麼事？每天都有人互相殘殺。哦，你在調查這起犯罪！好吧，別讓我妨礙你。等你抓到兇手後，你可以為他建個雕像。」");
	say();
	UI_remove_answer("謀殺案");
labelFunc0459_00E5:
	case "友誼會" attend labelFunc0459_0100:
	if (!var0002) goto labelFunc0459_00FB;
	message("「老天！你想讓我加入！離我遠點，你這笨蛋！」*");
	say();
	abort;
	goto labelFunc0459_0100;
labelFunc0459_00FB:
	message("「我看起來像友誼會的成員嗎？我甚至不知道友誼會是什麼！而且我也不在乎！」*");
	say();
	abort;
labelFunc0459_0100:
	case "紀念碑" attend labelFunc0459_010D:
	message("「造船匠 Owen 確實值得為他建造一座紀念碑。它的形狀應該是一座絞刑架，而且還得把他吊在上面。」*");
	say();
	abort;
labelFunc0459_010D:
	case "兄弟" attend labelFunc0459_012D:
	message("「我的兄弟——我在世上唯一的親人——曾在 Owen 建造的一艘船上服役。那艘船是三年前在遇到第一場風暴時沉沒的幾艘船之一。我的兄弟和船一起沉沒，再也沒有人見過他。」");
	say();
	UI_remove_answer("兄弟");
	UI_add_answer(["Owen", "幾艘船"]);
labelFunc0459_012D:
	case "Owen" attend labelFunc0459_014D:
	message("「我為這件事和 Owen 對質，但他否認這和他的手藝有任何關係。那天晚上我回去偷了他起草的設計圖，至少這樣就不會再有像那樣的船被建造出來了。但這讓我對這個世界感到非常憤怒，我知道我再也無法在人群中生活了。我離開並去山裡生活。我唯一會回來的時候就是為了拿些補給品，也許偶爾喝一杯 Rutherford 釀的好麥酒。」");
	say();
	UI_remove_answer("Owen");
	UI_add_answer(["設計圖", "好麥酒"]);
labelFunc0459_014D:
	case "幾艘船" attend labelFunc0459_0160:
	message("「其他三艘根據 Owen 的基本設計建造的船，都在下水的第一年內沉沒了。有超過十二條生命因為那個虛榮的混蛋而喪生！」");
	say();
	UI_remove_answer("幾艘船");
labelFunc0459_0160:
	case "好麥酒" attend labelFunc0459_0173:
	message("「如果不是為了 Rutherford 釀的好麥酒，文明的存在就沒有任何意義了。」");
	say();
	UI_remove_answer("好麥酒");
labelFunc0459_0173:
	case "設計圖" attend labelFunc0459_01C5:
	message("「我還把那些設計圖留在我的小屋裡。每隔一段時間我就會試著弄懂它們。我懷疑鎮上除了 Owen 本人之外，沒有人能看懂它們。也許修補匠 Julia 能夠看出一點端倪。但她絕對不會聽我這個住在山裡的老頭子的話。」");
	say();
	var0003 = Func08F7(0xFFF8);
	if (!var0003) goto labelFunc0459_01AD;
	UI_show_npc_face(0xFFF8, 0x0000);
	message("「我會聽的， Karl ！你太看輕自己了！請振作起來！」");
	say();
	UI_remove_npc_face(0xFFF8);
	UI_show_npc_face(0xFFA7, 0x0000);
labelFunc0459_01AD:
	gflags[0x010B] = true;
	UI_remove_answer("設計圖");
	UI_add_answer(["Julia", "山裡的老頭"]);
labelFunc0459_01C5:
	case "山裡的老頭" attend labelFunc0459_01D8:
	message("「遠離當今社會的泥沼才是我該待的地方。在荒野中，你才能認清事物的本質。」");
	say();
	UI_remove_answer("山裡的老頭");
labelFunc0459_01D8:
	case "Julia" attend labelFunc0459_01EF:
	message("「如果你想把設計圖給 Julia 看，我會把它們給你。它們在不列顛尼亞礦業公司辦公室東南方的我的小屋裡。」");
	say();
	gflags[0x0120] = true;
	UI_remove_answer("Julia");
labelFunc0459_01EF:
	case "跟隨" attend labelFunc0459_01FC:
	message("「下定決心吧！你到底跟不跟著我？！如果你要跟著我，那就閉上嘴，邁開腳步，我們繼續走。」");
	say();
	abort;
labelFunc0459_01FC:
	case "告辭" attend labelFunc0459_0207:
	goto labelFunc0459_020A;
labelFunc0459_0207:
	goto labelFunc0459_0064;
labelFunc0459_020A:
	endconv;
	if (!gflags[0x00F7]) goto labelFunc0459_0218;
	message("「我知道我有時候很難相處。我想這就是我那倔強混蛋的本性吧。但我確實很感激我為數不多的幾個朋友，而且我知道你一直對我很好。好好保重，聖者。」*");
	say();
	goto labelFunc0459_021C;
labelFunc0459_0218:
	message("「在我發脾氣之前，停止你的喧鬧聲吧！」*");
	say();
labelFunc0459_021C:
	return;
}


