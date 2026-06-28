#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func08D2 0x8D2 (var var0000, var var0001, var var0002);

void Func046C object#(0x46C) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;

	if (!(event == 0x0001)) goto labelFunc046C_0452;
	UI_show_npc_face(0xFF94, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = 0xFF94;
	var0003 = false;
	var0004 = false;
	var0005 = Func0931(0xFE9B, 0x0001, 0x03E7, 0xFE99, 0x0004);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0146])) goto labelFunc046C_0064;
	message("这个女人闪着明亮的眼睛跟你打招呼。");
	say();
	gflags[0x0146] = true;
	goto labelFunc046C_006E;
labelFunc046C_0064:
	message("「哈啰， ");
	message(var0000);
	message("，」 Reyna 说。");
	say();
labelFunc046C_006E:
	var0006 = UI_find_nearest(0xFE9C, 0x02CB, 0xFFFF);
	if (!var0006) goto labelFunc046C_0092;
	if (!(!gflags[0x0128])) goto labelFunc046C_0092;
	UI_add_answer("墓园");
labelFunc046C_0092:
	if (!var0005) goto labelFunc046C_00A5;
	if (!gflags[0x0128]) goto labelFunc046C_00A5;
	UI_add_answer("带来了花");
labelFunc046C_00A5:
	if (!gflags[0x0163]) goto labelFunc046C_00B6;
	UI_add_answer("治疗");
	var0004 = true;
labelFunc046C_00B6:
	converse attend labelFunc046C_042B;
	case "姓名" attend labelFunc046C_00CC:
	message("「我是 Reyna ，」她说着，把头发从脸上拨开。");
	say();
	UI_remove_answer("姓名");
labelFunc046C_00CC:
	case "职业" attend labelFunc046C_00FE:
	message("「我是一名治疗师。我选择在靠近森林的这里开店。」");
	say();
	gflags[0x0163] = true;
	if (!(!var0004)) goto labelFunc046C_00EA;
	UI_add_answer("治疗");
labelFunc046C_00EA:
	UI_add_answer("森林");
	if (!gflags[0x013B]) goto labelFunc046C_00FE;
	UI_add_answer("动物");
labelFunc046C_00FE:
	case "森林" attend labelFunc046C_0121:
	message("「我想在这里生活和工作，因为这片土地非常美丽。我发现了很多可以做和可以看的事物。不幸的是，森林太广阔了，我还没有遇见许多住在这里的其他人。我确实知道修道院就在我家对面。~~而且附近某处有一位学者。」她若有所思了一会儿。「另外，我相信在修道院东边有一座监狱。」");
	say();
	UI_remove_answer("森林");
	UI_add_answer(["修道院", "学者", "监狱"]);
labelFunc046C_0121:
	case "监狱" attend labelFunc046C_0134:
	message("「我从来没真的看过它，」她笑着说，「但传闻说牢房就在法庭旁边，为了在审判后能快速、轻易地监禁。」");
	say();
	UI_remove_answer("监狱");
labelFunc046C_0134:
	case "学者" attend labelFunc046C_0155:
	message("「我从 Aimi 那里听说他很聪明，而且……对于教导那些有兴趣增加知识的人也有一点过于热心。」");
	say();
	if (!(!var0003)) goto labelFunc046C_014E;
	UI_add_answer("Aimi");
labelFunc046C_014E:
	UI_remove_answer("学者");
labelFunc046C_0155:
	case "Aimi" attend labelFunc046C_0179:
	var0003 = true;
	if (!gflags[0x015A]) goto labelFunc046C_016E;
	message("「她是在修道院打理花园的僧侣。」");
	say();
	goto labelFunc046C_0172;
labelFunc046C_016E:
	message("「她是住在修道院的僧侣之一。目前，她是我在这片森林里唯一真正见过的其他人。」");
	say();
labelFunc046C_0172:
	UI_remove_answer("Aimi");
