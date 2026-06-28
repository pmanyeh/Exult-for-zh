#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B1 0x8B1 ();
extern void Func08B2 0x8B2 ();
extern void Func08AF 0x8AF ();
extern void Func08AD 0x8AD ();
extern void Func08B0 0x8B0 ();

void Func048D object#(0x48D) ()
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
	var var0009;

	if (!(event == 0x0001)) goto labelFunc048D_033E;
	if (!(!gflags[0x01B5])) goto labelFunc048D_001E;
	UI_show_npc_face(0xFF73, 0x0000);
	message("你试图与这不死生物说话，但它没有任何反应。*");
	say();
	abort;
labelFunc048D_001E:
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFF70);
	var0003 = false;
	if (!gflags[0x01A3]) goto labelFunc048D_004D;
	if (!(!gflags[0x01AB])) goto labelFunc048D_004A;
	Func08B1();
	goto labelFunc048D_004D;
labelFunc048D_004A:
	Func08B2();
labelFunc048D_004D:
	if (!gflags[0x0198]) goto labelFunc048D_0056;
	Func08AF();
labelFunc048D_0056:
	if (!gflags[0x01AA]) goto labelFunc048D_0062;
	Func08AD();
	goto labelFunc048D_006C;
labelFunc048D_0062:
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_006C:
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(0xFF73);
	if (!((var0004 == 0x0000) || (var0004 == 0x0001))) goto labelFunc048D_00A3;
	if (!(var0005 == 0x000E)) goto labelFunc048D_009F;
	Func08B0();
	goto labelFunc048D_00A3;
labelFunc048D_009F:
	var0003 = true;
labelFunc048D_00A3:
	if (!(!gflags[0x01C5])) goto labelFunc048D_0164;
	if (!var0003) goto labelFunc048D_00B4;
	message("巫妖几乎在发光，力量明显在它不死的血管中涌动。");
	say();
