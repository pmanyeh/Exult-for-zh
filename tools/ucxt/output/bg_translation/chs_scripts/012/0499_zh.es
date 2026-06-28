#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08BB 0x8BB (var var0000);
extern void Func08BC 0x8BC (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0499 object#(0x499) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0499_026E;
	UI_show_npc_face(0xFF67, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x01FB])) goto labelFunc0499_0040;
	message("你看到你的老朋友 Mariah 。");
	say();
	gflags[0x01FB] = true;
	goto labelFunc0499_005D;
labelFunc0499_0040:
	if (!gflags[0x0003]) goto labelFunc0499_0053;
	message("「是的，");
	message(var0001);
	message("？我能帮你什么忙？」Mariah 向你打招呼。");
	say();
	goto labelFunc0499_005D;
labelFunc0499_0053:
	message("「是的，");
	message(var0000);
	message("？」Mariah 笑了，笑得有点太甜了。");
	say();
labelFunc0499_005D:
	if (!gflags[0x0003]) goto labelFunc0499_0136;
labelFunc0499_0063:
	converse attend labelFunc0499_0132;
	case "姓名" attend labelFunc0499_00B0:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0499_009F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你肯定认得你的老同伴 Mariah 吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF67, 0x0000);
	goto labelFunc0499_00A9;
labelFunc0499_009F:
	message("「你已经忘记我了吗，");
	message(var0001);
	message("？我是 Mariah 。」");
	say();
labelFunc0499_00A9:
	UI_remove_answer("姓名");
labelFunc0499_00B0:
	case "职业" attend labelFunc0499_00D5:
	message("「我在 Lycaeum 卖法术、魔法药材，有时还卖一些药水。你想买这些东西吗，");
	message(var0001);
	message("？」");
	say();
	UI_add_answer(["法术", "药材", "药水", "Lycaeum"]);
labelFunc0499_00D5:
	case "法术" attend labelFunc0499_00E3:
	Func08BB(0xFF67);
labelFunc0499_00E3:
	case "药材" attend labelFunc0499_00F1:
	Func08BC("Reagents");
labelFunc0499_00F1:
	case "药水" attend labelFunc0499_0109:
	message("「恐怕，");
	message(var0001);
	message("，我的选择非常少。」");
	say();
	Func08BC("Potions");
labelFunc0499_0109:
	case "Lycaeum" attend labelFunc0499_011C:
	message("她悲伤地摇了摇头。「我已经很久没有做『我自己』了，以至于我都不认得这个城镇了。」她睁大了眼睛。~~「现在 Lycaeum 周围有这么多建筑，你看到了吗？」~~她停顿了一下，看着你。~~「顺便说一句，老朋友。我猜是你让以太恢复正常状态的。谢谢你。」");
	say();
	UI_remove_answer("Lycaeum");
labelFunc0499_011C:
	case "告辞" attend labelFunc0499_012F:
	message("「未来的日子会很好的，朋友 ");
	message(var0001);
	message("。」*");
	say();
	abort;
labelFunc0499_012F:
	goto labelFunc0499_0063;
labelFunc0499_0132:
	endconv;
	goto labelFunc0499_026E;
labelFunc0499_0136:
	converse attend labelFunc0499_026D;
	case "姓名" attend labelFunc0499_0181:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0499_0176;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你肯定认得你的老同伴 Mariah 吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF67, 0x0000);
	message("「是的，你不认得我吗？」她停顿了一下，怒视着你。「但你是谁，我的糕点呢？」");
	say();
	goto labelFunc0499_017A;
labelFunc0499_0176:
	message("「是的，你可以告诉我你的名字，」她说，环顾着建筑物。「这些书难道不漂亮吗？」");
	say();
labelFunc0499_017A:
	UI_remove_answer("姓名");
