#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08E3 0x8E3 ();

void Func07F3 object#(0x7F3) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!gflags[0x00E3]) goto labelFunc07F3_0029;
	var0000 = Func0992(0x0001, "@That strike was yellow!@", "@Yellow lightning!@", true);
	goto labelFunc07F3_0093;
labelFunc07F3_0029:
	if (!(gflags[0x0121] && (gflags[0x0123] && (!gflags[0x0122])))) goto labelFunc07F3_003E;
	Func08E3();
	goto labelFunc07F3_0093;
labelFunc07F3_003E:
	if (!(var0000 != 0xFE9C)) goto labelFunc07F3_0089;
	UI_show_npc_face0(var0000, 0x0000);
	if (!gflags[0x0122]) goto labelFunc07F3_0082;
	var0001 = ["@It is not safe here!@", "@Something new hath appeared!@", "@From where did that come?@"];
	var0002 = var0001[UI_get_random(UI_get_array_size(var0001))];
	message(var0002);
	message("");
	say();
	goto labelFunc07F3_0086;
labelFunc07F3_0082:
	message("\"Did anyone see that color? To be honest, I did not. The flash near blinded me!\"");
	say();
labelFunc07F3_0086:
	goto labelFunc07F3_0093;
labelFunc07F3_0089:
	UI_item_say(0xFE9C, "@Yellow lightning!@");
labelFunc07F3_0093:
	gflags[0x0122] = true;
	return;
}


