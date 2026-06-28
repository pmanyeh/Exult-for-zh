#game "blackgate"
// externs
extern void Func089C 0x89C ();
extern var Func090A 0x90A ();
extern void Func089B 0x89B (var var0000, var var0001);
extern void Func089A 0x89A (var var0000, var var0001);
extern void Func092F 0x92F (var var0000);

void Func04B5 object#(0x4B5) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04B5_01D9;
	UI_show_npc_face(0xFF4B, 0x0000);
	var0000 = false;
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0246])) goto labelFunc04B5_003F;
	message("这位石像鬼脸上带着愉快的表情。");
	say();
	gflags[0x0246] = true;
	goto labelFunc04B5_0043;
labelFunc04B5_003F:
	message("「很高兴你回来了，人类，」 Inforlem 说。");
	say();
labelFunc04B5_0043:
	converse attend labelFunc04B5_01D4;
	case "姓名" attend labelFunc04B5_0060:
	message("「叫做 Inforlem 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Inforlem");
labelFunc04B5_0060:
	case "Inforlem" attend labelFunc04B5_0073:
	message("「意思是『使人强壮』。」");
	say();
	UI_remove_answer("Inforlem");
labelFunc04B5_0073:
	case "职业" attend labelFunc04B5_00A4:
	message("「训练 Terfin 的其他人变得强壮有力。也卖一些武器。」");
	say();
	UI_add_answer(["训练", "其他人", "Terfin", "购买"]);
	if (!(gflags[0x0244] && (!var0000))) goto labelFunc04B5_00A4;
	UI_add_answer("冲突");
labelFunc04B5_00A4:
	case "购买" attend labelFunc04B5_00D0:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc04B5_00CC;
	Func089C();
	goto labelFunc04B5_00D0;
labelFunc04B5_00CC:
	message("「在营业时间才贩售。请你在那时再来找我。」");
	say();
labelFunc04B5_00D0:
	case "训练" attend labelFunc04B5_010A:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc04B5_0106;
	message("「想成为更好的战士还是法师？」");
	say();
	UI_add_answer(["战士", "法师"]);
	goto labelFunc04B5_010A;
labelFunc04B5_0106:
	message("「在训练时间才进行训练。请你在那时再来找我。」");
	say();
labelFunc04B5_010A:
	case "战士" attend labelFunc04B5_0135:
	message("「每次训练收费 50 金币。还好吗？」");
	say();
	if (!Func090A()) goto labelFunc04B5_0131;
	Func089B([0x0000, 0x0001, 0x0004], 0x0032);
	goto labelFunc04B5_0135;
labelFunc04B5_0131:
	message("「很抱歉，但我必须收取这个金额！」");
	say();
labelFunc04B5_0135:
	case "法师" attend labelFunc04B5_015D:
	message("「每次训练收费 50 金币。可以接受吗？」");
	say();
	if (!Func090A()) goto labelFunc04B5_0159;
	Func089A([0x0006, 0x0002], 0x0032);
	goto labelFunc04B5_015D;
labelFunc04B5_0159:
	message("「很抱歉，但我必须收取这个金额！」");
	say();
labelFunc04B5_015D:
	case "冲突" attend labelFunc04B5_0178:
	message("「知道祭坛和友谊会之间的冲突，但没有任何情报。建议你去找这里的友谊会领袖 Quan 问他。」");
	say();
	var0000 = true;
	gflags[0x023C] = true;
	UI_remove_answer("冲突");
labelFunc04B5_0178:
	case "Terfin" attend labelFunc04B5_018B:
	message("「看出这里有麻烦，但不知道原因和解决方法。」");
	say();
	UI_remove_answer("Terfin");
labelFunc04B5_018B:
	case "其他人" attend labelFunc04B5_01B3:
	message("「告诉你 Forbrak 对 Terfin 和其居民了解很多，而且，」他说，「也了解这里的冲突。」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer("Forbrak");
	if (!(!var0000)) goto labelFunc04B5_01B3;
	UI_add_answer("冲突");
labelFunc04B5_01B3:
	case "Forbrak" attend labelFunc04B5_01C6:
	message("「是酒馆老板。」");
	say();
	UI_remove_answer("Forbrak");
labelFunc04B5_01C6:
	case "告辞" attend labelFunc04B5_01D1:
	goto labelFunc04B5_01D4;
labelFunc04B5_01D1:
	goto labelFunc04B5_0043;
labelFunc04B5_01D4:
	endconv;
	message("「期待再次见到你，人类。」*");
	say();
labelFunc04B5_01D9:
	if (!(event == 0x0000)) goto labelFunc04B5_01E7;
	Func092F(0xFF4B);
labelFunc04B5_01E7:
	return;
}


