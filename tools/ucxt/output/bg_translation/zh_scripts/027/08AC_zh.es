#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func08AC 0x8AC (var var0000, var var0001, var var0002)
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

	message("「我有資格進行治療、解毒與復活。你對這些服務有興趣嗎？」");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08AC_016B;
	message("「你需要我的哪項服務？」");
	say();
	var0004 = ["治療", "解毒", "復活"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "治療") || (var0005 == "解毒"))) goto labelFunc08AC_008F;
	if (!(var0005 == "治療")) goto labelFunc08AC_0058;
	var0006 = "治療";
	var0007 = var0000;
labelFunc08AC_0058:
	if (!(var0005 == "解毒")) goto labelFunc08AC_006E;
	var0006 = "解毒";
	var0007 = var0001;
labelFunc08AC_006E:
	message("「你希望誰被");
	message(var0006);
	message("？」");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc08AC_008F;
	message("「太好了，你沒有受傷！」");
	say();
	goto labelFunc08AC_016F;
labelFunc08AC_008F:
	if (!(var0005 == "復活")) goto labelFunc08AC_00E5;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc08AC_00DB;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc08AC_00DB;
	message("「似乎沒有人需要這種協助。或許，若我有遺漏任何人，你可以將他或她帶到我面前。*」");
	say();
	goto labelFunc08AC_016F;
labelFunc08AC_00DB:
	var0007 = var0002;
	message("「確實，這個人需要恢復健康！」");
	say();
labelFunc08AC_00E5:
	message("「我的費用是");
	message(var0007);
	message("個金幣。你有興趣嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc08AC_0164;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc08AC_015D;
	if (!(var0005 == "治療")) goto labelFunc08AC_012E;
	Func091D(var0008, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_012E:
	if (!(var0005 == "解毒")) goto labelFunc08AC_0144;
	Func091E(var0008, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_0144:
	if (!(var0005 == "復活")) goto labelFunc08AC_015A;
	Func091F(var000A, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_015A:
	goto labelFunc08AC_0161;
labelFunc08AC_015D:
	message("「你的金幣不足！也許等你有多一點金幣時可以再來。」");
	say();
labelFunc08AC_0161:
	goto labelFunc08AC_0168;
labelFunc08AC_0164:
	message("「那你必須去別處了。」");
	say();
labelFunc08AC_0168:
	goto labelFunc08AC_016F;
labelFunc08AC_016B:
	message("「如果你稍後需要我的服務，我會在這裡。」");
	say();
labelFunc08AC_016F:
	UI_pop_answers();
	return;
}