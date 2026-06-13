#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();

void Func0454 object#(0x454) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0454_0009;
	abort;
labelFunc0454_0009:
	UI_show_npc_face(0xFFAC, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x010F])) goto labelFunc0454_003B;
	message("你看到一個年輕的吉普賽小夥子。他戴著一個友誼會的護身符。他垂著眼，表情極度悲傷。");
	say();
	gflags[0x010F] = true;
	goto labelFunc0454_0045;
labelFunc0454_003B:
	message("Sasha 抬起頭。「祝你有個美好的一天，");
	message(var0000);
	message("。」");
	say();
labelFunc0454_0045:
	converse attend labelFunc0454_012B;
	case "姓名" attend labelFunc0454_005B:
	message("「我的名字是 Sasha 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0454_005B:
	case "職業" attend labelFunc0454_0077:
	message("「我太年輕了，還不能工作。我是個吉普賽人，因為我的父母也是吉普賽人。我也是友誼會的成員。」");
	say();
	UI_add_answer(["父母", "吉普賽人", "友誼會"]);
labelFunc0454_0077:
	case "父母" attend labelFunc0454_0091:
	message("「我的父母—— Frederico 和 Tania ——被謀殺了。我不知道為什麼有人會想傷害他們。」男孩哽咽地說出這些話。突然間，他被悲傷淹沒，無法再說下去了。");
	say();
	UI_remove_answer("父母");
	UI_add_answer("謀殺案");
labelFunc0454_0091:
	case "謀殺案" attend labelFunc0454_00A4:
	message("「這發生在 Minoc 的鋸木廠。」");
	say();
	UI_remove_answer("謀殺案");
labelFunc0454_00A4:
	case "友誼會" attend labelFunc0454_00BA:
	Func0919();
	message("「在過去的一個星期裡，我一直離家為友誼會工作。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0454_00BA:
	case "理念" attend labelFunc0454_00CC:
	Func091A();
	UI_remove_answer("理念");
labelFunc0454_00CC:
	case "吉普賽人" attend labelFunc0454_00EC:
	message("「我回來和 Margareta 及 Jergi 在一起，為我的父母哀悼。他們不贊成我加入友誼會，但我知道他們是出於對我的愛才關心我的，就像我愛他們一樣。」");
	say();
	UI_remove_answer("吉普賽人");
	UI_add_answer(["Margareta", "Jergi"]);
labelFunc0454_00EC:
	case "Margareta" attend labelFunc0454_00FF:
	message("「她非常聰明，知道很多事情，但是當我問她我應該回到友誼會還是留下來和他們在一起時，她沒有回答我。」");
	say();
	UI_remove_answer("Margareta");
labelFunc0454_00FF:
	case "Jergi" attend labelFunc0454_011D:
	message("「他是我父親的兄弟。他是個好人，也很聰明。現在他是我們人民的領袖。他會做對我們有益的事。」");
	say();
	if (!(!gflags[0x011B])) goto labelFunc0454_0116;
	message("「也許你應該跟他說說話。」");
	say();
labelFunc0454_0116:
	UI_remove_answer("Jergi");
labelFunc0454_011D:
	case "告辭" attend labelFunc0454_0128:
	goto labelFunc0454_012B;
labelFunc0454_0128:
	goto labelFunc0454_0045;
labelFunc0454_012B:
	endconv;
	message("小夥子堅忍地點點頭，轉身離開。*");
	say();
	return;
}


