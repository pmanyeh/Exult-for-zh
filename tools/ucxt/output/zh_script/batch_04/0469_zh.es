#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0469 object#(0x469) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0469_0137;
	UI_show_npc_face(0xFF97, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0143])) goto labelFunc0469_003A;
	message("這名男子用嚴厲、懷疑的眼光跟你打招呼。");
	say();
	gflags[0x0143] = true;
	goto labelFunc0469_0044;
labelFunc0469_003A:
	message("「你有何貴幹， ");
	message(var0000);
	message("？」");
	say();
labelFunc0469_0044:
	converse attend labelFunc0469_012C;
	case "姓名" attend labelFunc0469_0060:
	message("「我是 Jeff 爵士， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0469_0060:
	case "職業" attend labelFunc0469_0079:
	message("「我是這修道院裡監獄的高等法院官員。」");
	say();
	UI_add_answer(["官員", "修道院"]);
labelFunc0469_0079:
	case "官員" attend labelFunc0469_0093:
	message("「我是 Britannia 政府司法部門的人。我的工作就是確保罪犯受到法律制裁。」");
	say();
	UI_add_answer("罪犯");
	UI_remove_answer("官員");
labelFunc0469_0093:
	case "罪犯" attend labelFunc0469_00B3:
	message("「我們已經有兩名囚犯了，但還有很多無賴逍遙法外。」");
	say();
	UI_add_answer(["囚犯", "無賴"]);
	UI_remove_answer("罪犯");
labelFunc0469_00B3:
	case "囚犯" attend labelFunc0469_00CD:
	message("「你當然沒見過他們，」他眉頭深鎖，「但我們有一個海盜，還有，」他停頓了一下，「一個巨魔 (troll) 。如果你想見他們，去跟獄卒 Goth 談談。」");
	say();
	UI_add_answer("Goth");
	UI_remove_answer("囚犯");
labelFunc0469_00CD:
	case "無賴" attend labelFunc0469_00E0:
	message("「自己去看吧，關於已知惡棍的公告都在法庭的日誌本裡。」");
	say();
	UI_remove_answer("無賴");
labelFunc0469_00E0:
	case "Goth" attend labelFunc0469_010B:
	message("「他才在這裡工作了幾個星期，但我已經知道他不可靠。他身上明顯有一種肆無忌憚的氣質。他不是你的朋友，對吧？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0469_0100;
	message("「我就知道。」他轉身不看你。*");
	say();
	abort;
	goto labelFunc0469_0104;
labelFunc0469_0100:
	message("「不是，」他緊緊盯著你說，「他當然不是。」");
	say();
labelFunc0469_0104:
	UI_remove_answer("Goth");
labelFunc0469_010B:
	case "修道院" attend labelFunc0469_011E:
	message("「僧侶們在那裡生活和學習，但他們除了釀酒幾乎什麼都不做。嗯，我知道他們其中有一個人在打理花園。」");
	say();
	UI_remove_answer("修道院");
labelFunc0469_011E:
	case "告辭" attend labelFunc0469_0129:
	goto labelFunc0469_012C;
labelFunc0469_0129:
	goto labelFunc0469_0044;
labelFunc0469_012C:
	endconv;
	message("「讓你的身心保持在正道上， ");
	message(var0000);
	message("。」");
	say();
labelFunc0469_0137:
	if (!(event == 0x0000)) goto labelFunc0469_0140;
	abort;
labelFunc0469_0140:
	return;
}


