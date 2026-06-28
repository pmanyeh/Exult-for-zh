#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A6 object#(0x4A6) ()
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

	if (!(event == 0x0001)) goto labelFunc04A6_0301;
	UI_show_npc_face(0xFF5A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF5A));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0212] && (!gflags[0x0218]))) goto labelFunc04A6_0056;
	UI_add_answer("小偷");
labelFunc04A6_0056:
	if (!gflags[0x021A]) goto labelFunc04A6_006A;
	if (!(!gflags[0x021D])) goto labelFunc04A6_006A;
	UI_add_answer("送货");
labelFunc04A6_006A:
	if (!gflags[0x021B]) goto labelFunc04A6_0077;
	UI_add_answer("Polly");
labelFunc04A6_0077:
	if (!(!gflags[0x021F])) goto labelFunc04A6_0089;
	message("「你看到一个因为一天辛勤工作而浑身是汗的男人。」");
	say();
	gflags[0x021F] = true;
	goto labelFunc04A6_0093;
labelFunc04A6_0089:
	message("「你好，");
	message(var0000);
	message("～」Thurston 说。");
	say();
labelFunc04A6_0093:
	converse attend labelFunc04A6_02F6;
	case "姓名" attend labelFunc04A6_00A9:
	message("「我是 Thurston。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A6_00A9:
	case "职业" attend labelFunc04A6_00C2:
	message("「我在 Paws 这里经营磨坊。」");
	say();
	UI_add_answer(["磨坊", "Paws"]);
labelFunc04A6_00C2:
	case "磨坊" attend labelFunc04A6_00E2:
	message("「当地经济依赖磨坊提供面粉。所以我确保磨坊运转。有时候，我觉得保持轮子转动是活着的唯一理由。」");
	say();
	UI_add_answer(["面粉", "活着的理由"]);
	UI_remove_answer("磨坊");
labelFunc04A6_00E2:
	case "面粉" attend labelFunc04A6_0197:
	if (!(var0002 == 0x0007)) goto labelFunc04A6_018C;
	message("「一袋要价 12 枚金币。你有兴趣买一些吗？」");
	say();
	if (!Func090A()) goto labelFunc04A6_017F;
labelFunc04A6_00FE:
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x000C)) goto labelFunc04A6_0172;
	var0005 = UI_add_party_items(0x0001, 0x035F, 0xFE99, 0x000E, true);
	if (!var0005) goto labelFunc04A6_016B;
	var0006 = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc04A6_0168;
	message("「给你，」他说着，把袋子递给你。「你还想要一袋吗？」*");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04A6_0165;
	goto labelFunc04A6_00FE;
	goto labelFunc04A6_0168;
labelFunc04A6_0165:
	goto labelFunc04A6_02F6;
labelFunc04A6_0168:
	goto labelFunc04A6_016F;
labelFunc04A6_016B:
	message("「你没有空间放这个袋子了。」");
	say();
labelFunc04A6_016F:
	goto labelFunc04A6_017C;
labelFunc04A6_0172:
	message("「你没有足够的金币买这个，");
	message(var0000);
	message("。也许下次吧。」");
	say();
labelFunc04A6_017C:
	goto labelFunc04A6_0189;
labelFunc04A6_017F:
	message("「也许下次，");
	message(var0000);
	message("。」");
	say();
labelFunc04A6_0189:
	goto labelFunc04A6_0190;
labelFunc04A6_018C:
	message("「磨坊目前关闭了。如果你愿意等它重新开张时再来，我很乐意卖给你所有你能拿得动的面粉。」");
	say();
labelFunc04A6_0190:
	UI_remove_answer("面粉");
labelFunc04A6_0197:
	case "Paws" attend labelFunc04A6_01B8:
	message("「如果你没注意到，住在这儿的人没有他们住在不列颠城的亲戚那么富裕。事实上，我们最近甚至发生了一起窃盗案。」");
	say();
	UI_remove_answer("Paws");
	if (!(!gflags[0x0218])) goto labelFunc04A6_01B8;
	UI_add_answer("窃盗案");
