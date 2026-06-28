#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04AD object#(0x4AD) ()
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
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!(event == 0x0001)) goto labelFunc04AD_0357;
	UI_show_npc_face(0xFF53, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF53));
	var0003 = UI_find_nearest(0xFE9C, 0x0347, 0xFFFF);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0226])) goto labelFunc04AD_005F;
	message("「你看到一位老妇人，她对你露出祖母般甜美的微笑。你可以立刻看出她的视力很差。」");
	say();
	gflags[0x0226] = true;
	goto labelFunc04AD_0069;
labelFunc04AD_005F:
	message("「哎呀，又见面了，");
	message(var0000);
	message("。见到你真好！」Beverlea 说。");
	say();
labelFunc04AD_0069:
	converse attend labelFunc04AD_034C;
	case "姓名" attend labelFunc04AD_007F:
	message("「我的名字是 Beverlea。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AD_007F:
	case "职业" attend labelFunc04AD_0098:
	message("「哎呀，我在 Paws 这里经营杂货铺。」");
	say();
	UI_add_answer(["杂货铺", "Paws"]);
labelFunc04AD_0098:
	case "杂货铺" attend labelFunc04AD_00B2:
	message("「这是一间卖古董和二手物品的杂货铺。经营这家商店让我保持年轻和活力。能把东西卖给镇上那些原本买不起的穷人，令人感到欣慰。」");
	say();
	UI_remove_answer("杂货铺");
	UI_add_answer("买东西");
labelFunc04AD_00B2:
	case "Paws" attend labelFunc04AD_00C5:
	message("「在 Paws 这里，人们虽然没什么钱，但这不重要，因为他们彼此关心。」");
	say();
	UI_remove_answer("Paws");
labelFunc04AD_00C5:
	case "买东西" attend labelFunc04AD_00F0:
	if (!(var0002 == 0x0007)) goto labelFunc04AD_00E5;
	message("「在我的店里可以买到许多稀有精美的东西。全不列颠尼亚其他地方都找不到的便宜货。」");
	say();
	UI_add_answer("许多精美的东西");
	goto labelFunc04AD_00E9;
labelFunc04AD_00E5:
	message("「我的店现在打烊了。我通常在下午营业。」");
	say();
labelFunc04AD_00E9:
	UI_remove_answer("买东西");
labelFunc04AD_00F0:
	case "许多精美的东西" attend labelFunc04AD_011F:
	message("「让我想想……有一个摇篮要卖。一匹摇马。一个铃铛。一个沙漏。一个痰盂。一把鲁特琴。一个六分仪……既然我最近动作慢了点，我就让客人自己帮忙，拿走他们买的东西。当然，前提是他们先付钱。我信任大家会付给我正确的金额。恐怕我几乎快瞎了。」");
	say();
	UI_remove_answer("许多精美的东西");
	UI_add_answer(["摇篮", "摇马", "铃铛", "沙漏", "痰盂", "鲁特琴", "六分仪"]);
labelFunc04AD_011F:
	case "摇篮" attend labelFunc04AD_016A:
	message("「那个旧摇篮是野蛮人 Gorn 还是个婴儿时，晚上用来摇他入睡的摇篮。你可以看到它侧边有条裂缝，这证明 Gorn 从小就是个强壮的小家伙。我可以让你用十枚金币买走。你想买这个摇篮吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04AD_015F;
	var0005 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04AD_0158;
	message("「那你拿走吧。希望你喜欢。」");
	say();
	goto labelFunc04AD_015C;
labelFunc04AD_0158:
	message("「你没有足够的金币！」");
	say();
labelFunc04AD_015C:
	goto labelFunc04AD_0163;
labelFunc04AD_015F:
	message("「Beverlea 脸上闪过一丝不悦的表情。『很好。或许我能让你对其他东西感兴趣。』」");
	say();
labelFunc04AD_0163:
	UI_remove_answer("摇篮");
labelFunc04AD_016A:
	case "摇马" attend labelFunc04AD_01B5:
	message("「这匹摇马曾经属于一位名叫 Diane 的不列颠城小女孩。她长大后成为了骑术最精湛的马术家之一。我可以让你用十二枚金币买下这件稀有而不寻常的物品。你想买吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04AD_01AA;
	var0007 = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc04AD_01A3;
	message("「那你可以随意带走这匹摇马了。它是你的了！」");
	say();
	goto labelFunc04AD_01A7;
labelFunc04AD_01A3:
	message("「你没有足够的钱买它！」");
	say();
labelFunc04AD_01A7:
	goto labelFunc04AD_01AE;
labelFunc04AD_01AA:
	message("「Beverlea 翻了翻白眼。『我们只是想随便看看，是吗？慢慢看吧。』」");
	say();
labelFunc04AD_01AE:
	UI_remove_answer("摇马");
labelFunc04AD_01B5:
	case "铃铛" attend labelFunc04AD_0200:
	message("「那个铃铛来自 Yew 的高等法院。它是用来宣布开庭的。我可以用六枚金币把这个有趣的话题性物品卖给你。你想买吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04AD_01F5;
	var0009 = UI_remove_party_items(0x0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04AD_01EE;
	message("「你可以拿走你的铃铛。祝你健康地使用它！」");
	say();
	goto labelFunc04AD_01F2;
labelFunc04AD_01EE:
	message("「你没有足够的钱买它！」");
	say();
labelFunc04AD_01F2:
	goto labelFunc04AD_01F9;
labelFunc04AD_01F5:
	message("「今天不想买铃铛？』她皱起嘴唇，努力挤出一个微笑。『或许别的东西会合你的心意。』」");
	say();
labelFunc04AD_01F9:
	UI_remove_answer("铃铛");
labelFunc04AD_0200:
	case "沙漏" attend labelFunc04AD_025C:
	if (!var0003) goto labelFunc04AD_0251;
	message("「我还有一个古董沙漏。这是一个老头卖给我的，他老糊涂了，连怎么用都想不起来！我用 5 枚金币卖给你。你想买吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04AD_024A;
	var000B = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000B) goto labelFunc04AD_0243;
	message("「谢谢你。你可以拿走你的沙漏了。」");
	say();
	gflags[0x0211] = true;
	goto labelFunc04AD_0247;
labelFunc04AD_0243:
	message("「你没有足够的钱。」");
	say();
labelFunc04AD_0247:
	goto labelFunc04AD_024E;
labelFunc04AD_024A:
	message("「你对沙漏没兴趣？』她叹了口气，『很好。随便看看。我有的是时间。』你听出她语气中带着一丝讽刺。」");
	say();
labelFunc04AD_024E:
	goto labelFunc04AD_0255;
labelFunc04AD_0251:
	message("「诅咒我这颗老脑袋和衰退的记忆力！沙漏已经卖掉了吗？！不！一定是被偷了！这镇上少数不诚实的人一定把它拿走了！」");
	say();
labelFunc04AD_0255:
	UI_remove_answer("沙漏");
labelFunc04AD_025C:
	case "痰盂" attend labelFunc04AD_02A8:
	message("「我还有一个旧痰盂。它曾经被……很多人使用过。只要一枚金币你就可以带走它。拿走吧！拜托！」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc04AD_029D;
	var000D = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000D) goto labelFunc04AD_0295;
	message("「谢谢你！现在你可以走了，请别忘了离开时把它带走！」");
	say();
	goto labelFunc04AD_029A;
labelFunc04AD_0295:
	message("「你甚至连一枚金币都没有！也没有体面地告诉我，我和你说话是在浪费时间。」");
	say();
	abort;
labelFunc04AD_029A:
	goto labelFunc04AD_02A1;
labelFunc04AD_029D:
	message("「我店里还有很多东西。很多高品质且有价值的东西。请继续看。」");
	say();
labelFunc04AD_02A1:
	UI_remove_answer("痰盂");
labelFunc04AD_02A8:
	case "鲁特琴" attend labelFunc04AD_02F3:
	message("「我有一把鲁特琴要卖，它曾经属于一位吟游诗人，他在掷骰子游戏中输掉了它。我开价二十枚金币。一首歌的价值！你想买吗？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc04AD_02E8;
	var000F = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000F) goto labelFunc04AD_02E1;
	message("「谢谢你，亲爱的顾客。你可以拿走你的鲁特琴了。我看得出你是个懂得欣赏品质的真正艺术家。」");
	say();
	goto labelFunc04AD_02E5;
labelFunc04AD_02E1:
	message("「你买不起这把鲁特琴！」");
	say();
labelFunc04AD_02E5:
	goto labelFunc04AD_02EC;
labelFunc04AD_02E8:
	message("「那好吧。请继续看。毕竟，这就是我开店的目的。」你仿佛听到 Beverlea 还自言自语了一会儿......");
	say();
labelFunc04AD_02EC:
	UI_remove_answer("鲁特琴");
labelFunc04AD_02F3:
	case "六分仪" attend labelFunc04AD_033E:
	message("「我有一个 Minoc 世界知名造船匠 Owen 卖的六分仪。我听说他们打算为他建一座纪念碑。总之，卖给我的水手刚在海上经历了一些可怕的经验。他卖给我的时候说他打算退休了。他显然没有意识到这件物品的价值。但我可以让你用 20 枚金币买下它。你想买吗？」");
	say();
	var0010 = Func090A();
	if (!var0010) goto labelFunc04AD_0333;
	var0011 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0011) goto labelFunc04AD_032C;
	message("「你可以拿走你的六分仪了！愿你永远一帆风顺！」");
	say();
	goto labelFunc04AD_0330;
labelFunc04AD_032C:
	message("\"Thou dost not have enough money!\"");
	say();
labelFunc04AD_0330:
	goto labelFunc04AD_0337;
labelFunc04AD_0333:
	message("「我肯定我有一些你会感兴趣的东西。尽情地看吧。」");
	say();
labelFunc04AD_0337:
	UI_remove_answer("六分仪");
labelFunc04AD_033E:
	case "告辞" attend labelFunc04AD_0349:
	goto labelFunc04AD_034C;
labelFunc04AD_0349:
	goto labelFunc04AD_0069;
labelFunc04AD_034C:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message(".\" *");
	say();
labelFunc04AD_0357:
	if (!(event == 0x0000)) goto labelFunc04AD_03D7;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF53));
	if (!(var0002 == 0x0007)) goto labelFunc04AD_03D1;
	var0012 = UI_die_roll(0x0001, 0x0004);
	if (!(var0012 == 0x0001)) goto labelFunc04AD_0394;
	var0013 = "@古董？@";
labelFunc04AD_0394:
	if (!(var0012 == 0x0002)) goto labelFunc04AD_03A4;
	var0013 = "@古玩？小摆饰？@";
labelFunc04AD_03A4:
	if (!(var0012 == 0x0003)) goto labelFunc04AD_03B4;
	var0013 = "@小玩意儿？古董？@";
labelFunc04AD_03B4:
	if (!(var0012 == 0x0004)) goto labelFunc04AD_03C4;
	var0013 = "@收藏品？古董？@";
labelFunc04AD_03C4:
	UI_item_say(0xFF53, var0013);
	goto labelFunc04AD_03D7;
labelFunc04AD_03D1:
	Func092E(0xFF53);
labelFunc04AD_03D7:
	return;
}


