#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A2 0x8A2 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049F object#(0x49F) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc049F_0120;
	UI_show_npc_face(0xFF61, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0201])) goto labelFunc049F_0047;
	message("你看到一位舉止知性的年輕女子。");
	say();
	gflags[0x0201] = true;
	goto labelFunc049F_0051;
labelFunc049F_0047:
	message("「你好，");
	message(var0000);
	message("。像往常一樣，我有很多事要做。不過，如果有必要的話，我可以為你騰出一點時間。」");
	say();
labelFunc049F_0051:
	converse attend labelFunc049F_0115;
	case "姓名" attend labelFunc049F_006D:
	message("「我是 Jillian，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc049F_006D:
	case "職業" attend labelFunc049F_0099:
	message("「我是一名學者，");
	message(var0001);
	message("。我也在這裡輔導並訓練那些在 Moonglow 尋求知識的人。」");
	say();
	UI_add_answer(["Moonglow", "輔導"]);
	if (!gflags[0x01F6]) goto labelFunc049F_0099;
	UI_add_answer("東北海域");
labelFunc049F_0099:
	case "Moonglow" attend labelFunc049F_00AC:
	message("「這座城鎮幾乎佔據了同名的整座島嶼。這座島位於 Britain 城的正東方，稍微偏南幾度。」");
	say();
	UI_remove_answer("Moonglow");
labelFunc049F_00AC:
	case "東北海域" attend labelFunc049F_00BF:
	message("「很久以前，有一塊小大陸——其實是一座島——叫做 Ambrosia。然而，隕石擊中了它，摧毀了它的主要城市。這座島就位於東北海域。我想，它的遺跡應該還深埋在廢墟之下。」");
	say();
	UI_remove_answer("東北海域");
labelFunc049F_00BF:
	case "輔導" attend labelFunc049F_0107:
	var0002 = UI_part_of_day();
	if (!((var0002 >= 0x0003) || (var0002 <= 0x0006))) goto labelFunc049F_0103;
	message("「我的收費是每次訓練 35 枚金幣。你願意支付嗎？」");
	say();
	if (!Func090A()) goto labelFunc049F_00FC;
	Func08A2([0x0006, 0x0002], 0x0023);
	goto labelFunc049F_0100;
labelFunc049F_00FC:
	message("「那麼我真的該回去繼續我的研究了。」");
	say();
labelFunc049F_0100:
	goto labelFunc049F_0107;
labelFunc049F_0103:
	message("「比較好的訓練時間是我在書房裡的時候。」");
	say();
labelFunc049F_0107:
	case "告辭" attend labelFunc049F_0112:
	goto labelFunc049F_0115;
labelFunc049F_0112:
	goto labelFunc049F_0051;
labelFunc049F_0115:
	endconv;
	message("「保重，");
	message(var0000);
	message("，」她說著，回到了之前的活動中。*");
	say();
labelFunc049F_0120:
	if (!(event == 0x0000)) goto labelFunc049F_012E;
	Func092E(0xFF61);
labelFunc049F_012E:
	return;
}


