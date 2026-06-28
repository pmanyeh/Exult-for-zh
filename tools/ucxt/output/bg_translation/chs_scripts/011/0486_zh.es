#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0486 object#(0x486) ()
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

	if (!(event == 0x0001)) goto labelFunc0486_0388;
	UI_show_npc_face(0xFF7A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFF7A);
	var0002 = UI_get_npc_object(0xFF78);
	var0003 = UI_get_npc_object(0xFF79);
	var0004 = Func0931(0xFE9C, 0x0001, 0x03BB, 0xFE99, 0x0002);
	var0005 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x017D]) goto labelFunc0486_006F;
	UI_add_answer("吊饰盒");
labelFunc0486_006F:
	if (!var0004) goto labelFunc0486_007C;
	UI_add_answer("出示吊饰盒");
labelFunc0486_007C:
	if (!var0005) goto labelFunc0486_0089;
	UI_add_answer("友谊会");
labelFunc0486_0089:
	if (!(!gflags[0x018F])) goto labelFunc0486_00A8;
	message("你看到一个流氓般的男人，穿着似乎是某个贵族破旧的二手衣服。");
	say();
	gflags[0x018F] = true;
	if (!gflags[0x0180]) goto labelFunc0486_00A5;
	UI_add_answer("陌生人");
labelFunc0486_00A5:
	goto labelFunc0486_00AC;
labelFunc0486_00A8:
	message("「你好，有什么我可以为你效劳的吗？」Robin 问道。");
	say();
labelFunc0486_00AC:
	converse attend labelFunc0486_037D;
	case "姓名" attend labelFunc0486_00D3:
	message("「我的名字是 Robin，");
	message(var0000);
	message("。很高兴见到你。我最近才来到 New Magincia。」");
	say();
	gflags[0x018F] = true;
	UI_remove_answer("姓名");
	UI_add_answer("New Magincia");
labelFunc0486_00D3:
	case "职业" attend labelFunc0486_00E6:
	message("「我父亲，一位受人尊敬的贵族——为了不玷污他的名声，我就不提他的名字了——他不承认我是他的合法子嗣，并与我断绝了关系。但他确实教会了我谋生的职业。」");
	say();
	UI_add_answer("职业");
labelFunc0486_00E6:
	case "职业" attend labelFunc0486_00FF:
	message("「哎呀，当然是那个最迷人、最受人尊敬的职业，");
	message(var0000);
	message("。那就是在赌局中赢钱。」");
	say();
	UI_remove_answer("职业");
labelFunc0486_00FF:
	case "New Magincia" attend labelFunc0486_0125:
	message("「我不是本地人。在与赌场老板发生争执后，我和我的同僚们不得不迅速离开海盗巢穴 (Buccaneer's Den)。那也是一段艰辛的航程。」");
	say();
	UI_add_answer(["同僚", "海盗巢穴", "争执", "航程"]);
	UI_remove_answer("New Magincia");
labelFunc0486_0125:
	case "同僚" attend labelFunc0486_0145:
	message("「我的朋友是 Battles 和 Leavell。他们的工作是保护我和我赢来的钱。作为交换，他们可以分享我的利润。」");
	say();
	UI_add_answer(["Battles", "Leavell"]);
	UI_remove_answer("同僚");
labelFunc0486_0145:
	case "Battles" attend labelFunc0486_0158:
	message("「我从他那准备逼他跳板的船长手中救了他。我用掷骰子跟那位船长赌这小子的命。后来，Battles 领导了一场叛变夺取了那艘船，还有……嗯，那是另一个故事了。」");
	say();
	UI_remove_answer("Battles");
