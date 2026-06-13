#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A7 object#(0x4A7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04A7_0478;
	UI_show_npc_face(0xFF59, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = false;
	var0003 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(gflags[0x0236] && (!gflags[0x0213]))) goto labelFunc04A7_00B4;
	if (!(!gflags[0x0212])) goto labelFunc04A7_0051;
	message("「聖者！你知道商人 Morfin 被偷了一批銀蛇毒液嗎？這起竊案給社區帶來了不小的困擾。」");
	say();
	goto labelFunc04A7_0055;
labelFunc04A7_0051:
	message("「聖者！喔，聖者！我有消息！」");
	say();
labelFunc04A7_0055:
	message("「我的兒子 Garritt 告訴我 Tobias 身上有一些銀蛇毒液。我去調查，發現 Tobias 確實有！」*");
	say();
	var0004 = Func08F7(0xFF56);
	if (!var0004) goto labelFunc04A7_0087;
	UI_show_npc_face(0xFF56, 0x0000);
	message("「沒錯！我是見證人，Feridwyn 說的是實話！」*");
	say();
	UI_remove_npc_face(0xFF56);
	UI_show_npc_face(0xFF59, 0x0000);
labelFunc04A7_0087:
	message("「我常說 Tobias 不是好東西。現在有了證據。他就是那個一直掠奪我們誠實商人之一的小偷！想到我居然讓他接觸我的兒子！我希望他能得到適當的懲處，這對於一個將年輕人引入歧途、偏離友誼會之道的人是應該的。");
	say();
	message("「我建議你立刻去跟他的母親談談！Camille 應該對她的後代嚴加管教！」*");
	say();
	gflags[0x0213] = true;
	gflags[0x021C] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFF4F), 0x0003);
	UI_set_schedule_type(UI_get_npc_object(0xFF59), 0x000B);
	abort;
labelFunc04A7_00B4:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0105]) goto labelFunc04A7_00D1;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04A7_00D1:
	var0005 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0005) goto labelFunc04A7_00FD;
	var0002 = true;
	UI_add_answer(["找到毒液", "結案"]);
labelFunc04A7_00FD:
	if (!gflags[0x0218]) goto labelFunc04A7_0119;
	UI_add_answer(["找到毒液", "抓住 Garritt", "採取行動", "Tobias", "結案"]);
labelFunc04A7_0119:
	if (!(!gflags[0x0220])) goto labelFunc04A7_012F;
	message("「你看到一個身形矮小，姿勢扭曲傾斜的男人。他上下打量你後，才決定跟你說話。」");
	say();
	message("「我得到消息說你要來我們的鎮上。我一直期待著你。但我必須承認，我很難相信你真的是聖者。」");
	say();
	gflags[0x0220] = true;
	goto labelFunc04A7_0133;
labelFunc04A7_012F:
	message("「你想再跟我說話嗎，聖者？」Feridwyn 說。");
	say();
