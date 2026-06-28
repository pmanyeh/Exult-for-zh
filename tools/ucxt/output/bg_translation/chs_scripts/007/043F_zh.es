#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func043F object#(0x43F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc043F_019A;
	UI_show_npc_face(0xFFC1, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	if (!(var0002 == 0x0007)) goto labelFunc043F_005F;
	var0003 = Func08FC(0xFFC1, 0xFFE6);
	if (!var0003) goto labelFunc043F_004A;
	message("Millie 无视你想引起她注意的举动，并回去全神贯注地观看友谊会仪式。*");
	say();
	abort;
	goto labelFunc043F_005F;
labelFunc043F_004A:
	if (!gflags[0x00DA]) goto labelFunc043F_005A;
	message("Millie 看起来有些不安。「巴特林以前从未错过任何一次集会。他想怎样？难道他想要『我』来主持这场集会吗？」");
	say();
	goto labelFunc043F_005F;
	goto labelFunc043F_005F;
labelFunc043F_005A:
	message("「抱歉，我现在不能和你说话！我参加友谊会集会要迟到了！」*");
	say();
	abort;
labelFunc043F_005F:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0141]) goto labelFunc043F_007C;
	UI_add_answer("Thad");
labelFunc043F_007C:
	if (!(!gflags[0x00C0])) goto labelFunc043F_008E;
	message("你看见一位长相可爱的女人，当她注意到你在看她时，她绽放出了灿烂的笑容。");
	say();
	gflags[0x00C0] = true;
	goto labelFunc043F_0092;
labelFunc043F_008E:
	message("「很高兴能再次与你交谈，」 Millie 说。");
	say();
labelFunc043F_0092:
	converse attend labelFunc043F_0195;
	case "姓名" attend labelFunc043F_00A8:
	message("「我的名字是 Millie，」她腼腆地咯咯笑着。");
	say();
	UI_remove_answer("姓名");
labelFunc043F_00A8:
	case "职业" attend labelFunc043F_00C1:
	message("「我想我没有工作，但这真的很糟吗？我是友谊会的成员，我整天都在跟别人谈论他们。」");
	say();
	UI_add_answer(["友谊会", "谈谈"]);
labelFunc043F_00C1:
	case "友谊会" attend labelFunc043F_010F:
	if (!var0001) goto labelFunc043F_00D6;
	message("「看来我们有同样的工作！」她为自己开的玩笑笑了起来。「你也把所有的时间都花在跟别人谈论友谊会吗？如果你真的是做这行的，那你得给自己找另外一个角落去！」 Millie 不悦地皱起眉头。");
	say();
	goto labelFunc043F_010F;
labelFunc043F_00D6:
	message("「你知道友谊会是什么吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc043F_00FE;
	message("「喔，我想你其实并不知道！」");
	say();
	Func0919();
	UI_remove_answer("友谊会");
	UI_add_answer("理念");
	goto labelFunc043F_010F;
labelFunc043F_00FE:
	Func0919();
	UI_remove_answer("友谊会");
	UI_add_answer("理念");
labelFunc043F_010F:
	case "理念" attend labelFunc043F_0125:
	Func091A();
	message("「如果你愿意的话，你可以参加今晚在友谊会堂的集会。九点准时开始。只要告诉他们你是我的客人就行了。希望我能在那里见到你。」 Millie 咯咯笑着，害羞地别过头去。");
	say();
	UI_remove_answer("理念");
labelFunc043F_0125:
	case "谈谈" attend labelFunc043F_013F:
	message("「我把所有的时间都花在试图招募，呃……传播友谊会的福音上。这比拥有一份工作好多了！我是在冥想营学会怎么做这些的。」");
	say();
	UI_remove_answer("谈谈");
	UI_add_answer("冥想营");
labelFunc043F_013F:
	case "冥想营" attend labelFunc043F_015D:
	message("「它位于南不列颠尼亚靠近巨蛇据点（Serpent's Hold）的一座岛上。大多数新加入的友谊会成员都会花些时间在那里学习这个团体的教义。在营队里还可以学习如何聆听『那声音』。」");
	say();
	UI_add_answer("那声音");
	UI_remove_answer("冥想营");
	gflags[0x008B] = true;
labelFunc043F_015D:
	case "那声音" attend labelFunc043F_0174:
	message("「友谊会成员有一种会对他们说话的内在声音。我还没听见过，但我正在努力。为了达到这点，我可能需要再去冥想营待个几天。不过，巴特林告诉我不要灰心。他说当我证明了自己的价值时，我就会听见它了。」");
	say();
	UI_remove_answer("那声音");
	gflags[0x008A] = true;
labelFunc043F_0174:
	case "Thad" attend labelFunc043F_0187:
	message("Millie 翻了个白眼。「你见过我哥哥了？真可怜！要我说，他真的该被送进疯人院！他认为是友谊会绑架了我，并用魔法迷惑我追随他们。听着，我是出于自由意志加入的，连想都没想，而且这纯粹是件好玩的事！没有人强迫我！去他的 Thad ！妈妈总是说他是家里最冲动的人！」");
	say();
	UI_remove_answer("Thad");
labelFunc043F_0187:
	case "告辞" attend labelFunc043F_0192:
	goto labelFunc043F_0195;
labelFunc043F_0192:
	goto labelFunc043F_0092;
labelFunc043F_0195:
	endconv;
	message("「我们晚点见！也许在今晚的友谊会集会上见！」*");
	say();
labelFunc043F_019A:
	if (!(event == 0x0000)) goto labelFunc043F_0221;
	var0002 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFC1));
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x000C)) goto labelFunc043F_021B;
	if (!(var0006 == 0x0001)) goto labelFunc043F_01DE;
	var0007 = "@今晚在友谊会集会上见！@";
labelFunc043F_01DE:
	if (!(var0006 == 0x0002)) goto labelFunc043F_01EE;
	var0007 = "@追求团结！@";
labelFunc043F_01EE:
	if (!(var0006 == 0x0003)) goto labelFunc043F_01FE;
	var0007 = "@信任你的兄弟！@";
labelFunc043F_01FE:
	if (!(var0006 == 0x0004)) goto labelFunc043F_020E;
	var0007 = "@有价值才有回报！@";
labelFunc043F_020E:
	UI_item_say(0xFFC1, var0007);
	goto labelFunc043F_0221;
labelFunc043F_021B:
	Func092E(0xFFC1);
labelFunc043F_0221:
	return;
}


