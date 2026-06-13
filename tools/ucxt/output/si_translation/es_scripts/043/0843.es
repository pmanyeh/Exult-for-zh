#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0843 0x843 ()
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
	var var0014;
	var var0015;

	var0000 = Func0954();
	var0001 = "Milord";
	if (!UI_is_pc_female()) goto labelFunc0843_0019;
	var0001 = "Milady";
labelFunc0843_0019:
	UI_push_answers();
	var0002 = true;
	var0003 = 0x03B7;
	message("\"I will buy leather goods from thee, if thou dost have any.\"");
	say();
labelFunc0843_002B:
	if (!var0002) goto labelFunc0843_05F3;
	var0004 = UI_count_objects(0xFE9B, 0x0239, 0xFE99, 0xFE99);
	var0005 = UI_count_objects(0xFE9B, 0x0243, 0xFE99, 0x0000);
	var0006 = UI_count_objects(0xFE9B, 0x024B, 0xFE99, 0x0000);
	var0007 = UI_count_objects(0xFE9B, 0x03EC, 0xFE99, 0x0000);
	var0008 = UI_count_objects(0xFE9B, 0x023E, 0xFE99, 0x0000);
	var0009 = ["nothing"];
	var000A = false;
	var000B = 0xFE99;
	if (!var0004) goto labelFunc0843_00B7;
	var0009 = (var0009 & "leather armour");
	var000A = true;
labelFunc0843_00B7:
	if (!var0005) goto labelFunc0843_00CB;
	var0009 = (var0009 & "leather gloves");
	var000A = true;
labelFunc0843_00CB:
	if (!var0006) goto labelFunc0843_00DF;
	var0009 = (var0009 & "leather boots");
	var000A = true;
labelFunc0843_00DF:
	if (!var0007) goto labelFunc0843_00F3;
	var0009 = (var0009 & "leather helm");
	var000A = true;
labelFunc0843_00F3:
	if (!var0008) goto labelFunc0843_0107;
	var0009 = (var0009 & "leather leggings");
	var000A = true;
labelFunc0843_0107:
	if (!(var000A == true)) goto labelFunc0843_05E8;
	message("\"What dost thou care to sell, ");
	message(var0000);
	message("?\"");
	say();
	var000C = Func0956(var0009);
	if (!(var000C == "nothing")) goto labelFunc0843_0137;
	message("\"Perhaps later.\"");
	say();
	var0002 = false;
	goto labelFunc0843_05E5;
labelFunc0843_0137:
	var000D = UI_die_roll(0x0001, 0x0005);
	if (!(var000D == 0x0001)) goto labelFunc0843_0154;
	var000E = "Take it or leave it!";
labelFunc0843_0154:
	if (!(var000D == 0x0002)) goto labelFunc0843_0164;
	var000E = "Wilt thou sell at my price?";
labelFunc0843_0164:
	if (!(var000D == 0x0003)) goto labelFunc0843_0174;
	var000E = "Dost thou find my price agreeable?";
labelFunc0843_0174:
	if (!(var000D == 0x0004)) goto labelFunc0843_0184;
	var000E = "What dost thou think?";
labelFunc0843_0184:
	if (!(var000D == 0x0005)) goto labelFunc0843_0198;
	var000E = (var0001 + ", is the price acceptable?");
labelFunc0843_0198:
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0843_01BB;
	var0010 = "I am not certain...";
	var0011 = "Hmmm... they are certainly shoddy!";
labelFunc0843_01BB:
	if (!(var000F == 0x0002)) goto labelFunc0843_01D1;
	var0010 = "It doth have mold on it!";
	var0011 = "They are moldy! Where didst thou dig these up?!";
labelFunc0843_01D1:
	if (!(var000F == 0x0003)) goto labelFunc0843_01E7;
	var0010 = "'Tis falling apart!";
	var0011 = "Harrumph! They are falling to pieces!";
labelFunc0843_01E7:
	if (!(var000F == 0x0004)) goto labelFunc0843_0209;
	var0010 = (var0001 + (", is this what thou wishest to sell?" * "'Tis not in very good shape!"));
	var0011 = (var0001 + ", these goods are in horrible condition!");
labelFunc0843_0209:
	if (!(var000F == 0x0005)) goto labelFunc0843_021F;
	var0010 = "Didst thou take this from the body of a Goblin?";
	var0011 = "I would wager thou didst find these on dead Goblins?";
labelFunc0843_021F:
	if (!(var000C == "leather armour")) goto labelFunc0843_02D5;
	var0012 = 0x0239;
	var0013 = 0x000F;
	if (!(var0004 > 0x0001)) goto labelFunc0843_02B1;
	message("\"How many suits of leather armour wouldst thou care to part with?\"");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0004, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_0263;
	goto labelFunc0843_02B1;
