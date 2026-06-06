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
	message("「哎呀，你好啊～Forsythe 市長。你終於決定要為我們小鎮的救贖出一份力了。」她給了他一個尖銳的眼神。*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「聽著，把那張愚蠢配方交給 Caine 的人又不是我，對吧？」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「那張愚蠢的配方剛剛才幫我們除掉了 Horance。」Mistress Mordra 咬牙切齒地說道。*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「哼。女士，妳也拖了太久。而現在我要去跳井了。」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「無知的蠢貨！」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「老太婆！」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「你會後悔的，癩蛤蟆。」火焰在她眼底深處燃燒，電流在她髮間劈啪作響。她抬起雙臂，彷彿要施展某種可怕的法術，但 Forsythe 嗚咽著躲到了你的身後。她看到你臉上的表情，緩緩放下了雙臂。火焰與閃電閃爍了幾下後便熄滅了。~~「請原諒我的失態，");
	message(var0000);
	message("。剛才提到井是怎麼一回事？」你解釋說 Forsythe 已經自願為其他亡靈犧牲自己。她直視著他的眼睛。他拍了拍灰塵，挺直了身子。「我以前真沒想到你有這種能耐，市長。我欠你一份情。」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「是啊，嗯。我想，不客氣。」他看起來彷彿稍微找回了一些尊嚴。*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("「那麼我想你最好快點啟程。保重了，Forsythe。漫遊在以太之中也沒那麼糟糕。至少等你習慣了之後是如此。」~~她轉向你。「再見，");
	message(var0001);
	message("。如果你成功了，我們就不會再見面了。祝你好運。*」");
	say();
	abort;
	return;
}