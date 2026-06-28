#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E2 object#(0x4E2) ()
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

	if (!(event == 0x0001)) goto labelFunc04E2_026D;
	UI_show_npc_face(0xFF1E, 0x0000);
	var0000 = Func0908();
	var0001 = UI_wearing_fellowship();
	var0002 = "圣者";
	var0003 = UI_get_npc_object(0xFF1E);
	if (!gflags[0x02A3]) goto labelFunc04E2_003B;
	var0004 = var0000;
labelFunc04E2_003B:
	if (!gflags[0x02A4]) goto labelFunc04E2_0047;
	var0004 = var0002;
labelFunc04E2_0047:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02A5]) goto labelFunc04E2_006A;
	if (!gflags[0x02A7]) goto labelFunc04E2_006A;
	UI_add_answer("Mole 说……");
labelFunc04E2_006A:
	if (!(!gflags[0x02AF])) goto labelFunc04E2_00BB;
	message("这个高大、中年的海盗充满怀疑地看着你。~~「在我多看你一眼之前，我必须知道你是谁。」他的声音充满威胁。");
	say();
	var0005 = Func090B([var0000, var0002]);
	if (!(var0005 == var0000)) goto labelFunc04E2_009C;
	message("这个海盗在回答前嚼了嚼嘴里的东西。「嗨，」他最后说。");
	say();
	gflags[0x02A3] = true;
	var0004 = var0000;
labelFunc04E2_009C:
	if (!(var0005 == var0002)) goto labelFunc04E2_00B4;
	message("海盗看起来就像你刚侮辱了他的母亲。~~「我……不……喜……欢……圣者 ！！」~~海盗在地上吐了口唾沫。「但你看起来不像我上次交谈的那个圣者 那么像鱼饵。好吧。我会和你说话。」");
	say();
	gflags[0x02A4] = true;
	var0004 = var0002;
labelFunc04E2_00B4:
	gflags[0x02AF] = true;
	goto labelFunc04E2_00D7;
labelFunc04E2_00BB:
	if (!(gflags[0x02A6] || (!gflags[0x02A5]))) goto labelFunc04E2_00D3;
	message("「你想要什么？」 Blacktooth 用威胁的声音问。「喔，是你啊，");
	message(var0004);
	message("。」");
	say();
	goto labelFunc04E2_00D7;
labelFunc04E2_00D3:
	message("「我以为你不想当我的朋友！」 Blacktooth 抱怨道。");
	say();
labelFunc04E2_00D7:
	converse attend labelFunc04E2_0256;
	case "姓名" attend labelFunc04E2_00ED:
	message("「我是 Blacktooth (黑牙) 。看？」海盗笑了，露出他的牙齿。");
	say();
	UI_remove_answer("姓名");
labelFunc04E2_00ED:
	case "职业" attend labelFunc04E2_0106:
	message("「把圣者做成鱼饵！」他大笑。「我已经受够那些跑来跑去，自称是圣者的瘦弱家伙了！我正在找上周来过这里的特定一个圣者。一个身为友谊会成员的圣者！」");
	say();
	UI_add_answer(["圣者", "友谊会"]);
labelFunc04E2_0106:
	case "圣者" attend labelFunc04E2_0120:
	message("「他一周前来过这里。试图从我身上偷些金币！那个混蛋！在我意识到他做了什么之前，他就已经溜走了。」");
	say();
	UI_remove_answer("圣者");
	UI_add_answer("偷窃");
labelFunc04E2_0120:
	case "偷窃" attend labelFunc04E2_013D:
	message("「我们在酒馆里玩牌。如果他没有从底下发牌，我就该死。我通常能看穿那种把戏，但他很厉害！」");
	say();
	if (!var0001) goto labelFunc04E2_0136;
	message("海盗注意到你的友谊会奖章。「我看你也是他们的一员！」");
	say();
labelFunc04E2_0136:
	UI_remove_answer("偷窃");
labelFunc04E2_013D:
	case "友谊会" attend labelFunc04E2_0175:
	if (!var0001) goto labelFunc04E2_0154;
	var0006 = "@请别见怪，但是";
	goto labelFunc04E2_015A;
labelFunc04E2_0154:
	var0006 = "@你我之间，";
