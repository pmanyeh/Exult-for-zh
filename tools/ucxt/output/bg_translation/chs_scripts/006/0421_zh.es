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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A2])) goto labelFunc0421_003D;
	message("你看到一个最近刚长成蹒跚学步阶段的孩子。");
	say();
	gflags[0x00A2] = true;
	goto labelFunc0421_0041;
labelFunc0421_003D:
	message("「咿！呀！」 Nicholas 拉长音说道。");
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
	case "职业" attend labelFunc0421_00F8:
	var0001 = UI_get_schedule_type(0xFFDF);
	if (!(var0001 == 0x0019)) goto labelFunc0421_00A3;
	message("这孩子显然深深投入在鬼抓人的游戏中，不愿停下来说话。*");
	say();
	abort;
	goto labelFunc0421_00F8;
labelFunc0421_00A3:
	if (!var0000) goto labelFunc0421_00E7;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「哎呀，他的工作就是尿湿他的尿布！对不对呀，Nicholas？」 Nanna 用叠字语气说道。");
	say();
	UI_show_npc_face(0xFFDF, 0x0000);
	message("「咿！尿-布！」");
	say();
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「Nicholas 是我们的孤儿之一。某天早上他被遗弃在城堡前。发生这种事真是令人悲伤的状况。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFDF, 0x0000);
	goto labelFunc0421_00EB;
labelFunc0421_00E7:
	message("「咿！尿-布！」");
	say();
labelFunc0421_00EB:
	UI_add_answer(["尿湿", "尿布"]);
labelFunc0421_00F8:
	case "尿湿" attend labelFunc0421_012A:
	message("你注意到 Nicholas 的尿布湿了。");
	say();
	if (!var0000) goto labelFunc0421_011F;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「喔，天啊。他湿了，不是吗？你能帮我个忙替他换一下吗？我会很感激的！」");
	say();
	UI_remove_npc_face(0xFFDE);
labelFunc0421_011F:
	message("「咿——！尿-布！叽——！」 Nicholas 高兴地说。");
	say();
	UI_remove_answer("尿湿");
labelFunc0421_012A:
	case "尿布" attend labelFunc0421_015B:
	if (!var0000) goto labelFunc0421_0150;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「尿布就在那张桌子上。如果你能拿一块\t用在 Nicholas 身上的话……」");
	say();
	UI_remove_npc_face(0xFFDE);
	goto labelFunc0421_0154;
labelFunc0421_0150:
	message("Nicholas 指着桌上的尿布。");
	say();
labelFunc0421_0154:
	UI_remove_answer("尿布");
labelFunc0421_015B:
	case "告辞" attend labelFunc0421_0166:
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
	var0003 = "@抓！你当鬼！@";
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


