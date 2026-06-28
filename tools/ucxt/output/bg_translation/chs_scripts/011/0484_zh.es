#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0484 object#(0x484) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0484_0284;
	UI_show_npc_face(0xFF7C, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0180]) goto labelFunc0484_0035;
	UI_add_answer("陌生人");
labelFunc0484_0035:
	if (!(gflags[0x017F] && (!gflags[0x01CD]))) goto labelFunc0484_0047;
	UI_add_answer("找到");
labelFunc0484_0047:
	if (!(!gflags[0x018D])) goto labelFunc0484_0059;
	message("你看到一个衣衫褴褛的年轻人，显然正在承受失恋之痛。");
	say();
	gflags[0x018D] = true;
	goto labelFunc0484_0063;
labelFunc0484_0059:
	message("Henry 向你打招呼。「很高兴再次和你说话，");
	message(var0000);
	message("！」");
	say();
labelFunc0484_0063:
	converse attend labelFunc0484_027F;
	case "姓名" attend labelFunc0484_007F:
	message("「我的名字是 Henry ，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0484_007F:
	case "职业" attend labelFunc0484_00AB:
	if (!(!(gflags[0x017D] || gflags[0x01CD]))) goto labelFunc0484_00A0;
	message("「工作？！谁心碎了还有办法工作？！」");
	say();
	UI_add_answer("心碎");
	goto labelFunc0484_00AB;
labelFunc0484_00A0:
	message("「虽然我被称为小贩，但我拥有 New Magincia 里最齐全的商品。」");
	say();
	UI_add_answer("New Magincia");
labelFunc0484_00AB:
	case "New Magincia" attend labelFunc0484_00BE:
	message("「我一辈子都住在这里，从没去过其他地方。这里基本上是个非常美好的地方，人们仍然坚持着古老的传统和价值观。世界上的其他人一定认为时代抛弃了我们，但其实是他们失去了曾经拥有的一切。」");
	say();
	UI_remove_answer("New Magincia");
labelFunc0484_00BE:
	case "心碎" attend labelFunc0484_00D8:
	message("「我被我爱的女人拒绝了。」");
	say();
	UI_add_answer("女人");
	UI_remove_answer("心碎");
labelFunc0484_00D8:
	case "女人" attend labelFunc0484_00F8:
	message("他的眼睛亮了起来。「她的名字是 Constance ，她是世界上最美丽的女人，我们曾经相爱过一段时间。」他神色黯然，深深叹了口气。「但那是在我犯下一个可怕的错误之前……」");
	say();
	UI_add_answer(["Constance", "错误"]);
	UI_remove_answer("女人");
labelFunc0484_00F8:
	case "Constance" attend labelFunc0484_010B:
	message("「她是镇上的挑水工。她将谦卑之井的水送到镇上的每户人家。」");
	say();
	UI_remove_answer("Constance");
labelFunc0484_010B:
	case "错误" attend labelFunc0484_012B:
	message("「我答应送给她一个非常古老且珍贵的吊饰盒，作为我爱慕的信物。我儿时的朋友 Katrina 把那个吊饰盒送给了我。」");
	say();
	UI_remove_answer("错误");
	UI_add_answer(["吊饰盒", "Katrina"]);
labelFunc0484_012B:
	case "吊饰盒" attend labelFunc0484_0145:
	message("「我还来不及把吊饰盒交给她就弄丢了。我找遍了所有地方都找不到。现在， Constance 认为我是个无赖，抛弃了我。」");
	say();
	UI_remove_answer("吊饰盒");
	UI_add_answer("弄丢");
labelFunc0484_0145:
	case "Katrina" attend labelFunc0484_01A2:
	message("「Katrina 是 New Magincia 的牧羊女。她从我小时候就是我的朋友了。」");
	say();
	var0001 = Func08F7(0xFFF7);
	if (!var0001) goto labelFunc0484_019B;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「我们曾有过一些美好的回忆，不是吗， Henry ？」");
	say();
	UI_show_npc_face(0xFF7C, 0x0000);
	message("「喔，确实如此！但妳不愿做我的爱人，所以我们很久以前就认命当『普通朋友』了，不是吗？」");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「妳说什么就是什么，亲爱的 Henry 。」");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7C, 0x0000);
labelFunc0484_019B:
	UI_remove_answer("Katrina");
labelFunc0484_01A2:
	case "弄丢" attend labelFunc0484_01DC:
	message("「我昨天和那三个陌生人说过话后，就发现我的吊饰盒不见了。你能帮我找到它吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0484_01CB;
	message("「喔，谢谢你，");
	message(var0000);
	message("！如果不是你，我真不知道该怎么办。」");
	say();
	gflags[0x017D] = true;
	goto labelFunc0484_01D5;
labelFunc0484_01CB:
	message("「喔，好吧……我知道你忙着自己的任务。谢谢你听我诉苦，");
	message(var0000);
	message("。」");
	say();
labelFunc0484_01D5:
	UI_remove_answer("弄丢");
labelFunc0484_01DC:
	case "陌生人" attend labelFunc0484_01F3:
	message("「New Magincia 还有三个陌生人。他们比你早几天到。他们的船沉了，他们好不容易才保住性命来到这里。」");
	say();
	UI_remove_answer("陌生人");
	gflags[0x0180] = true;
labelFunc0484_01F3:
	case "找到" attend labelFunc0484_0271:
	message("「你找到吊饰盒了！」");
	say();
	var0003 = UI_remove_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, true);
	if (!var0003) goto labelFunc0484_0266;
	Func0911(0x0032);
	message("你把吊饰盒交给 Henry 。「现在我可以把它交给 Constance ，并实现我对她的承诺了！我实在感激不尽，圣者！」");
	say();
	gflags[0x01CD] = true;
	var0004 = Func08F7(0xFFF7);
	if (!var0004) goto labelFunc0484_0263;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「我很高兴这件事对你有了好结果，亲爱的 Henry 。」");
	say();
	UI_show_npc_face(0xFF7C, 0x0000);
	message("「谢谢妳， Katrina 。」");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7C, 0x0000);
labelFunc0484_0263:
	goto labelFunc0484_026A;
labelFunc0484_0266:
	message("当你没有要把它交给他时，他看起来心急如焚。「它在哪里？！我需要它来向我爱的女人证明我的心意！」");
	say();
labelFunc0484_026A:
	UI_remove_answer("找到");
labelFunc0484_0271:
	case "告辞" attend labelFunc0484_027C:
	goto labelFunc0484_027F;
labelFunc0484_027C:
	goto labelFunc0484_0063;
labelFunc0484_027F:
	endconv;
	message("「祝你旅途平安，一切顺利。」*");
	say();
labelFunc0484_0284:
	if (!(event == 0x0000)) goto labelFunc0484_0292;
	Func092E(0xFF7C);
labelFunc0484_0292:
	return;
}


