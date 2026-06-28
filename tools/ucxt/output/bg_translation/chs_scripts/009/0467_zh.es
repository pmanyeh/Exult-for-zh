#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0467 object#(0x467) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0467_018B;
	UI_show_npc_face(0xFF99, 0x0000);
	var0000 = UI_wearing_fellowship();
	if (!var0000) goto labelFunc0467_0045;
	var0001 = UI_get_npc_object(0xFF99);
	message("这个男人对你怒目而视。「你戴着那个最邪恶组织的标志，友谊会。准备受死吧！」*");
	say();
	UI_set_alignment(var0001, 0x0002);
	UI_set_schedule_type(var0001, 0x0000);
	abort;
	goto labelFunc0467_006B;
labelFunc0467_0045:
	var0002 = Func0909();
	var0003 = false;
	if (!(!gflags[0x0141])) goto labelFunc0467_0061;
	message("你面前的男人仔细地打量着你，摆出了一个充满攻击性的姿势。");
	say();
	gflags[0x0141] = true;
	goto labelFunc0467_006B;
labelFunc0467_0061:
	message("「日安， ");
	message(var0002);
	message("，」 Thad 冷冷地说。");
	say();
labelFunc0467_006B:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0467_007B:
	converse attend labelFunc0467_0180;
	case "姓名" attend labelFunc0467_0097:
	message("他盯着你看了一会儿。「我的名字是 Thad ，");
	message(var0002);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0467_0097:
	case "职业" attend labelFunc0467_00B0:
	message("「职业？我没时间做什么工作。我的使命是为这片土地铲除那些为非作歹的瘟疫！」");
	say();
	UI_add_answer(["使命", "瘟疫"]);
labelFunc0467_00B0:
	case "使命" attend labelFunc0467_00CA:
	message("「我为此奉献了我的一生，没有什么能阻挡我，连巴特林也不能。」");
	say();
	UI_remove_answer("使命");
	UI_add_answer("巴特林");
labelFunc0467_00CA:
	case "巴特林" attend labelFunc0467_00EB:
	message("「他是那个被诅咒的组织，友谊会的首领！」");
	say();
	if (!(!var0003)) goto labelFunc0467_00E4;
	UI_add_answer("友谊会");
labelFunc0467_00E4:
	UI_remove_answer("巴特林");
labelFunc0467_00EB:
	case "瘟疫" attend labelFunc0467_0113:
	message("「你肯定听过友谊会，一个最龌龊邪恶的组织。它甚至已经入侵了美丽的 Yew 森林！」");
	say();
	UI_add_answer("Yew");
	if (!(!var0003)) goto labelFunc0467_010C;
	UI_add_answer("友谊会");
labelFunc0467_010C:
	UI_remove_answer("瘟疫");
labelFunc0467_0113:
	case "友谊会" attend labelFunc0467_015F:
	message("「我对他们的做法所知甚少，但我知道他们的行为超越了道德伦理的底线。他们绑架了我亲爱的妹妹， Millie ，并对她施了某种蛊惑的法术。现在她过着和他们一样的生活。我发誓要解除这个邪恶的法术，如果有必要，我会杀光整个组织！~~我想，你也肩负着类似的使命吧。是吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0467_0138;
	message("「太好了。」他握了握你的手。「你确实是一位值得尊敬的战士，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc0467_0154;
labelFunc0467_0138:
	message("「不是？」他似乎真的很惊讶。「那么或许你会考虑以你自己的方式接下我的使命。」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0467_014F;
	message("「这在我的意料之中。你真的是一位光荣的战士。」");
	say();
	goto labelFunc0467_0154;
labelFunc0467_014F:
	message("「你算是哪门子的无赖？在我决定结束你这可悲的生命之前，快从我眼前滚开！」*");
	say();
	abort;
labelFunc0467_0154:
	var0003 = true;
	UI_remove_answer("友谊会");
labelFunc0467_015F:
	case "Yew" attend labelFunc0467_0172:
	message("「我了解这片土地，但不了解这里的人。我没有什么有用的消息可以告诉你。」他沉思了一会儿。「或许我可以帮你一点忙。我确实知道有两个猎人有时会出没在这个区域。其中一个是女人，带着长矛。另一个是弓箭手。这是我能告诉你的全部了。」");
	say();
	UI_remove_answer("Yew");
labelFunc0467_0172:
	case "告辞" attend labelFunc0467_017D:
	goto labelFunc0467_0180;
labelFunc0467_017D:
	goto labelFunc0467_007B;
labelFunc0467_0180:
	endconv;
	message("「愿你的努力能结出丰硕的果实，");
	message(var0002);
	message("。」*");
	say();
labelFunc0467_018B:
	if (!(event == 0x0000)) goto labelFunc0467_0194;
	abort;
labelFunc0467_0194:
	return;
}


