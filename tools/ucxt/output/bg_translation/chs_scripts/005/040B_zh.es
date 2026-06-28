#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func040B object#(0x40B) ()
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

	if (!(event == 0x0001)) goto labelFunc040B_026C;
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_is_pc_female();
	UI_add_answer(["姓名", "职业", "告辞"]);
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!(!gflags[0x0014])) goto labelFunc040B_005D;
	if (!var0002) goto labelFunc040B_004C;
	var0003 = "女人";
	goto labelFunc040B_0052;
labelFunc040B_004C:
	var0003 = "男人";
labelFunc040B_0052:
	message("这位农夫看着你，像大白天撞见鬼。「Iolo！这");
	message(var0003);
	message("就这样凭空冒出来！救命啊！」*");
	say();
	abort;
labelFunc040B_005D:
	if (!(!gflags[0x004B])) goto labelFunc040B_009B;
	message("你看到一个慌得六神无主的农夫。「你……真的是圣者吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc040B_008F;
	message("Petre 赶紧向你低头行礼。「");
	message(var0000);
	message("。」");
	say();
	gflags[0x004B] = true;
	UI_set_schedule_type(0xFFF5, 0x000B);
	goto labelFunc040B_0098;
labelFunc040B_008F:
	message("Petre 一脸困惑。「这种时候别拿我开玩笑！」他转身走开。*");
	say();
	gflags[0x004B] = true;
	abort;
labelFunc040B_0098:
	goto labelFunc040B_00A5;
labelFunc040B_009B:
	message("「怎么了，");
	message(var0000);
	message("？」Petre 问道。");
	say();
labelFunc040B_00A5:
	if (!gflags[0x003C]) goto labelFunc040B_00B8;
	UI_add_answer(["谋杀", "脚印"]);
labelFunc040B_00B8:
	if (!gflags[0x003F]) goto labelFunc040B_00CE;
	UI_add_answer(["友谊会", "Klog", "Spark"]);
labelFunc040B_00CE:
	converse attend labelFunc040B_0267;
	if (!(!gflags[0x003C])) goto labelFunc040B_00E0;
	message("「你先去马厩看！里面真的太可怕了！我可以回答你的问题，但你先去看！」*");
	say();
	abort;
	goto labelFunc040B_0264;
labelFunc040B_00E0:
	case "姓名" attend labelFunc040B_00F3:
	message("「我叫 Petre，」那男人吸了吸鼻子。");
	say();
	UI_remove_answer("姓名");
labelFunc040B_00F3:
	case "职业" attend labelFunc040B_0106:
	message("「我管这间马厩。」");
	say();
	UI_add_answer("马厩");
labelFunc040B_0106:
	case "马厩" attend labelFunc040B_0132:
	message("「我在这里做很多年了。你有需要的话，我可以卖你一队好马，连马车一起。那车就在北门外的小棚子里。」");
	say();
	if (!(!gflags[0x0057])) goto labelFunc040B_0120;
	message("「现在那地方，我光想到就起鸡皮疙瘩！」~~他的眼里满是恐惧。");
	say();
	goto labelFunc040B_0124;
labelFunc040B_0120:
	message("「你离开 Trinsic 整整一天后，市长才叫我去那里清理。他说要保留现场。唉，你问我喔，里面还是臭得像世界末日一样！」");
	say();
labelFunc040B_0124:
	UI_remove_answer("马厩");
	UI_add_answer("马车");
labelFunc040B_0132:
	case "谋杀" attend labelFunc040B_0152:
	message("「今天早上，是我发现可怜的 Christopher 和 Inamo。我真的什么都没碰。光想到就想吐，真的！」");
	say();
	UI_remove_answer("谋杀");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc040B_0152:
	case "Christopher" attend labelFunc040B_0165:
	message("「他是个好人。平常会帮我的马钉马蹄铁。」");
	say();
	UI_remove_answer("Christopher");
labelFunc040B_0165:
	case "Inamo" attend labelFunc040B_0178:
	message("「他领没多少钱，平常就在马厩跟酒馆打杂。我让他睡后面的小房间。他真的是算倒楣，不对的时间地点，他偏偏在那边，就没了。」");
	say();
	UI_remove_answer("Inamo");
labelFunc040B_0178:
	case "马车" attend labelFunc040B_01FB:
	message("「一匹马加一台马车，总共 60 枚金币。你要买所有权状吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040B_01F0;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x003C)) goto labelFunc040B_01E9;
	var0007 = UI_add_party_items(0x0001, 0x031D, 0x001C, 0xFE99, false);
	if (!var0007) goto labelFunc040B_01E2;
	message("「好，成交。能做点小生意，至少让我暂时别一直想马厩里的那一幕。」");
	say();
	var0008 = UI_remove_party_items(0x003C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc040B_01E6;
labelFunc040B_01E2:
	message("「哎呀，东西拿太多了，你的权状放不下！」");
	say();
labelFunc040B_01E6:
	goto labelFunc040B_01ED;
labelFunc040B_01E9:
	message("「呃，你身上的钱不够买权状。」");
	say();
labelFunc040B_01ED:
	goto labelFunc040B_01F4;
labelFunc040B_01F0:
	message("「那就下次再说吧。」");
	say();
labelFunc040B_01F4:
	UI_remove_answer("马车");
labelFunc040B_01FB:
	case "脚印" attend labelFunc040B_020E:
	message("「那些脚印通到后门，对吧？一定是凶手留下的！」~~他的眼睛瞪得更大。~~「应该不只一个人。」");
	say();
	UI_remove_answer("脚印");
labelFunc040B_020E:
	case "友谊会" attend labelFunc040B_0221:
	message("「我是没想加入，不过他们人看起来还不错。」");
	say();
	UI_remove_answer("友谊会");
labelFunc040B_0221:
	case "Klog" attend labelFunc040B_0234:
	message("「我不太熟，没什么往来。」");
	say();
	UI_remove_answer("Klog");
labelFunc040B_0234:
	case "Spark" attend labelFunc040B_0259:
	if (!(!(0xFFFE in var0001))) goto labelFunc040B_024E;
	message("「那是 Christopher 的儿子。好孩子。」");
	say();
	goto labelFunc040B_0252;
labelFunc040B_024E:
	message("Petre 揉了揉男孩的头发。~~「这孩子是 Christopher 的儿子。Spark 算好孩子啦，叫他别再从一些店家那里顺手牵羊。」");
	say();
labelFunc040B_0252:
	UI_remove_answer("Spark");
labelFunc040B_0259:
	case "告辞" attend labelFunc040B_0264:
	goto labelFunc040B_0267;
labelFunc040B_0264:
	goto labelFunc040B_00CE;
labelFunc040B_0267:
	endconv;
	message("「保重，」那男人吸了吸鼻子。*");
	say();
labelFunc040B_026C:
	if (!(event == 0x0000)) goto labelFunc040B_027A;
	Func092E(0xFFF5);
labelFunc040B_027A:
	return;
}