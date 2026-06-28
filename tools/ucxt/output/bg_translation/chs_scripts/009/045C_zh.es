#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08DE 0x8DE ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045C object#(0x45C) ()
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

	if (!(event == 0x0001)) goto labelFunc045C_02F7;
	UI_show_npc_face(0xFFA4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA4));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x011F]) goto labelFunc045C_004A;
	UI_add_answer("谋杀");
labelFunc045C_004A:
	if (!gflags[0x0040]) goto labelFunc045C_0057;
	UI_add_answer("皇冠宝石号（Crown Jewel）");
labelFunc045C_0057:
	if (!gflags[0x0043]) goto labelFunc045C_0064;
	UI_add_answer("Hook");
labelFunc045C_0064:
	if (!(!gflags[0x0117])) goto labelFunc045C_0076;
	message("你看到一个神情疲惫、失去右臂的男人。他用单手抓了抓头，朝你的方向瞇起眼睛。");
	say();
	gflags[0x0117] = true;
	goto labelFunc045C_0080;
labelFunc045C_0076:
	message("「喂，你过得怎样，");
	message(var0000);
	message("？」Rutherford 呼唤着你。");
	say();
labelFunc045C_0080:
	converse attend labelFunc045C_02F2;
	case "姓名" attend labelFunc045C_0096:
	message("他发出一声尖锐的咳嗽来清喉咙。「我的名字是 Rutherford。很高兴认识你。」~~ 他伸出油腻的手要和你握手，直到你握住他才缩回。");
	say();
	UI_remove_answer("姓名");
