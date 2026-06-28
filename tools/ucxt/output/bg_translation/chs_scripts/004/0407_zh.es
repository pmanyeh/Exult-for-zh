#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func08E5 0x8E5 (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0407 object#(0x407) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0407_040E;
	talked_book = false;
	UI_show_npc_face(0xFFF9, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_is_pc_female();
	var0002 = UI_get_party_list();
	var0003 = UI_get_npc_object(0xFFF9);
	var0004 = Func0908();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFF9));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0003 in var0002)) goto labelFunc0407_0066;
	UI_add_answer("离队");
labelFunc0407_0066:
	if (!(!gflags[0x001A])) goto labelFunc0407_0078;
	message("你看到一个潇洒、苗条、穿着时髦且非常有品味的男人。");
	say();
	gflags[0x001A] = true;
	goto labelFunc0407_0082;
labelFunc0407_0078:
	message("「我有什么能帮你的吗，");
	message(var0004);
	message("？」 Sentri 问。");
	say();
labelFunc0407_0082:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0407_0409;
	case "古文译本" attend labelFunc0407_TransBook:
	message("「作为一名剑术教练，我一直告诉学生：了解敌人的意图和挥剑一样重要。」");
	say();
	message("「这本宝典能让你在不列颠尼亚的各个角落畅行无阻，掌握第一手情报。」");
	say();
	message("「知识，就像一把磨得锋利的剑，永远不嫌多！」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0407_TransBook:
	case "姓名" attend labelFunc0407_0098:
	message("「你不记得我了吗？我是 Sentri ！我们过去曾经一起冒险过！」");
	say();
	UI_remove_answer("姓名");
labelFunc0407_0098:
	case "职业" attend labelFunc0407_00D4:
	message("「当我不和老朋友去冒险时，我是不列颠城的一名教练。我专精于剑术战斗。如你所记，我对那方面相当在行。」");
	say();
	var0002 = UI_get_party_list();
	if (!(!(var0003 in var0002))) goto labelFunc0407_00C1;
	message("「但如果你们的队伍没有太多负担，我会放下一切加入你们。」");
	say();
	UI_add_answer("加入");
labelFunc0407_00C1:
	UI_add_answer(["不列颠城", "剑术", "训练", "朋友们"]);
labelFunc0407_00D4:
	case "朋友们" attend labelFunc0407_00F7:
	message("「我不常看到我们的老朋友 Iolo 、 Shamino 或 Dupre 。」");
	say();
	UI_remove_answer("朋友们");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0407_00F7:
	case "剑术" attend labelFunc0407_010A:
	message("Sentri 拔剑的速度快如闪电。他做了几个花俏的动作，用剑刃劈开空气。「在我的手下，没有敌人能站着！」");
	say();
	UI_remove_answer("剑术");
labelFunc0407_010A:
	case "加入" attend labelFunc0407_0166:
	var0006 = 0x0000;
	var0002 = UI_get_party_list();
	enum();
labelFunc0407_0120:
	for (var0009 in var0002 with var0007 to var0008) attend labelFunc0407_0138;
	var0006 = (var0006 + 0x0001);
	goto labelFunc0407_0120;
labelFunc0407_0138:
	if (!(var0006 < 0x0006)) goto labelFunc0407_015B;
	message("Sentri 鞠了一躬。「我很高兴能加入你的队伍。」");
	say();
	gflags[0x00DB] = true;
	UI_add_to_party(0xFFF9);
	UI_add_answer("离队");
	goto labelFunc0407_015F;
labelFunc0407_015B:
	message("「我喜欢小团体，圣者。你这队伍人数太多了，不合我的胃口。如果你在路上失去了哪个人，再回来找我，我会很乐意加入你们的。」");
	say();
labelFunc0407_015F:
	UI_remove_answer("加入");
labelFunc0407_0166:
	case "离队" attend labelFunc0407_01D4:
	message("「你是想让我在这里等，还是想让我回家？」");
	say();
	UI_clear_answers();
	var000A = Func090B(["在这里等", "回家"]);
	if (!(var000A == "在这里等")) goto labelFunc0407_01B0;
	message("「很好。我会在这里等你回来。」*");
	say();
	gflags[0x00DB] = false;
	UI_remove_from_party(0xFFF9);
	UI_set_schedule_type(UI_get_npc_object(0xFFF9), 0x000F);
	abort;
	goto labelFunc0407_01D4;
labelFunc0407_01B0:
	message("「再会了，");
	message(var0004);
	message("。如果你再需要我的服务，我会非常乐意效劳。」*");
	say();
	gflags[0x00DB] = false;
	UI_remove_from_party(0xFFF9);
	UI_set_schedule_type(UI_get_npc_object(0xFFF9), 0x000B);
	abort;
labelFunc0407_01D4:
	case "不列颠城" attend labelFunc0407_01EE:
	message("「我开始对这个地方感到厌倦了。它正经历着资产阶级未曾察觉的成长痛。一切并不像贵族们所呈现的那么宁静。」");
	say();
	UI_remove_answer("不列颠城");
	UI_add_answer("不宁静");
labelFunc0407_01EE:
	case "不宁静" attend labelFunc0407_0208:
	message("「嗯，举例来说，试着去其中一个小镇看看，比方说 Paws 。那是个穷人的地方。而且还很臭。它就位在不列颠城镇界之外。应该投入更多资金来改善整个地区的环境，而不仅仅是在首都建造新建筑。我不知道不列颠王在想什么！」");
	say();
	UI_remove_answer("不宁静");
	UI_add_answer("不列颠王");
labelFunc0407_0208:
	case "训练" attend labelFunc0407_0277:
	if (!(!gflags[0x00DB])) goto labelFunc0407_026A;
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFF9));
	if (!((var0005 == 0x001B) || ((var0005 == 0x000B) || (var0005 == 0x000F)))) goto labelFunc0407_025C;
	message("「我的一次训练课程收费 30 枚金币。这样可以吗？」");
	say();
	if (!Func090A()) goto labelFunc0407_0255;
	Func08E5(0x0001, 0x001E);
	goto labelFunc0407_0259;
