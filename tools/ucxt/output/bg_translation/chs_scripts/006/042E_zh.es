#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func042E object#(0x42E) ()
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

	if (!(event == 0x0001)) goto labelFunc042E_0305;
	UI_show_npc_face(0xFFD2, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD2));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0092]) goto labelFunc042E_004A;
	UI_add_answer("Cynthia 的话");
labelFunc042E_004A:
	if (!(!gflags[0x00AF])) goto labelFunc042E_005C;
	message("你看见一位板着脸的旅店老板，他看着你的眼神仿佛他所有的问题都是你造成的一样。");
	say();
	gflags[0x00AF] = true;
	goto labelFunc042E_0066;
labelFunc042E_005C:
	message("「现在我必须为你做些什么，");
	message(var0000);
	message("？」 James 问。");
	say();
labelFunc042E_0066:
	converse attend labelFunc042E_0300;
	case "姓名" attend labelFunc042E_007C:
	message("「我的名字是 James 。」");
	say();
	UI_remove_answer("姓名");
labelFunc042E_007C:
	case "职业" attend labelFunc042E_0095:
	message("「我是这家旅店的老板。」");
	say();
	UI_add_answer(["老板", "旅店"]);
labelFunc042E_0095:
	case "老板" attend labelFunc042E_00B5:
	message("「这只是另一种说法，意思是我是那个当柜台人员的人。你可能会认为这是一份轻松的工作，但我向你保证，事实并非如此。」");
	say();
	UI_remove_answer("老板");
	UI_add_answer(["柜台人员", "不轻松"]);
labelFunc042E_00B5:
	case "旅店" attend labelFunc042E_00C8:
	message("「这个地方叫做『旅人旅馆』。它在不列颠城有着悠久而丰富的历史。如果你的祖父母曾经来过这个城镇，他们很可能就是住在这儿。」");
	say();
	UI_remove_answer("旅店");
labelFunc042E_00C8:
	case "柜台人员" attend labelFunc042E_00E8:
	message("「当然，当柜台人员不是我唯一做的事。我必须整天听人们谈论他们的问题，好像我应该解决它们一样！」");
	say();
	UI_remove_answer("柜台人员");
	UI_add_answer(["听人抱怨", "解决"]);
labelFunc042E_00E8:
	case "听人抱怨" attend labelFunc042E_0101:
	message("「没错，");
	message(var0000);
	message("。所以如果你有问题，请出于礼貌不要让我知道这一切。我刚说到哪了？」");
	say();
	UI_remove_answer("听人抱怨");
labelFunc042E_0101:
	case "解决" attend labelFunc042E_011B:
	message("「也许解决人们的问题对其他旅店老板来说是件轻松的任务，但我不仅不擅长，我自己也有问题。」");
	say();
	UI_remove_answer("解决");
	UI_add_answer("问题");
labelFunc042E_011B:
	case "问题" attend labelFunc042E_013B:
	message("「我不喜欢我的工作！我从来没想过要当旅店老板，我只是想在我父亲去世后继续经营这个地方。现在我跟 Cynthia 结婚了，我被绑得比以前更紧了！」");
	say();
	UI_remove_answer("问题");
	UI_add_answer(["旅店老板", "Cynthia"]);
labelFunc042E_013B:
	case "旅店老板" attend labelFunc042E_015B:
	message("「我一直暗自希望能成为一名海盗，而不是旅店老板！当我没有在海上航行时，我就会住在海盗巢穴 (Buccaneer's Den) 。」");
	say();
	UI_remove_answer("旅店老板");
	UI_add_answer(["海盗", "海盗巢穴"]);
labelFunc042E_015B:
	case "海盗巢穴" attend labelFunc042E_016E:
	message("「据我所知，那里有一流的赌坊，还有豪华的浴池。至少我是听卖炸鱼薯条的 Gordon 这么说的。」");
	say();
	UI_remove_answer("海盗巢穴");
labelFunc042E_016E:
	case "Cynthia" attend labelFunc042E_018E:
	message("「别误会我的意思，");
	message(var0000);
	message("。我全心全意地爱着 Cynthia 。但有时候我觉得我还太年轻，不该结婚。此外，我知道我无法成为她的一个好丈夫。」");
	say();
	UI_remove_answer("Cynthia");
	UI_add_answer("好丈夫");
labelFunc042E_018E:
	case "海盗" attend labelFunc042E_01A1:
	message("「你很清楚，几乎没有人会对海盗倾吐烦恼。如果我是海盗，我还可以把这只坏脚换成木腿！」");
	say();
	UI_remove_answer("海盗");
