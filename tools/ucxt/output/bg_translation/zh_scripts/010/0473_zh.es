#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08C8 0x8C8 (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0473 object#(0x473) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0473_0202;
	UI_show_npc_face(0xFF8D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF8D));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x014D])) goto labelFunc0473_0056;
	message("你面前的這位女性臉上帶著擔憂的表情，彷彿她的思緒飄到了很遠的地方。");
	say();
	gflags[0x014D] = true;
	goto labelFunc0473_006D;
labelFunc0473_0056:
	message("「嗨， ");
	message(var0000);
	message("。我能幫你什麼忙嗎？」 Penni 問。");
	say();
	if (!gflags[0x01DE]) goto labelFunc0473_006D;
	UI_add_answer("Addom");
labelFunc0473_006D:
	converse attend labelFunc0473_01F7;
	case "姓名" attend labelFunc0473_009B:
	message("「我的名字是 Penni ， ");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!(gflags[0x01DE] && (!var0003))) goto labelFunc0473_009B;
	UI_add_answer("Addom");
labelFunc0473_009B:
	case "職業" attend labelFunc0473_00D2:
	message("「我沒有職業， ");
	message(var0001);
	message("。至少沒有我會稱之為『工作』的事。不過，我確實有教導近身戰鬥的技巧。~~她想了一會兒。「我想更好的回答方式應該是說『是的，我有工作』。我是一名訓練師。但是，」她笑了笑，「我太享受這份工作了，以至於不想稱之為工作。」");
	say();
	UI_add_answer(["享受", "訓練"]);
	if (!gflags[0x0142]) goto labelFunc0473_00D2;
	if (!(!var0002)) goto labelFunc0473_00D2;
	UI_add_answer("Bradman");
	var0002 = true;
labelFunc0473_00D2:
	case "享受" attend labelFunc0473_00F2:
	message("「從我大到能握住第一把長矛開始，我就愛上了近身戰鬥。這就是我搬到 Yew 的原因。」");
	say();
	UI_remove_answer("享受");
	UI_add_answer(["長矛", "Yew"]);
labelFunc0473_00F2:
	case "長矛" attend labelFunc0473_0105:
	message("「這是我選擇的武器。長矛結合了距離和力量的優勢。它是完美的狩獵武器。」");
	say();
	UI_remove_answer("長矛");
labelFunc0473_0105:
	case "Yew" attend labelFunc0473_0118:
	message("「當然，我搬到這裡是為了打獵。這片森林充滿了獵物。我不想住在其他任何地方！」");
	say();
	UI_remove_answer("Yew");
labelFunc0473_0118:
	case "訓練" attend labelFunc0473_0157:
	if (!(var0004 == 0x0007)) goto labelFunc0473_014D;
	message("「你有興趣接受訓練嗎？我的收費是每次訓練 35 個金幣。」");
	say();
	if (!Func090A()) goto labelFunc0473_0146;
	Func08C8([0x0000, 0x0004], 0x0023);
	goto labelFunc0473_014A;
labelFunc0473_0146:
	message("「或許下次吧。」");
	say();
labelFunc0473_014A:
	goto labelFunc0473_0157;
labelFunc0473_014D:
	message("「抱歉， ");
	message(var0001);
	message("，但我現在不進行訓練。或許如果你在早上 9 點到晚上 6 點之間回來，我就能幫你了。」");
	say();
labelFunc0473_0157:
	case "Bradman" attend labelFunc0473_01A3:
	message("「是的，」她點點頭，咧嘴笑著說，「我認識 Bradman 。我們會一起去打獵。當然，他用那把『牙籤發射器』很少能抓到什麼東西。」");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0473_0198;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我對這句話感到不滿，我的朋友。弓和十字弓也是能發揮致命效果的。」");
	say();
	UI_show_npc_face(0xFF8D, 0x0000);
	message("她笑著對 Iolo 點點頭。「或許你說得對，弓箭手朋友，但我更喜歡肢體上的挑戰。」");
	say();
	UI_remove_npc_face(0xFFFF);
	goto labelFunc0473_019C;
labelFunc0473_0198:
	message("「雖然我認為他是一位真正的朋友，和一位值得尊敬的同伴，但我懷疑他的身體素質如何。」");
	say();
labelFunc0473_019C:
	UI_remove_answer("Bradman");
labelFunc0473_01A3:
	case "Addom" attend labelFunc0473_01E9:
	message("「Addom 是我丈夫。但你怎麼會……？」她顯得很困惑，但突然盯著你看。「你見過他嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0473_01DA;
	message("「他身體好嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0473_01D2;
	message("「謝天謝地！」她鬆了一口氣。");
	say();
	goto labelFunc0473_01D7;
labelFunc0473_01D2:
	message("「我就知道他這次不該離開的！我討厭他離開！」她強忍著淚水。*");
	say();
	abort;
labelFunc0473_01D7:
	goto labelFunc0473_01DE;
labelFunc0473_01DA:
	message("「我真的好討厭他旅行到那麼遠的地方，去那麼長的時間。我只希望他能快點回到我的懷抱！」她望向遠方，彷彿在尋找 Addom 。");
	say();
labelFunc0473_01DE:
	UI_remove_answer("Addom");
	var0003 = true;
labelFunc0473_01E9:
	case "告辭" attend labelFunc0473_01F4:
	goto labelFunc0473_01F7;
labelFunc0473_01F4:
	goto labelFunc0473_006D;
labelFunc0473_01F7:
	endconv;
	message("「旅途愉快， ");
	message(var0001);
	message("。」*");
	say();
labelFunc0473_0202:
	if (!(event == 0x0000)) goto labelFunc0473_0210;
	Func092E(0xFF8D);
labelFunc0473_0210:
	return;
}


