#game "blackgate"
void Func0845 0x845 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0005);
	var0002 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0006);
	if (!(!var0000)) goto labelFunc0845_0032;
	var0003 = "寶石";
	goto labelFunc0845_0038;
labelFunc0845_0032:
	var0003 = "劍";
labelFunc0845_0038:
	if (!(var0001 == var0002)) goto labelFunc0845_0049;
	message("「主人，你的力量不需要補充。」惡魔聽起來有點不悅。");
	say();
	goto labelFunc0845_0074;
labelFunc0845_0049:
	var0004 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0005, var0002);
	if (!var0004) goto labelFunc0845_0070;
	message("能量湧自 ");
	message(var0003);
	message(" 注入你的體內，恢復了你的魔法儲備，「完成了，主人。」");
	say();
	goto labelFunc0845_0074;
labelFunc0845_0070:
	message("「主人，恐怕有些不對勁。」惡魔聽起來幾乎有些擔心。");
	say();
labelFunc0845_0074:
	return;
}