labelFunc0486_0158:
	case "Leavell" attend labelFunc0486_016B:
	message("「我从一群愤怒的贵族女儿手中救了他，她们刚刚发现他同时在追求她们所有人。如果不是我，他肯定已经没命了！但我说得太远了。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0486_016B:
	case "海盗巢穴" attend labelFunc0486_0185:
	message("「那是我们大半辈子居住的地方。那里有很多粗暴的家伙，而且在那里带着大量金钱闲晃可不是什么好主意。」");
	say();
	UI_add_answer("粗暴的家伙");
	UI_remove_answer("海盗巢穴");
labelFunc0486_0185:
	case "争执" attend labelFunc0486_019F:
	message("「我赢了赌场一笔惊人的黄金，那里的『先生』Gordy 指控我作弊。他派了他的打手 Sintag 来追捕我们。海盗可不喜欢输！」");
	say();
	UI_remove_answer("争执");
	UI_add_answer("「先生」");
labelFunc0486_019F:
	case "「先生」" attend labelFunc0486_01B2:
	message("「别问我他为什么叫那个名字！不过那里的每个人都这么叫他！」");
	say();
	UI_remove_answer("「先生」");
labelFunc0486_01B2:
	case "航程" attend labelFunc0486_01CC:
	message("「我们搭了第一艘出港的船，但在我们回到大陆之前，它就沉了。我们三个好不容易才死里逃生来到 New Magincia。现在我们被困在这里了。」");
	say();
	UI_remove_answer("航程");
	UI_add_answer("被困在这里");
labelFunc0486_01CC:
	case "陌生人" attend labelFunc0486_01DF:
	message("「我不知道有什么陌生人。我自己也才刚到这里。」");
	say();
	UI_remove_answer("陌生人");
labelFunc0486_01DF:
	case "粗暴的家伙" attend labelFunc0486_01F9:
	message("「特别要远离的一个粗暴家伙是一个名叫 Hook 的男人。他会为了一点小事就杀了你。你可以从他那只铁钩手认出他。」");
	say();
	UI_add_answer("Hook");
	UI_remove_answer("粗暴的家伙");
labelFunc0486_01F9:
	case "Hook" attend labelFunc0486_020C:
	message("「我不知道更多了。如果你认为我会自愿与那种人打交道，那你一定是认错人了！」");
	say();
	UI_remove_answer("Hook");
labelFunc0486_020C:
	case "吊饰盒" attend labelFunc0486_021F:
	message("「我们正试图回到海盗巢穴 (Buccaneer's Den)。我本来希望能卖掉我手边的一个金吊饰盒来买我们回去的船票，但我恐怕它已经遗失了。如果你有遇到它，一定要让我知道。」");
	say();
	UI_remove_answer("吊饰盒");
labelFunc0486_021F:
	case "友谊会" attend labelFunc0486_0249:
	message("「你是友谊会的成员！多年来，我一直看到友谊会的成员在赌坊 (House of Games)赢得大笔赌金。你能告诉我他们的秘密吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0486_023E;
	message("「你当然可以。但我猜你不会。」Robin 耸了耸肩。");
	say();
	goto labelFunc0486_0242;
labelFunc0486_023E:
	message("「如果我不相信你，请见谅。」");
	say();
labelFunc0486_0242:
	UI_remove_answer("友谊会");
labelFunc0486_0249:
	case "被困在这里" attend labelFunc0486_027E:
	message("「没错。我们买不起造船匠卖的那艘破船。");
	say();
	message("「不过话说回来，你一定是用某种方式来到这里的！你有什么船可以让我们离开这座岛吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0486_0273;
	message("「如果你愿意载我们回海盗巢穴 (Buccaneer's Den)，我可以付给你丰厚的报酬。」");
	say();
	UI_add_answer("报酬");
	goto labelFunc0486_0277;
labelFunc0486_0273:
	message("「如果你有找到离开这座岛的方法，请允许我们与你同行。」");
	say();
labelFunc0486_0277:
	UI_remove_answer("被困在这里");
labelFunc0486_027E:
	case "报酬" attend labelFunc0486_0298:
	message("「当然，我现在此时此刻无法付钱给你。但当我们到达海盗巢穴 (Buccaneer's Den)时，我向你保证，我能拿到很多钱。」");
	say();
	UI_remove_answer("报酬");
	UI_add_answer("很多钱");
labelFunc0486_0298:
	case "很多钱" attend labelFunc0486_02B2:
	message("「是的，钱！因为我在 New Magincia 这里找到了一样东西，在海盗巢穴 (Buccaneer's Den)它的价值将超过黄金。」");
	say();
	UI_remove_answer("很多钱");
	UI_add_answer("某样东西");
labelFunc0486_02B2:
	case "某样东西" attend labelFunc0486_02E8:
	message("「在我告诉你那是什么之前，你愿意答应带我和我的伙伴回海盗巢穴 (Buccaneer's Den)吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0486_02DC;
	var0009 = true;
	message("Robin 直视着你的眼睛。「你真是个好朋友。我想我该告诉你我们打算从 New Magincia 带回什么了。」");
	say();
	UI_add_answer("带回去");
	goto labelFunc0486_02E1;
labelFunc0486_02DC:
	message("「那么我就无法信任你，不能告诉你我的计划。走开。」");
	say();
	abort;
labelFunc0486_02E1:
	UI_remove_answer("某样东西");
labelFunc0486_02E8:
	case "带回去" attend labelFunc0486_0309:
	if (!(!var0004)) goto labelFunc0486_02FE;
	message("「既然你真的是个朋友，那我知道我可以请你帮个忙。你何不把那个遗失的吊饰盒拿回来给我，我们再来多谈谈这些事。」他对你露出邪恶的笑容。");
	say();
	goto labelFunc0486_0302;
labelFunc0486_02FE:
	message("「既然你把我的吊饰盒带回来了，我想我可以信任你。我打算把 Constance 带回去，把她卖给浴池的经营者。」");
	say();
labelFunc0486_0302:
	UI_remove_answer("带回去");
labelFunc0486_0309:
	case "出示吊饰盒" attend labelFunc0486_032D:
	message("「既然我知道我可以信任你，我就可以让你知道我们的计划。我打算用你的船多带一个乘客跟我们一起回海盗巢穴 (Buccaneer's Den)。她的名字是 Constance，她应该能从浴池经营者 Glenno 那里卖个好价钱。足以偿还我的债务、付你船资，还有很多剩余的钱可以让我在游戏厅再赌一把！」");
	say();
	Func0911(0x0064);
	gflags[0x0184] = true;
	UI_add_answer("船");
	UI_remove_answer("出示吊饰盒");
labelFunc0486_032D:
	case "船" attend labelFunc0486_036F:
	message("「你必须马上准备好你的船，准备离开这个地方。我和我的手下会去把 Constance 抓来，然后我们就去跟你会合。但你能告诉我你的船在哪里吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0486_034C;
	message("你告诉 Robin 你的船的位置。他慢慢地爆发出邪恶的笑声。「谢谢你，朋友。我们剩下要做的就是消除最后一个未了结的问题。既然我们知道你的船在哪里，我们只要杀了你并夺走它，就能从我们的投资中获得更多回报。」*");
	say();
	goto labelFunc0486_0350;
labelFunc0486_034C:
	message("「你对我们的游戏失去胆量了吗，嗯？如果是这样，那么我和我的手下别无选择，只能杀了你来保护我们的秘密！」*");
	say();
labelFunc0486_0350:
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc0486_036F:
	case "告辞" attend labelFunc0486_037A:
	goto labelFunc0486_037D;
labelFunc0486_037A:
	goto labelFunc0486_00AC;
labelFunc0486_037D:
	endconv;
	message("「很高兴与你交谈，");
	message(var0000);
	message("。」*");
	say();
labelFunc0486_0388:
	if (!(event == 0x0000)) goto labelFunc0486_0396;
	Func092E(0xFF7A);
labelFunc0486_0396:
	return;
}


