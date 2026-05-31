#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B1 object#(0x4B1) ()
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

	if (!(event == 0x0001)) goto labelFunc04B1_02E4;
	UI_show_npc_face(0xFF4F, 0x0000);
	var0000 = Func0909();
	if (!(gflags[0x0213] && (!gflags[0x0234]))) goto labelFunc04B1_0042;
	message("\"Avatar! My son Tobias has been wrongly accused! He is no thief! And I cannot believe a vial of venom was found in his possession. I truly believe it was planted there! Please -- I beg thee! Please clear my son's name. He has done no wrong!");
	say();
	message("\"I know my son Tobias has suffered for not having a father. I have tried my best on mine own to raise him well, but this farm requires so much work that I fear I do not have enough time to devote to him. But I know in mine heart that my son is not a thief.\"*");
	say();
	message("\"Might I suggest that thou speak with Morfin again. He may have recognized signs of usage of this foul substance in other members of the village.\"");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF4F), 0x000B);
	gflags[0x0234] = true;
	abort;
labelFunc04B1_0042:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0212]) goto labelFunc04B1_005F;
	UI_add_answer("thief");
labelFunc04B1_005F:
	if (!gflags[0x0213]) goto labelFunc04B1_006C;
	UI_add_answer("Feridwyn");
labelFunc04B1_006C:
	if (!gflags[0x0218]) goto labelFunc04B1_0086;
	UI_add_answer("Tobias cleared");
	UI_remove_answer(["Feridwyn", "thief"]);
labelFunc04B1_0086:
	if (!(!gflags[0x022A])) goto labelFunc04B1_009C;
	message("You see a farm woman. She rubs her hands, which are covered with dirt and lines drawn by toil.");
	say();
	message("\"My dreams have become reality. Thou art the Avatar, art thou not? I recognized thee immediately!\"");
	say();
	gflags[0x022A] = true;
	goto labelFunc04B1_00A6;
labelFunc04B1_009C:
	message("\"How art thou, ");
	message(var0000);
	message("?\" Camille asks.");
	say();
labelFunc04B1_00A6:
	converse attend labelFunc04B1_02DF;
	case "name" attend labelFunc04B1_00C0:
	message("\"My name is Camille, Avatar. It is an honor to meet thee.\"");
	say();
	gflags[0x022A] = true;
	UI_remove_answer("name");
labelFunc04B1_00C0:
	case "job" attend labelFunc04B1_00E7:
	message("\"I run a small farm here in Paws with my son, Tobias. I am a widow.\"");
	say();
	UI_add_answer(["Paws", "Tobias"]);
	if (!(!gflags[0x021A])) goto labelFunc04B1_00E7;
	UI_add_answer("farm");
labelFunc04B1_00E7:
	case "farm" attend labelFunc04B1_0107:
	message("\"I grow a few crops. Especially carrots and wheat.\"");
	say();
	UI_add_answer(["carrots", "wheat"]);
	UI_remove_answer("farm");