labelFunc0407_0255:
	message("「那我只好去抢劫别人了！」 Sentri 大笑起来。");
	say();
labelFunc0407_0259:
	goto labelFunc0407_0267;
labelFunc0407_025C:
	message("「恐怕我必须坚持只在营业时间内提供训练的原则。这对我『所有』的朋友都适用。」");
	say();
	UI_remove_answer("训练");
labelFunc0407_0267:
	goto labelFunc0407_0277;
labelFunc0407_026A:
	message("「既然我是你们队伍的一员，我就免费训练你！」");
	say();
	Func08E5(0x0001, 0x0000);
labelFunc0407_0277:
	case "Iolo" attend labelFunc0407_02C3:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0407_02B8;
	message("「你好吗，朋友？你看起来好像也需要一点训练！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「这算什么？每个人都在取笑我的体格！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「我不是在开玩笑， Iolo 。我是认真的！」 Sentri 笑着。");
	say();
	goto labelFunc0407_02BC;
labelFunc0407_02B8:
	message("「我怀念那家伙！」");
	say();
labelFunc0407_02BC:
	UI_remove_answer("Iolo");
labelFunc0407_02C3:
	case "Shamino" attend labelFunc0407_0335:
	var000C = Func08F7(0xFFFD);
	if (!var000C) goto labelFunc0407_032A;
	message("「我说， Shamino ，你还在花时间穿女装吗？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「『什么』？！？！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「还是说，既然你现在已经步入中年了，你正把生命虚度在治疗师的窝里？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「小心点，朋友。你这是想找碴啊！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("Sentri 友善地揍了 Shamino 一拳。「就只是说说而已，我亲爱的朋友。说说而已！很高兴见到你！」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF9, 0x0000);
	goto labelFunc0407_032E;
labelFunc0407_032A:
	message("「能跟他开个一两个玩笑也不错！」");
	say();
labelFunc0407_032E:
	UI_remove_answer("Shamino");
labelFunc0407_0335:
	case "Dupre" attend labelFunc0407_03E8:
	var000D = Func08F7(0xFFFC);
	if (!var000D) goto labelFunc0407_03DD;
	message("「啊，我的好朋友 Dupre ！你身上有带些好麦酒吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	var000E = Func0931(0xFFFC, 0x0001, 0x0268, 0xFE99, 0x0003);
	if (!var000E) goto labelFunc0407_03B7;
	message("「你在开玩笑吗？我『总是』带着麦酒！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「那我们应该在别人喝掉之前先喝一点！」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「那将是我的荣幸。不过，我必须谨慎行事，把麦酒留到我们需要的时候再喝。」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("Sentri 摸了摸 Dupre 的头。「你觉得还好吗， Dupre ？还是说骑士头衔对你的大脑造成了什么影响？」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF9, 0x0000);
	goto labelFunc0407_03DA;
labelFunc0407_03B7:
	message("「不，但我很乐意在酒吧停下来，跟你喝上几杯！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「嗯！听起来不错！下次我们经过酒吧时，我们就停下来！」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF9, 0x0000);
labelFunc0407_03DA:
	goto labelFunc0407_03E1;
labelFunc0407_03DD:
	message("「我想见见那个没用的麻烦制造者！我听说他现在是骑士了！还真的是 Dupre 爵士呢！」");
	say();
labelFunc0407_03E1:
	UI_remove_answer("Dupre");
labelFunc0407_03E8:
	case "不列颠王" attend labelFunc0407_03FB:
	message("「我不常看到他。他一直待在他那座城堡里。他从来不出来。难怪他对这个国家正在发生的事情一无所知。」");
	say();
	UI_remove_answer("不列颠王");
labelFunc0407_03FB:
	case "告辞" attend labelFunc0407_0406:
	goto labelFunc0407_0409;
labelFunc0407_0406:
	goto labelFunc0407_0082;
labelFunc0407_0409:
	endconv;
	message("「晚点见。」*");
	say();
labelFunc0407_040E:
	if (!(event == 0x0000)) goto labelFunc0407_041C;
	Func092E(0xFFF9);
labelFunc0407_041C:
	return;
}


