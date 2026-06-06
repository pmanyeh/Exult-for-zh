#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func08CA 0x8CA (var var0000, var var0001)
{
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

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc08CA_0013;
	goto labelFunc08CA_0147;
labelFunc08CA_0013:
	var0003 = 0x0003;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08CA_003C;
	message("在詢問了幾個問題之後，他說道：「我很抱歉，但你對我的理論掌握得不夠深入，我無法指導你。也許等你有更多時間研究時……」");
	say();
	goto labelFunc08CA_0147;
labelFunc08CA_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08CA_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你聚集並清點了你所擁有的金幣，發現總共有 ");
	message(var0005);
	message(" 個金幣。");
	say();
	if (!(var0005 < var0001)) goto labelFunc08CA_0074;
	message("\"我必須致歉，但我需要收足費用才能繼續我的研究。也許換個時間，等你有更多錢，我便能教導你了。」");
	say();
	goto labelFunc08CA_0147;
labelFunc08CA_0074:
	if (!(var0004 == 0x0002)) goto labelFunc08CA_0085;
	message("在詢問了幾個問題之後，他說道：「你的境界已經超越了我的指導。我必須謙卑地向你致歉，因為我已經沒有什麼新東西可以教你了。」");
	say();
	goto labelFunc08CA_0147;
labelFunc08CA_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 個金幣，訓練隨之開始。");
	say();
	var0007 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08CA_00D2;
	var0008 = "你";
	var0009 = "你";
	var000A = "";
	var000B = "對";
	goto labelFunc08CA_00EA;
labelFunc08CA_00D2:
	var0008 = var0007;
	var0009 = var0007;
	var000A = "";
	var000B = "對";
labelFunc08CA_00EA:
	message(var0008);
	message(" 和 Perrin 興奮地沉浸在幾本巨著的書頁中。在一場密集的學習之後，");
	message(var0009);
	message(" 發現自己獲得了");
	message(var000A);
	message(" 理解與傳播比以往更多資訊的能力。此外，");
	message(var0009);
	message(" ");
	message(var000B);
	message(" 施法背後的理論有了更好的掌握。");
	say();
	var000C = Func0910(var0002, 0x0002);
	if (!(var000C < 0x001E)) goto labelFunc08CA_0128;
	Func0916(var0002, 0x0002);
labelFunc08CA_0128:
	var000D = Func0910(var0002, 0x0006);
	if (!(var000D < 0x001E)) goto labelFunc08CA_0147;
	Func0918(var0002, 0x0001);
labelFunc08CA_0147:
	return;
}