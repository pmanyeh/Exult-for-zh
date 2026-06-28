#game "blackgate"
void Func04BB object#(0x4BB) ()
{
	if (!(event == 0x0001)) goto labelFunc04BB_00F4;
	UI_show_npc_face(0xFF45, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x024C])) goto labelFunc04BB_0034;
	message("你看到一只皱着眉头的石像鬼。");
	say();
	gflags[0x024C] = true;
	goto labelFunc04BB_0038;
labelFunc04BB_0034:
	message("「请问你需要什么，人类，」 Silamo 说。");
	say();
labelFunc04BB_0038:
	converse attend labelFunc04BB_00EF;
	case "姓名" attend labelFunc04BB_0062:
	message("「叫做 Silamo 。」");
	say();
	if (!gflags[0x023D]) goto labelFunc04BB_0054;
	UI_add_answer("无翼状态");
labelFunc04BB_0054:
	UI_remove_answer("姓名");
	UI_add_answer("Silamo");
labelFunc04BB_0062:
	case "Silamo" attend labelFunc04BB_0075:
	message("「如果我有翅膀的话，你就会知道我的名字。」他对你怒目而视。");
	say();
	UI_remove_answer("Silamo");
labelFunc04BB_0075:
	case "职业" attend labelFunc04BB_0081:
	message("「是个园丁，」他耸了耸肩，「仅此而已。」~~他似乎没兴趣跟你说话。");
	say();
labelFunc04BB_0081:
	case "无翼状态" attend labelFunc04BB_00A1:
	message("他盯着你看了一会儿。~~「没错，人类。~~ 感觉因为没有翅膀而受到不平等待遇。看到 Quaeven 加入友谊会后待遇变好了。我一直致力於单一性 (singularity) 的祭坛。但如果友谊会不在乎翅膀的话，或许我该改变了。」");
	say();
	UI_add_answer(["待遇", "Quaeven"]);
	UI_remove_answer("无翼状态");
labelFunc04BB_00A1:
	case "Quaeven" attend labelFunc04BB_00B4:
	message("「同样也是没有翅膀，却能像有翅膀一样受到尊重。」");
	say();
	UI_remove_answer("Quaeven");
labelFunc04BB_00B4:
	case "待遇" attend labelFunc04BB_00CE:
	message("「看到许多人邀请他参加许多将我排除在外的活动。也知道其他人邀请他参加更多的决策会议。」");
	say();
	UI_remove_answer("待遇");
	UI_add_answer("其他人");
labelFunc04BB_00CE:
	case "其他人" attend labelFunc04BB_00E1:
	message("「友谊会中的石像鬼。」");
	say();
	UI_remove_answer("其他人");
labelFunc04BB_00E1:
	case "告辞" attend labelFunc04BB_00EC:
	goto labelFunc04BB_00EF;
labelFunc04BB_00EC:
	goto labelFunc04BB_0038;
labelFunc04BB_00EF:
	endconv;
	message("「回去工作了。」*");
	say();
labelFunc04BB_00F4:
	if (!(event == 0x0000)) goto labelFunc04BB_00FD;
	abort;
labelFunc04BB_00FD:
	return;
}


