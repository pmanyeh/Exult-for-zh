#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0876 0x876 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0953();
	var0001 = (("I am " + var0000) + ".");
	if (!(!gflags[0x01FE])) goto labelFunc0876_0082;
	var0002 = UI_get_item_flag(0xFF56, 0x001C);
	if (!var0002) goto labelFunc0876_0035;
	message("\"To be asking what you want with Zhelkas, ruler of Gargoyles! To be thinking how sad and sorry you look as you cower over to speak. To be telling you to be brave!  To be telling you to have pride.  To be telling you announce yourself.\"");
	say();
	goto labelFunc0876_0047;
labelFunc0876_0035:
	message("\"To be called ruler of gargoyles. To respond to Zhelkas. To mean `Iron Helm.'\"");
	say();
	message("\"To ask who you are and why you are here.\"");
	say();
	UI_set_item_flag(0xFF56, 0x001C);
labelFunc0876_0047:
	UI_add_answer([var0001, "I am the Avatar.", "I am lost..."]);
	if (!(!gflags[0x02DA])) goto labelFunc0876_007F;
	gflags[0x02DA] = true;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0064);
labelFunc0876_007F:
	goto labelFunc0876_00E0;
labelFunc0876_0082:
	message("\"To be glad to see you again, ");
	message(var0000);
	message(". To inquire what you seek from the Gargoyles this day.\"");
	say();
	UI_add_answer(["information", "aid"]);
	if (!(gflags[0x0278] == true)) goto labelFunc0876_00A8;
	UI_add_answer("Serpent Staff");
labelFunc0876_00A8:
	if (!(gflags[0x01FB] && (!gflags[0x01FA]))) goto labelFunc0876_00BA;
	UI_add_answer("explain test");
labelFunc0876_00BA:
	if (!(gflags[0x0201] || (gflags[0x01EB] && (gflags[0x01EC] && gflags[0x01ED])))) goto labelFunc0876_00E0;
	UI_add_answer("leave Furnace");
	if (!gflags[0x01FF]) goto labelFunc0876_00E0;
	UI_remove_answer("leave Furnace");
labelFunc0876_00E0:
	return;
}


