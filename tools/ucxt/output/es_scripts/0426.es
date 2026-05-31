#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0899 0x899 ();
extern void Func092E 0x92E (var var0000);

void Func0426 object#(0x426) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0426_0223;
	UI_show_npc_face(0xFFDA, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFDA));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A7])) goto labelFunc0426_0056;
	message("You see a gleeful-looking merchant with an enthusiastic voice and manner.");
	say();
	gflags[0x00A7] = true;
	goto labelFunc0426_0060;
labelFunc0426_0056:
	message("\"Why, what can I do for thee, ");
	message(var0000);
	message("?\" asks Greg.");
	say();
labelFunc0426_0060:
	converse attend labelFunc0426_0218;
	case "name" attend labelFunc0426_0076:
	message("\"Why, my name is Greg. It is good to see thee.\"");
	say();
	UI_remove_answer("name");
labelFunc0426_0076:
	case "job" attend labelFunc0426_0092:
	message("\"Why, I run the Provisioner's Shop here in Britain. A second home to the intrepid, it is.\"");
	say();
	UI_add_answer(["Provisioner's Shop", "Britain", "buy"]);
labelFunc0426_0092:
	case "Provisioner's Shop" attend labelFunc0426_00AC:
	message("\"Why, thou dost look to be a person to whom adventure is no stranger. Whether thou art climbing a mountain, sailing the ocean, crossing a desert, exploring a dungeon or sleeping under the stars I have just what thou mayest need.\"");
	say();
	UI_remove_answer("Provisioner's Shop");
	UI_add_answer("need");
labelFunc0426_00AC:
	case "Britain" attend labelFunc0426_00CC:
	message("\"I have moved my store here as a service to Lord British, who uses me exclusively to outfit all of his various expeditions. It is true!\"");
	say();
	UI_remove_answer("Britain");
	UI_add_answer(["moved", "Lord British"]);
labelFunc0426_00CC:
	case "moved" attend labelFunc0426_00DF:
	message("\"I used to have my shop in Paws. But no one in Paws has the money to buy much of anything.\"");
	say();
	UI_remove_answer("moved");
labelFunc0426_00DF:
	case "need" attend labelFunc0426_00FF:
	message("\"What every adventurer needs is good luck! There is just something about this shop, about the items bought here, something about me and my shop that is simply very lucky. I can give thee an example of what I mean.\"");
	say();
	UI_remove_answer("need");
	UI_add_answer(["lucky", "example"]);
labelFunc0426_00FF:
	case "example" attend labelFunc0426_011F:
	message("\"A fighting man named Gorn once bought a shovel from me and he told me that it saved his life.\"");
	say();
	UI_add_answer(["Gorn", "saved his life"]);
	UI_remove_answer("example");
labelFunc0426_011F:
	case "Gorn" attend labelFunc0426_0132:
	message("\"Perhaps thou knowest of Gorn. He speaks with a most peculiar accent!\"");
	say();
	UI_remove_answer("Gorn");
labelFunc0426_0132:
	case "saved his life" attend labelFunc0426_0145:
	message("\"Gorn wanted to dig for some buried treasure somewhere, when he heard some noises behind him. Upon turning, he was horrified to see a swarm of undead skeletons rushing toward him! In his haste to dig up the treasure, he had unbuckled his belt and laid down his sword. The only thing in his hands was the shovel. He immediately began swinging it and ended up knocking all the skeletons to bits! He now considers it his 'lucky shovel'!\"");
	say();
	UI_remove_answer("saved his life");
labelFunc0426_0145:
	case "Lord British" attend labelFunc0426_0196:
	message("\"This is Lord British's favorite provisionary shop. He told me so himself. All sorts of famous adventurers pass through these doors. Why, just last week, we had the Avatar himself in this, my very own store!\"");
	say();
	var0004 = Func0931(0xFE9C, 0x0001, 0x0346, 0xFE99, 0xFE99);
	if (!var0004) goto labelFunc0426_0177;
	message("\"Why, now that I mention it, he was dressed a lot like thou art. Yes, he was.\"");
	say();
	UI_add_answer("dressed like Avatar");
labelFunc0426_0177:
	if (!var0003) goto labelFunc0426_0188;
	message("\"Why, I seem to remember that Avatar was also wearing a Fellowship medallion like the one thou dost possess. Hmmmm. And he nearly robbed me blind. I shall have to keep a careful eye on thee, I will.\"");
	say();
	UI_add_answer("robbed you blind?");
labelFunc0426_0188:
	UI_add_answer("another Avatar?");
	UI_remove_answer("Lord British");
labelFunc0426_0196:
	case "another Avatar?" attend labelFunc0426_01A9:
	message("\"Well, he said he was the Avatar. But then it is not all that unusual encountering some loon or fool who claims to be the Avatar!\" He looks at you and for a moment appears a little embarrassed.");
	say();
	UI_remove_answer("another Avatar?");
labelFunc0426_01A9:
	case "dressed like Avatar" attend labelFunc0426_01BC:
	message("\"He was dressed like the Avatar, similarly to how thou art presently attired. At first I thought it was Jesse, the actor who is playing the Avatar in the play by that director... What is his name again?~~\"Oh, well. It was not him.\"");
	say();
	UI_remove_answer("dressed like Avatar");
labelFunc0426_01BC:
	case "robbed you blind?" attend labelFunc0426_01CF:
	message("\"Thou wouldst think that one who appears to be like the Avatar would be worthy of trust. But, no. In this day and age there is no telling what to expect!\"");
	say();
	UI_remove_answer("robbed you blind?");
labelFunc0426_01CF:
	case "lucky" attend labelFunc0426_01E2:
	message("\"My customers are all people who go out and perform dangerous feats of bravery and derring-do. But most keep returning to buy more provisions time and again. With all the dangerous things my customers do, it is a wonder I have not lost them all and gone out of business!\"");
	say();
	UI_remove_answer("lucky");
labelFunc0426_01E2:
	case "buy" attend labelFunc0426_020A:
	if (!(!(var0002 == 0x0007))) goto labelFunc0426_01FC;
	message("\"I am dreadfully sorry but the Provisioner's Shop is currently closed. Do return at noon when it shall be open once again.\"");
	say();
	goto labelFunc0426_0203;
labelFunc0426_01FC:
	message("\"As I say, we have everything thou dost need to have a jolly splendid adventure!\"");
	say();
	Func0899();
labelFunc0426_0203:
	UI_remove_answer("buy");
labelFunc0426_020A:
	case "bye" attend labelFunc0426_0215:
	goto labelFunc0426_0218;
labelFunc0426_0215:
	goto labelFunc0426_0060;
labelFunc0426_0218:
	endconv;
	message("\"Good day to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0426_0223:
	if (!(event == 0x0000)) goto labelFunc0426_02AA;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFDA));
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0426_02A4;
	if (!(var0005 == 0x0001)) goto labelFunc0426_0267;
	var0006 = "@Provisions here!@";
labelFunc0426_0267:
	if (!(var0005 == 0x0002)) goto labelFunc0426_0277;
	var0006 = "@Step right in!@";
labelFunc0426_0277:
	if (!(var0005 == 0x0003)) goto labelFunc0426_0287;
	var0006 = "@Thou art welcome!@";
labelFunc0426_0287:
	if (!(var0005 == 0x0004)) goto labelFunc0426_0297;
	var0006 = "@Fine goods here!@";
labelFunc0426_0297:
	UI_item_say(0xFFDA, var0006);
	goto labelFunc0426_02AA;
labelFunc0426_02A4:
	Func092E(0xFFDA);
labelFunc0426_02AA:
	return;
}


