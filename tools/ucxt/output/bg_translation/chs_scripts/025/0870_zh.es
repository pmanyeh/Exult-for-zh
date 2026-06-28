#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0870 0x870 (var var0000, var var0001, var var0002)
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

	message("「我有资格治疗、解毒和复活。你对这些服务有兴趣吗？」");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0870_0169;
	message("「你需要我哪项服务？」");
	say();
	var0004 = ["治疗", "解毒", "复活"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "治疗") || (var0005 == "解毒"))) goto labelFunc0870_008F;
	if (!(var0005 == "治疗")) goto labelFunc0870_0058;
	var0006 = "被治疗";
	var0007 = var0000;
labelFunc0870_0058:
	if (!(var0005 == "解毒")) goto labelFunc0870_006E;
	var0006 = "被解毒";
	var0007 = var0001;
labelFunc0870_006E:
	message("「你希望谁");
	message(var0006);
	message("？」");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc0870_008F;
	message("「很好。你很健康，这让我很高兴。」");
	say();
	goto labelFunc0870_016D;
labelFunc0870_008F:
	if (!(var0005 == "复活")) goto labelFunc0870_00E3;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc0870_00D9;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc0870_00D9;
	message("「我没有看到任何需要复活的人。我必须看到尸体才能复活。如果你带着你的朋友，请将他们放在地上，以便我能照料他们。」");
	say();
	abort;
labelFunc0870_00D9:
	message("「你的朋友伤得很重。我会尝试让他们恢复。」");
	say();
	var0007 = var0002;
labelFunc0870_00E3:
	message("「我的价格是 ");
	message(var0007);
	message(" 枚金币。这个价格可以接受吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0870_0162;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc0870_015B;
	if (!(var0005 == "治疗")) goto labelFunc0870_012C;
	Func091D(var0008, var0007);
	goto labelFunc0870_0158;
labelFunc0870_012C:
	if (!(var0005 == "解毒")) goto labelFunc0870_0142;
	Func091E(var0008, var0007);
	goto labelFunc0870_0158;
labelFunc0870_0142:
	if (!(var0005 == "复活")) goto labelFunc0870_0158;
	Func091F(var000A, var0007);
	goto labelFunc0870_0158;
labelFunc0870_0158:
	goto labelFunc0870_015F;
labelFunc0870_015B:
	message("「啧啧。你没有足够的金币来支付服务费用。我希望改天能帮到你。」");
	say();
labelFunc0870_015F:
	goto labelFunc0870_0166;
labelFunc0870_0162:
	message("「那你必须去别处寻找那项服务了。」");
	say();
labelFunc0870_0166:
	goto labelFunc0870_016D;
labelFunc0870_0169:
	message("「如果你以后需要我的服务，我会在这里。」");
	say();
labelFunc0870_016D:
	UI_pop_answers();
	return;
}


