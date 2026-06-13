#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func08EE 0x8EE ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFFFA, 0x0000);
	message("像猿猴一樣的生物緩慢而小心地走向你。牠嗅了一會兒，然後指著你帶著的蜂蜜。");
	say();
	UI_add_answer(["想要蜂蜜？", "走開！"]);
labelFunc08EE_001B:
	converse attend labelFunc08EE_007D;
	case "想要蜂蜜？" attend labelFunc08EE_006D:
	message("「蜂蜜要給我嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc08EE_005B;
	var0001 = UI_remove_party_items(0x0001, 0x0304, 0xFE99, 0xFE99, true);
	message("「謝謝你！」");
	say();
	Func0911(0x000A);
	gflags[0x0154] = true;
	goto labelFunc08EE_0060;
labelFunc08EE_005B:
	message("「對你說『再見』。」*");
	say();
	abort;
labelFunc08EE_0060:
	UI_remove_answer(["想要蜂蜜？", "走開！"]);
labelFunc08EE_006D:
	case "走開！" attend labelFunc08EE_007A:
	message("好吧...*");
	say();
	abort;
labelFunc08EE_007A:
	goto labelFunc08EE_001B;
labelFunc08EE_007D:
	endconv;
	return;
}


