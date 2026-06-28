#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func0883 0x883 ();
extern void Func0885 0x885 ();
extern void Func0884 0x884 ();
extern var Func0886 0x886 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func040C object#(0x40C) ()
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

	if (!(event == 0x0001)) goto labelFunc040C_04FE;
	UI_show_npc_face(0xFFF4, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = Func08F7(0xFFFE);
	var0003 = UI_is_pc_female();
	if (!((gflags[0x005A] == true) && (gflags[0x0048] == false))) goto labelFunc040C_00CE;
	message("「你仔细搜查过马厩了吗？」");
	say();
	if (!Func090A()) goto labelFunc040C_00C9;
	message("「你发现了什么？」");
	say();
	UI_clear_answers();
	var0004 = ["什么都没有", "一个水桶", "一具尸体"];
	if (!gflags[0x003C]) goto labelFunc040C_006D;
	var0004 = (var0004 & "一把钥匙");
labelFunc040C_006D:
	var0005 = Func090B(var0004);
	if (!(var0005 == "一把钥匙")) goto labelFunc040C_0099;
	if (!(!var0002)) goto labelFunc040C_008E;
	message("「嗯，一把钥匙。或许如果你去问问克里斯多福的儿子，他可能知道那是做什么用的。」");
	say();
	goto labelFunc040C_0092;
labelFunc040C_008E:
	message("「去问斯帕克。他可能知道些什么。」");
	say();
labelFunc040C_0092:
	gflags[0x0048] = true;
	goto labelFunc040C_0226;
labelFunc040C_0099:
	if (!(var0005 == "一具尸体")) goto labelFunc040C_00A8;
	message("「我知道有尸体！你『还』发现了什么？你应该再仔细找找，圣者！」");
	say();
	abort;
labelFunc040C_00A8:
	if (!(var0005 == "一个水桶")) goto labelFunc040C_00B7;
	message("「是的，显然里面装满了可怜的克里斯多福的血。但肯定还有其他东西能为我们指出凶手的方向——你应该再仔细找找，圣者。」");
	say();
	abort;
labelFunc040C_00B7:
	if (!(var0005 == "什么都没有")) goto labelFunc040C_00C6;
	message("「你应该再仔细找找，『圣者』！」");
	say();
	abort;
labelFunc040C_00C6:
	goto labelFunc040C_00CE;
labelFunc040C_00C9:
	message("「好吧，去搜查，然后再来跟我说！」");
	say();
	abort;
labelFunc040C_00CE:
	if (!gflags[0x0059]) goto labelFunc040C_011F;
	message("「嗯。你重新考虑我提议调查这起谋杀案的事了吗？」");
	say();
	if (!Func090A()) goto labelFunc040C_00EF;
	message("「太好了。看来你毕竟真的是圣者！」");
	say();
	gflags[0x0059] = false;
	Func0883();
	goto labelFunc040C_0226;
	goto labelFunc040C_011F;
labelFunc040C_00EF:
	message("「那就让我们的人自己去解决吧。」");
	say();
	UI_remove_npc_face(0xFFF4);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc040C_011E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「圣者！我对你感到羞愧！你应该重新考虑！」");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc040C_011E:
	abort;
labelFunc040C_011F:
	if (!(!gflags[0x004C])) goto labelFunc040C_0222;
	UI_halt_scheduled(item);
	UI_set_schedule_type(UI_get_npc_object(0xFFF4), 0x000B);
	message("你看到一位中年的贵族。");
	say();
	gflags[0x004C] = true;
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc040C_01A9;
	message("「Iolo！这个陌生人是谁？」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，这位是圣者！」 Iolo 自豪地宣布。「你敢相信吗？请容我为你介绍？这位是 Trinsic 的镇长 Finnigan。而这位是 ");
	message(var0001);
	message("，圣者！");
	say();
	if (!var0003) goto labelFunc040C_0175;
	message("「我真的没料到他会出现！」");
	say();
	goto labelFunc040C_0179;
labelFunc040C_0175:
	message("「我真的没料到他会出现！」");
	say();
labelFunc040C_0179:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("镇长上下打量着你，不确定是否该相信Iolo。他用怀疑的眼神看着Iolo。");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我向你发誓，这真的是圣者！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF4, 0x0000);
	goto labelFunc040C_01AD;
