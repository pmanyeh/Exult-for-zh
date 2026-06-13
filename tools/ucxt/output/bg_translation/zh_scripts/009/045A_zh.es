#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045A object#(0x45A) ()
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
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	if (!(event == 0x0001)) goto labelFunc045A_0598;
	UI_show_npc_face(0xFFA6, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFA6));
	var0002 = Func0909();
	var0003 = false;
	var0004 = UI_wearing_fellowship();
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc045A_0073;
	if (!(!(var0001 == 0x000F))) goto labelFunc045A_0073;
	var0005 = Func08FC(0xFFA6, 0xFFAF);
	if (!var0005) goto labelFunc045A_006E;
	message("Owen 不會中斷他參與友誼會的集會來和你說話。*");
	say();
	abort;
	goto labelFunc045A_0073;
labelFunc045A_006E:
	message("「我參加友誼會集會遲到了！我現在不能和你說話！」*");
	say();
	abort;
labelFunc045A_0073:
	var0002 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0040]) goto labelFunc045A_00A6;
	if (!gflags[0x0123]) goto labelFunc045A_00A6;
	UI_add_answer(["Crown Jewel", "Hook"]);
	var0003 = true;
labelFunc045A_00A6:
	if (!gflags[0x00FB]) goto labelFunc045A_00B3;
	UI_add_answer("船");
labelFunc045A_00B3:
	if (!gflags[0x00F7]) goto labelFunc045A_00C0;
	UI_add_answer("雕像被取消了");
labelFunc045A_00C0:
	if (!(!gflags[0x0115])) goto labelFunc045A_00E0;
	message("你看到一位穿著昂貴外衣的年輕男子。他非常嚴肅。");
	say();
	gflags[0x0115] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFFA6), 0x000B);
	goto labelFunc045A_00E4;
labelFunc045A_00E0:
	message("Owen 看著你並哼了一聲。「看來你又想和我說話了。」");
	say();
labelFunc045A_00E4:
	converse attend labelFunc045A_0585;
	case "姓名" attend labelFunc045A_0104:
	message("「我的名字是，");
	message(var0002);
	message(", Owen。我猜你未來會更常聽到這個名字。」");
	say();
	gflags[0x0123] = true;
	UI_remove_answer("姓名");
labelFunc045A_0104:
	case "職業", "雕像被取消了" attend labelFunc045A_0171:
	if (!gflags[0x011F]) goto labelFunc045A_0162;
	if (!(!gflags[0x00F7])) goto labelFunc045A_014D;
	message("他直視你的眼睛，毫無謙虛地說。「我是，」他說，「Minoc 歷史上最偉大的造船匠。我是有史以來最偉大的造船匠！」");
	say();
	UI_add_answer(["最偉大", "Minoc", "購買"]);
	if (!gflags[0x0040]) goto labelFunc045A_014A;
	if (!(!var0003)) goto labelFunc045A_014A;
	UI_add_answer(["Crown Jewel", "Hook"]);
labelFunc045A_014A:
	goto labelFunc045A_0158;
labelFunc045A_014D:
	message("「在辛勞多年試圖為這個忘恩負義的小鎮做點什麼之後，我放棄了。我發誓我這輩子再也不會造船了。這會給他們一個教訓！不管他們怎麼乞求或懇求，我都不會做的。」");
	say();
	UI_add_answer("忘恩負義");
labelFunc045A_0158:
	UI_remove_answer("雕像被取消了");
	goto labelFunc045A_0171;
labelFunc045A_0162:
	message("「好吧，我當然會原諒你粗劣的舉止，因為我知道能見到我你一定覺得很榮幸。但你必須知道，剛才在鋸木廠發現了兩個人，他們被謀殺了！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺");
labelFunc045A_0171:
	case "最偉大" attend labelFunc045A_0191:
	message("「你知道我是怎麼變成這樣的嗎？我告訴你！我開始聽到腦海裡有一個聲音！喔，我知道你會覺得我瘋了……」");
	say();
	UI_remove_answer("最偉大");
	UI_add_answer(["瘋了", "聲音"]);
labelFunc045A_0191:
	case "聲音" attend labelFunc045A_01A4:
	message("「這些聲音不是我認識的任何人的。但這些聲音仍然對我有深遠的影響……」");
	say();
	UI_remove_answer("聲音");
labelFunc045A_01A4:
	case "瘋了" attend labelFunc045A_01C4:
	message("「在尋找這聲音的意義時——這很困難，因為你怎麼能告訴別人，尤其是一個陌生人，你腦海裡聽到聲音呢——我遇見了友誼會。他們教導我那聲音是什麼。」");
	say();
	UI_remove_answer("瘋了");
	UI_add_answer(["單一聲音", "友誼會"]);