labelFunc04A7_0133:
	converse attend labelFunc04A7_046D;
	case "姓名" attend labelFunc04A7_0149:
	message("「我的名字是 Feridwyn。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A7_0149:
	case "職業" attend labelFunc04A7_016B:
	message("「我和我的妻子 Brita 以及兒子 Garritt 在 Paws 這裡經營友誼會的庇護所。」");
	say();
	UI_add_answer(["友誼會", "庇護所", "Brita", "Garritt", "Paws"]);
labelFunc04A7_016B:
	case "友誼會" attend labelFunc04A7_01A8:
	if (!(!(var0001 && (!gflags[0x0006])))) goto labelFunc04A7_019D;
	message("「你想加入嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04A7_0196;
	message("「那你必須去見 Britain 的 Batlin。他是友誼會的創始人。」");
	say();
	goto labelFunc04A7_019A;
labelFunc04A7_0196:
	message("「你還不明白，透過友誼會的指引，你的生活可以得到多大的改善。」");
	say();
labelFunc04A7_019A:
	goto labelFunc04A7_01A1;
labelFunc04A7_019D:
	message("「溫和的聖者，你來我們這個簡陋的小鎮真是太好了。你很清楚，如果要減輕 Britannia 不幸者的痛苦，友誼會還有很多工作要做。」");
	say();
labelFunc04A7_01A1:
	UI_remove_answer("友誼會");
labelFunc04A7_01A8:
	case "庇護所" attend labelFunc04A7_01BB:
	message("「這是全 Britannia 唯一一個為援助和照顧窮人而設的地方。這是一項艱苦的工作，但我們努力使自己配得上我們想要得到的東西。」");
	say();
	UI_remove_answer("庇護所");
labelFunc04A7_01BB:
	case "Brita" attend labelFunc04A7_020A:
	if (!(!gflags[0x0221])) goto labelFunc04A7_01FF;
	message("「一位很棒的女人。你應該見見她。」");
	say();
	var0007 = Func08F7(0xFF58);
	if (!var0007) goto labelFunc04A7_01FC;
	UI_show_npc_face(0xFF58, 0x0000);
	message("「我丈夫真是個馬屁精。事實是，我們為友誼會所做的工作讓我們更親近了。」*");
	say();
	UI_remove_npc_face(0xFF58);
	UI_show_npc_face(0xFF59, 0x0000);
labelFunc04A7_01FC:
	goto labelFunc04A7_0203;
labelFunc04A7_01FF:
	message("「既然你已經認識我的妻子 Brita，我敢肯定你會同意，你找不到比她更致力於友誼會教義的實踐者了。」");
	say();
labelFunc04A7_0203:
	UI_remove_answer("Brita");
labelFunc04A7_020A:
	case "Garritt" attend labelFunc04A7_0224:
	message("「幸運的是，透過強調友誼會的教義，我們能夠適當地撫養我們的兒子。Garritt 不會被周圍的貧困困住。他將在智力、精神和道德上更加優越。他還很有才華呢！」");
	say();
	UI_remove_answer("Garritt");
	UI_add_answer("有才華");
labelFunc04A7_0224:
	case "有才華" attend labelFunc04A7_0237:
	message("「以他這個年紀的男孩來說，他把排笛吹得非常好！Brita 和我都很驕傲。當他長大後，他或許能進入 Britain 的音樂廳！」");
	say();
	UI_remove_answer("有才華");
labelFunc04A7_0237:
	case "Paws" attend labelFunc04A7_025D:
	message("「因為這是一個沒有什麼特權，也沒什麼隱私的小鎮，我們家對 Paws 的每一個人都相當了解。有你想聽聽關於誰的事嗎？我對這些人很熟悉。」");
	say();
	UI_remove_answer("Paws");
	UI_add_answer(["商人們", "農夫們", "庇護所居民", "乞丐們"]);
labelFunc04A7_025D:
	case "商人們" attend labelFunc04A7_0283:
	message("「他們是 Morfin、Andrew、Thurston 和 Beverlea。」");
	say();
	UI_add_answer(["Morfin", "Andrew", "Thurston", "Beverlea"]);
	UI_remove_answer("商人們");
labelFunc04A7_0283:
	case "Beverlea" attend labelFunc04A7_0296:
	message("「她是一位幾乎失明的年長婦女，在河東岸經營古董店。」");
	say();
	UI_remove_answer("Beverlea");
labelFunc04A7_0296:
	case "農夫們" attend labelFunc04A7_02B6:
	message("「那就是 Camille 和她的兒子 Tobias。」");
	say();
	UI_add_answer(["Camille", "Tobias"]);
	UI_remove_answer("農夫們");
labelFunc04A7_02B6:
	case "乞丐們" attend labelFunc04A7_02D6:
	message("「喔。他們。Komor 和 Fenn。」Feridwyn 翻了翻白眼。");
	say();
	UI_add_answer(["Komor", "Fenn"]);
	UI_remove_answer("乞丐們");
labelFunc04A7_02D6:
	case "庇護所居民" attend labelFunc04A7_02F6:
	message("「我們的居民包括 Alina 和她的孩子，以及 Merrick。」");
	say();
	UI_add_answer(["Alina", "Merrick"]);
	UI_remove_answer("庇護所居民");
labelFunc04A7_02F6:
	case "Alina" attend labelFunc04A7_0309:
	message("「她的丈夫目前在 Britain 的某個地方。我不知道詳情。她有一個小孩子。」");
	say();
	UI_remove_answer("Alina");
labelFunc04A7_0309:
	case "Elizabeth 和 Abraham" attend labelFunc04A7_032E:
	if (!(!gflags[0x016B])) goto labelFunc04A7_0323;
	message("「我很抱歉！你剛好錯過他們了！Elizabeth 和 Abraham 在這裡遞送資金，但他們現在已經去了 Jhelom。那裡目前沒有友誼會分會，所以他們要把內在力量的三位一體帶到西方的土地上！」");
	say();
	gflags[0x0217] = true;
	goto labelFunc04A7_0327;
labelFunc04A7_0323:
	message("「我已經很多天沒見過 Elizabeth 和 Abraham 了。」");
	say();
labelFunc04A7_0327:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04A7_032E:
	case "Thurston" attend labelFunc04A7_0341:
	message("「Thurston 擁有磨坊。如果他經營事業時能多著眼於利潤，他可以做得更好。」");
	say();
	UI_remove_answer("Thurston");
labelFunc04A7_0341:
	case "Camille" attend labelFunc04A7_0354:
	message("「她是個悲傷的女人——一個寡婦——活在過去。真是可惜。幸運的是她丈夫留給她的農場的確還有盈利。」");
	say();
	UI_remove_answer("Camille");
labelFunc04A7_0354:
	case "Merrick" attend labelFunc04A7_0367:
	message("「這是一個友誼會徹底改變某人生活的好例子。目前他住在我們的庇護所裡。」");
	say();
	UI_remove_answer("Merrick");
labelFunc04A7_0367:
	case "Morfin" attend labelFunc04A7_0381:
	message("「Morfin 是一個聰明勤奮的友誼會成員。他經營當地的屠宰場，也是個蛇毒商人。」");
	say();
	UI_add_answer("蛇毒");
	UI_remove_answer("Morfin");
labelFunc04A7_0381:
	case "Andrew" attend labelFunc04A7_0394:
	message("「Andrew 是一個非常快樂的年輕人。他沒有注意到自己身上有著無數的個人問題。」");
	say();
	UI_remove_answer("Andrew");
labelFunc04A7_0394:
	case "Tobias" attend labelFunc04A7_03B5:
	if (!(!gflags[0x0218])) goto labelFunc04A7_03AA;
	message("「當地的流氓。我通常不會允許 Garritt 跟這樣的麻煩製造者交往，但友誼會教我要做個寬容的父母。此外，跟我的兒子交往可能會對那小夥子有些好處。誰知道呢？」");
	say();
	goto labelFunc04A7_03AE;
labelFunc04A7_03AA:
	message("「不管 Tobias 有沒有親自偷毒液。我兒子就是被他帶壞的，因此發生這起竊案。雖然他的行為還不到犯罪的程度，我還是怪罪 Tobias。」");
	say();
labelFunc04A7_03AE:
	UI_remove_answer("Tobias");
labelFunc04A7_03B5:
	case "Fenn" attend labelFunc04A7_03C8:
	message("「Fenn 是一個拒絕友誼會所有援助的乞丐。一個可悲的案例。連他以前的朋友 Merrick 都無法再接觸到他。」");
	say();
	UI_remove_answer("Fenn");
labelFunc04A7_03C8:
	case "Komor" attend labelFunc04A7_03DB:
	message("「Komor 是我見過最可恨的人。他就是個滿腹怨氣的結合體。在我們認識的時間裡，Komor 對我說的每一句話，充其量也不過是層薄薄偽裝的侮辱。」");
	say();
	UI_remove_answer("Komor");
labelFunc04A7_03DB:
	case "結案" attend labelFunc04A7_03FF:
	if (!(gflags[0x0218] || var0002)) goto labelFunc04A7_03F4;
	message("「幸好有你徹底的努力，我們現在可以把這起蛇毒竊案拋在腦後了。我會處理我兒子的。我們別再談這件事了。」");
	say();
	goto labelFunc04A7_03F8;
labelFunc04A7_03F4:
	message("「謝天謝地，我那眼尖的男孩 Garritt 查清了這起蛇毒竊案的真相。坦白說，我自己也懷疑過 Tobias。」");
	say();
labelFunc04A7_03F8:
	UI_remove_answer("結案");
labelFunc04A7_03FF:
	case "蛇毒" attend labelFunc04A7_0416:
	message("「當地的商人 Morfin 告訴我，他的一批銀蛇毒液被偷了。小偷仍在逃，所以要小心！當然，我不知道為什麼會有人想要這種邪惡的物質。這對健康肯定沒好處。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("蛇毒");
labelFunc04A7_0416:
	case "採取行動" attend labelFunc04A7_0429:
	message("「我向你保證，我會對我的兒子施加必要的管教，以確保他從當地小混混那裡沾染的壞習慣，不會再給這個村子帶來麻煩。」");
	say();
	UI_remove_answer("採取行動");
labelFunc04A7_0429:
	case "找到毒液" attend labelFunc04A7_044A:
	if (!(!gflags[0x0218])) goto labelFunc04A7_043F;
	message("「你在 Garritt 的物品中發現了裝毒液的小瓶？我很驚訝！我大為震驚！我……很抱歉。」");
	say();
	goto labelFunc04A7_0443;
labelFunc04A7_043F:
	message("「你真是個足智多謀的人。不幸的是，你的發現讓我非常難過。」");
	say();
labelFunc04A7_0443:
	UI_remove_answer("找到毒液");
labelFunc04A7_044A:
	case "抓住 Garritt" attend labelFunc04A7_045D:
	message("「你說我兒子承認偷了毒液？！我不知道該說什麼。感謝你，聖者，揭開了真相。」");
	say();
	UI_remove_answer("抓住 Garritt");
labelFunc04A7_045D:
	case "告辭" attend labelFunc04A7_046A:
	message("「願你與友誼會同行。」*");
	say();
	abort;
labelFunc04A7_046A:
	goto labelFunc04A7_0133;
labelFunc04A7_046D:
	endconv;
	if (!var0003) goto labelFunc04A7_0478;
	message("「你意識到這個方塊，並沒有引出任何 Feridwyn 自己不相信的東西。他是 Guardian 那些天真的追隨者之一。」");
	say();
labelFunc04A7_0478:
	if (!(event == 0x0000)) goto labelFunc04A7_0486;
	Func092E(0xFF59);
labelFunc04A7_0486:
	return;
}


