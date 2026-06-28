#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08C8 0x8C8 (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0473 object#(0x473) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0473_0202;
	UI_show_npc_face(0xFF8D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF8D));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x014D])) goto labelFunc0473_0056;
	message("你面前的这位女性脸上带着担忧的表情，仿佛她的思绪飘到了很远的地方。");
	say();
	gflags[0x014D] = true;
	goto labelFunc0473_006D;
labelFunc0473_0056:
	message("「嗨， ");
	message(var0000);
	message("。我能帮你什么忙吗？」 Penni 问。");
	say();
	if (!gflags[0x01DE]) goto labelFunc0473_006D;
	UI_add_answer("Addom");
labelFunc0473_006D:
	converse attend labelFunc0473_01F7;
	case "姓名" attend labelFunc0473_009B:
	message("「我的名字是 Penni ， ");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!(gflags[0x01DE] && (!var0003))) goto labelFunc0473_009B;
	UI_add_answer("Addom");
labelFunc0473_009B:
	case "职业" attend labelFunc0473_00D2:
	message("「我没有职业， ");
	message(var0001);
	message("。至少没有我会称之为『工作』的事。不过，我确实有教导近身战斗的技巧。~~她想了一会儿。「我想更好的回答方式应该是说『是的，我有工作』。我是一名训练师。但是，」她笑了笑，「我太享受这份工作了，以至于不想称之为工作。」");
	say();
	UI_add_answer(["享受", "训练"]);
	if (!gflags[0x0142]) goto labelFunc0473_00D2;
	if (!(!var0002)) goto labelFunc0473_00D2;
	UI_add_answer("Bradman");
	var0002 = true;
labelFunc0473_00D2:
	case "享受" attend labelFunc0473_00F2:
	message("「从我大到能握住第一把长矛开始，我就爱上了近身战斗。这就是我搬到 Yew 的原因。」");
	say();
	UI_remove_answer("享受");
	UI_add_answer(["长矛", "Yew"]);
labelFunc0473_00F2:
	case "长矛" attend labelFunc0473_0105:
	message("「这是我选择的武器。长矛结合了距离和力量的优势。它是完美的狩猎武器。」");
	say();
	UI_remove_answer("长矛");
labelFunc0473_0105:
	case "Yew" attend labelFunc0473_0118:
	message("「当然，我搬到这里是为了打猎。这片森林充满了猎物。我不想住在其他任何地方！」");
	say();
	UI_remove_answer("Yew");
labelFunc0473_0118:
	case "训练" attend labelFunc0473_0157:
	if (!(var0004 == 0x0007)) goto labelFunc0473_014D;
	message("「你有兴趣接受训练吗？我的收费是每次训练 35 个金币。」");
	say();
	if (!Func090A()) goto labelFunc0473_0146;
	Func08C8([0x0000, 0x0004], 0x0023);
	goto labelFunc0473_014A;
labelFunc0473_0146:
	message("「或许下次吧。」");
	say();
labelFunc0473_014A:
	goto labelFunc0473_0157;
labelFunc0473_014D:
	message("「抱歉， ");
	message(var0001);
	message("，但我现在不进行训练。或许如果你在早上 9 点到晚上 6 点之间回来，我就能帮你了。」");
	say();
labelFunc0473_0157:
	case "Bradman" attend labelFunc0473_01A3:
	message("「是的，」她点点头，咧嘴笑着说，「我认识 Bradman 。我们会一起去打猎。当然，他用那把『牙签发射器』很少能抓到什么东西。」");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0473_0198;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我对这句话感到不满，我的朋友。弓和十字弓也是能发挥致命效果的。」");
	say();
	UI_show_npc_face(0xFF8D, 0x0000);
	message("她笑着对 Iolo 点点头。「或许你说得对，弓箭手朋友，但我更喜欢肢体上的挑战。」");
	say();
	UI_remove_npc_face(0xFFFF);
	goto labelFunc0473_019C;
labelFunc0473_0198:
	message("「虽然我认为他是一位真正的朋友，和一位值得尊敬的同伴，但我怀疑他的身体素质如何。」");
	say();
labelFunc0473_019C:
	UI_remove_answer("Bradman");
labelFunc0473_01A3:
	case "Addom" attend labelFunc0473_01E9:
	message("「Addom 是我丈夫。但你怎么会……？」她显得很困惑，但突然盯着你看。「你见过他吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0473_01DA;
	message("「他身体好吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0473_01D2;
	message("「谢天谢地！」她松了一口气。");
	say();
	goto labelFunc0473_01D7;
labelFunc0473_01D2:
	message("「我就知道他这次不该离开的！我讨厌他离开！」她强忍着泪水。*");
	say();
	abort;
labelFunc0473_01D7:
	goto labelFunc0473_01DE;
labelFunc0473_01DA:
	message("「我真的好讨厌他旅行到那么远的地方，去那么长的时间。我只希望他能快点回到我的怀抱！」她望向远方，仿佛在寻找 Addom 。");
	say();
labelFunc0473_01DE:
	UI_remove_answer("Addom");
	var0003 = true;
labelFunc0473_01E9:
	case "告辞" attend labelFunc0473_01F4:
	goto labelFunc0473_01F7;
labelFunc0473_01F4:
	goto labelFunc0473_006D;
labelFunc0473_01F7:
	endconv;
	message("「旅途愉快， ");
	message(var0001);
	message("。」*");
	say();
labelFunc0473_0202:
	if (!(event == 0x0000)) goto labelFunc0473_0210;
	Func092E(0xFF8D);
labelFunc0473_0210:
	return;
}


