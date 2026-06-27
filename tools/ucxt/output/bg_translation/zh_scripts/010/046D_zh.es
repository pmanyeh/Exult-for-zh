#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func046D object#(0x46D) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc046D_01F0;
	UI_show_npc_face(0xFF93, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02CA])) goto labelFunc046D_003A;
	message("你看到一個僧侶顯然漫無目的地在四處遊蕩。");
	say();
	gflags[0x02CA] = true;
	goto labelFunc046D_0044;
labelFunc046D_003A:
	message("「你好， ");
	message(var0000);
	message("。需要我幫忙嗎？」 Wayne 問。");
	say();
labelFunc046D_0044:
	converse attend labelFunc046D_01EB;
	case "姓名" attend labelFunc046D_0060:
	message("「你可以叫我 Wayne 兄弟， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc046D_0060:
	case "職業" attend labelFunc046D_007A:
	message("「我的工作？嗯，我，呃，目前並沒有真正的工作。」他低頭看著自己的腳。");
	say();
	UI_remove_answer("職業");
	UI_add_answer("目前");
labelFunc046D_007A:
	case "目前" attend labelFunc046D_00A0:
	message("「是的，我是……嗯，我迷路了， ");
	message(var0000);
	message("。我來自這裡南邊的修道院……或者是北邊……也許是西北邊。」他托著下巴抬頭看。~~「東南邊？」");
	say();
	UI_remove_answer("目前");
	UI_add_answer(["迷路", "修道院"]);
labelFunc046D_00A0:
	case "迷路" attend labelFunc046D_00B3:
	message("「嗯……我確定這不是永久的。」他臉紅了。「我只是需要確定一下方向，就這樣，」他缺乏說服力地說。");
	say();
	UI_remove_answer("迷路");
labelFunc046D_00B3:
	case "修道院" attend labelFunc046D_00D6:
	message("「我是玫瑰友誼會的僧侶。我和一位名叫 Taylor 的弟兄一起研究地理和自然。」");
	say();
	UI_remove_answer("修道院");
	UI_add_answer(["地理", "自然", "Taylor"]);
labelFunc046D_00D6:
	case "地理" attend labelFunc046D_00E9:
	message("「嗯，」他聳聳肩，「我想我應該學得好一點的。」他難為情地笑了。");
	say();
	UI_remove_answer("地理");
labelFunc046D_00E9:
	case "自然" attend labelFunc046D_0109:
	message("「不列顛尼亞有這麼多美麗的事物可看。動物和植物都給觀察者帶來了興奮感。」");
	say();
	UI_remove_answer("自然");
	UI_add_answer(["動物", "植物"]);
labelFunc046D_0109:
	case "Taylor" attend labelFunc046D_011C:
	message("「嗯，我其實已經有一段時間沒見到他了。我假設他還在繼續他的研究。」");
	say();
	UI_remove_answer("Taylor");
labelFunc046D_011C:
	case "植物" attend labelFunc046D_014B:
	message("「啊，是的， ");
	message(var0000);
	message("，它們看起來非常奇妙。我強烈建議你要隨時觀察你的周遭環境。否則， ");
	message(var0000);
	message("，你會錯過生活中的很多東西：花朵、樹木、鳥類……地標！」");
	say();
	UI_remove_answer("植物");
	UI_add_answer(["花朵", "樹木", "鳥類"]);
labelFunc046D_014B:
	case "樹木" attend labelFunc046D_015E:
	message("「啊，我最不喜歡的科目。我覺得樹木比鳥類無趣多了。」");
	say();
	UI_remove_answer("樹木");
labelFunc046D_015E:
	case "鳥類" attend labelFunc046D_0171:
	message("「我最喜歡的動物！鳥類如此自由，能夠飛行很遠的距離。我多麼希望能漫遊在廣闊的天空……特別是考慮到我目前的處境。從空中你可以看到更多東西，我敢肯定！」");
	say();
	UI_remove_answer("鳥類");
labelFunc046D_0171:
	case "花朵" attend labelFunc046D_0197:
	message("「非常、非常可愛的植物。有彩虹所有的顏色，甚至更多。修道院裡有一位僧侶擁有一個美麗的花園。據我所知，她可能還在打理它， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("花朵");
	if (!gflags[0x014C]) goto labelFunc046D_0197;
	UI_add_answer("她還在打理。");
labelFunc046D_0197:
	case "她還在打理。" attend labelFunc046D_01B7:
	message("「太好了， ");
	message(var0000);
	message("。我很高興聽到這件事。如果 Aimi 為了她的另一個……消遣而放棄那個花園，那就太可惜了。」");
	say();
	UI_remove_answer("她還在打理。");
	UI_add_answer("另一個消遣");
labelFunc046D_01B7:
	case "另一個消遣" attend labelFunc046D_01CA:
	message("「Aimi 也畫畫。或者說，做了大膽的嘗試。當然，我必須讚揚她的努力。」");
	say();
	UI_remove_answer("另一個消遣");
labelFunc046D_01CA:
	case "動物" attend labelFunc046D_01DD:
	message("「我最喜歡的是鳥類，尤其是金頰林鶯 (Golden-Cheeked Warbler) 。我喜歡跟隨並觀察牠們。不過，牠們的方向感似乎不太好。」他嘆了口氣。「但這片土地上有很多種類。」");
	say();
	UI_remove_answer("動物");
labelFunc046D_01DD:
	case "告辭" attend labelFunc046D_01E8:
	goto labelFunc046D_01EB;
labelFunc046D_01E8:
	goto labelFunc046D_0044;
labelFunc046D_01EB:
	endconv;
	message("「願你的好運指引你走過人生的道路。」*");
	say();
labelFunc046D_01F0:
	if (!(event == 0x0000)) goto labelFunc046D_01FE;
	Func092E(0xFF93);
labelFunc046D_01FE:
	return;
}


