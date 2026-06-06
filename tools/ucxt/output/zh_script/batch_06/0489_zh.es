#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0489 object#(0x489) ()
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

	if (!(event == 0x0001)) goto labelFunc0489_030F;
	UI_show_npc_face(0xFF77, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF77));
	var0004 = "Avatar";
	var0002 = UI_part_of_day();
	var0005 = UI_is_pc_female();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0180]) goto labelFunc0489_0064;
	UI_add_answer("陌生人");
labelFunc0489_0064:
	if (!gflags[0x017D]) goto labelFunc0489_0071;
	UI_add_answer("吊飾盒");
labelFunc0489_0071:
	if (!gflags[0x018F]) goto labelFunc0489_007E;
	UI_add_answer("Robin");
labelFunc0489_007E:
	if (!gflags[0x0190]) goto labelFunc0489_008B;
	UI_add_answer("Battles");
labelFunc0489_008B:
	if (!gflags[0x0191]) goto labelFunc0489_0098;
	UI_add_answer("Leavell");
labelFunc0489_0098:
	if (!gflags[0x0187]) goto labelFunc0489_00A4;
	var0006 = var0000;
labelFunc0489_00A4:
	if (!gflags[0x0188]) goto labelFunc0489_00B0;
	var0006 = var0004;
labelFunc0489_00B0:
	if (!(!gflags[0x0192])) goto labelFunc0489_00C2;
	message("你看到一位看起來很滿足的蓄鬍男子，臉上有著深深的笑紋和溫柔的雙眼。");
	say();
	gflags[0x0192] = true;
	goto labelFunc0489_00C6;
labelFunc0489_00C2:
	message("「嘿，你過得好嗎？」Sam 說。");
	say();
labelFunc0489_00C6:
	converse attend labelFunc0489_030A;
	case "姓名" attend labelFunc0489_0110:
	message("「我的名字是 Sam 。我是賣花人。你叫什麼名字？」");
	say();
	UI_push_answers();
	var0007 = Func090B([var0000, var0004]);
	if (!(var0007 == var0000)) goto labelFunc0489_00FD;
	message("「很高興認識你。」");
	say();
	gflags[0x0187] = true;
	goto labelFunc0489_0105;
labelFunc0489_00FD:
	message("「好吧。如果你想當聖者，我不會爭辯。如果你想當的話，你就可以當聖者。」");
	say();
	var0008 = true;
labelFunc0489_0105:
	UI_pop_answers();
	UI_remove_answer("姓名");
labelFunc0489_0110:
	case "職業" attend labelFunc0489_0129:
	message("「在我看來，我並沒有真正的工作。我賣花給 New Magincia 的人們。雖然我有拿到錢，但這是我非常喜歡做的事。我想知道，這樣還能算是工作嗎？」他若有所思地抓了抓下巴。");
	say();
	UI_add_answer(["花", "New Magincia"]);
labelFunc0489_0129:
	case "花" attend labelFunc0489_0149:
	message("「我把我賣的所有花都種在一個也是我家的溫室裡。我賣很多紅玫瑰，但我有很多品種。如果你有興趣買一些，請告訴我！」");
	say();
	UI_add_answer(["溫室", "購買"]);
	UI_remove_answer("花");
labelFunc0489_0149:
	case "溫室" attend labelFunc0489_0169:
	message("「我親手建造了我的溫室。當我不賣花時，我在那裡從事各種植物和自然的研究。我覺得這很迷人。你可能已經注意到了，我喜歡把它們種得很大！」");
	say();
	UI_remove_answer("溫室");
	UI_add_answer(["研究", "種得很大"]);
labelFunc0489_0169:
	case "研究" attend labelFunc0489_0183:
	message("「目前我正在研究小麥草可能的用途和應用。很快地，總有一天我會開始整理我的筆記，但這需要漫長的努力，因為我學到了很多。我經營花車主要是為了支持我的工作。」");
	say();
	UI_add_answer("花車");
	UI_remove_answer("研究");
labelFunc0489_0183:
	case "種得很大" attend labelFunc0489_0196:
	message("「正是因為我在研究中學到的東西，我才能把花種得如此巨大和健康。」");
	say();
	UI_remove_answer("種得很大");
labelFunc0489_0196:
	case "花車" attend labelFunc0489_01B0:
	message("「實際上我的生意很好，我也喜歡我的花點亮整個地方的樣子。但反正誰在乎生意呢，你為什麼要問這個？只要說生活很美好就夠了！」");
	say();
	UI_remove_answer("花車");
	UI_add_answer("生活");
labelFunc0489_01B0:
	case "生活" attend labelFunc0489_01C3:
	message("「只要你有地方住、買得起食物，你就有足夠的錢，所以我認為自己是個富有的人。我每晚在謙遜少女酒館享受美酒和歌聲。我有著興隆的生意和刺激的工作。我把島上的每位居民都當作好朋友。我不對任何人感到憤怒，也不渴望更多。我從來沒有理由感到孤獨、擔憂或無聊。還有什麼比這更好的呢？生活很美好！」");
	say();
	UI_remove_answer("生活");
