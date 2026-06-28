#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E3 object#(0x4E3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04E3_020D;
	UI_show_npc_face(0xFF1D, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_get_npc_object(0xFF1D);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02A7]) goto labelFunc04E3_004C;
	if (!gflags[0x02A5]) goto labelFunc04E3_004C;
	UI_add_answer("他想念你");
labelFunc04E3_004C:
	if (!(!gflags[0x02B0])) goto labelFunc04E3_005E;
	message("你看到一位老海盗，他曾经可能看起来极其危险。");
	say();
	gflags[0x02B0] = true;
	goto labelFunc04E3_0062;
labelFunc04E3_005E:
	message("「什么事？」 Mole 问。");
	say();
labelFunc04E3_0062:
	converse attend labelFunc04E3_0208;
	case "姓名" attend labelFunc04E3_007F:
	message("「我的名字是 Mole ，正是！别问我是怎么得到这个名字的。说来话长。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("故事");
labelFunc04E3_007F:
	case "职业" attend labelFunc04E3_0098:
	message("「许多年来我在海上游荡，掠夺、强奸和制造恐惧。现在我已经年过五十，我想在海盗巢穴 (Buccaneer's Den)这里相对平静安宁地度过余生。」");
	say();
	UI_add_answer(["平静安宁", "海盗巢穴"]);
labelFunc04E3_0098:
	case "故事" attend labelFunc04E3_00EE:
	message("「你真的想听吗？很长喔。」");
	say();
	if (!Func090A()) goto labelFunc04E3_00DF;
	message("「好吧。我出生在一个洞穴里。所以我母亲给我取名叫 Mole (鼹鼠) 。」*");
	say();
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc04E3_00DC;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我以为你说这是个很长的故事。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF1D, 0x0000);
labelFunc04E3_00DC:
	goto labelFunc04E3_00E3;
labelFunc04E3_00DF:
	message("「很好。那我就说我是出生在一个洞穴里，所以我母亲给我取名叫 Mole (鼹鼠) 怎么样？」");
	say();
labelFunc04E3_00E3:
	message("Mole 耸耸肩。「我想我长话短说好了。」");
	say();
	UI_remove_answer("故事");
labelFunc04E3_00EE:
	case "平静安宁" attend labelFunc04E3_0101:
	message("「这是美好的生活。我对当海盗感到厌倦了。我对盐水、生肉、甲板上的污水、鹦鹉粪便，以及听到的每隔一个字就是『哈！』感到厌倦了。」");
	say();
	UI_remove_answer("平静安宁");
labelFunc04E3_0101:
	case "海盗巢穴" attend labelFunc04E3_011B:
	message("「我把时间花在赌坊 (House of Games) 或堕落处女 (Fallen Virgin) 。我喜欢骰子在毡布上弹跳的声音。我喜欢温暖的麦酒滑下喉咙的味道！而且……我还有友谊会。」");
	say();
	UI_remove_answer("海盗巢穴");
	UI_add_answer("友谊会");
labelFunc04E3_011B:
	case "友谊会" attend labelFunc04E3_0149:
	message("「这个组织给了我新的生命。我以为我在当活跃海盗时有过伙伴，但他们无法与我在友谊会里的兄弟们相比。");
	say();
	if (!var0001) goto labelFunc04E3_0131;
	message("「嘿，我看到你也是会员！你一定品格高尚！");
	say();
