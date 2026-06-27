#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func042B object#(0x42B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc042B_02F0;
	UI_show_npc_face(0xFFD5, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc042B_0052;
	var0001 = Func08FC(0xFFD5, 0xFFE6);
	if (!var0001) goto labelFunc042B_003D;
	message("Patterson 正專心參與友誼會聚會，不想說話。*");
	say();
	abort;
	goto labelFunc042B_0052;
labelFunc042B_003D:
	if (!gflags[0x00DA]) goto labelFunc042B_004D;
	message("「我想知道巴特林在哪裡！錯過聚會可不像他的作風。」");
	say();
	goto labelFunc042B_0052;
	goto labelFunc042B_0052;
labelFunc042B_004D:
	message("「我現在不能停下來說話。我去參加友誼會聚會要遲到了！」*");
	say();
	abort;
labelFunc042B_0052:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0080]) goto labelFunc042B_006F;
	UI_add_answer("Candice");
labelFunc042B_006F:
	if (!gflags[0x00D1]) goto labelFunc042B_007C;
	UI_add_answer("屍體");
labelFunc042B_007C:
	if (!(!gflags[0x00AC])) goto labelFunc042B_0092;
	message("你看見一位四十多歲的貴族，看起來像個政治家或衣著考究的商人。");
	say();
	message("「聖者！我剛剛得知你來到了我們美麗的城市！我一直期待著你！」");
	say();
	gflags[0x00AC] = true;
	goto labelFunc042B_010D;
labelFunc042B_0092:
	if (!((var0000 == 0x0000) || ((var0000 == 0x0001) || (var0000 == 0x0002)))) goto labelFunc042B_0109;
	var0002 = Func08F7(0xFFD7);
	var0003 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc042B_0102;
	message("「聖者！呃，嗯，你好嗎？喔，你認識 Candice 嗎，皇家博物館的館長？她是友誼會的『弟兄』。我，呃，只是護送她回家！」");
	say();
	if (!var0003) goto labelFunc042B_00E6;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「嗯。那你的妻子知道你護送 Candice 回家嗎？」");
	say();
	UI_remove_npc_face(0xFFFF);
	goto labelFunc042B_00EA;
labelFunc042B_00E6:
	message("你問 Judith 是否知道這件事。");
	say();
labelFunc042B_00EA:
	UI_show_npc_face(0xFFD5, 0x0000);
	message("「哎呀，她不需要知道！這不重要！真的沒什麼！」~~市長滿頭大汗。他用豆子般的小眼睛看著你。他知道自己被發現了。他的身體癱軟下來。他感到羞愧難當。~~「你發現了我的……我們的秘密。請不要告訴 Judith 。我……會結束這一切的。我發誓。 Candice ——我們必須停止見面。我……對不起。」~~你決定留下 Patterson 和 Candice 去解決發生的事情，並希望市長學到了關於誠實的一課。*");
	say();
	Func0911(0x0014);
	abort;
	goto labelFunc042B_0106;
labelFunc042B_0102:
	message("「有什麼我能幫你的嗎？」 Patterson 問。");
	say();
labelFunc042B_0106:
	goto labelFunc042B_010D;
labelFunc042B_0109:
	message("「有什麼我能幫你的嗎？」 Patterson 問。");
	say();
labelFunc042B_010D:
	converse attend labelFunc042B_02EB;
	case "姓名" attend labelFunc042B_0123:
	message("「我是 Patterson 。以我父親的名字命名。」他伸出手，握住你的手，並堅定地搖了搖。「能見到聖者真是太榮幸了！」");
	say();
	UI_remove_answer("姓名");
labelFunc042B_0123:
	case "職業" attend labelFunc042B_013F:
	message("「哎呀，我是城鎮市長！也就是不列顛城的城鎮市長！我想讓你知道，我的選舉是一場壓倒性的勝利！我的對手根本沒有機會！~~ 「我也是不列顛尼亞稅務委員會的主席。」");
	say();
	UI_add_answer(["選舉", "對手", "稅務委員會"]);
labelFunc042B_013F:
	case "選舉" attend labelFunc042B_0159:
	message("「那是在兩年前舉行的。我獲得了 84% 的選票。我必須承認，這是一場令人印象深刻的勝利。~~ 「當然，當一個人背後有像友誼會這樣的團體支持時……」");
	say();
	UI_remove_answer("選舉");
	UI_add_answer("友誼會");
labelFunc042B_0159:
	case "對手" attend labelFunc042B_0177:
	message("「他是一位名叫 Brownie 的老農夫。沒有多少錢投入競選。就連農民都不支持他。」");
	say();
	UI_remove_answer("對手");
	UI_add_answer("農民");
	gflags[0x007F] = true;
labelFunc042B_0177:
	case "友誼會" attend labelFunc042B_01A9:
	message("「自從我加入後，我的生活有了很大的改善。我發現我的誠實無懈可擊，我的領導能力無可挑剔，我對妻子的愛更是無可指責。");
	say();
	if (!(!gflags[0x0006])) goto labelFunc042B_0191;
	message("「你應該考慮參加我們晚上的聚會。」");
	say();
	goto labelFunc042B_0195;
labelFunc042B_0191:
	message("「我敢打賭你的生活也改善了！」");
	say();
