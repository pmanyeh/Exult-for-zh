#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern void Func085B 0x85B ();

void Func04F4 object#(0x4F4) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04F4_01A5;
	UI_show_npc_face(0xFF0C, 0x0000);
	var0000 = Func08F7(0xFF03);
	var0001 = Func08F7(0xFF04);
	var0002 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02C8])) goto labelFunc04F4_004C;
	message("这名战士举止充满自信。");
	say();
	gflags[0x02C8] = true;
	goto labelFunc04F4_0056;
labelFunc04F4_004C:
	message("「你好，");
	message(var0002);
	message("，」Cairbre 说。");
	say();
labelFunc04F4_0056:
	converse attend labelFunc04F4_019A;
	case "姓名" attend labelFunc04F4_0072:
	message("「你可以叫我 Cairbre，");
	message(var0002);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04F4_0072:
	case "职业" attend labelFunc04F4_0092:
	message("「我是一名佣兵。但目前，我正在努力帮助我的朋友恢复理智。」");
	say();
	UI_remove_answer("职业");
	UI_add_answer(["朋友", "理智"]);
labelFunc04F4_0092:
	case "朋友" attend labelFunc04F4_00B9:
	message("「我不打算让 Cosmo 独自来这里冒险。所以，我主动提出陪他，Kallibrus 也是。」");
	say();
	if (!var0001) goto labelFunc04F4_00AB;
	message("他指着石像鬼。");
	say();
	goto labelFunc04F4_00B2;
labelFunc04F4_00AB:
	UI_add_answer("Kallibrus");
labelFunc04F4_00B2:
	UI_remove_answer("朋友");
labelFunc04F4_00B9:
	case "Kallibrus" attend labelFunc04F4_00CC:
	message("「他是我的战友，也是 Cosmo 的朋友。我还没遇过比他更值得信赖的同伴，他彻底打破了所有关于石像鬼的谣言。」");
	say();
	UI_remove_answer("Kallibrus");
labelFunc04F4_00CC:
	case "理智" attend labelFunc04F4_0119:
	message("「说来话长。Cosmo 正在寻找据说栖息在这个洞穴里的独角兽。」他看着你的眼睛耸了耸肩。~~「他是个傻瓜。」");
	say();
	if (!var0000) goto labelFunc04F4_0101;
	message("*");
	say();
	UI_show_npc_face(0xFF03, 0x0000);
	message("「我听到了，Cairbre！」*");
	say();
	UI_remove_npc_face(0xFF03);
	UI_show_npc_face(0xFF0C, 0x0000);
labelFunc04F4_0101:
	gflags[0x02E0] = true;
	UI_remove_answer("理智");
	UI_add_answer(["独角兽", "傻瓜"]);
labelFunc04F4_0119:
	case "独角兽" attend labelFunc04F4_012C:
	message("「独角兽传统上是证明年轻少女纯洁的一种方式。然而，较少人知道的是，牠也能揭示一个年轻男子的，呃，缺乏，嗯，狂野的过去。」");
	say();
	UI_remove_answer("独角兽");
labelFunc04F4_012C:
	case "傻瓜" attend labelFunc04F4_014C:
	message("「Ophelia 不爱他！她只是派他去运行这个任务好摆脱他。我怀疑她是否指望他能找到独角兽，更别说回到她身边了。」");
	say();
	UI_remove_answer("傻瓜");
	UI_add_answer(["Ophelia", "摆脱"]);
labelFunc04F4_014C:
	case "Ophelia" attend labelFunc04F4_015F:
	message("「他在 Jhelom 遇见她。她当时在 Bunk and Stool 工作。显然那就是他所说的『一见钟情』。」");
	say();
	UI_remove_answer("Ophelia");
labelFunc04F4_015F:
	case "摆脱" attend labelFunc04F4_0179:
	message("「她要求的本质相当讽刺，因为我认为独角兽早就会避开她了。我想他不是她喜欢的类型，而且如果他真的了解她，她也不会是他喜欢的类型。但是，唉，正如俗话所说，爱情是盲目的。」");
	say();
	UI_add_answer("俗话");
	UI_remove_answer("摆脱");
labelFunc04F4_0179:
	case "俗话" attend labelFunc04F4_018C:
	message("「我不知道『俗话』是谁说的，但大家都是这么说的，不是吗？」");
	say();
	UI_remove_answer("俗话");
labelFunc04F4_018C:
	case "告辞" attend labelFunc04F4_0197:
	goto labelFunc04F4_019A;
labelFunc04F4_0197:
	goto labelFunc04F4_0056;
labelFunc04F4_019A:
	endconv;
	message("「下次见，");
	message(var0002);
	message("。」*");
	say();
labelFunc04F4_01A5:
	if (!(event == 0x0000)) goto labelFunc04F4_01B0;
	Func085B();
labelFunc04F4_01B0:
	return;
}


