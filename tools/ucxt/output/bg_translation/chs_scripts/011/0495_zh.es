#game "blackgate"
void Func0495 object#(0x495) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0000)) goto labelFunc0495_0009;
	abort;
labelFunc0495_0009:
	UI_show_npc_face(0xFEE8, 0x0000);
	var0000 = 0x0000;
	var0001 = UI_get_party_list();
	var0002 = 0x0000;
	enum();
labelFunc0495_0027:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0495_003F;
	var0002 = (var0002 + 0x0001);
	goto labelFunc0495_0027;
labelFunc0495_003F:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02C7])) goto labelFunc0495_00B8;
	message("你看到一只三头水怪 (hydra) 。左边的头说话了。~~「醒醒，这里有东西。」");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("右边的头擡起头看着你。~~「不知道好不好吃。」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("中间的头惊醒，看到你，变得警惕，并开始兴奋地喷气。*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「别怕，兄弟；我们知道它在那里。」*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「不知道它会不会说话？」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	gflags[0x02C7] = true;
	goto labelFunc0495_00D9;
labelFunc0495_00B8:
	message("「我们没有在跟你说话！我们是想吃掉你！」*");
	say();
	UI_set_alignment(UI_get_npc_object(0xFF6B), 0x0002);
	UI_set_schedule_type(UI_get_npc_object(0xFF6B), 0x0000);
	abort;
labelFunc0495_00D9:
	converse attend labelFunc0495_0470;
	case "姓名" attend labelFunc0495_0133:
	message("「我的名字是 Shandu 。我旁边的兄弟是 Shanda 。他旁边的兄弟是 Shando 。」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我们的名字是什么并不重要！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 摇摇头，怒视着你。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("姓名");
	UI_add_answer(["Shandu", "Shanda", "Shando"]);
labelFunc0495_0133:
	case "Shandu" attend labelFunc0495_0146:
	message("「那就是我。」~~Shandu 微笑着舔了舔嘴唇。~~「我喜欢我的食物叫我的名字！」");
	say();
	UI_remove_answer("Shandu");
labelFunc0495_0146:
	case "Shanda" attend labelFunc0495_0189:
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 翻了翻白眼，从鼻孔喷出一缕烟。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「Shanda 说你应该避免叫他的名字。他不喜欢他的食物叫他的名字。」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Shanda");
labelFunc0495_0189:
	case "Shando" attend labelFunc0495_01E1:
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「那就是我。我是最年长的兄弟。」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「我们都是连在一起的， Shando ！你不可能比较老！」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我的头是第一个呼吸到空气的。」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("Shandu 吐了口口水。~~「那有什么关系？我们的食物才不在乎我们之中谁最年长！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Shando");
labelFunc0495_01E1:
	case "职业" attend labelFunc0495_0252:
	message("「职业？」");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 张大嘴巴，喷出一阵火焰。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「他认为这是个笑话。职业！哈！我也觉得这很有趣。我从来没听过我的食物讲笑话。」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「啊，但是兄弟们，我们『确实』有份工作。」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我们有吗？」*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「我们不是守护着凯德石 (Caddellite) 吗？我们人生的目标就是守护凯德石！」");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_add_answer("凯德石 (Caddellite)");
labelFunc0495_0252:
	case "凯德石 (Caddellite)" attend labelFunc0495_02AC:
	if (!(var0000 == 0x0000)) goto labelFunc0495_029A;
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 变得兴奋并喷着气，仿佛说了好几句话。");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("凯德石 (Caddellite)");
	UI_add_answer("他说了什么？");
	var0000 = 0x0001;
	goto labelFunc0495_02AC;
labelFunc0495_029A:
	message("「你想知道关于凯德石的事？很好，我会告诉你关于凯德石的事。」~~水怪稍微转移了重心，然后邪恶地笑着。~~「我们正在看守它。」");
	say();
	UI_remove_answer("凯德石 (Caddellite)");
	UI_add_answer("看守");
labelFunc0495_02AC:
	case "他说了什么？" attend labelFunc0495_02C6:
	message("「他没有在跟你说话！」");
	say();
	UI_remove_answer("他说了什么？");
	UI_add_answer("凯德石 (Caddellite)");
labelFunc0495_02C6:
	case "看守" attend labelFunc0495_033D:
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「这个生物似乎在回音我们说的每一句话， Shandu 。」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 发出可怕的咆哮声。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「Shanda 说他饿了！」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「我也是！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「既然你提到了，我自己也感到一阵饥饿。如果我们不需要保护凯德石，我会一口吞下这个生物！」");
	say();
	UI_remove_answer("看守");
	UI_add_answer(["回音", "保护"]);
labelFunc0495_033D:
	case "回音" attend labelFunc0495_0388:
	message("「听到这个生物重复我们说的话让我感到饥饿！」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「这让我觉得很有趣！显然这是一个智力极度有限的生物！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 发出低沉的咆哮。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「Shanda 说他想吃点东西！」");
	say();
	UI_remove_answer("回音");
labelFunc0495_0388:
	case "保护" attend labelFunc0495_03D6:
	message("「我想我们必须保护凯德石，以免像你这样大约每 1000 年才出现一次并想拿走它的生物靠近。」*");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 发出比以前更大的低吼声，然后喷出一点火焰。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「生物！你让 Shanda 生气了！他认为你企图偷走凯德石！当心点！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("保护");
	UI_add_answer("偷");
labelFunc0495_03D6:
	case "偷" attend labelFunc0495_045A:
	message("Shandu 变得暴怒。~~「我就知道！它想偷走我们的凯德石！」~~Shandu 对他的兄弟们说。~~「我们不能再拖延了。」*");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 愤怒地咆哮！*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「真是个好主意，我的兄弟！」~~Shandu 转向你。~~「这个生物长得有点像巨魔 (troll) ，只是闻起来稍微好一点。你觉得它会不会比巨魔更好吃， Shando ？」*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("「试了才知道！」*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda 猛烈地点头，舔着嘴唇。*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("「很好！我们把它吃了吧！」*");
	say();
	UI_set_alignment(UI_get_npc_object(0xFF6B), 0x0002);
	UI_set_schedule_type(UI_get_npc_object(0xFF6B), 0x0000);
	abort;
labelFunc0495_045A:
	case "告辞" attend labelFunc0495_046D:
	message("「你不能对我们说『告辞』！真没礼貌！」");
	say();
	UI_remove_answer("告辞");
labelFunc0495_046D:
	goto labelFunc0495_00D9;
labelFunc0495_0470:
	endconv;
	message("「这么快就走了？」*");
	say();
	return;
}