labelFunc042B_0195:
	UI_remove_answer("友誼會");
	UI_add_answer(["誠實", "妻子"]);
labelFunc042B_01A9:
	case "農民" attend labelFunc042B_01C3:
	message("「我有這麼說嗎？我絕對不是那個意思。不列顛城已經沒有階級制度了，整個國家也都沒有！我的意思是『農民階級』，也就是那些沒有優越血統的人—— Brownie 就是那種人——『他們』也不支持他。他們知道誰會是最好的領導者！」");
	say();
	UI_remove_answer("農民");
	UI_add_answer("優越");
labelFunc042B_01C3:
	case "優越" attend labelFunc042B_01E3:
	message("「我有這麼說嗎？我想我並不是那個意思。我想說的是，有些人出身於地位比其他人更好的家庭。而 Brownie 不是其中之一！但別誤會我——我仍然堅持不列顛尼亞的階級制度已經被廢除了！」");
	say();
	UI_remove_answer("優越");
	if (!gflags[0x0082]) goto labelFunc042B_01E3;
	UI_add_answer("Nanna");
labelFunc042B_01E3:
	case "Nanna" attend labelFunc042B_01F6:
	message("「她說什麼？嗯，她錯了！虧她還是個『弟兄』。友誼會的一員！我得跟巴特林談談她的事。」~~你注意到 Patterson 似乎感到不安。");
	say();
	UI_remove_answer("Nanna");
labelFunc042B_01F6:
	case "誠實" attend labelFunc042B_0216:
	message("「我顯然是不列顛城最誠實的人！也許我該搬去 Moonglow！哈！」");
	say();
	UI_remove_answer("誠實");
	if (!gflags[0x0081]) goto labelFunc042B_0216;
	UI_add_answer("Judith 的懷疑");
labelFunc042B_0216:
	case "妻子" attend labelFunc042B_0229:
	message("「她的名字是 Judith 。她是音樂廳的音樂老師。也許你見過她。我們的關係非常美好。」");
	say();
	UI_remove_answer("妻子");
labelFunc042B_0229:
	case "稅務委員會" attend labelFunc042B_023C:
	message("「這片土地必須有某種產生收入的方法。稅收是唯一的解決方案。每個商人和農夫都要納稅。任何靠工作謀生的人都要納稅。」~~ 「不列顛尼亞稅務委員會的主要辦公室在皇家造幣廠。」");
	say();
	UI_remove_answer("稅務委員會");
labelFunc042B_023C:
	case "Judith 的懷疑" attend labelFunc042B_027D:
	message("「哎呀，我不知道她在說什麼！我只是工作到很晚，僅此而已！」");
	say();
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc042B_0276;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 對你耳語：「這個人似乎很有防禦心，你不覺得嗎？我說我們應該觀察他，看看他今晚在友誼會聚會後去了哪裡。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFD5, 0x0000);
labelFunc042B_0276:
	UI_remove_answer("Judith 的懷疑");
labelFunc042B_027D:
	case "Candice" attend labelFunc042B_0290:
	message("Patterson 瞪大了眼睛，有一瞬間看起來非常緊張。但他很快就恢復了鎮定。~~ 「Candice？哎呀，她是個朋友！友誼會的『弟兄』！僅此而已！」");
	say();
	UI_remove_answer("Candice");
labelFunc042B_0290:
	case "屍體" attend labelFunc042B_02AA:
	message("你轉述了不列顛王關於幾年前在不列顛城發生謀殺案的說法。 Patterson 點點頭。~~「我記得很清楚。那非常令人毛骨悚然。有一個名叫 Finster 的人正在競選公職。他對自己的意見非常直言不諱，我想這給他帶來了麻煩。」");
	say();
	UI_remove_answer("屍體");
	UI_add_answer("意見");
labelFunc042B_02AA:
	case "意見" attend labelFunc042B_02C4:
	message("「他試圖進行許多社會變革。他希望大議會 (Great Council) 和不列顛尼亞稅務委員會有更多權力，而且他想解散友誼會。 Finster 是一個野心太大的貴族。總之，他的信仰一定為他樹立了幾個敵人。」");
	say();
	UI_remove_answer("意見");
	UI_add_answer("敵人");
labelFunc042B_02C4:
	case "敵人" attend labelFunc042B_02DD:
	message("「我怎麼會知道？總之，他的屍體在一個已經不存在的廢棄建築裡被發現。那裡曾經是某種倉庫，就在城堡附近。幾年前被拆除了。屍體被肢解得難以置信。就好像有人用木樁把那個可憐的人綁起來，然後砍斷了他所有的四肢。 Finster 然後被斬首了。這簡直是……怎麼說呢……儀式性的！~~「這就是我記得的全部。沒有人因為這項罪行被捕。」");
	say();
	Func0911(0x0014);
	UI_remove_answer("敵人");
labelFunc042B_02DD:
	case "告辭" attend labelFunc042B_02E8:
	goto labelFunc042B_02EB;
labelFunc042B_02E8:
	goto labelFunc042B_010D;
labelFunc042B_02EB:
	endconv;
	message("Patterson 向你點頭。*");
	say();
labelFunc042B_02F0:
	if (!(event == 0x0000)) goto labelFunc042B_02FE;
	Func092E(0xFFD5);
labelFunc042B_02FE:
	return;
}


