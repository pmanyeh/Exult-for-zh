#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func092E 0x92E (var var0000);

void Func0440 object#(0x440) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0440_0127;
	UI_show_npc_face(0xFFC0, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0099]) goto labelFunc0440_0035;
	UI_add_answer("Nystul");
labelFunc0440_0035:
	if (!(!gflags[0x00C1])) goto labelFunc0440_0047;
	message("你看見你從前的同伴和朋友，皇家守衛隊長 Geoffrey。");
	say();
	gflags[0x00C1] = true;
	goto labelFunc0440_0051;
labelFunc0440_0047:
	message("「什麼事，");
	message(var0000);
	message("？」 Geoffrey 問道。");
	say();
labelFunc0440_0051:
	converse attend labelFunc0440_0122;
	case "姓名" attend labelFunc0440_0067:
	message("Geoffrey 輕笑著。「你在開玩笑嗎？我是 Geoffrey 啊！」");
	say();
	UI_remove_answer("姓名");
labelFunc0440_0067:
	case "職業" attend labelFunc0440_007A:
	message("「這些日子以來，我仍然擔任皇家守衛隊長的職位。我是不列顛王的私人貼身侍衛，而且我負責城堡的安全。我現在沒有太多時間，也沒必要去冒險了。」");
	say();
	UI_add_answer("冒險");
labelFunc0440_007A:
	case "冒險" attend labelFunc0440_009A:
	message("「在過去這兩百年間，我老了一些。恐怕我這次不能與你同行了。但我的心與你同在，如果我能提供一些協助，我很樂意幫忙。」");
	say();
	UI_remove_answer("冒險");
	UI_add_answer(["老了", "協助"]);
labelFunc0440_009A:
	case "老了" attend labelFunc0440_00AD:
	message("「是的，以不列顛尼亞的曆法來算，我已經很久沒見過我的故鄉了。當你完成你的事情後，一定要回來告訴我我們家鄉發生的新聞。」");
	say();
	UI_remove_answer("老了");
labelFunc0440_00AD:
	case "協助" attend labelFunc0440_00CD:
	message("「我給你的建議是，盡快累積你的經驗和技能。你已經離開不列顛尼亞很長一段時間了。你可能不再處於你上次在這裡冒險結束時的最佳狀態。」");
	say();
	UI_remove_answer("協助");
	UI_add_answer(["經驗", "狀態"]);
labelFunc0440_00CD:
	case "狀態" attend labelFunc0440_00E0:
	message("「這顯然是我們兩個世界的另一個不同之處。每當你回來時，就好像你的肉體是第一次來到這裡一樣。這也是為什麼你許多同伴選擇留在這裡，儘管他們在不列顛尼亞的時間流逝中已經變老了。」");
	say();
	UI_remove_answer("狀態");
labelFunc0440_00E0:
	case "經驗" attend labelFunc0440_00F3:
	message("「去找怪物吧。擊敗他們。拿走他們的黃金！獲取經驗！當你去拜訪訓練師時，使用那些經驗。增加你的力量、敏捷度和智力，以及你的戰鬥技能和施法能力。如果沒有這種必要的經驗進化，你會迷失的！」");
	say();
	UI_remove_answer("經驗");
labelFunc0440_00F3:
	case "Nystul" attend labelFunc0440_0114:
	if (!(!gflags[0x0003])) goto labelFunc0440_0109;
	message("「他相當瘋癲。如果你問我，我相信這片土地上所有的法師都遭殃了。你自己去看看並找出答案吧。」");
	say();
	goto labelFunc0440_010D;
labelFunc0440_0109:
	message("「他現在好多了！」");
	say();
labelFunc0440_010D:
	UI_remove_answer("Nystul");
labelFunc0440_0114:
	case "告辭" attend labelFunc0440_011F:
	goto labelFunc0440_0122;
labelFunc0440_011F:
	goto labelFunc0440_0051;
labelFunc0440_0122:
	endconv;
	message("「要有勇氣。要有信念。要堅強。要明智。」*");
	say();
labelFunc0440_0127:
	if (!(event == 0x0000)) goto labelFunc0440_0135;
	Func092E(0xFFC0);
labelFunc0440_0135:
	return;
}


