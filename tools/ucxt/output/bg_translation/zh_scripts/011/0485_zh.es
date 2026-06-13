#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0485 object#(0x485) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0485_033E;
	UI_show_npc_face(0xFF7B, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFFD);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFC);
	var0004 = Func08F7(0xFFFE);
	var0005 = Func08F7(0xFF7C);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0180]) goto labelFunc0485_0062;
	UI_add_answer("陌生人");
labelFunc0485_0062:
	if (!gflags[0x0184]) goto labelFunc0485_006F;
	UI_add_answer("無賴");
labelFunc0485_006F:
	if (!gflags[0x01CD]) goto labelFunc0485_007C;
	UI_add_answer("找到吊飾盒");
labelFunc0485_007C:
	if (!(!gflags[0x018E])) goto labelFunc0485_008E;
	message("你看到一位宛如天使般的年輕女子，她對你露出完全天真無邪的微笑。");
	say();
	gflags[0x018E] = true;
	goto labelFunc0485_0098;
labelFunc0485_008E:
	message("「");
	message(var0000);
	message("！」Constance 睜大眼睛說，「我能為你做什麼嗎？」");
	say();
labelFunc0485_0098:
	converse attend labelFunc0485_0333;
	case "姓名" attend labelFunc0485_00B4:
	message("「");
	message(var0000);
	message("，我的名字是 Constance。」她害羞地垂下眼睛。");
	say();
	UI_remove_answer("姓名");
labelFunc0485_00B4:
	case "職業" attend labelFunc0485_00CD:
	message("「我將謙卑之井的水送到 New Magincia 的每戶人家。」");
	say();
	UI_add_answer(["謙卑之井", "New Magincia"]);
