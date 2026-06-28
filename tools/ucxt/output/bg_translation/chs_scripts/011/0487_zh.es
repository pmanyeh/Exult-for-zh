#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0487 object#(0x487) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0487_0266;
	UI_show_npc_face(0xFF79, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF78);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x017D]) goto labelFunc0487_004E;
	UI_add_answer("吊饰盒");
labelFunc0487_004E:
	if (!(!gflags[0x0190])) goto labelFunc0487_006D;
	message("你面前的男人用狡诈的眼神打量着你。他微微弯着腰，仿佛随时准备对周围的世界发动攻击。");
	say();
	gflags[0x0190] = true;
	if (!gflags[0x0180]) goto labelFunc0487_006A;
	UI_add_answer("陌生人");
labelFunc0487_006A:
	goto labelFunc0487_0071;
labelFunc0487_006D:
	message("「什么事？」Battles 问道。");
	say();
labelFunc0487_0071:
	converse attend labelFunc0487_0261;
	case "姓名" attend labelFunc0487_008E:
	message("「Battles。我自己对 New Magincia 来说也是个陌生人。」");
	say();
	UI_add_answer("New Magincia");
	UI_remove_answer("姓名");
labelFunc0487_008E:
	case "职业" attend labelFunc0487_00A7:
	message("「我被雇来当 Robin 少爷的保镳，我的伙伴 Leavell 也是。这份差事薪水很不错。」");
	say();
	UI_add_answer(["Robin", "Leavell"]);
labelFunc0487_00A7:
	case "Robin" attend labelFunc0487_00FA:
	message("「Robin 是个玩大赌注的赌客，他在海盗巢穴 (Buccaneer's Den)的赌场里讨生活。」");
	say();
	if (!var0002) goto labelFunc0487_00E6;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「如果没有你出色的工作，这份营生可就没这么赚钱了，Battles。」*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("「谢谢您，少爷。」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_00E6:
	UI_remove_answer("Robin");
	UI_add_answer(["赌客", "赌场"]);
labelFunc0487_00FA:
	case "赌客" attend labelFunc0487_0132:
	message("「Robin 靠赌博维生。我想他这辈子从来没有过一份正经的工作！」");
	say();
	if (!var0002) goto labelFunc0487_012B;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「哎呀，谢谢你的夸奖，Battles！」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_012B:
	UI_remove_answer("赌客");
labelFunc0487_0132:
	case "赌场" attend labelFunc0487_0145:
	message("「海盗巢穴 (Buccaneer's Den) 的赌坊 (House of Games)，那是我这辈子见过最棒的地方。我永远不会忘记 Robin 第一次带我去那里的情景。他不到一个小时就带着一百枚金币离开了！」");
	say();
	UI_remove_answer("赌场");
labelFunc0487_0145:
	case "Leavell" attend labelFunc0487_0198:
	message("「他是个万人迷，真的。但别以为他不会打架。那会是你犯的最后一个错误。」");
	say();
	if (!var0003) goto labelFunc0487_0184;
	UI_show_npc_face(0xFF78, 0x0000);
	message("「我几乎能把你摔倒，Battles，你这老狗！」*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("「哈！哈！哈！哈！」");
	say();
	UI_remove_npc_face(0xFF78);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_0184:
	UI_remove_answer("Leavell");
	UI_add_answer(["万人迷", "打架"]);
labelFunc0487_0198:
	case "万人迷" attend labelFunc0487_01D0:
	message("「哎呀，我估计 Leavell 伤透的心，跟我让其停止跳动的心脏差不多一样多！」");
	say();
	if (!var0003) goto labelFunc0487_01C9;
	UI_show_npc_face(0xFF78, 0x0000);
	message("「这么多！」*");
	say();
	UI_remove_npc_face(0xFF78);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_01C9:
	UI_remove_answer("万人迷");
labelFunc0487_01D0:
	case "打架" attend labelFunc0487_01E3:
	message("「光是 Leavell 在应付那些嫉妒的丈夫们时所受的训练，就足以让任何人成为战斗大师了！」");
	say();
	UI_remove_answer("打架");
labelFunc0487_01E3:
	case "陌生人" attend labelFunc0487_01F6:
	message("「陌生人？～～你说的肯定是我们！」Battles 大声地哼了一声。");
	say();
	UI_remove_answer("陌生人");
labelFunc0487_01F6:
	case "New Magincia" attend labelFunc0487_0216:
	message("「我们正想离开这块无聊的破石头，New Magincia，回到海盗巢穴 (Buccaneer's Den)去。如果你有办法带我们去那里，远离这些乡巴佬，Robin 少爷会付你丰厚的报酬的。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer(["无聊的破石头", "乡巴佬"]);
labelFunc0487_0216:
	case "无聊的破石头" attend labelFunc0487_0229:
	message("「你能想像一辈子待在这里，日复一日什么事都没发生吗？这足以把人逼疯！」");
	say();
	UI_remove_answer("无聊的破石头");
labelFunc0487_0229:
	case "乡巴佬" attend labelFunc0487_023C:
	message("「这里的人太没见识了，他们甚至从没听过赌博！没听过赌博？那可是人生的全部啊！」");
	say();
	UI_remove_answer("乡巴佬");
labelFunc0487_023C:
	case "吊饰盒" attend labelFunc0487_0253:
	message("「我看到 Robin 少爷手里有一个就像你描述的那样的吊饰盒。我最后一次看到它是在……让我想想……就在我们三个去端庄少女(Modest Damsel)酒馆喝酒之前。」");
	say();
	gflags[0x0185] = true;
	UI_remove_answer("吊饰盒");
labelFunc0487_0253:
	case "告辞" attend labelFunc0487_025E:
	goto labelFunc0487_0261;
labelFunc0487_025E:
	goto labelFunc0487_0071;
labelFunc0487_0261:
	endconv;
	message("「回头见。」*");
	say();
labelFunc0487_0266:
	if (!(event == 0x0000)) goto labelFunc0487_0274;
	Func092E(0xFF79);
labelFunc0487_0274:
	return;
}


