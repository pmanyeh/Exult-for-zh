#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func045D object#(0x45D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc045D_01B0;
	UI_show_npc_face(0xFFA3, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFA3));
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc045D_005E;
	if (!(!(var0000 == 0x0010))) goto labelFunc045D_003F;
	goto labelFunc045D_005E;
labelFunc045D_003F:
	var0002 = Func08FC(0xFFA3, 0xFFAF);
	if (!var0002) goto labelFunc045D_0059;
	message("William 不想將注意力從友誼會集會上移開。*");
	say();
	abort;
	goto labelFunc045D_005E;
labelFunc045D_0059:
	message("「我現在不能停下來跟你說話！我去大廳參加友誼會集會已經遲到了！」*");
	say();
	abort;
labelFunc045D_005E:
	var0003 = UI_wearing_fellowship();
	var0004 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0118])) goto labelFunc045D_008D;
	message("你看到一個臉上帶著非常擔憂神情的男人。");
	say();
	gflags[0x0118] = true;
	goto labelFunc045D_0091;
labelFunc045D_008D:
	message("「聖者！怎麼了？為什麼你又想和我說話？現在又出什麼事了？！」William 說。");
	say();
labelFunc045D_0091:
	converse attend labelFunc045D_01AB;
	case "姓名" attend labelFunc045D_00AD:
	message("「我叫 William，");
	message(var0004);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc045D_00AD:
	case "職業" attend labelFunc045D_00DE:
	if (!gflags[0x011F]) goto labelFunc045D_00CF;
	message("「我在 Minoc 這裡的鋸木廠工作。」");
	say();
	UI_add_answer(["鋸木廠", "Minoc"]);
	goto labelFunc045D_00DE;
labelFunc045D_00CF:
	message("「在這種時候問這個問題真是太荒謬了！天啊，當我走進我的鋸木廠，看到那兩個人不僅死透了，還被撕裂得幾乎無法辨認時，我簡直嚇得魂飛魄散！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺");
labelFunc045D_00DE:
	case "鋸木廠" attend labelFunc045D_00F1:
	message("「我接收在 Yew 被伐木工砍下所有樹木製成的圓木，然後在當地的鋸木廠將它們切成木板。接著我出售木板——大部分賣給造船匠 Owen，也賣一些給藝術家公會。」");
	say();
	UI_remove_answer("鋸木廠");
labelFunc045D_00F1:
	case "Minoc" attend labelFunc045D_010B:
	message("「在這些謀殺案發生之前，這是一個如此安靜的城鎮。我無法相信。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer("謀殺");
labelFunc045D_010B:
	case "謀殺" attend labelFunc045D_0137:
	if (!(!gflags[0x010A])) goto labelFunc045D_0125;
	message("「今天早上，我一開鋸木廠的門就發現了屍體！靠著從內在力量的三位一體，和友誼會教誨中獲得的所有自律，我當下才沒發瘋。這件事一定發生在昨晚某個時候，但我向你發誓，我什麼都沒聽到！」");
	say();
	gflags[0x010A] = true;
	goto labelFunc045D_0129;
labelFunc045D_0125:
	message("「我以友誼會的名義發誓，我已經把我知道關於謀殺案的一切都告訴你了！」");
	say();
labelFunc045D_0129:
	UI_remove_answer("謀殺");
	UI_add_answer("友誼會");
labelFunc045D_0137:
	case "友誼會" attend labelFunc045D_0178:
	message("「我成為友誼會成員的時間還不長。我最近才開始參加 Elynor 的集會。就在他們宣布要建造紀念碑之後。」");
	say();
	if (!var0003) goto labelFunc045D_0150;
	message("「我真高興你是我在友誼會裡的兄弟；我知道我可以信任你。我擔心的是這鎮上的其他人。」");
	say();
	goto labelFunc045D_016A;
labelFunc045D_0150:
	message("「你想多了解一些友誼會的事嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045D_0166;
	Func0919();
	goto labelFunc045D_016A;
labelFunc045D_0166:
	message("「相信我，你不可能了解生活有多麼殘酷和可怕！你需要友誼會！我很幸運能及時找到它來面對我自己的關鍵時刻！我希望你能在太遲之前意識到你需要友誼會！」");
	say();
labelFunc045D_016A:
	UI_remove_answer("友誼會");
	UI_add_answer("紀念碑");
labelFunc045D_0178:
	case "理念" attend labelFunc045D_018A:
	Func091A();
	UI_remove_answer("理念");
labelFunc045D_018A:
	case "紀念碑" attend labelFunc045D_019D:
	message("「你知道的！造船匠 Owen 站在高大船首上的紀念碑。鎮上每個人都知道！」");
	say();
	UI_remove_answer("紀念碑");
labelFunc045D_019D:
	case "告辭" attend labelFunc045D_01A8:
	goto labelFunc045D_01AB;
labelFunc045D_01A8:
	goto labelFunc045D_0091;
labelFunc045D_01AB:
	endconv;
	message("一旦他打發了你，過度勞累的 William 隨即用雙手掩面。*");
	say();
labelFunc045D_01B0:
	if (!(event == 0x0000)) goto labelFunc045D_01BE;
	Func092E(0xFFA3);
labelFunc045D_01BE:
	return;
}


