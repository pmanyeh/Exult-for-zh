#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08CF 0x8CF ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04FA object#(0x4FA) ()
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

	if (!(event == 0x0001)) goto labelFunc04FA_04C6;
	UI_show_npc_face(0xFF06, 0x0000);
	var0000 = Func0908();
	var0001 = false;
	var0002 = Func08F7(0xFF64);
	var0003 = UI_part_of_day();
	var0004 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0003 == 0x0007)) goto labelFunc04FA_0064;
	if (!gflags[0x01FC]) goto labelFunc04FA_005C;
	message("Rankin 現在無法與你交談，因為他正在主持友誼會的聚會。*");
	say();
	Func08CF();
	abort;
	goto labelFunc04FA_0064;
labelFunc04FA_005C:
	message("這名男子現在太忙無法與你交談，因為他正在主持友誼會的聚會。*");
	say();
	Func08CF();
	abort;
labelFunc04FA_0064:
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!gflags[0x0284]) goto labelFunc04FA_0084;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04FA_0084:
	if (!(!gflags[0x01FC])) goto labelFunc04FA_0096;
	message("這名男子帶著愉快的微笑向你問好。");
	say();
	gflags[0x01FC] = true;
	goto labelFunc04FA_00B8;
labelFunc04FA_0096:
	message("Rankin 微笑。「請告訴我有什麼我可以幫忙的，");
	message(var0000);
	message("。」");
	say();
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_00B8;
	if (!gflags[0x020B]) goto labelFunc04FA_00B8;
	UI_add_answer("Balayna 的指控");
labelFunc04FA_00B8:
	if (!gflags[0x020F]) goto labelFunc04FA_00C5;
	UI_add_answer("商人");
labelFunc04FA_00C5:
	if (!(gflags[0x020A] && (!gflags[0x0210]))) goto labelFunc04FA_00D7;
	UI_add_answer("Balayna");
labelFunc04FA_00D7:
	converse attend labelFunc04FA_04A8;
	case "姓名" attend labelFunc04FA_0110:
	message("「你可以叫我 Rankin ，");
	message(var0000);
	message("。」");
	say();
	gflags[0x020B] = true;
	UI_remove_answer("姓名");
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_0110;
	if (!(!var0001)) goto labelFunc04FA_0110;
	UI_add_answer("Balayna 的指控");
labelFunc04FA_0110:
	case "職業" attend labelFunc04FA_014F:
	message("「我是 Moonglow 這裡友誼會的新分會會長。」");
	say();
	if (!gflags[0x01F5]) goto labelFunc04FA_0129;
	UI_add_answer("聲音");
labelFunc04FA_0129:
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_0142;
	if (!(!var0001)) goto labelFunc04FA_0142;
	UI_add_answer("Balayna 的指控");
labelFunc04FA_0142:
	UI_add_answer(["新的", "Moonglow"]);
labelFunc04FA_014F:
	case "Balayna" attend labelFunc04FA_01E0:
	Func0911(0x0032);
	if (!gflags[0x020D]) goto labelFunc04FA_0177;
	message("「你想了解關於她的什麼事，");
	message(var0000);
	message("？」");
	say();
	UI_add_answer("利口酒");
	goto labelFunc04FA_01D9;
labelFunc04FA_0177:
	if (!gflags[0x020C]) goto labelFunc04FA_01B0;
	var0005 = UI_get_timer(0x0008);
	if (!(var0005 > 0x0006)) goto labelFunc04FA_0198;
	message("「她因為重要公事前往不列顛了，」他笑著說。「我不認為她短期內會回來。」");
	say();
	goto labelFunc04FA_01AD;
labelFunc04FA_0198:
	message("「喔？你最近也沒見過她？我想知道她最近在忙些什麼。」他微微一笑。");
	say();
	if (!var0004) goto labelFunc04FA_01AD;
	message("立方體震動了。「事實上，我確切地知道她在哪裡。」");
	say();
	UI_add_answer("哪裡");
labelFunc04FA_01AD:
	goto labelFunc04FA_01D9;
labelFunc04FA_01B0:
	if (!var0002) goto labelFunc04FA_01BD;
	message("「她就在那裡，」他指著 Balayna 說。");
	say();
	goto labelFunc04FA_01D9;
labelFunc04FA_01BD:
	message("「我有一段時間沒見到她了，");
	message(var0000);
	message("。也許你可以在她家找到她。」");
	say();
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
	UI_set_timer(0x0008);
labelFunc04FA_01D9:
	UI_remove_answer("Balayna");
labelFunc04FA_01E0:
	case "哪裡" attend labelFunc04FA_01F3:
	message("「她剛好停止了呼吸！」Rankin 笑了。");
	say();
	UI_remove_answer("哪裡");
