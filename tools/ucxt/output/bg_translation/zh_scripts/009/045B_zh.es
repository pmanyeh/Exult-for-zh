#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func045B object#(0x45B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc045B_02B3;
	UI_show_npc_face(0xFFA5, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFA5));
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc045B_005E;
	if (!(!(var0000 == 0x0010))) goto labelFunc045B_003F;
	goto labelFunc045B_005E;
labelFunc045B_003F:
	var0002 = Func08FC(0xFFA5, 0xFFAF);
	if (!var0002) goto labelFunc045B_0059;
	message("友誼會集會正在進行中，Burnside 現在不會和你說話。*");
	say();
	abort;
	goto labelFunc045B_005E;
labelFunc045B_0059:
	message("「我現在不能說話！我參加友誼會集會遲到了！」*");
	say();
	abort;
labelFunc045B_005E:
	var0003 = Func0909();
	var0004 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00FD]) goto labelFunc045B_0088;
	UI_add_answer("設計圖");
labelFunc045B_0088:
	if (!(!gflags[0x0116])) goto labelFunc045B_00A2;
	message("你看到一位努力維持威嚴姿態的年邁男子。");
	say();
	message("他一看到你就睜大了眼睛。");
	say();
	message("「我聽說你又在不列顛尼亞旅行了，但我親眼看到才敢相信！歡迎，聖者！」");
	say();
	gflags[0x0116] = true;
	goto labelFunc045B_00A6;
labelFunc045B_00A2:
	message("「啊，聖者。很高興再次見到你。」Burnside 說。");
	say();
labelFunc045B_00A6:
	converse attend labelFunc045B_02AE;
	case "姓名" attend labelFunc045B_00BC:
	message("「我叫 Burnside。」");
	say();
	UI_remove_answer("姓名");
labelFunc045B_00BC:
	case "職業" attend labelFunc045B_00ED:
	if (!gflags[0x011F]) goto labelFunc045B_00D8;
	message("「我是 Minoc 的鎮長，這二十多年來一直都是。」");
	say();
	UI_add_answer("Minoc");
	goto labelFunc045B_00ED;
labelFunc045B_00D8:
	message("「我懇求你，");
	message(var0003);
	message("，請對在 William 的鋸木廠裡被謀殺的兩個可憐靈魂表現出一些尊重。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺");
