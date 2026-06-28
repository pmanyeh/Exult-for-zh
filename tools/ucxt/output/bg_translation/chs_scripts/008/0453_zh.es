#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08BA 0x8BA ();

void Func0453 object#(0x453) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0453_0009;
	abort;
labelFunc0453_0009:
	UI_show_npc_face(0xFFAD, 0x0000);
	var0000 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00FE]) goto labelFunc0453_0040;
	UI_add_answer(["谋杀案", "Frederico", "Tania"]);
labelFunc0453_0040:
	if (!gflags[0x00FF]) goto labelFunc0453_004D;
	UI_add_answer("Sasha");
labelFunc0453_004D:
	if (!(!gflags[0x010E])) goto labelFunc0453_005F;
	message("你看到一位年轻迷人的吉普赛女人，有着充满智能、仿佛能看穿灵魂的双眼。");
	say();
	gflags[0x010E] = true;
	goto labelFunc0453_007B;
labelFunc0453_005F:
	message("「你希望再跟我说话吗？」Margareta 问。");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0453_0076;
	message("「很好。」");
	say();
	goto labelFunc0453_007B;
labelFunc0453_0076:
	message("「很好。」*");
	say();
	abort;
labelFunc0453_007B:
	converse attend labelFunc0453_01A8;
	case "姓名" attend labelFunc0453_0091:
	message("「 Margareta 为你服务，」她缓慢地说着。");
	say();
	UI_remove_answer("姓名");
labelFunc0453_0091:
	case "职业" attend labelFunc0453_00A4:
	message("吉普赛女人微微一笑。「为你占卜命运。」");
	say();
	UI_add_answer("命运");
labelFunc0453_00A4:
	case "谋杀案" attend labelFunc0453_00B7:
	message("「我就知道会发生这种事。我警告过 Frederico 。他不听。」");
	say();
	UI_remove_answer("谋杀案");
labelFunc0453_00B7:
	case "Frederico" attend labelFunc0453_00D1:
	message("「他是我丈夫的兄弟。他的死让我非常伤心。」");
	say();
	UI_remove_answer("Frederico");
	UI_add_answer("丈夫");
labelFunc0453_00D1:
	case "Tania" attend labelFunc0453_00E4:
	message("「她是 Frederico 的妻子，但你已经知道了，不是吗？她是个好女人。」");
	say();
	UI_remove_answer("Tania");
labelFunc0453_00E4:
	case "Sasha" attend labelFunc0453_0104:
	message("Margareta 沉默了一会儿。~~「他误入歧途了。不幸的是，他只有在父母双亡的结果下，才会意识到自己的错误。」");
	say();
	UI_add_answer(["误入歧途", "错误"]);
	UI_remove_answer("Sasha");
labelFunc0453_0104:
	case "误入歧途" attend labelFunc0453_0117:
	message("「还有很多很多像 Sasha 一样误入歧途的人。对他们，我看不到未来。」");
	say();
	UI_remove_answer("误入歧途");
labelFunc0453_0117:
	case "错误" attend labelFunc0453_0142:
	message("「你知道我是什么意思。");
	say();
	if (!gflags[0x0006]) goto labelFunc0453_0130;
	message("「你自己就是个成员。」");
	say();
	goto labelFunc0453_0134;
labelFunc0453_0130:
	message("「友谊会。」");
	say();
labelFunc0453_0134:
	UI_add_answer("友谊会");
	UI_remove_answer("错误");
labelFunc0453_0142:
	case "友谊会" attend labelFunc0453_0175:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc0453_015D;
	message("Margareta 看到你的护身符，擡起了眼睛。");
	say();
	message("「我看到你戴着他们的一个护身符，但你并不是真正的成员，对吧？小心点——友谊会里有些人会看穿你的伪装。」");
	say();
labelFunc0453_015D:
	if (!gflags[0x0006]) goto labelFunc0453_016A;
	message("「你很快就会明白他们的真面目。」");
	say();
	goto labelFunc0453_016E;
labelFunc0453_016A:
	message("「到了适当的时候，你会了解更多关于他们的事。」");
	say();
labelFunc0453_016E:
	UI_remove_answer("友谊会");
labelFunc0453_0175:
	case "命运" attend labelFunc0453_0187:
	Func08BA();
	UI_remove_answer("命运");
labelFunc0453_0187:
	case "丈夫" attend labelFunc0453_019A:
	message("「 Jergi 当然是我的丈夫。现在他肩负着在这些动荡时期引导吉普赛民族的重任。」");
	say();
	UI_remove_answer("丈夫");
labelFunc0453_019A:
	case "告辞" attend labelFunc0453_01A5:
	goto labelFunc0453_01A8;
labelFunc0453_01A5:
	goto labelFunc0453_007B;
labelFunc0453_01A8:
	endconv;
	message("「再会。平平安安地去吧。」*");
	say();
	return;
}


