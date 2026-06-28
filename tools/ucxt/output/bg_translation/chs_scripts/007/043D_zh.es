#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08B8 0x8B8 ();
extern void Func092E 0x92E (var var0000);

void Func043D object#(0x43D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc043D_02E9;
	UI_show_npc_face(0xFFC3, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0093]) goto labelFunc043D_0035;
	UI_add_answer("证据");
labelFunc043D_0035:
	if (!gflags[0x00CF]) goto labelFunc043D_0042;
	UI_add_answer("捡鸡蛋");
labelFunc043D_0042:
	if (!(!gflags[0x00BE])) goto labelFunc043D_0054;
	message("你看见一位农夫，狂野的双眼因为兴奋而睁得大大的。");
	say();
	gflags[0x00BE] = true;
	goto labelFunc043D_0058;
labelFunc043D_0054:
	message("「圣者！你回来了！」 Mack 惊呼。");
	say();
labelFunc043D_0058:
	converse attend labelFunc043D_02E4;
	case "姓名" attend labelFunc043D_006E:
	message("「我是 Mack 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043D_006E:
	case "职业" attend labelFunc043D_0087:
	message("「我是个农夫，虽然大部分的人都叫我疯子。」");
	say();
	UI_add_answer(["农夫", "疯子"]);
labelFunc043D_0087:
	case "农夫" attend labelFunc043D_00A1:
	message("「在我的农场里，我养鸡和种蔬菜。如果你需要工作，跟我说！」");
	say();
	UI_remove_answer("农夫");
	UI_add_answer("职业");
labelFunc043D_00A1:
	case "疯子" attend labelFunc043D_00C4:
	message("「你也这么认为，是吧？但我告诉你我说的都是真的！有来自星星上另一个地方的生物来拜访我们！我亲眼见过！」");
	say();
	UI_remove_answer("疯子");
	UI_add_answer(["生物", "另一个地方", "亲眼见过"]);
labelFunc043D_00C4:
	case "生物" attend labelFunc043D_00D7:
	message("「他们是又大又凶又丑的狮虎兽！还是虎狮兽？他们非常凶猛，而且想吃我们！」");
	say();
	UI_remove_answer("生物");
labelFunc043D_00D7:
	case "另一个地方" attend labelFunc043D_00EA:
	message("「我只能说，这个世界上绝对没有这种生物！他们的船也不像在不列颠尼亚任何地方见过的任何船只。」");
	say();
	UI_remove_answer("另一个地方");
labelFunc043D_00EA:
	case "亲眼见过" attend labelFunc043D_0104:
	message("「我亲眼见过一只星际生物，以及让它能旅行到不列颠尼亚的莫名交通工具！我向你发誓！我完全理智！我有证据！」");
	say();
	UI_remove_answer("亲眼见过");
	UI_add_answer("证据");
labelFunc043D_0104:
	case "证据" attend labelFunc043D_0150:
	if (!(!gflags[0x0093])) goto labelFunc043D_011F;
	message("「去我农场后面的田野中央看看。你自己去看看，你就会看到我的证据。」");
	say();
	gflags[0x0093] = true;
	abort;
	goto labelFunc043D_0150;
labelFunc043D_011F:
	message("「我就告诉过你我不是疯子！你看到证据了吗？」");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc043D_013E;
	message("「你必须去看看我田里有什么！然后回来这里，因为我必须跟知道我不是疯子的人谈谈这件事！」");
	say();
	UI_remove_answer("证据");
	goto labelFunc043D_0150;
labelFunc043D_013E:
	message("「我是不是告诉过你我不是疯子？不过，我如何偶然发现这东西的故事，简直令人难以置信。」");
	say();
	UI_remove_answer("证据");
	UI_add_answer("故事");
labelFunc043D_0150:
	case "故事" attend labelFunc043D_0185:
	if (!(!gflags[0x0095])) goto labelFunc043D_017A;
	message("「我喜欢熬夜。有时候我会看到明亮的光芒划过天空。没有其他人会去注意它们。但有一天晚上，我看到这道明亮的光芒坠落下来，降落在我的田里。」");
	say();
	UI_remove_answer("故事");
	UI_add_answer(["明亮光芒", "降落"]);
	goto labelFunc043D_0185;
labelFunc043D_017A:
	message("「我每天晚上都在寻找那些东西的另一个迹象，但自从我上次告诉你的那次之后，我就再也没见过了。」");
	say();
	UI_remove_answer("故事");
labelFunc043D_0185:
	case "明亮光芒" attend labelFunc043D_0198:
	message("「我总是观察夜空中移动的明亮光芒。这也是镇上的人说我是疯子的部分原因。但我所做的，跟他们在太阳系仪馆里做的事情有什么不同吗？」");
	say();
	UI_remove_answer("明亮光芒");
labelFunc043D_0198:
	case "降落" attend labelFunc043D_01B8:
	message("「在爆炸和坠毁之后，我跑到了我的田里。在那里我看到了你所见过的那台奇怪的机器，只是它正发出炽热的光芒。我吓坏了。但接着机器的顶部开始打开。」");
	say();
	UI_remove_answer("降落");
	UI_add_answer(["机器", "打开"]);
labelFunc043D_01B8:
	case "机器" attend labelFunc043D_01CB:
	message("「它长得像鸟，但它不是鸟！」");
	say();
	UI_remove_answer("机器");
labelFunc043D_01CB:
	case "打开" attend labelFunc043D_01EB:
	message("「当我看到那艘奇怪的船打开时，我吓得无法动弹。从顶部出来的是一只凶恶的虎狮兽。它的眼中充满了野蛮的饥饿感。」");
	say();
	UI_remove_answer("打开");
	UI_add_answer(["虎狮兽", "饥饿"]);
labelFunc043D_01EB:
	case "饥饿" attend labelFunc043D_01FE:
	message("「换句话说，它看起来好像会把我吃掉！」");
	say();
	UI_remove_answer("饥饿");
labelFunc043D_01FE:
	case "虎狮兽" attend labelFunc043D_0218:
	message("「它像掠食者追捕猎物一样扑向我。它太快了，我甚至无法移动。我以为我死定了。它一秒钟就冲到了我面前。它看着我的眼睛，然后它就死了。」");
	say();
	UI_remove_answer("虎狮兽");
	UI_add_answer("死了");
labelFunc043D_0218:
	case "死了" attend labelFunc043D_0238:
	message("「它和我没注意的是，我手里正拿着我的锄头。它曾经被一个路过的法师意外地施了魔法，而且在田里使用起来效果奇佳。我什么事都用它！那只虎狮兽自己撞穿在它上面。当它死的时候，那东西说话了。」");
	say();
	UI_remove_answer("死了");
	UI_add_answer(["说话", "锄头"]);
labelFunc043D_0238:
	case "说话" attend labelFunc043D_0252:
	message("「它说了两个字。『杀了 Wrathy。』我不知道这个 Wrathy 是谁，也不知道为什么虎狮兽要我杀了他。但我知道现在每当我看到夜空中移动的光芒时，我就会感到很担心。」");
	say();
	UI_remove_answer("说话");
	UI_add_answer("杀了 Wrathy");
labelFunc043D_0252:
	case "锄头" attend labelFunc043D_026C:
	message("「我相信你一定知道那场折磨了世界上所有法师的疯狂瘟疫。几年前，我把我弄坏的锄头带给一个叫 Mumb 的法师。修东西是他唯一还擅长的事。那时还有个战士想要 Mumb 附魔他的剑，把它变成『死亡之剑』。看来可怜的 Mumb 搞混了，那个战士回来杀了他，因为那个人最后拿到了一把只能用来除草的剑。我一直搞不清楚到底发生了什么事。看来老 Mumb 把我的锄头变成了毁灭之锄！不幸的是，这把锄头不见了。」");
	say();
	UI_remove_answer("锄头");
	UI_add_answer("不见了");
labelFunc043D_026C:
	case "不见了" attend labelFunc043D_027F:
	message("「嗯，也不是真的不见了。它被锁在我的棚子里。不见的是棚子的钥匙！我想我可能在 Lock Lake 岸边钓鱼时不小心把它当成鱼钩用了。所以现在我进不去我的棚子了。人家还真会以为我是个疯子呢！」");
	say();
	UI_remove_answer("不见了");
labelFunc043D_027F:
	case "杀了 Wrathy" attend labelFunc043D_0296:
	message("「我相当肯定是那样，或类似的话。不管怎样，那只虎狮兽本身尝起来相当美味。」");
	say();
	gflags[0x0095] = true;
	UI_remove_answer("杀了 Wrathy");
labelFunc043D_0296:
	case "职业" attend labelFunc043D_02C4:
	message("「我需要有人来帮我工作，帮忙收集鸡下的所有蛋！当那个巨大的东西坠毁时，牠们都吓坏了，所以牠们停不下来一直下蛋！你愿意为我工作吗？每颗鸡蛋我付你 1 枚金币。」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc043D_02B9;
	message("「很好！你会在后面找到那些鸡。你必须在鸡窝里摸索才能找到那里的鸡蛋。当然，牠们一天能产的数量是有限的。」");
	say();
	gflags[0x00CF] = true;
	goto labelFunc043D_02BD;
labelFunc043D_02B9:
	message("「如果你改变主意再问我吧。」");
	say();
labelFunc043D_02BD:
	UI_remove_answer("职业");
labelFunc043D_02C4:
	case "捡鸡蛋" attend labelFunc043D_02D6:
	Func08B8();
	UI_remove_answer("捡鸡蛋");
labelFunc043D_02D6:
	case "告辞" attend labelFunc043D_02E1:
	goto labelFunc043D_02E4;
labelFunc043D_02E1:
	goto labelFunc043D_0058;
labelFunc043D_02E4:
	endconv;
	message("「感谢你的体面与体贴。」");
	say();
labelFunc043D_02E9:
	if (!(event == 0x0000)) goto labelFunc043D_02F7;
	Func092E(0xFFC3);
labelFunc043D_02F7:
	return;
}


