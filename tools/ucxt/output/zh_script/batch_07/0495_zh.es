#game "blackgate"
void Func0495 object#(0x495) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0000)) goto labelFunc0495_0009;
	abort;
labelFunc0495_0009:
	UI_show_npc_face(0xFEE8, 0x0000);
	var0000 = 0x0000;
	var0001 = UI_get_party_list();
	var0002 = 0x0000;
	enum();
labelFunc0495_0027:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0495_003F;
	var0002 = (var0002 + 0x0001);
	goto labelFunc0495_0027;
labelFunc0495_003F:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02C7])) goto labelFunc0495_00B8;
	message("你看到一隻三頭水怪 (hydra) 。左邊的頭說話了。~~「醒醒，這裡有東西。」");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("右邊的頭抬起頭看著你。~~「不知道好不好吃。」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("中間的頭驚醒，看到你，變得警惕，並開始興奮地噴氣。*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「別怕，兄弟；我們知道它在那裡。」*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「不知道它會不會說話？」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	gflags[0x02C7] = true;
	goto labelFunc0495_00D9;
labelFunc0495_00B8:
	message("「我們沒有在跟你說話！我們是想吃掉你！」*");
	say();
	UI_set_alignment(UI_get_npc_object(0xFF6B), 0x0002);
	UI_set_schedule_type(UI_get_npc_object(0xFF6B), 0x0000);
	abort;
labelFunc0495_00D9:
	converse attend labelFunc0495_0470;
	case "姓名" attend labelFunc0495_0133:
	message("「我的名字是 Shandu 。我旁邊的兄弟是 Shanda 。他旁邊的兄弟是 Shando 。」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我們的名字是什麼並不重要！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 搖搖頭，怒視著你。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("姓名");
	UI_add_answer(["Shandu", "Shanda", "Shando"]);
labelFunc0495_0133:
	case "Shandu" attend labelFunc0495_0146:
	message("「那就是我。」~~Shandu 微笑著舔了舔嘴唇。~~「我喜歡我的食物叫我的名字！」");
	say();
	UI_remove_answer("Shandu");
labelFunc0495_0146:
	case "Shanda" attend labelFunc0495_0189:
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 翻了翻白眼，從鼻孔噴出一縷煙。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「Shanda 說你應該避免叫他的名字。他不喜歡他的食物叫他的名字。」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Shanda");
labelFunc0495_0189:
	case "Shando" attend labelFunc0495_01E1:
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「那就是我。我是最年長的兄弟。」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「我們都是連在一起的， Shando ！你不可能比較老！」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我的頭是第一個呼吸到空氣的。」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("Shandu 吐了口口水。~~「那有什麼關係？我們的食物才不在乎我們之中誰最年長！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Shando");
labelFunc0495_01E1:
	case "職業" attend labelFunc0495_0252:
	message("「職業？」");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 張大嘴巴，噴出一陣火焰。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「他認為這是個笑話。職業！哈！我也覺得這很有趣。我從來沒聽過我的食物講笑話。」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「啊，但是兄弟們，我們『確實』有份工作。」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我們有嗎？」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「我們不是守護著凱德石 (Caddellite) 嗎？我們人生的目標就是守護凱德石！」");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_add_answer("凱德石 (Caddellite)");
labelFunc0495_0252:
	case "凱德石 (Caddellite)" attend labelFunc0495_02AC:
	if (!(var0000 == 0x0000)) goto labelFunc0495_029A;
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 變得興奮並噴著氣，彷彿說了好幾句話。");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("凱德石 (Caddellite)");
	UI_add_answer("他說了什麼？");
	var0000 = 0x0001;
	goto labelFunc0495_02AC;
labelFunc0495_029A:
	message("「你想知道關於凱德石的事？很好，我會告訴你關於凱德石的事。」~~水怪稍微轉移了重心，然後邪惡地笑著。~~「我們正在看守它。」");
	say();
	UI_remove_answer("凱德石 (Caddellite)");
	UI_add_answer("看守");
labelFunc0495_02AC:
	case "他說了什麼？" attend labelFunc0495_02C6:
	message("「他沒有在跟你說話！」");
	say();
	UI_remove_answer("他說了什麼？");
	UI_add_answer("凱德石 (Caddellite)");
labelFunc0495_02C6:
	case "看守" attend labelFunc0495_033D:
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「這個生物似乎在回音我們說的每一句話， Shandu 。」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 發出可怕的咆哮聲。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「Shanda 說他餓了！」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我也是！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「既然你提到了，我自己也感到一陣飢餓。如果我們不需要保護凱德石，我會一口吞下這個生物！」");
	say();
	UI_remove_answer("看守");
	UI_add_answer(["回音", "保護"]);
labelFunc0495_033D:
	case "回音" attend labelFunc0495_0388:
	message("「聽到這個生物重複我們說的話讓我感到飢餓！」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「這讓我覺得很有趣！顯然這是一個智力極度有限的生物！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 發出低沉的咆哮。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「Shanda 說他想吃點東西！」");
	say();
	UI_remove_answer("回音");
labelFunc0495_0388:
	case "保護" attend labelFunc0495_03D6:
	message("「我想我們必須保護凱德石，以免像你這樣大約每 1000 年才出現一次並想拿走它的生物靠近。」*");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 發出比以前更大的低吼聲，然後噴出一點火焰。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「生物！你讓 Shanda 生氣了！他認為你企圖偷走凱德石！當心點！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("保護");
	UI_add_answer("偷");
labelFunc0495_03D6:
	case "偷" attend labelFunc0495_045A:
	message("Shandu 變得暴怒。~~「我就知道！它想偷走我們的凱德石！」~~Shandu 對他的兄弟們說。~~「我們不能再拖延了。」*");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 憤怒地咆哮！*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「真是個好主意，我的兄弟！」~~Shandu 轉向你。~~「這個生物長得有點像巨魔 (troll) ，只是聞起來稍微好一點。你覺得它會不會比巨魔更好吃， Shando ？」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「試了才知道！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 猛烈地點頭，舔著嘴唇。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「很好！我們把它吃了吧！」*");
	say();
	UI_set_alignment(UI_get_npc_object(0xFF6B), 0x0002);
	UI_set_schedule_type(UI_get_npc_object(0xFF6B), 0x0000);
	abort;
labelFunc0495_045A:
	case "告辭" attend labelFunc0495_046D:
	message("「你不能對我們說『告辭』！真沒禮貌！」");
	say();
	UI_remove_answer("告辭");
labelFunc0495_046D:
	goto labelFunc0495_00D9;
labelFunc0495_0470:
	endconv;
	message("「這麼快就走了？」*");
	say();
	return;
}