labelFunc045A_01C4:
	case "單一聲音" attend labelFunc045A_01DE:
	message("「這是我腦海中的理智之聲，試圖引導我的人生走向正確的方向。友誼會教我如何信任這個聲音並傾聽它所說的。你可以在我的生活中看到結果！我掌握了我的技藝，並透過我設計的方法推進了造船技術。」");
	say();
	UI_remove_answer("單一聲音");
	UI_add_answer("方法");
labelFunc045A_01DE:
	case "購買" attend labelFunc045A_02F9:
	if (!(var0001 == 0x0007)) goto labelFunc045A_02EE;
	if (!(!gflags[0x00F7])) goto labelFunc045A_0281;
	message("Owen 看著你，突然顯得有些慌亂。「呃，我目前沒有船可以賣。我正在進行一些改進。但如果你願意，你可以委託我為你建造一艘。我建造的一艘船的船契要價 1000 枚金幣。你想買一艘嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc045A_027D;
	var0007 = UI_remove_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc045A_0276;
	gflags[0x00FB] = true;
	message("「你會發現這筆錢花得很值得的！我會立刻開始工作。我將根據我最近的一些設計來建造。我會提前把船契給你。」");
	say();
	var0008 = UI_add_party_items(0x0001, 0x031D, 0x0010, 0x0002, false);
	if (!var0008) goto labelFunc045A_024A;
	message("「它將被命名為『卓越號（Excellencia）』。」");
	say();
	goto labelFunc045A_0273;
labelFunc045A_024A:
	message("「我很想把船契給你，但你帶了太多東西了。」");
	say();
	var0009 = UI_add_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc045A_026F;
	message("「把你的金幣拿回去吧！我不能昧著良心留下它！」");
	say();
	goto labelFunc045A_0273;
labelFunc045A_026F:
	message("「我很想把金幣還給你，但我似乎忘記放哪了。」");
	say();
labelFunc045A_0273:
	goto labelFunc045A_027A;
labelFunc045A_0276:
	message("「我非常抱歉，」他哼了一聲說，「但你沒有足夠的金幣。」");
	say();
labelFunc045A_027A:
	goto labelFunc045A_0281;
labelFunc045A_027D:
	message("「你確定嗎？在整個不列顛尼亞你絕對找不到更好的船了！那好吧！」");
	say();
labelFunc045A_0281:
	message("「你也許有興趣購買一個精良的六分儀？我有一個願意以好價格割愛。價格是 150 枚金幣。你有興趣嗎？」");
	say();
	if (!Func090A()) goto labelFunc045A_02E7;
	message("「太好了！我就知道你會欣賞擁有造船匠 Owen 的六分儀。你是個了不起的人，能夠辨別那些值得多花一點錢的優質物品。」");
	say();
	var000A = UI_remove_party_items(0x0096, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var000A)) goto labelFunc045A_02B1;
	message("「你這無賴！讓我滿懷希望，卻又殘忍地打破它們。你沒有足夠的金幣來買我的寶物。如果你帶著更多錢回來，『也許』我會讓你再次出價。」");
	say();
	goto labelFunc045A_02E4;
labelFunc045A_02B1:
	var000B = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	if (!(!var000B)) goto labelFunc045A_02E4;
	message("「你沒有足夠的力氣把我的寶物放進背包。你必須丟掉一些毫無價值的垃圾，騰出空間來裝這個美麗的東西。我會等你回來以這個實惠的低價購買六分儀。」");
	say();
	var000C = UI_add_party_items(0x0096, 0x0284, 0xFE99, 0xFE99, true);
labelFunc045A_02E4:
	goto labelFunc045A_02EB;
labelFunc045A_02E7:
	message("「哼。好吧，你要知道你錯過了購買著名造船匠 Owen 六分儀的機會，你將會以你的無賴和愚蠢而聞名。」");
	say();
labelFunc045A_02EB:
	goto labelFunc045A_02F2;
labelFunc045A_02EE:
	message("「我的店鋪目前已經打烊了。我現在不想談生意。」");
	say();
labelFunc045A_02F2:
	UI_remove_answer("購買");
labelFunc045A_02F9:
	case "方法" attend labelFunc045A_038E:
	message("「我甚至寫了一本書，描述我在造船方法上取得的進展。這非常高深，但我試圖寫得讓外行人也能看懂。你有興趣買一本嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc045A_0383;
	message("「是的，你當然有。」");
	say();
	var000E = UI_remove_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc045A_037C;
	var000F = UI_add_party_items(0x0001, 0x0282, 0x003B, 0xFE99, false);
	if (!var000F) goto labelFunc045A_0350;
	message("「拿去吧。」");
	say();
	goto labelFunc045A_0379;
labelFunc045A_0350:
	message("「你帶太多東西了，拿不動你的書。」");
	say();
	var0010 = UI_add_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0010) goto labelFunc045A_0375;
	message("「我會把錢退給你。」");
	say();
	goto labelFunc045A_0379;
