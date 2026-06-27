#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0444 object#(0x444) ()
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

	if (!(event == 0x0001)) goto labelFunc0444_01AC;
	UI_show_npc_face(0xFFBC, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0071]) goto labelFunc0444_0035;
	UI_add_answer("健忘");
labelFunc0444_0035:
	var0001 = UI_part_of_day();
	var0002 = UI_get_party_list();
	if (!(!gflags[0x00C5])) goto labelFunc0444_0055;
	message("你看見一位充滿幽默感，帶著溫暖笑容的老先生。");
	say();
	gflags[0x00C5] = true;
	goto labelFunc0444_0059;
labelFunc0444_0055:
	message("「什麼事，聖者？」 Bennie 帶著權威的口吻問道。");
	say();
labelFunc0444_0059:
	converse attend labelFunc0444_01A1;
	case "姓名" attend labelFunc0444_006F:
	message("「我所有的朋友都叫我 Bennie 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0444_006F:
	case "職業" attend labelFunc0444_0088:
	message("「我是城堡的僕人總管。我的工作包括管理其他僕人，以及上菜。」");
	say();
	UI_add_answer(["僕人總管", "餐點"]);
labelFunc0444_0088:
	case "僕人總管" attend labelFunc0444_009B:
	message("「是的，我擔任僕人總管已經很多年了。我整個家族都在為不列顛王工作。我的兒子是國王的貼身男僕。我的女兒是皇家女僕。我的妻子是主廚。我們很榮幸能為不列顛王工作。」");
	say();
	UI_remove_answer("僕人總管");
labelFunc0444_009B:
	case "餐點" attend labelFunc0444_0180:
	message("「我的妻子，Boots ，是主廚。她的拿手菜是烤牛肉。她也做非常棒的糕點。吃夠多這些東西，就會讓你擁有一個非常不『聖者』的身材！");
	say();
	if (!((var0001 == 0x0003) || (var0001 == 0x0006))) goto labelFunc0444_0175;
	message("「你想點餐嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0444_016E;
	if (!gflags[0x00D8]) goto labelFunc0444_00DC;
	var0004 = UI_get_timer(0x0001);
	goto labelFunc0444_00E6;
labelFunc0444_00DC:
	gflags[0x00D8] = true;
	var0004 = 0x0019;
labelFunc0444_00E6:
	if (!(var0004 >= 0x0018)) goto labelFunc0444_0161;
	message("「對你來說，這是免費的！」~~Bennie 為你和你的隊伍端上美味的牛肉和糕點。");
	say();
	var0002 = UI_get_party_list();
	var0005 = 0x0000;
	enum();
labelFunc0444_0102:
	for (var0008 in var0002 with var0006 to var0007) attend labelFunc0444_011A;
	var0005 = (var0005 + 0x0001);
	goto labelFunc0444_0102;
labelFunc0444_011A:
	var0009 = UI_add_party_items(var0005, 0x0179, 0xFE99, 0x0009, true);
	var000A = UI_add_party_items(var0005, 0x0179, 0xFE99, 0x0006, true);
	if (!(var000A || var0009)) goto labelFunc0444_015A;
	UI_set_timer(0x0001);
	message("「明天再來，你就可以享用另一頓免費餐點。」");
	say();
	goto labelFunc0444_015E;
labelFunc0444_015A:
	message("「你身上的東西太多，拿不下牛肉和糕點了！」");
	say();
labelFunc0444_015E:
	goto labelFunc0444_016B;
labelFunc0444_0161:
	message("「我很抱歉，");
	message(var0000);
	message("，但我一天只能為你服務一次。明天再來用餐吧。」");
	say();
labelFunc0444_016B:
	goto labelFunc0444_0172;
labelFunc0444_016E:
	message("「喔。嗯，當你餓的時候一定要回來。」");
	say();
labelFunc0444_0172:
	goto labelFunc0444_0179;
labelFunc0444_0175:
	message("「在早餐或晚餐時間來到餐廳，我將非常榮幸為你服務！」");
	say();
labelFunc0444_0179:
	UI_remove_answer("餐點");
labelFunc0444_0180:
	case "健忘" attend labelFunc0444_0193:
	message("「是的，我想我是。我的聽力也變差了一點。當你活到我這個歲數，人的感官能力就不再完美了。」");
	say();
	UI_remove_answer("健忘");
labelFunc0444_0193:
	case "告辭" attend labelFunc0444_019E:
	goto labelFunc0444_01A1;
labelFunc0444_019E:
	goto labelFunc0444_0059;
labelFunc0444_01A1:
	endconv;
	message("「旅途平安，");
	message(var0000);
	message("。」*");
	say();
labelFunc0444_01AC:
	if (!(event == 0x0000)) goto labelFunc0444_01BA;
	Func092E(0xFFBC);
labelFunc0444_01BA:
	return;
}


