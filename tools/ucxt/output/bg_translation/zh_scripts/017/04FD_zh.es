#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0864 0x864 ();

void Func04FD object#(0x4FD) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04FD_01F1;
	UI_show_npc_face(0xFF03, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF04);
	var0002 = Func08F7(0xFF0C);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02CB])) goto labelFunc04FD_004C;
	message("這個年輕人睜大眼睛的表情似乎表明了他的天真。");
	say();
	gflags[0x02CB] = true;
	goto labelFunc04FD_0056;
labelFunc04FD_004C:
	message("「哎呀，你好，");
	message(var0000);
	message("，」Cosmo 說。");
	say();
labelFunc04FD_0056:
	converse attend labelFunc04FD_01E6;
	case "姓名" attend labelFunc04FD_0083:
	message("「我是 Cosmo ，");
	message(var0000);
	message("，Ophelia 的未婚夫。」");
	say();
	gflags[0x02D7] = true;
	UI_remove_answer("姓名");
	UI_add_answer(["未婚妻", "Ophelia"]);
labelFunc04FD_0083:
	case "職業" attend labelFunc04FD_009C:
	message("「我，呃，正在尋找某樣東西，");
	message(var0000);
	message("。」");
	say();
	UI_add_answer("尋找");
labelFunc04FD_009C:
	case "未婚妻" attend labelFunc04FD_00DE:
	message("「是的，");
	message(var0000);
	message("，只要我回到她柔軟的懷抱，我們就要結婚了。」");
	say();
	if (!var0002) goto labelFunc04FD_00D7;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「喔，拜託！」他翻了個白眼。*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF03, 0x0000);
labelFunc04FD_00D7:
	UI_remove_answer("未婚妻");
labelFunc04FD_00DE:
	case "尋找" attend labelFunc04FD_0138:
	message("「嗯，");
	message(var0000);
	message("，這有點私事。」");
	say();
	if (!var0002) goto labelFunc04FD_012A;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「他正在尋找的，");
	message(var0000);
	message("，是他的童貞！」*");
	say();
	UI_show_npc_face(0xFF03, 0x0000);
	message("「那不是真的！」他臉紅了。~~「我在找一個方法來『證明』……我的童貞！」*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_add_answer("證明");
labelFunc04FD_012A:
	UI_add_answer("私事");
	UI_remove_answer("尋找");
labelFunc04FD_0138:
	case "私事" attend labelFunc04FD_0151:
	message("「我……寧願……不談這個，");
	message(var0000);
	message("，」他結結巴巴地說。");
	say();
	UI_remove_answer("私事");
labelFunc04FD_0151:
	case "Ophelia" attend labelFunc04FD_0164:
	message("「她是不列顛尼亞最美麗的女人。我仍然難以置信她竟然同意嫁給我這個卑微的戰士。如果有必要，為了留住她的心，我願意為她走到世界盡頭！」");
	say();
	UI_remove_answer("Ophelia");
labelFunc04FD_0164:
	case "證明" attend labelFunc04FD_0184:
	message("他低頭看著自己的腳。「Ophelia 夫人擔心我可能不是……純潔的。我等了一輩子才等到像她這樣的人。難道她看不出來我是為了婚姻才保留自己的嗎？」");
	say();
	UI_add_answer(["保留", "純潔"]);
	UI_remove_answer("證明");
labelFunc04FD_0184:
	case "保留" attend labelFunc04FD_019D:
	message("「你肯定能看出這其中的價值，");
	message(var0000);
	message("。如果我沒有克制……嗯……你懂的，就沒有女人會想要我了。」");
	say();
	UI_remove_answer("保留");
labelFunc04FD_019D:
	case "純潔" attend labelFunc04FD_01C1:
	message("「我必須向可愛的 Ophelia 證明我仍然是處男。為了做到這一點，我需要證明獨角獸會讓我觸碰牠。我的朋友和我在這裡尋找這樣的生物，因為最近的傳說聲稱有一隻住在這個地城裡。」");
	say();
	gflags[0x02E0] = true;
	if (!gflags[0x02D0]) goto labelFunc04FD_01BA;
	UI_add_answer("獨角獸說不");
labelFunc04FD_01BA:
	UI_remove_answer("純潔");
labelFunc04FD_01C1:
	case "獨角獸說不" attend labelFunc04FD_01D8:
	message("「你見過那隻獨角獸了？」他皺了一會兒眉頭，但很快就舒展開來。~~「儘管如此，我還是會努力尋找牠。沒有什麼能阻止我去找我心愛的 Ophelia。」");
	say();
	UI_remove_answer("獨角獸說不");
	gflags[0x02D0] = false;
labelFunc04FD_01D8:
	case "告辭" attend labelFunc04FD_01E3:
	goto labelFunc04FD_01E6;
labelFunc04FD_01E3:
	goto labelFunc04FD_0056;
labelFunc04FD_01E6:
	endconv;
	message("「祝你有個美好的一天，");
	message(var0000);
	message("。如果你看到獨角獸，告訴牠等我。」*");
	say();
labelFunc04FD_01F1:
	if (!(event == 0x0000)) goto labelFunc04FD_01FC;
	Func0864();
labelFunc04FD_01FC:
	return;
}


