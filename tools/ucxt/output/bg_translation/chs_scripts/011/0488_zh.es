#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0488 object#(0x488) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0488_0329;
	UI_show_npc_face(0xFF78, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF79);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x017D]) goto labelFunc0488_004E;
	UI_add_answer("吊饰盒");
labelFunc0488_004E:
	if (!(!gflags[0x0191])) goto labelFunc0488_006D;
	message("你看到一个年轻人在指尖上平衡着一把匕首。他努力想忽视你。");
	say();
	gflags[0x0191] = true;
	if (!gflags[0x0180]) goto labelFunc0488_006A;
	UI_add_answer("陌生人");
labelFunc0488_006A:
	goto labelFunc0488_0071;
labelFunc0488_006D:
	message("Leavell 在指尖上平衡着他的匕首。在一阵模糊的动作中，他从半空中抓住了它，并指向你。他直视着你的眼睛。");
	say();
labelFunc0488_0071:
	converse attend labelFunc0488_0324;
	case "姓名" attend labelFunc0488_0087:
	message("「我是 Leavell。」");
	say();
	UI_remove_answer("姓名");
labelFunc0488_0087:
	case "职业" attend labelFunc0488_00A6:
	message("「和 Battles 一起，我是 Robin 少爷的保镳。要不是他，我早就进监狱了，而不是来到 New Magincia。」");
	say();
	UI_add_answer(["Battles", "Robin", "监狱", "New Magincia"]);
labelFunc0488_00A6:
	case "陌生人" attend labelFunc0488_00B9:
	message("「我不知道你在说什么。」");
	say();
	UI_remove_answer("陌生人");
labelFunc0488_00B9:
	case "Battles" attend labelFunc0488_0101:
	message("「他有着像老鹰般锐利的眼睛，而且动作比猫还快。你最好放尊重点。」");
	say();
	if (!var0003) goto labelFunc0488_00EA;
	UI_show_npc_face(0xFF79, 0x0000);
	message("「哈！哈！你说得太对了，Leavell！」");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_00EA:
	UI_remove_answer("Battles");
	UI_add_answer(["眼睛", "动作快", "尊重"]);
labelFunc0488_0101:
	case "眼睛" attend labelFunc0488_011B:
	message("「如果 Battles 没有发现那场逼近的风暴，我们肯定早就没命了！」");
	say();
	UI_remove_answer("眼睛");
	UI_add_answer("风暴");
labelFunc0488_011B:
	case "风暴" attend labelFunc0488_012E:
	message("「它对我们的船造成了严重的破坏，但老实说，我见过更糟的。」");
	say();
	UI_remove_answer("风暴");
labelFunc0488_012E:
	case "动作快" attend labelFunc0488_0141:
	message("「我见过 Battles 有着比蛇还快的反应速度。」");
	say();
	UI_remove_answer("动作快");
labelFunc0488_0141:
	case "监狱" attend labelFunc0488_0154:
	message("「是的，我做过一些足以让我被关进监狱的事。但我对我的生活并不感到羞耻。我也不需要向你交代。」");
	say();
	UI_remove_answer("监狱");
labelFunc0488_0154:
	case "尊重" attend labelFunc0488_0167:
	message("「既然说到这，你也应该对我放尊重点。」Leavell 冷笑着说。");
	say();
	UI_remove_answer("尊重");
labelFunc0488_0167:
	case "Robin" attend labelFunc0488_01AC:
	message("「他是一名职业赌徒，在海盗巢穴 (Buccaneer's Den)的游戏厅赌桌上赢钱。」");
	say();
	if (!var0002) goto labelFunc0488_0198;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「很快我们就会回去，钱又会像甜酒一样涌进来，是吧，Leavell？」");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_0198:
	UI_add_answer(["职业", "海盗巢穴"]);
	UI_remove_answer("Robin");
labelFunc0488_01AC:
	case "职业" attend labelFunc0488_01E8:
	message("「赌博是 Robin 赚钱的方式。但他花了很多时间谈论不列颠王，你甚至会以为他是皇室成员还是什么的！」");
	say();
	if (!var0002) goto labelFunc0488_01E1;
	message("Leavell 脸上突然露出尴尬的表情，并停止了说话。*");
	say();
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「说够了，Leavell！」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_01E1:
	UI_remove_answer("职业");