labelFunc04B1_0107:
	case "carrots" attend labelFunc04B1_01CD:
	message("\"I believe my carrots are especially tasty. Wouldst thou like to purchase some? They would only cost thee one gold for three.\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04B1_01C2;
	message("\"How many dost thou desire?\"");
	say();
	var0002 = UI_input_numeric_value(0x0003, 0x001E, 0x0003, 0x0003);
	var0003 = (var0002 / 0x0003);
	var0004 = UI_remove_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04B1_0196;
	var0005 = UI_add_party_items(var0002, 0x0179, 0xFE99, 0x0012, true);
	if (!var0005) goto labelFunc04B1_017B;
	message("\"I am sure thou wilt love them.\"");
	say();
	goto labelFunc04B1_0193;
labelFunc04B1_017B:
	message("\"Thou must first lighten thy load. Then I can give thee some delicious carrots.\"");
	say();
	var0006 = UI_add_party_items(var0003, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04B1_0193:
	goto labelFunc04B1_01BF;
labelFunc04B1_0196:
	message("\"I am sorry, Avatar.\" She shakes her head sadly. \"Thou dost not have the gold to be able to taste them.\"~~ She stares at you for a moment, obviously thoughtful. Lowering her voice, she says,~~\"Go ahead, Avatar, take one.\"");
	say();
	var0007 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0012, true);
	if (!var0007) goto labelFunc04B1_01BB;
	message("Smiling gently, she hands you a carrot.");
	say();
	goto labelFunc04B1_01BF;
labelFunc04B1_01BB:
	message("\"Thou art carrying too much...\" She seems truly disappointed.");
	say();
labelFunc04B1_01BF:
	goto labelFunc04B1_01C6;
labelFunc04B1_01C2:
	message("\"If that is thy wish, Avatar, but they are quite good!\"");
	say();
labelFunc04B1_01C6:
	UI_remove_answer("carrot");
labelFunc04B1_01CD:
	case "wheat" attend labelFunc04B1_021C:
	message("\"That reminds me. This package needs to be taken to the mill today. If thou canst deliver it for me, Thurston will pay thee for it. Wilt thou?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04B1_0211;
	var0009 = UI_add_party_items(0x0001, 0x02A5, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04B1_020A;
	message("\"Be sure and take this to Thurston, the mill owner. He shall pay thee for thy trouble.\"");
	say();
	gflags[0x021A] = true;
	goto labelFunc04B1_020E;
labelFunc04B1_020A:
	message("\"Thou art carrying too much! Go put something down and I will give it to thee then.\"");
	say();
labelFunc04B1_020E:
	goto labelFunc04B1_0215;
labelFunc04B1_0211:
	message("\"I understand that thou art busy on thy quest, Avatar.\"");
	say();
labelFunc04B1_0215:
	UI_remove_answer("wheat");
labelFunc04B1_021C:
	case "Paws" attend labelFunc04B1_023C:
	message("\"Life is hard here in Paws. It is a town of poor people with all the ills that poverty brings. At least The Fellowship brings us some relief.\"");
	say();
	UI_add_answer(["ills", "Fellowship"]);
	UI_remove_answer("Paws");
labelFunc04B1_023C:
	case "Tobias" attend labelFunc04B1_0259:
	if (!gflags[0x0213]) goto labelFunc04B1_024E;
	message("\"I know my son. I know that he is growing up unhappy. But I cannot believe that he would steal things.\"");
	say();
labelFunc04B1_024E:
	message("\"He is basically a good boy. He works hard and misses his father.\"");
	say();
	UI_remove_answer("Tobias");
labelFunc04B1_0259:
	case "Fellowship" attend labelFunc04B1_026C:
	message("\"I am not sure whether I trust The Fellowship. It has undoubtedly done some good things in this world so it cannot be all bad. Or, at least, the people in it cannot be all bad.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04B1_026C:
	case "ills" attend labelFunc04B1_0286:
	message("\"Recently, our town has been plagued by a thief.\"");
	say();
	UI_add_answer("thief");
	UI_remove_answer("ills");
labelFunc04B1_0286:
	case "thief" attend labelFunc04B1_02AB:
	if (!(!gflags[0x0213])) goto labelFunc04B1_02A0;
	message("\"Some silver serpent venom was stolen from the merchant Morfin who operates the slaughterhouse.\"");
	say();
	gflags[0x0212] = true;
	goto labelFunc04B1_02A4;
labelFunc04B1_02A0:
	message("\"I do not care what Feridwyn says! My son is no thief!\"");
	say();
labelFunc04B1_02A4:
	UI_remove_answer("thief");
labelFunc04B1_02AB:
	case "Feridwyn" attend labelFunc04B1_02BE:
	message("\"That man Feridwyn knows that I do not trust The Fellowship, and for\tthat he considers me his personal enemy. I do not know why he would seek to attack me through my son but he must not be allowed to succeed.\"");
	say();
	UI_remove_answer("Feridwyn");
labelFunc04B1_02BE:
	case "Tobias cleared" attend labelFunc04B1_02D1:
	message("You tell Camille how you discovered that Garritt was really the thief and that her son Tobias has been cleared. \"I want to thank thee for finding the thief in our town and clearing my son's name. It does mine heart good to see that the Avatar has returned to us once again and that thou dost care enough about the people of Britannia to help solve our local troubles here in Paws. Again Avatar, I thank thee.\"");
	say();
	UI_remove_answer("Tobias cleared");
labelFunc04B1_02D1:
	case "bye" attend labelFunc04B1_02DC:
	goto labelFunc04B1_02DF;
labelFunc04B1_02DC:
	goto labelFunc04B1_00A6;
labelFunc04B1_02DF:
	endconv;
	message("\"Pleasant journey, Avatar.\"*");
	say();
labelFunc04B1_02E4:
	if (!(event == 0x0000)) goto labelFunc04B1_02F2;
	Func092E(0xFF4F);
labelFunc04B1_02F2:
	return;
}