labelFunc046C_0179:
	case "修道院" attend labelFunc046C_019D:
	message("「这就是这个区域——人神修道院——名字的由来，得名于住在玫瑰友谊会修道院里的僧侣。据说他们酿的酒很美味。其中一位僧侣在闲暇时照料着一个美丽的花园。事实上，我经常向她买花。~~但是，」她咧嘴一笑，「至于其他的僧侣，我只看过他们酿酒和在乡间闲晃。」");
	say();
	gflags[0x015A] = true;
	UI_remove_answer("修道院");
	UI_add_answer(["花", "其他人"]);
labelFunc046C_019D:
	case "其他人" attend labelFunc046C_01BE:
	message("「Aimi 是我唯一见过的，但我知道那里还有一两个人在酿酒。」");
	say();
	if (!(!var0003)) goto labelFunc046C_01B7;
	UI_add_answer("Aimi");
labelFunc046C_01B7:
	UI_remove_answer("其他人");
labelFunc046C_01BE:
	case "花" attend labelFunc046C_01DF:
	message("「是的，我买来给我的母亲。」");
	say();
	if (!(!gflags[0x0128])) goto labelFunc046C_01D8;
	UI_add_answer("母亲");
labelFunc046C_01D8:
	UI_remove_answer("花");
labelFunc046C_01DF:
	case "母亲", "墓园" attend labelFunc046C_025A:
	gflags[0x0128] = true;
	if (!var0006) goto labelFunc046C_0230;
	var0007 = "";
	var0008 = UI_find_nearby(0xFF94, 0x03E7, 0x000A, 0x0000);
	enum();
labelFunc046C_020E:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc046C_0230;
	if (!(UI_get_item_frame(var000B) == 0x0004)) goto labelFunc046C_022D;
	var0007 = "我知道这里已经有 \r\n\t\t\t\t\t\t非常美丽的花了， \r\n\t\t\t\t\t\t但再多的花也不足以 \r\n\t\t\t\t\t\t表达我有多么 \r\n\t\t\t\t\t\t想念她。 ";
labelFunc046C_022D:
	goto labelFunc046C_020E;
labelFunc046C_0230:
	message("她看着自己的脚，然后擡头看你。很明显她正在强忍着泪水。~~「几个月前，我母亲在她的家乡过世了。她出生在这片森林里，并要求被埋葬在这里，靠近我的地方。每天早上我都会来这里看她，并在她的墓前放上花。~~但，」一滴眼泪从她的脸颊滑落，「我是我们家唯一住在附近的人。没有其他人能经常来探望或留下花朵。~~有时她的墓看起来好空荡。」她望向地平线，叹了口气。「");
	message(var0007);
	message("如果有办法能给她带来更多的花就好了。」~~她很快转过身看着你。~~「非常抱歉我像这样胡言乱语。请原谅我， ");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer(["母亲", "墓园"]);
	if (!var0005) goto labelFunc046C_025A;
	UI_add_answer("有花");
labelFunc046C_025A:
	case "带来了花", "有花" attend labelFunc046C_02EF:
	message("当她看到那束花时，眼睛亮了起来。~~「它们好漂亮！你太好心了， ");
	message(var0000);
	message("，为我母亲带来了花！我等不及把它们放在她的墓前了。」");
	say();
	var000C = UI_remove_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	var000D = UI_die_roll(0x0001, 0x0006);
	if (!((var000D == 0x0001) || (var000D == 0x0002))) goto labelFunc046C_02A8;
	var000E = 0x0009;
labelFunc046C_02A8:
	if (!((var000D == 0x0003) || ((var000D == 0x0004) || (var000D == 0x0005)))) goto labelFunc046C_02C8;
	var000E = 0x0013;
labelFunc046C_02C8:
	if (!(var000D == 0x0006)) goto labelFunc046C_02D8;
	var000E = 0x005A;
