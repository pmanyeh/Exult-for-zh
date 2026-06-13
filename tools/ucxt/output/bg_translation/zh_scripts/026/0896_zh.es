#game "blackgate"
void Func0896 0x896 ()
{
	UI_show_npc_face(0xFEDF, 0x0000);
	message("魔像似乎恢復了牠穩重的鎮定。然而，牠寶石般的眼睛裡依然閃爍著生命的光芒。");
	say();
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0896_001E:
	converse attend labelFunc0896_0068;
	case "姓名" attend labelFunc0896_0045:
	UI_remove_answer("姓名");
	if (!gflags[0x031D]) goto labelFunc0896_003D;
	message("他歪著頭，疑惑地盯著你。~ 「我道歉。難道我還沒告訴過你我的主人叫我 Bollux 嗎？」");
	say();
	goto labelFunc0896_0045;
labelFunc0896_003D:
	message("「我的主人給我取名叫 Bollux。」");
	say();
	gflags[0x031D] = true;
labelFunc0896_0045:
	case "職業" attend labelFunc0896_0058:
	message("「我負責在這裡守衛……」他停頓了一下，顯然陷入了沉思。「我現在沒有任務了。」");
	say();
	UI_remove_answer("職業");
labelFunc0896_0058:
	case "告辭" attend labelFunc0896_0065:
	message("「告……辭。」*");
	say();
	abort;
labelFunc0896_0065:
	goto labelFunc0896_001E;
labelFunc0896_0068:
	endconv;
	return;
}