labelFunc0489_01C3:
	case "購買" attend labelFunc0489_0286:
	if (!(var0003 == 0x0007)) goto labelFunc0489_027B;
	if (!(!var0005)) goto labelFunc0489_01E3;
	message("「這島上有許多漂亮的女士，她們習慣從遇見的紳士那裡收到花。如果你沒有花，那會造成可怕的尷尬！」");
	say();
	goto labelFunc0489_01E7;
labelFunc0489_01E3:
	message("「這島上的紳士對女人的品味有個怪癖。他們無法拒絕任何戴著花的女人。如果你沒有戴花，他們只會忽略你！」");
	say();
labelFunc0489_01E7:
	message("「你肯定想買一些吧？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0489_0274;
	message("「一束花要 12 枚金幣。你還有興趣嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0489_0267;
	var000B = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000B >= 0x000C)) goto labelFunc0489_0260;
	var000C = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	if (!var000C) goto labelFunc0489_0259;
	message("「這束花是你的了！」");
	say();
	var000D = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0489_025D;
labelFunc0489_0259:
	message("「你的手太滿了，拿不下這束花！」");
	say();
labelFunc0489_025D:
	goto labelFunc0489_0264;
labelFunc0489_0260:
	message("「你沒有錢買花。但別灰心，只要你買得起，我還是會賣的。」");
	say();
labelFunc0489_0264:
	goto labelFunc0489_0271;
labelFunc0489_0267:
	message("「也許下次吧，");
	message(var0001);
	message("，」他笑著回答。");
	say();
labelFunc0489_0271:
	goto labelFunc0489_0278;
labelFunc0489_0274:
	message("「那也許下次吧。」");
	say();
labelFunc0489_0278:
	goto labelFunc0489_027F;
labelFunc0489_027B:
	message("「恐怕我的店現在關門了，但如果你在營業時間回來，我會為你明顯的花卉緊急情況提供解決方案。」");
	say();
labelFunc0489_027F:
	UI_remove_answer("購買");
labelFunc0489_0286:
	case "陌生人" attend labelFunc0489_029D:
	message("「這島上有三個陌生人是在船難中被沖上岸的。也許你會遇見他們。」");
	say();
	UI_remove_answer("陌生人");
	gflags[0x0180] = true;
labelFunc0489_029D:
	case "吊飾盒" attend labelFunc0489_02B0:
	message("「是的，我看到 Henry 拿著那個吊飾盒走過我的店，在找 Constance 。那一定是在他從 Katrina 那裡收到它後沒多久。我記得這件事，因為我給了他一朵花讓他送給 Constance 。可憐的傢伙，等他找到她時，那是他唯一能給她的東西了。」");
	say();
	UI_remove_answer("吊飾盒");
labelFunc0489_02B0:
	case "Robin" attend labelFunc0489_02C3:
	message("「唉呀，他聽起來像是那三個陌生人之一！我見過他。他說話的樣子好像想買些花，但他卻直接走開了。後來我發現我的花車上少了一束花。那個無賴肯定把它們偷走了！」");
	say();
	UI_remove_answer("Robin");
labelFunc0489_02C3:
	case "Battles" attend labelFunc0489_02D6:
	message("「他一定是我們島上那些遇船難的訪客之一。是的，當他們三個走到我的花車前時，他瞪了我一眼，讓我背脊發涼。我盡力忽略他。我絕對痛恨暴力。」");
	say();
	UI_remove_answer("Battles");
labelFunc0489_02D6:
	case "Leavell" attend labelFunc0489_02E9:
	message("「原來那就是我們不速之客其中之一的名字！稍早他們三個來到我的花車時，他跟我說話時非常友善，但我看穿了他。他提到注意到了 Constance ，但其他人示意他安靜。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0489_02E9:
	case "New Magincia" attend labelFunc0489_02FC:
	message("「我不是在這裡出生的。我年輕時來到這裡。我的父親是個貴族，他更感興趣的是我數金幣，而不是致力於學習。有一段時間我在世界各地旅行，直到我落腳在這裡。這是一個與 Britannia 其他地方都不同的特別之地。所以當你在這裡時，請幫我們好好照顧它。」");
	say();
	UI_remove_answer("New Magincia");
labelFunc0489_02FC:
	case "告辭" attend labelFunc0489_0307:
	goto labelFunc0489_030A;
labelFunc0489_0307:
	goto labelFunc0489_00C6;
labelFunc0489_030A:
	endconv;
	message("「享受你的生活吧，朋友。」*");
	say();
labelFunc0489_030F:
	if (!(event == 0x0000)) goto labelFunc0489_0396;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF77));
	var000E = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0489_0390;
	if (!(var000E == 0x0001)) goto labelFunc0489_0353;
	var000F = "@美麗的花朵！@";
labelFunc0489_0353:
	if (!(var000E == 0x0002)) goto labelFunc0489_0363;
	var000F = "@我有漂亮的花！@";
labelFunc0489_0363:
	if (!(var000E == 0x0003)) goto labelFunc0489_0373;
	var000F = "@誰來買這些可愛的花？@";
labelFunc0489_0373:
	if (!(var000E == 0x0004)) goto labelFunc0489_0383;
	var000F = "@你需要美麗的花朵！@";
labelFunc0489_0383:
	UI_item_say(0xFF77, var000F);
	goto labelFunc0489_0396;
labelFunc0489_0390:
	Func092E(0xFF77);
labelFunc0489_0396:
	return;
}


