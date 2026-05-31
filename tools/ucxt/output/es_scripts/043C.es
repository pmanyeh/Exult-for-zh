#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0857 0x857 ();
extern void Func092E 0x92E (var var0000);

void Func043C object#(0x43C) ()
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

	if (!(event == 0x0001)) goto labelFunc043C_0253;
	UI_show_npc_face(0xFFC4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00CE]) goto labelFunc043C_003C;
	UI_add_answer("pumpkins");
labelFunc043C_003C:
	if (!(!gflags[0x00BD])) goto labelFunc043C_004E;
	message("You see a farmer who, despite showing considerable wear from hard work, appears energetic, cheerful and friendly.");
	say();
	gflags[0x00BD] = true;
	goto labelFunc043C_0058;
labelFunc043C_004E:
	message("\"Hello again, ");
	message(var0000);
	message(",\" Brownie greets you.");
	say();
labelFunc043C_0058:
	converse attend labelFunc043C_0248;
	case "name" attend labelFunc043C_006E:
	message("\"I am Brownie.\"");
	say();
	UI_remove_answer("name");
labelFunc043C_006E:
	case "job" attend labelFunc043C_0087:
	message("\"Well, I ran for the office of Mayor of Britain once, but I lost. Now I am back doing what I have been doing since I was a boy. Working the farm.\"");
	say();
	UI_add_answer(["Mayor", "farm"]);
labelFunc043C_0087:
	case "Mayor" attend labelFunc043C_00A7:
	message("\"Patterson won the election. He spent a lot of money on his campaign. Most of it to buy votes. But I am not bitter. I was just not meant to be Mayor.\"");
	say();
	UI_remove_answer("Mayor");
	UI_add_answer(["Patterson", "election"]);
labelFunc043C_00A7:
	case "Patterson" attend labelFunc043C_00C7:
	message("\"Patterson courted the support of The Fellowship. They forced a vote from all their members. Once word spread, my support drained away. No one wants to be on the losing side.\" Brownie sighs.");
	say();
	UI_remove_answer("Patterson");
	UI_add_answer(["Fellowship", "losing"]);
labelFunc043C_00C7:
	case "election" attend labelFunc043C_00DA:
	message("\"I do not really have any wish to succeed in politics. It just made me ill seeing all of the people with riches mistreat all of the people who are poor, and then have to listen to them talk about how the class system has been abolished.\"");
	say();
	UI_remove_answer("election");
labelFunc043C_00DA:
	case "Fellowship" attend labelFunc043C_00FA:
	if (!var0001) goto labelFunc043C_00EF;
	message("Brownie gestures toward your medallion. \"Frankly, I do not know what thou seest in that group.\"");
	say();
	goto labelFunc043C_00F3;
labelFunc043C_00EF:
	message("\"If thou art not with The Fellowship thou art against them. I think they saw me as a potential enemy that had to be stopped.\"");
	say();
labelFunc043C_00F3:
	UI_remove_answer("Fellowship");
labelFunc043C_00FA:
	case "losing" attend labelFunc043C_0114:
	message("\"Of course, I could have won the election if I had wanted to. I had information about Patterson that would have ruined any chances of him winning.\"");
	say();
	UI_remove_answer("losing");
	UI_add_answer("information");
labelFunc043C_0114:
	case "information" attend labelFunc043C_012E:
	message("\"I could have revealed a secret about Patterson but if I did it would have hurt someone close to him very much. I did not want to be mayor that badly.\"");
	say();
	UI_remove_answer("information");
	UI_add_answer("secret");
labelFunc043C_012E:
	case "secret" attend labelFunc043C_0141:
	message("\"Patterson does little to hide his secret. If thou dost keep an eye on him thou wilt surely learn of it sooner or later.\"");
	say();
	UI_remove_answer("secret");
labelFunc043C_0141:
	case "farm" attend labelFunc043C_0161:
	message("\"I feel more at home on the farm growing vegetables. There is another farmer named Mack who works a farm near Britain as well. He raises chickens.\"");
	say();
	UI_remove_answer("farm");
	UI_add_answer(["vegetables", "Mack"]);
labelFunc043C_0161:
	case "Mack" attend labelFunc043C_0174:
	message("\"I like him. He even voted for me. But to tell thee the truth about Mack, he is a lunatic.\"");
	say();
	UI_remove_answer("Mack");
labelFunc043C_0174:
	case "vegetables" attend labelFunc043C_0194:
	message("\"I raise pumpkins. But I am in a bind at the moment and need some help.\"");
	say();
	UI_remove_answer("vegetables");
	UI_add_answer(["bind", "help"]);
labelFunc043C_0194:
	case "bind" attend labelFunc043C_01A7:
	message("\"I strained my back the other day lifting heavy pumpkins. I cannot so much as lift a small one today! And I need help with the harvest of pumpkins so that I can get them to the market.\"");
	say();
	UI_remove_answer("bind");
labelFunc043C_01A7:
	case "help" attend labelFunc043C_021B:
	message("\"There are piles of pumpkins at the north end of the field. I need them brought down near my farmhouse. If thou wilt help me by bringing the pumpkins to me, I will gladly pay thee for thy work. How does one gold coin for every pumpkin carried sound?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc043C_0210;
	message("\"How nice! A helper! Please, feel free to start work at any time!\"");
	say();
	gflags[0x00CE] = true;
	var0003 = UI_find_nearby_avatar(0x0014);
	var0004 = UI_find_nearby_avatar(0x0015);
	enum();
labelFunc043C_01DC:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc043C_01F4;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc043C_01DC;
labelFunc043C_01F4:
	enum();
labelFunc043C_01F5:
	for (var0007 in var0004 with var0008 to var0009) attend labelFunc043C_020D;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc043C_01F5;
labelFunc043C_020D:
	goto labelFunc043C_0214;
labelFunc043C_0210:
	message("\"Perhaps some other time, then.\"");
	say();
labelFunc043C_0214:
	UI_remove_answer("help");
labelFunc043C_021B:
	case "pumpkins" attend labelFunc043C_023A:
	if (!gflags[0x00CE]) goto labelFunc043C_022F;
	Func0857();
	goto labelFunc043C_0233;
labelFunc043C_022F:
	message("\"Thou shouldst simply go to the north end of the field and bring back as many pumpkins as thou can carry!\"");
	say();
labelFunc043C_0233:
	UI_remove_answer("pumpkins");
labelFunc043C_023A:
	case "bye" attend labelFunc043C_0245:
	goto labelFunc043C_0248;
labelFunc043C_0245:
	goto labelFunc043C_0058;
labelFunc043C_0248:
	endconv;
	message("\"Good day, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc043C_0253:
	if (!(event == 0x0000)) goto labelFunc043C_0261;
	Func092E(0xFFC4);
labelFunc043C_0261:
	return;
}


