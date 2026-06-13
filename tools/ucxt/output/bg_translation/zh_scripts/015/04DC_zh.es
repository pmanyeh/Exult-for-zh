#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04DC object#(0x4DC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04DC_02FC;
	UI_show_npc_face(0xFF24, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = Func08F7(0xFF10);
	var0003 = Func08F7(0xFF66);
	var0004 = false;
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!gflags[0x02E2]) goto labelFunc04DC_0055;
	message("「你把我從牢房裡放出來真是太好了。我現在要回到我以前的生活。日安！」*");
	say();
	abort;
	goto labelFunc04DC_0069;
labelFunc04DC_0055:
	var0005 = UI_get_npc_object(0xFF24);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc04DC_0069:
	if (!(!gflags[0x02C2])) goto labelFunc04DC_0077;
	message("監獄裡的男人帶著相當燦爛的笑容向你問候。");
	say();
	goto labelFunc04DC_0081;
labelFunc04DC_0077:
	message("「哎呀，哈囉，");
	message(var0000);
	message("。在這美好的一天，我能如何幫助你？」");
	say();
labelFunc04DC_0081:
	converse attend labelFunc04DC_02F1;
	case "姓名" attend labelFunc04DC_00F1:
	message("「我是 Sullivan ，");
	message(var0000);
	message("，」他愉快地說。「你是誰？」*");
	say();
	var0006 = "the Avatar";
	var0007 = Func090B([var0001, var0006, var0000]);
	if (!(var0007 == var0001)) goto labelFunc04DC_00C8;
	message("「很高興認識你，");
	message(var0001);
	message("。」他伸出手想與你握手，卻被鐵欄杆擋住了。~~「啊，好吧，抱歉，");
	message(var0000);
	message("。就當作你已經被好好地握過手了吧。」");
	say();
labelFunc04DC_00C8:
	if (!(var0007 == var0000)) goto labelFunc04DC_00DC;
	message("「當然，");
	message(var0000);
	message("。我明白。」他笑了。");
	say();
labelFunc04DC_00DC:
	if (!(var0007 == var0006)) goto labelFunc04DC_00F1;
	message("「哦，我明白了。糟糕……」他聳聳肩。");
	say();
	UI_add_answer("糟糕");
labelFunc04DC_00F1:
	case "職業" attend labelFunc04DC_010A:
	message("「嗯，老實說，");
	message(var0000);
	message("，我沒有職業。雖然，有一段時間，我是個偷竊的無賴。」");
	say();
	UI_add_answer("無賴");
labelFunc04DC_010A:
	case "友誼會" attend labelFunc04DC_015C:
	message("「這真是一群很棒的人，");
	message(var0000);
	message("。我們向居住在這片美麗土地上的人們傳播指引與繁榮。當然，目前我的同伴們對我有點……不滿。」");
	say();
	if (!var0002) goto labelFunc04DC_0145;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「那真是輕描淡寫了！」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
labelFunc04DC_0145:
	UI_remove_answer("友誼會");
	UI_add_answer(["指引", "繁榮", "不滿"]);
labelFunc04DC_015C:
	case "指引" attend labelFunc04DC_016F:
	message("「友誼會教導人們像羊一樣跟隨他們的領袖。你能想到更好的指引嗎？」");
	say();
	UI_remove_answer("指引");
labelFunc04DC_016F:
	case "繁榮" attend labelFunc04DC_0182:
	message("「當一個會員表現得體並聽從指示等等時，他——或她——就能聽到教導人如何在遊戲中獲勝的『內在聲音 (inner voice) 』。這正是我加入的原因！」他笑得很開懷。~~「然而，我還沒有聽到那個聲音。」");
	say();
	UI_remove_answer("繁榮");
labelFunc04DC_0182:
	case "不滿" attend labelFunc04DC_01A2:
	message("「嗯，顯然我不夠努力，不配得到我……從樓上的錢箱裡『取得』的貸款。」");
	say();
	UI_remove_answer("不滿");
	UI_add_answer(["應得的", "借款"]);
