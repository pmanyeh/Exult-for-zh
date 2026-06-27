#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0859 0x859 ();
extern void Func0858 0x858 ();
extern void Func085A 0x85A ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04E5 object#(0x4E5) ()
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
	var var000C;

	if (!(event == 0x0001)) goto labelFunc04E5_02D7;
	UI_show_npc_face(0xFF1B, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1B));
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0135] || gflags[0x0104])) goto labelFunc04E5_005D;
	UI_add_answer("皇冠寶石號 (Crown Jewel)");
labelFunc04E5_005D:
	if (!(!gflags[0x02B2])) goto labelFunc04E5_00D6;
	message("你看到一個肥胖、看起來很快樂的商人。");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc04E5_00CB;
	message("「哈囉，哈囉我的朋友！你看起來像需要花錢的樣子！」*");
	say();
	var0003 = Func08F7(0xFFFD);
	if (!var0003) goto labelFunc04E5_00BE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「這地方看起來相當富裕。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04E5_00BE;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「整座島都非常富裕。這已經不是我們曾經認識的那座島了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04E5_00BE:
	UI_show_npc_face(0xFF1B, 0x0000);
	goto labelFunc04E5_00CF;
labelFunc04E5_00CB:
	message("「哈囉！你好嗎，我的朋友？」");
	say();
labelFunc04E5_00CF:
	gflags[0x02B2] = true;
	goto labelFunc04E5_00DA;
labelFunc04E5_00D6:
	message("「我能怎麼幫助你？」 Budo 問。");
	say();
labelFunc04E5_00DA:
	converse attend labelFunc04E5_02D2;
	case "姓名" attend labelFunc04E5_00F0:
	message("「為您服務的是第四代 Budo ！今天天氣真好，不是嗎？」");
	say();
	UI_remove_answer("姓名");
labelFunc04E5_00F0:
	case "職業" attend labelFunc04E5_0159:
	if (!(var0001 == 0x0007)) goto labelFunc04E5_012A;
	var0005 = "你就來對地方了！@";
	var0006 = "";
	var0007 = "";
	UI_add_answer(["武器", "護甲", "物資", "船隻地契"]);
	goto labelFunc04E5_013C;
labelFunc04E5_012A:
	var0005 = "請你在";
	var0006 = "我們營業時再來！我將";
	var0007 = "非常樂意在那時幫助你。@";
labelFunc04E5_013C:
	message("「我是個物資商人，就像我父親一樣，就像他的父親一樣，就像他的父親的父親一樣。 Budo 商行是島上的傳統！就像友誼會有一天也會成為傳統一樣！~~如果你對武器、護甲、物資或船隻地契感興趣，");
	message(var0005);
	message("");
	message(var0006);
	message("");
	message(var0007);
	message("");
	say();
	UI_add_answer("友誼會");
labelFunc04E5_0159:
	case "護甲" attend labelFunc04E5_0168:
	message("「 Budo 商行只提供全不列顛尼亞品質最好的護甲。我有所有最好的裝備可供選擇。」");
	say();
	Func0859();
labelFunc04E5_0168:
	case "武器" attend labelFunc04E5_0177:
	message("「 Budo 商行為您提供工藝精湛的優良武器。你在其他任何地方都找不到更物超所值的選擇了！」");
	say();
	Func0858();
labelFunc04E5_0177:
	case "物資" attend labelFunc04E5_0186:
	message("「 Budo 商行也為您的方便準備了各式各樣有用的東西。」");
	say();
	Func085A();
labelFunc04E5_0186:
	case "船隻地契" attend labelFunc04E5_0214:
	if (!gflags[0x02B6]) goto labelFunc04E5_019B;
	message("「但我已經把『 The Lusty Wench 』的地契賣給你了！她是我目前唯一的一艘船！我很抱歉！」");
	say();
	goto labelFunc04E5_020D;
labelFunc04E5_019B:
	message("「我可以把我的船『 The Lusty Wench 』的地契賣給你。她很美，我的朋友。保證耐用，而且是海上最流線型的船隻！賣 800 金幣。想要她嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E5_0209;
	var0008 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0008 >= 0x0320)) goto labelFunc04E5_0202;
	var0009 = UI_add_party_items(0x0001, 0x031D, 0x0012, 0x0002, false);
	if (!var0009) goto labelFunc04E5_01FB;
	message("「明智之舉。為你準備的一艘宏偉的船！」他收下你的金幣。");
	say();
	var000A = UI_remove_party_items(0x0320, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x02B6] = true;
	goto labelFunc04E5_01FF;
labelFunc04E5_01FB:
	message("「你拿太多東西了，我的朋友！卸下你的一些物品，我就把這艘美麗船隻的地契賣給你。」");
	say();
