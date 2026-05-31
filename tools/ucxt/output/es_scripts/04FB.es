#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04FB object#(0x4FB) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04FB_02EC;
	UI_show_npc_face(0xFF05, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0000 == 0x0007)) goto labelFunc04FB_0048;
	message("Danag nods his head at you. \"I do not mean to be impolite, but I am concentrating on the games. I wish to win a bundle tonight!\"");
	say();
	message("He rubs his hand with glee.*");
	say();
	abort;
labelFunc04FB_0048:
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04FB_0069;
	UI_add_answer("Hook");
labelFunc04FB_0069:
	if (!gflags[0x0264]) goto labelFunc04FB_0076;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04FB_0076:
	if (!(!gflags[0x02A9])) goto labelFunc04FB_00A8;
	message("You see a jovial man with a wide smile. It is obvious he is enjoying his life.");
	say();
	if (!var0001) goto labelFunc04FB_008F;
	message("He notices your medallion.");
	say();
	message("\"Fellow member! How art thee! I hope thy journey to Buccaneer's Den was not too troublesome! Welcome to our island!\"");
	say();
labelFunc04FB_008F:
	if (!var0002) goto labelFunc04FB_00A1;
	message("The Cube vibrates.");
	say();
	message("\"And I recognize thee as the Avatar! I know that thou art condemned to die!\"");
	say();
	message("Danag smiles as if he had just said that you had been invited to dine with the king.");
	say();
labelFunc04FB_00A1:
	gflags[0x02A9] = true;
	goto labelFunc04FB_00AC;
labelFunc04FB_00A8:
	message("\"Hello, there!\" Danag says.");
	say();
labelFunc04FB_00AC:
	converse attend labelFunc04FB_02E7;
	case "name" attend labelFunc04FB_00C2:
	message("\"I am Danag, my friend.\" The man overdoes a majestic bow.");
	say();
	UI_remove_answer("name");
labelFunc04FB_00C2:
	case "job" attend labelFunc04FB_00DB:
	message("\"I am interim Fellowship Branch leader here on Buccaneer's Den. Our regular leader, Abraham, is away on Fellowship business at the moment.\"");
	say();
	UI_add_answer(["Fellowship", "Abraham"]);