labelFunc04DC_01A2:
	case "應得的" attend labelFunc04DC_01C3:
	message("他盡可能地向你傾斜。這也許是他一生中第一次變得如此嚴肅。「實際上，應得是一個相對的詞。我終於意識到——白天在刑架上待了好幾個小時，讓我有很多時間去體會——友誼會的真實本質。 Batlin 、 Abraham 和 Danag ，他們都錯了。~~當守護者 (Guardian) 在 Britannia 出現時，我毫不懷疑他會簡單地消滅所有人，包括友誼會的領袖們。」他恢復了笑容。~~「這就是為什麼我決定現在就從友誼會和 Britannia 榨取一切，在我們全部被殺之前。」");
	say();
	UI_remove_answer("應得的");
	if (!(!var0004)) goto labelFunc04DC_01C3;
	UI_add_answer("刑架");
labelFunc04DC_01C3:
	case "借款" attend labelFunc04DC_01D6:
	message("「嗯……我本來是打算遲早要還錢的。我只是需要它在遊戲中贏更多。」");
	say();
	UI_remove_answer("借款");
labelFunc04DC_01D6:
	case "糟糕" attend labelFunc04DC_0242:
	if (!var0002) goto labelFunc04DC_020A;
	UI_show_npc_face(0xFF10, 0x0000);
	message("「這傻瓜的意思是，他過去常穿著裝扮，假裝是你，試圖從店主那裡騙取貨物。」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	message("「非常正確，聖者 。這個詭計太過成功了。老實說，這真是個恥辱。我不該逃脫懲罰，而確實，我現在正受到適當的懲戒。」");
	say();
	goto labelFunc04DC_023B;
labelFunc04DC_020A:
	message("「哦，只是我已經冒充你一段時間了，為了從店主那裡拿走物品而不付錢。嗯，確切地說是『曾經』。現在我正為此受到適當的懲罰。」");
	say();
	if (!var0003) goto labelFunc04DC_023B;
	message("*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("「謝謝你。」*");
	say();
	UI_remove_npc_face(0xFF66);
	UI_show_npc_face(0xFF24, 0x0000);
	message("「不客氣。」他點點頭。*");
	say();
labelFunc04DC_023B:
	UI_remove_answer("糟糕");
labelFunc04DC_0242:
	case "無賴" attend labelFunc04DC_0298:
	message("「嗯，在我被抓到之前，我會在全 Britannia 的商店裡遊走，冒充『聖者 』。店主們都很樂意送我許多禮物。你確實過著美好的生活，");
	message(var0000);
	message("。」");
	say();
	if (!var0002) goto labelFunc04DC_028A;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「問問他關於他稅金的事，");
	message(var0000);
	message("。」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	UI_add_answer("稅");
labelFunc04DC_028A:
	UI_add_answer("禮物");
	UI_remove_answer("無賴");
labelFunc04DC_0298:
	case "禮物" attend labelFunc04DC_02AB:
	message("「哦，就是我要求任何的東西——武器、護甲、物資、法術。當然，我對法術沒什麼真正的用途，但不管怎樣，能免費獲得它們還是很不錯的。」");
	say();
	UI_remove_answer("禮物");
labelFunc04DC_02AB:
	case "稅" attend labelFunc04DC_02CC:
	message("他笑了。~~「 Britannia 稅務委員會為了替政府籌措資金而設立了一項稅收。我不想付給他們，」他聳聳肩，「所以我沒付。而且，當然，」他咧著嘴笑，「現在他們經常把我放在那個精美的刑架上。」~~他伸長脖子，盯著那塊木板。~~「非常精細的作工。」他點點頭。「的確，那是我見過最棒的刑架！」");
	say();
	UI_remove_answer("稅");
	if (!(!var0004)) goto labelFunc04DC_02CC;
	UI_add_answer("刑架");
labelFunc04DC_02CC:
	case "刑架" attend labelFunc04DC_02E3:
	message("「那不是你見過最精美的刑架嗎？精湛的工藝，美麗的細節。」");
	say();
	var0004 = true;
	UI_remove_answer("刑架");
labelFunc04DC_02E3:
	case "告辭" attend labelFunc04DC_02EE:
	goto labelFunc04DC_02F1;
labelFunc04DC_02EE:
	goto labelFunc04DC_0081;
labelFunc04DC_02F1:
	endconv;
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。很快在地表世界見！」*");
	say();
labelFunc04DC_02FC:
	if (!(event == 0x0000)) goto labelFunc04DC_030A;
	Func092E(0xFF24);
labelFunc04DC_030A:
	return;
}


