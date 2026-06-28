#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08AB 0x8AB ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0410 object#(0x410) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0410_02A5;
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	var0002 = false;
	var0003 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0001 == 0x0007)) goto labelFunc0410_003B;
	Func08AB();
labelFunc0410_003B:
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!gflags[0x003F]) goto labelFunc0410_0065;
	UI_add_answer(["争执", "测验"]);
	var0002 = true;
labelFunc0410_0065:
	if (!gflags[0x0043]) goto labelFunc0410_0072;
	UI_add_answer("Hook");
labelFunc0410_0072:
	if (!gflags[0x003E]) goto labelFunc0410_0088;
	UI_add_answer(["金币", "徽章", "卷轴"]);
labelFunc0410_0088:
	if (!gflags[0x0040]) goto labelFunc0410_0095;
	UI_add_answer("皇冠宝石号 (Crown Jewel)");
labelFunc0410_0095:
	UI_show_npc_face(0xFFF0, 0x0000);
	if (!(!gflags[0x004F])) goto labelFunc0410_00B1;
	message("这个男人散发着友善和亲切的气息。「啊，圣者！我一眼就认出你了！消息在镇上传得很快。我已经听说你在这里了。」");
	say();
	gflags[0x004F] = true;
	goto labelFunc0410_00BB;
labelFunc0410_00B1:
	message("「再次你好，");
	message(var0000);
	message("～」 Klog 问道。「我能为你做什么吗？」");
	say();
labelFunc0410_00BB:
	converse attend labelFunc0410_029A;
	case "姓名" attend labelFunc0410_00D1:
	message("「我叫 Klog。」");
	say();
	UI_remove_answer("姓名");
labelFunc0410_00D1:
	case "职业" attend labelFunc0410_00EA:
	message("「我是 Trinsic 友谊会分会的领袖。我和我的妻子 Ellen 一起在这里工作。」");
	say();
	UI_add_answer(["友谊会", "Ellen"]);
labelFunc0410_00EA:
	case "谋杀" attend labelFunc0410_0117:
	if (!var0003) goto labelFunc0410_00FF;
	message("方块震动着。「 Hook 干得非常出色，不是吗？太可惜了我错过了。为了顾及颜面和制造不在场证明，我必须待在家里。」");
	say();
	goto labelFunc0410_0103;
labelFunc0410_00FF:
	message("「嗯...」 男人若有所思地说，「我整晚都在家，我的妻子 Ellen 可以证明这一点。但是，正如我们在友谊会中所说，『价值先行于报偿』。Christopher 一定是做了什么坏事。而可怜的石像鬼 Inamo！这真是个遗憾。」");
	say();
labelFunc0410_0103:
	UI_remove_answer("谋杀");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc0410_0117:
	case "友谊会" attend labelFunc0410_0142:
	if (!(!gflags[0x0006])) goto labelFunc0410_0137;
	message("「友谊会每天晚上九点在 Trinsic 的分会办公室聚会。欢迎你来参加。」");
	say();
	Func0919();
	UI_add_answer("理念");
	goto labelFunc0410_013B;
labelFunc0410_0137:
	message("「哎呀，你现在应该对我们这个小家庭了若指掌了吧！」");
	say();
labelFunc0410_013B:
	UI_remove_answer("友谊会");
labelFunc0410_0142:
	case "Ellen" attend labelFunc0410_0155:
	message("「她是我的妻子，也是我们分会的簿记员。」");
	say();
	UI_remove_answer("Ellen");
labelFunc0410_0155:
	case "理念" attend labelFunc0410_0167:
	Func091A();
	UI_remove_answer("理念");
labelFunc0410_0167:
	case "Christopher" attend labelFunc0410_0188:
	message("「Christopher 曾有一段时间是友谊会的重要成员。不幸的是，我们上周发生了一点小争执。」");
	say();
	UI_remove_answer("Christopher");
	if (!(!var0002)) goto labelFunc0410_0188;
	UI_add_answer("争执");
labelFunc0410_0188:
	case "Inamo" attend labelFunc0410_019B:
	message("「我不认识那个石像鬼。听起来他好像在错误的时间出现在错误的地点。这真是个遗憾。」");
	say();
	UI_remove_answer("Inamo");