labelFunc04E5_01FF:
	goto labelFunc04E5_0206;
labelFunc04E5_0202:
	message("「但你沒有足夠的金幣！或許你應該去賭坊 (House of Games) 增加你口袋裡的重量！」");
	say();
labelFunc04E5_0206:
	goto labelFunc04E5_020D;
labelFunc04E5_0209:
	message("「但你絕對無法在世界上任何地方看到像這樣的一艘船！太可惜了！」");
	say();
labelFunc04E5_020D:
	UI_remove_answer("船隻地契");
labelFunc04E5_0214:
	case "友誼會" attend labelFunc04E5_0237:
	message("「友誼會幫助我成為了一個非常富有的人！雖然事業是繼承來的企業，但我將一切歸功於友誼會！」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["富有的人", "繼承的事業", "一切"]);
labelFunc04E5_0237:
	case "富有的人" attend labelFunc04E5_0251:
	message("「我的曾祖父在很多很多年前創立了這份事業。多虧了盜賊公會，他算是小有成就。但那個時代已經過去了。」");
	say();
	UI_add_answer("盜賊公會 (Thieves' Guild)");
	UI_remove_answer("富有的人");
labelFunc04E5_0251:
	case "繼承的事業" attend labelFunc04E5_0264:
	message("「我的曾祖父將店傳給他的兒子，就這樣一路傳到我。我們天生就是商人！這就是為什麼我知道你為什麼來 Budo 商行！你想成為偉大的 Budo 傳奇的一部分！你需要買點東西！」");
	say();
	UI_remove_answer("繼承的事業");
labelFunc04E5_0264:
	case "一切" attend labelFunc04E5_027E:
	message("「在我父親去世後不久，也就是我剛繼承這家店的時候，生意很差。店鋪有開不下去的危險。但友誼會說服了我加入他們。我證明了我的價值，而友誼會在財務上幫助了我。」");
	say();
	UI_remove_answer("一切");
	UI_add_answer("價值");
labelFunc04E5_027E:
	case "價值" attend labelFunc04E5_0291:
	message("「我不介意告訴你。友誼會分享我一半的利潤。」");
	say();
	UI_remove_answer("價值");
labelFunc04E5_0291:
	case "盜賊公會 (Thieves' Guild)" attend labelFunc04E5_02A4:
	message("「它已經不存在了。它們在我祖父那一代就逐漸衰落了。當我還是個孩子，友誼會到來時，除了家庭的紀念品之外，它們已經沒有任何蹤跡了。就連海盜也變了。」");
	say();
	UI_remove_answer("盜賊公會 (Thieves' Guild)");
labelFunc04E5_02A4:
	case "皇冠寶石號 (Crown Jewel)" attend labelFunc04E5_02C4:
	if (!var0002) goto labelFunc04E5_02B9;
	message("方塊震動了一會兒。~~「那艘船經常航行到這裡。我知道它定期前往大陸，在這裡停靠，隔天早上再前往聖者之島 (Isle of the Avatar) 。然後它會反向重複這趟旅程。」");
	say();
	goto labelFunc04E5_02BD;
labelFunc04E5_02B9:
	message("「它定期停靠在這裡。不知道更多的事了。船員非常神祕。」 Budo 轉過頭，顯然不想談論這艘船。");
	say();
labelFunc04E5_02BD:
	UI_remove_answer("皇冠寶石號 (Crown Jewel)");
labelFunc04E5_02C4:
	case "告辭" attend labelFunc04E5_02CF:
	goto labelFunc04E5_02D2;
labelFunc04E5_02CF:
	goto labelFunc04E5_00DA;
labelFunc04E5_02D2:
	endconv;
	message("「我希望有機會能再次幫助你，我的朋友！」*");
	say();
labelFunc04E5_02D7:
	if (!(event == 0x0000)) goto labelFunc04E5_035E;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1B));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc04E5_0358;
	if (!(var000B == 0x0001)) goto labelFunc04E5_031B;
	var000C = "@武器？護甲？@";
labelFunc04E5_031B:
	if (!(var000B == 0x0002)) goto labelFunc04E5_032B;
	var000C = "@物資在這裡！@";
labelFunc04E5_032B:
	if (!(var000B == 0x0003)) goto labelFunc04E5_033B;
	var000C = "@Budo 商行開門做生意了！@";
labelFunc04E5_033B:
	if (!(var000B == 0x0004)) goto labelFunc04E5_034B;
	var000C = "@歡迎進來！我們開門了！@";
labelFunc04E5_034B:
	UI_item_say(0xFF1B, var000C);
	goto labelFunc04E5_035E;
labelFunc04E5_0358:
	Func092E(0xFF1B);
labelFunc04E5_035E:
	return;
}


