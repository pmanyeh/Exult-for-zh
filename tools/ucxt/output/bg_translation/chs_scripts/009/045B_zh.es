#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func045B object#(0x45B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc045B_02B3;
	UI_show_npc_face(0xFFA5, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFA5));
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc045B_005E;
	if (!(!(var0000 == 0x0010))) goto labelFunc045B_003F;
	goto labelFunc045B_005E;
labelFunc045B_003F:
	var0002 = Func08FC(0xFFA5, 0xFFAF);
	if (!var0002) goto labelFunc045B_0059;
	message("友谊会集会正在进行中，Burnside 现在不会和你说话。*");
	say();
	abort;
	goto labelFunc045B_005E;
labelFunc045B_0059:
	message("「我现在不能说话！我参加友谊会集会迟到了！」*");
	say();
	abort;
labelFunc045B_005E:
	var0003 = Func0909();
	var0004 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00FD]) goto labelFunc045B_0088;
	UI_add_answer("设计图");
labelFunc045B_0088:
	if (!(!gflags[0x0116])) goto labelFunc045B_00A2;
	message("你看到一位努力维持威严姿态的年迈男子。");
	say();
	message("他一看到你就睁大了眼睛。");
	say();
	message("「我听说你又在不列颠尼亚旅行了，但我亲眼看到才敢相信！欢迎，圣者！」");
	say();
	gflags[0x0116] = true;
	goto labelFunc045B_00A6;
labelFunc045B_00A2:
	message("「啊，圣者。很高兴再次见到你。」Burnside 说。");
	say();
labelFunc045B_00A6:
	converse attend labelFunc045B_02AE;
	case "姓名" attend labelFunc045B_00BC:
	message("「我叫 Burnside。」");
	say();
	UI_remove_answer("姓名");
labelFunc045B_00BC:
	case "职业" attend labelFunc045B_00ED:
	if (!gflags[0x011F]) goto labelFunc045B_00D8;
	message("「我是 Minoc 的镇长，这二十多年来一直都是。」");
	say();
	UI_add_answer("Minoc");
	goto labelFunc045B_00ED;
labelFunc045B_00D8:
	message("「我恳求你，");
	message(var0003);
	message("，请对在 William 的锯木厂里被谋杀的两个可怜灵魂表现出一些尊重。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀");
