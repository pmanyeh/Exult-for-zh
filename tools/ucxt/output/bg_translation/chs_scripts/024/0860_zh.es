#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0860 0x860 (var var0000, var var0001, var var0002)
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
	message("「我能够治疗、解毒和复活。你需要这些服务吗？」");
	say();
	UI_push_answers();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0860_0175;
	message("「你需要我哪项服务？」");
	say();
	var0005 = ["治疗", "解毒", "复活"];
	var0006 = Func090B(var0005);
	if (!((var0006 == "治疗") || (var0006 == "解毒"))) goto labelFunc0860_0095;
	if (!(var0006 == "治疗")) goto labelFunc0860_005E;
	var0007 = "被治疗";
	var0008 = var0000;
labelFunc0860_005E:
	if (!(var0006 == "解毒")) goto labelFunc0860_0074;
	var0007 = "被解毒";
	var0008 = var0001;
labelFunc0860_0074:
	message("「你希望谁");
	message(var0007);
	message("？」");
	say();
	var0009 = Func090E();
	if (!(var0009 == 0x0000)) goto labelFunc0860_0095;
	message("「所以你很健康？这真是个好消息。如果你以后需要我的服务，随时欢迎回来。」");
	say();
	goto labelFunc0860_0179;
labelFunc0860_0095:
	if (!(var0006 == "复活")) goto labelFunc0860_00EF;
	var000A = UI_get_avatar_ref();
	var000B = UI_find_nearest(var000A, 0x0190, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc0860_00E5;
	var000B = UI_find_nearest(var000A, 0x019E, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc0860_00E5;
	message("「我道歉，");
	message(var0003);
	message("，但我没有看到任何需要复活的人。我必须看到尸体才能拯救灵魂。如果你带着你不幸的朋友，请将他们放在地上，以便我能将他们带回这个世界。」");
	say();
	abort;
labelFunc0860_00E5:
	message("「的确，你的朋友已经离开了这个世界。我将尝试让他们起死回生。」");
	say();
	var0008 = var0002;
labelFunc0860_00EF:
	message("「我的收费是 ");
	message(var0008);
	message(" 枚金币。这可以接受吗？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0860_016E;
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var0008)) goto labelFunc0860_0167;
	if (!(var0006 == "治疗")) goto labelFunc0860_0138;
	Func091D(var0009, var0008);
	goto labelFunc0860_0164;
labelFunc0860_0138:
	if (!(var0006 == "解毒")) goto labelFunc0860_014E;
	Func091E(var0009, var0008);
	goto labelFunc0860_0164;
labelFunc0860_014E:
	if (!(var0006 == "复活")) goto labelFunc0860_0164;
	Func091F(var000B, var0008);
	goto labelFunc0860_0164;
labelFunc0860_0164:
	goto labelFunc0860_016B;
labelFunc0860_0167:
	message("「你没有任何金币。我真的很抱歉。除非你能提供适当的费用，否则我无法帮助你。」Chantu 恭敬地鞠躬。");
	say();
labelFunc0860_016B:
	goto labelFunc0860_0172;
labelFunc0860_016E:
	message("「那我真的很抱歉。我必须收我该收的费用。我们没有生活在繁荣的时代。」");
	say();
labelFunc0860_0172:
	goto labelFunc0860_0179;
labelFunc0860_0175:
	message("「嗯，如果你决定需要我的服务，我一直都在这里。」");
	say();
labelFunc0860_0179:
	UI_pop_answers();
	return;
}