labelFunc042E_01A1:
	case "好丈夫" attend labelFunc042E_01C1:
	message("「当 Cynthia 整天在造币厂数着那些钱时，我怎么能用旅店老板微薄的收入让她开心呢？我知道我做不到。」");
	say();
	UI_remove_answer("好丈夫");
	UI_add_answer(["开心", "造币厂"]);
labelFunc042E_01C1:
	case "造币厂" attend labelFunc042E_01D4:
	message("「我了解人心的本质，我的好朋友。在接触了这么大笔的钱之后，她将开始贪图它。既然我无法提供，她就会离开我，把心交给一个有钱人。也许是个商人或贵族。一想到这个，我的血液就沸腾了。」");
	say();
	UI_remove_answer("造币厂");
labelFunc042E_01D4:
	case "不轻松" attend labelFunc042E_01F4:
	message("「当一个旅店老板，必须整天跑来跑去。如果任何人想要任何东西，你就是必须为他们处理的那个人！」");
	say();
	UI_remove_answer("不轻松");
	UI_add_answer(["跑来跑去", "客房"]);
labelFunc042E_01F4:
	case "跑来跑去" attend labelFunc042E_0207:
	message("「我花太多时间跑来跑去了，以至于我的脚出了毛病。」");
	say();
	UI_remove_answer("跑来跑去");
labelFunc042E_0207:
	case "开心" attend labelFunc042E_021A:
	message("「我已经感觉到她对我们的婚姻感到担忧。我知道我们之间出了问题。」");
	say();
	UI_remove_answer("开心");
labelFunc042E_021A:
	case "客房" attend labelFunc042E_02DF:
	if (!(var0002 == 0x0007)) goto labelFunc042E_02CE;
	message("「喔，我想你现在想要一间客房了吧！看吧，我就是这个意思！每人每晚十枚金币。你想要客房，对吧？」");
	say();
	if (!Func090A()) goto labelFunc042E_02C7;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	enum();
labelFunc042E_0244:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc042E_025C;
	var0004 = (var0004 + 0x0001);
	goto labelFunc042E_0244;
labelFunc042E_025C:
	var0008 = (var0004 * 0x000A);
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 >= var0008)) goto labelFunc042E_02C0;
	var000A = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000A)) goto labelFunc042E_02A5;
	message("「你带了太多东西了，拿不下房间钥匙！」");
	say();
	goto labelFunc042E_02BD;
labelFunc042E_02A5:
	message("「这是你的房间钥匙。它只有在你离开旅店前有效。」");
	say();
	var000B = UI_remove_party_items(var0008, 0x0284, 0xFE99, 0xFE99, true);
labelFunc042E_02BD:
	goto labelFunc042E_02C4;
labelFunc042E_02C0:
	message("「你没有足够的金币在这里开房间。现在我想你肯定要告诉我你是怎么落得这般可怜的境地。好吧，我可不听你说！」");
	say();
labelFunc042E_02C4:
	goto labelFunc042E_02CB;
labelFunc042E_02C7:
	message("James 擦了擦额头。「呼！好险！」");
	say();
labelFunc042E_02CB:
	goto labelFunc042E_02D8;
labelFunc042E_02CE:
	message("「拜托，");
	message(var0000);
	message("。请给我一些自己的时间！目前我没有在处理旅店的生意，而且我希望能保持这样。你必须在营业时间来光顾旅店。」");
	say();
labelFunc042E_02D8:
	UI_remove_answer("客房");
labelFunc042E_02DF:
	case "Cynthia 的话" attend labelFunc042E_02F2:
	message("你向他转述 Cynthia 对你说过关于他的话。他脸上露出了笑容。「噢，反正谁想当海盗？我会讨厌那样的！」说完他又回去擦拭吧台，但你注意到那笑容依然挂在脸上。");
	say();
	UI_remove_answer("Cynthia");
labelFunc042E_02F2:
	case "告辞" attend labelFunc042E_02FD:
	goto labelFunc042E_0300;
labelFunc042E_02FD:
	goto labelFunc042E_0066;
labelFunc042E_0300:
	endconv;
	message("「喔，你肯定还会再回来找我要别的东西！我就知道！」*");
	say();
labelFunc042E_0305:
	if (!(event == 0x0000)) goto labelFunc042E_0313;
	Func092E(0xFFD2);
labelFunc042E_0313:
	return;
}


