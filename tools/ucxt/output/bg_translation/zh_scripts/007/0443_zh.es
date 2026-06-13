#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0854 0x854 ();
extern void Func092E 0x92E (var var0000);

void Func0443 object#(0x443) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0443_0147;
	UI_show_npc_face(0xFFBD, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0072] == true)) goto labelFunc0443_0031;
	UI_add_answer("羊肉");
labelFunc0443_0031:
	if (!(!gflags[0x00C4])) goto labelFunc0443_0043;
	message("這是一位老奶奶，簡直就是『慈祥祖母』的縮影。");
	say();
	gflags[0x00C4] = true;
	goto labelFunc0443_0047;
labelFunc0443_0043:
	message("「又見面了！」 Boots 說。");
	say();
labelFunc0443_0047:
	converse attend labelFunc0443_0142;
	case "姓名" attend labelFunc0443_005D:
	message("「當我還是個小嬰兒的時候，我所有的兄弟姊妹都叫我『Boots』，從那以後這就成了我的名字。」");
	say();
	UI_remove_answer("姓名");
labelFunc0443_005D:
	case "職業" attend labelFunc0443_0070:
	message("「哎呀，我是 Lord British 的私人廚師！我負責準備整個城堡的餐點。」");
	say();
	UI_add_answer("餐點");
labelFunc0443_0070:
	case "餐點" attend labelFunc0443_0093:
	message("「只要在早餐或晚餐時間去餐廳，我丈夫 Bennie 就會為你服務！」");
	say();
	UI_add_answer(["早餐", "晚餐", "Bennie"]);
	UI_remove_answer("餐點");
labelFunc0443_0093:
	case "早餐" attend labelFunc0443_00A6:
	message("「早餐我通常會準備一道陛下從他家鄉帶來的美食。在這裡我們稱之為『不列顛蛋 (Eggs British)』。當然，它會搭配什錦水果和茶。這是國王的最愛。」");
	say();
	UI_remove_answer("早餐");
labelFunc0443_00A6:
	case "晚餐" attend labelFunc0443_00B9:
	message("「這頓飯通常是 Lord British 要求的任何肉類、野味或魚，並伴隨幾道配菜和一份精美的甜點。」");
	say();
	UI_remove_answer("晚餐");
labelFunc0443_00B9:
	case "Bennie" attend labelFunc0443_00DD:
	message("「他是個親愛的，但他晚年變得有點健忘。他總是不記得從 Paws 的屠宰場帶足夠的肉回來。事實上，我們這週缺貨了！」");
	say();
	UI_add_answer(["健忘", "缺貨"]);
	UI_remove_answer("Bennie");
	gflags[0x0071] = true;
labelFunc0443_00DD:
	case "健忘" attend labelFunc0443_00F0:
	message("「上週我叫他在湯裡放一點大蒜。他放了大蒜，然後就忘了這回事。所以他又去放了一些。然後他又忘了自己放過。所以他又放了更多。嗯，你可以想像 Lord British 最後嚐到那碗湯時臉上的表情！幸好我們是在如此公正的統治者的城堡裡生活和工作。」");
	say();
	UI_remove_answer("健忘");
labelFunc0443_00F0:
	case "缺貨" attend labelFunc0443_011E:
	message("「沒錯，我們的肉不夠。如果你能從屠宰場帶羊肉給我，你每帶一份我就付你 5 枚金幣。好嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0443_0113;
	message("「太好了，我會等著你回來！」");
	say();
	gflags[0x0072] = true;
	goto labelFunc0443_0117;
labelFunc0443_0113:
	message("「喔，親愛的。嗯，我知道你很忙。那就下次吧。」");
	say();
labelFunc0443_0117:
	UI_remove_answer("缺貨");
labelFunc0443_011E:
	case "羊肉" attend labelFunc0443_0134:
	message("「太棒了！讓我想想，如果我沒記錯的話，我們說好每份 5 枚金幣。」");
	say();
	Func0854();
	UI_remove_answer("羊肉");
labelFunc0443_0134:
	case "告辭" attend labelFunc0443_013F:
	goto labelFunc0443_0142;
labelFunc0443_013F:
	goto labelFunc0443_0047;
labelFunc0443_0142:
	endconv;
	message("「再見囉！」*");
	say();
labelFunc0443_0147:
	if (!(event == 0x0000)) goto labelFunc0443_0155;
	Func092E(0xFFBD);
labelFunc0443_0155:
	return;
}


