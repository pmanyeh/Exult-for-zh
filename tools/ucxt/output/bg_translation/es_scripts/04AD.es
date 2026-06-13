#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04AD object#(0x4AD) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!(event == 0x0001)) goto labelFunc04AD_0357;
	UI_show_npc_face(0xFF53, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF53));
	var0003 = UI_find_nearest(0xFE9C, 0x0347, 0xFFFF);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0226])) goto labelFunc04AD_005F;
	message("You see an old woman who gives you a smile of grandmotherly sweetness. You can see immediately that her vision is poor.");
	say();
	gflags[0x0226] = true;
	goto labelFunc04AD_0069;
labelFunc04AD_005F:
	message("\"Why, hello again, ");
	message(var0000);
	message(". It is so good to see thee!\" says Beverlea.");
	say();
labelFunc04AD_0069:
	converse attend labelFunc04AD_034C;
	case "name" attend labelFunc04AD_007F:
	message("\"My name is Beverlea.\"");
	say();
	UI_remove_answer("name");
labelFunc04AD_007F:
	case "job" attend labelFunc04AD_0098:
	message("\"Why, I run the House of Items here in Paws.\"");
	say();
	UI_add_answer(["House of Items", "Paws"]);
labelFunc04AD_0098:
	case "House of Items" attend labelFunc04AD_00B2:
	message("\"It is a shop that sells antiques and previously used items. Running this shop allows me to remain youthful and active. It is heartening to sell things to the poor people of this town that they might not otherwise be able to\tafford.\"");
	say();
	UI_remove_answer("House of Items");
	UI_add_answer("buy");
labelFunc04AD_00B2:
	case "Paws" attend labelFunc04AD_00C5:
	message("\"Here in Paws the people have very little money, but it matters not, because they care for each other.\"");
	say();
	UI_remove_answer("Paws");
labelFunc04AD_00C5:
	case "buy" attend labelFunc04AD_00F0:
	if (!(var0002 == 0x0007)) goto labelFunc04AD_00E5;
	message("\"There are many rare and fine things to be bought here in my shop. Bargains to be had nowhere else in all of Britannia.\"");
	say();
	UI_add_answer("many fine things");
	goto labelFunc04AD_00E9;
labelFunc04AD_00E5:
	message("\"My store is now closed. I am usually open in the afternoons.\"");
	say();
labelFunc04AD_00E9:
	UI_remove_answer("buy");
labelFunc04AD_00F0:
	case "many fine things" attend labelFunc04AD_011F:
	message("\"Let me see... There is a cradle for sale. A rocking horse. A bell. An hourglass. A spittoon. A lute. A sextant... Since I am moving a bit more slowly these days, I let my customers help themselves and take what they have bought. Providing they pay me first, of course. I do trust folks to pay me the correct amount. I am nearly blind, I am afraid.\"");
	say();
	UI_remove_answer("many fine things");
	UI_add_answer(["cradle", "rocking horse", "bell", "hourglass", "spittoon", "lute", "sextant"]);