labelFunc0410_019B:
	case "争执" attend labelFunc0410_01B5:
	message("「上周 Christopher 表示他想离开友谊会！你能想像吗？嗯，我们只是试图与他交谈并改变他的决定。这个人竟然毫无理由地用言语攻击我和我的同伴！」");
	say();
	UI_remove_answer("争执");
	UI_add_answer("同伴");
labelFunc0410_01B5:
	case "测验" attend labelFunc0410_01C8:
	message("「不列颠城的巴特林很乐意为你进行我们的测验。你一定要参加。谁知道呢？你可能会发现自己内心有什么需要改进的地方。」");
	say();
	UI_remove_answer("测验");
labelFunc0410_01C8:
	case "同伴" attend labelFunc0410_01DF:
	message("「他们已经去了不列颠城的友谊会总部。他们来这里是为了运送友谊会的资金。他们的名字是 Elizabeth 和 Abraham。」");
	say();
	gflags[0x0041] = true;
	UI_remove_answer("同伴");
labelFunc0410_01DF:
	case "金币" attend labelFunc0410_0206:
	if (!var0003) goto labelFunc0410_01FB;
	message("方块震动着。「那是交付黑月之门 (Black Gate) 底座计划的报酬。」");
	say();
	UI_add_answer("黑月之门 (Black Gate)");
	goto labelFunc0410_01FF;
labelFunc0410_01FB:
	message("「我不知道你在说什么。」");
	say();
labelFunc0410_01FF:
	UI_remove_answer("金币");
labelFunc0410_0206:
	case "黑月之门 (Black Gate)" attend labelFunc0410_0219:
	message("「我只知道它正建在圣者之岛 (Isle of the Avatar) 上。」");
	say();
	UI_remove_answer("黑月之门 (Black Gate)");
labelFunc0410_0219:
	case "徽章" attend labelFunc0410_022C:
	message("「Christopher 表达了离开友谊会的意愿。也许他把它收起来安全保管了。」");
	say();
	UI_remove_answer("徽章");
labelFunc0410_022C:
	case "卷轴" attend labelFunc0410_024C:
	if (!var0003) goto labelFunc0410_0241;
	message("方块震动着。「 Christopher 在展现他的价值之前就得到了报酬。他背弃了交付底座计划的承诺。这只是一个警告。」");
	say();
	goto labelFunc0410_0245;
labelFunc0410_0241:
	message("「我对此一无所知。」");
	say();
labelFunc0410_0245:
	UI_remove_answer("卷轴");
labelFunc0410_024C:
	case "皇冠宝石号 (Crown Jewel)" attend labelFunc0410_026C:
	if (!var0003) goto labelFunc0410_0261;
	message("方块震动着。「那是 Hook 的船。」");
	say();
	goto labelFunc0410_0265;
labelFunc0410_0261:
	message("「我不知道那艘船。」");
	say();
labelFunc0410_0265:
	UI_remove_answer("皇冠宝石号 (Crown Jewel)");
labelFunc0410_026C:
	case "Hook" attend labelFunc0410_028C:
	if (!var0003) goto labelFunc0410_0281;
	message("方块震动着。「他就是被指派去杀死 Christopher 的人。我不知道他现在在哪里。」");
	say();
	goto labelFunc0410_0285;
labelFunc0410_0281:
	message("「恐怕我不认识符合这个描述的人。」");
	say();
labelFunc0410_0285:
	UI_remove_answer("Hook");
labelFunc0410_028C:
	case "告辞" attend labelFunc0410_0297:
	goto labelFunc0410_029A;
labelFunc0410_0297:
	goto labelFunc0410_00BB;
labelFunc0410_029A:
	endconv;
	message("「如果还有什么我可以帮忙的，");
	message(var0000);
	message("，请告诉我。」");
	say();
labelFunc0410_02A5:
	if (!(event == 0x0000)) goto labelFunc0410_02B3;
	Func092E(0xFFF0);
labelFunc0410_02B3:
	return;
}
