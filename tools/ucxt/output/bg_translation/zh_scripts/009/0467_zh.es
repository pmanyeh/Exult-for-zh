#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0467 object#(0x467) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0467_018B;
	UI_show_npc_face(0xFF99, 0x0000);
	var0000 = UI_wearing_fellowship();
	if (!var0000) goto labelFunc0467_0045;
	var0001 = UI_get_npc_object(0xFF99);
	message("這個男人對你怒目而視。「你戴著那個最邪惡組織的標誌，友誼會。準備受死吧！」*");
	say();
	UI_set_alignment(var0001, 0x0002);
	UI_set_schedule_type(var0001, 0x0000);
	abort;
	goto labelFunc0467_006B;
labelFunc0467_0045:
	var0002 = Func0909();
	var0003 = false;
	if (!(!gflags[0x0141])) goto labelFunc0467_0061;
	message("你面前的男人仔細地打量著你，擺出了一個充滿攻擊性的姿勢。");
	say();
	gflags[0x0141] = true;
	goto labelFunc0467_006B;
labelFunc0467_0061:
	message("「日安， ");
	message(var0002);
	message("，」 Thad 冷冷地說。");
	say();
labelFunc0467_006B:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0467_007B:
	converse attend labelFunc0467_0180;
	case "姓名" attend labelFunc0467_0097:
	message("他盯著你看了一會兒。「我的名字是 Thad ，");
	message(var0002);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0467_0097:
	case "職業" attend labelFunc0467_00B0:
	message("「職業？我沒時間做什麼工作。我的使命是為這片土地剷除那些為非作歹的瘟疫！」");
	say();
	UI_add_answer(["使命", "瘟疫"]);
labelFunc0467_00B0:
	case "使命" attend labelFunc0467_00CA:
	message("「我為此奉獻了我的一生，沒有什麼能阻擋我，連 Batlin 也不能。」");
	say();
	UI_remove_answer("使命");
	UI_add_answer("Batlin");
labelFunc0467_00CA:
	case "Batlin" attend labelFunc0467_00EB:
	message("「他是那個被詛咒的組織，友誼會的首領！」");
	say();
	if (!(!var0003)) goto labelFunc0467_00E4;
	UI_add_answer("友誼會");
labelFunc0467_00E4:
	UI_remove_answer("Batlin");
labelFunc0467_00EB:
	case "瘟疫" attend labelFunc0467_0113:
	message("「你肯定聽過友誼會，一個最齷齪邪惡的組織。它甚至已經入侵了美麗的 Yew 森林！」");
	say();
	UI_add_answer("Yew");
	if (!(!var0003)) goto labelFunc0467_010C;
	UI_add_answer("友誼會");
labelFunc0467_010C:
	UI_remove_answer("瘟疫");
labelFunc0467_0113:
	case "友誼會" attend labelFunc0467_015F:
	message("「我對他們的做法所知甚少，但我知道他們的行為超越了道德倫理的底線。他們綁架了我親愛的妹妹， Millie ，並對她施了某種蠱惑的法術。現在她過著和他們一樣的生活。我發誓要解除這個邪惡的法術，如果有必要，我會殺光整個組織！~~我想，你也肩負著類似的使命吧。是嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0467_0138;
	message("「太好了。」他握了握你的手。「你確實是一位值得尊敬的戰士，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc0467_0154;
labelFunc0467_0138:
	message("「不是？」他似乎真的很驚訝。「那麼或許你會考慮以你自己的方式接下我的使命。」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0467_014F;
	message("「這在我的意料之中。你真的是一位光榮的戰士。」");
	say();
	goto labelFunc0467_0154;
labelFunc0467_014F:
	message("「你算是哪門子的無賴？在我決定結束你這可悲的生命之前，快從我眼前滾開！」*");
	say();
	abort;
labelFunc0467_0154:
	var0003 = true;
	UI_remove_answer("友誼會");
labelFunc0467_015F:
	case "Yew" attend labelFunc0467_0172:
	message("「我了解這片土地，但不了解這裡的人。我沒有什麼有用的消息可以告訴你。」他沉思了一會兒。「或許我可以幫你一點忙。我確實知道有兩個獵人有時會出沒在這個區域。其中一個是女人，帶著長矛。另一個是弓箭手。這是我能告訴你的全部了。」");
	say();
	UI_remove_answer("Yew");
labelFunc0467_0172:
	case "告辭" attend labelFunc0467_017D:
	goto labelFunc0467_0180;
labelFunc0467_017D:
	goto labelFunc0467_007B;
labelFunc0467_0180:
	endconv;
	message("「願你的努力能結出豐碩的果實，");
	message(var0002);
	message("。」*");
	say();
labelFunc0467_018B:
	if (!(event == 0x0000)) goto labelFunc0467_0194;
	abort;
labelFunc0467_0194:
	return;
}


