#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090C 0x90C (var var0000);
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func089E 0x89E (var var0000, var var0001, var var0002)
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;

	var0003 = UI_get_npc_object(0xFFFB);
	var0004 = UI_get_party_list();
	message("「我能提供治疗、解毒和复活的服务。你对其中一项服务感兴趣吗？」");
	say();
	UI_push_answers();
	var0005 = Func090A();
	if (!var0005) goto labelFunc089E_0295;
	message("「你需要我的哪项服务？」");
	say();
	var0006 = ["治疗", "解毒", "复活"];
	var0007 = Func090B(var0006);
	if (!((var0007 == "治疗") || (var0007 == "解毒"))) goto labelFunc089E_012E;
	if (!(var0007 == "治疗")) goto labelFunc089E_0069;
	var0008 = "治疗";
	var0009 = var0000;
labelFunc089E_0069:
	if (!(var0007 == "解毒")) goto labelFunc089E_007F;
	var0008 = "解毒";
	var0009 = var0001;
labelFunc089E_007F:
	message("「你想让谁接受");
	message(var0008);
	message("？」");
	say();
	var000A = UI_get_npc_name(UI_get_party_list2());
	var000B = UI_get_party_list2();
	var000C = [];
	var000D = [];
	enum();
labelFunc089E_00A8:
	for (var0010 in var000B with var000E to var000F) attend labelFunc089E_00DC;
	if (!(var0010 != UI_get_npc_object(0xFFFB))) goto labelFunc089E_00D9;
	var000C = (var000C & UI_get_npc_name(var0010));
	var000D = (var000D & var0010);
labelFunc089E_00D9:
	goto labelFunc089E_00A8;
labelFunc089E_00DC:
	var0011 = [0x0000, var000D];
	var0012 = Func090C(["没有人", var000C]);
	var0013 = var0011[var0012];
	if (!(var0013 == 0x0000)) goto labelFunc089E_0113;
	var0014 = 0x0000;
	goto labelFunc089E_011D;
labelFunc089E_0113:
	var0014 = UI_get_npc_number(var0013);
labelFunc089E_011D:
	if (!(var0014 == 0x0000)) goto labelFunc089E_012E;
	message("「圣者！你叫我准备治疗，然后又跟我说『没有人』！你觉得这很好笑吗？治疗可是一件严肃的事！」");
	say();
	goto labelFunc089E_0299;
labelFunc089E_012E:
	if (!(var0007 == "复活")) goto labelFunc089E_019B;
	var0015 = UI_get_avatar_ref();
	var0016 = UI_find_nearest(var0015, 0x0190, 0x0019);
	if (!(var0016 == 0x0000)) goto labelFunc089E_0178;
	var0016 = UI_find_nearest(var0015, 0x019E, 0x0019);
	if (!(var0016 == 0x0000)) goto labelFunc089E_0178;
	message("「我一定是眼花了。我没看到有任何人需要复活。你又在耍我了吗？还是你把伤者藏起来了？我必须看到人才能提供帮助。如果你把朋友背在背包里，拜托把他放在地上，这样我才能履行你要求的职责。」");
	say();
	abort;
labelFunc089E_0178:
	message("「确实，你的朋友伤得很重。让出一点空间，我会尽我所能治疗他。」");
	say();
	if (!(var0003 in var0004)) goto labelFunc089E_018F;
	var0002 = 0x0000;
	goto labelFunc089E_0195;
labelFunc089E_018F:
	var0002 = 0x0190;
labelFunc089E_0195:
	var0009 = var0002;
labelFunc089E_019B:
	if (!(var0003 in var0004)) goto labelFunc089E_020F;
	message("「既然我和你们一起旅行，我就免收费用了。」");
	say();
	if (!(var0007 == "治疗")) goto labelFunc089E_01CA;
	Func091D(var0014, var0009);
	gflags[0x0029] = true;
	UI_set_timer(0x000A);
	goto labelFunc089E_0292;
labelFunc089E_01CA:
	if (!(var0007 == "解毒")) goto labelFunc089E_01EB;
	Func091E(var0014, var0009);
	gflags[0x0029] = true;
	UI_set_timer(0x000A);
	goto labelFunc089E_0292;
labelFunc089E_01EB:
	if (!(var0007 == "复活")) goto labelFunc089E_020C;
	Func091F(var0016, var0009);
	gflags[0x0029] = true;
	UI_set_timer(0x000A);
	goto labelFunc089E_0292;
labelFunc089E_020C:
	goto labelFunc089E_0292;
labelFunc089E_020F:
	message("「我的收费是 ");
	message(var0009);
	message(" 枚金币。这个价格你可以接受吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc089E_028E;
	var0017 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0017 >= var0009)) goto labelFunc089E_0287;
	if (!(var0007 == "治疗")) goto labelFunc089E_0258;
	Func091D(var0014, var0009);
	goto labelFunc089E_0292;
labelFunc089E_0258:
	if (!(var0007 == "解毒")) goto labelFunc089E_026E;
	Func091E(var0014, var0009);
	goto labelFunc089E_0292;
labelFunc089E_026E:
	if (!(var0007 == "复活")) goto labelFunc089E_0284;
	Func091F(var0016, var0009);
	goto labelFunc089E_0292;
labelFunc089E_0284:
	goto labelFunc089E_028B;
labelFunc089E_0287:
	message("「你没有那么多金币！也许你可以带更多的钱回来再购买服务。」");
	say();
labelFunc089E_028B:
	goto labelFunc089E_0292;
labelFunc089E_028E:
	message("「那你只能去别处寻找这种服务了。」");
	say();
labelFunc089E_0292:
	goto labelFunc089E_0299;
labelFunc089E_0295:
	message("「如果你以后需要我的服务，我会在这里。」");
	say();
labelFunc089E_0299:
	UI_pop_answers();
	return;
}


