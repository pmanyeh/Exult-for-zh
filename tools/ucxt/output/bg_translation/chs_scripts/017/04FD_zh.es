#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0864 0x864 ();

void Func04FD object#(0x4FD) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04FD_01F1;
	UI_show_npc_face(0xFF03, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF04);
	var0002 = Func08F7(0xFF0C);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02CB])) goto labelFunc04FD_004C;
	message("这个年轻人睁大眼睛的表情似乎表明了他的天真。");
	say();
	gflags[0x02CB] = true;
	goto labelFunc04FD_0056;
labelFunc04FD_004C:
	message("「哎呀，你好，");
	message(var0000);
	message("，」Cosmo 说。");
	say();
labelFunc04FD_0056:
	converse attend labelFunc04FD_01E6;
	case "姓名" attend labelFunc04FD_0083:
	message("「我是 Cosmo ，");
	message(var0000);
	message("，Ophelia 的未婚夫。」");
	say();
	gflags[0x02D7] = true;
	UI_remove_answer("姓名");
	UI_add_answer(["未婚妻", "Ophelia"]);
labelFunc04FD_0083:
	case "职业" attend labelFunc04FD_009C:
	message("「我，呃，正在寻找某样东西，");
	message(var0000);
	message("。」");
	say();
	UI_add_answer("寻找");
labelFunc04FD_009C:
	case "未婚妻" attend labelFunc04FD_00DE:
	message("「是的，");
	message(var0000);
	message("，只要我回到她柔软的怀抱，我们就要结婚了。」");
	say();
	if (!var0002) goto labelFunc04FD_00D7;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「喔，拜托！」他翻了个白眼。*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF03, 0x0000);
labelFunc04FD_00D7:
	UI_remove_answer("未婚妻");
labelFunc04FD_00DE:
	case "寻找" attend labelFunc04FD_0138:
	message("「嗯，");
	message(var0000);
	message("，这有点私事。」");
	say();
	if (!var0002) goto labelFunc04FD_012A;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「他正在寻找的，");
	message(var0000);
	message("，是他的童贞！」*");
	say();
	UI_show_npc_face(0xFF03, 0x0000);
	message("「那不是真的！」他脸红了。~~「我在找一个方法来『证明』……我的童贞！」*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_add_answer("证明");
labelFunc04FD_012A:
	UI_add_answer("私事");
	UI_remove_answer("寻找");
labelFunc04FD_0138:
	case "私事" attend labelFunc04FD_0151:
	message("「我……宁愿……不谈这个，");
	message(var0000);
	message("，」他结结巴巴地说。");
	say();
	UI_remove_answer("私事");
labelFunc04FD_0151:
	case "Ophelia" attend labelFunc04FD_0164:
	message("「她是不列颠尼亚最美丽的女人。我仍然难以置信她竟然同意嫁给我这个卑微的战士。如果有必要，为了留住她的心，我愿意为她走到世界尽头！」");
	say();
	UI_remove_answer("Ophelia");
labelFunc04FD_0164:
	case "证明" attend labelFunc04FD_0184:
	message("他低头看着自己的脚。「Ophelia 夫人担心我可能不是……纯洁的。我等了一辈子才等到像她这样的人。难道她看不出来我是为了婚姻才保留自己的吗？」");
	say();
	UI_add_answer(["保留", "纯洁"]);
	UI_remove_answer("证明");
labelFunc04FD_0184:
	case "保留" attend labelFunc04FD_019D:
	message("「你肯定能看出这其中的价值，");
	message(var0000);
	message("。如果我没有克制……嗯……你懂的，就没有女人会想要我了。」");
	say();
	UI_remove_answer("保留");
labelFunc04FD_019D:
	case "纯洁" attend labelFunc04FD_01C1:
	message("「我必须向可爱的 Ophelia 证明我仍然是处男。为了做到这一点，我需要证明独角兽会让我触碰牠。我的朋友和我在这里寻找这样的生物，因为最近的传说声称有一只住在这个地城里。」");
	say();
	gflags[0x02E0] = true;
	if (!gflags[0x02D0]) goto labelFunc04FD_01BA;
	UI_add_answer("独角兽说不");
labelFunc04FD_01BA:
	UI_remove_answer("纯洁");
labelFunc04FD_01C1:
	case "独角兽说不" attend labelFunc04FD_01D8:
	message("「你见过那只独角兽了？」他皱了一会儿眉头，但很快就舒展开来。~~「尽管如此，我还是会努力寻找牠。没有什么能阻止我去找我心爱的 Ophelia。」");
	say();
	UI_remove_answer("独角兽说不");
	gflags[0x02D0] = false;
labelFunc04FD_01D8:
	case "告辞" attend labelFunc04FD_01E3:
	goto labelFunc04FD_01E6;
labelFunc04FD_01E3:
	goto labelFunc04FD_0056;
labelFunc04FD_01E6:
	endconv;
	message("「祝你有个美好的一天，");
	message(var0000);
	message("。如果你看到独角兽，告诉牠等我。」*");
	say();
labelFunc04FD_01F1:
	if (!(event == 0x0000)) goto labelFunc04FD_01FC;
	Func0864();
labelFunc04FD_01FC:
	return;
}