labelFunc040C_01A9:
	message("「我听说你是圣者。我不确定我是否相信。");
	say();
labelFunc040C_01AD:
	message("镇长再次看着你，仿佛在研究你脸上的每一个毛孔。最后，他笑了。");
	say();
	message("「欢迎，圣者。」");
	say();
	message("但就在突然间，Finnigan 的脸色变得严厉。");
	say();
	message("「发生了一起可怕的谋杀案。如果你真的是圣者，或许你能帮我们解决它。如果你能接手处理这件事，我会感到安心得多。如果你能找出凶手的名字，你将会获得丰厚的报酬。你接受吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040C_0216;
	var0007 = Func08F7(0xFFF5);
	if (!var0007) goto labelFunc040C_01F4;
	message("「Petre 知道一些关于这件事的事情。」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	message("那名农夫插嘴道。「我今天清晨发现了可怜的 Christopher 和石像鬼 Inamo。」");
	say();
	UI_remove_npc_face(0xFFF5);
	goto labelFunc040C_0202;
labelFunc040C_01F4:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("「马厩管理员 Petre，在今天清晨发现了可怜的 Christopher 和 Inamo。」");
	say();
labelFunc040C_0202:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("镇长继续说道。「你搜查过马厩了吗？」");
	say();
	Func0885();
	goto labelFunc040C_021F;
labelFunc040C_0216:
	message("「好吧，那你就不可能是真正的圣者！」");
	say();
	gflags[0x0059] = true;
	abort;
labelFunc040C_021F:
	goto labelFunc040C_0226;
labelFunc040C_0222:
	message("「什么事，圣者？」 Finnigan 问道。");
	say();
labelFunc040C_0226:
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!gflags[0x005B]) goto labelFunc040C_0246;
	UI_add_answer("报告");
labelFunc040C_0246:
	if (!gflags[0x003F]) goto labelFunc040C_0259;
	UI_add_answer(["友谊会", "Klog"]);
labelFunc040C_0259:
	if (!(gflags[0x0042] && (!gflags[0x003D]))) goto labelFunc040C_026B;
	UI_add_answer("口令");
labelFunc040C_026B:
	if (!(gflags[0x0045] && (!gflags[0x0044]))) goto labelFunc040C_027D;
	UI_add_answer("请现在付钱给我");
labelFunc040C_027D:
	converse attend labelFunc040C_04F9;
	case "姓名" attend labelFunc040C_0293:
	message("「我的名字是 Finnigan。」");
	say();
	UI_remove_answer("姓名");
labelFunc040C_0293:
	case "职业" attend labelFunc040C_02A6:
	message("「我是 Trinsic 的镇长，自从我三年前来到这里就一直是。」");
	say();
	UI_add_answer("Trinsic");
labelFunc040C_02A6:
	case "Trinsic" attend labelFunc040C_02DF:
	if (!var0003) goto labelFunc040C_02BD;
	var0008 = "被一个自称是圣者的女人拿走了。";
	goto labelFunc040C_02C3;
labelFunc040C_02BD:
	var0008 = "被一个自称是圣者的男人拿走了。";
labelFunc040C_02C3:
	message("「 Trinsic 曾经是荣誉之城。我想现在依然是。我们的荣誉符文很多年前 ");
	message(var0008);
	message("我相信它现在被保存在不列颠城的皇家博物馆中，然而城镇中心仍留着空荡荡的基座。我觉得这象征着这个城镇本身。它是相当空虚的——没有人气，没有生气，也没有荣誉。真的很悲哀。」");
	say();
	message("「然后当然还有这起谋杀案。我们暂时关闭了城门，需要口令才能进出。」");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer("口令");
labelFunc040C_02DF:
	case "请现在付钱给我" attend labelFunc040C_032C:
	message("「当然，");
	message(var0001);
	message("。这是你的金币。」");
	say();
	var0009 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0009)) goto labelFunc040C_0319;
	message("「喔，我很抱歉，");
	message(var0001);
	message("。你现在还拿不动这么多。你必须晚点再来找我。」");
	say();
	goto labelFunc040C_0325;
