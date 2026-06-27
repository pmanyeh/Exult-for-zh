#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func043E object#(0x43E) ()
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
	var var0012;

	if (!(event == 0x0001)) goto labelFunc043E_03A7;
	UI_show_npc_face(0xFFC2, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00BF])) goto labelFunc043E_003A;
	message("你看見一個渾身髒兮兮的乞丐，他對你咧嘴一笑，彷彿你是他全世界最好的朋友。");
	say();
	gflags[0x00BF] = true;
	goto labelFunc043E_0044;
labelFunc043E_003A:
	message("「又見面了，");
	message(var0000);
	message("，」 Snaz 說。");
	say();
labelFunc043E_0044:
	converse attend labelFunc043E_03A2;
	case "姓名" attend labelFunc043E_005A:
	message("「我叫 Snaz 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043E_005A:
	case "職業" attend labelFunc043E_0073:
	message("「我沒有工作，因為我是個乞丐。只要一枚金幣，我就說個笑話給你聽。」");
	say();
	UI_add_answer(["乞丐", "說個笑話"]);
labelFunc043E_0073:
	case "乞丐" attend labelFunc043E_0086:
	message("「當我還是個小男孩的時候，我就成了孤兒，無家可歸、身無分文。那是生活對我開的一個玩笑。這玩笑真有趣，是吧？~~「但我不會為那個向你收金幣的。」");
	say();
	UI_remove_answer("乞丐");
labelFunc043E_0086:
	case "說個笑話" attend labelFunc043E_00DE:
	message("「你想聽一個嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc043E_00D3;
	var0002 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0002) goto labelFunc043E_00C6;
	message("「好吧，這裡有一個……」");
	say();
	UI_add_answer("友誼會笑話");
	goto labelFunc043E_00D0;
labelFunc043E_00C6:
	message("「如果你想聽笑話，你必須付錢給我，");
	message(var0000);
	message("。等你的口袋滿了再來吧。你越有錢，我就越幽默！」");
	say();
labelFunc043E_00D0:
	goto labelFunc043E_00D7;
labelFunc043E_00D3:
	message("「行行好吧，我求你了！我有一個妻子和六個飢餓的孩子要養。」他感覺到你正盯著他看。「喔，好吧。你相信我有一隻貓，而牠剛生了小貓嗎？」");
	say();
labelFunc043E_00D7:
	UI_remove_answer("說個笑話");
labelFunc043E_00DE:
	case "友誼會笑話" attend labelFunc043E_00FE:
	message("「前幾天我在跟一個友誼會成員討論理念，他問我：『依你看，什麼是愚蠢的最高境界？』~~「所以我說：『我不知道。你有多高？』~~「不，說真的，我雖然拿友誼會開玩笑，但我是真心的……」");
	say();
	UI_remove_answer("友誼會笑話");
	UI_add_answer(["友誼會", "不列顛王的笑話"]);
labelFunc043E_00FE:
	case "友誼會" attend labelFunc043E_0111:
	message("「這就是我深深喜愛友誼會的原因。他們總是開得起玩笑！~~「而且據我所知，他們自己也開很有趣的玩笑！就像他們在 Trinsic 開的那個玩笑！」");
	say();
	UI_remove_answer("友誼會");
labelFunc043E_0111:
	case "不列顛王的笑話" attend labelFunc043E_0178:
	message("「只要一枚金幣，我就再跟你說一個。你想聽嗎？」");
	say();
	var0003 = Func090A();
	if (!(!var0003)) goto labelFunc043E_0138;
	message("「看來我已經達到了你的幽默感極限了。」");
	say();
	UI_remove_answer("不列顛王的笑話");
	goto labelFunc043E_0178;
labelFunc043E_0138:
	var0004 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc043E_016D;
	message("「前幾天我在不列顛王的城堡裡，我注意到他有三個大水池。所以我問他為什麼有三個。~~「他指著第一個說，第一個是用來在涼水中游泳的。~~「第二個是讓朋友們在溫水中游泳的。~~「我注意到第三個水池是空的，所以我問他為什麼。~~「他說那是給不會游泳的人用的！」");
	say();
	UI_remove_answer("不列顛王的笑話");
	UI_add_answer(["不列顛王", "Weston 笑話"]);
	goto labelFunc043E_0178;
labelFunc043E_016D:
	message("「你比我還窮！如果我現在再跟你說任何笑話，你可能會偷走我的飯碗！」");
	say();
	UI_remove_answer("不列顛王的笑話");
labelFunc043E_0178:
	case "不列顛王" attend labelFunc043E_018B:
	message("「可憐的不列顛王！當面對威脅他整個王國的巨大威脅時，他是一位極其能幹的統治者。~~「但當有成千上萬件間接威脅他人民福祉的小事發生時呢？~~「這就是留給你解開的謎題了！」");
	say();
	UI_remove_answer("不列顛王");
labelFunc043E_018B:
	case "Weston 笑話" attend labelFunc043E_01F8:
	message("「只要一枚金幣，我就再跟你說一個。你想聽嗎？」");
	say();
	var0005 = Func090A();
	if (!(!var0005)) goto labelFunc043E_01B2;
	message("「很好。如果你聽不懂前兩個，我現在也沒有理由繼續下去了。」");
	say();
	UI_remove_answer("Weston 笑話");
	goto labelFunc043E_01F8;
labelFunc043E_01B2:
	var0006 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc043E_01E7;
	message("「一個名叫 Weston 的人滿臉困惑地來找我。~~「他告訴我他想從皇家果園偷些蘋果，但如果他這麼做，他隔天早上會覺得很良心不安。~~「所以我給了他這個建議——睡到中午！」");
	say();
	UI_remove_answer("Weston 笑話");
	UI_add_answer(["Weston", "法師笑話"]);
	goto labelFunc043E_01F8;
labelFunc043E_01E7:
	message("「你的口袋空空如也，");
	message(var0000);
	message("。也許是時候停止笑，開始擔心了！」");
	say();
	UI_remove_answer("Weston 笑話");
labelFunc043E_01F8:
	case "Weston" attend labelFunc043E_020B:
	message("「Weston 現在坐在城堡的監獄裡，他肯定會在那裡度過餘生。嘿嘿嘿！~~「盡我所能，我也無法超越那個小笑話！」");
	say();
	UI_remove_answer("Weston");
labelFunc043E_020B:
	case "法師笑話" attend labelFunc043E_0272:
	message("「只要一枚金幣，我就再跟你說一個。你想聽嗎？」");
	say();
	var0007 = Func090A();
	if (!(!var0007)) goto labelFunc043E_0232;
	message("「你很明智。你應該把金幣省下來，付錢給治療師來治好你側腹的疼痛。」");
	say();
	UI_remove_answer("法師笑話");
	goto labelFunc043E_0272;
labelFunc043E_0232:
	var0008 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc043E_0267;
	message("「在路上旅行時，我遇到了一位法師。~~「他看起來好像幾天沒吃東西了，並抱怨他的胃痛得要命。~~「所以我告訴他，他的胃是空的。如果他往裡面塞點東西，他會覺得好點的。~~「後來他向我抱怨他頭痛。我說他的頭痛是由於跟他的胃類似的問題引起的。~~「毫無疑問那會讓他這麼痛，因為身為一個法師，他的腦子裡什麼都沒剩下了！」");
	say();
	UI_remove_answer("法師笑話");
	UI_add_answer(["法師們", "Sullivan 笑話"]);
	goto labelFunc043E_0272;
labelFunc043E_0267:
	message("「現在你在跟我開玩笑了。你破產了！」");
	say();
	UI_remove_answer("法師笑話");
labelFunc043E_0272:
	case "法師們" attend labelFunc043E_0285:
	message("「所有的法師都變傻或發瘋了！在一個如此好笑的世界裡，還有什麼其他適當的反應呢？！」");
	say();
	UI_remove_answer("法師們");
labelFunc043E_0285:
	case "Sullivan 笑話" attend labelFunc043E_02E5:
	message("「你真是個勇敢的聖者！你想聽下一個嗎？」");
	say();
	var0009 = Func090A();
	if (!(!var0009)) goto labelFunc043E_02AC;
	message("「啊哈！沒我想像中的勇敢！」");
	say();
	UI_remove_answer("joke five");//這個沒有對應到UI_add_answer("joke five")來源，所以就不處理了
	goto labelFunc043E_02E5;
labelFunc043E_02AC:
	var000A = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc043E_02E1;
	message("「你知道聲名狼藉的騙子 Sullivan 最近當爸爸了嗎？~~「這是真的！他們說那嬰兒有他父親的眼睛和他母親的鼻子，但他們逼那個嬰兒把它們還回去。」");
	say();
	UI_remove_answer("Sullivan 笑話");
	UI_add_answer(["Sullivan", "黃金笑話"]);
	goto labelFunc043E_02E5;
labelFunc043E_02E1:
	message("「你可能在笑，但你的錢包肯定沒有，因為它是空的。」");
	say();
labelFunc043E_02E5:
	case "Sullivan" attend labelFunc043E_02F8:
	message("「是的，我認識那個被稱為騙子 Sullivan 的人！事實上你讓我想起了他！~~「還是他讓我想起了你？~~「他太狡猾了，光是談論他就讓我把自己給騙了！嘿-嘻-哈！」");
	say();
	UI_remove_answer("Sullivan");
labelFunc043E_02F8:
	case "黃金笑話" attend labelFunc043E_0394:
	message("「到目前為止我都逗樂了你！你想聽下一個嗎？這是個關於黃金的笑話！」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc043E_0389;
	var000C = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000C) goto labelFunc043E_0382;
labelFunc043E_032A:
	UI_play_sound_effect(0x0017);
	message("「非常感謝你！現在，再見！」");
	say();
	message("「你聽懂了嗎？哈！哈！哈！哈！如果不懂，我很樂意再說一遍。」");
	say();
	message("「你想再聽一次黃金笑話嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc043E_0374;
	message("「現在仔細聽好……」");
	say();
	var000E = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc043E_036D;
	goto labelFunc043E_032A;
	goto labelFunc043E_0371;
labelFunc043E_036D:
	message("「喔，我真的很抱歉。我不能再講一次笑話了，因為你沒錢了。」");
	say();
labelFunc043E_0371:
	goto labelFunc043E_037F;
labelFunc043E_0374:
	message("「看來你已經開始懂得演藝圈的規矩了，");
	message(var0000);
	message("。祝你有美好的一天！」");
	say();
	abort;
labelFunc043E_037F:
	goto labelFunc043E_0386;
labelFunc043E_0382:
	message("「我看得出來你窮到連幽默感都買不起了！」");
	say();
labelFunc043E_0386:
	goto labelFunc043E_038D;
labelFunc043E_0389:
	message("「喔，真可惜你不想聽！這是目前為止最好笑的一個，也是我個人最喜歡的！」");
	say();
labelFunc043E_038D:
	UI_remove_answer("黃金笑話");
labelFunc043E_0394:
	case "告辭" attend labelFunc043E_039F:
	goto labelFunc043E_03A2;
labelFunc043E_039F:
	goto labelFunc043E_0044;
labelFunc043E_03A2:
	endconv;
	message("「我真希望我逗樂了你。」*");
	say();
labelFunc043E_03A7:
	if (!(event == 0x0000)) goto labelFunc043E_042E;
	var000F = UI_part_of_day();
	var0010 = UI_get_schedule_type(UI_get_npc_object(0xFFC2));
	var0011 = UI_die_roll(0x0001, 0x0004);
	if (!(var0010 == 0x000C)) goto labelFunc043E_0428;
	if (!(var0011 == 0x0001)) goto labelFunc043E_03EB;
	var0012 = "@賞點零錢吧？@";
labelFunc043E_03EB:
	if (!(var0011 == 0x0002)) goto labelFunc043E_03FB;
	var0012 = "@有銅板能給我嗎？@";
labelFunc043E_03FB:
	if (!(var0011 == 0x0003)) goto labelFunc043E_040B;
	var0012 = "@販售笑話！@";
labelFunc043E_040B:
	if (!(var0011 == 0x0004)) goto labelFunc043E_041B;
	var0012 = "@接受施捨！@";
labelFunc043E_041B:
	UI_item_say(0xFFC2, var0012);
	goto labelFunc043E_042E;
labelFunc043E_0428:
	Func092E(0xFFC2);
labelFunc043E_042E:
	return;
}