labelFunc0488_01E8:
	case "海盗巢穴" attend labelFunc0488_0208:
	message("「我们上次在那里遇到了一些不幸。游戏厅的『先生』得知了 Robin 少爷的作弊系统，让他输掉了很多黄金。」");
	say();
	UI_add_answer(["先生", "系统"]);
	UI_remove_answer("海盗巢穴");
labelFunc0488_0208:
	case "系统" attend labelFunc0488_021B:
	message("「他设计了一个聪明的方法，可以在机会之屋(House of Chance)的所有各种游戏中作弊。我敢肯定，这让他赚到了好几倍于他体重的金币。」");
	say();
	UI_remove_answer("系统");
labelFunc0488_021B:
	case "先生" attend labelFunc0488_023B:
	message("「当 Robin 少爷无法偿还债务时，『先生』派了他的打手 Sintag 和他的无赖们来追捕我们。我们不得不搭乘第一艘离开海盗巢穴 (Buccaneer's Den)的船。我不知道他为什么被称为『先生』。」");
	say();
	UI_add_answer(["Sintag", "船"]);
	UI_remove_answer("先生");
labelFunc0488_023B:
	case "Sintag" attend labelFunc0488_0277:
	message("「Battles 和我绝对有能力对付 Sintag……」 *");
	say();
	if (!var0003) goto labelFunc0488_026C;
	UI_show_npc_face(0xFF79, 0x0000);
	message("「是啊，你说得他妈的太对了，我们能搞定他！我们会像宰羊一样割断他的喉咙！哈！」 *");
	say();
	UI_remove_npc_face(0xFF79);
	UI_show_npc_face(0xFF78, 0x0000);
labelFunc0488_026C:
	message("「但 Gordy 雇了一群暴徒来追捕我们。真可惜。我本来想教训他一两顿的。事实上，我想总有一天我会的。」");
	say();
	UI_remove_answer("Sintag");
labelFunc0488_0277:
	case "船" attend labelFunc0488_0297:
	message("「我们乘坐的船沉了，把我们困在这里。我们能活着来到 New Magincia 真幸运！」");
	say();
	UI_add_answer(["沉了", "受困"]);
	UI_remove_answer("船");
labelFunc0488_0297:
	case "沉了" attend labelFunc0488_02AA:
	message("「船员们都不敢相信！那艘船几乎是新的。它从 Minoc 一路航行过来都没有问题。事实上，那是那艘船遇到的第一场风暴。船员没有一个活下来，可怜的家伙们。」");
	say();
	UI_remove_answer("沉了");
labelFunc0488_02AA:
	case "受困" attend labelFunc0488_02BD:
	message("「如果你有办法让我们回到海盗巢穴 (Buccaneer's Den)，Robin 少爷会丰厚地奖赏你。」");
	say();
	UI_remove_answer("受困");
labelFunc0488_02BD:
	case "New Magincia" attend labelFunc0488_02DD:
	message("「全是些乡巴佬蠢货和羊群。这个镇上唯一值得多看一眼的就只有 Constance。」");
	say();
	UI_add_answer(["蠢货和羊群", "Constance"]);
	UI_remove_answer("New Magincia");
labelFunc0488_02DD:
	case "蠢货和羊群" attend labelFunc0488_02F0:
	message("「这里的人不是前者就是后者。这个地方太与世隔绝，所以很落后。更糟的是，他们还喜欢这样！」");
	say();
	UI_remove_answer("蠢货和羊群");
labelFunc0488_02F0:
	case "Constance" attend labelFunc0488_0303:
	message("「她确实能让男人充满活力！我们已经盯上她了，没错！」Leavell 迅速清了清嗓子，暂时把目光从你身上移开。");
	say();
	UI_remove_answer("Constance");
labelFunc0488_0303:
	case "吊饰盒" attend labelFunc0488_0316:
	message("「虽然我自己没见过这样的吊饰盒，也许你应该问问 Robin 少爷。」");
	say();
	UI_remove_answer("吊饰盒");
labelFunc0488_0316:
	case "告辞" attend labelFunc0488_0321:
	goto labelFunc0488_0324;
labelFunc0488_0321:
	goto labelFunc0488_0071;
labelFunc0488_0324:
	endconv;
	message("说完，Leavell 又回去玩他的匕首了。*");
	say();
labelFunc0488_0329:
	if (!(event == 0x0000)) goto labelFunc0488_0337;
	Func092E(0xFF78);
labelFunc0488_0337:
	return;
}


