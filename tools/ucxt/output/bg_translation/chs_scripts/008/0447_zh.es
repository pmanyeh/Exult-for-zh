#game "blackgate"
// externs
extern void Func092F 0x92F (var var0000);

void Func0447 object#(0x447) ()
{
	if (!(event == 0x0001)) goto labelFunc0447_018B;
	UI_show_npc_face(0xFFB9, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00C8])) goto labelFunc0447_0038;
	message("一只有翼石像鬼带着兴趣和明显的智能看着你。");
	say();
	message("「欢迎你来到不列颠城，圣者！」");
	say();
	gflags[0x00C8] = true;
	goto labelFunc0447_003C;
labelFunc0447_0038:
	message("「再次向你问好，圣者！」 Inwisloklem 微笑着。");
	say();
labelFunc0447_003C:
	converse attend labelFunc0447_0186;
	case "姓名" attend labelFunc0447_0059:
	message("「我是 Inwisloklem 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Inwisloklem");
labelFunc0447_0059:
	case "Inwisloklem" attend labelFunc0447_006C:
	message("「在你们的语言中是『翻译官』的意思。」");
	say();
	UI_remove_answer("Inwisloklem");
labelFunc0447_006C:
	case "职业" attend labelFunc0447_0085:
	message("「确实在我的家乡是名翻译官。现在在大议会服侍我们最尊贵的统治者不列颠王。很荣幸能成为议会中的两名石像鬼之一。」");
	say();
	UI_add_answer(["石像鬼", "大议会"]);
labelFunc0447_0085:
	case "石像鬼" attend labelFunc0447_00A5:
	message("「作为幸存的石像鬼之一，保存我们的遗产是我一生的工作。告诉你，我们的种族在很多很多年前移民到了不列颠尼亚。并定居在被称为 Terfin 的岛屿上。」");
	say();
	UI_add_answer(["幸存", "Terfin"]);
	UI_remove_answer("石像鬼");
labelFunc0447_00A5:
	case "幸存" attend labelFunc0447_00B8:
	message("「两百年前，我的许多同胞在『假先知之战』中被杀害。是你为我们两个种族带来了和平，结束了那场战争。」");
	say();
	UI_remove_answer("幸存");
labelFunc0447_00B8:
	case "Terfin" attend labelFunc0447_00D8:
	message("「是个孤寂的地方。很荒凉。不是人类所谓的『舒适家园』。渴望在不列颠尼亚为石像鬼创建一种新的生活方式，并消除人类对我们种族的仇恨和误解。知道无知会滋生偏见。而我是正在纠正这点的其中一人。」");
	say();
	UI_add_answer(["生活方式", "其中一人"]);
	UI_remove_answer("Terfin");
labelFunc0447_00D8:
	case "生活方式" attend labelFunc0447_00EB:
	message("「渴望一个人类和石像鬼能在不列颠尼亚社会中作为平等个体和平共处的世界。」");
	say();
	UI_remove_answer("生活方式");
labelFunc0447_00EB:
	case "其中一人" attend labelFunc0447_0105:
	message("「那被称为友谊会。」");
	say();
	UI_add_answer("友谊会");
	UI_remove_answer("其中一人");
labelFunc0447_0105:
	case "友谊会" attend labelFunc0447_0118:
	message("「致力于在这片土地上促进善意与信任。正考虑尽快加入这个团体！」");
	say();
	UI_remove_answer("友谊会");
labelFunc0447_0118:
	case "大议会" attend labelFunc0447_0138:
	message("「为了制定这片土地的法律。告诉你，我的同事 Miranda 可以告诉你更多关于我们现在在做的事。不幸的是，目前大多数议会成员都不在。」");
	say();
	UI_add_answer(["Miranda", "不在"]);
	UI_remove_answer("大议会");
labelFunc0447_0138:
	case "Miranda" attend labelFunc0447_014B:
	message("「告诉你， Miranda 是一位聪明的女性，她非常关心所有不列颠尼亚公民的福祉。她是不列颠王最信任的顾问之一。」");
	say();
	UI_remove_answer("Miranda");
labelFunc0447_014B:
	case "不在" attend labelFunc0447_0165:
	message("「目前在休假中。现在只有 Miranda 和我在场颁布这项新法律。」");
	say();
	UI_add_answer("法律");
	UI_remove_answer("不在");
labelFunc0447_0165:
	case "法律" attend labelFunc0447_0178:
	message("「告诉你去问 Miranda ，因为她知道得比我多。」");
	say();
	UI_remove_answer("法律");
labelFunc0447_0178:
	case "告辞" attend labelFunc0447_0183:
	goto labelFunc0447_0186;
labelFunc0447_0183:
	goto labelFunc0447_003C;
labelFunc0447_0186:
	endconv;
	message("「告辞了。」*");
	say();
labelFunc0447_018B:
	if (!(event == 0x0000)) goto labelFunc0447_0199;
	Func092F(0xFFB9);
labelFunc0447_0199:
	return;
}


