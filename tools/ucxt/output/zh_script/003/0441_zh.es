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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00C2])) goto labelFunc0441_003D;
	message("你看見一隻令人印象深刻，舉止莊嚴的有翼石像鬼。");
	say();
	gflags[0x00C2] = true;
	goto labelFunc0441_0041;
labelFunc0441_003D:
	message("「再次向你問好，」Wislem 說道。");
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
	message("這是『智者』的意思。」");
	say();
	UI_remove_answer("Wislem");
labelFunc0441_0071:
	case "職業" attend labelFunc0441_0084:
	message("「擔任 Lord British 的顧問，並作為我們種族在 Britain 這裡的代表。很榮幸能成為國王漫長的顧問名單中的一員。」");
	say();
	UI_add_answer("顧問");
labelFunc0441_0084:
	case "顧問" attend labelFunc0441_00A4:
	message("「為了確保石像鬼種族的聲音在城堡裡被聽見。要被 Britannia 社會接受和融合，是一條漫長的路。」");
	say();
	UI_add_answer(["融合", "社會"]);
	UI_remove_answer("顧問");
labelFunc0441_00A4:
	case "融合" attend labelFunc0441_00B7:
	message("「告訴你，在你上次拜訪後不久，石像鬼定居在東南方的 Terfin 島上。然後逐漸地，一點一點地搬到了大陸上。」");
	say();
	UI_remove_answer("融合");
labelFunc0441_00B7:
	case "社會" attend labelFunc0441_00D1:
	message("「在大多數地方被接受了。然而，仍然有一些城鎮不接受我們，這讓人感到難過。但我們的國王，Draxinusom ，仍然活著，而且做得非常出色。去了解並幫助所有還活著的石像鬼。」");
	say();
	UI_add_answer("Inamo");
	UI_remove_answer("社會");
labelFunc0441_00D1:
	case "Inamo" attend labelFunc0441_00FB:
	message("Wislem 聽了你關於 Trinsic 謀殺案的故事。「聽到這個很難過。建議你去 Terfin 拜訪 Draxinusom 國王，並告訴他關於 Inamo 的事。他會知道誰是 Inamo 的父母。建議你盡快傳達這個消息。~~「很快就去告訴 Draxinusom 關於 Inamo 的事嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0441_00F0;
	message("「知道你是可靠的。」");
	say();
	goto labelFunc0441_00F4;
labelFunc0441_00F0:
	message("「擔心 Inamo 的父母永遠不會知道發生了什麼事。」他看起來很悲傷。");
	say();
labelFunc0441_00F4:
	UI_remove_answer("Inamo");
labelFunc0441_00FB:
	case "告辭" attend labelFunc0441_0106:
	goto labelFunc0441_0109;
labelFunc0441_0106:
	goto labelFunc0441_0041;
labelFunc0441_0109:
	endconv;
	message("「告辭。」*");
	say();
labelFunc0441_010E:
	return;
}


