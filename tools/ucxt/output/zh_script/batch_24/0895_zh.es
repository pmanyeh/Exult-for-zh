#game "blackgate"
void Func0895 0x895 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFEDF, 0x0000);
	message("Bollux 幾乎是茫然地直視著前方。儘管他的面容和缺乏動作，但從他的表情可以明顯看出 Castambre 的一些魔法仍然殘留在體內。");
	say();
	var0000 = UI_find_nearby(item, 0x03F7, 0x0028, 0x0000);
	enum();
labelFunc0895_0020:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0895_0079;
	if (!(UI_get_cont_items(item, 0x031D, 0x00F3, 0x0004) || (UI_get_item_quality(UI_find_nearby(item, 0x031D, 0x0001, 0x00B0)) == 0x00F3))) goto labelFunc0895_0076;
	message("Bollux 轉過身看到 Adjar 站在附近，活生生的。剎那間，Bollux 的表情有了明顯的變化。");
	say();
	UI_remove_npc_face(0xFEDF);
	UI_show_npc_face(0xFEDF, 0x0001);
	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar 只是微笑了。~「向你致意，兄弟。」");
	say();
labelFunc0895_0076:
	goto labelFunc0895_0020;
labelFunc0895_0079:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0895_0089:
	converse attend labelFunc0895_00D3;
	case "姓名" attend labelFunc0895_00B7:
	UI_remove_answer("姓名");
	if (!gflags[0x031D]) goto labelFunc0895_00AF;
	UI_remove_answer("姓名");
	message("他歪著頭，疑惑地看著你。~「我道歉。我不是已經告訴過你我的主人叫我 Bollux 了嗎？」");
	say();
	goto labelFunc0895_00B7;
labelFunc0895_00AF:
	message("「我的主人為我命名為 Bollux。");
	say();
	gflags[0x031D] = true;
labelFunc0895_00B7:
	case "職業" attend labelFunc0895_00C3:
	message("「我在這裡……為了守衛……愛之神殿。」");
	say();
labelFunc0895_00C3:
	case "告辭" attend labelFunc0895_00D0:
	message("「祝你……平安。」*");
	say();
	abort;
labelFunc0895_00D0:
	goto labelFunc0895_0089;
labelFunc0895_00D3:
	endconv;
	return;
}


