#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08E3 0x8E3 ();

void Func07F4 object#(0x7F4) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!gflags[0x00E3]) goto labelFunc07F4_0029;
	var0000 = Func0992(0x0001, "@'Twas green!@", "@That was green.@", true);
	goto labelFunc07F4_0093;
labelFunc07F4_0029:
	if (!(gflags[0x0121] && (gflags[0x0122] && (!gflags[0x0123])))) goto labelFunc07F4_003E;
	Func08E3();
	goto labelFunc07F4_0093;
labelFunc07F4_003E:
	if (!(var0000 != 0xFE9C)) goto labelFunc07F4_0089;
	UI_show_npc_face0(var0000, 0x0000);
	if (!gflags[0x0123]) goto labelFunc07F4_0082;
	var0001 = ["@It took one item, but left another!@", "@The object hath been turned into something else!@", "@Look! A metamorphosis!@"];
	var0002 = var0001[UI_get_random(UI_get_array_size(var0001))];
	message(var0002);
	message("");
	say();
	goto labelFunc07F4_0086;
labelFunc07F4_0082:
	message("\"What a strange color -- a greenish bolt, I'd say.\"");
	say();
labelFunc07F4_0086:
	goto labelFunc07F4_0093;
labelFunc07F4_0089:
	UI_item_say(0xFE9C, "@Green lightning!@");
labelFunc07F4_0093:
	gflags[0x0123] = true;
	return;
}