labelFunc045C_0096:
	case "职业" attend labelFunc045C_0106:
	if (!gflags[0x011F]) goto labelFunc045C_00FE;
	message("「我可是 The Checquered Cork 的酒保。在 Minoc 讨论每天发生事件的最佳去处。」");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc045C_00E8;
	message("他对着刚才用来擦拭吧台的抹布咳嗽。");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc045C_00E8;
	message("「又见面了，Dupre 爵士！你这么喜欢我的店，所以又回来了吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我亲爱的 Rutherford，这并不是在影射 The Checquered Cork，我只是单纯喜欢好酒！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFA4, 0x0000);
labelFunc045C_00E8:
	UI_add_answer(["Minoc", "事件", "购买", "房间"]);
	goto labelFunc045C_0106;
labelFunc045C_00FE:
	message("「现在可不是闲聊的时候！William 的锯木厂有两个人被谋杀了！」");
	say();
	gflags[0x011F] = true;
labelFunc045C_0106:
	case "购买" attend labelFunc045C_012D:
	if (!(var0002 == 0x0017)) goto labelFunc045C_0122;
	message("「我们有各种丰富的灵药可以为你解渴，还有美食可以满足你的味蕾。」");
	say();
	Func08DE();
	goto labelFunc045C_0126;
labelFunc045C_0122:
	message("「因为我今天的工作已经结束了，请你下次再来吧。非常感谢你。」");
	say();
labelFunc045C_0126:
	UI_remove_answer("购买");
labelFunc045C_012D:
	case "房间" attend labelFunc045C_01F2:
	if (!(var0002 == 0x0017)) goto labelFunc045C_01E7;
	message("「住一晚的房间非常合理。每人只要 8 枚金币。要一间吗？」");
	say();
	if (!Func090A()) goto labelFunc045C_01E0;
	var0004 = UI_get_party_list();
	var0005 = 0x0000;
	enum();
labelFunc045C_0157:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc045C_016F;
	var0005 = (var0005 + 0x0001);
	goto labelFunc045C_0157;
labelFunc045C_016F:
	var0009 = (var0005 * 0x0008);
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A >= var0009)) goto labelFunc045C_01D9;
	var000B = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000B)) goto labelFunc045C_01BE;
	message("「你带太多东西了，拿不了房间钥匙，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc045C_01D6;
labelFunc045C_01BE:
	message("「这是你的房间钥匙。这只在你离开前有效。」");
	say();
	var000C = UI_remove_party_items(var0009, 0x0284, 0xFE99, 0xFE99, true);
labelFunc045C_01D6:
	goto labelFunc045C_01DD;
labelFunc045C_01D9:
	message("「你没有足够的金币，是吧？那可真糟糕。」");
	say();
labelFunc045C_01DD:
	goto labelFunc045C_01E4;
labelFunc045C_01E0:
	message("「也许改天晚上吧。」");
	say();
labelFunc045C_01E4:
	goto labelFunc045C_01EB;
labelFunc045C_01E7:
	message("「如果你能在我的正常营业时间内提出请求，我会非常感激的。」");
	say();
labelFunc045C_01EB:
	UI_remove_answer("房间");
labelFunc045C_01F2:
	case "Minoc" attend labelFunc045C_0213:
	message("「是的，这城镇通常非常安静。直到最近！」他瞇着的眼睛突然睁大，直直地盯着你。");
	say();
	if (!(var0002 == 0x0017)) goto labelFunc045C_020C;
	message("「话说，陌生人，你刚才是说你什么时候抵达镇上的？」~~在仔细观察了你一会儿之后，他耸了耸肩，又回去擦拭吧台了。");
	say();
labelFunc045C_020C:
	UI_remove_answer("Minoc");
labelFunc045C_0213:
	case "事件" attend labelFunc045C_0233:
	message("「在锯木厂发生这些邪恶的事情之前，大家都在谈论纪念碑。」");
	say();
	UI_remove_answer("事件");
	UI_add_answer(["纪念碑", "锯木厂"]);
labelFunc045C_0233:
	case "谋杀" attend labelFunc045C_0246:
	message("「好吧，我想这就排除了你是可能凶手的嫌疑。如果你是凶手，你就不必到处问人关于谋杀案发生了什么事。你早就在那里，早就知道了。」");
	say();
	UI_remove_answer("谋杀");
labelFunc045C_0246:
	case "锯木厂" attend labelFunc045C_028A:
	message("「喂，你不是本地人吧？」他怀疑地看着你。「你该不会是友谊会的人吧？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc045C_0272;
	message("「我就知道！」");
	say();
	UI_add_answer(["谋杀", "友谊会"]);
	goto labelFunc045C_0283;
labelFunc045C_0272:
	message("「只是问问！你不需要觉得被冒犯！」");
	say();
	UI_add_answer(["谋杀", "友谊会"]);
labelFunc045C_0283:
	UI_remove_answer("锯木厂");
labelFunc045C_028A:
	case "Hook" attend labelFunc045C_02AB:
	message("「我认识他！他是个住在海盗巢穴 (Buccaneer's Den)的海盗。他们说 Hook 很卑鄙，只要价钱对，他连自己的亲娘都会杀，我打赌他们是对的。~~「为什么呢，我有一次和这个 Hook 打了一架。我很幸运，只失去了一条右臂，还留下一只好眼睛。差不多就是那时候，我开始重新考虑我当海盗的职涯，然后现在我就在这里了。」");
	say();
	message("「我最近没见过他，但对谋杀现场的描述听起来绝对是他的杰作！」");
	say();
	gflags[0x0104] = true;
	Func0911(0x000A);
	UI_remove_answer("Hook");
labelFunc045C_02AB:
	case "皇冠宝石号（Crown Jewel）" attend labelFunc045C_02BE:
	message("「那艘船最近的确在这里。事实上，就是谋杀案发生的那晚！这之间会有什么关联吗？嗯……」");
	say();
	UI_remove_answer("皇冠宝石号（Crown Jewel）");
labelFunc045C_02BE:
	case "友谊会" attend labelFunc045C_02D1:
	message("「谢天谢地，最近这几周整个镇上的人都吵得不可开交，还好有友谊会试图把城镇团结起来。我不是成员什么的，但我听说了他们做的所有好事。像是救济穷人等等。」");
	say();
	UI_remove_answer("友谊会");
labelFunc045C_02D1:
	case "纪念碑" attend labelFunc045C_02E4:
	message("「喔，你一定是指他们要为我们的造船匠建造的那座雕像。他叫 Owen，是个本地男孩。我听说它会有一个骑在马上的人那么高，并且展示 Owen 通过望远镜凝视之类的样子。」");
	say();
	UI_remove_answer("纪念碑");
labelFunc045C_02E4:
	case "告辞" attend labelFunc045C_02EF:
	goto labelFunc045C_02F2;
labelFunc045C_02EF:
	goto labelFunc045C_0080;
labelFunc045C_02F2:
	endconv;
	message("「晚点见……至少如果你待在我好的这只眼睛前面，我就看得到你。」*");
	say();
labelFunc045C_02F7:
	if (!(event == 0x0000)) goto labelFunc045C_0305;
	Func092E(0xFFA4);
labelFunc045C_0305:
	return;
}


