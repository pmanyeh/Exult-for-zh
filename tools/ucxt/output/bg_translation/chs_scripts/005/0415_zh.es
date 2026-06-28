#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func088D 0x88D ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0415 object#(0x415) ()
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

	if (!(event == 0x0001)) goto labelFunc0415_03B4;
	UI_show_npc_face(0xFFEB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFEB));
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!gflags[0x0040]) goto labelFunc0415_0046;
	UI_add_answer("皇冠宝石号 (Crown Jewel)");
labelFunc0415_0046:
	if (!gflags[0x003F]) goto labelFunc0415_0053;
	UI_add_answer("友谊会");
labelFunc0415_0053:
	if (!gflags[0x0043]) goto labelFunc0415_0060;
	UI_add_answer("Hook");
labelFunc0415_0060:
	var0002 = 0x0000;
	if (!(!gflags[0x0055])) goto labelFunc0415_0078;
	message("你看到一位身上散发着烟草味的粗犷老水手。");
	say();
	gflags[0x0055] = true;
	goto labelFunc0415_007C;
labelFunc0415_0078:
	message("「什么事，伙计？」 Gargan 咳着嗽问道。");
	say();
labelFunc0415_007C:
	converse attend labelFunc0415_03AF;
	case "姓名" attend labelFunc0415_00A9:
	message("「我叫 Gargan。」～他大声地吸了吸鼻子。");
	say();
	UI_remove_answer("姓名");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_00A9;
	Func088D();
labelFunc0415_00A9:
	case "职业" attend labelFunc0415_00DD:
	message("「我是 Trinsic 的船匠。如果你想知道关于船或六分仪的事，尽管问。」");
	say();
	message("Gargan 咳嗽了几声。");
	say();
	UI_add_answer(["船只", "六分仪"]);
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_00DD;
	Func088D();
labelFunc0415_00DD:
	case "船只" attend labelFunc0415_0118:
	message("「你想买艘船？」 这个老人笑着问。(显然现在没多少人买船了。)~「我的船很坚固，建造精良。它们可能不是 Owen 造的，但绝对是好船！不过你必须先买一张船契。」");
	say();
	message("Gargan 用袖子擦了擦流着鼻涕的鼻子。");
	say();
	UI_remove_answer("船只");
	UI_add_answer(["Owen", "船契"]);
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0118;
	Func088D();
labelFunc0415_0118:
	case "六分仪" attend labelFunc0415_01A8:
	if (!(!(var0001 == 0x001E))) goto labelFunc0415_0132;
	message("「好吧，你得等店铺营业的时候再来。」");
	say();
	goto labelFunc0415_01A8;
labelFunc0415_0132:
	message("「我卖的六分仪要 80 枚金币。要一个吗？」~Gargan 清了清嗓子。");
	say();
	if (!Func090A()) goto labelFunc0415_0186;
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= 0x0050)) goto labelFunc0415_017F;
	var0004 = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	message("「给你！」");
	say();
	if (!(!var0004)) goto labelFunc0415_017C;
	message("「你双手拿满东西了，拿不动六分仪啦！」～Gargan 打了个喷嚏。");
	say();
labelFunc0415_017C:
	goto labelFunc0415_0183;
labelFunc0415_017F:
	message("「你没有足够的金币，水手。」～ Gargan 打了个喷嚏。");
	say();
labelFunc0415_0183:
	goto labelFunc0415_018A;
labelFunc0415_0186:
	message("「随你便。」～ Gargan 打了个喷嚏。");
	say();
labelFunc0415_018A:
	UI_remove_answer("六分仪");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_01A8;
	Func088D();
labelFunc0415_01A8:
	case "Owen" attend labelFunc0415_01D2:
	message("「你没听说过 Owen 吗？他是这片土地上最好的造船匠。他住在 Minoc。」～ Gargan 咳了嗽。");
	say();
	UI_remove_answer("Owen");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_01D2;
	Func088D();
labelFunc0415_01D2:
	case "船契" attend labelFunc0415_0299:
	if (!(!(var0001 == 0x001E))) goto labelFunc0415_01EC;
	message("「好吧，你得等店铺营业的时候再来。」");
	say();
	goto labelFunc0415_0299;
