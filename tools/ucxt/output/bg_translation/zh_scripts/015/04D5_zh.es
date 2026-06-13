#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
 void Func04D5 object#(0x4D5) ()
{
	var var0000;
	var var0001;
	var var0002;
 	if (!(event == 0x0001)) goto labelFunc04D5_0148;
	UI_show_npc_face(0xFF2B, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0001 = Func08F7(0xFF2A);
	if (!var0001) goto labelFunc04D5_003E;
	UI_add_answer("石像鬼");
labelFunc04D5_003E:
	if (!gflags[0x0285]) goto labelFunc04D5_0052;
	UI_remove_answer("石像鬼");
	UI_add_answer("For-Lem");
labelFunc04D5_0052:
	if (!(!gflags[0x0292])) goto labelFunc04D5_0064;
	message("你看到面前有一個表情無憂無慮的年輕女孩。當她注意到你時，她的眼睛睜得很大，驚呼道：「你就是 For……我的其中一本故事書裡的那個人！你是聖者 ！」");
	say();
	gflags[0x0292] = true;
	goto labelFunc04D5_006E;
labelFunc04D5_0064:
	message("「你好嗎，");
	message(var0000);
	message(" 聖者 ？」她屈膝行禮。");
	say();
labelFunc04D5_006E:
	converse attend labelFunc04D5_013D;
	case "姓名" attend labelFunc04D5_008A:
	message("「我的名字是 Catherine ，");
	message(var0000);
	message(" 聖者 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D5_008A:
	case "職業" attend labelFunc04D5_00AC:
	message("「我沒有職業，");
	message(var0000);
	message(" 聖者 。我和父母一起住在 Vesper 這裡。」");
	say();
	UI_add_answer(["父親", "母親", "Vesper"]);
labelFunc04D5_00AC:
	case "父親" attend labelFunc04D5_00DD:
	message("「他是礦區的監督，");
	message(var0000);
	message(" 聖者 。」");
	say();
	var0002 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0002) goto labelFunc04D5_00D6;
	message("「當然，他現在已經不在了……」她低頭看著自己的腳。");
	say();
labelFunc04D5_00D6:
	UI_remove_answer("父親");
labelFunc04D5_00DD:
	case "母親" attend labelFunc04D5_00F6:
	message("「是的，");
	message(var0000);
	message(" 聖者 。她現在就在那裡。」她指著，顯然是指她的家。");
	say();
	UI_remove_answer("母親");
labelFunc04D5_00F6:
	case "Vesper" attend labelFunc04D5_010F:
	message("「那是我們城市的名字，");
	message(var0000);
	message(" 聖者 。如果你迷路了，你也許會想去跟鎮裡的書記員談談。」");
	say();
	UI_remove_answer("Vesper");
labelFunc04D5_010F:
	case "石像鬼" attend labelFunc04D5_0122:
	message("「對不起，");
	message(var0000);
	message(" 聖者 ，我媽媽告訴我永遠不要跟陌生人說話。」她迅速轉身離開。*");
	say();
	abort;
labelFunc04D5_0122:
	case "For-Lem" attend labelFunc04D5_012F:
	message("一滴淚水在她的臉頰上閃爍滑落。「他不在了。我——我父親因為他和說話而殺了他，而且——而且這都是你的錯！」她轉過身，啜泣著。*");
	say();
	abort;
labelFunc04D5_012F:
	case "告辭" attend labelFunc04D5_013A:
	goto labelFunc04D5_013D;
labelFunc04D5_013A:
	goto labelFunc04D5_006E;
labelFunc04D5_013D:
	endconv;
	message("「再見，");
	message(var0000);
	message(" 聖者 。」*");
	say();
labelFunc04D5_0148:
	if (!(event == 0x0000)) goto labelFunc04D5_0151;
	abort;
labelFunc04D5_0151:
	return;
}
 