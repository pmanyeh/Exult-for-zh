#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func040E object#(0x40E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc040E_0009;
	abort;
labelFunc040E_0009:
	UI_show_npc_face(0xFFF2, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc040E_0042;
	var0001 = Func08FC(0xFFF2, 0xFFF0);
	if (!var0001) goto labelFunc040E_003D;
	message("「友誼會的會議結束後，我會和你談談。」");
	say();
	goto labelFunc040E_0041;
labelFunc040E_003D:
	message("「我得趕去參加友誼會的會議！我遲到了！我們明天再談，好嗎？」");
	say();
labelFunc040E_0041:
	abort;
labelFunc040E_0042:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x003D]) goto labelFunc040E_005F;
	UI_add_answer("口令");
labelFunc040E_005F:
	if (!gflags[0x003C]) goto labelFunc040E_006C;
	UI_add_answer("謀殺");
labelFunc040E_006C:
	if (!gflags[0x003F]) goto labelFunc040E_0082;
	UI_add_answer(["友誼會", "Klog", "Hook"]);
labelFunc040E_0082:
	if (!gflags[0x0040]) goto labelFunc040E_008F;
	UI_add_answer("皇冠寶石號 (The Crown Jewel)");
labelFunc040E_008F:
	if (!(!gflags[0x004E])) goto labelFunc040E_00A1;
	message("你看到一位警覺、一絲不苟的衛兵。 ");
	say();
	gflags[0x004E] = true;
	goto labelFunc040E_00A5;
labelFunc040E_00A1:
	message("「那是什麼事？」 Johnson 語氣嚴厲地問道。 ");
	say();
labelFunc040E_00A5:
	converse attend labelFunc040E_01E6;
	case "姓名" attend labelFunc040E_00BB:
	message("「Johnson.」");
	say();
	UI_remove_answer("姓名");
labelFunc040E_00BB:
	case "職業" attend labelFunc040E_00CE:
	message("「我負責守衛碼頭的早班。我會檢查每一艘進出的船。」");
	say();
	UI_add_answer("船隻");
labelFunc040E_00CE:
	case "謀殺" attend labelFunc040E_00E1:
	message("「我確實聽說了這件事。日出時分我到達崗位時，發現 Gilberto 倒在地上。如果你是問我是否看到了什麼——我沒有。自從我到達碼頭以來，沒有人從我身邊經過。」");
	say();
	UI_remove_answer("謀殺");
labelFunc040E_00E1:
	case "皇冠寶石號 (The Crown Jewel)" attend labelFunc040E_00F4:
	message("「那艘船在日出後不久就離開了。我相信它是航行到不列顛去了。你可以去問船匠 Gargan。」");
	say();
	UI_remove_answer("皇冠寶石號 (The Crown Jewel)");
labelFunc040E_00F4:
	case "友誼會" attend labelFunc040E_011E:
	message("「是的，我是會員。你想加入嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc040E_0113;
	message("「那你就應該去不列顛城找巴特林。」");
	say();
	goto labelFunc040E_0117;
labelFunc040E_0113:
	message("「那是你的損失。」");
	say();
labelFunc040E_0117:
	UI_remove_answer("友誼會");
labelFunc040E_011E:
	case "Klog" attend labelFunc040E_0131:
	message("「好人。他是我們 Trinsic 分會的領導人。」");
	say();
	UI_remove_answer("Klog");
labelFunc040E_0131:
	case "船隻" attend labelFunc040E_0151:
	message("「如果你想要一艘船，你必須從船匠那裡拿到一張船契。你還必須有離開城鎮的口令。」");
	say();
	UI_add_answer(["口令", "船契"]);
	UI_remove_answer("船隻");
labelFunc040E_0151:
	case "口令" attend labelFunc040E_01B2:
	message("「口令是什麼？」");
	say();
	var0003 = ["我不知道...", "國王萬歲...？", "拜託..."];
	if (!gflags[0x003D]) goto labelFunc040E_017C;
	var0003 = (var0003 & "Blackbird");
labelFunc040E_017C:
	var0002 = Func090B(var0003);
	if (!(var0002 == "Blackbird")) goto labelFunc040E_01AA;
	var0004 = Func0834();
	if (!var0004) goto labelFunc040E_01A2;
	message("「很好，你可以通過了。」");
	say();
	goto labelFunc040E_01A6;
labelFunc040E_01A2:
	message("「你不能通過。」");
	say();
labelFunc040E_01A6:
	abort;
	goto labelFunc040E_01B2;
labelFunc040E_01AA:
	message("「你不知道口令。很抱歉。鎮長可以給你正確的口令。」");
	say();
	gflags[0x0042] = true;
labelFunc040E_01B2:
	case "Hook" attend labelFunc040E_01C5:
	message("「一個裝著鉤子的男人？ 不，我從昨晚到早上都沒看到任何人。」");
	say();
	UI_remove_answer("Hook");
labelFunc040E_01C5:
	case "船契" attend labelFunc040E_01D8:
	message("「你可以從船匠 Gargan 那裡買到。」");
	say();
	UI_remove_answer("船契");
labelFunc040E_01D8:
	case "告辭" attend labelFunc040E_01E3:
	goto labelFunc040E_01E6;
labelFunc040E_01E3:
	goto labelFunc040E_00A5;
labelFunc040E_01E6:
	endconv;
	message("「再會」");
	say();
	return;
}


