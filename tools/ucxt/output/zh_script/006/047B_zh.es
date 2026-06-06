#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0871 0x871 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047B object#(0x47B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	if (!(event == 0x0001)) goto labelFunc047B_03DB;
	UI_show_npc_face(0xFF85, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF85));
	var0003 = Func08F7(0xFF86);
	var0004 = false;
	var0005 = UI_is_dead(UI_get_npc_object(0xFF84));
	var0006 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0007 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0008 = UI_is_dead(UI_get_npc_object(0xFF81));
	if (!(var0005 || (var0006 || (var0007 || var0008)))) goto labelFunc047B_0088;
	var0004 = true;
labelFunc047B_0088:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0005 && (!gflags[0x017A]))) goto labelFunc047B_00AA;
	UI_add_answer("贏得的錢");
labelFunc047B_00AA:
	if (!(!gflags[0x0175])) goto labelFunc047B_010A;
	message("你看到一個不滿且明顯過度勞累的酒館女侍。她對你敷衍地咕噥了一聲算作打招呼。");
	say();
	gflags[0x0175] = true;
	var0009 = Func08F7(0xFFFC);
	if (!var0009) goto labelFunc047B_0107;
	message("「你還在這裡啊？」她問 Dupre。");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我還沒完成對妳這家優質酒館的評估呢！」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「什麼？你是 Brommer 不列顛尼亞旅遊指南的員工嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「不是的，親愛的。這項研究完全是為了我個人的消化系統！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF85, 0x0000);
labelFunc047B_0107:
	goto labelFunc047B_0114;
labelFunc047B_010A:
	message("「日安，");
	message(var0000);
	message("。坐下休息一會兒吧。」");
	say();
labelFunc047B_0114:
	converse attend labelFunc047B_03D6;
	case "姓名" attend labelFunc047B_012A:
	message("「我是 Daphne。」");
	say();
	UI_remove_answer("姓名");
labelFunc047B_012A:
	case "職業" attend labelFunc047B_014C:
	message("「這問題很簡單。我是舖位與凳子(Bunk and Stool)的駐店老黃牛。當我們的駐店公主在和顧客調情時，所有的煮飯、打掃和端盤子工作都是我做的。」");
	say();
	UI_add_answer(["老黃牛", "公主", "買", "舖位與凳子", "房間"]);
labelFunc047B_014C:
	case "買" attend labelFunc047B_0175:
	if (!(var0002 == 0x0017)) goto labelFunc047B_0164;
	Func0871();
	goto labelFunc047B_016E;
labelFunc047B_0164:
	message("「抱歉，");
	message(var0000);
	message("，我現在不賣食物和飲料。」");
	say();
labelFunc047B_016E:
	UI_remove_answer("買");
labelFunc047B_0175:
	case "老黃牛" attend labelFunc047B_0195:
	message("「自從老闆 Sprellic 在傷痕圖書館惹上麻煩後，就沒有別人來經營這個地方了。喔，我那痛得要命的背啊！」");
	say();
	UI_remove_answer("老黃牛");
	UI_add_answer(["Sprellic", "傷痕圖書館"]);
labelFunc047B_0195:
	case "公主" attend labelFunc047B_01AF:
	message("「哼！那就是 Ophelia 了。」");
	say();
	UI_remove_answer("公主");
	UI_add_answer("Ophelia");
labelFunc047B_01AF:
	case "房間" attend labelFunc047B_01C2:
	message("「那件事你必須去問 Ophelia。我的領域是廚房！」");
	say();
	UI_remove_answer("房間");
