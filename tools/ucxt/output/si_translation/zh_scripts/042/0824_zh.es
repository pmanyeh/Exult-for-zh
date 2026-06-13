#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0824 0x824 ()
{
	var var0000;
	var var0001;

	message("\"A clothier named Sedrick has received an order to make five dresses, all with the same pattern. Sedrick has three designs of embroidered cloth laying on a table in his workroom.\"");
	say();
	message("\"Sedrick tells his apprentice to fetch five pieces of cloth with the same embroidered pattern. The lazy apprentice doesn't bother looking through the piles of cloth, he just\ttakes an armful.\"");
	say();
	message("\"Discounting pure luck, how many pieces of cloth would the apprentice have to grab to insure that Sedrick could make five dresses with the same embroidery pattern?\"");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x001E, 0x0001, 0x0000);
	if (!(var0000 == 0x000E)) goto labelFunc0824_0050;
	if (!(!gflags[0x0308])) goto labelFunc0824_0045;
	message("\"Verily, thou hath a good head upon thy shoulders!\"");
	say();
	gflags[0x030C] = true;
	var0001 = true;
	Func095D(0x012C);
	goto labelFunc0824_004D;
labelFunc0824_0045:
	message("\"Verily, thou hath a good head upon thy shoulders!\"");
	say();
	gflags[0x030C] = true;
labelFunc0824_004D:
	goto labelFunc0824_0054;
labelFunc0824_0050:
	message("\"I'm sorry, but that is not the correct answer.\"");
	say();
labelFunc0824_0054:
	return;
}


