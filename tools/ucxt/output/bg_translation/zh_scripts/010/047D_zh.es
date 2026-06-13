#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047D object#(0x47D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc047D_0246;
	UI_show_npc_face(0xFF83, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF83);
	var0003 = UI_get_npc_object(0xFF81);
	var0004 = UI_get_npc_object(0xFF82);
	var0005 = Func08F7(0xFF82);
	var0006 = Func08F7(0xFF81);
	if (!(!gflags[0x0177])) goto labelFunc047D_0067;
	message("你看到一名戰士。當他向你打招呼時，他的聲音如雷鳴般宏亮。「向你致敬，");
	message(var0000);
	message("！」");
	say();
	gflags[0x0177] = true;
	goto labelFunc047D_006B;
labelFunc047D_0067:
	message("「那麼，我再次為你效勞，」Vokes 大聲說道。");
	say();
labelFunc047D_006B:
	if (!gflags[0x0168]) goto labelFunc047D_0080;
	if (!(!gflags[0x0164])) goto labelFunc047D_007D;
	message("「如果你想歸還傷痕圖書館的榮譽旗幟，那麼理應把它還給它被偷時正在守衛的 Syria。請這麼做。」*");
	say();
	abort;
labelFunc047D_007D:
	goto labelFunc047D_00E1;
labelFunc047D_0080:
	if (!gflags[0x0170]) goto labelFunc047D_00E1;
	if (!(var0001 == 0x0004)) goto labelFunc047D_00DA;
	message("「所以，你想為懦弱的 Sprellic 而戰！那我就別無選擇，只能親手解決你了！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	abort;
	goto labelFunc047D_00E1;
labelFunc047D_00DA:
	message("「所以，你想為懦弱的 Sprellic 而戰！明天中午在決鬥區見！」");
	say();
	goto labelFunc047D_00E1;
labelFunc047D_00E1:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc047D_00F1:
	converse attend labelFunc047D_0241;
	case "姓名" attend labelFunc047D_010D:
	message("「我的名字是 Vokes，");
	message(var0000);
	message("。像山一樣巨大，像牛一樣強壯，像……嗯，比你交手過的任何東西都還要兇猛！」");
	say();
	UI_remove_answer("姓名");
labelFunc047D_010D:
	case "職業" attend labelFunc047D_0126:
	message("「職業！我可沒有犁田或賣菜的習慣，");
	message(var0000);
	message("！我用這條揮劍的手臂賺取金幣，」他一邊說著，一邊展示強壯的二頭肌。「現在我正在 Jhelom 跟隨 De Snel 繼續精進我的技藝，等我學成後，我的身價就會上漲！」");
	say();
	UI_add_answer("Jhelom");
labelFunc047D_0126:
	case "Jhelom" attend labelFunc047D_0140:
	message("「我是在這裡出生的！這不是很壯觀嗎？！在這裡，一天中的任何時間，你都可以毫無理由地跟任何人決鬥！這才叫文明的好處！」");
	say();
	UI_add_answer("決鬥");
	UI_remove_answer("Jhelom");
labelFunc047D_0140:
	case "決鬥" attend labelFunc047D_017F:
	message("「一種責任，是的，甚至是一種必然。擁有榮譽的代價，就是必須捍衛自己的榮譽。誰也說不準下一個榮譽上的污點何時何地會出現。比如說這個叫 Sprellic 的傻瓜。就是個完美的例子！」*");
	say();
	if (!var0005) goto labelFunc047D_0171;
	UI_show_npc_face(0xFF82, 0x0000);
	message("「我肯定會在他的榮譽上留下一個污點。一個血紅色的污點！」*");
	say();
	UI_remove_npc_face(0xFF82);
	UI_show_npc_face(0xFF83, 0x0000);
labelFunc047D_0171:
	UI_add_answer("Sprellic");
	UI_remove_answer("決鬥");
labelFunc047D_017F:
	case "Sprellic" attend labelFunc047D_01D9:
	if (!(!gflags[0x0164])) goto labelFunc047D_01CE;
	message("「這個該死的白痴根本不知道他拿走我們的榮譽旗幟時會被看見。因此，他從未想過他必須為我們被玷污的榮譽進行一場決鬥。但現在全鎮都在談論這件事，我們不可能不挺身而出。特別是既然他拒絕歸還從我們這裡拿走的東西。」*");
	say();
	if (!var0006) goto labelFunc047D_01B7;
	UI_show_npc_face(0xFF81, 0x0000);
	message("「要不是他是個無賴，他就會看出自己行為的愚蠢。現在該輪到我們給他點顏色看看了！」*");
	say();
	UI_remove_npc_face(0xFF81);
	UI_show_npc_face(0xFF83, 0x0000);
labelFunc047D_01B7:
	UI_add_answer("榮譽旗幟");
	if (!gflags[0x0186]) goto labelFunc047D_01CB;
	UI_add_answer("誤會");
labelFunc047D_01CB:
	goto labelFunc047D_01D2;
labelFunc047D_01CE:
	message("「如果他沒有把榮譽旗幟還給我們，我們一定會像我站在這裡一樣確定地殺了他。」");
	say();
labelFunc047D_01D2:
	UI_remove_answer("Sprellic");
labelFunc047D_01D9:
	case "榮譽旗幟" attend labelFunc047D_01F3:
	message("「關於傷痕圖書館的榮譽旗幟，有一個廣為人知且由來已久的傳統。據說從牆上拿下旗幟是一個信號，意味著拿下旗幟的人可以在戰鬥中擊敗任何在該學校學習的人。這也是一種極具侮辱性的方式，表示你認為該學校教授的戰鬥方法很低劣，而傷痕圖書館絕對不是這樣的！」");
	say();
	UI_add_answer("傷痕圖書館");
	UI_remove_answer("榮譽旗幟");
labelFunc047D_01F3:
	case "誤會" attend labelFunc047D_0206:
	message("「我聽過那種說這一切都是誤會的廢話。唯一會被誤會的，就是當我們解決 Sprellic 時，他會有多難看！」");
	say();
	UI_remove_answer("誤會");
labelFunc047D_0206:
	case "傷痕圖書館" attend labelFunc047D_0220:
	message("「傷痕圖書館教授的是最頂尖的戰鬥風格！透過 De Snel 大師構思精妙的戰術，這種風格能讓你對抗對手時取得優勢，並將他們徹底擊敗！」");
	say();
	UI_add_answer("De Snel");
	UI_remove_answer("傷痕圖書館");
labelFunc047D_0220:
	case "De Snel" attend labelFunc047D_0233:
	message("「他是個天才。也許是有史以來最偉大的軍事家。他是這麼告訴我們的！」");
	say();
	UI_remove_answer("De Snel");
labelFunc047D_0233:
	case "告辭" attend labelFunc047D_023E:
	goto labelFunc047D_0241;
labelFunc047D_023E:
	goto labelFunc047D_00F1;
labelFunc047D_0241:
	endconv;
	message("「如果我沒被殺，你沒被殺，也許有一天我們可以一起喝一杯！」*");
	say();
labelFunc047D_0246:
	if (!(event == 0x0000)) goto labelFunc047D_0254;
	Func092E(0xFF83);
labelFunc047D_0254:
	return;
}


