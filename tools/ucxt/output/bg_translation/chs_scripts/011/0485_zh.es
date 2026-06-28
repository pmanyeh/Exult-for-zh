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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0180]) goto labelFunc0485_0062;
	UI_add_answer("陌生人");
labelFunc0485_0062:
	if (!gflags[0x0184]) goto labelFunc0485_006F;
	UI_add_answer("无赖");
labelFunc0485_006F:
	if (!gflags[0x01CD]) goto labelFunc0485_007C;
	UI_add_answer("找到吊饰盒");
labelFunc0485_007C:
	if (!(!gflags[0x018E])) goto labelFunc0485_008E;
	message("你看到一位宛如天使般的年轻女子，她对你露出完全天真无邪的微笑。");
	say();
	gflags[0x018E] = true;
	goto labelFunc0485_0098;
labelFunc0485_008E:
	message("「");
	message(var0000);
	message("！」Constance 睁大眼睛说，「我能为你做什么吗？」");
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
	case "职业" attend labelFunc0485_00CD:
	message("「我将谦卑之井的水送到 New Magincia 的每户人家。」");
	say();
	UI_add_answer(["谦卑之井", "New Magincia"]);
labelFunc0485_00CD:
	case "谦卑之井" attend labelFunc0485_01A6:
	message("「井水纯净清凉。如果你愿意，我倒一些给你。」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0485_019B;
	message("Constance 带着大大的微笑，拿着水勺浸入水桶清凉的水中。她舀出水，把水勺递给你。你喝了下去，觉得水很好喝，非常提神。");
	say();
	if (!var0002) goto labelFunc0485_010E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「其实我也觉得很渴。我也能喝点吗？」Constance 点点头，递给他一勺水。他大口大口地喝了起来，发出咕噜咕噜的声音。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_010E:
	if (!var0001) goto labelFunc0485_0133;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我也觉得口干舌燥。女士，妳愿意分一点水给我吗？」Constance 为 Shamino 舀了一勺水，他喝得水都流到下巴了。*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0133:
	if (!var0003) goto labelFunc0485_0173;
	if (!var0001) goto labelFunc0485_0173;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("你看到 Shamino 碰了碰 Dupre 。「你不喝一点吗？」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我还是等我们找到比水更『够劲』的东西再来解渴吧。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0173:
	if (!var0004) goto labelFunc0485_0198;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Constance 递给 Spark 一勺满满的水。他长长地啜了一口，一饮而尽。喝完后，他打了个嗝。他尴尬地咧嘴一笑，带着歉意向 Constance 鞠躬，然后把水勺还给她。");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0198:
	goto labelFunc0485_019F;
labelFunc0485_019B:
	message("「如果你改变主意，只要告诉我一声就行了。」");
	say();
labelFunc0485_019F:
	UI_remove_answer("谦卑之井");
labelFunc0485_01A6:
	case "陌生人" attend labelFunc0485_01C4:
	message("「岛上有三个陌生人！他们在这里遭遇了船难！我见过他们。他们的领袖名叫 Robin 。」");
	say();
	UI_add_answer("Robin");
	UI_remove_answer("陌生人");
	gflags[0x0180] = true;
labelFunc0485_01C4:
	case "New Magincia" attend labelFunc0485_01DE:
	message("「我在 New Magincia 出生，一辈子都住在这里。但现在我想离开，因为我的心碎了。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer("心");
labelFunc0485_01DE:
	case "心" attend labelFunc0485_0206:
	if (!(!gflags[0x0184])) goto labelFunc0485_01FB;
	message("「我曾经爱过小贩 Henry ，但后来我得知他是个骗子，也是个无赖。也许很快我的心就会属于别人。」");
	say();
	UI_add_answer("别人");
	goto labelFunc0485_01FF;
labelFunc0485_01FB:
	message("你告诉 Constance 关于 Robin 对她的计划。她震惊地看着你。「非常感谢。我现在知道我真正的归宿是和 Henry 在一起。」");
	say();
labelFunc0485_01FF:
	UI_remove_answer("心");
labelFunc0485_0206:
	case "找到吊饰盒" attend labelFunc0485_024C:
	message("你告诉 Constance 你是如何归还从 Henry 那里被偷走的吊饰盒。「喔，我怎么能怀疑我亲爱的 Henry 呢？」她皱起眉头。「谢谢你告诉我真相。」");
	say();
	if (!var0005) goto labelFunc0485_0245;
	UI_show_npc_face(0xFF7C, 0x0000);
	message("「Constance ，我很抱歉事情变得这么糟，但如果妳愿意，我希望妳收下这个吊饰盒，作为我爱情的信物。」*");
	say();
	UI_show_npc_face(0xFF7B, 0x0000);
	message("「我亲爱的 Henry ，我的心只属于你。」*");
	say();
	UI_remove_npc_face(0xFF7C);
	UI_show_npc_face(0xFF7B, 0x0000);
labelFunc0485_0245:
	UI_remove_answer("找到吊饰盒");
labelFunc0485_024C:
	case "别人" attend labelFunc0485_0266:
	message("「岛上有个迷人又神秘的陌生人，名叫 Robin 。他说有一天他会带我去看世界，买很多好东西给我。」Constance 叹了口气。「他甚至送了我一些漂亮的花。」");
	say();
	UI_remove_answer("别人");
	UI_add_answer("Robin");
labelFunc0485_0266:
	case "Robin" attend labelFunc0485_0286:
	message("「他是个有钱人，他的两个朋友是高大强壮的男人。他们一直跟我说一个听起来很棒的地方，叫海盗巢穴 (Buccaneer's Den)。」");
	say();
	UI_remove_answer("Robin");
	UI_add_answer(["朋友", "海盗巢穴"]);
labelFunc0485_0286:
	case "朋友" attend labelFunc0485_02A6:
	message("「他们的名字是 Battles 和 Leavell 。他们两人都像真正的绅士一样对待我。」");
	say();
	UI_remove_answer("朋友");
	UI_add_answer(["Battles", "Leavell"]);
labelFunc0485_02A6:
	case "海盗巢穴" attend labelFunc0485_02C6:
	message("「海盗巢穴 (Buccaneer's Den) 一定是个仙境。那里有一个会给你钱的纺车！你能想像吗！还有富丽堂皇、奢华的浴池。」");
	say();
	UI_remove_answer("海盗巢穴");
	UI_add_answer(["纺车", "浴池"]);
labelFunc0485_02C6:
	case "Battles" attend labelFunc0485_02D9:
	message("「Battles 起初很安静。我以为他看起来很凶，但一旦你认识他，会发现他人很好。他告诉我他对抗过各种怪物，还有他在南海劫掠船只的刺激故事。」");
	say();
	UI_remove_answer("Battles");
labelFunc0485_02D9:
	case "Leavell" attend labelFunc0485_02EC:
	message("「Leavell 迷人又风趣。他总能让我笑。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0485_02EC:
	case "纺车" attend labelFunc0485_02FF:
	message("「嗯， New Magincia 绝对没有那种东西。我以前甚至从没听说过那种事！」");
	say();
	UI_remove_answer("纺车");
labelFunc0485_02FF:
	case "浴池" attend labelFunc0485_0312:
	message("「听起来不是很棒吗？」");
	say();
	UI_remove_answer("浴池");
labelFunc0485_0312:
	case "无赖" attend labelFunc0485_0325:
	message("你温和地向 Constance 解释， Robin 、 Battles 和 Leavell 是无赖，意图对她造成极大的伤害。她非常震惊。然后你解释说他们不会再找她麻烦了。她向你道谢。");
	say();
	UI_remove_answer("无赖");
labelFunc0485_0325:
	case "告辞" attend labelFunc0485_0330:
	goto labelFunc0485_0333;
labelFunc0485_0330:
	goto labelFunc0485_0098;
labelFunc0485_0333:
	endconv;
	message("「很高兴能和你说话，");
	message(var0000);
	message("。」*");
	say();
labelFunc0485_033E:
	if (!(event == 0x0000)) goto labelFunc0485_034C;
	Func092E(0xFF7B);
labelFunc0485_034C:
	return;
}


