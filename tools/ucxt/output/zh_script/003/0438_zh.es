#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0438 object#(0x438) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0438_01D8;
	UI_show_npc_face(0xFFC8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!var0001) goto labelFunc0438_0043;
	UI_add_answer("友誼會");
labelFunc0438_0043:
	if (!(!gflags[0x00B9])) goto labelFunc0438_0055;
	message("你看見一位面容姣好的年輕農婦。");
	say();
	gflags[0x00B9] = true;
	goto labelFunc0438_005F;
labelFunc0438_0055:
	message("「向你問好，");
	message(var0000);
	message("，」 Diane 說。");
	say();
labelFunc0438_005F:
	converse attend labelFunc0438_01CD;
	case "姓名" attend labelFunc0438_0075:
	message("「我的名字是 Diane 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0438_0075:
	case "職業" attend labelFunc0438_0091:
	message("「我的工作是負責管理 Britain 這裡的馬廄，如果你需要的話，也可以賣馬匹和馬車給你。」");
	say();
	UI_add_answer(["馬廄", "Britain", "馬車"]);
labelFunc0438_0091:
	case "馬廄" attend labelFunc0438_00A4:
	message("「在這裡你會找到由 Lord British 御用馬匹飼育員培育出的頂級馬匹。如果你想買一匹，我相信我們可以商量出一個好價格。當然，牠們會附帶馬車。」");
	say();
	UI_remove_answer("馬廄");
labelFunc0438_00A4:
	case "Britain" attend labelFunc0438_00BE:
	message("「Britain 是個如此宏偉的城市，但如果你誰都不認識，可能會有些令人不安。幸運的是，我認識這裡的很多人。」");
	say();
	UI_remove_answer("Britain");
	UI_add_answer("很多人");
labelFunc0438_00BE:
	case "馬車" attend labelFunc0438_0141:
	message("「馬匹和馬車的組合售價是 120 枚金幣。你可以在馬廄南邊過馬路的一個小棚子裡找到牠們。你想要一張馬匹契約嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0438_0136;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x0078)) goto labelFunc0438_012F;
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x001D, 0xFE99, false);
	if (!var0005) goto labelFunc0438_0128;
	message("「很好。這是你的契約。」");
	say();
	var0006 = UI_remove_party_items(0x0078, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0438_012C;
labelFunc0438_0128:
	message("「哎呀。你的手太滿了，拿不下契約！」");
	say();
labelFunc0438_012C:
	goto labelFunc0438_0133;
labelFunc0438_012F:
	message("「噢。你沒有足夠的金幣買契約。」");
	say();
labelFunc0438_0133:
	goto labelFunc0438_013A;
labelFunc0438_0136:
	message("「那麼，下次吧。」");
	say();
labelFunc0438_013A:
	UI_remove_answer("馬車");
labelFunc0438_0141:
	case "很多人" attend labelFunc0438_0167:
	message("「我在 Britannia 認識很多朋友。其中包括 Greg 、 James 、 Brownie 和 Mack 。」");
	say();
	UI_remove_answer("很多人");
	UI_add_answer(["Greg", "James", "Brownie", "Mack"]);
labelFunc0438_0167:
	case "Greg" attend labelFunc0438_017A:
	message("「Greg 經營一間賣補給品的商店。如果你正在計劃任何探險，他就是你該找的人。他似乎很幸運。也許他的好運會沾染到你身上。」");
	say();
	UI_remove_answer("Greg");
labelFunc0438_017A:
	case "James" attend labelFunc0438_018D:
	message("「在離這裡不遠經營旅店的 James ，渴望過著冒險的生活。他父親死後，他的家人希望他經營旅店，從那以後他就一直很不滿。不過，我想他喜歡在造幣廠工作的 Cynthia 。」");
	say();
	UI_remove_answer("James");
labelFunc0438_018D:
	case "Brownie" attend labelFunc0438_01A0:
	message("「Brownie 是個正直誠實的人，如果你想聽我的意見，他會是個比 Patterson 好得多的市長。他在春天用我們的馬來犁田。」");
	say();
	UI_remove_answer("Brownie");
labelFunc0438_01A0:
	case "Mack" attend labelFunc0438_01B3:
	message("「關於 Mack ，我要警告你一句。別讓他開始談論天空。除此之外，他完全沒問題，我可以向你保證。」");
	say();
	UI_remove_answer("Mack");
labelFunc0438_01B3:
	case "友誼會" attend labelFunc0438_01BF:
	message("Diane 注意到你的友誼會徽章。「真奇怪。如果你不介意我這麼說，你看起來不像個友誼會成員。你身上有一種氣質。我說不上來。」");
	say();
labelFunc0438_01BF:
	case "告辭" attend labelFunc0438_01CA:
	goto labelFunc0438_01CD;
labelFunc0438_01CA:
	goto labelFunc0438_005F;
labelFunc0438_01CD:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0438_01D8:
	if (!(event == 0x0000)) goto labelFunc0438_01E6;
	Func092E(0xFFC8);
labelFunc0438_01E6:
	return;
}


