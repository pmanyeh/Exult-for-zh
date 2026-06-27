#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func087B 0x87B ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0451 object#(0x451) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;

	if (!(event == 0x0001)) goto labelFunc0451_048E;
	UI_show_npc_face(0xFFAF, 0x0000);
	var0000 = UI_wearing_fellowship();
	var0001 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	var0002 = Func0909();
	var0003 = UI_part_of_day();
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFFAF));
	if (!(var0003 == 0x0007)) goto labelFunc0451_0064;
	if (!(var0004 == 0x001C)) goto labelFunc0451_0064;
	message("「儀式開始的時間到了。」Elynor 說。");
	say();
	Func087B();
labelFunc0451_0064:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0087]) goto labelFunc0451_0081;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc0451_0081:
	var0005 = Func08F7(0xFFAE);
	if (!var0005) goto labelFunc0451_00A1;
	if (!(var0004 == 0x0010)) goto labelFunc0451_00A1;
	UI_add_answer("Gregor");
labelFunc0451_00A1:
	if (!gflags[0x0125]) goto labelFunc0451_00AE;
	UI_add_answer("燭台");
labelFunc0451_00AE:
	if (!(!gflags[0x010C])) goto labelFunc0451_00C0;
	message("你看到一位舉止優雅但帶有一絲傲慢的女人。");
	say();
	gflags[0x010C] = true;
	goto labelFunc0451_00CA;
labelFunc0451_00C0:
	message("「你是在跟我說話嗎，");
	message(var0002);
	message("？」Elynor 問道。");
	say();