labelFunc0415_01EC:
	if (!gflags[0x0058]) goto labelFunc0415_01FD;
	message("「我已经把『鳞鳗号 (The Scaly Eel)』的船契卖给你了！那是我唯一的一艘船！」");
	say();
	message("Gargan 大声咳嗽。");
	say();
	goto labelFunc0415_027B;
labelFunc0415_01FD:
	message("「我能卖给你的船契是『鳞鳗号 (The Scaly Eel)』的。卖 600 枚金币。有兴趣吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0415_0277;
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= 0x0258)) goto labelFunc0415_0270;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x000E, 0xFE99, true);
	if (!var0006) goto labelFunc0415_0263;
	message("「那好吧！」这个水手回答。他递给你船契并收下了你的金币。～ Gargan 打了个喷嚏。");
	say();
	var0007 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0058] = true;
	goto labelFunc0415_026D;
labelFunc0415_0263:
	message("「你带的东西已经足够让一艘大帆船沉没了，");
	message(var0000);
	message("！如果你愿意放下一些东西，也许你就能航行了，到那时我会非常乐意把船契卖给你。」～ Gargan 打了个喷嚏。");
	say();
labelFunc0415_026D:
	goto labelFunc0415_0274;
labelFunc0415_0270:
	message("「抱歉，伙计，」 Gargan 说：「你的金币不够！」～ Gargan 打了个喷嚏。");
	say();
labelFunc0415_0274:
	goto labelFunc0415_027B;
labelFunc0415_0277:
	message("「那下次吧...」 水手失望地耸耸肩。～ Gargan 打了个喷嚏。");
	say();
labelFunc0415_027B:
	UI_remove_answer("船契");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0299;
	Func088D();
labelFunc0415_0299:
	case "谋杀" attend labelFunc0415_02F1:
	message("「我听说了。真是件可怕的事。不过我不能说我看到或听到了什么。」～ Gargan 咳嗽了几声，大声地清了清嗓子，然后吐了一口痰。");
	say();
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc0415_02D3;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「噢，好恶心！」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFEB, 0x0000);
labelFunc0415_02D3:
	UI_remove_answer("谋杀");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_02F1;
	Func088D();
labelFunc0415_02F1:
	case "皇冠宝石号 (Crown Jewel)" attend labelFunc0415_031B:
	message("「是的，那艘船昨晚停泊在这里。」他查看了他的日志。「她在日出时开往不列颠城。我不记得有看到任何人上船或下船。」～ Gargan 哼了一声，又咳嗽了几下。");
	say();
	UI_remove_answer("皇冠宝石号 (Crown Jewel)");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_031B;
	Func088D();
labelFunc0415_031B:
	case "Hook" attend labelFunc0415_0377:
	message("「伙计，我总是看到装着木腿和铁钩的海盗跟水手。如果你看到一个，就跟看到另一个没两样。」 但这个男人突然皱起眉头。「嗯。既然你提到了，我『确实』在昨晚日落后看到一个装着铁钩的男人。我正要离开商店时在外面看到了他。有一个没有翅膀的石像鬼跟他在一起。他们正往东走。」");
	say();
	message("Gargan 打了个喷嚏，然后咳嗽了几下。");
	say();
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc0415_0359;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我告诉过你！就是他！」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFEB, 0x0000);
labelFunc0415_0359:
	UI_remove_answer("Hook");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0377;
	Func088D();
labelFunc0415_0377:
	case "友谊会" attend labelFunc0415_03A1:
	message("「我太老了，懒得去理会他们。」～ Gargan 用袖子擦了擦流鼻涕的鼻子。");
	say();
	UI_remove_answer("友谊会");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_03A1;
	Func088D();
labelFunc0415_03A1:
	case "告辞" attend labelFunc0415_03AC:
	goto labelFunc0415_03AF;
labelFunc0415_03AC:
	goto labelFunc0415_007C;
labelFunc0415_03AF:
	endconv;
	message("「祝你今天一帆风顺！」水手刚开口，却被一阵痉挛般的咳嗽给打断了。*");
	say();
labelFunc0415_03B4:
	if (!(event == 0x0000)) goto labelFunc0415_03C2;
	Func092E(0xFFEB);
labelFunc0415_03C2:
	return;
}
