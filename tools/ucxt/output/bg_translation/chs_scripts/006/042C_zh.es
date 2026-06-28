#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func042C object#(0x42C) ()
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

	if (!(event == 0x0001)) goto labelFunc042C_0287;
	UI_show_npc_face(0xFFD4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD4));
	var0003 = UI_is_pc_female();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x007A]) goto labelFunc042C_005A;
	UI_add_answer("Nell 怀孕");
labelFunc042C_005A:
	if (!gflags[0x0089]) goto labelFunc042C_0067;
	UI_add_answer("Charles 很生气");
labelFunc042C_0067:
	if (!(!gflags[0x00AD])) goto labelFunc042C_0079;
	message("你看见一位打扮浮夸的绅士。他非常开朗外向，面带微笑挥手向你致意。");
	say();
	gflags[0x00AD] = true;
	goto labelFunc042C_008B;
labelFunc042C_0079:
	if (!(!var0003)) goto labelFunc042C_0087;
	message("「眨眼间，一句话，~向您致意，大人哪。」");
	say();
	goto labelFunc042C_008B;
labelFunc042C_0087:
	message("「在此吉日，向您致意，~这是我的荣幸，女士。」");
	say();
labelFunc042C_008B:
	converse attend labelFunc042C_0282;
	case "姓名" attend labelFunc042C_00A1:
	message("「从破晓时分，太阳初升起，~直到隔日清晨，月亮渐隐去，~我听候您的吩咐与呼唤，~您卑微的仆人， Carrocio ！」");
	say();
	UI_remove_answer("姓名");
labelFunc042C_00A1:
	case "职业" attend labelFunc042C_00CC:
	message("「我揭开木偶戏的布幕，~故事从我手中娓娓道出，~为男孩女孩带来欢乐，~观赏只需一枚金币付。~要衡量你的力量多大，~在美德之心的烈火中锻打，~此时此刻来敲响那钟，~测试你的力气直到肌肉酸痛。」");
	say();
	if (!(!var0003)) goto labelFunc042C_00B8;
	message("「或许还能让你的心上人印象深刻！」 Carrocio 向你眨眼。");
	say();
labelFunc042C_00B8:
	message("「或者你想要成为国王？~那边有把插在石中的剑。~只要你能把它拔出来，~你就会是下一个登上王座的人！」");
	say();
	UI_add_answer(["木偶戏", "看戏", "力量测试"]);
labelFunc042C_00CC:
	case "木偶戏" attend labelFunc042C_00EC:
	message("「我童年的眼看着父亲辛勤工作，~一场华丽如皇家的木偶戏。~时光飞逝，父亲已离去，~孩子已长大，懊悔不已，~齿轮与飞轮如今转动着木偶，不再需要任何人，~所以我独自让他的嘉年华之歌一直播送下去。」");
	say();
	UI_remove_answer("木偶戏");
	UI_add_answer(["懊悔", "齿轮与飞轮"]);
labelFunc042C_00EC:
	case "力量测试" attend labelFunc042C_0111:
	if (!(!(var0002 == 0x0007))) goto labelFunc042C_0106;
	message("「很抱歉地说~我今天已经打烊。~请到场地来测试你的体能~当我，是的的确，开门营业时。」");
	say();
	goto labelFunc042C_010A;
labelFunc042C_0106:
	message("「拿起槌子往地上敲一击，~如果你的双臂充满力量，你就会听到清脆的钟声。~如果你敲击后什么也没听到，你就知道你的力气正在衰退。~但如果你赢了力量测试游戏，你将会得到一只绒毛龙。」");
	say();
labelFunc042C_010A:
	UI_remove_answer("力量测试");
labelFunc042C_0111:
	case "齿轮与飞轮" attend labelFunc042C_0124:
	message("「我担心我的家族手艺会终结，那是用心来经营的表演，~但骨头会老化，机器则不会，而我们不能轻易地更换零件。~我尽我所能地继续下去，用机器来扮演我父亲的角色，~在看不见的地方控制着悬丝木偶，努力为它们注入灵魂。」");
	say();
	UI_remove_answer("齿轮与飞轮");
labelFunc042C_0124:
	case "懊悔" attend labelFunc042C_0147:
	message("「那些压向我的脸孔，转瞬即逝的欢乐时光，从低贱的乞丐到王座上的居民，~每个人都知道自己的位置，并让我去寻找那个属于我的人，那个可以分享我生命的女人，这颗孤独等待的心。」");
	say();
	UI_remove_answer("懊悔");
	UI_add_answer(["低贱乞丐", "王座居民", "女人"]);
labelFunc042C_0147:
	case "低贱乞丐" attend labelFunc042C_015A:
	message("「一个名叫 Snaz 的乞丐会来看我的表演，~偷走并卖掉我所有最好的笑话，他是我个人的宿敌。」");
	say();
	UI_remove_answer("低贱乞丐");
labelFunc042C_015A:
	case "王座居民" attend labelFunc042C_016D:
	message("「你的无知让我感到不安，~你肯定听说过睿智的不列颠王。」");
	say();
	UI_remove_answer("王座居民");
labelFunc042C_016D:
	case "女人" attend labelFunc042C_0187:
	message("「我心中田园诗的觉醒，~就在我身下，因为我依然看着她，~没有任何吟游诗人能描述或诉说，~我美丽 Nell 的温柔。」");
	say();
	UI_remove_answer("女人");
	UI_add_answer("Nell");
