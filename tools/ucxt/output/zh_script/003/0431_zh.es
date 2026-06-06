#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0875 0x875 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0431 object#(0x431) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0431_0106;
	UI_show_npc_face(0xFFCF, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFCF));
	if (!(!gflags[0x00B2])) goto labelFunc0431_0049;
	message("你看見一位眼神銳利、性格嚴肅的戰士。");
	say();
	gflags[0x00B2] = true;
	goto labelFunc0431_004D;
labelFunc0431_0049:
	message("「有事嗎，聖者？」 Denby 問。");
	say();
labelFunc0431_004D:
	converse attend labelFunc0431_0101;
	case "姓名" attend labelFunc0431_0063:
	message("「我是 Denby 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0431_0063:
	case "職業" attend labelFunc0431_007F:
	message("「我是個訓練員。我專精於一種依賴個人能力、運用智力和體力來啟動微小魔法效果的戰鬥形式。但我不是法師。我是一名戰士。」");
	say();
	UI_add_answer(["魔法效果", "戰士", "訓練"]);
labelFunc0431_007F:
	case "魔法效果" attend labelFunc0431_009D:
	message("「舉例來說，我只教導一種能增進智力的身心結合練習。如果一個人渴望練習魔法，這反過來會帶給他優勢。」");
	say();
	if (!(!gflags[0x0003])) goto labelFunc0431_0096;
	message("「然而，你應該意識到，這些日子 Britannia 的魔法並不管用。這是一種正在消亡的現象。沒有人了解為什麼。儘管如此，我的訓練應該能增加任何魔法使用者的施法基礎機率，以及他們的戰鬥技巧。」");
	say();
labelFunc0431_0096:
	UI_remove_answer("魔法效果");
labelFunc0431_009D:
	case "戰士" attend labelFunc0431_00B0:
	message("「雖然我是一名戰士，但我將我的生命奉獻給和平。這個世界已經有太多爭鬥了。讓歷史來處理存在於人類身上的敵對特質吧。我相信將我的技能當作一種威懾手段。」");
	say();
	UI_remove_answer("戰士");
labelFunc0431_00B0:
	case "訓練" attend labelFunc0431_00F3:
	if (!(var0001 == 0x0007)) goto labelFunc0431_00E8;
	message("「我的訓練費用是 75 金幣。這有獲得你錢包的同意嗎？」");
	say();
	if (!Func090A()) goto labelFunc0431_00E1;
	Func0875([0x0001, 0x0002, 0x0006], 0x004B);
	goto labelFunc0431_00E5;
labelFunc0431_00E1:
	message("Denby 鞠躬。「很抱歉我的費用對你來說太高了。也許下次你會明白我服務的價值。」");
	say();
labelFunc0431_00E5:
	goto labelFunc0431_00F3;
labelFunc0431_00E8:
	message("「如果你希望訓練，請在白天回來。」");
	say();
	UI_remove_answer("訓練");
labelFunc0431_00F3:
	case "告辭" attend labelFunc0431_00FE:
	goto labelFunc0431_0101;
labelFunc0431_00FE:
	goto labelFunc0431_004D;
labelFunc0431_0101:
	endconv;
	message("Denby 雙手合十並鞠躬。*");
	say();
labelFunc0431_0106:
	if (!(event == 0x0000)) goto labelFunc0431_0114;
	Func092E(0xFFCF);
labelFunc0431_0114:
	return;
}