labelFunc0451_00CA:
	converse attend labelFunc0451_0489;
	case "姓名" attend labelFunc0451_00E0:
	message("她挺直了肩膀，直視著你的眼睛。~~「我是 Elynor 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0451_00E0:
	case "職業" attend labelFunc0451_0161:
	if (!gflags[0x011F]) goto labelFunc0451_0152;
	message("「我是 Minoc 這裡友誼會分會的首席顧問。我們是一個尋求靈性成長的社團，致力於發揮我們的最高潛力，提升自我價值，以及兄弟之間的團結和信任。");
	say();
	if (!(!gflags[0x0096])) goto labelFunc0451_0111;
	message("「也許你希望加入我們的友誼會？」");
	say();
	if (!Func090A()) goto labelFunc0451_010A;
	message("「這對友誼會來說的確是個偉大的一天！去不列顛城找巴特林。他是我們的創始人。讓聖者加入友誼會這份莫大的榮耀，理應只保留給他。」");
	say();
	goto labelFunc0451_010E;
labelFunc0451_010A:
	message("「從你的眼神我能看出，你缺乏勇氣邁出你生命中這至關重要的一步。也許很快有一天你會準備好。」~~她輕蔑地看著你。「我們等著看……」");
	say();
labelFunc0451_010E:
	goto labelFunc0451_0115;
labelFunc0451_0111:
	message("「啊——不過這些你都知道了。」");
	say();
labelFunc0451_0115:
	if (!(gflags[0x008F] && (!(gflags[0x0109] || (gflags[0x0102] || gflags[0x011E]))))) goto labelFunc0451_0133;
	message("「我現在想起巴特林給我的一條信息。我一直在等你。你被派來運送我們的包裹。你現在可以把它交出來了。」");
	say();
	UI_add_answer("交貨");
labelFunc0451_0133:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc0451_0142;
	message("Elynor 注意到你的護身符。「我認為你還不應該戴著這個護身符。你還沒有被正式引入友誼會！恐怕我必須通知巴特林你的謊言！」");
	say();
labelFunc0451_0142:
	UI_add_answer(["Minoc", "友誼會"]);
	goto labelFunc0451_0161;
labelFunc0451_0152:
	message("「你挑了一個最不合適的時間來進行這種閒聊。也許你會對剛在這座鋸木廠裡發現的兩起謀殺案感興趣！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc0451_0161:
	case "Minoc" attend labelFunc0451_0199:
	if (!(!gflags[0x00F7])) goto labelFunc0451_0187;
	message("「我們應該努力把這些謀殺案拋在腦後。 Minoc 很快就會作為一個建造宏偉船隻的城市在不列顛尼亞聞名。在市中心甚至將豎立一座雕像來紀念我們的造船匠 Owen 。他是我們社區中技術嫻熟且受人重視的成員，當然，他也是友誼會的成員。」");
	say();
	UI_add_answer(["謀殺案", "Owen", "友誼會"]);
	goto labelFunc0451_0192;
labelFunc0451_0187:
	message("「我們的城市不像不列顛城那麼偉大，但作為商業中心和礦產而廣為人知。 Owen 遺產帶來的小小尷尬會隨著時間消退。」");
	say();
	UI_add_answer("Owen");
labelFunc0451_0192:
	UI_remove_answer("Minoc");
labelFunc0451_0199:
	case "謀殺案" attend labelFunc0451_01D3:
	message("「我對生命的消逝感到悲傷，但不能說我感到驚訝。 Frederico 和 Tania 是充滿敵意的人。大多數吉普賽人也是如此。當然，我個人對他們沒有意見。」");
	say();
	UI_add_answer(["敵意", "吉普賽人"]);
	UI_remove_answer("謀殺案");
	if (!gflags[0x0040]) goto labelFunc0451_01C6;
	UI_add_answer("皇冠寶石號");
labelFunc0451_01C6:
	if (!gflags[0x0043]) goto labelFunc0451_01D3;
	UI_add_answer("Hook");
labelFunc0451_01D3:
	case "交貨" attend labelFunc0451_0379:
	var0006 = false;
	var0007 = UI_find_object(0xFE9B, 0x031E, 0x0001, 0xFE99);
	var0008 = UI_find_object(0xFE9B, 0x031F, 0x0001, 0xFE99);
	var0009 = 0x0000;
	if (!var0008) goto labelFunc0451_0227;
	var0009 = UI_find_object(var0008, 0x031D, 0x0008, 0xFE99);
	goto labelFunc0451_0240;
labelFunc0451_0227:
	if (!var0007) goto labelFunc0451_0240;
	var0009 = UI_find_object(var0007, 0x031D, 0x0008, 0xFE99);
labelFunc0451_0240:
	if (!var0009) goto labelFunc0451_024A;
	var0006 = true;
labelFunc0451_024A:
	if (!(var0007 || var0008)) goto labelFunc0451_036E;
	message("你拿出包裹並把它舉在 Elynor 面前。她的目光從你身上移到包裹，然後又回到你身上。~~「你肯定被指示過不要打開包裹。儘管如此，你打開它了嗎？」");
	say();
	if (!Func090A()) goto labelFunc0451_02E8;
	message("「你很清楚你被指示要原封不動地送達包裹。身為友誼會的成員，你明白我們必須配得上我們追求的回報。既然你辜負了巴特林的信任，任何報酬都被沒收了。他將會被告知這個輕率的舉動，而他不會高興的。」~~她從你手中接過盒子。");
	say();
	if (!var0007) goto labelFunc0451_02AC;
	message("「胡說八道。這包裹仍然密封得很好。」她懷疑地盯著你。~~「我不知道你為什麼要聲稱它被打開了，但你必須學會更好地信任你的兄弟。既然盒子完好無損，你將會得到你的獎賞，但你的行為將會被向上報告。小心點，我的兄弟。」");
	say();
	var000A = UI_add_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc0451_02A5;
	message("她交給你 50 枚金幣。");
	say();
	gflags[0x0109] = true;
	Func0911(0x01F4);
	UI_remove_item(var0009);
	UI_remove_item(var0007);
	goto labelFunc0451_02A9;
labelFunc0451_02A5:
	message("「你拿不下你的獎賞了！天啊，你的旅行的確很成功。那麼，你必須忍受進一步的考驗。等你拿得動額外的金幣時，把密封的盒子還給我，你就會得到你應得的報酬。」");
	say();
labelFunc0451_02A9:
	goto labelFunc0451_02E5;
labelFunc0451_02AC:
	if (!var0006) goto labelFunc0451_02CA;
	message("她檢查了盒子內部。~~「啊，很好。至少裡面的東西還完好無損。有罪的人只是他自己好奇心的受害者，而不是真正的小偷。」~~她上下打量著你。「你很可能還是會學著成為我們傑出會員中相稱的一員。我們等著看。」");
	say();
	UI_remove_item(var0009);
	gflags[0x0102] = true;
	Func0911(0x01F4);
	goto labelFunc0451_02DE;
labelFunc0451_02CA:
	message("她檢查了盒子內部。~~「我看到盒子裡面的東西不見了。你若不是個小偷，或者至少，作為一個信使非常不盡責。不管怎樣，");
	message(var0002);
	message("，盒子被洗劫一空了！」~~她上下打量著你。「巴特林將會被告知這項……進展。」");
	say();
	gflags[0x011E] = true;
	Func0911(0x01F4);
labelFunc0451_02DE:
	UI_remove_item(var0008);
labelFunc0451_02E5:
	goto labelFunc0451_036B;
labelFunc0451_02E8:
	if (!var0007) goto labelFunc0451_032E;
	var000A = UI_add_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc0451_0327;
	message("Elynor 從你手中接過包裹。~~「你做得非常好。現在如約定的，這是你的報酬。」");
	say();
	gflags[0x0109] = true;
	Func0911(0x01F4);
	UI_remove_item(var0009);
	UI_remove_item(var0007);
	goto labelFunc0451_032B;
labelFunc0451_0327:
	message("「你拿不下你的獎賞了！天啊，你的旅行的確很成功。那麼，你必須忍受進一步的考驗。等你拿得動額外的金幣時，把密封的盒子還給我，你就會得到你應得的報酬。」");
	say();
labelFunc0451_032B:
	goto labelFunc0451_036B;
labelFunc0451_032E:
	message("Elynor 從你手中接過包裹。檢查它時，她立刻注意到它被打開過了。~~「^");
	message(var0002);
	message("！盒子是開著的！像你這樣盡責的人，肯定不會被搶了吧？」");
	say();
	if (!var0006) goto labelFunc0451_0356;
	message("她檢查了盒子內部。~~「啊，很好。至少裡面的東西還完好無損。有罪的人只是他自己好奇心的受害者，而不是真正的小偷。」~~她上下打量著你。「你很可能還是會學著成為我們傑出會員中相稱的一員。我們等著看。」~~她哼了一聲。「當然，這將會被報告給巴特林。」");
	say();
	UI_remove_item(var0009);
	gflags[0x0102] = true;
	Func0911(0x01F4);
	goto labelFunc0451_0364;
labelFunc0451_0356:
	message("窺視裡面，她勃然大怒。「看起來你被搶了。顯然，既然你辜負了巴特林託付給你的責任，你將不會收到任何報酬。」~~「巴特林將會被告知這個輕率的舉動。」");
	say();
	gflags[0x011E] = true;
	Func0911(0x01F4);
labelFunc0451_0364:
	UI_remove_item(var0008);
labelFunc0451_036B:
	goto labelFunc0451_0372;
labelFunc0451_036E:
	message("「你現在沒有把它帶在身上嗎？直到你親手交給我，你才會得到報酬。我真希望你把它藏在一個安全的地方。」");
	say();
labelFunc0451_0372:
	UI_remove_answer("交貨");
labelFunc0451_0379:
	case "Owen" attend labelFunc0451_039A:
	if (!(!gflags[0x00F7])) goto labelFunc0451_038F;
	message("「他是友誼會為一個人的生命帶來巨大改變的典型例子。在他加入友誼會之前，他缺乏自信，並準備放棄他的手藝。現在，他即將被公認為世界上最優秀的手藝人。」");
	say();
	goto labelFunc0451_0393;
labelFunc0451_038F:
	message("Elynor 翻了個白眼。「哦，拜託！」她說，聽起來很惱火。「這些天我不關心像他這樣的人。」");
	say();
labelFunc0451_0393:
	UI_remove_answer("Owen");
labelFunc0451_039A:
	case "敵意" attend labelFunc0451_03AD:
	message("「 Frederico 和 Tania 把我們友誼會的所有成員當作有病一樣對待。特別是 Frederico 經常欺負我們的成員。你也知道，我們是和平主義者，這是常識。他甚至在他自己的人民中都有殘酷的名聲。他落得暴斃的下場並不令人驚訝。」");
	say();
	UI_remove_answer("敵意");
labelFunc0451_03AD:
	case "友誼會" attend labelFunc0451_03C0:
	message("「友誼會在 Minoc 備受推崇。甚至連鎮長本人也是成員。是我親自帶他加入友誼會的。他是我們當地分會的第一位新成員。這裡友誼會的負責人 Gregor ，主管著不列顛尼亞礦業公司。許多友誼會的成員都會經過 Minoc 。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0451_03C0:
	case "Elizabeth 和 Abraham" attend labelFunc0451_03E5:
	if (!(!gflags[0x0217])) goto labelFunc0451_03DA;
	message("「你剛好錯過他們了！他們在這裡籌集資金。他們已經前往 Paws 去拜訪我們在那裡的庇護所。」");
	say();
	gflags[0x0105] = true;
	goto labelFunc0451_03DE;
labelFunc0451_03DA:
	message("「自從他們上次來這裡之後，我就沒見過 Elizabeth 和 Abraham 了。」");
	say();
labelFunc0451_03DE:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc0451_03E5:
	case "Hook" attend labelFunc0451_0405:
	if (!var0001) goto labelFunc0451_03FA;
	message("方塊震動著。「 Hook 住在大海盜窩的某個地方。我不知道在哪裡。」");
	say();
	goto labelFunc0451_03FE;
labelFunc0451_03FA:
	message("「一個叫 Hook 的男人？我確定我會記得見過那樣的人，而且…我肯定，這與我曾經接觸過的任何友誼會成員的描述…都不相符。」");
	say();
labelFunc0451_03FE:
	UI_remove_answer("Hook");
labelFunc0451_0405:
	case "皇冠寶石號" attend labelFunc0451_0425:
	if (!var0001) goto labelFunc0451_041A;
	message("方塊震動著。「那是 Hook 的船。我有一段時間沒看到它了。」");
	say();
	goto labelFunc0451_041E;
labelFunc0451_041A:
	message("「在我們繁忙的港口裡有許多船隻來來去去。我不知道有哪一艘特定的船。也許你應該去問 Owen 。」");
	say();
labelFunc0451_041E:
	UI_remove_answer("皇冠寶石號");
labelFunc0451_0425:
	case "Gregor" attend labelFunc0451_0438:
	message("「你竟敢偷窺我和 Gregor 共享我們的時光？！你沒有羞恥心嗎？！我和 Gregor 也有像任何戀人一樣享有隱私的權利！」");
	say();
	UI_remove_answer("Gregor");
labelFunc0451_0438:
	case "燭台" attend labelFunc0451_0468:
	if (!var0001) goto labelFunc0451_044D;
	message("方塊震動著。「那個燭台被不小心留在了謀殺現場。 Hook 和 Forskis 變得粗心大意了。」");
	say();
	goto labelFunc0451_0461;
labelFunc0451_044D:
	message("「是的，友誼會委託 Xanthia 製作了你所描述的燭台。它的設計融入了我們的三個宗旨：代表團結（Unity）的『U』，代表信任（Trust）的『T』，和代表價值（Worthiness）的『W』。」");
	say();
	message("你告訴 Elynor 它是在謀殺現場被發現的。 Elynor 顯得有些驚訝。");
	say();
	message("「我無法想像為什麼它會在那裡。肯定是有人試圖牽連友誼會！」");
	say();
	message("她想了一會兒。");
	say();
	message("「如果你問我，我敢打賭 Frederico 和 Tania 是被他們自己人謀殺的，然後另一個吉普賽人把燭台放在現場以牽連我們。那些吉普賽人為了得到一點黃金，連自己的母親都敢殺！」");
	say();
labelFunc0451_0461:
	UI_remove_answer("燭台");
labelFunc0451_0468:
	case "吉普賽人" attend labelFunc0451_047B:
	message("「他們在城鎮東南方紮營。靠近鋸木廠。你難道不覺得這很可疑嗎？」");
	say();
	UI_remove_answer("吉普賽人");
labelFunc0451_047B:
	case "告辭" attend labelFunc0451_0486:
	goto labelFunc0451_0489;
labelFunc0451_0486:
	goto labelFunc0451_00CA;
labelFunc0451_0489:
	endconv;
	message("「我有一種感覺，我們還會再見面的。」*");
	say();
labelFunc0451_048E:
	if (!(event == 0x0000)) goto labelFunc0451_049C;
	Func092E(0xFFAF);
labelFunc0451_049C:
	return;
}