labelFunc045A_0375:
	message("「我很想把金幣退給你，但你拿不了。」");
	say();
labelFunc045A_0379:
	goto labelFunc045A_0380;
labelFunc045A_037C:
	message("「你沒有足夠的錢！」");
	say();
labelFunc045A_0380:
	goto labelFunc045A_0387;
labelFunc045A_0383:
	message("「哼！我想這反正也超出了你的理解範圍。」");
	say();
labelFunc045A_0387:
	UI_remove_answer("方法");
labelFunc045A_038E:
	case "船" attend labelFunc045A_03ED:
	if (!(!gflags[0x00F7])) goto labelFunc045A_03A5;
	message("「我很能理解你的不耐煩，但我才剛開始工作。等我完成它時，它自然就準備好了。現在，在此之前，如果你能不浪費我寶貴的時間，我會很感激的。」*");
	say();
	abort;
	goto labelFunc045A_03E6;
labelFunc045A_03A5:
	if (!(!gflags[0x00FC])) goto labelFunc045A_03E2;
	message("「我無法為你造一艘船，我想我們都知道這點。」");
	say();
	if (!gflags[0x00FB]) goto labelFunc045A_03DF;
	message("「我也不能收你買船的錢。來，我還給你。」");
	say();
	var0011 = UI_add_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0011) goto labelFunc045A_03DB;
	gflags[0x00FC] = true;
	goto labelFunc045A_03DF;
labelFunc045A_03DB:
	message("「哦，天啊，你負擔太重了，拿不回你的 1000 枚金幣！等你手比較空的時候再來吧！」");
	say();
labelFunc045A_03DF:
	goto labelFunc045A_03E6;
labelFunc045A_03E2:
	message("「我幫不了你。」");
	say();
labelFunc045A_03E6:
	UI_remove_answer("船");
labelFunc045A_03ED:
	case "Minoc" attend labelFunc045A_040D:
	message("「儘管發生了這些謀殺案，我必須承認我很喜歡這裡。這是我出生的地方。他們愛我。他們將要為我建立一座紀念碑。我想我是受之無愧的，但我還是忍不住感到受寵若驚。」");
	say();
	UI_add_answer(["謀殺", "紀念碑"]);
	UI_remove_answer("Minoc");
labelFunc045A_040D:
	case "忘恩負義" attend labelFunc045A_0427:
	message("「顯然，建造史上最偉大的航行船隻以及為 Minoc 所做的一切已經不夠了！不！多虧了那個自大白痴的鎮長，我被剝奪了理應屬於我的致敬，我早就證明我完全受之無愧。設計缺陷，呸！Burnside 鎮長在他那悲慘的一生中到底造過幾艘船？！」");
	say();
	UI_add_answer("那裡有人死亡");
	UI_remove_answer("忘恩負義");
labelFunc045A_0427:
	case "謀殺" attend labelFunc045A_0448:
	if (!(!gflags[0x0122])) goto labelFunc045A_043D;
	message("「沒錯。鋸木廠位於鎮的東南方。鎮上幾乎每個人都在那裡。如果你想查明更多，你也許應該去那裡。我痛恨暴力。」");
	say();
	goto labelFunc045A_0441;
labelFunc045A_043D:
	message("他緩緩搖頭。「他們不久後就要為我的紀念碑揭幕了。你認為談論這些事件會讓人們不參加典禮嗎？那會是個悲劇！」");
	say();
labelFunc045A_0441:
	UI_remove_answer("謀殺");
labelFunc045A_0448:
	case "那裡有人死亡" attend labelFunc045A_0466:
	message("你告訴他許多無辜平民在他建造的船上喪生。Owen 緩緩搖頭。「我不知道。我完全不知道這怎麼會發生。很難想像如此巨大的生命損失給這個世界帶來的痛苦。但在建造那些船時，我已經盡力了。我不想那些人死。你必須相信我。」");
	say();
	message("Owen 顯得非常痛苦。「給我的致敬現在不過是一塊墓碑。」");
	say();
	UI_remove_answer("那裡有人死亡");
	UI_add_answer("致敬");
labelFunc045A_0466:
	case "友誼會" attend labelFunc045A_0498:
	if (!(!gflags[0x00F7])) goto labelFunc045A_0486;
	Func0919();
	message("「它在我的私生活中所帶來的改變，對我有極大的幫助。」");
	say();
	UI_add_answer("私生活");
	goto labelFunc045A_0491;
