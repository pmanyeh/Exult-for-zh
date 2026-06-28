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

	message("「我有资格进行治疗、解毒与复活。你对这些服务有兴趣吗？」");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08AC_016B;
	message("「你需要我的哪项服务？」");
	say();
	var0004 = ["治疗", "解毒", "复活"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "治疗") || (var0005 == "解毒"))) goto labelFunc08AC_008F;
	if (!(var0005 == "治疗")) goto labelFunc08AC_0058;
	var0006 = "治疗";
	var0007 = var0000;
labelFunc08AC_0058:
	if (!(var0005 == "解毒")) goto labelFunc08AC_006E;
	var0006 = "解毒";
	var0007 = var0001;
labelFunc08AC_006E:
	message("「你希望谁被");
	message(var0006);
	message("？」");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc08AC_008F;
	message("「太好了，你没有受伤！」");
	say();
	goto labelFunc08AC_016F;
labelFunc08AC_008F:
	if (!(var0005 == "复活")) goto labelFunc08AC_00E5;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc08AC_00DB;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc08AC_00DB;
	message("「似乎没有人需要这种协助。或许，若我有遗漏任何人，你可以将他或她带到我面前。*」");
	say();
	goto labelFunc08AC_016F;
labelFunc08AC_00DB:
	var0007 = var0002;
	message("「确实，这个人需要恢复健康！」");
	say();
labelFunc08AC_00E5:
	message("「我的费用是");
	message(var0007);
	message("个金币。你有兴趣吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc08AC_0164;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc08AC_015D;
	if (!(var0005 == "治疗")) goto labelFunc08AC_012E;
	Func091D(var0008, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_012E:
	if (!(var0005 == "解毒")) goto labelFunc08AC_0144;
	Func091E(var0008, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_0144:
	if (!(var0005 == "复活")) goto labelFunc08AC_015A;
	Func091F(var000A, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_015A:
	goto labelFunc08AC_0161;
labelFunc08AC_015D:
	message("「你的金币不足！也许等你有多一点金币时可以再来。」");
	say();
labelFunc08AC_0161:
	goto labelFunc08AC_0168;
labelFunc08AC_0164:
	message("「那你必须去别处了。」");
	say();
labelFunc08AC_0168:
	goto labelFunc08AC_016F;
labelFunc08AC_016B:
	message("「如果你稍后需要我的服务，我会在这里。」");
	say();
labelFunc08AC_016F:
	UI_pop_answers();
	return;
}