labelFunc045B_00ED:
	case "Minoc" attend labelFunc045B_010D:
	message("「除了这些谋杀案，我们是一个由商业运作的城镇。金币驱动着这个城镇。金钱流向哪里，Minoc 就跟着走向哪里。以这件纪念碑的事为例。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["谋杀", "纪念碑"]);
labelFunc045B_010D:
	case "谋杀" attend labelFunc045B_0120:
	message("「由于 Frederico 和 Tania 实际上并非 Minoc 的居民，身为镇长除了增加镇守卫之外，我能做的不多。这项调查多少超出了我的管辖范围。看来凶手是外地人，而且现在可能早就逃之夭夭了。谢天谢地。」");
	say();
	UI_remove_answer("谋杀");
labelFunc045B_0120:
	case "纪念碑" attend labelFunc045B_014E:
	if (!(!gflags[0x00F7])) goto labelFunc045B_0143;
	message("「我相信你已经知道为造船匠 Owen 创建纪念碑的计划了。他自己出钱。我通常反对这种公开的虚荣行为，但友谊会非常赞成。」");
	say();
	UI_add_answer(["虚荣", "友谊会"]);
	goto labelFunc045B_0147;
labelFunc045B_0143:
	message("「如果我允许建造那座纪念碑，这个城镇就毁了，所以我当然立刻禁止了它。」");
	say();
labelFunc045B_0147:
	UI_remove_answer("纪念碑");
labelFunc045B_014E:
	case "虚荣" attend labelFunc045B_0168:
	message("「但在这个特殊情况下，这对城镇有无可估量的好处。它提升了我们的声望。人们会从不列颠尼亚各地来参加揭幕典礼。」");
	say();
	UI_remove_answer("虚荣");
	UI_add_answer("揭幕");
labelFunc045B_0168:
	case "揭幕" attend labelFunc045B_017B:
	message("「哎呀，就连不列颠王本人也会出席！能获得私下觐见是个难得的机会。」");
	say();
	UI_remove_answer("揭幕");
labelFunc045B_017B:
	case "友谊会" attend labelFunc045B_01A2:
	if (!var0004) goto labelFunc045B_0190;
	message("「啊，我看到你戴着友谊会的奖章了。几年前这里的友谊会分会刚成立时，我是从 Elynor 那里拿到我的奖章的。」");
	say();
	goto labelFunc045B_0194;
labelFunc045B_0190:
	message("「是的，我戴着友谊会奖章，是 Elynor 给我的。别担心。我不会试着要你加入的！」他为了自己开的小玩笑紧张地笑了笑。");
	say();
labelFunc045B_0194:
	UI_remove_answer("友谊会");
	UI_add_answer("Elynor");
labelFunc045B_01A2:
	case "Elynor" attend labelFunc045B_01D7:
	if (!var0004) goto labelFunc045B_01C5;
	message("「Elynor 告诉我友谊会未来会在这里做很多善事。我很自豪能成为你们协会的成员，虽然我必须承认对你们的，呃，我们的理念相当无知。」");
	say();
	UI_add_answer("成员");
	UI_remove_answer("Elynor");
	goto labelFunc045B_01D7;
labelFunc045B_01C5:
	message("「Elynor 说友谊会能为 Minoc 带来很多钱。这对贸易会很棒。我绝不能让我的个人感情阻碍这个城镇的利益。」");
	say();
	UI_add_answer("感情");
	UI_remove_answer("Elynor");
labelFunc045B_01D7:
	case "成员" attend labelFunc045B_0208:
	message("「当友谊会分会首次在 Minoc 成立时，我被授予了荣誉会员。我没有参加定期集会。希望你对我不会太失望？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045B_01F6;
	message("「我很抱歉，圣者。我会努力表现，成为友谊会更有价值的成员。我求你，别把这件事告诉 Elynor。」");
	say();
	goto labelFunc045B_0201;
labelFunc045B_01F6:
	message("「感谢老天！我戴这个奖章主要是为了仪式目的，我猜你也是。我们都明白，无论个人感情如何，支持友谊会是目前政治上最明智的做法。」");
	say();
	UI_add_answer("感情");
labelFunc045B_0201:
	UI_remove_answer("成员");
labelFunc045B_0208:
	case "感情" attend labelFunc045B_0232:
	message("「圣者，我可以告诉你一个秘密吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045B_0227;
	message("「圣者，我必须向你承认，我觉得友谊会提倡的理念充其量只是可疑的，而且它的成员似乎主要由傻子和情感脆弱的人组成。」");
	say();
	goto labelFunc045B_022B;
labelFunc045B_0227:
	message("「哼！那么，请忘掉我这些欠缺考虑的话吧！」");
	say();
labelFunc045B_022B:
	UI_remove_answer("感情");
labelFunc045B_0232:
	case "设计图" attend labelFunc045B_0252:
	message("你向镇长展示了 Owen 画的设计图，确保仔细指出 Julia 发现的缺陷。镇长惊骇万分。~~「这太可怕了！绝对不能让任何人看到这个！如果大家知道我们的造船匠导致了那些人的死亡，这会毁了 Owen，并对我们的城镇造成无法弥补的损害！」");
	say();
	UI_remove_answer("设计图");
	UI_add_answer(["损害", "死亡"]);
labelFunc045B_0252:
	case "损害" attend labelFunc045B_0265:
	message("「但很少有人怀疑那些死亡是 Owen 的造船造成的！我们可以销毁设计图，真相就永远不会曝光！这能拯救城镇免于耻辱和可能的毁灭！」");
	say();
	UI_remove_answer("损害");
labelFunc045B_0265:
	case "死亡" attend labelFunc045B_0285:
	message("「话说回来，Owen 建造的船会继续沉没。如果这里被称为制造『死亡之船』的地方，对 Minoc 的伤害会更大。一个为无能之人创建纪念碑的城镇。」");
	say();
	UI_remove_answer(["死亡", "损害"]);
	UI_add_answer("雕像");
labelFunc045B_0285:
	case "雕像" attend labelFunc045B_02A0:
	message("「这没有其他办法了。雕像必须停止。我在此宣布取消雕像的创建。」");
	say();
	message("「喔，还有……呃，圣者……你能帮我去通知 Owen 这个坏消息吗？我现在有点忙。而且，我想他从你口中听到这件事，会比较能接受。」");
	say();
	gflags[0x00F7] = true;
	UI_remove_answer("雕像");
labelFunc045B_02A0:
	case "告辞" attend labelFunc045B_02AB:
	goto labelFunc045B_02AE;
labelFunc045B_02AB:
	goto labelFunc045B_00A6;
labelFunc045B_02AE:
	endconv;
	message("「这是我的荣幸，圣者朋友。这是我的荣幸。」*");
	say();
labelFunc045B_02B3:
	if (!(event == 0x0000)) goto labelFunc045B_02C1;
	Func092E(0xFFA5);
labelFunc045B_02C1:
	return;
}


