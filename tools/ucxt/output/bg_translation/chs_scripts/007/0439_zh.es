#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0439 object#(0x439) ()
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
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc0439_0260;
	UI_show_npc_face(0xFFC7, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFC7));
	var0002 = Func0909();
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x004A] || gflags[0x0040])) goto labelFunc0439_0055;
	UI_add_answer("皇冠宝石号");
labelFunc0439_0055:
	if (!(!gflags[0x00BA])) goto labelFunc0439_0067;
	message("站在你面前的是一位年迈的航海人，他坚定的脸庞似乎经历过无数风雨。");
	say();
	gflags[0x00BA] = true;
	goto labelFunc0439_0071;
labelFunc0439_0067:
	message("「这次你找我有什么事，");
	message(var0002);
	message("？」 Clint 说。");
	say();
labelFunc0439_0071:
	converse attend labelFunc0439_025B;
	case "姓名" attend labelFunc0439_0087:
	message("「我是 Clint 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0439_0087:
	case "职业" attend labelFunc0439_00A0:
	message("「在我年轻的时候，我是个驾着大帆船航行过大海的水手。现在我必须满足于只卖船只和六分仪给别人。」");
	say();
	UI_add_answer(["水手", "买东西"]);
labelFunc0439_00A0:
	case "水手" attend labelFunc0439_00BA:
	message("「当然，那是在需要强壮的男人才能当水手的日子。现在出海的那些人根本撑不到一天。但我想，一切事物逐渐变得温顺，就是宇宙的本质。」");
	say();
	UI_remove_answer("水手");
	UI_add_answer("温顺");
labelFunc0439_00BA:
	case "温顺" attend labelFunc0439_00D4:
	message("「很快地，所有的怪物都会死光，整个世界会像友谊会那些人说的那样，在信任、价值和团结中结合在一起。呸！我说，当每个人都在互相战斗的时候，这个世界才更美好。」");
	say();
	UI_remove_answer("温顺");
	UI_add_answer("友谊会");
labelFunc0439_00D4:
	case "友谊会" attend labelFunc0439_00FB:
	if (!var0003) goto labelFunc0439_00F0;
	message("「当然，我没有冒犯的意思。我没意识到你是个成员。」 Clint 的反应就好像他刚摸到麻疯病人一样。");
	say();
	UI_remove_answer("友谊会");
	goto labelFunc0439_00FB;
labelFunc0439_00F0:
	message("「在世界上开创自己的路，不要听信别人叫你相信什么，这永远是最好的。你最好记住这点！」");
	say();
	UI_remove_answer("友谊会");
labelFunc0439_00FB:
	case "买东西" attend labelFunc0439_0132:
	if (!(var0001 == 0x0007)) goto labelFunc0439_0121;
	message("「如果你需要一艘船，我手里有一艘好船的契约。你也会需要一个六分仪来帮助她航向正确的方向。」");
	say();
	UI_add_answer(["买船契约", "买六分仪"]);
	goto labelFunc0439_012B;
labelFunc0439_0121:
	message("「我的店现在打烊了。改天再来，我会很乐意为你服务，");
	message(var0002);
	message("。」");
	say();
labelFunc0439_012B:
	UI_remove_answer("买东西");
labelFunc0439_0132:
	case "买船契约" attend labelFunc0439_01B5:
	if (!gflags[0x00D2]) goto labelFunc0439_0147;
	message("「我相信我已经把『野兽号 (The Beast)』的契约卖给你了！它怎么了？你弄丢那艘船了吗？如果是这样，那你必须去找另一个造船匠！」");
	say();
	goto labelFunc0439_01AE;
labelFunc0439_0147:
	message("「『野兽号』的船舶契约要八百枚金币。你希望购买她吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0439_01AA;
	var0005 = UI_remove_party_items(0x0320, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc0439_01A3;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x000F, 0xFE99, false);
	if (!var0006) goto labelFunc0439_019C;
	message("「这是你的契约，");
	message(var0002);
	message("。」");
	say();
	gflags[0x00D2] = true;
	goto labelFunc0439_01A0;
labelFunc0439_019C:
	message("「我会把契约给你，但你身上的东西太多，拿不下了！」");
	say();
labelFunc0439_01A0:
	goto labelFunc0439_01A7;
labelFunc0439_01A3:
	message("「你没有足够的金币来买船！」");
	say();
labelFunc0439_01A7:
	goto labelFunc0439_01AE;
labelFunc0439_01AA:
	message("「如果你需要船，一定要回来这里。」");
	say();
labelFunc0439_01AE:
	UI_remove_answer("买船契约");
labelFunc0439_01B5:
	case "买六分仪" attend labelFunc0439_0221:
	message("「一个六分仪要一百枚金币。你希望买一个吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0439_0216;
	var0008 = UI_remove_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc0439_020F;
	var0009 = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0439_0208;
	message("「这是你的六分仪。有了它，航向绝对不会偏。」");
	say();
	goto labelFunc0439_020C;
labelFunc0439_0208:
	message("「我会把六分仪给你，但你身上的东西太多，拿不下了。」");
	say();
labelFunc0439_020C:
	goto labelFunc0439_0213;
labelFunc0439_020F:
	message("「你没有足够的钱来买六分仪！」");
	say();
labelFunc0439_0213:
	goto labelFunc0439_021A;
labelFunc0439_0216:
	message("「如果你有需要六分仪，一定要回来。」");
	say();
labelFunc0439_021A:
	UI_remove_answer("买六分仪");
labelFunc0439_0221:
	case "皇冠宝石号" attend labelFunc0439_024D:
	if (!(!gflags[0x0086])) goto labelFunc0439_023B;
	message("「皇冠宝石号 (Crown Jewel) 来过不列颠城？最近绝对没有。肯定没有。我记得皇冠宝石号，它已经很久没来不列颠城了。」");
	say();
	gflags[0x0086] = true;
	goto labelFunc0439_0246;
labelFunc0439_023B:
	message("「我之前告诉过你，皇冠宝石号很久没来这里了。」");
	say();
	UI_remove_answer("皇冠宝石号");
labelFunc0439_0246:
	UI_remove_answer("皇冠宝石号");
labelFunc0439_024D:
	case "告辞" attend labelFunc0439_0258:
	goto labelFunc0439_025B;
labelFunc0439_0258:
	goto labelFunc0439_0071;
labelFunc0439_025B:
	endconv;
	message("「祝你旅途顺利。」*");
	say();
labelFunc0439_0260:
	if (!(event == 0x0000)) goto labelFunc0439_02E0;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFC7));
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc0439_02DA;
	if (!(var000A == 0x0001)) goto labelFunc0439_029D;
	var000B = "@扳手在哪里？@";
labelFunc0439_029D:
	if (!(var000A == 0x0002)) goto labelFunc0439_02AD;
	var000B = "@我的锤子在哪里？@";
labelFunc0439_02AD:
	if (!(var000A == 0x0003)) goto labelFunc0439_02BD;
	var000B = "@啊，闻到海风的味道…@";
labelFunc0439_02BD:
	if (!(var000A == 0x0004)) goto labelFunc0439_02CD;
	var000B = "@需要船或六分仪？@";
labelFunc0439_02CD:
	UI_item_say(0xFFC7, var000B);
	goto labelFunc0439_02E0;
labelFunc0439_02DA:
	Func092E(0xFFC7);
labelFunc0439_02E0:
	return;
}


