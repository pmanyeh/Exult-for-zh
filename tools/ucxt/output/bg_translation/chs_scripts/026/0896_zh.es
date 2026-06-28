#game "blackgate"
void Func0896 0x896 ()
{
	UI_show_npc_face(0xFEDF, 0x0000);
	message("魔像似乎恢复了牠稳重的镇定。然而，牠宝石般的眼睛里依然闪烁着生命的光芒。");
	say();
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0896_001E:
	converse attend labelFunc0896_0068;
	case "姓名" attend labelFunc0896_0045:
	UI_remove_answer("姓名");
	if (!gflags[0x031D]) goto labelFunc0896_003D;
	message("他歪着头，疑惑地盯着你。~ 「我道歉。难道我还没告诉过你我的主人叫我 Bollux 吗？」");
	say();
	goto labelFunc0896_0045;
labelFunc0896_003D:
	message("「我的主人给我取名叫 Bollux。」");
	say();
	gflags[0x031D] = true;
labelFunc0896_0045:
	case "职业" attend labelFunc0896_0058:
	message("「我负责在这里守卫……」他停顿了一下，显然陷入了沉思。「我现在没有任务了。」");
	say();
	UI_remove_answer("职业");
labelFunc0896_0058:
	case "告辞" attend labelFunc0896_0065:
	message("「告……辞。」*");
	say();
	abort;
labelFunc0896_0065:
	goto labelFunc0896_001E;
labelFunc0896_0068:
	endconv;
	return;
}


