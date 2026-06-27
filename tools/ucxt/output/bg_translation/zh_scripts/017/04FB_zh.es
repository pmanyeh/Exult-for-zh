#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04FB object#(0x4FB) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04FB_02EC;
	UI_show_npc_face(0xFF05, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0000 == 0x0007)) goto labelFunc04FB_0048;
	message("Danag 對你點點頭。「我無意失禮，但我正在專心玩遊戲。我希望能贏一大筆錢！」");
	say();
	message("他高興地搓著手。*");
	say();
	abort;
labelFunc04FB_0048:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04FB_0069;
	UI_add_answer("Hook");
labelFunc04FB_0069:
	if (!gflags[0x0264]) goto labelFunc04FB_0076;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04FB_0076:
	if (!(!gflags[0x02A9])) goto labelFunc04FB_00A8;
	message("你看到一位帶著燦爛笑容、快活的男人。很明顯他很享受他的生活。");
	say();
	if (!var0001) goto labelFunc04FB_008F;
	message("他注意到了你的獎章。");
	say();
	message("「友誼會成員！你好嗎！希望你來海盜巢穴的旅程不會太麻煩！歡迎來到我們的島嶼！」");
	say();
labelFunc04FB_008F:
	if (!var0002) goto labelFunc04FB_00A1;
	message("立方體震動了。");
	say();
	message("「我認出你就是聖者！我知道你被判處死刑了！」");
	say();
	message("Danag 微笑著，彷彿他剛才說的是你被邀請與國王共進晚餐一樣。");
	say();
labelFunc04FB_00A1:
	gflags[0x02A9] = true;
	goto labelFunc04FB_00AC;
labelFunc04FB_00A8:
	message("「哈囉！」Danag 說。");
	say();
labelFunc04FB_00AC:
	converse attend labelFunc04FB_02E7;
	case "姓名" attend labelFunc04FB_00C2:
	message("「我是 Danag ，我的朋友。」這名男子誇張地鞠了個躬。");
	say();
	UI_remove_answer("姓名");
labelFunc04FB_00C2:
	case "職業" attend labelFunc04FB_00DB:
	message("「我是這裡海盜巢穴的友誼會代理分會長。我們正式的會長 Abraham，目前因為友誼會的事務外出了。」");
	say();
	UI_add_answer(["友誼會", "Abraham"]);
