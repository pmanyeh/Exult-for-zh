#game "blackgate"
void Func0895 0x895 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFEDF, 0x0000);
	message("Bollux 几乎是茫然地直视着前方。尽管他的面容和缺乏动作，但从他的表情可以明显看出 Castambre 的一些魔法仍然残留在体内。");
	say();
	var0000 = UI_find_nearby(item, 0x03F7, 0x0028, 0x0000);
	enum();
labelFunc0895_0020:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0895_0079;
	if (!(UI_get_cont_items(item, 0x031D, 0x00F3, 0x0004) || (UI_get_item_quality(UI_find_nearby(item, 0x031D, 0x0001, 0x00B0)) == 0x00F3))) goto labelFunc0895_0076;
	message("Bollux 转过身看到 Adjar 站在附近，活生生的。刹那间，Bollux 的表情有了明显的变化。");
	say();
	UI_remove_npc_face(0xFEDF);
	UI_show_npc_face(0xFEDF, 0x0001);
	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar 只是微笑了。~「向你致意，兄弟。」");
	say();
labelFunc0895_0076:
	goto labelFunc0895_0020;
labelFunc0895_0079:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0895_0089:
	converse attend labelFunc0895_00D3;
	case "姓名" attend labelFunc0895_00B7:
	UI_remove_answer("姓名");
	if (!gflags[0x031D]) goto labelFunc0895_00AF;
	UI_remove_answer("姓名");
	message("他歪着头，疑惑地看着你。~「我道歉。我不是已经告诉过你我的主人叫我 Bollux 了吗？」");
	say();
	goto labelFunc0895_00B7;
labelFunc0895_00AF:
	message("「我的主人为我命名为 Bollux。");
	say();
	gflags[0x031D] = true;
labelFunc0895_00B7:
	case "职业" attend labelFunc0895_00C3:
	message("「我在这里……为了守卫……爱之神殿。」");
	say();
labelFunc0895_00C3:
	case "告辞" attend labelFunc0895_00D0:
	message("「祝你……平安。」*");
	say();
	abort;
labelFunc0895_00D0:
	goto labelFunc0895_0089;
labelFunc0895_00D3:
	endconv;
	return;
}


