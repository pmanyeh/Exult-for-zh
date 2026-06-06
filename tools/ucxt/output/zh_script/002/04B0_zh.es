#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B0 object#(0x4B0) ()
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

	if (!(event == 0x0001)) goto labelFunc04B0_033D;
	UI_show_npc_face(0xFF50, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF50));
	var0003 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0212]) goto labelFunc04B0_004E;
	UI_add_answer("小偷");
labelFunc04B0_004E:
	if (!gflags[0x0218]) goto labelFunc04B0_0062;
	UI_remove_answer("小偷");
	UI_add_answer("竊盜案解決");
labelFunc04B0_0062:
	if (!(!gflags[0x0229])) goto labelFunc04B0_0074;
	message("「你看到一個開朗英俊的年輕人，當你靠近時，他向你友善地揮手。」");
	say();
	gflags[0x0229] = true;
	goto labelFunc04B0_007E;
labelFunc04B0_0074:
	message("「你好，");
	message(var0000);
	message("。」Andrew 說。");
	say();
labelFunc04B0_007E:
	converse attend labelFunc04B0_0332;
	case "姓名" attend labelFunc04B0_009A:
	message("「我的名字是 Andrew。你好嗎，");
	message(var0000);
	message("？」");
	say();
	UI_remove_answer("姓名");
labelFunc04B0_009A:
	case "職業" attend labelFunc04B0_00B3:
	message("「我是 Paws 這裡乳製品廠的所有者和經營者。」");
	say();
	UI_add_answer(["乳製品廠", "Paws"]);
labelFunc04B0_00B3:
	case "乳製品廠" attend labelFunc04B0_00D9:
	message("「是的，我賣牛奶和起司。你可以在 Camille 的農場和屠宰場之間找到乳製品廠。」");
	say();
	UI_remove_answer("乳製品廠");
	UI_add_answer(["Camille", "屠宰場", "牛奶", "起司"]);
labelFunc04B0_00D9:
	case "牛奶" attend labelFunc04B0_0185:
	if (!(var0002 == 0x0007)) goto labelFunc04B0_017A;
	message("「一加侖要花你 3 枚金幣。你有興趣買一些嗎？」");
	say();
	if (!Func090A()) goto labelFunc04B0_016D;