labelFunc040C_0319:
	message("「给你。」");
	say();
	gflags[0x0045] = false;
	gflags[0x0044] = true;
labelFunc040C_0325:
	UI_remove_answer("请现在付钱给我");
labelFunc040C_032C:
	case "谋杀" attend labelFunc040C_036F:
	if (!(!gflags[0x003D])) goto labelFunc040C_036B;
	message("「Trinsic 以前从未发生过这样的犯罪。我不敢相信这种事会发生在 Christopher 和 Inamo 身上。拜托——去城镇里调查吧！如果你能向我报告你的进展，我会非常感激。务必向镇上的每个人询问关于谋杀案的事。在和 Christopher 的儿子谈过之后，你可能接着会想去和 Gilberto 谈谈，他是昨晚在码头值班的守卫。」");
	say();
	message("镇长犹豫了一下，然后凑近小声说道。");
	say();
	message("「事实上，我以前见过类似的情况。大约是四年前，在不列颠城。」");
	say();
	UI_add_answer(["Gilberto", "Christopher", "Inamo", "不列颠城", "报告"]);
	gflags[0x005B] = true;
	UI_remove_answer("谋杀");
	goto labelFunc040C_036F;
labelFunc040C_036B:
	message("「我希望你的谋杀案调查有所进展。」");
	say();
labelFunc040C_036F:
	case "不列颠城" attend labelFunc040C_0382:
	message("「那是在我来到 Trinsic 之前的事了。曾经发生过一起有着惊人相似之处的谋杀案。发现了一具被肢解的尸体，就像可怜的 Christopher 一样。那看起来像是一场仪式性的杀戮。我敢打赌，当年那起谋杀案的凶手就是这次事件的幕后黑手。」");
	say();
	UI_remove_answer("不列颠城");
labelFunc040C_0382:
	case "儿子" attend labelFunc040C_0395:
	message("「Christopher 的儿子名叫 Spark。他们的房子在城镇的西北区。」");
	say();
	UI_remove_answer("儿子");
labelFunc040C_0395:
	case "Gilberto" attend labelFunc040C_03B5:
	message("「他今天清晨从背后遭到袭击，被打得失去了知觉。早班守卫 Johnson 发现他不省人事。他目前正在镇上西侧治疗师 Chantu 的房子里休养。」");
	say();
	UI_remove_answer("Gilberto");
	UI_add_answer(["Johnson", "Chantu"]);
labelFunc040C_03B5:
	case "Chantu" attend labelFunc040C_03C8:
	message("「他是我们镇上的治疗师。他在这里已经很多年了。是个好人。」");
	say();
	UI_remove_answer("Chantu");
labelFunc040C_03C8:
	case "报告" attend labelFunc040C_0426:
	if (!gflags[0x0044]) goto labelFunc040C_03DD;
	message("「我对你的报告很满意。请继续你的调查，圣者。」");
	say();
	goto labelFunc040C_041F;
