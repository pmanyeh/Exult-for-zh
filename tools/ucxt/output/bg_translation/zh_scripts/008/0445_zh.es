#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0445 object#(0x445) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0445_0009;
	abort;
labelFunc0445_0009:
	UI_show_npc_face(0xFFBB, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0001 = UI_find_nearest(0xFE9C, 0x018A, 0xFFFF);
	if (!(!gflags[0x00C6])) goto labelFunc0445_004B;
	message("你看見一個徹底灰心喪志的年輕人，正在鐵窗後痛苦地憔悴著。");
	say();
	gflags[0x00C6] = true;
	goto labelFunc0445_0055;
labelFunc0445_004B:
	message("「又見面了，");
	message(var0000);
	message("，」 Weston 說。");
	say();
labelFunc0445_0055:
	converse attend labelFunc0445_032F;
	case "姓名" attend labelFunc0445_006B:
	message("「我是 Weston 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0445_006B:
	case "職業" attend labelFunc0445_00A3:
	message("「只要我還被留在這座監獄裡等死，我就沒有工作。」");
	say();
	if (!var0001) goto labelFunc0445_009C;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「你的工作就是為你犯下的罪行付出代價。」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_009C:
	UI_add_answer("監獄");
labelFunc0445_00A3:
	case "監獄" attend labelFunc0445_00E8:
	message("「我的罪行是從皇家果園偷蘋果。這是我做的，我也坦白承認。如果在同樣的情況下，我還會再做一次。」");
	say();
	if (!var0001) goto labelFunc0445_00D4;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「啊哈！不僅是個不知悔改的罪犯，還是個潛在的職業小偷！看來這傢伙來對了地方，而且正是時候。」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_00D4:
	UI_remove_answer("監獄");
	UI_add_answer(["偷蘋果", "情況"]);
labelFunc0445_00E8:
	case "偷蘋果" attend labelFunc0445_012D:
	message("「我一開始有提議要買，但是果園管理員 Figg 開出了一個天價，我敢肯定他會把那筆錢中飽私囊。所以，是的，我承認我偷了它們。」");
	say();
	if (!var0001) goto labelFunc0445_0119;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「看看這種普通罪犯如何將自己不道德的行為怪罪到別人身上，同時還不承認自己的錯！這傢伙已經無可救藥了。」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0119:
	UI_remove_answer("偷蘋果");
	UI_add_answer(["Figg", "承認"]);
labelFunc0445_012D:
	case "Figg" attend labelFunc0445_016F:
	message("「我相當肯定，他未經 Lord British 的同意，就免費把一籃籃的水果送給友誼會。」");
	say();
	gflags[0x0094] = true;
	if (!var0001) goto labelFunc0445_0168;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「你不應該聽信這種明顯的誹謗，");
	message(var0000);
	message("！這全是道聽途說！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0168:
	UI_remove_answer("Figg");
labelFunc0445_016F:
	case "承認" attend labelFunc0445_0182:
	message("「我唯一的遺憾是沒有試著偷更大點的東西，而且我沒有成功逃脫。」");
	say();
	UI_remove_answer("承認");
labelFunc0445_0182:
	case "情況" attend labelFunc0445_01C7:
	message("「我不是 Britain 人，");
	message(var0000);
	message("。我來自 Paws ，這也是他們認為我可以被隨便對待的另一個原因。」");
	say();
	if (!var0001) goto labelFunc0445_01B9;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「這個囚犯來自 Paws ！我他媽的早就知道了！值得讚賞的是，他在鎮上待了將近一整天才偷東西。對一個 Paws 的公民來說，這已經是盡可能地誠實了！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_01B9:
	UI_remove_answer("情況");
	UI_add_answer("Paws");
labelFunc0445_01C7:
	case "Paws" attend labelFunc0445_020C:
	message("「Paws 是一個會讓你感到貧窮如冰冷之手般緊緊揪住你心臟的小鎮。」");
	say();
	UI_remove_answer("Paws");
	UI_add_answer(["小鎮", "貧窮"]);
	if (!var0001) goto labelFunc0445_020C;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「喔該死！現在我猜他又要開始告訴我們他那可悲的一生了！你能不能等我拿出我的手帕，免得我嚎啕大哭打斷了你啊！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_020C:
	case "小鎮" attend labelFunc0445_021F:
	message("「不久前， Paws 還是一個繁榮的鄉村沿海村莊。但隨著 Britain 的擴張，我們大部分的當地企業都搬到了那裡。我們變成了一個農業小鎮，而那場七年的乾旱給了我們沉重的打擊，我們至今仍未恢復過來。」");
	say();
	UI_remove_answer("小鎮");
labelFunc0445_021F:
	case "貧窮" attend labelFunc0445_0264:
	message("「我並不想哀嘆我的命運，但我的家人住在 Paws ——我的妻子 Alina 和我的孩子 Cassie 。他們快餓死了，我來 Britain 是為了給他們找食物。」");
	say();
	if (!var0001) goto labelFunc0445_0250;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「喔，得了吧！別把貧窮當作你犯罪的藉口！我父親窮到他和他的家人必須吃土。但他還是把我教得好好的。我告訴你，如果他覺得我做錯了什麼事，他絕對會把我揍得屁滾尿流！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0250:
	UI_remove_answer("貧窮");
	UI_add_answer(["家人", "餓死"]);
labelFunc0445_0264:
	case "家人" attend labelFunc0445_0277:
	message("「我不求對我自己的任何憐憫。我已經認罪了。但我的生命不只屬於我自己。它也屬於我的妻子和家人。沒有我，他們將遭受難以忍受的苦難，他們可能無法活下去。」");
	say();
	UI_remove_answer("家人");
labelFunc0445_0277:
	case "餓死" attend labelFunc0445_02BC:
	message("「儘管有些愚人會說出相反的話，但 Britannia 的人民正被階級制度的惡毒暴政所壓榨。當少數人擁有比他們能享受的還多更多的東西時，有許多人每晚卻只能餓著肚子入睡。我的妻子和女兒就是其中兩個。」");
	say();
	if (!var0001) goto labelFunc0445_02A8;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「喔，這提醒我快到我的用餐時間了！聽說今天農夫市集的鱒魚很美味。」");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_02A8:
	UI_remove_answer("餓死");
	UI_add_answer(["愚人", "階級制度"]);
labelFunc0445_02BC:
	case "愚人" attend labelFunc0445_02CF:
	message("「像我們這位好朋友守衛這樣的愚人，會想讓我們相信 Britannia 在兩百多年來什麼都沒變。我們可以裝作所有的問題都不存在一樣地過日子。我告訴你，一開始就是像那樣的人製造了我們的問題。」");
	say();
	UI_remove_answer("愚人");
labelFunc0445_02CF:
	case "階級制度" attend labelFunc0445_0321:
	message("「雖然我肯定 Lord British 是一位公正公平的統治者，但他必定對他的王國裡發生的一切相當不知情。他絕對不會容忍這種不平等的。」");
	say();
	if (!var0001) goto labelFunc0445_0300;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「好了！你的廢話夠多了！整天唧唧歪歪地抱怨那可怕糟糕的階級制度！怎麼，接下來你是不是要說社會該為你的罪行負責？沒有任何人對維持法律和秩序表達任何感謝。沒錯，當然沒有！反而全世界的憐憫都給了那些對社會造成真正威脅的危險違法者！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0300:
	message("「你願意跟 Lord British 談談我的事嗎？我敢打賭他對我的案子完全不知情！拜託！你願意跟他談談嗎？」");
	say();
	if (!Func090A()) goto labelFunc0445_0315;
	message("「喔，感謝你，聖者！我的命運，以及我妻子和女兒的命運都掌握在你手中了！」");
	say();
	gflags[0x00CD] = true;
	goto labelFunc0445_031A;
labelFunc0445_0315:
	message("Weston 低下頭。「那你為什麼要跟我說話？走開，讓我一個人痛苦吧。」*");
	say();
	abort;
labelFunc0445_031A:
	UI_remove_answer("階級制度");
labelFunc0445_0321:
	case "告辭" attend labelFunc0445_032C:
	goto labelFunc0445_032F;
labelFunc0445_032C:
	goto labelFunc0445_0055;
labelFunc0445_032F:
	endconv;
	message("「感謝你來看我。」*");
	say();
	return;
}


