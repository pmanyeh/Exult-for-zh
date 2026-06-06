#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04D6 object#(0x4D6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04D6_0151;
	UI_show_npc_face(0xFF2A, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0000 = Func08F7(0xFF2B);
	if (!var0000) goto labelFunc04D6_0038;
	UI_add_answer("女孩");
labelFunc04D6_0038:
	if (!(!gflags[0x0293])) goto labelFunc04D6_004A;
	message("你看到一隻非常巨大、強壯的無翼石像鬼。");
	say();
	gflags[0x0293] = true;
	goto labelFunc04D6_004E;
labelFunc04D6_004A:
	message("「祝你日安，人類，」 For-Lem 說。");
	say();
labelFunc04D6_004E:
	converse attend labelFunc04D6_014C;
	case "姓名" attend labelFunc04D6_006B:
	message("「回答叫 For-Lem 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("For-Lem");
labelFunc04D6_006B:
	case "For-Lem" attend labelFunc04D6_007E:
	message("「意思是『強壯之人 (strong one) 』。」");
	say();
	UI_remove_answer("For-Lem");
labelFunc04D6_007E:
	case "職業" attend labelFunc04D6_0097:
	message("「為別人做零工。也以書面形式記錄石像鬼的傳說。」");
	say();
	UI_add_answer(["其他", "傳說"]);
labelFunc04D6_0097:
	case "其他" attend labelFunc04D6_00B1:
	message("「與 Lap-Lem 是朋友，並知道他是個好礦工。也認識 Ansikart ，在這個動盪的時代提醒我們奇點 (Singularity) 的存在。」");
	say();
	UI_add_answer("動盪時代");
	UI_remove_answer("其他");
labelFunc04D6_00B1:
	case "動盪時代" attend labelFunc04D6_00C4:
	message("「對人類感到憤怒。受到惡劣和輕蔑的對待。但不知道為什麼，」他聳聳肩。");
	say();
	UI_remove_answer("動盪時代");
labelFunc04D6_00C4:
	case "傳說" attend labelFunc04D6_00E4:
	message("「有許多關於我們種族的有趣故事。正在把它們寫下來給後代子孫。」");
	say();
	UI_remove_answer("傳說");
	UI_add_answer(["故事", "後代"]);
labelFunc04D6_00E4:
	case "故事" attend labelFunc04D6_00F7:
	message("「有許多聖者 與我們種族相遇前激動人心的神話。與人類分享英雄的概念，但我們有著來自自己歷史的不同的英雄。」");
	say();
	UI_remove_answer("故事");
labelFunc04D6_00F7:
	case "後代" attend labelFunc04D6_010A:
	message("「為石像鬼青年的未來感到擔憂。告訴你他們對自己的傳統知之甚少。覺得教導他們以及他們後代的習俗與歷史是很重要的。」");
	say();
	UI_remove_answer("後代");
labelFunc04D6_010A:
	case "女孩" attend labelFunc04D6_013E:
	message("擔憂的神情迅速出現在他的臉上。~~「是談論人類女孩 Catherine 嗎？對她沒有惡意。」他伸出雙手。~~「只在白天為她讀石像鬼神話。是她要求的！」他的眼睛睜大了。~~「要求你不要告訴她的父母，因為他們會懲罰她。」他看起來充滿希望。「不說出去，同意嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D6_0129;
	message("「做出了正確的決定。」他看起來鬆了一口氣。「感謝你，人類。」他笑了。");
	say();
	goto labelFunc04D6_012D;
labelFunc04D6_0129:
	message("「犯了一個錯誤。」他顯得很失望。「讓那女孩因為我而受罰。」他搖搖頭。~~「感到有責任。非常難過。」");
	say();
labelFunc04D6_012D:
	Func0911(0x0032);
	gflags[0x027D] = true;
	UI_remove_answer("女孩");
labelFunc04D6_013E:
	case "告辭" attend labelFunc04D6_0149:
	goto labelFunc04D6_014C;
labelFunc04D6_0149:
	goto labelFunc04D6_004E;
labelFunc04D6_014C:
	endconv;
	message("「對你說再見，人類。」*");
	say();
labelFunc04D6_0151:
	if (!(event == 0x0000)) goto labelFunc04D6_015F;
	Func092F(0xFF2A);
labelFunc04D6_015F:
	return;
}