labelFunc04B0_00F5:
	var0004 = UI_remove_party_items(0x0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04B0_0160;
	var0005 = UI_add_party_items(0x0001, 0x0268, 0xFE99, 0x0007, true);
	if (!var0005) goto labelFunc04B0_0145;
	message("「『在這裡，』他說著，把罐子遞給你。『你還想要一罐嗎？』」*");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04B0_013F;
	goto labelFunc04B0_00F5;
	goto labelFunc04B0_0142;
labelFunc04B0_013F:
	goto labelFunc04B0_0332;
labelFunc04B0_0142:
	goto labelFunc04B0_015D;
labelFunc04B0_0145:
	message("「你沒有空間放罐子了。」");
	say();
	var0007 = UI_add_party_items(0x0003, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04B0_015D:
	goto labelFunc04B0_016A;
labelFunc04B0_0160:
	message("「你沒有足夠的金幣買這個，");
	message(var0000);
	message("。也許下次吧。」");
	say();
labelFunc04B0_016A:
	goto labelFunc04B0_0177;
labelFunc04B0_016D:
	message("「也許下次吧，");
	message(var0000);
	message("。」");
	say();
labelFunc04B0_0177:
	goto labelFunc04B0_017E;
labelFunc04B0_017A:
	message("「我很樂意賣給你一罐牛奶，但乳製品廠現在打烊了。」");
	say();
labelFunc04B0_017E:
	UI_remove_answer("牛奶");
labelFunc04B0_0185:
	case "起司" attend labelFunc04B0_0240:
	if (!(var0002 == 0x0007)) goto labelFunc04B0_0235;
	message("「我賣一塊 2 枚金幣。還有興趣嗎？」");
	say();
	if (!Func090A()) goto labelFunc04B0_0228;
	message("「你想要多少？」");
	say();
	var0008 = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var0009 = (var0008 * 0x0002);
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A >= var0009)) goto labelFunc04B0_021B;
	var000B = UI_add_party_items(var0008, 0x0179, 0xFE99, 0x001B, true);
	if (!var000B) goto labelFunc04B0_0214;
	message("「在這裡。」");
	say();
	var000C = UI_remove_party_items(var0009, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04B0_0218;
labelFunc04B0_0214:
	message("「你沒有空間放這個起司了。」");
	say();
labelFunc04B0_0218:
	goto labelFunc04B0_0225;
labelFunc04B0_021B:
	message("「你沒有足夠的金幣買這個，");
	message(var0000);
	message("。也許看看別的。」");
	say();
labelFunc04B0_0225:
	goto labelFunc04B0_0232;
labelFunc04B0_0228:
	message("「我了解，");
	message(var0000);
	message("。也許等你比較餓的時候再說。」");
	say();
labelFunc04B0_0232:
	goto labelFunc04B0_0239;
labelFunc04B0_0235:
	message("「我很樂意賣給你一些起司，但乳製品廠現在打烊了。」");
	say();
labelFunc04B0_0239:
	UI_remove_answer("起司");
labelFunc04B0_0240:
	case "Camille" attend labelFunc04B0_025A:
	message("「Camille 是個好女人。她仍然是舊美德的擁護者。她自己經營農場。嗯，還有她兒子 Tobias 的幫忙。」");
	say();
	UI_remove_answer("Camille");
	UI_add_answer("Tobias");
labelFunc04B0_025A:
	case "Tobias" attend labelFunc04B0_026D:
	message("「一個防備心相當重的年輕小伙子，我不能說我對他有多了解。」");
	say();
	UI_remove_answer("Tobias");
labelFunc04B0_026D:
	case "Paws" attend labelFunc04B0_0280:
	message("「當然，大家都在為了丟失毒液這件事而憤憤不平。」");
	say();
	UI_remove_answer("Paws");
labelFunc04B0_0280:
	case "毒液" attend labelFunc04B0_0293:
	message("「它可能被藏在任何地方。這鎮上有那麼多交易在進行，要藏起來很容易。我對那物質不太了解。也許 Morfin 本人會知道它會產生什麼樣的影響。」");
	say();
	UI_remove_answer("毒液");
labelFunc04B0_0293:
	case "小偷" attend labelFunc04B0_02BF:
	message("「當心點，這鎮上有個小偷！Morfin 被偷了一些銀蛇毒液。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
	UI_add_answer("毒液");
	if (!(!var0003)) goto labelFunc04B0_02BF;
	UI_add_answer("Morfin");
labelFunc04B0_02BF:
	case "竊盜案解決" attend labelFunc04B0_02D2:
	message("「你找到了罪犯，讓我們鎮上的人鬆了一口氣！」");
	say();
	UI_remove_answer("竊盜案解決");
labelFunc04B0_02D2:
	case "屠宰場" attend labelFunc04B0_02F3:
	message("「屠宰場是商人 Morfin 經營的。他總是很忙，隨時都在進進出出，有時候還搬著東西。」");
	say();
	UI_remove_answer("屠宰場");
	if (!(!var0003)) goto labelFunc04B0_02F3;
	UI_add_answer("Morfin");
labelFunc04B0_02F3:
	case "Morfin" attend labelFunc04B0_0311:
	message("「他幾年前買下了屠宰場，就在他加入友誼會後不久。我認識前任老闆。」");
	say();
	UI_remove_answer("Morfin");
	UI_add_answer("前任老闆");
	var0003 = true;
labelFunc04B0_0311:
	case "前任老闆" attend labelFunc04B0_0324:
	message("「我第一次看到那間舊屠宰場時還是個小伙子。以前的老闆還帶我看過裡面的儲藏室一次。那扇門是鎖著的。我想 Morfin 把鑰匙放在他家裡的某個地方。」");
	say();
	UI_remove_answer("前任老闆");
labelFunc04B0_0324:
	case "告辭" attend labelFunc04B0_032F:
	goto labelFunc04B0_0332;
labelFunc04B0_032F:
	goto labelFunc04B0_007E;
labelFunc04B0_0332:
	endconv;
	message("「希望我對你有些幫助，");
	message(var0000);
	message(".\"*");
	say();
labelFunc04B0_033D:
	if (!(event == 0x0000)) goto labelFunc04B0_034B;
	Func092E(0xFF50);
labelFunc04B0_034B:
	return;
}


