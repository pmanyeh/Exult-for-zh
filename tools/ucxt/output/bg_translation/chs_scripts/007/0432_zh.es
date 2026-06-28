#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func088C 0x88C ();
extern void Func092E 0x92E (var var0000);

void Func0432 object#(0x432) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0432_0179;
	UI_show_npc_face(0xFFCE, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCE));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00B3])) goto labelFunc0432_004F;
	message("你看见一位看起来很友善的农夫，当你走近时向你挥手。");
	say();
	gflags[0x00B3] = true;
	goto labelFunc0432_0059;
labelFunc0432_004F:
	message("「又见面了，");
	message(var0000);
	message("。」 Fred 说。");
	say();
labelFunc0432_0059:
	converse attend labelFunc0432_016E;
	case "姓名" attend labelFunc0432_006F:
	message("「我的名字是 Fred 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0432_006F:
	case "职业" attend labelFunc0432_0088:
	message("「我在不列颠城的农夫市集 (Farmer's Market) 这里卖肉。」");
	say();
	UI_add_answer(["肉类", "农夫市集"]);
labelFunc0432_0088:
	case "肉类" attend labelFunc0432_00A2:
	message("「这是你能买到最美味的肉。帮自己一个忙，尝尝看吧。」");
	say();
	UI_remove_answer("肉类");
	UI_add_answer("购买");
labelFunc0432_00A2:
	case "农夫市集" attend labelFunc0432_00C2:
	message("「在农夫市集这里，我们卖从镇外农夫那买来的蔬菜，以及从 Paws 的屠宰场来的肉。」");
	say();
	UI_remove_answer("农夫市集");
	UI_add_answer(["屠宰场", "Paws"]);
labelFunc0432_00C2:
	case "屠宰场" attend labelFunc0432_00E2:
	message("「屠宰场是由一个名叫 Morfin 的人经营的，他是一个来自海盗巢穴 (Buccaneer's Den) 的成功商人。」");
	say();
	UI_remove_answer("屠宰场");
	UI_add_answer(["Morfin", "海盗巢穴"]);
labelFunc0432_00E2:
	case "Morfin" attend labelFunc0432_00F5:
	message("「Morfin 是个不寻常的人物。如果我不是比较了解状况，我会说他卷入了一些见不得光的商业活动。」");
	say();
	UI_remove_answer("Morfin");
labelFunc0432_00F5:
	case "海盗巢穴" attend labelFunc0432_0108:
	message("「Morfin 离开那个地方，是因为他认为那里发展起来的所有商业活动，都是对他自己业务的竞争，所以搬到了 Paws 。」");
	say();
	UI_remove_answer("海盗巢穴");
labelFunc0432_0108:
	case "Paws" attend labelFunc0432_011B:
	message("「Paws 是个买便宜货的好地方。很遗憾地说，那里许多人相当贫穷。然而，那里的商业活动很少。在 Paws ，人们必须在更私人的层面上与人打交道。」");
	say();
	UI_remove_answer("Paws");
labelFunc0432_011B:
	case "购买" attend labelFunc0432_0160:
	if (!(!(var0002 == 0x0007))) goto labelFunc0432_0135;
	message("「你必须在农夫市集营业时再来。」");
	say();
	goto labelFunc0432_0159;
labelFunc0432_0135:
	message("「你想买些肉吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0432_0155;
	message("「我们今天为你准备了上好的肉品，");
	message(var0000);
	message("。」");
	say();
	Func088C();
	goto labelFunc0432_0159;
labelFunc0432_0155:
	message("「等你饿了再来，我们那时候再为你服务。」");
	say();
labelFunc0432_0159:
	UI_remove_answer("购买");
labelFunc0432_0160:
	case "告辞" attend labelFunc0432_016B:
	goto labelFunc0432_016E;
labelFunc0432_016B:
	goto labelFunc0432_0059;
labelFunc0432_016E:
	endconv;
	message("「再见，");
	message(var0000);
	message("。」*");
	say();
labelFunc0432_0179:
	if (!(event == 0x0000)) goto labelFunc0432_0200;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCE));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0432_01FA;
	if (!(var0004 == 0x0001)) goto labelFunc0432_01BD;
	var0005 = "@快来买蔬菜！@";
labelFunc0432_01BD:
	if (!(var0004 == 0x0002)) goto labelFunc0432_01CD;
	var0005 = "@这里卖肉喔！@";
labelFunc0432_01CD:
	if (!(var0004 == 0x0003)) goto labelFunc0432_01DD;
	var0005 = "@卖鸡蛋啰！@";
labelFunc0432_01DD:
	if (!(var0004 == 0x0004)) goto labelFunc0432_01ED;
	var0005 = "@全不列颠尼亚最好的价格！@";
labelFunc0432_01ED:
	UI_item_say(0xFFCE, var0005);
	goto labelFunc0432_0200;
labelFunc0432_01FA:
	Func092E(0xFFCE);
labelFunc0432_0200:
	return;
}


