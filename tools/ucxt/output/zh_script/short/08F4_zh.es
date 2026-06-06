#game "blackgate"
void Func08F4 0x8F4 (var var0000, var var0001)
{
	var var0002;

	var0002 = "你";
	if (!(var0001 > 0x0002)) goto labelFunc08F4_0016;
	var0002 = "你們隊伍";
labelFunc08F4_0016:
	if (!gflags[0x015D]) goto labelFunc08F4_0034;
	message("\"^");
	message(var0000);
	message("，我已經將你現在的行為與過去的品行做了衡量。既然我正與 ");
	message(var0002);
	message("...");
	say();
	message("我原諒你在我們初次見面時的誤導。\"");
	say();
	gflags[0x015D] = false;
labelFunc08F4_0034:
	if (!(UI_die_roll(0x0001, 0x0003) == 0x0001)) goto labelFunc08F4_004F;
	message("「我很享受與 ");
	message(var0002);
	message(" 一同旅行。」");
	say();
labelFunc08F4_004F:
	if (!UI_get_item_flag(UI_get_npc_object(0xFE9C), 0x0000)) goto labelFunc08F4_0064;
	message("「聖者！跟看不見的人說話真是奇怪。隱形還真是種奇特的魔法。」");
	say();
labelFunc08F4_0064:
	message("「我該如何協助 ");
	message(var0002);
	message("，");
	message(var0000);
	message("？」");
	say();
	UI_add_answer(["蜜蜂", "離開"]);
	return;
}


