#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern var Func0908 0x908 ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func08B4 0x8B4 (var var0000, var var0001, var var0002)
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

	message("「我仍然可以治癒、解毒，有時也能復活。你需要其中哪一項嗎？」");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08B4_00F1;
	message("「你需要哪種服務？」");
	say();
	var0004 = ["治療", "解毒", "復活"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "治療") || (var0005 == "解毒"))) goto labelFunc08B4_008F;
	if (!(var0005 == "治療")) goto labelFunc08B4_0058;
	var0006 = "治療";
	var0007 = var0000;
labelFunc08B4_0058:
	if (!(var0005 == "解毒")) goto labelFunc08B4_006E;
	var0006 = "解毒";
	var0007 = var0001;
labelFunc08B4_006E:
	message("「你希望誰被");
	message(var0006);
	message("？」");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc08B4_008F;
	message("「很高興聽說你很好。如果你需要任何形式的治癒，請隨時回來找我。」");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_008F:
	if (!(var0005 == "復活")) goto labelFunc08B4_00E7;
	var0009 = Func0908();
	var000A = UI_get_avatar_ref();
	var000B = UI_find_nearest(var000A, 0x0190, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc08B4_00D0;
	var000B = UI_find_nearest(var000A, 0x019E, 0x0019);
labelFunc08B4_00D0:
	if (!(var000B == 0x0000)) goto labelFunc08B4_00E7;
	message("「我很抱歉，");
	message(var0009);
	message("，但我沒有看到任何需要復活的人。我必須能看見屍體。如果你正帶著你那位不幸的同伴，請將他們放在地上。」");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_00E7:
	message("「確實，這個人傷得很重。我將嘗試讓他們恢復健康。」");
	say();
	var0007 = var0002;
labelFunc08B4_00F1:
	message("「當然，使用我的治癒服務永遠不會向你收費。」");
	say();
	if (!(var0005 == "治療")) goto labelFunc08B4_010F;
	Func091D(var0008, var0007);
	message("「完成了！」");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_010F:
	if (!(var0005 == "解毒")) goto labelFunc08B4_0129;
	Func091E(var0008, var0007);
	message("「完成了！」");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_0129:
	if (!(var0005 == "復活")) goto labelFunc08B4_0146;
	Func091F(var000B, var0007);
	message("「完成了！」");
	say();
	goto labelFunc08B4_014A;
	goto labelFunc08B4_014A;
labelFunc08B4_0146:
	message("「如果你稍後需要我的服務，我會在這裡。」");
	say();
labelFunc08B4_014A:
	UI_pop_answers();
	return;
}