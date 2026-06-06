#game "blackgate"
// externs
extern void Func092E 0x92E (var var0000);

void Func041C object#(0x41C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc041C_0159;
	var0000 = UI_is_pc_female();
	if (!var0000) goto labelFunc041C_0022;
	UI_show_npc_face(0xFFE4, 0x0001);
	goto labelFunc041C_002C;
labelFunc041C_0022:
	UI_show_npc_face(0xFFE4, 0x0000);
labelFunc041C_002C:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x009D])) goto labelFunc041C_0058;
	message("這是一位高瘦、膝蓋骨節突出的男演員。");
	say();
	if (!var0000) goto labelFunc041C_0051;
	message("他戴著女用假髮，穿著女裝。");
	say();
labelFunc041C_0051:
	gflags[0x009D] = true;
	goto labelFunc041C_0077;
labelFunc041C_0058:
	if (!var0000) goto labelFunc041C_0067;
	var0001 = " 他用假音說。";
	goto labelFunc041C_006D;
labelFunc041C_0067:
	var0001 = "";
labelFunc041C_006D:
	message("Jesse 清了清喉嚨。「哈囉，又見面了！」");
	message(var0001);
	message("");
	say();
labelFunc041C_0077:
	converse attend labelFunc041C_0154;
	case "姓名" attend labelFunc041C_00A1:
	if (!var0000) goto labelFunc041C_008C;
	message("男演員用假音說話。");
	say();
labelFunc041C_008C:
	message("「我是 Jesse ，我是一顆~~閃亮~~的~~明星。」");
	say();
	UI_remove_answer("姓名");
	if (!var0000) goto labelFunc041C_00A1;
	message("他拍了拍自己的臉，用正常的聲音說：「哎呀，抱歉！我太入戲了，有時會忘記我不是女人！」");
	say();
labelFunc041C_00A1:
	case "職業" attend labelFunc041C_00BA:
	message("「我在皇家劇院當演員。我在我的職業生涯中扮演過 -所有- 偉大的角色。我現在有機會扮演一生難得的角色——聖者！」");
	say();
	UI_add_answer(["皇家劇院", "Avatar"]);
labelFunc041C_00BA:
	case "皇家劇院" attend labelFunc041C_00DA:
	message("「因為它必須迎合大眾，我們從來沒有機會做實驗性作品——只有傳統平庸的大雜燴。但這是一個很棒的空間，而且音響效果極佳。」");
	say();
	UI_add_answer(["大眾", "實驗性作品"]);
	UI_remove_answer("皇家劇院");
labelFunc041C_00DA:
	case "大眾" attend labelFunc041C_00ED:
	message("「人們喜歡看英雄冒險的故事，穿著盔甲的騎士、美麗的公主、明智的國王、巫師、邪惡的怪物。全是那一套。」");
	say();
	UI_remove_answer("大眾");
labelFunc041C_00ED:
	case "Avatar" attend labelFunc041C_010D:
	message("「這個角色極具挑戰性。我有過多的台詞，而且我必須和訓練員一起工作好幾週，為所需的大量活動做準備。這個角色會讓『Jesse』家喻戶曉！」");
	say();
	UI_add_answer(["具挑戰性", "台詞"]);
	UI_remove_answer("Avatar");
labelFunc041C_010D:
	case "具挑戰性" attend labelFunc041C_0120:
	message("「這絕對是史上構思過最具野心的戲劇製作。有超過一百個小時的演出時間。對觀眾來說那是一段很長的時間。」");
	say();
	UI_remove_answer("具挑戰性");
labelFunc041C_0120:
	case "台詞" attend labelFunc041C_0133:
	message("「我最重要的台詞是：~~『姓名！』~~『職業！』~~『告辭！』」");
	say();
	UI_remove_answer("台詞");
labelFunc041C_0133:
	case "實驗性作品" attend labelFunc041C_0146:
	message("「我最喜歡的作品是 Raymundo 為我寫的，名為『遮陰布上的三個（Three on a Codpiece）』。我站在舞台上，邀請觀眾加入我，把一件內衣撕成碎片，然後將它們放入骨灰罈中並與小麥糊混合。是布料的碎片，不是觀眾。然後觀眾可以把這些碎片黏在我身上他們想要的任何地方。」");
	say();
	UI_remove_answer("實驗性作品");
labelFunc041C_0146:
	case "告辭" attend labelFunc041C_0151:
	goto labelFunc041C_0154;
labelFunc041C_0151:
	goto labelFunc041C_0077;
labelFunc041C_0154:
	endconv;
	message("「再見。開演時一定要來看戲喔！」*");
	say();
labelFunc041C_0159:
	if (!(event == 0x0000)) goto labelFunc041C_01E0;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE4));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x001D)) goto labelFunc041C_01DA;
	if (!(var0004 == 0x0001)) goto labelFunc041C_019D;
	var0005 = "@姓名!@";
labelFunc041C_019D:
	if (!(var0004 == 0x0002)) goto labelFunc041C_01AD;
	var0005 = "@職業!@";
labelFunc041C_01AD:
	if (!(var0004 == 0x0003)) goto labelFunc041C_01BD;
	var0005 = "@是！呃，我的意思是...不！@";
labelFunc041C_01BD:
	if (!(var0004 == 0x0004)) goto labelFunc041C_01CD;
	var0005 = "@告辭！@";
labelFunc041C_01CD:
	UI_item_say(0xFFE4, var0005);
	goto labelFunc041C_01E0;
labelFunc041C_01DA:
	Func092E(0xFFE4);
labelFunc041C_01E0:
	return;
}