labelFunc0485_00CD:
	case "謙卑之井" attend labelFunc0485_01A6:
	message("「井水純淨清涼。如果你願意，我倒一些給你。」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0485_019B;
	message("Constance 帶著大大的微笑，拿著水勺浸入水桶清涼的水中。她舀出水，把水勺遞給你。你喝了下去，覺得水很好喝，非常提神。");
	say();
	if (!var0002) goto labelFunc0485_010E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「其實我也覺得很渴。我也能喝點嗎？」Constance 點點頭，遞給他一勺水。他大口大口地喝了起來，發出咕嚕咕嚕的聲音。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_010E:
	if (!var0001) goto labelFunc0485_0133;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我也覺得口乾舌燥。女士，妳願意分一點水給我嗎？」Constance 為 Shamino 舀了一勺水，他喝得水都流到下巴了。*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0133:
	if (!var0003) goto labelFunc0485_0173;
	if (!var0001) goto labelFunc0485_0173;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("你看到 Shamino 碰了碰 Dupre 。「你不喝一點嗎？」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我還是等我們找到比水更『夠勁』的東西再來解渴吧。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0173:
	if (!var0004) goto labelFunc0485_0198;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Constance 遞給 Spark 一勺滿滿的水。他長長地啜了一口，一飲而盡。喝完後，他打了個嗝。他尷尬地咧嘴一笑，帶著歉意向 Constance 鞠躬，然後把水勺還給她。");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0198:
	goto labelFunc0485_019F;
labelFunc0485_019B:
	message("「如果你改變主意，只要告訴我一聲就行了。」");
	say();
labelFunc0485_019F:
	UI_remove_answer("謙卑之井");
labelFunc0485_01A6:
	case "陌生人" attend labelFunc0485_01C4:
	message("「島上有三個陌生人！他們在這裡遭遇了船難！我見過他們。他們的領袖名叫 Robin 。」");
	say();
	UI_add_answer("Robin");
	UI_remove_answer("陌生人");
	gflags[0x0180] = true;
labelFunc0485_01C4:
	case "New Magincia" attend labelFunc0485_01DE:
	message("「我在 New Magincia 出生，一輩子都住在這裡。但現在我想離開，因為我的心碎了。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer("心");
labelFunc0485_01DE:
	case "心" attend labelFunc0485_0206:
	if (!(!gflags[0x0184])) goto labelFunc0485_01FB;
	message("「我曾經愛過小販 Henry ，但後來我得知他是個騙子，也是個無賴。也許很快我的心就會屬於別人。」");
	say();
	UI_add_answer("別人");
	goto labelFunc0485_01FF;
labelFunc0485_01FB:
	message("你告訴 Constance 關於 Robin 對她的計畫。她震驚地看著你。「非常感謝。我現在知道我真正的歸宿是和 Henry 在一起。」");
	say();
labelFunc0485_01FF:
	UI_remove_answer("心");
labelFunc0485_0206:
	case "找到吊飾盒" attend labelFunc0485_024C:
	message("你告訴 Constance 你是如何歸還從 Henry 那裡被偷走的吊飾盒。「喔，我怎麼能懷疑我親愛的 Henry 呢？」她皺起眉頭。「謝謝你告訴我真相。」");
	say();
	if (!var0005) goto labelFunc0485_0245;
	UI_show_npc_face(0xFF7C, 0x0000);
	message("「Constance ，我很抱歉事情變得這麼糟，但如果妳願意，我希望妳收下這個吊飾盒，作為我愛情的信物。」*");
	say();
	UI_show_npc_face(0xFF7B, 0x0000);
	message("「我親愛的 Henry ，我的心只屬於你。」*");
	say();
	UI_remove_npc_face(0xFF7C);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0245:
	UI_remove_answer("找到吊飾盒");
labelFunc0485_024C:
	case "別人" attend labelFunc0485_0266:
	message("「島上有個迷人又神祕的陌生人，名叫 Robin 。他說有一天他會帶我去看世界，買很多好東西給我。」Constance 嘆了口氣。「他甚至送了我一些漂亮的花。」");
	say();
	UI_remove_answer("別人");
	UI_add_answer("Robin");
labelFunc0485_0266:
	case "Robin" attend labelFunc0485_0286:
	message("「他是個有錢人，他的兩個朋友是高大強壯的男人。他們一直跟我說一個聽起來很棒的地方，叫海盜巢穴 (Buccaneer's Den)。」");
	say();
	UI_remove_answer("Robin");
	UI_add_answer(["朋友", "海盜巢穴"]);
labelFunc0485_0286:
	case "朋友" attend labelFunc0485_02A6:
	message("「他們的名字是 Battles 和 Leavell 。他們兩人都像真正的紳士一樣對待我。」");
	say();
	UI_remove_answer("朋友");
	UI_add_answer(["Battles", "Leavell"]);
labelFunc0485_02A6:
	case "海盜巢穴" attend labelFunc0485_02C6:
	message("「海盜巢穴 (Buccaneer's Den) 一定是個仙境。那裡有一個會給你錢的紡車！你能想像嗎！還有富麗堂皇、奢華的浴池。」");
	say();
	UI_remove_answer("海盜巢穴");
	UI_add_answer(["紡車", "浴池"]);
labelFunc0485_02C6:
	case "Battles" attend labelFunc0485_02D9:
	message("「Battles 起初很安靜。我以為他看起來很兇，但一旦你認識他，會發現他人很好。他告訴我他對抗過各種怪物，還有他在南海劫掠船隻的刺激故事。」");
	say();
	UI_remove_answer("Battles");
labelFunc0485_02D9:
	case "Leavell" attend labelFunc0485_02EC:
	message("「Leavell 迷人又風趣。他總能讓我笑。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0485_02EC:
	case "紡車" attend labelFunc0485_02FF:
	message("「嗯， New Magincia 絕對沒有那種東西。我以前甚至從沒聽說過那種事！」");
	say();
	UI_remove_answer("紡車");
labelFunc0485_02FF:
	case "浴池" attend labelFunc0485_0312:
	message("「聽起來不是很棒嗎？」");
	say();
	UI_remove_answer("浴池");
labelFunc0485_0312:
	case "無賴" attend labelFunc0485_0325:
	message("你溫和地向 Constance 解釋， Robin 、 Battles 和 Leavell 是無賴，意圖對她造成極大的傷害。她非常震驚。然後你解釋說他們不會再找她麻煩了。她向你道謝。");
	say();
	UI_remove_answer("無賴");
labelFunc0485_0325:
	case "告辭" attend labelFunc0485_0330:
	goto labelFunc0485_0333;
labelFunc0485_0330:
	goto labelFunc0485_0098;
labelFunc0485_0333:
	endconv;
	message("「很高興能和你說話，");
	message(var0000);
	message("。」*");
	say();
labelFunc0485_033E:
	if (!(event == 0x0000)) goto labelFunc0485_034C;
	Func092E(0xFF7B);
labelFunc0485_034C:
	return;
}


