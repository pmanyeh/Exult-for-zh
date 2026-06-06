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
	message("美麗的幽靈眼神呆滯地穿透你看向遠方。你所做的任何事\t 似乎都無法吸引她的注意。*");
	say();
	gflags[0x01A7] = false;
	abort;
labelFunc08D8_0027:
	if (!(!gflags[0x01A9])) goto labelFunc08D8_00B0;
	var0002 = Func08F7(0xFF73);
	if (!var0002) goto labelFunc08D8_0044;
	message("小盒子的音樂讓 Rowena 把頭轉向你的方向。她眨了幾次眼，彷彿剛從夢境中醒來，或者在此時此刻，是從惡夢中醒來。當她看到那隻 Liche 時，她假裝被迷住了，但只要他一移開視線，她就會示意你靠近。");
	say();
	goto labelFunc08D8_0048;
labelFunc08D8_0044:
	message("小盒子的音樂讓 Rowena 把頭轉向你的方向。她眨了幾次眼，彷彿剛從夢境中醒來，或者在此時此刻，是從惡夢中醒來。");
	say();
labelFunc08D8_0048:
	message("「我暫時還能控制自己的心智，但我不知道能維持多久。告訴我外面的鎮上發生了什麼事。」你向她轉述了你在鎮上聽到的種種事件。");
	say();
	if (!gflags[0x01C7]) goto labelFunc08D8_0059;
	message("「我可憐的 Trent。我真不忍心去想他受了多大的傷害，竟然會忘記我們的愛。」她悲傷地搓著雙手，並注意到了手上的某件東西。");
	say();
	goto labelFunc08D8_005D;
labelFunc08D8_0059:
	message("「那我可憐的 Trent 呢？他一定心碎了。我必須想辦法捎個消息給他。」她手上的某個東西閃爍著耀眼的光芒。");
	say();
labelFunc08D8_005D:
	message("「請你，");
	message(var0001);
	message("，能不能把這枚戒指帶給他，並告訴他我依然愛著他。也許這能讓他恢復成我所熟知的那位摯愛的 Trent。」");
	say();
	var0003 = UI_create_new_object(0x0127);
	if (!Func0907(UI_get_npc_object(0xFE9C))) goto labelFunc08D8_0085;
	message("她從纖細的手指上取下一枚戒指，放在你的手心裡。你原本以為它會直接穿過去，但它卻安穩地停留在你的掌心中。");
	say();
	goto labelFunc08D8_0097;
labelFunc08D8_0085:
	var0004 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("她從纖細的手指上取下一枚戒指，放在你的手心裡。你原本以為它會直接穿過去，而它也確實穿了過去。幸運的是，它掉到了地板上，撞擊在石頭上發出清脆的微弱響聲。");
	say();
labelFunc08D8_0097:
	if (!var0000) goto labelFunc08D8_00A4;
	message("\"「謝謝妳，善良的女士。我不知道該如何回報妳。」");
	say();
	goto labelFunc08D8_00A8;
labelFunc08D8_00A4:
	message("「謝謝你，善良的先生。我不知道該如何回報你。」");
	say();
labelFunc08D8_00A8:
	message(" Rowena 的雙眼開始變得有些呆滯，她緩慢地眨著眼，彷彿進入了深深的恍惚狀態。");
	say();
	gflags[0x01A9] = true;
labelFunc08D8_00B0:
	message("她緩慢地眨了眨眼。「多麼美麗的音樂。我的主上……Horance，曾經送過我一個像那樣的音樂盒。」Rowena 轉過身去，分了神。*");
	say();
	abort;
	return;
}