labelFunc04A6_01B8:
	case "小偷", "窃盗案" attend labelFunc04A6_01E5:
	message("「的确，你应该小心，");
	message(var0000);
	message("。这镇上有个小偷！一位名叫 Morfin 的商人，被偷了几瓶珍贵的银蛇毒液。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer(["窃盗案", "小偷"]);
	UI_add_answer("蛇毒");
labelFunc04A6_01E5:
	case "蛇毒" attend labelFunc04A6_01F8:
	message("「它是从银蛇身上取得的。我相信在过去，石像鬼习惯性地使用它。我不太确定它对人类会有什么影响。也许 Morfin 可以告诉你更多。」");
	say();
	UI_remove_answer("蛇毒");
labelFunc04A6_01F8:
	case "送货" attend labelFunc04A6_025B:
	if (!gflags[0x021D]) goto labelFunc04A6_020D;
	message("「我已经付过你一次送货费了。我不会再付一次的。」");
	say();
	goto labelFunc04A6_0254;
labelFunc04A6_020D:
	var0008 = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc04A6_0250;
	message("「你把袋子交给 Thurston。他打开它，把手伸进去。他的手拿出来时抓满了小麦。他用手指筛了筛。『我知道 Camille 经营农场经常很忙。谢谢你帮忙送货。』」");
	say();
	var0009 = UI_add_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04A6_024D;
	message("「这应该能补偿你的辛劳。」他递给你十枚金币。");
	say();
	gflags[0x021D] = true;
labelFunc04A6_024D:
	goto labelFunc04A6_0254;
labelFunc04A6_0250:
	message("「这真是个谜！Camille 答应今天某个时候送小麦给我，而且已经晚了。我想知道它会在哪里。」");
	say();
labelFunc04A6_0254:
	UI_remove_answer("送货");
labelFunc04A6_025B:
	case "活着的理由" attend labelFunc04A6_027B:
	message("「我没有妻子或家人。我曾经考虑过加入友谊会，但我拒绝了。我除了工作，就只有偶尔在 Salty Dog 喝杯酒。」");
	say();
	UI_remove_answer("活着的理由");
	UI_add_answer(["友谊会", "老海狗酒馆"]);
labelFunc04A6_027B:
	case "友谊会" attend labelFunc04A6_029E:
	message("「我知道他们在镇上做了很好的工作，但他们身上就是有些东西让我感到不舒服。」");
	say();
	if (!var0003) goto labelFunc04A6_0297;
	message("「他注意到你的友谊会徽章，急忙清了清嗓子。『无意冒犯，");
	message(var0000);
	message("。」");
	say();
labelFunc04A6_0297:
	UI_remove_answer("友谊会");
labelFunc04A6_029E:
	case "老海狗酒馆" attend labelFunc04A6_02C3:
	if (!(!gflags[0x0216])) goto labelFunc04A6_02B8;
	message("「说实话，我去那里更多是为了靠近旅馆老板 Polly，而不是为了喝酒。但我肯定她总是在忙着照顾酒吧，没有时间理我。」");
	say();
	gflags[0x0216] = true;
	goto labelFunc04A6_02BC;
labelFunc04A6_02B8:
	message("「我应该去 Salty Dog 看看 Polly。」Thurston 茫然地盯着半空几秒钟，他的眼睛睁得大大的，脸上带着痴情的表情。突然，他回过神来。「对不起，你刚才说什么？」");
	say();
labelFunc04A6_02BC:
	UI_remove_answer("老海狗酒馆");
labelFunc04A6_02C3:
	case "Polly" attend labelFunc04A6_02E8:
	if (!(!gflags[0x0231])) goto labelFunc04A6_02DD;
	message("「你向 Thurston 转述了 Polly 对他说的话。他带着惊喜的表情看着你。『Polly 真的这么说吗？！她认为我对她来说太好了，这太荒谬了！』突然他忘记了工作，兴奋地四处走动。『多年来我一直远远地爱着这个女人。我会立刻开始追求她！』」");
	say();
	gflags[0x0231] = true;
	goto labelFunc04A6_02E1;
labelFunc04A6_02DD:
	message("「我想感谢你告诉我关于 Polly 对我感觉的真相。我一直经营这个该死的磨坊，真是个死脑筋，如果她背上贴着告示，我可能也永远不会注意到！这正是我开始享受生活所需要的帮助！」");
	say();
labelFunc04A6_02E1:
	UI_remove_answer("Polly");
labelFunc04A6_02E8:
	case "告辞" attend labelFunc04A6_02F3:
	goto labelFunc04A6_02F6;
labelFunc04A6_02F3:
	goto labelFunc04A6_0093;
labelFunc04A6_02F6:
	endconv;
	message("「祝你有个美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc04A6_0301:
	if (!(event == 0x0000)) goto labelFunc04A6_030F;
	Func092E(0xFF5A);
labelFunc04A6_030F:
	return;
}


