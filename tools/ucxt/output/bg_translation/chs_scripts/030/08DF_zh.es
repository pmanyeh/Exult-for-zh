#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func08DF 0x8DF ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFF9B, 0x0000);
	message("像猿猴一样的生物缓慢而小心地走向你。牠嗅了一会儿，然后指着你带着的蜂蜜。");
	say();
	UI_add_answer(["想要蜂蜜吗？", "走开！"]);
labelFunc08DF_001B:
	converse attend labelFunc08DF_007D;
	case "想要蜂蜜吗？" attend labelFunc08DF_006D:
	message("「你要把蜂蜜给我吗？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc08DF_005B;
	var0001 = UI_remove_party_items(0x0001, 0x0304, 0xFE99, 0xFE99, true);
	message("「谢谢你。」");
	say();
	Func0911(0x000A);
	gflags[0x0154] = true;
	goto labelFunc08DF_0060;
labelFunc08DF_005B:
	message("「对你说『再见』。」*");
	say();
	abort;
labelFunc08DF_0060:
	UI_remove_answer(["想要蜂蜜吗？", "走开！"]);
labelFunc08DF_006D:
	case "走开！" attend labelFunc08DF_007A:
	message("好吧...*");
	say();
	abort;
labelFunc08DF_007A:
	goto labelFunc08DF_001B;
labelFunc08DF_007D:
	endconv;
	return;
}


