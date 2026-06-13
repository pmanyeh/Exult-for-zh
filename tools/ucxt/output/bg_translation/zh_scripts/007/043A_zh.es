#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func043A object#(0x43A) ()
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

	if (!(event == 0x0001)) goto labelFunc043A_0258;
	UI_show_npc_face(0xFFC6, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFC6));
	if (!(var0002 == 0x0007)) goto labelFunc043A_006D;
	var0004 = Func08FC(0xFFC6, 0xFFE6);
	if (!var0004) goto labelFunc043A_0058;
	message("Gordon 太專心聆聽友誼會集會，以至於沒聽到你的聲音。*");
	say();
	abort;
	goto labelFunc043A_006D;
labelFunc043A_0058:
	if (!gflags[0x00DA]) goto labelFunc043A_0068;
	message("「Batlin 究竟在哪裡？他開會遲到了！」");
	say();
	goto labelFunc043A_006D;
	goto labelFunc043A_006D;
labelFunc043A_0068:
	message("「哎呀！我必須立刻離開！我參加友誼會集會要遲到了！」*");
	say();
	abort;
labelFunc043A_006D:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00BB])) goto labelFunc043A_008F;
	message("你看見一張友善的面孔看著你。");
	say();
	gflags[0x00BB] = true;
	goto labelFunc043A_0099;
labelFunc043A_008F:
	message("「在這美好的一天你過得如何，");
	message(var0000);
	message("？」 Gordon 問。");
	say();