labelFunc047B_01C2:
	case "Ophelia" attend labelFunc047B_022A:
	message("「Ophelia 長、Ophelia 短的！我一整天聽到的都是這個！如果你只想談論她，去跟別人說吧！」");
	say();
	if (!var0003) goto labelFunc047B_0223;
	UI_show_npc_face(0xFF86, 0x0000);
	message("「別因為我長得漂亮就討厭我嘛，Daphne。」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「我討厭妳才不是因為那個原因，Ophelia！」*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("「喔，對了，我現在想起來了。妳討厭我是因為我很漂亮，而妳不是！」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「真是太感謝你了，");
	message(var0000);
	message("，提起了我最喜歡的話題。」*");
	say();
	UI_remove_npc_face(0xFF86);
	UI_show_npc_face(0xFF85, 0x0000);
labelFunc047B_0223:
	UI_remove_answer("Ophelia");
labelFunc047B_022A:
	case "舖位與凳子" attend labelFunc047B_0244:
	message("「舖位與凳子是 Jhelom 戰士和流氓們喝酒的地方。要讓這群只顧著喝酒、決鬥和賭博的人滿意，這工作可不輕鬆。」");
	say();
	UI_remove_answer("舖位與凳子");
	UI_add_answer("賭博");
labelFunc047B_0244:
	case "Sprellic" attend labelFunc047B_025B:
	message("「這傻瓜被抓到從傷痕圖書館的牆上偷走榮譽旗幟！現在挑戰他的三個學生要在決鬥場上殺了他。這真是一場悲劇。」");
	say();
	gflags[0x016E] = true;
	UI_remove_answer("Sprellic");
labelFunc047B_025B:
	case "傷痕圖書館" attend labelFunc047B_026E:
	message("「那是 Jhelom 的戰鬥俱樂部，培養出的可能是全不列顛尼亞最堅強的戰士。Sprellic 這輩子連一次架都沒打過。」");
	say();
	UI_remove_answer("傷痕圖書館");
labelFunc047B_026E:
	case "賭博" attend labelFunc047B_0359:
	if (!var0004) goto labelFunc047B_0283;
	message("「很抱歉，因為這件事已經解決，所有的下注都取消了。」");
	say();
	goto labelFunc047B_0352;
labelFunc047B_0283:
	message("「事實上，我正在接受即將到來的決鬥的下注。你想下注賭 Sprellic 會輸給那三名決鬥者中的任何一個嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc047B_034E;
	message("「你想下注多少？」");
	say();
labelFunc047B_0297:
	var000B = UI_input_numeric_value(0x0000, 0x00C8, 0x000A, 0x0000);
	if (!(var000B == 0x0000)) goto labelFunc047B_02BB;
	message("「也許你對自己的信念並不那麼認真。或許公主會接受你的下注。」");
	say();
	goto labelFunc047B_034B;
labelFunc047B_02BB:
	message("「你要下注 ");
	message(var000B);
	message(" 枚金幣賭 Sprellic 會輸？」");
	say();
	var000C = Func090A();
	if (!(!var000C)) goto labelFunc047B_02DC;
	message("「很好。你想下注多少？」");
	say();
	goto labelFunc047B_0297;
	goto labelFunc047B_034B;
labelFunc047B_02DC:
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var000B)) goto labelFunc047B_0347;
	var000E = UI_add_party_items((var000B / 0x000A), 0x0399, 0xFE99, 0x0001, false);
	if (!var000E) goto labelFunc047B_0340;
	var000F = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	var0010 = true;
	message("「很好。讓我給你代表你金幣的籌碼。每一個價值 10 枚金幣。如果 Sprellic 輸了，你可以來找我領取兩倍數量的金幣。~~如果他贏了，");
	message(var0000);
	message("，你的籌碼當然就一文不值了。」");
	say();
	message("「決鬥後你可以來找我，如果你贏了就可以用這籌碼換取你贏得的錢。」");
	say();
	goto labelFunc047B_0344;
labelFunc047B_0340:
	message("「噢！等你背包有足夠空間裝這些籌碼時，你必須晚點再來。」");
	say();
labelFunc047B_0344:
	goto labelFunc047B_034B;
labelFunc047B_0347:
	message("「你沒有你想要下注的金幣數量！你是在試圖騙我嗎？」");
	say();
labelFunc047B_034B:
	goto labelFunc047B_0352;
labelFunc047B_034E:
	message("「那麼如果你想賭 Sprellic 贏，你可以去找 Ophelia，但我警告你，你這是在把錢丟進水裡！」");
	say();
labelFunc047B_0352:
	UI_remove_answer("賭博");
labelFunc047B_0359:
	case "贏得的錢" attend labelFunc047B_03C8:
	var0011 = UI_count_objects(0xFE9B, 0x0399, 0xFE99, 0x0001);
	var0012 = (var0011 * 0x0014);
	var0013 = UI_add_party_items(var0012, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0013) goto labelFunc047B_03BD;
	message("「這是你贏得的錢，");
	message(var0000);
	message("。但我有理由相信是你殺了可憐的 Sprellic！如果這就是你賺錢的方式，那你應該感到羞恥！」");
	say();
	var0014 = UI_remove_party_items(var0011, 0x0399, 0xFE99, 0x0001, false);
	gflags[0x017A] = true;
	goto labelFunc047B_03C1;
labelFunc047B_03BD:
	message("「你不可能帶得走那麼多金幣。你必須等我能給你適當數量金幣的時候再來！」");
	say();
labelFunc047B_03C1:
	UI_remove_answer("贏得的錢");
labelFunc047B_03C8:
	case "告辭" attend labelFunc047B_03D3:
	goto labelFunc047B_03D6;
labelFunc047B_03D3:
	goto labelFunc047B_0114;
labelFunc047B_03D6:
	endconv;
	message("「玩得開心。」*");
	say();
labelFunc047B_03DB:
	if (!(event == 0x0000)) goto labelFunc047B_03E9;
	Func092E(0xFF85);
labelFunc047B_03E9:
	return;
}


