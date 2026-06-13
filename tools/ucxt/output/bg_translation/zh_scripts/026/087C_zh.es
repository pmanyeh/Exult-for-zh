#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func087C 0x87C ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE5, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc087C_0015;
	message("這種類猿生物緩慢而謹慎地走向你。牠嗅了一會兒，然後指著你帶著的蜂蜜。");
	say();
labelFunc087C_0015:
	UI_add_answer(["想要蜂蜜？", "走開！"]);
labelFunc087C_0022:
	converse attend labelFunc087C_0098;
	case "想要蜂蜜？" attend labelFunc087C_007B:
	message("「蜂蜜，你，會給，我？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc087C_0069;
	var0001 = UI_remove_party_items(0x0001, 0x0304, 0xFE99, 0xFE99, true);
	message("「感謝，你。」");
	say();
	if (!(!gflags[0x0154])) goto labelFunc087C_0066;
	Func0911(0x000A);
	gflags[0x0154] = true;
labelFunc087C_0066:
	goto labelFunc087C_007B;
labelFunc087C_0069:
	if (!gflags[0x0154]) goto labelFunc087C_0076;
	message("這個森靈看起來非常失望。");
	say();
	goto labelFunc087C_007B;
labelFunc087C_0076:
	message("「『再見』，對你，說。」*");
	say();
	abort;
labelFunc087C_007B:
	case "走開！" attend labelFunc087C_0088:
	message("牠照做了。*");
	say();
	abort;
labelFunc087C_0088:
	UI_remove_answer(["想要蜂蜜？", "走開！"]);
	goto labelFunc087C_0022;
labelFunc087C_0098:
	endconv;
	return;
}


