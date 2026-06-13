#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0868 0x868 ()
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
	var var0016;
	var var0017;

	var0000 = "friend";
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0001)) goto labelFunc0868_0020;
	var0000 = "stranger";
labelFunc0868_0020:
	var0002 = "Friend";
	if (!UI_is_pc_female()) goto labelFunc0868_0033;
	var0002 = "Milady";
labelFunc0868_0033:
	UI_push_answers();
	var0003 = true;
	var0004 = 0x03B7;
	message("\"I am interested only in buying plate, chain, or scale armour, plate or chain leggings, and great or crested helms.\"");
	say();
labelFunc0868_0045:
	if (!var0003) goto labelFunc0868_079D;
	var0005 = UI_count_objects(0xFE9B, 0x023A, 0xFE99, 0xFE99);
	var0006 = UI_count_objects(0xFE9B, 0x023B, 0xFE99, 0xFE99);
	var0007 = UI_count_objects(0xFE9B, 0x023D, 0xFE99, 0xFE99);
	var0008 = UI_count_objects(0xFE9B, 0x023F, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x0240, 0xFE99, 0xFE99);
	var000A = UI_count_objects(0xFE9B, 0x021D, 0xFE99, 0xFE99);
	var000B = UI_count_objects(0xFE9B, 0x021E, 0xFE99, 0xFE99);
	var000C = ["nothing"];
	var000D = false;
	if (!var0005) goto labelFunc0868_00F1;
	var000C = (var000C & "scale armour");
	var000D = true;
labelFunc0868_00F1:
	if (!var0006) goto labelFunc0868_0105;
	var000C = (var000C & "chain armour");
	var000D = true;
labelFunc0868_0105:
	if (!var0007) goto labelFunc0868_0119;
	var000C = (var000C & "plate armour");
	var000D = true;
labelFunc0868_0119:
	if (!var0008) goto labelFunc0868_012D;
	var000C = (var000C & "chain leggings");
	var000D = true;
labelFunc0868_012D:
	if (!var0009) goto labelFunc0868_0141;
	var000C = (var000C & "plate leggings");
	var000D = true;
labelFunc0868_0141:
	if (!var000A) goto labelFunc0868_0155;
	var000C = (var000C & "great helm");
	var000D = true;
labelFunc0868_0155:
	if (!var000B) goto labelFunc0868_0169;
	var000C = (var000C & "crested helm");
	var000D = true;
labelFunc0868_0169:
	if (!(var000D == true)) goto labelFunc0868_0792;
	message("\"What dost thou care to sell, friend?\"");
	say();
	var000E = Func0956(var000C);
	if (!(var000E == "nothing")) goto labelFunc0868_0193;
	message("\"As thou dost wish.\"");
	say();
	var0003 = false;
	goto labelFunc0868_078F;
labelFunc0868_0193:
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0868_01B0;
	var0010 = "Dost thou accept?";
labelFunc0868_01B0:
	if (!(var000F == 0x0002)) goto labelFunc0868_01C0;
	var0010 = "Wilt thou sell at my price?";
labelFunc0868_01C0:
	if (!(var000F == 0x0003)) goto labelFunc0868_01D0;
	var0010 = "Dost thou find the price agreeable?";
labelFunc0868_01D0:
	if (!(var000F == 0x0004)) goto labelFunc0868_01E4;
	var0010 = (var0002 + ", dost thou agree?");
labelFunc0868_01E4:
	if (!(var000F == 0x0005)) goto labelFunc0868_01F8;
	var0010 = (var0002 + ", is the price acceptable?");
labelFunc0868_01F8:
	var0011 = UI_die_roll(0x0001, 0x0005);
	if (!(var0011 == 0x0001)) goto labelFunc0868_021B;
	var0012 = "Hmmm... I am not sure.";
	var0013 = "Well... these are not the best of wares.";
labelFunc0868_021B:
	if (!(var0011 == 0x0002)) goto labelFunc0868_0231;
	var0012 = "It doth have rust on it!";
	var0013 = "They are rusted!";
labelFunc0868_0231:
	if (!(var0011 == 0x0003)) goto labelFunc0868_0247;
	var0012 = "It is not in very good condition.";
	var0013 = "They are not in very good condition.";
labelFunc0868_0247:
	if (!(var0011 == 0x0004)) goto labelFunc0868_0265;
	var0012 = (var0002 + ", this will take weeks to repair!");
	var0013 = (var0002 + ", these will take weeks to repair!");
labelFunc0868_0265:
	if (!(var0011 == 0x0005)) goto labelFunc0868_027B;
	var0012 = "Where didst thou find this -- buried under the ground?";
	var0013 = "Where didst thou find these -- moldering under the ground?";