labelFunc04FB_00DB:
	case "友誼會" attend labelFunc04FB_00F5:
	message("「友誼會在海盜巢穴存在很長一段時間了。這是不列顛尼亞最古老的分會之一，僅次於不列顛的總部。你可能會想，為什麼一個名聲如此狼藉的島嶼會吸引友誼會。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer("想知道");
labelFunc04FB_00F5:
	case "想知道" attend labelFunc04FB_0124:
	message("「友誼會的創始人認為，居住在這個島上的人們會從我們的組織中獲益最多。");
	say();
	if (!var0002) goto labelFunc04FB_0112;
	message("「特別是因為我們會幫助他們在海盜巢穴建立一個罪惡和暴食的帝國。」");
	say();
	message("你注意到 Danag 說話時立方體一直在震動。");
	say();
	goto labelFunc04FB_0116;
labelFunc04FB_0112:
	message("「在所有的罪惡、放蕩、海盜行為、賭博、酗酒之中——友誼會已經表明了立場，並招募成員來遵循我們的原則。海盜巢穴因此改變了。」");
	say();
labelFunc04FB_0116:
	UI_remove_answer("想知道");
	UI_add_answer("海盜巢穴");
labelFunc04FB_0124:
	case "海盜巢穴" attend labelFunc04FB_015D:
	message("「很久以前，這裡只是海盜、拾荒者和流氓的藏身之處。看看周圍。");
	say();
	if (!var0002) goto labelFunc04FB_0141;
	message("「現在它是不列顛尼亞所有腐敗的中心。海盜們都受到友誼會的控制。」");
	say();
	message("立方體持續震動。");
	say();
	goto labelFunc04FB_0145;
labelFunc04FB_0141:
	message("「現在海盜巢穴是一個島嶼天堂。它有自己的商業。它向不列顛王納稅。這裡的海盜現在都是商人。他們的人生有所成就。");
	say();
labelFunc04FB_0145:
	message("「因此，浴場和遊戲之屋是全國最賺錢的兩家機構。」");
	say();
	UI_remove_answer("海盜巢穴");
	UI_add_answer(["浴場", "遊戲之屋"]);
labelFunc04FB_015D:
	case "浴場" attend labelFunc04FB_0181:
	if (!var0002) goto labelFunc04FB_0172;
	message("「當然，這是一個讓人可以體驗肉體愉悅的地方。所有的利潤都歸友誼會所有。");
	say();
	goto labelFunc04FB_0176;
labelFunc04FB_0172:
	message("「這是一項純粹無害的生意，迎合那些需要放鬆的疲憊之人。人們可以在那裡獲得身心上的洗滌。");
	say();
labelFunc04FB_0176:
	message("「它真的是不列顛尼亞皇冠上的一顆明珠。」");
	say();
	UI_remove_answer("浴場");
labelFunc04FB_0181:
	case "遊戲之屋" attend labelFunc04FB_01A1:
	if (!var0002) goto labelFunc04FB_0196;
	message("「哎呀，這是一家賭場！友誼會肯定從那個地方賺了一大筆！」");
	say();
	goto labelFunc04FB_019A;
labelFunc04FB_0196:
	message("「這是一個挑戰心智以及評估生活策略能力的機構。鍛鍊大腦的這部分對一個人的自尊和幸福很重要。」");
	say();
labelFunc04FB_019A:
	UI_remove_answer("遊戲之屋");
labelFunc04FB_01A1:
	case "Abraham" attend labelFunc04FB_01C9:
	message("「Abraham 是友誼會核心圈的成員之一。他和他的同事 Elizabeth 會定期在全國旅行，通常是分配或收集組織的資金，並在其他分會處理事務。」");
	say();
	if (!var0002) goto labelFunc04FB_01BB;
	message("立方體震動了。");
	say();
	message("「嗯……呃……他也是處決的協調員，而且他打牌會作弊。」");
	say();
labelFunc04FB_01BB:
	UI_remove_answer("Abraham");
	UI_add_answer("Elizabeth");
labelFunc04FB_01C9:
	case "Elizabeth" attend labelFunc04FB_01ED:
	message("「Elizabeth 是一位極為聰明的女性，擔任特別計畫總監。她通常和不列顛的巴特林一起工作，但她大部分時間都在各分會間旅行。」");
	say();
	if (!var0002) goto labelFunc04FB_01DF;
	message("隨著立方體震動，Danag 補充道，「她，嗯……也是個十足的母狗，隨時都可能謀殺你。」");
	say();
labelFunc04FB_01DF:
	UI_remove_answer("Elizabeth");
	UI_add_answer("特別計畫");
labelFunc04FB_01ED:
	case "特別計畫" attend labelFunc04FB_0217:
	message("「他們可能做任何事，從為貧苦農民建立庇護所，到在沒有友誼會大廳的城鎮建立一個新分會。」");
	say();
	if (!var0002) goto labelFunc04FB_0210;
	message("隨著立方體震動，Danag 自豪地補充道：「我們目前的特別計畫是為守護者建造黑門。它位於聖者之島我們秘密的地下設施中！」");
	say();
	UI_add_answer(["黑門", "設施"]);
labelFunc04FB_0210:
	UI_remove_answer("特別計畫");
labelFunc04FB_0217:
	case "黑門" attend labelFunc04FB_022A:
	message("Danag 興奮地睜大了眼睛。「這是我們即將到來的主人和主宰的門戶！他大約在幾個小時內就會穿過來！」");
	say();
	UI_remove_answer("黑門");
labelFunc04FB_022A:
	case "設施" attend labelFunc04FB_0244:
	message("「它在法典聖宮內的一個地城裡。有一道屏障可以阻擋不速之客。有一把特殊的鑰匙可以打開屏障，只有少數被選中的人才有。」");
	say();
	UI_remove_answer("設施");
	UI_add_answer("鑰匙");
labelFunc04FB_0244:
	case "鑰匙" attend labelFunc04FB_0257:
	message("「我沒有。只有 Elizabeth 和 Abraham 、巴特林以及 Hook 本人才有。Hook 可能把他的鑰匙放在他的住處。」");
	say();
	UI_remove_answer("鑰匙");
labelFunc04FB_0257:
	case "Hook" attend labelFunc04FB_028E:
	if (!var0002) goto labelFunc04FB_0283;
	message("立方體震動了。");
	say();
	message("「有個鐵鉤的男人？那就是他的名字！『Hook』！他就住在這座島上！事實上，他的住處就在遊戲之屋後面的秘密墓穴裡！你可以向守衛 Sintag 詢問 Hook 來到達那裡。當然，你知道 Hook 是友誼會的首席劊子手……還有他的助手，石像鬼 Forskis 。」");
	say();
	UI_add_answer(["劊子手", "Forskis"]);
	Func0911(0x0064);
	goto labelFunc04FB_0287;
labelFunc04FB_0283:
	message("「一個一隻手是鐵鉤的海盜？不……我想我不認識他。這個島上有很多海盜。他們很多人也缺手斷腳的！」");
	say();
labelFunc04FB_0287:
	UI_remove_answer("Hook");
labelFunc04FB_028E:
	case "Elizabeth 和 Abraham" attend labelFunc04FB_02B3:
	message("「他們通常一起旅行。他們剛從我們在巨蛇堡附近的冥想休閒中心抵達，我相信他們在島上的某個地方。Abraham 告訴我，在他回來之前，我必須繼續擔任代理分會長。」");
	say();
	gflags[0x02A8] = true;
	if (!var0002) goto labelFunc04FB_02AC;
	message("立方體震動了。");
	say();
	message("「事實上，我相信他們正在前往聖者之島處理我們新的特別計畫的路上。」");
	say();
labelFunc04FB_02AC:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04FB_02B3:
	case "劊子手" attend labelFunc04FB_02C6:
	message("「沒錯。Hook 替友誼會做所有的髒活。他是由 Jhelom 的 De Snel 大師訓練的。De Snel 也訓練了之前所有的劊子手。事實上，De Snel 本人就是友誼會的第一任劊子手！」");
	say();
	UI_remove_answer("劊子手");
labelFunc04FB_02C6:
	case "Forskis" attend labelFunc04FB_02D9:
	message("「據我所知，這個石像鬼的名字在石像鬼語中的意思是『心腹』。他是個強悍的無翼石像鬼，是 Hook 的幫手。我相信他和 Hook 一起住在墓穴裡。」");
	say();
	UI_remove_answer("Forskis");
labelFunc04FB_02D9:
	case "告辭" attend labelFunc04FB_02E4:
	goto labelFunc04FB_02E7;
labelFunc04FB_02E4:
	goto labelFunc04FB_00AC;
labelFunc04FB_02E7:
	endconv;
	message("「再見！」*");
	say();
labelFunc04FB_02EC:
	if (!(event == 0x0000)) goto labelFunc04FB_02FA;
	Func092E(0xFF05);
labelFunc04FB_02FA:
	return;
}


