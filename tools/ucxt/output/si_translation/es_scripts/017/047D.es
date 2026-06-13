#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func047D object#(0x47D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc047D_000F;
	Func0809();
	abort;
labelFunc047D_000F:
	if (!(event == 0x0001)) goto labelFunc047D_0065;
	if (!gflags[0x024D]) goto labelFunc047D_0049;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Thou dost have the sceptre. My work is complete. I must rest. I have waited for thee for so long...\"*");
	say();
	var0000 = UI_delayed_execute_usecode_array(0xFF83, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x000F);
	abort;
	goto labelFunc047D_0065;
labelFunc047D_0049:
	UI_item_say(0xFE9C, "@Hold there, Automaton!@");
	Func097F(item, "@I would speak with thee...@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc047D_0065:
	if (!(event == 0x0009)) goto labelFunc047D_0129;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Hierophant! Thou hast returned!\"");
	say();
	message("\"But, thou art not the Hierophant. Pardon, mine energy is low.\"");
	say();
	message("\"I have been waiting since all of the citizens of this city left through the Wall of Lights for their new world. Since that time\tI have been carefully attending thy belongings...\" *\"Pardon. I mean, the Hierophant's belongings.\" *\"Before he led the people through the Wall of Lights, he gave me an item of extreme importance, the Serpent Sceptre.\"* \"I have been guarding it for centuries now.\"");
	say();
	var0001 = ["@This machine did mistake thee for the Hierophant, Avatar.@"];
	var0002 = ["@By the Virtues, it thought I was this Hierophant person.@"];
	var0000 = Func0992(0xFFFE, var0001, var0002, false);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Pardon, but did I just hear thou art the Hierophant? Is it true thou art the Hierophant of Order?\"");
	say();
	var0003 = Func0955();
	if (!var0003) goto labelFunc047D_011A;
	message("\"At long last thou hast returned! I have kept it safe for all the centuries since thou wert last here!\"");
	say();
	message("\"Hierophant, here is thy Serpent Sceptre!\"");
	say();
	gflags[0x024D] = true;
	var0000 = Func099B(0xFE9C, 0x0001, 0x039E, 0xFE99, 0x0000, 0x0000, true);
	message("\"It is good that I successfully carried out mine instructions.\" *\"Now, I must rest...\"");
	say();
	var0000 = UI_delayed_execute_usecode_array(0xFF83, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x000F);
	UI_set_schedule_type(0xFF83, 0x0014);
	abort;
	goto labelFunc047D_0129;
labelFunc047D_011A:
	message("\"Error! I have waited centuries for the Hierophant and to have almost given the Serpent Sceptre to a total stranger!\"* \"Error! To almost let the key to the Great Library fall into the wrong hands! I should have my works examined...\"* \"Begone! Thou art a hazard to the safety of the Great Library.\" *\"Now what was it that the Hierophant wanted...?\"");
	say();
	UI_set_schedule_type(0xFF83, 0x0014);
	abort;
labelFunc047D_0129:
	return;
}


