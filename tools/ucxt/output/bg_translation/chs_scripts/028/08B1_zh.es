#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0907 0x907 (var var0000);

void Func08B1 0x8B1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0908();
	message("「圣者，你再次证明了你始终是不列颠尼亚和无辜者的守护者。我无法充分表达我的感激之情；然而，请收下这份小小的谢礼。我希望它能在你的任务中帮助到你。」");
	say();
	var0001 = UI_create_new_object(0x0229);
	if (!var0001) goto labelFunc08B1_005B;
	var0002 = UI_set_item_quality(var0001, 0x0064);
	if (!Func0907(UI_get_npc_object(0xFE9C))) goto labelFunc08B1_0045;
	message("他把他的个人法杖交给你。它似乎具有魔力。");
	say();
	goto labelFunc08B1_0057;
labelFunc08B1_0045:
	var0003 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("他把他的个人法杖放在地上。它似乎具有魔力。~「我有东西要给你，圣者，但我看你现在拿不下了。我会把它放在这儿的地板上给你。」");
	say();
labelFunc08B1_0057:
	gflags[0x01AB] = true;
labelFunc08B1_005B:
	message("有一瞬间，Horance 看起来很沮丧。「我觉得这个城镇发生的事情，我也该负起一些责任。因为，在我探寻宇宙真理的过程中，我不经意地释放了那个摧毁这个城镇的邪灵。我将在余生中努力恢复这座曾经可爱的城镇。~~「我会让它成为灵性（Spirituality）的光辉典范，一个让善良之人能够和平和谐地生活的圣地。再次感谢你给了我这个机会。再见了，");
	message(var0000);
	message(".\"*");
	say();
	abort;
	return;
}


