#game "serpentisle"
var Func098C 0x98C ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = false;
labelFunc098C_0004:
	var0001 = false;
	var0002 = 0x0000;
labelFunc098C_000E:
	if (!(var0002 < 0x0003)) goto labelFunc098C_03C4;
	var0002 = (var0002 + 0x0001);
	var0003 = false;
labelFunc098C_0026:
	if (!(!var0003)) goto labelFunc098C_03C1;
	var0004 = UI_die_roll(0x0001, 0x000F);
	if (!((var0004 == 0x0001) && (!gflags[0x001A]))) goto labelFunc098C_0076;
	gflags[0x001A] = true;
	var0003 = true;
	message("\"According to Erstam's book, how many spells are available in the Ninth Circle of Magic?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0008)) goto labelFunc098C_0076;
	var0001 = true;
labelFunc098C_0076:
	if (!((var0004 == 0x0002) && (!gflags[0x001B]))) goto labelFunc098C_00B2;
	gflags[0x001B] = true;
	var0003 = true;
	message("\"How many different materials can armour be made from?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0004)) goto labelFunc098C_00B2;
	var0001 = true;
labelFunc098C_00B2:
	if (!((var0004 == 0x0003) && (!gflags[0x001C]))) goto labelFunc098C_00EE;
	gflags[0x001C] = true;
	var0003 = true;
	message("\"How many beasts are discussed in the Bestiary in Erstam's book?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0034)) goto labelFunc098C_00EE;
	var0001 = true;
labelFunc098C_00EE:
	if (!((var0004 == 0x0004) && (!gflags[0x001D]))) goto labelFunc098C_012A;
	gflags[0x001D] = true;
	var0003 = true;
	message("\"How many different types of Reagents doth Erstam write about?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x000B)) goto labelFunc098C_012A;
	var0001 = true;
labelFunc098C_012A:
	if (!((var0004 == 0x0005) && (!gflags[0x001E]))) goto labelFunc098C_0166;
	gflags[0x001E] = true;
	var0003 = true;
	message("\"How many reagents are required to cast the @Mass Death@ spell?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0006)) goto labelFunc098C_0166;
	var0001 = true;
labelFunc098C_0166:
	if (!((var0004 == 0x0006) && (!gflags[0x001F]))) goto labelFunc098C_01A2;
	gflags[0x001F] = true;
	var0003 = true;
	message("\"How many times must ginseng be boiled before it becomes syrup?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0028)) goto labelFunc098C_01A2;
	var0001 = true;
labelFunc098C_01A2:
	if (!((var0004 == 0x0007) && (!gflags[0x0020]))) goto labelFunc098C_01DE;
	gflags[0x0020] = true;
	var0003 = true;
	message("\"In what Circle of Magic doth the Create Automata spell appear?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0006)) goto labelFunc098C_01DE;
	var0001 = true;
labelFunc098C_01DE:
	if (!((var0004 == 0x0008) && (!gflags[0x0021]))) goto labelFunc098C_021A;
	gflags[0x0021] = true;
	var0003 = true;
	message("\"For how many reasons did Erstam put down the history of the land in writing?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0001)) goto labelFunc098C_021A;
	var0001 = true;
labelFunc098C_021A:
	if (!((var0004 == 0x0009) && (!gflags[0x0022]))) goto labelFunc098C_0256;
	gflags[0x0022] = true;
	var0003 = true;
	message("\"How many characters are there in Ophidian writing?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0024)) goto labelFunc098C_0256;
	var0001 = true;
labelFunc098C_0256:
	if (!((var0004 == 0x000A) && (!gflags[0x0023]))) goto labelFunc098C_0292;
	gflags[0x0023] = true;
	var0003 = true;
	message("\"In Erstam's book, the section entitled @Other Landmarks@ covers how many areas?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0004)) goto labelFunc098C_0292;
	var0001 = true;
labelFunc098C_0292:
	if (!((var0004 == 0x000B) && (!gflags[0x0024]))) goto labelFunc098C_02CE;
	gflags[0x0024] = true;
	var0003 = true;
	message("\"How many cities were established in the Serpent Isle?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0003)) goto labelFunc098C_02CE;
	var0001 = true;
labelFunc098C_02CE:
	if (!((var0004 == 0x000C) && (!gflags[0x0025]))) goto labelFunc098C_030A;
	gflags[0x0025] = true;
	var0003 = true;
	message("\"How many forces, when combined, form the Principles of Balance?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0006)) goto labelFunc098C_030A;
	var0001 = true;
labelFunc098C_030A:
	if (!((var0004 == 0x000D) && (!gflags[0x0026]))) goto labelFunc098C_0346;
	gflags[0x0026] = true;
	var0003 = true;
	message("\"How many clans divide the city of Monitor?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0003)) goto labelFunc098C_0346;
	var0001 = true;
labelFunc098C_0346:
	if (!((var0004 == 0x000E) && (!gflags[0x0027]))) goto labelFunc098C_0382;
	gflags[0x0027] = true;
	var0003 = true;
	message("\"How many types of weapons are discussed in Erstam's book?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x0004)) goto labelFunc098C_0382;
	var0001 = true;
labelFunc098C_0382:
	if (!((var0004 == 0x000F) && (!gflags[0x0028]))) goto labelFunc098C_03BE;
	gflags[0x0028] = true;
	var0003 = true;
	message("\"How many Words of Power are there?\"");
	say();
	var0005 = UI_input_numeric_value(0x0001, 0x0046, 0x0001, 0x0023);
	if (!(var0005 != 0x001B)) goto labelFunc098C_03BE;
	var0001 = true;
labelFunc098C_03BE:
	goto labelFunc098C_0026;
labelFunc098C_03C1:
	goto labelFunc098C_000E;
labelFunc098C_03C4:
	if (!(var0000 && var0001)) goto labelFunc098C_03DA;
	UI_set_item_flag(0xFE9C, 0x0019);
	return false;
labelFunc098C_03DA:
	if (!var0001) goto labelFunc098C_03EE;
	message("\"I am not yet convinced...\"");
	say();
	var0000 = true;
	goto labelFunc098C_0004;
	goto labelFunc098C_03F0;
labelFunc098C_03EE:
	return true;
labelFunc098C_03F0:
	return 0;
}