labelFunc04AD_011F:
	case "cradle" attend labelFunc04AD_016A:
	message("\"That old cradle was the cradle used to rock Gorn the Barbarian to sleep at night when he was just a baby. Thou canst see that there is a crack in its side proving that even as a child Gorn was a strong little tyke. I can let thee take it for ten gold coins. Dost thou wish to buy the cradle?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04AD_015F;
	var0005 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04AD_0158;
	message("\"Thou mayest take it then. I hope that thou dost enjoy it.\"");
	say();
	goto labelFunc04AD_015C;
labelFunc04AD_0158:
	message("\"Thou dost not have enough gold!\"");
	say();
labelFunc04AD_015C:
	goto labelFunc04AD_0163;
labelFunc04AD_015F:
	message("A sour look flashes across Beverlea's face. \"Very well. Perhaps I may interest thee in something else.\"");
	say();
labelFunc04AD_0163:
	UI_remove_answer("cradle");
labelFunc04AD_016A:
	case "rocking horse" attend labelFunc04AD_01B5:
	message("\"This is the rocking horse that once belonged to a little girl from Britain named Diane. She grew to be one of the finest equestriennes to ever sit upon a horse. I could let thee have this rare and unusual piece for twelve gold. Dost thou wish to buy it?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04AD_01AA;
	var0007 = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc04AD_01A3;
	message("\"Then thou art free to take the rocking horse. It is thine!\"");
	say();
	goto labelFunc04AD_01A7;
labelFunc04AD_01A3:
	message("\"Thou dost not have enough money to pay for it!\"");
	say();
labelFunc04AD_01A7:
	goto labelFunc04AD_01AE;
labelFunc04AD_01AA:
	message("Beverlea rolls her eyes. \"In a browsing mood, are we? Take thy time.\"");
	say();
labelFunc04AD_01AE:
	UI_remove_answer("rocking horse");
labelFunc04AD_01B5:
	case "bell" attend labelFunc04AD_0200:
	message("\"That bell came from the High Court of Justice in Yew. It was rung to announce that court was in session. I can sell thee that interesting conversation piece for six gold coins.\tDost thou wish to buy it?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04AD_01F5;
	var0009 = UI_remove_party_items(0x0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04AD_01EE;
	message("\"Thou mayest take thy bell. Use it in good health!\"");
	say();
	goto labelFunc04AD_01F2;
labelFunc04AD_01EE:
	message("\"Thou dost not have enough money to buy it!\"");
	say();
labelFunc04AD_01F2:
	goto labelFunc04AD_01F9;
labelFunc04AD_01F5:
	message("\"Not in the mood for a bell today?\" She wrinkles her lips in the best attempt at a smile. \"Perhaps something else will strike thy fancy.\"");
	say();
labelFunc04AD_01F9:
	UI_remove_answer("bell");
labelFunc04AD_0200:
	case "hourglass" attend labelFunc04AD_025C:
	if (!var0003) goto labelFunc04AD_0251;
	message("\"I also have an antique hourglass. It was sold to me by this old man who was so daft that he could not recall how to use it! I will sell it to thee for five gold pieces. Dost thou wish to buy it?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04AD_024A;
	var000B = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000B) goto labelFunc04AD_0243;
	message("\"I thank thee. Thou mayest take thy glass.\"");
	say();
	gflags[0x0211] = true;
	goto labelFunc04AD_0247;
labelFunc04AD_0243:
	message("\"Thou dost not have enough money.\"");
	say();
labelFunc04AD_0247:
	goto labelFunc04AD_024E;
labelFunc04AD_024A:
	message("\"Thou art not interested in the hourglass?\" She sighs, \"Very well. Look around. I have all the time in the world.\" You catch just a hint of sarcasm in her voice.");
	say();
labelFunc04AD_024E:
	goto labelFunc04AD_0255;
labelFunc04AD_0251:
	message("\"Curse mine old head and failing memory! Has the hourglass already been sold?! No! It must have been stolen! One of the few dishonest people in this town must have taken it!\"");
	say();
labelFunc04AD_0255:
	UI_remove_answer("hourglass");
labelFunc04AD_025C:
	case "spittoon" attend labelFunc04AD_02A8:
	message("\"I also have an old spittoon. It was once used by... a great many people. Thou mayest have it for a gold piece. Take it! Please!\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc04AD_029D;
	var000D = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000D) goto labelFunc04AD_0295;
	message("\"I thank thee! Now thou canst go and please do not forget to take it with thee when thou dost leave!\"");
	say();
	goto labelFunc04AD_029A;
labelFunc04AD_0295:
	message("\"Thou dost not even have a single gold piece! Nor the decency to inform me that I was wasting my time in talking with thee.\"");
	say();
	abort;
labelFunc04AD_029A:
	goto labelFunc04AD_02A1;
labelFunc04AD_029D:
	message("\"I have many more things in my shop. Many things of high quality and great value as well. Please keep looking.\"");
	say();
labelFunc04AD_02A1:
	UI_remove_answer("spittoon");
labelFunc04AD_02A8:
	case "lute" attend labelFunc04AD_02F3:
	message("\"I have a lute for sale that once belonged to a travelling bard who lost it in a game of dice. I am asking twenty gold coins for it. A song! Wouldst thou like to buy it?\"");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc04AD_02E8;
	var000F = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000F) goto labelFunc04AD_02E1;
	message("\"I thank thee, kind customer. Thou mayest take thy lute. I can see that thou art a true artisan with an appreciation for quality.\"");
	say();
	goto labelFunc04AD_02E5;
labelFunc04AD_02E1:
	message("\"Thou canst not afford the lute!\"");
	say();
labelFunc04AD_02E5:
	goto labelFunc04AD_02EC;
labelFunc04AD_02E8:
	message("\"Very well, then. Do keep looking. After all, that is why my shop is here.\" You thought you could also hear Beverlea mutter to herself for a few moments after saying this, but you are not entirely certain.");
	say();
labelFunc04AD_02EC:
	UI_remove_answer("lute");
labelFunc04AD_02F3:
	case "sextant" attend labelFunc04AD_033E:
	message("\"I have a sextant that was sold by the world-famous shipwright Owen of Minoc. They are going to be building a monument to him, I understand. Anyway, the sailor who sold it to me had just suffered some harrowing experience out on the waters. He said when he sold it to me that he was going to retire. He obviously did not realize the value of this item. But I can let thee have it for twenty gold pieces. Dost thou wish to buy it?\"");
	say();
	var0010 = Func090A();
	if (!var0010) goto labelFunc04AD_0333;
	var0011 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0011) goto labelFunc04AD_032C;
	message("\"Thou mayest take thy sextant! And may thou always have smooth sailing!\"");
	say();
	goto labelFunc04AD_0330;
labelFunc04AD_032C:
	message("\"Thou dost not have enough money!\"");
	say();
labelFunc04AD_0330:
	goto labelFunc04AD_0337;
labelFunc04AD_0333:
	message("\"I am certain I have something that will interest thee. Browse to thine heart's content.\"");
	say();
labelFunc04AD_0337:
	UI_remove_answer("sextant");
labelFunc04AD_033E:
	case "bye" attend labelFunc04AD_0349:
	goto labelFunc04AD_034C;
labelFunc04AD_0349:
	goto labelFunc04AD_0069;
labelFunc04AD_034C:
	endconv;
	message("\"A good day to thee, ");
	message(var0000);
	message(".\" *");
	say();
labelFunc04AD_0357:
	if (!(event == 0x0000)) goto labelFunc04AD_03D7;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF53));
	if (!(var0002 == 0x0007)) goto labelFunc04AD_03D1;
	var0012 = UI_die_roll(0x0001, 0x0004);
	if (!(var0012 == 0x0001)) goto labelFunc04AD_0394;
	var0013 = "@Antiques?@";
labelFunc04AD_0394:
	if (!(var0012 == 0x0002)) goto labelFunc04AD_03A4;
	var0013 = "@Curios? Knick knacks?@";
labelFunc04AD_03A4:
	if (!(var0012 == 0x0003)) goto labelFunc04AD_03B4;
	var0013 = "@Trinkets? Antiques?@";
labelFunc04AD_03B4:
	if (!(var0012 == 0x0004)) goto labelFunc04AD_03C4;
	var0013 = "@Collectibles? Antiques?@";
labelFunc04AD_03C4:
	UI_item_say(0xFF53, var0013);
	goto labelFunc04AD_03D7;
labelFunc04AD_03D1:
	Func092E(0xFF53);
labelFunc04AD_03D7:
	return;
}


