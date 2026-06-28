#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0854 0x854 ();
extern void Func092E 0x92E (var var0000);

void Func0443 object#(0x443) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0443_0147;
	UI_show_npc_face(0xFFBD, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0072] == true)) goto labelFunc0443_0031;
	UI_add_answer("羊肉");
labelFunc0443_0031:
	if (!(!gflags[0x00C4])) goto labelFunc0443_0043;
	message("这是一位老奶奶，简直就是『慈祥祖母』的缩影。");
	say();
	gflags[0x00C4] = true;
	goto labelFunc0443_0047;
labelFunc0443_0043:
	message("「又见面了！」 Boots 说。");
	say();
labelFunc0443_0047:
	converse attend labelFunc0443_0142;
	case "姓名" attend labelFunc0443_005D:
	message("「当我还是个小婴儿的时候，我所有的兄弟姊妹都叫我『Boots』，从那以后这就成了我的名字。」");
	say();
	UI_remove_answer("姓名");
labelFunc0443_005D:
	case "职业" attend labelFunc0443_0070:
	message("「哎呀，我是不列颠王的私人厨师！我负责准备整个城堡的餐点。」");
	say();
	UI_add_answer("餐点");
labelFunc0443_0070:
	case "餐点" attend labelFunc0443_0093:
	message("「只要在早餐或晚餐时间去餐厅，我丈夫 Bennie 就会为你服务！」");
	say();
	UI_add_answer(["早餐", "晚餐", "Bennie"]);
	UI_remove_answer("餐点");
labelFunc0443_0093:
	case "早餐" attend labelFunc0443_00A6:
	message("「早餐我通常会准备一道陛下从他家乡带来的美食。在这里我们称之为『不列颠蛋 (Eggs British)』。当然，它会搭配什锦水果和茶。这是国王的最爱。」");
	say();
	UI_remove_answer("早餐");
labelFunc0443_00A6:
	case "晚餐" attend labelFunc0443_00B9:
	message("「这顿饭通常是不列颠王要求的任何肉类、野味或鱼，并伴随几道配菜和一份精美的甜点。」");
	say();
	UI_remove_answer("晚餐");
labelFunc0443_00B9:
	case "Bennie" attend labelFunc0443_00DD:
	message("「他是个亲爱的，但他晚年变得有点健忘。他总是不记得从 Paws 的屠宰场带足够的肉回来。事实上，我们这周缺货了！」");
	say();
	UI_add_answer(["健忘", "缺货"]);
	UI_remove_answer("Bennie");
	gflags[0x0071] = true;
labelFunc0443_00DD:
	case "健忘" attend labelFunc0443_00F0:
	message("「上周我叫他在汤里放一点大蒜。他放了大蒜，然后就忘了这回事。所以他又去放了一些。然后他又忘了自己放过。所以他又放了更多。嗯，你可以想像不列颠王最后尝到那碗汤时脸上的表情！幸好我们是在如此公正的统治者的城堡里生活和工作。」");
	say();
	UI_remove_answer("健忘");
labelFunc0443_00F0:
	case "缺货" attend labelFunc0443_011E:
	message("「没错，我们的肉不够。如果你能从屠宰场带羊肉给我，你每带一份我就付你 5 枚金币。好吗？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0443_0113;
	message("「太好了，我会等着你回来！」");
	say();
	gflags[0x0072] = true;
	goto labelFunc0443_0117;
labelFunc0443_0113:
	message("「喔，亲爱的。嗯，我知道你很忙。那就下次吧。」");
	say();
labelFunc0443_0117:
	UI_remove_answer("缺货");
labelFunc0443_011E:
	case "羊肉" attend labelFunc0443_0134:
	message("「太棒了！让我想想，如果我没记错的话，我们说好每份 5 枚金币。」");
	say();
	Func0854();
	UI_remove_answer("羊肉");
labelFunc0443_0134:
	case "告辞" attend labelFunc0443_013F:
	goto labelFunc0443_0142;
labelFunc0443_013F:
	goto labelFunc0443_0047;
labelFunc0443_0142:
	endconv;
	message("「再见啰！」*");
	say();
labelFunc0443_0147:
	if (!(event == 0x0000)) goto labelFunc0443_0155;
	Func092E(0xFFBD);
labelFunc0443_0155:
	return;
}


