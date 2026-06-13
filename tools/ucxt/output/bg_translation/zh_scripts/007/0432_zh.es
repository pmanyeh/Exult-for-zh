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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00B3])) goto labelFunc0432_004F;
	message("你看見一位看起來很友善的農夫，當你走近時向你揮手。");
	say();
	gflags[0x00B3] = true;
	goto labelFunc0432_0059;
labelFunc0432_004F:
	message("「又見面了，");
	message(var0000);
	message("。」 Fred 說。");
	say();
labelFunc0432_0059:
	converse attend labelFunc0432_016E;
	case "姓名" attend labelFunc0432_006F:
	message("「我的名字是 Fred 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0432_006F:
	case "職業" attend labelFunc0432_0088:
	message("「我在 Britain 的農夫市集 (Farmer's Market) 這裡賣肉。」");
	say();
	UI_add_answer(["肉類", "農夫市集"]);
labelFunc0432_0088:
	case "肉類" attend labelFunc0432_00A2:
	message("「這是你能買到最美味的肉。幫自己一個忙，嚐嚐看吧。」");
	say();
	UI_remove_answer("肉類");
	UI_add_answer("購買");
labelFunc0432_00A2:
	case "農夫市集" attend labelFunc0432_00C2:
	message("「在農夫市集這裡，我們賣從鎮外農夫那買來的蔬菜，以及從 Paws 的屠宰場來的肉。」");
	say();
	UI_remove_answer("農夫市集");
	UI_add_answer(["屠宰場", "Paws"]);
labelFunc0432_00C2:
	case "屠宰場" attend labelFunc0432_00E2:
	message("「屠宰場是由一個名叫 Morfin 的人經營的，他是一個來自海盜巢穴 (Buccaneer's Den) 的成功商人。」");
	say();
	UI_remove_answer("屠宰場");
	UI_add_answer(["Morfin", "海盜巢穴"]);
labelFunc0432_00E2:
	case "Morfin" attend labelFunc0432_00F5:
	message("「Morfin 是個不尋常的人物。如果我不是比較了解狀況，我會說他捲入了一些見不得光的商業活動。」");
	say();
	UI_remove_answer("Morfin");
labelFunc0432_00F5:
	case "海盜巢穴" attend labelFunc0432_0108:
	message("「Morfin 離開那個地方，是因為他認為那裡發展起來的所有商業活動，都是對他自己業務的競爭，所以搬到了 Paws 。」");
	say();
	UI_remove_answer("海盜巢穴");
labelFunc0432_0108:
	case "Paws" attend labelFunc0432_011B:
	message("「Paws 是個買便宜貨的好地方。很遺憾地說，那裡許多人相當貧窮。然而，那裡的商業活動很少。在 Paws ，人們必須在更私人的層面上與人打交道。」");
	say();
	UI_remove_answer("Paws");
labelFunc0432_011B:
	case "購買" attend labelFunc0432_0160:
	if (!(!(var0002 == 0x0007))) goto labelFunc0432_0135;
	message("「你必須在農夫市集營業時再來。」");
	say();
	goto labelFunc0432_0159;
labelFunc0432_0135:
	message("「你想買些肉嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0432_0155;
	message("「我們今天為你準備了上好的肉品，");
	message(var0000);
	message("。」");
	say();
	Func088C();
	goto labelFunc0432_0159;
labelFunc0432_0155:
	message("「等你餓了再來，我們那時候再為你服務。」");
	say();
labelFunc0432_0159:
	UI_remove_answer("購買");
labelFunc0432_0160:
	case "告辭" attend labelFunc0432_016B:
	goto labelFunc0432_016E;
labelFunc0432_016B:
	goto labelFunc0432_0059;
labelFunc0432_016E:
	endconv;
	message("「再見，");
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
	var0005 = "@快來買蔬菜！@";
labelFunc0432_01BD:
	if (!(var0004 == 0x0002)) goto labelFunc0432_01CD;
	var0005 = "@這裡賣肉喔！@";
labelFunc0432_01CD:
	if (!(var0004 == 0x0003)) goto labelFunc0432_01DD;
	var0005 = "@賣雞蛋囉！@";
labelFunc0432_01DD:
	if (!(var0004 == 0x0004)) goto labelFunc0432_01ED;
	var0005 = "@全 Britannia 最好的價格！@";
labelFunc0432_01ED:
	UI_item_say(0xFFCE, var0005);
	goto labelFunc0432_0200;
labelFunc0432_01FA:
	Func092E(0xFFCE);
labelFunc0432_0200:
	return;
}


