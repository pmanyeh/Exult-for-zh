#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func048C object#(0x48C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc048C_02D6;
	UI_show_npc_face(0xFF74, 0x0000);
	if (!(!gflags[0x01B4])) goto labelFunc048C_001E;
	message("这名不死生物空洞的目光，望向了你。显然它察觉到了你的存在，但是你非常确定它并未看见你。*");
	say();
	abort;
labelFunc048C_001E:
	if (!gflags[0x01CA]) goto labelFunc048C_002D;
	var0000 = "Paulette";
	goto labelFunc048C_0033;
labelFunc048C_002D:
	var0000 = "酒馆女侍";
labelFunc048C_0033:
	var0001 = "这不能全怪他";
	var0002 = false;
	if (!gflags[0x0198]) goto labelFunc048C_004A;
	UI_add_answer("牺牲");
labelFunc048C_004A:
	var0003 = UI_part_of_day();
	var0004 = UI_get_schedule_type(0xFF74);
	if (!(!gflags[0x01AA])) goto labelFunc048C_0096;
	if (!((var0003 == 0x0000) || (var0003 == 0x0001))) goto labelFunc048C_0096;
	if (!(var0004 == 0x000E)) goto labelFunc048C_0086;
	message("你试着与那肥胖的鬼魂攀谈，但他似乎对你、以及周遭的一切都显得极为疏离。*");
	say();
	abort;
	goto labelFunc048C_0096;
labelFunc048C_0086:
	if (!(!(var0004 == 0x0010))) goto labelFunc048C_0096;
	message("这位发福的幽灵看起来有些不安，他说话有点含糊不清，「不好意思，大人。但我头痛得厉害。你介意我们晚点，再继续这个小小的谈话吗？」~~他开始用双手揉着太阳穴。*");
	say();
	abort;
labelFunc048C_0096:
	var0005 = Func08F7(0xFF70);
	if (!var0005) goto labelFunc048C_00C8;
	message("「喔，你好，Rowena 女士。很高兴再次见到妳。看到妳美丽的容颜，让我这老头子的心里照进了一缕阳光。」他微笑着说。*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("她优雅地屈膝行礼并报以微笑。~~「你好， Markham 。很高兴看到这些可怕的事情都无法阻止你对一位女士的赞美。」*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF74, 0x0000);
