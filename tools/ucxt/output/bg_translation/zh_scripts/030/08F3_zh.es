#game "blackgate"
void Func08F3 0x8F3 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	UI_push_answers();
	var0001 = false;
	var0002 = false;
	UI_add_answer(["魔法附魔", "戰鬥武勇", "告辭"]);
	message("「請告訴我一件事，如果您方便的話。自從我首次學習荒野求生技能以來，已經過去許多年了。這種技能也包括了動用武力的技巧，而我必須知道……聖者究竟是偏好以神祕的魔法附魔來克敵制勝，還是更傾向於肢體力量與戰鬥武勇呢？」");
	say();
	var0003 = false;
labelFunc08F3_0024:
	converse attend labelFunc08F3_0156;
	case "魔法附魔" attend labelFunc08F3_003A:
	message("「我早就猜到了！我對如此深奧的事情一竅不通，但或許等我們的任務完成後，我們可以聊聊關於魔法附魔的話題。」");
	say();
	gflags[0x015E] = true;
	goto labelFunc08F3_0157;
labelFunc08F3_003A:
	case "戰鬥武勇" attend labelFunc08F3_006C:
	message("「我常常這樣猜想！能與您一同旅行是我的榮幸。我會努力向您學習，因為您無疑是有史以來最偉大的戰士。」");
	say();
	message("「等我們的任務完成後，我們一定要互相分享各自的英雄事蹟。告訴我，您更喜歡近身肉搏，還是遠程武器？」");
	say();
	UI_remove_answer(["魔法附魔", "戰鬥武勇"]);
	UI_add_answer(["近身肉搏", "遠程武器"]);
	gflags[0x015E] = false;
	var0001 = false;
labelFunc08F3_006C:
	case "近身肉搏" attend labelFunc08F3_00A8:
	UI_remove_answer("近身肉搏");
	var0004 = "而且你看起來很有男子氣概，足以應付這種近身戰";
	if (!(UI_is_pc_female() == 0x0001)) goto labelFunc08F3_0096;
	var0004 = "特別是在女性身上。不列顛尼亞的女性很少具備這些特質";
	var0002 = true;
labelFunc08F3_0096:
	message("「這種武器需要力量與膽識！我很欣賞這樣的特質，");
	message(var0004);
	message("。」");
	say();
	message("「但我更偏愛弓箭。這是一種古老而優雅的武器，一把優秀的 Yew 弓能比劍更快擊倒獵物。」");
	say();
	var0003 = true;
labelFunc08F3_00A8:
	case "遠程武器" attend labelFunc08F3_00C3:
	UI_remove_answer("遠程武器");
	message("「這也是我的選擇。在箭術方面，很少有人能與我並駕齊驅。這需要敏銳的眼神與沉穩的雙手，這在現今的男人之中相當罕見。在女人之中更是少之又少。真是悲哀，不列顛尼亞的女性竟然對這種技藝一無所知！」");
	say();
	var0002 = true;
	var0003 = true;
labelFunc08F3_00C3:
	if (!var0002) goto labelFunc08F3_012F;
	var0002 = false;
	var0005 = false;
	enum();
labelFunc08F3_00D2:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc08F3_00F8;
	if (!(UI_get_npc_prop(var0008, 0x000A) == 0x0001)) goto labelFunc08F3_00F5;
	var0005 = true;
	goto labelFunc08F3_0156;
labelFunc08F3_00F5:
	goto labelFunc08F3_00D2;
labelFunc08F3_00F8:
	if (!var0005) goto labelFunc08F3_012F;
	UI_show_npc_face(var0008, 0x0000);
	message("「說話注意點，嚮導大師。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「我不是指在座的諸位優秀同伴！妳無疑是不列顛尼亞的菁英，更是世間罕見的奇女子。」");
	say();
	UI_show_npc_face(var0008, 0x0000);
	message("「算你會說話。唉！學習武藝的女性實在太少了。」");
	say();
	UI_remove_npc_face(var0008);
labelFunc08F3_012F:
	if (!var0003) goto labelFunc08F3_0138;
	goto labelFunc08F3_0157;
labelFunc08F3_0138:
	case "告辭" attend labelFunc08F3_0153:
	if (!(!var0001)) goto labelFunc08F3_014E;
	message("「請告訴我吧，聖者，我真的很想知道。」");
	say();
	goto labelFunc08F3_014F;
labelFunc08F3_014E:
	abort;
labelFunc08F3_014F:
	var0001 = true;
labelFunc08F3_0153:
	goto labelFunc08F3_0024;
labelFunc08F3_0156:
	endconv;
labelFunc08F3_0157:
	UI_pop_answers();
	return;
}
