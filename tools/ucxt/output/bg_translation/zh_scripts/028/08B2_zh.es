#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func08B2 0x8B2 ()
{
	var var0000;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0908();
	message("Horance 好奇地看著你，「你在 Skara Brae 的任務已經完成了。你有我的敬意與畢生的感激。」");
	say();
	if (!gflags[0x017C]) goto labelFunc08B2_0025;
	message("「但是……，」他在這裡猶豫了一下，似乎不確定該如何繼續，「……你不該回到帶你來這裡的任務嗎？」");
	say();
	UI_add_answer("任務");
labelFunc08B2_0025:
	UI_add_answer(["Skara Brae", "告辭"]);
labelFunc08B2_0032:
	converse attend labelFunc08B2_007F;
	case "任務" attend labelFunc08B2_0056:
	if (!(!gflags[0x01B0])) goto labelFunc08B2_004B;
	message("「喔，是的。我感覺到 Caine 的靈魂還沒離開這座島。他不是在等你回去嗎？」");
	say();
	goto labelFunc08B2_004F;
labelFunc08B2_004B:
	message("「我猜想，你被帶到不列顛尼亞是有原因的。如果你不知道那是什麼，你不該去尋找嗎？」");
	say();
labelFunc08B2_004F:
	UI_remove_answer("任務");
labelFunc08B2_0056:
	case "Skara Brae" attend labelFunc08B2_0069:
	message("「我打算重建這座城鎮，進而使其成為一個美麗而聞名的地方。我請你在未來的日子裡回來看看，看我是否能兌現我的誇口。」");
	say();
	UI_remove_answer("Skara Brae");
labelFunc08B2_0069:
	case "告辭" attend labelFunc08B2_007C:
	message("「再見了，");
	message(var0000);
	message("。我希望你的任務順利。」他轉過身去。*");
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