labelFunc048C_00C8:
	var0006 = Func08F7(0xFF6D);
	if (!var0006) goto labelFunc048C_00FE;
	message("「喔，呃，你好啊，镇长。我还以为你一直躲在镇政厅里呢。嗯，呃，很高兴再次见到你。」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「是的，嗯，也很高兴再次见到你。」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF74, 0x0000);
	gflags[0x01BD] = true;
labelFunc048C_00FE:
	if (!(!gflags[0x01C4])) goto labelFunc048C_0110;
	message("这名肥胖的不死酒保带着一个宽阔、可怕的笑容向你打招呼。「来吧，陌生人。坐在老 Markham 旁边，告诉我你的旅行见闻。我这里已经很少有访客了。」");
	say();
	gflags[0x01C4] = true;
	goto labelFunc048C_0114;
labelFunc048C_0110:
	message("Markham 向你打招呼，喝下了一大杯店里的烈酒。「欢迎，我的朋友。跟我坐一会儿，用你那奇妙的机智来点缀我永恒的时光吧。」他带着只有半腐烂的人才能拥有的迷人笑容微笑着。");
	say();
labelFunc048C_0114:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc048C_0124:
	converse attend labelFunc048C_02D5;
	case "姓名" attend labelFunc048C_018A:
	message("这位发福的僵尸用手背擦了擦嘴。「我是 Markham 。酒桶的 Markham 。」他拍了拍自己带着的一大桶酒。");
	say();
	var0007 = Func08F7(0xFF6F);
	if (!(var0007 && gflags[0x01B9])) goto labelFunc048C_0183;
	if (!var0002) goto labelFunc048C_0153;
	UI_remove_npc_face(0xFF6E);
labelFunc048C_0153:
	if (!(!gflags[0x01A4])) goto labelFunc048C_0183;
	UI_show_npc_face(0xFF6F, 0x0000);
	message("可爱的 ");
	message(var0000);
	message(" 走了过来，拍了拍 Markham 相当大的肚子。「是的，他就是酒桶的 Markham ，没错。」她对着这位老先生甜甜地微笑。*");
	say();
	UI_remove_npc_face(0xFF6F);
	UI_show_npc_face(0xFF74, 0x0000);
	message("「够了！」 Markham 拍了拍这位漂亮年轻女子的幽灵臀部。~~ 「做点有用的事，给我拿条鹿腿来。」她转身，咯咯地笑着。他用一种欢乐的表情看着你，「我真不知道该拿那女孩怎么办。」");
	say();
labelFunc048C_0183:
	UI_remove_answer("姓名");
labelFunc048C_018A:
	case "职业" attend labelFunc048C_01A3:
	message("「我负责经营有名的『魂灵烈酒桶酒馆』。」有那么一瞬间他变得严肃起来。「这个地方曾经吸引了来自不列颠尼亚各地的客人，石像鬼和人类都有。直到那场大火为止。」");
	say();
	UI_add_answer(["魂灵烈酒桶酒馆", "大火"]);
labelFunc048C_01A3:
	case "大火" attend labelFunc048C_0209:
	message("他看起来很不自在，「 Caine 把镇上炸得七零八落，现在我们都被困在这里，成了那个混蛋 Horance 的奴隶。」他呆滞的瞳孔中出现了微小的蓝色火焰，当他恢复镇定时又熄灭了。");
	say();
	UI_add_answer(["Caine", "Horance"]);
	var0008 = Func08F7(0xFF6E);
	if (!(var0008 && gflags[0x01BA])) goto labelFunc048C_01F8;
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「拜托， Markham 。对 Caine 有点同情心吧。当他犯下那个致命的错误时，他正试图创造一些东西来拯救这个镇。」这个苍白的幽灵看起来深受困扰。");
	say();
	UI_remove_npc_face(0xFF6E);
	UI_show_npc_face(0xFF74, 0x0000);
	var0002 = true;
	var0001 = "你说得对， Quen，";
labelFunc048C_01F8:
	message("「喔，我想");
	message(var0001);
	message("当他把传说中的地狱之火召唤到我们头上时，他其实是想帮我们。但年纪轻轻就死掉，真的让我感到很气愤。」他流氓般的微笑再次照亮了他那幽灵般的面孔。");
	say();
	UI_remove_answer("大火");
labelFunc048C_0209:
	case "Caine" attend labelFunc048C_0223:
	message("他那毁容的面孔上露出了厌恶的神情。「那个受折磨的人在他愚蠢错误造成的坑洞里游荡。不过我不会靠近他，他有点疯疯癫癫的，你知道的。」他从身边的酒桶里重新倒满了他的马克杯，并一口气喝下了大部分的酒。");
	say();
	UI_add_answer("受折磨的人");
	UI_remove_answer("Caine");
labelFunc048C_0223:
	case "受折磨的人" attend labelFunc048C_023D:
	message("「这只是我们其他在 Skara Brae 的人对他的称呼——受折磨的人。」他尴尬地笑了笑。");
	say();
	UI_remove_answer("受折磨的人");
	UI_add_answer("Skara Brae");
labelFunc048C_023D:
	case "Skara Brae" attend labelFunc048C_0250:
	message("「这就是你所在的岛屿的名字。」他摇了摇头。");
	say();
	UI_remove_answer("Skara Brae");
labelFunc048C_0250:
	case "Horance" attend labelFunc048C_028C:
	message("「我在 Skara Brae 的这些年里，他一直都是个疯子。伴随着他那些愚蠢的押韵诗和他疯狂的笑声。~~「有一天晚上，我们所有人都听到了雷声，尽管星空中连一朵云都没有，我似乎还记得有满月……」他的脸上露出深思的表情。「但我刚才说到，先是一阵雷声，然后从北面岬角的那座塔里传来低沉、黑暗的笑声—— Horance 的黑暗塔。」说完这段话后，他沉默了片刻。");
	say();
	if (!var0002) goto labelFunc048C_0281;
	UI_show_npc_face(0xFF6E, 0x0000);
	message("这个苍白的幽灵向前移动，并低声说道：「当这些事件发生时，我已经生活在死者的半世界里了，从那以后，我感觉到有一股奇怪的拉力从塔里传来。*」");
	say();
	UI_remove_npc_face(0xFF6E);
	UI_show_npc_face(0xFF74, 0x0000);
labelFunc048C_0281:
	message("稍微喝了一口后，他继续说：「然后，更糟的是……我出去查看母牛时，听到了一种类似呻吟的声音。声音从东边传来，所以我朝那边看，你知道的，那里是墓地，你猜我看到了什么？~~「我来告诉你我看到了什么。坟墓裂开了，就像里面的人有地方要去一样。」他睁大眼睛，又喝了一口酒。");
	say();
	UI_remove_answer("Horance");
labelFunc048C_028C:
	case "魂灵烈酒桶酒馆" attend labelFunc048C_029F:
	message("他看起来真的很伤心地说：「这个地方曾经是我的骄傲和喜悦。这酒桶在不列颠尼亚各地都很出名，甚至在其他一些地方也是。嗯，现在它看起来不怎么样了，但在它的全盛时期，它接待过贵族、骑士、吟游诗人和商人。当然，也少不了一些流氓地痞。」他对你眨了眨眼。他的精神似乎是不屈不挠的。");
	say();
	UI_remove_answer("魂灵烈酒桶酒馆");
labelFunc048C_029F:
	case "牺牲" attend labelFunc048C_02C5:
	if (!(!gflags[0x019A])) goto labelFunc048C_02B9;
	message("你叙述了进入灵魂之井需要一个牺牲者。听完后， Markham 似乎陷入了长时间的沉思。~~「所以，你是想让我像只三月兔一样发疯，直接跳进那个……灵魂之井？」他难以置信地看着你。~~「听着。自从我还是个小伙子以来，我就没有过那种勇气了。从那以后我也长了点脑子。你得去别处寻找你的牺牲者了。」");
	say();
	gflags[0x019A] = true;
	goto labelFunc048C_02BE;
labelFunc048C_02B9:
	message("「好了。我已经告诉过你了。我不感兴趣。」他对你的坚持看起来有点不高兴。*");
	say();
	abort;
labelFunc048C_02BE:
	UI_remove_answer("牺牲");
labelFunc048C_02C5:
	case "告辞" attend labelFunc048C_02D2:
	message("「喔，你这就要走了吗？那好吧，保重。小心那些行走的死者。他们中有些人对自己的状态不太满意，而且对于向谁抱怨也不太挑剔。」*");
	say();
	abort;
labelFunc048C_02D2:
	goto labelFunc048C_0124;
labelFunc048C_02D5:
	endconv;
labelFunc048C_02D6:
	if (!(event == 0x0000)) goto labelFunc048C_02DF;
	abort;
labelFunc048C_02DF:
	return;
}


