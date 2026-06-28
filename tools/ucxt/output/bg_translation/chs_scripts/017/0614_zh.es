#game "blackgate"
void Func0614 object#(0x614) ()
{
	var var0000;

	UI_show_npc_face(0xFEEB, 0x0000);
	var0000 = UI_get_speech_track();
	if (!(var0000 == 0x0001)) goto labelFunc0614_0027;
	message("「是的，休息吧，我的朋友。休息并疗伤，这样你才能变得坚强，并有能力面对你眼前的危险。祝你有个好梦！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0027:
	if (!(var0000 == 0x0002)) goto labelFunc0614_003D;
	message("「进去吧。告诉他们你是圣者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_003D:
	if (!(var0000 == 0x0003)) goto labelFunc0614_0053;
	message("「感谢你笔记本里的信息，圣者！它非常有用！哈哈哈哈哈！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0053:
	if (!(var0000 == 0x0004)) goto labelFunc0614_0069;
	message("「别进去！那是个陷阱！你没看出来吗？那是个陷阱！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0069:
	if (!(var0000 == 0x0005)) goto labelFunc0614_007F;
	message("「你不会相信时间领主吧？小心点，我的朋友——别相信他！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_007F:
	if (!(var0000 == 0x0006)) goto labelFunc0614_0095;
	message("「别进去！你一定会死的！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0095:
	if (!(var0000 == 0x0007)) goto labelFunc0614_00AB;
	message("「圣者，这里不欢迎你！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00AB:
	if (!(var0000 == 0x0008)) goto labelFunc0614_00C1;
	message("「你确定吗？再想想吧！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00C1:
	if (!(var0000 == 0x0009)) goto labelFunc0614_00D7;
	message("「至少有一个标志是真的，而且至少有一个标志是假的。」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_00D7:
	if (!(var0000 == 0x000A)) goto labelFunc0614_00ED;
	message("「这些标志中有两个要么是真的，要么是假的！」");
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
	message("「每个标志都可能是真的，也可能是假的！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0119:
	if (!(var0000 == 0x000D)) goto labelFunc0614_012F;
	message("「阻止圣者！我现在就要通过黑门过来了！别让他靠近！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_012F:
	if (!(var0000 == 0x000E)) goto labelFunc0614_0145;
	message("「那么，圣者！关键时刻到了！你可以摧毁黑门，但你将永远无法回到你深爱的地球。或者你现在就可以穿过它回家！这是你的选择！」");
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
	message("「可怜的圣者……可怜，可怜的圣者……」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_0179:
	if (!(var0000 == 0x0017)) goto labelFunc0614_018F;
	message("「干得好，我的朋友！你真不愧是圣者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_018F:
	if (!(var0000 == 0x0018)) goto labelFunc0614_01A5;
	message("「你走错方向了，我的朋友！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01A5:
	if (!(var0000 == 0x0019)) goto labelFunc0614_01BB;
	message("「滚开！！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01BB:
	if (!(var0000 == 0x001A)) goto labelFunc0614_01D1;
	message("「那正是该做的事，圣者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01D1:
	if (!(var0000 == 0x001B)) goto labelFunc0614_01E7;
	message("「你最好别这么做，圣者！」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01E7:
	if (!(var0000 == 0x001C)) goto labelFunc0614_01FD;
	message("「你真的知道你要去哪里吗，圣者？」");
	say();
	UI_remove_npc_face(0xFEEB);
	return;
labelFunc0614_01FD:
	if (!(var0000 == 0x001D)) goto labelFunc0614_0213;
	message("「是的，那是正确的前进方向，圣者。」");
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


