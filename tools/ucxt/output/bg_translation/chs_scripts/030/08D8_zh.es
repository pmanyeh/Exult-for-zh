#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0907 0x907 (var var0000);

void Func08D8 0x8D8 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_is_pc_female();
	var0001 = Func0909();
	if (!(!gflags[0x01B8])) goto labelFunc08D8_0027;
	UI_show_npc_face(0xFF70, 0x0000);
	message("美丽的幽灵眼神呆滞地穿透你看向远方。你所做的任何事\t 似乎都无法吸引她的注意。*");
	say();
	gflags[0x01A7] = false;
	abort;
labelFunc08D8_0027:
	if (!(!gflags[0x01A9])) goto labelFunc08D8_00B0;
	var0002 = Func08F7(0xFF73);
	if (!var0002) goto labelFunc08D8_0044;
	message("小盒子的音乐让 Rowena 把头转向你的方向。她眨了几次眼，仿佛刚从梦境中醒来，或者在此时此刻，是从恶梦中醒来。当她看到那只 Liche 时，她假装被迷住了，但只要他一移开视线，她就会示意你靠近。");
	say();
	goto labelFunc08D8_0048;
labelFunc08D8_0044:
	message("小盒子的音乐让 Rowena 把头转向你的方向。她眨了几次眼，仿佛刚从梦境中醒来，或者在此时此刻，是从恶梦中醒来。");
	say();
labelFunc08D8_0048:
	message("「我暂时还能控制自己的心智，但我不知道能维持多久。告诉我外面的镇上发生了什么事。」你向她转述了你在镇上听到的种种事件。");
	say();
	if (!gflags[0x01C7]) goto labelFunc08D8_0059;
	message("「我可怜的 Trent。我真不忍心去想他受了多大的伤害，竟然会忘记我们的爱。」她悲伤地搓着双手，并注意到了手上的某件东西。");
	say();
	goto labelFunc08D8_005D;
labelFunc08D8_0059:
	message("「那我可怜的 Trent 呢？他一定心碎了。我必须想办法捎个消息给他。」她手上的某个东西闪烁着耀眼的光芒。");
	say();
labelFunc08D8_005D:
	message("「请你，");
	message(var0001);
	message("，能不能把这枚戒指带给他，并告诉他我依然爱着他。也许这能让他恢复成我所熟知的那位挚爱的 Trent。」");
	say();
	var0003 = UI_create_new_object(0x0127);
	if (!Func0907(UI_get_npc_object(0xFE9C))) goto labelFunc08D8_0085;
	message("她从纤细的手指上取下一枚戒指，放在你的手心里。你原本以为它会直接穿过去，但它却安稳地停留在你的掌心中。");
	say();
	goto labelFunc08D8_0097;
labelFunc08D8_0085:
	var0004 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("她从纤细的手指上取下一枚戒指，放在你的手心里。你原本以为它会直接穿过去，而它也确实穿了过去。幸运的是，它掉到了地板上，撞击在石头上发出清脆的微弱响声。");
	say();
labelFunc08D8_0097:
	if (!var0000) goto labelFunc08D8_00A4;
	message("\"「謝謝妳，善良的女士。我不知道該如何回報妳。」");
	say();
	goto labelFunc08D8_00A8;
labelFunc08D8_00A4:
	message("「谢谢你，善良的先生。我不知道该如何回报你。」");
	say();
labelFunc08D8_00A8:
	message(" Rowena 的双眼开始变得有些呆滞，她缓慢地眨着眼，仿佛进入了深深的恍惚状态。");
	say();
	gflags[0x01A9] = true;
labelFunc08D8_00B0:
	message("她缓慢地眨了眨眼。「多么美丽的音乐。我的主上……Horance，曾经送过我一个像那样的音乐盒。」Rowena 转过身去，分了神。*");
	say();
	abort;
	return;
}