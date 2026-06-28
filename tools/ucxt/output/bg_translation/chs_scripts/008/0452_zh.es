#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0452 object#(0x452) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0452_0230;
	UI_show_npc_face(0xFFAE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFAE));
	if (!(var0000 == 0x0007)) goto labelFunc0452_005E;
	if (!(!(var0001 == 0x0010))) goto labelFunc0452_003F;
	goto labelFunc0452_005E;
labelFunc0452_003F:
	var0002 = Func08FC(0xFFAE, 0xFFAF);
	if (!var0002) goto labelFunc0452_0059;
	message("Gregor 正专注于友谊会的会议中，现在无法交谈。*");
	say();
	abort;
	goto labelFunc0452_005E;
labelFunc0452_0059:
	message("「没时间闲聊了！我必须去参加友谊会会议！我迟到了！」*");
	say();
	abort;
labelFunc0452_005E:
	var0003 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0004 = Func08F7(0xFFAF);
	if (!var0004) goto labelFunc0452_009E;
	if (!(var0000 == 0x0000)) goto labelFunc0452_009E;
	if (!(var0001 == 0x0010)) goto labelFunc0452_009E;
	UI_add_answer("Elynor");
labelFunc0452_009E:
	if (!(!gflags[0x010D])) goto labelFunc0452_00B0;
	message("你看到一位老人，他那盛气凌人的性情与他年迈但硬朗的体格相符。");
	say();
	gflags[0x010D] = true;
	goto labelFunc0452_00B4;
labelFunc0452_00B0:
	message("「你是在跟我说话吗？」Gregor 皱着眉头。");
	say();
labelFunc0452_00B4:
	converse attend labelFunc0452_022B;
	case "姓名" attend labelFunc0452_00CA:
	message("「我的名字是 Gregor 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0452_00CA:
	case "职业" attend labelFunc0452_0101:
	if (!gflags[0x011F]) goto labelFunc0452_00EC;
	message("「我是不列颠尼亚矿业公司 Minoc 分部的负责人。」");
	say();
	UI_add_answer(["Minoc", "不列颠尼亚矿业公司"]);
	goto labelFunc0452_0101;
labelFunc0452_00EC:
	message("「你发烧了吗，");
	message(var0003);
	message("？你没意识到我们为什么聚集在这里吗？在这样的悲剧面前，你还能如此无动于衷，真是可耻！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc0452_0101:
	case "Minoc" attend labelFunc0452_0121:
	message("「我们的城镇是不列颠尼亚主要的贸易中心，这是一个社会变革的地方。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["贸易", "社会变革"]);
labelFunc0452_0121:
	case "不列颠尼亚矿业公司" attend labelFunc0452_0134:
	message("「不列颠尼亚矿业公司生产各种各样的矿物，这些矿物对于不列颠尼亚的持续发展至关重要。」");
	say();
	UI_remove_answer("不列颠尼亚矿业公司");
labelFunc0452_0134:
	case "贸易" attend labelFunc0452_015A:
	message("「在 Minoc 我们有不列颠尼亚最大的采矿场之一，一座锯木厂，一家旅店，艺术家公会，和一位造船匠。」");
	say();
	UI_add_answer(["锯木厂", "旅店", "艺术家公会", "造船匠"]);
	UI_remove_answer("贸易");
labelFunc0452_015A:
	case "社会变革" attend labelFunc0452_017A:
	message("「在 Minoc 这里，我们正在为优秀的造船匠 Owen 创建一座纪念碑，他是一位工艺大师，他的名字很快就会在整个不列颠尼亚闻名。我们还有一个非常活跃的友谊会分会。」");
	say();
	UI_remove_answer("社会变革");
	UI_add_answer(["纪念碑", "友谊会"]);
labelFunc0452_017A:
	case "锯木厂" attend labelFunc0452_018D:
	message("「一个历史悠久且利润丰厚的生意。可惜它将会因为在那里发生的谋杀案而变得更出名，而不是因为它所做的任何出色工作。」");
	say();
	UI_remove_answer("锯木厂");
labelFunc0452_018D:
	case "旅店" attend labelFunc0452_01A0:
	message("「 The Checquered Cork 以其质朴的特色和氛围而闻名。那是个好地方。不要被它表面上的不整洁给吓跑了。」");
	say();
	UI_remove_answer("旅店");
labelFunc0452_01A0:
	case "艺术家公会" attend labelFunc0452_01B3:
	message("「艺术家公会是一小群工匠聚集在一起贩售他们小饰品的地方。他们以作为当地对任何事物都持异议者而自豪。」");
	say();
	UI_remove_answer("艺术家公会");
labelFunc0452_01B3:
	case "造船匠" attend labelFunc0452_01C6:
	message("「我可能已经提到过造船匠 Owen 。他建造了有史以来最棒的船只。」");
	say();
	UI_remove_answer("造船匠");
labelFunc0452_01C6:
	case "纪念碑" attend labelFunc0452_01E4:
	message("「我协助与镇长 Burnside 一起筹划创建这座纪念碑。」");
	say();
	if (!(!gflags[0x00F7])) goto labelFunc0452_01DD;
	message("「它将会非常巨大，并用我们矿坑里最优质的矿石制成。」");
	say();
labelFunc0452_01DD:
	UI_remove_answer("纪念碑");
labelFunc0452_01E4:
	case "友谊会" attend labelFunc0452_01F7:
	message("「他们为 Minoc 做了无法估量的好事，帮助对抗在我们这样一个许多人都专注于金钱利益的城镇中可能发生的分裂。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0452_01F7:
	case "谋杀案" attend labelFunc0452_020A:
	message("「太可怕了！吉普赛人 Frederico 和 Tania 被发现陈尸在 William 的锯木厂里！」");
	say();
	UI_remove_answer("谋杀案");
labelFunc0452_020A:
	case "Elynor" attend labelFunc0452_021D:
	message("「别打扰我们，该死！ Elynor 和我相爱着，我们希望能单独在一起！去别处找你廉价的刺激吧！」");
	say();
	UI_remove_answer("Elynor");
labelFunc0452_021D:
	case "告辞" attend labelFunc0452_0228:
	goto labelFunc0452_022B;
labelFunc0452_0228:
	goto labelFunc0452_00B4;
labelFunc0452_022B:
	endconv;
	message("「那就上路吧。」*");
	say();
labelFunc0452_0230:
	if (!(event == 0x0000)) goto labelFunc0452_023E;
	Func092E(0xFFAE);
labelFunc0452_023E:
	return;
}


