#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func044D object#(0x44D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc044D_0275;
	UI_show_npc_face(0xFFB3, 0x0000);
	var0000 = UI_is_pc_female();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00E0]) goto labelFunc044D_0036;
	UI_add_answer("Nastassia");
labelFunc044D_0036:
	if (!gflags[0x006A]) goto labelFunc044D_0049;
	UI_add_answer(["法案", "Lock Lake"]);
labelFunc044D_0049:
	if (!(!gflags[0x00EA])) goto labelFunc044D_005F;
	message("這位充滿王者風範的紳士完美詮釋了一位受歡迎的政治家。");
	say();
	message("「你好！Lord British 傳話說你也許會來拜訪我們。歡迎來到 Cove，聖者！」");
	say();
	gflags[0x00EA] = true;
	goto labelFunc044D_0063;
labelFunc044D_005F:
	message("「再次問候，聖者！」Lord Heather 宣告著。");
	say();
labelFunc044D_0063:
	converse attend labelFunc044D_0270;
	case "姓名" attend labelFunc044D_0079:
	message("「我是 Lord Heather。我認得你，聖者！」");
	say();
	UI_remove_answer("姓名");
labelFunc044D_0079:
	case "職業" attend labelFunc044D_0092:
	message("「我是 Cove 的鎮長，慈悲神殿的所在地。」");
	say();
	UI_add_answer(["Cove", "神殿"]);
labelFunc044D_0092:
	case "Cove" attend labelFunc044D_00A5:
	message("「我知道這是個小地方。我們許多居民都搬到較大的城鎮去了，尤其是 Britain。但我們保留了一小群忠誠的 Cove 鎮民。」");
	say();
	UI_remove_answer("Cove");
labelFunc044D_00A5:
	case "神殿" attend labelFunc044D_00BF:
	message("「我們為我們的神殿感到驕傲。我們的一位居民把它照顧得很好。如果你還沒去過，一定要去看看神殿。它是鎮上所有戀人的紀念碑。」");
	say();
	UI_add_answer("lovers");
	UI_remove_answer("神殿");
labelFunc044D_00BF:
	case "lovers" attend labelFunc044D_00DF:
	message("「Britain 也許是慈悲之城，但 Cove 已經成為熱情之城。這裡的每個人似乎都很容易墜入愛河。你會發現每個人都愛著某個人。幾乎每個人都是如此。」");
	say();
	UI_remove_answer("lovers");
	UI_add_answer(["每個人", "幾乎每個人"]);
labelFunc044D_00DF:
	case "每個人" attend labelFunc044D_01AE:
	message("「嗯，讓我想想……我愛上了我們的治療師 Jaana。當然，她也愛我。然後是經營翡翠酒館的 Zinaida。她對我們當地的吟遊詩人 De Maria 有好感。反之亦然。我們的訓練師 Rayburt 正在追求旅店老闆 Pamela。」");
	say();
	var0001 = Func08F7(0xFFFF);
	if (!var0001) goto labelFunc044D_0119;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「這聽起來就像一齣糟糕的戲劇！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_0119:
	var0002 = Func08F7(0xFFFE);
	if (!var0002) goto labelFunc044D_0147;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「這附近有跟我同年紀的女孩嗎？」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_0147:
	gflags[0x00E4] = true;
	UI_remove_answer("每個人");
	var0003 = Func08F7(0xFFFB);
	if (!var0003) goto labelFunc044D_01AE;
	message("「親愛的，我看你要暫時離開 Cove 了？」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「是的，大人。但我會回來的。我向你保證。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我會盡量不為你擔心，但這很難。」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「別擔心。我和聖者在一起會很安全的。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我希望如此。」鎮長擁抱了 Jaana。*");
	say();
	UI_remove_npc_face(0xFFFB);
	UI_show_npc_face(0xFFB3, 0x0000);
labelFunc044D_01AE:
	case "幾乎每個人" attend labelFunc044D_01C8:
	message("「除了 Nastassia。」");
	say();
	UI_remove_answer("幾乎每個人");
	UI_add_answer("Nastassia");
labelFunc044D_01C8:
	case "Nastassia" attend labelFunc044D_0208:
	if (!(!gflags[0x00E0])) goto labelFunc044D_01E2;
	message("「她是一位可愛的年輕女子，但總是憂鬱。De Maria 可以告訴你更多關於她的事。我建議你去翡翠酒館找他。那是一個悲傷但引人入勝的故事。」");
	say();
	gflags[0x00E3] = true;
	goto labelFunc044D_0201;
labelFunc044D_01E2:
	if (!var0000) goto labelFunc044D_01F1;
	var0004 = "someone";
	goto labelFunc044D_01F7;
labelFunc044D_01F1:
	var0004 = "a man like thee";
labelFunc044D_01F7:
	message("「我真的希望你能幫她。她需要」");
	message(var0004);
	message("「將她從憂鬱中帶出來。」");
	say();
labelFunc044D_0201:
	UI_remove_answer("Nastassia");
labelFunc044D_0208:
	case "法案" attend labelFunc044D_024F:
	if (!(!gflags[0x00DE])) goto labelFunc044D_0244;
	var0005 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99);
	if (!var0005) goto labelFunc044D_023D;
	message("「政府早該對那座湖傳出的惡臭採取行動了！我很樂意簽署你的法案！快把它帶回大議會！」Lord Heather 簽署了法案並交還給你。");
	say();
	gflags[0x00DE] = true;
	goto labelFunc044D_0241;
labelFunc044D_023D:
	message("「但你沒有法案！」");
	say();
labelFunc044D_0241:
	goto labelFunc044D_0248;
labelFunc044D_0244:
	message("「我以為我已經簽過那法案了！」");
	say();
labelFunc044D_0248:
	UI_remove_answer("法案");
labelFunc044D_024F:
	case "Lock Lake" attend labelFunc044D_0262:
	message("「它變得如此腐臭，在炎熱的夏日裡，臭味令人窒息。我相信 Minoc 的不列顛尼亞礦業公司是問題的根源。採礦廢料被倒進了湖裡。你應該慶幸現在快冬天了！」");
	say();
	UI_remove_answer("Lock Lake");
labelFunc044D_0262:
	case "告辭" attend labelFunc044D_026D:
	goto labelFunc044D_0270;
labelFunc044D_026D:
	goto labelFunc044D_0063;
labelFunc044D_0270:
	endconv;
	message("「歡迎再次來訪，聖者！」*");
	say();
labelFunc044D_0275:
	if (!(event == 0x0000)) goto labelFunc044D_0283;
	Func092E(0xFFB3);
labelFunc044D_0283:
	return;
}