labelFunc048D_00B4:
	message("你走上前去面对这个看起来很邪恶的生物，他慢慢地转向你。当他那强烈的目光锁定你的身形时，你几乎希望自己没有这么大胆。~~「");
	message(var0000);
	message("。」一个讽刺的表情出现在他不死的特征上。「我能帮你什么忙吗？」你有一种明确的感觉，帮忙是你最不可能从巫妖那里得到的东西。");
	say();
	var0006 = Func08F7(0xFFFD);
	var0007 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc048D_00FE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 走到你身边，低声说道。~~「不要相信这家伙，");
	message(var0001);
	message("。我想他只会带来邪恶。」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF73, 0x0000);
	goto labelFunc048D_0129;
labelFunc048D_00FE:
	if (!var0007) goto labelFunc048D_0129;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 走到你身边，低声说道。~~「不要相信这家伙，");
	message(var0001);
	message("。我想他只会带来邪恶。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0129:
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc048D_015D;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「呃，");
	message(var0001);
	message("？我准备好要走了，」他对你说，畏缩地躲避着这个不死生物。*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_015D:
	gflags[0x01C5] = true;
	goto labelFunc048D_0168;
labelFunc048D_0164:
	message("巫妖露出一个近乎微笑的表情，并带着讽刺的口吻说道。~~「啊，奇妙的圣者回来了。我做了什么事值得这般荣幸？」『荣幸』这个词在这个生物的舌尖上变了味。");
	say();
labelFunc048D_0168:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc048D_0178:
	converse attend labelFunc048D_033D;
	case "姓名" attend labelFunc048D_019B:
	message("巫妖干燥的面容呈现出一种傲慢的神情。「你可以叫我 Lord Horance。这样做是明智的，因为我总有一天会统治整个不列颠尼亚。~~「惊讶吗，圣者？拜托。你当然不会认为不列颠王会阻碍我。我知道该怎么对付他那种人。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["Lord Horance", "不列颠王"]);
labelFunc048D_019B:
	case "Lord Horance" attend labelFunc048D_01BB:
	message("「啊，很高兴能从圣者那里听到这样的敬意。或许你在我的新秩序中会有一席之地。」巫妖用一种介于恶意与幽默之间的表情看着你。");
	say();
	UI_remove_answer("Lord Horance");
	UI_add_answer(["敬意", "新秩序"]);
labelFunc048D_01BB:
	case "敬意" attend labelFunc048D_01CE:
	message("「怎么，不然你会怎么称呼它？你肯定是真的被我『庄严的』存在给折服了。」");
	say();
	UI_remove_answer("敬意");
labelFunc048D_01CE:
	case "新秩序" attend labelFunc048D_01F8:
	message("一种狂热的表情点亮了巫妖死寂的面庞。~~「是的，");
	message(var0000);
	message("。死者将会统治！我将成为他们的领袖，而你可以成为一个圣者……为我服务！」");
	say();
	UI_remove_answer("新秩序");
	UI_push_answers();
	UI_add_answer(["休想！", "很好！"]);
labelFunc048D_01F8:
	case "休想！" attend labelFunc048D_020E:
	message("「哎呀，");
	message(var0000);
	message("。我以为这是理所当然的。我很乐意帮助你进入死者的领域。」");
	say();
	UI_pop_answers();
labelFunc048D_020E:
	case "很好！" attend labelFunc048D_021E:
	message("「是的，我就知道你会看出我愿景中的智能。」他看着你，就像猫在玩弄老鼠一样。");
	say();
	UI_pop_answers();
labelFunc048D_021E:
	case "不列颠王" attend labelFunc048D_023E:
	message("『邪恶』都不足以形容巫妖干裂嘴唇上出现的冷笑。「我最近注意到，在不列颠尼亚地表发现的某种矿石，如果经过适当的锻造，可以成为那备受推崇的不列颠王的克星。~~「我了解这种矿石，并且以前曾将它用于其他用途。我将再次利用它来毁灭那个所谓的君王。」");
	say();
	UI_add_answer(["矿石", "其他用途"]);
	UI_remove_answer("不列颠王");
labelFunc048D_023E:
	case "其他用途" attend labelFunc048D_025F:
	if (!(!gflags[0x0003])) goto labelFunc048D_0254;
	message("他指着塔墙。「不然你以为我的塔是怎么抵挡住以太对我魔法造成的破坏性影响的？」");
	say();
	goto labelFunc048D_0258;
labelFunc048D_0254:
	message("他指着塔墙。「它成了抵挡被干扰的以太所造成的破坏性影响的有效屏障。」");
	say();
labelFunc048D_0258:
	UI_remove_answer("其他用途");
labelFunc048D_025F:
	case "职业" attend labelFunc048D_0297:
	message("一阵刺耳的笑声从他干燥的喉咙中逸出。「我是赫赫有名的死者之王，很快就会成为整个不列颠尼亚之王。你知道这里有多少死人和生物吗？我想你不知道。~~「历代的死者都任我召唤和控制。敬爱祖先的坟墓将会喷吐出它们的内容物，组成一支军队。这将是我给生者的特别款待，我的不死怪物们。想像一条杀不死的骷髅龙。考虑一个永远受我奴役的永生法师集团。~~「而我这项计划最美妙的部分是，当生者在这些战斗中死去时——他们一定会死的——他们将会壮大不死大军的行列。我将拥有至高无上的统治权——一个死者的世界！」这对他病态且扭曲的未来的一瞥，让你不禁微微发抖。~~「而且我会有一位女王，美丽的 Rowena 。」");
	say();
	UI_add_answer("Rowena");
	if (!var0002) goto labelFunc048D_0297;
	UI_show_npc_face(0xFF70, 0x0000);
	message("「是的，我的大人。我一定是全大陆最幸福的女士。」她的目光从未离开过巫妖那张可怕的脸。");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0297:
	case "Rowena" attend labelFunc048D_02B7:
	if (!var0002) goto labelFunc048D_02AC;
	message("「她难道不是你见过最美丽的女士吗？~~「她将在我的身边拥有永恒的美丽，我们将共同统治。」");
	say();
	goto labelFunc048D_02B0;
labelFunc048D_02AC:
	message("「她是我见过最美丽的女士。她将在我的身边拥有永恒的美丽，我们将共同统治。」在听他说完他对未来的计划后，你觉得这是一句非常不可靠的陈述。");
	say();
labelFunc048D_02B0:
	UI_remove_answer("Rowena");
labelFunc048D_02B7:
	case "矿石" attend labelFunc048D_02CA:
	message("「好了，好了，圣者，那样就泄露机密了。那样的话我就对你没有秘密了，不是吗？」");
	say();
	UI_remove_answer("矿石");
labelFunc048D_02CA:
	case "告辞" attend labelFunc048D_033A:
	message("「看着你离开真的很令人难过。」他带着讽刺的微笑说道。*");
	say();
	var0009 = Func08F7(0xFFFC);
	var0007 = Func08F7(0xFFFF);
	if (!var0009) goto labelFunc048D_0310;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「是啊，当然。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF73, 0x0000);
	goto labelFunc048D_0335;
labelFunc048D_0310:
	if (!var0007) goto labelFunc048D_0335;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「是啊，当然。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0335:
	message("「请随意探索我简陋的居所。不过，要小心。我的守卫们不太聪明，很可能会攻击任何活着的东西。」他带着骷髅般的笑容微笑着。*");
	say();
	abort;
labelFunc048D_033A:
	goto labelFunc048D_0178;
labelFunc048D_033D:
	endconv;
labelFunc048D_033E:
	return;
}


