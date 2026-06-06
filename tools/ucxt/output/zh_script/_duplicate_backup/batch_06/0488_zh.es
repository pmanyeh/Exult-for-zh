#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0488 object#(0x488) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0488_0329;
	UI_show_npc_face(0xFF78, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF79);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x017D]) goto labelFunc0488_004E;
	UI_add_answer("吊飾盒");
labelFunc0488_004E:
	if (!(!gflags[0x0191])) goto labelFunc0488_006D;
	message("你看到一個年輕人把匕首平衡在指尖上。他努力想忽略你。");
	say();
	gflags[0x0191] = true;
	if (!gflags[0x0180]) goto labelFunc0488_006A;
	UI_add_answer("陌生人");
labelFunc0488_006A:
	goto labelFunc0488_0071;
labelFunc0488_006D:
	message("Leavell 把匕首平衡在指尖上。在一個模糊的動作中，他從空中抓下匕首，指向你。他盯著你的眼睛。");
	say();
labelFunc0488_0071:
	converse attend labelFunc0488_0324;
	case "姓名" attend labelFunc0488_0087:
	message("「我是 Leavell 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0488_0087:
	case "職業" attend labelFunc0488_00A6:
	message("「和 Battles 一起，我是 Robin 少爺的保鑣。如果不是他，我早就被關進監獄，而不是來到 New Magincia 了。」");
	say();
	UI_add_answer(["Battles", "Robin", "監獄", "New Magincia"]);
labelFunc0488_00A6:
	case "陌生人" attend labelFunc0488_00B9:
	message("「我不知道你在說什麼。」");
	say();
	UI_remove_answer("陌生人");
labelFunc0488_00B9:
	case "Battles" attend labelFunc0488_0101:
	message("「他的眼睛像老鷹一樣銳利，動作比貓還快。你最好放尊重點。」");
	say();
	if (!var0003) goto labelFunc0488_00EA;
	UI_show_npc_face(0xFF79, 0x0000);
	message("「哈！哈！你說得太對了， Leavell ！」");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_00EA:
	UI_remove_answer("Battles");
	UI_add_answer(["眼睛", "敏捷", "尊重"]);
labelFunc0488_0101:
	case "眼睛" attend labelFunc0488_011B:
	message("「如果 Battles 沒有發現那場逼近的風暴，我們肯定都死定了！」");
	say();
	UI_remove_answer("眼睛");
	UI_add_answer("風暴");
labelFunc0488_011B:
	case "風暴" attend labelFunc0488_012E:
	message("「這對我們的船造成了嚴重的破壞，但老實說，我見過更糟的。」");
	say();
	UI_remove_answer("風暴");
labelFunc0488_012E:
	case "敏捷" attend labelFunc0488_0141:
	message("「我見識過 Battles 有著比蛇還快的反射神經。」");
	say();
	UI_remove_answer("敏捷");
labelFunc0488_0141:
	case "監獄" attend labelFunc0488_0154:
	message("「沒錯，我做過會被關進監獄的事。但我並不為我的生活感到羞恥。我也不需要對你交代。」");
	say();
	UI_remove_answer("監獄");
labelFunc0488_0154:
	case "尊重" attend labelFunc0488_0167:
	message("「既然說到這個，你也可以對我放尊重點。」Leavell 冷笑著說。");
	say();
	UI_remove_answer("尊重");
labelFunc0488_0167:
	case "Robin" attend labelFunc0488_01AC:
	message("「他是一名職業賭徒，在 Buccaneer's Den 的遊戲之屋賭桌上贏錢。」");
	say();
	if (!var0002) goto labelFunc0488_0198;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「我們很快就會回去，金錢又會像甜酒一樣湧入，對吧， Leavell ？」");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_0198:
	UI_add_answer(["職業賭徒", "Buccaneer's Den"]);
	UI_remove_answer("Robin");
labelFunc0488_01AC:
	case "職業賭徒" attend labelFunc0488_01E8:
	message("「賭博是 Robin 賺錢的方式。但他成天跟別人談論 Lord British，你都會以為他是什麼皇室成員之類的！」");
	say();
	if (!var0002) goto labelFunc0488_01E1;
	message("Leavell 臉上突然露出尷尬的表情，停止了說話。*");
	say();
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「夠了， Leavell ！」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_01E1:
	UI_remove_answer("職業賭徒");
labelFunc0488_01E8:
	case "Buccaneer's Den" attend labelFunc0488_0208:
	message("「我們上次在那裡遇到了一些不幸。遊戲之屋的『老大 (The Mister)』得知了 Robin 少爺的系統，讓他損失了大部分的黃金。」");
	say();
	UI_add_answer(["老大 (The Mister)", "系統"]);
	UI_remove_answer("Buccaneer's Den");
labelFunc0488_0208:
	case "系統" attend labelFunc0488_021B:
	message("「他設計了一種聰明的方法，在機率之屋 (House of Chance) 的各種遊戲中作弊。我確信那讓他賺到了好幾倍於他體重的金幣。」");
	say();
	UI_remove_answer("系統");
labelFunc0488_021B:
	case "老大 (The Mister)" attend labelFunc0488_023B:
	message("「當 Robin 少爺無法償還債務時，『老大』派了他的打手 Sintag 和他的惡棍來追我們。我們只好搭第一艘離開 Buccaneer's Den 的船。我不知道他為什麼被稱為『老大』。」");
	say();
	UI_add_answer(["Sintag", "船"]);
	UI_remove_answer("老大 (The Mister)");
labelFunc0488_023B:
	case "Sintag" attend labelFunc0488_0277:
	message("「Battles 和我絕對有能力對付 Sintag ……」*");
	say();
	if (!var0003) goto labelFunc0488_026C;
	UI_show_npc_face(0xFF79, 0x0000);
	message("「對，你說得他媽的太對了，我們能解決他！我們會像宰羊一樣宰了他！哈！」*");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_026C:
	message("「但是 Gordy 雇了一群流氓來追我們。真可惜。我本來想教訓他一兩次的。事實上，我想總有一天我會的。」");
	say();
	UI_remove_answer("Sintag");
labelFunc0488_0277:
	case "船" attend labelFunc0488_0297:
	message("「我們搭乘的船沉了，讓我們被困在這裡。我們能活著來到 New Magincia 真是太幸運了！」");
	say();
	UI_add_answer(["沉沒", "困住"]);
	UI_remove_answer("船");
labelFunc0488_0297:
	case "沉沒" attend labelFunc0488_02AA:
	message("「船員們都不敢相信！那艘船幾乎是新的。它從 Minoc 一路航行過來都沒有問題。事實上，那是那艘船遇到過的第一場風暴。船員沒有一個人活下來，可憐的傢伙們。」");
	say();
	UI_remove_answer("沉沒");
labelFunc0488_02AA:
	case "困住" attend labelFunc0488_02BD:
	message("「如果你有辦法讓我們回到 Buccaneer's Den ， Robin 少爺會給你豐厚的報酬。」");
	say();
	UI_remove_answer("困住");
labelFunc0488_02BD:
	case "New Magincia" attend labelFunc0488_02DD:
	message("「愚蠢的鄉巴佬和羊群。整個鎮上唯一值得多看一眼的只有 Constance 。」");
	say();
	UI_add_answer(["愚蠢和羊群", "Constance"]);
	UI_remove_answer("New Magincia");
labelFunc0488_02DD:
	case "愚蠢和羊群" attend labelFunc0488_02F0:
	message("「在這裡，不是這個就是那個。這個地方與世隔絕，非常落後。更糟的是，他們還比較喜歡這樣！」");
	say();
	UI_remove_answer("愚蠢和羊群");
labelFunc0488_02F0:
	case "Constance" attend labelFunc0488_0303:
	message("「她確實讓男人心花怒放！我們看上她了，沒錯！」Leavell 迅速清了清嗓子，暫時移開了視線。");
	say();
	UI_remove_answer("Constance");
labelFunc0488_0303:
	case "吊飾盒" attend labelFunc0488_0316:
	message("「雖然我自己沒見過這樣的吊飾盒，或許你該去問問 Robin 少爺。」");
	say();
	UI_remove_answer("吊飾盒");
labelFunc0488_0316:
	case "告辭" attend labelFunc0488_0321:
	goto labelFunc0488_0324;
labelFunc0488_0321:
	goto labelFunc0488_0071;
labelFunc0488_0324:
	endconv;
	message("說完， Leavell 又回去玩他的匕首了。*");
	say();
labelFunc0488_0329:
	if (!(event == 0x0000)) goto labelFunc0488_0337;
	Func092E(0xFF78);
labelFunc0488_0337:
	return;
}