labelFunc043A_0099:
	converse attend labelFunc043A_024D;
	case "姓名" attend labelFunc043A_00AF:
	message("「我的名字是 Gordon 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043A_00AF:
	case "職業" attend labelFunc043A_00C8:
	message("「我從我的餐車賣炸魚薯條。」");
	say();
	UI_add_answer(["炸魚薯條", "餐車"]);
labelFunc043A_00C8:
	case "炸魚薯條" attend labelFunc043A_014B:
	if (!(!(var0003 == 0x0007))) goto labelFunc043A_00E3;
	message("「請在我營業時間再來。」*");
	say();
	abort;
	goto labelFunc043A_0144;
labelFunc043A_00E3:
	message("「我有你在全 Britannia 能嚐到最棒的炸魚薯條。我的價格只要每份 8 枚金幣。你想來點嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc043A_0140;
	var0006 = UI_remove_party_items(0x0008, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc043A_0139;
	var0007 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x001E, true);
	if (!var0007) goto labelFunc043A_0132;
	message("他遞給你一個盤子。");
	say();
	message("「這真的是全 Britannia 最棒的炸魚薯條。」");
	say();
	goto labelFunc043A_0136;
labelFunc043A_0132:
	message("「你身上的東西太多，拿不下你的炸魚薯條了！」");
	say();
labelFunc043A_0136:
	goto labelFunc043A_013D;
labelFunc043A_0139:
	message("「你沒有足夠的金幣來買炸魚薯條。抱歉啦！」");
	say();
labelFunc043A_013D:
	goto labelFunc043A_0144;
labelFunc043A_0140:
	message("「當你餓了的時候再來，我相信你會改變主意的。」");
	say();
labelFunc043A_0144:
	UI_remove_answer("炸魚薯條");
labelFunc043A_014B:
	case "餐車" attend labelFunc043A_016B:
	message("「我最近剛漆了我的餐車。它獲得了更多關注。現在生意好多了。我正在存錢要去海盜巢穴 (Buccaneer's Den) 旅行。」");
	say();
	UI_remove_answer("餐車");
	UI_add_answer(["生意", "海盜巢穴"]);
labelFunc043A_016B:
	case "生意" attend labelFunc043A_018B:
	message("「自從我成為友誼會成員後，生意就穩定成長。我改良並提升了炸魚麵糊的食譜，從那以後它就成了幾乎所有 Britain 人最喜歡的一餐。我甚至還把炸魚薯條供應給 Lord British 本人。」");
	say();
	UI_add_answer(["友誼會", "Lord British"]);
	UI_remove_answer("生意");
labelFunc043A_018B:
	case "Lord British" attend labelFunc043A_019E:
	message("「你知道的——就是那個戴著王冠、舉止像國王的傢伙。」");
	say();
	UI_remove_answer("Lord British");
labelFunc043A_019E:
	case "友誼會" attend labelFunc043A_01D4:
	if (!var0001) goto labelFunc043A_01CA;
	message("「很高興看到你也是成員。我們下次集會見？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc043A_01C3;
	message("「那麼我們九點整見！」");
	say();
	goto labelFunc043A_01C7;
labelFunc043A_01C3:
	message("「你應該更嚴格地實踐友誼會的教義！我們的集會是九點。我看你真的很需要參加。」");
	say();
labelFunc043A_01C7:
	goto labelFunc043A_01CD;
labelFunc043A_01CA:
	Func0919();
labelFunc043A_01CD:
	UI_remove_answer("友誼會");
labelFunc043A_01D4:
	case "理念" attend labelFunc043A_01E6:
	Func091A();
	UI_remove_answer("理念");
labelFunc043A_01E6:
	case "海盜巢穴" attend labelFunc043A_0206:
	message("「我希望能去海盜巢穴贏點錢。那是個海盜勝地，他們那裡有間超棒的賭坊 (House of Games)。」");
	say();
	UI_add_answer(["海盜勝地", "賭坊"]);
	UI_remove_answer("海盜巢穴");
labelFunc043A_0206:
	case "海盜勝地" attend labelFunc043A_0219:
	message("「我相信你也知道，海盜巢穴曾是小偷和惡棍的巢穴。因此，對於那些渴望體驗這種冒險生活的人來說，它有一種浪漫的吸引力。我承認，我就是其中之一。當你一生都在餐車賣魚時，你會需要一些刺激。海盜們最終意識到他們在暗地裡是多麼受人羨慕，所以他們把他們的島嶼變成了一個充滿刺激娛樂的地方。」");
	say();
	UI_remove_answer("海盜勝地");
labelFunc043A_0219:
	case "賭坊" attend labelFunc043A_022C:
	message("「據說他們那裡有幾種賭博遊戲！可以透過下注賽馬的結果來贏得金幣。」");
	say();
	UI_remove_answer("賭坊");
labelFunc043A_022C:
	case "友誼會" attend labelFunc043A_023F:
	message("「我看到你領取了徽章。我敢肯定地說，友誼會為我的生活帶來了奇蹟，我知道對你也會是一樣的。」他給了你一個會心的微笑。");
	say();
	UI_remove_answer("友誼會");
labelFunc043A_023F:
	case "告辭" attend labelFunc043A_024A:
	goto labelFunc043A_024D;
labelFunc043A_024A:
	goto labelFunc043A_0099;
labelFunc043A_024D:
	endconv;
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc043A_0258:
	if (!(event == 0x0000)) goto labelFunc043A_02DF;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFC6));
	var0009 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc043A_02D9;
	if (!(var0009 == 0x0001)) goto labelFunc043A_029C;
	var000A = "「炸魚薯條！」";
labelFunc043A_029C:
	if (!(var0009 == 0x0002)) goto labelFunc043A_02AC;
	var000A = "「熱騰騰的炸魚薯條！」";
labelFunc043A_02AC:
	if (!(var0009 == 0x0003)) goto labelFunc043A_02BC;
	var000A = "「好吃的炸魚薯條！」";
labelFunc043A_02BC:
	if (!(var0009 == 0x0004)) goto labelFunc043A_02CC;
	var000A = "「賣炸魚薯條喔！」";
labelFunc043A_02CC:
	UI_item_say(0xFFC6, var000A);
	goto labelFunc043A_02DF;
labelFunc043A_02D9:
	Func092E(0xFFC6);
labelFunc043A_02DF:
	return;
}