labelFunc046C_02D8:
	Func0911(var000E);
	gflags[0x0139] = true;
	UI_remove_answer(["有花", "带来了花"]);
labelFunc046C_02EF:
	case "治疗" attend labelFunc046C_0358:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc046C_0315;
	gflags[0x013A] = true;
labelFunc046C_0315:
	if (!gflags[0x013A]) goto labelFunc046C_0347;
	if (!gflags[0x0139]) goto labelFunc046C_0338;
	var000F = true;
	message("「为了你赠花的好意，我会以半价为你提供治疗。」她对你微笑。");
	say();
	Func08D2(0x000F, 0x0005, 0x00C8);
	goto labelFunc046C_0344;
labelFunc046C_0338:
	Func08D2(0x001E, 0x000A, 0x0190);
labelFunc046C_0344:
	goto labelFunc046C_0358;
labelFunc046C_0347:
	message("「抱歉， ");
	message(var0000);
	message("，但除非这是紧急情况，否则我比较希望等到我的店开门。」");
	say();
	UI_add_answer("紧急情况");
labelFunc046C_0358:
	case "紧急情况" attend labelFunc046C_040A:
	var0010 = UI_get_party_list();
	var0011 = 0x0000;
	var0012 = false;
	enum();
labelFunc046C_0372:
	for (var0015 in var0010 with var0013 to var0014) attend labelFunc046C_03BC;
	var0011 = (var0011 + 0x0001);
	var0016 = UI_get_item_flag(var0015, 0x0008);
	if (!var0016) goto labelFunc046C_039E;
	var0012 = true;
labelFunc046C_039E:
	var0017 = UI_get_npc_prop(var0015, 0x0003);
	if (!(var0017 < 0x000A)) goto labelFunc046C_03B9;
	var0012 = true;
labelFunc046C_03B9:
	goto labelFunc046C_0372;
labelFunc046C_03BC:
	if (!(var0011 > 0x0001)) goto labelFunc046C_03CF;
	var0018 = " 和你的同伴";
	goto labelFunc046C_03D5;
labelFunc046C_03CF:
	var0018 = "";
labelFunc046C_03D5:
	message("她快速检查了你");
	message(var0018);
	message(".");
	say();
	if (!(var0012 == true)) goto labelFunc046C_03FF;
	gflags[0x013A] = true;
	message("「你说得对， ");
	message(var0000);
	message("。这的确是紧急情况！」");
	say();
	UI_add_answer("治疗");
	goto labelFunc046C_0403;
labelFunc046C_03FF:
	message("「我很抱歉，但你的伤并不致命。或许你可以在我的店开门时来拜访我。」");
	say();
labelFunc046C_0403:
	UI_remove_answer("紧急情况");
labelFunc046C_040A:
	case "动物" attend labelFunc046C_041D:
	message("她害羞地笑了。~~「我非常喜欢动物。当我还很小的时候，我发现了一只生病的鸽子，却无法把它治好。从那时起，我开始学习治疗的艺术，这样我就能帮助其他可能需要治疗的动物了。~~当然，」她笑了，「既然我有了这些技能，我也用它们来帮助人。」");
	say();
	UI_remove_answer("动物");
labelFunc046C_041D:
	case "告辞" attend labelFunc046C_0428:
	goto labelFunc046C_042B;
labelFunc046C_0428:
	goto labelFunc046C_00B6;
labelFunc046C_042B:
	endconv;
	message("「再见， ");
	message(var0000);
	message(".");
	say();
	if (!gflags[0x0139]) goto labelFunc046C_044A;
	message("「我感谢你送的花！");
	say();
	if (!var000F) goto labelFunc046C_044A;
	gflags[0x0139] = false;
labelFunc046C_044A:
	message("「愿健康永远伴随着你！」*");
	say();
	gflags[0x013A] = false;
labelFunc046C_0452:
	if (!(event == 0x0000)) goto labelFunc046C_045B;
	abort;
labelFunc046C_045B:
	return;
}


