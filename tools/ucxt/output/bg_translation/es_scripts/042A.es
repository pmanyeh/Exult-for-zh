#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func042A object#(0x42A) ()
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

	if (!(event == 0x0001)) goto labelFunc042A_0302;
	UI_show_npc_face(0xFFD6, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00DC]) goto labelFunc042A_003C;
	UI_add_answer("exchange");
labelFunc042A_003C:
	if (!gflags[0x00AF]) goto labelFunc042A_0049;
	UI_add_answer("James");
labelFunc042A_0049:
	if (!(!gflags[0x00AB])) goto labelFunc042A_005B;
	message("You see a helpful and efficient-looking woman.");
	say();
	gflags[0x00AB] = true;
	goto labelFunc042A_005F;
labelFunc042A_005B:
	message("\"How may I help thee?\" asks Cynthia.");
	say();
labelFunc042A_005F:
	converse attend labelFunc042A_02F7;
	case "name" attend labelFunc042A_0075:
	message("\"My name is Cynthia.\"");
	say();
	UI_remove_answer("name");
labelFunc042A_0075:
	case "job" attend labelFunc042A_008E:
	message("\"I am the teller at the Mint. I am also a member of the Britannian Tax Council.\"");
	say();
	UI_add_answer(["Mint", "Britannian Tax Council"]);
labelFunc042A_008E:
	case "Mint" attend labelFunc042A_00BD:
	message("\"Here at the Mint we store gold, oversee production of coins and keep an accurate count of how much money the kingdom has available for such things as farming, building the roads, developing sources of fresh water, seeing to the health of the citizenry, maintaining the estates of nobles, raising the guard militia and carrying out the decrees of Lord British.\"");
	say();
	UI_remove_answer("Mint");
	UI_add_answer(["money", "farms", "roads", "water", "health", "estates", "guards"]);
labelFunc042A_00BD:
	case "Britannian Tax Council" attend labelFunc042A_00F5:
	message("\"The Britannian Tax Council is in charge of the accounting, assessment and collection of the taxes. If thou wilt be earning any money here in Britannia thou wilt need to take this paper.\"");
	say();
	var0002 = UI_add_party_items(0x0001, 0x031D, 0x000C, 0xFE99, true);
	if (!var0002) goto labelFunc042A_00EA;
	message("\"Fill it out and return it here at the end of the year when thou dost come back to pay thy taxes.\"");
	say();
	goto labelFunc042A_00EE;
labelFunc042A_00EA:
	message("\"Thou art carrying too much. Come back and I will give thee thy paper when thou art not so greatly encumbered.\"");
	say();
labelFunc042A_00EE:
	UI_remove_answer("Britannian Tax Council");
labelFunc042A_00F5:
	case "money" attend labelFunc042A_0119:
	message("\"In order to keep the standard of money constant, we also operate as an exchange for those who possess quantities of gold.~~We supply the equivalent value of their gold in spendable coin of the realm and then transform the gold we receive into more money. So, as thou canst see, it is a very efficient system.\"");
	say();
	gflags[0x00DC] = true;
	UI_remove_answer("money");
	UI_add_answer(["exchange", "system"]);
labelFunc042A_0119:
	case "farms" attend labelFunc042A_012C:
	message("\"As I am certain thou dost know, the seven year drought, which thankfully ended several years ago, has left much of the farming in the Kingdom in disarray. That is why the cost of food is so expensive. But without the support of the Royal Treasury, the prices would be even higher.\"");
	say();
	UI_remove_answer("farms");
labelFunc042A_012C:
	case "roads" attend labelFunc042A_013F:
	message("\"The increased use of wagons has caused many of the roads throughout Britannia to rapidly deteriorate. It costs a lot of money to build new roads and keep them all repaired.\"");
	say();
	UI_remove_answer("roads");
labelFunc042A_013F:
	case "water" attend labelFunc042A_0152:
	message("\"It is of the utmost importance to the Kingdom to insure its populous a clean water supply, and that requires a regular supply of new and fresh wells.\"");
	say();
	UI_remove_answer("water");
labelFunc042A_0152:
	case "health" attend labelFunc042A_0165:
	message("\"As Britannia's population has greatly increased in the last two hundred years, so has the risk of infectious diseases, such as the mysterious skin deterioration that afflicts those who partake in the venom of the silver serpent. The number of healers that the Kingdom needs has risen dramatically.\"");
	say();
	UI_remove_answer("health");
