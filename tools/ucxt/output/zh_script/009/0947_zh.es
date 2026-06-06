#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0925 0x925 (var var0000);

void Func0947 0x947 ()
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
	var var000C;
	var var000D;
	var var000E;

	UI_push_answers();
	message("「太好了！你有麵包給我嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0947_0135;
	message("「很好！讓我看看你有多少……」");
	say();
	var0001 = UI_find_nearby(0xFE9C, 0x0179, 0x0019, 0x0000);
	var0002 = UI_get_party_list();
	enum();
labelFunc0947_0033:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0947_0058;
	var0001 = (var0001 & UI_get_cont_items(var0005, 0x0179, 0xFE99, 0x0000));
	goto labelFunc0947_0033;
labelFunc0947_0058:
	var0006 = 0x0000;
	var0007 = [];
	enum();
labelFunc0947_0065:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0947_00B1;
	if (!((UI_get_item_frame(var000A) == 0x0000) && UI_get_item_flag(var000A, 0x000B))) goto labelFunc0947_00AE;
	if (!(UI_get_distance(var000A, 0xFFCC) <= 0x0019)) goto labelFunc0947_00AE;
	var0006 = (var0006 + 0x0001);
	var0007 = (var0007 & var000A);
labelFunc0947_00AE:
	goto labelFunc0947_0065;
labelFunc0947_00B1:
	var000B = ((var0006 / 0x0005) * 0x0005);
	if (!(var000B == 0x0000)) goto labelFunc0947_00D0;
	message("「你做的麵包還不夠換取任何報酬。」");
	say();
	goto labelFunc0947_0132;
labelFunc0947_00D0:
	message("「太美味了！ ");
	message(var0006);
	message(" 個麵包！這表示我該給你 ");
	message(var000B);
	message(" 枚金幣。給你！我現在就把麵包收下了！」");
	say();
	var000C = UI_add_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000C) goto labelFunc0947_012E;
	enum();
labelFunc0947_00FB:
	for (var000A in var0007 with var000D to var000E) attend labelFunc0947_0126;
	if (!UI_get_container(var000A)) goto labelFunc0947_0119;
	Func0925(var000A);
	goto labelFunc0947_0123;
labelFunc0947_0119:
	UI_clear_item_flag(var000A, 0x000B);
labelFunc0947_0123:
	goto labelFunc0947_00FB;
labelFunc0947_0126:
	message("「隨時歡迎你回來為我工作！」");
	say();
	abort;
	goto labelFunc0947_0132;
labelFunc0947_012E:
	message("「如果你能減輕一點行囊，你就有手來拿我的金幣了！」");
	say();
labelFunc0947_0132:
	goto labelFunc0947_0139;
labelFunc0947_0135:
	message("「沒有？那你都在做什麼？到處摸魚嗎？哈哈哈！」");
	say();
labelFunc0947_0139:
	UI_pop_answers();
	return;
}


