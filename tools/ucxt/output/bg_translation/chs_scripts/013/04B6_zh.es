#game "blackgate"
// externs
extern void Func089D 0x89D (var var0000, var var0001, var var0002);
extern void Func092F 0x92F (var var0000);

void Func04B6 object#(0x4B6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04B6_01E6;
	UI_show_npc_face(0xFF4A, 0x0000);
	var0000 = 0xFF4A;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0247])) goto labelFunc04B6_003A;
	message("一位友善的石像鬼向你打招呼。");
	say();
	gflags[0x0247] = true;
	goto labelFunc04B6_003E;
labelFunc04B6_003A:
	message("「看到你过得很好，人类，」 Inmanilem 说。");
	say();
labelFunc04B6_003E:
	converse attend labelFunc04B6_01E1;
	case "姓名" attend labelFunc04B6_0061:
	message("「我叫做 Inmanilem ，人类。想知道关于 Terfin 的情报吗？」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["情报", "Inmanilem"]);
labelFunc04B6_0061:
	case "Inmanilem" attend labelFunc04B6_0074:
	message("「在石像鬼语中是『治愈者』的意思。」");
	say();
	UI_remove_answer("Inmanilem");
labelFunc04B6_0074:
	case "职业" attend labelFunc04B6_0094:
	message("「是治疗师。」");
	say();
	UI_add_answer("治疗");
	if (!gflags[0x0244]) goto labelFunc04B6_0094;
	UI_add_answer("冲突");
labelFunc04B6_0094:
	case "治疗" attend labelFunc04B6_00DF:
	var0001 = UI_part_of_day();
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc04B6_00D4;
	Func089D(0x0019, 0x000A, 0x01AE);
	goto labelFunc04B6_00D8;
labelFunc04B6_00D4:
	message("「感到抱歉，但现在正忙于其他事情。请你有空再来，我才有时间为你治疗。」");
	say();
labelFunc04B6_00D8:
	UI_remove_answer("治疗");
labelFunc04B6_00DF:
	case "情报" attend labelFunc04B6_0102:
	message("「告诉你去找 Draxinusom ，人类，或是 Forbrak 。他们有许多关于 Terfin 的情报。」");
	say();
	UI_remove_answer("情报");
	UI_add_answer(["Draxinusom", "Forbrak", "Terfin"]);
labelFunc04B6_0102:
	case "Forbrak" attend labelFunc04B6_0115:
	message("「是酒馆老板。身心都非常强壮。」");
	say();
	UI_remove_answer("Forbrak");
labelFunc04B6_0115:
	case "Terfin" attend labelFunc04B6_012F:
	message("「是石像鬼的城市。是许多石像鬼居住的两个城镇之一。喜欢这里，」他笑着补充。");
	say();
	UI_remove_answer("Terfin");
	UI_add_answer("哪一个？");
labelFunc04B6_012F:
	case "哪一个？" attend labelFunc04B6_0142:
	message("「告诉你另一个叫 Vesper 。位于不列颠尼亚东北方的沙漠中。不像这里，那里也有人类居住。」");
	say();
	UI_remove_answer("哪一个？");
labelFunc04B6_0142:
	case "Draxinusom" attend labelFunc04B6_015C:
	message("「是我们的领袖。住在知识大厅 (Hall of Knowledge) 附近。」");
	say();
	UI_remove_answer("Draxinusom");
	UI_add_answer("大厅");
labelFunc04B6_015C:
	case "大厅" attend labelFunc04B6_0176:
	message("「是保存三个单一性祭坛的地方。」");
	say();
	UI_remove_answer("大厅");
	UI_add_answer("祭坛");
labelFunc04B6_0176:
	case "祭坛" attend labelFunc04B6_0196:
	message("「是热情、控制和勤勉。这是大多数石像鬼视为我们存在关键的价值观。」");
	say();
	UI_remove_answer("祭坛");
	UI_add_answer(["大多数石像鬼", "钥匙"]);
labelFunc04B6_0196:
	case "钥匙" attend labelFunc04B6_01A9:
	message("他用力地点点头。「非常类似于人类美德的概念。」");
	say();
	UI_remove_answer("钥匙");
labelFunc04B6_01A9:
	case "大多数石像鬼" attend labelFunc04B6_01BC:
	message("「现在有了一个竞争对手——友谊会。不知道它是好是坏，但我知道我不会追随它！」");
	say();
	UI_remove_answer("大多数石像鬼");
labelFunc04B6_01BC:
	case "冲突" attend labelFunc04B6_01D3:
	message("「只知道一个不满的石像鬼。一直都是个麻烦，但现在变得充满敌意和攻击性。名字叫做园丁 Silamo 。~~建议你去跟 Silamo 谈谈。」");
	say();
	UI_remove_answer("冲突");
	gflags[0x023D] = true;
labelFunc04B6_01D3:
	case "告辞" attend labelFunc04B6_01DE:
	goto labelFunc04B6_01E1;
labelFunc04B6_01DE:
	goto labelFunc04B6_003E;
labelFunc04B6_01E1:
	endconv;
	message("「祝你身体健康，人类。」*");
	say();
labelFunc04B6_01E6:
	if (!(event == 0x0000)) goto labelFunc04B6_01F4;
	Func092F(0xFF4A);
labelFunc04B6_01F4:
	return;
}


