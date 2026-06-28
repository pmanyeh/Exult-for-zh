#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0863 0x863 ();
extern void Func092E 0x92E (var var0000);

void Func0436 object#(0x436) ()
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

	if (!(event == 0x0001)) goto labelFunc0436_0289;
	UI_show_npc_face(0xFFCA, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCA));
	if (!(var0002 == 0x0007)) goto labelFunc0436_00C2;
	var0004 = Func08F7(0xFFD9);
	var0005 = Func08F7(0xFFD8);
	if (!(var0004 && var0005)) goto labelFunc0436_00BD;
	message("Coop 正与『圣者旅团』在舞台上。他看见你，并说：「嗯，今晚有位特别的听众，这下一首曲子是要献给他们的。」");
	say();
	message("他向伙伴们示意，他们开始演奏。他唱出以下歌词：");
	say();
	message("「我们飞跃全国，所向披靡——~最好留意我们的战斗怒吼！");
	say();
	message("「我们为美德而战，名扬四海，~并让少女们为之倾心。」");
	say();
	message("接着 Neno 和 Judith 加入了合唱：");
	say();
	message("「喔，我们是『圣者旅团』~而且我们品德高尚！");
	say();
	message("「当心点，食人魔与野兽~以免成为我们下一次盛宴的佳肴！");
	say();
	message("「我们拯救少女，如此美丽，~并大胆地与海盗搏斗！");
	say();
	message("「没有邪恶的巫妖能让我们畏缩或动摇！~我们将战胜他们所有人，赢得胜利！");
	say();
	message("「我们是圣——者！~我们是圣——者！~我们是圣——者——乐——团！」");
	say();
	message("掌声如雷动。*");
	say();
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_00BA;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「嗯。他们一定是看到你来了，");
	message(var0001);
	message("。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
	abort;
labelFunc0436_00BA:
	goto labelFunc0436_00C2;
labelFunc0436_00BD:
	message("「现在不能停下来说话！我参加『圣者旅团』的表演要迟到了！来蓝野猪酒馆听我们演奏吧！」*");
	say();
	abort;
labelFunc0436_00C2:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_00E8;
	UI_add_answer("Iolo");
labelFunc0436_00E8:
	if (!(!gflags[0x00B7])) goto labelFunc0436_0141;
	message("你看见一个年轻、精瘦的青少年。");
	say();
	if (!var0006) goto labelFunc0436_013A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你好啊，小伙子！这是");
	message(var0000);
	message("，圣者！这是我的年轻学徒， Coop 。最近好吗， Coop ？」*");
	say();
	UI_show_npc_face(0xFFCA, 0x0000);
	message("「还不错，大人。我今天早上卖出了一把三连弩。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「太好了！太好了！让金币继续滚滚而来，我总是这么说！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
labelFunc0436_013A:
	gflags[0x00B7] = true;
	goto labelFunc0436_0145;
labelFunc0436_0141:
	message("「你好！」 Coop 说。");
	say();
labelFunc0436_0145:
	converse attend labelFunc0436_0284;
	case "姓名" attend labelFunc0436_015B:
	message("「我的名字是 Coop 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0436_015B:
	case "职业" attend labelFunc0436_0196:
	message("「我是 Iolo 弓箭店的经理！ Iolo 大师把这个重任交托给我！");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0436_0185;
	message("「如果你在弓箭方面需要任何东西，请告诉我！」");
	say();
	UI_add_answer(["弓箭", "买东西"]);
	goto labelFunc0436_0189;
labelFunc0436_0185:
	message("「你必须在店里营业时来！」");
	say();
labelFunc0436_0189:
	UI_add_answer(["Iolo 弓箭店", "重任"]);
labelFunc0436_0196:
	case "Iolo 弓箭店" attend labelFunc0436_01A9:
	message("「Iolo 在很多、很多年前开了这间店。他最近在 Serpent's Hold 开了 Iolo 南部分店。他变得相当有企业家精神了！」");
	say();
	UI_remove_answer("Iolo 弓箭店");
labelFunc0436_01A9:
	case "重任" attend labelFunc0436_01F5:
	message("「我卖很多商品，但我也打算成为一名弓箭大师来延续 Iolo 的好名声！ Iolo 教导得很好！」*");
	say();
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_01E3;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「是的，这小伙子很棒！在我教他第一堂课之前就很棒了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
labelFunc0436_01E3:
	message("「我多么想加入你们的队伍去冒险啊！但是，那就没人来顾店了。所以我不能去。但总有一天……总之，我晚上会跟一个乐团一起唱歌来取悦自己。」");
	say();
	UI_remove_answer("重任");
	UI_add_answer("唱歌");
labelFunc0436_01F5:
	case "Iolo" attend labelFunc0436_022B:
	message("「你好，老板！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你好，小伙子。你看起来不错。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
	message("「你也是，大人！」*");
	say();
	UI_remove_answer("Iolo");
labelFunc0436_022B:
	case "唱歌" attend labelFunc0436_0245:
	message("「我的乐团叫做……嗯，叫做『圣者旅团』。希望那没有冒犯到你。」");
	say();
	UI_remove_answer("唱歌");
	UI_add_answer("圣者旅团");
labelFunc0436_0245:
	case "圣者旅团" attend labelFunc0436_0258:
	message("「乐团就只有我和音乐厅的两位音乐家。我们每晚在蓝野猪酒馆表演。我负责唱歌和写歌词。其他两位演奏乐器。请来听我们演奏！」");
	say();
	UI_remove_answer("圣者旅团");
labelFunc0436_0258:
	case "弓箭" attend labelFunc0436_026B:
	message("「我们卖各种弓，还有箭和弩箭。如果你想买些什么，请说！」");
	say();
	UI_remove_answer("弓箭");
labelFunc0436_026B:
	case "买东西" attend labelFunc0436_0276:
	Func0863();
labelFunc0436_0276:
	case "告辞" attend labelFunc0436_0281:
	goto labelFunc0436_0284;
labelFunc0436_0281:
	goto labelFunc0436_0145;
labelFunc0436_0284:
	endconv;
	message("「再见！」*");
	say();
labelFunc0436_0289:
	if (!(event == 0x0000)) goto labelFunc0436_0310;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCA));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0436_030A;
	if (!(var0007 == 0x0001)) goto labelFunc0436_02CD;
	var0008 = "@需要弓或箭吗？@";
labelFunc0436_02CD:
	if (!(var0007 == 0x0002)) goto labelFunc0436_02DD;
	var0008 = "@Iolo 弓箭店营业中！@";
labelFunc0436_02DD:
	if (!(var0007 == 0x0003)) goto labelFunc0436_02ED;
	var0008 = "@需要弩箭？还是箭？@";
labelFunc0436_02ED:
	if (!(var0007 == 0x0004)) goto labelFunc0436_02FD;
	var0008 = "@弓箭装备！@";
labelFunc0436_02FD:
	UI_item_say(0xFFCA, var0008);
	goto labelFunc0436_0310;
labelFunc0436_030A:
	Func092E(0xFFCA);
labelFunc0436_0310:
	return;
}