labelFunc042C_0187:
	case "Nell" attend labelFunc042C_01A7:
	message("「据说爱是位炽热的天使，~乘着纯粹救赎的柔软丝翼，~我木偶般的心静如铁砧，~在她关注的邪恶刺激下颤动。~我被我的天使 Nell 膏抹，~卑微的懦弱被激情的利刃击倒，~我因此被指定为她的爱人，~或许是命运促成了这段婚姻。」");
	say();
	UI_remove_answer("Nell");
	UI_add_answer(["邪恶刺激", "婚姻"]);
labelFunc042C_01A7:
	case "邪恶刺激" attend labelFunc042C_01BA:
	message("Carrocio 看起来仿佛陷入了回忆。过了一会儿，他回过神来。~~「如果我再多说这件事，我就不是个绅士了，请原谅我敞开心扉的坦率。」~他显得有些尴尬，并大声清了几次喉咙。");
	say();
	UI_remove_answer("邪恶刺激");
labelFunc042C_01BA:
	case "婚姻" attend labelFunc042C_01DA:
	message("「我的硬币是急于兑现的箭，~直到珠宝商卖出戒指的那天，~因为我坚定的心并非木头雕刻，~而她却在照顾国王的床铺。」");
	say();
	UI_remove_answer("婚姻");
	if (!gflags[0x007A]) goto labelFunc042C_01DA;
	UI_add_answer("Nell 怀孕");
labelFunc042C_01DA:
	case "Nell 怀孕" attend labelFunc042C_0215:
	message("Carrocio 震惊地看着你，并跪在你面前。「我恳求你，");
	message(var0000);
	message("，~请保持沉默，~我的 Nell 从未伤害过任何人，~通过城里喋喋不休的嘴唇传开我们的秘密，将会对她的名誉造成严重的伤害，~那将会永久终结我的职业，~并扼杀我们对幸福生活的希望。」他用恳求的眼神看着你。「我必须将我的希望和信任寄托在你身上，~全部的一切。~永远不要再谈论我欲望的战利品，~你绝对不能告诉任何人！」");
	say();
	if (!(!gflags[0x0089])) goto labelFunc042C_020E;
	message("你看着他，等待某种指示。你会为他保守秘密吗？");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc042C_020A;
	message("「你与荣耀同行，~我知道你不会说出去，~我不介意尊严受损，~我唯一关心的是 Nell 。」");
	say();
	goto labelFunc042C_020E;
labelFunc042C_020A:
	message("「重新考虑吧，我必须坚持，你太不顾及别人了，~如果他知道， Nell 的哥哥会杀了我，~而我不愿看到 Nell 在有机会成为新娘前就成了寡妇。」");
	say();
labelFunc042C_020E:
	UI_remove_answer("Nell 怀孕");
labelFunc042C_0215:
	case "Charles 很生气" attend labelFunc042C_0222:
	message("「我很感激你诚实地表达了你的不在乎，~但你为何要把自己置于我们这段感情的中心？~为了 Nell 的缘故，我无法忍心伤害她的哥哥，~我会说服他我的意图，~我只爱 Nell ，别无他人。~现在请离开，我必须利用这段时间好好准备。」");
	say();
	abort;
labelFunc042C_0222:
	case "看戏" attend labelFunc042C_0274:
	if (!(!(var0002 == 0x0007))) goto labelFunc042C_023C;
	message("「很抱歉地说~我今天已经打烊。~请在破晓时分来到场地~当木偶们，是的的确，已经起床并清醒时。」");
	say();
	goto labelFunc042C_026C;
labelFunc042C_023C:
	message("「来看看愚蠢的骄傲与爱、残暴与罪恶， Carrocio 的微小木偶世界，~足以让你倒抽一口气、哭泣或咧嘴笑，~所有想看的人，现在是听我呼唤的时候了，~因为现在木偶戏即将开始！」*");
	say();
	var0006 = UI_find_nearby_avatar(0x01F7);
	UI_halt_scheduled(var0006[0x0001]);
	var0007 = UI_delayed_execute_usecode_array(var0006[0x0001], [(byte)0x55, 0x01F7], 0x000F);
labelFunc042C_026C:
	UI_remove_answer("看戏");
	abort;
labelFunc042C_0274:
	case "告辞" attend labelFunc042C_027F:
	goto labelFunc042C_0282;
labelFunc042C_027F:
	goto labelFunc042C_008B;
labelFunc042C_0282:
	endconv;
	message("「或许能在慈悲之耳中，找到一个如温柔朋友般的声音，~祝你一切顺利，但也请记得回来，如果你想再次观赏木偶戏或测试你的力量。」");
	say();
labelFunc042C_0287:
	if (!(event == 0x0000)) goto labelFunc042C_0330;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD4));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc042C_032A;
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || ((var0001 == 0x0005) || (var0001 == 0x0006))))) goto labelFunc042C_0327;
	if (!(var0008 == 0x0001)) goto labelFunc042C_02ED;
	var0009 = "@来看看木偶！@";
labelFunc042C_02ED:
	if (!(var0008 == 0x0002)) goto labelFunc042C_02FD;
	var0009 = "@你能敲响钟吗？@";
labelFunc042C_02FD:
	if (!(var0008 == 0x0003)) goto labelFunc042C_030D;
	var0009 = "@下场表演即将开始！@";
labelFunc042C_030D:
	if (!(var0008 == 0x0004)) goto labelFunc042C_031D;
	var0009 = "@来衡量你的力量！@";
labelFunc042C_031D:
	UI_item_say(0xFFD4, var0009);
labelFunc042C_0327:
	goto labelFunc042C_0330;
labelFunc042C_032A:
	Func092E(0xFFD4);
labelFunc042C_0330:
	return;
}


