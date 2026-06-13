#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0857 0x857 ()
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

	UI_push_answers();
	var0000 = 0x0001;
	var0001 = 0x0001;
	message("「太棒了！你給我帶了些南瓜嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0857_00D5;
	message("「非常好！讓我看看你有多少個……」");
	say();
	var0003 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0014);
	var0004 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0015);
	var0005 = (var0003 + var0004);
	if (!(var0005 == 0x0000)) goto labelFunc0857_0066;
	message("「但是你身上連一個都沒有！你簡直和 Mack 一樣瘋狂！」*");
	say();
	abort;
	goto labelFunc0857_00D2;
labelFunc0857_0066:
	var0006 = ((var0005 / var0001) * var0000);
	message("「太棒了！");
	message(var0005);
	message("！這意味著我欠你 ");
	message(var0006);
	message(" 金幣。給你！我現在就把南瓜拿走！」");
	say();
	var0007 = UI_add_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc0857_00CE;
	var0008 = UI_remove_party_items(var0003, 0x0179, 0xFE99, 0x0014, true);
	var0008 = UI_remove_party_items(var0004, 0x0179, 0xFE99, 0x0015, true);
	message("「隨時回來為我工作！」*");
	say();
	abort;
	goto labelFunc0857_00D2;
labelFunc0857_00CE:
	message("「如果你能輕裝旅行，你就有手拿我的金幣了！」");
	say();
labelFunc0857_00D2:
	goto labelFunc0857_00D9;
labelFunc0857_00D5:
	message("「沒有嗎？那你在我的田裡做什麼？你和大多數你能找到的工人一樣毫無價值！」");
	say();
labelFunc0857_00D9:
	UI_pop_answers();
	return;
}


