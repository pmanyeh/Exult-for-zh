#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();

void Func08C2 0x8C2 ()
{
	var var0000;
	var var0001;

	var0000 = Func0909();
	var0001 = Func0908();
	message("「哎呀，你好啊～Forsythe 市长。你终于决定要为我们小镇的救赎出一份力了。」她给了他一个尖锐的眼神。*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「听着，把那张愚蠢配方交给 Caine 的人又不是我，对吧？」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「那张愚蠢的配方刚刚才帮我们除掉了 Horance。」Mistress Mordra 咬牙切齿地说道。*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「哼。女士，妳也拖了太久。而现在我要去跳井了。」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「无知的蠢货！」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「老太婆！」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「你会后悔的，癞蛤蟆。」火焰在她眼底深处燃烧，电流在她发间劈啪作响。她擡起双臂，仿佛要施展某种可怕的法术，但 Forsythe 呜咽着躲到了你的身后。她看到你脸上的表情，缓缓放下了双臂。火焰与闪电闪烁了几下后便熄灭了。~~「请原谅我的失态，");
	message(var0000);
	message("。刚才提到井是怎么一回事？」你解释说 Forsythe 已经自愿为其他亡灵牺牲自己。她直视着他的眼睛。他拍了拍灰尘，挺直了身子。「我以前真没想到你有这种能耐，市长。我欠你一份情。」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「是啊，嗯。我想，不客气。」他看起来仿佛稍微找回了一些尊严。*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「那么我想你最好快点启程。保重了，Forsythe。漫游在以太之中也没那么糟糕。至少等你习惯了之后是如此。」~~她转向你。「再见，");
	message(var0001);
	message("。如果你成功了，我们就不会再见面了。祝你好运。*」");
	say();
	abort;
	return;
}