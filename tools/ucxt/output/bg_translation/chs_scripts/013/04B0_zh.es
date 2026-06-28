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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0212]) goto labelFunc04B0_004E;
	UI_add_answer("小偷");
labelFunc04B0_004E:
	if (!gflags[0x0218]) goto labelFunc04B0_0062;
	UI_remove_answer("小偷");
	UI_add_answer("窃盗案解决");
labelFunc04B0_0062:
	if (!(!gflags[0x0229])) goto labelFunc04B0_0074;
	message("「你看到一个开朗英俊的年轻人，当你靠近时，他向你友善地挥手。」");
	say();
	gflags[0x0229] = true;
	goto labelFunc04B0_007E;
labelFunc04B0_0074:
	message("「你好，");
	message(var0000);
	message("。」Andrew 说。");
	say();
labelFunc04B0_007E:
	converse attend labelFunc04B0_0332;
	case "姓名" attend labelFunc04B0_009A:
	message("「我的名字是 Andrew。你好吗，");
	message(var0000);
	message("？」");
	say();
	UI_remove_answer("姓名");
labelFunc04B0_009A:
	case "职业" attend labelFunc04B0_00B3:
	message("「我是 Paws 这里乳制品厂的所有者和经营者。」");
	say();
	UI_add_answer(["乳制品厂", "Paws"]);
labelFunc04B0_00B3:
	case "乳制品厂" attend labelFunc04B0_00D9:
	message("「是的，我卖牛奶和起司。你可以在 Camille 的农场和屠宰场之间找到乳制品厂。」");
	say();
	UI_remove_answer("乳制品厂");
	UI_add_answer(["Camille", "屠宰场", "牛奶", "起司"]);
labelFunc04B0_00D9:
	case "牛奶" attend labelFunc04B0_0185:
	if (!(var0002 == 0x0007)) goto labelFunc04B0_017A;
	message("「一加仑要花你 3 枚金币。你有兴趣买一些吗？」");
	say();
	if (!Func090A()) goto labelFunc04B0_016D;
labelFunc04B0_00F5:
	var0004 = UI_remove_party_items(0x0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04B0_0160;
	var0005 = UI_add_party_items(0x0001, 0x0268, 0xFE99, 0x0007, true);
	if (!var0005) goto labelFunc04B0_0145;
	message("「『在这里，』他说着，把罐子递给你。『你还想要一罐吗？』」*");
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
	message("「你没有空间放罐子了。」");
	say();
	var0007 = UI_add_party_items(0x0003, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04B0_015D:
	goto labelFunc04B0_016A;
labelFunc04B0_0160:
	message("「你没有足够的金币买这个，");
	message(var0000);
	message("。也许下次吧。」");
	say();
labelFunc04B0_016A:
	goto labelFunc04B0_0177;
labelFunc04B0_016D:
	message("「也许下次吧，");
	message(var0000);
	message("。」");
	say();
labelFunc04B0_0177:
	goto labelFunc04B0_017E;
labelFunc04B0_017A:
	message("「我很乐意卖给你一罐牛奶，但乳制品厂现在打烊了。」");
	say();
labelFunc04B0_017E:
	UI_remove_answer("牛奶");
labelFunc04B0_0185:
	case "起司" attend labelFunc04B0_0240:
	if (!(var0002 == 0x0007)) goto labelFunc04B0_0235;
	message("「我卖一块 2 枚金币。还有兴趣吗？」");
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
	message("「在这里。」");
	say();
	var000C = UI_remove_party_items(var0009, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04B0_0218;
labelFunc04B0_0214:
	message("「你没有空间放这个起司了。」");
	say();
labelFunc04B0_0218:
	goto labelFunc04B0_0225;
labelFunc04B0_021B:
	message("「你没有足够的金币买这个，");
	message(var0000);
	message("。也许看看别的。」");
	say();
labelFunc04B0_0225:
	goto labelFunc04B0_0232;
labelFunc04B0_0228:
	message("「我了解，");
	message(var0000);
	message("。也许等你比较饿的时候再说。」");
	say();
labelFunc04B0_0232:
	goto labelFunc04B0_0239;
labelFunc04B0_0235:
	message("「我很乐意卖给你一些起司，但乳制品厂现在打烊了。」");
	say();
labelFunc04B0_0239:
	UI_remove_answer("起司");
labelFunc04B0_0240:
	case "Camille" attend labelFunc04B0_025A:
	message("「Camille 是个好女人。她仍然是旧美德的拥护者。她自己经营农场。嗯，还有她儿子 Tobias 的帮忙。」");
	say();
	UI_remove_answer("Camille");
	UI_add_answer("Tobias");
labelFunc04B0_025A:
	case "Tobias" attend labelFunc04B0_026D:
	message("「一个防备心相当重的年轻小伙子，我不能说我对他有多了解。」");
	say();
	UI_remove_answer("Tobias");
labelFunc04B0_026D:
	case "Paws" attend labelFunc04B0_0280:
	message("「当然，大家都在为了丢失毒液这件事而愤愤不平。」");
	say();
	UI_remove_answer("Paws");
labelFunc04B0_0280:
	case "毒液" attend labelFunc04B0_0293:
	message("「它可能被藏在任何地方。这镇上有那么多交易在进行，要藏起来很容易。我对那物质不太了解。也许 Morfin 本人会知道它会产生什么样的影响。」");
	say();
	UI_remove_answer("毒液");
labelFunc04B0_0293:
	case "小偷" attend labelFunc04B0_02BF:
	message("「当心点，这镇上有个小偷！Morfin 被偷了一些银蛇毒液。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
	UI_add_answer("毒液");
	if (!(!var0003)) goto labelFunc04B0_02BF;
	UI_add_answer("Morfin");
labelFunc04B0_02BF:
	case "窃盗案解决" attend labelFunc04B0_02D2:
	message("「你找到了罪犯，让我们镇上的人松了一口气！」");
	say();
	UI_remove_answer("窃盗案解决");
labelFunc04B0_02D2:
	case "屠宰场" attend labelFunc04B0_02F3:
	message("「屠宰场是商人 Morfin 经营的。他总是很忙，随时都在进进出出，有时候还搬着东西。」");
	say();
	UI_remove_answer("屠宰场");
	if (!(!var0003)) goto labelFunc04B0_02F3;
	UI_add_answer("Morfin");
labelFunc04B0_02F3:
	case "Morfin" attend labelFunc04B0_0311:
	message("「他几年前买下了屠宰场，就在他加入友谊会后不久。我认识前任老板。」");
	say();
	UI_remove_answer("Morfin");
	UI_add_answer("前任老板");
	var0003 = true;
labelFunc04B0_0311:
	case "前任老板" attend labelFunc04B0_0324:
	message("「我第一次看到那间旧屠宰场时还是个小伙子。以前的老板还带我看过里面的储藏室一次。那扇门是锁着的。我想 Morfin 把钥匙放在他家里的某个地方。」");
	say();
	UI_remove_answer("前任老板");
labelFunc04B0_0324:
	case "告辞" attend labelFunc04B0_032F:
	goto labelFunc04B0_0332;
labelFunc04B0_032F:
	goto labelFunc04B0_007E;
labelFunc04B0_0332:
	endconv;
	message("「希望我对你有些帮助，");
	message(var0000);
	message(".\"*");
	say();
labelFunc04B0_033D:
	if (!(event == 0x0000)) goto labelFunc04B0_034B;
	Func092E(0xFF50);
labelFunc04B0_034B:
	return;
}