labelFunc04E3_0131:
	message("「我以前的伙伴，像我的朋友 Blacktooth ，已经半途而废了。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["Blacktooth", "伙伴"]);
labelFunc04E3_0149:
	case "Blacktooth" attend labelFunc04E3_015C:
	message("「Blacktooth 住在这里的岛上。我们曾经是同一条链子上的环节，懂我的意思吗？但自从我加入友谊会后，他就把我当空气！他表现得好像我得了瘟疫什么的。我不明白。让我想把什么东西切成肉末！」");
	say();
	UI_remove_answer("Blacktooth");
labelFunc04E3_015C:
	case "伙伴" attend labelFunc04E3_0176:
	message("「Blacktooth 就像我的兄弟。不像我在友谊会里的兄弟，而是一个『真正』的兄弟，懂我的意思吗？我们『什么』都一起做。我们会分享战利品！我们会分享女人！我们无所不作！」");
	say();
	UI_remove_answer("伙伴");
	UI_add_answer("兄弟");
labelFunc04E3_0176:
	case "兄弟" attend labelFunc04E3_0196:
	message("「嗯，他现在不是兄弟了！他恨我！如果他不想和我扯上关系，那就这样吧！」但 Mole 很快补充道：「他没有意识到我为他做了什么。我让他能活下去！当他得坏血病时是谁照顾他的？我！当他被屠夫 Silverbeard 砍成碎片时是谁帮他包扎的？我！」");
	say();
	UI_remove_answer("兄弟");
	UI_add_answer(["过去的生活", "Silverbeard"]);
labelFunc04E3_0196:
	case "Silverbeard" attend labelFunc04E3_01A9:
	message("「哦，他是个脾气暴躁的老海盗。如果他识相的话，他可能已经死了！」");
	say();
	UI_remove_answer("Silverbeard");
labelFunc04E3_01A9:
	case "过去的生活" attend labelFunc04E3_01DC:
	message("「是的，那是与现在不同的生活……」 Mole 眼神短暂地失焦，回想着过去的记忆。最后他说：「我可能对友谊会的事情太过执着了。也许我逼得他太紧了。我很抱歉。如果他愿意再给我一次机会，我可能会离开友谊会。他们并不像我说的那么美好。他们比我以前一起航海的海盗还要狡猾！」 Mole 皱起眉头。「你让我的心情变得很糟。」");
	say();
	UI_remove_answer("过去的生活");
	gflags[0x02A7] = true;
	if (!gflags[0x02A5]) goto labelFunc04E3_01D7;
	UI_add_answer("他想念你");
	UI_remove_answer("过去的生活");
	goto labelFunc04E3_01DC;
labelFunc04E3_01D7:
	message("*");
	say();
	abort;
labelFunc04E3_01DC:
	case "他想念你" attend labelFunc04E3_01FA:
	message("你告诉 Mole 关于 Blacktooth 说的话。这个老海盗身上发生了变化，就像你刚给了他一束花一样。~~「你一定在开玩笑！ Blackie 想我？我以为他恨透我了！我得去散散步，也许会碰上那条老狗！谢谢你，陌生人，告诉我这个消息。」~~说完， Mole 转身离开了你，迈着轻快的步伐。*");
	say();
	UI_remove_answer("他想念你");
	UI_set_schedule_type(var0002, 0x000C);
	abort;
labelFunc04E3_01FA:
	case "告辞" attend labelFunc04E3_0205:
	goto labelFunc04E3_0208;
labelFunc04E3_0205:
	goto labelFunc04E3_0062;
labelFunc04E3_0208:
	endconv;
	message("「再见，陌生人。」*");
	say();
labelFunc04E3_020D:
	if (!(event == 0x0000)) goto labelFunc04E3_028D;
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF1D));
	if (!(var0004 == 0x000B)) goto labelFunc04E3_0287;
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc04E3_024A;
	var0006 = "@哈！@";
labelFunc04E3_024A:
	if (!(var0005 == 0x0002)) goto labelFunc04E3_025A;
	var0006 = "@快停下！@";
labelFunc04E3_025A:
	if (!(var0005 == 0x0003)) goto labelFunc04E3_026A;
	var0006 = "@该死！@";
labelFunc04E3_026A:
	if (!(var0005 == 0x0004)) goto labelFunc04E3_027A;
	var0006 = "@该死的鹦鹉屎……@";
labelFunc04E3_027A:
	UI_item_say(0xFF1D, var0006);
	goto labelFunc04E3_028D;
labelFunc04E3_0287:
	Func092E(0xFF1D);
labelFunc04E3_028D:
	return;
}


