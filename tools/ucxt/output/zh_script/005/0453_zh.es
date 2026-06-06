#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08BA 0x8BA ();

void Func0453 object#(0x453) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0453_0009;
	abort;
labelFunc0453_0009:
	UI_show_npc_face(0xFFAD, 0x0000);
	var0000 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00FE]) goto labelFunc0453_0040;
	UI_add_answer(["謀殺案", "Frederico", "Tania"]);
labelFunc0453_0040:
	if (!gflags[0x00FF]) goto labelFunc0453_004D;
	UI_add_answer("Sasha");
labelFunc0453_004D:
	if (!(!gflags[0x010E])) goto labelFunc0453_005F;
	message("你看到一位年輕迷人的吉普賽女人，有著充滿智慧、彷彿能看穿靈魂的雙眼。");
	say();
	gflags[0x010E] = true;
	goto labelFunc0453_007B;
labelFunc0453_005F:
	message("「你希望再跟我說話嗎？」Margareta 問。");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0453_0076;
	message("「很好。」");
	say();
	goto labelFunc0453_007B;
labelFunc0453_0076:
	message("「很好。」*");
	say();
	abort;
labelFunc0453_007B:
	converse attend labelFunc0453_01A8;
	case "姓名" attend labelFunc0453_0091:
	message("「 Margareta 為你服務，」她緩慢地說著。");
	say();
	UI_remove_answer("姓名");
labelFunc0453_0091:
	case "職業" attend labelFunc0453_00A4:
	message("吉普賽女人微微一笑。「為你占卜命運。」");
	say();
	UI_add_answer("命運");
labelFunc0453_00A4:
	case "謀殺案" attend labelFunc0453_00B7:
	message("「我就知道會發生這種事。我警告過 Frederico 。他不聽。」");
	say();
	UI_remove_answer("謀殺案");
labelFunc0453_00B7:
	case "Frederico" attend labelFunc0453_00D1:
	message("「他是我丈夫的兄弟。他的死讓我非常傷心。」");
	say();
	UI_remove_answer("Frederico");
	UI_add_answer("丈夫");
labelFunc0453_00D1:
	case "Tania" attend labelFunc0453_00E4:
	message("「她是 Frederico 的妻子，但你已經知道了，不是嗎？她是個好女人。」");
	say();
	UI_remove_answer("Tania");
labelFunc0453_00E4:
	case "Sasha" attend labelFunc0453_0104:
	message("Margareta 沉默了一會兒。~~「他誤入歧途了。不幸的是，他只有在父母雙亡的結果下，才會意識到自己的錯誤。」");
	say();
	UI_add_answer(["誤入歧途", "錯誤"]);
	UI_remove_answer("Sasha");
labelFunc0453_0104:
	case "誤入歧途" attend labelFunc0453_0117:
	message("「還有很多很多像 Sasha 一樣誤入歧途的人。對他們，我看不到未來。」");
	say();
	UI_remove_answer("誤入歧途");
labelFunc0453_0117:
	case "錯誤" attend labelFunc0453_0142:
	message("「你知道我是什麼意思。");
	say();
	if (!gflags[0x0006]) goto labelFunc0453_0130;
	message("「你自己就是個成員。」");
	say();
	goto labelFunc0453_0134;
labelFunc0453_0130:
	message("「友誼會。」");
	say();
labelFunc0453_0134:
	UI_add_answer("友誼會");
	UI_remove_answer("錯誤");
labelFunc0453_0142:
	case "友誼會" attend labelFunc0453_0175:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc0453_015D;
	message("Margareta 看到你的護身符，抬起了眼睛。");
	say();
	message("「我看到你戴著他們的一個護身符，但你並不是真正的成員，對吧？小心點——友誼會裡有些人會看穿你的偽裝。」");
	say();
labelFunc0453_015D:
	if (!gflags[0x0006]) goto labelFunc0453_016A;
	message("「你很快就會明白他們的真面目。」");
	say();
	goto labelFunc0453_016E;
labelFunc0453_016A:
	message("「到了適當的時候，你會了解更多關於他們的事。」");
	say();
labelFunc0453_016E:
	UI_remove_answer("友誼會");
labelFunc0453_0175:
	case "命運" attend labelFunc0453_0187:
	Func08BA();
	UI_remove_answer("命運");
labelFunc0453_0187:
	case "丈夫" attend labelFunc0453_019A:
	message("「 Jergi 當然是我的丈夫。現在他肩負著在這些動盪時期引導吉普賽民族的重任。」");
	say();
	UI_remove_answer("丈夫");
labelFunc0453_019A:
	case "告辭" attend labelFunc0453_01A5:
	goto labelFunc0453_01A8;
labelFunc0453_01A5:
	goto labelFunc0453_007B;
labelFunc0453_01A8:
	endconv;
	message("「再會。平平安安地去吧。」*");
	say();
	return;
}


