#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0912 0x912 (var var0000, var var0001, var var0002);

void Func089D 0x89D (var var0000, var var0001, var var0002)
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

	message("「能够提供治疗、解毒和复活。对其中一项服务感兴趣吗？」");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc089D_022B;
	message("「需要我的哪项服务？」");
	say();
	var0004 = ["治疗", "解毒", "复活"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "治疗") || (var0005 == "解毒"))) goto labelFunc089D_008F;
	if (!(var0005 == "治疗")) goto labelFunc089D_0058;
	var0006 = "被治疗";
	var0007 = var0000;
labelFunc089D_0058:
	if (!(var0005 == "解毒")) goto labelFunc089D_006E;
	var0006 = "被解毒";
	var0007 = var0001;
labelFunc089D_006E:
	message("「想要对谁");
	message(var0006);
	message("？」");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc089D_008F;
	message("「不需要我的治疗。」");
	say();
	goto labelFunc089D_022F;
labelFunc089D_008F:
	if (!(var0005 == "复活")) goto labelFunc089D_00E5;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc089D_00DB;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc089D_00DB;
	message("「没看到有任何人需要复活。必须看到尸体才能拯救灵魂。把你的同伴放在地上，这样我才能让他们重返这个世界。」*");
	say();
	goto labelFunc089D_022F;
labelFunc089D_00DB:
	message("「受了重伤。试着让他们重返这个世界。」");
	say();
	var0007 = var0002;
labelFunc089D_00E5:
	message("「收费 ");
	message(var0007);
	message(" 枚金币。还需要我的服务吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc089D_0224;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc089D_021D;
	if (!(var0005 == "治疗")) goto labelFunc089D_018D;
	var000D = Func0910(var0008, 0x0000);
	var000E = Func0910(var0008, 0x0003);
	if (!(var000D > var000E)) goto labelFunc089D_0175;
	var000F = (var000D - var000E);
	Func0912(var0008, 0x0003, var000F);
	var0010 = UI_remove_party_items(var0007, 0x0284, 0xFE99, 0xFE99, true);
	message("「伤口已经治愈。」");
	say();
	goto labelFunc089D_018A;
labelFunc089D_0175:
	if (!(var0008 == 0xFE9C)) goto labelFunc089D_0186;
	message("「看起来相当健康！」");
	say();
	goto labelFunc089D_018A;
labelFunc089D_0186:
	message("「已经很健康了！」");
	say();
labelFunc089D_018A:
	goto labelFunc089D_021A;
labelFunc089D_018D:
	if (!(var0005 == "解毒")) goto labelFunc089D_01DA;
	var0011 = UI_get_npc_object(var0008);
	if (!UI_get_item_flag(var0011, 0x0008)) goto labelFunc089D_01D3;
	UI_clear_item_flag(var0011, 0x0008);
	var0010 = UI_remove_party_items(var0007, 0x0284, 0xFE99, 0xFE99, true);
	message("「伤口已经治愈。」");
	say();
	goto labelFunc089D_01D7;
labelFunc089D_01D3:
	message("「不需要解毒！」");
	say();
labelFunc089D_01D7:
	goto labelFunc089D_021A;
labelFunc089D_01DA:
	if (!(var0005 == "复活")) goto labelFunc089D_021A;
	var0012 = UI_resurrect(var000A);
	if (!(var0012 == 0x0000)) goto labelFunc089D_01FF;
	message("「无法拯救他们。为你替他们举行适当的葬礼。」");
	say();
	goto labelFunc089D_0217;
labelFunc089D_01FF:
	message("「再次呼吸了。活过来了！」");
	say();
	var0010 = UI_remove_party_items(var0007, 0x0284, 0xFE99, 0xFE99, true);
labelFunc089D_0217:
	goto labelFunc089D_021A;
labelFunc089D_021A:
	goto labelFunc089D_0221;
labelFunc089D_021D:
	message("「没有那么多金币！也许带多点金币回来再购买服务吧。」");
	say();
labelFunc089D_0221:
	goto labelFunc089D_0228;
labelFunc089D_0224:
	message("「抱歉。那么请去别处寻找这项服务吧。」");
	say();
labelFunc089D_0228:
	goto labelFunc089D_022F;
labelFunc089D_022B:
	message("「如果你需要我的话，我稍后会在这里。」");
	say();
labelFunc089D_022F:
	UI_pop_answers();
	return;
}


