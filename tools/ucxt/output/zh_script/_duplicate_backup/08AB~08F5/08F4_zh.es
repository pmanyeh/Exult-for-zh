#game "blackgate"
void Func08F4 0x8F4 (var var0000, var var0001)
{
	var var0002;

	var0002 = "你";
	if (!(var0001 > 0x0002)) goto labelFunc08F4_0016;
	var0002 = "整個隊伍";
labelFunc08F4_0016:
	if (!gflags[0x015D]) goto labelFunc08F4_0034;
	message("「^");
	message(var0000);
	message("，我將你現在的所作所為與過去的行徑進行了權衡。既然現在我正與");
	message(var0002);
	message("……");
	say();
	message("我原諒我們初次見面時你對我的誤導。」");
	say();
	gflags[0x015D] = false;
labelFunc08F4_0034:
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0001)) goto labelFunc08F4_004F;
	message("「我很喜歡與");
	message(var0002);
	message("一同旅行。」");
	say();
labelFunc08F4_004F:
	if (!UI_get_item_flag(UI_get_npc_object(0xFE9C), 0x0000)) goto labelFunc08F4_0064;
	message("「聖者！能與人交談卻看不見說話者，這感覺真奇怪。『隱身術』真是奇妙的魔法。」");
	say();
labelFunc08F4_0064:
	message("「");
	message(var0000);
	message("，我該如何協助");
	message(var0002);
	message("呢？」");
	say();
	UI_add_answer(["蜜蜂", "離隊"]);
	return;
}