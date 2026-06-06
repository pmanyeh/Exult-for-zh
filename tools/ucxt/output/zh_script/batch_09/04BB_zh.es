#game "blackgate"
void Func04BB object#(0x4BB) ()
{
	if (!(event == 0x0001)) goto labelFunc04BB_00F4;
	UI_show_npc_face(0xFF45, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x024C])) goto labelFunc04BB_0034;
	message("你看到一隻皺著眉頭的石像鬼。");
	say();
	gflags[0x024C] = true;
	goto labelFunc04BB_0038;
labelFunc04BB_0034:
	message("「請問你需要什麼，人類，」 Silamo 說。");
	say();
labelFunc04BB_0038:
	converse attend labelFunc04BB_00EF;
	case "姓名" attend labelFunc04BB_0062:
	message("「叫做 Silamo 。」");
	say();
	if (!gflags[0x023D]) goto labelFunc04BB_0054;
	UI_add_answer("無翼狀態");
labelFunc04BB_0054:
	UI_remove_answer("姓名");
	UI_add_answer("Silamo");
labelFunc04BB_0062:
	case "Silamo" attend labelFunc04BB_0075:
	message("「如果我有翅膀的話，你就會知道我的名字。」他對你怒目而視。");
	say();
	UI_remove_answer("Silamo");
labelFunc04BB_0075:
	case "職業" attend labelFunc04BB_0081:
	message("「是個園丁，」他聳了聳肩，「僅此而已。」~~他似乎沒興趣跟你說話。");
	say();
labelFunc04BB_0081:
	case "無翼狀態" attend labelFunc04BB_00A1:
	message("他盯著你看了一會兒。~~「沒錯，人類。~~ 感覺因為沒有翅膀而受到不平等待遇。看到 Quaeven 加入友誼會後待遇變好了。我一直致力於單一性 (singularity) 的祭壇。但如果友誼會不在乎翅膀的話，或許我該改變了。」");
	say();
	UI_add_answer(["待遇", "Quaeven"]);
	UI_remove_answer("無翼狀態");
labelFunc04BB_00A1:
	case "Quaeven" attend labelFunc04BB_00B4:
	message("「同樣也是沒有翅膀，卻能像有翅膀一樣受到尊重。」");
	say();
	UI_remove_answer("Quaeven");
labelFunc04BB_00B4:
	case "待遇" attend labelFunc04BB_00CE:
	message("「看到許多人邀請他參加許多將我排除在外的活動。也知道其他人邀請他參加更多的決策會議。」");
	say();
	UI_remove_answer("待遇");
	UI_add_answer("其他人");
labelFunc04BB_00CE:
	case "其他人" attend labelFunc04BB_00E1:
	message("「友誼會中的石像鬼。」");
	say();
	UI_remove_answer("其他人");
labelFunc04BB_00E1:
	case "告辭" attend labelFunc04BB_00EC:
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


