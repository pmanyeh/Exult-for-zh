#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0856 0x856 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0468 object#(0x468) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0468_01AD;
	UI_show_npc_face(0xFF98, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0142])) goto labelFunc0468_003A;
	message("你看到一个男人倚着一把长弓。");
	say();
	gflags[0x0142] = true;
	goto labelFunc0468_0044;
labelFunc0468_003A:
	message("Bradman 向你打招呼。「嗨，");
	message(var0000);
	message("。」");
	say();
labelFunc0468_0044:
	converse attend labelFunc0468_01A2;
	case "姓名" attend labelFunc0468_005A:
	message("「我是 Bradman 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0468_005A:
	case "职业" attend labelFunc0468_0083:
	message("「哎呀，我的工作就是训练许多来 Yew 的人变得更加敏捷。」");
	say();
	UI_add_answer(["Yew", "训练", "许多"]);
	if (!gflags[0x014D]) goto labelFunc0468_0083;
	UI_add_answer("Penni");
labelFunc0468_0083:
	case "许多" attend labelFunc0468_00A3:
	message("「森林吸引了许多想远离 Minoc 和不列颠城这样的大城镇的人。所以他们来到 Yew 。~~而且，这片森林的某些特质让大多数人想要探索。」他拍了拍他的弓。~~「这就是它派上用场的时候了。弓是森林里的生存工具。而我，」他用大拇指指着自己的胸口，「负责教导使用弓的技巧。」");
	say();
	UI_remove_answer("许多");
	UI_add_answer(["探索", "弓"]);
labelFunc0468_00A3:
	case "探索" attend labelFunc0468_00B6:
	message("「森林里有许多令人兴奋的事物可以看。我每天都会看到有趣的东西：一种新鸟、一只美丽的蝴蝶，或者最棒的——一只鹿。」");
	say();
	UI_remove_answer("探索");
labelFunc0468_00B6:
	case "弓" attend labelFunc0468_00C9:
	message("「这是我首选的武器。它需要敏锐的眼睛和稳定的手臂才能准确射击。我认为它比剑或长矛等武器更需要技巧。」");
	say();
	UI_remove_answer("弓");
labelFunc0468_00C9:
	case "Yew" attend labelFunc0468_0146:
	message("「我爱这片森林。它非常美丽。而且，」他举起弓，「我搬到这里来是为了靠近两位伟大的弓箭手， Iolo 和 Tseramed 。」*");
	say();
	var0001 = Func08F7(0xFFFF);
	var0002 = Func08F7(0xFFF6);
	if (!var0001) goto labelFunc0468_010C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 脸红了。「这是我的荣幸，我的朋友。我都不知道在这片土地上有我的崇拜者。」他向 Bradman 鞠躬， Bradman 也鞠躬回礼。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF98, 0x0000);
labelFunc0468_010C:
	if (!var0002) goto labelFunc0468_0138;
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「谢谢你的赞美，好先生。或许我们未来可以找个时间切磋一下。」*");
	say();
	UI_remove_npc_face(0xFFF6);
	UI_show_npc_face(0xFF98, 0x0000);
	message("「这将是我莫大的荣幸，大人！」");
	say();
	goto labelFunc0468_013F;
labelFunc0468_0138:
	UI_add_answer("Tseramed");
labelFunc0468_013F:
	UI_remove_answer("Yew");
labelFunc0468_0146:
	case "Tseramed" attend labelFunc0468_0159:
	message("「他是一位居住在森林里的伟大弓箭手。他搬到这里来是为了远离发展过快的城镇。」");
	say();
	UI_remove_answer("Tseramed");
labelFunc0468_0159:
	case "训练" attend labelFunc0468_0181:
	message("「如果你想训练，我的收费是 30 个金币。你还有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc0468_0177;
	Func0856(0x0001, 0x001E);
	goto labelFunc0468_0181;
labelFunc0468_0177:
	message("「我了解，");
	message(var0000);
	message("。」");
	say();
labelFunc0468_0181:
	case "Penni" attend labelFunc0468_0194:
	message("「你见过 Penni 了？我希望你没有跟她一起训练，」他眨了眨眼。「她是一个珍贵的朋友，但她打猎的技术就像根杂草，而且笨拙得像头牛。我恐怕她对战斗一无所知。」");
	say();
	UI_remove_answer("Penni");
labelFunc0468_0194:
	case "告辞" attend labelFunc0468_019F:
	goto labelFunc0468_01A2;
labelFunc0468_019F:
	goto labelFunc0468_0044;
labelFunc0468_01A2:
	endconv;
	message("「愿树木为你让路，");
	message(var0000);
	message("。」*");
	say();
labelFunc0468_01AD:
	if (!(event == 0x0000)) goto labelFunc0468_01BB;
	Func092E(0xFF98);
labelFunc0468_01BB:
	return;
}


