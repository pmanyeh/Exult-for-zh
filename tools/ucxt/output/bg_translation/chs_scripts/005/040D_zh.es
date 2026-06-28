#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func040D object#(0x40D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc040D_0009;
	abort;
labelFunc040D_0009:
	UI_show_npc_face(0xFFF3, 0x0000);
	var0000 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!gflags[0x003D]) goto labelFunc040D_003A;
	UI_add_answer("口令");
labelFunc040D_003A:
	if (!gflags[0x003F]) goto labelFunc040D_004D;
	UI_add_answer(["友谊会", "Klog"]);
labelFunc040D_004D:
	if (!((var0000 == 0x0007) || ((var0000 == 0x0000) || (var0000 == 0x0001)))) goto labelFunc040D_006E;
	UI_add_answer("船只");
labelFunc040D_006E:
	if (!gflags[0x0043]) goto labelFunc040D_007B;
	UI_add_answer("钩子");
labelFunc040D_007B:
	if (!(!gflags[0x004D])) goto labelFunc040D_009B;
	message("你看到一个脾气暴躁的家伙，头上绑着血迹斑斑的绷带。");
	say();
	gflags[0x004D] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFFF3), 0x0010);
	goto labelFunc040D_009F;
labelFunc040D_009B:
	message("「你还需要什么吗？」 Gilberto 问道。你注意到他的伤口愈合得很好。");
	say();
labelFunc040D_009F:
	converse attend labelFunc040D_0249;
	case "姓名" attend labelFunc040D_00B5:
	message("「我是 Gilberto。」");
	say();
	UI_remove_answer("姓名");
labelFunc040D_00B5:
	case "职业" attend labelFunc040D_00C1:
	message("「我负责码头大门的夜班守卫。」");
	say();
labelFunc040D_00C1:
	case "谋杀" attend labelFunc040D_00DB:
	message("「这肯定是在我被击昏前不久发生的。」");
	say();
	UI_add_answer("击昏");
	UI_remove_answer("谋杀");
labelFunc040D_00DB:
	case "击昏" attend labelFunc040D_00FB:
	message("「那大约是日出的时候。我正望向大海。突然间，我感觉后脑勺挨了一记重击。」~~ 他痛苦地皱了皱眉。");
	say();
	UI_add_answer(["重击", "痛苦"]);
	UI_remove_answer("击昏");
labelFunc040D_00FB:
	case "痛苦" attend labelFunc040D_010E:
	message("Gilberto 看起来还有点摇晃，但他的手势表示他不需要你的帮助。~「我的脑袋还在嗡嗡作响，但我马上就会好的。」");
	say();
	UI_remove_answer("痛苦");
labelFunc040D_010E:
	case "重击" attend labelFunc040D_012E:
	message("「接下来我知道的就是，我已经倒在地上了。负责下一班守卫的 Johnson 正在摇醒我。我大约昏迷了十分钟。我知道这点是因为太阳才刚探出地平线。而且『皇冠宝石号 (The Crown Jewel)』已经出航了！」");
	say();
	UI_add_answer(["Johnson", "皇冠宝石号 (The Crown Jewel)"]);
	UI_remove_answer("重击");
labelFunc040D_012E:
	case "皇冠宝石号 (The Crown Jewel)" attend labelFunc040D_0152:
	message("「我忘了说吗？那是一艘整晚停靠在这里的船。我相信它正准备驶往不列颠城。你可以去问造船匠 Gargan 以确认这件事。总之，我没看到袭击我的人...」 守卫抱怨道。");
	say();
	gflags[0x0040] = true;
	UI_add_answer(["袭击者", "Gargan"]);
	UI_remove_answer("皇冠宝石号 (The Crown Jewel)");
labelFunc040D_0152:
	case "袭击者" attend labelFunc040D_0165:
	message("「嗯。我怀疑他们是不是跳上了那艘船！他们现在可能已经一路到了不列颠城了！」");
	say();
	UI_remove_answer("袭击者");
labelFunc040D_0165:
	case "Gargan" attend labelFunc040D_0178:
	message("「他是个好人，但你可能不会想站得离他太近。你可能会被传染什么的。」");
	say();
	UI_remove_answer("Gargan");
labelFunc040D_0178:
	case "船只" attend labelFunc040D_0192:
	message("「如果你想要一艘船，你必须从造船匠那里得到地契。你还必须有离开城镇的口令。」");
	say();
	UI_remove_answer("船只");
	UI_add_answer("口令");
labelFunc040D_0192:
	case "口令" attend labelFunc040D_01EF:
	message("「是什么呢？」");
	say();
	var0001 = ["呃，我不知道...", "国王万岁...？", "拜托..."];
	if (!gflags[0x003D]) goto labelFunc040D_01BD;
	var0001 = (var0001 & "Blackbird");
labelFunc040D_01BD:
	var0002 = Func090B(var0001);
	if (!(var0002 == "Blackbird")) goto labelFunc040D_01EB;
	var0003 = Func0834();
	if (!var0003) goto labelFunc040D_01E3;
	message("「好吧。你可以通过。」");
	say();
	goto labelFunc040D_01E7;
labelFunc040D_01E3:
	message("「你不能通过。」");
	say();
labelFunc040D_01E7:
	abort;
	goto labelFunc040D_01EF;
labelFunc040D_01EB:
	message("「你不知道口令。镇长可以告诉你正确的口令。」");
	say();
labelFunc040D_01EF:
	case "Johnson" attend labelFunc040D_0202:
	message("「他负责码头的早班守卫。」");
	say();
	UI_remove_answer("Johnson");
labelFunc040D_0202:
	case "友谊会" attend labelFunc040D_0215:
	message("他耸耸肩。~~「你问错人了。我想他们应该没什么问题。我从来没和他们有过什么麻烦。」");
	say();
	UI_remove_answer("友谊会");
labelFunc040D_0215:
	case "钩子" attend labelFunc040D_0228:
	message("守卫想了一会儿。~~「不...我不能说我看到了一个带着钩子的男人。」");
	say();
	UI_remove_answer("钩子");
labelFunc040D_0228:
	case "Klog" attend labelFunc040D_023B:
	message("「我和他没有太多交集。」");
	say();
	UI_remove_answer("Klog");
labelFunc040D_023B:
	case "告辞" attend labelFunc040D_0246:
	goto labelFunc040D_0249;
labelFunc040D_0246:
	goto labelFunc040D_009F;
labelFunc040D_0249:
	endconv;
	message("「再见。小心背后。」");
	say();
	return;
}