labelFunc04FA_01F3:
	case "利口酒" attend labelFunc04FA_0227:
	message("「是的，我告訴過你那是商人從不列顛帶來的。你把酒給她了嗎？");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04FA_0223;
	message("「那麼，」他問道，「有什麼問題？」");
	say();
	UI_push_answers();
	UI_add_answer(["她死了", "沒問題"]);
	goto labelFunc04FA_0227;
labelFunc04FA_0223:
	message("「啊，好吧。那我希望你之後有機會。」他奇怪地盯著你看了一會兒，然後又笑了。");
	say();
labelFunc04FA_0227:
	case "沒問題" attend labelFunc04FA_023E:
	message("「太好了，那就這樣。」");
	say();
	UI_remove_answer("沒問題");
	UI_pop_answers();
labelFunc04FA_023E:
	case "她死了" attend labelFunc04FA_0268:
	gflags[0x0210] = true;
	UI_remove_answer(["沒問題", "她死了"]);
	message("「什麼！」他顯得很震驚。「死了？這怎麼可能？」");
	say();
	UI_add_answer(["不知道", "利口酒"]);
labelFunc04FA_0268:
	case "不知道" attend labelFunc04FA_027B:
	message("「嗯，這真是一場悲劇！拜託，");
	message(var0000);
	message("，我現在想一個人靜一靜。如果你願意的話……」*");
	say();
	abort;
