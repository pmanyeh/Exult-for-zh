#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0950 0x950 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0424 object#(0x424) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0424_0148;
	UI_show_npc_face(0xFFDC, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDC));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A5])) goto labelFunc0424_0049;
	message("你看見一位身材精瘦、帶有幾分瀟灑氣質的年輕戰士。");
	say();
	gflags[0x00A5] = true;
	goto labelFunc0424_004D;
labelFunc0424_0049:
	message("「又見面了！」 Zella 說。");
	say();
labelFunc0424_004D:
	converse attend labelFunc0424_0143;
	case "姓名" attend labelFunc0424_0063:
	message("「我的名字是 Zella。」");
	say();
	UI_remove_answer("姓名");
labelFunc0424_0063:
	case "職業" attend labelFunc0424_007C:
	message("「我是個訓練員。我專精於肉搏戰。畢竟，一個戰士永遠不知道何時可能會遇到對手，卻突然意識到自己手無寸鐵。我稱之為『拳擊』。拳擊不僅是一種戰鬥方法——它是一門藝術。」");
	say();
	UI_add_answer(["戰鬥", "訓練"]);
labelFunc0424_007C:
	case "戰鬥" attend labelFunc0424_009C:
	message("「戰場包含許多競技場。幾乎任何情況都可能發生。每個戰士都應該了解並精通多種戰鬥形式。我有我自己的戰鬥理論。」");
	say();
	UI_remove_answer("戰鬥");
	UI_add_answer(["競技場", "理論"]);
labelFunc0424_009C:
	case "競技場" attend labelFunc0424_00AF:
	message("「所有不同的戰鬥競技場，以及在用不同武器戰鬥時可能學到的所有不同風格，都不是最純粹形式的戰鬥。要真正成為一名偉大的戰士，必須追溯到所有戰鬥知識的源頭。」");
	say();
	UI_remove_answer("競技場");
labelFunc0424_00AF:
	case "理論" attend labelFunc0424_00CF:
	message("「就像城堡是從地基往上建的一樣，戰士也是如此。不能一開始就學習用武器戰鬥。武器只是人體末端的延伸。一個真正的戰士首先學會使用他的四肢。」");
	say();
	UI_remove_answer("理論");
	UI_add_answer(["戰士", "四肢"]);
labelFunc0424_00CF:
	case "戰士" attend labelFunc0424_00E2:
	message("「別搞錯了。戰士是後天訓練出來的，而不是天生的。如果沒有求勝的心和意志，世界上所有天賦都無濟於事。那種意志的一部分，是去尋找自己的極限並努力超越它們的勇氣。」");
	say();
	UI_remove_answer("戰士");
labelFunc0424_00E2:
	case "四肢" attend labelFunc0424_00F5:
	message("「你的手臂。你的雙腿。你的拳頭。這就是『拳擊』的基礎。」");
	say();
	UI_remove_answer("四肢");
labelFunc0424_00F5:
	case "訓練" attend labelFunc0424_0135:
	if (!(var0001 == 0x001D)) goto labelFunc0424_012A;
	message("「我的訓練價格是 45 金幣。可以嗎？」");
	say();
	if (!Func090A()) goto labelFunc0424_0123;
	Func0950([0x0001, 0x0004], 0x002D);
	goto labelFunc0424_0127;
labelFunc0424_0123:
	message("「那麼你或許可以在其他地方找到更便宜的訓練。」");
	say();
labelFunc0424_0127:
	goto labelFunc0424_0135;
labelFunc0424_012A:
	message("「麻煩你在正常的訓練時間再來，好嗎？」");
	say();
	UI_remove_answer("訓練");
labelFunc0424_0135:
	case "告辭" attend labelFunc0424_0140:
	goto labelFunc0424_0143;
labelFunc0424_0140:
	goto labelFunc0424_004D;
labelFunc0424_0143:
	endconv;
	message("「祝你有美好的一天。」*");
	say();
labelFunc0424_0148:
	if (!(event == 0x0000)) goto labelFunc0424_0156;
	Func092E(0xFFDC);
labelFunc0424_0156:
	return;
}