labelFunc040C_03DD:
	if (!(!gflags[0x005D])) goto labelFunc040C_0405;
	message("「你准备好回答一些关于调查的问题了吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc040C_03FE;
	gflags[0x005D] = true;
	Func0884();
	goto labelFunc040C_0402;
labelFunc040C_03FE:
	message("「喔。那么，继续你的调查吧。」");
	say();
labelFunc040C_0402:
	goto labelFunc040C_041F;
labelFunc040C_0405:
	message("「我们可以继续你的报告了吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc040C_041B;
	Func0884();
	goto labelFunc040C_041F;
labelFunc040C_041B:
	message("「喔。那么，继续你的调查吧。」");
	say();
labelFunc040C_041F:
	UI_remove_answer("报告");
labelFunc040C_0426:
	case "友谊会" attend labelFunc040C_0439:
	message("「哎呀，他们是一个非常有帮助的团体。他们的分会就在我办公室的东边。是一群非常乐观的人。」");
	say();
	UI_remove_answer("友谊会");
labelFunc040C_0439:
	case "Klog" attend labelFunc040C_044C:
	message("「他是友谊会的分会长。是个善良的人。」");
	say();
	UI_remove_answer("Klog");
labelFunc040C_044C:
	case "Johnson" attend labelFunc040C_045F:
	message("「他现在可能在码头。」");
	say();
	UI_remove_answer("Johnson");
labelFunc040C_045F:
	case "Christopher" attend labelFunc040C_0479:
	message("「Christopher 是当地的铁匠。他和他儿子住在一起，或者该说『曾经』住在一起，在城镇西北部。铁匠铺在西南角。克里斯多福绝对不是个有钱人——他勉强能养活自己和儿子。但他肯定很享受他的工作。」");
	say();
	UI_remove_answer("Christopher");
	UI_add_answer("儿子");
labelFunc040C_0479:
	case "Inamo" attend labelFunc040C_048C:
	message("「据我所知，石像鬼 Inamo 睡在马厩里。我相信他几个月前才从 Terfin 移居到这里。看来他只是一个遭到暴力袭击的无辜受害者。」");
	say();
	UI_remove_answer("Inamo");
labelFunc040C_048C:
	case "口令" attend labelFunc040C_04EB:
	if (!(gflags[0x0044] && (!gflags[0x003D]))) goto labelFunc040C_04D5;
	message("「喔，你现在想要口令吗？」");
	say();
	if (!Func090A()) goto labelFunc040C_04CD;
	if (!Func0886()) goto labelFunc040C_04C5;
	message("「太好了！我现在毫不怀疑你就是那位真正的圣者！」");
	say();
	message("「喔——我差点忘了！离开或进入城镇的口令是『Blackbird』！」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc040C_04CA;
labelFunc040C_04C5:
	message("「嗯。恐怕我还是对你是否为圣者感到怀疑。我的公职不允许我把口令给你。我很抱歉。」");
	say();
	abort;
labelFunc040C_04CA:
	goto labelFunc040C_04D2;
labelFunc040C_04CD:
	message("镇长耸了耸肩，看着你仿佛你疯了一样。*");
	say();
	abort;
labelFunc040C_04D2:
	goto labelFunc040C_04E4;
labelFunc040C_04D5:
	message("「当你向我报告调查进度时，我就会把口令给你。」");
	say();
	UI_add_answer("报告");
	gflags[0x0042] = true;
labelFunc040C_04E4:
	UI_remove_answer("口令");
labelFunc040C_04EB:
	case "告辞" attend labelFunc040C_04F6:
	goto labelFunc040C_04F9;
labelFunc040C_04F6:
	goto labelFunc040C_027D;
labelFunc040C_04F9:
	endconv;
	message("镇长向你点了点头，然后继续忙他的事。*");
	say();
labelFunc040C_04FE:
	if (!(event == 0x0000)) goto labelFunc040C_057E;
	var000C = UI_get_schedule_type(UI_get_npc_object(0xFFF4));
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var000C == 0x000B)) goto labelFunc040C_0578;
	if (!(var000D == 0x0001)) goto labelFunc040C_053B;
	var000E = "@真是漫长的一天...@";
labelFunc040C_053B:
	if (!(var000D == 0x0002)) goto labelFunc040C_054B;
	var000E = "@又过了一天，又赚了一枚金币...@";
labelFunc040C_054B:
	if (!(var000D == 0x0003)) goto labelFunc040C_055B;
	var000E = "@我要在这里搜查一下...@";
labelFunc040C_055B:
	if (!(var000D == 0x0004)) goto labelFunc040C_056B;
	var000E = "@我太老了，不适合做这些...@";
labelFunc040C_056B:
	UI_item_say(0xFFF4, var000E);
	goto labelFunc040C_057E;
labelFunc040C_0578:
	Func092E(0xFFF4);
labelFunc040C_057E:
	return;
}
