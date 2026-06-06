#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func08D2 0x8D2 (var var0000, var var0001, var var0002)
{
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

	var0003 = Func0909();
	message("「你需要我的協助嗎？」");
	say();
	UI_push_answers();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08D2_0179;
	message("「你有什麼需求？」");
	say();
	var0005 = ["治療", "解毒", "復活"];
	var0006 = Func090B(var0005);
	if (!((var0006 == "治療") || (var0006 == "解毒"))) goto labelFunc08D2_0095;
	if (!(var0006 == "治療")) goto labelFunc08D2_005E;
	var0007 = "治療";
	var0008 = var0000;
labelFunc08D2_005E:
	if (!(var0006 == "解毒")) goto labelFunc08D2_0074;
	var0007 = "解毒";
	var0008 = var0001;
labelFunc08D2_0074:
	message("「誰需要");
	message(var0007);
	message("？」");
	say();
	var0009 = Func090E();
	if (!(var0009 == 0x0000)) goto labelFunc08D2_0095;
	message("「你們所有人似乎都不需要我的協助。」~~她看起來很高興。");
	say();
	goto labelFunc08D2_0183;
labelFunc08D2_0095:
	if (!(var0006 == "復活")) goto labelFunc08D2_00E7;
	var000A = UI_get_avatar_ref();
	var000B = UI_find_nearest(var000A, 0x0190, 0x0019);
	var0008 = var0002;
	if (!(var000B == 0x0000)) goto labelFunc08D2_00E7;
	var000B = UI_find_nearest(var000A, 0x019E, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc08D2_00E7;
	message("「我很抱歉，但你並未帶任何需要我協助的人到我面前。如果真的有人需要我的醫術，我必須再仔細瞧瞧。」");
	say();
	goto labelFunc08D2_0183;
labelFunc08D2_00E7:
	message("「我必須向你收取 ");
	message(var0008);
	message(" 個金幣。這個價格你能接受嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08D2_016C;
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var0008)) goto labelFunc08D2_015F;
	if (!(var0006 == "治療")) goto labelFunc08D2_0130;
	Func091D(var0009, var0008);
	goto labelFunc08D2_015C;
labelFunc08D2_0130:
	if (!(var0006 == "解毒")) goto labelFunc08D2_0146;
	Func091E(var0009, var0008);
	goto labelFunc08D2_015C;
labelFunc08D2_0146:
	if (!(var0006 == "復活")) goto labelFunc08D2_015C;
	Func091F(var000B, var0008);
	goto labelFunc08D2_015C;
labelFunc08D2_015C:
	goto labelFunc08D2_0169;
labelFunc08D2_015F:
	message("「我很抱歉，");
	message(var0003);
	message("，但你的金幣不夠。也許我下一次就能協助你了。」");
	say();
labelFunc08D2_0169:
	goto labelFunc08D2_0176;
labelFunc08D2_016C:
	message("「那麼我便無法幫助你了，");
	message(var0003);
	message("。我真的很抱歉，但我的收費是固定的。」");
	say();
labelFunc08D2_0176:
	goto labelFunc08D2_0183;
labelFunc08D2_0179:
	message("「那真是太好了，");
	message(var0003);
	message("。我很樂意幫助那些需要幫助的人，但如果世上再也沒有這種需求，我會更高興！」");
	say();
labelFunc08D2_0183:
	UI_pop_answers();
	return;
}