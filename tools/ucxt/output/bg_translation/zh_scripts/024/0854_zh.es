#game "blackgate"
// externs
extern var Func0909 0x909 ();

void Func0854 0x854 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0909();
labelFunc0854_0006:
	message("「你想賣多少份？」");
	say();
	var0001 = UI_input_numeric_value(0x0000, 0x000A, 0x0001, 0x0000);
	if (!(var0001 == 0x0000)) goto labelFunc0854_002E;
	message("「喔，天啊。我們真的很需要肉。好吧，也許下次吧。」");
	say();
	goto labelFunc0854_009F;
labelFunc0854_002E:
	var0002 = UI_count_objects(0xFE9B, 0x0179, 0xFE99, 0x0008);
	if (!(var0002 < var0001)) goto labelFunc0854_0055;
	message("「你不能賣你沒有的東西！現在，說真的……！」");
	say();
	goto labelFunc0854_0006;
	goto labelFunc0854_009F;
labelFunc0854_0055:
	message("「太棒了！我接受這筆交易，");
	message(var0000);
	message("。這是你的金幣。」");
	say();
	var0003 = (var0001 * 0x0005);
	var0004 = UI_add_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0004)) goto labelFunc0854_008B;
	message("「喔，天啊。你不可能拿得動這麼多金幣！也許等你放下些別的東西後再來吧。」");
	say();
	goto labelFunc0854_009F;
labelFunc0854_008B:
	var0005 = UI_remove_party_items(var0001, 0x0179, 0xFE99, 0x0008, true);
labelFunc0854_009F:
	return;
}