labelFunc0843_0263:
	var0013 = (0x000F * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_0284;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_0284:
	message("\"");
	message(var0011);
	message("\"");
	say();
	message("\"For thee, ");
	message(var0000);
	message(", I can give ");
	message(var0013);
	message(" monetari for the ");
	message(var0014);
	message(" suits of leather armour.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	goto labelFunc0843_02D5;
labelFunc0843_02B1:
	message("\"");
	message(var0010);
	message("\"");
	say();
	message("\"Very well, I will buy thy leather armour from thee for ");
	message(var0013);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	var0014 = 0x0001;
labelFunc0843_02D5:
	if (!(var000C == "leather gloves")) goto labelFunc0843_0385;
	var0012 = 0x0243;
	var0013 = 0x0002;
	if (!(var0005 > 0x0001)) goto labelFunc0843_0361;
	message("\"How many pairs of leather gloves wouldst thou care to sell?\"");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0005, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_0319;
	goto labelFunc0843_0361;
labelFunc0843_0319:
	var0013 = (0x0002 * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_033A;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_033A:
	message("\"");
	message(var0011);
	message("\"");
	say();
	message("\"Hmmm... for thy ");
	message(var0014);
	message(" pairs of leather gloves I can offer thee ");
	message(var0013);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	goto labelFunc0843_0385;
labelFunc0843_0361:
	message("\"");
	message(var0010);
	message("\"");
	say();
	message("\"I can pay thee ");
	message(var0013);
	message(" monetari for a pair of leather gloves.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	var0014 = 0x0001;
labelFunc0843_0385:
	if (!(var000C == "leather boots")) goto labelFunc0843_043B;
	var0012 = 0x024B;
	var0013 = 0x0004;
	if (!(var0006 > 0x0001)) goto labelFunc0843_0411;
	message("\"So, how many pairs of leather boots wouldst thou like to sell?\"");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_03C9;
	goto labelFunc0843_0411;
labelFunc0843_03C9:
	var0013 = (0x0004 * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_03EA;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_03EA:
	message("\"");
	message(var0011);
	message("\"");
	say();
	message("\"I can give ");
	message(var0013);
	message(" monetari for thy ");
	message(var0014);
	message(" pairs of leather boots.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	goto labelFunc0843_0435;
labelFunc0843_0411:
	message("\"");
	message(var0010);
	message("\"");
	say();
	message("\"For this pair of leather boots I can offer ");
	message(var0013);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	var0014 = 0x0001;
labelFunc0843_0435:
	var000B = 0x0000;
labelFunc0843_043B:
	if (!(var000C == "leather helm")) goto labelFunc0843_04F1;
	var0012 = 0x03EC;
	var0013 = 0x0005;
	if (!(var0007 > 0x0001)) goto labelFunc0843_04C7;
	message("\"Well, how many leather helms wouldst thou care to sell?\"");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_047F;
	goto labelFunc0843_04C7;
labelFunc0843_047F:
	var0013 = (0x0005 * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_04A0;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_04A0:
	message("\"");
	message(var0011);
	message("\"");
	say();
	message("\"Thy ");
	message(var0014);
	message(" leather helms will give thee ");
	message(var0013);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	goto labelFunc0843_04EB;
labelFunc0843_04C7:
	message("\"");
	message(var0010);
	message("\"");
	say();
	message("\"I can offer ");
	message(var0013);
	message(" monetari for this leather helm.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	var0014 = 0x0001;
labelFunc0843_04EB:
	var000B = 0x0000;
labelFunc0843_04F1:
	if (!(var000C == "leather leggings")) goto labelFunc0843_05A1;
	var0012 = 0x023E;
	var0013 = 0x000A;
	if (!(var0008 > 0x0001)) goto labelFunc0843_057D;
	message("\"How many pairs of leather leggings wouldst thou like to sell?\"");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0008, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_0535;
	goto labelFunc0843_057D;
labelFunc0843_0535:
	var0013 = (0x000A * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_0556;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_0556:
	message("\"");
	message(var0011);
	message("\"");
	say();
	message("\"Thy ");
	message(var0014);
	message(" pairs of leather leggings will give thee ");
	message(var0013);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	goto labelFunc0843_05A1;
labelFunc0843_057D:
	message("\"");
	message(var0010);
	message("\"");
	say();
	message("\"So be it, I will buy thy pair of leather leggings from thee for ");
	message(var0013);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000E);
	message("\"");
	say();
	var0014 = 0x0001;
labelFunc0843_05A1:
	if (!Func0955()) goto labelFunc0843_05D7;
	var0015 = UI_remove_party_items(var0014, var0012, 0xFE99, var000B, true);
	var0015 = Func099B(0xFE9C, var0013, var0003, 0xFE99, 0xFE99, 0x0000, true);
	goto labelFunc0843_05DB;
labelFunc0843_05D7:
	message("\"If thou dost not want to sell, 'tis fine by me.\"");
	say();
labelFunc0843_05DB:
	message("\"Dost thou wish to sell more items?\"");
	say();
	var0002 = Func0955();
labelFunc0843_05E5:
	goto labelFunc0843_05F0;
labelFunc0843_05E8:
	message("\"Thou dost not have anything that I want to buy!\"");
	say();
	var0002 = false;
labelFunc0843_05F0:
	goto labelFunc0843_002B;
labelFunc0843_05F3:
	UI_pop_answers();
	return;
}


