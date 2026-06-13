#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func088E 0x88E ();
extern void Func0919 0x919 ();
extern void Func092E 0x92E (var var0000);

void Func0435 object#(0x435) ()
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

	if (!(event == 0x0001)) goto labelFunc0435_01FD;
	UI_show_npc_face(0xFFCB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCB));
	if (!(var0002 == 0x0007)) goto labelFunc0435_006D;
	var0004 = Func08FC(0xFFCB, 0xFFE6);
	if (!var0004) goto labelFunc0435_0058;
	message("Gaye 正在觀看友誼會的集會。她唐突地轉向你，把手指放在嘴唇上，示意你安靜。*");
	say();
	abort;
	goto labelFunc0435_006D;
labelFunc0435_0058:
	if (!gflags[0x00DA]) goto labelFunc0435_0068;
	message("「我無法想像 Batlin 在哪裡。我很擔心他……」");
	say();
	goto labelFunc0435_006D;
	goto labelFunc0435_006D;
labelFunc0435_0068:
	message("「我現在不能說話！我正在前往禮堂參加友誼會集會的路上！」*");
	say();
	abort;
labelFunc0435_006D:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00B5]) goto labelFunc0435_008A;
	UI_add_answer("Willy");
labelFunc0435_008A:
	if (!(!gflags[0x00B6])) goto labelFunc0435_009C;
	message("你看見一位散發著半真半假友善氣息的女人。");
	say();
	gflags[0x00B6] = true;
	goto labelFunc0435_00A0;
labelFunc0435_009C:
	message("「又見面了，今天我能為你做些什麼？」 Gaye 問。");
	say();
labelFunc0435_00A0:
	converse attend labelFunc0435_01F2;
	case "姓名" attend labelFunc0435_00B6:
	message("「我的名字是 Gaye 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0435_00B6:
	case "職業" attend labelFunc0435_00D2:
	message("「當我不在追求友誼會教義的時候，我負責管理這裡的服飾店。」");
	say();
	UI_add_answer(["服飾店", "買東西", "友誼會"]);
labelFunc0435_00D2:
	case "服飾店" attend labelFunc0435_00E5:
	message("「在我們的服飾店，我們有你見過最精美的絲綢和服裝，從 Britannia 的各個角落進口，以迎合所有的品味。」");
	say();
	UI_remove_answer("服飾店");
labelFunc0435_00E5:
	case "買東西" attend labelFunc0435_01AD:
	if (!(!(var0003 == 0x0013))) goto labelFunc0435_00FF;
	message("「非常抱歉，服飾店打烊了。請在正常營業時間再來。我們每天早上九點營業到下午六點。」");
	say();
	goto labelFunc0435_01A6;
labelFunc0435_00FF:
	if (!gflags[0x0067]) goto labelFunc0435_0188;
	message("「別告訴我！是 Raymundo 派你來拿聖者服裝的！這要三十枚金幣。你想要一件嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0435_017E;
	message("她上下打量著你。「是的，我想我們應該能為你找到些什麼。」~~在店裡翻找了幾分鐘後， Gaye 回來了。「在這裡！剩不多了——最近很搶手！」");
	say();
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 < 0x001E)) goto labelFunc0435_013D;
	message("「嗯。也許你可以等你有足夠的金幣再來。」她把服裝放下並微笑著。");
	say();
	goto labelFunc0435_017B;
labelFunc0435_013D:
	var0007 = UI_add_party_items(0x0001, 0x0346, 0xFE99, 0xFE99, false);
	if (!(!var0007)) goto labelFunc0435_015F;
	message("「噢。你身上的東西太多，拿不下這個了。也許你可以處理掉一些東西，然後回來拿服裝。」");
	say();
	goto labelFunc0435_017B;
labelFunc0435_015F:
	message("「與您做生意真是我的榮幸，喔偉大的聖者！」她笑著把服裝遞給你。");
	say();
	var0008 = UI_remove_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0068] = true;
labelFunc0435_017B:
	goto labelFunc0435_0185;
labelFunc0435_017E:
	message("「真奇怪！我還以為你肯定是那種戲劇型的人物！」");
	say();
	Func088E();
labelFunc0435_0185:
	goto labelFunc0435_01A6;
labelFunc0435_0188:
	message("「你今天想買些衣服嗎？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0435_01A2;
	message("「我們有許多漂亮的衣服可供選擇。」");
	say();
	Func088E();
	goto labelFunc0435_01A6;
labelFunc0435_01A2:
	message("「你可以自己隨便看看。如果你改變主意，一定要讓我知道。」");
	say();
labelFunc0435_01A6:
	UI_remove_answer("買東西");
labelFunc0435_01AD:
	case "友誼會" attend labelFunc0435_01D1:
	if (!(!var0001)) goto labelFunc0435_01BF;
	Func0919();
labelFunc0435_01BF:
	message("「你會想參加今晚九點的友誼會集會的。聆聽我們創始人 Batlin 的演講，總是一次令人感動的體驗。」");
	say();
	UI_remove_answer("友誼會");
	UI_remove_answer("理念");
labelFunc0435_01D1:
	case "Willy" attend labelFunc0435_01E4:
	message("「是的，他是個非常有趣的人。我很為他著迷，也違背理智地與他見面。不過，他看起來不像是會加入友誼會的那種人。既然友誼會是我生命的全部，我不知道裡面是否有他的容身之處。我還沒拿定主意。」");
	say();
	UI_remove_answer("Willy");
labelFunc0435_01E4:
	case "告辭" attend labelFunc0435_01EF:
	goto labelFunc0435_01F2;
labelFunc0435_01EF:
	goto labelFunc0435_00A0;
labelFunc0435_01F2:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0435_01FD:
	if (!(event == 0x0000)) goto labelFunc0435_0284;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCB));
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0013)) goto labelFunc0435_027E;
	if (!(var000A == 0x0001)) goto labelFunc0435_0241;
	var000B = "@服飾？靴子？@";
labelFunc0435_0241:
	if (!(var000A == 0x0002)) goto labelFunc0435_0251;
	var000B = "@沼澤靴？@";
labelFunc0435_0251:
	if (!(var000A == 0x0003)) goto labelFunc0435_0261;
	var000B = "@上衣？洋裝？@";
labelFunc0435_0261:
	if (!(var000A == 0x0004)) goto labelFunc0435_0271;
	var000B = "@這裡有華麗的服裝！@";
labelFunc0435_0271:
	UI_item_say(0xFFCB, var000B);
	goto labelFunc0435_0284;
labelFunc0435_027E:
	Func092E(0xFFCB);
labelFunc0435_0284:
	return;
}


