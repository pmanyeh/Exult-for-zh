#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func0421 object#(0x421) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0421_016E;
	UI_show_npc_face(0xFFDF, 0x0000);
	var0000 = Func08F7(0xFFDE);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A2])) goto labelFunc0421_003D;
	message("你看到一個最近剛長成蹣跚學步階段的孩子。");
	say();
	gflags[0x00A2] = true;
	goto labelFunc0421_0041;
labelFunc0421_003D:
	message("「咿！呀！」 Nicholas 拉長音說道。");
	say();
labelFunc0421_0041:
	converse attend labelFunc0421_0169;
	case "姓名" attend labelFunc0421_007F:
	if (!var0000) goto labelFunc0421_0074;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「他的名字是 Nicholas。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFDF, 0x0000);
	goto labelFunc0421_0078;
labelFunc0421_0074:
	message("「Nick-las 」。");
	say();
labelFunc0421_0078:
	UI_remove_answer("姓名");
labelFunc0421_007F:
	case "職業" attend labelFunc0421_00F8:
	var0001 = UI_get_schedule_type(0xFFDF);
	if (!(var0001 == 0x0019)) goto labelFunc0421_00A3;
	message("這孩子顯然深深投入在鬼抓人的遊戲中，不願停下來說話。*");
	say();
	abort;
	goto labelFunc0421_00F8;
labelFunc0421_00A3:
	if (!var0000) goto labelFunc0421_00E7;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「哎呀，他的工作就是尿濕他的尿布！對不對呀，Nicholas？」 Nanna 用疊字語氣說道。");
	say();
	UI_show_npc_face(0xFFDF, 0x0000);
	message("「咿！尿-布！」");
	say();
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「Nicholas 是我們的孤兒之一。某天早上他被遺棄在城堡前。發生這種事真是令人悲傷的狀況。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFDF, 0x0000);
	goto labelFunc0421_00EB;
labelFunc0421_00E7:
	message("「咿！尿-布！」");
	say();
labelFunc0421_00EB:
	UI_add_answer(["尿濕", "尿布"]);
labelFunc0421_00F8:
	case "尿濕" attend labelFunc0421_012A:
	message("你注意到 Nicholas 的尿布濕了。");
	say();
	if (!var0000) goto labelFunc0421_011F;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「喔，天啊。他濕了，不是嗎？你能幫我個忙替他換一下嗎？我會很感激的！」");
	say();
	UI_remove_npc_face(0xFFDE);
labelFunc0421_011F:
	message("「咿——！尿-布！嘰——！」 Nicholas 高興地說。");
	say();
	UI_remove_answer("尿濕");
labelFunc0421_012A:
	case "尿布" attend labelFunc0421_015B:
	if (!var0000) goto labelFunc0421_0150;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「尿布就在那張桌子上。如果你能拿一塊\t用在 Nicholas 身上的話……」");
	say();
	UI_remove_npc_face(0xFFDE);
	goto labelFunc0421_0154;
labelFunc0421_0150:
	message("Nicholas 指著桌上的尿布。");
	say();
labelFunc0421_0154:
	UI_remove_answer("尿布");
labelFunc0421_015B:
	case "告辭" attend labelFunc0421_0166:
	goto labelFunc0421_0169;
labelFunc0421_0166:
	goto labelFunc0421_0041;
labelFunc0421_0169:
	endconv;
	message("「掰掰！」*");
	say();
labelFunc0421_016E:
	if (!(event == 0x0000)) goto labelFunc0421_01E5;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDF));
	if (!(var0001 == 0x0019)) goto labelFunc0421_01E5;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc0421_01AB;
	var0003 = "@抓！你當鬼！@";
labelFunc0421_01AB:
	if (!(var0002 == 0x0002)) goto labelFunc0421_01BB;
	var0003 = "@抓我！抓我！@";
labelFunc0421_01BB:
	if (!(var0002 == 0x0003)) goto labelFunc0421_01CB;
	var0003 = "@啦啦！@";
labelFunc0421_01CB:
	if (!(var0002 == 0x0004)) goto labelFunc0421_01DB;
	var0003 = "@抓！咿！@";
labelFunc0421_01DB:
	UI_item_say(0xFFDF, var0003);
labelFunc0421_01E5:
	return;
}