labelFunc045B_00ED:
	case "Minoc" attend labelFunc045B_010D:
	message("「除了這些謀殺案，我們是一個由商業運作的城鎮。金幣驅動著這個城鎮。金錢流向哪裡，Minoc 就跟著走向哪裡。以這件紀念碑的事為例。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["謀殺", "紀念碑"]);
labelFunc045B_010D:
	case "謀殺" attend labelFunc045B_0120:
	message("「由於 Frederico 和 Tania 實際上並非 Minoc 的居民，身為鎮長除了增加鎮守衛之外，我能做的不多。這項調查多少超出了我的管轄範圍。看來兇手是外地人，而且現在可能早就逃之夭夭了。謝天謝地。」");
	say();
	UI_remove_answer("謀殺");
labelFunc045B_0120:
	case "紀念碑" attend labelFunc045B_014E:
	if (!(!gflags[0x00F7])) goto labelFunc045B_0143;
	message("「我相信你已經知道為造船匠 Owen 建立紀念碑的計畫了。他自己出錢。我通常反對這種公開的虛榮行為，但友誼會非常贊成。」");
	say();
	UI_add_answer(["虛榮", "友誼會"]);
	goto labelFunc045B_0147;
labelFunc045B_0143:
	message("「如果我允許建造那座紀念碑，這個城鎮就毀了，所以我當然立刻禁止了它。」");
	say();
labelFunc045B_0147:
	UI_remove_answer("紀念碑");
labelFunc045B_014E:
	case "虛榮" attend labelFunc045B_0168:
	message("「但在這個特殊情況下，這對城鎮有無可估量的好處。它提升了我們的聲望。人們會從不列顛尼亞各地來參加揭幕典禮。」");
	say();
	UI_remove_answer("虛榮");
	UI_add_answer("揭幕");
labelFunc045B_0168:
	case "揭幕" attend labelFunc045B_017B:
	message("「哎呀，就連不列顛王本人也會出席！能獲得私下覲見是個難得的機會。」");
	say();
	UI_remove_answer("揭幕");
labelFunc045B_017B:
	case "友誼會" attend labelFunc045B_01A2:
	if (!var0004) goto labelFunc045B_0190;
	message("「啊，我看到你戴著友誼會的獎章了。幾年前這裡的友誼會分會剛成立時，我是從 Elynor 那裡拿到我的獎章的。」");
	say();
	goto labelFunc045B_0194;
labelFunc045B_0190:
	message("「是的，我戴著友誼會獎章，是 Elynor 給我的。別擔心。我不會試著要你加入的！」他為了自己開的小玩笑緊張地笑了笑。");
	say();
labelFunc045B_0194:
	UI_remove_answer("友誼會");
	UI_add_answer("Elynor");
labelFunc045B_01A2:
	case "Elynor" attend labelFunc045B_01D7:
	if (!var0004) goto labelFunc045B_01C5;
	message("「Elynor 告訴我友誼會未來會在這裡做很多善事。我很自豪能成為你們協會的成員，雖然我必須承認對你們的，呃，我們的理念相當無知。」");
	say();
	UI_add_answer("成員");
	UI_remove_answer("Elynor");
	goto labelFunc045B_01D7;
labelFunc045B_01C5:
	message("「Elynor 說友誼會能為 Minoc 帶來很多錢。這對貿易會很棒。我絕不能讓我的個人感情阻礙這個城鎮的利益。」");
	say();
	UI_add_answer("感情");
	UI_remove_answer("Elynor");
labelFunc045B_01D7:
	case "成員" attend labelFunc045B_0208:
	message("「當友誼會分會首次在 Minoc 成立時，我被授予了榮譽會員。我沒有參加定期集會。希望你對我不會太失望？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045B_01F6;
	message("「我很抱歉，聖者。我會努力表現，成為友誼會更有價值的成員。我求你，別把這件事告訴 Elynor。」");
	say();
	goto labelFunc045B_0201;
labelFunc045B_01F6:
	message("「感謝老天！我戴這個獎章主要是為了儀式目的，我猜你也是。我們都明白，無論個人感情如何，支持友誼會是目前政治上最明智的做法。」");
	say();
	UI_add_answer("感情");
labelFunc045B_0201:
	UI_remove_answer("成員");
labelFunc045B_0208:
	case "感情" attend labelFunc045B_0232:
	message("「聖者，我可以告訴你一個秘密嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045B_0227;
	message("「聖者，我必須向你承認，我覺得友誼會提倡的理念充其量只是可疑的，而且它的成員似乎主要由傻子和情感脆弱的人組成。」");
	say();
	goto labelFunc045B_022B;
labelFunc045B_0227:
	message("「哼！那麼，請忘掉我這些欠缺考慮的話吧！」");
	say();
labelFunc045B_022B:
	UI_remove_answer("感情");
labelFunc045B_0232:
	case "設計圖" attend labelFunc045B_0252:
	message("你向鎮長展示了 Owen 畫的設計圖，確保仔細指出 Julia 發現的缺陷。鎮長驚駭萬分。~~「這太可怕了！絕對不能讓任何人看到這個！如果大家知道我們的造船匠導致了那些人的死亡，這會毀了 Owen，並對我們的城鎮造成無法彌補的損害！」");
	say();
	UI_remove_answer("設計圖");
	UI_add_answer(["損害", "死亡"]);
labelFunc045B_0252:
	case "損害" attend labelFunc045B_0265:
	message("「但很少有人懷疑那些死亡是 Owen 的造船造成的！我們可以銷毀設計圖，真相就永遠不會曝光！這能拯救城鎮免於恥辱和可能的毀滅！」");
	say();
	UI_remove_answer("損害");
labelFunc045B_0265:
	case "死亡" attend labelFunc045B_0285:
	message("「話說回來，Owen 建造的船會繼續沉沒。如果這裡被稱為製造『死亡之船』的地方，對 Minoc 的傷害會更大。一個為無能之人建立紀念碑的城鎮。」");
	say();
	UI_remove_answer(["死亡", "損害"]);
	UI_add_answer("雕像");
labelFunc045B_0285:
	case "雕像" attend labelFunc045B_02A0:
	message("「這沒有其他辦法了。雕像必須停止。我在此宣布取消雕像的建立。」");
	say();
	message("「喔，還有……呃，聖者……你能幫我去通知 Owen 這個壞消息嗎？我現在有點忙。而且，我想他從你口中聽到這件事，會比較能接受。」");
	say();
	gflags[0x00F7] = true;
	UI_remove_answer("雕像");
labelFunc045B_02A0:
	case "告辭" attend labelFunc045B_02AB:
	goto labelFunc045B_02AE;
labelFunc045B_02AB:
	goto labelFunc045B_00A6;
labelFunc045B_02AE:
	endconv;
	message("「這是我的榮幸，聖者朋友。這是我的榮幸。」*");
	say();
labelFunc045B_02B3:
	if (!(event == 0x0000)) goto labelFunc045B_02C1;
	Func092E(0xFFA5);
labelFunc045B_02C1:
	return;
}


