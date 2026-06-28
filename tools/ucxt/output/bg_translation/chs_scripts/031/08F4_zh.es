#game "blackgate"
void Func08F4 0x8F4 (var var0000, var var0001)
{
	var var0002;

	var0002 = "你";
	if (!(var0001 > 0x0002)) goto labelFunc08F4_0016;
	var0002 = "你们队伍";
labelFunc08F4_0016:
	if (!gflags[0x015D]) goto labelFunc08F4_0034;
	message("\"^");
	message(var0000);
	message("，我已经将你现在的行为与过去的品行做了衡量。既然我正与 ");
	message(var0002);
	message("...");
	say();
	message("我原谅你在我们初次见面时的误导。\"");
	say();
	gflags[0x015D] = false;
labelFunc08F4_0034:
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0001)) goto labelFunc08F4_004F;
	message("「我很享受与 ");
	message(var0002);
	message(" 一同旅行。」");
	say();
labelFunc08F4_004F:
	if (!UI_get_item_flag(UI_get_npc_object(0xFE9C), 0x0000)) goto labelFunc08F4_0064;
	message("「圣者！跟看不见的人说话真是奇怪。隐形还真是种奇特的魔法。」");
	say();
labelFunc08F4_0064:
	message("「我该如何协助 ");
	message(var0002);
	message("，");
	message(var0000);
	message("？」");
	say();
	UI_add_answer(["蜜蜂", "离队"]);
	return;
}