labelFunc0868_027B:
	if (!(var000E == "scale armour")) goto labelFunc0868_032B;
	var0014 = 0x023A;
	var0015 = 0x001E;
	if (!(var0005 > 0x0001)) goto labelFunc0868_0307;
	message("\"How many suits of scale armour wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0005, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_02BF;
	goto labelFunc0868_0307;
labelFunc0868_02BF:
	var0015 = (0x001E * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_02E0;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_02E0:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"Very well, I will buy thy ");
	message(var0016);
	message(" suits of scale armour from thee for ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_032B;
labelFunc0868_0307:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"Very well, I will buy this scale armour from thee for ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_032B:
	if (!(var000E == "chain armour")) goto labelFunc0868_03DB;
	var0014 = 0x023B;
	var0015 = 0x0032;
	if (!(var0006 > 0x0001)) goto labelFunc0868_03B7;
	message("\"How many suits of chain armour wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_036F;
	goto labelFunc0868_03B7;
labelFunc0868_036F:
	var0015 = (0x0032 * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0390;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0390:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"Hmmm... I suppose I could buy thy ");
	message(var0016);
	message(" suits of chain armour from thee for ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_03DB;
labelFunc0868_03B7:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"I suppose I could pay thee ");
	message(var0015);
	message(" monetari for a suit of chain armour.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_03DB:
	if (!(var000E == "plate armour")) goto labelFunc0868_048B;
	var0014 = 0x023D;
	var0015 = 0x004B;
	if (!(var0007 > 0x0001)) goto labelFunc0868_0467;
	message("\"How many suits of plate armour wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_041F;
	goto labelFunc0868_0467;
labelFunc0868_041F:
	var0015 = (0x004B * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0440;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0440:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"I will give thee ");
	message(var0015);
	message(" monetari for thy ");
	message(var0016);
	message(" suits of plate armour.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_048B;
labelFunc0868_0467:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"For this plate armour, I can offer ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_048B:
	if (!(var000E == "chain leggings")) goto labelFunc0868_053B;
	var0014 = 0x023F;
	var0015 = 0x0019;
	if (!(var0008 > 0x0001)) goto labelFunc0868_0517;
	message("\"How many pairs of chain leggings wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0008, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_04CF;
	goto labelFunc0868_0517;
labelFunc0868_04CF:
	var0015 = (0x0019 * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_04F0;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_04F0:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"Hmmm... perhaps I can give thee ");
	message(var0015);
	message(" monetari for thy ");
	message(var0016);
	message(" pairs of chain leggings.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_053B;
labelFunc0868_0517:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"So be it, I will offer ");
	message(var0015);
	message(" monetari for the chain leggings.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_053B:
	if (!(var000E == "plate leggings")) goto labelFunc0868_05EB;
	var0014 = 0x0240;
	var0015 = 0x002D;
	if (!(var0009 > 0x0001)) goto labelFunc0868_05C7;
	message("\"And how many pairs of plate leggings wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0009, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_057F;
	goto labelFunc0868_05C7;
labelFunc0868_057F:
	var0015 = (0x002D * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_05A0;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_05A0:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"For thy ");
	message(var0016);
	message(" pairs of plate leggings, I can give thee ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_05EB;
labelFunc0868_05C7:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"");
	message(var0015);
	message(" monetari is what I can give thee for the pair of plate leggings.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_05EB:
	if (!(var000E == "great helm")) goto labelFunc0868_069B;
	var0014 = 0x021D;
	var0015 = 0x0014;
	if (!(var000A > 0x0001)) goto labelFunc0868_0677;
	message("\"How many great helms wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var000A, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_062F;
	goto labelFunc0868_0677;
labelFunc0868_062F:
	var0015 = (0x0014 * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0650;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0650:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"Very well...\" ~\"I can offer thee ");
	message(var0015);
	message(" monetari for thy ");
	message(var0016);
	message(" great helms.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_069B;
labelFunc0868_0677:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"Very well, I will buy thy great helm for ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_069B:
	if (!(var000E == "crested helm")) goto labelFunc0868_074B;
	var0014 = 0x021E;
	var0015 = 0x000A;
	if (!(var000B > 0x0001)) goto labelFunc0868_0727;
	message("\"How many crested helms wouldst thou care to sell?\"");
	say();
	var0016 = UI_input_numeric_value(0x0000, var000B, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_06DF;
	goto labelFunc0868_0727;
labelFunc0868_06DF:
	var0015 = (0x000A * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0700;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0700:
	message("\"");
	message(var0013);
	message("\"");
	say();
	message("\"I suppose I can give thee ");
	message(var0015);
	message(" monetari for thy ");
	message(var0016);
	message(" crested helms.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	goto labelFunc0868_074B;
labelFunc0868_0727:
	message("\"");
	message(var0012);
	message("\"");
	say();
	message("\"For this crested helm, I can give thee ");
	message(var0015);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0016 = 0x0001;
labelFunc0868_074B:
	if (!Func0955()) goto labelFunc0868_0781;
	var0017 = UI_remove_party_items(var0016, var0014, 0xFE99, 0xFE99, true);
	var0017 = Func099B(0xFE9C, var0015, var0004, 0xFE99, 0xFE99, 0x0000, true);
	goto labelFunc0868_0785;
labelFunc0868_0781:
	message("\"Thy loss, then.\"");
	say();
labelFunc0868_0785:
	message("\"Dost thou wish to sell more armour?\"");
	say();
	var0003 = Func0955();
labelFunc0868_078F:
	goto labelFunc0868_079A;
labelFunc0868_0792:
	message("\"Thou dost not have anything that I care to purchase!\"");
	say();
	var0003 = false;
labelFunc0868_079A:
	goto labelFunc0868_0045;
labelFunc0868_079D:
	UI_pop_answers();
	return;
}


