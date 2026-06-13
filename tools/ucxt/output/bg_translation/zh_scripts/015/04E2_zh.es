#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E2 object#(0x4E2) ()
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
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc04E2_026D;
	UI_show_npc_face(0xFF1E, 0x0000);
	var0000 = Func0908();
	var0001 = UI_wearing_fellowship();
	var0002 = "聖者";
	var0003 = UI_get_npc_object(0xFF1E);
	if (!gflags[0x02A3]) goto labelFunc04E2_003B;
	var0004 = var0000;
labelFunc04E2_003B:
	if (!gflags[0x02A4]) goto labelFunc04E2_0047;
	var0004 = var0002;
labelFunc04E2_0047:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02A5]) goto labelFunc04E2_006A;
	if (!gflags[0x02A7]) goto labelFunc04E2_006A;
	UI_add_answer("Mole 說……");
labelFunc04E2_006A:
	if (!(!gflags[0x02AF])) goto labelFunc04E2_00BB;
	message("這個高大、中年的海盜充滿懷疑地看著你。~~「在我多看你一眼之前，我必須知道你是誰。」他的聲音充滿威脅。");
	say();
	var0005 = Func090B([var0000, var0002]);
	if (!(var0005 == var0000)) goto labelFunc04E2_009C;
	message("這個海盜在回答前嚼了嚼嘴裡的東西。「嗨，」他最後說。");
	say();
	gflags[0x02A3] = true;
	var0004 = var0000;
labelFunc04E2_009C:
	if (!(var0005 == var0002)) goto labelFunc04E2_00B4;
	message("海盜看起來就像你剛侮辱了他的母親。~~「我……不……喜……歡……聖者 ！！」~~海盜在地上吐了口唾沫。「但你看起來不像我上次交談的那個聖者 那麼像魚餌。好吧。我會和你說話。」");
	say();
	gflags[0x02A4] = true;
	var0004 = var0002;
labelFunc04E2_00B4:
	gflags[0x02AF] = true;
	goto labelFunc04E2_00D7;
labelFunc04E2_00BB:
	if (!(gflags[0x02A6] || (!gflags[0x02A5]))) goto labelFunc04E2_00D3;
	message("「你想要什麼？」 Blacktooth 用威脅的聲音問。「喔，是你啊，");
	message(var0004);
	message("。」");
	say();
	goto labelFunc04E2_00D7;
labelFunc04E2_00D3:
	message("「我以為你不想當我的朋友！」 Blacktooth 抱怨道。");
	say();
labelFunc04E2_00D7:
	converse attend labelFunc04E2_0256;
	case "姓名" attend labelFunc04E2_00ED:
	message("「我是 Blacktooth (黑牙) 。看？」海盜笑了，露出他的牙齒。");
	say();
	UI_remove_answer("姓名");
labelFunc04E2_00ED:
	case "職業" attend labelFunc04E2_0106:
	message("「把聖者做成魚餌！」他大笑。「我已經受夠那些跑來跑去，自稱是聖者的瘦弱傢伙了！我正在找上週來過這裡的特定一個聖者。一個身為友誼會成員的聖者！」");
	say();
	UI_add_answer(["聖者", "友誼會"]);
labelFunc04E2_0106:
	case "聖者" attend labelFunc04E2_0120:
	message("「他一週前來過這裡。試圖從我身上偷些金幣！那個混蛋！在我意識到他做了什麼之前，他就已經溜走了。」");
	say();
	UI_remove_answer("聖者");
	UI_add_answer("偷竊");
labelFunc04E2_0120:
	case "偷竊" attend labelFunc04E2_013D:
	message("「我們在酒館裡玩牌。如果他沒有從底下發牌，我就該死。我通常能看穿那種把戲，但他很厲害！」");
	say();
	if (!var0001) goto labelFunc04E2_0136;
	message("海盜注意到你的友誼會獎章。「我看你也是他們的一員！」");
	say();
labelFunc04E2_0136:
	UI_remove_answer("偷竊");
labelFunc04E2_013D:
	case "友誼會" attend labelFunc04E2_0175:
	if (!var0001) goto labelFunc04E2_0154;
	var0006 = "@請別見怪，但是";
	goto labelFunc04E2_015A;
labelFunc04E2_0154:
	var0006 = "@你我之間，";
