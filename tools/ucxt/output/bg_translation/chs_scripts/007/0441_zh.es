#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0441 object#(0x441) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0441_0009;
	abort;
labelFunc0441_0009:
	if (!(event == 0x0001)) goto labelFunc0441_010E;
	UI_show_npc_face(0xFFBF, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00C2])) goto labelFunc0441_003D;
	message("你看见一只令人印象深刻，举止庄严的有翼石像鬼。");
	say();
	gflags[0x00C2] = true;
	goto labelFunc0441_0041;
labelFunc0441_003D:
	message("「再次向你问好，」Wislem 说道。");
	say();
labelFunc0441_0041:
	converse attend labelFunc0441_0109;
	case "姓名" attend labelFunc0441_005E:
	message("「我是 Wislem。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Wislem");
labelFunc0441_005E:
	case "Wislem" attend labelFunc0441_0071:
	message("这是『智者』的意思。」");
	say();
	UI_remove_answer("Wislem");
labelFunc0441_0071:
	case "职业" attend labelFunc0441_0084:
	message("「担任不列颠王的顾问，并作为我们种族在不列颠城这里的代表。很荣幸能成为国王漫长的顾问名单中的一员。」");
	say();
	UI_add_answer("顾问");
labelFunc0441_0084:
	case "顾问" attend labelFunc0441_00A4:
	message("「为了确保石像鬼种族的声音在城堡里被听见。要被不列颠尼亚社会接受和融合，是一条漫长的路。」");
	say();
	UI_add_answer(["融合", "社会"]);
	UI_remove_answer("顾问");
labelFunc0441_00A4:
	case "融合" attend labelFunc0441_00B7:
	message("「告诉你，在你上次拜访后不久，石像鬼定居在东南方的 Terfin 岛上。然后逐渐地，一点一点地搬到了大陆上。」");
	say();
	UI_remove_answer("融合");
labelFunc0441_00B7:
	case "社会" attend labelFunc0441_00D1:
	message("「在大多数地方被接受了。然而，仍然有一些城镇不接受我们，这让人感到难过。但我们的国王，Draxinusom ，仍然活着，而且做得非常出色。去了解并帮助所有还活着的石像鬼。」");
	say();
	UI_add_answer("Inamo");
	UI_remove_answer("社会");
labelFunc0441_00D1:
	case "Inamo" attend labelFunc0441_00FB:
	message("Wislem 听了你关于 Trinsic 谋杀案的故事。「听到这个很难过。建议你去 Terfin 拜访 Draxinusom 国王，并告诉他关于 Inamo 的事。他会知道谁是 Inamo 的父母。建议你尽快传达这个消息。~~「很快就去告诉 Draxinusom 关于 Inamo 的事吗？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0441_00F0;
	message("「知道你是可靠的。」");
	say();
	goto labelFunc0441_00F4;
labelFunc0441_00F0:
	message("「担心 Inamo 的父母永远不会知道发生了什么事。」他看起来很悲伤。");
	say();
labelFunc0441_00F4:
	UI_remove_answer("Inamo");
labelFunc0441_00FB:
	case "告辞" attend labelFunc0441_0106:
	goto labelFunc0441_0109;
labelFunc0441_0106:
	goto labelFunc0441_0041;
labelFunc0441_0109:
	endconv;
	message("「告辞。」*");
	say();
labelFunc0441_010E:
	return;
}


