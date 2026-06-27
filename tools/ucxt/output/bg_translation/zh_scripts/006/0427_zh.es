#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0427 object#(0x427) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0427_0101;
	UI_show_npc_face(0xFFD9, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0427_003F;
	var0001 = Func08F7(0xFFCA);
	if (!var0001) goto labelFunc0427_003A;
	message("Neno 正忙著和『聖者旅團』一起表演，現在無法說話。*");
	say();
	abort;
	goto labelFunc0427_003F;
labelFunc0427_003A:
	message("「我必須趕去藍野豬酒館 (Blue Boar) 表演！『聖者旅團』今晚要演出！」*");
	say();
	abort;
labelFunc0427_003F:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A8])) goto labelFunc0427_0061;
	message("你看見一位英俊且打扮浮誇的音樂家。");
	say();
	gflags[0x00A8] = true;
	goto labelFunc0427_0065;
labelFunc0427_0061:
	message("「你好，」 Neno 說。");
	say();
labelFunc0427_0065:
	converse attend labelFunc0427_00FC;
	case "姓名" attend labelFunc0427_007B:
	message("音樂家向你點點頭。「我是 Neno 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0427_007B:
	case "職業" attend labelFunc0427_0094:
	message("「我正在學習成為不列顛尼亞有史以來最偉大的吟遊詩人。我可能 -已經- 是不列顛尼亞有史以來最偉大的吟遊詩人了。」你注意到 Neno 一點也不謙虛。");
	say();
	UI_add_answer(["吟遊詩人", "學習"]);
labelFunc0427_0094:
	case "吟遊詩人" attend labelFunc0427_00AE:
	message("「成為一名吟遊詩人是莫大的榮譽。你帶給其他人快樂，同時也滿足了自己內心的創作慾望。這真的很神奇。我是從我在『聖者旅團』演奏的經驗中知道這點的。」");
	say();
	UI_remove_answer("吟遊詩人");
	UI_add_answer("聖者旅團");
labelFunc0427_00AE:
	case "學習" attend labelFunc0427_00C8:
	message("「音樂廳提供了極佳的學習環境。 Judith 是位很棒的老師，而且這裡的機會都是最高品質的。總有一天我會環遊世界，娛樂平民和貴族。」");
	say();
	UI_remove_answer("學習");
	UI_add_answer("娛樂");
labelFunc0427_00C8:
	case "娛樂" attend labelFunc0427_00DB:
	message("「我的夢想是名揚四海。我會每年在全國巡迴演出，並在每個城鎮最大的酒館表演。」他向你眨眼。「我一定能迷倒女人們，你不覺得嗎？」");
	say();
	UI_remove_answer("娛樂");
labelFunc0427_00DB:
	case "聖者旅團" attend labelFunc0427_00EE:
	message("「這是一個我參與演出的合唱團。我們每晚在藍野豬酒館表演。請來聽我們演出。」 Neno 湊近耳語，「但我打算很快就開始獨唱。我顯然是這四重唱裡最有才華的成員。」");
	say();
	UI_remove_answer("聖者旅團");
labelFunc0427_00EE:
	case "告辭" attend labelFunc0427_00F9:
	goto labelFunc0427_00FC;
labelFunc0427_00F9:
	goto labelFunc0427_0065;
labelFunc0427_00FC:
	endconv;
	message("「再會！你一定要留意我們演出日期的公告喔！」*");
	say();
labelFunc0427_0101:
	if (!(event == 0x0000)) goto labelFunc0427_010F;
	Func092E(0xFFD9);
labelFunc0427_010F:
	return;
}