labelFunc042A_0165:
	case "estates" attend labelFunc042A_0178:
	message("\"The local Lords and Mayors all have residences that are maintained through the auspices of the Kingdom.\"");
	say();
	UI_remove_answer("estates");
labelFunc042A_0178:
	case "guards" attend labelFunc042A_018B:
	message("\"The military training is conducted at Serpent's Hold, where the guards that protect all of the towns and cities of Britannia are instructed. 'Tis funded by the Royal Treasury.\"");
	say();
	UI_remove_answer("guards");
labelFunc042A_018B:
	case "system" attend labelFunc042A_019E:
	message("\"It not only applies to gold but it also applies to all minerals. We oversee the sale and rate of exchange for precious ores extracted by the Britannian Mining Company. But we do not handle the sale of gems. There is a jeweler in town who handles that.\"");
	say();
	UI_remove_answer("system");
labelFunc042A_019E:
	case "exchange" attend labelFunc042A_02D2:
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFD6));
	if (!(var0003 == 0x001E)) goto labelFunc042A_02C7;
	message("\"Dost thou have some gold that thou wouldst like to exchange?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc042A_02C0;
	var0005 = Func0931(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99);
	if (!(var0005 || var0006)) goto labelFunc042A_0209;
	var0007 = true;
	goto labelFunc042A_020D;
labelFunc042A_0209:
	var0007 = false;
labelFunc042A_020D:
	if (!(!var0007)) goto labelFunc042A_021B;
	message("\"I can see thou hast no nuggets or bars of gold. Whatever gold thou mayest possess is already the coin of the realm. I cannot help thee anymore than that.\"");
	say();
	goto labelFunc042A_02BD;
labelFunc042A_021B:
	message("\"We can exchange thy gold nuggets and bars into spendable coin for thee. I will give thee ten gold coins for each gold nugget and one-hundred gold coins for each gold bar.\"");
	say();
	var0008 = UI_count_objects(0xFE9B, 0x0285, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x0286, 0xFE99, 0xFE99);
	var000A = (0x000A * var0008);
	var000B = (0x0064 * var0009);
	var000C = (var000A + var000B);
	var000D = UI_add_party_items(var000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var000D)) goto labelFunc042A_0285;
	message("\"Oh, my. Thou canst not possibly carry that many gold coins. Thou must return when thou dost have more space in thy pack.\"");
	say();
	goto labelFunc042A_02BD;
labelFunc042A_0285:
	var000E = UI_remove_party_items(var0008, 0x0285, 0xFE99, 0xFE99, true);
	var000F = UI_remove_party_items(var0009, 0x0286, 0xFE99, 0xFE99, true);
	message("\"And here are ");
	message(var000C);
	message(" gold coins for thee in return, ");
	message(var0000);
	message(". I thank thee for thy business.\"");
	say();
labelFunc042A_02BD:
	goto labelFunc042A_02C4;
labelFunc042A_02C0:
	message("\"Very well. Mayhaps another time.\"");
	say();
labelFunc042A_02C4:
	goto labelFunc042A_02CB;
labelFunc042A_02C7:
	message("\"Please come to The Mint during regular daytime hours.\"");
	say();
labelFunc042A_02CB:
	UI_remove_answer("exchange");
labelFunc042A_02D2:
	case "James" attend labelFunc042A_02E9:
	message("\"James is mine husband and I am very worried about him. I know he is feeling very unhappy lately and he dislikes his job. If thou dost speak to him please tell him that even though we have not been speaking very much lately, that I am still thinking of him and that I still care about him.\"");
	say();
	UI_remove_answer("James");
	gflags[0x0092] = true;
labelFunc042A_02E9:
	case "bye" attend labelFunc042A_02F4:
	goto labelFunc042A_02F7;
labelFunc042A_02F4:
	goto labelFunc042A_005F;
labelFunc042A_02F7:
	endconv;
	message("\"Good day, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc042A_0302:
	if (!(event == 0x0000)) goto labelFunc042A_0310;
	Func092E(0xFFD6);
labelFunc042A_0310:
	return;
}


