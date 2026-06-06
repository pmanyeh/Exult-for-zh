#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func08B8 0x8B8 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	UI_push_answers();
	var0000 = 0x0001;
	var0001 = 0x0001;
	message("「太好了！你有雞蛋要給我嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc08B8_00A4;
	message("「非常好！讓我看看你有多少……」");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0018);
	if (!(var0003 == 0x0000)) goto labelFunc08B8_0049;
	message("「但你身上連一顆都沒有！你在浪費我的時間！」*");
	say();
	abort;
	goto labelFunc08B8_00A1;
labelFunc08B8_0049:
	var0004 = ((var0003 / var0001) * var0000);
	message("「太棒了！ ");
	message(var0003);
	message(" 個！這意味著我欠你 ");
	message(var0004);
	message(" 個金幣。拿去吧！我現在要把這些雞蛋收下了！」");
	say();
	var0005 = UI_add_party_items(var0004, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc08B8_009D;
	var0006 = UI_remove_party_items(var0003, 0x0179, 0xFE99, 0x0018, true);
	message("「隨時歡迎回來為我工作！」*");
	say();
	abort;
	goto labelFunc08B8_00A1;
labelFunc08B8_009D:
	message("「如果你能輕裝旅行，你就有手來拿我的金幣了！」");
	say();
labelFunc08B8_00A1:
	goto labelFunc08B8_00A8;
labelFunc08B8_00A4:
	message("「沒有？你對我的雞做了什麼？你該不會是什麼禽類變態吧？」");
	say();
labelFunc08B8_00A8:
	UI_pop_answers();
	return;
}