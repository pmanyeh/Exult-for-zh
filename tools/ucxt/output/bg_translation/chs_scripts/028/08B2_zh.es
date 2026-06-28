#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func08B2 0x8B2 ()
{
	var var0000;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0908();
	message("Horance 好奇地看着你，「你在 Skara Brae 的任务已经完成了。你有我的敬意与毕生的感激。」");
	say();
	if (!gflags[0x017C]) goto labelFunc08B2_0025;
	message("「但是……，」他在这里犹豫了一下，似乎不确定该如何继续，「……你不该回到带你来这里的任务吗？」");
	say();
	UI_add_answer("任务");
labelFunc08B2_0025:
	UI_add_answer(["Skara Brae", "告辞"]);
labelFunc08B2_0032:
	converse attend labelFunc08B2_007F;
	case "任务" attend labelFunc08B2_0056:
	if (!(!gflags[0x01B0])) goto labelFunc08B2_004B;
	message("「喔，是的。我感觉到 Caine 的灵魂还没离开这座岛。他不是在等你回去吗？」");
	say();
	goto labelFunc08B2_004F;
labelFunc08B2_004B:
	message("「我猜想，你被带到不列颠尼亚是有原因的。如果你不知道那是什么，你不该去寻找吗？」");
	say();
labelFunc08B2_004F:
	UI_remove_answer("任务");
labelFunc08B2_0056:
	case "Skara Brae" attend labelFunc08B2_0069:
	message("「我打算重建这座城镇，进而使其成为一个美丽而闻名的地方。我请你在未来的日子里回来看看，看我是否能兑现我的夸口。」");
	say();
	UI_remove_answer("Skara Brae");
labelFunc08B2_0069:
	case "告辞" attend labelFunc08B2_007C:
	message("「再见了，");
	message(var0000);
	message("。我希望你的任务顺利。」他转过身去。*");
	say();
	abort;
labelFunc08B2_007C:
	goto labelFunc08B2_0032;
labelFunc08B2_007F:
	endconv;
	if (!(event == 0x0000)) goto labelFunc08B2_0089;
	abort;
labelFunc08B2_0089:
	return;
}
