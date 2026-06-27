#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0472 object#(0x472) ()
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

	if (!(event == 0x0001)) goto labelFunc0472_0252;
	UI_show_npc_face(0xFF8E, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x015A] && gflags[0x015B])) goto labelFunc0472_003D;
	UI_add_answer("花園");
labelFunc0472_003D:
	if (!(!gflags[0x014C])) goto labelFunc0472_004F;
	message("這位僧侶將風帽向後拉，足以讓你看到她的臉。");
	say();
	gflags[0x014C] = true;
	goto labelFunc0472_0059;
labelFunc0472_004F:
	message("「你好， ");
	message(var0000);
	message("。我希望你的每一天都充滿美好。」");
	say();
labelFunc0472_0059:
	converse attend labelFunc0472_0251;
	case "姓名" attend labelFunc0472_008B:
	message("「你可以叫我 Aimi ， ");
	message(var0000);
	message("。」");
	say();
	gflags[0x015B] = true;
	if (!(gflags[0x015A] && (!var0001))) goto labelFunc0472_0084;
	UI_add_answer("花園");
labelFunc0472_0084:
	UI_remove_answer("姓名");
labelFunc0472_008B:
	case "職業" attend labelFunc0472_00BA:
	message("「身為僧侶，我不太確定該怎麼回答你的問題。我經常幫忙釀酒。然而， ");
	message(var0000);
	message("，在閒暇時間，我會在修道院這裡畫畫或打理我的花園。」");
	say();
	UI_add_answer(["畫畫", "花園", "修道院"]);
	if (!gflags[0x0148]) goto labelFunc0472_00BA;
	UI_add_answer("Kreg");
labelFunc0472_00BA:
	case "修道院" attend labelFunc0472_00D4:
	message("「我很少跟這個區域的其他人相處。你或許可以跟 Taylor 談談，因為他對這個區域的人、動物和風景的了解比我多得多。」");
	say();
	UI_add_answer("Taylor");
	UI_remove_answer("修道院");
labelFunc0472_00D4:
	case "Taylor" attend labelFunc0472_00E7:
	message("「他也是位僧侶。他把時間花在研究不列顛尼亞的植物、動物和地理上。」");
	say();
	UI_remove_answer("Taylor");
labelFunc0472_00E7:
	case "畫畫" attend labelFunc0472_00FA:
	message("「是的，」她臉紅了，「我一直很欣賞那些能夠用視覺表達自己的人。遺憾的是，」她笑著說，「我畫得不是很好。不過，我也收藏藝術品。事實上，我房間裡掛著一幅 Sterling 的原畫。或許你哪天可以去看看。」");
	say();
	UI_remove_answer("畫畫");
labelFunc0472_00FA:
	case "花園" attend labelFunc0472_011E:
	var0001 = true;
	message("「我的花園？我已經打理它好幾年了。我堅信美學 (aesthetics) 的價值，所以我只種花。有時當人們需要時，我會把它們做成花束出售，但我很少這麼做。」");
	say();
	UI_add_answer(["美學", "買"]);
	UI_remove_answer("花園");
labelFunc0472_011E:
	case "美學" attend labelFunc0472_0131:
	message("「它指的是實踐或研究所有美麗的事物。」");
	say();
	UI_remove_answer("美學");
labelFunc0472_0131:
	case "買" attend labelFunc0472_0228:
	message("「你想買一束花嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0472_0217;
	message("「你有要送花的人嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0472_020A;
	if (!(gflags[0x0128] && (!gflags[0x015C]))) goto labelFunc0472_0183;
	message("你告訴她 Reyna 母親過世的事。~「啊，是的。我聽說過 Reyna 的喪母之痛。那是一個高尚的理由。請收下這些花並轉交給她。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	gflags[0x015C] = true;
	goto labelFunc0472_0207;
labelFunc0472_0183:
	message("「很好。送花給某人總是最好的。花束要 10 個金幣。你還想要嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0472_01F7;
	var0006 = Func0931(0xFE9B, 0x000A, 0x0284, 0xFE99, 0xFE99);
	var0007 = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	if (!var0006) goto labelFunc0472_01EA;
	if (!var0007) goto labelFunc0472_01E3;
	var0008 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	message("「我想你會發現這些花非常漂亮。」");
	say();
	goto labelFunc0472_01E7;
labelFunc0472_01E3:
	message("「看來你沒有空間拿我的花。真可惜。」");
	say();
labelFunc0472_01E7:
	goto labelFunc0472_01F4;
labelFunc0472_01EA:
	message("「很抱歉， ");
	message(var0000);
	message("。你沒有足夠的金幣。」");
	say();
labelFunc0472_01F4:
	goto labelFunc0472_0207;
labelFunc0472_01F7:
	message("「我了解， ");
	message(var0000);
	message("。免費的花確實是最好的。而野花相當自由。現在， ");
	message(var0000);
	message("，只要答應我你會花時間欣賞我的花園就好。」");
	say();
labelFunc0472_0207:
	goto labelFunc0472_0214;
labelFunc0472_020A:
	message("「那真是不幸， ");
	message(var0000);
	message("。送花給某人總是最好的。」");
	say();
labelFunc0472_0214:
	goto labelFunc0472_0221;
labelFunc0472_0217:
	message("「或許下次你會有興趣。現在， ");
	message(var0000);
	message("，只要答應我你會花時間欣賞我的花園就好。」");
	say();
labelFunc0472_0221:
	UI_remove_answer("買");
labelFunc0472_0228:
	case "Kreg" attend labelFunc0472_023B:
	message("「恐怕我不認識這個人。」");
	say();
	UI_remove_answer("Kreg");
labelFunc0472_023B:
	case "告辭" attend labelFunc0472_024E:
	message("「再會了， ");
	message(var0000);
	message("。願美麗的甜美氣息永遠伴隨著你。」*");
	say();
	abort;
labelFunc0472_024E:
	goto labelFunc0472_0059;
labelFunc0472_0251:
	endconv;
labelFunc0472_0252:
	if (!(event == 0x0000)) goto labelFunc0472_0260;
	Func092E(0xFF8E);
labelFunc0472_0260:
	return;
}