labelFunc0499_0181:
	case "职业" attend labelFunc0499_019D:
	message("她笑了。「我有一份非常重要的工作，我真的有。天哪，那些书架难道不可爱吗？多么整齐有序。」她转头看着你。~~「小心！墨水瓶都是满的，羽毛笔也很锋利。」她咯咯地笑。");
	say();
	UI_add_answer(["书架", "墨水瓶", "羽毛笔"]);
labelFunc0499_019D:
	case "书架" attend labelFunc0499_01B7:
	message("「难道它们不是你见过最整洁、最有秩序、保养得最好的书架吗？他们维护得非常好！」");
	say();
	UI_add_answer("他们");
	UI_remove_answer("书架");
labelFunc0499_01B7:
	case "墨水瓶" attend labelFunc0499_01D1:
	message("「它们总是装得满满的，随时可以使用。他们非常擅长保持它们充满并干净！」");
	say();
	UI_add_answer("他们");
	UI_remove_answer("墨水瓶");
labelFunc0499_01D1:
	case "羽毛笔" attend labelFunc0499_01EB:
	message("「哦，是的，它们非常锋利！当你需要写信时，它们总是在那里。他们做得很好，随时准备了很多！」");
	say();
	UI_add_answer("他们");
	UI_remove_answer("羽毛笔");
labelFunc0499_01EB:
	case "他们" attend labelFunc0499_0205:
	message("「是的，他们是！」她的脸变得悲伤。「但我只负责贩售 。」");
	say();
	UI_add_answer("卖");
	UI_remove_answer("他们");
labelFunc0499_0205:
	case "卖" attend labelFunc0499_0228:
	message("「是的，」她同意道，「我确实有在卖。我甚至会拼字。事实上，我甚至在卖法术！但是，如果你想要魔法药材，那你运气不佳，因为我只在一周的七天中的某一天卖这些。你想知道是哪一天吗？~~「你一定有一套很棒的书！我刚好有一件可以搭配你书架的物品——一瓶药水。如果你向我买一个法术或魔法药材，我会以原价卖给你一瓶药水！」");
	say();
	UI_add_answer(["哪一天", "药材", "药水"]);
	UI_remove_answer("卖");
labelFunc0499_0228:
	case "哪一天" attend labelFunc0499_0241:
	message("「哎呀，就是今天。你运气真好。买个法术吧。」");
	say();
	Func08BB(0xFF67);
	UI_remove_answer("哪一天");
labelFunc0499_0241:
	case "药材" attend labelFunc0499_024F:
	Func08BC("Reagents");
labelFunc0499_024F:
	case "药水" attend labelFunc0499_025D:
	Func08BC("Potions");
labelFunc0499_025D:
	case "告辞" attend labelFunc0499_026A:
	message("「当然，随时回来买吧。」*");
	say();
	abort;
labelFunc0499_026A:
	goto labelFunc0499_0136;
labelFunc0499_026D:
	endconv;
labelFunc0499_026E:
	if (!(event == 0x0000)) goto labelFunc0499_02F5;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF67));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x000B)) goto labelFunc0499_02EF;
	if (!(!gflags[0x0003])) goto labelFunc0499_02EC;
	if (!(var0004 == 0x0001)) goto labelFunc0499_02B2;
	var0005 = "@我的糕点到底在哪里！@";
labelFunc0499_02B2:
	if (!(var0004 == 0x0002)) goto labelFunc0499_02C2;
	var0005 = "@可爱，可爱的书架！@";
labelFunc0499_02C2:
	if (!(var0004 == 0x0003)) goto labelFunc0499_02D2;
	var0005 = "@可爱，可爱的墨水瓶！@";
labelFunc0499_02D2:
	if (!(var0004 == 0x0004)) goto labelFunc0499_02E2;
	var0005 = "@空气中弥漫着魔法……@";
labelFunc0499_02E2:
	UI_item_say(0xFF67, var0005);
labelFunc0499_02EC:
	goto labelFunc0499_02F5;
labelFunc0499_02EF:
	Func092E(0xFF67);
labelFunc0499_02F5:
	return;
}