labelFunc045A_0486:
	message("「除非她也不跟你說話，否則你可以去問 Elynor。也許你的私生活細節會比我的更能娛樂她。」");
	say();
	UI_add_answer("私生活");
labelFunc045A_0491:
	UI_remove_answer("友誼會");
labelFunc045A_0498:
	case "理念" attend labelFunc045A_04AA:
	Func091A();
	UI_remove_answer("理念");
labelFunc045A_04AA:
	case "私生活" attend labelFunc045A_04CB:
	if (!(!gflags[0x00F7])) goto labelFunc045A_04C4;
	message("「我的朋友，曾幾何時我以為我的生命已經到了盡頭。我覺得自己彷彿被吞噬進一個冰冷、深邃的黑暗洞穴中。」");
	say();
	UI_add_answer("黑暗");
labelFunc045A_04C4:
	UI_remove_answer("私生活");
labelFunc045A_04CB:
	case "黑暗" attend labelFunc045A_04EC:
	if (!(!gflags[0x00F7])) goto labelFunc045A_04E1;
	message("「我的靈魂彷彿沉入了一個光芒無法進入的地方……不久之後我發現了友誼會。它在我生命中造成的改變是奇蹟般的。」");
	say();
	goto labelFunc045A_04E5;
labelFunc045A_04E1:
	message("「最近我很難和 Elynor 說上話。她似乎沒時間理我。以前當我為紀念碑做準備時，她總是順道拜訪，並且願意跟我聊聊。」");
	say();
labelFunc045A_04E5:
	UI_remove_answer("黑暗");
labelFunc045A_04EC:
	case "紀念碑" attend labelFunc045A_04FF:
	message("「喔，你可以去問鎮上的任何人。他們全都知道。」");
	say();
	UI_remove_answer("紀念碑");
labelFunc045A_04FF:
	case "致敬" attend labelFunc045A_0521:
	message("「我知道！我的作品將成為我的紀念碑！我的名字將在任何雕像化為塵土之後長久留存！人們會記住 -我-，我向你保證！」");
	say();
	message("接著，帶著戲劇性的浮誇，Owen 拿出一把匕首。在你來不及阻止他之前，他將匕首刺入了自己的胸膛。他大聲咳嗽，鮮血從他嘴裡噴出，將他精緻的亞麻外衣染成了酒紅色的罪惡。片刻之後，一切都結束了。Owen，有史以來最偉大的造船匠，死了。*");
	say();
	UI_kill_npc(UI_get_npc_object(0xFFA6));
	Func0911(0x0064);
	abort;
labelFunc045A_0521:
	case "Crown Jewel" attend labelFunc045A_054C:
	if (!(!gflags[0x00F9])) goto labelFunc045A_053B;
	message("「Crown Jewel 曾在鎮上，並於今天清晨離開了。它預定航向 Paws。」");
	say();
	gflags[0x00F9] = true;
	goto labelFunc045A_0545;
labelFunc045A_053B:
	message("「自從我們上次談到 Crown Jewel 以來，我再也沒聽過它的消息，");
	message(var0002);
	message("。\"");
	say();
labelFunc045A_0545:
	UI_remove_answer("Crown Jewel");
labelFunc045A_054C:
	case "Hook" attend labelFunc045A_0577:
	if (!(!gflags[0x00FA])) goto labelFunc045A_0566;
	message("「我昨晚看到一個手是鐵鉤的男人在鎮上徘徊。」");
	say();
	gflags[0x00FA] = true;
	goto labelFunc045A_0570;
labelFunc045A_0566:
	message("「自從我們上次談到那個叫 Hook 的男人以來，我再也沒聽過他的消息，");
	message(var0002);
	message("。\"");
	say();
labelFunc045A_0570:
	UI_remove_answer("Hook");
labelFunc045A_0577:
	case "告辭" attend labelFunc045A_0582:
	goto labelFunc045A_0585;
labelFunc045A_0582:
	goto labelFunc045A_00E4;
labelFunc045A_0585:
	endconv;
	if (!(!gflags[0x00F7])) goto labelFunc045A_0594;
	message("「受惠於我的存在感到厭倦了嗎？很好。我希望還能再見到你！」*");
	say();
	goto labelFunc045A_0598;
labelFunc045A_0594:
	message("「那就上路吧。時光飛逝，名聲亦然。」*");
	say();
labelFunc045A_0598:
	if (!(event == 0x0000)) goto labelFunc045A_05A6;
	Func092E(0xFFA6);
labelFunc045A_05A6:
	return;
}


