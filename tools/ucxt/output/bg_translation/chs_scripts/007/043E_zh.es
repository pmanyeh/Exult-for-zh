#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func043E object#(0x43E) ()
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

	if (!(event == 0x0001)) goto labelFunc043E_03A7;
	UI_show_npc_face(0xFFC2, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00BF])) goto labelFunc043E_003A;
	message("你看见一个浑身脏兮兮的乞丐，他对你咧嘴一笑，仿佛你是他全世界最好的朋友。");
	say();
	gflags[0x00BF] = true;
	goto labelFunc043E_0044;
labelFunc043E_003A:
	message("「又见面了，");
	message(var0000);
	message("，」 Snaz 说。");
	say();
labelFunc043E_0044:
	converse attend labelFunc043E_03A2;
	case "姓名" attend labelFunc043E_005A:
	message("「我叫 Snaz 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043E_005A:
	case "职业" attend labelFunc043E_0073:
	message("「我没有工作，因为我是个乞丐。只要一枚金币，我就说个笑话给你听。」");
	say();
	UI_add_answer(["乞丐", "说个笑话"]);
labelFunc043E_0073:
	case "乞丐" attend labelFunc043E_0086:
	message("「当我还是个小男孩的时候，我就成了孤儿，无家可归、身无分文。那是生活对我开的一个玩笑。这玩笑真有趣，是吧？~~「但我不会为那个向你收金币的。」");
	say();
	UI_remove_answer("乞丐");
labelFunc043E_0086:
	case "说个笑话" attend labelFunc043E_00DE:
	message("「你想听一个吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc043E_00D3;
	var0002 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0002) goto labelFunc043E_00C6;
	message("「好吧，这里有一个……」");
	say();
	UI_add_answer("友谊会笑话");
	goto labelFunc043E_00D0;
labelFunc043E_00C6:
	message("「如果你想听笑话，你必须付钱给我，");
	message(var0000);
	message("。等你的口袋满了再来吧。你越有钱，我就越幽默！」");
	say();
labelFunc043E_00D0:
	goto labelFunc043E_00D7;
labelFunc043E_00D3:
	message("「行行好吧，我求你了！我有一个妻子和六个饥饿的孩子要养。」他感觉到你正盯着他看。「喔，好吧。你相信我有一只猫，而牠刚生了小猫吗？」");
	say();
labelFunc043E_00D7:
	UI_remove_answer("说个笑话");
labelFunc043E_00DE:
	case "友谊会笑话" attend labelFunc043E_00FE:
	message("「前几天我在跟一个友谊会成员讨论理念，他问我：『依你看，什么是愚蠢的最高境界？』~~「所以我说：『我不知道。你有多高？』~~「不，说真的，我虽然拿友谊会开玩笑，但我是真心的……」");
	say();
	UI_remove_answer("友谊会笑话");
	UI_add_answer(["友谊会", "不列颠王的笑话"]);
labelFunc043E_00FE:
	case "友谊会" attend labelFunc043E_0111:
	message("「这就是我深深喜爱友谊会的原因。他们总是开得起玩笑！~~「而且据我所知，他们自己也开很有趣的玩笑！就像他们在 Trinsic 开的那个玩笑！」");
	say();
	UI_remove_answer("友谊会");
labelFunc043E_0111:
	case "不列颠王的笑话" attend labelFunc043E_0178:
	message("「只要一枚金币，我就再跟你说一个。你想听吗？」");
	say();
	var0003 = Func090A();
	if (!(!var0003)) goto labelFunc043E_0138;
	message("「看来我已经达到了你的幽默感极限了。」");
	say();
	UI_remove_answer("不列颠王的笑话");
	goto labelFunc043E_0178;
labelFunc043E_0138:
	var0004 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc043E_016D;
	message("「前几天我在不列颠王的城堡里，我注意到他有三个大水池。所以我问他为什么有三个。~~「他指着第一个说，第一个是用来在凉水中游泳的。~~「第二个是让朋友们在温水中游泳的。~~「我注意到第三个水池是空的，所以我问他为什么。~~「他说那是给不会游泳的人用的！」");
	say();
	UI_remove_answer("不列颠王的笑话");
	UI_add_answer(["不列颠王", "Weston 笑话"]);
	goto labelFunc043E_0178;
labelFunc043E_016D:
	message("「你比我还穷！如果我现在再跟你说任何笑话，你可能会偷走我的饭碗！」");
	say();
	UI_remove_answer("不列颠王的笑话");
labelFunc043E_0178:
	case "不列颠王" attend labelFunc043E_018B:
	message("「可怜的不列颠王！当面对威胁他整个王国的巨大威胁时，他是一位极其能干的统治者。~~「但当有成千上万件间接威胁他人民福祉的小事发生时呢？~~「这就是留给你解开的谜题了！」");
	say();
	UI_remove_answer("不列颠王");
labelFunc043E_018B:
	case "Weston 笑话" attend labelFunc043E_01F8:
	message("「只要一枚金币，我就再跟你说一个。你想听吗？」");
	say();
	var0005 = Func090A();
	if (!(!var0005)) goto labelFunc043E_01B2;
	message("「很好。如果你听不懂前两个，我现在也没有理由继续下去了。」");
	say();
	UI_remove_answer("Weston 笑话");
	goto labelFunc043E_01F8;
labelFunc043E_01B2:
	var0006 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc043E_01E7;
	message("「一个名叫 Weston 的人满脸困惑地来找我。~~「他告诉我他想从皇家果园偷些苹果，但如果他这么做，他隔天早上会觉得很良心不安。~~「所以我给了他这个建议——睡到中午！」");
	say();
	UI_remove_answer("Weston 笑话");
	UI_add_answer(["Weston", "法师笑话"]);
	goto labelFunc043E_01F8;
labelFunc043E_01E7:
	message("「你的口袋空空如也，");
	message(var0000);
	message("。也许是时候停止笑，开始担心了！」");
	say();
	UI_remove_answer("Weston 笑话");
labelFunc043E_01F8:
	case "Weston" attend labelFunc043E_020B:
	message("「Weston 现在坐在城堡的监狱里，他肯定会在那里度过余生。嘿嘿嘿！~~「尽我所能，我也无法超越那个小笑话！」");
	say();
	UI_remove_answer("Weston");
labelFunc043E_020B:
	case "法师笑话" attend labelFunc043E_0272:
	message("「只要一枚金币，我就再跟你说一个。你想听吗？」");
	say();
	var0007 = Func090A();
	if (!(!var0007)) goto labelFunc043E_0232;
	message("「你很明智。你应该把金币省下来，付钱给治疗师来治好你侧腹的疼痛。」");
	say();
	UI_remove_answer("法师笑话");
	goto labelFunc043E_0272;
labelFunc043E_0232:
	var0008 = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc043E_0267;
	message("「在路上旅行时，我遇到了一位法师。~~「他看起来好像几天没吃东西了，并抱怨他的胃痛得要命。~~「所以我告诉他，他的胃是空的。如果他往里面塞点东西，他会觉得好点的。~~「后来他向我抱怨他头痛。我说他的头痛是由于跟他的胃类似的问题引起的。~~「毫无疑问那会让他这么痛，因为身为一个法师，他的脑子里什么都没剩下了！」");
	say();
	UI_remove_answer("法师笑话");
	UI_add_answer(["法师们", "Sullivan 笑话"]);
	goto labelFunc043E_0272;
labelFunc043E_0267:
	message("「现在你在跟我开玩笑了。你破产了！」");
	say();
	UI_remove_answer("法师笑话");
labelFunc043E_0272:
	case "法师们" attend labelFunc043E_0285:
	message("「所有的法师都变傻或发疯了！在一个如此好笑的世界里，还有什么其他适当的反应呢？！」");
	say();
	UI_remove_answer("法师们");
labelFunc043E_0285:
	case "Sullivan 笑话" attend labelFunc043E_02E5:
	message("「你真是个勇敢的圣者！你想听下一个吗？」");
	say();
	var0009 = Func090A();
	if (!(!var0009)) goto labelFunc043E_02AC;
	message("「啊哈！没我想像中的勇敢！」");
	say();
	UI_remove_answer("joke five");//這個沒有對應到UI_add_answer("joke five")來源，所以就不處理了
	goto labelFunc043E_02E5;
labelFunc043E_02AC:
	var000A = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc043E_02E1;
	message("「你知道声名狼藉的骗子 Sullivan 最近当爸爸了吗？~~「这是真的！他们说那婴儿有他父亲的眼睛和他母亲的鼻子，但他们逼那个婴儿把它们还回去。」");
	say();
	UI_remove_answer("Sullivan 笑话");
	UI_add_answer(["Sullivan", "黄金笑话"]);
	goto labelFunc043E_02E5;
labelFunc043E_02E1:
	message("「你可能在笑，但你的钱包肯定没有，因为它是空的。」");
	say();
labelFunc043E_02E5:
	case "Sullivan" attend labelFunc043E_02F8:
	message("「是的，我认识那个被称为骗子 Sullivan 的人！事实上你让我想起了他！~~「还是他让我想起了你？~~「他太狡猾了，光是谈论他就让我把自己给骗了！嘿-嘻-哈！」");
	say();
	UI_remove_answer("Sullivan");
labelFunc043E_02F8:
	case "黄金笑话" attend labelFunc043E_0394:
	message("「到目前为止我都逗乐了你！你想听下一个吗？这是个关于黄金的笑话！」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc043E_0389;
	var000C = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000C) goto labelFunc043E_0382;
labelFunc043E_032A:
	UI_play_sound_effect(0x0017);
	message("「非常感谢你！现在，再见！」");
	say();
	message("「你听懂了吗？哈！哈！哈！哈！如果不懂，我很乐意再说一遍。」");
	say();
	message("「你想再听一次黄金笑话吗？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc043E_0374;
	message("「现在仔细听好……」");
	say();
	var000E = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc043E_036D;
	goto labelFunc043E_032A;
	goto labelFunc043E_0371;
labelFunc043E_036D:
	message("「喔，我真的很抱歉。我不能再讲一次笑话了，因为你没钱了。」");
	say();
labelFunc043E_0371:
	goto labelFunc043E_037F;
labelFunc043E_0374:
	message("「看来你已经开始懂得演艺圈的规矩了，");
	message(var0000);
	message("。祝你有美好的一天！」");
	say();
	abort;
labelFunc043E_037F:
	goto labelFunc043E_0386;
labelFunc043E_0382:
	message("「我看得出来你穷到连幽默感都买不起了！」");
	say();
labelFunc043E_0386:
	goto labelFunc043E_038D;
labelFunc043E_0389:
	message("「喔，真可惜你不想听！这是目前为止最好笑的一个，也是我个人最喜欢的！」");
	say();
labelFunc043E_038D:
	UI_remove_answer("黄金笑话");
labelFunc043E_0394:
	case "告辞" attend labelFunc043E_039F:
	goto labelFunc043E_03A2;
labelFunc043E_039F:
	goto labelFunc043E_0044;
labelFunc043E_03A2:
	endconv;
	message("「我真希望我逗乐了你。」*");
	say();
labelFunc043E_03A7:
	if (!(event == 0x0000)) goto labelFunc043E_042E;
	var000F = UI_part_of_day();
	var0010 = UI_get_schedule_type(UI_get_npc_object(0xFFC2));
	var0011 = UI_die_roll(0x0001, 0x0004);
	if (!(var0010 == 0x000C)) goto labelFunc043E_0428;
	if (!(var0011 == 0x0001)) goto labelFunc043E_03EB;
	var0012 = "@赏点零钱吧？@";
labelFunc043E_03EB:
	if (!(var0011 == 0x0002)) goto labelFunc043E_03FB;
	var0012 = "@有铜板能给我吗？@";
labelFunc043E_03FB:
	if (!(var0011 == 0x0003)) goto labelFunc043E_040B;
	var0012 = "@贩售笑话！@";
labelFunc043E_040B:
	if (!(var0011 == 0x0004)) goto labelFunc043E_041B;
	var0012 = "@接受施舍！@";
labelFunc043E_041B:
	UI_item_say(0xFFC2, var0012);
	goto labelFunc043E_042E;
labelFunc043E_0428:
	Func092E(0xFFC2);
labelFunc043E_042E:
	return;
}