labelFunc04FB_00DB:
	case "Fellowship" attend labelFunc04FB_00F5:
	message("\"The Fellowship has been present on Buccaneer's Den for a long time. This is one of the oldest branches in Britannia, second only to the headquarters in Britain. Thou mayest wonder why an island of such ill-repute would attract The Fellowship.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer("wonder");
labelFunc04FB_00F5:
	case "wonder" attend labelFunc04FB_0124:
	message("\"The founders of The Fellowship felt that the people who inhabit this island would benefit the most from our organization.");
	say();
	if (!var0002) goto labelFunc04FB_0112;
	message("\"Especially since we would help them build an empire of sin and gluttony out of Buccaneer's Den.\"");
	say();
	message("You notice the Cube has been vibrating while Danag was speaking.");
	say();
	goto labelFunc04FB_0116;
labelFunc04FB_0112:
	message("\"Amidst all of the sin, the debauchery, the piracy, the gambling, the drunkenness -- The Fellowship has made its stand and recruited members to follow our principles. Buccaneer's Den has changed as a result.\"");
	say();
labelFunc04FB_0116:
	UI_remove_answer("wonder");
	UI_add_answer("Buccaneer's Den");
labelFunc04FB_0124:
	case "Buccaneer's Den" attend labelFunc04FB_015D:
	message("\"Long ago it was merely a hideout for pirates, scavengers, and rogues. Look around.");
	say();
	if (!var0002) goto labelFunc04FB_0141;
	message("\"Now it is the center of corruption in all of Britannia. The pirates are all controlled by The Fellowship.\"");
	say();
	message("The Cube continues to vibrate.");
	say();
	goto labelFunc04FB_0145;
labelFunc04FB_0141:
	message("\"Now Buccaneer's Den is an island paradise. It has its own commerce. It pays taxes to Lord British. The pirates here are now businessmen. They have made something of their lives.");
	say();
labelFunc04FB_0145:
	message("\"As a result, The Baths and The House of Games are two of the most profitable establishments in the country.\"");
	say();
	UI_remove_answer("Buccaneer's Den");
	UI_add_answer(["The Baths", "House of Games"]);
labelFunc04FB_015D:
	case "The Baths" attend labelFunc04FB_0181:
	if (!var0002) goto labelFunc04FB_0172;
	message("\"It is, of course, a place where one may experience the pleasures of the flesh. All of the profits go to The Fellowship.");
	say();
	goto labelFunc04FB_0176;
labelFunc04FB_0172:
	message("\"It is a purely innocent business which caters to the weary who are in need of relaxation. One may receive physical and mental cleansing there.");
	say();
labelFunc04FB_0176:
	message("\"It is truly a jewel in the crown that is Britannia.\"");
	say();
	UI_remove_answer("The Baths");
labelFunc04FB_0181:
	case "House of Games" attend labelFunc04FB_01A1:
	if (!var0002) goto labelFunc04FB_0196;
	message("\"Why, it is a gambling parlor! The Fellowship certainly takes in a bundle from that place!\"");
	say();
	goto labelFunc04FB_019A;
labelFunc04FB_0196:
	message("\"It is an outfit which challenges the mind and its ability for assessing strategy in life. Exercising this aspect of one's brain is important for one's self-esteem and well-being.\"");
	say();
labelFunc04FB_019A:
	UI_remove_answer("House of Games");
labelFunc04FB_01A1:
	case "Abraham" attend labelFunc04FB_01C9:
	message("\"Abraham is one of the members of the inner circle of The Fellowship. He and his colleague Elizabeth travel the country periodically, usually distributing or collecting the organization's funds and doing business at the other branches.\"");
	say();
	if (!var0002) goto labelFunc04FB_01BB;
	message("The Cube vibrates.");
	say();
	message("\"Uhm... er... he is also a coordinator for executions and he cheats at cards.\"");
	say();
labelFunc04FB_01BB:
	UI_remove_answer("Abraham");
	UI_add_answer("Elizabeth");
labelFunc04FB_01C9:
	case "Elizabeth" attend labelFunc04FB_01ED:
	message("\"Elizabeth is an extremely intelligent woman who acts as Director of Special Projects. She usually works with Batlin in Britain, but she spends most of her time travelling from branch to branch.\"");
	say();
	if (!var0002) goto labelFunc04FB_01DF;
	message("As the Cube vibrates, Danag adds, \"She is, uhm... also a royal she-bitch and will murder thee at a moment's notice.\"");
	say();
labelFunc04FB_01DF:
	UI_remove_answer("Elizabeth");
	UI_add_answer("Special Projects");
labelFunc04FB_01ED:
	case "Special Projects" attend labelFunc04FB_0217:
	message("\"They might be anything from building a shelter for poor peasants to creating a new branch in a town without the benefit of a Fellowship Hall.\"");
	say();
	if (!var0002) goto labelFunc04FB_0210;
	message("As the Cube vibrates, Danag proudly adds, \"Our current Special Project is building the Black Gate for The Guardian. It is located at the Isle of the Avatar in our secret underground complex!\"");
	say();
	UI_add_answer(["Black Gate", "complex"]);
labelFunc04FB_0210:
	UI_remove_answer("Special Projects");
labelFunc04FB_0217:
	case "Black Gate" attend labelFunc04FB_022A:
	message("Danag's eyes widen with excitement. \"It is the gateway for our coming Lord and Master! He will be coming through in virtually a few hours!\"");
	say();
	UI_remove_answer("Black Gate");
labelFunc04FB_022A:
	case "complex" attend labelFunc04FB_0244:
	message("\"It is inside a dungeon within the Shrine of the Codex. A barrier keeps out unwanted visitors. A special key opens the barrier, and only a few select people have one.\"");
	say();
	UI_remove_answer("complex");
	UI_add_answer("key");
labelFunc04FB_0244:
	case "key" attend labelFunc04FB_0257:
	message("\"I do not own one. The only people that do are Elizabeth and Abraham, Batlin, and Hook himself. Hook probably keeps his key in his abode.\"");
	say();
	UI_remove_answer("key");
labelFunc04FB_0257:
	case "Hook" attend labelFunc04FB_028E:
	if (!var0002) goto labelFunc04FB_0283;
	message("The Cube vibrates.");
	say();
	message("\"Man with a Hook? That's his name! 'Hook'! He lives here on the island! In fact, his quarters are in the secret catacombs behind the House of Games! Thou canst reach it by asking Sintag the guard about Hook. Of course, thou dost know that Hook is The Fellowship's chief executioner... along with his assistant, the gargoyle Forskis.\"");
	say();
	UI_add_answer(["executioner", "Forskis"]);
	Func0911(0x0064);
	goto labelFunc04FB_0287;
labelFunc04FB_0283:
	message("\"A pirate with a hook for a hand? No... I do not believe I know him. There are many pirates on this island. Many of them are missing appendages, too!\"");
	say();
labelFunc04FB_0287:
	UI_remove_answer("Hook");
labelFunc04FB_028E:
	case "Elizabeth and Abraham" attend labelFunc04FB_02B3:
	message("\"They usually travel together. They just arrived from our Meditation Retreat near Serpent's Hold and I believe they are somewhere on the island. Abraham told me I must keep working as interim branch leader until his return.\"");
	say();
	gflags[0x02A8] = true;
	if (!var0002) goto labelFunc04FB_02AC;
	message("The Cube vibrates.");
	say();
	message("\"Actually, I believe they are on their way to the Isle of the Avatar to take care of our new Special Project.\"");
	say();
labelFunc04FB_02AC:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04FB_02B3:
	case "executioner" attend labelFunc04FB_02C6:
	message("\"That's right. Hook does all the dirty work for The Fellowship. He was trained by Master De Snel in Jhelom. De Snel trained all the previous executioners as well. In fact, De Snel himself was The Fellowship's first executioner!\"");
	say();
	UI_remove_answer("executioner");
labelFunc04FB_02C6:
	case "Forskis" attend labelFunc04FB_02D9:
	message("\"I understand the gargoyle's name means 'henchman' in Gargish. He's a tough wingless gargoyle who helps Hook out. I believe he resides in the catacombs with Hook.\"");
	say();
	UI_remove_answer("Forskis");
labelFunc04FB_02D9:
	case "bye" attend labelFunc04FB_02E4:
	goto labelFunc04FB_02E7;
labelFunc04FB_02E4:
	goto labelFunc04FB_00AC;
labelFunc04FB_02E7:
	endconv;
	message("\"Farewell!\"*");
	say();
labelFunc04FB_02EC:
	if (!(event == 0x0000)) goto labelFunc04FB_02FA;
	Func092E(0xFF05);
labelFunc04FB_02FA:
	return;
}


