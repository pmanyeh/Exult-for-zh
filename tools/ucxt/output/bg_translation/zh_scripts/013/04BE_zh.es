#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0853 0x853 ();
extern void Func092F 0x92F (var var0000);

void Func04BE object#(0x4BE) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04BE_01DC;
	UI_show_npc_face(0xFF42, 0x0000);
	var0000 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x024F])) goto labelFunc04BE_0038;
	message("這隻石像鬼張開手做了一個揮舞的動作來歡迎你。");
	say();
	gflags[0x024F] = true;
	goto labelFunc04BE_003C;
labelFunc04BE_0038:
	message("「再次歡迎你，人類，」 Betra 說。");
	say();
labelFunc04BE_003C:
	if (!gflags[0x0251]) goto labelFunc04BE_004F;
	if (!gflags[0x023E]) goto labelFunc04BE_004F;
	UI_add_answer("Quaeven");
labelFunc04BE_004F:
	converse attend labelFunc04BE_01D7;
	case "姓名" attend labelFunc04BE_009F:
	message("「名字是 Betra。你是 Terfin 的新面孔嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04BE_0071;
	message("「告訴你去跟賢者 Teregus 或酒館老闆 Forbrak 談談，獲取關於城鎮的資訊。協助了解建築位置和居民。」");
	say();
	goto labelFunc04BE_0075;
labelFunc04BE_0071:
	message("「歡迎回到 Terfin。」");
	say();
labelFunc04BE_0075:
	UI_remove_answer("姓名");
	UI_add_answer(["Terfin", "Betra"]);
	gflags[0x0251] = true;
	if (!(gflags[0x023E] && (!var0000))) goto labelFunc04BE_009F;
	UI_add_answer("Quaeven");
labelFunc04BE_009F:
	case "Betra" attend labelFunc04BE_00B2:
	message("「是『小小的勇氣』這個詞。」");
	say();
	UI_remove_answer("Betra");
labelFunc04BE_00B2:
	case "職業" attend labelFunc04BE_00C5:
	message("「是物資的銷售者。」");
	say();
	UI_add_answer("購買");
labelFunc04BE_00C5:
	case "Terfin" attend labelFunc04BE_00E5:
	message("「是為我們這些希望居住在自己文化中的石像鬼所保留的城鎮。」");
	say();
	UI_remove_answer("Terfin");
	UI_add_answer(["被人類安置", "文化"]);
labelFunc04BE_00E5:
	case "文化" attend labelFunc04BE_00F8:
	message("「有許多我們種族獨特的事物——除了我們的外表——使我們與人類區別開來。有所不同，但也平等。」");
	say();
	UI_remove_answer("文化");
labelFunc04BE_00F8:
	case "被人類安置" attend labelFunc04BE_0112:
	message("「被人類安置在這裡。被允許離開，也可以居住在其他地方，但知道許多人類不喜歡我們。」");
	say();
	UI_remove_answer("被人類安置");
	UI_add_answer("不喜歡");
labelFunc04BE_0112:
	case "不喜歡" attend labelFunc04BE_0125:
	message("「這非常諷刺。唯一一個人類和石像鬼數量相等的城鎮，卻是發生最多種族衝突的地方。」~~他聳了聳肩。「或許把這麼多差異放在一起是不明智的。真是悲哀的時代。」");
	say();
	UI_remove_answer("不喜歡");
labelFunc04BE_0125:
	case "購買" attend labelFunc04BE_014F:
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF42));
	if (!(var0002 == 0x0007)) goto labelFunc04BE_014B;
	Func0853();
	goto labelFunc04BE_014F;
labelFunc04BE_014B:
	message("「在早上 9 點到晚上 6 點之間賣東西給你。很抱歉，在這些時間之外什麼都不賣。」");
	say();
labelFunc04BE_014F:
	case "Quaeven" attend labelFunc04BE_016D:
	message("提到這個名字他笑了。~~「是個討人喜歡的年輕石像鬼。」");
	say();
	var0000 = true;
	UI_add_answer("加入友誼會？");
	UI_remove_answer("Quaeven");
labelFunc04BE_016D:
	case "加入友誼會？" attend labelFunc04BE_0190:
	message("「加入友誼會？」他搖搖頭。「這不是適合我的組織。我現在這樣很快樂，奉獻於祭壇。相信 Quaeven 是被友誼會的其他人誤導了。不信任他們，尤其是 Sarpling 。」");
	say();
	UI_add_answer(["被誤導", "Sarpling", "祭壇"]);
	UI_remove_answer("加入友誼會？");
labelFunc04BE_0190:
	case "被誤導" attend labelFunc04BE_01A3:
	message("「相信友誼會有欺騙行為，並預期事情並非表面看起來那樣。相信 Quaeven 剛加入時所做出的幸福承諾，是 Quaeven 自己實現的，而不是友誼會。」");
	say();
	UI_remove_answer("被誤導");
labelFunc04BE_01A3:
	case "Sarpling" attend labelFunc04BE_01B6:
	message("「對他的信任度極低，而且我絕對會盡可能地遠離他。」");
	say();
	UI_remove_answer("Sarpling");
labelFunc04BE_01B6:
	case "祭壇" attend labelFunc04BE_01C9:
	message("「聽說過破壞祭壇的謠言。感到沮喪，但沒有證據。~~知道只有兩隻石像鬼能輕易取得這種武器。我是其中之一，而且知道 Sarpling 是另一個。」");
	say();
	UI_remove_answer("祭壇");
labelFunc04BE_01C9:
	case "告辭" attend labelFunc04BE_01D4:
	goto labelFunc04BE_01D7;
labelFunc04BE_01D4:
	goto labelFunc04BE_004F;
labelFunc04BE_01D7:
	endconv;
	message("「祝你旅途平安，人類。」*");
	say();
labelFunc04BE_01DC:
	if (!(event == 0x0000)) goto labelFunc04BE_01EA;
	Func092F(0xFF42);
labelFunc04BE_01EA:
	return;
}


