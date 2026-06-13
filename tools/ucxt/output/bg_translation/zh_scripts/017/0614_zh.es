#game "blackgate"
void Func0614 object#(0x614) ()
{
	var var0000;

	UI_show_npc_face(0xFEEB, 0x0000);
	var0000 = UI_get_speech_track();
	if (!(var0000 == 0x0001)) goto labelFunc0614_0027;
	message("「是的，休息吧，我的朋友。休息並療傷，這樣你才能變得堅強，並有能力面對你眼前的危險。祝你有個好夢！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0027:
	if (!(var0000 == 0x0002)) goto labelFunc0614_003D;
	message("「進去吧。告訴他們你是聖者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_003D:
	if (!(var0000 == 0x0003)) goto labelFunc0614_0053;
	message("「感謝你筆記本裡的資訊，聖者！它非常有用！哈哈哈哈哈！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0053:
	if (!(var0000 == 0x0004)) goto labelFunc0614_0069;
	message("「別進去！那是個陷阱！你沒看出來嗎？那是個陷阱！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0069:
	if (!(var0000 == 0x0005)) goto labelFunc0614_007F;
	message("「你不會相信時間領主吧？小心點，我的朋友——別相信他！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_007F:
	if (!(var0000 == 0x0006)) goto labelFunc0614_0095;
	message("「別進去！你一定會死的！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0095:
	if (!(var0000 == 0x0007)) goto labelFunc0614_00AB;
	message("「聖者，這裡不歡迎你！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00AB:
	if (!(var0000 == 0x0008)) goto labelFunc0614_00C1;
	message("「你確定嗎？再想想吧！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00C1:
	if (!(var0000 == 0x0009)) goto labelFunc0614_00D7;
	message("「至少有一個標誌是真的，而且至少有一個標誌是假的。」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00D7:
	if (!(var0000 == 0x000A)) goto labelFunc0614_00ED;
	message("「這些標誌中有兩個要麼是真的，要麼是假的！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00ED:
	if (!(var0000 == 0x000B)) goto labelFunc0614_0103;
	message("「不不不！再想想吧！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0103:
	if (!(var0000 == 0x000C)) goto labelFunc0614_0119;
	message("「每個標誌都可能是真的，也可能是假的！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0119:
	if (!(var0000 == 0x000D)) goto labelFunc0614_012F;
	message("「阻止聖者！我現在就要通過黑門過來了！別讓他靠近！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_012F:
	if (!(var0000 == 0x000E)) goto labelFunc0614_0145;
	message("「那麼，聖者！關鍵時刻到了！你可以摧毀黑門，但你將永遠無法回到你深愛的地球。或者你現在就可以穿過它回家！這是你的選擇！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0145:
	if (!((var0000 > 0x0011) && (var0000 < 0x0016))) goto labelFunc0614_0163;
	message("「哈哈哈哈哈哈！」*");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0163:
	if (!(var0000 == 0x0016)) goto labelFunc0614_0179;
	message("「可憐的聖者……可憐，可憐的聖者……」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0179:
	if (!(var0000 == 0x0017)) goto labelFunc0614_018F;
	message("「幹得好，我的朋友！你真不愧是聖者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_018F:
	if (!(var0000 == 0x0018)) goto labelFunc0614_01A5;
	message("「你走錯方向了，我的朋友！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01A5:
	if (!(var0000 == 0x0019)) goto labelFunc0614_01BB;
	message("「滾開！！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01BB:
	if (!(var0000 == 0x001A)) goto labelFunc0614_01D1;
	message("「那正是該做的事，聖者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01D1:
	if (!(var0000 == 0x001B)) goto labelFunc0614_01E7;
	message("「你最好別這麼做，聖者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01E7:
	if (!(var0000 == 0x001C)) goto labelFunc0614_01FD;
	message("「你真的知道你要去哪裡嗎，聖者？」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01FD:
	if (!(var0000 == 0x001D)) goto labelFunc0614_0213;
	message("「是的，那是正確的前進方向，聖者。」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0213:
	if (!(var0000 > 0x001D)) goto labelFunc0614_0229;
	message("「哈哈哈哈哈哈！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0229:
	message("「呵呵哈哈嘿嘿嘿！」");
	say();
	return;
}