labelFunc04E2_015A:
	message(var0006);
	message("我不信任他們。我認為他們都在隱瞞什麼。我認為他們都是騙子。拿我的老朋友 Mole 來說吧。嗯，我的前老朋友 Mole 。自從他加入他們之後，他改變了很多。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["Mole", "改變"]);
labelFunc04E2_0175:
	case "Mole" attend labelFunc04E2_0188:
	message("「他是另一個退休住在島上的老海盜。我們曾是多年的夥伴，但後來他加入了那個該死的友誼會。現在他覺得自己的排泄物不臭了，如果你懂我的意思。」");
	say();
	UI_remove_answer("Mole");
labelFunc04E2_0188:
	case "改變" attend labelFunc04E2_021A:
	message("「他已經放棄了所有海盜的行徑！他現在是個該死的聖人，每當他看到我，他就試圖說服我加入友誼會。我現在不惜一切代價避開他。我受不了看到他變成這樣。這讓我怒火中燒！」~~然後，在一個軟弱的時刻，這個強悍的海盜小聲地說：「我也想他。我們曾經是最好的夥伴。」你敢發誓他眼裡有淚水。*");
	say();
	var0007 = Func08F7(0xFFFE);
	if (!var0007) goto labelFunc04E2_01E6;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 低語：「噢，拜託，像個男人點！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc04E2_01DC;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 轉過頭去以忍住笑意。*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc04E2_01DC:
	UI_show_npc_face(0xFF1E, 0x0000);
labelFunc04E2_01E6:
	message("你可以看出海盜很沮喪，所以你決定讓他一個人靜一靜。~~「對，走開。沒錯！我從來都留不住任何朋友！");
	say();
	if (!gflags[0x02A4]) goto labelFunc04E2_01F4;
	message("「像這樣離開我，真像是聖者 的作風！");
	say();
labelFunc04E2_01F4:
	if (!var0001) goto labelFunc04E2_01FE;
	message("「典型的友誼會成員！沒錯！別煩我！走開！");
	say();
labelFunc04E2_01FE:
	message("「我就繼續孤獨且貧困地留在這裡吧！我的匕首在哪裡？我要割喉自盡！！」");
	say();
	UI_remove_answer("改變");
	gflags[0x02A5] = true;
	if (!gflags[0x02A7]) goto labelFunc04E2_021A;
	UI_add_answer("Mole 說……");
labelFunc04E2_021A:
	case "Mole 說……" attend labelFunc04E2_0248:
	message("「他這麼說？真的嗎？」 Blacktooth 看起來好像又要哭了。~~「我必須去看看他。我謝謝你，");
	message(var0004);
	message("，謝謝你考慮到我在這件事上的感受。」 Blacktooth 給了你一個大大的擁抱，然後轉身去尋找 Mole 。*");
	say();
	UI_remove_answer("Mole 說……");
	gflags[0x02A6] = true;
	Func0911(0x0014);
	UI_set_schedule_type(var0003, 0x000C);
	abort;
labelFunc04E2_0248:
	case "告辭" attend labelFunc04E2_0253:
	goto labelFunc04E2_0256;
labelFunc04E2_0253:
	goto labelFunc04E2_00D7;
labelFunc04E2_0256:
	endconv;
	if (!(gflags[0x02A6] || (!gflags[0x02A5]))) goto labelFunc04E2_0269;
	message("「那下次吧。」*");
	say();
	goto labelFunc04E2_026D;
labelFunc04E2_0269:
	message("「對，再見！離開！他們最終都會離我而去！」*");
	say();
labelFunc04E2_026D:
	if (!(event == 0x0000)) goto labelFunc04E2_02ED;
	var0009 = UI_get_schedule_type(UI_get_npc_object(0xFF1E));
	if (!(var0009 == 0x000B)) goto labelFunc04E2_02E7;
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var000A == 0x0001)) goto labelFunc04E2_02AA;
	var000B = "@哈！@";
labelFunc04E2_02AA:
	if (!(var000A == 0x0002)) goto labelFunc04E2_02BA;
	var000B = "@快停下！@";
labelFunc04E2_02BA:
	if (!(var000A == 0x0003)) goto labelFunc04E2_02CA;
	var000B = "@該死！@";
labelFunc04E2_02CA:
	if (!(var000A == 0x0004)) goto labelFunc04E2_02DA;
	var000B = "@該死的鸚鵡屎……@";
labelFunc04E2_02DA:
	UI_item_say(0xFF1E, var000B);
	goto labelFunc04E2_02ED;
labelFunc04E2_02E7:
	Func092E(0xFF1E);
labelFunc04E2_02ED:
	return;
}


