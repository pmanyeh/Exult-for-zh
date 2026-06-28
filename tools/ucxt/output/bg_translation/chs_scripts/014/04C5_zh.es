#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04C5 object#(0x4C5) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04C5_01E2;
	UI_show_npc_face(0xFF3B, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x026E])) goto labelFunc04C5_0078;
	var0000 = UI_get_distance(0xFF3B, 0xFF3D);
	if (!(var0000 < 0x000B)) goto labelFunc04C5_0058;
	if (!gflags[0x026C]) goto labelFunc04C5_004F;
	var0001 = "，站在 John-Paul 爵士身后，行举手礼。";
	goto labelFunc04C5_0055;
labelFunc04C5_004F:
	var0001 = "，站在另一名骑士身后，行举手礼。";
labelFunc04C5_0055:
	goto labelFunc04C5_005E;
labelFunc04C5_0058:
	var0001 = "。";
labelFunc04C5_005E:
	message("你看到一只表情非常严肃的石像鬼");
	message(var0001);
	say();
	var0002 = Func08F7(0xFF3D);
	gflags[0x026E] = true;
	goto labelFunc04C5_007C;
labelFunc04C5_0078:
	message("「请问如何能提供协助。」他瞇起眼睛。");
	say();
labelFunc04C5_007C:
	if (!(gflags[0x025E] && (!gflags[0x0265]))) goto labelFunc04C5_008E;
	UI_add_answer("雕像");
labelFunc04C5_008E:
	if (!(gflags[0x0276] && (!gflags[0x0261]))) goto labelFunc04C5_00A0;
	UI_add_answer("是 Pendaran 做的");
labelFunc04C5_00A0:
	converse attend labelFunc04C5_01DD;
	case "姓名" attend labelFunc04C5_00B6:
	message("「名字是 Horffe。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C5_00B6:
	case "职业" attend labelFunc04C5_00CF:
	message("「是卫兵队长。为 Serpent's Hold 的人民服务并保护他们。」");
	say();
	UI_add_answer(["队长", "Serpent's Hold"]);
labelFunc04C5_00CF:
	case "队长" attend labelFunc04C5_00EF:
	message("「被命令保护居住在 Serpent's Hold 的人民，并维持骑士的整体秩序。」");
	say();
	UI_remove_answer("队长");
	UI_add_answer(["人们", "骑士"]);
labelFunc04C5_00EF:
	case "Serpent's Hold", "人们" attend labelFunc04C5_010B:
	message("「引导你去找神圣码头的酒馆老板 Denton 爵士。他比我更了解堡垒和这里的人。」");
	say();
	UI_remove_answer(["人们", "Serpent's Hold"]);
labelFunc04C5_010B:
	case "是 Pendaran 做的" attend labelFunc04C5_011E:
	message("「感谢你提供这些信息。很高兴能知道袭击我的人的身分。」");
	say();
	UI_remove_answer("是 Pendaran 做的");
labelFunc04C5_011E:
	case "骑士" attend labelFunc04C5_0131:
	message("「通知你，许多优秀的战士居住在堡垒之内。几乎不用担心土匪或凶猛动物的袭击。」");
	say();
	UI_remove_answer("骑士");
labelFunc04C5_0131:
	case "雕像" attend labelFunc04C5_0151:
	message("「对此一无所知！」");
	say();
	if (!gflags[0x025F]) goto labelFunc04C5_014A;
	UI_add_answer("碎片上的血");
labelFunc04C5_014A:
	UI_remove_answer("雕像");
labelFunc04C5_0151:
	case "碎片上的血" attend labelFunc04C5_016F:
	message("他粗犷的态度软化了。~~「是我的血。」他叹了口气。「但破坏雕像的人不是我！是在试图阻止破坏者时受伤的。」");
	say();
	UI_add_answer("破坏者");
	UI_remove_answer("碎片上的血");
	gflags[0x0265] = true;
labelFunc04C5_016F:
	case "破坏者" attend labelFunc04C5_018F:
	message("他低头看着自己的脚。~~「不知道他是谁。当时非常暗。请你不要告诉 Richter 爵士。」");
	say();
	UI_remove_answer("破坏者");
	UI_add_answer(["黑暗", "Richter 爵士"]);
labelFunc04C5_018F:
	case "黑暗" attend labelFunc04C5_01A2:
	message("「能见度非常差，但我确信我是在和一名武装骑士扭打。」");
	say();
	UI_remove_answer("黑暗");
labelFunc04C5_01A2:
	case "Richter 爵士" attend labelFunc04C5_01BC:
	message("「知道他不会相信一个公然藐视友谊会的人。」");
	say();
	UI_remove_answer("Richter 爵士");
	UI_add_answer("友谊会");
labelFunc04C5_01BC:
	case "友谊会" attend labelFunc04C5_01CF:
	message("「对它了解不多。也不怎么喜欢它。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04C5_01CF:
	case "告辞" attend labelFunc04C5_01DA:
	goto labelFunc04C5_01DD;
labelFunc04C5_01DA:
	goto labelFunc04C5_00A0;
labelFunc04C5_01DD:
	endconv;
	message("「道别。」*");
	say();
labelFunc04C5_01E2:
	if (!(event == 0x0000)) goto labelFunc04C5_01F0;
	Func092F(0xFF3B);
labelFunc04C5_01F0:
	return;
}


