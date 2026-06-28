#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04F0 object#(0x4F0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04F0_02F7;
	UI_show_npc_face(0xFF10, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF24);
	var0002 = Func08F7(0xFF66);
	var0003 = false;
	var0004 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02E1]) goto labelFunc04F0_0056;
	message("「我感谢你，");
	message(var0000);
	message("。你真是有着崇高的荣誉感！我希望有一天能报答你的恩情！」*");
	say();
	abort;
	goto labelFunc04F0_006A;
labelFunc04F0_0056:
	var0005 = UI_get_npc_object(0xFF10);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc04F0_006A:
	if (!(!gflags[0x02C3])) goto labelFunc04F0_007C;
	message("一个表情阴沉的男人向你打招呼。");
	say();
	gflags[0x02C3] = true;
	goto labelFunc04F0_0080;
labelFunc04F0_007C:
	message("「哼，」Anton 说。");
	say();
labelFunc04F0_0080:
	converse attend labelFunc04F0_02EC;
	case "姓名" attend labelFunc04F0_00D2:
	message("「我，」他抓着鼻子说，「是 Anton，虽然你不会关心我。除非，当然了，你正要把我关进颈手枷。」");
	say();
	if (!var0001) goto labelFunc04F0_00BE;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「放尊重点，Anton。我相信 ");
	message(var0000);
	message(" 是真的对你的名字感兴趣。」");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_00BE:
	UI_remove_answer("姓名");
	UI_add_answer(["关心", "颈手枷"]);
labelFunc04F0_00D2:
	case "职业" attend labelFunc04F0_01C3:
	message("「那是什么该死的愚蠢问题？我在监狱里！我能有什么该死的工作？」");
	say();
	if (!var0002) goto labelFunc04F0_00FD;
	message("*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("「是啊，愚蠢的问题。」");
	say();
	UI_remove_npc_face(0xFF66);
labelFunc04F0_00FD:
	if (!var0001) goto labelFunc04F0_01B9;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「放轻松，Anton。我相信你很快又会有工作的。」他转向你。~~「他拜在贤者 Alagner 门下为徒，贤者吩咐他查明关于友谊会的情报……」");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「安静，蠢货！现在他们肯定会杀了我！」他绝望地看着你。*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「你已经忘了吗，亲爱的 Anton？你早些时候就已经把情报泄露给他们了。」*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「我有吗？」*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("他点点头。*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	UI_remove_npc_face(0xFF24);
	if (!var0002) goto labelFunc04F0_0187;
	message("Anton 转向食人妖。~~「我有吗？」*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("食人妖点点头。*");
	say();
	UI_remove_npc_face(0xFF66);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_0187:
	message("「喔，好吧。继续！」*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「就像我刚才说的，他的导师派他来观察友谊会。当然，他被发现并被带到这里受刑。」他转回 Anton。~~「不过别怕，Anton。不用多久你就会重获自由，能够回到你的导师 Alagner 身边，继续你的学业，」他微笑着说。*");
	say();
	UI_remove_npc_face(0xFF24);
	var0004 = true;
	UI_add_answer("Alagner");
	if (!(!var0003)) goto labelFunc04F0_01B9;
	UI_add_answer("友谊会");
labelFunc04F0_01B9:
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_01C3:
	case "颈手枷" attend labelFunc04F0_0206:
	if (!var0004) goto labelFunc04F0_01E5;
	message("「是的，下次他们很可能会把我关在里面直到我烂掉。或者，至少直到我被食人妖鞭打致死。」");
	say();
	UI_add_answer(["他们", "鞭打"]);
	goto labelFunc04F0_01FF;
labelFunc04F0_01E5:
	message("「我因为被控从事间谍活动而被关在这里，");
	message(var0000);
	message("。这是个错误的指控，但他们很可能还是会杀了我……」");
	say();
	UI_add_answer(["间谍活动", "错误", "他们"]);
labelFunc04F0_01FF:
	UI_remove_answer("颈手枷");
labelFunc04F0_0206:
	case "关心" attend labelFunc04F0_0219:
	message("「嗯，真的很少人会这样。」");
	say();
	UI_remove_answer("关心");
labelFunc04F0_0219:
	case "错误" attend labelFunc04F0_022C:
	message("「嗯，我绝对没有犯下这样的罪行！」");
	say();
	UI_remove_answer("错误");
labelFunc04F0_022C:
	case "间谍活动" attend labelFunc04F0_023F:
	message("「想到我会为了除了用知识充实自己以外的任何理由去寻找情报，这简直荒谬至极！这……这……这根本就是荒唐！」");
	say();
	UI_remove_answer("间谍活动");
labelFunc04F0_023F:
	case "他们" attend labelFunc04F0_0266:
	message("「哎呀，就是友谊会，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("他们");
	if (!(!var0003)) goto labelFunc04F0_0266;
	UI_add_answer("友谊会");
labelFunc04F0_0266:
	case "鞭打" attend labelFunc04F0_02A2:
	message("「食人妖每天都要打我好几次。我撑不了多久了。」");
	say();
	if (!var0001) goto labelFunc04F0_029B;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「来吧，来吧，Anton，肯定没那么糟。毕竟，友谊会为我们提供了一个住处，还有比我们能……更多的食物……呃，他们还给我们食物！」*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_029B:
	UI_remove_answer("鞭打");
labelFunc04F0_02A2:
	case "Alagner" attend labelFunc04F0_02B5:
	message("「他是一位居住在 New Magincia 的贤者。或许是全不列颠尼亚最博学的人！而现在，」他叹了口气，「我将不再有机会从他浩瀚的智能宝库中汲取知识了。」");
	say();
	UI_remove_answer("Alagner");
labelFunc04F0_02B5:
	case "友谊会" attend labelFunc04F0_02DE:
	message("「哎呀，他们是一群很棒的人，不断致力于为不列颠尼亚的人民带来健康、幸福和灵性。」");
	say();
	var0006 = UI_wearing_fellowship();
	if (!(!var0006)) goto labelFunc04F0_02D3;
	message("他用食指示意你靠近，并压低了声音。~~「才怪！我一有机会就会离开这个邪恶的巢穴。我建议你也这么做！」");
	say();
labelFunc04F0_02D3:
	var0003 = true;
	UI_remove_answer("友谊会");
labelFunc04F0_02DE:
	case "告辞" attend labelFunc04F0_02E9:
	goto labelFunc04F0_02EC;
labelFunc04F0_02E9:
	goto labelFunc04F0_0080;
labelFunc04F0_02EC:
	endconv;
	message("「别太匆忙，");
	message(var0000);
	message("，因为我们所知的世界很快就会不复存在了。」*");
	say();
labelFunc04F0_02F7:
	if (!(event == 0x0000)) goto labelFunc04F0_0300;
	abort;
labelFunc04F0_0300:
	return;
}