labelFunc04E2_015A:
	message(var0006);
	message("我不信任他们。我认为他们都在隐瞒什么。我认为他们都是骗子。拿我的老朋友 Mole 来说吧。嗯，我的前老朋友 Mole 。自从他加入他们之后，他改变了很多。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["Mole", "改变"]);
labelFunc04E2_0175:
	case "Mole" attend labelFunc04E2_0188:
	message("「他是另一个退休住在岛上的老海盗。我们曾是多年的伙伴，但后来他加入了那个该死的友谊会。现在他觉得自己的排泄物不臭了，如果你懂我的意思。」");
	say();
	UI_remove_answer("Mole");
labelFunc04E2_0188:
	case "改变" attend labelFunc04E2_021A:
	message("「他已经放弃了所有海盗的行径！他现在是个该死的圣人，每当他看到我，他就试图说服我加入友谊会。我现在不惜一切代价避开他。我受不了看到他变成这样。这让我怒火中烧！」~~然后，在一个软弱的时刻，这个强悍的海盗小声地说：「我也想他。我们曾经是最好的伙伴。」你敢发誓他眼里有泪水。*");
	say();
	var0007 = Func08F7(0xFFFE);
	if (!var0007) goto labelFunc04E2_01E6;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 低语：「噢，拜托，像个男人点！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc04E2_01DC;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 转过头去以忍住笑意。*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc04E2_01DC:
	UI_show_npc_face(0xFF1E, 0x0000);
labelFunc04E2_01E6:
	message("你可以看出海盗很沮丧，所以你决定让他一个人静一静。~~「对，走开。没错！我从来都留不住任何朋友！");
	say();
	if (!gflags[0x02A4]) goto labelFunc04E2_01F4;
	message("「像这样离开我，真像是圣者 的作风！");
	say();
labelFunc04E2_01F4:
	if (!var0001) goto labelFunc04E2_01FE;
	message("「典型的友谊会成员！没错！别烦我！走开！");
	say();
labelFunc04E2_01FE:
	message("「我就继续孤独且贫困地留在这里吧！我的匕首在哪里？我要割喉自尽！！」");
	say();
	UI_remove_answer("改变");
	gflags[0x02A5] = true;
	if (!gflags[0x02A7]) goto labelFunc04E2_021A;
	UI_add_answer("Mole 说……");
labelFunc04E2_021A:
	case "Mole 说……" attend labelFunc04E2_0248:
	message("「他这么说？真的吗？」 Blacktooth 看起来好像又要哭了。~~「我必须去看看他。我谢谢你，");
	message(var0004);
	message("，谢谢你考虑到我在这件事上的感受。」 Blacktooth 给了你一个大大的拥抱，然后转身去寻找 Mole 。*");
	say();
	UI_remove_answer("Mole 说……");
	gflags[0x02A6] = true;
	Func0911(0x0014);
	UI_set_schedule_type(var0003, 0x000C);
	abort;
labelFunc04E2_0248:
	case "告辞" attend labelFunc04E2_0253:
	goto labelFunc04E2_0256;
labelFunc04E2_0253:
	goto labelFunc04E2_00D7;
labelFunc04E2_0256:
	endconv;
	if (!(gflags[0x02A6] || (!gflags[0x02A5]))) goto labelFunc04E2_0269;
	message("「那下次吧。」*");
	say();
	goto labelFunc04E2_026D;
labelFunc04E2_0269:
	message("「对，再见！离开！他们最终都会离我而去！」*");
	say();
labelFunc04E2_026D:
	if (!(event == 0x0000)) goto labelFunc04E2_02ED;
	var0009 = UI_get_schedule_type(UI_get_npc_object(0xFF1E));
	if (!(var0009 == 0x000B)) goto labelFunc04E2_02E7;
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var000A == 0x0001)) goto labelFunc04E2_02AA;
	var000B = "@哈！@";
labelFunc04E2_02AA:
	if (!(var000A == 0x0002)) goto labelFunc04E2_02BA;
	var000B = "@快停下！@";
labelFunc04E2_02BA:
	if (!(var000A == 0x0003)) goto labelFunc04E2_02CA;
	var000B = "@该死！@";
labelFunc04E2_02CA:
	if (!(var000A == 0x0004)) goto labelFunc04E2_02DA;
	var000B = "@该死的鹦鹉屎……@";
labelFunc04E2_02DA:
	UI_item_say(0xFF1E, var000B);
	goto labelFunc04E2_02ED;
labelFunc04E2_02E7:
	Func092E(0xFF1E);
labelFunc04E2_02ED:
	return;
}