labelFunc04FA_027B:
	case "利口酒" attend labelFunc04FA_02B4:
	UI_remove_answer(["利口酒", "不知道"]);
	UI_pop_answers();
	message("「利口酒？怎麼，你的意思是商人有殺她的動機？這太荒謬了！」他似乎陷入了沉思。~「或者可能不是。也許我們會調查一下，你說呢？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04FA_02AF;
	message("「太好了。如果你找到任何情報，請讓我知道。同時，我會安排她的葬禮。」他悲傷地搖了搖頭。");
	say();
	gflags[0x020F] = true;
	goto labelFunc04FA_02B4;
labelFunc04FA_02AF:
	message("「很好，那麼我必須自己進行調查，『在』我安排好葬禮之後。」*");
	say();
	abort;
labelFunc04FA_02B4:
	case "商人" attend labelFunc04FA_02F5:
	message("「你有那個殺了 Balayna 的旅行商人的消息嗎？");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04FA_02EA;
	message("「很好，");
	message(var0000);
	message("。你有什麼消息？」");
	say();
	UI_push_answers();
	UI_add_answer(["還沒準備好", "死了"]);
	goto labelFunc04FA_02EE;
labelFunc04FA_02EA:
	message("「啊，好吧。繼續找。我肯定你很快就會得到一些情報的！」");
	say();
labelFunc04FA_02EE:
	UI_remove_answer("商人");
labelFunc04FA_02F5:
	case "還沒準備好" attend labelFunc04FA_0312:
	message("「很好，");
	message(var0000);
	message("，我可以等到你了解到更多再說。」");
	say();
	UI_remove_answer("還沒準備好");
	UI_pop_answers();
labelFunc04FA_0312:
	case "死了" attend labelFunc04FA_032D:
	message("「真的嗎！」他似乎真的很驚訝。「這，啊，太好了。那我猜這起謀殺案已經報仇了。」");
	say();
	gflags[0x020F] = false;
	UI_remove_answer("死了");
	UI_pop_answers();
labelFunc04FA_032D:
	case "新的" attend labelFunc04FA_0340:
	message("他咧嘴笑著，明顯感到尷尬。「我很抱歉。雖然這裡的分會幾年前就開設了，但它是不列顛尼亞最新設立的分會。我仍然認為自己是這裡的新分會會長。」");
	say();
	UI_remove_answer("新的");
labelFunc04FA_0340:
	case "Moonglow" attend labelFunc04FA_035A:
	message("「啊，是的，Moonglow。這是一個令人愉快的城鎮。你可以在這裡找到各式各樣的人。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Moonglow");
labelFunc04FA_035A:
	case "人" attend labelFunc04FA_036D:
	message("「對不起，但我不喜歡閒聊八卦。」");
	say();
	UI_remove_answer("人");
labelFunc04FA_036D:
	case "友誼會" attend labelFunc04FA_03AB:
	var0009 = UI_wearing_fellowship();
	if (!var0009) goto labelFunc04FA_0396;
	if (!gflags[0x0006]) goto labelFunc04FA_038F;
	message("「按照慣例，我們的聚會是在晚上 9 點。請隨意加入我們。」");
	say();
	goto labelFunc04FA_0393;
labelFunc04FA_038F:
	message("「你真的應該把你的獎章還給那個給你的人。只有友誼會成員才被允許佩戴。」");
	say();
labelFunc04FA_0393:
	goto labelFunc04FA_03A4;
labelFunc04FA_0396:
	Func0919();
	message("「如果你有空的話，我很樂意和你討論我們的理念。」");
	say();
	UI_add_answer("理念");
labelFunc04FA_03A4:
	UI_remove_answer("友誼會");
labelFunc04FA_03AB:
	case "理念" attend labelFunc04FA_03BD:
	Func091A();
	UI_remove_answer("理念");
labelFunc04FA_03BD:
	case "聲音" attend labelFunc04FA_03DD:
	if (!gflags[0x0006]) goto labelFunc04FA_03D2;
	message("「放輕鬆，朋友，當時機成熟時你就會聽到。」");
	say();
	goto labelFunc04FA_03D6;
labelFunc04FA_03D2:
	message("「我們每個人內心都存在著一個內在的聲音。這個聲音是我們的伴侶和嚮導。~~參與友誼會越深的人，就越常能聽到自己的內在聲音。」");
	say();
labelFunc04FA_03D6:
	UI_remove_answer("聲音");
labelFunc04FA_03DD:
	case "Elizabeth 和 Abraham" attend labelFunc04FA_0402:
	if (!(!gflags[0x0243])) goto labelFunc04FA_03F7;
	message("「多好的人啊！他們剛才還在這裡給我進行訓練課程。我才剛被任命為分會長。你知道的，這是一個新分會。總之，Elizabeth 和 Abraham 離開去往石像鬼島 Terfin 了。」");
	say();
	gflags[0x01EF] = true;
	goto labelFunc04FA_03FB;
labelFunc04FA_03F7:
	message("「自從很多天前他們給我進行了訓練之後，我就沒見過他們了。」");
	say();
labelFunc04FA_03FB:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04FA_0402:
	case "Balayna 的指控" attend labelFunc04FA_049A:
	if (!var0002) goto labelFunc04FA_0417;
	message("「噓！等一下再跟我說這件事，」他低聲說著，並暗中指著 Balayna，「等她不在的時候。」");
	say();
	goto labelFunc04FA_048F;
labelFunc04FA_0417:
	message("他開始看起來覺得很有趣。~~「我不會讓你太擔心這件事的，");
	message(var0000);
	message("。恐怕 Balayna 有點太野心勃勃了。我猜她可能是無意中聽到了我的一場演講，並且誤解了我的話。等我有更多時間時，我必須和她談談這件事，以便消除她的恐懼。」他睜大眼睛，彷彿想起了什麼。~~「我忘了，她曾向一位會經過不列顛的旅行商人要求了一小瓶利口酒。他幾天前把酒帶來了，而我一直沒有機會給她。你願意幫我把酒送給她嗎，");
	message(var0000);
	message("？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04FA_0475;
	message("「太好了，我的朋友。」");
	say();
	var000B = UI_add_party_items(0x0001, 0x02ED, 0xFE99, 0x001E, false);
	if (!var000B) goto labelFunc04FA_045C;
	message("「我感謝你。」他把那瓶利口酒給了你。");
	say();
	gflags[0x020E] = true;
	goto labelFunc04FA_0472;
labelFunc04FA_045C:
	message("「啊，好吧，你帶的東西太多了。我只好把它留到我有時間跟她談的時候再說。總之還是謝謝你。」");
	say();
	UI_set_timer(0x0008);
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
labelFunc04FA_0472:
	goto labelFunc04FA_048B;
labelFunc04FA_0475:
	message("「很好。我只好把它留到我有時間跟她談的時候再說。總之還是謝謝你。」");
	say();
	UI_set_timer(0x0008);
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
labelFunc04FA_048B:
	gflags[0x020A] = true;
labelFunc04FA_048F:
	UI_remove_answer("Balayna 的指控");
	var0001 = true;
labelFunc04FA_049A:
	case "告辭" attend labelFunc04FA_04A5:
	goto labelFunc04FA_04A8;
labelFunc04FA_04A5:
	goto labelFunc04FA_00D7;
labelFunc04FA_04A8:
	endconv;
	if (!gflags[0x0006]) goto labelFunc04FA_04B6;
	message("「願三位一體 (Triad) 指引你的生活。」*");
	say();
	goto labelFunc04FA_04C6;
labelFunc04FA_04B6:
	message("「如果你對友誼會感興趣，");
	message(var0000);
	message("，去不列顛找巴特林。再見，");
	message(var0000);
	message("。」*");
	say();
labelFunc04FA_04C6:
	if (!(event == 0x0000)) goto labelFunc04FA_04D4;
	Func092E(0xFF06);
labelFunc04FA_04D4:
	return;
}


